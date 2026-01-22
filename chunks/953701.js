i.d(e, { I: () => T });
var n = i(64700),
    l = i(873298),
    s = i(419954),
    r = i(253932),
    u = i(780964),
    a = i(985018),
    o = i(536482);
let T = (0, s.Qx)(u.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => a.intl.string(o.default["/LHVbt"]),
    useOptions: function () {
        return n.useMemo(
            () => [
                {
                    value: l.Qd.ACTIVITY_STATUS_ON,
                    name: a.intl.string(a.t.UzGMH9),
                },
                {
                    value: l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                    name: a.intl.string(o.default["/sAeRY"]),
                },
                {
                    value: l.Qd.ACTIVITY_STATUS_OFF,
                    name: a.intl.string(o.default.m3oL7Q),
                },
            ],
            [],
        );
    },
    useValue: r._Z.useSetting,
    setValue: r._Z.updateSetting,
});
