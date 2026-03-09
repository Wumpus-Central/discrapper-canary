"use strict";
n.d(t, { uX: () => a, v9: () => o });
var r = n(250105);
let i = { control: 0, treatment_a: 250, treatment_b: 500, treatment_c: 250, treatment_d: 500 },
    s = (0, r.Ay)({
        name: "2025-12-nitro-s-rewards",
        kind: "user",
        defaultConfig: { treatment: "control", receivesUpdatedUpsellPopover: !1 },
        variations: {
            0: { treatment: "control", receivesUpdatedUpsellPopover: !1 },
            1: { treatment: "treatment_a", receivesUpdatedUpsellPopover: !1 },
            2: { treatment: "treatment_b", receivesUpdatedUpsellPopover: !1 },
            3: { treatment: "treatment_c", receivesUpdatedUpsellPopover: !0 },
            4: { treatment: "treatment_d", receivesUpdatedUpsellPopover: !0 },
        },
    });
function a(e) {
    let t = s.useConfig({ location: e }),
        n = t.treatment ?? "control",
        r = "control" !== n;
    return {
        treatment: n,
        isInTreatment: r,
        receivesUpdatedUpsellPopover: t.receivesUpdatedUpsellPopover ?? !1,
        orbsRewardAmount: i[n],
    };
}
function o(e) {
    let t = s.getConfig({ location: e }),
        n = t.treatment ?? "control",
        r = "control" !== n;
    return {
        treatment: n,
        isInTreatment: r,
        receivesUpdatedUpsellPopover: t.receivesUpdatedUpsellPopover ?? !1,
        orbsRewardAmount: i[n],
    };
}
