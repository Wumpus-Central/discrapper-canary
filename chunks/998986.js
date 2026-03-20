"use strict";
n.d(t, { A: () => j });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(417597),
    r = n(554146),
    o = n(506774),
    c = n(397927),
    d = n(442433),
    u = n(775602),
    h = n(58149),
    A = n(289397),
    m = n(486418),
    g = n(575926),
    p = n(826673),
    _ = n(130978),
    f = n(976860),
    x = n(808728),
    C = n(71393),
    E = n(954571),
    I = n(652793),
    N = n(652215),
    b = n(746080),
    S = n(634654),
    T = n(985018),
    v = n(831010);
function y(e) {
    let { guildId: t, selected: n, handleClick: s } = e,
        d = (0, _.w)(t, "guild_shop_channel_row"),
        m = (0, a.bG)([C.A], () => C.A.getGuild(t)),
        b = m?.features.has(N.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        y = "false" === o.w.get(S.bJ, "false"),
        j = (0, a.bG)([u.A], () => u.A.useReducedMotion);
    return (0, i.jsx)(I.G, {
        id: `shop-${t}`,
        className: l()(v.A2, { [v.wH]: n, [v.ST]: y }),
        innerClassName: v.LE,
        renderIcon: (e) => (0, i.jsx)(g.h, { width: 20, height: 20, className: l()([e, v.sV]) }),
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
                                (0, p.Dr)(r.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                E.default.track(N.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, h.H$)(t),
                                    action_taken: S.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (d && b) || (0, f.bG)(N.BVt.CHANNEL(t, x.Ay.getDefaultChannel(t)?.id));
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
        l = (0, m.P)(t),
        a = () => {
            o.w.set(S.bJ, "true"), (0, f.pX)(N.BVt.CHANNEL(t.id, b.VV.GUILD_SHOP));
        };
    return l
        ? (0, i.jsx)(y, { guildId: t.id, selected: s, handleClick: a })
        : (0, i.jsx)(I.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, i.jsx)(g.h, { width: 20, height: 20, className: e }),
              text: T.intl.string(T.t.al5EXL),
              selected: s,
              onClick: a,
              onContextMenu: (e) => {
                  null != t &&
                      (0, d.L3)(e, async () => {
                          let { default: e } = await n.e("52565").then(n.bind(n, 345332));
                          return (n) => (0, i.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
