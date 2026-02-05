"use strict";
n.d(t, { N: () => s });
var r = n(945810);
let i = 864e5,
    a = (0, r.mj)({
        name: "2026-01-user-offer-notice-timing-xp",
        kind: "user",
        defaultConfig: { thresholdMs: 0 },
        variations: {
            1: { thresholdMs: +i },
            2: { thresholdMs: 2 * i },
            3: { thresholdMs: 3 * i },
            4: { thresholdMs: 4 * i },
            5: { thresholdMs: 5 * i },
            6: { thresholdMs: 6 * i },
            7: { thresholdMs: 7 * i },
        },
    });
function s(e) {
    return a.getConfig({ location: e }).thresholdMs;
}
