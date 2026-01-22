n.d(t, {
    uX: () => s,
    v9: () => o,
});
var r = n(250105);
let i = {
        control: 0,
        treatment_a: 300,
        treatment_b: 700,
    },
    a = (0, r.Ay)({
        name: "2025-12-nitro-s-rewards",
        kind: "user",
        defaultConfig: { treatment: "control" },
        variations: {
            0: { treatment: "control" },
            1: { treatment: "treatment_a" },
            2: { treatment: "treatment_b" },
        },
    });
function s(e) {
    var t;
    let n = null != (t = a.useConfig({ location: e }).treatment) ? t : "control",
        r = "control" !== n;
    return {
        treatment: n,
        isInTreatment: r,
        orbsRewardAmount: i[n],
    };
}
function o(e) {
    var t;
    let n = null != (t = a.getConfig({ location: e }).treatment) ? t : "control",
        r = "control" !== n;
    return {
        treatment: n,
        isInTreatment: r,
        orbsRewardAmount: i[n],
    };
}
