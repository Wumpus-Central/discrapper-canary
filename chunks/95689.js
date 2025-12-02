n.d(e, { Z: () => g });
var i = n(442837),
    l = n(433517),
    s = n(87051),
    r = n(509613),
    u = n(430824),
    a = n(9156),
    o = n(594174),
    c = n(626135),
    d = n(313789),
    E = n(981631),
    S = n(468788),
    I = n(490897),
    T = n(388032);
let g = (0, r.qs)(d.n.EXPERIMENTAL_UNREADS, {
    useTitle: () => T.intl.string(T.t["k6m/si"]),
    useSubtitle: () => T.intl.string(T.t.LGynPs),
    useValue: () => (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications),
    setValue: function (t) {
        s.Z.setAccountFlag(S.c.USE_NEW_NOTIFICATIONS, t),
            t ||
                (l.K.set("turnedOffNewNotifications", !0),
                c.default.track(E.rMx.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: u.Z.getGuildsArray().filter(
                        (t) => a.ZP.resolveGuildUnreadSetting(t) === I.i.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, i.e7)([o.default, a.ZP], () => {
            var t;
            return (null == (t = o.default.getCurrentUser()) ? void 0 : t.isStaff()) || a.ZP.useNewNotifications;
        }),
});
