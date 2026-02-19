"use strict";
n.d(t, { A: () => j });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(417597),
    a = n(554146),
    o = n(506774),
    c = n(397927),
    d = n(442433),
    u = n(775602),
    h = n(58149),
    A = n(289397),
    p = n(491026),
    g = n(486418),
    m = n(575926),
    _ = n(826673),
    f = n(976860),
    x = n(808728),
    C = n(71393),
    E = n(954571),
    I = n(652793),
    b = n(652215),
    N = n(746080),
    S = n(634654),
    T = n(985018),
    v = n(568187);
function y(e) {
    let { guildId: t, selected: n, handleClick: s } = e,
        d = (0, p.YZ)(t, "guild_shop_channel_row"),
        g = (0, r.bG)([C.A], () => C.A.getGuild(t)),
        N = g?.features.has(b.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        y = "false" === o.w.get(S.bJ, "false"),
        j = (0, r.bG)([u.A], () => u.A.useReducedMotion);
    return (0, i.jsx)(I.G, {
        id: `shop-${t}`,
        className: l()(v.A2, { [v.wH]: n, [v.ST]: y }),
        innerClassName: v.LE,
        renderIcon: (e) => (0, i.jsx)(m.h, { width: 20, height: 20, className: l()([e, v.sV]) }),
        text: T.intl.string(T.t.al5EXL),
        selected: n,
        onClick: s,
        trailing: (0, i.jsxs)("div", {
            className: v.ai,
            children: [
                j
                    ? (0, i.jsx)(c.LpS, {
                          color: c.LU0.unsafe_rawColors.BRAND_260.css,
                          text: T.intl.string(T.t.y2b7CA),
                          className: v.Ad,
                      })
                    : (0, i.jsx)("img", {
                          src: (0, A.n)("server_products/storefront/money.gif"),
                          className: v.TG,
                          alt: "",
                      }),
                n &&
                    (0, i.jsx)(c.DUT, {
                        className: v.b,
                        onClick: (e) => {
                            e.stopPropagation(),
                                (0, _.Dr)(a.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                E.default.track(b.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, h.H$)(t),
                                    action_taken: S.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (d && N) || (0, f.bG)(b.BVt.CHANNEL(t, x.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": T.intl.string(T.t.cpT0Cq),
                        children: (0, i.jsx)(c.aXh, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function j(e) {
    let { guild: t, selected: s } = e,
        l = (0, g.P)(t, "guild_shop_channel_row"),
        r = () => {
            o.w.set(S.bJ, "true"), (0, f.pX)(b.BVt.CHANNEL(t.id, N.VV.GUILD_SHOP));
        };
    return l
        ? (0, i.jsx)(y, { guildId: t.id, selected: s, handleClick: r })
        : (0, i.jsx)(I.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, i.jsx)(m.h, { width: 20, height: 20, className: e }),
              text: T.intl.string(T.t.al5EXL),
              selected: s,
              onClick: r,
              onContextMenu: (e) => {
                  null != t &&
                      (0, d.L3)(e, async () => {
                          let { default: e } = await n.e("52565").then(n.bind(n, 345332));
                          return (n) => (0, i.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
