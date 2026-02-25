i.d(e, { I: () => E });
var n = i(627968),
    l = i(64700),
    s = i(873298),
    r = i(397927),
    a = i(334726),
    u = i(365258),
    o = i(419954),
    d = i(253932),
    A = i(780964),
    T = i(985018),
    S = i(730844);
let E = (0, o.Qx)(A.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () =>
        (0, a.m)("GuildActivitySharingDefaultSetting") ? T.intl.string(T.t.vpgck1) : T.intl.string(S.default["/LHVbt"]),
    useOptions: function () {
        let t = (0, a.m)("GuildActivitySharingDefaultSetting");
        return l.useMemo(
            () =>
                t
                    ? [
                          {
                              value: s.Qd.ACTIVITY_STATUS_OFF,
                              name: T.intl.string(T.t.FzgQna),
                              desc: T.intl.string(T.t.SQxoyc),
                          },
                          {
                              value: s.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                              name: T.intl.string(T.t["1hvuGH"]),
                              desc: T.intl.string(T.t.odUCPE),
                          },
                          { value: s.Qd.ACTIVITY_STATUS_ON, name: T.intl.string(T.t.fQc5la) },
                      ]
                    : [
                          { value: s.Qd.ACTIVITY_STATUS_ON, name: T.intl.string(T.t.UzGMH9) },
                          { value: s.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: T.intl.string(S.default["/sAeRY"]) },
                          { value: s.Qd.ACTIVITY_STATUS_OFF, name: T.intl.string(S.default.m3oL7Q) },
                      ],
            [t],
        );
    },
    useValue: d._Z.useSetting,
    setValue: function (t) {
        let e = d._Z.getSetting();
        if ((d._Z.updateSetting(t), !(0, a.r)("GuildActivitySharingDefaultSetting"))) return;
        let l = (0, u.g8)(e, t);
        if (null == l) return;
        let s = (0, u.Xc)(t);
        (0, r.mMO)(async () => {
            let { default: t } = await i.e("41996").then(i.bind(i, 32167));
            return (e) =>
                (0, n.jsx)(t, { ...e, direction: l.direction, affectedGuildIds: l.affectedGuildIds, settingName: s });
        });
    },
});
