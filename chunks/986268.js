e.d(s, { A: () => g });
var t = e(627968);
e(64700);
var l = e(503698),
    o = e.n(l),
    r = e(17928),
    n = e(459192),
    a = e(939249),
    d = e(781696),
    u = e(454938),
    c = e(714991),
    C = e(107773),
    b = e(509536),
    m = e(2697),
    p = e(696451),
    A = e(287809),
    N = e(473145),
    h = e(652215),
    j = e(375708),
    E = e(330243);
function _(i) {
    let { guild: s, isBannerVisible: e, disableBoostClick: l } = i,
        o = (0, r.bG)([A.default, p.Ay], () => {
            let i = A.default.getCurrentUser();
            return p.Ay.isMember(s.id, i?.id);
        }),
        { premiumTier: d, premiumSubscriberCount: u } = s;
    if (0 === u && d === h.TVA.NONE) return null;
    let c = d === h.TVA.NONE ? j.intl.string(j.t.c2wsn6) : N.gb(d);
    return (0, t.jsx)("div", {
        className: E._C,
        children: (0, t.jsx)(n.u, {
            title: c,
            body: j.intl.format(j.t.If4iTS, { subscriberCount: u }),
            position: "bottom",
            children: (0, t.jsx)(a.D, {
                className: E.__invalid_premiumGuildIcon,
                onClick: (i) => {
                    i.stopPropagation(),
                        i.preventDefault(),
                        o &&
                            !l &&
                            (0, b.K4)({
                                guildId: s.id,
                                location: { section: h.JJy.GUILD_HEADER, object: h.ZSU.BOOST_GEM_ICON },
                            });
                },
                children: (0, t.jsx)(m.A, {
                    size: 18,
                    premiumTier: d,
                    iconBackgroundClassName: e ? E.z_ : void 0,
                    iconClassName: e && d !== h.TVA.TIER_3 ? E.S1 : null,
                }),
            }),
        }),
    });
}
function f(i) {
    let { guild: s, disableColor: e, disableBoostClick: l } = i;
    return (0, u.A)(s)
        ? (0, t.jsx)("div", {
              className: E.Qv,
              children: (0, t.jsx)(C.A, {
                  guild: s,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: d.ST.Colors.PRIMARY,
                  className: o()(E.n2, { [E.cE]: e }),
                  disableBoostClick: l,
              }),
          })
        : (0, t.jsx)("div", {
              className: E._C,
              children: (0, t.jsx)(c.A, {
                  guild: s,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: d.ST.Colors.PRIMARY,
                  className: o()(E.n2, { [E.cE]: e }),
              }),
          });
}
function g(i) {
    let { guild: s, disableBoostClick: e } = i;
    return (0, u.A)(s)
        ? (0, t.jsx)(f, { guild: s, disableColor: !1, disableBoostClick: e })
        : s.features.has(h.GuildFeatures.VERIFIED) || s.features.has(h.GuildFeatures.PARTNERED)
          ? (0, t.jsx)(f, { guild: s, disableColor: !0 })
          : (0, t.jsx)(_, { guild: s, isBannerVisible: !1, disableBoostClick: e });
}
