i.d(e, { p: () => _ });
var n = i(311907),
    l = i(506774),
    s = i(832712),
    r = i(419954),
    a = i(71393),
    u = i(543465),
    o = i(287809),
    d = i(954571),
    T = i(780964),
    A = i(652215),
    S = i(406535),
    E = i(790782),
    g = i(985018);
let _ = (0, r.zD)(T.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => g.intl.string(g.t["k6m/si"]),
    useSubtitle: () => g.intl.string(g.t.LGynPs),
    useValue: () => (0, n.bG)([u.Ay], () => u.Ay.useNewNotifications),
    setValue: function (t) {
        s.A.setAccountFlag(S.i.USE_NEW_NOTIFICATIONS, t),
            t ||
                (l.w.set("turnedOffNewNotifications", !0),
                d.default.track(A.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: a.A.getGuildsArray().filter(
                        (t) => u.Ay.resolveGuildUnreadSetting(t) === E.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, n.bG)([o.default, u.Ay], () => o.default.getCurrentUser()?.isStaff() || u.Ay.useNewNotifications),
});
