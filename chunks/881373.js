"use strict";
n.d(t, { K2: () => a, YS: () => l, aW: () => r, y$: () => s });
var i = n(240921);
let r = 30,
    s = 5,
    a = 5,
    o = (0, i.Ay)({
        kind: "user",
        name: "2026-03-l-3pp",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function l(e) {
    let { location: t } = e,
        { enabled: n } = o.useConfig({ location: t });
    return { functionalityEnabled: n };
}
