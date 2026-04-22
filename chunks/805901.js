"use strict";
n.d(t, { c: () => a });
var i = n(627968),
    l = n(64700),
    s = n(517738),
    r = n(844222);
function a(e) {
    let { shouldAnimate: t = "respect-motion-settings", ...n } = e,
        a = l.useContext(r.C).reducedMotion.enabled;
    return (0, i.jsx)(s.Spring, {
        ...n,
        immediate: !("animate-always" === t || ("respect-motion-settings" === t && !a)),
    });
}
