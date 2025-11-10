n.d(e, { Z: () => g });
var i = n(442837),
    l = n(433517),
    r = n(87051),
    u = n(509613),
    s = n(430824),
    a = n(9156),
    o = n(594174),
    c = n(626135),
    E = n(313789),
    d = n(981631),
    S = n(468788),
    T = n(490897),
    O = n(388032);
let g = (0, u.qs)(E.n.EXPERIMENTAL_UNREADS, {
    useTitle: () => O.intl.string(O.t["k6m/si"]),
    useSubtitle: () => O.intl.string(O.t.LGynPs),
    useValue: () => (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications),
    setValue: function (t) {
        r.Z.setAccountFlag(S.c.USE_NEW_NOTIFICATIONS, t),
            t ||
                (l.K.set("turnedOffNewNotifications", !0),
                c.default.track(d.rMx.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: s.Z.getGuildsArray().filter(
                        (t) => a.ZP.resolveGuildUnreadSetting(t) === T.i.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, i.e7)([o.default, a.ZP], () => {
            var t;
            return (null == (t = o.default.getCurrentUser()) ? void 0 : t.isStaff()) || a.ZP.useNewNotifications;
        }),
});
