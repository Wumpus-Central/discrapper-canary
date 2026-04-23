n.d(t, { I: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(873298),
    a = n(192308),
    r = n(334726),
    o = n(365258),
    d = n(419954),
    u = n(253932),
    c = n(780964),
    g = n(985018),
    m = n(395277);
let _ = (0, d.Qx)(c.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () =>
        (0, r.i)("GuildActivitySharingDefaultSetting") ? g.intl.string(g.t.vpgck1) : g.intl.string(m.default["/LHVbt"]),
    useOptions: function () {
        let e = (0, r.i)("GuildActivitySharingDefaultSetting");
        return s.useMemo(
            () =>
                e
                    ? [
                          {
                              value: l.Qd.ACTIVITY_STATUS_OFF,
                              name: g.intl.string(g.t.FzgQna),
                              desc: g.intl.string(g.t.SQxoyc),
                          },
                          {
                              value: l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                              name: g.intl.string(g.t["1hvuGH"]),
                              desc: g.intl.string(g.t.odUCPE),
                          },
                          { value: l.Qd.ACTIVITY_STATUS_ON, name: g.intl.string(g.t.fQc5la) },
                      ]
                    : [
                          { value: l.Qd.ACTIVITY_STATUS_ON, name: g.intl.string(g.t.UzGMH9) },
                          { value: l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: g.intl.string(m.default["/sAeRY"]) },
                          { value: l.Qd.ACTIVITY_STATUS_OFF, name: g.intl.string(m.default.m3oL7Q) },
                      ],
            [e],
        );
    },
    useValue: u._Z.useSetting,
    setValue: function (e) {
        let t = u._Z.getSetting();
        if ((u._Z.updateSetting(e), !(0, r.r)("GuildActivitySharingDefaultSetting"))) return;
        let s = (0, o.g8)(t, e);
        if (null == s) return;
        let l = (0, o.Xc)(e);
        (0, a.openModalLazy)(async () => {
            let { default: e } = await n.e("41996").then(n.bind(n, 32167));
            return (t) =>
                (0, i.jsx)(e, { ...t, direction: s.direction, affectedGuildIds: s.affectedGuildIds, settingName: l });
        });
    },
});
