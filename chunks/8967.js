"use strict";
n.d(t, { P: () => s });
var r = n(574381);
let i = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-browser-inverted-wants",
    defaultConfig: { invertWants: !1 },
    variations: { 1: { invertWants: !0 } },
});
function s(e) {
    return (0, r.xl)() ? { invertWants: !1 } : i.getConfig({ location: e });
}
