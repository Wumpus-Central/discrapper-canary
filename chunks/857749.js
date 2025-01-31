n.d(t, { A: () => o });
var i = n(200651),
    r = n(192379),
    a = n(642128),
    s = n(481060);
function o(e) {
    let { shouldAnimate: t = 'respect-motion-settings', ...n } = e,
        o = r.useContext(s.Sfi).reducedMotion.enabled,
        l = 'animate-always' === t || ('respect-motion-settings' === t && !o);
    return (0, i.jsx)(a.Spring, {
        ...n,
        immediate: !l
    });
}
