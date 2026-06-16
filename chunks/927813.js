"use strict";
n.d(t, { A: () => r });
let i = Object.freeze({
        HALF_SECOND: 500,
        SECOND: 1e3,
        MINUTE: 6e4,
        HOUR: 36e5,
        DAY: 864e5,
        WEEK: 6048e5,
        DAYS_30: 2592e6,
    }),
    r = {
        Millis: i,
        Seconds: Object.freeze({ SECOND: 1, MINUTE: 60, HOUR: 3600, DAY: 86400, WEEK: 604800, DAYS_30: 2592e3 }),
        Minutes: Object.freeze({ MINUTE: 1, HOUR: 60, DAY: 1440, WEEK: 10080, DAYS_30: 43200 }),
    };
