"use strict";
n.d(t, { p: () => o });
var i = n(64700),
    r = n(580929),
    s = n(844222),
    a = n(384494);
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "respect-motion-settings",
        o = arguments.length > 3 ? arguments[3] : void 0,
        l = i.useContext(s.C).reducedMotion.enabled,
        u = t;
    "animate-always" !== n && ("respect-motion-settings" !== n || l) && (u = { ...t, ...a.W });
    let [d, c, _] = (0, r.useTransition)(e, u, o);
    return 4 == arguments.length ? [d, c, _] : d;
}
