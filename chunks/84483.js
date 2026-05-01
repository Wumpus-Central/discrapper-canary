n.d(t, { uX: () => l, v9: () => o });
var i = n(250105);
let a = { control: 0, treatment_a: 250, treatment_b: 500, treatment_c: 250, treatment_d: 500 },
    r = (0, i.Ay)({
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
    s = (0, i.Ay)({
        name: "2026-03-nitro-s-rewards-v2-test",
        kind: "user",
        defaultConfig: { treatment: "control" },
        variations: { 0: { treatment: "control" }, 1: { treatment: "treatment_c" }, 2: { treatment: "treatment_d" } },
    });
function l(e) {
    let t = r.useConfig({ location: e }),
        n = s.useConfig({ location: e }),
        i = t.treatment ?? "control";
    if ("control" !== i)
        return { treatment: i, isInTreatment: !0, receivesUpdatedUpsellPopover: !1, orbsRewardAmount: a[i] };
    let l = n.treatment ?? "control";
    return "control" !== l
        ? { treatment: l, isInTreatment: !0, receivesUpdatedUpsellPopover: !0, orbsRewardAmount: a[l] }
        : { treatment: "control", isInTreatment: !1, receivesUpdatedUpsellPopover: !1, orbsRewardAmount: 0 };
}
function o(e) {
    let t = r.getConfig({ location: e }),
        n = s.getConfig({ location: e }),
        i = t.treatment ?? "control";
    if ("control" !== i)
        return { treatment: i, isInTreatment: !0, receivesUpdatedUpsellPopover: !1, orbsRewardAmount: a[i] };
    let l = n.treatment ?? "control";
    return "control" !== l
        ? { treatment: l, isInTreatment: !0, receivesUpdatedUpsellPopover: !0, orbsRewardAmount: a[l] }
        : { treatment: "control", isInTreatment: !1, receivesUpdatedUpsellPopover: !1, orbsRewardAmount: 0 };
}
