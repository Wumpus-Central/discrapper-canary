"use strict";
n.d(t, { m: () => o });
var r = n(64700),
    i = n(880013),
    s = n(158954),
    a = n(397927);
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "respect-motion-settings",
        o = arguments.length > 3 ? arguments[3] : void 0,
        l = r.useContext(a.CZY).reducedMotion.enabled,
        u = t;
    "animate-always" !== n &&
        ("respect-motion-settings" !== n || l) &&
        (u = "function" == typeof t ? (e, n) => ({ ...t(e, n), ...s.WD7 }) : t.map((e) => ({ ...e, ...s.WD7 })));
    let c = "function" == typeof u,
        [d, _, f] = (0, i.useSprings)(e, u, o);
    return c || 4 == arguments.length ? [d, _, f] : d;
}
