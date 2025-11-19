n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(755721),
    l = n(372444),
    a = n(267642),
    s = n(981631),
    o = n(474936),
    c = n(388032),
    d = n(284601);
function u(e) {
    let { guild: t, numSounds: n, isOutOfSlots: u } = e,
        g = t.premiumTier,
        m = (0, a.FZ)(g),
        p = o._k[g] - 2;
    if (null == m || g === s.Eu4.TIER_3 || n < p) return null;
    let f = u
        ? {
              color: i.Tt.GREEN,
              look: i.iL.FILLED,
              text: c.intl.string(c.t.cYzxGn),
          }
        : void 0;
    return (0, r.jsx)(l.Z, {
        header: c.intl.string(c.t.zT9SxY),
        text: c.intl.formatToPlainString(c.t.OKqEAU, {
            level: m,
            numAdditional: (0, a.Je)(m),
        }),
        headerColor: "header-primary",
        textColor: "text-default",
        buttonProps: f,
        useExpressiveButton: !0,
        guild: t,
        analyticsLocation: {
            page: s.ZY5.GUILD_SETTINGS,
            section: s.jXE.GUILD_SETTINGS_SOUNDBOARD,
            object: s.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL,
            objectType: (0, a.ge)(m),
        },
        className: d.container,
    });
}
