r.d(t, { K2: () => i, YS: () => o, aW: () => n, y$: () => s });
var a = r(250105);
let n = 30,
    s = 5,
    i = 5,
    l = (0, a.Ay)({
        kind: "user",
        name: "2026-03-l-3pp",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function o(e) {
    let { location: t } = e,
        { enabled: r } = l.useConfig({ location: t });
    return { marketingEnabled: r, functionalityEnabled: r };
}
