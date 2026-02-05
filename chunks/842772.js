"use strict";
n.d(t, { _: () => a });
var r = n(600975);
let i = { allowBVC: !1 },
    a = (0, r.C)({
        kind: "user",
        id: "2025-07_krisp_background_voice_cancellation",
        label: "Krisp Background Voice Cancellation",
        defaultConfig: i,
        treatments: [{ id: 1, label: "Use BVC for allowed devices", config: { ...i, allowBVC: !0 } }],
    });
