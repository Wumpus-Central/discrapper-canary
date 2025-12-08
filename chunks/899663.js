n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(469571),
    o = n(374470),
    s = n(442837),
    l = n(481060),
    c = n(626135),
    u = n(607070),
    d = n(446108),
    f = n(981631),
    p = n(295907),
    _ = n(388032);
function m(e) {
    var t;
    if (e.ctrlKey || e.altKey || e.metaKey || e.key !== p.vn.TAB || null == e.target) return;
    let { target: n } = e,
        r = null == (t = (0, o.uB)(e)) ? void 0 : t.activeElement;
    (0, o.kK)(n) &&
        c.default.track(f.rMx.KEYBOARD_SHORTCUT_USED, {
            shortcut_name: "tab_navigation",
            source_class_list: null != r ? Array.from(r.classList) : [],
            location_object: n.tagName,
        });
}
function h(e) {
    let { children: t } = e,
        n = (0, s.cj)([u.Z], () => ({
            enabled: u.Z.useReducedMotion,
            rawValue: u.Z.rawPrefersReducedMotion,
        })),
        o = (0, s.cj)([u.Z], () => ({
            enabled: u.Z.useForcedColors,
            rawValue: u.Z.systemForcedColors,
        })),
        c = (0, s.e7)([u.Z], () => u.Z.isHighContrastModeEnabled),
        f = (0, s.e7)([u.Z], () => u.Z.alwaysShowLinkDecorations),
        p = (0, s.e7)([u.Z], () => u.Z.keyboardModeEnabled),
        h = (0, s.e7)([u.Z], () => u.Z.isSwitchIconsEnabled),
        g = i.useMemo(
            () => ({
                reducedMotion: n,
                prefersCrossfades: !1,
                forcedColors: o,
                alwaysShowLinkDecorations: f,
                highContrastModeEnabled: c,
                keyboardModeEnabled: p,
                switchIconsEnabled: h,
            }),
            [n, o, f, c, p, h],
        );
    return (
        i.useEffect(
            () => (
                (0, a.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, d.d1)()),
                _.intl.onLocaleChange(() => (0, d.d1)()),
                window.addEventListener("keydown", m),
                () => window.removeEventListener("keydown", m)
            ),
            [],
        ),
        (0, r.jsx)(l.Sfi.Provider, {
            value: g,
            children: t,
        })
    );
}
