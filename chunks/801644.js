"use strict";
n.d(t, { A: () => s });
var i = n(945810);
let r = {
        resetSilenceWarningOnDeviceChange: !1,
        resetSilenceWarningAfterNMinutes: void 0,
        enableHardwareSilenceWarning: !1,
    },
    s = (0, i.mj)({
        name: "2026-02-silence-warning-aggression",
        kind: "user",
        defaultConfig: r,
        variations: {
            1: { ...r, resetSilenceWarningOnDeviceChange: !0 },
            2: { ...r, resetSilenceWarningAfterNMinutes: 10 },
            3: { ...r, enableHardwareSilenceWarning: !0 },
        },
    });
