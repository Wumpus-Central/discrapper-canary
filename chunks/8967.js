"use strict";
n.d(t, { P: () => o });
var r = n(574381),
    i = n(945810);
let s = -1 !== (0, n(676279).EL)(),
    a = (0, i.mj)({
        kind: "user",
        name: "2026-03-browser-inverted-wants",
        defaultConfig: { invertWants: !1 },
        variations: { 1: { invertWants: !0 } },
    });
function o(e) {
    return (0, r.xl)() || s ? { invertWants: !1 } : a.getConfig({ location: e });
}
