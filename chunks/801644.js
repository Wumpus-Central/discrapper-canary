"use strict";
n.d(t, { A: () => a });
var r = n(945810);
let i = {
        resetSilenceWarningOnDeviceChange: !1,
        resetSilenceWarningAfterNMinutes: void 0,
        enableHardwareSilenceWarning: !1,
    },
    a = (0, r.mj)({
        name: "2026-02-silence-warning-aggression",
        kind: "user",
        defaultConfig: i,
        variations: {
            1: { ...i, resetSilenceWarningOnDeviceChange: !0 },
            2: { ...i, resetSilenceWarningAfterNMinutes: 3 },
            3: { ...i, enableHardwareSilenceWarning: !0 },
        },
    });
