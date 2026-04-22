"use strict";
n.d(t, { A: () => N });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(311907),
    a = n(459192),
    o = n(939249),
    c = n(781696),
    d = n(454938),
    u = n(714991),
    _ = n(57991),
    h = n(509536),
    m = n(2697),
    p = n(696451),
    g = n(287809),
    A = n(473145),
    f = n(652215),
    x = n(985018),
    E = n(330243);
function I(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: s } = e,
        r = (0, l.bG)([g.default, p.Ay], () => {
            let e = g.default.getCurrentUser();
            return p.Ay.isMember(t.id, e?.id);
        }),
        { premiumTier: c, premiumSubscriberCount: d } = t;
    if (0 === d && c === f.TVA.NONE) return null;
    let u = c === f.TVA.NONE ? x.intl.string(x.t.c2wsn6) : A.gb(c);
    return (0, i.jsx)("div", {
        className: E._C,
        children: (0, i.jsx)(a.u, {
            title: u,
            body: x.intl.format(x.t.If4iTS, { subscriberCount: d }),
            position: "bottom",
            children: (0, i.jsx)(o.D, {
                className: E.__invalid_premiumGuildIcon,
                onClick: (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        r &&
                            !s &&
                            (0, h.K4)({
                                guildId: t.id,
                                location: { section: f.JJy.GUILD_HEADER, object: f.ZSU.BOOST_GEM_ICON },
                            });
                },
                children: (0, i.jsx)(m.A, {
                    size: 18,
                    premiumTier: c,
                    iconBackgroundClassName: n ? E.z_ : void 0,
                    iconClassName: n && c !== f.TVA.TIER_3 ? E.S1 : null,
                }),
            }),
        }),
    });
}
function v(e) {
    let { guild: t, disableColor: n, disableBoostClick: s } = e;
    return (0, d.A)(t)
        ? (0, i.jsx)("div", {
              className: E.Qv,
              children: (0, i.jsx)(_.A, {
                  guild: t,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: c.ST.Colors.PRIMARY,
                  className: r()(E.n2, { [E.cE]: n }),
                  disableBoostClick: s,
              }),
          })
        : (0, i.jsx)("div", {
              className: E._C,
              children: (0, i.jsx)(u.A, {
                  guild: t,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: c.ST.Colors.PRIMARY,
                  className: r()(E.n2, { [E.cE]: n }),
              }),
          });
}
function N(e) {
    let { guild: t, disableBoostClick: n } = e;
    return (0, d.A)(t)
        ? (0, i.jsx)(v, { guild: t, disableColor: !1, disableBoostClick: n })
        : t.features.has(f.GuildFeatures.VERIFIED) || t.features.has(f.GuildFeatures.PARTNERED)
          ? (0, i.jsx)(v, { guild: t, disableColor: !0 })
          : (0, i.jsx)(I, { guild: t, isBannerVisible: !1, disableBoostClick: n });
}
