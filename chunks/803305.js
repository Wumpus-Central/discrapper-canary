n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(755721),
    l = n(372444),
    a = n(892803),
    s = n(267642),
    o = n(981631),
    c = n(474936),
    d = n(388032),
    u = n(693536);
function g(e) {
    let { guild: t, numSounds: n, isOutOfSlots: g } = e,
        m = t.premiumTier,
        p = (0, s.FZ)(m),
        f = c._k[m] - 2,
        { enabled: h } = a.Z.useConfig({ location: "GuildSettingsSoundboardBoostingUpsell" });
    if (null == p || m === o.Eu4.TIER_3 || n < f) return null;
    let b = g
        ? {
              color: i.Tt.GREEN,
              look: i.iL.FILLED,
              text: d.intl.string(d.t.cYzxGh),
          }
        : void 0;
    return (0, r.jsx)(l.Z, {
        header: d.intl.string(d.t.zT9Sxc),
        text: d.intl.formatToPlainString(d.t.OKqEAQ, {
            level: p,
            numAdditional: (0, s.Je)(p),
        }),
        headerColor: "header-primary",
        textColor: "text-default",
        buttonProps: b,
        useExpressiveButton: h,
        guild: t,
        analyticsLocation: {
            page: o.ZY5.GUILD_SETTINGS,
            section: o.jXE.GUILD_SETTINGS_SOUNDBOARD,
            object: o.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL,
            objectType: (0, s.ge)(p),
        },
        className: u.container,
    });
}
