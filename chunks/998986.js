n.d(t, { A: () => y });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(417597),
    r = n(554146),
    o = n(506774),
    d = n(397927),
    c = n(442433),
    u = n(775602),
    h = n(58149),
    A = n(289397),
    g = n(491026),
    m = n(486418),
    p = n(575926),
    _ = n(826673),
    x = n(976860),
    f = n(808728),
    E = n(71393),
    C = n(954571),
    I = n(652793),
    S = n(652215),
    b = n(746080),
    N = n(634654),
    T = n(985018),
    j = n(568187);
function v(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        c = (0, g.YZ)(t, "guild_shop_channel_row"),
        m = (0, a.bG)([E.A], () => E.A.getGuild(t)),
        b = m?.features.has(S.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        v = "false" === o.w.get(N.bJ, "false"),
        y = (0, a.bG)([u.A], () => u.A.useReducedMotion);
    return (0, i.jsx)(I.G, {
        id: `shop-${t}`,
        className: s()(j.A2, { [j.wH]: n, [j.ST]: v }),
        innerClassName: j.LE,
        renderIcon: (e) => (0, i.jsx)(p.h, { width: 20, height: 20, className: s()([e, j.sV]) }),
        text: T.intl.string(T.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, i.jsxs)("div", {
            className: j.ai,
            children: [
                y
                    ? (0, i.jsx)(d.LpS, {
                          color: d.LU0.unsafe_rawColors.BRAND_260.css,
                          text: T.intl.string(T.t.y2b7CA),
                          className: j.Ad,
                      })
                    : (0, i.jsx)("img", {
                          src: (0, A.n)("server_products/storefront/money.gif"),
                          className: j.TG,
                          alt: "",
                      }),
                n &&
                    (0, i.jsx)(d.DUT, {
                        className: j.b,
                        onClick: (e) => {
                            e.stopPropagation(),
                                (0, _.Dr)(r.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                C.default.track(S.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, h.H$)(t),
                                    action_taken: N.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (c && b) || (0, x.bG)(S.BVt.CHANNEL(t, f.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": T.intl.string(T.t.cpT0Cq),
                        children: (0, i.jsx)(d.aXh, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function y(e) {
    let { guild: t, selected: l } = e,
        s = (0, m.P)(t, "guild_shop_channel_row"),
        a = () => {
            o.w.set(N.bJ, "true"), (0, x.pX)(S.BVt.CHANNEL(t.id, b.VV.GUILD_SHOP));
        };
    return s
        ? (0, i.jsx)(v, { guildId: t.id, selected: l, handleClick: a })
        : (0, i.jsx)(I.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, i.jsx)(p.h, { width: 20, height: 20, className: e }),
              text: T.intl.string(T.t.al5EXL),
              selected: l,
              onClick: a,
              onContextMenu: (e) => {
                  null != t &&
                      (0, c.L3)(e, async () => {
                          let { default: e } = await n.e("52565").then(n.bind(n, 345332));
                          return (n) => (0, i.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
