n.d(t, { I: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(873298),
    a = n(397927),
    r = n(334726),
    o = n(365258),
    d = n(419954),
    c = n(253932),
    u = n(780964),
    m = n(985018),
    g = n(536482);
let _ = (0, d.Qx)(u.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () =>
        (0, r.i)("GuildActivitySharingDefaultSetting") ? m.intl.string(m.t.vpgck1) : m.intl.string(g.default["/LHVbt"]),
    useOptions: function () {
        let e = (0, r.i)("GuildActivitySharingDefaultSetting");
        return s.useMemo(
            () =>
                e
                    ? [
                          {
                              value: l.Qd.ACTIVITY_STATUS_OFF,
                              name: m.intl.string(m.t.FzgQna),
                              desc: m.intl.string(m.t.SQxoyc),
                          },
                          {
                              value: l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                              name: m.intl.string(m.t["1hvuGH"]),
                              desc: m.intl.string(m.t.odUCPE),
                          },
                          { value: l.Qd.ACTIVITY_STATUS_ON, name: m.intl.string(m.t.fQc5la) },
                      ]
                    : [
                          { value: l.Qd.ACTIVITY_STATUS_ON, name: m.intl.string(m.t.UzGMH9) },
                          { value: l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: m.intl.string(g.default["/sAeRY"]) },
                          { value: l.Qd.ACTIVITY_STATUS_OFF, name: m.intl.string(g.default.m3oL7Q) },
                      ],
            [e],
        );
    },
    useValue: c._Z.useSetting,
    setValue: function (e) {
        let t = c._Z.getSetting();
        if ((c._Z.updateSetting(e), !(0, r.r)("GuildActivitySharingDefaultSetting"))) return;
        let s = (0, o.g8)(t, e);
        if (null == s) return;
        let l = (0, o.Xc)(e);
        (0, a.mMO)(async () => {
            let { default: e } = await n.e("41996").then(n.bind(n, 32167));
            return (t) =>
                (0, i.jsx)(e, { ...t, direction: s.direction, affectedGuildIds: s.affectedGuildIds, settingName: l });
        });
    },
});
