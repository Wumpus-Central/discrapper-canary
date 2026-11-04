var i = n(855986),
    r = n(462887),
    a = n(467135),
    s = n(850333),
    l = n(875317),
    o = n(413599),
    d = n(253932),
    c = n(652215);
function u(e) {
    let {
            theme: t,
            darkSidebar: n,
            gradientPreset: i,
            clientThemeSettings: a,
            isCustomThemeEditorActive: s,
            hasActiveGuildTheme: l,
            isGuildThemePreviewActive: o,
        } = e,
        d = null != a.customUserThemeSettings;
    return (0, r.q)(t) && n && null == i && !(d || s || l || o);
}
function _() {
    let e = d.eh.useSetting(),
        t = d.l$.useSetting(),
        n = (0, a.k)((e) => e.isEditorActive()),
        r = null != (0, l.Q)(),
        c = (0, l.gM)();
    return (0, i.bG)([o.A, s.A], () =>
        u({
            theme: o.A.theme,
            darkSidebar: t,
            gradientPreset: s.A.gradientPreset,
            clientThemeSettings: e,
            isCustomThemeEditorActive: n,
            hasActiveGuildTheme: r,
            isGuildThemePreviewActive: c,
        }),
    );
}
n.d(
    t,
    {},
    {
        $i: function () {
            let e = (0, l.fX)();
            return u({
                theme: o.A.theme,
                darkSidebar: d.l$.getSetting(),
                gradientPreset: s.A.gradientPreset,
                clientThemeSettings: d.eh.getSetting(),
                isCustomThemeEditorActive: a.k.getState().isEditorActive(),
                hasActiveGuildTheme: null != e,
                isGuildThemePreviewActive: !1,
            });
        },
        NC: function () {
            return _() ? c.NJ8.ASH : void 0;
        },
        qo: _,
    },
);
