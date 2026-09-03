n.d(t, { c: () => a });
var l = n(477900),
    i = n(582128),
    s = n(950372),
    r = n(844222);
function a(e) {
    let { shouldAnimate: t = "respect-motion-settings", ...n } = e,
        a = i.useContext(r.C).reducedMotion.enabled;
    return (0, l.jsx)(s.Spring, {
        ...n,
        immediate: !("animate-always" === t || ("respect-motion-settings" === t && !a)),
    });
}
