"use strict";
n.d(t, { A: () => S });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(435371),
    l = n(397927),
    u = n(454938),
    c = n(714991),
    d = n(57991),
    _ = n(509536),
    f = n(2697),
    p = n(696451),
    h = n(287809),
    m = n(473145),
    E = n(652215),
    g = n(985018),
    A = n(52915);
function I(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: i } = e,
        s = (0, a.bG)([h.default, p.Ay], () => {
            let e = h.default.getCurrentUser();
            return p.Ay.isMember(t.id, e?.id);
        }),
        { premiumTier: u, premiumSubscriberCount: c } = t;
    if (0 === c && u === E.TVA.NONE) return null;
    let d = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                s &&
                    !i &&
                    (0, _.K)({
                        guildId: t.id,
                        location: { section: E.JJy.GUILD_HEADER, object: E.ZSU.BOOST_GEM_ICON },
                    });
        },
        I = u === E.TVA.NONE ? g.intl.string(g.t.c2wsn6) : m.gb(u);
    return (0, r.jsx)("div", {
        className: A._C,
        children: (0, r.jsx)(o.un, {
            title: I,
            body: g.intl.format(g.t.If4iTS, { subscriberCount: c }),
            position: "bottom",
            children: (0, r.jsx)(l.DUT, {
                className: A.__invalid_premiumGuildIcon,
                onClick: d,
                children: (0, r.jsx)(f.A, {
                    size: 18,
                    premiumTier: u,
                    iconBackgroundClassName: n ? A.z_ : void 0,
                    iconClassName: n && u !== E.TVA.TIER_3 ? A.S1 : null,
                }),
            }),
        }),
    });
}
function T(e) {
    let { guild: t, disableColor: n, disableBoostClick: i } = e;
    return (0, u.A)(t)
        ? (0, r.jsx)("div", {
              className: A.Qv,
              children: (0, r.jsx)(d.A, {
                  guild: t,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: l.STz.Colors.PRIMARY,
                  className: s()(A.n2, { [A.cE]: n }),
                  disableBoostClick: i,
              }),
          })
        : (0, r.jsx)("div", {
              className: A._C,
              children: (0, r.jsx)(c.A, {
                  guild: t,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: l.STz.Colors.PRIMARY,
                  className: s()(A.n2, { [A.cE]: n }),
              }),
          });
}
function S(e) {
    let { guild: t, disableBoostClick: n } = e,
        i = !1;
    return (0, u.A)(t)
        ? (0, r.jsx)(T, { guild: t, disableColor: !1, disableBoostClick: n })
        : t.features.has(E.GuildFeatures.VERIFIED) || t.features.has(E.GuildFeatures.PARTNERED)
          ? (0, r.jsx)(T, { guild: t, disableColor: !i })
          : (0, r.jsx)(I, { guild: t, isBannerVisible: i, disableBoostClick: n });
}
