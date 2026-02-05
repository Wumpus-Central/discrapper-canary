"use strict";
n.d(t, { c: () => o });
var r = n(627968),
    i = n(64700),
    a = n(563495),
    s = n(397927);
function o(e) {
    let { shouldAnimate: t = "respect-motion-settings", ...n } = e,
        o = i.useContext(s.CZY).reducedMotion.enabled,
        l = "animate-always" === t || ("respect-motion-settings" === t && !o);
    return (0, r.jsx)(a.Spring, { ...n, immediate: !l });
}
