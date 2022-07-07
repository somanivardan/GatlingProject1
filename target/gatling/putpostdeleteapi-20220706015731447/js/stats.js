var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "576",
        "ok": "576",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "928",
        "ok": "928",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "627",
        "ok": "627",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "109",
        "ok": "109",
        "ko": "-"
    },
    "percentiles1": {
        "total": "584",
        "ok": "584",
        "ko": "-"
    },
    "percentiles2": {
        "total": "591",
        "ok": "591",
        "ko": "-"
    },
    "percentiles3": {
        "total": "892",
        "ok": "892",
        "ko": "-"
    },
    "percentiles4": {
        "total": "921",
        "ok": "921",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13,
    "percentage": 87
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 13
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
        "total": "2.143",
        "ok": "2.143",
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
        "total": "578",
        "ok": "578",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "590",
        "ok": "590",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "584",
        "ok": "584",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles1": {
        "total": "585",
        "ok": "585",
        "ko": "-"
    },
    "percentiles2": {
        "total": "587",
        "ok": "587",
        "ko": "-"
    },
    "percentiles3": {
        "total": "589",
        "ok": "589",
        "ko": "-"
    },
    "percentiles4": {
        "total": "590",
        "ok": "590",
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
        "total": "0.714",
        "ok": "0.714",
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
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "576",
        "ok": "576",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "928",
        "ok": "928",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "648",
        "ok": "648",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "128",
        "ok": "128",
        "ko": "-"
    },
    "percentiles1": {
        "total": "584",
        "ok": "584",
        "ko": "-"
    },
    "percentiles2": {
        "total": "595",
        "ok": "595",
        "ko": "-"
    },
    "percentiles3": {
        "total": "905",
        "ok": "905",
        "ko": "-"
    },
    "percentiles4": {
        "total": "923",
        "ok": "923",
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
        "total": "1.429",
        "ok": "1.429",
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
