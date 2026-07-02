i.d(t, { K2: () => l, YS: () => o, aW: () => s, y$: () => n });
var r = i(240921);
let s = 30,
    n = 5,
    l = 5,
    a = (0, r.Ay)({
        kind: "user",
        name: "2026-03-l-3pp",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function o(e) {
    let { location: t } = e,
        { enabled: i } = a.useConfig({ location: t });
    return { functionalityEnabled: i };
}
