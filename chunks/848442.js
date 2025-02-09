n.d(t, { Z: () => P });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(399606),
    o = n(704215),
    s = n(433517),
    c = n(481060),
    d = n(239091),
    u = n(607070),
    h = n(367907),
    p = n(357352),
    m = n(652515),
    g = n(550951),
    f = n(886176),
    _ = n(605236),
    v = n(703656),
    C = n(984933),
    x = n(430824),
    Z = n(626135),
    I = n(434479),
    b = n(981631),
    S = n(176505),
    N = n(629481),
    E = n(388032),
    j = n(220023);
function y(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        d = (0, m.RF)(t, 'guild_shop_channel_row'),
        g = (0, a.e7)([x.Z], () => x.Z.getGuild(t)),
        S = (null == g ? void 0 : g.hasFeature(b.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !0,
        y = 'false' === s.K.get(N.tM, 'false'),
        P = (0, a.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, i.jsx)(I.m, {
        id: 'shop-'.concat(t),
        className: r()(j.previewChannelRow, {
            [j.selected]: n,
            [j.phantomPreview]: y
        }),
        innerClassName: j.previewChannelRowContent,
        renderIcon: (e) =>
            (0, i.jsx)(f.Z, {
                width: 20,
                height: 20,
                className: r()([e, j.shopIcon])
            }),
        text: E.intl.string(E.t.al5EXF),
        selected: n,
        onClick: l,
        trailing: (0, i.jsxs)('div', {
            className: j.gifSection,
            children: [
                P
                    ? (0, i.jsx)(c.IGR, {
                          color: c.TVs.unsafe_rawColors.BRAND_260.css,
                          text: E.intl.string(E.t.y2b7CA),
                          className: j.newBadge
                      })
                    : (0, i.jsx)('img', {
                          src: (0, p.b)('server_products/storefront/money.gif'),
                          className: j.money,
                          alt: ''
                      }),
                n &&
                    (0, i.jsx)(c.P3F, {
                        className: j.closeButton,
                        onClick: (e) => {
                            if (
                                (e.stopPropagation(),
                                (0, _.EW)(o.z.SERVER_SHOP_PHANTOM_PREVIEW),
                                Z.default.track(b.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, h.hH)(t),
                                    action_taken: N.mz.DISMISS_CHANNEL_ROW
                                }),
                                !d || !S)
                            ) {
                                var n;
                                (0, v.dL)(b.Z5c.CHANNEL(t, null === (n = C.ZP.getDefaultChannel(t)) || void 0 === n ? void 0 : n.id));
                            }
                        },
                        'aria-label': E.intl.string(E.t.cpT0Cg),
                        children: (0, i.jsx)(c.k$p, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
            ]
        })
    });
}
function P(e) {
    let { guild: t, selected: l } = e,
        r = (0, g.g)(t, 'guild_shop_channel_row'),
        a = () => {
            s.K.set(N.tM, 'true'), (0, v.uL)(b.Z5c.CHANNEL(t.id, S.oC.GUILD_SHOP));
        };
    return r
        ? (0, i.jsx)(y, {
              guildId: t.id,
              selected: l,
              handleClick: a
          })
        : (0, i.jsx)(I.m, {
              id: 'shop-'.concat(t.id),
              renderIcon: (e) =>
                  (0, i.jsx)(f.Z, {
                      width: 20,
                      height: 20,
                      className: e
                  }),
              text: E.intl.string(E.t.al5EXF),
              selected: l,
              onClick: a,
              onContextMenu: (e) => {
                  null != t &&
                      (0, d.jW)(e, async () => {
                          let { default: e } = await n.e('66050').then(n.bind(n, 376573));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guild: t
                              });
                      });
              }
          });
}
