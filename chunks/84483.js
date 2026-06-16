"use strict";
n.d(t, { uX: () => a, v9: () => o });
var i = n(240921);
let r = { control: 0, treatment_a: 250, treatment_b: 500, treatment_c: 250, treatment_d: 500 },
    s = (0, i.Ay)({
        name: "2025-12-nitro-s-rewards",
        kind: "user",
        defaultConfig: { treatment: "control" },
        variations: {
            0: { treatment: "control" },
            1: { treatment: "treatment_a" },
            2: { treatment: "treatment_b" },
            3: { treatment: "treatment_c" },
            4: { treatment: "treatment_d" },
        },
    });
function a(e) {
    let t = s.useConfig({ location: e }).treatment ?? "control";
    return { treatment: t, isInTreatment: "control" !== t, orbsRewardAmount: r[t] };
}
function o(e) {
    let t = s.getConfig({ location: e }).treatment ?? "control";
    return { treatment: t, isInTreatment: "control" !== t, orbsRewardAmount: r[t] };
}
