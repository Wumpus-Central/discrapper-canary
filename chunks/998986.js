n.d(t, { A: () => j });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(417597),
    r = n(554146),
    o = n(506774),
    c = n(397927),
    d = n(442433),
    u = n(775602),
    h = n(58149),
    A = n(289397),
    _ = n(486418),
    m = n(575926),
    g = n(826673),
    p = n(440293),
    f = n(976860),
    x = n(808728),
    E = n(71393),
    I = n(954571),
    C = n(652793),
    N = n(652215),
    T = n(746080),
    S = n(634654),
    b = n(985018),
    y = n(672669);
function v(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        d = (0, p.w)(t),
        _ = (0, a.bG)([E.A], () => E.A.getGuild(t)),
        T = _?.features.has(N.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        v = "false" === o.w.get(S.bJ, "false"),
        j = (0, a.bG)([u.A], () => u.A.useReducedMotion);
    return (0, i.jsx)(C.G, {
        id: `shop-${t}`,
        className: s()(y.A2, { [y.wH]: n, [y.ST]: v }),
        innerClassName: y.LE,
        renderIcon: (e) => (0, i.jsx)(m.h, { width: 20, height: 20, className: s()([e, y.sV]) }),
        text: b.intl.string(b.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, i.jsxs)("div", {
            className: y.ai,
            children: [
                j
                    ? (0, i.jsx)(c.LpS, {
                          color: c.LU0.unsafe_rawColors.BRAND_260.css,
                          text: b.intl.string(b.t.y2b7CA),
                          className: y.Ad,
                      })
                    : (0, i.jsx)("img", {
                          src: (0, A.n)("server_products/storefront/money.gif"),
                          className: y.TG,
                          alt: "",
                      }),
                n &&
                    (0, i.jsx)(c.DUT, {
                        className: y.b,
                        onClick: (e) => {
                            e.stopPropagation(),
                                (0, g.Dr)(r.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                I.default.track(N.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, h.H$)(t),
                                    action_taken: S.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (d && T) || (0, f.bG)(N.BVt.CHANNEL(t, x.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": b.intl.string(b.t.cpT0Cq),
                        children: (0, i.jsx)(c.aXh, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function j(e) {
    let { guild: t, selected: l } = e,
        s = (0, _.P)(t),
        a = () => {
            o.w.set(S.bJ, "true"), (0, f.pX)(N.BVt.CHANNEL(t.id, T.VV.GUILD_SHOP));
        };
    return s
        ? (0, i.jsx)(v, { guildId: t.id, selected: l, handleClick: a })
        : (0, i.jsx)(C.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, i.jsx)(m.h, { width: 20, height: 20, className: e }),
              text: b.intl.string(b.t.al5EXL),
              selected: l,
              onClick: a,
              onContextMenu: (e) => {
                  null != t &&
                      (0, d.L3)(e, async () => {
                          let { default: e } = await n.e("74946").then(n.bind(n, 345332));
                          return (n) => (0, i.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
