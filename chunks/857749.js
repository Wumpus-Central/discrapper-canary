r.d(n, {
    A: function () {
        return l;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(642128),
    s = r(481060);
function l(e) {
    let { shouldAnimate: n = 'respect-motion-settings', ...r } = e,
        l = a.useContext(s.AccessibilityPreferencesContext).reducedMotion.enabled,
        u = 'animate-always' === n || ('respect-motion-settings' === n && !l);
    return (0, i.jsx)(o.Spring, {
        ...r,
        immediate: !u
    });
}
