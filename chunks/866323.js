"use strict";
n.d(t, { p: () => l });
var i = n(582128),
    r = n(296704),
    a = n(844222),
    s = n(384494);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "respect-motion-settings",
        l = arguments.length > 3 ? arguments[3] : void 0,
        o = i.useContext(a.C).reducedMotion.enabled,
        d = t;
    "animate-always" !== n && ("respect-motion-settings" !== n || o) && (d = { ...t, ...s.W });
    let [c, u, _] = (0, r.useTransition)(e, d, l);
    return 4 == arguments.length ? [c, u, _] : c;
}
