r.d(n, {
    A: function () {
        return l;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(666912),
    o = r(481060);
function l(e) {
    let { shouldAnimate: n = 'respect-motion-settings', ...r } = e,
        l = a.useContext(o.AccessibilityPreferencesContext).reducedMotion.enabled,
        u = 'animate-always' === n || ('respect-motion-settings' === n && !l);
    return (0, i.jsx)(s.Spring, {
        ...r,
        immediate: !u
    });
}
