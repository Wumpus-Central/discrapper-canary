e.d(s, { A: () => x });
var o = e(627968);
e(64700);
var t = e(503698),
    l = e.n(t),
    n = e(17928),
    r = e(459192),
    a = e(939249),
    u = e(781696),
    d = e(454938),
    c = e(714991),
    p = e(107773),
    C = e(85829),
    b = e(2697),
    m = e(696451),
    A = e(287809),
    N = e(473145),
    f = e(652215),
    g = e(375708),
    h = e(330243);
function j(i) {
    i.stopPropagation();
}
function E(i) {
    let { guild: s, isBannerVisible: e, disableBoostClick: t } = i,
        l = (0, n.bG)([A.default, m.Ay], () => {
            let i = A.default.getCurrentUser();
            return m.Ay.isMember(s.id, i?.id);
        }),
        { premiumTier: u, premiumSubscriberCount: d } = s;
    if (0 === d && u === f.TVA.NONE) return null;
    let c = u === f.TVA.NONE ? g.intl.string(g.t.c2wsn6) : N.gb(u);
    return (0, o.jsx)("div", {
        className: h._C,
        onKeyPress: j,
        children: (0, o.jsx)(r.u, {
            title: c,
            body: g.intl.format(g.t.If4iTS, { subscriberCount: d }),
            position: "bottom",
            children: (0, o.jsx)(a.D, {
                className: h.__invalid_premiumGuildIcon,
                onClick: (i) => {
                    i.stopPropagation(),
                        i.preventDefault(),
                        l &&
                            !t &&
                            (0, C.K4)({
                                guildId: s.id,
                                location: { section: f.JJy.GUILD_HEADER, object: f.ZSU.BOOST_GEM_ICON },
                            });
                },
                children: (0, o.jsx)(b.A, {
                    size: 18,
                    premiumTier: u,
                    iconBackgroundClassName: e ? h.z_ : void 0,
                    iconClassName: e && u !== f.TVA.TIER_3 ? h.S1 : null,
                }),
            }),
        }),
    });
}
function _(i) {
    let { guild: s, disableColor: e, disableBoostClick: t } = i;
    return (0, d.A)(s)
        ? (0, o.jsx)("div", {
              className: h.Qv,
              onKeyPress: j,
              children: (0, o.jsx)(p.A, {
                  guild: s,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: u.ST.Colors.PRIMARY,
                  className: l()(h.n2, { [h.cE]: e }),
                  disableBoostClick: t,
              }),
          })
        : (0, o.jsx)("div", {
              className: h._C,
              children: (0, o.jsx)(c.A, {
                  guild: s,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: u.ST.Colors.PRIMARY,
                  className: l()(h.n2, { [h.cE]: e }),
              }),
          });
}
function x(i) {
    let { guild: s, disableBoostClick: e } = i;
    return (0, d.A)(s)
        ? (0, o.jsx)(_, { guild: s, disableColor: !1, disableBoostClick: e })
        : s.features.has(f.GuildFeatures.VERIFIED) || s.features.has(f.GuildFeatures.PARTNERED)
          ? (0, o.jsx)(_, { guild: s, disableColor: !0 })
          : (0, o.jsx)(E, { guild: s, isBannerVisible: !1, disableBoostClick: e });
}
