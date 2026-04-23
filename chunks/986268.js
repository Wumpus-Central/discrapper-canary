"use strict";
n.d(t, { A: () => j });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(17928),
    a = n(459192),
    o = n(939249),
    d = n(781696),
    c = n(454938),
    u = n(714991),
    _ = n(57991),
    h = n(509536),
    p = n(2697),
    m = n(696451),
    g = n(287809),
    x = n(473145),
    f = n(652215),
    A = n(985018),
    E = n(330243);
function I(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: s } = e,
        l = (0, r.bG)([g.default, m.Ay], () => {
            let e = g.default.getCurrentUser();
            return m.Ay.isMember(t.id, e?.id);
        }),
        { premiumTier: d, premiumSubscriberCount: c } = t;
    if (0 === c && d === f.TVA.NONE) return null;
    let u = d === f.TVA.NONE ? A.intl.string(A.t.c2wsn6) : x.gb(d);
    return (0, i.jsx)("div", {
        className: E._C,
        children: (0, i.jsx)(a.u, {
            title: u,
            body: A.intl.format(A.t.If4iTS, { subscriberCount: c }),
            position: "bottom",
            children: (0, i.jsx)(o.D, {
                className: E.__invalid_premiumGuildIcon,
                onClick: (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        l &&
                            !s &&
                            (0, h.K4)({
                                guildId: t.id,
                                location: { section: f.JJy.GUILD_HEADER, object: f.ZSU.BOOST_GEM_ICON },
                            });
                },
                children: (0, i.jsx)(p.A, {
                    size: 18,
                    premiumTier: d,
                    iconBackgroundClassName: n ? E.z_ : void 0,
                    iconClassName: n && d !== f.TVA.TIER_3 ? E.S1 : null,
                }),
            }),
        }),
    });
}
function v(e) {
    let { guild: t, disableColor: n, disableBoostClick: s } = e;
    return (0, c.A)(t)
        ? (0, i.jsx)("div", {
              className: E.Qv,
              children: (0, i.jsx)(_.A, {
                  guild: t,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: d.ST.Colors.PRIMARY,
                  className: l()(E.n2, { [E.cE]: n }),
                  disableBoostClick: s,
              }),
          })
        : (0, i.jsx)("div", {
              className: E._C,
              children: (0, i.jsx)(u.A, {
                  guild: t,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: d.ST.Colors.PRIMARY,
                  className: l()(E.n2, { [E.cE]: n }),
              }),
          });
}
function j(e) {
    let { guild: t, disableBoostClick: n } = e;
    return (0, c.A)(t)
        ? (0, i.jsx)(v, { guild: t, disableColor: !1, disableBoostClick: n })
        : t.features.has(f.GuildFeatures.VERIFIED) || t.features.has(f.GuildFeatures.PARTNERED)
          ? (0, i.jsx)(v, { guild: t, disableColor: !0 })
          : (0, i.jsx)(I, { guild: t, isBannerVisible: !1, disableBoostClick: n });
}
