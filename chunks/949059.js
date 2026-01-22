i.d(e, {
    p: () => I,
});
var n = i(311907),
    l = i(506774),
    s = i(832712),
    r = i(419954),
    u = i(71393),
    a = i(543465),
    o = i(287809),
    T = i(954571),
    A = i(780964),
    S = i(652215),
    E = i(406535),
    d = i(790782),
    _ = i(985018);
let I = (0, r.zD)(A.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => _.intl.string(_.t["k6m/si"]),
    useSubtitle: () => _.intl.string(_.t.LGynPs),
    useValue: () => (0, n.bG)([a.Ay], () => a.Ay.useNewNotifications),
    setValue: function (t) {
        s.A.setAccountFlag(E.i.USE_NEW_NOTIFICATIONS, t),
            t ||
                (l.w.set("turnedOffNewNotifications", !0),
                T.default.track(S.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: u.A.getGuildsArray().filter(
                        (t) => a.Ay.resolveGuildUnreadSetting(t) === d.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, n.bG)([o.default, a.Ay], () => {
            var t;
            return (null == (t = o.default.getCurrentUser()) ? void 0 : t.isStaff()) || a.Ay.useNewNotifications;
        }),
});
