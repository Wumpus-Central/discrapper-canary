o.d(s, { A: () => x });
var e = o(627968);
o(64700);
var t = o(503698),
    l = o.n(t),
    n = o(17928),
    r = o(459192),
    a = o(939249),
    u = o(781696),
    d = o(454938),
    c = o(714991),
    p = o(107773),
    C = o(85829),
    b = o(2697),
    m = o(696451),
    A = o(287809),
    N = o(473145),
    f = o(652215),
    g = o(375708),
    h = o(330243);
function j(i) {
    i.stopPropagation();
}
function E(i) {
    let { guild: s, isBannerVisible: o, disableBoostClick: t } = i,
        l = (0, n.bG)([A.default, m.Ay], () => {
            let i = A.default.getCurrentUser();
            return m.Ay.isMember(s.id, i?.id);
        }),
        { premiumTier: u, premiumSubscriberCount: d } = s;
    if (0 === d && u === f.TVA.NONE) return null;
    let c = u === f.TVA.NONE ? g.intl.string(g.t.c2wsn6) : N.gb(u);
    return (0, e.jsx)("div", {
        className: h._C,
        onKeyPress: j,
        children: (0, e.jsx)(r.u, {
            title: c,
            body: g.intl.format(g.t.If4iTS, { subscriberCount: d }),
            position: "bottom",
            children: (0, e.jsx)(a.D, {
                className: h.__invalid_premiumGuildIcon,
                onClick: function (i) {
                    i.stopPropagation(),
                        i.preventDefault(),
                        l &&
                            !t &&
                            (0, C.K4)({
                                guildId: s.id,
                                location: { section: f.JJy.GUILD_HEADER, object: f.ZSU.BOOST_GEM_ICON },
                            });
                },
                children: (0, e.jsx)(b.A, {
                    size: 18,
                    premiumTier: u,
                    iconBackgroundClassName: o ? h.z_ : void 0,
                    iconClassName: o && u !== f.TVA.TIER_3 ? h.S1 : null,
                }),
            }),
        }),
    });
}
function _(i) {
    let { guild: s, disableColor: o, disableBoostClick: t } = i;
    return (0, d.A)(s)
        ? (0, e.jsx)("div", {
              className: h.Qv,
              onKeyPress: j,
              children: (0, e.jsx)(p.A, {
                  guild: s,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: u.ST.Colors.PRIMARY,
                  className: l()(h.n2, { [h.cE]: o }),
                  disableBoostClick: t,
              }),
          })
        : (0, e.jsx)("div", {
              className: h._C,
              children: (0, e.jsx)(c.A, {
                  guild: s,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: u.ST.Colors.PRIMARY,
                  className: l()(h.n2, { [h.cE]: o }),
              }),
          });
}
function x(i) {
    let { guild: s, disableBoostClick: o } = i;
    return (0, d.A)(s)
        ? (0, e.jsx)(_, { guild: s, disableColor: !1, disableBoostClick: o })
        : s.features.has(f.GuildFeatures.VERIFIED) || s.features.has(f.GuildFeatures.PARTNERED)
          ? (0, e.jsx)(_, { guild: s, disableColor: !0 })
          : (0, e.jsx)(E, { guild: s, isBannerVisible: !1, disableBoostClick: o });
}
