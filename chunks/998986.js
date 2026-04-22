n.d(t, { A: () => O });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(417597),
    r = n(554146),
    o = n(506774),
    d = n(777666),
    c = n(827734),
    u = n(939249),
    h = n(285796),
    A = n(442433),
    _ = n(775602),
    m = n(58149),
    g = n(289397),
    p = n(486418),
    f = n(575926),
    E = n(826673),
    x = n(440293),
    I = n(976860),
    C = n(808728),
    b = n(71393),
    N = n(954571),
    S = n(652793),
    v = n(652215),
    T = n(746080),
    y = n(634654),
    R = n(985018),
    j = n(391277);
function L(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        A = (0, x.w)(t),
        p = (0, a.bG)([b.A], () => b.A.getGuild(t)),
        T = p?.features.has(v.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        L = "false" === o.w.get(y.bJ, "false"),
        O = (0, a.bG)([_.A], () => _.A.useReducedMotion);
    return (0, i.jsx)(S.G, {
        id: `shop-${t}`,
        className: s()(j.A2, { [j.wH]: n, [j.ST]: L }),
        innerClassName: j.LE,
        renderIcon: (e) => (0, i.jsx)(f.h, { width: 20, height: 20, className: s()([e, j.sV]) }),
        text: R.intl.string(R.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, i.jsxs)("div", {
            className: j.ai,
            children: [
                O
                    ? (0, i.jsx)(d.Lp, {
                          color: c.A.unsafe_rawColors.BRAND_260.css,
                          text: R.intl.string(R.t.y2b7CA),
                          className: j.Ad,
                      })
                    : (0, i.jsx)("img", {
                          src: (0, g.n)("server_products/storefront/money.gif"),
                          className: j.TG,
                          alt: "",
                      }),
                n &&
                    (0, i.jsx)(u.D, {
                        className: j.b,
                        onClick: (e) => {
                            e.stopPropagation(),
                                (0, E.Dr)(r.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                N.default.track(v.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, m.H$)(t),
                                    action_taken: y.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (A && T) || (0, I.bG)(v.BVt.CHANNEL(t, C.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": R.intl.string(R.t.cpT0Cq),
                        children: (0, i.jsx)(h.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function O(e) {
    let { guild: t, selected: l } = e,
        s = (0, p.P)(t),
        a = () => {
            o.w.set(y.bJ, "true"), (0, I.pX)(v.BVt.CHANNEL(t.id, T.VV.GUILD_SHOP));
        };
    return s
        ? (0, i.jsx)(L, { guildId: t.id, selected: l, handleClick: a })
        : (0, i.jsx)(S.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, i.jsx)(f.h, { width: 20, height: 20, className: e }),
              text: R.intl.string(R.t.al5EXL),
              selected: l,
              onClick: a,
              onContextMenu: (e) => {
                  null != t &&
                      (0, A.L3)(e, async () => {
                          let { default: e } = await n.e("74946").then(n.bind(n, 345332));
                          return (n) => (0, i.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
