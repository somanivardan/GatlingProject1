var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "568",
        "ok": "568",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "891",
        "ok": "891",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "650",
        "ok": "650",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "percentiles1": {
        "total": "592",
        "ok": "592",
        "ko": "-"
    },
    "percentiles2": {
        "total": "629",
        "ok": "629",
        "ko": "-"
    },
    "percentiles3": {
        "total": "882",
        "ok": "882",
        "ko": "-"
    },
    "percentiles4": {
        "total": "889",
        "ok": "889",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
        "ko": "-"
    }
},
contents: {
"req_03-put-api-88b7e": {
        type: "REQUEST",
        name: "03_PUT_API",
path: "03_PUT_API",
pathFormatted: "req_03-put-api-88b7e",
stats: {
    "name": "03_PUT_API",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "568",
        "ok": "568",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "891",
        "ok": "891",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "700",
        "ok": "700",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "148",
        "ok": "148",
        "ko": "-"
    },
    "percentiles1": {
        "total": "591",
        "ok": "591",
        "ko": "-"
    },
    "percentiles2": {
        "total": "870",
        "ok": "870",
        "ko": "-"
    },
    "percentiles3": {
        "total": "887",
        "ok": "887",
        "ko": "-"
    },
    "percentiles4": {
        "total": "890",
        "ok": "890",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 60
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 40
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.833",
        "ko": "-"
    }
}
    },"req_02-post-api-293d6": {
        type: "REQUEST",
        name: "02_Post_API",
path: "02_Post_API",
pathFormatted: "req_02-post-api-293d6",
stats: {
    "name": "02_Post_API",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "581",
        "ok": "581",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "638",
        "ok": "638",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "599",
        "ok": "599",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "21",
        "ok": "21",
        "ko": "-"
    },
    "percentiles1": {
        "total": "593",
        "ok": "593",
        "ko": "-"
    },
    "percentiles2": {
        "total": "603",
        "ok": "603",
        "ko": "-"
    },
    "percentiles3": {
        "total": "631",
        "ok": "631",
        "ko": "-"
    },
    "percentiles4": {
        "total": "637",
        "ok": "637",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.833",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
