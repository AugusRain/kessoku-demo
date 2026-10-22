window.__KESSOKU_MOCK__={
 "/api/health": {
  "ok": true,
  "type": "monitor_status",
  "status": "idle",
  "videoId": "460ba86e6b2a49a1aab9b4eabe48aeeb",
  "videoName": "vc_detect_scene.mp4",
  "cameraName": "工地入口视觉传感器 01",
  "personCount": 0,
  "todayAlerts": 4,
  "visualSensorReady": true,
  "cloudAiConfigured": true,
  "cloudProvider": "local_yolo",
  "cloudModel": "ppe.pt",
  "cloudAiMessage": "云端 AI 服务已就绪",
  "visionCapabilities": {
   "provider": "local_yolo",
   "modelLabels": [],
   "unreachableViolations": [],
   "capabilityCheckAvailable": false,
   "trackingAvailable": false,
   "trackingError": null,
   "maskStatus": {
    "state": "uninitialized",
    "reason": "尚未执行推理",
    "withMask": 0,
    "detections": 0
   }
  },
  "redisConnected": false,
  "redisMessage": "Error 22 connecting to 127.0.0.1:6379. 远程计算机拒绝网络连接。.",
  "traccarConfigured": false,
  "traccarConnected": false,
  "traccarMessage": "Traccar 服务未配置，未上报任何位置",
  "scenario": {
   "id": "normal",
   "label": "正常作业",
   "available": [
    {
     "id": "normal",
     "label": "正常作业"
    },
    {
     "id": "gas_combustible_warning",
     "label": "可燃气体预警"
    },
    {
     "id": "gas_combustible_critical",
     "label": "可燃气体严重泄漏"
    },
    {
     "id": "gas_toxic_exposure",
     "label": "有毒气体暴露"
    },
    {
     "id": "dust_risk",
     "label": "现场粉尘风险"
    },
    {
     "id": "high_work_risk",
     "label": "高处作业气象风险"
    },
    {
     "id": "geofence_breach",
     "label": "电子围栏越界"
    },
    {
     "id": "sensor_fault",
     "label": "传感器增益衰减"
    }
   ]
  },
  "reportAiConfigured": true,
  "reportProvider": "deepseek",
  "reportModel": "deepseek-chat",
  "fireRisk": {
   "score": 9.9,
   "level": "正常",
   "factors": {
    "gas": 0.052,
    "co": 0.052,
    "dust": 0.383,
    "temperature": 0.083,
    "temperatureRise": 0,
    "humidity": 0.333,
    "wind": 0.313
   },
   "inputs": {
    "combustible_lel_percent": 0.3,
    "co_ppm": 1.3,
    "pm10_ug_m3": 25.3,
    "temperature_c": 27.9,
    "rise_c_per_min": 0,
    "humidity_percent": 60,
    "wind_kph": 17.5
   }
  },
  "unifiedSensor": {
   "enabled": true,
   "risk_level": 0.099,
   "rounds": 85,
   "budget": 2,
   "active_channels": [
    "gas",
    "temp"
   ],
   "sampling_saving": 0.5,
   "reporting_saving": 0.8512,
   "bandwidth_saving": 0.902,
   "encountered": 336,
   "fused": 168,
   "trigger_total": 50,
   "trigger_rate": 0.1488,
   "ell_hat": {
    "gas": 1,
    "co": 1,
    "dust": 1,
    "temp": 1,
    "humidity": 1,
    "wind": 1
   },
   "state_estimate": {
    "gas": 0.2753,
    "co": 1.7107,
    "dust": 31.7172,
    "temp": 27.8679,
    "dT": 0
   },
   "cov_trace": 14.338,
   "total_rounds": 85,
   "activeSensors": [
    "gas",
    "temp"
   ],
   "triggered": [
    "dust"
   ]
  }
 },
 "/api/sensors": [
  {
   "id": "vision_entrance_01",
   "type": "vision.cloud",
   "enabled": true,
   "status": "online",
   "state": "idle",
   "source": "vc_detect_scene.mp4",
   "rtspReserved": false,
   "cloudAiConfigured": true,
   "cloudProvider": "local_yolo",
   "cloudModel": "ppe.pt",
   "lastError": null,
   "analytics": {
    "temporalGate": true,
    "corridorRoi": "entrance-corridor",
    "minimumHits": 3
   },
   "capabilities": {
    "provider": "local_yolo",
    "modelLabels": [],
    "unreachableViolations": [],
    "capabilityCheckAvailable": false,
    "trackingAvailable": false,
    "trackingError": null,
    "maskStatus": {
     "state": "uninitialized",
     "reason": "尚未执行推理",
     "withMask": 0,
     "detections": 0
    }
   },
   "latest": null
  },
  {
   "id": "weather_macau_reference_01",
   "type": "weather.open_meteo",
   "enabled": true,
   "status": "online",
   "state": "degraded",
   "source": "澳门区域天气参考",
   "origin": "external_reference",
   "lastError": "公共数据请求失败: ConnectError",
   "latest": null
  },
  {
   "id": "air_quality_macau_reference_01",
   "type": "air_quality.open_meteo",
   "enabled": true,
   "status": "online",
   "state": "degraded",
   "source": "澳门区域空气背景",
   "origin": "external_reference",
   "lastError": "公共数据请求失败: ConnectError",
   "latest": null
  },
  {
   "id": "gas_demo_01",
   "type": "gas.simulator",
   "enabled": true,
   "status": "online",
   "state": "simulating",
   "source": "气体浓度模拟节点",
   "origin": "simulation",
   "lastError": null,
   "latest": {
    "sensor_id": "gas_demo_01",
    "timestamp": "2026-10-22T12:50:09.234361+00:00",
    "observed_at": "2026-10-22T12:50:09.234361+00:00",
    "retrieved_at": "2026-10-22T12:50:09.234361+00:00",
    "data_type": "gas_reading",
    "value": {
     "combustible_lel_percent": 0.3,
     "co_ppm": 1.3
    },
    "unit": null,
    "confidence": 1,
    "metadata": {
     "site": "澳门演示工地",
     "scenario": "normal",
     "scenarioLabel": "正常作业",
     "demoThresholdsOnly": true
    },
    "origin": "simulation",
    "source_name": "Kessoku 可控演示场景",
    "quality": "simulated",
    "freshness_seconds": 0,
    "latitude": null,
    "longitude": null
   }
  },
  {
   "id": "dust_demo_01",
   "type": "dust.simulator",
   "enabled": true,
   "status": "online",
   "state": "simulating",
   "source": "现场粉尘模拟节点",
   "origin": "simulation",
   "lastError": null,
   "latest": {
    "sensor_id": "dust_demo_01",
    "timestamp": "2026-10-22T12:50:09.234487+00:00",
    "observed_at": "2026-10-22T12:50:09.234487+00:00",
    "retrieved_at": "2026-10-22T12:50:09.234487+00:00",
    "data_type": "onsite_dust",
    "value": {
     "pm10_ug_m3": 25.3
    },
    "unit": "ug/m3",
    "confidence": 1,
    "metadata": {
     "site": "澳门演示工地",
     "scenario": "normal",
     "scenarioLabel": "正常作业",
     "demoThresholdsOnly": true
    },
    "origin": "simulation",
    "source_name": "Kessoku 可控演示场景",
    "quality": "simulated",
    "freshness_seconds": 0,
    "latitude": null,
    "longitude": null
   }
  },
  {
   "id": "temperature_demo_01",
   "type": "temperature.simulator",
   "enabled": true,
   "status": "online",
   "state": "simulating",
   "source": "现场温度模拟节点",
   "origin": "simulation",
   "lastError": null,
   "latest": {
    "sensor_id": "temperature_demo_01",
    "timestamp": "2026-10-22T12:50:09.234517+00:00",
    "observed_at": "2026-10-22T12:50:09.234517+00:00",
    "retrieved_at": "2026-10-22T12:50:09.234517+00:00",
    "data_type": "temperature",
    "value": {
     "temperature_c": 27.9,
     "rise_c_per_min": 0
    },
    "unit": "C",
    "confidence": 1,
    "metadata": {
     "site": "澳门演示工地",
     "scenario": "normal",
     "scenarioLabel": "正常作业",
     "demoThresholdsOnly": true
    },
    "origin": "simulation",
    "source_name": "Kessoku 可控演示场景",
    "quality": "simulated",
    "freshness_seconds": 0,
    "latitude": null,
    "longitude": null
   }
  },
  {
   "id": "height_demo_01",
   "type": "height.simulator",
   "enabled": true,
   "status": "online",
   "state": "simulating",
   "source": "高处作业模拟节点",
   "origin": "simulation",
   "lastError": null,
   "latest": {
    "sensor_id": "height_demo_01",
    "timestamp": "2026-10-22T12:50:09.234542+00:00",
    "observed_at": "2026-10-22T12:50:09.234542+00:00",
    "retrieved_at": "2026-10-22T12:50:09.234542+00:00",
    "data_type": "work_height",
    "value": {
     "relative_height_m": 0.5,
     "weather_override": null
    },
    "unit": "m",
    "confidence": 1,
    "metadata": {
     "site": "澳门演示工地",
     "scenario": "normal",
     "scenarioLabel": "正常作业",
     "demoThresholdsOnly": true
    },
    "origin": "simulation",
    "source_name": "Kessoku 可控演示场景",
    "quality": "simulated",
    "freshness_seconds": 0,
    "latitude": null,
    "longitude": null
   }
  },
  {
   "id": "position_demo_01",
   "type": "position.simulator",
   "enabled": true,
   "status": "online",
   "state": "simulating",
   "source": "人员定位模拟节点",
   "origin": "simulation",
   "lastError": null,
   "latest": {
    "sensor_id": "position_demo_01",
    "timestamp": "2026-10-22T12:50:09.234561+00:00",
    "observed_at": "2026-10-22T12:50:09.234561+00:00",
    "retrieved_at": "2026-10-22T12:50:09.234561+00:00",
    "data_type": "position",
    "value": {
     "workers": [
      {
       "worker_id": "W001",
       "name": "张三",
       "latitude": 22.1984859,
       "longitude": 113.543851,
       "normalized": {
        "x": 0.5777,
        "y": 0.2199
       }
      },
      {
       "worker_id": "W002",
       "name": "李四",
       "latitude": 22.1986403,
       "longitude": 113.543751,
       "normalized": {
        "x": 0.5008,
        "y": 0.3387
       }
      },
      {
       "worker_id": "W003",
       "name": "王五",
       "latitude": 22.1985658,
       "longitude": 113.5437301,
       "normalized": {
        "x": 0.4847,
        "y": 0.2814
       }
      }
     ],
     "count": 3
    },
    "unit": null,
    "confidence": 1,
    "metadata": {
     "site": "澳门演示工地",
     "scenario": "normal",
     "scenarioLabel": "正常作业",
     "demoThresholdsOnly": true
    },
    "origin": "simulation",
    "source_name": "Kessoku 可控演示场景",
    "quality": "simulated",
    "freshness_seconds": 0,
    "latitude": 22.1984859,
    "longitude": 113.543851
   }
  },
  {
   "id": "worker_health_01",
   "type": "health.simulator",
   "enabled": true,
   "status": "online",
   "state": "simulation",
   "source": "工人健康网关",
   "origin": "simulation",
   "workers": 3,
   "lastError": null,
   "latest": {
    "sensor_id": "worker_health_01",
    "timestamp": "2026-10-22T12:50:06.863390+00:00",
    "observed_at": "2026-10-22T12:50:06.863390+00:00",
    "retrieved_at": "2026-10-22T12:50:06.863390+00:00",
    "data_type": "worker_health",
    "value": {
     "workers": [
      {
       "worker_id": "W001",
       "name": "张三",
       "heart_rate_bpm": 68.6,
       "steps": 8312,
       "body_temp_c": 36.3,
       "blood_oxygen": 97.9,
       "imu_fall": false,
       "imu": {
        "accel_x": 0.13,
        "accel_y": -0.02,
        "accel_z": 9.67,
        "roll_deg": -1.6,
        "pitch_deg": 0,
        "yaw_deg": 284
       },
       "battery_percent": 98,
       "status": "normal"
      },
      {
       "worker_id": "W002",
       "name": "李四",
       "heart_rate_bpm": 77.6,
       "steps": 8449,
       "body_temp_c": 36.3,
       "blood_oxygen": 97.7,
       "imu_fall": false,
       "imu": {
        "accel_x": 0.08,
        "accel_y": -0.08,
        "accel_z": 9.74,
        "roll_deg": -1.4,
        "pitch_deg": 0.4,
        "yaw_deg": 324
       },
       "battery_percent": 95,
       "status": "normal"
      },
      {
       "worker_id": "W003",
       "name": "王五",
       "heart_rate_bpm": 87.7,
       "steps": 8586,
       "body_temp_c": 36.3,
       "blood_oxygen": 97.5,
       "imu_fall": false,
       "imu": {
        "accel_x": 0.02,
        "accel_y": -0.11,
        "accel_z": 9.8,
        "roll_deg": -1.2,
        "pitch_deg": 0.7,
        "yaw_deg": 4
       },
       "battery_percent": 92,
       "status": "normal"
      }
     ],
     "aggregate": {
      "avg_heart_rate": 78,
      "max_heart_rate": 87.7,
      "min_heart_rate": 68.6,
      "avg_body_temp": 36.3,
      "max_body_temp": 36.3,
      "avg_blood_oxygen": 97.7,
      "falls": 0,
      "num_abnormal": 0,
      "workers_count": 3
     },
     "scenario": "normal"
    },
    "unit": null,
    "confidence": 0.9,
    "metadata": {
     "site": "澳门演示工地",
     "scenario": "normal",
     "scenarioLabel": "正常作业",
     "hardware": false,
     "demoThresholdsOnly": true
    },
    "origin": "simulation",
    "source_name": "工人健康网关",
    "quality": "simulated",
    "freshness_seconds": 0,
    "latitude": null,
    "longitude": null
   }
  },
  {
   "id": "site_grid_01",
   "type": "grid.simulator",
   "enabled": true,
   "status": "online",
   "state": "simulating",
   "source": "工地局部电网",
   "origin": "simulation",
   "ratedPowerKw": 180,
   "lastError": null,
   "latest": {
    "sensor_id": "site_grid_01",
    "timestamp": "2026-10-22T12:50:06.226217+00:00",
    "observed_at": "2026-10-22T12:50:06.226217+00:00",
    "retrieved_at": "2026-10-22T12:50:06.226217+00:00",
    "data_type": "grid_status",
    "value": {
     "voltage_l1_v": 371,
     "voltage_l2_v": 368.6,
     "voltage_l3_v": 367.8,
     "current_a": 190.1,
     "power_kw": 112,
     "frequency_hz": 50.01,
     "power_factor": 0.88,
     "load_percent": 62.2,
     "panel_temp_c": 40.7,
     "energy_kwh": 12992,
     "source": "mains",
     "rated_power_kw": 180,
     "status": "normal"
    },
    "unit": null,
    "confidence": 0.92,
    "metadata": {
     "site": "澳门演示工地",
     "scenario": "normal",
     "scenarioLabel": "正常作业",
     "hardware": false,
     "demoThresholdsOnly": true
    },
    "origin": "simulation",
    "source_name": "工地局部电网",
    "quality": "simulated",
    "freshness_seconds": 0,
    "latitude": null,
    "longitude": null
   }
  },
  {
   "id": "wind_site_01",
   "type": "wind.simulator",
   "enabled": true,
   "status": "online",
   "state": "fallback",
   "source": "现场风速计",
   "origin": "simulation",
   "gpio_pin": null,
   "lastError": "RPi.GPIO 未安装，实体风速计不可用",
   "latest": {
    "sensor_id": "wind_site_01",
    "timestamp": "2026-10-22T12:50:07.548428+00:00",
    "observed_at": "2026-10-22T12:50:07.548428+00:00",
    "retrieved_at": "2026-10-22T12:50:07.548428+00:00",
    "data_type": "wind_speed",
    "value": {
     "speed_mps": 4.87,
     "direction_deg": 309
    },
    "unit": "m/s",
    "confidence": 0.9,
    "metadata": {
     "hardware": false,
     "sensor": "WindSensor",
     "gpio_pin": null,
     "scenario": "normal",
     "fallbackReason": "RPi.GPIO 未安装，实体风速计不可用"
    },
    "origin": "simulation",
    "source_name": "现场风速计",
    "quality": "degraded",
    "freshness_seconds": 0,
    "latitude": null,
    "longitude": null
   }
  }
 ],
 "/api/telemetry/latest": [
  {
   "sensor_id": "position_demo_01",
   "timestamp": "2026-10-22T12:50:09.234561+00:00",
   "observed_at": "2026-10-22T12:50:09.234561+00:00",
   "retrieved_at": "2026-10-22T12:50:09.234561+00:00",
   "data_type": "position",
   "value": {
    "workers": [
     {
      "worker_id": "W001",
      "name": "张三",
      "latitude": 22.1984859,
      "longitude": 113.543851,
      "normalized": {
       "x": 0.5777,
       "y": 0.2199
      }
     },
     {
      "worker_id": "W002",
      "name": "李四",
      "latitude": 22.1986403,
      "longitude": 113.543751,
      "normalized": {
       "x": 0.5008,
       "y": 0.3387
      }
     },
     {
      "worker_id": "W003",
      "name": "王五",
      "latitude": 22.1985658,
      "longitude": 113.5437301,
      "normalized": {
       "x": 0.4847,
       "y": 0.2814
      }
     }
    ],
    "count": 3
   },
   "unit": null,
   "confidence": 1,
   "metadata": {
    "site": "澳门演示工地",
    "scenario": "normal",
    "scenarioLabel": "正常作业",
    "demoThresholdsOnly": true
   },
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "quality": "simulated",
   "freshness_seconds": 0,
   "latitude": 22.1984859,
   "longitude": 113.543851
  },
  {
   "sensor_id": "height_demo_01",
   "timestamp": "2026-10-22T12:50:09.234542+00:00",
   "observed_at": "2026-10-22T12:50:09.234542+00:00",
   "retrieved_at": "2026-10-22T12:50:09.234542+00:00",
   "data_type": "work_height",
   "value": {
    "relative_height_m": 0.5,
    "weather_override": null
   },
   "unit": "m",
   "confidence": 1,
   "metadata": {
    "site": "澳门演示工地",
    "scenario": "normal",
    "scenarioLabel": "正常作业",
    "demoThresholdsOnly": true
   },
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "quality": "simulated",
   "freshness_seconds": 0,
   "latitude": null,
   "longitude": null
  },
  {
   "sensor_id": "temperature_demo_01",
   "timestamp": "2026-10-22T12:50:09.234517+00:00",
   "observed_at": "2026-10-22T12:50:09.234517+00:00",
   "retrieved_at": "2026-10-22T12:50:09.234517+00:00",
   "data_type": "temperature",
   "value": {
    "temperature_c": 27.9,
    "rise_c_per_min": 0
   },
   "unit": "C",
   "confidence": 1,
   "metadata": {
    "site": "澳门演示工地",
    "scenario": "normal",
    "scenarioLabel": "正常作业",
    "demoThresholdsOnly": true
   },
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "quality": "simulated",
   "freshness_seconds": 0,
   "latitude": null,
   "longitude": null
  },
  {
   "sensor_id": "dust_demo_01",
   "timestamp": "2026-10-22T12:50:09.234487+00:00",
   "observed_at": "2026-10-22T12:50:09.234487+00:00",
   "retrieved_at": "2026-10-22T12:50:09.234487+00:00",
   "data_type": "onsite_dust",
   "value": {
    "pm10_ug_m3": 25.3
   },
   "unit": "ug/m3",
   "confidence": 1,
   "metadata": {
    "site": "澳门演示工地",
    "scenario": "normal",
    "scenarioLabel": "正常作业",
    "demoThresholdsOnly": true
   },
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "quality": "simulated",
   "freshness_seconds": 0,
   "latitude": null,
   "longitude": null
  },
  {
   "sensor_id": "gas_demo_01",
   "timestamp": "2026-10-22T12:50:09.234361+00:00",
   "observed_at": "2026-10-22T12:50:09.234361+00:00",
   "retrieved_at": "2026-10-22T12:50:09.234361+00:00",
   "data_type": "gas_reading",
   "value": {
    "combustible_lel_percent": 0.3,
    "co_ppm": 1.3
   },
   "unit": null,
   "confidence": 1,
   "metadata": {
    "site": "澳门演示工地",
    "scenario": "normal",
    "scenarioLabel": "正常作业",
    "demoThresholdsOnly": true
   },
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "quality": "simulated",
   "freshness_seconds": 0,
   "latitude": null,
   "longitude": null
  },
  {
   "sensor_id": "wind_site_01",
   "timestamp": "2026-10-22T12:50:07.548428+00:00",
   "observed_at": "2026-10-22T12:50:07.548428+00:00",
   "retrieved_at": "2026-10-22T12:50:07.548428+00:00",
   "data_type": "wind_speed",
   "value": {
    "speed_mps": 4.87,
    "direction_deg": 309
   },
   "unit": "m/s",
   "confidence": 0.9,
   "metadata": {
    "hardware": false,
    "sensor": "WindSensor",
    "gpio_pin": null,
    "scenario": "normal",
    "fallbackReason": "RPi.GPIO 未安装，实体风速计不可用"
   },
   "origin": "simulation",
   "source_name": "现场风速计",
   "quality": "degraded",
   "freshness_seconds": 0,
   "latitude": null,
   "longitude": null
  },
  {
   "sensor_id": "worker_health_01",
   "timestamp": "2026-10-22T12:50:06.863390+00:00",
   "observed_at": "2026-10-22T12:50:06.863390+00:00",
   "retrieved_at": "2026-10-22T12:50:06.863390+00:00",
   "data_type": "worker_health",
   "value": {
    "workers": [
     {
      "worker_id": "W001",
      "name": "张三",
      "heart_rate_bpm": 68.6,
      "steps": 8312,
      "body_temp_c": 36.3,
      "blood_oxygen": 97.9,
      "imu_fall": false,
      "imu": {
       "accel_x": 0.13,
       "accel_y": -0.02,
       "accel_z": 9.67,
       "roll_deg": -1.6,
       "pitch_deg": 0,
       "yaw_deg": 284
      },
      "battery_percent": 98,
      "status": "normal"
     },
     {
      "worker_id": "W002",
      "name": "李四",
      "heart_rate_bpm": 77.6,
      "steps": 8449,
      "body_temp_c": 36.3,
      "blood_oxygen": 97.7,
      "imu_fall": false,
      "imu": {
       "accel_x": 0.08,
       "accel_y": -0.08,
       "accel_z": 9.74,
       "roll_deg": -1.4,
       "pitch_deg": 0.4,
       "yaw_deg": 324
      },
      "battery_percent": 95,
      "status": "normal"
     },
     {
      "worker_id": "W003",
      "name": "王五",
      "heart_rate_bpm": 87.7,
      "steps": 8586,
      "body_temp_c": 36.3,
      "blood_oxygen": 97.5,
      "imu_fall": false,
      "imu": {
       "accel_x": 0.02,
       "accel_y": -0.11,
       "accel_z": 9.8,
       "roll_deg": -1.2,
       "pitch_deg": 0.7,
       "yaw_deg": 4
      },
      "battery_percent": 92,
      "status": "normal"
     }
    ],
    "aggregate": {
     "avg_heart_rate": 78,
     "max_heart_rate": 87.7,
     "min_heart_rate": 68.6,
     "avg_body_temp": 36.3,
     "max_body_temp": 36.3,
     "avg_blood_oxygen": 97.7,
     "falls": 0,
     "num_abnormal": 0,
     "workers_count": 3
    },
    "scenario": "normal"
   },
   "unit": null,
   "confidence": 0.9,
   "metadata": {
    "site": "澳门演示工地",
    "scenario": "normal",
    "scenarioLabel": "正常作业",
    "hardware": false,
    "demoThresholdsOnly": true
   },
   "origin": "simulation",
   "source_name": "工人健康网关",
   "quality": "simulated",
   "freshness_seconds": 0,
   "latitude": null,
   "longitude": null
  },
  {
   "sensor_id": "site_grid_01",
   "timestamp": "2026-10-22T12:50:06.226217+00:00",
   "observed_at": "2026-10-22T12:50:06.226217+00:00",
   "retrieved_at": "2026-10-22T12:50:06.226217+00:00",
   "data_type": "grid_status",
   "value": {
    "voltage_l1_v": 371,
    "voltage_l2_v": 368.6,
    "voltage_l3_v": 367.8,
    "current_a": 190.1,
    "power_kw": 112,
    "frequency_hz": 50.01,
    "power_factor": 0.88,
    "load_percent": 62.2,
    "panel_temp_c": 40.7,
    "energy_kwh": 12992,
    "source": "mains",
    "rated_power_kw": 180,
    "status": "normal"
   },
   "unit": null,
   "confidence": 0.92,
   "metadata": {
    "site": "澳门演示工地",
    "scenario": "normal",
    "scenarioLabel": "正常作业",
    "hardware": false,
    "demoThresholdsOnly": true
   },
   "origin": "simulation",
   "source_name": "工地局部电网",
   "quality": "simulated",
   "freshness_seconds": 0,
   "latitude": null,
   "longitude": null
  }
 ],
 "/api/telemetry/stats": {
  "site": "macau_demo",
  "total": 750506,
  "oldest": "2026-08-04T13:08:26.240421+00:00",
  "newest": "2026-10-22T12:50:09.234561+00:00",
  "retentionDays": 14,
  "byType": [
   {
    "dataType": "gas_reading",
    "count": 105186
   },
   {
    "dataType": "onsite_dust",
    "count": 105181
   },
   {
    "dataType": "work_height",
    "count": 105175
   },
   {
    "dataType": "position",
    "count": 105171
   },
   {
    "dataType": "temperature",
    "count": 102805
   },
   {
    "dataType": "vision_detection",
    "count": 100800
   },
   {
    "dataType": "wind_speed",
    "count": 45564
   },
   {
    "dataType": "worker_health",
    "count": 40347
   },
   {
    "dataType": "grid_status",
    "count": 39695
   },
   {
    "dataType": "weather_reference",
    "count": 291
   },
   {
    "dataType": "air_quality_reference",
    "count": 291
   }
  ]
 },
 "/api/alerts": [
  {
   "id": "02ABCF7B63",
   "occurred_at": "2026-10-22T20:50:03+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_material_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1984656, \"longitude\": 113.5438267, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-10-22T12:50:02.994482+00:00\", \"observed_at\": \"2026-10-22T12:50:02.994482+00:00\", \"retrieved_at\": \"2026-10-22T12:50:02.994482+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984656, \"longitude\": 113.5438267, \"normalized\": {\"x\": 0.559, \"y\": 0.2043}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986423, \"longitude\": 113.5437602, \"normalized\": {\"x\": 0.5078, \"y\": 0.3402}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985644, \"longitude\": 113.5437209, \"normalized\": {\"x\": 0.4777, \"y\": 0.2803}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984656, \"longitude\": 113.5438267}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_material_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1984656,
    "longitude": 113.5438267,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-10-22T12:50:02.994482+00:00",
     "observed_at": "2026-10-22T12:50:02.994482+00:00",
     "retrieved_at": "2026-10-22T12:50:02.994482+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984656,
        "longitude": 113.5438267,
        "normalized": {
         "x": 0.559,
         "y": 0.2043
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986423,
        "longitude": 113.5437602,
        "normalized": {
         "x": 0.5078,
         "y": 0.3402
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985644,
        "longitude": 113.5437209,
        "normalized": {
         "x": 0.4777,
         "y": 0.2803
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984656,
     "longitude": 113.5438267
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "90F3B473C5",
   "occurred_at": "2026-10-22T20:47:35+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-10-22T12:47:35.142043+00:00\", \"observed_at\": \"2026-10-22T12:47:35.142043+00:00\", \"retrieved_at\": \"2026-10-22T12:47:35.142043+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.198607, \"longitude\": 113.5436348, \"normalized\": {\"x\": 0.4114, \"y\": 0.3131}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1989749, \"longitude\": 113.5440386, \"normalized\": {\"x\": 0.722, \"y\": 0.5961}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984435, \"longitude\": 113.5434052, \"normalized\": {\"x\": 0.2347, \"y\": 0.1873}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.198607, \"longitude\": 113.5436348}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-10-22T12:47:35.142043+00:00",
     "observed_at": "2026-10-22T12:47:35.142043+00:00",
     "retrieved_at": "2026-10-22T12:47:35.142043+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.198607,
        "longitude": 113.5436348,
        "normalized": {
         "x": 0.4114,
         "y": 0.3131
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1989749,
        "longitude": 113.5440386,
        "normalized": {
         "x": 0.722,
         "y": 0.5961
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984435,
        "longitude": 113.5434052,
        "normalized": {
         "x": 0.2347,
         "y": 0.1873
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.198607,
     "longitude": 113.5436348
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "F31202B622",
   "occurred_at": "2026-10-22T20:47:33+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：临时加工棚 D",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_shed_d\", \"zone_label\": \"临时加工棚 D\", \"latitude\": 22.1989905, \"longitude\": 113.5440462, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-10-22T12:47:33.075689+00:00\", \"observed_at\": \"2026-10-22T12:47:33.075689+00:00\", \"retrieved_at\": \"2026-10-22T12:47:33.075689+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986183, \"longitude\": 113.5436305, \"normalized\": {\"x\": 0.4081, \"y\": 0.3217}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1989905, \"longitude\": 113.5440462, \"normalized\": {\"x\": 0.7279, \"y\": 0.6081}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984356, \"longitude\": 113.543386, \"normalized\": {\"x\": 0.22, \"y\": 0.1812}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986183, \"longitude\": 113.5436305}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_shed_d",
    "zone_label": "临时加工棚 D",
    "latitude": 22.1989905,
    "longitude": 113.5440462,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-10-22T12:47:33.075689+00:00",
     "observed_at": "2026-10-22T12:47:33.075689+00:00",
     "retrieved_at": "2026-10-22T12:47:33.075689+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986183,
        "longitude": 113.5436305,
        "normalized": {
         "x": 0.4081,
         "y": 0.3217
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1989905,
        "longitude": 113.5440462,
        "normalized": {
         "x": 0.7279,
         "y": 0.6081
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984356,
        "longitude": 113.543386,
        "normalized": {
         "x": 0.22,
         "y": 0.1812
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986183,
     "longitude": 113.5436305
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "28D15314F1",
   "occurred_at": "2026-10-22T20:47:22+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_crane_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1986845, \"longitude\": 113.5436058, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-10-22T12:47:22.690371+00:00\", \"observed_at\": \"2026-10-22T12:47:22.690371+00:00\", \"retrieved_at\": \"2026-10-22T12:47:22.690371+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986845, \"longitude\": 113.5436058, \"normalized\": {\"x\": 0.3891, \"y\": 0.3727}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990797, \"longitude\": 113.54409, \"normalized\": {\"x\": 0.7616, \"y\": 0.6767}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984, \"longitude\": 113.5433, \"normalized\": {\"x\": 0.1538, \"y\": 0.1538}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986845, \"longitude\": 113.5436058}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_crane_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1986845,
    "longitude": 113.5436058,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-10-22T12:47:22.690371+00:00",
     "observed_at": "2026-10-22T12:47:22.690371+00:00",
     "retrieved_at": "2026-10-22T12:47:22.690371+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986845,
        "longitude": 113.5436058,
        "normalized": {
         "x": 0.3891,
         "y": 0.3727
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990797,
        "longitude": 113.54409,
        "normalized": {
         "x": 0.7616,
         "y": 0.6767
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984,
        "longitude": 113.5433,
        "normalized": {
         "x": 0.1538,
         "y": 0.1538
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986845,
     "longitude": 113.5436058
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "8983F60D2E",
   "occurred_at": "2026-10-01T00:09:55+08:00",
   "video_id": "460ba86e6b2a49a1aab9b4eabe48aeeb",
   "video_name": "vc_detect_scene.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.4748430550098419,
   "snapshot_name": "8983F60D2E.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.4748430550098419, \"bbox\": [516.0, 239.2, 635.4, 395.5], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 640, \"height\": 480}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.46}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-30T16:09:55.547285+00:00\", \"observed_at\": \"2026-09-30T16:09:55.547285+00:00\", \"retrieved_at\": \"2026-09-30T16:09:55.547285+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.4748430550098419, \"bbox\": [516.0, 239.2, 635.4, 395.5], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 640, \"height\": 480}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.46}}], \"detections\": [{\"label\": \"machinery\", \"confidence\": 0.8213187456130981, \"bbox\": [138.9, 279.3, 237.9, 422.9], \"track_id\": null}, {\"label\": \"person\", \"confidence\": 0.8182408213615417, \"bbox\": [44.4, 61.9, 86.0, 162.1], \"track_id\": null}, {\"label\": \"person\", \"confidence\": 0.8002427816390991, \"bbox\": [462.2, 26.4, 482.9, 67.3], \"track_id\": null}, {\"label\": \"person\", \"confidence\": 0.743950366973877, \"bbox\": [558.5, 299.8, 570.1, 317.7], \"track_id\": null}, {\"label\": \"person\", \"confidence\": 0.7005144357681274, \"bbox\": [165.0, 53.7, 203.9, 193.2], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.6808670163154602, \"bbox\": [527.8, 304.4, 614.2, 399.4], \"track_id\": null}, {\"label\": \"safety_vest\", \"confidence\": 0.6683829426765442, \"bbox\": [170.0, 65.4, 196.5, 130.5], \"track_id\": null}, {\"label\": \"hardhat\", \"confidence\": 0.5946269035339355, \"bbox\": [53.6, 64.0, 69.5, 81.4], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5654535889625549, \"bbox\": [400.6, 288.7, 499.9, 414.2], \"track_id\": null}, {\"label\": \"person\", \"confidence\": 0.5277164578437805, \"bbox\": [564.0, 297.1, 574.6, 314.1], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.4748430550098419, \"bbox\": [516.0, 239.2, 635.4, 395.5], \"track_id\": null}], \"person_count\": 5}, \"unit\": null, \"confidence\": 0.4748430550098419, \"metadata\": {\"source\": \"vc_detect_scene.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/8983F60D2E.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.4748430550098419,
     "bbox": [
      516,
      239.2,
      635.4,
      395.5
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 640,
      "height": 480
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 2.46
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-30T16:09:55.547285+00:00",
     "observed_at": "2026-09-30T16:09:55.547285+00:00",
     "retrieved_at": "2026-09-30T16:09:55.547285+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.4748430550098419,
        "bbox": [
         516,
         239.2,
         635.4,
         395.5
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 640,
         "height": 480
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 2.46
        }
       }
      ],
      "detections": [
       {
        "label": "machinery",
        "confidence": 0.8213187456130981,
        "bbox": [
         138.9,
         279.3,
         237.9,
         422.9
        ],
        "track_id": null
       },
       {
        "label": "person",
        "confidence": 0.8182408213615417,
        "bbox": [
         44.4,
         61.9,
         86,
         162.1
        ],
        "track_id": null
       },
       {
        "label": "person",
        "confidence": 0.8002427816390991,
        "bbox": [
         462.2,
         26.4,
         482.9,
         67.3
        ],
        "track_id": null
       },
       {
        "label": "person",
        "confidence": 0.743950366973877,
        "bbox": [
         558.5,
         299.8,
         570.1,
         317.7
        ],
        "track_id": null
       },
       {
        "label": "person",
        "confidence": 0.7005144357681274,
        "bbox": [
         165,
         53.7,
         203.9,
         193.2
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.6808670163154602,
        "bbox": [
         527.8,
         304.4,
         614.2,
         399.4
        ],
        "track_id": null
       },
       {
        "label": "safety_vest",
        "confidence": 0.6683829426765442,
        "bbox": [
         170,
         65.4,
         196.5,
         130.5
        ],
        "track_id": null
       },
       {
        "label": "hardhat",
        "confidence": 0.5946269035339355,
        "bbox": [
         53.6,
         64,
         69.5,
         81.4
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5654535889625549,
        "bbox": [
         400.6,
         288.7,
         499.9,
         414.2
        ],
        "track_id": null
       },
       {
        "label": "person",
        "confidence": 0.5277164578437805,
        "bbox": [
         564,
         297.1,
         574.6,
         314.1
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.4748430550098419,
        "bbox": [
         516,
         239.2,
         635.4,
         395.5
        ],
        "track_id": null
       }
      ],
      "person_count": 5
     },
     "unit": null,
     "confidence": 0.4748430550098419,
     "metadata": {
      "source": "vc_detect_scene.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "E82D105B46",
   "occurred_at": "2026-10-01T00:09:53+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_material_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1984486, \"longitude\": 113.5438253, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T16:09:53.651198+00:00\", \"observed_at\": \"2026-09-30T16:09:53.651198+00:00\", \"retrieved_at\": \"2026-09-30T16:09:53.651198+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985017, \"longitude\": 113.5437578, \"normalized\": {\"x\": 0.506, \"y\": 0.2321}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984829, \"longitude\": 113.543796, \"normalized\": {\"x\": 0.5354, \"y\": 0.2176}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984486, \"longitude\": 113.5438253, \"normalized\": {\"x\": 0.5579, \"y\": 0.1913}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985017, \"longitude\": 113.5437578}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_material_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1984486,
    "longitude": 113.5438253,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T16:09:53.651198+00:00",
     "observed_at": "2026-09-30T16:09:53.651198+00:00",
     "retrieved_at": "2026-09-30T16:09:53.651198+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985017,
        "longitude": 113.5437578,
        "normalized": {
         "x": 0.506,
         "y": 0.2321
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984829,
        "longitude": 113.543796,
        "normalized": {
         "x": 0.5354,
         "y": 0.2176
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984486,
        "longitude": 113.5438253,
        "normalized": {
         "x": 0.5579,
         "y": 0.1913
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985017,
     "longitude": 113.5437578
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "FCA8C4B605",
   "occurred_at": "2026-10-01T00:09:40+08:00",
   "video_id": "460ba86e6b2a49a1aab9b4eabe48aeeb",
   "video_name": "vc_detect_scene.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.7954695224761963,
   "snapshot_name": "FCA8C4B605.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.7954695224761963, \"bbox\": [138.6, 279.0, 236.6, 424.5], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 640, \"height\": 480}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.28}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-30T16:09:40.845365+00:00\", \"observed_at\": \"2026-09-30T16:09:40.845365+00:00\", \"retrieved_at\": \"2026-09-30T16:09:40.845365+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.7954695224761963, \"bbox\": [138.6, 279.0, 236.6, 424.5], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 640, \"height\": 480}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.28}}, {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.7142353653907776, \"bbox\": [527.8, 304.0, 612.9, 399.0], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 640, \"height\": 480}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.28}}], \"detections\": [{\"label\": \"person\", \"confidence\": 0.8254097700119019, \"bbox\": [45.8, 61.8, 86.3, 161.9], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.7954695224761963, \"bbox\": [138.6, 279.0, 236.6, 424.5], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.7523968815803528, \"bbox\": [415.1, 289.1, 498.6, 414.7], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.7142353653907776, \"bbox\": [527.8, 304.0, 612.9, 399.0], \"track_id\": null}, {\"label\": \"person\", \"confidence\": 0.6975957155227661, \"bbox\": [461.7, 29.3, 483.2, 66.9], \"track_id\": null}, {\"label\": \"person\", \"confidence\": 0.6909424662590027, \"bbox\": [164.6, 52.8, 203.6, 193.5], \"track_id\": null}, {\"label\": \"person\", \"confidence\": 0.6175334453582764, \"bbox\": [558.4, 299.1, 570.4, 316.0], \"track_id\": null}, {\"label\": \"hardhat\", \"confidence\": 0.5438078045845032, \"bbox\": [54.0, 63.9, 69.5, 81.0], \"track_id\": null}, {\"label\": \"person\", \"confidence\": 0.46750059723854065, \"bbox\": [563.5, 296.9, 573.9, 314.0], \"track_id\": null}, {\"label\": \"safety_vest\", \"confidence\": 0.45683249831199646, \"bbox\": [169.7, 61.2, 197.0, 130.3], \"track_id\": null}], \"person_count\": 5}, \"unit\": null, \"confidence\": 0.7954695224761963, \"metadata\": {\"source\": \"vc_detect_scene.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/FCA8C4B605.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.7954695224761963,
     "bbox": [
      138.6,
      279,
      236.6,
      424.5
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 640,
      "height": 480
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 2.28
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-30T16:09:40.845365+00:00",
     "observed_at": "2026-09-30T16:09:40.845365+00:00",
     "retrieved_at": "2026-09-30T16:09:40.845365+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.7954695224761963,
        "bbox": [
         138.6,
         279,
         236.6,
         424.5
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 640,
         "height": 480
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 2.28
        }
       },
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.7142353653907776,
        "bbox": [
         527.8,
         304,
         612.9,
         399
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 640,
         "height": 480
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 2.28
        }
       }
      ],
      "detections": [
       {
        "label": "person",
        "confidence": 0.8254097700119019,
        "bbox": [
         45.8,
         61.8,
         86.3,
         161.9
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.7954695224761963,
        "bbox": [
         138.6,
         279,
         236.6,
         424.5
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.7523968815803528,
        "bbox": [
         415.1,
         289.1,
         498.6,
         414.7
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.7142353653907776,
        "bbox": [
         527.8,
         304,
         612.9,
         399
        ],
        "track_id": null
       },
       {
        "label": "person",
        "confidence": 0.6975957155227661,
        "bbox": [
         461.7,
         29.3,
         483.2,
         66.9
        ],
        "track_id": null
       },
       {
        "label": "person",
        "confidence": 0.6909424662590027,
        "bbox": [
         164.6,
         52.8,
         203.6,
         193.5
        ],
        "track_id": null
       },
       {
        "label": "person",
        "confidence": 0.6175334453582764,
        "bbox": [
         558.4,
         299.1,
         570.4,
         316
        ],
        "track_id": null
       },
       {
        "label": "hardhat",
        "confidence": 0.5438078045845032,
        "bbox": [
         54,
         63.9,
         69.5,
         81
        ],
        "track_id": null
       },
       {
        "label": "person",
        "confidence": 0.46750059723854065,
        "bbox": [
         563.5,
         296.9,
         573.9,
         314
        ],
        "track_id": null
       },
       {
        "label": "safety_vest",
        "confidence": 0.45683249831199646,
        "bbox": [
         169.7,
         61.2,
         197,
         130.3
        ],
        "track_id": null
       }
      ],
      "person_count": 5
     },
     "unit": null,
     "confidence": 0.7954695224761963,
     "metadata": {
      "source": "vc_detect_scene.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "72E17358D8",
   "occurred_at": "2026-10-01T00:07:11+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "confirmed",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_material_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1985, \"longitude\": 113.543921, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T16:07:11.611772+00:00\", \"observed_at\": \"2026-09-30T16:07:11.611772+00:00\", \"retrieved_at\": \"2026-09-30T16:07:11.611772+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985, \"longitude\": 113.543921, \"normalized\": {\"x\": 0.6316, \"y\": 0.2308}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984401, \"longitude\": 113.5436764, \"normalized\": {\"x\": 0.4434, \"y\": 0.1847}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985913, \"longitude\": 113.5438151, \"normalized\": {\"x\": 0.5501, \"y\": 0.301}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985, \"longitude\": 113.543921}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_material_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1985,
    "longitude": 113.543921,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T16:07:11.611772+00:00",
     "observed_at": "2026-09-30T16:07:11.611772+00:00",
     "retrieved_at": "2026-09-30T16:07:11.611772+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985,
        "longitude": 113.543921,
        "normalized": {
         "x": 0.6316,
         "y": 0.2308
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984401,
        "longitude": 113.5436764,
        "normalized": {
         "x": 0.4434,
         "y": 0.1847
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985913,
        "longitude": 113.5438151,
        "normalized": {
         "x": 0.5501,
         "y": 0.301
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985,
     "longitude": 113.543921
    },
    "evidenceVersion": "v2"
   },
   "actions": [
    {
     "action": "confirmed",
     "note": null,
     "actor": "admin",
     "occurred_at": "2026-10-01T00:07:36+08:00"
    }
   ]
  },
  {
   "id": "34138EF1F5",
   "occurred_at": "2026-10-01T00:05:22+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "false_positive",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T16:05:22.632870+00:00\", \"observed_at\": \"2026-09-30T16:05:22.632870+00:00\", \"retrieved_at\": \"2026-09-30T16:05:22.632870+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986542, \"longitude\": 113.5436977, \"normalized\": {\"x\": 0.4598, \"y\": 0.3494}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1988308, \"longitude\": 113.5439272, \"normalized\": {\"x\": 0.6363, \"y\": 0.4852}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984181, \"longitude\": 113.5433487, \"normalized\": {\"x\": 0.1913, \"y\": 0.1678}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986542, \"longitude\": 113.5436977}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T16:05:22.632870+00:00",
     "observed_at": "2026-09-30T16:05:22.632870+00:00",
     "retrieved_at": "2026-09-30T16:05:22.632870+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986542,
        "longitude": 113.5436977,
        "normalized": {
         "x": 0.4598,
         "y": 0.3494
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1988308,
        "longitude": 113.5439272,
        "normalized": {
         "x": 0.6363,
         "y": 0.4852
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984181,
        "longitude": 113.5433487,
        "normalized": {
         "x": 0.1913,
         "y": 0.1678
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986542,
     "longitude": 113.5436977
    },
    "evidenceVersion": "v2"
   },
   "actions": [
    {
     "action": "false_positive",
     "note": null,
     "actor": "admin",
     "occurred_at": "2026-10-01T00:07:36+08:00"
    }
   ]
  },
  {
   "id": "FA166B3B35",
   "occurred_at": "2026-10-01T00:05:10+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：临时加工棚 D",
   "confidence": 1,
   "snapshot_name": "",
   "status": "confirmed",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_shed_d\", \"zone_label\": \"临时加工棚 D\", \"latitude\": 22.1989954, \"longitude\": 113.5440328, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T16:05:10.015129+00:00\", \"observed_at\": \"2026-09-30T16:05:10.015129+00:00\", \"retrieved_at\": \"2026-09-30T16:05:10.015129+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986821, \"longitude\": 113.5436382, \"normalized\": {\"x\": 0.414, \"y\": 0.3709}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1989954, \"longitude\": 113.5440328, \"normalized\": {\"x\": 0.7176, \"y\": 0.6118}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984, \"longitude\": 113.5433, \"normalized\": {\"x\": 0.1538, \"y\": 0.1538}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986821, \"longitude\": 113.5436382}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_shed_d",
    "zone_label": "临时加工棚 D",
    "latitude": 22.1989954,
    "longitude": 113.5440328,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T16:05:10.015129+00:00",
     "observed_at": "2026-09-30T16:05:10.015129+00:00",
     "retrieved_at": "2026-09-30T16:05:10.015129+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986821,
        "longitude": 113.5436382,
        "normalized": {
         "x": 0.414,
         "y": 0.3709
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1989954,
        "longitude": 113.5440328,
        "normalized": {
         "x": 0.7176,
         "y": 0.6118
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984,
        "longitude": 113.5433,
        "normalized": {
         "x": 0.1538,
         "y": 0.1538
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986821,
     "longitude": 113.5436382
    },
    "evidenceVersion": "v2"
   },
   "actions": [
    {
     "action": "confirmed",
     "note": null,
     "actor": "admin",
     "occurred_at": "2026-10-01T00:09:02+08:00"
    }
   ]
  },
  {
   "id": "01EC859792",
   "occurred_at": "2026-10-01T00:05:05+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "false_positive",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_crane_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1986937, \"longitude\": 113.5436135, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T16:05:05.817089+00:00\", \"observed_at\": \"2026-09-30T16:05:05.817089+00:00\", \"retrieved_at\": \"2026-09-30T16:05:05.817089+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986937, \"longitude\": 113.5436135, \"normalized\": {\"x\": 0.395, \"y\": 0.3798}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990632, \"longitude\": 113.5440764, \"normalized\": {\"x\": 0.7511, \"y\": 0.664}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984, \"longitude\": 113.5433, \"normalized\": {\"x\": 0.1538, \"y\": 0.1538}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986937, \"longitude\": 113.5436135}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_crane_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1986937,
    "longitude": 113.5436135,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T16:05:05.817089+00:00",
     "observed_at": "2026-09-30T16:05:05.817089+00:00",
     "retrieved_at": "2026-09-30T16:05:05.817089+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986937,
        "longitude": 113.5436135,
        "normalized": {
         "x": 0.395,
         "y": 0.3798
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990632,
        "longitude": 113.5440764,
        "normalized": {
         "x": 0.7511,
         "y": 0.664
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984,
        "longitude": 113.5433,
        "normalized": {
         "x": 0.1538,
         "y": 0.1538
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986937,
     "longitude": 113.5436135
    },
    "evidenceVersion": "v2"
   },
   "actions": [
    {
     "action": "false_positive",
     "note": null,
     "actor": "admin",
     "occurred_at": "2026-10-01T00:09:02+08:00"
    }
   ]
  },
  {
   "id": "2301599CB2",
   "occurred_at": "2026-09-30T23:59:40+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984848, \"longitude\": 113.5435762, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:59:40.300390+00:00\", \"observed_at\": \"2026-09-30T15:59:40.300390+00:00\", \"retrieved_at\": \"2026-09-30T15:59:40.300390+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984848, \"longitude\": 113.5435762, \"normalized\": {\"x\": 0.3663, \"y\": 0.219}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984848, \"longitude\": 113.5439267, \"normalized\": {\"x\": 0.6359, \"y\": 0.2191}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984343, \"longitude\": 113.5438315, \"normalized\": {\"x\": 0.5627, \"y\": 0.1802}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984848, \"longitude\": 113.5435762}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984848,
    "longitude": 113.5435762,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:59:40.300390+00:00",
     "observed_at": "2026-09-30T15:59:40.300390+00:00",
     "retrieved_at": "2026-09-30T15:59:40.300390+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984848,
        "longitude": 113.5435762,
        "normalized": {
         "x": 0.3663,
         "y": 0.219
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984848,
        "longitude": 113.5439267,
        "normalized": {
         "x": 0.6359,
         "y": 0.2191
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984343,
        "longitude": 113.5438315,
        "normalized": {
         "x": 0.5627,
         "y": 0.1802
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984848,
     "longitude": 113.5435762
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "705BAA5C43",
   "occurred_at": "2026-09-30T23:55:25+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984337, \"longitude\": 113.543592, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:55:25.378389+00:00\", \"observed_at\": \"2026-09-30T15:55:25.378389+00:00\", \"retrieved_at\": \"2026-09-30T15:55:25.378389+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984913, \"longitude\": 113.5437342, \"normalized\": {\"x\": 0.4879, \"y\": 0.2241}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984337, \"longitude\": 113.543592, \"normalized\": {\"x\": 0.3784, \"y\": 0.1798}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984646, \"longitude\": 113.5439368, \"normalized\": {\"x\": 0.6437, \"y\": 0.2036}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984913, \"longitude\": 113.5437342}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984337,
    "longitude": 113.543592,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:55:25.378389+00:00",
     "observed_at": "2026-09-30T15:55:25.378389+00:00",
     "retrieved_at": "2026-09-30T15:55:25.378389+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984913,
        "longitude": 113.5437342,
        "normalized": {
         "x": 0.4879,
         "y": 0.2241
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984337,
        "longitude": 113.543592,
        "normalized": {
         "x": 0.3784,
         "y": 0.1798
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984646,
        "longitude": 113.5439368,
        "normalized": {
         "x": 0.6437,
         "y": 0.2036
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984913,
     "longitude": 113.5437342
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "E30E9E173D",
   "occurred_at": "2026-09-30T23:49:58+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984947, \"longitude\": 113.5435946, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:49:58.647755+00:00\", \"observed_at\": \"2026-09-30T15:49:58.647755+00:00\", \"retrieved_at\": \"2026-09-30T15:49:58.647755+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985022, \"longitude\": 113.5436941, \"normalized\": {\"x\": 0.457, \"y\": 0.2325}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984467, \"longitude\": 113.5438121, \"normalized\": {\"x\": 0.5478, \"y\": 0.1898}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984947, \"longitude\": 113.5435946, \"normalized\": {\"x\": 0.3804, \"y\": 0.2267}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985022, \"longitude\": 113.5436941}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984947,
    "longitude": 113.5435946,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:49:58.647755+00:00",
     "observed_at": "2026-09-30T15:49:58.647755+00:00",
     "retrieved_at": "2026-09-30T15:49:58.647755+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985022,
        "longitude": 113.5436941,
        "normalized": {
         "x": 0.457,
         "y": 0.2325
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984467,
        "longitude": 113.5438121,
        "normalized": {
         "x": 0.5478,
         "y": 0.1898
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984947,
        "longitude": 113.5435946,
        "normalized": {
         "x": 0.3804,
         "y": 0.2267
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985022,
     "longitude": 113.5436941
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "4A8208EF8C",
   "occurred_at": "2026-09-30T23:46:52+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:46:52.825481+00:00\", \"observed_at\": \"2026-09-30T15:46:52.825481+00:00\", \"retrieved_at\": \"2026-09-30T15:46:52.825481+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.19896, \"longitude\": 113.5441127, \"normalized\": {\"x\": 0.779, \"y\": 0.5846}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984506, \"longitude\": 113.5439182, \"normalized\": {\"x\": 0.6294, \"y\": 0.1928}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986417, \"longitude\": 113.5436676, \"normalized\": {\"x\": 0.4366, \"y\": 0.3398}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.19896, \"longitude\": 113.5441127}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:46:52.825481+00:00",
     "observed_at": "2026-09-30T15:46:52.825481+00:00",
     "retrieved_at": "2026-09-30T15:46:52.825481+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.19896,
        "longitude": 113.5441127,
        "normalized": {
         "x": 0.779,
         "y": 0.5846
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984506,
        "longitude": 113.5439182,
        "normalized": {
         "x": 0.6294,
         "y": 0.1928
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986417,
        "longitude": 113.5436676,
        "normalized": {
         "x": 0.4366,
         "y": 0.3398
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.19896,
     "longitude": 113.5441127
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "1BC8AAD6B7",
   "occurred_at": "2026-09-30T23:45:18+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.198806, \"longitude\": 113.5440179, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:45:18.709168+00:00\", \"observed_at\": \"2026-09-30T15:45:18.709168+00:00\", \"retrieved_at\": \"2026-09-30T15:45:18.709168+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.198806, \"longitude\": 113.5440179, \"normalized\": {\"x\": 0.7061, \"y\": 0.4661}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986895, \"longitude\": 113.5438228, \"normalized\": {\"x\": 0.556, \"y\": 0.3766}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985482, \"longitude\": 113.543503, \"normalized\": {\"x\": 0.31, \"y\": 0.2678}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.198806, \"longitude\": 113.5440179}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.198806,
    "longitude": 113.5440179,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:45:18.709168+00:00",
     "observed_at": "2026-09-30T15:45:18.709168+00:00",
     "retrieved_at": "2026-09-30T15:45:18.709168+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.198806,
        "longitude": 113.5440179,
        "normalized": {
         "x": 0.7061,
         "y": 0.4661
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986895,
        "longitude": 113.5438228,
        "normalized": {
         "x": 0.556,
         "y": 0.3766
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985482,
        "longitude": 113.543503,
        "normalized": {
         "x": 0.31,
         "y": 0.2678
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.198806,
     "longitude": 113.5440179
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "5DD4489B7A",
   "occurred_at": "2026-09-30T23:45:06+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1985185, \"longitude\": 113.5435757, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:45:05.945824+00:00\", \"observed_at\": \"2026-09-30T15:45:05.945824+00:00\", \"retrieved_at\": \"2026-09-30T15:45:05.945824+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986905, \"longitude\": 113.5439324, \"normalized\": {\"x\": 0.6403, \"y\": 0.3773}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986871, \"longitude\": 113.5438102, \"normalized\": {\"x\": 0.5463, \"y\": 0.3747}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985185, \"longitude\": 113.5435757, \"normalized\": {\"x\": 0.366, \"y\": 0.245}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986905, \"longitude\": 113.5439324}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1985185,
    "longitude": 113.5435757,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:45:05.945824+00:00",
     "observed_at": "2026-09-30T15:45:05.945824+00:00",
     "retrieved_at": "2026-09-30T15:45:05.945824+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986905,
        "longitude": 113.5439324,
        "normalized": {
         "x": 0.6403,
         "y": 0.3773
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986871,
        "longitude": 113.5438102,
        "normalized": {
         "x": 0.5463,
         "y": 0.3747
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985185,
        "longitude": 113.5435757,
        "normalized": {
         "x": 0.366,
         "y": 0.245
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986905,
     "longitude": 113.5439324
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "2FA4E20ADE",
   "occurred_at": "2026-09-30T23:42:28+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1986458, \"longitude\": 113.5435929, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:42:28.648786+00:00\", \"observed_at\": \"2026-09-30T15:42:28.648786+00:00\", \"retrieved_at\": \"2026-09-30T15:42:28.648786+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1987754, \"longitude\": 113.5439588, \"normalized\": {\"x\": 0.6606, \"y\": 0.4426}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986458, \"longitude\": 113.5435929, \"normalized\": {\"x\": 0.3792, \"y\": 0.3429}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.19862, \"longitude\": 113.543772, \"normalized\": {\"x\": 0.5169, \"y\": 0.3231}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1987754, \"longitude\": 113.5439588}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1986458,
    "longitude": 113.5435929,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:42:28.648786+00:00",
     "observed_at": "2026-09-30T15:42:28.648786+00:00",
     "retrieved_at": "2026-09-30T15:42:28.648786+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1987754,
        "longitude": 113.5439588,
        "normalized": {
         "x": 0.6606,
         "y": 0.4426
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986458,
        "longitude": 113.5435929,
        "normalized": {
         "x": 0.3792,
         "y": 0.3429
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.19862,
        "longitude": 113.543772,
        "normalized": {
         "x": 0.5169,
         "y": 0.3231
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1987754,
     "longitude": 113.5439588
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "A2148FEF2F",
   "occurred_at": "2026-09-30T23:41:21+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:41:20.910054+00:00\", \"observed_at\": \"2026-09-30T15:41:20.910054+00:00\", \"retrieved_at\": \"2026-09-30T15:41:20.910054+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1991532, \"longitude\": 113.5439534, \"normalized\": {\"x\": 0.6564, \"y\": 0.7332}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1987033, \"longitude\": 113.5440046, \"normalized\": {\"x\": 0.6959, \"y\": 0.3871}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984606, \"longitude\": 113.5438301, \"normalized\": {\"x\": 0.5616, \"y\": 0.2004}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1991532, \"longitude\": 113.5439534}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:41:20.910054+00:00",
     "observed_at": "2026-09-30T15:41:20.910054+00:00",
     "retrieved_at": "2026-09-30T15:41:20.910054+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1991532,
        "longitude": 113.5439534,
        "normalized": {
         "x": 0.6564,
         "y": 0.7332
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1987033,
        "longitude": 113.5440046,
        "normalized": {
         "x": 0.6959,
         "y": 0.3871
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984606,
        "longitude": 113.5438301,
        "normalized": {
         "x": 0.5616,
         "y": 0.2004
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1991532,
     "longitude": 113.5439534
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "EB20BADD5C",
   "occurred_at": "2026-09-30T23:40:42+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990147, \"longitude\": 113.5439329, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:40:42.715614+00:00\", \"observed_at\": \"2026-09-30T15:40:42.715614+00:00\", \"retrieved_at\": \"2026-09-30T15:40:42.715614+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1990147, \"longitude\": 113.5439329, \"normalized\": {\"x\": 0.6407, \"y\": 0.6267}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.198699, \"longitude\": 113.544078, \"normalized\": {\"x\": 0.7523, \"y\": 0.3838}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.198556, \"longitude\": 113.5438471, \"normalized\": {\"x\": 0.5747, \"y\": 0.2738}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1990147, \"longitude\": 113.5439329}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990147,
    "longitude": 113.5439329,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:40:42.715614+00:00",
     "observed_at": "2026-09-30T15:40:42.715614+00:00",
     "retrieved_at": "2026-09-30T15:40:42.715614+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1990147,
        "longitude": 113.5439329,
        "normalized": {
         "x": 0.6407,
         "y": 0.6267
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.198699,
        "longitude": 113.544078,
        "normalized": {
         "x": 0.7523,
         "y": 0.3838
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.198556,
        "longitude": 113.5438471,
        "normalized": {
         "x": 0.5747,
         "y": 0.2738
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1990147,
     "longitude": 113.5439329
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "31D1E72D07",
   "occurred_at": "2026-09-30T23:40:15+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986628, \"longitude\": 113.544011, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:40:15.323871+00:00\", \"observed_at\": \"2026-09-30T15:40:15.323871+00:00\", \"retrieved_at\": \"2026-09-30T15:40:15.323871+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1987616, \"longitude\": 113.5438956, \"normalized\": {\"x\": 0.612, \"y\": 0.432}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986628, \"longitude\": 113.544011, \"normalized\": {\"x\": 0.7008, \"y\": 0.356}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986448, \"longitude\": 113.5438575, \"normalized\": {\"x\": 0.5827, \"y\": 0.3422}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1987616, \"longitude\": 113.5438956}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986628,
    "longitude": 113.544011,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:40:15.323871+00:00",
     "observed_at": "2026-09-30T15:40:15.323871+00:00",
     "retrieved_at": "2026-09-30T15:40:15.323871+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1987616,
        "longitude": 113.5438956,
        "normalized": {
         "x": 0.612,
         "y": 0.432
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986628,
        "longitude": 113.544011,
        "normalized": {
         "x": 0.7008,
         "y": 0.356
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986448,
        "longitude": 113.5438575,
        "normalized": {
         "x": 0.5827,
         "y": 0.3422
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1987616,
     "longitude": 113.5438956
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "C180B4AEFF",
   "occurred_at": "2026-09-30T23:38:06+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1983932, \"longitude\": 113.5435898, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:38:06.557019+00:00\", \"observed_at\": \"2026-09-30T15:38:06.557019+00:00\", \"retrieved_at\": \"2026-09-30T15:38:06.557019+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985922, \"longitude\": 113.543842, \"normalized\": {\"x\": 0.5707, \"y\": 0.3017}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1983932, \"longitude\": 113.5435898, \"normalized\": {\"x\": 0.3767, \"y\": 0.1486}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985765, \"longitude\": 113.5437282, \"normalized\": {\"x\": 0.4832, \"y\": 0.2896}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985922, \"longitude\": 113.543842}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1983932,
    "longitude": 113.5435898,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:38:06.557019+00:00",
     "observed_at": "2026-09-30T15:38:06.557019+00:00",
     "retrieved_at": "2026-09-30T15:38:06.557019+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985922,
        "longitude": 113.543842,
        "normalized": {
         "x": 0.5707,
         "y": 0.3017
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1983932,
        "longitude": 113.5435898,
        "normalized": {
         "x": 0.3767,
         "y": 0.1486
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985765,
        "longitude": 113.5437282,
        "normalized": {
         "x": 0.4832,
         "y": 0.2896
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985922,
     "longitude": 113.543842
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "BE17A93116",
   "occurred_at": "2026-09-30T23:29:45+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1989774, \"longitude\": 113.5440043, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:29:44.943424+00:00\", \"observed_at\": \"2026-09-30T15:29:44.943424+00:00\", \"retrieved_at\": \"2026-09-30T15:29:44.943424+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1989774, \"longitude\": 113.5440043, \"normalized\": {\"x\": 0.6956, \"y\": 0.598}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984261, \"longitude\": 113.5436957, \"normalized\": {\"x\": 0.4582, \"y\": 0.1739}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.198603, \"longitude\": 113.5437731, \"normalized\": {\"x\": 0.5178, \"y\": 0.31}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1989774, \"longitude\": 113.5440043}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1989774,
    "longitude": 113.5440043,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:29:44.943424+00:00",
     "observed_at": "2026-09-30T15:29:44.943424+00:00",
     "retrieved_at": "2026-09-30T15:29:44.943424+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1989774,
        "longitude": 113.5440043,
        "normalized": {
         "x": 0.6956,
         "y": 0.598
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984261,
        "longitude": 113.5436957,
        "normalized": {
         "x": 0.4582,
         "y": 0.1739
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.198603,
        "longitude": 113.5437731,
        "normalized": {
         "x": 0.5178,
         "y": 0.31
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1989774,
     "longitude": 113.5440043
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "1FE4F89DA2",
   "occurred_at": "2026-09-30T23:27:53+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:27:53.585686+00:00\", \"observed_at\": \"2026-09-30T15:27:53.585686+00:00\", \"retrieved_at\": \"2026-09-30T15:27:53.585686+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984407, \"longitude\": 113.543984, \"normalized\": {\"x\": 0.68, \"y\": 0.1851}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1987034, \"longitude\": 113.5441225, \"normalized\": {\"x\": 0.7866, \"y\": 0.3873}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984548, \"longitude\": 113.5436372, \"normalized\": {\"x\": 0.4133, \"y\": 0.196}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984407, \"longitude\": 113.543984}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:27:53.585686+00:00",
     "observed_at": "2026-09-30T15:27:53.585686+00:00",
     "retrieved_at": "2026-09-30T15:27:53.585686+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984407,
        "longitude": 113.543984,
        "normalized": {
         "x": 0.68,
         "y": 0.1851
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1987034,
        "longitude": 113.5441225,
        "normalized": {
         "x": 0.7866,
         "y": 0.3873
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984548,
        "longitude": 113.5436372,
        "normalized": {
         "x": 0.4133,
         "y": 0.196
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984407,
     "longitude": 113.543984
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "A92DE2190F",
   "occurred_at": "2026-09-30T23:26:23+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1987106, \"longitude\": 113.5440223, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:26:23.928437+00:00\", \"observed_at\": \"2026-09-30T15:26:23.928437+00:00\", \"retrieved_at\": \"2026-09-30T15:26:23.928437+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1989384, \"longitude\": 113.5440847, \"normalized\": {\"x\": 0.7575, \"y\": 0.568}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1987106, \"longitude\": 113.5440223, \"normalized\": {\"x\": 0.7095, \"y\": 0.3928}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985801, \"longitude\": 113.5437372, \"normalized\": {\"x\": 0.4901, \"y\": 0.2924}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1989384, \"longitude\": 113.5440847}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1987106,
    "longitude": 113.5440223,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:26:23.928437+00:00",
     "observed_at": "2026-09-30T15:26:23.928437+00:00",
     "retrieved_at": "2026-09-30T15:26:23.928437+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1989384,
        "longitude": 113.5440847,
        "normalized": {
         "x": 0.7575,
         "y": 0.568
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1987106,
        "longitude": 113.5440223,
        "normalized": {
         "x": 0.7095,
         "y": 0.3928
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985801,
        "longitude": 113.5437372,
        "normalized": {
         "x": 0.4901,
         "y": 0.2924
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1989384,
     "longitude": 113.5440847
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "D5094503B8",
   "occurred_at": "2026-09-30T23:24:39+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986563, \"longitude\": 113.54402, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:24:39.387368+00:00\", \"observed_at\": \"2026-09-30T15:24:39.387368+00:00\", \"retrieved_at\": \"2026-09-30T15:24:39.387368+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986563, \"longitude\": 113.54402, \"normalized\": {\"x\": 0.7077, \"y\": 0.351}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985263, \"longitude\": 113.5437, \"normalized\": {\"x\": 0.4616, \"y\": 0.251}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984314, \"longitude\": 113.5438135, \"normalized\": {\"x\": 0.5489, \"y\": 0.178}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986563, \"longitude\": 113.54402}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986563,
    "longitude": 113.54402,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:24:39.387368+00:00",
     "observed_at": "2026-09-30T15:24:39.387368+00:00",
     "retrieved_at": "2026-09-30T15:24:39.387368+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986563,
        "longitude": 113.54402,
        "normalized": {
         "x": 0.7077,
         "y": 0.351
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985263,
        "longitude": 113.5437,
        "normalized": {
         "x": 0.4616,
         "y": 0.251
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984314,
        "longitude": 113.5438135,
        "normalized": {
         "x": 0.5489,
         "y": 0.178
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986563,
     "longitude": 113.54402
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "FD9A1143CB",
   "occurred_at": "2026-09-30T23:21:37+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.19876, \"longitude\": 113.5440145, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:21:37.278473+00:00\", \"observed_at\": \"2026-09-30T15:21:37.278473+00:00\", \"retrieved_at\": \"2026-09-30T15:21:37.278473+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.19876, \"longitude\": 113.5440145, \"normalized\": {\"x\": 0.7035, \"y\": 0.4308}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.198426, \"longitude\": 113.5437552, \"normalized\": {\"x\": 0.504, \"y\": 0.1738}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985702, \"longitude\": 113.5437445, \"normalized\": {\"x\": 0.4958, \"y\": 0.2848}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.19876, \"longitude\": 113.5440145}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.19876,
    "longitude": 113.5440145,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:21:37.278473+00:00",
     "observed_at": "2026-09-30T15:21:37.278473+00:00",
     "retrieved_at": "2026-09-30T15:21:37.278473+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.19876,
        "longitude": 113.5440145,
        "normalized": {
         "x": 0.7035,
         "y": 0.4308
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.198426,
        "longitude": 113.5437552,
        "normalized": {
         "x": 0.504,
         "y": 0.1738
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985702,
        "longitude": 113.5437445,
        "normalized": {
         "x": 0.4958,
         "y": 0.2848
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.19876,
     "longitude": 113.5440145
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "AB602F2ADC",
   "occurred_at": "2026-09-30T23:18:43+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.198614, \"longitude\": 113.5440412, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:18:43.108217+00:00\", \"observed_at\": \"2026-09-30T15:18:43.108217+00:00\", \"retrieved_at\": \"2026-09-30T15:18:43.108217+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984649, \"longitude\": 113.5439112, \"normalized\": {\"x\": 0.624, \"y\": 0.2038}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985264, \"longitude\": 113.5437709, \"normalized\": {\"x\": 0.5161, \"y\": 0.251}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.198614, \"longitude\": 113.5440412, \"normalized\": {\"x\": 0.724, \"y\": 0.3185}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984649, \"longitude\": 113.5439112}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.198614,
    "longitude": 113.5440412,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:18:43.108217+00:00",
     "observed_at": "2026-09-30T15:18:43.108217+00:00",
     "retrieved_at": "2026-09-30T15:18:43.108217+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984649,
        "longitude": 113.5439112,
        "normalized": {
         "x": 0.624,
         "y": 0.2038
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985264,
        "longitude": 113.5437709,
        "normalized": {
         "x": 0.5161,
         "y": 0.251
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.198614,
        "longitude": 113.5440412,
        "normalized": {
         "x": 0.724,
         "y": 0.3185
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984649,
     "longitude": 113.5439112
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "9BECE9B7ED",
   "occurred_at": "2026-09-30T23:15:22+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1987088, \"longitude\": 113.544018, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:15:22.014343+00:00\", \"observed_at\": \"2026-09-30T15:15:22.014343+00:00\", \"retrieved_at\": \"2026-09-30T15:15:22.014343+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985979, \"longitude\": 113.543725, \"normalized\": {\"x\": 0.4808, \"y\": 0.3061}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1987088, \"longitude\": 113.544018, \"normalized\": {\"x\": 0.7061, \"y\": 0.3913}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985131, \"longitude\": 113.5435409, \"normalized\": {\"x\": 0.3391, \"y\": 0.2408}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985979, \"longitude\": 113.543725}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1987088,
    "longitude": 113.544018,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:15:22.014343+00:00",
     "observed_at": "2026-09-30T15:15:22.014343+00:00",
     "retrieved_at": "2026-09-30T15:15:22.014343+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985979,
        "longitude": 113.543725,
        "normalized": {
         "x": 0.4808,
         "y": 0.3061
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1987088,
        "longitude": 113.544018,
        "normalized": {
         "x": 0.7061,
         "y": 0.3913
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985131,
        "longitude": 113.5435409,
        "normalized": {
         "x": 0.3391,
         "y": 0.2408
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985979,
     "longitude": 113.543725
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "AF66DA5D01",
   "occurred_at": "2026-09-30T23:14:42+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1985383, \"longitude\": 113.543592, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:14:42.213228+00:00\", \"observed_at\": \"2026-09-30T15:14:42.213228+00:00\", \"retrieved_at\": \"2026-09-30T15:14:42.213228+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986137, \"longitude\": 113.5436652, \"normalized\": {\"x\": 0.4348, \"y\": 0.3182}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986749, \"longitude\": 113.5437141, \"normalized\": {\"x\": 0.4724, \"y\": 0.3653}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985383, \"longitude\": 113.543592, \"normalized\": {\"x\": 0.3784, \"y\": 0.2603}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986137, \"longitude\": 113.5436652}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1985383,
    "longitude": 113.543592,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:14:42.213228+00:00",
     "observed_at": "2026-09-30T15:14:42.213228+00:00",
     "retrieved_at": "2026-09-30T15:14:42.213228+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986137,
        "longitude": 113.5436652,
        "normalized": {
         "x": 0.4348,
         "y": 0.3182
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986749,
        "longitude": 113.5437141,
        "normalized": {
         "x": 0.4724,
         "y": 0.3653
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985383,
        "longitude": 113.543592,
        "normalized": {
         "x": 0.3784,
         "y": 0.2603
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986137,
     "longitude": 113.5436652
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "CEBF2B6A16",
   "occurred_at": "2026-09-30T23:11:16+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1985011, \"longitude\": 113.5435889, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:11:16.662959+00:00\", \"observed_at\": \"2026-09-30T15:11:16.662959+00:00\", \"retrieved_at\": \"2026-09-30T15:11:16.662959+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985011, \"longitude\": 113.5435889, \"normalized\": {\"x\": 0.3761, \"y\": 0.2316}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985752, \"longitude\": 113.543697, \"normalized\": {\"x\": 0.4592, \"y\": 0.2887}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984189, \"longitude\": 113.5439089, \"normalized\": {\"x\": 0.6222, \"y\": 0.1683}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985011, \"longitude\": 113.5435889}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1985011,
    "longitude": 113.5435889,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:11:16.662959+00:00",
     "observed_at": "2026-09-30T15:11:16.662959+00:00",
     "retrieved_at": "2026-09-30T15:11:16.662959+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985011,
        "longitude": 113.5435889,
        "normalized": {
         "x": 0.3761,
         "y": 0.2316
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985752,
        "longitude": 113.543697,
        "normalized": {
         "x": 0.4592,
         "y": 0.2887
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984189,
        "longitude": 113.5439089,
        "normalized": {
         "x": 0.6222,
         "y": 0.1683
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985011,
     "longitude": 113.5435889
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "AEAF0EF9EA",
   "occurred_at": "2026-09-30T23:07:37+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:07:37.590112+00:00\", \"observed_at\": \"2026-09-30T15:07:37.590112+00:00\", \"retrieved_at\": \"2026-09-30T15:07:37.590112+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986189, \"longitude\": 113.543524, \"normalized\": {\"x\": 0.3261, \"y\": 0.3223}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985543, \"longitude\": 113.5438125, \"normalized\": {\"x\": 0.5481, \"y\": 0.2726}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1988333, \"longitude\": 113.5441822, \"normalized\": {\"x\": 0.8324, \"y\": 0.4872}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986189, \"longitude\": 113.543524}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:07:37.590112+00:00",
     "observed_at": "2026-09-30T15:07:37.590112+00:00",
     "retrieved_at": "2026-09-30T15:07:37.590112+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986189,
        "longitude": 113.543524,
        "normalized": {
         "x": 0.3261,
         "y": 0.3223
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985543,
        "longitude": 113.5438125,
        "normalized": {
         "x": 0.5481,
         "y": 0.2726
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1988333,
        "longitude": 113.5441822,
        "normalized": {
         "x": 0.8324,
         "y": 0.4872
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986189,
     "longitude": 113.543524
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "94F39FC049",
   "occurred_at": "2026-09-30T23:06:53+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986898, \"longitude\": 113.5440141, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:06:53.319741+00:00\", \"observed_at\": \"2026-09-30T15:06:53.319741+00:00\", \"retrieved_at\": \"2026-09-30T15:06:53.319741+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.198554, \"longitude\": 113.5433509, \"normalized\": {\"x\": 0.193, \"y\": 0.2723}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.198519, \"longitude\": 113.5438472, \"normalized\": {\"x\": 0.5748, \"y\": 0.2454}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986898, \"longitude\": 113.5440141, \"normalized\": {\"x\": 0.7032, \"y\": 0.3767}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.198554, \"longitude\": 113.5433509}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986898,
    "longitude": 113.5440141,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:06:53.319741+00:00",
     "observed_at": "2026-09-30T15:06:53.319741+00:00",
     "retrieved_at": "2026-09-30T15:06:53.319741+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.198554,
        "longitude": 113.5433509,
        "normalized": {
         "x": 0.193,
         "y": 0.2723
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.198519,
        "longitude": 113.5438472,
        "normalized": {
         "x": 0.5748,
         "y": 0.2454
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986898,
        "longitude": 113.5440141,
        "normalized": {
         "x": 0.7032,
         "y": 0.3767
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.198554,
     "longitude": 113.5433509
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "C7661A7340",
   "occurred_at": "2026-09-30T23:06:08+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1985766, \"longitude\": 113.5435639, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:06:08.943876+00:00\", \"observed_at\": \"2026-09-30T15:06:08.943876+00:00\", \"retrieved_at\": \"2026-09-30T15:06:08.943876+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985766, \"longitude\": 113.5435639, \"normalized\": {\"x\": 0.3568, \"y\": 0.2897}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984643, \"longitude\": 113.5438577, \"normalized\": {\"x\": 0.5828, \"y\": 0.2033}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985004, \"longitude\": 113.5437709, \"normalized\": {\"x\": 0.5161, \"y\": 0.2311}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985766, \"longitude\": 113.5435639}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1985766,
    "longitude": 113.5435639,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:06:08.943876+00:00",
     "observed_at": "2026-09-30T15:06:08.943876+00:00",
     "retrieved_at": "2026-09-30T15:06:08.943876+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985766,
        "longitude": 113.5435639,
        "normalized": {
         "x": 0.3568,
         "y": 0.2897
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984643,
        "longitude": 113.5438577,
        "normalized": {
         "x": 0.5828,
         "y": 0.2033
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985004,
        "longitude": 113.5437709,
        "normalized": {
         "x": 0.5161,
         "y": 0.2311
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985766,
     "longitude": 113.5435639
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "09BE31E80E",
   "occurred_at": "2026-09-30T23:03:50+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990045, \"longitude\": 113.5439933, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:03:50.808168+00:00\", \"observed_at\": \"2026-09-30T15:03:50.808168+00:00\", \"retrieved_at\": \"2026-09-30T15:03:50.808168+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1990045, \"longitude\": 113.5439933, \"normalized\": {\"x\": 0.6872, \"y\": 0.6189}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986898, \"longitude\": 113.5438204, \"normalized\": {\"x\": 0.5541, \"y\": 0.3768}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1988686, \"longitude\": 113.5439437, \"normalized\": {\"x\": 0.649, \"y\": 0.5143}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1990045, \"longitude\": 113.5439933}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990045,
    "longitude": 113.5439933,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:03:50.808168+00:00",
     "observed_at": "2026-09-30T15:03:50.808168+00:00",
     "retrieved_at": "2026-09-30T15:03:50.808168+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1990045,
        "longitude": 113.5439933,
        "normalized": {
         "x": 0.6872,
         "y": 0.6189
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986898,
        "longitude": 113.5438204,
        "normalized": {
         "x": 0.5541,
         "y": 0.3768
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1988686,
        "longitude": 113.5439437,
        "normalized": {
         "x": 0.649,
         "y": 0.5143
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1990045,
     "longitude": 113.5439933
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "D6BC967D9C",
   "occurred_at": "2026-09-30T23:02:07+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:02:07.783144+00:00\", \"observed_at\": \"2026-09-30T15:02:07.783144+00:00\", \"retrieved_at\": \"2026-09-30T15:02:07.783144+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.198583, \"longitude\": 113.5437914, \"normalized\": {\"x\": 0.5319, \"y\": 0.2946}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1992502, \"longitude\": 113.5441012, \"normalized\": {\"x\": 0.7701, \"y\": 0.8079}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.198946, \"longitude\": 113.5440415, \"normalized\": {\"x\": 0.7242, \"y\": 0.5738}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.198583, \"longitude\": 113.5437914}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:02:07.783144+00:00",
     "observed_at": "2026-09-30T15:02:07.783144+00:00",
     "retrieved_at": "2026-09-30T15:02:07.783144+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.198583,
        "longitude": 113.5437914,
        "normalized": {
         "x": 0.5319,
         "y": 0.2946
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1992502,
        "longitude": 113.5441012,
        "normalized": {
         "x": 0.7701,
         "y": 0.8079
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.198946,
        "longitude": 113.5440415,
        "normalized": {
         "x": 0.7242,
         "y": 0.5738
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.198583,
     "longitude": 113.5437914
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "05C49E215C",
   "occurred_at": "2026-09-30T23:01:59+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1988886, \"longitude\": 113.5440097, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:01:59.312658+00:00\", \"observed_at\": \"2026-09-30T15:01:59.312658+00:00\", \"retrieved_at\": \"2026-09-30T15:01:59.312658+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985641, \"longitude\": 113.5438147, \"normalized\": {\"x\": 0.5498, \"y\": 0.2801}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1992435, \"longitude\": 113.5440985, \"normalized\": {\"x\": 0.7681, \"y\": 0.8027}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1988886, \"longitude\": 113.5440097, \"normalized\": {\"x\": 0.6998, \"y\": 0.5297}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985641, \"longitude\": 113.5438147}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1988886,
    "longitude": 113.5440097,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:01:59.312658+00:00",
     "observed_at": "2026-09-30T15:01:59.312658+00:00",
     "retrieved_at": "2026-09-30T15:01:59.312658+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985641,
        "longitude": 113.5438147,
        "normalized": {
         "x": 0.5498,
         "y": 0.2801
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1992435,
        "longitude": 113.5440985,
        "normalized": {
         "x": 0.7681,
         "y": 0.8027
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1988886,
        "longitude": 113.5440097,
        "normalized": {
         "x": 0.6998,
         "y": 0.5297
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985641,
     "longitude": 113.5438147
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "8C057C3DE4",
   "occurred_at": "2026-09-30T23:00:43+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990145, \"longitude\": 113.5440095, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T15:00:43.636051+00:00\", \"observed_at\": \"2026-09-30T15:00:43.636051+00:00\", \"retrieved_at\": \"2026-09-30T15:00:43.636051+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985356, \"longitude\": 113.5439166, \"normalized\": {\"x\": 0.6282, \"y\": 0.2581}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990145, \"longitude\": 113.5440095, \"normalized\": {\"x\": 0.6996, \"y\": 0.6265}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984597, \"longitude\": 113.5438337, \"normalized\": {\"x\": 0.5644, \"y\": 0.1998}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985356, \"longitude\": 113.5439166}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990145,
    "longitude": 113.5440095,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T15:00:43.636051+00:00",
     "observed_at": "2026-09-30T15:00:43.636051+00:00",
     "retrieved_at": "2026-09-30T15:00:43.636051+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985356,
        "longitude": 113.5439166,
        "normalized": {
         "x": 0.6282,
         "y": 0.2581
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990145,
        "longitude": 113.5440095,
        "normalized": {
         "x": 0.6996,
         "y": 0.6265
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984597,
        "longitude": 113.5438337,
        "normalized": {
         "x": 0.5644,
         "y": 0.1998
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985356,
     "longitude": 113.5439166
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "3E447FE7A8",
   "occurred_at": "2026-09-30T22:58:56+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986681, \"longitude\": 113.5440224, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:58:55.979069+00:00\", \"observed_at\": \"2026-09-30T14:58:55.979069+00:00\", \"retrieved_at\": \"2026-09-30T14:58:55.979069+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986681, \"longitude\": 113.5440224, \"normalized\": {\"x\": 0.7095, \"y\": 0.3601}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984867, \"longitude\": 113.5438832, \"normalized\": {\"x\": 0.6025, \"y\": 0.2206}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985823, \"longitude\": 113.5436963, \"normalized\": {\"x\": 0.4587, \"y\": 0.2941}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986681, \"longitude\": 113.5440224}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986681,
    "longitude": 113.5440224,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:58:55.979069+00:00",
     "observed_at": "2026-09-30T14:58:55.979069+00:00",
     "retrieved_at": "2026-09-30T14:58:55.979069+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986681,
        "longitude": 113.5440224,
        "normalized": {
         "x": 0.7095,
         "y": 0.3601
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984867,
        "longitude": 113.5438832,
        "normalized": {
         "x": 0.6025,
         "y": 0.2206
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985823,
        "longitude": 113.5436963,
        "normalized": {
         "x": 0.4587,
         "y": 0.2941
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986681,
     "longitude": 113.5440224
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "ECA6052FC5",
   "occurred_at": "2026-09-30T22:50:54+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:50:54.580127+00:00\", \"observed_at\": \"2026-09-30T14:50:54.580127+00:00\", \"retrieved_at\": \"2026-09-30T14:50:54.580127+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986203, \"longitude\": 113.5439333, \"normalized\": {\"x\": 0.641, \"y\": 0.3233}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985145, \"longitude\": 113.5435524, \"normalized\": {\"x\": 0.348, \"y\": 0.2419}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1988631, \"longitude\": 113.5440595, \"normalized\": {\"x\": 0.7381, \"y\": 0.5101}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986203, \"longitude\": 113.5439333}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:50:54.580127+00:00",
     "observed_at": "2026-09-30T14:50:54.580127+00:00",
     "retrieved_at": "2026-09-30T14:50:54.580127+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986203,
        "longitude": 113.5439333,
        "normalized": {
         "x": 0.641,
         "y": 0.3233
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985145,
        "longitude": 113.5435524,
        "normalized": {
         "x": 0.348,
         "y": 0.2419
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1988631,
        "longitude": 113.5440595,
        "normalized": {
         "x": 0.7381,
         "y": 0.5101
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986203,
     "longitude": 113.5439333
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "22926995A4",
   "occurred_at": "2026-09-30T22:50:31+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1985349, \"longitude\": 113.5435947, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:50:31.482100+00:00\", \"observed_at\": \"2026-09-30T14:50:31.482100+00:00\", \"retrieved_at\": \"2026-09-30T14:50:31.482100+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985508, \"longitude\": 113.5438985, \"normalized\": {\"x\": 0.6142, \"y\": 0.2699}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985349, \"longitude\": 113.5435947, \"normalized\": {\"x\": 0.3805, \"y\": 0.2576}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1991834, \"longitude\": 113.5442152, \"normalized\": {\"x\": 0.8578, \"y\": 0.7565}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985508, \"longitude\": 113.5438985}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1985349,
    "longitude": 113.5435947,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:50:31.482100+00:00",
     "observed_at": "2026-09-30T14:50:31.482100+00:00",
     "retrieved_at": "2026-09-30T14:50:31.482100+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985508,
        "longitude": 113.5438985,
        "normalized": {
         "x": 0.6142,
         "y": 0.2699
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985349,
        "longitude": 113.5435947,
        "normalized": {
         "x": 0.3805,
         "y": 0.2576
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1991834,
        "longitude": 113.5442152,
        "normalized": {
         "x": 0.8578,
         "y": 0.7565
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985508,
     "longitude": 113.5438985
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "BC5F2A1223",
   "occurred_at": "2026-09-30T22:49:09+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1989062, \"longitude\": 113.544022, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:49:09.688334+00:00\", \"observed_at\": \"2026-09-30T14:49:09.688334+00:00\", \"retrieved_at\": \"2026-09-30T14:49:09.688334+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985621, \"longitude\": 113.543843, \"normalized\": {\"x\": 0.5715, \"y\": 0.2786}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985736, \"longitude\": 113.543804, \"normalized\": {\"x\": 0.5416, \"y\": 0.2874}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1989062, \"longitude\": 113.544022, \"normalized\": {\"x\": 0.7092, \"y\": 0.5432}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985621, \"longitude\": 113.543843}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1989062,
    "longitude": 113.544022,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:49:09.688334+00:00",
     "observed_at": "2026-09-30T14:49:09.688334+00:00",
     "retrieved_at": "2026-09-30T14:49:09.688334+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985621,
        "longitude": 113.543843,
        "normalized": {
         "x": 0.5715,
         "y": 0.2786
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985736,
        "longitude": 113.543804,
        "normalized": {
         "x": 0.5416,
         "y": 0.2874
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1989062,
        "longitude": 113.544022,
        "normalized": {
         "x": 0.7092,
         "y": 0.5432
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985621,
     "longitude": 113.543843
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "4C685DB895",
   "occurred_at": "2026-09-30T22:45:14+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:45:14.337222+00:00\", \"observed_at\": \"2026-09-30T14:45:14.337222+00:00\", \"retrieved_at\": \"2026-09-30T14:45:14.337222+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984642, \"longitude\": 113.5436986, \"normalized\": {\"x\": 0.4604, \"y\": 0.2033}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1992035, \"longitude\": 113.5440143, \"normalized\": {\"x\": 0.7033, \"y\": 0.7719}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986597, \"longitude\": 113.5439337, \"normalized\": {\"x\": 0.6413, \"y\": 0.3536}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984642, \"longitude\": 113.5436986}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:45:14.337222+00:00",
     "observed_at": "2026-09-30T14:45:14.337222+00:00",
     "retrieved_at": "2026-09-30T14:45:14.337222+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984642,
        "longitude": 113.5436986,
        "normalized": {
         "x": 0.4604,
         "y": 0.2033
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1992035,
        "longitude": 113.5440143,
        "normalized": {
         "x": 0.7033,
         "y": 0.7719
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986597,
        "longitude": 113.5439337,
        "normalized": {
         "x": 0.6413,
         "y": 0.3536
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984642,
     "longitude": 113.5436986
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "196C164A9E",
   "occurred_at": "2026-09-30T22:44:21+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990219, \"longitude\": 113.5439455, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:44:21.886432+00:00\", \"observed_at\": \"2026-09-30T14:44:21.886432+00:00\", \"retrieved_at\": \"2026-09-30T14:44:21.886432+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984596, \"longitude\": 113.543396, \"normalized\": {\"x\": 0.2277, \"y\": 0.1997}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990219, \"longitude\": 113.5439455, \"normalized\": {\"x\": 0.6504, \"y\": 0.6322}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985709, \"longitude\": 113.543866, \"normalized\": {\"x\": 0.5892, \"y\": 0.2853}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984596, \"longitude\": 113.543396}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990219,
    "longitude": 113.5439455,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:44:21.886432+00:00",
     "observed_at": "2026-09-30T14:44:21.886432+00:00",
     "retrieved_at": "2026-09-30T14:44:21.886432+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984596,
        "longitude": 113.543396,
        "normalized": {
         "x": 0.2277,
         "y": 0.1997
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990219,
        "longitude": 113.5439455,
        "normalized": {
         "x": 0.6504,
         "y": 0.6322
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985709,
        "longitude": 113.543866,
        "normalized": {
         "x": 0.5892,
         "y": 0.2853
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984596,
     "longitude": 113.543396
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "EE50321C79",
   "occurred_at": "2026-09-30T22:43:44+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984886, \"longitude\": 113.54358, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:43:44.060213+00:00\", \"observed_at\": \"2026-09-30T14:43:44.060213+00:00\", \"retrieved_at\": \"2026-09-30T14:43:44.060213+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984886, \"longitude\": 113.54358, \"normalized\": {\"x\": 0.3692, \"y\": 0.222}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986712, \"longitude\": 113.5438125, \"normalized\": {\"x\": 0.5481, \"y\": 0.3625}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984876, \"longitude\": 113.5438128, \"normalized\": {\"x\": 0.5483, \"y\": 0.2213}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984886, \"longitude\": 113.54358}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984886,
    "longitude": 113.54358,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:43:44.060213+00:00",
     "observed_at": "2026-09-30T14:43:44.060213+00:00",
     "retrieved_at": "2026-09-30T14:43:44.060213+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984886,
        "longitude": 113.54358,
        "normalized": {
         "x": 0.3692,
         "y": 0.222
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986712,
        "longitude": 113.5438125,
        "normalized": {
         "x": 0.5481,
         "y": 0.3625
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984876,
        "longitude": 113.5438128,
        "normalized": {
         "x": 0.5483,
         "y": 0.2213
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984886,
     "longitude": 113.54358
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "7B9B415A8D",
   "occurred_at": "2026-09-30T22:39:05+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1987607, \"longitude\": 113.5440151, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:39:05.408376+00:00\", \"observed_at\": \"2026-09-30T14:39:05.408376+00:00\", \"retrieved_at\": \"2026-09-30T14:39:05.408376+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1989957, \"longitude\": 113.5440496, \"normalized\": {\"x\": 0.7305, \"y\": 0.6121}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1987607, \"longitude\": 113.5440151, \"normalized\": {\"x\": 0.7039, \"y\": 0.4313}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1991344, \"longitude\": 113.5441426, \"normalized\": {\"x\": 0.802, \"y\": 0.7188}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1989957, \"longitude\": 113.5440496}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1987607,
    "longitude": 113.5440151,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:39:05.408376+00:00",
     "observed_at": "2026-09-30T14:39:05.408376+00:00",
     "retrieved_at": "2026-09-30T14:39:05.408376+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1989957,
        "longitude": 113.5440496,
        "normalized": {
         "x": 0.7305,
         "y": 0.6121
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1987607,
        "longitude": 113.5440151,
        "normalized": {
         "x": 0.7039,
         "y": 0.4313
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1991344,
        "longitude": 113.5441426,
        "normalized": {
         "x": 0.802,
         "y": 0.7188
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1989957,
     "longitude": 113.5440496
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "0CDCF75AFF",
   "occurred_at": "2026-09-30T22:38:38+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1988717, \"longitude\": 113.5440071, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:38:38.189537+00:00\", \"observed_at\": \"2026-09-30T14:38:38.189537+00:00\", \"retrieved_at\": \"2026-09-30T14:38:38.189537+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1988717, \"longitude\": 113.5440071, \"normalized\": {\"x\": 0.6978, \"y\": 0.5167}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986898, \"longitude\": 113.5437951, \"normalized\": {\"x\": 0.5347, \"y\": 0.3767}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1990072, \"longitude\": 113.5441146, \"normalized\": {\"x\": 0.7805, \"y\": 0.621}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1988717, \"longitude\": 113.5440071}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1988717,
    "longitude": 113.5440071,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:38:38.189537+00:00",
     "observed_at": "2026-09-30T14:38:38.189537+00:00",
     "retrieved_at": "2026-09-30T14:38:38.189537+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1988717,
        "longitude": 113.5440071,
        "normalized": {
         "x": 0.6978,
         "y": 0.5167
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986898,
        "longitude": 113.5437951,
        "normalized": {
         "x": 0.5347,
         "y": 0.3767
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1990072,
        "longitude": 113.5441146,
        "normalized": {
         "x": 0.7805,
         "y": 0.621
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1988717,
     "longitude": 113.5440071
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "F6939438FC",
   "occurred_at": "2026-09-30T22:38:02+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986364, \"longitude\": 113.5440331, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:38:02.512101+00:00\", \"observed_at\": \"2026-09-30T14:38:02.512101+00:00\", \"retrieved_at\": \"2026-09-30T14:38:02.512101+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984562, \"longitude\": 113.5438648, \"normalized\": {\"x\": 0.5883, \"y\": 0.1971}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986554, \"longitude\": 113.5437625, \"normalized\": {\"x\": 0.5096, \"y\": 0.3503}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986364, \"longitude\": 113.5440331, \"normalized\": {\"x\": 0.7178, \"y\": 0.3357}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984562, \"longitude\": 113.5438648}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986364,
    "longitude": 113.5440331,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:38:02.512101+00:00",
     "observed_at": "2026-09-30T14:38:02.512101+00:00",
     "retrieved_at": "2026-09-30T14:38:02.512101+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984562,
        "longitude": 113.5438648,
        "normalized": {
         "x": 0.5883,
         "y": 0.1971
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986554,
        "longitude": 113.5437625,
        "normalized": {
         "x": 0.5096,
         "y": 0.3503
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986364,
        "longitude": 113.5440331,
        "normalized": {
         "x": 0.7178,
         "y": 0.3357
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984562,
     "longitude": 113.5438648
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "EC3BA8E79D",
   "occurred_at": "2026-09-30T22:35:58+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:35:58.917775+00:00\", \"observed_at\": \"2026-09-30T14:35:58.917775+00:00\", \"retrieved_at\": \"2026-09-30T14:35:58.917775+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1987163, \"longitude\": 113.5439614, \"normalized\": {\"x\": 0.6626, \"y\": 0.3971}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984778, \"longitude\": 113.5437445, \"normalized\": {\"x\": 0.4958, \"y\": 0.2137}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1990953, \"longitude\": 113.5440391, \"normalized\": {\"x\": 0.7224, \"y\": 0.6887}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1987163, \"longitude\": 113.5439614}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:35:58.917775+00:00",
     "observed_at": "2026-09-30T14:35:58.917775+00:00",
     "retrieved_at": "2026-09-30T14:35:58.917775+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1987163,
        "longitude": 113.5439614,
        "normalized": {
         "x": 0.6626,
         "y": 0.3971
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984778,
        "longitude": 113.5437445,
        "normalized": {
         "x": 0.4958,
         "y": 0.2137
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1990953,
        "longitude": 113.5440391,
        "normalized": {
         "x": 0.7224,
         "y": 0.6887
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1987163,
     "longitude": 113.5439614
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "55AC48205D",
   "occurred_at": "2026-09-30T22:35:16+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990092, \"longitude\": 113.5440036, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:35:16.936378+00:00\", \"observed_at\": \"2026-09-30T14:35:16.936378+00:00\", \"retrieved_at\": \"2026-09-30T14:35:16.936378+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986669, \"longitude\": 113.5438555, \"normalized\": {\"x\": 0.5811, \"y\": 0.3591}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984095, \"longitude\": 113.5436969, \"normalized\": {\"x\": 0.4591, \"y\": 0.1612}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1990092, \"longitude\": 113.5440036, \"normalized\": {\"x\": 0.6951, \"y\": 0.6224}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986669, \"longitude\": 113.5438555}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990092,
    "longitude": 113.5440036,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:35:16.936378+00:00",
     "observed_at": "2026-09-30T14:35:16.936378+00:00",
     "retrieved_at": "2026-09-30T14:35:16.936378+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986669,
        "longitude": 113.5438555,
        "normalized": {
         "x": 0.5811,
         "y": 0.3591
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984095,
        "longitude": 113.5436969,
        "normalized": {
         "x": 0.4591,
         "y": 0.1612
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1990092,
        "longitude": 113.5440036,
        "normalized": {
         "x": 0.6951,
         "y": 0.6224
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986669,
     "longitude": 113.5438555
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "8EE3484E0E",
   "occurred_at": "2026-09-30T22:28:34+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:28:34.670452+00:00\", \"observed_at\": \"2026-09-30T14:28:34.670452+00:00\", \"retrieved_at\": \"2026-09-30T14:28:34.670452+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984581, \"longitude\": 113.5438574, \"normalized\": {\"x\": 0.5826, \"y\": 0.1985}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990835, \"longitude\": 113.5439661, \"normalized\": {\"x\": 0.6662, \"y\": 0.6796}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.198824, \"longitude\": 113.5441353, \"normalized\": {\"x\": 0.7964, \"y\": 0.48}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984581, \"longitude\": 113.5438574}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:28:34.670452+00:00",
     "observed_at": "2026-09-30T14:28:34.670452+00:00",
     "retrieved_at": "2026-09-30T14:28:34.670452+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984581,
        "longitude": 113.5438574,
        "normalized": {
         "x": 0.5826,
         "y": 0.1985
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990835,
        "longitude": 113.5439661,
        "normalized": {
         "x": 0.6662,
         "y": 0.6796
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.198824,
        "longitude": 113.5441353,
        "normalized": {
         "x": 0.7964,
         "y": 0.48
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984581,
     "longitude": 113.5438574
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "DBBE942F31",
   "occurred_at": "2026-09-30T22:27:04+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.198615, \"longitude\": 113.5440102, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:27:04.778478+00:00\", \"observed_at\": \"2026-09-30T14:27:04.778478+00:00\", \"retrieved_at\": \"2026-09-30T14:27:04.778478+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985697, \"longitude\": 113.5438675, \"normalized\": {\"x\": 0.5904, \"y\": 0.2844}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990345, \"longitude\": 113.5439128, \"normalized\": {\"x\": 0.6252, \"y\": 0.642}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.198615, \"longitude\": 113.5440102, \"normalized\": {\"x\": 0.7001, \"y\": 0.3192}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985697, \"longitude\": 113.5438675}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.198615,
    "longitude": 113.5440102,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:27:04.778478+00:00",
     "observed_at": "2026-09-30T14:27:04.778478+00:00",
     "retrieved_at": "2026-09-30T14:27:04.778478+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985697,
        "longitude": 113.5438675,
        "normalized": {
         "x": 0.5904,
         "y": 0.2844
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990345,
        "longitude": 113.5439128,
        "normalized": {
         "x": 0.6252,
         "y": 0.642
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.198615,
        "longitude": 113.5440102,
        "normalized": {
         "x": 0.7001,
         "y": 0.3192
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985697,
     "longitude": 113.5438675
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "681C1DDA9B",
   "occurred_at": "2026-09-30T22:27:02+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990235, \"longitude\": 113.5439078, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:27:02.652747+00:00\", \"observed_at\": \"2026-09-30T14:27:02.652747+00:00\", \"retrieved_at\": \"2026-09-30T14:27:02.652747+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985805, \"longitude\": 113.5438812, \"normalized\": {\"x\": 0.6009, \"y\": 0.2927}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990235, \"longitude\": 113.5439078, \"normalized\": {\"x\": 0.6214, \"y\": 0.6335}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986004, \"longitude\": 113.5440009, \"normalized\": {\"x\": 0.693, \"y\": 0.308}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985805, \"longitude\": 113.5438812}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990235,
    "longitude": 113.5439078,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:27:02.652747+00:00",
     "observed_at": "2026-09-30T14:27:02.652747+00:00",
     "retrieved_at": "2026-09-30T14:27:02.652747+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985805,
        "longitude": 113.5438812,
        "normalized": {
         "x": 0.6009,
         "y": 0.2927
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990235,
        "longitude": 113.5439078,
        "normalized": {
         "x": 0.6214,
         "y": 0.6335
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986004,
        "longitude": 113.5440009,
        "normalized": {
         "x": 0.693,
         "y": 0.308
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985805,
     "longitude": 113.5438812
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "101DEDE254",
   "occurred_at": "2026-09-30T22:20:24+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1988019, \"longitude\": 113.5440114, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:20:24.454588+00:00\", \"observed_at\": \"2026-09-30T14:20:24.454588+00:00\", \"retrieved_at\": \"2026-09-30T14:20:24.454588+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986557, \"longitude\": 113.5438757, \"normalized\": {\"x\": 0.5967, \"y\": 0.3505}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1988019, \"longitude\": 113.5440114, \"normalized\": {\"x\": 0.701, \"y\": 0.463}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985558, \"longitude\": 113.5436913, \"normalized\": {\"x\": 0.4549, \"y\": 0.2737}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986557, \"longitude\": 113.5438757}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1988019,
    "longitude": 113.5440114,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:20:24.454588+00:00",
     "observed_at": "2026-09-30T14:20:24.454588+00:00",
     "retrieved_at": "2026-09-30T14:20:24.454588+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986557,
        "longitude": 113.5438757,
        "normalized": {
         "x": 0.5967,
         "y": 0.3505
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1988019,
        "longitude": 113.5440114,
        "normalized": {
         "x": 0.701,
         "y": 0.463
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985558,
        "longitude": 113.5436913,
        "normalized": {
         "x": 0.4549,
         "y": 0.2737
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986557,
     "longitude": 113.5438757
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "62EDD7584E",
   "occurred_at": "2026-09-30T22:03:25+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986407, \"longitude\": 113.544011, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:03:25.696345+00:00\", \"observed_at\": \"2026-09-30T14:03:25.696345+00:00\", \"retrieved_at\": \"2026-09-30T14:03:25.696345+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984235, \"longitude\": 113.5439136, \"normalized\": {\"x\": 0.6259, \"y\": 0.1719}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986407, \"longitude\": 113.544011, \"normalized\": {\"x\": 0.7008, \"y\": 0.339}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985942, \"longitude\": 113.5438965, \"normalized\": {\"x\": 0.6127, \"y\": 0.3032}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984235, \"longitude\": 113.5439136}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986407,
    "longitude": 113.544011,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:03:25.696345+00:00",
     "observed_at": "2026-09-30T14:03:25.696345+00:00",
     "retrieved_at": "2026-09-30T14:03:25.696345+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984235,
        "longitude": 113.5439136,
        "normalized": {
         "x": 0.6259,
         "y": 0.1719
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986407,
        "longitude": 113.544011,
        "normalized": {
         "x": 0.7008,
         "y": 0.339
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985942,
        "longitude": 113.5438965,
        "normalized": {
         "x": 0.6127,
         "y": 0.3032
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984235,
     "longitude": 113.5439136
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "69490C949E",
   "occurred_at": "2026-09-30T22:00:25+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986039, \"longitude\": 113.5440281, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T14:00:25.493379+00:00\", \"observed_at\": \"2026-09-30T14:00:25.493379+00:00\", \"retrieved_at\": \"2026-09-30T14:00:25.493379+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984597, \"longitude\": 113.5438686, \"normalized\": {\"x\": 0.5913, \"y\": 0.1998}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985785, \"longitude\": 113.5438651, \"normalized\": {\"x\": 0.5885, \"y\": 0.2912}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986039, \"longitude\": 113.5440281, \"normalized\": {\"x\": 0.7139, \"y\": 0.3107}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984597, \"longitude\": 113.5438686}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986039,
    "longitude": 113.5440281,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T14:00:25.493379+00:00",
     "observed_at": "2026-09-30T14:00:25.493379+00:00",
     "retrieved_at": "2026-09-30T14:00:25.493379+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984597,
        "longitude": 113.5438686,
        "normalized": {
         "x": 0.5913,
         "y": 0.1998
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985785,
        "longitude": 113.5438651,
        "normalized": {
         "x": 0.5885,
         "y": 0.2912
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986039,
        "longitude": 113.5440281,
        "normalized": {
         "x": 0.7139,
         "y": 0.3107
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984597,
     "longitude": 113.5438686
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "337EC6061E",
   "occurred_at": "2026-09-30T21:57:52+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990309, \"longitude\": 113.5439501, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:57:52.355966+00:00\", \"observed_at\": \"2026-09-30T13:57:52.355966+00:00\", \"retrieved_at\": \"2026-09-30T13:57:52.355966+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1990309, \"longitude\": 113.5439501, \"normalized\": {\"x\": 0.6539, \"y\": 0.6392}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984913, \"longitude\": 113.5437358, \"normalized\": {\"x\": 0.4891, \"y\": 0.224}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985593, \"longitude\": 113.5437962, \"normalized\": {\"x\": 0.5355, \"y\": 0.2764}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1990309, \"longitude\": 113.5439501}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990309,
    "longitude": 113.5439501,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:57:52.355966+00:00",
     "observed_at": "2026-09-30T13:57:52.355966+00:00",
     "retrieved_at": "2026-09-30T13:57:52.355966+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1990309,
        "longitude": 113.5439501,
        "normalized": {
         "x": 0.6539,
         "y": 0.6392
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984913,
        "longitude": 113.5437358,
        "normalized": {
         "x": 0.4891,
         "y": 0.224
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985593,
        "longitude": 113.5437962,
        "normalized": {
         "x": 0.5355,
         "y": 0.2764
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1990309,
     "longitude": 113.5439501
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "81DDCD569D",
   "occurred_at": "2026-09-30T21:53:15+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990141, \"longitude\": 113.5440001, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:53:15.485487+00:00\", \"observed_at\": \"2026-09-30T13:53:15.485487+00:00\", \"retrieved_at\": \"2026-09-30T13:53:15.485487+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.19861, \"longitude\": 113.543734, \"normalized\": {\"x\": 0.4877, \"y\": 0.3154}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990141, \"longitude\": 113.5440001, \"normalized\": {\"x\": 0.6924, \"y\": 0.6263}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984632, \"longitude\": 113.5437034, \"normalized\": {\"x\": 0.4641, \"y\": 0.2025}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.19861, \"longitude\": 113.543734}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990141,
    "longitude": 113.5440001,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:53:15.485487+00:00",
     "observed_at": "2026-09-30T13:53:15.485487+00:00",
     "retrieved_at": "2026-09-30T13:53:15.485487+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.19861,
        "longitude": 113.543734,
        "normalized": {
         "x": 0.4877,
         "y": 0.3154
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990141,
        "longitude": 113.5440001,
        "normalized": {
         "x": 0.6924,
         "y": 0.6263
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984632,
        "longitude": 113.5437034,
        "normalized": {
         "x": 0.4641,
         "y": 0.2025
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.19861,
     "longitude": 113.543734
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "80FDD4A95D",
   "occurred_at": "2026-09-30T21:48:10+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1988865, \"longitude\": 113.5440153, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:48:10.367413+00:00\", \"observed_at\": \"2026-09-30T13:48:10.367413+00:00\", \"retrieved_at\": \"2026-09-30T13:48:10.367413+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984675, \"longitude\": 113.543951, \"normalized\": {\"x\": 0.6546, \"y\": 0.2057}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985666, \"longitude\": 113.5437549, \"normalized\": {\"x\": 0.5037, \"y\": 0.282}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1988865, \"longitude\": 113.5440153, \"normalized\": {\"x\": 0.7041, \"y\": 0.5281}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984675, \"longitude\": 113.543951}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1988865,
    "longitude": 113.5440153,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:48:10.367413+00:00",
     "observed_at": "2026-09-30T13:48:10.367413+00:00",
     "retrieved_at": "2026-09-30T13:48:10.367413+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984675,
        "longitude": 113.543951,
        "normalized": {
         "x": 0.6546,
         "y": 0.2057
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985666,
        "longitude": 113.5437549,
        "normalized": {
         "x": 0.5037,
         "y": 0.282
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1988865,
        "longitude": 113.5440153,
        "normalized": {
         "x": 0.7041,
         "y": 0.5281
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984675,
     "longitude": 113.543951
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "5D60104F19",
   "occurred_at": "2026-09-30T21:46:23+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:46:23.362339+00:00\", \"observed_at\": \"2026-09-30T13:46:23.362339+00:00\", \"retrieved_at\": \"2026-09-30T13:46:23.362339+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984935, \"longitude\": 113.5438676, \"normalized\": {\"x\": 0.5905, \"y\": 0.2258}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1989421, \"longitude\": 113.5439237, \"normalized\": {\"x\": 0.6336, \"y\": 0.5709}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985001, \"longitude\": 113.54357, \"normalized\": {\"x\": 0.3616, \"y\": 0.2308}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984935, \"longitude\": 113.5438676}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:46:23.362339+00:00",
     "observed_at": "2026-09-30T13:46:23.362339+00:00",
     "retrieved_at": "2026-09-30T13:46:23.362339+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984935,
        "longitude": 113.5438676,
        "normalized": {
         "x": 0.5905,
         "y": 0.2258
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1989421,
        "longitude": 113.5439237,
        "normalized": {
         "x": 0.6336,
         "y": 0.5709
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985001,
        "longitude": 113.54357,
        "normalized": {
         "x": 0.3616,
         "y": 0.2308
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984935,
     "longitude": 113.5438676
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "1E85439C14",
   "occurred_at": "2026-09-30T21:44:48+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990096, \"longitude\": 113.5439725, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:44:48.941279+00:00\", \"observed_at\": \"2026-09-30T13:44:48.941279+00:00\", \"retrieved_at\": \"2026-09-30T13:44:48.941279+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1990096, \"longitude\": 113.5439725, \"normalized\": {\"x\": 0.6711, \"y\": 0.6228}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1991494, \"longitude\": 113.544027, \"normalized\": {\"x\": 0.7131, \"y\": 0.7303}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.198476, \"longitude\": 113.5435412, \"normalized\": {\"x\": 0.3394, \"y\": 0.2123}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1990096, \"longitude\": 113.5439725}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990096,
    "longitude": 113.5439725,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:44:48.941279+00:00",
     "observed_at": "2026-09-30T13:44:48.941279+00:00",
     "retrieved_at": "2026-09-30T13:44:48.941279+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1990096,
        "longitude": 113.5439725,
        "normalized": {
         "x": 0.6711,
         "y": 0.6228
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1991494,
        "longitude": 113.544027,
        "normalized": {
         "x": 0.7131,
         "y": 0.7303
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.198476,
        "longitude": 113.5435412,
        "normalized": {
         "x": 0.3394,
         "y": 0.2123
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1990096,
     "longitude": 113.5439725
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "9DB90F9A74",
   "occurred_at": "2026-09-30T21:44:44+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984865, \"longitude\": 113.5435695, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:44:44.750366+00:00\", \"observed_at\": \"2026-09-30T13:44:44.750366+00:00\", \"retrieved_at\": \"2026-09-30T13:44:44.750366+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1989978, \"longitude\": 113.54397, \"normalized\": {\"x\": 0.6693, \"y\": 0.6137}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1991305, \"longitude\": 113.5440208, \"normalized\": {\"x\": 0.7083, \"y\": 0.7158}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984865, \"longitude\": 113.5435695, \"normalized\": {\"x\": 0.3611, \"y\": 0.2204}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1989978, \"longitude\": 113.54397}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984865,
    "longitude": 113.5435695,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:44:44.750366+00:00",
     "observed_at": "2026-09-30T13:44:44.750366+00:00",
     "retrieved_at": "2026-09-30T13:44:44.750366+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1989978,
        "longitude": 113.54397,
        "normalized": {
         "x": 0.6693,
         "y": 0.6137
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1991305,
        "longitude": 113.5440208,
        "normalized": {
         "x": 0.7083,
         "y": 0.7158
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984865,
        "longitude": 113.5435695,
        "normalized": {
         "x": 0.3611,
         "y": 0.2204
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1989978,
     "longitude": 113.54397
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "3DD6530E14",
   "occurred_at": "2026-09-30T21:44:25+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990195, \"longitude\": 113.5439843, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:44:25.875919+00:00\", \"observed_at\": \"2026-09-30T13:44:25.875919+00:00\", \"retrieved_at\": \"2026-09-30T13:44:25.875919+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1989224, \"longitude\": 113.5439545, \"normalized\": {\"x\": 0.6573, \"y\": 0.5557}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990195, \"longitude\": 113.5439843, \"normalized\": {\"x\": 0.6803, \"y\": 0.6304}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985505, \"longitude\": 113.543741, \"normalized\": {\"x\": 0.4931, \"y\": 0.2696}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1989224, \"longitude\": 113.5439545}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990195,
    "longitude": 113.5439843,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:44:25.875919+00:00",
     "observed_at": "2026-09-30T13:44:25.875919+00:00",
     "retrieved_at": "2026-09-30T13:44:25.875919+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1989224,
        "longitude": 113.5439545,
        "normalized": {
         "x": 0.6573,
         "y": 0.5557
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990195,
        "longitude": 113.5439843,
        "normalized": {
         "x": 0.6803,
         "y": 0.6304
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985505,
        "longitude": 113.543741,
        "normalized": {
         "x": 0.4931,
         "y": 0.2696
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1989224,
     "longitude": 113.5439545
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "DE6008D7EF",
   "occurred_at": "2026-09-30T21:37:36+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.198601, \"longitude\": 113.5435761, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:37:36.876584+00:00\", \"observed_at\": \"2026-09-30T13:37:36.876584+00:00\", \"retrieved_at\": \"2026-09-30T13:37:36.876584+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984732, \"longitude\": 113.5436209, \"normalized\": {\"x\": 0.4007, \"y\": 0.2101}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984904, \"longitude\": 113.5437286, \"normalized\": {\"x\": 0.4836, \"y\": 0.2234}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.198601, \"longitude\": 113.5435761, \"normalized\": {\"x\": 0.3662, \"y\": 0.3084}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984732, \"longitude\": 113.5436209}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.198601,
    "longitude": 113.5435761,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:37:36.876584+00:00",
     "observed_at": "2026-09-30T13:37:36.876584+00:00",
     "retrieved_at": "2026-09-30T13:37:36.876584+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984732,
        "longitude": 113.5436209,
        "normalized": {
         "x": 0.4007,
         "y": 0.2101
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984904,
        "longitude": 113.5437286,
        "normalized": {
         "x": 0.4836,
         "y": 0.2234
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.198601,
        "longitude": 113.5435761,
        "normalized": {
         "x": 0.3662,
         "y": 0.3084
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984732,
     "longitude": 113.5436209
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "B4DE166507",
   "occurred_at": "2026-09-30T21:35:45+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.19852, \"longitude\": 113.543582, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:35:45.934359+00:00\", \"observed_at\": \"2026-09-30T13:35:45.934359+00:00\", \"retrieved_at\": \"2026-09-30T13:35:45.934359+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.19852, \"longitude\": 113.543582, \"normalized\": {\"x\": 0.3708, \"y\": 0.2461}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986816, \"longitude\": 113.5438185, \"normalized\": {\"x\": 0.5527, \"y\": 0.3705}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984794, \"longitude\": 113.5438528, \"normalized\": {\"x\": 0.5791, \"y\": 0.2149}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.19852, \"longitude\": 113.543582}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.19852,
    "longitude": 113.543582,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:35:45.934359+00:00",
     "observed_at": "2026-09-30T13:35:45.934359+00:00",
     "retrieved_at": "2026-09-30T13:35:45.934359+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.19852,
        "longitude": 113.543582,
        "normalized": {
         "x": 0.3708,
         "y": 0.2461
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986816,
        "longitude": 113.5438185,
        "normalized": {
         "x": 0.5527,
         "y": 0.3705
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984794,
        "longitude": 113.5438528,
        "normalized": {
         "x": 0.5791,
         "y": 0.2149
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.19852,
     "longitude": 113.543582
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "D13DCD9D52",
   "occurred_at": "2026-09-30T21:30:38+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1985625, \"longitude\": 113.5435808, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:30:38.669299+00:00\", \"observed_at\": \"2026-09-30T13:30:38.669299+00:00\", \"retrieved_at\": \"2026-09-30T13:30:38.669299+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984556, \"longitude\": 113.5439294, \"normalized\": {\"x\": 0.638, \"y\": 0.1966}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984223, \"longitude\": 113.5437172, \"normalized\": {\"x\": 0.4748, \"y\": 0.171}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985625, \"longitude\": 113.5435808, \"normalized\": {\"x\": 0.3699, \"y\": 0.2788}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984556, \"longitude\": 113.5439294}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1985625,
    "longitude": 113.5435808,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:30:38.669299+00:00",
     "observed_at": "2026-09-30T13:30:38.669299+00:00",
     "retrieved_at": "2026-09-30T13:30:38.669299+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984556,
        "longitude": 113.5439294,
        "normalized": {
         "x": 0.638,
         "y": 0.1966
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984223,
        "longitude": 113.5437172,
        "normalized": {
         "x": 0.4748,
         "y": 0.171
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985625,
        "longitude": 113.5435808,
        "normalized": {
         "x": 0.3699,
         "y": 0.2788
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984556,
     "longitude": 113.5439294
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "1157E02A91",
   "occurred_at": "2026-09-30T21:23:08+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.199006, \"longitude\": 113.5439832, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:23:08.018458+00:00\", \"observed_at\": \"2026-09-30T13:23:08.018458+00:00\", \"retrieved_at\": \"2026-09-30T13:23:08.018458+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1987099, \"longitude\": 113.5439112, \"normalized\": {\"x\": 0.624, \"y\": 0.3922}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.199006, \"longitude\": 113.5439832, \"normalized\": {\"x\": 0.6794, \"y\": 0.62}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985039, \"longitude\": 113.5438857, \"normalized\": {\"x\": 0.6044, \"y\": 0.2338}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1987099, \"longitude\": 113.5439112}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.199006,
    "longitude": 113.5439832,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:23:08.018458+00:00",
     "observed_at": "2026-09-30T13:23:08.018458+00:00",
     "retrieved_at": "2026-09-30T13:23:08.018458+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1987099,
        "longitude": 113.5439112,
        "normalized": {
         "x": 0.624,
         "y": 0.3922
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.199006,
        "longitude": 113.5439832,
        "normalized": {
         "x": 0.6794,
         "y": 0.62
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985039,
        "longitude": 113.5438857,
        "normalized": {
         "x": 0.6044,
         "y": 0.2338
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1987099,
     "longitude": 113.5439112
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "839D50A0DE",
   "occurred_at": "2026-09-30T21:22:26+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:22:26.097728+00:00\", \"observed_at\": \"2026-09-30T13:22:26.097728+00:00\", \"retrieved_at\": \"2026-09-30T13:22:26.097728+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1991164, \"longitude\": 113.5440438, \"normalized\": {\"x\": 0.726, \"y\": 0.7049}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1988839, \"longitude\": 113.5439424, \"normalized\": {\"x\": 0.648, \"y\": 0.5261}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985055, \"longitude\": 113.5438074, \"normalized\": {\"x\": 0.5442, \"y\": 0.235}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1991164, \"longitude\": 113.5440438}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:22:26.097728+00:00",
     "observed_at": "2026-09-30T13:22:26.097728+00:00",
     "retrieved_at": "2026-09-30T13:22:26.097728+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1991164,
        "longitude": 113.5440438,
        "normalized": {
         "x": 0.726,
         "y": 0.7049
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1988839,
        "longitude": 113.5439424,
        "normalized": {
         "x": 0.648,
         "y": 0.5261
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985055,
        "longitude": 113.5438074,
        "normalized": {
         "x": 0.5442,
         "y": 0.235
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1991164,
     "longitude": 113.5440438
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "5EA827D08C",
   "occurred_at": "2026-09-30T21:21:10+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990259, \"longitude\": 113.5439868, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:21:10.642110+00:00\", \"observed_at\": \"2026-09-30T13:21:10.642110+00:00\", \"retrieved_at\": \"2026-09-30T13:21:10.642110+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1990259, \"longitude\": 113.5439868, \"normalized\": {\"x\": 0.6822, \"y\": 0.6353}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985673, \"longitude\": 113.5438205, \"normalized\": {\"x\": 0.5543, \"y\": 0.2826}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985536, \"longitude\": 113.5437759, \"normalized\": {\"x\": 0.5199, \"y\": 0.272}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1990259, \"longitude\": 113.5439868}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990259,
    "longitude": 113.5439868,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:21:10.642110+00:00",
     "observed_at": "2026-09-30T13:21:10.642110+00:00",
     "retrieved_at": "2026-09-30T13:21:10.642110+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1990259,
        "longitude": 113.5439868,
        "normalized": {
         "x": 0.6822,
         "y": 0.6353
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985673,
        "longitude": 113.5438205,
        "normalized": {
         "x": 0.5543,
         "y": 0.2826
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985536,
        "longitude": 113.5437759,
        "normalized": {
         "x": 0.5199,
         "y": 0.272
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1990259,
     "longitude": 113.5439868
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "C4EC472A25",
   "occurred_at": "2026-09-30T21:11:42+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:11:42.322985+00:00\", \"observed_at\": \"2026-09-30T13:11:42.322985+00:00\", \"retrieved_at\": \"2026-09-30T13:11:42.322985+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1990804, \"longitude\": 113.5441381, \"normalized\": {\"x\": 0.7985, \"y\": 0.6772}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1988266, \"longitude\": 113.5440647, \"normalized\": {\"x\": 0.7421, \"y\": 0.482}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985342, \"longitude\": 113.543785, \"normalized\": {\"x\": 0.527, \"y\": 0.2571}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1990804, \"longitude\": 113.5441381}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:11:42.322985+00:00",
     "observed_at": "2026-09-30T13:11:42.322985+00:00",
     "retrieved_at": "2026-09-30T13:11:42.322985+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1990804,
        "longitude": 113.5441381,
        "normalized": {
         "x": 0.7985,
         "y": 0.6772
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1988266,
        "longitude": 113.5440647,
        "normalized": {
         "x": 0.7421,
         "y": 0.482
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985342,
        "longitude": 113.543785,
        "normalized": {
         "x": 0.527,
         "y": 0.2571
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1990804,
     "longitude": 113.5441381
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "6F917C8010",
   "occurred_at": "2026-09-30T21:11:29+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1987472, \"longitude\": 113.5440111, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:11:29.801226+00:00\", \"observed_at\": \"2026-09-30T13:11:29.801226+00:00\", \"retrieved_at\": \"2026-09-30T13:11:29.801226+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1991854, \"longitude\": 113.5441919, \"normalized\": {\"x\": 0.8399, \"y\": 0.758}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1987472, \"longitude\": 113.5440111, \"normalized\": {\"x\": 0.7008, \"y\": 0.4209}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985322, \"longitude\": 113.5437673, \"normalized\": {\"x\": 0.5133, \"y\": 0.2555}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1991854, \"longitude\": 113.5441919}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1987472,
    "longitude": 113.5440111,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:11:29.801226+00:00",
     "observed_at": "2026-09-30T13:11:29.801226+00:00",
     "retrieved_at": "2026-09-30T13:11:29.801226+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1991854,
        "longitude": 113.5441919,
        "normalized": {
         "x": 0.8399,
         "y": 0.758
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1987472,
        "longitude": 113.5440111,
        "normalized": {
         "x": 0.7008,
         "y": 0.4209
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985322,
        "longitude": 113.5437673,
        "normalized": {
         "x": 0.5133,
         "y": 0.2555
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1991854,
     "longitude": 113.5441919
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "755B9ED790",
   "occurred_at": "2026-09-30T21:10:10+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1988617, \"longitude\": 113.5440191, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:10:10.234691+00:00\", \"observed_at\": \"2026-09-30T13:10:10.234691+00:00\", \"retrieved_at\": \"2026-09-30T13:10:10.234691+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1988617, \"longitude\": 113.5440191, \"normalized\": {\"x\": 0.707, \"y\": 0.509}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985256, \"longitude\": 113.5437868, \"normalized\": {\"x\": 0.5283, \"y\": 0.2504}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985062, \"longitude\": 113.5437914, \"normalized\": {\"x\": 0.5319, \"y\": 0.2355}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1988617, \"longitude\": 113.5440191}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1988617,
    "longitude": 113.5440191,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:10:10.234691+00:00",
     "observed_at": "2026-09-30T13:10:10.234691+00:00",
     "retrieved_at": "2026-09-30T13:10:10.234691+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1988617,
        "longitude": 113.5440191,
        "normalized": {
         "x": 0.707,
         "y": 0.509
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985256,
        "longitude": 113.5437868,
        "normalized": {
         "x": 0.5283,
         "y": 0.2504
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985062,
        "longitude": 113.5437914,
        "normalized": {
         "x": 0.5319,
         "y": 0.2355
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1988617,
     "longitude": 113.5440191
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "0AFC2F2D92",
   "occurred_at": "2026-09-30T21:05:53+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986454, \"longitude\": 113.5440159, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:05:53.349640+00:00\", \"observed_at\": \"2026-09-30T13:05:53.349640+00:00\", \"retrieved_at\": \"2026-09-30T13:05:53.349640+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984993, \"longitude\": 113.5438733, \"normalized\": {\"x\": 0.5949, \"y\": 0.2303}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986454, \"longitude\": 113.5440159, \"normalized\": {\"x\": 0.7046, \"y\": 0.3426}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984173, \"longitude\": 113.543876, \"normalized\": {\"x\": 0.5969, \"y\": 0.1671}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984993, \"longitude\": 113.5438733}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986454,
    "longitude": 113.5440159,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:05:53.349640+00:00",
     "observed_at": "2026-09-30T13:05:53.349640+00:00",
     "retrieved_at": "2026-09-30T13:05:53.349640+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984993,
        "longitude": 113.5438733,
        "normalized": {
         "x": 0.5949,
         "y": 0.2303
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986454,
        "longitude": 113.5440159,
        "normalized": {
         "x": 0.7046,
         "y": 0.3426
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984173,
        "longitude": 113.543876,
        "normalized": {
         "x": 0.5969,
         "y": 0.1671
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984993,
     "longitude": 113.5438733
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "18B5B71D74",
   "occurred_at": "2026-09-30T21:02:22+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984687, \"longitude\": 113.5435866, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T13:02:21.927909+00:00\", \"observed_at\": \"2026-09-30T13:02:21.927909+00:00\", \"retrieved_at\": \"2026-09-30T13:02:21.927909+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984687, \"longitude\": 113.5435866, \"normalized\": {\"x\": 0.3743, \"y\": 0.2067}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985239, \"longitude\": 113.543805, \"normalized\": {\"x\": 0.5423, \"y\": 0.2491}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985814, \"longitude\": 113.543724, \"normalized\": {\"x\": 0.48, \"y\": 0.2934}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984687, \"longitude\": 113.5435866}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984687,
    "longitude": 113.5435866,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T13:02:21.927909+00:00",
     "observed_at": "2026-09-30T13:02:21.927909+00:00",
     "retrieved_at": "2026-09-30T13:02:21.927909+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984687,
        "longitude": 113.5435866,
        "normalized": {
         "x": 0.3743,
         "y": 0.2067
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985239,
        "longitude": 113.543805,
        "normalized": {
         "x": 0.5423,
         "y": 0.2491
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985814,
        "longitude": 113.543724,
        "normalized": {
         "x": 0.48,
         "y": 0.2934
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984687,
     "longitude": 113.5435866
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "2FD4B6AA53",
   "occurred_at": "2026-09-30T20:54:13+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1989029, \"longitude\": 113.5440033, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:54:13.391115+00:00\", \"observed_at\": \"2026-09-30T12:54:13.391115+00:00\", \"retrieved_at\": \"2026-09-30T12:54:13.391115+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.199049, \"longitude\": 113.5440472, \"normalized\": {\"x\": 0.7286, \"y\": 0.6531}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1989029, \"longitude\": 113.5440033, \"normalized\": {\"x\": 0.6949, \"y\": 0.5407}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985695, \"longitude\": 113.5439127, \"normalized\": {\"x\": 0.6251, \"y\": 0.2842}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.199049, \"longitude\": 113.5440472}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1989029,
    "longitude": 113.5440033,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:54:13.391115+00:00",
     "observed_at": "2026-09-30T12:54:13.391115+00:00",
     "retrieved_at": "2026-09-30T12:54:13.391115+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.199049,
        "longitude": 113.5440472,
        "normalized": {
         "x": 0.7286,
         "y": 0.6531
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1989029,
        "longitude": 113.5440033,
        "normalized": {
         "x": 0.6949,
         "y": 0.5407
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985695,
        "longitude": 113.5439127,
        "normalized": {
         "x": 0.6251,
         "y": 0.2842
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.199049,
     "longitude": 113.5440472
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "52F1799E83",
   "occurred_at": "2026-09-30T20:52:47+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1988685, \"longitude\": 113.544009, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:52:47.272952+00:00\", \"observed_at\": \"2026-09-30T12:52:47.272952+00:00\", \"retrieved_at\": \"2026-09-30T12:52:47.272952+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1988685, \"longitude\": 113.544009, \"normalized\": {\"x\": 0.6992, \"y\": 0.5142}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986334, \"longitude\": 113.5439382, \"normalized\": {\"x\": 0.6448, \"y\": 0.3334}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985405, \"longitude\": 113.5437444, \"normalized\": {\"x\": 0.4957, \"y\": 0.2619}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1988685, \"longitude\": 113.544009}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1988685,
    "longitude": 113.544009,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:52:47.272952+00:00",
     "observed_at": "2026-09-30T12:52:47.272952+00:00",
     "retrieved_at": "2026-09-30T12:52:47.272952+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1988685,
        "longitude": 113.544009,
        "normalized": {
         "x": 0.6992,
         "y": 0.5142
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986334,
        "longitude": 113.5439382,
        "normalized": {
         "x": 0.6448,
         "y": 0.3334
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985405,
        "longitude": 113.5437444,
        "normalized": {
         "x": 0.4957,
         "y": 0.2619
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1988685,
     "longitude": 113.544009
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "FB909D8DBC",
   "occurred_at": "2026-09-30T20:51:54+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:51:54.898704+00:00\", \"observed_at\": \"2026-09-30T12:51:54.898704+00:00\", \"retrieved_at\": \"2026-09-30T12:51:54.898704+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985778, \"longitude\": 113.5439461, \"normalized\": {\"x\": 0.6509, \"y\": 0.2906}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1988695, \"longitude\": 113.5439509, \"normalized\": {\"x\": 0.6545, \"y\": 0.515}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985957, \"longitude\": 113.5434179, \"normalized\": {\"x\": 0.2446, \"y\": 0.3044}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985778, \"longitude\": 113.5439461}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:51:54.898704+00:00",
     "observed_at": "2026-09-30T12:51:54.898704+00:00",
     "retrieved_at": "2026-09-30T12:51:54.898704+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985778,
        "longitude": 113.5439461,
        "normalized": {
         "x": 0.6509,
         "y": 0.2906
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1988695,
        "longitude": 113.5439509,
        "normalized": {
         "x": 0.6545,
         "y": 0.515
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985957,
        "longitude": 113.5434179,
        "normalized": {
         "x": 0.2446,
         "y": 0.3044
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985778,
     "longitude": 113.5439461
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "A7FA1A4708",
   "occurred_at": "2026-09-30T20:50:56+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1985469, \"longitude\": 113.5435873, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:50:56.034352+00:00\", \"observed_at\": \"2026-09-30T12:50:56.034352+00:00\", \"retrieved_at\": \"2026-09-30T12:50:56.034352+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.198547, \"longitude\": 113.5438454, \"normalized\": {\"x\": 0.5734, \"y\": 0.267}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1992198, \"longitude\": 113.5439708, \"normalized\": {\"x\": 0.6699, \"y\": 0.7845}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985469, \"longitude\": 113.5435873, \"normalized\": {\"x\": 0.3749, \"y\": 0.2668}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.198547, \"longitude\": 113.5438454}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1985469,
    "longitude": 113.5435873,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:50:56.034352+00:00",
     "observed_at": "2026-09-30T12:50:56.034352+00:00",
     "retrieved_at": "2026-09-30T12:50:56.034352+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.198547,
        "longitude": 113.5438454,
        "normalized": {
         "x": 0.5734,
         "y": 0.267
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1992198,
        "longitude": 113.5439708,
        "normalized": {
         "x": 0.6699,
         "y": 0.7845
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985469,
        "longitude": 113.5435873,
        "normalized": {
         "x": 0.3749,
         "y": 0.2668
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.198547,
     "longitude": 113.5438454
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "983494D7D4",
   "occurred_at": "2026-09-30T20:50:24+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:50:24.716903+00:00\", \"observed_at\": \"2026-09-30T12:50:24.716903+00:00\", \"retrieved_at\": \"2026-09-30T12:50:24.716903+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984964, \"longitude\": 113.5436201, \"normalized\": {\"x\": 0.4001, \"y\": 0.228}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1991341, \"longitude\": 113.5439692, \"normalized\": {\"x\": 0.6686, \"y\": 0.7185}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984709, \"longitude\": 113.5438512, \"normalized\": {\"x\": 0.5778, \"y\": 0.2084}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984964, \"longitude\": 113.5436201}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:50:24.716903+00:00",
     "observed_at": "2026-09-30T12:50:24.716903+00:00",
     "retrieved_at": "2026-09-30T12:50:24.716903+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984964,
        "longitude": 113.5436201,
        "normalized": {
         "x": 0.4001,
         "y": 0.228
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1991341,
        "longitude": 113.5439692,
        "normalized": {
         "x": 0.6686,
         "y": 0.7185
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984709,
        "longitude": 113.5438512,
        "normalized": {
         "x": 0.5778,
         "y": 0.2084
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984964,
     "longitude": 113.5436201
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "1E636F340B",
   "occurred_at": "2026-09-30T20:50:01+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990192, \"longitude\": 113.5439669, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:50:01.456623+00:00\", \"observed_at\": \"2026-09-30T12:50:01.456623+00:00\", \"retrieved_at\": \"2026-09-30T12:50:01.456623+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984877, \"longitude\": 113.543532, \"normalized\": {\"x\": 0.3323, \"y\": 0.2213}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990192, \"longitude\": 113.5439669, \"normalized\": {\"x\": 0.6669, \"y\": 0.6301}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.198446, \"longitude\": 113.543916, \"normalized\": {\"x\": 0.6277, \"y\": 0.1892}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984877, \"longitude\": 113.543532}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990192,
    "longitude": 113.5439669,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:50:01.456623+00:00",
     "observed_at": "2026-09-30T12:50:01.456623+00:00",
     "retrieved_at": "2026-09-30T12:50:01.456623+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984877,
        "longitude": 113.543532,
        "normalized": {
         "x": 0.3323,
         "y": 0.2213
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990192,
        "longitude": 113.5439669,
        "normalized": {
         "x": 0.6669,
         "y": 0.6301
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.198446,
        "longitude": 113.543916,
        "normalized": {
         "x": 0.6277,
         "y": 0.1892
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984877,
     "longitude": 113.543532
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "AEFBE839B3",
   "occurred_at": "2026-09-30T20:49:36+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1985402, \"longitude\": 113.5435893, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:49:36.290519+00:00\", \"observed_at\": \"2026-09-30T12:49:36.290519+00:00\", \"retrieved_at\": \"2026-09-30T12:49:36.290519+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985402, \"longitude\": 113.5435893, \"normalized\": {\"x\": 0.3764, \"y\": 0.2617}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1988031, \"longitude\": 113.5439627, \"normalized\": {\"x\": 0.6636, \"y\": 0.4639}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984425, \"longitude\": 113.5438582, \"normalized\": {\"x\": 0.5832, \"y\": 0.1865}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985402, \"longitude\": 113.5435893}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1985402,
    "longitude": 113.5435893,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:49:36.290519+00:00",
     "observed_at": "2026-09-30T12:49:36.290519+00:00",
     "retrieved_at": "2026-09-30T12:49:36.290519+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985402,
        "longitude": 113.5435893,
        "normalized": {
         "x": 0.3764,
         "y": 0.2617
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1988031,
        "longitude": 113.5439627,
        "normalized": {
         "x": 0.6636,
         "y": 0.4639
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984425,
        "longitude": 113.5438582,
        "normalized": {
         "x": 0.5832,
         "y": 0.1865
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985402,
     "longitude": 113.5435893
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "0C0DA896D8",
   "occurred_at": "2026-09-30T20:47:40+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.198905, \"longitude\": 113.5440187, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:47:40.864033+00:00\", \"observed_at\": \"2026-09-30T12:47:40.864033+00:00\", \"retrieved_at\": \"2026-09-30T12:47:40.864033+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.198905, \"longitude\": 113.5440187, \"normalized\": {\"x\": 0.7067, \"y\": 0.5423}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985636, \"longitude\": 113.5436912, \"normalized\": {\"x\": 0.4548, \"y\": 0.2797}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985859, \"longitude\": 113.5438535, \"normalized\": {\"x\": 0.5796, \"y\": 0.2969}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.198905, \"longitude\": 113.5440187}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.198905,
    "longitude": 113.5440187,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:47:40.864033+00:00",
     "observed_at": "2026-09-30T12:47:40.864033+00:00",
     "retrieved_at": "2026-09-30T12:47:40.864033+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.198905,
        "longitude": 113.5440187,
        "normalized": {
         "x": 0.7067,
         "y": 0.5423
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985636,
        "longitude": 113.5436912,
        "normalized": {
         "x": 0.4548,
         "y": 0.2797
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985859,
        "longitude": 113.5438535,
        "normalized": {
         "x": 0.5796,
         "y": 0.2969
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.198905,
     "longitude": 113.5440187
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "B696D39244",
   "occurred_at": "2026-09-30T20:47:05+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1986168, \"longitude\": 113.5435949, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:47:05.101909+00:00\", \"observed_at\": \"2026-09-30T12:47:05.101909+00:00\", \"retrieved_at\": \"2026-09-30T12:47:05.101909+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986472, \"longitude\": 113.5438009, \"normalized\": {\"x\": 0.5392, \"y\": 0.344}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986168, \"longitude\": 113.5435949, \"normalized\": {\"x\": 0.3807, \"y\": 0.3206}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986797, \"longitude\": 113.5439903, \"normalized\": {\"x\": 0.6848, \"y\": 0.369}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986472, \"longitude\": 113.5438009}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1986168,
    "longitude": 113.5435949,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:47:05.101909+00:00",
     "observed_at": "2026-09-30T12:47:05.101909+00:00",
     "retrieved_at": "2026-09-30T12:47:05.101909+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986472,
        "longitude": 113.5438009,
        "normalized": {
         "x": 0.5392,
         "y": 0.344
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986168,
        "longitude": 113.5435949,
        "normalized": {
         "x": 0.3807,
         "y": 0.3206
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986797,
        "longitude": 113.5439903,
        "normalized": {
         "x": 0.6848,
         "y": 0.369
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986472,
     "longitude": 113.5438009
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "EF15C4CC8F",
   "occurred_at": "2026-09-30T20:43:39+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1987214, \"longitude\": 113.5440261, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:43:39.219814+00:00\", \"observed_at\": \"2026-09-30T12:43:39.219814+00:00\", \"retrieved_at\": \"2026-09-30T12:43:39.219814+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984345, \"longitude\": 113.5438552, \"normalized\": {\"x\": 0.5809, \"y\": 0.1804}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985829, \"longitude\": 113.543694, \"normalized\": {\"x\": 0.4569, \"y\": 0.2945}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1987214, \"longitude\": 113.5440261, \"normalized\": {\"x\": 0.7124, \"y\": 0.4011}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984345, \"longitude\": 113.5438552}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1987214,
    "longitude": 113.5440261,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:43:39.219814+00:00",
     "observed_at": "2026-09-30T12:43:39.219814+00:00",
     "retrieved_at": "2026-09-30T12:43:39.219814+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984345,
        "longitude": 113.5438552,
        "normalized": {
         "x": 0.5809,
         "y": 0.1804
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985829,
        "longitude": 113.543694,
        "normalized": {
         "x": 0.4569,
         "y": 0.2945
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1987214,
        "longitude": 113.5440261,
        "normalized": {
         "x": 0.7124,
         "y": 0.4011
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984345,
     "longitude": 113.5438552
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "CD81D80239",
   "occurred_at": "2026-09-30T20:39:34+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1988049, \"longitude\": 113.5440095, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:39:34.164785+00:00\", \"observed_at\": \"2026-09-30T12:39:34.164785+00:00\", \"retrieved_at\": \"2026-09-30T12:39:34.164785+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1988049, \"longitude\": 113.5440095, \"normalized\": {\"x\": 0.6996, \"y\": 0.4653}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.198423, \"longitude\": 113.5438385, \"normalized\": {\"x\": 0.5681, \"y\": 0.1715}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984636, \"longitude\": 113.5438076, \"normalized\": {\"x\": 0.5443, \"y\": 0.2028}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1988049, \"longitude\": 113.5440095}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1988049,
    "longitude": 113.5440095,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:39:34.164785+00:00",
     "observed_at": "2026-09-30T12:39:34.164785+00:00",
     "retrieved_at": "2026-09-30T12:39:34.164785+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1988049,
        "longitude": 113.5440095,
        "normalized": {
         "x": 0.6996,
         "y": 0.4653
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.198423,
        "longitude": 113.5438385,
        "normalized": {
         "x": 0.5681,
         "y": 0.1715
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984636,
        "longitude": 113.5438076,
        "normalized": {
         "x": 0.5443,
         "y": 0.2028
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1988049,
     "longitude": 113.5440095
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "EFD8C42CE3",
   "occurred_at": "2026-09-30T20:32:58+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986693, \"longitude\": 113.544021, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:32:58.188616+00:00\", \"observed_at\": \"2026-09-30T12:32:58.188616+00:00\", \"retrieved_at\": \"2026-09-30T12:32:58.188616+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.198575, \"longitude\": 113.5438392, \"normalized\": {\"x\": 0.5686, \"y\": 0.2885}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985201, \"longitude\": 113.5437875, \"normalized\": {\"x\": 0.5289, \"y\": 0.2463}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986693, \"longitude\": 113.544021, \"normalized\": {\"x\": 0.7085, \"y\": 0.361}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.198575, \"longitude\": 113.5438392}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986693,
    "longitude": 113.544021,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:32:58.188616+00:00",
     "observed_at": "2026-09-30T12:32:58.188616+00:00",
     "retrieved_at": "2026-09-30T12:32:58.188616+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.198575,
        "longitude": 113.5438392,
        "normalized": {
         "x": 0.5686,
         "y": 0.2885
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985201,
        "longitude": 113.5437875,
        "normalized": {
         "x": 0.5289,
         "y": 0.2463
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986693,
        "longitude": 113.544021,
        "normalized": {
         "x": 0.7085,
         "y": 0.361
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.198575,
     "longitude": 113.5438392
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "16AFEFCC82",
   "occurred_at": "2026-09-30T20:29:06+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1986855, \"longitude\": 113.5434324, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:29:06.913177+00:00\", \"observed_at\": \"2026-09-30T12:29:06.913177+00:00\", \"retrieved_at\": \"2026-09-30T12:29:06.913177+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985802, \"longitude\": 113.5437241, \"normalized\": {\"x\": 0.4801, \"y\": 0.2925}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984841, \"longitude\": 113.5438696, \"normalized\": {\"x\": 0.592, \"y\": 0.2185}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986855, \"longitude\": 113.5434324, \"normalized\": {\"x\": 0.2557, \"y\": 0.3735}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985802, \"longitude\": 113.5437241}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1986855,
    "longitude": 113.5434324,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:29:06.913177+00:00",
     "observed_at": "2026-09-30T12:29:06.913177+00:00",
     "retrieved_at": "2026-09-30T12:29:06.913177+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985802,
        "longitude": 113.5437241,
        "normalized": {
         "x": 0.4801,
         "y": 0.2925
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984841,
        "longitude": 113.5438696,
        "normalized": {
         "x": 0.592,
         "y": 0.2185
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986855,
        "longitude": 113.5434324,
        "normalized": {
         "x": 0.2557,
         "y": 0.3735
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985802,
     "longitude": 113.5437241
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "BAF071EBA9",
   "occurred_at": "2026-09-30T20:27:03+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.199072, \"longitude\": 113.5439082, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:27:03.292318+00:00\", \"observed_at\": \"2026-09-30T12:27:03.292318+00:00\", \"retrieved_at\": \"2026-09-30T12:27:03.292318+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985132, \"longitude\": 113.5436765, \"normalized\": {\"x\": 0.4434, \"y\": 0.241}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984515, \"longitude\": 113.5438067, \"normalized\": {\"x\": 0.5436, \"y\": 0.1935}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.199072, \"longitude\": 113.5439082, \"normalized\": {\"x\": 0.6217, \"y\": 0.6708}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985132, \"longitude\": 113.5436765}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.199072,
    "longitude": 113.5439082,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:27:03.292318+00:00",
     "observed_at": "2026-09-30T12:27:03.292318+00:00",
     "retrieved_at": "2026-09-30T12:27:03.292318+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985132,
        "longitude": 113.5436765,
        "normalized": {
         "x": 0.4434,
         "y": 0.241
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984515,
        "longitude": 113.5438067,
        "normalized": {
         "x": 0.5436,
         "y": 0.1935
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.199072,
        "longitude": 113.5439082,
        "normalized": {
         "x": 0.6217,
         "y": 0.6708
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985132,
     "longitude": 113.5436765
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "3D65CA1CA5",
   "occurred_at": "2026-09-30T20:22:25+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986432, \"longitude\": 113.5440222, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:22:25.535757+00:00\", \"observed_at\": \"2026-09-30T12:22:25.535757+00:00\", \"retrieved_at\": \"2026-09-30T12:22:25.535757+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984415, \"longitude\": 113.543943, \"normalized\": {\"x\": 0.6484, \"y\": 0.1858}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986432, \"longitude\": 113.5440222, \"normalized\": {\"x\": 0.7094, \"y\": 0.3409}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985001, \"longitude\": 113.5438307, \"normalized\": {\"x\": 0.5621, \"y\": 0.2308}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984415, \"longitude\": 113.543943}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986432,
    "longitude": 113.5440222,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:22:25.535757+00:00",
     "observed_at": "2026-09-30T12:22:25.535757+00:00",
     "retrieved_at": "2026-09-30T12:22:25.535757+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984415,
        "longitude": 113.543943,
        "normalized": {
         "x": 0.6484,
         "y": 0.1858
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986432,
        "longitude": 113.5440222,
        "normalized": {
         "x": 0.7094,
         "y": 0.3409
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985001,
        "longitude": 113.5438307,
        "normalized": {
         "x": 0.5621,
         "y": 0.2308
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984415,
     "longitude": 113.543943
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "E0D2C0E624",
   "occurred_at": "2026-09-30T20:19:42+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990648, \"longitude\": 113.5439142, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:19:42.225030+00:00\", \"observed_at\": \"2026-09-30T12:19:42.225030+00:00\", \"retrieved_at\": \"2026-09-30T12:19:42.225030+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984472, \"longitude\": 113.5437824, \"normalized\": {\"x\": 0.5249, \"y\": 0.1902}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984926, \"longitude\": 113.5439086, \"normalized\": {\"x\": 0.622, \"y\": 0.2251}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1990648, \"longitude\": 113.5439142, \"normalized\": {\"x\": 0.6263, \"y\": 0.6653}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984472, \"longitude\": 113.5437824}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990648,
    "longitude": 113.5439142,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:19:42.225030+00:00",
     "observed_at": "2026-09-30T12:19:42.225030+00:00",
     "retrieved_at": "2026-09-30T12:19:42.225030+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984472,
        "longitude": 113.5437824,
        "normalized": {
         "x": 0.5249,
         "y": 0.1902
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984926,
        "longitude": 113.5439086,
        "normalized": {
         "x": 0.622,
         "y": 0.2251
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1990648,
        "longitude": 113.5439142,
        "normalized": {
         "x": 0.6263,
         "y": 0.6653
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984472,
     "longitude": 113.5437824
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "A506ADCC46",
   "occurred_at": "2026-09-30T20:17:24+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984079, \"longitude\": 113.5435743, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:17:24.155481+00:00\", \"observed_at\": \"2026-09-30T12:17:24.155481+00:00\", \"retrieved_at\": \"2026-09-30T12:17:24.155481+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986239, \"longitude\": 113.543936, \"normalized\": {\"x\": 0.643, \"y\": 0.3261}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985765, \"longitude\": 113.5439027, \"normalized\": {\"x\": 0.6175, \"y\": 0.2896}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984079, \"longitude\": 113.5435743, \"normalized\": {\"x\": 0.3649, \"y\": 0.1599}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986239, \"longitude\": 113.543936}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984079,
    "longitude": 113.5435743,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:17:24.155481+00:00",
     "observed_at": "2026-09-30T12:17:24.155481+00:00",
     "retrieved_at": "2026-09-30T12:17:24.155481+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986239,
        "longitude": 113.543936,
        "normalized": {
         "x": 0.643,
         "y": 0.3261
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985765,
        "longitude": 113.5439027,
        "normalized": {
         "x": 0.6175,
         "y": 0.2896
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984079,
        "longitude": 113.5435743,
        "normalized": {
         "x": 0.3649,
         "y": 0.1599
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986239,
     "longitude": 113.543936
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "097487CCD9",
   "occurred_at": "2026-09-30T20:11:13+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984572, \"longitude\": 113.5435897, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:11:13.877092+00:00\", \"observed_at\": \"2026-09-30T12:11:13.877092+00:00\", \"retrieved_at\": \"2026-09-30T12:11:13.877092+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.198562, \"longitude\": 113.5437777, \"normalized\": {\"x\": 0.5213, \"y\": 0.2785}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985162, \"longitude\": 113.5439288, \"normalized\": {\"x\": 0.6375, \"y\": 0.2432}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984572, \"longitude\": 113.5435897, \"normalized\": {\"x\": 0.3767, \"y\": 0.1978}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.198562, \"longitude\": 113.5437777}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984572,
    "longitude": 113.5435897,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:11:13.877092+00:00",
     "observed_at": "2026-09-30T12:11:13.877092+00:00",
     "retrieved_at": "2026-09-30T12:11:13.877092+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.198562,
        "longitude": 113.5437777,
        "normalized": {
         "x": 0.5213,
         "y": 0.2785
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985162,
        "longitude": 113.5439288,
        "normalized": {
         "x": 0.6375,
         "y": 0.2432
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984572,
        "longitude": 113.5435897,
        "normalized": {
         "x": 0.3767,
         "y": 0.1978
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.198562,
     "longitude": 113.5437777
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "8278BEBDA4",
   "occurred_at": "2026-09-30T20:02:37+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:02:37.026797+00:00\", \"observed_at\": \"2026-09-30T12:02:37.026797+00:00\", \"retrieved_at\": \"2026-09-30T12:02:37.026797+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1988315, \"longitude\": 113.5439023, \"normalized\": {\"x\": 0.6171, \"y\": 0.4858}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985933, \"longitude\": 113.5437273, \"normalized\": {\"x\": 0.4825, \"y\": 0.3025}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985009, \"longitude\": 113.5433323, \"normalized\": {\"x\": 0.1787, \"y\": 0.2314}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1988315, \"longitude\": 113.5439023}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:02:37.026797+00:00",
     "observed_at": "2026-09-30T12:02:37.026797+00:00",
     "retrieved_at": "2026-09-30T12:02:37.026797+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1988315,
        "longitude": 113.5439023,
        "normalized": {
         "x": 0.6171,
         "y": 0.4858
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985933,
        "longitude": 113.5437273,
        "normalized": {
         "x": 0.4825,
         "y": 0.3025
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985009,
        "longitude": 113.5433323,
        "normalized": {
         "x": 0.1787,
         "y": 0.2314
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1988315,
     "longitude": 113.5439023
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "98A987E64B",
   "occurred_at": "2026-09-30T20:01:19+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984712, \"longitude\": 113.5435826, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:01:19.224078+00:00\", \"observed_at\": \"2026-09-30T12:01:19.224078+00:00\", \"retrieved_at\": \"2026-09-30T12:01:19.224078+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1990576, \"longitude\": 113.5441322, \"normalized\": {\"x\": 0.794, \"y\": 0.6597}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984317, \"longitude\": 113.5439091, \"normalized\": {\"x\": 0.6224, \"y\": 0.1782}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984712, \"longitude\": 113.5435826, \"normalized\": {\"x\": 0.3712, \"y\": 0.2086}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1990576, \"longitude\": 113.5441322}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984712,
    "longitude": 113.5435826,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:01:19.224078+00:00",
     "observed_at": "2026-09-30T12:01:19.224078+00:00",
     "retrieved_at": "2026-09-30T12:01:19.224078+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1990576,
        "longitude": 113.5441322,
        "normalized": {
         "x": 0.794,
         "y": 0.6597
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984317,
        "longitude": 113.5439091,
        "normalized": {
         "x": 0.6224,
         "y": 0.1782
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984712,
        "longitude": 113.5435826,
        "normalized": {
         "x": 0.3712,
         "y": 0.2086
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1990576,
     "longitude": 113.5441322
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "C66D3F932C",
   "occurred_at": "2026-09-30T20:00:41+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1987331, \"longitude\": 113.5440196, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T12:00:41.212382+00:00\", \"observed_at\": \"2026-09-30T12:00:41.212382+00:00\", \"retrieved_at\": \"2026-09-30T12:00:41.212382+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1987331, \"longitude\": 113.5440196, \"normalized\": {\"x\": 0.7074, \"y\": 0.4101}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984741, \"longitude\": 113.5438452, \"normalized\": {\"x\": 0.5732, \"y\": 0.2108}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.19848, \"longitude\": 113.5437136, \"normalized\": {\"x\": 0.472, \"y\": 0.2154}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1987331, \"longitude\": 113.5440196}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1987331,
    "longitude": 113.5440196,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T12:00:41.212382+00:00",
     "observed_at": "2026-09-30T12:00:41.212382+00:00",
     "retrieved_at": "2026-09-30T12:00:41.212382+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1987331,
        "longitude": 113.5440196,
        "normalized": {
         "x": 0.7074,
         "y": 0.4101
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984741,
        "longitude": 113.5438452,
        "normalized": {
         "x": 0.5732,
         "y": 0.2108
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.19848,
        "longitude": 113.5437136,
        "normalized": {
         "x": 0.472,
         "y": 0.2154
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1987331,
     "longitude": 113.5440196
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "E901FF7D05",
   "occurred_at": "2026-09-30T19:59:38+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1986404, \"longitude\": 113.5435958, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:59:37.989048+00:00\", \"observed_at\": \"2026-09-30T11:59:37.989048+00:00\", \"retrieved_at\": \"2026-09-30T11:59:37.989048+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986611, \"longitude\": 113.5440019, \"normalized\": {\"x\": 0.6938, \"y\": 0.3547}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986404, \"longitude\": 113.5435958, \"normalized\": {\"x\": 0.3814, \"y\": 0.3388}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.198469, \"longitude\": 113.5438271, \"normalized\": {\"x\": 0.5593, \"y\": 0.2069}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986611, \"longitude\": 113.5440019}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1986404,
    "longitude": 113.5435958,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:59:37.989048+00:00",
     "observed_at": "2026-09-30T11:59:37.989048+00:00",
     "retrieved_at": "2026-09-30T11:59:37.989048+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986611,
        "longitude": 113.5440019,
        "normalized": {
         "x": 0.6938,
         "y": 0.3547
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986404,
        "longitude": 113.5435958,
        "normalized": {
         "x": 0.3814,
         "y": 0.3388
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.198469,
        "longitude": 113.5438271,
        "normalized": {
         "x": 0.5593,
         "y": 0.2069
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986611,
     "longitude": 113.5440019
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "BA4DB7771B",
   "occurred_at": "2026-09-30T19:57:30+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1987893, \"longitude\": 113.5440168, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:57:30.041864+00:00\", \"observed_at\": \"2026-09-30T11:57:30.041864+00:00\", \"retrieved_at\": \"2026-09-30T11:57:30.041864+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1987893, \"longitude\": 113.5440168, \"normalized\": {\"x\": 0.7052, \"y\": 0.4533}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985459, \"longitude\": 113.5438414, \"normalized\": {\"x\": 0.5703, \"y\": 0.2661}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985253, \"longitude\": 113.5438908, \"normalized\": {\"x\": 0.6083, \"y\": 0.2502}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1987893, \"longitude\": 113.5440168}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1987893,
    "longitude": 113.5440168,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:57:30.041864+00:00",
     "observed_at": "2026-09-30T11:57:30.041864+00:00",
     "retrieved_at": "2026-09-30T11:57:30.041864+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1987893,
        "longitude": 113.5440168,
        "normalized": {
         "x": 0.7052,
         "y": 0.4533
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985459,
        "longitude": 113.5438414,
        "normalized": {
         "x": 0.5703,
         "y": 0.2661
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985253,
        "longitude": 113.5438908,
        "normalized": {
         "x": 0.6083,
         "y": 0.2502
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1987893,
     "longitude": 113.5440168
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "CF6CA514C0",
   "occurred_at": "2026-09-30T19:51:28+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1987567, \"longitude\": 113.5440082, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:51:28.328685+00:00\", \"observed_at\": \"2026-09-30T11:51:28.328685+00:00\", \"retrieved_at\": \"2026-09-30T11:51:28.328685+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1987567, \"longitude\": 113.5440082, \"normalized\": {\"x\": 0.6986, \"y\": 0.4282}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985312, \"longitude\": 113.543928, \"normalized\": {\"x\": 0.6369, \"y\": 0.2547}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984587, \"longitude\": 113.5437487, \"normalized\": {\"x\": 0.499, \"y\": 0.199}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1987567, \"longitude\": 113.5440082}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1987567,
    "longitude": 113.5440082,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:51:28.328685+00:00",
     "observed_at": "2026-09-30T11:51:28.328685+00:00",
     "retrieved_at": "2026-09-30T11:51:28.328685+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1987567,
        "longitude": 113.5440082,
        "normalized": {
         "x": 0.6986,
         "y": 0.4282
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985312,
        "longitude": 113.543928,
        "normalized": {
         "x": 0.6369,
         "y": 0.2547
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984587,
        "longitude": 113.5437487,
        "normalized": {
         "x": 0.499,
         "y": 0.199
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1987567,
     "longitude": 113.5440082
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "F09CE02699",
   "occurred_at": "2026-09-30T19:49:40+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1988697, \"longitude\": 113.544007, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:49:40.096014+00:00\", \"observed_at\": \"2026-09-30T11:49:40.096014+00:00\", \"retrieved_at\": \"2026-09-30T11:49:40.096014+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984503, \"longitude\": 113.5436391, \"normalized\": {\"x\": 0.4147, \"y\": 0.1925}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1988697, \"longitude\": 113.544007, \"normalized\": {\"x\": 0.6977, \"y\": 0.5151}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984308, \"longitude\": 113.5438213, \"normalized\": {\"x\": 0.5548, \"y\": 0.1776}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984503, \"longitude\": 113.5436391}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1988697,
    "longitude": 113.544007,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:49:40.096014+00:00",
     "observed_at": "2026-09-30T11:49:40.096014+00:00",
     "retrieved_at": "2026-09-30T11:49:40.096014+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984503,
        "longitude": 113.5436391,
        "normalized": {
         "x": 0.4147,
         "y": 0.1925
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1988697,
        "longitude": 113.544007,
        "normalized": {
         "x": 0.6977,
         "y": 0.5151
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984308,
        "longitude": 113.5438213,
        "normalized": {
         "x": 0.5548,
         "y": 0.1776
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984503,
     "longitude": 113.5436391
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "61BFF6E02A",
   "occurred_at": "2026-09-30T19:46:53+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:46:53.544713+00:00\", \"observed_at\": \"2026-09-30T11:46:53.544713+00:00\", \"retrieved_at\": \"2026-09-30T11:46:53.544713+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1988361, \"longitude\": 113.543904, \"normalized\": {\"x\": 0.6185, \"y\": 0.4893}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986096, \"longitude\": 113.5437167, \"normalized\": {\"x\": 0.4744, \"y\": 0.3151}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1992822, \"longitude\": 113.5441026, \"normalized\": {\"x\": 0.7713, \"y\": 0.8324}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1988361, \"longitude\": 113.543904}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:46:53.544713+00:00",
     "observed_at": "2026-09-30T11:46:53.544713+00:00",
     "retrieved_at": "2026-09-30T11:46:53.544713+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1988361,
        "longitude": 113.543904,
        "normalized": {
         "x": 0.6185,
         "y": 0.4893
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986096,
        "longitude": 113.5437167,
        "normalized": {
         "x": 0.4744,
         "y": 0.3151
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1992822,
        "longitude": 113.5441026,
        "normalized": {
         "x": 0.7713,
         "y": 0.8324
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1988361,
     "longitude": 113.543904
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "CDEFB54651",
   "occurred_at": "2026-09-30T19:45:42+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990151, \"longitude\": 113.5440089, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:45:42.787829+00:00\", \"observed_at\": \"2026-09-30T11:45:42.787829+00:00\", \"retrieved_at\": \"2026-09-30T11:45:42.787829+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1990799, \"longitude\": 113.5439724, \"normalized\": {\"x\": 0.6711, \"y\": 0.6768}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986099, \"longitude\": 113.5438256, \"normalized\": {\"x\": 0.5581, \"y\": 0.3153}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1990151, \"longitude\": 113.5440089, \"normalized\": {\"x\": 0.6991, \"y\": 0.627}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1990799, \"longitude\": 113.5439724}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990151,
    "longitude": 113.5440089,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:45:42.787829+00:00",
     "observed_at": "2026-09-30T11:45:42.787829+00:00",
     "retrieved_at": "2026-09-30T11:45:42.787829+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1990799,
        "longitude": 113.5439724,
        "normalized": {
         "x": 0.6711,
         "y": 0.6768
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986099,
        "longitude": 113.5438256,
        "normalized": {
         "x": 0.5581,
         "y": 0.3153
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1990151,
        "longitude": 113.5440089,
        "normalized": {
         "x": 0.6991,
         "y": 0.627
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1990799,
     "longitude": 113.5439724
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "10A76DC0D5",
   "occurred_at": "2026-09-30T19:45:32+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.199018, \"longitude\": 113.5439464, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:45:32.259044+00:00\", \"observed_at\": \"2026-09-30T11:45:32.259044+00:00\", \"retrieved_at\": \"2026-09-30T11:45:32.259044+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.199018, \"longitude\": 113.5439464, \"normalized\": {\"x\": 0.651, \"y\": 0.6293}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985873, \"longitude\": 113.5438415, \"normalized\": {\"x\": 0.5704, \"y\": 0.2979}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1989187, \"longitude\": 113.543975, \"normalized\": {\"x\": 0.6731, \"y\": 0.5528}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.199018, \"longitude\": 113.5439464}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.199018,
    "longitude": 113.5439464,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:45:32.259044+00:00",
     "observed_at": "2026-09-30T11:45:32.259044+00:00",
     "retrieved_at": "2026-09-30T11:45:32.259044+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.199018,
        "longitude": 113.5439464,
        "normalized": {
         "x": 0.651,
         "y": 0.6293
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985873,
        "longitude": 113.5438415,
        "normalized": {
         "x": 0.5704,
         "y": 0.2979
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1989187,
        "longitude": 113.543975,
        "normalized": {
         "x": 0.6731,
         "y": 0.5528
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.199018,
     "longitude": 113.5439464
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "117EBD3814",
   "occurred_at": "2026-09-30T19:40:17+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986615, \"longitude\": 113.5440124, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:40:17.799304+00:00\", \"observed_at\": \"2026-09-30T11:40:17.799304+00:00\", \"retrieved_at\": \"2026-09-30T11:40:17.799304+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986035, \"longitude\": 113.543815, \"normalized\": {\"x\": 0.55, \"y\": 0.3104}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986615, \"longitude\": 113.5440124, \"normalized\": {\"x\": 0.7019, \"y\": 0.355}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985701, \"longitude\": 113.5439027, \"normalized\": {\"x\": 0.6174, \"y\": 0.2847}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986035, \"longitude\": 113.543815}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986615,
    "longitude": 113.5440124,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:40:17.799304+00:00",
     "observed_at": "2026-09-30T11:40:17.799304+00:00",
     "retrieved_at": "2026-09-30T11:40:17.799304+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986035,
        "longitude": 113.543815,
        "normalized": {
         "x": 0.55,
         "y": 0.3104
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986615,
        "longitude": 113.5440124,
        "normalized": {
         "x": 0.7019,
         "y": 0.355
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985701,
        "longitude": 113.5439027,
        "normalized": {
         "x": 0.6174,
         "y": 0.2847
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986035,
     "longitude": 113.543815
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "3D7E806012",
   "occurred_at": "2026-09-30T19:27:18+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1986299, \"longitude\": 113.543592, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:27:18.223634+00:00\", \"observed_at\": \"2026-09-30T11:27:18.223634+00:00\", \"retrieved_at\": \"2026-09-30T11:27:18.223634+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984378, \"longitude\": 113.5438644, \"normalized\": {\"x\": 0.588, \"y\": 0.1829}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986299, \"longitude\": 113.543592, \"normalized\": {\"x\": 0.3784, \"y\": 0.3307}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985626, \"longitude\": 113.5438136, \"normalized\": {\"x\": 0.5489, \"y\": 0.2789}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984378, \"longitude\": 113.5438644}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1986299,
    "longitude": 113.543592,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:27:18.223634+00:00",
     "observed_at": "2026-09-30T11:27:18.223634+00:00",
     "retrieved_at": "2026-09-30T11:27:18.223634+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984378,
        "longitude": 113.5438644,
        "normalized": {
         "x": 0.588,
         "y": 0.1829
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986299,
        "longitude": 113.543592,
        "normalized": {
         "x": 0.3784,
         "y": 0.3307
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985626,
        "longitude": 113.5438136,
        "normalized": {
         "x": 0.5489,
         "y": 0.2789
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984378,
     "longitude": 113.5438644
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "381E33B542",
   "occurred_at": "2026-09-30T19:24:39+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1989944, \"longitude\": 113.5440122, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:24:39.913224+00:00\", \"observed_at\": \"2026-09-30T11:24:39.913224+00:00\", \"retrieved_at\": \"2026-09-30T11:24:39.913224+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984228, \"longitude\": 113.5438845, \"normalized\": {\"x\": 0.6035, \"y\": 0.1714}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1989944, \"longitude\": 113.5440122, \"normalized\": {\"x\": 0.7017, \"y\": 0.611}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985947, \"longitude\": 113.5437357, \"normalized\": {\"x\": 0.489, \"y\": 0.3036}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984228, \"longitude\": 113.5438845}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1989944,
    "longitude": 113.5440122,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:24:39.913224+00:00",
     "observed_at": "2026-09-30T11:24:39.913224+00:00",
     "retrieved_at": "2026-09-30T11:24:39.913224+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984228,
        "longitude": 113.5438845,
        "normalized": {
         "x": 0.6035,
         "y": 0.1714
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1989944,
        "longitude": 113.5440122,
        "normalized": {
         "x": 0.7017,
         "y": 0.611
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985947,
        "longitude": 113.5437357,
        "normalized": {
         "x": 0.489,
         "y": 0.3036
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984228,
     "longitude": 113.5438845
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "6256970EE3",
   "occurred_at": "2026-09-30T19:19:52+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990197, \"longitude\": 113.5439481, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:19:52.420844+00:00\", \"observed_at\": \"2026-09-30T11:19:52.420844+00:00\", \"retrieved_at\": \"2026-09-30T11:19:52.420844+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1990197, \"longitude\": 113.5439481, \"normalized\": {\"x\": 0.6524, \"y\": 0.6305}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1988596, \"longitude\": 113.5438673, \"normalized\": {\"x\": 0.5903, \"y\": 0.5074}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986257, \"longitude\": 113.5438661, \"normalized\": {\"x\": 0.5893, \"y\": 0.3274}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1990197, \"longitude\": 113.5439481}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990197,
    "longitude": 113.5439481,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:19:52.420844+00:00",
     "observed_at": "2026-09-30T11:19:52.420844+00:00",
     "retrieved_at": "2026-09-30T11:19:52.420844+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1990197,
        "longitude": 113.5439481,
        "normalized": {
         "x": 0.6524,
         "y": 0.6305
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1988596,
        "longitude": 113.5438673,
        "normalized": {
         "x": 0.5903,
         "y": 0.5074
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986257,
        "longitude": 113.5438661,
        "normalized": {
         "x": 0.5893,
         "y": 0.3274
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1990197,
     "longitude": 113.5439481
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "BBEFA44084",
   "occurred_at": "2026-09-30T19:18:31+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:18:31.117591+00:00\", \"observed_at\": \"2026-09-30T11:18:31.117591+00:00\", \"retrieved_at\": \"2026-09-30T11:18:31.117591+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984814, \"longitude\": 113.5438185, \"normalized\": {\"x\": 0.5527, \"y\": 0.2165}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1992316, \"longitude\": 113.5440167, \"normalized\": {\"x\": 0.7052, \"y\": 0.7936}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1987534, \"longitude\": 113.5439702, \"normalized\": {\"x\": 0.6694, \"y\": 0.4257}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984814, \"longitude\": 113.5438185}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:18:31.117591+00:00",
     "observed_at": "2026-09-30T11:18:31.117591+00:00",
     "retrieved_at": "2026-09-30T11:18:31.117591+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984814,
        "longitude": 113.5438185,
        "normalized": {
         "x": 0.5527,
         "y": 0.2165
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1992316,
        "longitude": 113.5440167,
        "normalized": {
         "x": 0.7052,
         "y": 0.7936
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1987534,
        "longitude": 113.5439702,
        "normalized": {
         "x": 0.6694,
         "y": 0.4257
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984814,
     "longitude": 113.5438185
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "3B2545B85C",
   "occurred_at": "2026-09-30T19:17:41+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990166, \"longitude\": 113.5439981, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:17:41.023927+00:00\", \"observed_at\": \"2026-09-30T11:17:41.023927+00:00\", \"retrieved_at\": \"2026-09-30T11:17:41.023927+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985505, \"longitude\": 113.5438304, \"normalized\": {\"x\": 0.5619, \"y\": 0.2696}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990166, \"longitude\": 113.5439981, \"normalized\": {\"x\": 0.6908, \"y\": 0.6282}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.199179, \"longitude\": 113.5440048, \"normalized\": {\"x\": 0.696, \"y\": 0.753}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985505, \"longitude\": 113.5438304}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990166,
    "longitude": 113.5439981,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:17:41.023927+00:00",
     "observed_at": "2026-09-30T11:17:41.023927+00:00",
     "retrieved_at": "2026-09-30T11:17:41.023927+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985505,
        "longitude": 113.5438304,
        "normalized": {
         "x": 0.5619,
         "y": 0.2696
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990166,
        "longitude": 113.5439981,
        "normalized": {
         "x": 0.6908,
         "y": 0.6282
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.199179,
        "longitude": 113.5440048,
        "normalized": {
         "x": 0.696,
         "y": 0.753
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985505,
     "longitude": 113.5438304
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "2D9DE95C55",
   "occurred_at": "2026-09-30T19:16:23+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990296, \"longitude\": 113.5439096, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:16:23.701084+00:00\", \"observed_at\": \"2026-09-30T11:16:23.701084+00:00\", \"retrieved_at\": \"2026-09-30T11:16:23.701084+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986239, \"longitude\": 113.5438166, \"normalized\": {\"x\": 0.5513, \"y\": 0.3261}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986067, \"longitude\": 113.5439197, \"normalized\": {\"x\": 0.6306, \"y\": 0.3128}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1990296, \"longitude\": 113.5439096, \"normalized\": {\"x\": 0.6228, \"y\": 0.6382}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986239, \"longitude\": 113.5438166}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990296,
    "longitude": 113.5439096,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:16:23.701084+00:00",
     "observed_at": "2026-09-30T11:16:23.701084+00:00",
     "retrieved_at": "2026-09-30T11:16:23.701084+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986239,
        "longitude": 113.5438166,
        "normalized": {
         "x": 0.5513,
         "y": 0.3261
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986067,
        "longitude": 113.5439197,
        "normalized": {
         "x": 0.6306,
         "y": 0.3128
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1990296,
        "longitude": 113.5439096,
        "normalized": {
         "x": 0.6228,
         "y": 0.6382
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986239,
     "longitude": 113.5438166
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "7FB2D7AADB",
   "occurred_at": "2026-09-30T19:11:36+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1988509, \"longitude\": 113.5440056, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:11:36.335340+00:00\", \"observed_at\": \"2026-09-30T11:11:36.335340+00:00\", \"retrieved_at\": \"2026-09-30T11:11:36.335340+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1987934, \"longitude\": 113.5440184, \"normalized\": {\"x\": 0.7065, \"y\": 0.4565}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985973, \"longitude\": 113.5438427, \"normalized\": {\"x\": 0.5713, \"y\": 0.3056}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1988509, \"longitude\": 113.5440056, \"normalized\": {\"x\": 0.6966, \"y\": 0.5007}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1987934, \"longitude\": 113.5440184}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1988509,
    "longitude": 113.5440056,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:11:36.335340+00:00",
     "observed_at": "2026-09-30T11:11:36.335340+00:00",
     "retrieved_at": "2026-09-30T11:11:36.335340+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1987934,
        "longitude": 113.5440184,
        "normalized": {
         "x": 0.7065,
         "y": 0.4565
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985973,
        "longitude": 113.5438427,
        "normalized": {
         "x": 0.5713,
         "y": 0.3056
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1988509,
        "longitude": 113.5440056,
        "normalized": {
         "x": 0.6966,
         "y": 0.5007
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1987934,
     "longitude": 113.5440184
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "52898685E7",
   "occurred_at": "2026-09-30T19:10:02+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1989521, \"longitude\": 113.5440224, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:10:02.605966+00:00\", \"observed_at\": \"2026-09-30T11:10:02.605966+00:00\", \"retrieved_at\": \"2026-09-30T11:10:02.605966+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1989521, \"longitude\": 113.5440224, \"normalized\": {\"x\": 0.7095, \"y\": 0.5786}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985082, \"longitude\": 113.5438244, \"normalized\": {\"x\": 0.5572, \"y\": 0.2371}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985393, \"longitude\": 113.5437585, \"normalized\": {\"x\": 0.5065, \"y\": 0.261}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1989521, \"longitude\": 113.5440224}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1989521,
    "longitude": 113.5440224,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:10:02.605966+00:00",
     "observed_at": "2026-09-30T11:10:02.605966+00:00",
     "retrieved_at": "2026-09-30T11:10:02.605966+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1989521,
        "longitude": 113.5440224,
        "normalized": {
         "x": 0.7095,
         "y": 0.5786
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985082,
        "longitude": 113.5438244,
        "normalized": {
         "x": 0.5572,
         "y": 0.2371
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985393,
        "longitude": 113.5437585,
        "normalized": {
         "x": 0.5065,
         "y": 0.261
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1989521,
     "longitude": 113.5440224
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "2FAE86FABE",
   "occurred_at": "2026-09-30T19:05:23+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986845, \"longitude\": 113.5440154, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:05:23.646726+00:00\", \"observed_at\": \"2026-09-30T11:05:23.646726+00:00\", \"retrieved_at\": \"2026-09-30T11:05:23.646726+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985847, \"longitude\": 113.5436434, \"normalized\": {\"x\": 0.418, \"y\": 0.2959}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986845, \"longitude\": 113.5440154, \"normalized\": {\"x\": 0.7041, \"y\": 0.3727}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984607, \"longitude\": 113.5437043, \"normalized\": {\"x\": 0.4649, \"y\": 0.2006}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985847, \"longitude\": 113.5436434}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986845,
    "longitude": 113.5440154,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:05:23.646726+00:00",
     "observed_at": "2026-09-30T11:05:23.646726+00:00",
     "retrieved_at": "2026-09-30T11:05:23.646726+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985847,
        "longitude": 113.5436434,
        "normalized": {
         "x": 0.418,
         "y": 0.2959
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986845,
        "longitude": 113.5440154,
        "normalized": {
         "x": 0.7041,
         "y": 0.3727
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984607,
        "longitude": 113.5437043,
        "normalized": {
         "x": 0.4649,
         "y": 0.2006
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985847,
     "longitude": 113.5436434
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "7B818A1419",
   "occurred_at": "2026-09-30T19:04:42+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1986259, \"longitude\": 113.5435919, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T11:04:41.941481+00:00\", \"observed_at\": \"2026-09-30T11:04:41.941481+00:00\", \"retrieved_at\": \"2026-09-30T11:04:41.941481+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986259, \"longitude\": 113.5435919, \"normalized\": {\"x\": 0.3784, \"y\": 0.3276}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985346, \"longitude\": 113.5438293, \"normalized\": {\"x\": 0.561, \"y\": 0.2574}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984481, \"longitude\": 113.5437751, \"normalized\": {\"x\": 0.5193, \"y\": 0.1909}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986259, \"longitude\": 113.5435919}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1986259,
    "longitude": 113.5435919,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T11:04:41.941481+00:00",
     "observed_at": "2026-09-30T11:04:41.941481+00:00",
     "retrieved_at": "2026-09-30T11:04:41.941481+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986259,
        "longitude": 113.5435919,
        "normalized": {
         "x": 0.3784,
         "y": 0.3276
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985346,
        "longitude": 113.5438293,
        "normalized": {
         "x": 0.561,
         "y": 0.2574
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984481,
        "longitude": 113.5437751,
        "normalized": {
         "x": 0.5193,
         "y": 0.1909
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986259,
     "longitude": 113.5435919
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "B9B74615CF",
   "occurred_at": "2026-09-30T18:59:52+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1985868, \"longitude\": 113.5435849, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T10:59:52.416060+00:00\", \"observed_at\": \"2026-09-30T10:59:52.416060+00:00\", \"retrieved_at\": \"2026-09-30T10:59:52.416060+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985868, \"longitude\": 113.5435849, \"normalized\": {\"x\": 0.373, \"y\": 0.2975}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986419, \"longitude\": 113.5438684, \"normalized\": {\"x\": 0.5911, \"y\": 0.3399}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984151, \"longitude\": 113.5438124, \"normalized\": {\"x\": 0.548, \"y\": 0.1654}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985868, \"longitude\": 113.5435849}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1985868,
    "longitude": 113.5435849,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T10:59:52.416060+00:00",
     "observed_at": "2026-09-30T10:59:52.416060+00:00",
     "retrieved_at": "2026-09-30T10:59:52.416060+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985868,
        "longitude": 113.5435849,
        "normalized": {
         "x": 0.373,
         "y": 0.2975
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986419,
        "longitude": 113.5438684,
        "normalized": {
         "x": 0.5911,
         "y": 0.3399
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984151,
        "longitude": 113.5438124,
        "normalized": {
         "x": 0.548,
         "y": 0.1654
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985868,
     "longitude": 113.5435849
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "A6DE293778",
   "occurred_at": "2026-09-30T18:52:26+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1988496, \"longitude\": 113.5440126, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T10:52:26.382626+00:00\", \"observed_at\": \"2026-09-30T10:52:26.382626+00:00\", \"retrieved_at\": \"2026-09-30T10:52:26.382626+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985239, \"longitude\": 113.5437025, \"normalized\": {\"x\": 0.4634, \"y\": 0.2491}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985675, \"longitude\": 113.5438626, \"normalized\": {\"x\": 0.5867, \"y\": 0.2827}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1988496, \"longitude\": 113.5440126, \"normalized\": {\"x\": 0.702, \"y\": 0.4997}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985239, \"longitude\": 113.5437025}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1988496,
    "longitude": 113.5440126,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T10:52:26.382626+00:00",
     "observed_at": "2026-09-30T10:52:26.382626+00:00",
     "retrieved_at": "2026-09-30T10:52:26.382626+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985239,
        "longitude": 113.5437025,
        "normalized": {
         "x": 0.4634,
         "y": 0.2491
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985675,
        "longitude": 113.5438626,
        "normalized": {
         "x": 0.5867,
         "y": 0.2827
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1988496,
        "longitude": 113.5440126,
        "normalized": {
         "x": 0.702,
         "y": 0.4997
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985239,
     "longitude": 113.5437025
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "03D56BBEEB",
   "occurred_at": "2026-09-30T18:50:52+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.198679, \"longitude\": 113.5440065, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T10:50:52.641946+00:00\", \"observed_at\": \"2026-09-30T10:50:52.641946+00:00\", \"retrieved_at\": \"2026-09-30T10:50:52.641946+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984701, \"longitude\": 113.5438693, \"normalized\": {\"x\": 0.5918, \"y\": 0.2077}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.198679, \"longitude\": 113.5440065, \"normalized\": {\"x\": 0.6973, \"y\": 0.3684}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985949, \"longitude\": 113.5437093, \"normalized\": {\"x\": 0.4687, \"y\": 0.3038}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984701, \"longitude\": 113.5438693}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.198679,
    "longitude": 113.5440065,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T10:50:52.641946+00:00",
     "observed_at": "2026-09-30T10:50:52.641946+00:00",
     "retrieved_at": "2026-09-30T10:50:52.641946+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984701,
        "longitude": 113.5438693,
        "normalized": {
         "x": 0.5918,
         "y": 0.2077
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.198679,
        "longitude": 113.5440065,
        "normalized": {
         "x": 0.6973,
         "y": 0.3684
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985949,
        "longitude": 113.5437093,
        "normalized": {
         "x": 0.4687,
         "y": 0.3038
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984701,
     "longitude": 113.5438693
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "DA42B85751",
   "occurred_at": "2026-09-30T18:48:18+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990123, \"longitude\": 113.5439847, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T10:48:18.330159+00:00\", \"observed_at\": \"2026-09-30T10:48:18.330159+00:00\", \"retrieved_at\": \"2026-09-30T10:48:18.330159+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984359, \"longitude\": 113.543689, \"normalized\": {\"x\": 0.4531, \"y\": 0.1815}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986256, \"longitude\": 113.5438802, \"normalized\": {\"x\": 0.6001, \"y\": 0.3274}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1990123, \"longitude\": 113.5439847, \"normalized\": {\"x\": 0.6805, \"y\": 0.6248}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984359, \"longitude\": 113.543689}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990123,
    "longitude": 113.5439847,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T10:48:18.330159+00:00",
     "observed_at": "2026-09-30T10:48:18.330159+00:00",
     "retrieved_at": "2026-09-30T10:48:18.330159+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984359,
        "longitude": 113.543689,
        "normalized": {
         "x": 0.4531,
         "y": 0.1815
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986256,
        "longitude": 113.5438802,
        "normalized": {
         "x": 0.6001,
         "y": 0.3274
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1990123,
        "longitude": 113.5439847,
        "normalized": {
         "x": 0.6805,
         "y": 0.6248
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984359,
     "longitude": 113.543689
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "5B2995167F",
   "occurred_at": "2026-09-30T18:47:32+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1987479, \"longitude\": 113.5440033, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T10:47:32.606325+00:00\", \"observed_at\": \"2026-09-30T10:47:32.606325+00:00\", \"retrieved_at\": \"2026-09-30T10:47:32.606325+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984353, \"longitude\": 113.5437699, \"normalized\": {\"x\": 0.5153, \"y\": 0.181}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.198634, \"longitude\": 113.5438306, \"normalized\": {\"x\": 0.562, \"y\": 0.3338}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1987479, \"longitude\": 113.5440033, \"normalized\": {\"x\": 0.6948, \"y\": 0.4214}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984353, \"longitude\": 113.5437699}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1987479,
    "longitude": 113.5440033,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T10:47:32.606325+00:00",
     "observed_at": "2026-09-30T10:47:32.606325+00:00",
     "retrieved_at": "2026-09-30T10:47:32.606325+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984353,
        "longitude": 113.5437699,
        "normalized": {
         "x": 0.5153,
         "y": 0.181
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.198634,
        "longitude": 113.5438306,
        "normalized": {
         "x": 0.562,
         "y": 0.3338
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1987479,
        "longitude": 113.5440033,
        "normalized": {
         "x": 0.6948,
         "y": 0.4214
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984353,
     "longitude": 113.5437699
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "FAECD541A1",
   "occurred_at": "2026-09-30T18:42:39+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986098, \"longitude\": 113.5440966, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T10:42:39.062479+00:00\", \"observed_at\": \"2026-09-30T10:42:39.062479+00:00\", \"retrieved_at\": \"2026-09-30T10:42:39.062479+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985885, \"longitude\": 113.5437627, \"normalized\": {\"x\": 0.5097, \"y\": 0.2988}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985608, \"longitude\": 113.5437647, \"normalized\": {\"x\": 0.5113, \"y\": 0.2775}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986098, \"longitude\": 113.5440966, \"normalized\": {\"x\": 0.7666, \"y\": 0.3152}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985885, \"longitude\": 113.5437627}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986098,
    "longitude": 113.5440966,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T10:42:39.062479+00:00",
     "observed_at": "2026-09-30T10:42:39.062479+00:00",
     "retrieved_at": "2026-09-30T10:42:39.062479+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985885,
        "longitude": 113.5437627,
        "normalized": {
         "x": 0.5097,
         "y": 0.2988
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985608,
        "longitude": 113.5437647,
        "normalized": {
         "x": 0.5113,
         "y": 0.2775
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986098,
        "longitude": 113.5440966,
        "normalized": {
         "x": 0.7666,
         "y": 0.3152
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985885,
     "longitude": 113.5437627
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "C1AB10D22A",
   "occurred_at": "2026-09-30T18:40:34+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1985386, \"longitude\": 113.5435898, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T10:40:33.999649+00:00\", \"observed_at\": \"2026-09-30T10:40:33.999649+00:00\", \"retrieved_at\": \"2026-09-30T10:40:33.999649+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985386, \"longitude\": 113.5435898, \"normalized\": {\"x\": 0.3767, \"y\": 0.2604}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985048, \"longitude\": 113.5436657, \"normalized\": {\"x\": 0.4351, \"y\": 0.2345}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986803, \"longitude\": 113.54387, \"normalized\": {\"x\": 0.5923, \"y\": 0.3695}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985386, \"longitude\": 113.5435898}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1985386,
    "longitude": 113.5435898,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T10:40:33.999649+00:00",
     "observed_at": "2026-09-30T10:40:33.999649+00:00",
     "retrieved_at": "2026-09-30T10:40:33.999649+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985386,
        "longitude": 113.5435898,
        "normalized": {
         "x": 0.3767,
         "y": 0.2604
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985048,
        "longitude": 113.5436657,
        "normalized": {
         "x": 0.4351,
         "y": 0.2345
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986803,
        "longitude": 113.54387,
        "normalized": {
         "x": 0.5923,
         "y": 0.3695
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985386,
     "longitude": 113.5435898
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "26414EA028",
   "occurred_at": "2026-09-30T18:35:02+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1989791, \"longitude\": 113.5440212, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T10:35:02.769263+00:00\", \"observed_at\": \"2026-09-30T10:35:02.769263+00:00\", \"retrieved_at\": \"2026-09-30T10:35:02.769263+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1989791, \"longitude\": 113.5440212, \"normalized\": {\"x\": 0.7086, \"y\": 0.5993}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985636, \"longitude\": 113.5438396, \"normalized\": {\"x\": 0.569, \"y\": 0.2797}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986112, \"longitude\": 113.5436646, \"normalized\": {\"x\": 0.4343, \"y\": 0.3163}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1989791, \"longitude\": 113.5440212}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1989791,
    "longitude": 113.5440212,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T10:35:02.769263+00:00",
     "observed_at": "2026-09-30T10:35:02.769263+00:00",
     "retrieved_at": "2026-09-30T10:35:02.769263+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1989791,
        "longitude": 113.5440212,
        "normalized": {
         "x": 0.7086,
         "y": 0.5993
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985636,
        "longitude": 113.5438396,
        "normalized": {
         "x": 0.569,
         "y": 0.2797
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986112,
        "longitude": 113.5436646,
        "normalized": {
         "x": 0.4343,
         "y": 0.3163
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1989791,
     "longitude": 113.5440212
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "F63929B658",
   "occurred_at": "2026-09-30T18:23:58+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1991324, \"longitude\": 113.5439042, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T10:23:58.709099+00:00\", \"observed_at\": \"2026-09-30T10:23:58.709099+00:00\", \"retrieved_at\": \"2026-09-30T10:23:58.709099+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1991324, \"longitude\": 113.5439042, \"normalized\": {\"x\": 0.6186, \"y\": 0.7173}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985346, \"longitude\": 113.5438261, \"normalized\": {\"x\": 0.5585, \"y\": 0.2573}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985476, \"longitude\": 113.5439869, \"normalized\": {\"x\": 0.6822, \"y\": 0.2674}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1991324, \"longitude\": 113.5439042}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1991324,
    "longitude": 113.5439042,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T10:23:58.709099+00:00",
     "observed_at": "2026-09-30T10:23:58.709099+00:00",
     "retrieved_at": "2026-09-30T10:23:58.709099+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1991324,
        "longitude": 113.5439042,
        "normalized": {
         "x": 0.6186,
         "y": 0.7173
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985346,
        "longitude": 113.5438261,
        "normalized": {
         "x": 0.5585,
         "y": 0.2573
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985476,
        "longitude": 113.5439869,
        "normalized": {
         "x": 0.6822,
         "y": 0.2674
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1991324,
     "longitude": 113.5439042
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "2CCC8737AE",
   "occurred_at": "2026-09-30T18:22:50+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.198603, \"longitude\": 113.5440487, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T10:22:49.994073+00:00\", \"observed_at\": \"2026-09-30T10:22:49.994073+00:00\", \"retrieved_at\": \"2026-09-30T10:22:49.994073+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984701, \"longitude\": 113.5436481, \"normalized\": {\"x\": 0.4216, \"y\": 0.2077}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985756, \"longitude\": 113.5437908, \"normalized\": {\"x\": 0.5314, \"y\": 0.2889}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.198603, \"longitude\": 113.5440487, \"normalized\": {\"x\": 0.7298, \"y\": 0.31}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984701, \"longitude\": 113.5436481}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.198603,
    "longitude": 113.5440487,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T10:22:49.994073+00:00",
     "observed_at": "2026-09-30T10:22:49.994073+00:00",
     "retrieved_at": "2026-09-30T10:22:49.994073+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984701,
        "longitude": 113.5436481,
        "normalized": {
         "x": 0.4216,
         "y": 0.2077
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985756,
        "longitude": 113.5437908,
        "normalized": {
         "x": 0.5314,
         "y": 0.2889
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.198603,
        "longitude": 113.5440487,
        "normalized": {
         "x": 0.7298,
         "y": 0.31
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984701,
     "longitude": 113.5436481
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "EE04E2722B",
   "occurred_at": "2026-09-30T18:15:49+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1988559, \"longitude\": 113.5440125, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T10:15:49.435686+00:00\", \"observed_at\": \"2026-09-30T10:15:49.435686+00:00\", \"retrieved_at\": \"2026-09-30T10:15:49.435686+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984967, \"longitude\": 113.5438526, \"normalized\": {\"x\": 0.5789, \"y\": 0.2282}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984789, \"longitude\": 113.5438836, \"normalized\": {\"x\": 0.6028, \"y\": 0.2145}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1988559, \"longitude\": 113.5440125, \"normalized\": {\"x\": 0.702, \"y\": 0.5045}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984967, \"longitude\": 113.5438526}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1988559,
    "longitude": 113.5440125,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T10:15:49.435686+00:00",
     "observed_at": "2026-09-30T10:15:49.435686+00:00",
     "retrieved_at": "2026-09-30T10:15:49.435686+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984967,
        "longitude": 113.5438526,
        "normalized": {
         "x": 0.5789,
         "y": 0.2282
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984789,
        "longitude": 113.5438836,
        "normalized": {
         "x": 0.6028,
         "y": 0.2145
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1988559,
        "longitude": 113.5440125,
        "normalized": {
         "x": 0.702,
         "y": 0.5045
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984967,
     "longitude": 113.5438526
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "B5CB867228",
   "occurred_at": "2026-09-30T18:02:57+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984709, \"longitude\": 113.5435893, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T10:02:57.583962+00:00\", \"observed_at\": \"2026-09-30T10:02:57.583962+00:00\", \"retrieved_at\": \"2026-09-30T10:02:57.583962+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986145, \"longitude\": 113.5438551, \"normalized\": {\"x\": 0.5809, \"y\": 0.3189}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985739, \"longitude\": 113.5438301, \"normalized\": {\"x\": 0.5616, \"y\": 0.2876}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984709, \"longitude\": 113.5435893, \"normalized\": {\"x\": 0.3764, \"y\": 0.2084}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986145, \"longitude\": 113.5438551}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984709,
    "longitude": 113.5435893,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T10:02:57.583962+00:00",
     "observed_at": "2026-09-30T10:02:57.583962+00:00",
     "retrieved_at": "2026-09-30T10:02:57.583962+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986145,
        "longitude": 113.5438551,
        "normalized": {
         "x": 0.5809,
         "y": 0.3189
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985739,
        "longitude": 113.5438301,
        "normalized": {
         "x": 0.5616,
         "y": 0.2876
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984709,
        "longitude": 113.5435893,
        "normalized": {
         "x": 0.3764,
         "y": 0.2084
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986145,
     "longitude": 113.5438551
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "DB815D351F",
   "occurred_at": "2026-09-30T17:58:47+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1989332, \"longitude\": 113.5440019, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T09:58:47.360555+00:00\", \"observed_at\": \"2026-09-30T09:58:47.360555+00:00\", \"retrieved_at\": \"2026-09-30T09:58:47.360555+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984388, \"longitude\": 113.543828, \"normalized\": {\"x\": 0.56, \"y\": 0.1837}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1989332, \"longitude\": 113.5440019, \"normalized\": {\"x\": 0.6937, \"y\": 0.564}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984876, \"longitude\": 113.5437245, \"normalized\": {\"x\": 0.4804, \"y\": 0.2212}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984388, \"longitude\": 113.543828}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1989332,
    "longitude": 113.5440019,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T09:58:47.360555+00:00",
     "observed_at": "2026-09-30T09:58:47.360555+00:00",
     "retrieved_at": "2026-09-30T09:58:47.360555+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984388,
        "longitude": 113.543828,
        "normalized": {
         "x": 0.56,
         "y": 0.1837
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1989332,
        "longitude": 113.5440019,
        "normalized": {
         "x": 0.6937,
         "y": 0.564
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984876,
        "longitude": 113.5437245,
        "normalized": {
         "x": 0.4804,
         "y": 0.2212
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984388,
     "longitude": 113.543828
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "BD125A0C10",
   "occurred_at": "2026-09-30T17:55:35+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986663, \"longitude\": 113.5440127, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T09:55:35.429570+00:00\", \"observed_at\": \"2026-09-30T09:55:35.429570+00:00\", \"retrieved_at\": \"2026-09-30T09:55:35.429570+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985237, \"longitude\": 113.5438942, \"normalized\": {\"x\": 0.6109, \"y\": 0.249}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986663, \"longitude\": 113.5440127, \"normalized\": {\"x\": 0.7021, \"y\": 0.3587}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986041, \"longitude\": 113.5439389, \"normalized\": {\"x\": 0.6453, \"y\": 0.3109}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985237, \"longitude\": 113.5438942}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986663,
    "longitude": 113.5440127,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T09:55:35.429570+00:00",
     "observed_at": "2026-09-30T09:55:35.429570+00:00",
     "retrieved_at": "2026-09-30T09:55:35.429570+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985237,
        "longitude": 113.5438942,
        "normalized": {
         "x": 0.6109,
         "y": 0.249
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986663,
        "longitude": 113.5440127,
        "normalized": {
         "x": 0.7021,
         "y": 0.3587
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986041,
        "longitude": 113.5439389,
        "normalized": {
         "x": 0.6453,
         "y": 0.3109
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985237,
     "longitude": 113.5438942
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "9FC2EF2FD0",
   "occurred_at": "2026-09-30T17:52:17+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1985038, \"longitude\": 113.5435849, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T09:52:17.679363+00:00\", \"observed_at\": \"2026-09-30T09:52:17.679363+00:00\", \"retrieved_at\": \"2026-09-30T09:52:17.679363+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986102, \"longitude\": 113.5436683, \"normalized\": {\"x\": 0.4372, \"y\": 0.3155}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985038, \"longitude\": 113.5435849, \"normalized\": {\"x\": 0.373, \"y\": 0.2337}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985336, \"longitude\": 113.5433732, \"normalized\": {\"x\": 0.2101, \"y\": 0.2566}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986102, \"longitude\": 113.5436683}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1985038,
    "longitude": 113.5435849,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T09:52:17.679363+00:00",
     "observed_at": "2026-09-30T09:52:17.679363+00:00",
     "retrieved_at": "2026-09-30T09:52:17.679363+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986102,
        "longitude": 113.5436683,
        "normalized": {
         "x": 0.4372,
         "y": 0.3155
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985038,
        "longitude": 113.5435849,
        "normalized": {
         "x": 0.373,
         "y": 0.2337
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985336,
        "longitude": 113.5433732,
        "normalized": {
         "x": 0.2101,
         "y": 0.2566
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986102,
     "longitude": 113.5436683
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "5F979575B6",
   "occurred_at": "2026-09-30T17:51:40+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984914, \"longitude\": 113.5435665, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T09:51:40.172873+00:00\", \"observed_at\": \"2026-09-30T09:51:40.172873+00:00\", \"retrieved_at\": \"2026-09-30T09:51:40.172873+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985202, \"longitude\": 113.543681, \"normalized\": {\"x\": 0.4469, \"y\": 0.2463}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984483, \"longitude\": 113.5438543, \"normalized\": {\"x\": 0.5802, \"y\": 0.191}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984914, \"longitude\": 113.5435665, \"normalized\": {\"x\": 0.3588, \"y\": 0.2242}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985202, \"longitude\": 113.543681}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984914,
    "longitude": 113.5435665,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T09:51:40.172873+00:00",
     "observed_at": "2026-09-30T09:51:40.172873+00:00",
     "retrieved_at": "2026-09-30T09:51:40.172873+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985202,
        "longitude": 113.543681,
        "normalized": {
         "x": 0.4469,
         "y": 0.2463
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984483,
        "longitude": 113.5438543,
        "normalized": {
         "x": 0.5802,
         "y": 0.191
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984914,
        "longitude": 113.5435665,
        "normalized": {
         "x": 0.3588,
         "y": 0.2242
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985202,
     "longitude": 113.543681
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "A133185DC2",
   "occurred_at": "2026-09-30T17:45:42+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1989317, \"longitude\": 113.5440192, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T09:45:42.327182+00:00\", \"observed_at\": \"2026-09-30T09:45:42.327182+00:00\", \"retrieved_at\": \"2026-09-30T09:45:42.327182+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984397, \"longitude\": 113.5437239, \"normalized\": {\"x\": 0.4799, \"y\": 0.1844}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984023, \"longitude\": 113.5436935, \"normalized\": {\"x\": 0.4565, \"y\": 0.1556}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1989317, \"longitude\": 113.5440192, \"normalized\": {\"x\": 0.7071, \"y\": 0.5629}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984397, \"longitude\": 113.5437239}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1989317,
    "longitude": 113.5440192,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T09:45:42.327182+00:00",
     "observed_at": "2026-09-30T09:45:42.327182+00:00",
     "retrieved_at": "2026-09-30T09:45:42.327182+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984397,
        "longitude": 113.5437239,
        "normalized": {
         "x": 0.4799,
         "y": 0.1844
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984023,
        "longitude": 113.5436935,
        "normalized": {
         "x": 0.4565,
         "y": 0.1556
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1989317,
        "longitude": 113.5440192,
        "normalized": {
         "x": 0.7071,
         "y": 0.5629
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984397,
     "longitude": 113.5437239
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "25EEEDEA80",
   "occurred_at": "2026-09-30T17:41:49+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1985236, \"longitude\": 113.5435931, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T09:41:49.071971+00:00\", \"observed_at\": \"2026-09-30T09:41:49.071971+00:00\", \"retrieved_at\": \"2026-09-30T09:41:49.071971+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1990753, \"longitude\": 113.5439161, \"normalized\": {\"x\": 0.6278, \"y\": 0.6733}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984873, \"longitude\": 113.5438232, \"normalized\": {\"x\": 0.5563, \"y\": 0.221}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985236, \"longitude\": 113.5435931, \"normalized\": {\"x\": 0.3793, \"y\": 0.249}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1990753, \"longitude\": 113.5439161}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1985236,
    "longitude": 113.5435931,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T09:41:49.071971+00:00",
     "observed_at": "2026-09-30T09:41:49.071971+00:00",
     "retrieved_at": "2026-09-30T09:41:49.071971+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1990753,
        "longitude": 113.5439161,
        "normalized": {
         "x": 0.6278,
         "y": 0.6733
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984873,
        "longitude": 113.5438232,
        "normalized": {
         "x": 0.5563,
         "y": 0.221
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985236,
        "longitude": 113.5435931,
        "normalized": {
         "x": 0.3793,
         "y": 0.249
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1990753,
     "longitude": 113.5439161
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "ABD71234B9",
   "occurred_at": "2026-09-30T17:41:40+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990419, \"longitude\": 113.5439045, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T09:41:40.619269+00:00\", \"observed_at\": \"2026-09-30T09:41:40.619269+00:00\", \"retrieved_at\": \"2026-09-30T09:41:40.619269+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1990419, \"longitude\": 113.5439045, \"normalized\": {\"x\": 0.6188, \"y\": 0.6476}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984764, \"longitude\": 113.543852, \"normalized\": {\"x\": 0.5784, \"y\": 0.2126}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.198528, \"longitude\": 113.5436134, \"normalized\": {\"x\": 0.395, \"y\": 0.2523}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1990419, \"longitude\": 113.5439045}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990419,
    "longitude": 113.5439045,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T09:41:40.619269+00:00",
     "observed_at": "2026-09-30T09:41:40.619269+00:00",
     "retrieved_at": "2026-09-30T09:41:40.619269+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1990419,
        "longitude": 113.5439045,
        "normalized": {
         "x": 0.6188,
         "y": 0.6476
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984764,
        "longitude": 113.543852,
        "normalized": {
         "x": 0.5784,
         "y": 0.2126
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.198528,
        "longitude": 113.5436134,
        "normalized": {
         "x": 0.395,
         "y": 0.2523
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1990419,
     "longitude": 113.5439045
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "8334BE1331",
   "occurred_at": "2026-09-30T17:36:59+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1983906, \"longitude\": 113.5435725, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T09:36:59.020040+00:00\", \"observed_at\": \"2026-09-30T09:36:59.020040+00:00\", \"retrieved_at\": \"2026-09-30T09:36:59.020040+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984621, \"longitude\": 113.5437628, \"normalized\": {\"x\": 0.5098, \"y\": 0.2016}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1983906, \"longitude\": 113.5435725, \"normalized\": {\"x\": 0.3635, \"y\": 0.1466}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984406, \"longitude\": 113.5438422, \"normalized\": {\"x\": 0.5709, \"y\": 0.185}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984621, \"longitude\": 113.5437628}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1983906,
    "longitude": 113.5435725,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T09:36:59.020040+00:00",
     "observed_at": "2026-09-30T09:36:59.020040+00:00",
     "retrieved_at": "2026-09-30T09:36:59.020040+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984621,
        "longitude": 113.5437628,
        "normalized": {
         "x": 0.5098,
         "y": 0.2016
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1983906,
        "longitude": 113.5435725,
        "normalized": {
         "x": 0.3635,
         "y": 0.1466
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984406,
        "longitude": 113.5438422,
        "normalized": {
         "x": 0.5709,
         "y": 0.185
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984621,
     "longitude": 113.5437628
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "96D7E5BD65",
   "occurred_at": "2026-09-30T17:20:44+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986077, \"longitude\": 113.5440663, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T09:20:44.553500+00:00\", \"observed_at\": \"2026-09-30T09:20:44.553500+00:00\", \"retrieved_at\": \"2026-09-30T09:20:44.553500+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986077, \"longitude\": 113.5440663, \"normalized\": {\"x\": 0.7433, \"y\": 0.3136}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985278, \"longitude\": 113.5436807, \"normalized\": {\"x\": 0.4467, \"y\": 0.2521}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985453, \"longitude\": 113.543826, \"normalized\": {\"x\": 0.5585, \"y\": 0.2656}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986077, \"longitude\": 113.5440663}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986077,
    "longitude": 113.5440663,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T09:20:44.553500+00:00",
     "observed_at": "2026-09-30T09:20:44.553500+00:00",
     "retrieved_at": "2026-09-30T09:20:44.553500+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986077,
        "longitude": 113.5440663,
        "normalized": {
         "x": 0.7433,
         "y": 0.3136
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985278,
        "longitude": 113.5436807,
        "normalized": {
         "x": 0.4467,
         "y": 0.2521
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985453,
        "longitude": 113.543826,
        "normalized": {
         "x": 0.5585,
         "y": 0.2656
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986077,
     "longitude": 113.5440663
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "9A77E0178E",
   "occurred_at": "2026-09-30T17:14:38+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.198521, \"longitude\": 113.5435771, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T09:14:37.983275+00:00\", \"observed_at\": \"2026-09-30T09:14:37.983275+00:00\", \"retrieved_at\": \"2026-09-30T09:14:37.983275+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.198521, \"longitude\": 113.5435771, \"normalized\": {\"x\": 0.367, \"y\": 0.2469}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985562, \"longitude\": 113.5439252, \"normalized\": {\"x\": 0.6348, \"y\": 0.274}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984408, \"longitude\": 113.5438612, \"normalized\": {\"x\": 0.5856, \"y\": 0.1852}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.198521, \"longitude\": 113.5435771}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.198521,
    "longitude": 113.5435771,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T09:14:37.983275+00:00",
     "observed_at": "2026-09-30T09:14:37.983275+00:00",
     "retrieved_at": "2026-09-30T09:14:37.983275+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.198521,
        "longitude": 113.5435771,
        "normalized": {
         "x": 0.367,
         "y": 0.2469
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985562,
        "longitude": 113.5439252,
        "normalized": {
         "x": 0.6348,
         "y": 0.274
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984408,
        "longitude": 113.5438612,
        "normalized": {
         "x": 0.5856,
         "y": 0.1852
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.198521,
     "longitude": 113.5435771
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "F73C7352C7",
   "occurred_at": "2026-09-30T17:06:39+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1987075, \"longitude\": 113.5440149, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T09:06:39.348911+00:00\", \"observed_at\": \"2026-09-30T09:06:39.348911+00:00\", \"retrieved_at\": \"2026-09-30T09:06:39.348911+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1987075, \"longitude\": 113.5440149, \"normalized\": {\"x\": 0.7038, \"y\": 0.3904}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986491, \"longitude\": 113.5438368, \"normalized\": {\"x\": 0.5668, \"y\": 0.3455}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985229, \"longitude\": 113.5436803, \"normalized\": {\"x\": 0.4464, \"y\": 0.2483}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1987075, \"longitude\": 113.5440149}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1987075,
    "longitude": 113.5440149,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T09:06:39.348911+00:00",
     "observed_at": "2026-09-30T09:06:39.348911+00:00",
     "retrieved_at": "2026-09-30T09:06:39.348911+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1987075,
        "longitude": 113.5440149,
        "normalized": {
         "x": 0.7038,
         "y": 0.3904
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986491,
        "longitude": 113.5438368,
        "normalized": {
         "x": 0.5668,
         "y": 0.3455
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985229,
        "longitude": 113.5436803,
        "normalized": {
         "x": 0.4464,
         "y": 0.2483
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1987075,
     "longitude": 113.5440149
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "F0D987ED65",
   "occurred_at": "2026-09-30T17:02:22+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986095, \"longitude\": 113.5440529, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T09:02:22.088578+00:00\", \"observed_at\": \"2026-09-30T09:02:22.088578+00:00\", \"retrieved_at\": \"2026-09-30T09:02:22.088578+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984303, \"longitude\": 113.5438305, \"normalized\": {\"x\": 0.5619, \"y\": 0.1772}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984708, \"longitude\": 113.5438963, \"normalized\": {\"x\": 0.6125, \"y\": 0.2083}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986095, \"longitude\": 113.5440529, \"normalized\": {\"x\": 0.733, \"y\": 0.315}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984303, \"longitude\": 113.5438305}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986095,
    "longitude": 113.5440529,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T09:02:22.088578+00:00",
     "observed_at": "2026-09-30T09:02:22.088578+00:00",
     "retrieved_at": "2026-09-30T09:02:22.088578+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984303,
        "longitude": 113.5438305,
        "normalized": {
         "x": 0.5619,
         "y": 0.1772
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984708,
        "longitude": 113.5438963,
        "normalized": {
         "x": 0.6125,
         "y": 0.2083
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986095,
        "longitude": 113.5440529,
        "normalized": {
         "x": 0.733,
         "y": 0.315
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984303,
     "longitude": 113.5438305
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "2574658463",
   "occurred_at": "2026-09-30T16:57:37+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990119, \"longitude\": 113.5440089, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T08:57:37.870266+00:00\", \"observed_at\": \"2026-09-30T08:57:37.870266+00:00\", \"retrieved_at\": \"2026-09-30T08:57:37.870266+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984049, \"longitude\": 113.5437256, \"normalized\": {\"x\": 0.4813, \"y\": 0.1576}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984792, \"longitude\": 113.543698, \"normalized\": {\"x\": 0.46, \"y\": 0.2148}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1990119, \"longitude\": 113.5440089, \"normalized\": {\"x\": 0.6992, \"y\": 0.6246}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984049, \"longitude\": 113.5437256}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990119,
    "longitude": 113.5440089,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T08:57:37.870266+00:00",
     "observed_at": "2026-09-30T08:57:37.870266+00:00",
     "retrieved_at": "2026-09-30T08:57:37.870266+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984049,
        "longitude": 113.5437256,
        "normalized": {
         "x": 0.4813,
         "y": 0.1576
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984792,
        "longitude": 113.543698,
        "normalized": {
         "x": 0.46,
         "y": 0.2148
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1990119,
        "longitude": 113.5440089,
        "normalized": {
         "x": 0.6992,
         "y": 0.6246
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984049,
     "longitude": 113.5437256
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "246C6BD43D",
   "occurred_at": "2026-09-30T16:49:56+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T08:49:56.310852+00:00\", \"observed_at\": \"2026-09-30T08:49:56.310852+00:00\", \"retrieved_at\": \"2026-09-30T08:49:56.310852+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984896, \"longitude\": 113.5436236, \"normalized\": {\"x\": 0.4027, \"y\": 0.2228}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.199114, \"longitude\": 113.54404, \"normalized\": {\"x\": 0.7231, \"y\": 0.7031}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986178, \"longitude\": 113.5438961, \"normalized\": {\"x\": 0.6124, \"y\": 0.3214}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984896, \"longitude\": 113.5436236}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T08:49:56.310852+00:00",
     "observed_at": "2026-09-30T08:49:56.310852+00:00",
     "retrieved_at": "2026-09-30T08:49:56.310852+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984896,
        "longitude": 113.5436236,
        "normalized": {
         "x": 0.4027,
         "y": 0.2228
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.199114,
        "longitude": 113.54404,
        "normalized": {
         "x": 0.7231,
         "y": 0.7031
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986178,
        "longitude": 113.5438961,
        "normalized": {
         "x": 0.6124,
         "y": 0.3214
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984896,
     "longitude": 113.5436236
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "058F0A4844",
   "occurred_at": "2026-09-30T16:48:55+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990119, \"longitude\": 113.5439844, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T08:48:55.597833+00:00\", \"observed_at\": \"2026-09-30T08:48:55.597833+00:00\", \"retrieved_at\": \"2026-09-30T08:48:55.597833+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984004, \"longitude\": 113.5433874, \"normalized\": {\"x\": 0.2211, \"y\": 0.1541}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990119, \"longitude\": 113.5439844, \"normalized\": {\"x\": 0.6803, \"y\": 0.6246}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984345, \"longitude\": 113.5438201, \"normalized\": {\"x\": 0.5539, \"y\": 0.1803}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984004, \"longitude\": 113.5433874}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990119,
    "longitude": 113.5439844,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T08:48:55.597833+00:00",
     "observed_at": "2026-09-30T08:48:55.597833+00:00",
     "retrieved_at": "2026-09-30T08:48:55.597833+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984004,
        "longitude": 113.5433874,
        "normalized": {
         "x": 0.2211,
         "y": 0.1541
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990119,
        "longitude": 113.5439844,
        "normalized": {
         "x": 0.6803,
         "y": 0.6246
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984345,
        "longitude": 113.5438201,
        "normalized": {
         "x": 0.5539,
         "y": 0.1803
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984004,
     "longitude": 113.5433874
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "58083D74F6",
   "occurred_at": "2026-09-30T16:48:22+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984393, \"longitude\": 113.5435792, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T08:48:21.972099+00:00\", \"observed_at\": \"2026-09-30T08:48:21.972099+00:00\", \"retrieved_at\": \"2026-09-30T08:48:21.972099+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984393, \"longitude\": 113.5435792, \"normalized\": {\"x\": 0.3686, \"y\": 0.1841}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1988492, \"longitude\": 113.5438959, \"normalized\": {\"x\": 0.6122, \"y\": 0.4994}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984105, \"longitude\": 113.5437982, \"normalized\": {\"x\": 0.5371, \"y\": 0.1619}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984393, \"longitude\": 113.5435792}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984393,
    "longitude": 113.5435792,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T08:48:21.972099+00:00",
     "observed_at": "2026-09-30T08:48:21.972099+00:00",
     "retrieved_at": "2026-09-30T08:48:21.972099+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984393,
        "longitude": 113.5435792,
        "normalized": {
         "x": 0.3686,
         "y": 0.1841
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1988492,
        "longitude": 113.5438959,
        "normalized": {
         "x": 0.6122,
         "y": 0.4994
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984105,
        "longitude": 113.5437982,
        "normalized": {
         "x": 0.5371,
         "y": 0.1619
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984393,
     "longitude": 113.5435792
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "4551AEE3C8",
   "occurred_at": "2026-09-30T16:46:43+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984464, \"longitude\": 113.5435942, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T08:46:43.545873+00:00\", \"observed_at\": \"2026-09-30T08:46:43.545873+00:00\", \"retrieved_at\": \"2026-09-30T08:46:43.545873+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986445, \"longitude\": 113.5436931, \"normalized\": {\"x\": 0.4562, \"y\": 0.3419}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984415, \"longitude\": 113.5437476, \"normalized\": {\"x\": 0.4982, \"y\": 0.1858}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984464, \"longitude\": 113.5435942, \"normalized\": {\"x\": 0.3802, \"y\": 0.1896}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986445, \"longitude\": 113.5436931}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984464,
    "longitude": 113.5435942,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T08:46:43.545873+00:00",
     "observed_at": "2026-09-30T08:46:43.545873+00:00",
     "retrieved_at": "2026-09-30T08:46:43.545873+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986445,
        "longitude": 113.5436931,
        "normalized": {
         "x": 0.4562,
         "y": 0.3419
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984415,
        "longitude": 113.5437476,
        "normalized": {
         "x": 0.4982,
         "y": 0.1858
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984464,
        "longitude": 113.5435942,
        "normalized": {
         "x": 0.3802,
         "y": 0.1896
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986445,
     "longitude": 113.5436931
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "EC6F375AC1",
   "occurred_at": "2026-09-30T16:40:33+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T08:40:33.830597+00:00\", \"observed_at\": \"2026-09-30T08:40:33.830597+00:00\", \"retrieved_at\": \"2026-09-30T08:40:33.830597+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1987496, \"longitude\": 113.5441292, \"normalized\": {\"x\": 0.7917, \"y\": 0.4228}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985354, \"longitude\": 113.5439252, \"normalized\": {\"x\": 0.6347, \"y\": 0.258}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1983982, \"longitude\": 113.5434019, \"normalized\": {\"x\": 0.2322, \"y\": 0.1524}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1987496, \"longitude\": 113.5441292}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T08:40:33.830597+00:00",
     "observed_at": "2026-09-30T08:40:33.830597+00:00",
     "retrieved_at": "2026-09-30T08:40:33.830597+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1987496,
        "longitude": 113.5441292,
        "normalized": {
         "x": 0.7917,
         "y": 0.4228
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985354,
        "longitude": 113.5439252,
        "normalized": {
         "x": 0.6347,
         "y": 0.258
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1983982,
        "longitude": 113.5434019,
        "normalized": {
         "x": 0.2322,
         "y": 0.1524
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1987496,
     "longitude": 113.5441292
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "080BC86AE3",
   "occurred_at": "2026-09-30T16:39:58+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984171, \"longitude\": 113.5435739, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T08:39:58.408315+00:00\", \"observed_at\": \"2026-09-30T08:39:58.408315+00:00\", \"retrieved_at\": \"2026-09-30T08:39:58.408315+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1988305, \"longitude\": 113.5442444, \"normalized\": {\"x\": 0.8803, \"y\": 0.485}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985416, \"longitude\": 113.5438919, \"normalized\": {\"x\": 0.6092, \"y\": 0.2628}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984171, \"longitude\": 113.5435739, \"normalized\": {\"x\": 0.3645, \"y\": 0.167}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1988305, \"longitude\": 113.5442444}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984171,
    "longitude": 113.5435739,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T08:39:58.408315+00:00",
     "observed_at": "2026-09-30T08:39:58.408315+00:00",
     "retrieved_at": "2026-09-30T08:39:58.408315+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1988305,
        "longitude": 113.5442444,
        "normalized": {
         "x": 0.8803,
         "y": 0.485
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985416,
        "longitude": 113.5438919,
        "normalized": {
         "x": 0.6092,
         "y": 0.2628
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984171,
        "longitude": 113.5435739,
        "normalized": {
         "x": 0.3645,
         "y": 0.167
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1988305,
     "longitude": 113.5442444
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "408543EAC9",
   "occurred_at": "2026-09-30T16:38:58+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.198677, \"longitude\": 113.5440273, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T08:38:57.919967+00:00\", \"observed_at\": \"2026-09-30T08:38:57.919967+00:00\", \"retrieved_at\": \"2026-09-30T08:38:57.919967+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.198677, \"longitude\": 113.5440273, \"normalized\": {\"x\": 0.7133, \"y\": 0.3669}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984935, \"longitude\": 113.5437301, \"normalized\": {\"x\": 0.4847, \"y\": 0.2258}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985012, \"longitude\": 113.543822, \"normalized\": {\"x\": 0.5554, \"y\": 0.2317}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.198677, \"longitude\": 113.5440273}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.198677,
    "longitude": 113.5440273,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T08:38:57.919967+00:00",
     "observed_at": "2026-09-30T08:38:57.919967+00:00",
     "retrieved_at": "2026-09-30T08:38:57.919967+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.198677,
        "longitude": 113.5440273,
        "normalized": {
         "x": 0.7133,
         "y": 0.3669
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984935,
        "longitude": 113.5437301,
        "normalized": {
         "x": 0.4847,
         "y": 0.2258
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985012,
        "longitude": 113.543822,
        "normalized": {
         "x": 0.5554,
         "y": 0.2317
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.198677,
     "longitude": 113.5440273
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "27C01AC760",
   "occurred_at": "2026-09-30T16:36:15+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984998, \"longitude\": 113.543585, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T08:36:14.951548+00:00\", \"observed_at\": \"2026-09-30T08:36:14.951548+00:00\", \"retrieved_at\": \"2026-09-30T08:36:14.951548+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984888, \"longitude\": 113.5436388, \"normalized\": {\"x\": 0.4145, \"y\": 0.2221}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984998, \"longitude\": 113.543585, \"normalized\": {\"x\": 0.3731, \"y\": 0.2306}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1985626, \"longitude\": 113.5438678, \"normalized\": {\"x\": 0.5906, \"y\": 0.2789}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984888, \"longitude\": 113.5436388}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984998,
    "longitude": 113.543585,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T08:36:14.951548+00:00",
     "observed_at": "2026-09-30T08:36:14.951548+00:00",
     "retrieved_at": "2026-09-30T08:36:14.951548+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984888,
        "longitude": 113.5436388,
        "normalized": {
         "x": 0.4145,
         "y": 0.2221
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984998,
        "longitude": 113.543585,
        "normalized": {
         "x": 0.3731,
         "y": 0.2306
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1985626,
        "longitude": 113.5438678,
        "normalized": {
         "x": 0.5906,
         "y": 0.2789
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984888,
     "longitude": 113.5436388
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "6BC45A1775",
   "occurred_at": "2026-09-30T16:29:37+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T08:29:37.443886+00:00\", \"observed_at\": \"2026-09-30T08:29:37.443886+00:00\", \"retrieved_at\": \"2026-09-30T08:29:37.443886+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986074, \"longitude\": 113.5436688, \"normalized\": {\"x\": 0.4376, \"y\": 0.3134}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1989275, \"longitude\": 113.5440332, \"normalized\": {\"x\": 0.7178, \"y\": 0.5596}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984, \"longitude\": 113.5434597, \"normalized\": {\"x\": 0.2767, \"y\": 0.1538}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986074, \"longitude\": 113.5436688}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T08:29:37.443886+00:00",
     "observed_at": "2026-09-30T08:29:37.443886+00:00",
     "retrieved_at": "2026-09-30T08:29:37.443886+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986074,
        "longitude": 113.5436688,
        "normalized": {
         "x": 0.4376,
         "y": 0.3134
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1989275,
        "longitude": 113.5440332,
        "normalized": {
         "x": 0.7178,
         "y": 0.5596
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984,
        "longitude": 113.5434597,
        "normalized": {
         "x": 0.2767,
         "y": 0.1538
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986074,
     "longitude": 113.5436688
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "14CBD53744",
   "occurred_at": "2026-09-30T16:29:27+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984, \"longitude\": 113.5433302, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T08:29:27.003860+00:00\", \"observed_at\": \"2026-09-30T08:29:27.003860+00:00\", \"retrieved_at\": \"2026-09-30T08:29:27.003860+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986821, \"longitude\": 113.5436133, \"normalized\": {\"x\": 0.3949, \"y\": 0.3709}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990678, \"longitude\": 113.5440875, \"normalized\": {\"x\": 0.7596, \"y\": 0.6675}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984, \"longitude\": 113.5433302, \"normalized\": {\"x\": 0.1771, \"y\": 0.1538}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986821, \"longitude\": 113.5436133}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984,
    "longitude": 113.5433302,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T08:29:27.003860+00:00",
     "observed_at": "2026-09-30T08:29:27.003860+00:00",
     "retrieved_at": "2026-09-30T08:29:27.003860+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986821,
        "longitude": 113.5436133,
        "normalized": {
         "x": 0.3949,
         "y": 0.3709
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990678,
        "longitude": 113.5440875,
        "normalized": {
         "x": 0.7596,
         "y": 0.6675
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984,
        "longitude": 113.5433302,
        "normalized": {
         "x": 0.1771,
         "y": 0.1538
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986821,
     "longitude": 113.5436133
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "1CF313C8F7",
   "occurred_at": "2026-09-30T16:29:27+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990678, \"longitude\": 113.5440875, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-30T08:29:27.003860+00:00\", \"observed_at\": \"2026-09-30T08:29:27.003860+00:00\", \"retrieved_at\": \"2026-09-30T08:29:27.003860+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986821, \"longitude\": 113.5436133, \"normalized\": {\"x\": 0.3949, \"y\": 0.3709}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990678, \"longitude\": 113.5440875, \"normalized\": {\"x\": 0.7596, \"y\": 0.6675}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984, \"longitude\": 113.5433302, \"normalized\": {\"x\": 0.1771, \"y\": 0.1538}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986821, \"longitude\": 113.5436133}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990678,
    "longitude": 113.5440875,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-30T08:29:27.003860+00:00",
     "observed_at": "2026-09-30T08:29:27.003860+00:00",
     "retrieved_at": "2026-09-30T08:29:27.003860+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986821,
        "longitude": 113.5436133,
        "normalized": {
         "x": 0.3949,
         "y": 0.3709
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990678,
        "longitude": 113.5440875,
        "normalized": {
         "x": 0.7596,
         "y": 0.6675
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984,
        "longitude": 113.5433302,
        "normalized": {
         "x": 0.1771,
         "y": 0.1538
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986821,
     "longitude": 113.5436133
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "837B22EEE2",
   "occurred_at": "2026-09-28T17:54:13+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1986905, \"longitude\": 113.5434202, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:54:13.666220+00:00\", \"observed_at\": \"2026-09-28T09:54:13.666220+00:00\", \"retrieved_at\": \"2026-09-28T09:54:13.666220+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986826, \"longitude\": 113.5436886, \"normalized\": {\"x\": 0.4527, \"y\": 0.3712}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986905, \"longitude\": 113.5434202, \"normalized\": {\"x\": 0.2463, \"y\": 0.3773}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.19864, \"longitude\": 113.5437148, \"normalized\": {\"x\": 0.4729, \"y\": 0.3384}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986826, \"longitude\": 113.5436886}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1986905,
    "longitude": 113.5434202,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:54:13.666220+00:00",
     "observed_at": "2026-09-28T09:54:13.666220+00:00",
     "retrieved_at": "2026-09-28T09:54:13.666220+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986826,
        "longitude": 113.5436886,
        "normalized": {
         "x": 0.4527,
         "y": 0.3712
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986905,
        "longitude": 113.5434202,
        "normalized": {
         "x": 0.2463,
         "y": 0.3773
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.19864,
        "longitude": 113.5437148,
        "normalized": {
         "x": 0.4729,
         "y": 0.3384
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986826,
     "longitude": 113.5436886
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "D88257081F",
   "occurred_at": "2026-09-28T17:52:11+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990105, \"longitude\": 113.5439755, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:52:11.699869+00:00\", \"observed_at\": \"2026-09-28T09:52:11.699869+00:00\", \"retrieved_at\": \"2026-09-28T09:52:11.699869+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1990287, \"longitude\": 113.5441513, \"normalized\": {\"x\": 0.8087, \"y\": 0.6374}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990105, \"longitude\": 113.5439755, \"normalized\": {\"x\": 0.6735, \"y\": 0.6235}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1989581, \"longitude\": 113.5438437, \"normalized\": {\"x\": 0.5721, \"y\": 0.5832}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1990287, \"longitude\": 113.5441513}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990105,
    "longitude": 113.5439755,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:52:11.699869+00:00",
     "observed_at": "2026-09-28T09:52:11.699869+00:00",
     "retrieved_at": "2026-09-28T09:52:11.699869+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1990287,
        "longitude": 113.5441513,
        "normalized": {
         "x": 0.8087,
         "y": 0.6374
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990105,
        "longitude": 113.5439755,
        "normalized": {
         "x": 0.6735,
         "y": 0.6235
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1989581,
        "longitude": 113.5438437,
        "normalized": {
         "x": 0.5721,
         "y": 0.5832
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1990287,
     "longitude": 113.5441513
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "00A2530E08",
   "occurred_at": "2026-09-28T17:51:25+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1987655, \"longitude\": 113.5440134, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:51:25.665622+00:00\", \"observed_at\": \"2026-09-28T09:51:25.665622+00:00\", \"retrieved_at\": \"2026-09-28T09:51:25.665622+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1987655, \"longitude\": 113.5440134, \"normalized\": {\"x\": 0.7026, \"y\": 0.435}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1987351, \"longitude\": 113.5439057, \"normalized\": {\"x\": 0.6197, \"y\": 0.4116}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1991458, \"longitude\": 113.5439821, \"normalized\": {\"x\": 0.6785, \"y\": 0.7276}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1987655, \"longitude\": 113.5440134}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1987655,
    "longitude": 113.5440134,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:51:25.665622+00:00",
     "observed_at": "2026-09-28T09:51:25.665622+00:00",
     "retrieved_at": "2026-09-28T09:51:25.665622+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1987655,
        "longitude": 113.5440134,
        "normalized": {
         "x": 0.7026,
         "y": 0.435
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1987351,
        "longitude": 113.5439057,
        "normalized": {
         "x": 0.6197,
         "y": 0.4116
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1991458,
        "longitude": 113.5439821,
        "normalized": {
         "x": 0.6785,
         "y": 0.7276
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1987655,
     "longitude": 113.5440134
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "51ECD36499",
   "occurred_at": "2026-09-28T17:50:31+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990184, \"longitude\": 113.5439061, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:50:31.378697+00:00\", \"observed_at\": \"2026-09-28T09:50:31.378697+00:00\", \"retrieved_at\": \"2026-09-28T09:50:31.378697+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985048, \"longitude\": 113.543828, \"normalized\": {\"x\": 0.56, \"y\": 0.2345}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984882, \"longitude\": 113.5438192, \"normalized\": {\"x\": 0.5532, \"y\": 0.2217}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1990184, \"longitude\": 113.5439061, \"normalized\": {\"x\": 0.6201, \"y\": 0.6295}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985048, \"longitude\": 113.543828}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990184,
    "longitude": 113.5439061,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:50:31.378697+00:00",
     "observed_at": "2026-09-28T09:50:31.378697+00:00",
     "retrieved_at": "2026-09-28T09:50:31.378697+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985048,
        "longitude": 113.543828,
        "normalized": {
         "x": 0.56,
         "y": 0.2345
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984882,
        "longitude": 113.5438192,
        "normalized": {
         "x": 0.5532,
         "y": 0.2217
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1990184,
        "longitude": 113.5439061,
        "normalized": {
         "x": 0.6201,
         "y": 0.6295
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985048,
     "longitude": 113.543828
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "900EDAA1BB",
   "occurred_at": "2026-09-28T17:47:01+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:47:01.868093+00:00\", \"observed_at\": \"2026-09-28T09:47:01.868093+00:00\", \"retrieved_at\": \"2026-09-28T09:47:01.868093+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984793, \"longitude\": 113.5437858, \"normalized\": {\"x\": 0.5275, \"y\": 0.2149}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986043, \"longitude\": 113.5440723, \"normalized\": {\"x\": 0.7479, \"y\": 0.311}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.198631, \"longitude\": 113.5434266, \"normalized\": {\"x\": 0.2512, \"y\": 0.3316}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984793, \"longitude\": 113.5437858}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:47:01.868093+00:00",
     "observed_at": "2026-09-28T09:47:01.868093+00:00",
     "retrieved_at": "2026-09-28T09:47:01.868093+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984793,
        "longitude": 113.5437858,
        "normalized": {
         "x": 0.5275,
         "y": 0.2149
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986043,
        "longitude": 113.5440723,
        "normalized": {
         "x": 0.7479,
         "y": 0.311
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.198631,
        "longitude": 113.5434266,
        "normalized": {
         "x": 0.2512,
         "y": 0.3316
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984793,
     "longitude": 113.5437858
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "2E5C26B419",
   "occurred_at": "2026-09-28T17:46:20+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1986316, \"longitude\": 113.5435831, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:46:19.806946+00:00\", \"observed_at\": \"2026-09-28T09:46:19.806946+00:00\", \"retrieved_at\": \"2026-09-28T09:46:19.806946+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985341, \"longitude\": 113.5437821, \"normalized\": {\"x\": 0.5247, \"y\": 0.257}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986162, \"longitude\": 113.5440728, \"normalized\": {\"x\": 0.7483, \"y\": 0.3202}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986316, \"longitude\": 113.5435831, \"normalized\": {\"x\": 0.3716, \"y\": 0.332}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985341, \"longitude\": 113.5437821}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1986316,
    "longitude": 113.5435831,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:46:19.806946+00:00",
     "observed_at": "2026-09-28T09:46:19.806946+00:00",
     "retrieved_at": "2026-09-28T09:46:19.806946+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985341,
        "longitude": 113.5437821,
        "normalized": {
         "x": 0.5247,
         "y": 0.257
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986162,
        "longitude": 113.5440728,
        "normalized": {
         "x": 0.7483,
         "y": 0.3202
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986316,
        "longitude": 113.5435831,
        "normalized": {
         "x": 0.3716,
         "y": 0.332
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985341,
     "longitude": 113.5437821
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "661963141E",
   "occurred_at": "2026-09-28T17:46:13+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986056, \"longitude\": 113.544065, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:46:13.567579+00:00\", \"observed_at\": \"2026-09-28T09:46:13.567579+00:00\", \"retrieved_at\": \"2026-09-28T09:46:13.567579+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985251, \"longitude\": 113.5437895, \"normalized\": {\"x\": 0.5304, \"y\": 0.2501}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986056, \"longitude\": 113.544065, \"normalized\": {\"x\": 0.7423, \"y\": 0.312}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986318, \"longitude\": 113.5436206, \"normalized\": {\"x\": 0.4005, \"y\": 0.3321}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985251, \"longitude\": 113.5437895}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986056,
    "longitude": 113.544065,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:46:13.567579+00:00",
     "observed_at": "2026-09-28T09:46:13.567579+00:00",
     "retrieved_at": "2026-09-28T09:46:13.567579+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985251,
        "longitude": 113.5437895,
        "normalized": {
         "x": 0.5304,
         "y": 0.2501
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986056,
        "longitude": 113.544065,
        "normalized": {
         "x": 0.7423,
         "y": 0.312
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986318,
        "longitude": 113.5436206,
        "normalized": {
         "x": 0.4005,
         "y": 0.3321
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985251,
     "longitude": 113.5437895
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "76E42052CD",
   "occurred_at": "2026-09-28T17:43:36+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:43:36.014904+00:00\", \"observed_at\": \"2026-09-28T09:43:36.014904+00:00\", \"retrieved_at\": \"2026-09-28T09:43:36.014904+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986118, \"longitude\": 113.5436254, \"normalized\": {\"x\": 0.4042, \"y\": 0.3168}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.198928, \"longitude\": 113.5440605, \"normalized\": {\"x\": 0.7389, \"y\": 0.56}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984397, \"longitude\": 113.5434071, \"normalized\": {\"x\": 0.2362, \"y\": 0.1844}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986118, \"longitude\": 113.5436254}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:43:36.014904+00:00",
     "observed_at": "2026-09-28T09:43:36.014904+00:00",
     "retrieved_at": "2026-09-28T09:43:36.014904+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986118,
        "longitude": 113.5436254,
        "normalized": {
         "x": 0.4042,
         "y": 0.3168
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.198928,
        "longitude": 113.5440605,
        "normalized": {
         "x": 0.7389,
         "y": 0.56
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984397,
        "longitude": 113.5434071,
        "normalized": {
         "x": 0.2362,
         "y": 0.1844
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986118,
     "longitude": 113.5436254
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "6C27EC4238",
   "occurred_at": "2026-09-28T17:43:25+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984, \"longitude\": 113.5433, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:43:25.411300+00:00\", \"observed_at\": \"2026-09-28T09:43:25.411300+00:00\", \"retrieved_at\": \"2026-09-28T09:43:25.411300+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.198683, \"longitude\": 113.5436049, \"normalized\": {\"x\": 0.3884, \"y\": 0.3716}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990679, \"longitude\": 113.5440926, \"normalized\": {\"x\": 0.7636, \"y\": 0.6676}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984, \"longitude\": 113.5433, \"normalized\": {\"x\": 0.1538, \"y\": 0.1538}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.198683, \"longitude\": 113.5436049}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984,
    "longitude": 113.5433,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:43:25.411300+00:00",
     "observed_at": "2026-09-28T09:43:25.411300+00:00",
     "retrieved_at": "2026-09-28T09:43:25.411300+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.198683,
        "longitude": 113.5436049,
        "normalized": {
         "x": 0.3884,
         "y": 0.3716
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990679,
        "longitude": 113.5440926,
        "normalized": {
         "x": 0.7636,
         "y": 0.6676
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984,
        "longitude": 113.5433,
        "normalized": {
         "x": 0.1538,
         "y": 0.1538
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.198683,
     "longitude": 113.5436049
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "1FB0C41CB2",
   "occurred_at": "2026-09-28T17:43:25+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990679, \"longitude\": 113.5440926, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:43:25.411300+00:00\", \"observed_at\": \"2026-09-28T09:43:25.411300+00:00\", \"retrieved_at\": \"2026-09-28T09:43:25.411300+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.198683, \"longitude\": 113.5436049, \"normalized\": {\"x\": 0.3884, \"y\": 0.3716}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990679, \"longitude\": 113.5440926, \"normalized\": {\"x\": 0.7636, \"y\": 0.6676}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984, \"longitude\": 113.5433, \"normalized\": {\"x\": 0.1538, \"y\": 0.1538}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.198683, \"longitude\": 113.5436049}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990679,
    "longitude": 113.5440926,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:43:25.411300+00:00",
     "observed_at": "2026-09-28T09:43:25.411300+00:00",
     "retrieved_at": "2026-09-28T09:43:25.411300+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.198683,
        "longitude": 113.5436049,
        "normalized": {
         "x": 0.3884,
         "y": 0.3716
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990679,
        "longitude": 113.5440926,
        "normalized": {
         "x": 0.7636,
         "y": 0.6676
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984,
        "longitude": 113.5433,
        "normalized": {
         "x": 0.1538,
         "y": 0.1538
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.198683,
     "longitude": 113.5436049
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "CA9A939DC6",
   "occurred_at": "2026-09-28T17:40:48+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1987284, \"longitude\": 113.5440045, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:40:48.319254+00:00\", \"observed_at\": \"2026-09-28T09:40:48.319254+00:00\", \"retrieved_at\": \"2026-09-28T09:40:48.319254+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1987284, \"longitude\": 113.5440045, \"normalized\": {\"x\": 0.6957, \"y\": 0.4065}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984278, \"longitude\": 113.5438585, \"normalized\": {\"x\": 0.5834, \"y\": 0.1752}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986144, \"longitude\": 113.5437778, \"normalized\": {\"x\": 0.5214, \"y\": 0.3188}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1987284, \"longitude\": 113.5440045}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1987284,
    "longitude": 113.5440045,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:40:48.319254+00:00",
     "observed_at": "2026-09-28T09:40:48.319254+00:00",
     "retrieved_at": "2026-09-28T09:40:48.319254+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1987284,
        "longitude": 113.5440045,
        "normalized": {
         "x": 0.6957,
         "y": 0.4065
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984278,
        "longitude": 113.5438585,
        "normalized": {
         "x": 0.5834,
         "y": 0.1752
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986144,
        "longitude": 113.5437778,
        "normalized": {
         "x": 0.5214,
         "y": 0.3188
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1987284,
     "longitude": 113.5440045
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "444BF9557F",
   "occurred_at": "2026-09-28T17:34:02+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990799, \"longitude\": 113.5439063, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:34:02.584749+00:00\", \"observed_at\": \"2026-09-28T09:34:02.584749+00:00\", \"retrieved_at\": \"2026-09-28T09:34:02.584749+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1984482, \"longitude\": 113.543892, \"normalized\": {\"x\": 0.6092, \"y\": 0.191}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990799, \"longitude\": 113.5439063, \"normalized\": {\"x\": 0.6202, \"y\": 0.6768}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984256, \"longitude\": 113.5438191, \"normalized\": {\"x\": 0.5531, \"y\": 0.1736}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1984482, \"longitude\": 113.543892}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990799,
    "longitude": 113.5439063,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:34:02.584749+00:00",
     "observed_at": "2026-09-28T09:34:02.584749+00:00",
     "retrieved_at": "2026-09-28T09:34:02.584749+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1984482,
        "longitude": 113.543892,
        "normalized": {
         "x": 0.6092,
         "y": 0.191
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990799,
        "longitude": 113.5439063,
        "normalized": {
         "x": 0.6202,
         "y": 0.6768
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984256,
        "longitude": 113.5438191,
        "normalized": {
         "x": 0.5531,
         "y": 0.1736
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1984482,
     "longitude": 113.543892
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "8BE7FEFBB3",
   "occurred_at": "2026-09-28T17:30:13+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1985744, \"longitude\": 113.5435869, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:30:13.769726+00:00\", \"observed_at\": \"2026-09-28T09:30:13.769726+00:00\", \"retrieved_at\": \"2026-09-28T09:30:13.769726+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985744, \"longitude\": 113.5435869, \"normalized\": {\"x\": 0.3745, \"y\": 0.288}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985728, \"longitude\": 113.5438725, \"normalized\": {\"x\": 0.5942, \"y\": 0.2867}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984608, \"longitude\": 113.5438706, \"normalized\": {\"x\": 0.5928, \"y\": 0.2006}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985744, \"longitude\": 113.5435869}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1985744,
    "longitude": 113.5435869,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:30:13.769726+00:00",
     "observed_at": "2026-09-28T09:30:13.769726+00:00",
     "retrieved_at": "2026-09-28T09:30:13.769726+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985744,
        "longitude": 113.5435869,
        "normalized": {
         "x": 0.3745,
         "y": 0.288
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985728,
        "longitude": 113.5438725,
        "normalized": {
         "x": 0.5942,
         "y": 0.2867
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984608,
        "longitude": 113.5438706,
        "normalized": {
         "x": 0.5928,
         "y": 0.2006
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985744,
     "longitude": 113.5435869
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "31FA62678C",
   "occurred_at": "2026-09-28T17:26:53+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1987157, \"longitude\": 113.5440116, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:26:53.596369+00:00\", \"observed_at\": \"2026-09-28T09:26:53.596369+00:00\", \"retrieved_at\": \"2026-09-28T09:26:53.596369+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985211, \"longitude\": 113.5438782, \"normalized\": {\"x\": 0.5986, \"y\": 0.247}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1987157, \"longitude\": 113.5440116, \"normalized\": {\"x\": 0.7013, \"y\": 0.3967}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986901, \"longitude\": 113.5439979, \"normalized\": {\"x\": 0.6907, \"y\": 0.377}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985211, \"longitude\": 113.5438782}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1987157,
    "longitude": 113.5440116,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:26:53.596369+00:00",
     "observed_at": "2026-09-28T09:26:53.596369+00:00",
     "retrieved_at": "2026-09-28T09:26:53.596369+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985211,
        "longitude": 113.5438782,
        "normalized": {
         "x": 0.5986,
         "y": 0.247
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1987157,
        "longitude": 113.5440116,
        "normalized": {
         "x": 0.7013,
         "y": 0.3967
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986901,
        "longitude": 113.5439979,
        "normalized": {
         "x": 0.6907,
         "y": 0.377
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985211,
     "longitude": 113.5438782
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "2312E325FE",
   "occurred_at": "2026-09-28T17:21:44+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984885, \"longitude\": 113.5435728, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:21:43.953236+00:00\", \"observed_at\": \"2026-09-28T09:21:43.953236+00:00\", \"retrieved_at\": \"2026-09-28T09:21:43.953236+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986902, \"longitude\": 113.5441294, \"normalized\": {\"x\": 0.7918, \"y\": 0.3771}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.198591, \"longitude\": 113.5439201, \"normalized\": {\"x\": 0.6309, \"y\": 0.3008}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984885, \"longitude\": 113.5435728, \"normalized\": {\"x\": 0.3637, \"y\": 0.2219}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986902, \"longitude\": 113.5441294}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984885,
    "longitude": 113.5435728,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:21:43.953236+00:00",
     "observed_at": "2026-09-28T09:21:43.953236+00:00",
     "retrieved_at": "2026-09-28T09:21:43.953236+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986902,
        "longitude": 113.5441294,
        "normalized": {
         "x": 0.7918,
         "y": 0.3771
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.198591,
        "longitude": 113.5439201,
        "normalized": {
         "x": 0.6309,
         "y": 0.3008
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984885,
        "longitude": 113.5435728,
        "normalized": {
         "x": 0.3637,
         "y": 0.2219
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986902,
     "longitude": 113.5441294
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "F279AA6062",
   "occurred_at": "2026-09-28T17:21:16+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1986586, \"longitude\": 113.5440173, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:21:16.735822+00:00\", \"observed_at\": \"2026-09-28T09:21:16.735822+00:00\", \"retrieved_at\": \"2026-09-28T09:21:16.735822+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986586, \"longitude\": 113.5440173, \"normalized\": {\"x\": 0.7056, \"y\": 0.3528}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.198499, \"longitude\": 113.5439245, \"normalized\": {\"x\": 0.6343, \"y\": 0.23}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.198514, \"longitude\": 113.5438044, \"normalized\": {\"x\": 0.5419, \"y\": 0.2416}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986586, \"longitude\": 113.5440173}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1986586,
    "longitude": 113.5440173,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:21:16.735822+00:00",
     "observed_at": "2026-09-28T09:21:16.735822+00:00",
     "retrieved_at": "2026-09-28T09:21:16.735822+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986586,
        "longitude": 113.5440173,
        "normalized": {
         "x": 0.7056,
         "y": 0.3528
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.198499,
        "longitude": 113.5439245,
        "normalized": {
         "x": 0.6343,
         "y": 0.23
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.198514,
        "longitude": 113.5438044,
        "normalized": {
         "x": 0.5419,
         "y": 0.2416
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986586,
     "longitude": 113.5440173
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "3C19E5A5C4",
   "occurred_at": "2026-09-28T17:17:18+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:17:17.979995+00:00\", \"observed_at\": \"2026-09-28T09:17:17.979995+00:00\", \"retrieved_at\": \"2026-09-28T09:17:17.979995+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986013, \"longitude\": 113.5436818, \"normalized\": {\"x\": 0.4475, \"y\": 0.3087}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1988868, \"longitude\": 113.5439202, \"normalized\": {\"x\": 0.6309, \"y\": 0.5283}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984504, \"longitude\": 113.5434201, \"normalized\": {\"x\": 0.2462, \"y\": 0.1926}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986013, \"longitude\": 113.5436818}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:17:17.979995+00:00",
     "observed_at": "2026-09-28T09:17:17.979995+00:00",
     "retrieved_at": "2026-09-28T09:17:17.979995+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986013,
        "longitude": 113.5436818,
        "normalized": {
         "x": 0.4475,
         "y": 0.3087
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1988868,
        "longitude": 113.5439202,
        "normalized": {
         "x": 0.6309,
         "y": 0.5283
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984504,
        "longitude": 113.5434201,
        "normalized": {
         "x": 0.2462,
         "y": 0.1926
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986013,
     "longitude": 113.5436818
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "348908669E",
   "occurred_at": "2026-09-28T17:16:55+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984, \"longitude\": 113.5433, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:16:54.994969+00:00\", \"observed_at\": \"2026-09-28T09:16:54.994969+00:00\", \"retrieved_at\": \"2026-09-28T09:16:54.994969+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1987, \"longitude\": 113.5436, \"normalized\": {\"x\": 0.3846, \"y\": 0.3846}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1991, \"longitude\": 113.5441, \"normalized\": {\"x\": 0.7692, \"y\": 0.6923}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984, \"longitude\": 113.5433, \"normalized\": {\"x\": 0.1538, \"y\": 0.1538}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1987, \"longitude\": 113.5436}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984,
    "longitude": 113.5433,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:16:54.994969+00:00",
     "observed_at": "2026-09-28T09:16:54.994969+00:00",
     "retrieved_at": "2026-09-28T09:16:54.994969+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1987,
        "longitude": 113.5436,
        "normalized": {
         "x": 0.3846,
         "y": 0.3846
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1991,
        "longitude": 113.5441,
        "normalized": {
         "x": 0.7692,
         "y": 0.6923
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984,
        "longitude": 113.5433,
        "normalized": {
         "x": 0.1538,
         "y": 0.1538
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1987,
     "longitude": 113.5436
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "D85AE278A1",
   "occurred_at": "2026-09-28T17:16:55+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1991, \"longitude\": 113.5441, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T09:16:54.994969+00:00\", \"observed_at\": \"2026-09-28T09:16:54.994969+00:00\", \"retrieved_at\": \"2026-09-28T09:16:54.994969+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1987, \"longitude\": 113.5436, \"normalized\": {\"x\": 0.3846, \"y\": 0.3846}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1991, \"longitude\": 113.5441, \"normalized\": {\"x\": 0.7692, \"y\": 0.6923}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984, \"longitude\": 113.5433, \"normalized\": {\"x\": 0.1538, \"y\": 0.1538}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1987, \"longitude\": 113.5436}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1991,
    "longitude": 113.5441,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T09:16:54.994969+00:00",
     "observed_at": "2026-09-28T09:16:54.994969+00:00",
     "retrieved_at": "2026-09-28T09:16:54.994969+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1987,
        "longitude": 113.5436,
        "normalized": {
         "x": 0.3846,
         "y": 0.3846
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1991,
        "longitude": 113.5441,
        "normalized": {
         "x": 0.7692,
         "y": 0.6923
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984,
        "longitude": 113.5433,
        "normalized": {
         "x": 0.1538,
         "y": 0.1538
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1987,
     "longitude": 113.5436
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "6C9B0C1F60",
   "occurred_at": "2026-09-28T16:54:53+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.199027, \"longitude\": 113.5439066, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T08:54:53.431011+00:00\", \"observed_at\": \"2026-09-28T08:54:53.431011+00:00\", \"retrieved_at\": \"2026-09-28T08:54:53.431011+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.199027, \"longitude\": 113.5439066, \"normalized\": {\"x\": 0.6204, \"y\": 0.6361}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1985372, \"longitude\": 113.5437763, \"normalized\": {\"x\": 0.5202, \"y\": 0.2594}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984681, \"longitude\": 113.5439002, \"normalized\": {\"x\": 0.6155, \"y\": 0.2062}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.199027, \"longitude\": 113.5439066}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.199027,
    "longitude": 113.5439066,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T08:54:53.431011+00:00",
     "observed_at": "2026-09-28T08:54:53.431011+00:00",
     "retrieved_at": "2026-09-28T08:54:53.431011+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.199027,
        "longitude": 113.5439066,
        "normalized": {
         "x": 0.6204,
         "y": 0.6361
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1985372,
        "longitude": 113.5437763,
        "normalized": {
         "x": 0.5202,
         "y": 0.2594
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984681,
        "longitude": 113.5439002,
        "normalized": {
         "x": 0.6155,
         "y": 0.2062
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.199027,
     "longitude": 113.5439066
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "A5B47B1964",
   "occurred_at": "2026-09-28T16:50:54+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T08:50:54.164450+00:00\", \"observed_at\": \"2026-09-28T08:50:54.164450+00:00\", \"retrieved_at\": \"2026-09-28T08:50:54.164450+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986557, \"longitude\": 113.5436571, \"normalized\": {\"x\": 0.4286, \"y\": 0.3505}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1987954, \"longitude\": 113.5439721, \"normalized\": {\"x\": 0.6708, \"y\": 0.458}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984037, \"longitude\": 113.5434655, \"normalized\": {\"x\": 0.2812, \"y\": 0.1567}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986557, \"longitude\": 113.5436571}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T08:50:54.164450+00:00",
     "observed_at": "2026-09-28T08:50:54.164450+00:00",
     "retrieved_at": "2026-09-28T08:50:54.164450+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986557,
        "longitude": 113.5436571,
        "normalized": {
         "x": 0.4286,
         "y": 0.3505
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1987954,
        "longitude": 113.5439721,
        "normalized": {
         "x": 0.6708,
         "y": 0.458
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984037,
        "longitude": 113.5434655,
        "normalized": {
         "x": 0.2812,
         "y": 0.1567
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986557,
     "longitude": 113.5436571
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "89062FCB23",
   "occurred_at": "2026-09-28T16:50:35+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1984004, \"longitude\": 113.5433199, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T08:50:35.358398+00:00\", \"observed_at\": \"2026-09-28T08:50:35.358398+00:00\", \"retrieved_at\": \"2026-09-28T08:50:35.358398+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986971, \"longitude\": 113.5436002, \"normalized\": {\"x\": 0.3848, \"y\": 0.3824}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990611, \"longitude\": 113.5440837, \"normalized\": {\"x\": 0.7567, \"y\": 0.6624}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984004, \"longitude\": 113.5433199, \"normalized\": {\"x\": 0.1692, \"y\": 0.1542}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986971, \"longitude\": 113.5436002}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1984004,
    "longitude": 113.5433199,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T08:50:35.358398+00:00",
     "observed_at": "2026-09-28T08:50:35.358398+00:00",
     "retrieved_at": "2026-09-28T08:50:35.358398+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986971,
        "longitude": 113.5436002,
        "normalized": {
         "x": 0.3848,
         "y": 0.3824
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990611,
        "longitude": 113.5440837,
        "normalized": {
         "x": 0.7567,
         "y": 0.6624
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984004,
        "longitude": 113.5433199,
        "normalized": {
         "x": 0.1692,
         "y": 0.1542
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986971,
     "longitude": 113.5436002
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "A877EADAA5",
   "occurred_at": "2026-09-28T16:50:35+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：基坑区 A",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_a\", \"zone_label\": \"基坑区 A\", \"latitude\": 22.1990611, \"longitude\": 113.5440837, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-28T08:50:35.358398+00:00\", \"observed_at\": \"2026-09-28T08:50:35.358398+00:00\", \"retrieved_at\": \"2026-09-28T08:50:35.358398+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1986971, \"longitude\": 113.5436002, \"normalized\": {\"x\": 0.3848, \"y\": 0.3824}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1990611, \"longitude\": 113.5440837, \"normalized\": {\"x\": 0.7567, \"y\": 0.6624}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1984004, \"longitude\": 113.5433199, \"normalized\": {\"x\": 0.1692, \"y\": 0.1542}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1986971, \"longitude\": 113.5436002}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_a",
    "zone_label": "基坑区 A",
    "latitude": 22.1990611,
    "longitude": 113.5440837,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-28T08:50:35.358398+00:00",
     "observed_at": "2026-09-28T08:50:35.358398+00:00",
     "retrieved_at": "2026-09-28T08:50:35.358398+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1986971,
        "longitude": 113.5436002,
        "normalized": {
         "x": 0.3848,
         "y": 0.3824
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1990611,
        "longitude": 113.5440837,
        "normalized": {
         "x": 0.7567,
         "y": 0.6624
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1984004,
        "longitude": 113.5433199,
        "normalized": {
         "x": 0.1692,
         "y": 0.1542
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1986971,
     "longitude": 113.5436002
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "61671E6441",
   "occurred_at": "2026-09-11T20:40:51+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5283610224723816,
   "snapshot_name": "61671E6441.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5283610224723816, \"bbox\": [426.0, 834.5, 584.2, 964.1], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.26}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:40:51.738011+00:00\", \"observed_at\": \"2026-09-11T12:40:51.738011+00:00\", \"retrieved_at\": \"2026-09-11T12:40:51.738011+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5283610224723816, \"bbox\": [426.0, 834.5, 584.2, 964.1], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.26}}], \"detections\": [{\"label\": \"person\", \"confidence\": 0.7862368822097778, \"bbox\": [1201.0, 516.4, 1224.3, 572.4], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.551797091960907, \"bbox\": [851.7, 115.5, 947.4, 226.7], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5283610224723816, \"bbox\": [426.0, 834.5, 584.2, 964.1], \"track_id\": null}], \"person_count\": 1}, \"unit\": null, \"confidence\": 0.5283610224723816, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/61671E6441.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5283610224723816,
     "bbox": [
      426,
      834.5,
      584.2,
      964.1
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 2.26
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:40:51.738011+00:00",
     "observed_at": "2026-09-11T12:40:51.738011+00:00",
     "retrieved_at": "2026-09-11T12:40:51.738011+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5283610224723816,
        "bbox": [
         426,
         834.5,
         584.2,
         964.1
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 2.26
        }
       }
      ],
      "detections": [
       {
        "label": "person",
        "confidence": 0.7862368822097778,
        "bbox": [
         1201,
         516.4,
         1224.3,
         572.4
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.551797091960907,
        "bbox": [
         851.7,
         115.5,
         947.4,
         226.7
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5283610224723816,
        "bbox": [
         426,
         834.5,
         584.2,
         964.1
        ],
        "track_id": null
       }
      ],
      "person_count": 1
     },
     "unit": null,
     "confidence": 0.5283610224723816,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "A334E98AAF",
   "occurred_at": "2026-09-11T20:40:40+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：塔吊回转区 B",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "critical",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_b\", \"zone_label\": \"塔吊回转区 B\", \"latitude\": 22.1985574, \"longitude\": 113.5435891, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-11T12:40:40.257078+00:00\", \"observed_at\": \"2026-09-11T12:40:40.257078+00:00\", \"retrieved_at\": \"2026-09-11T12:40:40.257078+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985574, \"longitude\": 113.5435891, \"normalized\": {\"x\": 0.3762, \"y\": 0.2749}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984797, \"longitude\": 113.5438022, \"normalized\": {\"x\": 0.5402, \"y\": 0.2152}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.198592, \"longitude\": 113.5436752, \"normalized\": {\"x\": 0.4425, \"y\": 0.3015}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985574, \"longitude\": 113.5435891}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_b",
    "zone_label": "塔吊回转区 B",
    "latitude": 22.1985574,
    "longitude": 113.5435891,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-11T12:40:40.257078+00:00",
     "observed_at": "2026-09-11T12:40:40.257078+00:00",
     "retrieved_at": "2026-09-11T12:40:40.257078+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985574,
        "longitude": 113.5435891,
        "normalized": {
         "x": 0.3762,
         "y": 0.2749
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984797,
        "longitude": 113.5438022,
        "normalized": {
         "x": 0.5402,
         "y": 0.2152
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.198592,
        "longitude": 113.5436752,
        "normalized": {
         "x": 0.4425,
         "y": 0.3015
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985574,
     "longitude": 113.5435891
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "994AEAED7C",
   "occurred_at": "2026-09-11T20:40:14+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5388974547386169,
   "snapshot_name": "994AEAED7C.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5388974547386169, \"bbox\": [102.8, 855.5, 360.2, 1019.6], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 3.39}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:40:14.391782+00:00\", \"observed_at\": \"2026-09-11T12:40:14.391782+00:00\", \"retrieved_at\": \"2026-09-11T12:40:14.391782+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5388974547386169, \"bbox\": [102.8, 855.5, 360.2, 1019.6], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 3.39}}], \"detections\": [{\"label\": \"machinery\", \"confidence\": 0.5388974547386169, \"bbox\": [102.8, 855.5, 360.2, 1019.6], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.4603738784790039, \"bbox\": [847.6, 113.5, 947.4, 228.2], \"track_id\": null}], \"person_count\": 0}, \"unit\": null, \"confidence\": 0.5388974547386169, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/994AEAED7C.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5388974547386169,
     "bbox": [
      102.8,
      855.5,
      360.2,
      1019.6
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 3.39
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:40:14.391782+00:00",
     "observed_at": "2026-09-11T12:40:14.391782+00:00",
     "retrieved_at": "2026-09-11T12:40:14.391782+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5388974547386169,
        "bbox": [
         102.8,
         855.5,
         360.2,
         1019.6
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 3.39
        }
       }
      ],
      "detections": [
       {
        "label": "machinery",
        "confidence": 0.5388974547386169,
        "bbox": [
         102.8,
         855.5,
         360.2,
         1019.6
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.4603738784790039,
        "bbox": [
         847.6,
         113.5,
         947.4,
         228.2
        ],
        "track_id": null
       }
      ],
      "person_count": 0
     },
     "unit": null,
     "confidence": 0.5388974547386169,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "9DB514AE5F",
   "occurred_at": "2026-09-11T20:39:40+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5996229648590088,
   "snapshot_name": "9DB514AE5F.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5996229648590088, \"bbox\": [0.1, 854.9, 365.3, 1034.0], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.55}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:39:40.166269+00:00\", \"observed_at\": \"2026-09-11T12:39:40.166269+00:00\", \"retrieved_at\": \"2026-09-11T12:39:40.166269+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5996229648590088, \"bbox\": [0.1, 854.9, 365.3, 1034.0], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.55}}], \"detections\": [{\"label\": \"person\", \"confidence\": 0.6890536546707153, \"bbox\": [1183.7, 518.9, 1202.9, 568.2], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5996229648590088, \"bbox\": [0.1, 854.9, 365.3, 1034.0], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5737357139587402, \"bbox\": [1150.0, 182.7, 1271.2, 265.3], \"track_id\": null}], \"person_count\": 1}, \"unit\": null, \"confidence\": 0.5996229648590088, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/9DB514AE5F.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5996229648590088,
     "bbox": [
      0.1,
      854.9,
      365.3,
      1034
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 4.55
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:39:40.166269+00:00",
     "observed_at": "2026-09-11T12:39:40.166269+00:00",
     "retrieved_at": "2026-09-11T12:39:40.166269+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5996229648590088,
        "bbox": [
         0.1,
         854.9,
         365.3,
         1034
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 4.55
        }
       }
      ],
      "detections": [
       {
        "label": "person",
        "confidence": 0.6890536546707153,
        "bbox": [
         1183.7,
         518.9,
         1202.9,
         568.2
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5996229648590088,
        "bbox": [
         0.1,
         854.9,
         365.3,
         1034
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5737357139587402,
        "bbox": [
         1150,
         182.7,
         1271.2,
         265.3
        ],
        "track_id": null
       }
      ],
      "person_count": 1
     },
     "unit": null,
     "confidence": 0.5996229648590088,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "1B477188FB",
   "occurred_at": "2026-09-11T20:39:15+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.6796118021011353,
   "snapshot_name": "1B477188FB.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.6796118021011353, \"bbox\": [434.4, 833.9, 585.9, 964.5], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.51}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:39:15.190760+00:00\", \"observed_at\": \"2026-09-11T12:39:15.190760+00:00\", \"retrieved_at\": \"2026-09-11T12:39:15.190760+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.6796118021011353, \"bbox\": [434.4, 833.9, 585.9, 964.5], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.51}}], \"detections\": [{\"label\": \"person\", \"confidence\": 0.7265293598175049, \"bbox\": [1204.4, 513.9, 1226.7, 573.5], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.6796118021011353, \"bbox\": [434.4, 833.9, 585.9, 964.5], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5967923402786255, \"bbox\": [1.0, 850.4, 305.5, 1014.6], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5803014636039734, \"bbox\": [850.2, 114.4, 947.9, 227.2], \"track_id\": null}], \"person_count\": 1}, \"unit\": null, \"confidence\": 0.6796118021011353, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/1B477188FB.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.6796118021011353,
     "bbox": [
      434.4,
      833.9,
      585.9,
      964.5
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 4.51
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:39:15.190760+00:00",
     "observed_at": "2026-09-11T12:39:15.190760+00:00",
     "retrieved_at": "2026-09-11T12:39:15.190760+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.6796118021011353,
        "bbox": [
         434.4,
         833.9,
         585.9,
         964.5
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 4.51
        }
       }
      ],
      "detections": [
       {
        "label": "person",
        "confidence": 0.7265293598175049,
        "bbox": [
         1204.4,
         513.9,
         1226.7,
         573.5
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.6796118021011353,
        "bbox": [
         434.4,
         833.9,
         585.9,
         964.5
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5967923402786255,
        "bbox": [
         1,
         850.4,
         305.5,
         1014.6
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5803014636039734,
        "bbox": [
         850.2,
         114.4,
         947.9,
         227.2
        ],
        "track_id": null
       }
      ],
      "person_count": 1
     },
     "unit": null,
     "confidence": 0.6796118021011353,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "C22AD3624E",
   "occurred_at": "2026-09-11T20:38:39+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5283610224723816,
   "snapshot_name": "C22AD3624E.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5283610224723816, \"bbox\": [426.0, 834.5, 584.2, 964.1], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.42}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:38:39.459523+00:00\", \"observed_at\": \"2026-09-11T12:38:39.459523+00:00\", \"retrieved_at\": \"2026-09-11T12:38:39.459523+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5283610224723816, \"bbox\": [426.0, 834.5, 584.2, 964.1], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.42}}], \"detections\": [{\"label\": \"person\", \"confidence\": 0.7862368822097778, \"bbox\": [1201.0, 516.4, 1224.3, 572.4], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.551797091960907, \"bbox\": [851.7, 115.5, 947.4, 226.7], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5283610224723816, \"bbox\": [426.0, 834.5, 584.2, 964.1], \"track_id\": null}], \"person_count\": 1}, \"unit\": null, \"confidence\": 0.5283610224723816, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/C22AD3624E.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5283610224723816,
     "bbox": [
      426,
      834.5,
      584.2,
      964.1
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 2.42
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:38:39.459523+00:00",
     "observed_at": "2026-09-11T12:38:39.459523+00:00",
     "retrieved_at": "2026-09-11T12:38:39.459523+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5283610224723816,
        "bbox": [
         426,
         834.5,
         584.2,
         964.1
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 2.42
        }
       }
      ],
      "detections": [
       {
        "label": "person",
        "confidence": 0.7862368822097778,
        "bbox": [
         1201,
         516.4,
         1224.3,
         572.4
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.551797091960907,
        "bbox": [
         851.7,
         115.5,
         947.4,
         226.7
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5283610224723816,
        "bbox": [
         426,
         834.5,
         584.2,
         964.1
        ],
        "track_id": null
       }
      ],
      "person_count": 1
     },
     "unit": null,
     "confidence": 0.5283610224723816,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "2F5DE85C1E",
   "occurred_at": "2026-09-11T20:38:09+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-11T12:38:09.964390+00:00\", \"observed_at\": \"2026-09-11T12:38:09.964390+00:00\", \"retrieved_at\": \"2026-09-11T12:38:09.964390+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1987366, \"longitude\": 113.5438168, \"normalized\": {\"x\": 0.5514, \"y\": 0.4127}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.198485, \"longitude\": 113.5436782, \"normalized\": {\"x\": 0.4448, \"y\": 0.2192}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1988897, \"longitude\": 113.5442534, \"normalized\": {\"x\": 0.8872, \"y\": 0.5305}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1987366, \"longitude\": 113.5438168}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-11T12:38:09.964390+00:00",
     "observed_at": "2026-09-11T12:38:09.964390+00:00",
     "retrieved_at": "2026-09-11T12:38:09.964390+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1987366,
        "longitude": 113.5438168,
        "normalized": {
         "x": 0.5514,
         "y": 0.4127
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.198485,
        "longitude": 113.5436782,
        "normalized": {
         "x": 0.4448,
         "y": 0.2192
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1988897,
        "longitude": 113.5442534,
        "normalized": {
         "x": 0.8872,
         "y": 0.5305
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1987366,
     "longitude": 113.5438168
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "83459DDB57",
   "occurred_at": "2026-09-11T20:38:01+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5388974547386169,
   "snapshot_name": "83459DDB57.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5388974547386169, \"bbox\": [102.8, 855.5, 360.2, 1019.6], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 3.46}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:38:01.101937+00:00\", \"observed_at\": \"2026-09-11T12:38:01.101937+00:00\", \"retrieved_at\": \"2026-09-11T12:38:01.101937+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5388974547386169, \"bbox\": [102.8, 855.5, 360.2, 1019.6], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 3.46}}], \"detections\": [{\"label\": \"machinery\", \"confidence\": 0.5388974547386169, \"bbox\": [102.8, 855.5, 360.2, 1019.6], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.4603738784790039, \"bbox\": [847.6, 113.5, 947.4, 228.2], \"track_id\": null}], \"person_count\": 0}, \"unit\": null, \"confidence\": 0.5388974547386169, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/83459DDB57.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5388974547386169,
     "bbox": [
      102.8,
      855.5,
      360.2,
      1019.6
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 3.46
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:38:01.101937+00:00",
     "observed_at": "2026-09-11T12:38:01.101937+00:00",
     "retrieved_at": "2026-09-11T12:38:01.101937+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5388974547386169,
        "bbox": [
         102.8,
         855.5,
         360.2,
         1019.6
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 3.46
        }
       }
      ],
      "detections": [
       {
        "label": "machinery",
        "confidence": 0.5388974547386169,
        "bbox": [
         102.8,
         855.5,
         360.2,
         1019.6
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.4603738784790039,
        "bbox": [
         847.6,
         113.5,
         947.4,
         228.2
        ],
        "track_id": null
       }
      ],
      "person_count": 0
     },
     "unit": null,
     "confidence": 0.5388974547386169,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "F59C09F335",
   "occurred_at": "2026-09-11T20:37:38+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-11T12:37:38.451092+00:00\", \"observed_at\": \"2026-09-11T12:37:38.451092+00:00\", \"retrieved_at\": \"2026-09-11T12:37:38.451092+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1991125, \"longitude\": 113.5440397, \"normalized\": {\"x\": 0.7229, \"y\": 0.7019}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1984571, \"longitude\": 113.5436849, \"normalized\": {\"x\": 0.4499, \"y\": 0.1978}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1988808, \"longitude\": 113.5442337, \"normalized\": {\"x\": 0.8721, \"y\": 0.5237}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1991125, \"longitude\": 113.5440397}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-11T12:37:38.451092+00:00",
     "observed_at": "2026-09-11T12:37:38.451092+00:00",
     "retrieved_at": "2026-09-11T12:37:38.451092+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1991125,
        "longitude": 113.5440397,
        "normalized": {
         "x": 0.7229,
         "y": 0.7019
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1984571,
        "longitude": 113.5436849,
        "normalized": {
         "x": 0.4499,
         "y": 0.1978
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1988808,
        "longitude": 113.5442337,
        "normalized": {
         "x": 0.8721,
         "y": 0.5237
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1991125,
     "longitude": 113.5440397
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "005A8595D1",
   "occurred_at": "2026-09-11T20:37:25+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5996229648590088,
   "snapshot_name": "005A8595D1.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5996229648590088, \"bbox\": [0.1, 854.9, 365.3, 1034.0], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.87}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:37:25.097299+00:00\", \"observed_at\": \"2026-09-11T12:37:25.097299+00:00\", \"retrieved_at\": \"2026-09-11T12:37:25.097299+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5996229648590088, \"bbox\": [0.1, 854.9, 365.3, 1034.0], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.87}}], \"detections\": [{\"label\": \"person\", \"confidence\": 0.6890536546707153, \"bbox\": [1183.7, 518.9, 1202.9, 568.2], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5996229648590088, \"bbox\": [0.1, 854.9, 365.3, 1034.0], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5737357139587402, \"bbox\": [1150.0, 182.7, 1271.2, 265.3], \"track_id\": null}], \"person_count\": 1}, \"unit\": null, \"confidence\": 0.5996229648590088, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/005A8595D1.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5996229648590088,
     "bbox": [
      0.1,
      854.9,
      365.3,
      1034
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 4.87
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:37:25.097299+00:00",
     "observed_at": "2026-09-11T12:37:25.097299+00:00",
     "retrieved_at": "2026-09-11T12:37:25.097299+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5996229648590088,
        "bbox": [
         0.1,
         854.9,
         365.3,
         1034
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 4.87
        }
       }
      ],
      "detections": [
       {
        "label": "person",
        "confidence": 0.6890536546707153,
        "bbox": [
         1183.7,
         518.9,
         1202.9,
         568.2
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5996229648590088,
        "bbox": [
         0.1,
         854.9,
         365.3,
         1034
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5737357139587402,
        "bbox": [
         1150,
         182.7,
         1271.2,
         265.3
        ],
        "track_id": null
       }
      ],
      "person_count": 1
     },
     "unit": null,
     "confidence": 0.5996229648590088,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "7922694C4E",
   "occurred_at": "2026-09-11T20:37:13+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5043208003044128,
   "snapshot_name": "7922694C4E.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5043208003044128, \"bbox\": [0.0, 822.0, 182.5, 1057.9], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.33}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:37:13.732877+00:00\", \"observed_at\": \"2026-09-11T12:37:13.732877+00:00\", \"retrieved_at\": \"2026-09-11T12:37:13.732877+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5043208003044128, \"bbox\": [0.0, 822.0, 182.5, 1057.9], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.33}}], \"detections\": [{\"label\": \"machinery\", \"confidence\": 0.8652291893959045, \"bbox\": [462.0, 828.1, 584.7, 961.7], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.634219765663147, \"bbox\": [1174.4, 176.5, 1275.7, 264.2], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5043208003044128, \"bbox\": [0.0, 822.0, 182.5, 1057.9], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.4891527593135834, \"bbox\": [870.6, 115.5, 950.4, 216.8], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.4688264727592468, \"bbox\": [890.2, 155.8, 946.3, 217.5], \"track_id\": null}, {\"label\": \"person\", \"confidence\": 0.4609083831310272, \"bbox\": [957.5, 86.9, 971.4, 124.1], \"track_id\": null}], \"person_count\": 1}, \"unit\": null, \"confidence\": 0.5043208003044128, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/7922694C4E.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5043208003044128,
     "bbox": [
      0,
      822,
      182.5,
      1057.9
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 4.33
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:37:13.732877+00:00",
     "observed_at": "2026-09-11T12:37:13.732877+00:00",
     "retrieved_at": "2026-09-11T12:37:13.732877+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5043208003044128,
        "bbox": [
         0,
         822,
         182.5,
         1057.9
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 4.33
        }
       }
      ],
      "detections": [
       {
        "label": "machinery",
        "confidence": 0.8652291893959045,
        "bbox": [
         462,
         828.1,
         584.7,
         961.7
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.634219765663147,
        "bbox": [
         1174.4,
         176.5,
         1275.7,
         264.2
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5043208003044128,
        "bbox": [
         0,
         822,
         182.5,
         1057.9
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.4891527593135834,
        "bbox": [
         870.6,
         115.5,
         950.4,
         216.8
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.4688264727592468,
        "bbox": [
         890.2,
         155.8,
         946.3,
         217.5
        ],
        "track_id": null
       },
       {
        "label": "person",
        "confidence": 0.4609083831310272,
        "bbox": [
         957.5,
         86.9,
         971.4,
         124.1
        ],
        "track_id": null
       }
      ],
      "person_count": 1
     },
     "unit": null,
     "confidence": 0.5043208003044128,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "28A61D280F",
   "occurred_at": "2026-09-11T20:32:39+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.8848238587379456,
   "snapshot_name": "28A61D280F.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.8848238587379456, \"bbox\": [439.8, 839.0, 584.3, 965.3], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.38}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:32:39.302922+00:00\", \"observed_at\": \"2026-09-11T12:32:39.302922+00:00\", \"retrieved_at\": \"2026-09-11T12:32:39.302922+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.8848238587379456, \"bbox\": [439.8, 839.0, 584.3, 965.3], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.38}}, {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.776073694229126, \"bbox\": [0.4, 837.8, 247.6, 1019.5], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.38}}], \"detections\": [{\"label\": \"machinery\", \"confidence\": 0.8848238587379456, \"bbox\": [439.8, 839.0, 584.3, 965.3], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.776073694229126, \"bbox\": [0.4, 837.8, 247.6, 1019.5], \"track_id\": null}, {\"label\": \"person\", \"confidence\": 0.6178675293922424, \"bbox\": [1228.4, 521.4, 1249.0, 575.7], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5857027769088745, \"bbox\": [851.1, 107.6, 948.9, 218.4], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5272387266159058, \"bbox\": [1177.7, 180.4, 1273.4, 266.8], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.4722151756286621, \"bbox\": [657.5, 196.6, 752.7, 341.9], \"track_id\": null}, {\"label\": \"person\", \"confidence\": 0.46795833110809326, \"bbox\": [876.9, 530.2, 897.3, 587.8], \"track_id\": null}], \"person_count\": 2}, \"unit\": null, \"confidence\": 0.8848238587379456, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/28A61D280F.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.8848238587379456,
     "bbox": [
      439.8,
      839,
      584.3,
      965.3
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 2.38
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:32:39.302922+00:00",
     "observed_at": "2026-09-11T12:32:39.302922+00:00",
     "retrieved_at": "2026-09-11T12:32:39.302922+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.8848238587379456,
        "bbox": [
         439.8,
         839,
         584.3,
         965.3
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 2.38
        }
       },
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.776073694229126,
        "bbox": [
         0.4,
         837.8,
         247.6,
         1019.5
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 2.38
        }
       }
      ],
      "detections": [
       {
        "label": "machinery",
        "confidence": 0.8848238587379456,
        "bbox": [
         439.8,
         839,
         584.3,
         965.3
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.776073694229126,
        "bbox": [
         0.4,
         837.8,
         247.6,
         1019.5
        ],
        "track_id": null
       },
       {
        "label": "person",
        "confidence": 0.6178675293922424,
        "bbox": [
         1228.4,
         521.4,
         1249,
         575.7
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5857027769088745,
        "bbox": [
         851.1,
         107.6,
         948.9,
         218.4
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5272387266159058,
        "bbox": [
         1177.7,
         180.4,
         1273.4,
         266.8
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.4722151756286621,
        "bbox": [
         657.5,
         196.6,
         752.7,
         341.9
        ],
        "track_id": null
       },
       {
        "label": "person",
        "confidence": 0.46795833110809326,
        "bbox": [
         876.9,
         530.2,
         897.3,
         587.8
        ],
        "track_id": null
       }
      ],
      "person_count": 2
     },
     "unit": null,
     "confidence": 0.8848238587379456,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "72FB3D5C43",
   "occurred_at": "2026-09-11T20:32:12+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.6796118021011353,
   "snapshot_name": "72FB3D5C43.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.6796118021011353, \"bbox\": [434.4, 833.9, 585.9, 964.5], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.95}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:32:12.150601+00:00\", \"observed_at\": \"2026-09-11T12:32:12.150601+00:00\", \"retrieved_at\": \"2026-09-11T12:32:12.150601+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.6796118021011353, \"bbox\": [434.4, 833.9, 585.9, 964.5], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.95}}], \"detections\": [{\"label\": \"person\", \"confidence\": 0.7265293598175049, \"bbox\": [1204.4, 513.9, 1226.7, 573.5], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.6796118021011353, \"bbox\": [434.4, 833.9, 585.9, 964.5], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5967923402786255, \"bbox\": [1.0, 850.4, 305.5, 1014.6], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5803014636039734, \"bbox\": [850.2, 114.4, 947.9, 227.2], \"track_id\": null}], \"person_count\": 1}, \"unit\": null, \"confidence\": 0.6796118021011353, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/72FB3D5C43.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.6796118021011353,
     "bbox": [
      434.4,
      833.9,
      585.9,
      964.5
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 4.95
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:32:12.150601+00:00",
     "observed_at": "2026-09-11T12:32:12.150601+00:00",
     "retrieved_at": "2026-09-11T12:32:12.150601+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.6796118021011353,
        "bbox": [
         434.4,
         833.9,
         585.9,
         964.5
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 4.95
        }
       }
      ],
      "detections": [
       {
        "label": "person",
        "confidence": 0.7265293598175049,
        "bbox": [
         1204.4,
         513.9,
         1226.7,
         573.5
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.6796118021011353,
        "bbox": [
         434.4,
         833.9,
         585.9,
         964.5
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5967923402786255,
        "bbox": [
         1,
         850.4,
         305.5,
         1014.6
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5803014636039734,
        "bbox": [
         850.2,
         114.4,
         947.9,
         227.2
        ],
        "track_id": null
       }
      ],
      "person_count": 1
     },
     "unit": null,
     "confidence": 0.6796118021011353,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "BB4AB77FA4",
   "occurred_at": "2026-09-11T20:32:05+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W003\", \"name\": \"王五\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1987845, \"longitude\": 113.5440189, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-11T12:32:05.574084+00:00\", \"observed_at\": \"2026-09-11T12:32:05.574084+00:00\", \"retrieved_at\": \"2026-09-11T12:32:05.574084+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1991176, \"longitude\": 113.5440682, \"normalized\": {\"x\": 0.7447, \"y\": 0.7059}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1986501, \"longitude\": 113.5438073, \"normalized\": {\"x\": 0.5441, \"y\": 0.3462}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1987845, \"longitude\": 113.5440189, \"normalized\": {\"x\": 0.7069, \"y\": 0.4496}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1991176, \"longitude\": 113.5440682}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W003",
    "name": "王五",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1987845,
    "longitude": 113.5440189,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-11T12:32:05.574084+00:00",
     "observed_at": "2026-09-11T12:32:05.574084+00:00",
     "retrieved_at": "2026-09-11T12:32:05.574084+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1991176,
        "longitude": 113.5440682,
        "normalized": {
         "x": 0.7447,
         "y": 0.7059
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1986501,
        "longitude": 113.5438073,
        "normalized": {
         "x": 0.5441,
         "y": 0.3462
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1987845,
        "longitude": 113.5440189,
        "normalized": {
         "x": 0.7069,
         "y": 0.4496
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1991176,
     "longitude": 113.5440682
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "66C2C8EBD5",
   "occurred_at": "2026-09-11T20:31:34+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5283610224723816,
   "snapshot_name": "66C2C8EBD5.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5283610224723816, \"bbox\": [426.0, 834.5, 584.2, 964.1], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.31}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:31:34.197144+00:00\", \"observed_at\": \"2026-09-11T12:31:34.197144+00:00\", \"retrieved_at\": \"2026-09-11T12:31:34.197144+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5283610224723816, \"bbox\": [426.0, 834.5, 584.2, 964.1], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.31}}], \"detections\": [{\"label\": \"person\", \"confidence\": 0.7862368822097778, \"bbox\": [1201.0, 516.4, 1224.3, 572.4], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.551797091960907, \"bbox\": [851.7, 115.5, 947.4, 226.7], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5283610224723816, \"bbox\": [426.0, 834.5, 584.2, 964.1], \"track_id\": null}], \"person_count\": 1}, \"unit\": null, \"confidence\": 0.5283610224723816, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/66C2C8EBD5.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5283610224723816,
     "bbox": [
      426,
      834.5,
      584.2,
      964.1
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 2.31
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:31:34.197144+00:00",
     "observed_at": "2026-09-11T12:31:34.197144+00:00",
     "retrieved_at": "2026-09-11T12:31:34.197144+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5283610224723816,
        "bbox": [
         426,
         834.5,
         584.2,
         964.1
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 2.31
        }
       }
      ],
      "detections": [
       {
        "label": "person",
        "confidence": 0.7862368822097778,
        "bbox": [
         1201,
         516.4,
         1224.3,
         572.4
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.551797091960907,
        "bbox": [
         851.7,
         115.5,
         947.4,
         226.7
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5283610224723816,
        "bbox": [
         426,
         834.5,
         584.2,
         964.1
        ],
        "track_id": null
       }
      ],
      "person_count": 1
     },
     "unit": null,
     "confidence": 0.5283610224723816,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "995DACE790",
   "occurred_at": "2026-09-11T20:31:18+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "人群聚集踩踏风险",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"workers_count\": 3, \"close_pairs\": 1, \"distanceThreshold\": 0.25, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-11T12:31:18.924157+00:00\", \"observed_at\": \"2026-09-11T12:31:18.924157+00:00\", \"retrieved_at\": \"2026-09-11T12:31:18.924157+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.198881, \"longitude\": 113.5440139, \"normalized\": {\"x\": 0.703, \"y\": 0.5239}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1991547, \"longitude\": 113.544128, \"normalized\": {\"x\": 0.7908, \"y\": 0.7344}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986334, \"longitude\": 113.5436962, \"normalized\": {\"x\": 0.4586, \"y\": 0.3334}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.198881, \"longitude\": 113.5440139}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "workers_count": 3,
    "close_pairs": 1,
    "distanceThreshold": 0.25,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-11T12:31:18.924157+00:00",
     "observed_at": "2026-09-11T12:31:18.924157+00:00",
     "retrieved_at": "2026-09-11T12:31:18.924157+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.198881,
        "longitude": 113.5440139,
        "normalized": {
         "x": 0.703,
         "y": 0.5239
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1991547,
        "longitude": 113.544128,
        "normalized": {
         "x": 0.7908,
         "y": 0.7344
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986334,
        "longitude": 113.5436962,
        "normalized": {
         "x": 0.4586,
         "y": 0.3334
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.198881,
     "longitude": 113.5440139
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "943B731551",
   "occurred_at": "2026-09-11T20:31:14+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W001\", \"name\": \"张三\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1988437, \"longitude\": 113.5440053, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-11T12:31:14.690919+00:00\", \"observed_at\": \"2026-09-11T12:31:14.690919+00:00\", \"retrieved_at\": \"2026-09-11T12:31:14.690919+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1988437, \"longitude\": 113.5440053, \"normalized\": {\"x\": 0.6964, \"y\": 0.4951}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1991484, \"longitude\": 113.5441259, \"normalized\": {\"x\": 0.7892, \"y\": 0.7296}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986342, \"longitude\": 113.5437048, \"normalized\": {\"x\": 0.4652, \"y\": 0.334}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1988437, \"longitude\": 113.5440053}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W001",
    "name": "张三",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1988437,
    "longitude": 113.5440053,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-11T12:31:14.690919+00:00",
     "observed_at": "2026-09-11T12:31:14.690919+00:00",
     "retrieved_at": "2026-09-11T12:31:14.690919+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1988437,
        "longitude": 113.5440053,
        "normalized": {
         "x": 0.6964,
         "y": 0.4951
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1991484,
        "longitude": 113.5441259,
        "normalized": {
         "x": 0.7892,
         "y": 0.7296
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986342,
        "longitude": 113.5437048,
        "normalized": {
         "x": 0.4652,
         "y": 0.334
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1988437,
     "longitude": 113.5440053
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "569C8FBAF2",
   "occurred_at": "2026-09-11T20:30:53+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5388974547386169,
   "snapshot_name": "569C8FBAF2.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5388974547386169, \"bbox\": [102.8, 855.5, 360.2, 1019.6], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 3.53}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:30:53.742085+00:00\", \"observed_at\": \"2026-09-11T12:30:53.742085+00:00\", \"retrieved_at\": \"2026-09-11T12:30:53.742085+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5388974547386169, \"bbox\": [102.8, 855.5, 360.2, 1019.6], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 3.53}}], \"detections\": [{\"label\": \"machinery\", \"confidence\": 0.5388974547386169, \"bbox\": [102.8, 855.5, 360.2, 1019.6], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.4603738784790039, \"bbox\": [847.6, 113.5, 947.4, 228.2], \"track_id\": null}], \"person_count\": 0}, \"unit\": null, \"confidence\": 0.5388974547386169, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/569C8FBAF2.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5388974547386169,
     "bbox": [
      102.8,
      855.5,
      360.2,
      1019.6
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 3.53
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:30:53.742085+00:00",
     "observed_at": "2026-09-11T12:30:53.742085+00:00",
     "retrieved_at": "2026-09-11T12:30:53.742085+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5388974547386169,
        "bbox": [
         102.8,
         855.5,
         360.2,
         1019.6
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 3.53
        }
       }
      ],
      "detections": [
       {
        "label": "machinery",
        "confidence": 0.5388974547386169,
        "bbox": [
         102.8,
         855.5,
         360.2,
         1019.6
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.4603738784790039,
        "bbox": [
         847.6,
         113.5,
         947.4,
         228.2
        ],
        "track_id": null
       }
      ],
      "person_count": 0
     },
     "unit": null,
     "confidence": 0.5388974547386169,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "FDA1843316",
   "occurred_at": "2026-09-11T20:30:17+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5996229648590088,
   "snapshot_name": "FDA1843316.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5996229648590088, \"bbox\": [0.1, 854.9, 365.3, 1034.0], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.93}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:30:17.201588+00:00\", \"observed_at\": \"2026-09-11T12:30:17.201588+00:00\", \"retrieved_at\": \"2026-09-11T12:30:17.201588+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5996229648590088, \"bbox\": [0.1, 854.9, 365.3, 1034.0], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.93}}], \"detections\": [{\"label\": \"person\", \"confidence\": 0.6890536546707153, \"bbox\": [1183.7, 518.9, 1202.9, 568.2], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5996229648590088, \"bbox\": [0.1, 854.9, 365.3, 1034.0], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5737357139587402, \"bbox\": [1150.0, 182.7, 1271.2, 265.3], \"track_id\": null}], \"person_count\": 1}, \"unit\": null, \"confidence\": 0.5996229648590088, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/FDA1843316.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5996229648590088,
     "bbox": [
      0.1,
      854.9,
      365.3,
      1034
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 4.93
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:30:17.201588+00:00",
     "observed_at": "2026-09-11T12:30:17.201588+00:00",
     "retrieved_at": "2026-09-11T12:30:17.201588+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5996229648590088,
        "bbox": [
         0.1,
         854.9,
         365.3,
         1034
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 4.93
        }
       }
      ],
      "detections": [
       {
        "label": "person",
        "confidence": 0.6890536546707153,
        "bbox": [
         1183.7,
         518.9,
         1202.9,
         568.2
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5996229648590088,
        "bbox": [
         0.1,
         854.9,
         365.3,
         1034
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5737357139587402,
        "bbox": [
         1150,
         182.7,
         1271.2,
         265.3
        ],
        "track_id": null
       }
      ],
      "person_count": 1
     },
     "unit": null,
     "confidence": 0.5996229648590088,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "6C074AA5E6",
   "occurred_at": "2026-09-11T20:30:04+08:00",
   "video_id": null,
   "video_name": "非视觉传感器",
   "camera_name": "Kessoku 可控演示场景",
   "violation_type": "进入危险区域：材料堆放区 C",
   "confidence": 1,
   "snapshot_name": "",
   "status": "pending",
   "sensor_id": "position_demo_01",
   "origin": "simulation",
   "source_name": "Kessoku 可控演示场景",
   "severity": "warning",
   "evidence_json": "{\"worker\": \"W002\", \"name\": \"李四\", \"zone_id\": \"zone_c\", \"zone_label\": \"材料堆放区 C\", \"latitude\": 22.1987913, \"longitude\": 113.5440088, \"confirmationHits\": 2, \"reading\": {\"sensor_id\": \"position_demo_01\", \"timestamp\": \"2026-09-11T12:30:04.522097+00:00\", \"observed_at\": \"2026-09-11T12:30:04.522097+00:00\", \"retrieved_at\": \"2026-09-11T12:30:04.522097+00:00\", \"data_type\": \"position\", \"value\": {\"workers\": [{\"worker_id\": \"W001\", \"name\": \"张三\", \"latitude\": 22.1985916, \"longitude\": 113.5438873, \"normalized\": {\"x\": 0.6056, \"y\": 0.3012}}, {\"worker_id\": \"W002\", \"name\": \"李四\", \"latitude\": 22.1987913, \"longitude\": 113.5440088, \"normalized\": {\"x\": 0.699, \"y\": 0.4548}}, {\"worker_id\": \"W003\", \"name\": \"王五\", \"latitude\": 22.1986434, \"longitude\": 113.5439016, \"normalized\": {\"x\": 0.6166, \"y\": 0.3411}}], \"count\": 3}, \"unit\": null, \"confidence\": 1.0, \"metadata\": {\"site\": \"澳门演示工地\", \"scenario\": \"normal\", \"scenarioLabel\": \"正常作业\", \"demoThresholdsOnly\": true}, \"origin\": \"simulation\", \"source_name\": \"Kessoku 可控演示场景\", \"quality\": \"simulated\", \"freshness_seconds\": 0.0, \"latitude\": 22.1985916, \"longitude\": 113.5438873}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": null,
   "evidence": {
    "worker": "W002",
    "name": "李四",
    "zone_id": "zone_c",
    "zone_label": "材料堆放区 C",
    "latitude": 22.1987913,
    "longitude": 113.5440088,
    "confirmationHits": 2,
    "reading": {
     "sensor_id": "position_demo_01",
     "timestamp": "2026-09-11T12:30:04.522097+00:00",
     "observed_at": "2026-09-11T12:30:04.522097+00:00",
     "retrieved_at": "2026-09-11T12:30:04.522097+00:00",
     "data_type": "position",
     "value": {
      "workers": [
       {
        "worker_id": "W001",
        "name": "张三",
        "latitude": 22.1985916,
        "longitude": 113.5438873,
        "normalized": {
         "x": 0.6056,
         "y": 0.3012
        }
       },
       {
        "worker_id": "W002",
        "name": "李四",
        "latitude": 22.1987913,
        "longitude": 113.5440088,
        "normalized": {
         "x": 0.699,
         "y": 0.4548
        }
       },
       {
        "worker_id": "W003",
        "name": "王五",
        "latitude": 22.1986434,
        "longitude": 113.5439016,
        "normalized": {
         "x": 0.6166,
         "y": 0.3411
        }
       }
      ],
      "count": 3
     },
     "unit": null,
     "confidence": 1,
     "metadata": {
      "site": "澳门演示工地",
      "scenario": "normal",
      "scenarioLabel": "正常作业",
      "demoThresholdsOnly": true
     },
     "origin": "simulation",
     "source_name": "Kessoku 可控演示场景",
     "quality": "simulated",
     "freshness_seconds": 0,
     "latitude": 22.1985916,
     "longitude": 113.5438873
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "296B98018B",
   "occurred_at": "2026-09-11T20:29:50+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.6796118021011353,
   "snapshot_name": "296B98018B.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.6796118021011353, \"bbox\": [434.4, 833.9, 585.9, 964.5], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.85}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:29:50.439059+00:00\", \"observed_at\": \"2026-09-11T12:29:50.439059+00:00\", \"retrieved_at\": \"2026-09-11T12:29:50.439059+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.6796118021011353, \"bbox\": [434.4, 833.9, 585.9, 964.5], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.85}}], \"detections\": [{\"label\": \"person\", \"confidence\": 0.7265293598175049, \"bbox\": [1204.4, 513.9, 1226.7, 573.5], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.6796118021011353, \"bbox\": [434.4, 833.9, 585.9, 964.5], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5967923402786255, \"bbox\": [1.0, 850.4, 305.5, 1014.6], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5803014636039734, \"bbox\": [850.2, 114.4, 947.9, 227.2], \"track_id\": null}], \"person_count\": 1}, \"unit\": null, \"confidence\": 0.6796118021011353, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/296B98018B.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.6796118021011353,
     "bbox": [
      434.4,
      833.9,
      585.9,
      964.5
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 4.85
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:29:50.439059+00:00",
     "observed_at": "2026-09-11T12:29:50.439059+00:00",
     "retrieved_at": "2026-09-11T12:29:50.439059+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.6796118021011353,
        "bbox": [
         434.4,
         833.9,
         585.9,
         964.5
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 4.85
        }
       }
      ],
      "detections": [
       {
        "label": "person",
        "confidence": 0.7265293598175049,
        "bbox": [
         1204.4,
         513.9,
         1226.7,
         573.5
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.6796118021011353,
        "bbox": [
         434.4,
         833.9,
         585.9,
         964.5
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5967923402786255,
        "bbox": [
         1,
         850.4,
         305.5,
         1014.6
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5803014636039734,
        "bbox": [
         850.2,
         114.4,
         947.9,
         227.2
        ],
        "track_id": null
       }
      ],
      "person_count": 1
     },
     "unit": null,
     "confidence": 0.6796118021011353,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "5CFDFA4E28",
   "occurred_at": "2026-09-11T20:29:12+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5283610224723816,
   "snapshot_name": "5CFDFA4E28.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5283610224723816, \"bbox\": [426.0, 834.5, 584.2, 964.1], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.46}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:29:12.936084+00:00\", \"observed_at\": \"2026-09-11T12:29:12.936084+00:00\", \"retrieved_at\": \"2026-09-11T12:29:12.936084+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5283610224723816, \"bbox\": [426.0, 834.5, 584.2, 964.1], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.46}}], \"detections\": [{\"label\": \"person\", \"confidence\": 0.7862368822097778, \"bbox\": [1201.0, 516.4, 1224.3, 572.4], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.551797091960907, \"bbox\": [851.7, 115.5, 947.4, 226.7], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5283610224723816, \"bbox\": [426.0, 834.5, 584.2, 964.1], \"track_id\": null}], \"person_count\": 1}, \"unit\": null, \"confidence\": 0.5283610224723816, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/5CFDFA4E28.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5283610224723816,
     "bbox": [
      426,
      834.5,
      584.2,
      964.1
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 2.46
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:29:12.936084+00:00",
     "observed_at": "2026-09-11T12:29:12.936084+00:00",
     "retrieved_at": "2026-09-11T12:29:12.936084+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5283610224723816,
        "bbox": [
         426,
         834.5,
         584.2,
         964.1
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 2.46
        }
       }
      ],
      "detections": [
       {
        "label": "person",
        "confidence": 0.7862368822097778,
        "bbox": [
         1201,
         516.4,
         1224.3,
         572.4
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.551797091960907,
        "bbox": [
         851.7,
         115.5,
         947.4,
         226.7
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5283610224723816,
        "bbox": [
         426,
         834.5,
         584.2,
         964.1
        ],
        "track_id": null
       }
      ],
      "person_count": 1
     },
     "unit": null,
     "confidence": 0.5283610224723816,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "CC6A4E7205",
   "occurred_at": "2026-09-11T20:28:33+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5388974547386169,
   "snapshot_name": "CC6A4E7205.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5388974547386169, \"bbox\": [102.8, 855.5, 360.2, 1019.6], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 3.65}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:28:33.529965+00:00\", \"observed_at\": \"2026-09-11T12:28:33.529965+00:00\", \"retrieved_at\": \"2026-09-11T12:28:33.529965+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5388974547386169, \"bbox\": [102.8, 855.5, 360.2, 1019.6], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 3.65}}], \"detections\": [{\"label\": \"machinery\", \"confidence\": 0.5388974547386169, \"bbox\": [102.8, 855.5, 360.2, 1019.6], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.4603738784790039, \"bbox\": [847.6, 113.5, 947.4, 228.2], \"track_id\": null}], \"person_count\": 0}, \"unit\": null, \"confidence\": 0.5388974547386169, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/CC6A4E7205.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5388974547386169,
     "bbox": [
      102.8,
      855.5,
      360.2,
      1019.6
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 3.65
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:28:33.529965+00:00",
     "observed_at": "2026-09-11T12:28:33.529965+00:00",
     "retrieved_at": "2026-09-11T12:28:33.529965+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5388974547386169,
        "bbox": [
         102.8,
         855.5,
         360.2,
         1019.6
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 3.65
        }
       }
      ],
      "detections": [
       {
        "label": "machinery",
        "confidence": 0.5388974547386169,
        "bbox": [
         102.8,
         855.5,
         360.2,
         1019.6
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.4603738784790039,
        "bbox": [
         847.6,
         113.5,
         947.4,
         228.2
        ],
        "track_id": null
       }
      ],
      "person_count": 0
     },
     "unit": null,
     "confidence": 0.5388974547386169,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "F806E00622",
   "occurred_at": "2026-09-11T20:27:57+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5996229648590088,
   "snapshot_name": "F806E00622.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5996229648590088, \"bbox\": [0.1, 854.9, 365.3, 1034.0], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.93}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:27:57.082080+00:00\", \"observed_at\": \"2026-09-11T12:27:57.082080+00:00\", \"retrieved_at\": \"2026-09-11T12:27:57.082080+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5996229648590088, \"bbox\": [0.1, 854.9, 365.3, 1034.0], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.93}}], \"detections\": [{\"label\": \"person\", \"confidence\": 0.6890536546707153, \"bbox\": [1183.7, 518.9, 1202.9, 568.2], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5996229648590088, \"bbox\": [0.1, 854.9, 365.3, 1034.0], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5737357139587402, \"bbox\": [1150.0, 182.7, 1271.2, 265.3], \"track_id\": null}], \"person_count\": 1}, \"unit\": null, \"confidence\": 0.5996229648590088, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/F806E00622.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5996229648590088,
     "bbox": [
      0.1,
      854.9,
      365.3,
      1034
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 4.93
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:27:57.082080+00:00",
     "observed_at": "2026-09-11T12:27:57.082080+00:00",
     "retrieved_at": "2026-09-11T12:27:57.082080+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5996229648590088,
        "bbox": [
         0.1,
         854.9,
         365.3,
         1034
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 4.93
        }
       }
      ],
      "detections": [
       {
        "label": "person",
        "confidence": 0.6890536546707153,
        "bbox": [
         1183.7,
         518.9,
         1202.9,
         568.2
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5996229648590088,
        "bbox": [
         0.1,
         854.9,
         365.3,
         1034
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5737357139587402,
        "bbox": [
         1150,
         182.7,
         1271.2,
         265.3
        ],
        "track_id": null
       }
      ],
      "person_count": 1
     },
     "unit": null,
     "confidence": 0.5996229648590088,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "563BA5D3DB",
   "occurred_at": "2026-09-11T20:27:29+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.6796118021011353,
   "snapshot_name": "563BA5D3DB.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.6796118021011353, \"bbox\": [434.4, 833.9, 585.9, 964.5], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.87}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:27:29.769720+00:00\", \"observed_at\": \"2026-09-11T12:27:29.769720+00:00\", \"retrieved_at\": \"2026-09-11T12:27:29.769720+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.6796118021011353, \"bbox\": [434.4, 833.9, 585.9, 964.5], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.87}}], \"detections\": [{\"label\": \"person\", \"confidence\": 0.7265293598175049, \"bbox\": [1204.4, 513.9, 1226.7, 573.5], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.6796118021011353, \"bbox\": [434.4, 833.9, 585.9, 964.5], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5967923402786255, \"bbox\": [1.0, 850.4, 305.5, 1014.6], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5803014636039734, \"bbox\": [850.2, 114.4, 947.9, 227.2], \"track_id\": null}], \"person_count\": 1}, \"unit\": null, \"confidence\": 0.6796118021011353, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/563BA5D3DB.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.6796118021011353,
     "bbox": [
      434.4,
      833.9,
      585.9,
      964.5
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 4.87
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:27:29.769720+00:00",
     "observed_at": "2026-09-11T12:27:29.769720+00:00",
     "retrieved_at": "2026-09-11T12:27:29.769720+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.6796118021011353,
        "bbox": [
         434.4,
         833.9,
         585.9,
         964.5
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 4.87
        }
       }
      ],
      "detections": [
       {
        "label": "person",
        "confidence": 0.7265293598175049,
        "bbox": [
         1204.4,
         513.9,
         1226.7,
         573.5
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.6796118021011353,
        "bbox": [
         434.4,
         833.9,
         585.9,
         964.5
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5967923402786255,
        "bbox": [
         1,
         850.4,
         305.5,
         1014.6
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5803014636039734,
        "bbox": [
         850.2,
         114.4,
         947.9,
         227.2
        ],
        "track_id": null
       }
      ],
      "person_count": 1
     },
     "unit": null,
     "confidence": 0.6796118021011353,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "9B4745618D",
   "occurred_at": "2026-09-11T20:26:52+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5283610224723816,
   "snapshot_name": "9B4745618D.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5283610224723816, \"bbox\": [426.0, 834.5, 584.2, 964.1], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.41}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:26:52.123774+00:00\", \"observed_at\": \"2026-09-11T12:26:52.123774+00:00\", \"retrieved_at\": \"2026-09-11T12:26:52.123774+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5283610224723816, \"bbox\": [426.0, 834.5, 584.2, 964.1], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 2.41}}], \"detections\": [{\"label\": \"person\", \"confidence\": 0.7862368822097778, \"bbox\": [1201.0, 516.4, 1224.3, 572.4], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.551797091960907, \"bbox\": [851.7, 115.5, 947.4, 226.7], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5283610224723816, \"bbox\": [426.0, 834.5, 584.2, 964.1], \"track_id\": null}], \"person_count\": 1}, \"unit\": null, \"confidence\": 0.5283610224723816, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/9B4745618D.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5283610224723816,
     "bbox": [
      426,
      834.5,
      584.2,
      964.1
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 2.41
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:26:52.123774+00:00",
     "observed_at": "2026-09-11T12:26:52.123774+00:00",
     "retrieved_at": "2026-09-11T12:26:52.123774+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5283610224723816,
        "bbox": [
         426,
         834.5,
         584.2,
         964.1
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 2.41
        }
       }
      ],
      "detections": [
       {
        "label": "person",
        "confidence": 0.7862368822097778,
        "bbox": [
         1201,
         516.4,
         1224.3,
         572.4
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.551797091960907,
        "bbox": [
         851.7,
         115.5,
         947.4,
         226.7
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5283610224723816,
        "bbox": [
         426,
         834.5,
         584.2,
         964.1
        ],
        "track_id": null
       }
      ],
      "person_count": 1
     },
     "unit": null,
     "confidence": 0.5283610224723816,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "64B0ECEA60",
   "occurred_at": "2026-09-11T20:26:12+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5388974547386169,
   "snapshot_name": "64B0ECEA60.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5388974547386169, \"bbox\": [102.8, 855.5, 360.2, 1019.6], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 3.49}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:26:12.133438+00:00\", \"observed_at\": \"2026-09-11T12:26:12.133438+00:00\", \"retrieved_at\": \"2026-09-11T12:26:12.133438+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5388974547386169, \"bbox\": [102.8, 855.5, 360.2, 1019.6], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 3.49}}], \"detections\": [{\"label\": \"machinery\", \"confidence\": 0.5388974547386169, \"bbox\": [102.8, 855.5, 360.2, 1019.6], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.4603738784790039, \"bbox\": [847.6, 113.5, 947.4, 228.2], \"track_id\": null}], \"person_count\": 0}, \"unit\": null, \"confidence\": 0.5388974547386169, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/64B0ECEA60.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5388974547386169,
     "bbox": [
      102.8,
      855.5,
      360.2,
      1019.6
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 3.49
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:26:12.133438+00:00",
     "observed_at": "2026-09-11T12:26:12.133438+00:00",
     "retrieved_at": "2026-09-11T12:26:12.133438+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5388974547386169,
        "bbox": [
         102.8,
         855.5,
         360.2,
         1019.6
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 3.49
        }
       }
      ],
      "detections": [
       {
        "label": "machinery",
        "confidence": 0.5388974547386169,
        "bbox": [
         102.8,
         855.5,
         360.2,
         1019.6
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.4603738784790039,
        "bbox": [
         847.6,
         113.5,
         947.4,
         228.2
        ],
        "track_id": null
       }
      ],
      "person_count": 0
     },
     "unit": null,
     "confidence": 0.5388974547386169,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  },
  {
   "id": "07F7B70C6E",
   "occurred_at": "2026-09-11T20:25:35+08:00",
   "video_id": "c8bb4c53c15b4697a161296f708d97de",
   "video_name": "cmot_samples.mp4",
   "camera_name": "工地入口视觉传感器 01",
   "violation_type": "作业通道存在障碍物",
   "confidence": 0.5996229648590088,
   "snapshot_name": "07F7B70C6E.jpg",
   "status": "pending",
   "sensor_id": "vision_entrance_01",
   "origin": "device",
   "source_name": "工地入口视觉传感器 01",
   "severity": "critical",
   "evidence_json": "{\"detection\": {\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5996229648590088, \"bbox\": [0.1, 854.9, 365.3, 1034.0], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.81}}, \"highWorkActive\": false, \"reading\": {\"sensor_id\": \"vision_entrance_01\", \"timestamp\": \"2026-09-11T12:25:35.934983+00:00\", \"observed_at\": \"2026-09-11T12:25:35.934983+00:00\", \"retrieved_at\": \"2026-09-11T12:25:35.934983+00:00\", \"data_type\": \"vision_detection\", \"value\": {\"violations\": [{\"type\": \"obstacle_in_corridor\", \"confidence\": 0.5996229648590088, \"bbox\": [0.1, 854.9, 365.3, 1034.0], \"rawLabel\": \"machinery\", \"trackId\": null, \"personBbox\": null, \"frame\": {\"width\": 1280, \"height\": 1064}, \"corridor\": \"entrance-corridor\", \"temporalEvidence\": {\"hits\": 3, \"durationSeconds\": 4.81}}], \"detections\": [{\"label\": \"person\", \"confidence\": 0.6890536546707153, \"bbox\": [1183.7, 518.9, 1202.9, 568.2], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5996229648590088, \"bbox\": [0.1, 854.9, 365.3, 1034.0], \"track_id\": null}, {\"label\": \"machinery\", \"confidence\": 0.5737357139587402, \"bbox\": [1150.0, 182.7, 1271.2, 265.3], \"track_id\": null}], \"person_count\": 1}, \"unit\": null, \"confidence\": 0.5996229648590088, \"metadata\": {\"source\": \"cmot_samples.mp4\", \"provider\": \"local_yolo\", \"analytics\": \"temporal-gate/person-association/corridor-roi\"}, \"origin\": \"device\", \"source_name\": \"工地入口视觉传感器 01\", \"quality\": \"fresh\", \"freshness_seconds\": 0.0, \"latitude\": null, \"longitude\": null}, \"evidenceVersion\": \"v2\"}",
   "rule_version": "safety-rules-v2",
   "site_id": "macau_demo",
   "snapshotUrl": "/api/snapshots/07F7B70C6E.jpg",
   "evidence": {
    "detection": {
     "type": "obstacle_in_corridor",
     "confidence": 0.5996229648590088,
     "bbox": [
      0.1,
      854.9,
      365.3,
      1034
     ],
     "rawLabel": "machinery",
     "trackId": null,
     "personBbox": null,
     "frame": {
      "width": 1280,
      "height": 1064
     },
     "corridor": "entrance-corridor",
     "temporalEvidence": {
      "hits": 3,
      "durationSeconds": 4.81
     }
    },
    "highWorkActive": false,
    "reading": {
     "sensor_id": "vision_entrance_01",
     "timestamp": "2026-09-11T12:25:35.934983+00:00",
     "observed_at": "2026-09-11T12:25:35.934983+00:00",
     "retrieved_at": "2026-09-11T12:25:35.934983+00:00",
     "data_type": "vision_detection",
     "value": {
      "violations": [
       {
        "type": "obstacle_in_corridor",
        "confidence": 0.5996229648590088,
        "bbox": [
         0.1,
         854.9,
         365.3,
         1034
        ],
        "rawLabel": "machinery",
        "trackId": null,
        "personBbox": null,
        "frame": {
         "width": 1280,
         "height": 1064
        },
        "corridor": "entrance-corridor",
        "temporalEvidence": {
         "hits": 3,
         "durationSeconds": 4.81
        }
       }
      ],
      "detections": [
       {
        "label": "person",
        "confidence": 0.6890536546707153,
        "bbox": [
         1183.7,
         518.9,
         1202.9,
         568.2
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5996229648590088,
        "bbox": [
         0.1,
         854.9,
         365.3,
         1034
        ],
        "track_id": null
       },
       {
        "label": "machinery",
        "confidence": 0.5737357139587402,
        "bbox": [
         1150,
         182.7,
         1271.2,
         265.3
        ],
        "track_id": null
       }
      ],
      "person_count": 1
     },
     "unit": null,
     "confidence": 0.5996229648590088,
     "metadata": {
      "source": "cmot_samples.mp4",
      "provider": "local_yolo",
      "analytics": "temporal-gate/person-association/corridor-roi"
     },
     "origin": "device",
     "source_name": "工地入口视觉传感器 01",
     "quality": "fresh",
     "freshness_seconds": 0,
     "latitude": null,
     "longitude": null
    },
    "evidenceVersion": "v2"
   },
   "actions": []
  }
 ],
 "/api/alerts/incidents": [
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-10-22T20:50:03+08:00",
   "lastAt": "2026-10-22T20:50:03+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "02ABCF7B63",
     "at": "2026-10-22T20:50:03+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-10-22T20:47:35+08:00",
   "lastAt": "2026-10-22T20:47:35+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "90F3B473C5",
     "at": "2026-10-22T20:47:35+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "临时加工棚 D",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-10-22T20:47:33+08:00",
   "lastAt": "2026-10-22T20:47:33+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "F31202B622",
     "at": "2026-10-22T20:47:33+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-10-22T20:47:22+08:00",
   "lastAt": "2026-10-22T20:47:22+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "28D15314F1",
     "at": "2026-10-22T20:47:22+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "作业通道存在障碍物",
   "zone": "未分区",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-10-01T00:09:55+08:00",
   "lastAt": "2026-10-01T00:09:40+08:00",
   "sources": [
    "vision_entrance_01"
   ],
   "alerts": [
    {
     "id": "8983F60D2E",
     "at": "2026-10-01T00:09:55+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "FCA8C4B605",
     "at": "2026-10-01T00:09:40+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 2,
   "pending": 1,
   "firstAt": "2026-10-01T00:09:53+08:00",
   "lastAt": "2026-10-01T00:07:11+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "E82D105B46",
     "at": "2026-10-01T00:09:53+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "72E17358D8",
     "at": "2026-10-01T00:07:11+08:00",
     "severity": "warning",
     "status": "confirmed"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 0,
   "firstAt": "2026-10-01T00:05:22+08:00",
   "lastAt": "2026-10-01T00:05:22+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "34138EF1F5",
     "at": "2026-10-01T00:05:22+08:00",
     "severity": "warning",
     "status": "false_positive"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "临时加工棚 D",
   "severity": "warning",
   "count": 1,
   "pending": 0,
   "firstAt": "2026-10-01T00:05:10+08:00",
   "lastAt": "2026-10-01T00:05:10+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "FA166B3B35",
     "at": "2026-10-01T00:05:10+08:00",
     "severity": "warning",
     "status": "confirmed"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 0,
   "firstAt": "2026-10-01T00:05:05+08:00",
   "lastAt": "2026-10-01T00:05:05+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "01EC859792",
     "at": "2026-10-01T00:05:05+08:00",
     "severity": "critical",
     "status": "false_positive"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T23:59:40+08:00",
   "lastAt": "2026-09-30T23:55:25+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "2301599CB2",
     "at": "2026-09-30T23:59:40+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "705BAA5C43",
     "at": "2026-09-30T23:55:25+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T23:46:52+08:00",
   "lastAt": "2026-09-30T23:46:52+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "4A8208EF8C",
     "at": "2026-09-30T23:46:52+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T23:45:18+08:00",
   "lastAt": "2026-09-30T23:45:18+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "1BC8AAD6B7",
     "at": "2026-09-30T23:45:18+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T23:41:21+08:00",
   "lastAt": "2026-09-30T23:41:21+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "A2148FEF2F",
     "at": "2026-09-30T23:41:21+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T23:40:42+08:00",
   "lastAt": "2026-09-30T23:40:42+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "EB20BADD5C",
     "at": "2026-09-30T23:40:42+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T23:40:15+08:00",
   "lastAt": "2026-09-30T23:40:15+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "31D1E72D07",
     "at": "2026-09-30T23:40:15+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 4,
   "pending": 4,
   "firstAt": "2026-09-30T23:49:58+08:00",
   "lastAt": "2026-09-30T23:38:06+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "E30E9E173D",
     "at": "2026-09-30T23:49:58+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "5DD4489B7A",
     "at": "2026-09-30T23:45:06+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "2FA4E20ADE",
     "at": "2026-09-30T23:42:28+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "C180B4AEFF",
     "at": "2026-09-30T23:38:06+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T23:27:53+08:00",
   "lastAt": "2026-09-30T23:27:53+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "1FE4F89DA2",
     "at": "2026-09-30T23:27:53+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 6,
   "pending": 6,
   "firstAt": "2026-09-30T23:29:45+08:00",
   "lastAt": "2026-09-30T23:15:22+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "BE17A93116",
     "at": "2026-09-30T23:29:45+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "A92DE2190F",
     "at": "2026-09-30T23:26:23+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "D5094503B8",
     "at": "2026-09-30T23:24:39+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "FD9A1143CB",
     "at": "2026-09-30T23:21:37+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "AB602F2ADC",
     "at": "2026-09-30T23:18:43+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "9BECE9B7ED",
     "at": "2026-09-30T23:15:22+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T23:14:42+08:00",
   "lastAt": "2026-09-30T23:11:16+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "AF66DA5D01",
     "at": "2026-09-30T23:14:42+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "CEBF2B6A16",
     "at": "2026-09-30T23:11:16+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T23:07:37+08:00",
   "lastAt": "2026-09-30T23:07:37+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "AEAF0EF9EA",
     "at": "2026-09-30T23:07:37+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T23:06:08+08:00",
   "lastAt": "2026-09-30T23:06:08+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "C7661A7340",
     "at": "2026-09-30T23:06:08+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T23:02:07+08:00",
   "lastAt": "2026-09-30T23:02:07+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "D6BC967D9C",
     "at": "2026-09-30T23:02:07+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T23:03:50+08:00",
   "lastAt": "2026-09-30T23:00:43+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "09BE31E80E",
     "at": "2026-09-30T23:03:50+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "8C057C3DE4",
     "at": "2026-09-30T23:00:43+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 3,
   "pending": 3,
   "firstAt": "2026-09-30T23:06:53+08:00",
   "lastAt": "2026-09-30T22:58:56+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "94F39FC049",
     "at": "2026-09-30T23:06:53+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "05C49E215C",
     "at": "2026-09-30T23:01:59+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "3E447FE7A8",
     "at": "2026-09-30T22:58:56+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T22:50:54+08:00",
   "lastAt": "2026-09-30T22:50:54+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "ECA6052FC5",
     "at": "2026-09-30T22:50:54+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T22:50:31+08:00",
   "lastAt": "2026-09-30T22:50:31+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "22926995A4",
     "at": "2026-09-30T22:50:31+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T22:49:09+08:00",
   "lastAt": "2026-09-30T22:49:09+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "BC5F2A1223",
     "at": "2026-09-30T22:49:09+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T22:45:14+08:00",
   "lastAt": "2026-09-30T22:45:14+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "4C685DB895",
     "at": "2026-09-30T22:45:14+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T22:44:21+08:00",
   "lastAt": "2026-09-30T22:44:21+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "196C164A9E",
     "at": "2026-09-30T22:44:21+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T22:43:44+08:00",
   "lastAt": "2026-09-30T22:43:44+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "EE50321C79",
     "at": "2026-09-30T22:43:44+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 3,
   "pending": 3,
   "firstAt": "2026-09-30T22:39:05+08:00",
   "lastAt": "2026-09-30T22:38:02+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "7B9B415A8D",
     "at": "2026-09-30T22:39:05+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "0CDCF75AFF",
     "at": "2026-09-30T22:38:38+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "F6939438FC",
     "at": "2026-09-30T22:38:02+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T22:35:58+08:00",
   "lastAt": "2026-09-30T22:35:58+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "EC3BA8E79D",
     "at": "2026-09-30T22:35:58+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T22:35:16+08:00",
   "lastAt": "2026-09-30T22:35:16+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "55AC48205D",
     "at": "2026-09-30T22:35:16+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T22:28:34+08:00",
   "lastAt": "2026-09-30T22:28:34+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "8EE3484E0E",
     "at": "2026-09-30T22:28:34+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T22:27:04+08:00",
   "lastAt": "2026-09-30T22:27:04+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "DBBE942F31",
     "at": "2026-09-30T22:27:04+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T22:27:02+08:00",
   "lastAt": "2026-09-30T22:27:02+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "681C1DDA9B",
     "at": "2026-09-30T22:27:02+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T22:20:24+08:00",
   "lastAt": "2026-09-30T22:20:24+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "101DEDE254",
     "at": "2026-09-30T22:20:24+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T22:03:25+08:00",
   "lastAt": "2026-09-30T22:00:25+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "62EDD7584E",
     "at": "2026-09-30T22:03:25+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "69490C949E",
     "at": "2026-09-30T22:00:25+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T21:57:52+08:00",
   "lastAt": "2026-09-30T21:53:15+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "337EC6061E",
     "at": "2026-09-30T21:57:52+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "81DDCD569D",
     "at": "2026-09-30T21:53:15+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T21:48:10+08:00",
   "lastAt": "2026-09-30T21:48:10+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "80FDD4A95D",
     "at": "2026-09-30T21:48:10+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T21:46:23+08:00",
   "lastAt": "2026-09-30T21:46:23+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "5D60104F19",
     "at": "2026-09-30T21:46:23+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T21:44:44+08:00",
   "lastAt": "2026-09-30T21:44:44+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "9DB90F9A74",
     "at": "2026-09-30T21:44:44+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T21:44:48+08:00",
   "lastAt": "2026-09-30T21:44:25+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "1E85439C14",
     "at": "2026-09-30T21:44:48+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "3DD6530E14",
     "at": "2026-09-30T21:44:25+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T21:37:36+08:00",
   "lastAt": "2026-09-30T21:35:45+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "DE6008D7EF",
     "at": "2026-09-30T21:37:36+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "B4DE166507",
     "at": "2026-09-30T21:35:45+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T21:30:38+08:00",
   "lastAt": "2026-09-30T21:30:38+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "D13DCD9D52",
     "at": "2026-09-30T21:30:38+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T21:22:26+08:00",
   "lastAt": "2026-09-30T21:22:26+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "839D50A0DE",
     "at": "2026-09-30T21:22:26+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T21:23:08+08:00",
   "lastAt": "2026-09-30T21:21:10+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "1157E02A91",
     "at": "2026-09-30T21:23:08+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "5EA827D08C",
     "at": "2026-09-30T21:21:10+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T21:11:42+08:00",
   "lastAt": "2026-09-30T21:11:42+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "C4EC472A25",
     "at": "2026-09-30T21:11:42+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 3,
   "pending": 3,
   "firstAt": "2026-09-30T21:11:29+08:00",
   "lastAt": "2026-09-30T21:05:53+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "6F917C8010",
     "at": "2026-09-30T21:11:29+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "755B9ED790",
     "at": "2026-09-30T21:10:10+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "0AFC2F2D92",
     "at": "2026-09-30T21:05:53+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T21:02:22+08:00",
   "lastAt": "2026-09-30T21:02:22+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "18B5B71D74",
     "at": "2026-09-30T21:02:22+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T20:54:13+08:00",
   "lastAt": "2026-09-30T20:52:47+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "2FD4B6AA53",
     "at": "2026-09-30T20:54:13+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "52F1799E83",
     "at": "2026-09-30T20:52:47+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T20:51:54+08:00",
   "lastAt": "2026-09-30T20:50:24+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "FB909D8DBC",
     "at": "2026-09-30T20:51:54+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "983494D7D4",
     "at": "2026-09-30T20:50:24+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T20:50:01+08:00",
   "lastAt": "2026-09-30T20:50:01+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "1E636F340B",
     "at": "2026-09-30T20:50:01+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 3,
   "pending": 3,
   "firstAt": "2026-09-30T20:50:56+08:00",
   "lastAt": "2026-09-30T20:47:05+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "A7FA1A4708",
     "at": "2026-09-30T20:50:56+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "AEFBE839B3",
     "at": "2026-09-30T20:49:36+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "B696D39244",
     "at": "2026-09-30T20:47:05+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 3,
   "pending": 3,
   "firstAt": "2026-09-30T20:47:40+08:00",
   "lastAt": "2026-09-30T20:39:34+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "0C0DA896D8",
     "at": "2026-09-30T20:47:40+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "EF15C4CC8F",
     "at": "2026-09-30T20:43:39+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "CD81D80239",
     "at": "2026-09-30T20:39:34+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T20:32:58+08:00",
   "lastAt": "2026-09-30T20:32:58+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "EFD8C42CE3",
     "at": "2026-09-30T20:32:58+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T20:29:06+08:00",
   "lastAt": "2026-09-30T20:29:06+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "16AFEFCC82",
     "at": "2026-09-30T20:29:06+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T20:27:03+08:00",
   "lastAt": "2026-09-30T20:27:03+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "BAF071EBA9",
     "at": "2026-09-30T20:27:03+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T20:22:25+08:00",
   "lastAt": "2026-09-30T20:22:25+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "3D65CA1CA5",
     "at": "2026-09-30T20:22:25+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T20:19:42+08:00",
   "lastAt": "2026-09-30T20:19:42+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "E0D2C0E624",
     "at": "2026-09-30T20:19:42+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T20:17:24+08:00",
   "lastAt": "2026-09-30T20:17:24+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "A506ADCC46",
     "at": "2026-09-30T20:17:24+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T20:11:13+08:00",
   "lastAt": "2026-09-30T20:11:13+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "097487CCD9",
     "at": "2026-09-30T20:11:13+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T20:02:37+08:00",
   "lastAt": "2026-09-30T20:02:37+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "8278BEBDA4",
     "at": "2026-09-30T20:02:37+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T20:01:19+08:00",
   "lastAt": "2026-09-30T19:59:38+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "98A987E64B",
     "at": "2026-09-30T20:01:19+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "E901FF7D05",
     "at": "2026-09-30T19:59:38+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T20:00:41+08:00",
   "lastAt": "2026-09-30T19:57:30+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "C66D3F932C",
     "at": "2026-09-30T20:00:41+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "BA4DB7771B",
     "at": "2026-09-30T19:57:30+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T19:51:28+08:00",
   "lastAt": "2026-09-30T19:49:40+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "CF6CA514C0",
     "at": "2026-09-30T19:51:28+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "F09CE02699",
     "at": "2026-09-30T19:49:40+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T19:46:53+08:00",
   "lastAt": "2026-09-30T19:46:53+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "61BFF6E02A",
     "at": "2026-09-30T19:46:53+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T19:45:42+08:00",
   "lastAt": "2026-09-30T19:45:32+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "CDEFB54651",
     "at": "2026-09-30T19:45:42+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "10A76DC0D5",
     "at": "2026-09-30T19:45:32+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T19:40:17+08:00",
   "lastAt": "2026-09-30T19:40:17+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "117EBD3814",
     "at": "2026-09-30T19:40:17+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T19:27:18+08:00",
   "lastAt": "2026-09-30T19:27:18+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "3D7E806012",
     "at": "2026-09-30T19:27:18+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T19:24:39+08:00",
   "lastAt": "2026-09-30T19:24:39+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "381E33B542",
     "at": "2026-09-30T19:24:39+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T19:18:31+08:00",
   "lastAt": "2026-09-30T19:18:31+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "BBEFA44084",
     "at": "2026-09-30T19:18:31+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 3,
   "pending": 3,
   "firstAt": "2026-09-30T19:19:52+08:00",
   "lastAt": "2026-09-30T19:16:23+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "6256970EE3",
     "at": "2026-09-30T19:19:52+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "3B2545B85C",
     "at": "2026-09-30T19:17:41+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "2D9DE95C55",
     "at": "2026-09-30T19:16:23+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 3,
   "pending": 3,
   "firstAt": "2026-09-30T19:11:36+08:00",
   "lastAt": "2026-09-30T19:05:23+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "7FB2D7AADB",
     "at": "2026-09-30T19:11:36+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "52898685E7",
     "at": "2026-09-30T19:10:02+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "2FAE86FABE",
     "at": "2026-09-30T19:05:23+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T19:04:42+08:00",
   "lastAt": "2026-09-30T18:59:52+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "7B818A1419",
     "at": "2026-09-30T19:04:42+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "B9B74615CF",
     "at": "2026-09-30T18:59:52+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T18:48:18+08:00",
   "lastAt": "2026-09-30T18:48:18+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "DA42B85751",
     "at": "2026-09-30T18:48:18+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 4,
   "pending": 4,
   "firstAt": "2026-09-30T18:52:26+08:00",
   "lastAt": "2026-09-30T18:42:39+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "A6DE293778",
     "at": "2026-09-30T18:52:26+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "03D56BBEEB",
     "at": "2026-09-30T18:50:52+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "5B2995167F",
     "at": "2026-09-30T18:47:32+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "FAECD541A1",
     "at": "2026-09-30T18:42:39+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T18:40:34+08:00",
   "lastAt": "2026-09-30T18:40:34+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "C1AB10D22A",
     "at": "2026-09-30T18:40:34+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T18:35:02+08:00",
   "lastAt": "2026-09-30T18:35:02+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "26414EA028",
     "at": "2026-09-30T18:35:02+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T18:23:58+08:00",
   "lastAt": "2026-09-30T18:23:58+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "F63929B658",
     "at": "2026-09-30T18:23:58+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T18:22:50+08:00",
   "lastAt": "2026-09-30T18:22:50+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "2CCC8737AE",
     "at": "2026-09-30T18:22:50+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T18:15:49+08:00",
   "lastAt": "2026-09-30T18:15:49+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "EE04E2722B",
     "at": "2026-09-30T18:15:49+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T18:02:57+08:00",
   "lastAt": "2026-09-30T18:02:57+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "B5CB867228",
     "at": "2026-09-30T18:02:57+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T17:58:47+08:00",
   "lastAt": "2026-09-30T17:55:35+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "DB815D351F",
     "at": "2026-09-30T17:58:47+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "BD125A0C10",
     "at": "2026-09-30T17:55:35+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T17:52:17+08:00",
   "lastAt": "2026-09-30T17:51:40+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "9FC2EF2FD0",
     "at": "2026-09-30T17:52:17+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "5F979575B6",
     "at": "2026-09-30T17:51:40+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T17:45:42+08:00",
   "lastAt": "2026-09-30T17:45:42+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "A133185DC2",
     "at": "2026-09-30T17:45:42+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T17:41:40+08:00",
   "lastAt": "2026-09-30T17:41:40+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "ABD71234B9",
     "at": "2026-09-30T17:41:40+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T17:41:49+08:00",
   "lastAt": "2026-09-30T17:36:59+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "25EEEDEA80",
     "at": "2026-09-30T17:41:49+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "8334BE1331",
     "at": "2026-09-30T17:36:59+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T17:20:44+08:00",
   "lastAt": "2026-09-30T17:20:44+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "96D7E5BD65",
     "at": "2026-09-30T17:20:44+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T17:14:38+08:00",
   "lastAt": "2026-09-30T17:14:38+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "9A77E0178E",
     "at": "2026-09-30T17:14:38+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T17:06:39+08:00",
   "lastAt": "2026-09-30T17:02:22+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "F73C7352C7",
     "at": "2026-09-30T17:06:39+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "F0D987ED65",
     "at": "2026-09-30T17:02:22+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T16:57:37+08:00",
   "lastAt": "2026-09-30T16:57:37+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "2574658463",
     "at": "2026-09-30T16:57:37+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T16:49:56+08:00",
   "lastAt": "2026-09-30T16:49:56+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "246C6BD43D",
     "at": "2026-09-30T16:49:56+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T16:48:55+08:00",
   "lastAt": "2026-09-30T16:48:55+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "058F0A4844",
     "at": "2026-09-30T16:48:55+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T16:48:22+08:00",
   "lastAt": "2026-09-30T16:46:43+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "58083D74F6",
     "at": "2026-09-30T16:48:22+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "4551AEE3C8",
     "at": "2026-09-30T16:46:43+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T16:40:33+08:00",
   "lastAt": "2026-09-30T16:40:33+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "EC6F375AC1",
     "at": "2026-09-30T16:40:33+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T16:38:58+08:00",
   "lastAt": "2026-09-30T16:38:58+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "408543EAC9",
     "at": "2026-09-30T16:38:58+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-30T16:39:58+08:00",
   "lastAt": "2026-09-30T16:36:15+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "080BC86AE3",
     "at": "2026-09-30T16:39:58+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "27C01AC760",
     "at": "2026-09-30T16:36:15+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T16:29:37+08:00",
   "lastAt": "2026-09-30T16:29:37+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "6BC45A1775",
     "at": "2026-09-30T16:29:37+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T16:29:27+08:00",
   "lastAt": "2026-09-30T16:29:27+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "14CBD53744",
     "at": "2026-09-30T16:29:27+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-30T16:29:27+08:00",
   "lastAt": "2026-09-30T16:29:27+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "1CF313C8F7",
     "at": "2026-09-30T16:29:27+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-28T17:54:13+08:00",
   "lastAt": "2026-09-28T17:54:13+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "837B22EEE2",
     "at": "2026-09-28T17:54:13+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-28T17:51:25+08:00",
   "lastAt": "2026-09-28T17:51:25+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "00A2530E08",
     "at": "2026-09-28T17:51:25+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-28T17:52:11+08:00",
   "lastAt": "2026-09-28T17:50:31+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "D88257081F",
     "at": "2026-09-28T17:52:11+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "51ECD36499",
     "at": "2026-09-28T17:50:31+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-28T17:46:13+08:00",
   "lastAt": "2026-09-28T17:46:13+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "661963141E",
     "at": "2026-09-28T17:46:13+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-28T17:47:01+08:00",
   "lastAt": "2026-09-28T17:43:36+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "900EDAA1BB",
     "at": "2026-09-28T17:47:01+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "76E42052CD",
     "at": "2026-09-28T17:43:36+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-28T17:46:20+08:00",
   "lastAt": "2026-09-28T17:43:25+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "2E5C26B419",
     "at": "2026-09-28T17:46:20+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "6C27EC4238",
     "at": "2026-09-28T17:43:25+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-28T17:43:25+08:00",
   "lastAt": "2026-09-28T17:43:25+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "1FB0C41CB2",
     "at": "2026-09-28T17:43:25+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-28T17:40:48+08:00",
   "lastAt": "2026-09-28T17:40:48+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "CA9A939DC6",
     "at": "2026-09-28T17:40:48+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-28T17:34:02+08:00",
   "lastAt": "2026-09-28T17:34:02+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "444BF9557F",
     "at": "2026-09-28T17:34:02+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-28T17:30:13+08:00",
   "lastAt": "2026-09-28T17:30:13+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "8BE7FEFBB3",
     "at": "2026-09-28T17:30:13+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-28T17:26:53+08:00",
   "lastAt": "2026-09-28T17:26:53+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "31FA62678C",
     "at": "2026-09-28T17:26:53+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-28T17:21:16+08:00",
   "lastAt": "2026-09-28T17:21:16+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "F279AA6062",
     "at": "2026-09-28T17:21:16+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-28T17:17:18+08:00",
   "lastAt": "2026-09-28T17:17:18+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "3C19E5A5C4",
     "at": "2026-09-28T17:17:18+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-28T17:21:44+08:00",
   "lastAt": "2026-09-28T17:16:55+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "2312E325FE",
     "at": "2026-09-28T17:21:44+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "348908669E",
     "at": "2026-09-28T17:16:55+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-28T17:16:55+08:00",
   "lastAt": "2026-09-28T17:16:55+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "D85AE278A1",
     "at": "2026-09-28T17:16:55+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-28T16:50:54+08:00",
   "lastAt": "2026-09-28T16:50:54+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "A5B47B1964",
     "at": "2026-09-28T16:50:54+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "基坑区 A",
   "severity": "critical",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-28T16:54:53+08:00",
   "lastAt": "2026-09-28T16:50:35+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "6C9B0C1F60",
     "at": "2026-09-28T16:54:53+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "A877EADAA5",
     "at": "2026-09-28T16:50:35+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-28T16:50:35+08:00",
   "lastAt": "2026-09-28T16:50:35+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "89062FCB23",
     "at": "2026-09-28T16:50:35+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "塔吊回转区 B",
   "severity": "critical",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-11T20:40:40+08:00",
   "lastAt": "2026-09-11T20:40:40+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "A334E98AAF",
     "at": "2026-09-11T20:40:40+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 2,
   "pending": 2,
   "firstAt": "2026-09-11T20:38:09+08:00",
   "lastAt": "2026-09-11T20:37:38+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "2F5DE85C1E",
     "at": "2026-09-11T20:38:09+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "F59C09F335",
     "at": "2026-09-11T20:37:38+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "人群聚集踩踏风险",
   "zone": "未分区",
   "severity": "warning",
   "count": 1,
   "pending": 1,
   "firstAt": "2026-09-11T20:31:18+08:00",
   "lastAt": "2026-09-11T20:31:18+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "995DACE790",
     "at": "2026-09-11T20:31:18+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "进入危险区域",
   "zone": "材料堆放区 C",
   "severity": "warning",
   "count": 3,
   "pending": 3,
   "firstAt": "2026-09-11T20:32:05+08:00",
   "lastAt": "2026-09-11T20:30:04+08:00",
   "sources": [
    "position_demo_01"
   ],
   "alerts": [
    {
     "id": "BB4AB77FA4",
     "at": "2026-09-11T20:32:05+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "943B731551",
     "at": "2026-09-11T20:31:14+08:00",
     "severity": "warning",
     "status": "pending"
    },
    {
     "id": "6C074AA5E6",
     "at": "2026-09-11T20:30:04+08:00",
     "severity": "warning",
     "status": "pending"
    }
   ]
  },
  {
   "family": "作业通道存在障碍物",
   "zone": "未分区",
   "severity": "critical",
   "count": 21,
   "pending": 21,
   "firstAt": "2026-09-11T20:40:51+08:00",
   "lastAt": "2026-09-11T20:25:35+08:00",
   "sources": [
    "vision_entrance_01"
   ],
   "alerts": [
    {
     "id": "61671E6441",
     "at": "2026-09-11T20:40:51+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "994AEAED7C",
     "at": "2026-09-11T20:40:14+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "9DB514AE5F",
     "at": "2026-09-11T20:39:40+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "1B477188FB",
     "at": "2026-09-11T20:39:15+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "C22AD3624E",
     "at": "2026-09-11T20:38:39+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "83459DDB57",
     "at": "2026-09-11T20:38:01+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "005A8595D1",
     "at": "2026-09-11T20:37:25+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "7922694C4E",
     "at": "2026-09-11T20:37:13+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "28A61D280F",
     "at": "2026-09-11T20:32:39+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "72FB3D5C43",
     "at": "2026-09-11T20:32:12+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "66C2C8EBD5",
     "at": "2026-09-11T20:31:34+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "569C8FBAF2",
     "at": "2026-09-11T20:30:53+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "FDA1843316",
     "at": "2026-09-11T20:30:17+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "296B98018B",
     "at": "2026-09-11T20:29:50+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "5CFDFA4E28",
     "at": "2026-09-11T20:29:12+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "CC6A4E7205",
     "at": "2026-09-11T20:28:33+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "F806E00622",
     "at": "2026-09-11T20:27:57+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "563BA5D3DB",
     "at": "2026-09-11T20:27:29+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "9B4745618D",
     "at": "2026-09-11T20:26:52+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "64B0ECEA60",
     "at": "2026-09-11T20:26:12+08:00",
     "severity": "critical",
     "status": "pending"
    },
    {
     "id": "07F7B70C6E",
     "at": "2026-09-11T20:25:35+08:00",
     "severity": "critical",
     "status": "pending"
    }
   ]
  }
 ],
 "/api/simulation/scenario": {
  "id": "normal",
  "label": "正常作业",
  "available": [
   {
    "id": "normal",
    "label": "正常作业"
   },
   {
    "id": "gas_combustible_warning",
    "label": "可燃气体预警"
   },
   {
    "id": "gas_combustible_critical",
    "label": "可燃气体严重泄漏"
   },
   {
    "id": "gas_toxic_exposure",
    "label": "有毒气体暴露"
   },
   {
    "id": "dust_risk",
    "label": "现场粉尘风险"
   },
   {
    "id": "high_work_risk",
    "label": "高处作业气象风险"
   },
   {
    "id": "geofence_breach",
    "label": "电子围栏越界"
   },
   {
    "id": "sensor_fault",
    "label": "传感器增益衰减"
   }
  ]
 },
 "/api/reports": [
  {
   "id": "D13B321E9E5D",
   "createdAt": "2026-09-11T15:16:10+08:00",
   "createdBy": "admin",
   "provider": "deepseek",
   "model": "deepseek-chat",
   "content": {
    "summary": "当前整体可控，但入口通道被机械占用是当前最要紧的风险，已连续触发多次通道障碍告警。模拟数据还显示个别工人进入基坑区A和塔吊回转区B等危险区域，需一并关注。",
    "riskLevel": "high",
    "findings": [
     "工地入口通道：视觉传感器01在2026-09-11 15:13至15:15连续3次检测到机械占用通道（置信度0.54-0.68，持续2.2-4.7秒），属严重级别，建议立即处理。",
     "基坑区A：模拟定位数据显示工人李四（W002）进入该区域（2026-09-11 15:13，确认2次），属严重级别，建议立即核实。",
     "塔吊回转区B：模拟定位数据显示工人王五（W003）进入该区域（2026-09-11 15:13，确认2次），属严重级别，建议立即核实。",
     "人群聚集：模拟定位数据显示3名工人中有1对距离过近（2026-09-11 15:13，确认2次），属警告级别，建议关注。",
     "材料堆放区C：模拟定位数据显示工人张三（W001）进入该区域（2026-09-10 13:47，确认2次），属警告级别，建议关注。",
     "电力系统：模拟电网数据显示电压、电流、负载等参数均在正常范围（负载57.4%，面板温度45.7°C），无异常。",
     "环境与健康：模拟粉尘、气体、温度、风速及工人健康数据均无异常，无跌倒或健康告警。"
    ],
    "recommendedActions": [
     "立即安排人员清理入口通道，移除占用通道的机械，确保通道畅通。",
     "立即核实基坑区A和塔吊回转区B的模拟定位告警，确认是否有工人误入，并加强现场警示与管控。",
     "复核入口通道视觉告警（2026-09-11 15:13-15:15）是否误报，检查摄像头遮挡或识别偏差。",
     "关注人群聚集告警，提醒工人保持安全距离，避免聚集。",
     "对材料堆放区C的进入告警进行复核，确认是否为授权作业。",
     "持续监控电力、环境及工人健康数据，确保无异常变化。"
    ],
    "dataLimitations": [
     "本报告中的电力、定位、高度、温度、粉尘、气体、风速及工人健康数据均为模拟数据（origin=simulation），非现场实测。",
     "入口通道视觉告警来自设备（origin=device），但视频源为cmot_samples.mp4，可能为样本视频，需现场核实。",
     "空气质量与天气数据为区域外部参考（origin=external_reference），来自Open-Meteo模型，非工地实测。",
     "当前阈值均为演示阈值（demoThresholdsOnly），未经安全法规认证，不得作为执法或责任判定依据。",
     "风速计数据质量标记为degraded，因实体传感器不可用，采用模拟回退。"
    ]
   }
  },
  {
   "id": "CB3FFE866E14",
   "createdAt": "2026-08-30T00:15:31+08:00",
   "createdBy": "admin",
   "provider": "deepseek",
   "model": "deepseek-chat",
   "content": {
    "summary": "当前整体可控，但需重点关注入口通道被机械占用的问题。视觉传感器多次检测到通道障碍物，已触发多条告警，可能影响人员通行安全。其他环境数据（温度、粉尘、气体等）均处于正常范围。",
    "riskLevel": "high",
    "findings": [
     "入口通道被机械占用，视觉传感器多次检测到障碍物（如bbox [102.8, 855.5, 360.2, 1019.6]），触发多条'作业通道存在障碍物'告警，建议立即清理。",
     "模拟数据（Kessoku可控演示场景）显示有工人进入材料堆放区C（如王五、李四），触发'进入危险区域'警告，需提醒工人注意区域安全。",
     "现场风速计数据为模拟数据（origin=simulation），风速1.57m/s，风向143°，当前风力较小，对作业影响不大。",
     "环境监测（温度、粉尘、气体）均为模拟数据，数值正常（温度28°C，PM10 28.8ug/m3，可燃气体0.4%LEL，CO 2.2ppm），未发现异常。",
     "工人健康数据为模拟数据，所有工人生命体征正常，无跌倒报警。"
    ],
    "recommendedActions": [
     "立即安排人员清理入口通道的机械障碍物，确保通道畅通。",
     "通知工人（王五、李四）离开材料堆放区C，并加强该区域的安全警示。",
     "复核视觉传感器告警是否误报，检查摄像头位置和检测算法。",
     "持续关注模拟数据变化，确保环境参数在正常范围。"
    ],
    "dataLimitations": [
     "部分数据为模拟数据（origin=simulation），包括高度、温度、粉尘、气体、位置、风速、电网、健康等，不代表现场实测。",
     "天气和空气质量数据为区域外部参考（origin=external_reference），来自Open-Meteo模型，非现场实测。",
     "当前阈值属于演示阈值，未经过安全法规认证，报告不构成法规判定。",
     "视觉检测数据来自设备（origin=device），但基于示例视频，可能不代表实时现场。"
    ]
   }
  },
  {
   "id": "157AF77E853F",
   "createdAt": "2026-08-30T00:09:46+08:00",
   "createdBy": "admin",
   "provider": "deepseek",
   "model": "deepseek-chat",
   "content": {
    "summary": "当前整体可控，但需重点关注入口通道被机械占用的问题。视觉传感器多次检测到通道障碍物，已触发多条告警，建议立即清理。",
    "riskLevel": "high",
    "findings": [
     "入口通道被机械占用，视觉传感器检测到障碍物，已触发多次告警，建议立即清理。",
     "工人王五进入塔吊回转区B，位置传感器模拟数据触发告警，建议确认其位置并提醒离开。",
     "工人李四进入材料堆放区C，位置传感器模拟数据触发警告，建议提醒其注意安全。",
     "电网运行正常，负载率53.7%，电压、频率均在正常范围，模拟数据。",
     "环境监测正常，温度28.2°C，PM10 31.8 µg/m³，可燃气体0.6% LEL，CO 2.9 ppm，均为模拟数据。",
     "工人健康数据正常，无跌倒或异常，模拟数据。"
    ],
    "recommendedActions": [
     "立即安排人员清理入口通道的机械障碍物，并检查是否影响通行。",
     "确认工人王五的位置，提醒其离开塔吊回转区B。",
     "提醒工人李四注意材料堆放区C的安全规定。",
     "复核视觉传感器告警是否误报，检查摄像头角度和识别阈值。"
    ],
    "dataLimitations": [
     "电网、环境、位置、健康等数据为模拟数据，非现场实测。",
     "天气和空气质量数据为区域外部参考，非现场实测。",
     "当前阈值仅为演示阈值，非安全法规标准。",
     "视觉传感器数据来自设备，但置信度中等，可能存在误报。"
    ]
   }
  },
  {
   "id": "13A583765EA9",
   "createdAt": "2026-08-28T23:49:25+08:00",
   "createdBy": "admin",
   "provider": "deepseek",
   "model": "deepseek-chat",
   "content": {
    "summary": "当前整体需重点关注。入口通道被机械占用，已触发多次通道障碍告警，同时有工人进入塔吊回转区和基坑区等危险区域，需立即处理。",
    "riskLevel": "critical",
    "findings": [
     "入口通道存在机械障碍物，视觉传感器多次检测到机械占用通道，最近一次在23:48，置信度0.60，需立即清理。",
     "工人李四进入塔吊回转区B，位置传感器模拟数据确认2次，需立即撤离。",
     "工人王五进入塔吊回转区B，位置传感器模拟数据确认2次，需立即撤离。",
     "工人李四进入基坑区A，位置传感器模拟数据确认2次，需立即撤离。"
    ],
    "recommendedActions": [
     "立即安排人员清理入口通道障碍物，并检查是否影响通行安全。",
     "立即通知并撤离进入塔吊回转区B的工人李四和王五，并确认区域安全。",
     "立即通知并撤离进入基坑区A的工人李四，并确认区域安全。",
     "复核所有告警，确认是否存在误报，并检查相关传感器状态。"
    ],
    "dataLimitations": [
     "位置、高度、温度、粉尘、气体、风速、电网、健康等数据均为模拟数据，仅用于演示，不代表现场实测。",
     "天气和空气质量数据来自区域外部参考模型，非现场实测。",
     "当前阈值仅为演示阈值，未经过安全法规认证，不构成法规判定依据。",
     "视觉检测数据来自设备，但置信度较低，可能存在误报，需人工复核。"
    ]
   }
  },
  {
   "id": "90B4DB536A9A",
   "createdAt": "2026-08-22T11:09:40+08:00",
   "createdBy": "admin",
   "provider": "deepseek",
   "model": "deepseek-chat",
   "content": {
    "summary": "当前整体需重点关注。模拟数据显示多名工人反复进入基坑区、塔吊回转区等危险区域，且出现可燃气体严重泄漏和火灾复合风险告警，需立即核实并处置。",
    "riskLevel": "critical",
    "findings": [
     "基坑区 A 多次告警：模拟数据中工人李四、张三多次进入基坑区 A，触发 critical 级告警，需立即核实并加强管控。",
     "塔吊回转区 B 多次告警：模拟数据中工人王五、李四、张三多次进入塔吊回转区 B，触发 critical 级告警，需立即核实并加强管控。",
     "可燃气体严重泄漏风险：模拟数据中可燃气体 LEL 达 24.2%，触发 critical 级告警，需立即排查泄漏源。",
     "火灾复合风险：模拟数据中温度 55.2°C 且每分钟上升 5°C，同时可燃气体 LEL 24.2%，触发 critical 级告警，需立即处置。",
     "电网负载偏高：模拟数据中电网负载 83.8%，超过演示阈值 80%，触发 warning 级告警，需关注用电安全。",
     "功率因数偏低：模拟数据中功率因数 0.8，触发 warning 级告警，需检查设备运行状态。",
     "材料堆放区 C 多次告警：模拟数据中多名工人进入材料堆放区 C，触发 warning 级告警，需提醒工人注意区域安全。"
    ],
    "recommendedActions": [
     "立即安排人员前往基坑区 A 和塔吊回转区 B，核实工人位置并劝离危险区域。",
     "立即排查可燃气体泄漏源，检查相关管道和设备，并加强通风。",
     "立即检查温度异常区域，确认是否存在火源，并准备消防器材。",
     "检查电网负载和功率因数，确认设备运行状态，必要时调整用电负荷。",
     "加强危险区域出入口管控，设置明显警示标识，并提醒工人注意安全。",
     "复核所有告警是否因模拟数据误报，并确认现场实际情况。"
    ],
    "dataLimitations": [
     "所有传感器数据均为模拟数据（origin=simulation），不代表现场实测。",
     "外部参考数据（origin=external_reference）来自 Open-Meteo 模型，仅作区域参考，非现场实测。",
     "当前阈值均为演示阈值，未经安全法规认证，不构成法规判定依据。",
     "风速计数据因硬件不可用而使用模拟数据，质量降级。"
    ]
   }
  },
  {
   "id": "32A00911881F",
   "createdAt": "2026-08-20T14:37:33+08:00",
   "createdBy": "admin",
   "provider": "deepseek",
   "model": "deepseek-chat",
   "content": {
    "summary": "当前整体可控，但需重点关注人员违规进入危险区域的问题。模拟数据显示，多名工人多次进入基坑区、塔吊回转区等高风险区域，已触发多次严重告警，需立即干预。",
    "riskLevel": "critical",
    "findings": [
     "基坑区 A：工人李四多次进入，最近一次在14:36，模拟定位数据触发严重告警，需立即核实并加强管控。",
     "塔吊回转区 B：工人王五、张三、李四多次进入，最近一次在14:36，模拟定位数据触发严重告警，需立即制止并加强警戒。",
     "材料堆放区 C：工人张三、王五、李四多次进入，最近一次在14:31，模拟定位数据触发警告，需提醒工人注意区域限制。",
     "环境监测：模拟数据显示温度、粉尘、气体等指标均在正常范围，无异常告警。",
     "天气参考：外部参考数据显示有小雨和阵风，可能影响作业安全，需关注天气变化。"
    ],
    "recommendedActions": [
     "立即安排安全员前往基坑区A和塔吊回转区B，制止工人进入并查明原因。",
     "对工人进行安全再教育，强调危险区域禁止进入的规定。",
     "检查危险区域围栏和警示标识是否完好，必要时增设物理隔离。",
     "复核所有告警记录，确认是否存在误报或系统问题。",
     "关注天气变化，如风力增强或降雨加大，需调整户外作业安排。"
    ],
    "dataLimitations": [
     "所有传感器数据均为模拟数据（origin=simulation），仅用于演示，不代表现场实测。",
     "天气和空气质量数据为区域外部参考（origin=external_reference），来自Open-Meteo模型，非现场实测。",
     "当前阈值仅为演示阈值，未经安全法规认证，不构成法规依据。",
     "报告不涉及事故责任判断，仅基于数据提供安全提示。"
    ]
   }
  },
  {
   "id": "7AE023AFBC57",
   "createdAt": "2026-08-19T13:59:51+08:00",
   "createdBy": "admin",
   "provider": "deepseek",
   "model": "deepseek-chat",
   "content": {
    "summary": "当前整体需重点关注。入口通道被机械占用，已触发多次通道障碍告警；同时有模拟数据提示工人进入危险区域，需立即核实。",
    "riskLevel": "critical",
    "findings": [
     "入口通道存在机械障碍物，视觉传感器多次告警（如最近一次置信度0.63，持续2.36秒），建议立即清理。",
     "模拟数据显示工人李四进入基坑区A，触发2次确认，需现场确认是否误报。",
     "模拟数据显示工人王五进入塔吊回转区B，触发2次确认，需现场确认是否误报。",
     "模拟数据显示工人张三进入材料堆放区C，触发2次确认，需现场确认是否误报。"
    ],
    "recommendedActions": [
     "立即安排人员清理入口通道的机械障碍物，并检查是否影响通行。",
     "现场核实李四、王五、张三的位置，确认是否误入危险区域，必要时进行安全教育。",
     "复核视觉传感器告警是否因机械正常作业导致，避免误报。"
    ],
    "dataLimitations": [
     "位置、健康、环境等数据为模拟数据，非现场实测。",
     "天气和空气质量数据为区域外部参考，非现场实测。",
     "当前阈值仅为演示阈值，未经过安全法规认证。"
    ]
   }
  },
  {
   "id": "D91878CF7CD5",
   "createdAt": "2026-08-18T20:15:34+08:00",
   "createdBy": "admin",
   "provider": "deepseek",
   "model": "deepseek-chat",
   "content": {
    "summary": "当前整体需重点关注。入口通道被机械占用，已触发多次通道障碍告警，存在人员通行受阻风险。其他环境监测数据（气体、粉尘、温度等）均处于正常范围。",
    "riskLevel": "high",
    "findings": [
     "入口通道存在机械障碍物，视觉传感器多次检测到机械占用通道，最近一次告警在20:15，置信度0.54，持续3.65秒，建议立即处理。",
     "入口通道障碍物告警频发，从19:59到20:15共发生多次，最高置信度0.87，持续7.28秒，表明问题持续存在，需排查原因。",
     "现场环境监测数据正常，可燃气体LEL 0.4%、CO 1.9ppm、PM10 27.7μg/m³、温度28°C，均未超演示阈值，无需担心。",
     "外部参考数据（模拟）显示天气有小雨，风速15.9km/h，可能影响户外作业，建议关注天气变化。"
    ],
    "recommendedActions": [
     "立即安排人员清理入口通道的机械障碍物，确保通道畅通。",
     "检查入口通道区域，确认是否有机械违规停放或作业，并加强管理。",
     "复核近期通道障碍告警，确认是否为误报或持续问题，并调整监控策略。",
     "关注天气变化，如降雨增强，需暂停户外作业并做好防护。"
    ],
    "dataLimitations": [
     "气体、粉尘、温度等传感器数据为模拟数据，仅用于演示，不代表现场实测。",
     "外部参考数据（天气、空气质量）来自Open-Meteo模型，为区域外部参考，非现场实测。",
     "当前阈值仅为演示阈值，未经安全法规认证，不能作为合规判断依据。",
     "视觉检测结果基于本地YOLO模型，可能存在误检，需人工复核。"
    ]
   }
  },
  {
   "id": "6780A3DEF8FF",
   "createdAt": "2026-08-18T17:11:57+08:00",
   "createdBy": "admin",
   "provider": "deepseek",
   "model": "deepseek-chat",
   "content": {
    "summary": "当前整体需重点关注。入口通道被机械占用，已触发多次通道障碍告警，且现场有人员活动，存在安全风险。",
    "riskLevel": "high",
    "findings": [
     "入口通道被机械占用，已触发多次通道障碍告警（如告警ID 7F0E296074，置信度0.68，持续4.5秒），建议立即处理。",
     "告警期间检测到人员在场（如告警ID 7F0E296074中检测到1人），存在人员与机械交叉风险，建议核实并加强管控。",
     "模拟数据显示环境参数正常（温度28.1°C，PM10 29.4 µg/m³，可燃气体0.5% LEL），但仅为模拟数据，不代表现场实测。"
    ],
    "recommendedActions": [
     "立即安排人员清理入口通道障碍物，并确认通道畅通。",
     "复核所有待处理告警（共20条），确认是否误报，并检查现场是否仍有机械占用。",
     "加强入口通道的巡查，确保无机械或物料长期占用。"
    ],
    "dataLimitations": [
     "本次报告中的环境传感器数据（位置、高度、温度、粉尘、气体）均为模拟数据，非现场实测。",
     "天气和空气质量数据来自区域外部参考（Open-Meteo模型），非现场实测。",
     "当前阈值仅为演示阈值，未经安全法规认证，不构成法规判定。"
    ]
   }
  },
  {
   "id": "A5461F8F8FCE",
   "createdAt": "2026-08-18T17:11:07+08:00",
   "createdBy": "admin",
   "provider": "deepseek",
   "model": "deepseek-chat",
   "content": {
    "summary": "当前整体可控，但入口通道存在机械障碍物，已触发多次告警，需重点关注。",
    "riskLevel": "high",
    "findings": [
     "入口通道被机械占用，视觉传感器多次检测到障碍物，最近一次在16:59，置信度0.68，持续4.5秒，建议立即处理。",
     "入口通道障碍物告警频繁，从11:09到16:59共发生多次，可能影响人员通行，建议排查原因。",
     "模拟数据显示人员定位在围栏内，高度0.5米，温度28°C，粉尘PM10 27.6 µg/m³，可燃气体0.4%LEL，一氧化碳1.9 ppm，均在演示阈值内，未见异常。",
     "外部参考天气显示温度28.4°C，风速13.9 km/h，阵风31.7 km/h，无降水，空气质量PM2.5 13.4 µg/m³，PM10 16.4 µg/m³，一氧化碳238.0 µg/m³，均属正常范围。"
    ],
    "recommendedActions": [
     "立即安排人员清理入口通道的机械障碍物，确保通道畅通。",
     "复核11:09至16:59期间的告警记录，确认是否为同一障碍物持续存在或多次出现。",
     "检查入口通道区域，确保无其他潜在障碍物，并加强现场管理。"
    ],
    "dataLimitations": [
     "本报告中的位置、高度、温度、粉尘、气体数据均为模拟数据，非现场实测。",
     "天气和空气质量数据来自区域外部参考，非现场实测。",
     "当前阈值仅为演示阈值，不构成安全法规标准。",
     "视觉检测告警来自设备端，但置信度未达100%，可能存在误报。"
    ]
   }
  },
  {
   "id": "51F0977E00D2",
   "createdAt": "2026-08-18T17:06:20+08:00",
   "createdBy": "admin",
   "provider": "deepseek",
   "model": "deepseek-chat",
   "content": {
    "summary": "澳门演示工地于2026-08-18 17:06（UTC+8）生成安全报告。现场遥测数据均为模拟数据（origin=simulation），显示位置在电子围栏内、作业高度0.5米、温度27.9°C、PM10 27.0 µg/m³、可燃气体0.3% LEL、CO 1.7 ppm，均处于正常范围。外部参考数据（origin=external_reference）显示天气温度28.4°C、风速13.9 km/h、阵风31.7 km/h、无降水，空气质量PM2.5 13.4 µg/m³、PM10 16.4 µg/m³、CO 238.0 µg/m³。视觉传感器（origin=device）检测到多起作业通道障碍物事件（严重级别：critical），共25条待处理警报，时间跨度为11:10至16:59（UTC+8），检测到机械（machinery）位于入口通道，部分事件伴随人员存在。",
    "riskLevel": "high",
    "findings": [
     {
      "category": "telemetry",
      "origin": "simulation",
      "message": "位置传感器（position_demo_01）报告位于电子围栏内，轨迹为模拟数据。",
      "value": "inside_geofence: true"
     },
     {
      "category": "telemetry",
      "origin": "simulation",
      "message": "作业高度传感器（height_demo_01）报告相对高度0.5米，为模拟数据。",
      "value": "relative_height_m: 0.5"
     },
     {
      "category": "telemetry",
      "origin": "simulation",
      "message": "温度传感器（temperature_demo_01）报告温度27.9°C，升温速率0°C/min，为模拟数据。",
      "value": "temperature_c: 27.9"
     },
     {
      "category": "telemetry",
      "origin": "simulation",
      "message": "扬尘传感器（dust_demo_01）报告PM10为27.0 µg/m³，为模拟数据。",
      "value": "pm10_ug_m3: 27.0"
     },
     {
      "category": "telemetry",
      "origin": "simulation",
      "message": "气体传感器（gas_demo_01）报告可燃气体0.3% LEL，CO 1.7 ppm，为模拟数据。",
      "value": "combustible_lel_percent: 0.3, co_ppm: 1.7"
     },
     {
      "category": "external_reference",
      "origin": "external_reference",
      "message": "天气参考（Open-Meteo）报告温度28.4°C，风速13.9 km/h，阵风31.7 km/h，无降水，天气代码3。",
      "value": "temperature_2m: 28.4, wind_speed_10m: 13.9, wind_gusts_10m: 31.7, precipitation: 0.0"
     },
     {
      "category": "external_reference",
      "origin": "external_reference",
      "message": "空气质量参考（Open-Meteo）报告PM2.5为13.4 µg/m³，PM10为16.4 µg/m³，CO为238.0 µg/m³。",
      "value": "pm2_5: 13.4, pm10: 16.4, carbon_monoxide: 238.0"
     },
     {
      "category": "vision_alert",
      "origin": "device",
      "message": "视觉传感器（工地入口视觉传感器 01）检测到25起作业通道障碍物事件，严重级别均为critical，时间从11:10到16:59（UTC+8），检测到机械（machinery）位于入口通道，部分事件伴随人员存在。",
      "value": "alert_count: 25, violation_type: 作业通道存在障碍物"
     }
    ],
    "recommendedActions": [
     {
      "action": "立即清理入口通道的障碍物，确保通道畅通。",
      "priority": "high",
      "relatedAlertIds": [
       "7F0E296074",
       "C53B6AB9D7",
       "658E841333",
       "B851B82124",
       "1AEC3B9A29",
       "0769D00631",
       "5BEAD95D17",
       "8539BEB6F1",
       "E13EAD9012",
       "343BC56346",
       "456165439E",
       "7A25A1AE00",
       "4940076E3B",
       "7928B565DA",
       "74BAB72C46",
       "93E011B904",
       "A0FA98AE94",
       "8C2DFF77B6",
       "B4ED091623",
       "1407457EAA",
       "50A6B4A0DD",
       "A4E1F1E3CF",
       "D00AF618D3",
       "1A3936ECC9",
       "8A5F47AFDC",
       "F395B1D08C",
       "B57F6A4EFE",
       "DE1E116ED8",
       "EDC0ADD53E",
       "B9686EDB47"
      ]
     },
     {
      "action": "复核视觉警报的准确性，确认障碍物类型和位置，并检查是否存在人员安全风险。",
      "priority": "medium",
      "relatedAlertIds": [
       "7F0E296074",
       "C53B6AB9D7",
       "658E841333",
       "B851B82124",
       "1AEC3B9A29",
       "0769D00631",
       "5BEAD95D17",
       "8539BEB6F1",
       "E13EAD9012",
       "343BC56346",
       "456165439E",
       "7A25A1AE00",
       "4940076E3B",
       "7928B565DA",
       "74BAB72C46",
       "93E011B904",
       "A0FA98AE94",
       "8C2DFF77B6",
       "B4ED091623",
       "1407457EAA",
       "50A6B4A0DD",
       "A4E1F1E3CF",
       "D00AF618D3",
       "1A3936ECC9",
       "8A5F47AFDC",
       "F395B1D08C",
       "B57F6A4EFE",
       "DE1E116ED8",
       "EDC0ADD53E",
       "B9686EDB47"
      ]
     },
     {
      "action": "加强入口通道的监控，防止障碍物再次出现。",
      "priority": "medium",
      "relatedAlertIds": []
     }
    ],
    "dataLimitations": [
     "遥测数据（位置、高度、温度、扬尘、气体）均为模拟数据（origin=simulation），仅用于演示，不代表真实测量。",
     "天气和空气质量数据为外部参考（origin=external_reference），来自Open-Meteo模型，可能无法完全反映现场实际情况。",
     "视觉警报（origin=device）基于本地YOLO模型，置信度在0.528至0.680之间，存在误检或漏检可能。",
     "演示阈值仅用于演示，不构成法规判定。"
    ]
   }
  },
  {
   "id": "0AA318D6E015",
   "createdAt": "2026-08-18T17:05:25+08:00",
   "createdBy": "admin",
   "provider": "deepseek",
   "model": "deepseek-chat",
   "content": {
    "summary": "澳门演示工地于2026-08-18 17:05（UTC+8）生成安全报告。环境遥测数据（模拟）显示正常作业状态：人员位于地理围栏内，作业高度0.5米，温度28.1°C，PM10 29.6 µg/m³，可燃气体0.5% LEL，CO 2.4 ppm。外部参考数据（Open-Meteo）显示气温28.4°C，风速13.9 km/h，阵风31.7 km/h，无降水，PM2.5 13.4 µg/m³，PM10 16.4 µg/m³。视觉传感器（设备来源）检测到多起作业通道障碍物事件，均为待处理状态，严重程度为critical。",
    "riskLevel": "high",
    "findings": [
     {
      "finding": "模拟遥测数据（origin=simulation）显示人员位于地理围栏内，作业高度0.5米，温度28.1°C，PM10 29.6 µg/m³，可燃气体0.5% LEL，CO 2.4 ppm，均处于正常范围。",
      "source": "Kessoku 可控演示场景",
      "type": "telemetry",
      "severity": "info"
     },
     {
      "finding": "外部参考数据（origin=external_reference）显示气温28.4°C，风速13.9 km/h，阵风31.7 km/h，无降水，PM2.5 13.4 µg/m³，PM10 16.4 µg/m³。",
      "source": "Open-Meteo 天气模型 / Open-Meteo 空气质量模型",
      "type": "external_reference",
      "severity": "info"
     },
     {
      "finding": "视觉传感器（origin=device）检测到多起作业通道障碍物事件，共25起，均标记为critical，状态为pending。事件发生在2026-08-18 11:10至16:59（UTC+8），涉及机械（machinery）在入口通道（entrance-corridor）中，持续时间2.18至4.54秒，置信度0.528至0.680。部分事件中检测到人员（person_count=1），但未关联到障碍物。",
      "source": "工地入口视觉传感器 01",
      "type": "vision_detection",
      "severity": "critical"
     }
    ],
    "recommendedActions": [
     {
      "action": "立即检查工地入口通道，移除或重新放置障碍物，确保通道畅通。",
      "priority": "high"
     },
     {
      "action": "审查视觉传感器检测到的障碍物事件，确认是否为误报或真实风险，并采取相应措施。",
      "priority": "high"
     },
     {
      "action": "持续监控模拟遥测数据，确保环境参数在正常范围内。",
      "priority": "medium"
     },
     {
      "action": "参考外部天气和空气质量数据，评估对作业的影响，特别是风速和阵风。",
      "priority": "medium"
     }
    ],
    "dataLimitations": [
     "遥测数据（位置、高度、温度、粉尘、气体）为模拟数据（origin=simulation），仅用于演示，不代表真实测量。",
     "外部参考数据（天气、空气质量）来自Open-Meteo模型，为区域参考，非现场实测。",
     "视觉检测事件来自设备（origin=device），但置信度在0.528至0.680之间，存在误报可能。",
     "所有阈值均为演示阈值，不构成监管判定。",
     "报告基于提供的数据，未包含其他未提供的传感器或现场信息。"
    ]
   }
  }
 ],
 "/api/settings/ai": {
  "provider": "deepseek",
  "baseUrl": "https://api.deepseek.com",
  "model": "deepseek-chat",
  "apiKeyMasked": "sk-e********9de4",
  "apiKeyConfigured": true,
  "configured": true
 },
 "/api/site/danger-zones": {
  "zones": [
   {
    "id": "zone_pit_a",
    "label": "基坑区 A",
    "severity": "critical",
    "points": [
     [
      0.14,
      0.44
     ],
     [
      0.26,
      0.44
     ],
     [
      0.26,
      0.58
     ],
     [
      0.14,
      0.58
     ]
    ]
   },
   {
    "id": "zone_crane_b",
    "label": "塔吊回转区 B",
    "severity": "critical",
    "points": [
     [
      0.3,
      0.3
     ],
     [
      0.42,
      0.3
     ],
     [
      0.42,
      0.42
     ],
     [
      0.3,
      0.42
     ]
    ]
   },
   {
    "id": "zone_material_c",
    "label": "材料堆放区 C",
    "severity": "warning",
    "points": [
     [
      0.55,
      0.12
     ],
     [
      0.7,
      0.12
     ],
     [
      0.7,
      0.24
     ],
     [
      0.55,
      0.24
     ]
    ]
   },
   {
    "id": "zone_shed_d",
    "label": "临时加工棚 D",
    "severity": "warning",
    "points": [
     [
      0.62,
      0.6
     ],
     [
      0.74,
      0.6
     ],
     [
      0.74,
      0.72
     ],
     [
      0.62,
      0.72
     ]
    ]
   },
   {
    "id": "zone_curing_e",
    "label": "混凝土养护区 E",
    "severity": "info",
    "points": [
     [
      0.44,
      0.74
     ],
     [
      0.56,
      0.74
     ],
     [
      0.56,
      0.84
     ],
     [
      0.44,
      0.84
     ]
    ]
   }
  ]
 },
 "/api/site/thresholds": {
  "defaults": {
   "combustible_critical_lel": 20,
   "combustible_warning_lel": 10,
   "crowd_distance_normalized": 0.25,
   "crowd_min_workers": 2,
   "dispersion_spread_deg": 40,
   "dust_warning_pm10": 150,
   "dust_wind_mps": 8,
   "fire_rise_c_per_min": 3,
   "fire_temperature_c": 50,
   "grid_frequency_high_hz": 50.8,
   "grid_frequency_low_hz": 49.2,
   "grid_overload_critical_percent": 92,
   "grid_overload_warning_percent": 80,
   "grid_panel_temp_warning_c": 58,
   "grid_power_factor_warning": 0.85,
   "grid_voltage_high_v": 420,
   "grid_voltage_low_v": 340,
   "high_wind_gust_kph": 30,
   "high_work_meters": 3,
   "rain_mm": 0.5,
   "toxic_co_warning_ppm": 50,
   "twa_co_warning_ppm": 20,
   "twa_dust_warning_pm10": 100,
   "worker_blood_oxygen_warning": 90,
   "worker_body_temp_warning_c": 37.8,
   "worker_heart_rate_warning_bpm": 120
  },
  "overrides": {
   "combustible_warning_lel": 10,
   "combustible_critical_lel": 20,
   "high_work_meters": 3,
   "worker_heart_rate_warning_bpm": 120,
   "crowd_min_workers": 2
  },
  "effective": {
   "combustible_critical_lel": 20,
   "combustible_warning_lel": 10,
   "crowd_distance_normalized": 0.25,
   "crowd_min_workers": 2,
   "dispersion_spread_deg": 40,
   "dust_warning_pm10": 150,
   "dust_wind_mps": 8,
   "fire_rise_c_per_min": 3,
   "fire_temperature_c": 50,
   "grid_frequency_high_hz": 50.8,
   "grid_frequency_low_hz": 49.2,
   "grid_overload_critical_percent": 92,
   "grid_overload_warning_percent": 80,
   "grid_panel_temp_warning_c": 58,
   "grid_power_factor_warning": 0.85,
   "grid_voltage_high_v": 420,
   "grid_voltage_low_v": 340,
   "high_wind_gust_kph": 30,
   "high_work_meters": 3,
   "rain_mm": 0.5,
   "toxic_co_warning_ppm": 50,
   "twa_co_warning_ppm": 20,
   "twa_dust_warning_pm10": 100,
   "worker_blood_oxygen_warning": 90,
   "worker_body_temp_warning_c": 37.8,
   "worker_heart_rate_warning_bpm": 120
  },
  "engineValues": {
   "combustible_critical_lel": 20,
   "combustible_warning_lel": 10,
   "crowd_distance_normalized": 0.25,
   "crowd_min_workers": 2,
   "dispersion_spread_deg": 40,
   "dust_warning_pm10": 150,
   "dust_wind_mps": 8,
   "fire_rise_c_per_min": 3,
   "fire_temperature_c": 50,
   "grid_frequency_high_hz": 50.8,
   "grid_frequency_low_hz": 49.2,
   "grid_overload_critical_percent": 92,
   "grid_overload_warning_percent": 80,
   "grid_panel_temp_warning_c": 58,
   "grid_power_factor_warning": 0.85,
   "grid_voltage_high_v": 420,
   "grid_voltage_low_v": 340,
   "high_wind_gust_kph": 30,
   "high_work_meters": 3,
   "rain_mm": 0.5,
   "toxic_co_warning_ppm": 50,
   "twa_co_warning_ppm": 20,
   "twa_dust_warning_pm10": 100,
   "worker_blood_oxygen_warning": 90,
   "worker_body_temp_warning_c": 37.8,
   "worker_heart_rate_warning_bpm": 120
  },
  "site": "macau_demo"
 },
 "/api/site/config": {
  "active": "macau_demo",
  "config": {
   "site": {
    "name": "澳门演示工地",
    "location": "Macau",
    "timezone": "Asia/Macau",
    "latitude": 22.1987,
    "longitude": 113.5439,
    "workers": 100,
    "isDemoSite": true,
    "bounds": {
     "latMin": 22.1982,
     "latMax": 22.1995,
     "lonMin": 113.5431,
     "lonMax": 113.5444
    },
    "thresholdNote": "演示口径，非法规判定"
   },
   "zones": [
    {
     "id": "zone_pit_a",
     "label": "基坑区 A",
     "severity": "critical",
     "geoPoints": [
      [
       22.198772,
       113.543282
      ],
      [
       22.198772,
       113.543438
      ],
      [
       22.198954,
       113.543438
      ],
      [
       22.198954,
       113.543282
      ]
     ],
     "points": [
      [
       0.14,
       0.44
      ],
      [
       0.26,
       0.44
      ],
      [
       0.26,
       0.58
      ],
      [
       0.14,
       0.58
      ]
     ],
     "center": [
      22.198863,
      113.54336
     ]
    },
    {
     "id": "zone_crane_b",
     "label": "塔吊回转区 B",
     "severity": "critical",
     "geoPoints": [
      [
       22.19859,
       113.54349
      ],
      [
       22.19859,
       113.543646
      ],
      [
       22.198746,
       113.543646
      ],
      [
       22.198746,
       113.54349
      ]
     ],
     "points": [
      [
       0.3,
       0.3
      ],
      [
       0.42,
       0.3
      ],
      [
       0.42,
       0.42
      ],
      [
       0.3,
       0.42
      ]
     ],
     "center": [
      22.198668,
      113.543568
     ]
    },
    {
     "id": "zone_material_c",
     "label": "材料堆放区 C",
     "severity": "warning",
     "geoPoints": [
      [
       22.198356,
       113.543815
      ],
      [
       22.198356,
       113.54401
      ],
      [
       22.198512,
       113.54401
      ],
      [
       22.198512,
       113.543815
      ]
     ],
     "points": [
      [
       0.55,
       0.12
      ],
      [
       0.7,
       0.12
      ],
      [
       0.7,
       0.24
      ],
      [
       0.55,
       0.24
      ]
     ],
     "center": [
      22.198434,
      113.543913
     ]
    },
    {
     "id": "zone_shed_d",
     "label": "临时加工棚 D",
     "severity": "warning",
     "geoPoints": [
      [
       22.19898,
       113.543906
      ],
      [
       22.19898,
       113.544062
      ],
      [
       22.199136,
       113.544062
      ],
      [
       22.199136,
       113.543906
      ]
     ],
     "points": [
      [
       0.62,
       0.6
      ],
      [
       0.74,
       0.6
      ],
      [
       0.74,
       0.72
      ],
      [
       0.62,
       0.72
      ]
     ],
     "center": [
      22.199058,
      113.543984
     ]
    },
    {
     "id": "zone_curing_e",
     "label": "混凝土养护区 E",
     "severity": "info",
     "geoPoints": [
      [
       22.199162,
       113.543672
      ],
      [
       22.199162,
       113.543828
      ],
      [
       22.199292,
       113.543828
      ],
      [
       22.199292,
       113.543672
      ]
     ],
     "points": [
      [
       0.44,
       0.74
      ],
      [
       0.56,
       0.74
      ],
      [
       0.56,
       0.84
      ],
      [
       0.44,
       0.84
      ]
     ],
     "center": [
      22.199227,
      113.54375
     ]
    }
   ],
   "fleet": [
    {
     "id": "drone_01",
     "kind": "drone",
     "home": [
      0.14,
      0.16
     ]
    },
    {
     "id": "drone_02",
     "kind": "drone",
     "home": [
      0.86,
      0.18
     ]
    },
    {
     "id": "robot_01",
     "kind": "robot",
     "home": [
      0.2,
      0.8
     ]
    },
    {
     "id": "robot_02",
     "kind": "robot",
     "home": [
      0.8,
      0.82
     ]
    },
    {
     "id": "cam_01",
     "kind": "camera",
     "home": [
      0.1,
      0.5
     ]
    },
    {
     "id": "cam_02",
     "kind": "camera",
     "home": [
      0.9,
      0.52
     ]
    },
    {
     "id": "cam_03",
     "kind": "camera",
     "home": [
      0.5,
      0.06
     ]
    }
   ],
   "dispatch": {
    "policy": "mi",
    "weights": {
     "severity": 1,
     "capability": 1,
     "risk": 0.8,
     "staleness": 0.45,
     "battery": 0.6
    }
   },
   "thresholds": {
    "combustible_warning_lel": 10,
    "combustible_critical_lel": 20,
    "high_work_meters": 3,
    "worker_heart_rate_warning_bpm": 120,
    "crowd_min_workers": 2
   },
   "_resolvedId": "macau_demo",
   "bounds": {
    "latMin": 22.1982,
    "latMax": 22.1995,
    "lonMin": 113.5431,
    "lonMax": 113.5444
   }
  }
 },
 "/api/videos": [
  {
   "id": "460ba86e6b2a49a1aab9b4eabe48aeeb",
   "original_name": "vc_detect_scene.mp4",
   "stored_name": "460ba86e6b2a49a1aab9b4eabe48aeeb.mp4",
   "duration_seconds": 8,
   "created_at": "2026-10-01T00:09:32+08:00",
   "is_selected": 1
  },
  {
   "id": "c8bb4c53c15b4697a161296f708d97de",
   "original_name": "cmot_samples.mp4",
   "stored_name": "c8bb4c53c15b4697a161296f708d97de.mp4",
   "duration_seconds": 11.6,
   "created_at": "2026-08-18T10:20:20+08:00",
   "is_selected": 0
  }
 ],
 "/api/safety/fusion": {
  "twa": {
   "co_ppm": 1.99,
   "dust_ug_m3": 27.96,
   "windowSeconds": 900
  },
  "dispersion": {
   "wind_speed_mps": 4.08,
   "wind_from_deg": 340,
   "leakActive": false,
   "affectedZones": []
  },
  "crowd": {
   "workersCount": 3,
   "densityPerNorm": 3,
   "stampedeThreshold": 2
  }
 },
 "/api/drills": [],
 "/api/wearables": [],
 "/api/scheduling": {
  "round": 86,
  "riskLevel": 0.099,
  "activeSensors": [
   "gas",
   "temp"
  ],
  "ellHat": {
   "gas": 1,
   "co": 1,
   "dust": 5,
   "temp": 1,
   "humidity": 1,
   "wind": 1
  },
  "bandwidthSaving": 0.9012,
  "triggered": [
   "dust"
  ],
  "snapshot": {
   "gas": 0.3,
   "co": 1.3,
   "dust": 25.3,
   "temp": 27.9,
   "wind": 4.87
  }
 },
 "/api/vision/forecast": {
  "targets": [
   {
    "id": "W001",
    "class": "person",
    "current": {
     "x": 0.5839,
     "y": 0.2251
    },
    "velocity": {
     "vx": 0.002,
     "vy": 0.0017
    },
    "trajectory": [
     {
      "t": 1,
      "x": 0.586,
      "y": 0.2268,
      "sigma": 0.4148
     },
     {
      "t": 2,
      "x": 0.588,
      "y": 0.2285,
      "sigma": 0.5774
     },
     {
      "t": 3,
      "x": 0.59,
      "y": 0.2302,
      "sigma": 0.7817
     },
     {
      "t": 4,
      "x": 0.592,
      "y": 0.2319,
      "sigma": 1.0223
     },
     {
      "t": 5,
      "x": 0.5941,
      "y": 0.2336,
      "sigma": 1.2944
     },
     {
      "t": 6,
      "x": 0.5961,
      "y": 0.2353,
      "sigma": 1.5944
     },
     {
      "t": 7,
      "x": 0.5981,
      "y": 0.237,
      "sigma": 1.9197
     },
     {
      "t": 8,
      "x": 0.6001,
      "y": 0.2387,
      "sigma": 2.2681
     },
     {
      "t": 9,
      "x": 0.6022,
      "y": 0.2404,
      "sigma": 2.6382
     },
     {
      "t": 10,
      "x": 0.6042,
      "y": 0.2421,
      "sigma": 3.0286
     },
     {
      "t": 11,
      "x": 0.6062,
      "y": 0.2438,
      "sigma": 3.4381
     },
     {
      "t": 12,
      "x": 0.6082,
      "y": 0.2454,
      "sigma": 3.8659
     },
     {
      "t": 13,
      "x": 0.6103,
      "y": 0.2471,
      "sigma": 4.3112
     },
     {
      "t": 14,
      "x": 0.6123,
      "y": 0.2488,
      "sigma": 4.7732
     },
     {
      "t": 15,
      "x": 0.6143,
      "y": 0.2505,
      "sigma": 5.2514
     },
     {
      "t": 16,
      "x": 0.6163,
      "y": 0.2522,
      "sigma": 5.7452
     },
     {
      "t": 17,
      "x": 0.6184,
      "y": 0.2539,
      "sigma": 6.2541
     },
     {
      "t": 18,
      "x": 0.6204,
      "y": 0.2556,
      "sigma": 6.7777
     },
     {
      "t": 19,
      "x": 0.6224,
      "y": 0.2573,
      "sigma": 7.3155
     },
     {
      "t": 20,
      "x": 0.6244,
      "y": 0.259,
      "sigma": 7.8671
     },
     {
      "t": 21,
      "x": 0.6265,
      "y": 0.2607,
      "sigma": 8.4323
     },
     {
      "t": 22,
      "x": 0.6285,
      "y": 0.2624,
      "sigma": 9.0106
     },
     {
      "t": 23,
      "x": 0.6305,
      "y": 0.2641,
      "sigma": 9.6019
     },
     {
      "t": 24,
      "x": 0.6325,
      "y": 0.2658,
      "sigma": 10.2057
     },
     {
      "t": 25,
      "x": 0.6346,
      "y": 0.2675,
      "sigma": 10.8219
     },
     {
      "t": 26,
      "x": 0.6366,
      "y": 0.2691,
      "sigma": 11.4502
     },
     {
      "t": 27,
      "x": 0.6386,
      "y": 0.2708,
      "sigma": 12.0904
     },
     {
      "t": 28,
      "x": 0.6406,
      "y": 0.2725,
      "sigma": 12.7422
     },
     {
      "t": 29,
      "x": 0.6427,
      "y": 0.2742,
      "sigma": 13.4055
     },
     {
      "t": 30,
      "x": 0.6447,
      "y": 0.2759,
      "sigma": 14.08
     }
    ],
    "history": [
     {
      "x": 0.3846,
      "y": 0.3846
     },
     {
      "x": 0.3891,
      "y": 0.3727
     },
     {
      "x": 0.3933,
      "y": 0.3614
     },
     {
      "x": 0.3973,
      "y": 0.3507
     },
     {
      "x": 0.4011,
      "y": 0.3405
     },
     {
      "x": 0.4047,
      "y": 0.3309
     },
     {
      "x": 0.4081,
      "y": 0.3217
     },
     {
      "x": 0.4114,
      "y": 0.3131
     },
     {
      "x": 0.4144,
      "y": 0.3049
     },
     {
      "x": 0.4173,
      "y": 0.2971
     },
     {
      "x": 0.4201,
      "y": 0.2897
     },
     {
      "x": 0.4227,
      "y": 0.2826
     },
     {
      "x": 0.4252,
      "y": 0.276
     },
     {
      "x": 0.4276,
      "y": 0.2697
     },
     {
      "x": 0.4298,
      "y": 0.2637
     },
     {
      "x": 0.4319,
      "y": 0.258
     },
     {
      "x": 0.4339,
      "y": 0.2527
     },
     {
      "x": 0.4358,
      "y": 0.2476
     },
     {
      "x": 0.4376,
      "y": 0.2427
     },
     {
      "x": 0.4394,
      "y": 0.2381
     },
     {
      "x": 0.441,
      "y": 0.2338
     },
     {
      "x": 0.4425,
      "y": 0.2296
     },
     {
      "x": 0.444,
      "y": 0.2257
     },
     {
      "x": 0.4454,
      "y": 0.222
     },
     {
      "x": 0.4467,
      "y": 0.2185
     },
     {
      "x": 0.4479,
      "y": 0.2152
     },
     {
      "x": 0.4491,
      "y": 0.212
     },
     {
      "x": 0.4502,
      "y": 0.209
     },
     {
      "x": 0.4513,
      "y": 0.2061
     },
     {
      "x": 0.4523,
      "y": 0.2034
     },
     {
      "x": 0.4533,
      "y": 0.2009
     },
     {
      "x": 0.4542,
      "y": 0.1985
     },
     {
      "x": 0.455,
      "y": 0.1962
     },
     {
      "x": 0.4559,
      "y": 0.194
     },
     {
      "x": 0.4566,
      "y": 0.1919
     },
     {
      "x": 0.4574,
      "y": 0.1899
     },
     {
      "x": 0.4581,
      "y": 0.1881
     },
     {
      "x": 0.4581,
      "y": 0.1881
     },
     {
      "x": 0.4581,
      "y": 0.1881
     },
     {
      "x": 0.4581,
      "y": 0.1881
     },
     {
      "x": 0.4581,
      "y": 0.1881
     },
     {
      "x": 0.4581,
      "y": 0.1881
     },
     {
      "x": 0.4612,
      "y": 0.1863
     },
     {
      "x": 0.4642,
      "y": 0.1846
     },
     {
      "x": 0.4671,
      "y": 0.183
     },
     {
      "x": 0.4698,
      "y": 0.1815
     },
     {
      "x": 0.4724,
      "y": 0.1801
     },
     {
      "x": 0.4748,
      "y": 0.1787
     },
     {
      "x": 0.4771,
      "y": 0.1775
     },
     {
      "x": 0.4793,
      "y": 0.1762
     },
     {
      "x": 0.4814,
      "y": 0.1751
     },
     {
      "x": 0.4833,
      "y": 0.174
     },
     {
      "x": 0.4852,
      "y": 0.1729
     },
     {
      "x": 0.487,
      "y": 0.172
     },
     {
      "x": 0.487,
      "y": 0.172
     },
     {
      "x": 0.487,
      "y": 0.172
     },
     {
      "x": 0.49,
      "y": 0.171
     },
     {
      "x": 0.4929,
      "y": 0.1701
     },
     {
      "x": 0.4957,
      "y": 0.1693
     },
     {
      "x": 0.4983,
      "y": 0.1685
     },
     {
      "x": 0.5008,
      "y": 0.1677
     },
     {
      "x": 0.5031,
      "y": 0.167
     },
     {
      "x": 0.5053,
      "y": 0.1663
     },
     {
      "x": 0.5075,
      "y": 0.1657
     },
     {
      "x": 0.5095,
      "y": 0.1651
     },
     {
      "x": 0.5114,
      "y": 0.1645
     },
     {
      "x": 0.5114,
      "y": 0.1645
     },
     {
      "x": 0.5114,
      "y": 0.1645
     },
     {
      "x": 0.5114,
      "y": 0.1645
     },
     {
      "x": 0.5114,
      "y": 0.1645
     },
     {
      "x": 0.5114,
      "y": 0.1645
     },
     {
      "x": 0.5114,
      "y": 0.1645
     },
     {
      "x": 0.5114,
      "y": 0.1645
     },
     {
      "x": 0.5204,
      "y": 0.1721
     },
     {
      "x": 0.529,
      "y": 0.1792
     },
     {
      "x": 0.5371,
      "y": 0.186
     },
     {
      "x": 0.5448,
      "y": 0.1924
     },
     {
      "x": 0.5521,
      "y": 0.1985
     },
     {
      "x": 0.559,
      "y": 0.2043
     },
     {
      "x": 0.5656,
      "y": 0.2098
     },
     {
      "x": 0.5718,
      "y": 0.215
     },
     {
      "x": 0.5777,
      "y": 0.2199
     },
     {
      "x": 0.5833,
      "y": 0.2246
     }
    ]
   },
   {
    "id": "W002",
    "class": "person",
    "current": {
     "x": 0.4985,
     "y": 0.3382
    },
    "velocity": {
     "vx": -0.0008,
     "vy": -0.0002
    },
    "trajectory": [
     {
      "t": 1,
      "x": 0.4977,
      "y": 0.3381,
      "sigma": 0.4148
     },
     {
      "t": 2,
      "x": 0.4969,
      "y": 0.3379,
      "sigma": 0.5774
     },
     {
      "t": 3,
      "x": 0.4962,
      "y": 0.3378,
      "sigma": 0.7817
     },
     {
      "t": 4,
      "x": 0.4954,
      "y": 0.3376,
      "sigma": 1.0223
     },
     {
      "t": 5,
      "x": 0.4946,
      "y": 0.3375,
      "sigma": 1.2944
     },
     {
      "t": 6,
      "x": 0.4939,
      "y": 0.3373,
      "sigma": 1.5944
     },
     {
      "t": 7,
      "x": 0.4931,
      "y": 0.3371,
      "sigma": 1.9197
     },
     {
      "t": 8,
      "x": 0.4924,
      "y": 0.337,
      "sigma": 2.2681
     },
     {
      "t": 9,
      "x": 0.4916,
      "y": 0.3368,
      "sigma": 2.6382
     },
     {
      "t": 10,
      "x": 0.4908,
      "y": 0.3367,
      "sigma": 3.0286
     },
     {
      "t": 11,
      "x": 0.4901,
      "y": 0.3365,
      "sigma": 3.4381
     },
     {
      "t": 12,
      "x": 0.4893,
      "y": 0.3364,
      "sigma": 3.8659
     },
     {
      "t": 13,
      "x": 0.4885,
      "y": 0.3362,
      "sigma": 4.3112
     },
     {
      "t": 14,
      "x": 0.4878,
      "y": 0.3361,
      "sigma": 4.7732
     },
     {
      "t": 15,
      "x": 0.487,
      "y": 0.3359,
      "sigma": 5.2514
     },
     {
      "t": 16,
      "x": 0.4863,
      "y": 0.3357,
      "sigma": 5.7452
     },
     {
      "t": 17,
      "x": 0.4855,
      "y": 0.3356,
      "sigma": 6.2541
     },
     {
      "t": 18,
      "x": 0.4847,
      "y": 0.3354,
      "sigma": 6.7777
     },
     {
      "t": 19,
      "x": 0.484,
      "y": 0.3353,
      "sigma": 7.3155
     },
     {
      "t": 20,
      "x": 0.4832,
      "y": 0.3351,
      "sigma": 7.8671
     },
     {
      "t": 21,
      "x": 0.4824,
      "y": 0.335,
      "sigma": 8.4323
     },
     {
      "t": 22,
      "x": 0.4817,
      "y": 0.3348,
      "sigma": 9.0106
     },
     {
      "t": 23,
      "x": 0.4809,
      "y": 0.3346,
      "sigma": 9.6019
     },
     {
      "t": 24,
      "x": 0.4802,
      "y": 0.3345,
      "sigma": 10.2057
     },
     {
      "t": 25,
      "x": 0.4794,
      "y": 0.3343,
      "sigma": 10.8219
     },
     {
      "t": 26,
      "x": 0.4786,
      "y": 0.3342,
      "sigma": 11.4502
     },
     {
      "t": 27,
      "x": 0.4779,
      "y": 0.334,
      "sigma": 12.0904
     },
     {
      "t": 28,
      "x": 0.4771,
      "y": 0.3339,
      "sigma": 12.7422
     },
     {
      "t": 29,
      "x": 0.4763,
      "y": 0.3337,
      "sigma": 13.4055
     },
     {
      "t": 30,
      "x": 0.4756,
      "y": 0.3335,
      "sigma": 14.0799
     }
    ],
    "history": [
     {
      "x": 0.7692,
      "y": 0.6923
     },
     {
      "x": 0.7616,
      "y": 0.6767
     },
     {
      "x": 0.7542,
      "y": 0.6618
     },
     {
      "x": 0.7472,
      "y": 0.6475
     },
     {
      "x": 0.7405,
      "y": 0.6338
     },
     {
      "x": 0.734,
      "y": 0.6207
     },
     {
      "x": 0.7279,
      "y": 0.6081
     },
     {
      "x": 0.722,
      "y": 0.5961
     },
     {
      "x": 0.7163,
      "y": 0.5846
     },
     {
      "x": 0.7109,
      "y": 0.5736
     },
     {
      "x": 0.7057,
      "y": 0.5631
     },
     {
      "x": 0.7008,
      "y": 0.553
     },
     {
      "x": 0.696,
      "y": 0.5433
     },
     {
      "x": 0.6915,
      "y": 0.5341
     },
     {
      "x": 0.6871,
      "y": 0.5252
     },
     {
      "x": 0.683,
      "y": 0.5168
     },
     {
      "x": 0.679,
      "y": 0.5087
     },
     {
      "x": 0.6752,
      "y": 0.5009
     },
     {
      "x": 0.6715,
      "y": 0.4935
     },
     {
      "x": 0.6681,
      "y": 0.4864
     },
     {
      "x": 0.6647,
      "y": 0.4796
     },
     {
      "x": 0.6615,
      "y": 0.473
     },
     {
      "x": 0.6584,
      "y": 0.4668
     },
     {
      "x": 0.6555,
      "y": 0.4608
     },
     {
      "x": 0.6527,
      "y": 0.4551
     },
     {
      "x": 0.65,
      "y": 0.4496
     },
     {
      "x": 0.6474,
      "y": 0.4444
     },
     {
      "x": 0.645,
      "y": 0.4394
     },
     {
      "x": 0.6426,
      "y": 0.4346
     },
     {
      "x": 0.6404,
      "y": 0.43
     },
     {
      "x": 0.6382,
      "y": 0.4256
     },
     {
      "x": 0.6361,
      "y": 0.4214
     },
     {
      "x": 0.6342,
      "y": 0.4174
     },
     {
      "x": 0.6323,
      "y": 0.4135
     },
     {
      "x": 0.6304,
      "y": 0.4098
     },
     {
      "x": 0.6287,
      "y": 0.4063
     },
     {
      "x": 0.627,
      "y": 0.4029
     },
     {
      "x": 0.6255,
      "y": 0.3997
     },
     {
      "x": 0.6239,
      "y": 0.3966
     },
     {
      "x": 0.6225,
      "y": 0.3936
     },
     {
      "x": 0.6211,
      "y": 0.3908
     },
     {
      "x": 0.6197,
      "y": 0.388
     },
     {
      "x": 0.6185,
      "y": 0.3854
     },
     {
      "x": 0.6172,
      "y": 0.3829
     },
     {
      "x": 0.6161,
      "y": 0.3806
     },
     {
      "x": 0.6149,
      "y": 0.3783
     },
     {
      "x": 0.6139,
      "y": 0.3761
     },
     {
      "x": 0.6128,
      "y": 0.374
     },
     {
      "x": 0.6119,
      "y": 0.372
     },
     {
      "x": 0.6109,
      "y": 0.3701
     },
     {
      "x": 0.61,
      "y": 0.3682
     },
     {
      "x": 0.6092,
      "y": 0.3665
     },
     {
      "x": 0.6083,
      "y": 0.3648
     },
     {
      "x": 0.6075,
      "y": 0.3632
     },
     {
      "x": 0.6068,
      "y": 0.3616
     },
     {
      "x": 0.6068,
      "y": 0.3616
     },
     {
      "x": 0.6001,
      "y": 0.3602
     },
     {
      "x": 0.5937,
      "y": 0.3588
     },
     {
      "x": 0.5876,
      "y": 0.3575
     },
     {
      "x": 0.5818,
      "y": 0.3562
     },
     {
      "x": 0.5761,
      "y": 0.355
     },
     {
      "x": 0.5708,
      "y": 0.3539
     },
     {
      "x": 0.5657,
      "y": 0.3527
     },
     {
      "x": 0.5607,
      "y": 0.3517
     },
     {
      "x": 0.556,
      "y": 0.3507
     },
     {
      "x": 0.5515,
      "y": 0.3497
     },
     {
      "x": 0.5472,
      "y": 0.3488
     },
     {
      "x": 0.5431,
      "y": 0.3479
     },
     {
      "x": 0.5391,
      "y": 0.347
     },
     {
      "x": 0.5354,
      "y": 0.3462
     },
     {
      "x": 0.5317,
      "y": 0.3454
     },
     {
      "x": 0.5283,
      "y": 0.3447
     },
     {
      "x": 0.525,
      "y": 0.3439
     },
     {
      "x": 0.5218,
      "y": 0.3433
     },
     {
      "x": 0.5187,
      "y": 0.3426
     },
     {
      "x": 0.5158,
      "y": 0.342
     },
     {
      "x": 0.513,
      "y": 0.3414
     },
     {
      "x": 0.5104,
      "y": 0.3408
     },
     {
      "x": 0.5078,
      "y": 0.3402
     },
     {
      "x": 0.5054,
      "y": 0.3397
     },
     {
      "x": 0.503,
      "y": 0.3392
     },
     {
      "x": 0.5008,
      "y": 0.3387
     },
     {
      "x": 0.4987,
      "y": 0.3383
     }
    ]
   },
   {
    "id": "W003",
    "class": "person",
    "current": {
     "x": 0.4871,
     "y": 0.2817
    },
    "velocity": {
     "vx": 0.0008,
     "vy": 0.0001
    },
    "trajectory": [
     {
      "t": 1,
      "x": 0.4878,
      "y": 0.2819,
      "sigma": 0.4148
     },
     {
      "t": 2,
      "x": 0.4886,
      "y": 0.282,
      "sigma": 0.5774
     },
     {
      "t": 3,
      "x": 0.4894,
      "y": 0.2821,
      "sigma": 0.7817
     },
     {
      "t": 4,
      "x": 0.4901,
      "y": 0.2822,
      "sigma": 1.0223
     },
     {
      "t": 5,
      "x": 0.4909,
      "y": 0.2823,
      "sigma": 1.2944
     },
     {
      "t": 6,
      "x": 0.4917,
      "y": 0.2825,
      "sigma": 1.5944
     },
     {
      "t": 7,
      "x": 0.4924,
      "y": 0.2826,
      "sigma": 1.9197
     },
     {
      "t": 8,
      "x": 0.4932,
      "y": 0.2827,
      "sigma": 2.2681
     },
     {
      "t": 9,
      "x": 0.4939,
      "y": 0.2828,
      "sigma": 2.6382
     },
     {
      "t": 10,
      "x": 0.4947,
      "y": 0.2829,
      "sigma": 3.0286
     },
     {
      "t": 11,
      "x": 0.4955,
      "y": 0.283,
      "sigma": 3.4381
     },
     {
      "t": 12,
      "x": 0.4962,
      "y": 0.2832,
      "sigma": 3.8659
     },
     {
      "t": 13,
      "x": 0.497,
      "y": 0.2833,
      "sigma": 4.3112
     },
     {
      "t": 14,
      "x": 0.4978,
      "y": 0.2834,
      "sigma": 4.7732
     },
     {
      "t": 15,
      "x": 0.4985,
      "y": 0.2835,
      "sigma": 5.2514
     },
     {
      "t": 16,
      "x": 0.4993,
      "y": 0.2836,
      "sigma": 5.7452
     },
     {
      "t": 17,
      "x": 0.5001,
      "y": 0.2837,
      "sigma": 6.2541
     },
     {
      "t": 18,
      "x": 0.5008,
      "y": 0.2839,
      "sigma": 6.7777
     },
     {
      "t": 19,
      "x": 0.5016,
      "y": 0.284,
      "sigma": 7.3155
     },
     {
      "t": 20,
      "x": 0.5024,
      "y": 0.2841,
      "sigma": 7.8671
     },
     {
      "t": 21,
      "x": 0.5031,
      "y": 0.2842,
      "sigma": 8.4323
     },
     {
      "t": 22,
      "x": 0.5039,
      "y": 0.2843,
      "sigma": 9.0106
     },
     {
      "t": 23,
      "x": 0.5047,
      "y": 0.2845,
      "sigma": 9.6019
     },
     {
      "t": 24,
      "x": 0.5054,
      "y": 0.2846,
      "sigma": 10.2057
     },
     {
      "t": 25,
      "x": 0.5062,
      "y": 0.2847,
      "sigma": 10.8219
     },
     {
      "t": 26,
      "x": 0.507,
      "y": 0.2848,
      "sigma": 11.4502
     },
     {
      "t": 27,
      "x": 0.5077,
      "y": 0.2849,
      "sigma": 12.0904
     },
     {
      "t": 28,
      "x": 0.5085,
      "y": 0.285,
      "sigma": 12.7422
     },
     {
      "t": 29,
      "x": 0.5093,
      "y": 0.2852,
      "sigma": 13.4054
     },
     {
      "t": 30,
      "x": 0.51,
      "y": 0.2853,
      "sigma": 14.0799
     }
    ],
    "history": [
     {
      "x": 0.1538,
      "y": 0.1538
     },
     {
      "x": 0.1538,
      "y": 0.1538
     },
     {
      "x": 0.1538,
      "y": 0.1538
     },
     {
      "x": 0.1715,
      "y": 0.1612
     },
     {
      "x": 0.1885,
      "y": 0.1682
     },
     {
      "x": 0.2046,
      "y": 0.1748
     },
     {
      "x": 0.22,
      "y": 0.1812
     },
     {
      "x": 0.2347,
      "y": 0.1873
     },
     {
      "x": 0.2488,
      "y": 0.1931
     },
     {
      "x": 0.2622,
      "y": 0.1987
     },
     {
      "x": 0.2751,
      "y": 0.204
     },
     {
      "x": 0.2873,
      "y": 0.209
     },
     {
      "x": 0.299,
      "y": 0.2139
     },
     {
      "x": 0.3102,
      "y": 0.2185
     },
     {
      "x": 0.3209,
      "y": 0.2229
     },
     {
      "x": 0.3311,
      "y": 0.2271
     },
     {
      "x": 0.3408,
      "y": 0.2312
     },
     {
      "x": 0.3501,
      "y": 0.235
     },
     {
      "x": 0.359,
      "y": 0.2387
     },
     {
      "x": 0.3674,
      "y": 0.2422
     },
     {
      "x": 0.3755,
      "y": 0.2455
     },
     {
      "x": 0.3833,
      "y": 0.2487
     },
     {
      "x": 0.3907,
      "y": 0.2518
     },
     {
      "x": 0.3977,
      "y": 0.2547
     },
     {
      "x": 0.4044,
      "y": 0.2575
     },
     {
      "x": 0.4109,
      "y": 0.2601
     },
     {
      "x": 0.417,
      "y": 0.2627
     },
     {
      "x": 0.4229,
      "y": 0.2651
     },
     {
      "x": 0.4285,
      "y": 0.2674
     },
     {
      "x": 0.4338,
      "y": 0.2696
     },
     {
      "x": 0.4389,
      "y": 0.2718
     },
     {
      "x": 0.4438,
      "y": 0.2738
     },
     {
      "x": 0.4485,
      "y": 0.2757
     },
     {
      "x": 0.4529,
      "y": 0.2775
     },
     {
      "x": 0.4572,
      "y": 0.2793
     },
     {
      "x": 0.4612,
      "y": 0.281
     },
     {
      "x": 0.4651,
      "y": 0.2826
     },
     {
      "x": 0.4688,
      "y": 0.2841
     },
     {
      "x": 0.4724,
      "y": 0.2856
     },
     {
      "x": 0.4757,
      "y": 0.287
     },
     {
      "x": 0.479,
      "y": 0.2883
     },
     {
      "x": 0.482,
      "y": 0.2896
     },
     {
      "x": 0.485,
      "y": 0.2908
     },
     {
      "x": 0.4878,
      "y": 0.292
     },
     {
      "x": 0.4905,
      "y": 0.2931
     },
     {
      "x": 0.493,
      "y": 0.2941
     },
     {
      "x": 0.4955,
      "y": 0.2951
     },
     {
      "x": 0.4978,
      "y": 0.2961
     },
     {
      "x": 0.5001,
      "y": 0.297
     },
     {
      "x": 0.5022,
      "y": 0.2979
     },
     {
      "x": 0.5042,
      "y": 0.2988
     },
     {
      "x": 0.5062,
      "y": 0.2996
     },
     {
      "x": 0.508,
      "y": 0.3003
     },
     {
      "x": 0.5098,
      "y": 0.3011
     },
     {
      "x": 0.5115,
      "y": 0.3018
     },
     {
      "x": 0.5131,
      "y": 0.3024
     },
     {
      "x": 0.5131,
      "y": 0.3024
     },
     {
      "x": 0.5096,
      "y": 0.3006
     },
     {
      "x": 0.5063,
      "y": 0.2988
     },
     {
      "x": 0.5031,
      "y": 0.2971
     },
     {
      "x": 0.5001,
      "y": 0.2955
     },
     {
      "x": 0.4972,
      "y": 0.2939
     },
     {
      "x": 0.4945,
      "y": 0.2925
     },
     {
      "x": 0.4918,
      "y": 0.2911
     },
     {
      "x": 0.4893,
      "y": 0.2897
     },
     {
      "x": 0.4869,
      "y": 0.2884
     },
     {
      "x": 0.4846,
      "y": 0.2872
     },
     {
      "x": 0.4824,
      "y": 0.286
     },
     {
      "x": 0.4803,
      "y": 0.2849
     },
     {
      "x": 0.4783,
      "y": 0.2838
     },
     {
      "x": 0.4764,
      "y": 0.2828
     },
     {
      "x": 0.4746,
      "y": 0.2818
     },
     {
      "x": 0.4728,
      "y": 0.2809
     },
     {
      "x": 0.4712,
      "y": 0.28
     },
     {
      "x": 0.4696,
      "y": 0.2792
     },
     {
      "x": 0.4696,
      "y": 0.2792
     },
     {
      "x": 0.4724,
      "y": 0.2796
     },
     {
      "x": 0.4751,
      "y": 0.28
     },
     {
      "x": 0.4777,
      "y": 0.2803
     },
     {
      "x": 0.4801,
      "y": 0.2807
     },
     {
      "x": 0.4825,
      "y": 0.281
     },
     {
      "x": 0.4847,
      "y": 0.2814
     },
     {
      "x": 0.4868,
      "y": 0.2817
     }
    ]
   }
  ],
  "regions": [
   {
    "regionId": "zone_pit_a",
    "current": 0,
    "slope": 0,
    "curve": [],
    "history": [
     {
      "t": 0,
      "value": 0
     }
    ]
   },
   {
    "regionId": "zone_crane_b",
    "current": 0,
    "slope": -0.0178,
    "curve": [
     {
      "t": 1,
      "value": 0
     },
     {
      "t": 2,
      "value": 0
     },
     {
      "t": 3,
      "value": 0
     },
     {
      "t": 4,
      "value": 0
     },
     {
      "t": 5,
      "value": 0
     },
     {
      "t": 6,
      "value": 0
     },
     {
      "t": 7,
      "value": 0
     },
     {
      "t": 8,
      "value": 0
     },
     {
      "t": 9,
      "value": 0
     },
     {
      "t": 10,
      "value": 0
     },
     {
      "t": 11,
      "value": 0
     },
     {
      "t": 12,
      "value": 0
     },
     {
      "t": 13,
      "value": 0
     },
     {
      "t": 14,
      "value": 0
     },
     {
      "t": 15,
      "value": 0
     },
     {
      "t": 16,
      "value": 0
     },
     {
      "t": 17,
      "value": 0
     },
     {
      "t": 18,
      "value": 0
     },
     {
      "t": 19,
      "value": 0
     },
     {
      "t": 20,
      "value": 0
     },
     {
      "t": 21,
      "value": 0
     },
     {
      "t": 22,
      "value": 0
     },
     {
      "t": 23,
      "value": 0
     },
     {
      "t": 24,
      "value": 0
     },
     {
      "t": 25,
      "value": 0
     },
     {
      "t": 26,
      "value": 0
     },
     {
      "t": 27,
      "value": 0
     },
     {
      "t": 28,
      "value": 0
     },
     {
      "t": 29,
      "value": 0
     },
     {
      "t": 30,
      "value": 0
     },
     {
      "t": 31,
      "value": 0
     },
     {
      "t": 32,
      "value": 0
     },
     {
      "t": 33,
      "value": 0
     },
     {
      "t": 34,
      "value": 0
     },
     {
      "t": 35,
      "value": 0
     },
     {
      "t": 36,
      "value": 0
     },
     {
      "t": 37,
      "value": 0
     },
     {
      "t": 38,
      "value": 0
     },
     {
      "t": 39,
      "value": 0
     },
     {
      "t": 40,
      "value": 0
     },
     {
      "t": 41,
      "value": 0
     },
     {
      "t": 42,
      "value": 0
     },
     {
      "t": 43,
      "value": 0
     },
     {
      "t": 44,
      "value": 0
     },
     {
      "t": 45,
      "value": 0
     },
     {
      "t": 46,
      "value": 0
     },
     {
      "t": 47,
      "value": 0
     },
     {
      "t": 48,
      "value": 0
     },
     {
      "t": 49,
      "value": 0
     },
     {
      "t": 50,
      "value": 0
     },
     {
      "t": 51,
      "value": 0
     },
     {
      "t": 52,
      "value": 0
     },
     {
      "t": 53,
      "value": 0
     },
     {
      "t": 54,
      "value": 0
     },
     {
      "t": 55,
      "value": 0
     },
     {
      "t": 56,
      "value": 0
     },
     {
      "t": 57,
      "value": 0
     },
     {
      "t": 58,
      "value": 0
     },
     {
      "t": 59,
      "value": 0
     },
     {
      "t": 60,
      "value": 0
     }
    ],
    "history": [
     {
      "t": 0,
      "value": 0.333
     },
     {
      "t": 18.7,
      "value": 0
     }
    ]
   },
   {
    "regionId": "zone_material_c",
    "current": 0.333,
    "slope": 0.0021,
    "curve": [
     {
      "t": 1,
      "value": 0.335
     },
     {
      "t": 2,
      "value": 0.337
     },
     {
      "t": 3,
      "value": 0.34
     },
     {
      "t": 4,
      "value": 0.342
     },
     {
      "t": 5,
      "value": 0.344
     },
     {
      "t": 6,
      "value": 0.346
     },
     {
      "t": 7,
      "value": 0.348
     },
     {
      "t": 8,
      "value": 0.35
     },
     {
      "t": 9,
      "value": 0.352
     },
     {
      "t": 10,
      "value": 0.354
     },
     {
      "t": 11,
      "value": 0.356
     },
     {
      "t": 12,
      "value": 0.358
     },
     {
      "t": 13,
      "value": 0.36
     },
     {
      "t": 14,
      "value": 0.362
     },
     {
      "t": 15,
      "value": 0.365
     },
     {
      "t": 16,
      "value": 0.367
     },
     {
      "t": 17,
      "value": 0.369
     },
     {
      "t": 18,
      "value": 0.371
     },
     {
      "t": 19,
      "value": 0.373
     },
     {
      "t": 20,
      "value": 0.375
     },
     {
      "t": 21,
      "value": 0.377
     },
     {
      "t": 22,
      "value": 0.379
     },
     {
      "t": 23,
      "value": 0.381
     },
     {
      "t": 24,
      "value": 0.383
     },
     {
      "t": 25,
      "value": 0.385
     },
     {
      "t": 26,
      "value": 0.387
     },
     {
      "t": 27,
      "value": 0.389
     },
     {
      "t": 28,
      "value": 0.392
     },
     {
      "t": 29,
      "value": 0.394
     },
     {
      "t": 30,
      "value": 0.396
     },
     {
      "t": 31,
      "value": 0.398
     },
     {
      "t": 32,
      "value": 0.4
     },
     {
      "t": 33,
      "value": 0.402
     },
     {
      "t": 34,
      "value": 0.404
     },
     {
      "t": 35,
      "value": 0.406
     },
     {
      "t": 36,
      "value": 0.408
     },
     {
      "t": 37,
      "value": 0.41
     },
     {
      "t": 38,
      "value": 0.412
     },
     {
      "t": 39,
      "value": 0.414
     },
     {
      "t": 40,
      "value": 0.416
     },
     {
      "t": 41,
      "value": 0.419
     },
     {
      "t": 42,
      "value": 0.421
     },
     {
      "t": 43,
      "value": 0.423
     },
     {
      "t": 44,
      "value": 0.425
     },
     {
      "t": 45,
      "value": 0.427
     },
     {
      "t": 46,
      "value": 0.429
     },
     {
      "t": 47,
      "value": 0.431
     },
     {
      "t": 48,
      "value": 0.433
     },
     {
      "t": 49,
      "value": 0.435
     },
     {
      "t": 50,
      "value": 0.437
     },
     {
      "t": 51,
      "value": 0.439
     },
     {
      "t": 52,
      "value": 0.441
     },
     {
      "t": 53,
      "value": 0.444
     },
     {
      "t": 54,
      "value": 0.446
     },
     {
      "t": 55,
      "value": 0.448
     },
     {
      "t": 56,
      "value": 0.45
     },
     {
      "t": 57,
      "value": 0.452
     },
     {
      "t": 58,
      "value": 0.454
     },
     {
      "t": 59,
      "value": 0.456
     },
     {
      "t": 60,
      "value": 0.458
     }
    ],
    "history": [
     {
      "t": 0,
      "value": 0
     },
     {
      "t": 160.3,
      "value": 0.333
     }
    ]
   },
   {
    "regionId": "zone_shed_d",
    "current": 0,
    "slope": 0.0062,
    "curve": [
     {
      "t": 1,
      "value": 0.156
     },
     {
      "t": 2,
      "value": 0.162
     },
     {
      "t": 3,
      "value": 0.168
     },
     {
      "t": 4,
      "value": 0.174
     },
     {
      "t": 5,
      "value": 0.18
     },
     {
      "t": 6,
      "value": 0.187
     },
     {
      "t": 7,
      "value": 0.193
     },
     {
      "t": 8,
      "value": 0.199
     },
     {
      "t": 9,
      "value": 0.205
     },
     {
      "t": 10,
      "value": 0.211
     },
     {
      "t": 11,
      "value": 0.217
     },
     {
      "t": 12,
      "value": 0.223
     },
     {
      "t": 13,
      "value": 0.23
     },
     {
      "t": 14,
      "value": 0.236
     },
     {
      "t": 15,
      "value": 0.242
     },
     {
      "t": 16,
      "value": 0.248
     },
     {
      "t": 17,
      "value": 0.254
     },
     {
      "t": 18,
      "value": 0.26
     },
     {
      "t": 19,
      "value": 0.267
     },
     {
      "t": 20,
      "value": 0.273
     },
     {
      "t": 21,
      "value": 0.279
     },
     {
      "t": 22,
      "value": 0.285
     },
     {
      "t": 23,
      "value": 0.291
     },
     {
      "t": 24,
      "value": 0.297
     },
     {
      "t": 25,
      "value": 0.304
     },
     {
      "t": 26,
      "value": 0.31
     },
     {
      "t": 27,
      "value": 0.316
     },
     {
      "t": 28,
      "value": 0.322
     },
     {
      "t": 29,
      "value": 0.328
     },
     {
      "t": 30,
      "value": 0.334
     },
     {
      "t": 31,
      "value": 0.34
     },
     {
      "t": 32,
      "value": 0.347
     },
     {
      "t": 33,
      "value": 0.353
     },
     {
      "t": 34,
      "value": 0.359
     },
     {
      "t": 35,
      "value": 0.365
     },
     {
      "t": 36,
      "value": 0.371
     },
     {
      "t": 37,
      "value": 0.377
     },
     {
      "t": 38,
      "value": 0.384
     },
     {
      "t": 39,
      "value": 0.39
     },
     {
      "t": 40,
      "value": 0.396
     },
     {
      "t": 41,
      "value": 0.402
     },
     {
      "t": 42,
      "value": 0.408
     },
     {
      "t": 43,
      "value": 0.414
     },
     {
      "t": 44,
      "value": 0.421
     },
     {
      "t": 45,
      "value": 0.427
     },
     {
      "t": 46,
      "value": 0.433
     },
     {
      "t": 47,
      "value": 0.439
     },
     {
      "t": 48,
      "value": 0.445
     },
     {
      "t": 49,
      "value": 0.451
     },
     {
      "t": 50,
      "value": 0.457
     },
     {
      "t": 51,
      "value": 0.464
     },
     {
      "t": 52,
      "value": 0.47
     },
     {
      "t": 53,
      "value": 0.476
     },
     {
      "t": 54,
      "value": 0.482
     },
     {
      "t": 55,
      "value": 0.488
     },
     {
      "t": 56,
      "value": 0.494
     },
     {
      "t": 57,
      "value": 0.501
     },
     {
      "t": 58,
      "value": 0.507
     },
     {
      "t": 59,
      "value": 0.513
     },
     {
      "t": 60,
      "value": 0.519
     }
    ],
    "history": [
     {
      "t": 0,
      "value": 0
     },
     {
      "t": 10.4,
      "value": 0.333
     },
     {
      "t": 14.6,
      "value": 0
     }
    ]
   },
   {
    "regionId": "zone_curing_e",
    "current": 0,
    "slope": 0,
    "curve": [],
    "history": [
     {
      "t": 0,
      "value": 0
     }
    ]
   }
  ],
  "fire": {
   "predictedRate": 0.1083,
   "spreadM": 2.17,
   "learned": true,
   "centers": 6,
   "curve": [
    {
     "u": 0,
     "y": 0.0875
    },
    {
     "u": 0.03,
     "y": 0.0936
    },
    {
     "u": 0.05,
     "y": 0.0989
    },
    {
     "u": 0.07,
     "y": 0.1033
    },
    {
     "u": 0.1,
     "y": 0.1068
    },
    {
     "u": 0.12,
     "y": 0.1092
    },
    {
     "u": 0.15,
     "y": 0.1104
    },
    {
     "u": 0.17,
     "y": 0.1104
    },
    {
     "u": 0.2,
     "y": 0.1094
    },
    {
     "u": 0.23,
     "y": 0.1072
    },
    {
     "u": 0.25,
     "y": 0.1039
    },
    {
     "u": 0.28,
     "y": 0.0998
    },
    {
     "u": 0.3,
     "y": 0.0948
    },
    {
     "u": 0.33,
     "y": 0.0892
    },
    {
     "u": 0.35,
     "y": 0.0831
    },
    {
     "u": 0.38,
     "y": 0.0767
    },
    {
     "u": 0.4,
     "y": 0.0701
    },
    {
     "u": 0.42,
     "y": 0.0634
    },
    {
     "u": 0.45,
     "y": 0.0568
    },
    {
     "u": 0.47,
     "y": 0.0504
    },
    {
     "u": 0.5,
     "y": 0.0443
    },
    {
     "u": 0.53,
     "y": 0.0386
    },
    {
     "u": 0.55,
     "y": 0.0333
    },
    {
     "u": 0.57,
     "y": 0.0284
    },
    {
     "u": 0.6,
     "y": 0.024
    },
    {
     "u": 0.62,
     "y": 0.0201
    },
    {
     "u": 0.65,
     "y": 0.0167
    },
    {
     "u": 0.68,
     "y": 0.0137
    },
    {
     "u": 0.7,
     "y": 0.0111
    },
    {
     "u": 0.72,
     "y": 0.009
    },
    {
     "u": 0.75,
     "y": 0.0071
    },
    {
     "u": 0.78,
     "y": 0.0056
    },
    {
     "u": 0.8,
     "y": 0.0044
    },
    {
     "u": 0.82,
     "y": 0.0034
    },
    {
     "u": 0.85,
     "y": 0.0026
    },
    {
     "u": 0.88,
     "y": 0.002
    },
    {
     "u": 0.9,
     "y": 0.0015
    },
    {
     "u": 0.93,
     "y": 0.0011
    },
    {
     "u": 0.95,
     "y": 0.0008
    },
    {
     "u": 0.97,
     "y": 0.0006
    },
    {
     "u": 1,
     "y": 0.0004
    }
   ],
   "history": [
    {
     "u": 0.135,
     "y": 0.1069
    },
    {
     "u": 0.137,
     "y": 0.1069
    },
    {
     "u": 0.14,
     "y": 0.1069
    },
    {
     "u": 0.144,
     "y": 0.1201
    },
    {
     "u": 0.143,
     "y": 0.1201
    },
    {
     "u": 0.142,
     "y": 0.1201
    },
    {
     "u": 0.142,
     "y": 0.1228
    },
    {
     "u": 0.139,
     "y": 0.1226
    },
    {
     "u": 0.134,
     "y": 0.1226
    },
    {
     "u": 0.13,
     "y": 0.1222
    },
    {
     "u": 0.123,
     "y": 0.1222
    },
    {
     "u": 0.125,
     "y": 0.1348
    },
    {
     "u": 0.12,
     "y": 0.1346
    },
    {
     "u": 0.111,
     "y": 0.1346
    },
    {
     "u": 0.109,
     "y": 0.122
    },
    {
     "u": 0.105,
     "y": 0.1216
    },
    {
     "u": 0.098,
     "y": 0.1216
    },
    {
     "u": 0.097,
     "y": 0.1216
    },
    {
     "u": 0.094,
     "y": 0.1216
    },
    {
     "u": 0.096,
     "y": 0.1375
    },
    {
     "u": 0.097,
     "y": 0.1375
    },
    {
     "u": 0.098,
     "y": 0.1375
    },
    {
     "u": 0.096,
     "y": 0.1252
    },
    {
     "u": 0.099,
     "y": 0.1256
    },
    {
     "u": 0.104,
     "y": 0.1256
    },
    {
     "u": 0.106,
     "y": 0.1388
    },
    {
     "u": 0.11,
     "y": 0.139
    },
    {
     "u": 0.118,
     "y": 0.139
    },
    {
     "u": 0.123,
     "y": 0.1394
    },
    {
     "u": 0.131,
     "y": 0.1394
    },
    {
     "u": 0.128,
     "y": 0.1259
    },
    {
     "u": 0.133,
     "y": 0.1261
    },
    {
     "u": 0.14,
     "y": 0.1261
    },
    {
     "u": 0.142,
     "y": 0.136
    },
    {
     "u": 0.144,
     "y": 0.136
    },
    {
     "u": 0.147,
     "y": 0.136
    },
    {
     "u": 0.146,
     "y": 0.136
    },
    {
     "u": 0.146,
     "y": 0.136
    },
    {
     "u": 0.141,
     "y": 0.1171
    },
    {
     "u": 0.139,
     "y": 0.1169
    },
    {
     "u": 0.134,
     "y": 0.1169
    },
    {
     "u": 0.136,
     "y": 0.125
    },
    {
     "u": 0.131,
     "y": 0.1246
    },
    {
     "u": 0.124,
     "y": 0.1246
    },
    {
     "u": 0.119,
     "y": 0.1244
    },
    {
     "u": 0.111,
     "y": 0.1244
    },
    {
     "u": 0.109,
     "y": 0.1157
    },
    {
     "u": 0.106,
     "y": 0.1157
    },
    {
     "u": 0.099,
     "y": 0.1157
    },
    {
     "u": 0.097,
     "y": 0.1022
    },
    {
     "u": 0.094,
     "y": 0.1018
    },
    {
     "u": 0.09,
     "y": 0.1018
    },
    {
     "u": 0.091,
     "y": 0.1018
    },
    {
     "u": 0.092,
     "y": 0.1018
    },
    {
     "u": 0.092,
     "y": 0.1039
    },
    {
     "u": 0.094,
     "y": 0.1043
    },
    {
     "u": 0.099,
     "y": 0.1043
    },
    {
     "u": 0.095,
     "y": 0.083
    },
    {
     "u": 0.101,
     "y": 0.0832
    },
    {
     "u": 0.114,
     "y": 0.0832
    }
   ]
  },
  "deep": {
   "fire": {
    "nbeats": [
     10.817,
     11.54,
     12.017,
     12.484,
     13.231,
     13.756,
     13.922,
     14.464,
     13.658,
     13.823,
     13.469,
     13.047
    ],
    "lstm": [
     10.75,
     10.916,
     10.762,
     10.622,
     10.672,
     10.941,
     10.813,
     11.254,
     11.129,
     11.512,
     11.206,
     11.314
    ],
    "persistence": [
     11.4,
     11.4,
     11.4,
     11.4,
     11.4,
     11.4,
     11.4,
     11.4,
     11.4,
     11.4,
     11.4,
     11.4
    ],
    "best": [
     10.817,
     11.54,
     12.017,
     12.484,
     13.231,
     13.756,
     13.922,
     14.464,
     13.658,
     13.823,
     13.469,
     13.047
    ],
    "method": "nbeats",
    "validation": {
     "nbeats": 0.1135,
     "lstm": 0.4654,
     "persistence": 0.3139
    },
    "history": [
     12.3,
     13.1,
     12.8,
     13.3,
     14,
     14.2,
     14.4,
     14.7,
     14.6,
     14.6,
     14.1,
     13.9,
     13.4,
     13.6,
     13.1,
     12.4,
     11.9,
     11.1,
     10.9,
     10.6,
     9.9,
     9.7,
     9.4,
     9,
     9.1,
     9.2,
     9.2,
     9.4,
     9.9,
     9.5,
     10.1,
     11.4
    ],
    "available": true
   },
   "occupancy": {
    "nbeats": [
     0.084,
     0.134,
     0.137,
     0.084,
     0.097,
     0.086,
     0.157,
     0.181,
     0.21,
     0.222,
     0.202,
     0.257
    ],
    "lstm": [
     0.037,
     0.031,
     0.11,
     0.067,
     0.142,
     0.131,
     0.142,
     0.176,
     0.176,
     0.198,
     0.193,
     0.193
    ],
    "persistence": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0
    ],
    "best": [
     0.084,
     0.134,
     0.137,
     0.084,
     0.097,
     0.086,
     0.157,
     0.181,
     0.21,
     0.222,
     0.202,
     0.257
    ],
    "method": "nbeats",
    "validation": {
     "nbeats": 2.7433,
     "lstm": 2.8401,
     "persistence": 3.3925
    },
    "history": [
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     0,
     1,
     1,
     1,
     1,
     1,
     1,
     1,
     1,
     1,
     0,
     0
    ],
    "available": true
   },
   "gas": {
    "nbeats": [
     0.366,
     0.269,
     0.307,
     0.233,
     0.292,
     0.313,
     0.438,
     0.493,
     0.499,
     0.614,
     0.422,
     0.436
    ],
    "lstm": [
     0.413,
     0.427,
     0.383,
     0.379,
     0.39,
     0.363,
     0.4,
     0.411,
     0.425,
     0.429,
     0.429,
     0.455
    ],
    "persistence": [
     0.5,
     0.5,
     0.5,
     0.5,
     0.5,
     0.5,
     0.5,
     0.5,
     0.5,
     0.5,
     0.5,
     0.5
    ],
    "best": [
     0.366,
     0.269,
     0.307,
     0.233,
     0.292,
     0.313,
     0.438,
     0.493,
     0.499,
     0.614,
     0.422,
     0.436
    ],
    "method": "nbeats",
    "validation": {
     "nbeats": 0.1229,
     "lstm": 0.5808,
     "persistence": 1.2316
    },
    "history": [
     0.2,
     0.3,
     0.4,
     0.5,
     0.6,
     0.6,
     0.6,
     0.5,
     0.4,
     0.3,
     0.2,
     0.2,
     0.2,
     0.3,
     0.4,
     0.5,
     0.6,
     0.6,
     0.6,
     0.5,
     0.4,
     0.3,
     0.3,
     0.2,
     0.2,
     0.3,
     0.4,
     0.5,
     0.6,
     0.6,
     0.5,
     0.5
    ],
    "available": true
   },
   "grid": {
    "nbeats": [
     51.612,
     52.566,
     54.745,
     56.103,
     55.127,
     55.795,
     56.535,
     57.165,
     56.882,
     58.707,
     55.818,
     58.143
    ],
    "lstm": [
     48.412,
     51.278,
     55.329,
     55.654,
     56.406,
     56.497,
     57.498,
     56.291,
     59.155,
     60.959,
     60.897,
     62.721
    ],
    "persistence": [
     68,
     68,
     68,
     68,
     68,
     68,
     68,
     68,
     68,
     68,
     68,
     68
    ],
    "best": [
     51.612,
     52.566,
     54.745,
     56.103,
     55.127,
     55.795,
     56.535,
     57.165,
     56.882,
     58.707,
     55.818,
     58.143
    ],
    "method": "nbeats",
    "validation": {
     "nbeats": 0.1151,
     "lstm": 0.1215,
     "persistence": 1.4426
    },
    "history": [
     60.7,
     56.9,
     52.8,
     49,
     46.1,
     44.3,
     43.4,
     43.1,
     43,
     42.5,
     41.5,
     40,
     38.3,
     36.9,
     36.4,
     37.2,
     39.3,
     42.5,
     46.3,
     50,
     53.2,
     55.5,
     56.8,
     57.5,
     58.1,
     58.8,
     60.2,
     62.2,
     65.9,
     67.9,
     68.6,
     68
    ],
    "available": true
   }
  }
 },
 "/api/vision/complement": {
  "window": {
   "start": 0,
   "end": 59,
   "faultStart": 22,
   "faultEnd": 40,
   "lambda": 0.3
  },
  "riskLevel": 0.109,
  "series": [
   {
    "t": 0,
    "trueRisk": 0.18,
    "baselineRisk": 0.18,
    "optimizedRisk": 0.18,
    "faultActive": false
   },
   {
    "t": 1,
    "trueRisk": 0.1914,
    "baselineRisk": 0.1914,
    "optimizedRisk": 0.1914,
    "faultActive": false
   },
   {
    "t": 2,
    "trueRisk": 0.2027,
    "baselineRisk": 0.2027,
    "optimizedRisk": 0.2027,
    "faultActive": false
   },
   {
    "t": 3,
    "trueRisk": 0.2141,
    "baselineRisk": 0.2141,
    "optimizedRisk": 0.2141,
    "faultActive": false
   },
   {
    "t": 4,
    "trueRisk": 0.2254,
    "baselineRisk": 0.2254,
    "optimizedRisk": 0.2254,
    "faultActive": false
   },
   {
    "t": 5,
    "trueRisk": 0.2368,
    "baselineRisk": 0.2368,
    "optimizedRisk": 0.2368,
    "faultActive": false
   },
   {
    "t": 6,
    "trueRisk": 0.2481,
    "baselineRisk": 0.2481,
    "optimizedRisk": 0.2481,
    "faultActive": false
   },
   {
    "t": 7,
    "trueRisk": 0.2595,
    "baselineRisk": 0.2595,
    "optimizedRisk": 0.2595,
    "faultActive": false
   },
   {
    "t": 8,
    "trueRisk": 0.2708,
    "baselineRisk": 0.2708,
    "optimizedRisk": 0.2708,
    "faultActive": false
   },
   {
    "t": 9,
    "trueRisk": 0.2822,
    "baselineRisk": 0.2822,
    "optimizedRisk": 0.2822,
    "faultActive": false
   },
   {
    "t": 10,
    "trueRisk": 0.2936,
    "baselineRisk": 0.2936,
    "optimizedRisk": 0.2936,
    "faultActive": false
   },
   {
    "t": 11,
    "trueRisk": 0.3049,
    "baselineRisk": 0.3049,
    "optimizedRisk": 0.3049,
    "faultActive": false
   },
   {
    "t": 12,
    "trueRisk": 0.3163,
    "baselineRisk": 0.3163,
    "optimizedRisk": 0.3163,
    "faultActive": false
   },
   {
    "t": 13,
    "trueRisk": 0.3276,
    "baselineRisk": 0.3276,
    "optimizedRisk": 0.3276,
    "faultActive": false
   },
   {
    "t": 14,
    "trueRisk": 0.339,
    "baselineRisk": 0.339,
    "optimizedRisk": 0.339,
    "faultActive": false
   },
   {
    "t": 15,
    "trueRisk": 0.3503,
    "baselineRisk": 0.3503,
    "optimizedRisk": 0.3503,
    "faultActive": false
   },
   {
    "t": 16,
    "trueRisk": 0.3617,
    "baselineRisk": 0.3617,
    "optimizedRisk": 0.3617,
    "faultActive": false
   },
   {
    "t": 17,
    "trueRisk": 0.3731,
    "baselineRisk": 0.3731,
    "optimizedRisk": 0.3731,
    "faultActive": false
   },
   {
    "t": 18,
    "trueRisk": 0.3844,
    "baselineRisk": 0.3844,
    "optimizedRisk": 0.3844,
    "faultActive": false
   },
   {
    "t": 19,
    "trueRisk": 0.3958,
    "baselineRisk": 0.3958,
    "optimizedRisk": 0.3958,
    "faultActive": false
   },
   {
    "t": 20,
    "trueRisk": 0.4071,
    "baselineRisk": 0.4071,
    "optimizedRisk": 0.4071,
    "faultActive": false
   },
   {
    "t": 21,
    "trueRisk": 0.4185,
    "baselineRisk": 0.4185,
    "optimizedRisk": 0.4185,
    "faultActive": false
   },
   {
    "t": 22,
    "trueRisk": 0.4298,
    "baselineRisk": 0.1289,
    "optimizedRisk": 0.1791,
    "faultActive": true
   },
   {
    "t": 23,
    "trueRisk": 0.4412,
    "baselineRisk": 0.1324,
    "optimizedRisk": 0.2353,
    "faultActive": true
   },
   {
    "t": 24,
    "trueRisk": 0.4525,
    "baselineRisk": 0.1358,
    "optimizedRisk": 0.2942,
    "faultActive": true
   },
   {
    "t": 25,
    "trueRisk": 0.4639,
    "baselineRisk": 0.1392,
    "optimizedRisk": 0.3557,
    "faultActive": true
   },
   {
    "t": 26,
    "trueRisk": 0.4753,
    "baselineRisk": 0.1426,
    "optimizedRisk": 0.4198,
    "faultActive": true
   },
   {
    "t": 27,
    "trueRisk": 0.4866,
    "baselineRisk": 0.146,
    "optimizedRisk": 0.4866,
    "faultActive": true
   },
   {
    "t": 28,
    "trueRisk": 0.498,
    "baselineRisk": 0.1494,
    "optimizedRisk": 0.498,
    "faultActive": true
   },
   {
    "t": 29,
    "trueRisk": 0.5093,
    "baselineRisk": 0.1528,
    "optimizedRisk": 0.5093,
    "faultActive": true
   },
   {
    "t": 30,
    "trueRisk": 0.5207,
    "baselineRisk": 0.1562,
    "optimizedRisk": 0.5207,
    "faultActive": true
   },
   {
    "t": 31,
    "trueRisk": 0.532,
    "baselineRisk": 0.1596,
    "optimizedRisk": 0.532,
    "faultActive": true
   },
   {
    "t": 32,
    "trueRisk": 0.5434,
    "baselineRisk": 0.163,
    "optimizedRisk": 0.5434,
    "faultActive": true
   },
   {
    "t": 33,
    "trueRisk": 0.5547,
    "baselineRisk": 0.1664,
    "optimizedRisk": 0.5547,
    "faultActive": true
   },
   {
    "t": 34,
    "trueRisk": 0.5661,
    "baselineRisk": 0.1698,
    "optimizedRisk": 0.5661,
    "faultActive": true
   },
   {
    "t": 35,
    "trueRisk": 0.5775,
    "baselineRisk": 0.1732,
    "optimizedRisk": 0.5775,
    "faultActive": true
   },
   {
    "t": 36,
    "trueRisk": 0.5888,
    "baselineRisk": 0.1766,
    "optimizedRisk": 0.5888,
    "faultActive": true
   },
   {
    "t": 37,
    "trueRisk": 0.6002,
    "baselineRisk": 0.1801,
    "optimizedRisk": 0.6002,
    "faultActive": true
   },
   {
    "t": 38,
    "trueRisk": 0.6115,
    "baselineRisk": 0.1835,
    "optimizedRisk": 0.6115,
    "faultActive": true
   },
   {
    "t": 39,
    "trueRisk": 0.6229,
    "baselineRisk": 0.1869,
    "optimizedRisk": 0.6229,
    "faultActive": true
   },
   {
    "t": 40,
    "trueRisk": 0.6342,
    "baselineRisk": 0.1903,
    "optimizedRisk": 0.6342,
    "faultActive": true
   },
   {
    "t": 41,
    "trueRisk": 0.6456,
    "baselineRisk": 0.6456,
    "optimizedRisk": 0.6456,
    "faultActive": false
   },
   {
    "t": 42,
    "trueRisk": 0.6569,
    "baselineRisk": 0.6569,
    "optimizedRisk": 0.6569,
    "faultActive": false
   },
   {
    "t": 43,
    "trueRisk": 0.6683,
    "baselineRisk": 0.6683,
    "optimizedRisk": 0.6683,
    "faultActive": false
   },
   {
    "t": 44,
    "trueRisk": 0.6797,
    "baselineRisk": 0.6797,
    "optimizedRisk": 0.6797,
    "faultActive": false
   },
   {
    "t": 45,
    "trueRisk": 0.691,
    "baselineRisk": 0.691,
    "optimizedRisk": 0.691,
    "faultActive": false
   },
   {
    "t": 46,
    "trueRisk": 0.7024,
    "baselineRisk": 0.7024,
    "optimizedRisk": 0.7024,
    "faultActive": false
   },
   {
    "t": 47,
    "trueRisk": 0.7137,
    "baselineRisk": 0.7137,
    "optimizedRisk": 0.7137,
    "faultActive": false
   },
   {
    "t": 48,
    "trueRisk": 0.7251,
    "baselineRisk": 0.7251,
    "optimizedRisk": 0.7251,
    "faultActive": false
   },
   {
    "t": 49,
    "trueRisk": 0.7364,
    "baselineRisk": 0.7364,
    "optimizedRisk": 0.7364,
    "faultActive": false
   },
   {
    "t": 50,
    "trueRisk": 0.7478,
    "baselineRisk": 0.7478,
    "optimizedRisk": 0.7478,
    "faultActive": false
   },
   {
    "t": 51,
    "trueRisk": 0.7592,
    "baselineRisk": 0.7592,
    "optimizedRisk": 0.7592,
    "faultActive": false
   },
   {
    "t": 52,
    "trueRisk": 0.7705,
    "baselineRisk": 0.7705,
    "optimizedRisk": 0.7705,
    "faultActive": false
   },
   {
    "t": 53,
    "trueRisk": 0.7819,
    "baselineRisk": 0.7819,
    "optimizedRisk": 0.7819,
    "faultActive": false
   },
   {
    "t": 54,
    "trueRisk": 0.7932,
    "baselineRisk": 0.7932,
    "optimizedRisk": 0.7932,
    "faultActive": false
   },
   {
    "t": 55,
    "trueRisk": 0.8046,
    "baselineRisk": 0.8046,
    "optimizedRisk": 0.8046,
    "faultActive": false
   },
   {
    "t": 56,
    "trueRisk": 0.8159,
    "baselineRisk": 0.8159,
    "optimizedRisk": 0.8159,
    "faultActive": false
   },
   {
    "t": 57,
    "trueRisk": 0.8273,
    "baselineRisk": 0.8273,
    "optimizedRisk": 0.8273,
    "faultActive": false
   },
   {
    "t": 58,
    "trueRisk": 0.8386,
    "baselineRisk": 0.8386,
    "optimizedRisk": 0.8386,
    "faultActive": false
   },
   {
    "t": 59,
    "trueRisk": 0.85,
    "baselineRisk": 0.85,
    "optimizedRisk": 0.85,
    "faultActive": false
   }
  ],
  "alert": {
   "fixedThreshold": 0.55,
   "baselineAt": 41,
   "optimizedAt": 33,
   "adaptiveAt": 23,
   "detectionDelay": 18
  },
  "metrics": {
   "samplingSaving": 0.5,
   "reportingSaving": 0.8544,
   "bandwidthBaselinePct": 100,
   "bandwidthOptimizedPct": 7.3,
   "bandwidthSavingPct": 92.7,
   "triggerRate": 0.1456,
   "ellHat": {
    "gas": 1,
    "co": 1,
    "dust": 5,
    "temp": 1,
    "humidity": 1,
    "wind": 1
   },
   "activeSensors": [
    "gas",
    "temp"
   ],
   "fused": 182,
   "encountered": 364,
   "covTrace": 14.618
  }
 },
 "/api/vision/detections": {
  "available": false,
  "reason": "尚未分析过任何帧（监测未启动或视频源为空）",
  "analysis": null,
  "provider": {
   "name": "local_yolo",
   "model": "ppe.pt",
   "configured": true,
   "lastError": null
  },
  "capabilities": {
   "provider": "local_yolo",
   "modelLabels": [],
   "unreachableViolations": [],
   "capabilityCheckAvailable": false,
   "trackingAvailable": false,
   "trackingError": null,
   "maskStatus": {
    "state": "uninitialized",
    "reason": "尚未执行推理",
    "withMask": 0,
    "detections": 0
   }
  }
 },
 "/api/vision/calibration": {
  "sufficient": false,
  "falseAlarmRateSufficient": false,
  "blockers": [
   "已标注样本 6 条 < 最低要求 30 条",
   "正样本 3 条 < 5 条",
   "负样本 3 条 < 5 条"
  ],
  "counts": {
   "labeled": 6,
   "positives": 3,
   "negatives": 3,
   "unlabeled": 5044,
   "distinctConfidences": 3
  },
  "minLabelsRequired": 30,
  "hint": "请在告警处置里对告警标记「确认」或「误报」以积累标签（PATCH /api/alerts/{id}），或先跑一次视觉监测产生带真实置信度的告警。",
  "dispositionActions": 7
 },
 "/api/sites": {
  "active": "macau_demo",
  "sites": [
   {
    "id": "hk_demo",
    "file": "hk_demo.yaml",
    "name": "香港示例工地",
    "location": "Hong Kong",
    "timezone": "Asia/Hong_Kong",
    "workers": 45,
    "bounds": {
     "latMin": 22.3188,
     "latMax": 22.3201,
     "lonMin": 114.1685,
     "lonMax": 114.1698
    },
    "zones": 4,
    "fleet": 3,
    "valid": true
   },
   {
    "id": "macau_demo",
    "file": "macau_demo.yaml",
    "name": "澳门演示工地",
    "location": "Macau",
    "timezone": "Asia/Macau",
    "workers": 100,
    "bounds": {
     "latMin": 22.1982,
     "latMax": 22.1995,
     "lonMin": 113.5431,
     "lonMax": 113.5444
    },
    "zones": 5,
    "fleet": 7,
    "valid": true
   }
  ]
 },
 "/api/sites/summary": {
  "active": "macau_demo",
  "sites": [
   {
    "id": "hk_demo",
    "name": "香港示例工地",
    "configured": true,
    "valid": true,
    "zones": 4,
    "fleet": 3,
    "workers": 45,
    "alerts": 0,
    "pendingAlerts": 0,
    "telemetryRows": 0,
    "active": false
   },
   {
    "id": "macau_demo",
    "name": "澳门演示工地",
    "configured": true,
    "valid": true,
    "zones": 5,
    "fleet": 7,
    "workers": 100,
    "alerts": 5050,
    "pendingAlerts": 5044,
    "telemetryRows": 750553,
    "active": true
   }
  ]
 },
 "/api/users": [
  {
   "id": "7c18b4732ba654bce6ead809",
   "username": "admin",
   "role": "admin",
   "roleLabel": "管理员",
   "createdAt": "2026-08-02 01:57:11",
   "isActive": true
  }
 ],
 "/api/agents": {
  "step": 92,
  "risk": 0.109,
  "budget": 2,
  "hardwareMode": "simulation",
  "counts": {
   "drone": 2,
   "robot": 2,
   "camera": 3
  },
  "policy": "mi",
  "policyLabel": "信息增益/代价（MI 升维）",
  "weights": {
   "severity": 1,
   "capability": 1,
   "risk": 0.8,
   "staleness": 0.45,
   "battery": 0.6
  },
  "policies": {
   "mi": "信息增益/代价（MI 升维）",
   "nearest": "就近派单",
   "random": "随机派单",
   "round_robin": "轮询派单"
  },
  "budgetUsed": 2,
  "obstacles": [
   {
    "x0": 0.3,
    "y0": 0.3,
    "x1": 0.42,
    "y1": 0.42
   },
   {
    "x0": 0.55,
    "y0": 0.12,
    "x1": 0.7,
    "y1": 0.24
   },
   {
    "x0": 0.14,
    "y0": 0.44,
    "x1": 0.26,
    "y1": 0.58
   },
   {
    "x0": 0.62,
    "y0": 0.6,
    "x1": 0.74,
    "y1": 0.72
   },
   {
    "x0": 0.44,
    "y0": 0.74,
    "x1": 0.56,
    "y1": 0.84
   }
  ],
  "routing": {
   "gridN": 48,
   "detourExtra": 0.542,
   "blockedLegs": 8,
   "airIgnoresGroundObstacles": true,
   "replans": 11
  },
  "dynamics": {
   "enabled": true,
   "stepSeconds": 2,
   "kinds": {
    "drone": {
     "label": "无人机",
     "layer": "air",
     "maxSpeed": 0.2,
     "accel": 0.07,
     "decel": 0.11,
     "turnDeg": 45,
     "latencySec": 0.35,
     "maxSpeedMps": 10,
     "accelMps2": 1.75,
     "decelMps2": 2.75,
     "yawRateDegPerSec": 22.5,
     "maxTiltDeg": 10.1
    },
    "robot": {
     "label": "四足机器人",
     "layer": "ground",
     "maxSpeed": 0.11,
     "accel": 0.03,
     "decel": 0.045,
     "turnDeg": 20,
     "latencySec": 0.6,
     "maxSpeedMps": 5.5,
     "accelMps2": 0.75,
     "decelMps2": 1.12,
     "yawRateDegPerSec": 10
    },
    "camera": {
     "label": "固定枪机",
     "layer": "fixed",
     "maxSpeed": 0,
     "accel": 0,
     "decel": 0,
     "turnDeg": 0,
     "latencySec": 0,
     "maxSpeedMps": 0,
     "accelMps2": 0,
     "decelMps2": 0,
     "yawRateDegPerSec": 0
    }
   },
   "scale": {
    "metresPerUnit": 100,
    "secondsPerStep": 2,
    "gravityMps2": 9.81
   },
   "attitudeModel": "点质量 + 偏航；多旋翼水平加速度=倾角（a=g·tanθ），故倾角上限即加速度上限，不另设常数",
   "safetyStops": 13,
   "maxLag": 0.2644,
   "maxOvershoot": 0.0927,
   "maxSpeedSeen": 0.2,
   "maxTurnDegSeen": 45
  },
  "localPlanning": {
   "algorithm": "dwa",
   "reference": "Fox, Burgard & Thrun, IEEE RAM 4(1), 1997",
   "enabled": true,
   "weights": {
    "alpha": 0.6,
    "beta": 1,
    "gamma": 0.4
   },
   "horizon": 3,
   "evaluations": 11817,
   "infeasible": 7,
   "avoidanceSteps": 147,
   "commitSec": 2,
   "guideSec": 4,
   "predictSubSteps": 4,
   "steerDeltaDeg": 54.75,
   "minAgentGap": 0.0492,
   "qLearning": {
    "attached": false,
    "enabled": false,
    "epsilon": 0.1,
    "steps": 0,
    "unknownStates": 0,
    "episodes": 0,
    "seed": null,
    "states": 0
   }
  },
  "zones": [
   {
    "id": "zone_pit_a",
    "label": "基坑区 A",
    "severity": "critical",
    "points": [
     [
      0.14,
      0.44
     ],
     [
      0.26,
      0.44
     ],
     [
      0.26,
      0.58
     ],
     [
      0.14,
      0.58
     ]
    ],
    "x": 0.2,
    "y": 0.51,
    "visitedStep": 57,
    "covered": true
   },
   {
    "id": "zone_crane_b",
    "label": "塔吊回转区 B",
    "severity": "critical",
    "points": [
     [
      0.3,
      0.3
     ],
     [
      0.42,
      0.3
     ],
     [
      0.42,
      0.42
     ],
     [
      0.3,
      0.42
     ]
    ],
    "x": 0.36,
    "y": 0.36,
    "visitedStep": 79,
    "covered": true
   },
   {
    "id": "zone_material_c",
    "label": "材料堆放区 C",
    "severity": "warning",
    "points": [
     [
      0.55,
      0.12
     ],
     [
      0.7,
      0.12
     ],
     [
      0.7,
      0.24
     ],
     [
      0.55,
      0.24
     ]
    ],
    "x": 0.625,
    "y": 0.18,
    "visitedStep": 89,
    "covered": true
   },
   {
    "id": "zone_shed_d",
    "label": "临时加工棚 D",
    "severity": "warning",
    "points": [
     [
      0.62,
      0.6
     ],
     [
      0.74,
      0.6
     ],
     [
      0.74,
      0.72
     ],
     [
      0.62,
      0.72
     ]
    ],
    "x": 0.68,
    "y": 0.66,
    "visitedStep": 34,
    "covered": true
   },
   {
    "id": "zone_curing_e",
    "label": "混凝土养护区 E",
    "severity": "info",
    "points": [
     [
      0.44,
      0.74
     ],
     [
      0.56,
      0.74
     ],
     [
      0.56,
      0.84
     ],
     [
      0.44,
      0.84
     ]
    ],
    "x": 0.5,
    "y": 0.79,
    "visitedStep": null,
    "covered": false
   }
  ],
  "workers": [
   {
    "workerId": "W001",
    "name": "张三",
    "x": 0.6073,
    "y": 0.2447
   },
   {
    "workerId": "W002",
    "name": "李四",
    "x": 0.4892,
    "y": 0.3362
   },
   {
    "workerId": "W003",
    "name": "王五",
    "x": 0.4945,
    "y": 0.2828
   }
  ],
  "agents": [
   {
    "id": "drone_01",
    "kind": "drone",
    "kindLabel": "无人机",
    "layer": "air",
    "color": "#36cbd2",
    "caps": [
     "vision",
     "thermal"
    ],
    "capsLabel": "可见光 / 热成像",
    "x": 0.3153,
    "y": 0.1672,
    "homeX": 0.14,
    "homeY": 0.16,
    "battery": 86,
    "status": "returning",
    "target": [
     0.14,
     0.16
    ],
    "task": {
     "reason": "alert",
     "label": "材料堆放区 C · 进入危险区域：材料堆放区 C",
     "target": [
      0.625,
      0.18
     ],
     "ref": "02ABCF7B63"
    },
    "tasksDone": 7,
    "mobile": true,
    "lastSample": {
     "step": 89,
     "agentId": "drone_01",
     "zone": "材料堆放区 C",
     "kind": "热成像测温",
     "value": 48.3,
     "unit": "℃"
    },
    "route": [
     [
      0.14,
      0.16
     ]
    ]
   },
   {
    "id": "drone_02",
    "kind": "drone",
    "kindLabel": "无人机",
    "layer": "air",
    "color": "#36cbd2",
    "caps": [
     "vision",
     "thermal"
    ],
    "capsLabel": "可见光 / 热成像",
    "x": 0.5827,
    "y": 0.3186,
    "homeX": 0.86,
    "homeY": 0.18,
    "battery": 92.1,
    "status": "en_route",
    "target": [
     0.2,
     0.51
    ],
    "task": {
     "reason": "mi",
     "label": "基坑区 A · 主动采样",
     "target": [
      0.2,
      0.51
     ],
     "ref": null
    },
    "tasksDone": 6,
    "mobile": true,
    "lastSample": {
     "step": 82,
     "agentId": "drone_02",
     "zone": "材料堆放区 C",
     "kind": "热成像测温",
     "value": 48.4,
     "unit": "℃"
    },
    "route": [
     [
      0.2,
      0.51
     ]
    ]
   },
   {
    "id": "robot_01",
    "kind": "robot",
    "kindLabel": "四足机器人",
    "layer": "ground",
    "color": "#8b5cf6",
    "caps": [
     "vision",
     "gas",
     "audio"
    ],
    "capsLabel": "可见光 / 气体 / 喊话",
    "x": 0.6304,
    "y": 0.9984,
    "homeX": 0.2,
    "homeY": 0.8,
    "battery": 55.7,
    "status": "returning",
    "target": [
     0.2,
     0.8
    ],
    "task": {
     "reason": "alert",
     "label": "塔吊回转区 B · 进入危险区域：塔吊回转区 B",
     "target": [
      0.36,
      0.36
     ],
     "ref": "28D15314F1"
    },
    "tasksDone": 1,
    "mobile": true,
    "lastSample": {
     "step": 41,
     "agentId": "robot_01",
     "zone": "塔吊回转区 B",
     "kind": "可燃气体(LEL)",
     "value": 4.3,
     "unit": "%"
    },
    "route": [
     [
      0.6146,
      0.9896
     ],
     [
      0.5938,
      0.9896
     ],
     [
      0.5729,
      0.9688
     ],
     [
      0.5521,
      0.9688
     ],
     [
      0.5104,
      0.9271
     ],
     [
      0.4688,
      0.9271
     ]
    ]
   },
   {
    "id": "robot_02",
    "kind": "robot",
    "kindLabel": "四足机器人",
    "layer": "ground",
    "color": "#8b5cf6",
    "caps": [
     "vision",
     "gas",
     "audio"
    ],
    "capsLabel": "可见光 / 气体 / 喊话",
    "x": 0.1919,
    "y": 0.4172,
    "homeX": 0.8,
    "homeY": 0.82,
    "battery": 57.9,
    "status": "en_route",
    "target": [
     0.68,
     0.66
    ],
    "task": {
     "reason": "mi",
     "label": "临时加工棚 D · 主动采样",
     "target": [
      0.68,
      0.66
     ],
     "ref": null
    },
    "tasksDone": 1,
    "mobile": true,
    "lastSample": {
     "step": 34,
     "agentId": "robot_02",
     "zone": "临时加工棚 D",
     "kind": "可燃气体(LEL)",
     "value": 5.4,
     "unit": "%"
    },
    "route": [
     [
      0.2188,
      0.4271
     ],
     [
      0.2812,
      0.4271
     ],
     [
      0.2812,
      0.4479
     ],
     [
      0.3021,
      0.4479
     ],
     [
      0.3438,
      0.4896
     ],
     [
      0.4271,
      0.4896
     ]
    ]
   },
   {
    "id": "cam_01",
    "kind": "camera",
    "kindLabel": "固定枪机",
    "layer": "fixed",
    "color": "#5cd5ab",
    "caps": [
     "vision"
    ],
    "capsLabel": "可见光（常态值守）",
    "x": 0.1,
    "y": 0.5,
    "homeX": 0.1,
    "homeY": 0.5,
    "battery": 100,
    "status": "idle",
    "target": null,
    "task": null,
    "tasksDone": 0,
    "mobile": false,
    "lastSample": {
     "step": 88,
     "agentId": "cam_01",
     "zone": "基坑区 A",
     "kind": "可见光人员计数",
     "value": 2,
     "unit": "人"
    },
    "route": []
   },
   {
    "id": "cam_02",
    "kind": "camera",
    "kindLabel": "固定枪机",
    "layer": "fixed",
    "color": "#5cd5ab",
    "caps": [
     "vision"
    ],
    "capsLabel": "可见光（常态值守）",
    "x": 0.9,
    "y": 0.52,
    "homeX": 0.9,
    "homeY": 0.52,
    "battery": 100,
    "status": "idle",
    "target": null,
    "task": null,
    "tasksDone": 0,
    "mobile": false,
    "lastSample": {
     "step": 88,
     "agentId": "cam_02",
     "zone": "临时加工棚 D",
     "kind": "可见光人员计数",
     "value": 3,
     "unit": "人"
    },
    "route": []
   },
   {
    "id": "cam_03",
    "kind": "camera",
    "kindLabel": "固定枪机",
    "layer": "fixed",
    "color": "#5cd5ab",
    "caps": [
     "vision"
    ],
    "capsLabel": "可见光（常态值守）",
    "x": 0.5,
    "y": 0.06,
    "homeX": 0.5,
    "homeY": 0.06,
    "battery": 100,
    "status": "idle",
    "target": null,
    "task": null,
    "tasksDone": 0,
    "mobile": false,
    "lastSample": {
     "step": 88,
     "agentId": "cam_03",
     "zone": "材料堆放区 C",
     "kind": "可见光人员计数",
     "value": 1,
     "unit": "人"
    },
    "route": []
   }
  ],
  "log": [
   {
    "step": 90,
    "agentId": "drone_02",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "基坑区 A · 主动采样",
    "state": "派单"
   },
   {
    "step": 89,
    "agentId": "drone_01",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "alert",
    "reasonLabel": "告警复核",
    "targetLabel": "材料堆放区 C",
    "state": "已复核"
   },
   {
    "step": 86,
    "agentId": "drone_01",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "alert",
    "reasonLabel": "告警复核",
    "targetLabel": "材料堆放区 C · 进入危险区域：材料堆放区 C",
    "state": "抵达"
   },
   {
    "step": 83,
    "agentId": "drone_01",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "alert",
    "reasonLabel": "告警复核",
    "targetLabel": "材料堆放区 C · 进入危险区域：材料堆放区 C",
    "state": "派单"
   },
   {
    "step": 78,
    "agentId": "drone_02",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "材料堆放区 C · 主动采样",
    "state": "抵达"
   },
   {
    "step": 77,
    "agentId": "drone_02",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "材料堆放区 C · 主动采样",
    "state": "派单"
   },
   {
    "step": 75,
    "agentId": "drone_01",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "塔吊回转区 B · 主动采样",
    "state": "抵达"
   },
   {
    "step": 73,
    "agentId": "drone_01",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "塔吊回转区 B · 主动采样",
    "state": "派单"
   },
   {
    "step": 65,
    "agentId": "drone_02",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "材料堆放区 C · 主动采样",
    "state": "抵达"
   },
   {
    "step": 64,
    "agentId": "drone_02",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "材料堆放区 C · 主动采样",
    "state": "派单"
   },
   {
    "step": 60,
    "agentId": "drone_01",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "塔吊回转区 B · 主动采样",
    "state": "抵达"
   },
   {
    "step": 58,
    "agentId": "drone_01",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "塔吊回转区 B · 主动采样",
    "state": "派单"
   },
   {
    "step": 53,
    "agentId": "drone_02",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "基坑区 A · 主动采样",
    "state": "抵达"
   },
   {
    "step": 51,
    "agentId": "robot_02",
    "kind": "robot",
    "kindLabel": "四足机器人",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "临时加工棚 D · 主动采样",
    "state": "派单"
   },
   {
    "step": 49,
    "agentId": "drone_02",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "基坑区 A · 主动采样",
    "state": "派单"
   },
   {
    "step": 47,
    "agentId": "drone_01",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "基坑区 A · 主动采样",
    "state": "抵达"
   },
   {
    "step": 45,
    "agentId": "drone_01",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "基坑区 A · 主动采样",
    "state": "派单"
   },
   {
    "step": 43,
    "agentId": "drone_02",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "材料堆放区 C · 主动采样",
    "state": "抵达"
   },
   {
    "step": 42,
    "agentId": "drone_02",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "材料堆放区 C · 主动采样",
    "state": "派单"
   },
   {
    "step": 41,
    "agentId": "robot_01",
    "kind": "robot",
    "kindLabel": "四足机器人",
    "reason": "alert",
    "reasonLabel": "告警复核",
    "targetLabel": "塔吊回转区 B",
    "state": "已复核"
   },
   {
    "step": 38,
    "agentId": "robot_01",
    "kind": "robot",
    "kindLabel": "四足机器人",
    "reason": "alert",
    "reasonLabel": "告警复核",
    "targetLabel": "塔吊回转区 B · 进入危险区域：塔吊回转区 B",
    "state": "抵达"
   },
   {
    "step": 37,
    "agentId": "drone_01",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "塔吊回转区 B · 主动采样",
    "state": "抵达"
   },
   {
    "step": 35,
    "agentId": "drone_01",
    "kind": "drone",
    "kindLabel": "无人机",
    "reason": "mi",
    "reasonLabel": "主动采样",
    "targetLabel": "塔吊回转区 B · 主动采样",
    "state": "派单"
   },
   {
    "step": 34,
    "agentId": "robot_02",
    "kind": "robot",
    "kindLabel": "四足机器人",
    "reason": "alert",
    "reasonLabel": "告警复核",
    "targetLabel": "临时加工棚 D",
    "state": "已复核"
   }
  ],
  "metrics": {
   "dispatches": 17,
   "auto": 17,
   "manual": 0,
   "alertDispatches": 4,
   "verified": 4,
   "samples": 33,
   "avgResponseSteps": 6.7,
   "coveragePct": 80,
   "mobileOnline": 4,
   "mobileTotal": 4,
   "distance": 17.21,
   "alertLatencySteps": 20.5,
   "visitCounts": {
    "zone_material_c": 5,
    "zone_crane_b": 6,
    "zone_pit_a": 3,
    "zone_shed_d": 1
   },
   "balanceStd": 1.92,
   "criticalCoveragePct": 100,
   "riskWeightedVisits": 12.9,
   "coveragePerDistance": 0.749
  }
 },
 "/api/agents/compare": {
  "steps": 220,
  "risk": 0.5,
  "zones": 6,
  "rows": [
   {
    "policy": "mi",
    "label": "信息增益/代价（MI 升维）",
    "dispatches": 76,
    "coveragePct": 83.3,
    "criticalCoveragePct": 100,
    "avgResponseSteps": 3.6,
    "alertLatencySteps": 17,
    "verified": 4,
    "samples": 156,
    "distance": 23.91,
    "balanceStd": 11.983,
    "riskWeightedVisits": 67.3,
    "coveragePerDistance": 2.815
   },
   {
    "policy": "nearest",
    "label": "就近派单",
    "dispatches": 80,
    "coveragePct": 66.7,
    "criticalCoveragePct": 66.7,
    "avgResponseSteps": 3.9,
    "alertLatencySteps": 17.8,
    "verified": 4,
    "samples": 160,
    "distance": 25.74,
    "balanceStd": 15.159,
    "riskWeightedVisits": 64.65,
    "coveragePerDistance": 2.511
   },
   {
    "policy": "random",
    "label": "随机派单",
    "dispatches": 47,
    "coveragePct": 83.3,
    "criticalCoveragePct": 66.7,
    "avgResponseSteps": 9.2,
    "alertLatencySteps": 16.8,
    "verified": 4,
    "samples": 127,
    "distance": 54.69,
    "balanceStd": 3.35,
    "riskWeightedVisits": 35.85,
    "coveragePerDistance": 0.655
   },
   {
    "policy": "round_robin",
    "label": "轮询派单",
    "dispatches": 43,
    "coveragePct": 100,
    "criticalCoveragePct": 100,
    "avgResponseSteps": 9.3,
    "alertLatencySteps": 16.2,
    "verified": 4,
    "samples": 122,
    "distance": 54.49,
    "balanceStd": 0.898,
    "riskWeightedVisits": 34.35,
    "coveragePerDistance": 0.63
   }
  ],
  "best": "mi",
  "bestLabel": "信息增益/代价（MI 升维）",
  "weights": {
   "severity": 1,
   "capability": 1,
   "risk": 0.8,
   "staleness": 0.45,
   "battery": 0.6
  },
  "conclusion": "安全优先看高危区覆盖率：信息增益/代价（MI 升维） 100.0%，就近派单 66.7%（差 33.3 个百分点）。就近派单这一次里程反而更高（25.74 vs 23.91），且仍然漏巡部分高危区；随机/轮询覆盖全、里程却浪费数倍。因此本系统默认用信息增益/代价派单——同等预算下高危区零漏覆盖，权重可在线调。"
 },
 "/api/agents/policies": {
  "policy": "mi",
  "weights": {
   "severity": 1,
   "capability": 1,
   "risk": 0.8,
   "staleness": 0.45,
   "battery": 0.6
  },
  "policies": {
   "mi": "信息增益/代价（MI 升维）",
   "nearest": "就近派单",
   "random": "随机派单",
   "round_robin": "轮询派单"
  },
  "defaults": {
   "severity": 1,
   "capability": 1,
   "risk": 0.8,
   "staleness": 0.45,
   "battery": 0.6
  },
  "dwa": {
   "enabled": true,
   "weights": {
    "alpha": 0.6,
    "beta": 1,
    "gamma": 0.4
   },
   "defaults": {
    "alpha": 0.6,
    "beta": 1,
    "gamma": 0.4
   }
  }
 },
 "/api/agents/qlearning": {
  "qtable": {
   "available": true,
   "path": "weights/qtable_local_nav.json",
   "sizeBytes": 1276971,
   "modifiedAt": "2026-09-30T23:36:48",
   "kind": "tabular_q_learning_local_nav",
   "note": "表格型 Q-learning（查表法，不用神经网络）：状态=(格点, 子目标八分方位)，动作=八邻域移动",
   "gridN": 48,
   "actions": 8,
   "episodes": 120000,
   "maxEpisodeSteps": 120,
   "alpha": 0.25,
   "gamma": 0.95,
   "epsilonSchedule": {
    "start": 0.6,
    "end": 0.02
   },
   "rewards": {
    "block": -20,
    "goal": 50,
    "step": -1
   },
   "states": 15944,
   "seed": 20260918,
   "trainSeconds": 10.4,
   "history": [
    {
     "episode": 20000,
     "meanSteps": 33.3,
     "states": 15684,
     "successRate": 0.183
    },
    {
     "episode": 40000,
     "meanSteps": 36.2,
     "states": 15873,
     "successRate": 0.311
    },
    {
     "episode": 60000,
     "meanSteps": 34.6,
     "states": 15915,
     "successRate": 0.448
    },
    {
     "episode": 80000,
     "meanSteps": 31.8,
     "states": 15932,
     "successRate": 0.568
    },
    {
     "episode": 100000,
     "meanSteps": 29.2,
     "states": 15936,
     "successRate": 0.647
    },
    {
     "episode": 120000,
     "meanSteps": 29.8,
     "states": 15944,
     "successRate": 0.662
    }
   ],
   "holdout": {
    "greedySuccessRate": 0.383,
    "randomSuccessRate": 0.14,
    "samples": 600
   }
  },
  "comparison": {
   "available": true,
   "path": "output/qlearning_compare.json",
   "modifiedAt": "2026-09-30T23:36:48",
   "kind": "fleet_local_planner_compare",
   "generatedAt": "2026-09-30T18:49:28",
   "steps": 220,
   "gridN": 48,
   "sameScenarioSameSeed": true,
   "planners": [
    "dwa",
    "qlearning",
    "pursuit"
   ],
   "labels": {
    "dwa": "DWA（动态窗口法）",
    "qlearning": "Q-learning（学习式基线）",
    "pursuit": "纯追踪（无局部避障）"
   },
   "rows": {
    "dwa": {
     "stops": 32,
     "distance": 49.2,
     "dispatches": 50,
     "coverage": 100,
     "intrusions": 0,
     "minClear": 0.009,
     "replans": 31,
     "q": {
      "attached": false,
      "enabled": false,
      "epsilon": 0.1,
      "steps": 0,
      "unknownStates": 0,
      "episodes": 0,
      "seed": null,
      "states": 0
     }
    },
    "qlearning": {
     "stops": 208,
     "distance": 37.51,
     "dispatches": 16,
     "coverage": 100,
     "intrusions": 0,
     "minClear": 0.0029,
     "replans": 52,
     "q": {
      "attached": true,
      "enabled": true,
      "epsilon": 0.1,
      "steps": 778,
      "unknownStates": 68,
      "episodes": 120000,
      "seed": 20260918,
      "states": 15944
     }
    },
    "pursuit": {
     "stops": 52,
     "distance": 34.66,
     "dispatches": 54,
     "coverage": 100,
     "intrusions": 0,
     "minClear": 0.0032,
     "replans": 43,
     "q": {
      "attached": false,
      "enabled": false,
      "epsilon": 0.1,
      "steps": 0,
      "unknownStates": 0,
      "episodes": 0,
      "seed": null,
      "states": 0
     }
    }
   },
   "note": "同场景同种子的离线仿真对照；穿障是安全底线不是比较项（三方都必须为 0）。"
  },
  "trainScript": "scripts/train_q_local_nav.py",
  "checkScript": "scripts/fleet_qlearning_check.py"
 },
 "/api/platform/checks": {
  "checks": [
   {
    "name": "facts",
    "label": "数字对账（文档 vs 单一来源）",
    "script": "scripts/reconcile_facts.py",
    "args": [
     "--strict"
    ],
    "timeout": 90,
    "heavy": false,
    "note": "文档里的关键数字是否与 docs/facts.json 一致",
    "needs": "",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "calibration",
    "label": "置信度校准估计器（手算期望值）",
    "script": "scripts/calibration_selftest.py",
    "args": [],
    "timeout": 90,
    "heavy": false,
    "note": "可靠性曲线/ECE/误报率/阈值的公式是否算得对",
    "needs": "",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "routing",
    "label": "机队地面绕障（A3）",
    "script": "scripts/fleet_routing_check.py",
    "args": [],
    "timeout": 180,
    "heavy": false,
    "note": "地面机器是否真的绕开障碍、无人机是否直飞",
    "needs": "",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "qlearning",
    "label": "学习式基线（A6：Q-learning 曲线/留出集/三方对照）",
    "script": "scripts/fleet_qlearning_check.py",
    "args": [
     "--json",
     "output/qlearning_compare.json"
    ],
    "timeout": 900,
    "heavy": true,
    "note": "跑一次会同时刷新 output/qlearning_compare.json",
    "needs": "weights/qtable_local_nav.json",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "dwa",
    "label": "局部避障 DWA（A5：动态窗口/预测一致/权重消融）",
    "script": "scripts/fleet_dwa_check.py",
    "args": [],
    "timeout": 900,
    "heavy": true,
    "note": "控制量是否真在动态窗口内、三项打分的消融后果",
    "needs": "",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "dynamics",
    "label": "动力学与感知延迟（A4）",
    "script": "scripts/fleet_dynamics_check.py",
    "args": [],
    "timeout": 900,
    "heavy": true,
    "note": "加速度/转率上限是否真管着运动、感知延迟是否真有后果",
    "needs": "",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "mask",
    "label": "掩码链路（A1 显式降级）",
    "script": "scripts/mask_pipeline_check.py",
    "args": [],
    "timeout": 90,
    "heavy": false,
    "note": "掩码错配是否拒绝挂载、下游是否真走多边形",
    "needs": "",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "reflow",
    "label": "难例回流→影子评估→灰度（D1）",
    "script": "scripts/reflow_pipeline_check.py",
    "args": [],
    "timeout": 90,
    "heavy": false,
    "note": "标签不许自动编、门槛必须拦下好看的坏候选",
    "needs": "",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "adapter",
    "label": "真机适配器契约（D2）",
    "script": "scripts/adapter_conformance.py",
    "args": [],
    "timeout": 90,
    "heavy": false,
    "note": "两个实现都过、故意写坏的实现必须被判不合格",
    "needs": "",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "thresholds",
    "label": "阈值配置化（同一读数两工地结论不同）",
    "script": "scripts/site_thresholds_check.py",
    "args": [],
    "timeout": 180,
    "heavy": false,
    "note": "阈值是否真的随工地生效",
    "needs": "",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "sites",
    "label": "多工地配置（含字段登记守卫）",
    "script": "scripts/site_config_check.py",
    "args": [],
    "timeout": 180,
    "heavy": false,
    "note": "坏配置逐类被拒 + 每个字段要么驱动行为要么登记为元信息",
    "needs": "",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "roi",
    "label": "ROI 复算（与文档口径自洽）",
    "script": "scripts/roi_calculator.py",
    "args": [],
    "timeout": 90,
    "heavy": false,
    "note": "含/不含研发两种口径",
    "needs": "",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "edge",
    "label": "边缘回传测算（C5）",
    "script": "scripts/edge_profile.py",
    "args": [],
    "timeout": 240,
    "heavy": true,
    "note": "实测编码体积与预处理耗时，验证边缘预处理结论",
    "needs": "",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "quantization",
    "label": "量化全链路（D3 真实模型 INT8）",
    "script": "scripts/quantize_onnx_demo.py",
    "args": [],
    "timeout": 900,
    "heavy": true,
    "note": "真做一次 FP32→INT8 并比对",
    "needs": "onnx/onnxruntime + 一个 .onnx 模型",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "weights",
    "label": "真机权重接入（平台真在用 ppe.onnx）",
    "script": "scripts/real_weights_e2e.py",
    "args": [],
    "timeout": 300,
    "heavy": true,
    "note": "会自己起一个临时后端（端口 8770）",
    "needs": "weights/ppe.onnx",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "multisite",
    "label": "多工地端到端（起两个真实后端）",
    "script": "scripts/multisite_e2e.py",
    "args": [],
    "timeout": 600,
    "heavy": true,
    "note": "会占用 8765-8769 端口，逐项比对接口与配置",
    "needs": "",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "browser",
    "label": "真跑自检（无头浏览器）",
    "script": "tools/browser-check.mjs",
    "args": [],
    "timeout": 420,
    "heavy": true,
    "note": "会登录、点页面、处置 2 条告警、切换工地",
    "needs": "Node + Edge",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   },
   {
    "name": "webrtc",
    "label": "WebRTC 真跑（真实对端解帧）",
    "script": "tools/webrtc-check.mjs",
    "args": [],
    "timeout": 300,
    "heavy": true,
    "note": "会建真实 PeerConnection，并上传两段测试视频",
    "needs": "aiortc + Edge",
    "last": null,
    "ageSeconds": null,
    "stale": false,
    "neverRun": true
   }
  ],
  "summary": {
   "total": 18,
   "pass": 0,
   "fail": 0,
   "skipped": 0,
   "neverRun": 18,
   "stale": 0
  },
  "staleAfterSeconds": 43200,
  "artifacts": {
   "edgeProfile": {
    "available": true,
    "path": "output/edge_profile.json",
    "sizeBytes": 1419,
    "modifiedAt": "2026-09-30T23:36:48",
    "data": {
     "measuredAt": "2026-09-30T17:50:11",
     "fpsAssumption": 15,
     "profiles": [
      {
       "label": "原始 1080p",
       "width": 1920,
       "height": 1080,
       "quality": 85,
       "medianBytes": 498345,
       "encodeMs": 5.34,
       "preprocessMs": 10.72
      },
      {
       "label": "原始 720p",
       "width": 1280,
       "height": 720,
       "quality": 85,
       "medianBytes": 225837,
       "encodeMs": 1.85,
       "preprocessMs": 3.97
      },
      {
       "label": "边缘预处理 640×480",
       "width": 640,
       "height": 480,
       "quality": 80,
       "medianBytes": 61821,
       "encodeMs": 0.56,
       "preprocessMs": 1.15
      },
      {
       "label": "边缘预处理 320×240",
       "width": 320,
       "height": 240,
       "quality": 70,
       "medianBytes": 12657,
       "encodeMs": 0.12,
       "preprocessMs": 0.21
      },
      {
       "label": "边缘预处理 256×192",
       "width": 256,
       "height": 192,
       "quality": 60,
       "medianBytes": 7128,
       "encodeMs": 0.08,
       "preprocessMs": 0.21
      }
     ],
     "baselineMbps": 59.801,
     "edgeMbps": 1.519,
     "eventRate": {
      "available": true,
      "alerts": 484,
      "spanHours": 504.67,
      "alertsPerHour": 0.96,
      "peakFramesPerSecond": 0.00027
     },
     "eventMbps": 0.000027,
     "note": "合成纹理画面 + 本机实测；WebRTC 未实现；模型量化未做"
    }
   },
   "weightsProbe": {
    "available": true,
    "path": "output/real_weights_probe.json",
    "sizeBytes": 9260,
    "modifiedAt": "2026-09-30T23:36:48",
    "data": {
     "models": [
      {
       "path": "D:\\ds\\_workspace\\models\\ppe.pt",
       "name": "ppe.pt",
       "sizeMB": 5.96,
       "task": "detect",
       "classes": [
        "Hardhat",
        "Mask",
        "NO-Hardhat",
        "NO-Mask",
        "NO-Safety Vest",
        "Person",
        "Safety Cone",
        "Safety Vest",
        "machinery",
        "vehicle"
       ],
       "classCount": 10,
       "detections": [
        {
         "image": "categories.jpg",
         "detections": [
          {
           "label": "machinery",
           "confidence": 0.8383
          },
          {
           "label": "Person",
           "confidence": 0.8123
          },
          {
           "label": "machinery",
           "confidence": 0.7567
          },
          {
           "label": "Person",
           "confidence": 0.7014
          },
          {
           "label": "machinery",
           "confidence": 0.6868
          },
          {
           "label": "Hardhat",
           "confidence": 0.682
          },
          {
           "label": "Person",
           "confidence": 0.626
          },
          {
           "label": "Safety Vest",
           "confidence": 0.5766
          },
          {
           "label": "machinery",
           "confidence": 0.57
          },
          {
           "label": "Person",
           "confidence": 0.3619
          },
          {
           "label": "Person",
           "confidence": 0.3543
          },
          {
           "label": "NO-Mask",
           "confidence": 0.2818
          }
         ],
         "maskPolygons": 0
        },
        {
         "image": "frame_01.jpg",
         "detections": [
          {
           "label": "Person",
           "confidence": 0.6211
          },
          {
           "label": "machinery",
           "confidence": 0.5641
          },
          {
           "label": "machinery",
           "confidence": 0.3184
          },
          {
           "label": "Person",
           "confidence": 0.3138
          },
          {
           "label": "machinery",
           "confidence": 0.2976
          },
          {
           "label": "machinery",
           "confidence": 0.2631
          }
         ],
         "maskPolygons": 0
        },
        {
         "image": "frame_02.jpg",
         "detections": [
          {
           "label": "machinery",
           "confidence": 0.7673
          },
          {
           "label": "machinery",
           "confidence": 0.7559
          },
          {
           "label": "machinery",
           "confidence": 0.5474
          },
          {
           "label": "machinery",
           "confidence": 0.458
          },
          {
           "label": "machinery",
           "confidence": 0.3088
          },
          {
           "label": "Person",
           "confidence": 0.2822
          },
          {
           "label": "machinery",
           "confidence": 0.2795
          }
         ],
         "maskPolygons": 0
        },
        {
         "image": "frame_03.jpg",
         "detections": [
          {
           "label": "machinery",
           "confidence": 0.8601
          },
          {
           "label": "machinery",
           "confidence": 0.7972
          },
          {
           "label": "Person",
           "confidence": 0.793
          },
          {
           "label": "machinery",
           "confidence": 0.4819
          },
          {
           "label": "Person",
           "confidence": 0.3632
          },
          {
           "label": "Person",
           "confidence": 0.3232
          },
          {
           "label": "machinery",
           "confidence": 0.3154
          },
          {
           "label": "Person",
           "confidence": 0.3085
          },
          {
           "label": "machinery",
           "confidence": 0.274
          },
          {
           "label": "machinery",
           "confidence": 0.2572
          }
         ],
         "maskPolygons": 0
        },
        {
         "image": "frame_04.jpg",
         "detections": [
          {
           "label": "machinery",
           "confidence": 0.8704
          },
          {
           "label": "Person",
           "confidence": 0.7035
          },
          {
           "label": "Person",
           "confidence": 0.5621
          },
          {
           "label": "machinery",
           "confidence": 0.4276
          },
          {
           "label": "machinery",
           "confidence": 0.4017
          },
          {
           "label": "machinery",
           "confidence": 0.2877
          }
         ],
         "maskPolygons": 0
        },
        {
         "image": "statistics.jpg",
         "detections": [
          {
           "label": "Person",
           "confidence": 0.8496
          },
          {
           "label": "Person",
           "confidence": 0.8347
          },
          {
           "label": "Person",
           "confidence": 0.5756
          },
          {
           "label": "Person",
           "confidence": 0.4435
          },
          {
           "label": "Person",
           "confidence": 0.4288
          },
          {
           "label": "Person",
           "confidence": 0.4066
          },
          {
           "label": "Safety Cone",
           "confidence": 0.2891
          }
         ],
         "maskPolygons": 0
        }
       ],
       "totalDetections": 48,
       "maskPolygons": 0,
       "confidenceStats": {
        "count": 48,
        "min": 0.2572,
        "max": 0.8704,
        "mean": 0.5183,
        "distinct": 34
       }
      },
      {
       "path": "D:\\ds\\double_eyes\\models\\fish_seg_best.pt",
       "name": "fish_seg_best.pt",
       "sizeMB": 6.45,
       "task": "segment",
       "classes": [
        "Fish"
       ],
       "classCount": 1,
       "detections": [
        {
         "image": "categories.jpg",
         "detections": [
          {
           "label": "Fish",
           "confidence": 0.7653
          },
          {
           "label": "Fish",
           "confidence": 0.5079
          },
          {
           "label": "Fish",
           "confidence": 0.4768
          },
          {
           "label": "Fish",
           "confidence": 0.4222
          },
          {
           "label": "Fish",
           "confidence": 0.3347
          },
          {
           "label": "Fish",
           "confidence": 0.3128
          }
         ],
         "maskPolygons": 6
        },
        {
         "image": "frame_01.jpg",
         "detections": [
          {
           "label": "Fish",
           "confidence": 0.8116
          },
          {
           "label": "Fish",
           "confidence": 0.2691
          }
         ],
         "maskPolygons": 2
        },
        {
         "image": "frame_02.jpg",
         "detections": [
          {
           "label": "Fish",
           "confidence": 0.6979
          },
          {
           "label": "Fish",
           "confidence": 0.5226
          }
         ],
         "maskPolygons": 2
        },
        {
         "image": "frame_03.jpg",
         "detections": [
          {
           "label": "Fish",
           "confidence": 0.5406
          },
          {
           "label": "Fish",
           "confidence": 0.4258
          }
         ],
         "maskPolygons": 2
        },
        {
         "image": "frame_04.jpg",
         "detections": [
          {
           "label": "Fish",
           "confidence": 0.3084
          },
          {
           "label": "Fish",
           "confidence": 0.2623
          }
         ],
         "maskPolygons": 2
        },
        {
         "image": "statistics.jpg",
         "detections": [
          {
           "label": "Fish",
           "confidence": 0.4865
          }
         ],
         "maskPolygons": 1
        }
       ],
       "totalDetections": 15,
       "maskPolygons": 15,
       "confidenceStats": {
        "count": 15,
        "min": 0.2623,
        "max": 0.8116,
        "mean": 0.4763,
        "distinct": 14
       }
      }
     ],
     "images": [
      "categories.jpg",
      "frame_01.jpg",
      "frame_02.jpg",
      "frame_03.jpg",
      "frame_04.jpg",
      "statistics.jpg"
     ]
    }
   },
   "quantization": {
    "available": false,
    "path": "output/quantization_report.json",
    "reason": "尚未生成（跑一次对应检查即可）"
   },
   "dispatchCompare": {
    "available": true,
    "path": "output/agent_dispatch_compare.png",
    "sizeBytes": 58263,
    "modifiedAt": "2026-09-30T23:36:48"
   },
   "qlearningCompare": {
    "available": true,
    "path": "output/qlearning_compare.json",
    "sizeBytes": 1785,
    "modifiedAt": "2026-09-30T23:36:48",
    "data": {
     "kind": "fleet_local_planner_compare",
     "generatedAt": "2026-09-30T18:49:28",
     "steps": 220,
     "gridN": 48,
     "sameScenarioSameSeed": true,
     "planners": [
      "dwa",
      "qlearning",
      "pursuit"
     ],
     "labels": {
      "dwa": "DWA（动态窗口法）",
      "qlearning": "Q-learning（学习式基线）",
      "pursuit": "纯追踪（无局部避障）"
     },
     "rows": {
      "dwa": {
       "stops": 32,
       "distance": 49.2,
       "dispatches": 50,
       "coverage": 100,
       "intrusions": 0,
       "minClear": 0.009,
       "replans": 31,
       "q": {
        "attached": false,
        "enabled": false,
        "epsilon": 0.1,
        "steps": 0,
        "unknownStates": 0,
        "episodes": 0,
        "seed": null,
        "states": 0
       }
      },
      "qlearning": {
       "stops": 208,
       "distance": 37.51,
       "dispatches": 16,
       "coverage": 100,
       "intrusions": 0,
       "minClear": 0.0029,
       "replans": 52,
       "q": {
        "attached": true,
        "enabled": true,
        "epsilon": 0.1,
        "steps": 778,
        "unknownStates": 68,
        "episodes": 120000,
        "seed": 20260918,
        "states": 15944
       }
      },
      "pursuit": {
       "stops": 52,
       "distance": 34.66,
       "dispatches": 54,
       "coverage": 100,
       "intrusions": 0,
       "minClear": 0.0032,
       "replans": 43,
       "q": {
        "attached": false,
        "enabled": false,
        "epsilon": 0.1,
        "steps": 0,
        "unknownStates": 0,
        "episodes": 0,
        "seed": null,
        "states": 0
       }
      }
     },
     "note": "同场景同种子的离线仿真对照；穿障是安全底线不是比较项（三方都必须为 0）。"
    }
   }
  },
  "grayRelease": {
   "available": false,
   "reason": "还没有发布记录（灰度状态机存在 srcn/vision/iteration/reflow.py，由 scripts/reflow_pipeline_check.py 验证其门槛）",
   "stateFile": "data/vision_iteration/gray_release.json"
  }
 },
 "/api/iteration/status": {
  "round": 0,
  "maxRounds": 9,
  "checkInterval": 3,
  "humanCheckCount": 0,
  "baselineComposite": null,
  "lastCheckpointRound": 0,
  "modelFingerprint": "",
  "paramsPath": "",
  "modelPath": "",
  "evalDir": "",
  "nextCheckpointRound": null,
  "checkpointDue": false,
  "waiting": false,
  "latestReport": null,
  "reports": [],
  "metricsHistory": [],
  "storeDir": "D:\\myproject\\中建国际海之子杯参赛作品\\_static_demo\\backend_data\\vision_iteration"
 },
 "/api/iteration/changes": [],
 "/api/wearable-c/status": {
  "reachable": false,
  "url": "http://127.0.0.1:8765",
  "error": "ConnectTimeout"
 },
 "/api/webrtc/stats": {
  "available": false,
  "error": "ModuleNotFoundError: No module named 'av'",
  "peers": 0
 },
 "/api/gan/status": {
  "enabled": true,
  "weights": "D:\\myproject\\中建国际海之子杯参赛作品\\models\\gan\\generator_v2.pth",
  "model": "generator_v2.pth",
  "device": "cpu",
  "loadError": null,
  "network": "TinyGenerator(残差) + TinyDiscriminator，推理只用 Generator",
  "trainConfig": {
   "imageSize": 256,
   "batchSize": 2,
   "epochs": 60,
   "lr": 0.0002,
   "l1Weight": 10,
   "dGRatio": "1:1"
  },
  "visionPipeline": {
   "pipeline": "local_yolo",
   "generatorEnabled": null
  },
  "mainChainEnabled": false,
  "samples": [
   {
    "id": "factory.jpg",
    "source": "gan_smoke",
    "bytes": 712866
   },
   {
    "id": "frame_01.jpg",
    "source": "gan_smoke",
    "bytes": 909483
   },
   {
    "id": "frame_02.jpg",
    "source": "gan_smoke",
    "bytes": 917345
   },
   {
    "id": "frame_03.jpg",
    "source": "gan_smoke",
    "bytes": 914004
   },
   {
    "id": "frame_04.jpg",
    "source": "gan_smoke",
    "bytes": 902868
   },
   {
    "id": "0008_00000.jpg",
    "source": "gan_samples",
    "bytes": 323763
   },
   {
    "id": "0008_00025.jpg",
    "source": "gan_samples",
    "bytes": 324290
   },
   {
    "id": "0008_00050.jpg",
    "source": "gan_samples",
    "bytes": 323560
   },
   {
    "id": "0008_00075.jpg",
    "source": "gan_samples",
    "bytes": 324809
   },
   {
    "id": "0008_00100.jpg",
    "source": "gan_samples",
    "bytes": 340472
   },
   {
    "id": "0008_00125.jpg",
    "source": "gan_samples",
    "bytes": 327572
   },
   {
    "id": "0008_00150.jpg",
    "source": "gan_samples",
    "bytes": 330278
   },
   {
    "id": "0008_00175.jpg",
    "source": "gan_samples",
    "bytes": 326068
   },
   {
    "id": "0008_00200.jpg",
    "source": "gan_samples",
    "bytes": 312185
   },
   {
    "id": "0008_00225.jpg",
    "source": "gan_samples",
    "bytes": 316245
   },
   {
    "id": "0008_00250.jpg",
    "source": "gan_samples",
    "bytes": 340217
   },
   {
    "id": "0008_00275.jpg",
    "source": "gan_samples",
    "bytes": 323448
   },
   {
    "id": "0008_00300.jpg",
    "source": "gan_samples",
    "bytes": 342060
   },
   {
    "id": "0008_00325.jpg",
    "source": "gan_samples",
    "bytes": 333440
   },
   {
    "id": "0008_00350.jpg",
    "source": "gan_samples",
    "bytes": 336745
   },
   {
    "id": "0008_00375.jpg",
    "source": "gan_samples",
    "bytes": 328073
   },
   {
    "id": "0008_00400.jpg",
    "source": "gan_samples",
    "bytes": 345506
   },
   {
    "id": "0008_00425.jpg",
    "source": "gan_samples",
    "bytes": 332229
   },
   {
    "id": "0008_00450.jpg",
    "source": "gan_samples",
    "bytes": 344864
   },
   {
    "id": "0008_00475.jpg",
    "source": "gan_samples",
    "bytes": 336524
   },
   {
    "id": "0008_00500.jpg",
    "source": "gan_samples",
    "bytes": 265506
   },
   {
    "id": "0008_00525.jpg",
    "source": "gan_samples",
    "bytes": 287042
   },
   {
    "id": "0008_00550.jpg",
    "source": "gan_samples",
    "bytes": 304145
   },
   {
    "id": "0008_00575.jpg",
    "source": "gan_samples",
    "bytes": 305344
   },
   {
    "id": "0008_00600.jpg",
    "source": "gan_samples",
    "bytes": 280506
   },
   {
    "id": "0008_00625.jpg",
    "source": "gan_samples",
    "bytes": 282921
   },
   {
    "id": "0008_00650.jpg",
    "source": "gan_samples",
    "bytes": 254593
   },
   {
    "id": "0008_00675.jpg",
    "source": "gan_samples",
    "bytes": 274288
   },
   {
    "id": "0008_00700.jpg",
    "source": "gan_samples",
    "bytes": 214524
   },
   {
    "id": "0008_00725.jpg",
    "source": "gan_samples",
    "bytes": 258313
   },
   {
    "id": "0008_00750.jpg",
    "source": "gan_samples",
    "bytes": 321251
   },
   {
    "id": "0008_00775.jpg",
    "source": "gan_samples",
    "bytes": 320400
   },
   {
    "id": "0008_00800.jpg",
    "source": "gan_samples",
    "bytes": 340222
   },
   {
    "id": "0008_00825.jpg",
    "source": "gan_samples",
    "bytes": 334374
   },
   {
    "id": "0009_00000.jpg",
    "source": "gan_samples",
    "bytes": 337534
   },
   {
    "id": "0009_00025.jpg",
    "source": "gan_samples",
    "bytes": 338755
   },
   {
    "id": "0009_00050.jpg",
    "source": "gan_samples",
    "bytes": 338161
   },
   {
    "id": "0009_00075.jpg",
    "source": "gan_samples",
    "bytes": 337865
   },
   {
    "id": "0009_00100.jpg",
    "source": "gan_samples",
    "bytes": 340923
   },
   {
    "id": "0009_00125.jpg",
    "source": "gan_samples",
    "bytes": 350392
   },
   {
    "id": "0009_00150.jpg",
    "source": "gan_samples",
    "bytes": 347261
   },
   {
    "id": "0009_00175.jpg",
    "source": "gan_samples",
    "bytes": 359583
   },
   {
    "id": "0009_00200.jpg",
    "source": "gan_samples",
    "bytes": 355434
   },
   {
    "id": "0009_00225.jpg",
    "source": "gan_samples",
    "bytes": 366769
   },
   {
    "id": "0009_00250.jpg",
    "source": "gan_samples",
    "bytes": 368264
   },
   {
    "id": "0009_00275.jpg",
    "source": "gan_samples",
    "bytes": 364967
   },
   {
    "id": "0009_00300.jpg",
    "source": "gan_samples",
    "bytes": 361974
   },
   {
    "id": "0009_00325.jpg",
    "source": "gan_samples",
    "bytes": 365746
   },
   {
    "id": "0009_00350.jpg",
    "source": "gan_samples",
    "bytes": 365762
   },
   {
    "id": "0009_00375.jpg",
    "source": "gan_samples",
    "bytes": 367829
   }
  ],
  "runs": [
   {
    "runId": "20261001-000849-ef9ec9",
    "createdAt": "2026-10-01T00:08:49",
    "hasEnhanced": true
   },
   {
    "runId": "20261001-000723-e74ec8",
    "createdAt": "2026-10-01T00:07:23",
    "hasEnhanced": true
   },
   {
    "runId": "20260928-175518-cc69ae",
    "createdAt": "2026-09-28T17:55:18",
    "hasEnhanced": true
   },
   {
    "runId": "20260928-175335-7a05a5",
    "createdAt": "2026-09-28T17:53:35",
    "hasEnhanced": true
   },
   {
    "runId": "20260928-175334-9302e5",
    "createdAt": "2026-09-28T17:53:34",
    "hasEnhanced": true
   },
   {
    "runId": "20260928-172351-77b72c",
    "createdAt": "2026-09-28T17:23:51",
    "hasEnhanced": true
   },
   {
    "runId": "20260928-172351-562b18",
    "createdAt": "2026-09-28T17:23:51",
    "hasEnhanced": true
   },
   {
    "runId": "20260928-172350-ae460f",
    "createdAt": "2026-09-28T17:23:50",
    "hasEnhanced": true
   },
   {
    "runId": "20260928-165045-0ba061",
    "createdAt": "2026-09-28T16:50:45",
    "hasEnhanced": true
   },
   {
    "runId": "20260928-164800-506901",
    "createdAt": "2026-09-28T16:48:00",
    "hasEnhanced": true
   }
  ]
 },
 "/api/collaboration/resume": {
  "markdown": "# 人机协同履历（自动生成）\n\n> 由平台运行记录自动汇总（非手写）：AI 迭代台账 + 告警处置留痕 + 多机派单统计。\n> 生成时间：2026-10-22T20:50:31+08:00 · 操作人：admin\n\n## 一、AI 使用概况\n\n| 维度 | 数值 | 说明 |\n|---|---|---|\n| AI 迭代轮次 | 0 | LLM 多 Agent 自动调优视觉参数的轮次 |\n| 人工检查点 | 0 | 每 3 轮由人把关一次 |\n| 参数变更 | 0（接受 0 / 回滚 0） | 全程留痕，退化自动回滚 |\n| 模型权重指纹 | 未运行 | 权重只读，仅调参数不换权重 |\n\n## 二、人机分工（谁做了什么）\n\n| 环节 | AI 承担 | 人承担 |\n|---|---|---|\n| 视觉调参 | 提案 → 批评 → 选择 → 应用 → 复评 | 检查点确认 / 拒绝并回滚 |\n| 风险判定 | 只输出建议与证据 | 安全员确认 / 误报 / 解决（7 次处置留痕） |\n| 告警处置 | 生成证据链与截图 | 处置 6 / 5050 条告警 |\n| 多机协同 | MI 升维派单 + 告警自验证（17 次派单，复核 4 次） | 人工派单 / 返航指令 |\n| 报告与演练 | 一键生成可追溯报告（12 份） | 发起演练（0 次）/ 审阅报告 |\n\n## 三、可量化协同收益\n\n- 容错感知层带宽节省：**90.2%**（事件触发上报）\n- 多机协同：累计派单 **17** 次，告警自验证完成 **4** 次\n- 迭代安全：参数变更 0 次，其中 **0** 次因指标退化被自动回滚\n\n## 四、能力自评（L1–L6）\n\n- ☑ L1 基础问答 · ☑ L2 提示词 · ☑ L3 工作辅助（分析/汇报/创意）\n- ☑ L4 流程自动化（固定流程替代重复劳动）· ☑ L5 智能体（搭建面向具体任务的智能体）\n- ☐ L6 业务创新（基于 AI 重塑交付方式——进行中）\n\n---\n*本履历由平台 `/api/collaboration/resume` 依真实运行数据生成，可复现、可追溯。*\n",
  "stats": {
   "iterationRounds": 0,
   "humanCheckpoints": 0,
   "changes": 0,
   "accepted": 0,
   "rolledBack": 0,
   "alertsTotal": 5050,
   "alertsHandled": 6,
   "alertActions": 7,
   "drills": 0,
   "reports": 12,
   "fleetDispatches": 17,
   "fleetVerified": 4,
   "bandwidthSaving": 0.9025
  }
 }
};