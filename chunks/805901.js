"use strict";
n.d(t, { c: () => l });
var i = n(477900),
    r = n(582128),
    a = n(53466),
    s = n(844222);
function l(e) {
    let { shouldAnimate: t = "respect-motion-settings", ...n } = e,
        l = r.useContext(s.C).reducedMotion.enabled;
    return (0, i.jsx)(a.Spring, {
        ...n,
        immediate: !("animate-always" === t || ("respect-motion-settings" === t && !l)),
    });
}
