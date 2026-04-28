"use strict";
n.d(t, { c: () => r });
var l = n(627968),
    i = n(64700),
    s = n(123924),
    a = n(844222);
function r(e) {
    let { shouldAnimate: t = "respect-motion-settings", ...n } = e,
        r = i.useContext(a.C).reducedMotion.enabled;
    return (0, l.jsx)(s.Spring, {
        ...n,
        immediate: !("animate-always" === t || ("respect-motion-settings" === t && !r)),
    });
}
