n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(435371),
    l = n(397927),
    c = n(454938),
    u = n(714991),
    d = n(57991),
    f = n(509536),
    p = n(2697),
    _ = n(696451),
    h = n(287809),
    m = n(473145),
    g = n(652215),
    E = n(985018),
    b = n(617286);
function y(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: i } = e,
        a = (0, s.bG)([h.default, _.Ay], () => {
            let e = h.default.getCurrentUser();
            return _.Ay.isMember(t.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: c, premiumSubscriberCount: u } = t;
    if (0 === u && c === g.TVA.NONE) return null;
    let d = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                a &&
                    !i &&
                    (0, f.K)({
                        guildId: t.id,
                        location: {
                            section: g.JJy.GUILD_HEADER,
                            object: g.ZSU.BOOST_GEM_ICON,
                        },
                    });
        },
        y = c === g.TVA.NONE ? E.intl.string(E.t.c2wsn6) : m.gb(c);
    return (0, r.jsx)("div", {
        className: b._C,
        children: (0, r.jsx)(o.un, {
            title: y,
            body: E.intl.format(E.t.If4iTS, { subscriberCount: u }),
            position: "bottom",
            children: (0, r.jsx)(l.DUT, {
                className: b.__invalid_premiumGuildIcon,
                onClick: d,
                children: (0, r.jsx)(p.A, {
                    size: 18,
                    premiumTier: c,
                    iconBackgroundClassName: n ? b.z_ : void 0,
                    iconClassName: n && c !== g.TVA.TIER_3 ? b.S1 : null,
                }),
            }),
        }),
    });
}
function O(e) {
    let { guild: t, disableColor: n, disableBoostClick: i } = e;
    return (0, c.A)(t)
        ? (0, r.jsx)("div", {
              className: b.Qv,
              children: (0, r.jsx)(d.A, {
                  guild: t,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: l.STz.Colors.PRIMARY,
                  className: a()(b.n2, { [b.cE]: n }),
                  disableBoostClick: i,
              }),
          })
        : (0, r.jsx)("div", {
              className: b._C,
              children: (0, r.jsx)(u.A, {
                  guild: t,
                  size: 18,
                  tooltipPosition: "bottom",
                  tooltipColor: l.STz.Colors.PRIMARY,
                  className: a()(b.n2, { [b.cE]: n }),
              }),
          });
}
function A(e) {
    let { guild: t, disableBoostClick: n } = e,
        i = !1;
    return (0, c.A)(t)
        ? (0, r.jsx)(O, {
              guild: t,
              disableColor: !1,
              disableBoostClick: n,
          })
        : t.features.has(g.GuildFeatures.VERIFIED) || t.features.has(g.GuildFeatures.PARTNERED)
          ? (0, r.jsx)(O, {
                guild: t,
                disableColor: !i,
            })
          : (0, r.jsx)(y, {
                guild: t,
                isBannerVisible: i,
                disableBoostClick: n,
            });
}
