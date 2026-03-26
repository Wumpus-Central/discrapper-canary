"use strict";
n.d(t, { c: () => o });
var r = n(627968),
    i = n(64700),
    s = n(4208),
    a = n(397927);
function o(e) {
    let { shouldAnimate: t = "respect-motion-settings", ...n } = e,
        o = i.useContext(a.CZY).reducedMotion.enabled,
        l = "animate-always" === t || ("respect-motion-settings" === t && !o);
    return (0, r.jsx)(s.Spring, { ...n, immediate: !l });
}
