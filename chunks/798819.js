n.d(t, { p: () => h });
var i = n(311907),
    s = n(506774),
    l = n(832712),
    a = n(419954),
    r = n(71393),
    o = n(543465),
    d = n(287809),
    u = n(954571),
    c = n(780964),
    g = n(652215),
    m = n(406535),
    _ = n(790782),
    A = n(985018);
let h = (0, a.zD)(c.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => A.intl.string(A.t["k6m/si"]),
    useSubtitle: () => A.intl.string(A.t.LGynPs),
    useValue: () => (0, i.bG)([o.Ay], () => o.Ay.useNewNotifications),
    setValue: function (e) {
        l.A.setAccountFlag(m.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (s.w.set("turnedOffNewNotifications", !0),
                u.default.track(g.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: r.A.getGuildsArray().filter(
                        (e) => o.Ay.resolveGuildUnreadSetting(e) === _.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, i.bG)(
            [d.default, o.Ay],
            () =>
                d.default.getCurrentUser()?.isStaff() ||
                d.default.getCurrentUser()?.isStaffPersonal() ||
                o.Ay.useNewNotifications,
        ),
});
