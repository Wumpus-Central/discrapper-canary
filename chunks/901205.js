n.d(t, { l: () => _ });
var i = n(311907),
    s = n(890138),
    l = n(817281),
    a = n(47671),
    r = n(419954),
    o = n(284016),
    d = n(544028),
    u = n(253932),
    c = n(780964),
    g = n(652215),
    m = n(985018);
let _ = (0, r.zD)(c.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => m.intl.string(m.t["/B+kEV"]),
    useSearchTerms: () => [m.intl.string(m.t.Ksh3ik)],
    useValue: function () {
        return (0, i.bG)([o.A], () => !1 !== o.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        let t = d.A.theme,
            n = a.A.gradientPreset?.id ?? null,
            i = u.eh.getSetting()?.customUserThemeSettings != null;
        (0, s.u)(g.HAw.SYNC_ACROSS_CLIENTS_TOGGLED, {
            is_sync_enabled: e,
            base_theme: t,
            client_theme: n,
            has_custom_theme: i,
        }),
            l.Ay.setShouldSyncAppearanceSettings(e);
    },
});
