n.d(e, { m: () => _ });
var i = n(442837),
    l = n(433517),
    s = n(87051),
    u = n(509613),
    r = n(430824),
    a = n(9156),
    o = n(594174),
    S = n(626135),
    T = n(313789),
    c = n(981631),
    E = n(468788),
    d = n(490897),
    g = n(388032);
let _ = (0, u.qs)(T.n.EXPERIMENTAL_UNREADS, {
    useTitle: () => g.intl.string(g.t["k6m/si"]),
    useSubtitle: () => g.intl.string(g.t.LGynPs),
    useValue: () => (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications),
    setValue: function (t) {
        s.Z.setAccountFlag(E.c.USE_NEW_NOTIFICATIONS, t),
            t ||
                (l.K.set("turnedOffNewNotifications", !0),
                S.default.track(c.rMx.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: r.Z.getGuildsArray().filter(
                        (t) => a.ZP.resolveGuildUnreadSetting(t) === d.i.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, i.e7)([o.default, a.ZP], () => {
            var t;
            return (null == (t = o.default.getCurrentUser()) ? void 0 : t.isStaff()) || a.ZP.useNewNotifications;
        }),
});
