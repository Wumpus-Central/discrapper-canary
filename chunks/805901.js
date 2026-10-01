o.d(t, { c: () => r });
var i = o(477900),
    n = o(582128),
    s = o(202091),
    a = o(844222);
function r(e) {
    let { shouldAnimate: t = "respect-motion-settings", ...o } = e,
        r = n.useContext(a.C).reducedMotion.enabled;
    return (0, i.jsx)(s.Spring, {
        ...o,
        immediate: !("animate-always" === t || ("respect-motion-settings" === t && !r)),
    });
}
