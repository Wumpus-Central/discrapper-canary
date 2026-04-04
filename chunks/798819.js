n.d(t, { p: () => A });
var i = n(311907),
    s = n(506774),
    l = n(832712),
    a = n(419954),
    r = n(71393),
    o = n(543465),
    d = n(287809),
    c = n(954571),
    u = n(780964),
    m = n(652215),
    g = n(406535),
    _ = n(790782),
    x = n(985018);
let A = (0, a.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => x.intl.string(x.t["k6m/si"]),
    useSubtitle: () => x.intl.string(x.t.LGynPs),
    useValue: () => (0, i.bG)([o.Ay], () => o.Ay.useNewNotifications),
    setValue: function (e) {
        l.A.setAccountFlag(g.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (s.w.set("turnedOffNewNotifications", !0),
                c.default.track(m.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
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
