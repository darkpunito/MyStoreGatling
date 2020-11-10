var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1067",
        "ok": "85",
        "ko": "982"
    },
    "minResponseTime": {
        "total": "266",
        "ok": "5002",
        "ko": "266"
    },
    "maxResponseTime": {
        "total": "11089",
        "ok": "11089",
        "ko": "2382"
    },
    "meanResponseTime": {
        "total": "1576",
        "ok": "6654",
        "ko": "1136"
    },
    "standardDeviation": {
        "total": "1591",
        "ok": "1120",
        "ko": "465"
    },
    "percentiles1": {
        "total": "1144",
        "ok": "6328",
        "ko": "1118"
    },
    "percentiles2": {
        "total": "1507",
        "ok": "6494",
        "ko": "1362"
    },
    "percentiles3": {
        "total": "6234",
        "ok": "8539",
        "ko": "2066"
    },
    "percentiles4": {
        "total": "8389",
        "ok": "9124",
        "ko": "2296"
    },
    "group1": {
    "name": "t < 3000 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "3000 ms < t < 9000 ms",
    "count": 84,
    "percentage": 8
},
    "group3": {
    "name": "t > 9000 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 982,
    "percentage": 92
},
    "meanNumberOfRequestsPerSecond": {
        "total": "35.567",
        "ok": "2.833",
        "ko": "32.733"
    }
},
contents: {
"req_access-home-pag-60a1a": {
        type: "REQUEST",
        name: "Access Home Page",
path: "Access Home Page",
pathFormatted: "req_access-home-pag-60a1a",
stats: {
    "name": "Access Home Page",
    "numberOfRequests": {
        "total": "1000",
        "ok": "67",
        "ko": "933"
    },
    "minResponseTime": {
        "total": "347",
        "ok": "5002",
        "ko": "347"
    },
    "maxResponseTime": {
        "total": "7611",
        "ok": "7611",
        "ko": "2382"
    },
    "meanResponseTime": {
        "total": "1496",
        "ok": "6136",
        "ko": "1163"
    },
    "standardDeviation": {
        "total": "1324",
        "ok": "468",
        "ko": "455"
    },
    "percentiles1": {
        "total": "1146",
        "ok": "6274",
        "ko": "1131"
    },
    "percentiles2": {
        "total": "1501",
        "ok": "6379",
        "ko": "1375"
    },
    "percentiles3": {
        "total": "5996",
        "ok": "6490",
        "ko": "2071"
    },
    "percentiles4": {
        "total": "6417",
        "ok": "7454",
        "ko": "2299"
    },
    "group1": {
    "name": "t < 3000 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "3000 ms < t < 9000 ms",
    "count": 67,
    "percentage": 7
},
    "group3": {
    "name": "t > 9000 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 933,
    "percentage": 93
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "2.233",
        "ko": "31.1"
    }
}
    },"req_access-home-pag-6dae0": {
        type: "REQUEST",
        name: "Access Home Page Redirect 1",
path: "Access Home Page Redirect 1",
pathFormatted: "req_access-home-pag-6dae0",
stats: {
    "name": "Access Home Page Redirect 1",
    "numberOfRequests": {
        "total": "67",
        "ok": "18",
        "ko": "49"
    },
    "minResponseTime": {
        "total": "266",
        "ok": "8192",
        "ko": "266"
    },
    "maxResponseTime": {
        "total": "11089",
        "ok": "11089",
        "ko": "1404"
    },
    "meanResponseTime": {
        "total": "2759",
        "ok": "8583",
        "ko": "619"
    },
    "standardDeviation": {
        "total": "3557",
        "ok": "624",
        "ko": "345"
    },
    "percentiles1": {
        "total": "551",
        "ok": "8411",
        "ko": "497"
    },
    "percentiles2": {
        "total": "8233",
        "ok": "8537",
        "ko": "611"
    },
    "percentiles3": {
        "total": "8613",
        "ok": "9101",
        "ko": "1380"
    },
    "percentiles4": {
        "total": "9545",
        "ok": "10691",
        "ko": "1396"
    },
    "group1": {
    "name": "t < 3000 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "3000 ms < t < 9000 ms",
    "count": 17,
    "percentage": 25
},
    "group3": {
    "name": "t > 9000 ms",
    "count": 1,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 49,
    "percentage": 73
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.233",
        "ok": "0.6",
        "ko": "1.633"
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
