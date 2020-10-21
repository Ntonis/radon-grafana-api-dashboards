exports.build_json_awsLambda = (datasourceName) => {
    const dashboard_json = {
        "__inputs": [],
        "__requires": [
          {
            "type": "datasource",
            "id": "cloudwatch",
            "name": "CloudWatch",
            "version": "1.0.0"
          },
          {
            "type": "grafana",
            "id": "grafana",
            "name": "Grafana",
            "version": "7.1.5"
          },
          {
            "type": "panel",
            "id": "graph",
            "name": "Graph",
            "version": ""
          },
          {
            "type": "panel",
            "id": "text",
            "name": "Text",
            "version": "7.1.0"
          }
        ],
        "annotations": {
          "list": [
            {
              "builtIn": 1,
              "datasource": "-- Grafana --",
              "enable": true,
              "hide": true,
              "iconColor": "rgba(0, 211, 255, 1)",
              "name": "Annotations & Alerts",
              "type": "dashboard"
            }
          ]
        },
        "description": "Visualize AWS Lambda metrics",
        "editable": false,
        "gnetId": 593,
        "graphTooltip": 0,
        "id": null,
        "iteration": 1600867540701,
        "links": [],
        "panels": [
          {
            "aliasColors": {
              "Maximum": "#e24d42"
            },
            "bars": true,
            "dashLength": 10,
            "dashes": false,
            "datasource": "$datasource",
            "decimals": 3,
            "editable": true,
            "error": false,
            "fieldConfig": {
              "defaults": {
                "custom": {},
                "links": []
              },
              "overrides": []
            },
            "fill": 1,
            "fillGradient": 0,
            "grid": {},
            "gridPos": {
              "h": 7,
              "w": 24,
              "x": 0,
              "y": 0
            },
            "hiddenSeries": false,
            "id": 1,
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "max": true,
              "min": true,
              "show": true,
              "sort": "current",
              "sortDesc": true,
              "total": true,
              "values": true
            },
            "lines": false,
            "linewidth": 2,
            "links": [],
            "nullPointMode": "null",
            "percentage": false,
            "pluginVersion": "7.1.5",
            "pointradius": 5,
            "points": false,
            "renderer": "flot",
            "seriesOverrides": [
              {
                "alias": "Duration Maximum",
                "bars": false,
                "fill": 0,
                "lines": true,
                "yaxis": 2
              }
            ],
            "spaceLength": 10,
            "stack": false,
            "steppedLine": false,
            "targets": [
              {
                "alias": "{{metric}} {{stat}}",
                "application": {
                  "filter": ""
                },
                "dimensions": {
                  "FunctionName": "$functionname"
                },
                "expression": "",
                "functions": [],
                "group": {
                  "filter": ""
                },
                "highResolution": false,
                "host": {
                  "filter": ""
                },
                "id": "",
                "item": {
                  "filter": ""
                },
                "metricName": "Duration",
                "mode": 0,
                "namespace": "AWS/Lambda",
                "options": {
                  "showDisabledItems": false
                },
                "period": "$agg",
                "refId": "A",
                "region": "$region",
                "returnData": false,
                "statistics": [
                  "Average"
                ]
              },
              {
                "alias": "{{metric}} {{stat}}",
                "application": {
                  "filter": ""
                },
                "dimensions": {
                  "FunctionName": "$functionname"
                },
                "expression": "",
                "functions": [],
                "group": {
                  "filter": ""
                },
                "hide": false,
                "highResolution": false,
                "host": {
                  "filter": ""
                },
                "id": "",
                "item": {
                  "filter": ""
                },
                "metricName": "Duration",
                "mode": 0,
                "namespace": "AWS/Lambda",
                "options": {
                  "showDisabledItems": false
                },
                "period": "$agg",
                "refId": "B",
                "region": "$region",
                "returnData": false,
                "statistics": [
                  "Maximum"
                ]
              }
            ],
            "thresholds": [],
            "timeFrom": null,
            "timeRegions": [],
            "timeShift": null,
            "title": "Duration",
            "tooltip": {
              "msResolution": false,
              "shared": true,
              "sort": 0,
              "value_type": "cumulative"
            },
            "type": "graph",
            "xaxis": {
              "buckets": null,
              "mode": "time",
              "name": null,
              "show": true,
              "values": []
            },
            "yaxes": [
              {
                "format": "ms",
                "label": null,
                "logBase": 1,
                "max": null,
                "min": 0,
                "show": true
              },
              {
                "format": "ms",
                "label": null,
                "logBase": 1,
                "max": null,
                "min": "0",
                "show": true
              }
            ],
            "yaxis": {
              "align": false,
              "alignLevel": null
            }
          },
          {
            "aliasColors": {},
            "bars": true,
            "dashLength": 10,
            "dashes": false,
            "datasource": "$datasource",
            "decimals": 0,
            "editable": true,
            "error": false,
            "fieldConfig": {
              "defaults": {
                "custom": {},
                "links": []
              },
              "overrides": []
            },
            "fill": 1,
            "fillGradient": 0,
            "grid": {},
            "gridPos": {
              "h": 7,
              "w": 24,
              "x": 0,
              "y": 7
            },
            "hiddenSeries": false,
            "id": 7,
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "max": true,
              "min": true,
              "show": true,
              "sort": "current",
              "sortDesc": true,
              "total": true,
              "values": true
            },
            "lines": false,
            "linewidth": 2,
            "links": [],
            "nullPointMode": "null",
            "percentage": false,
            "pluginVersion": "7.1.5",
            "pointradius": 5,
            "points": false,
            "renderer": "flot",
            "seriesOverrides": [],
            "spaceLength": 10,
            "stack": false,
            "steppedLine": false,
            "targets": [
              {
                "alias": "{{metric}} {{stat}}",
                "application": {
                  "filter": ""
                },
                "dimensions": {
                  "FunctionName": "$functionname"
                },
                "expression": "",
                "functions": [],
                "group": {
                  "filter": ""
                },
                "highResolution": false,
                "host": {
                  "filter": ""
                },
                "id": "",
                "item": {
                  "filter": ""
                },
                "metricName": "Invocations",
                "mode": 0,
                "namespace": "AWS/Lambda",
                "options": {
                  "showDisabledItems": false
                },
                "period": "$agg",
                "refId": "A",
                "region": "$region",
                "returnData": false,
                "statistics": [
                  "Sum"
                ]
              }
            ],
            "thresholds": [],
            "timeFrom": null,
            "timeRegions": [],
            "timeShift": null,
            "title": "Invocations",
            "tooltip": {
              "msResolution": false,
              "shared": true,
              "sort": 0,
              "value_type": "cumulative"
            },
            "type": "graph",
            "xaxis": {
              "buckets": null,
              "mode": "time",
              "name": null,
              "show": true,
              "values": []
            },
            "yaxes": [
              {
                "format": "none",
                "label": null,
                "logBase": 1,
                "max": null,
                "min": 0,
                "show": true
              },
              {
                "format": "short",
                "label": null,
                "logBase": 1,
                "max": null,
                "min": null,
                "show": false
              }
            ],
            "yaxis": {
              "align": false,
              "alignLevel": null
            }
          },
          {
            "aliasColors": {
              "Errors Sum": "#e24d42",
              "Errors_Average": "#BF1B00",
              "Errors_Sum": "#BF1B00"
            },
            "bars": true,
            "dashLength": 10,
            "dashes": false,
            "datasource": "$datasource",
            "editable": true,
            "error": false,
            "fieldConfig": {
              "defaults": {
                "custom": {},
                "links": []
              },
              "overrides": []
            },
            "fill": 1,
            "fillGradient": 0,
            "grid": {},
            "gridPos": {
              "h": 7,
              "w": 24,
              "x": 0,
              "y": 14
            },
            "hiddenSeries": false,
            "id": 8,
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "max": true,
              "min": true,
              "show": true,
              "sort": "current",
              "sortDesc": true,
              "total": true,
              "values": true
            },
            "lines": false,
            "linewidth": 2,
            "links": [],
            "nullPointMode": "null",
            "percentage": false,
            "pluginVersion": "7.1.5",
            "pointradius": 5,
            "points": false,
            "renderer": "flot",
            "seriesOverrides": [],
            "spaceLength": 10,
            "stack": false,
            "steppedLine": false,
            "targets": [
              {
                "alias": "{{metric}} {{stat}}",
                "application": {
                  "filter": ""
                },
                "dimensions": {
                  "FunctionName": "$functionname"
                },
                "expression": "",
                "functions": [],
                "group": {
                  "filter": ""
                },
                "highResolution": false,
                "host": {
                  "filter": ""
                },
                "id": "",
                "item": {
                  "filter": ""
                },
                "metricName": "Errors",
                "mode": 0,
                "namespace": "AWS/Lambda",
                "options": {
                  "showDisabledItems": false
                },
                "period": "$agg",
                "refId": "A",
                "region": "$region",
                "returnData": false,
                "statistics": [
                  "Sum"
                ]
              }
            ],
            "thresholds": [],
            "timeFrom": null,
            "timeRegions": [],
            "timeShift": null,
            "title": "Errors",
            "tooltip": {
              "msResolution": false,
              "shared": true,
              "sort": 0,
              "value_type": "cumulative"
            },
            "type": "graph",
            "xaxis": {
              "buckets": null,
              "mode": "time",
              "name": null,
              "show": true,
              "values": []
            },
            "yaxes": [
              {
                "format": "none",
                "label": null,
                "logBase": 1,
                "max": null,
                "min": 0,
                "show": true
              },
              {
                "format": "short",
                "label": null,
                "logBase": 1,
                "max": null,
                "min": null,
                "show": false
              }
            ],
            "yaxis": {
              "align": false,
              "alignLevel": null
            }
          },
          {
            "aliasColors": {
              "Throttles Sum": "#e24d42",
              "Throttles_Average": "#EAB839",
              "Throttles_Sum": "#EAB839"
            },
            "bars": true,
            "dashLength": 10,
            "dashes": false,
            "datasource": "$datasource",
            "editable": true,
            "error": false,
            "fieldConfig": {
              "defaults": {
                "custom": {},
                "links": []
              },
              "overrides": []
            },
            "fill": 1,
            "fillGradient": 0,
            "grid": {},
            "gridPos": {
              "h": 7,
              "w": 24,
              "x": 0,
              "y": 21
            },
            "hiddenSeries": false,
            "id": 9,
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "max": true,
              "min": true,
              "show": true,
              "sort": "current",
              "sortDesc": true,
              "total": true,
              "values": true
            },
            "lines": false,
            "linewidth": 2,
            "links": [],
            "nullPointMode": "null",
            "percentage": false,
            "pluginVersion": "7.1.5",
            "pointradius": 5,
            "points": false,
            "renderer": "flot",
            "seriesOverrides": [
              {
                "alias": "Dead Letter Error Sum",
                "yaxis": 2
              }
            ],
            "spaceLength": 10,
            "stack": false,
            "steppedLine": false,
            "targets": [
              {
                "alias": "{{metric}} {{stat}}",
                "application": {
                  "filter": ""
                },
                "dimensions": {
                  "FunctionName": "$functionname"
                },
                "expression": "",
                "functions": [],
                "group": {
                  "filter": ""
                },
                "highResolution": false,
                "host": {
                  "filter": ""
                },
                "id": "",
                "item": {
                  "filter": ""
                },
                "metricName": "Throttles",
                "mode": 0,
                "namespace": "AWS/Lambda",
                "options": {
                  "showDisabledItems": false
                },
                "period": "$agg",
                "refId": "A",
                "region": "$region",
                "returnData": false,
                "statistics": [
                  "Sum"
                ]
              },
              {
                "alias": "{{metric}} {{stat}}",
                "application": {
                  "filter": ""
                },
                "dimensions": {
                  "FunctionName": "$functionname"
                },
                "expression": "",
                "functions": [],
                "group": {
                  "filter": ""
                },
                "highResolution": false,
                "host": {
                  "filter": ""
                },
                "id": "",
                "item": {
                  "filter": ""
                },
                "metricName": "Dead Letter Error",
                "mode": 0,
                "namespace": "AWS/Lambda",
                "options": {
                  "showDisabledItems": false
                },
                "period": "$agg",
                "refId": "B",
                "region": "$region",
                "returnData": false,
                "statistics": [
                  "Sum"
                ]
              }
            ],
            "thresholds": [],
            "timeFrom": null,
            "timeRegions": [],
            "timeShift": null,
            "title": "Throttles",
            "tooltip": {
              "msResolution": false,
              "shared": true,
              "sort": 0,
              "value_type": "cumulative"
            },
            "type": "graph",
            "xaxis": {
              "buckets": null,
              "mode": "time",
              "name": null,
              "show": true,
              "values": []
            },
            "yaxes": [
              {
                "format": "none",
                "label": null,
                "logBase": 1,
                "max": null,
                "min": 0,
                "show": true
              },
              {
                "format": "none",
                "label": null,
                "logBase": 1,
                "max": null,
                "min": "0",
                "show": true
              }
            ],
            "yaxis": {
              "align": false,
              "alignLevel": null
            }
          },
          {
            "aliasColors": {
              "Throttles Sum": "#e24d42",
              "Throttles_Average": "#EAB839",
              "Throttles_Sum": "#EAB839"
            },
            "bars": false,
            "dashLength": 10,
            "dashes": false,
            "datasource": "$datasource",
            "editable": true,
            "error": false,
            "fieldConfig": {
              "defaults": {
                "custom": {},
                "links": []
              },
              "overrides": []
            },
            "fill": 1,
            "fillGradient": 0,
            "grid": {},
            "gridPos": {
              "h": 7,
              "w": 24,
              "x": 0,
              "y": 28
            },
            "hiddenSeries": false,
            "id": 10,
            "legend": {
              "alignAsTable": true,
              "avg": true,
              "current": true,
              "max": true,
              "min": true,
              "show": true,
              "sort": "current",
              "sortDesc": true,
              "total": true,
              "values": true
            },
            "lines": true,
            "linewidth": 2,
            "links": [],
            "nullPointMode": "null",
            "percentage": false,
            "pluginVersion": "7.1.5",
            "pointradius": 5,
            "points": false,
            "renderer": "flot",
            "seriesOverrides": [
              {
                "alias": "UnreservedConcurrentExecutions Average",
                "yaxis": 2
              }
            ],
            "spaceLength": 10,
            "stack": false,
            "steppedLine": false,
            "targets": [
              {
                "alias": "{{metric}} {{stat}}",
                "application": {
                  "filter": ""
                },
                "dimensions": {},
                "expression": "",
                "functions": [],
                "group": {
                  "filter": ""
                },
                "highResolution": false,
                "host": {
                  "filter": ""
                },
                "id": "",
                "item": {
                  "filter": ""
                },
                "metricName": "ConcurrentExecutions",
                "mode": 0,
                "namespace": "AWS/Lambda",
                "options": {
                  "showDisabledItems": false
                },
                "period": "$agg",
                "refId": "A",
                "region": "$region",
                "returnData": false,
                "statistics": [
                  "Average"
                ]
              },
              {
                "alias": "{{metric}} {{stat}}",
                "application": {
                  "filter": ""
                },
                "dimensions": {},
                "expression": "",
                "functions": [],
                "group": {
                  "filter": ""
                },
                "highResolution": false,
                "host": {
                  "filter": ""
                },
                "id": "",
                "item": {
                  "filter": ""
                },
                "metricName": "UnreservedConcurrentExecutions",
                "mode": 0,
                "namespace": "AWS/Lambda",
                "options": {
                  "showDisabledItems": false
                },
                "period": "$agg",
                "refId": "B",
                "region": "$region",
                "returnData": false,
                "statistics": [
                  "Average"
                ]
              }
            ],
            "thresholds": [],
            "timeFrom": null,
            "timeRegions": [],
            "timeShift": null,
            "title": "Global Concurrent Executions",
            "tooltip": {
              "msResolution": false,
              "shared": true,
              "sort": 0,
              "value_type": "cumulative"
            },
            "type": "graph",
            "xaxis": {
              "buckets": null,
              "mode": "time",
              "name": null,
              "show": true,
              "values": []
            },
            "yaxes": [
              {
                "format": "none",
                "label": null,
                "logBase": 1,
                "max": null,
                "min": 0,
                "show": true
              },
              {
                "format": "none",
                "label": null,
                "logBase": 1,
                "max": null,
                "min": "0",
                "show": true
              }
            ],
            "yaxis": {
              "align": false,
              "alignLevel": null
            }
          },
          {
            "content": "<a style=\"float: right\" href=\"http://www.monitoringartist.com\" target=\"_blank\" title=\"Dashboard maintained by Monitoring Artist - DevOps / Docker / Kubernetes / AWS ECS / Google GCP / Zabbix / Zenoss / Terraform / Monitoring\"><img src=\"https://monitoringartist.github.io/monitoring-artist-logo-grafana.png\" height=\"30px\" /></a>\n<a style=\"float: left\"  target=\"_blank\" href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/lam-metricscollected.html\">AWS CloudWatch Lambda documentation</a><br/>\n<a style=\"float: left\"  target=\"_blank\" href=\"https://grafana.net/dashboards/593\">Installed from Grafana.net dashboards</a>\n<div style=\"clear:both; width:100%;height:0;font-size:0;\"></div>",
            "datasource": null,
            "editable": true,
            "error": false,
            "fieldConfig": {
              "defaults": {
                "custom": {}
              },
              "overrides": []
            },
            "gridPos": {
              "h": 3,
              "w": 24,
              "x": 0,
              "y": 35
            },
            "id": 2,
            "links": [],
            "mode": "html",
            "options": {
              "content": "<a style=\"float: right\" href=\"http://www.monitoringartist.com\" target=\"_blank\" title=\"Dashboard maintained by Monitoring Artist - DevOps / Docker / Kubernetes / AWS ECS / Google GCP / Zabbix / Zenoss / Terraform / Monitoring\"><img src=\"https://monitoringartist.github.io/monitoring-artist-logo-grafana.png\" height=\"30px\" /></a>\n<a style=\"float: left\"  target=\"_blank\" href=\"http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/lam-metricscollected.html\">AWS CloudWatch Lambda documentation</a><br/>\n<a style=\"float: left\"  target=\"_blank\" href=\"https://grafana.net/dashboards/593\">Installed from Grafana.net dashboards</a>\n<div style=\"clear:both; width:100%;height:0;font-size:0;\"></div>",
              "mode": "html"
            },
            "pluginVersion": "7.1.0",
            "title": "Documentation",
            "type": "text"
          }
        ],
        "refresh": false,
        "schemaVersion": 26,
        "style": "dark",
        "tags": [
          "radon",
          "cloudwatch",
          `${datasourceName}`
        ],
        "templating": {
          "list": [
            {
              "current": {
                "selected": false,
                "text": `${datasourceName}`,
                "value": `${datasourceName}`
              },
              "hide": 0,
              "includeAll": false,
              "label": "Datasource",
              "multi": false,
              "name": "datasource",
              "options": [],
              "query": "cloudwatch",
              "refresh": 1,
              "regex": "",
              "skipUrlSync": false,
              "type": "datasource"
            },
            {
              "auto": true,
              "auto_count": 30,
              "auto_min": "10s",
              "current": {
                "selected": false,
                "text": "auto",
                "value": "$__auto_interval_agg"
              },
              "hide": 0,
              "label": "Aggregation",
              "name": "agg",
              "options": [
                {
                  "selected": true,
                  "text": "auto",
                  "value": "$__auto_interval_agg"
                },
                {
                  "selected": false,
                  "text": "1s",
                  "value": "1s"
                },
                {
                  "selected": false,
                  "text": "5s",
                  "value": "5s"
                },
                {
                  "selected": false,
                  "text": "10s",
                  "value": "10s"
                },
                {
                  "selected": false,
                  "text": "30s",
                  "value": "30s"
                },
                {
                  "selected": false,
                  "text": "1m",
                  "value": "1m"
                },
                {
                  "selected": false,
                  "text": "5m",
                  "value": "5m"
                },
                {
                  "selected": false,
                  "text": "15m",
                  "value": "15m"
                },
                {
                  "selected": false,
                  "text": "1h",
                  "value": "1h"
                },
                {
                  "selected": false,
                  "text": "6h",
                  "value": "6h"
                },
                {
                  "selected": false,
                  "text": "1d",
                  "value": "1d"
                },
                {
                  "selected": false,
                  "text": "7d",
                  "value": "7d"
                },
                {
                  "selected": false,
                  "text": "30d",
                  "value": "30d"
                }
              ],
              "query": "1s,5s,10s,30s,1m,5m,15m,1h,6h,1d,7d,30d",
              "refresh": 2,
              "skipUrlSync": false,
              "type": "interval"
            },
            {
              "allValue": null,
              "current": {},
              "datasource": "$datasource",
              "definition": "regions()",
              "hide": 0,
              "includeAll": false,
              "label": "Region",
              "multi": false,
              "name": "region",
              "options": [],
              "query": "regions()",
              "refresh": 1,
              "regex": "",
              "skipUrlSync": false,
              "sort": 0,
              "tagValuesQuery": "",
              "tags": [],
              "tagsQuery": "",
              "type": "query",
              "useTags": false
            },
            {
              "allValue": null,
              "current": {},
              "datasource": "$datasource",
              "definition": "dimension_values($region,AWS/Lambda,Duration,FunctionName)",
              "hide": 0,
              "includeAll": false,
              "label": "FunctionName",
              "multi": false,
              "name": "functionname",
              "options": [],
              "query": "dimension_values($region,AWS/Lambda,Duration,FunctionName)",
              "refresh": 1,
              "regex": "",
              "skipUrlSync": false,
              "sort": 1,
              "tagValuesQuery": "",
              "tags": [],
              "tagsQuery": "",
              "type": "query",
              "useTags": false
            }
          ]
        },
        "time": {
          "from": "now-7d",
          "to": "now"
        },
        "timepicker": {
          "refresh_intervals": [
            "5s",
            "10s",
            "30s",
            "1m",
            "5m",
            "15m",
            "30m",
            "1h",
            "2h",
            "1d"
          ],
          "time_options": [
            "5m",
            "15m",
            "1h",
            "6h",
            "12h",
            "24h",
            "2d",
            "7d",
            "30d"
          ]
        },
        "timezone": "browser",
        "title": "AWS Lambda",
        "uid": "AWSLambda",
        "version": 1
      }

    return dashboard_json
}