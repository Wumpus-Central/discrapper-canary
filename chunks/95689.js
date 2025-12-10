n.d(e, { m: () => I });
var i = n(442837),
    l = n(433517),
    s = n(87051),
    u = n(509613),
    r = n(430824),
    a = n(9156),
    o = n(594174),
    c = n(626135),
    d = n(313789),
    S = n(981631),
    T = n(468788),
    E = n(490897),
    g = n(388032);
let I = (0, u.qs)(d.n.EXPERIMENTAL_UNREADS, {
    useTitle: () => g.intl.string(g.t["k6m/si"]),
    useSubtitle: () => g.intl.string(g.t.LGynPs),
    useValue: () => (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications),
    setValue: function (t) {
        s.Z.setAccountFlag(T.c.USE_NEW_NOTIFICATIONS, t),
            t ||
                (l.K.set("turnedOffNewNotifications", !0),
                c.default.track(S.rMx.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: r.Z.getGuildsArray().filter(
                        (t) => a.ZP.resolveGuildUnreadSetting(t) === E.i.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, i.e7)([o.default, a.ZP], () => {
            var t;
            return (null == (t = o.default.getCurrentUser()) ? void 0 : t.isStaff()) || a.ZP.useNewNotifications;
        }),
});
