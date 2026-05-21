l.d(t, { K2: () => s, YS: () => o, aW: () => r, y$: () => a });
var i = l(240921);
let r = 30,
    a = 5,
    s = 5,
    n = (0, i.Ay)({
        kind: "user",
        name: "2026-03-l-3pp",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function o(e) {
    let { location: t } = e,
        { enabled: l } = n.useConfig({ location: t });
    return { functionalityEnabled: l };
}
