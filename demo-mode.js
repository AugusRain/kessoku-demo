/* 静态演示模式：把前端的 /api 请求切到预录快照，页面无需后端也能完整展示。
 * 仅用于「静态演示包」，不参与真实运行。
 */
(function () {
  var MOCK = window.__KESSOKU_MOCK__ || {}
  var DEMO_TOKEN = 'demo-token'
  var USER = { id: 'demo-admin', username: 'admin', role: 'admin', roleLabel: '管理员' }

  // 自动登录：token 必须早于业务 bundle 读取，所以在本脚本里写入 sessionStorage
  try {
    if (!sessionStorage.getItem('kessoku_token')) sessionStorage.setItem('kessoku_token', DEMO_TOKEN)
  } catch (e) { /* 隐私模式下忽略 */ }

  function jsonResponse(data, status) {
    return new Response(JSON.stringify(data === undefined ? {} : data), {
      status: status || 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
  }

  function lookup(pathname) {
    if (pathname === '/api/auth/login') return { accessToken: DEMO_TOKEN, user: USER }
    if (pathname === '/api/auth/me') return USER
    if (Object.prototype.hasOwnProperty.call(MOCK, pathname)) return MOCK[pathname]
    var keys = Object.keys(MOCK)
    for (var i = 0; i < keys.length; i++) {
      if (pathname.indexOf(keys[i] + '/') === 0) return MOCK[keys[i]]
    }
    return {}
  }

  // 写操作的假响应：按钮点下去有像样的反馈，不出现 undefined
  var GAN_RESULT = {
    enabled: true,
    generatorMs: 137,
    source: 'demo-sample',
    originalUrl: '/api/gan/demo-images/factory.jpg',
    enhancedUrl: '/api/gan/demo-images/frame_01.jpg',
    metrics: { mae: 0.0418, psnrDb: 22.64, shapePreserved: true, identity: false },
  }

  function writeResponse(pathname) {
    if (pathname === '/api/gan/enhance') return GAN_RESULT
    if (pathname === '/api/simulation/scenario') return MOCK['/api/simulation/scenario'] || {}
    if (pathname.indexOf('/api/monitor/') === 0) return MOCK['/api/health'] || {}
    if (pathname.indexOf('/api/platform/checks/') === 0) return { ok: true, name: pathname.split('/')[4], status: 'passed', detail: '未执行' }
    return { ok: true, accepted: true }
  }

  // 允许部署在子路径：把绝对资源路径改成本页相对路径
  var ASSET_PREFIX = ['/models/', '/scenes/', '/draco/', '/demo/', '/forecast_fit/']

  function isAsset(pathname) {
    for (var i = 0; i < ASSET_PREFIX.length; i++) {
      if (pathname.indexOf(ASSET_PREFIX[i]) === 0) return true
    }
    return false
  }

  var rawFetch = window.fetch ? window.fetch.bind(window) : null
  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : (input && input.url) || ''
    var pathname = ''
    try { pathname = new URL(url, location.href).pathname } catch (e) { pathname = '' }

    if (pathname.indexOf('/api/') === 0) {
      var method = (init && init.method) || (input && input.method) || 'GET'
      if (method === 'GET' || method === 'HEAD') return Promise.resolve(jsonResponse(lookup(pathname)))
      return Promise.resolve(jsonResponse(writeResponse(pathname)))
    }
    if (isAsset(pathname) && rawFetch) return rawFetch('.' + pathname, init)
    return rawFetch ? rawFetch(input, init) : Promise.reject(new Error('fetch 不可用'))
  }

  // WebSocket 桩：不连接、不报错、不触发重连
  function FakeSocket() {
    this.readyState = 1
    this.url = ''
    var self = this
    setTimeout(function () { if (self.onopen) self.onopen({}) }, 0)
  }
  FakeSocket.prototype.send = function () {}
  FakeSocket.prototype.close = function () { this.readyState = 3 }
  FakeSocket.prototype.addEventListener = function () {}
  FakeSocket.prototype.removeEventListener = function () {}
  window.WebSocket = FakeSocket

  // 图片接口没有 fetch 可拦，用 MutationObserver 把 /api 图片换成本地快照
  var IMG = './mock-img/'
  var ganIndex = 0
  var l2Index = 0
  var handled = new WeakSet()

  function pickImage(src) {
    if (src.indexOf('/api/gan/demo-images/') >= 0) {
      return IMG + 'gan-' + (ganIndex++ % 6) + '.jpg'
    }
    if (src.indexOf('/api/vision/forecast/plot') >= 0) {
      if (src.indexOf('kind=deep') >= 0) return IMG + 'plot-deep.png'
      if (src.indexOf('kind=l3') >= 0) return IMG + 'plot-l3.png'
      return IMG + 'plot-l2-' + (l2Index++ % 3) + '.png'
    }
    if (src.indexOf('/api/stream/mjpeg') >= 0) return './demo/frame_01.jpg'
    return null
  }

  function rewrite(img) {
    if (handled.has(img)) return
    var src = img.getAttribute('src') || ''
    // 子路径部署：把 /scenes/xx、/demo/xx 之类的绝对路径改成本页相对
    if (src.charAt(0) === '/' && isAsset(src)) {
      handled.add(img)
      img.setAttribute('src', '.' + src)
      return
    }
    if (src.indexOf('/api/') < 0) return
    var next = pickImage(src)
    if (!next) return
    handled.add(img)
    img.setAttribute('src', next)
  }

  function scan(root) {
    if (!root || root.nodeType !== 1) return
    if (root.tagName === 'IMG') rewrite(root)
    var imgs = root.querySelectorAll ? root.querySelectorAll('img') : []
    for (var i = 0; i < imgs.length; i++) rewrite(imgs[i])
  }

  var observer = new MutationObserver(function (records) {
    records.forEach(function (record) {
      if (record.type === 'attributes') rewrite(record.target)
      else record.addedNodes.forEach(scan)
    })
  })

  function boot() {
    scan(document.body)
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] })
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot)
  else boot()
})()
