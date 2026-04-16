n.d(t, { K2: () => a, YS: () => d, aW: () => l, y$: () => s });
var r = n(250105);
let l = 30,
    s = 5,
    a = 5,
    i = (0, r.Ay)({
        kind: "user",
        name: "2026-03-l-3pp",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function d(e) {
    let { location: t } = e,
        { enabled: n } = i.useConfig({ location: t });
    return { functionalityEnabled: n };
}
