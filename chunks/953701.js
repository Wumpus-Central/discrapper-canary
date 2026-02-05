i.d(e, { I: () => d });
var n = i(64700),
    l = i(873298),
    s = i(419954),
    r = i(253932),
    a = i(780964),
    u = i(985018),
    o = i(536482);
let d = (0, s.Qx)(a.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => u.intl.string(o.default["/LHVbt"]),
    useOptions: function () {
        return n.useMemo(
            () => [
                { value: l.Qd.ACTIVITY_STATUS_ON, name: u.intl.string(u.t.UzGMH9) },
                { value: l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: u.intl.string(o.default["/sAeRY"]) },
                { value: l.Qd.ACTIVITY_STATUS_OFF, name: u.intl.string(o.default.m3oL7Q) },
            ],
            [],
        );
    },
    useValue: r._Z.useSetting,
    setValue: r._Z.updateSetting,
});
