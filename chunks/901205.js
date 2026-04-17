n.d(t, { l: () => _ });
var i = n(311907),
    s = n(890138),
    l = n(817281),
    r = n(47671),
    a = n(419954),
    o = n(284016),
    d = n(544028),
    c = n(253932),
    u = n(780964),
    m = n(652215),
    g = n(985018);
let _ = (0, a.zD)(u.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => g.intl.string(g.t["/B+kEV"]),
    useSearchTerms: () => [g.intl.string(g.t.Ksh3ik)],
    useValue: function () {
        return (0, i.bG)([o.A], () => !1 !== o.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        let t = d.A.theme,
            n = r.A.gradientPreset?.id ?? null,
            i = c.eh.getSetting()?.customUserThemeSettings != null;
        (0, s.u)(m.HAw.SYNC_ACROSS_CLIENTS_TOGGLED, {
            is_sync_enabled: e,
            base_theme: t,
            client_theme: n,
            has_custom_theme: i,
        }),
            l.Ay.setShouldSyncAppearanceSettings(e);
    },
});
