r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(969090);
var s = r(513431),
    l = r(442837),
    u = r(481060),
    c = r(626135),
    d = r(5967),
    f = r(607070),
    p = r(446108),
    h = r(981631),
    _ = r(388032);
function m(e) {
    var n;
    if (e.ctrlKey || e.altKey || e.metaKey || e.keyCode !== h.yXg.TAB || null == e.target) return;
    let { target: r } = e,
        i = null === (n = (0, d.uB)(e)) || void 0 === n ? void 0 : n.activeElement;
    (0, s.k)(r) &&
        c.default.track(h.rMx.KEYBOARD_SHORTCUT_USED, {
            shortcut_name: 'tab_navigation',
            source_class_list: null != i ? Array.from(i.classList) : [],
            location_object: r.tagName
        });
}
function g(e) {
    let { children: n } = e,
        r = (0, l.cj)([f.Z], () => ({
            enabled: f.Z.useReducedMotion,
            rawValue: f.Z.rawPrefersReducedMotion
        })),
        s = (0, l.cj)([f.Z], () => ({
            enabled: f.Z.useForcedColors,
            rawValue: f.Z.systemForcedColors
        })),
        c = (0, l.e7)([f.Z], () => f.Z.alwaysShowLinkDecorations),
        d = a.useMemo(
            () => ({
                reducedMotion: r,
                prefersCrossfades: !1,
                forcedColors: s,
                alwaysShowLinkDecorations: c
            }),
            [r, s, c]
        );
    return (
        a.useEffect(() => ((0, o.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, p.d1)()), _.intl.onLocaleChange(() => (0, p.d1)()), window.addEventListener('keydown', m), () => window.removeEventListener('keydown', m)), []),
        (0, i.jsx)(u.AccessibilityPreferencesContext.Provider, {
            value: d,
            children: n
        })
    );
}
