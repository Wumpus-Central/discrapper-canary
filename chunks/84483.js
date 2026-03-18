"use strict";
n.d(t, { uX: () => o, v9: () => l });
var r = n(250105);
let i = { control: 0, treatment_a: 250, treatment_b: 500, treatment_c: 250, treatment_d: 500 },
    s = (0, r.Ay)({
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
    }),
    a = (0, r.Ay)({
        name: "2026-03-nitro-s-rewards-v2-test",
        kind: "user",
        defaultConfig: { treatment: "control" },
        variations: { 0: { treatment: "control" }, 1: { treatment: "treatment_c" }, 2: { treatment: "treatment_d" } },
    });
function o(e) {
    let t = s.useConfig({ location: e }),
        n = a.useConfig({ location: e }),
        r = t.treatment ?? "control";
    if ("control" !== r)
        return { treatment: r, isInTreatment: !0, receivesUpdatedUpsellPopover: !1, orbsRewardAmount: i[r] };
    let o = n.treatment ?? "control";
    return "control" !== o
        ? { treatment: o, isInTreatment: !0, receivesUpdatedUpsellPopover: !0, orbsRewardAmount: i[o] }
        : { treatment: "control", isInTreatment: !1, receivesUpdatedUpsellPopover: !1, orbsRewardAmount: 0 };
}
function l(e) {
    let t = s.getConfig({ location: e }),
        n = a.getConfig({ location: e }),
        r = t.treatment ?? "control";
    if ("control" !== r)
        return { treatment: r, isInTreatment: !0, receivesUpdatedUpsellPopover: !1, orbsRewardAmount: i[r] };
    let o = n.treatment ?? "control";
    return "control" !== o
        ? { treatment: o, isInTreatment: !0, receivesUpdatedUpsellPopover: !0, orbsRewardAmount: i[o] }
        : { treatment: "control", isInTreatment: !1, receivesUpdatedUpsellPopover: !1, orbsRewardAmount: 0 };
}
