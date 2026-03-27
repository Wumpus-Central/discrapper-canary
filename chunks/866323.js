"use strict";
n.d(t, { p: () => o });
var r = n(64700),
    i = n(382222),
    s = n(844222),
    a = n(384494);
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "respect-motion-settings",
        o = arguments.length > 3 ? arguments[3] : void 0,
        l = r.useContext(s.C).reducedMotion.enabled,
        u = t;
    "animate-always" !== n && ("respect-motion-settings" !== n || l) && (u = { ...t, ...a.W });
    let [c, d, _] = (0, i.useTransition)(e, u, o);
    return 4 == arguments.length ? [c, d, _] : c;
}
