n.d(t, { Z: () => E });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(399606),
    a = n(704215),
    s = n(433517),
    c = n(481060),
    u = n(239091),
    d = n(607070),
    p = n(367907),
    h = n(357352),
    f = n(652515),
    g = n(550951),
    m = n(886176),
    b = n(605236),
    y = n(703656),
    _ = n(984933),
    v = n(430824),
    O = n(626135),
    j = n(434479),
    x = n(981631),
    C = n(176505),
    S = n(629481),
    P = n(388032),
    I = n(664832);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let { guildId: t, selected: n, handleClick: i } = e,
        u = (0, f.RF)(t, 'guild_shop_channel_row'),
        g = (0, o.e7)([v.Z], () => v.Z.getGuild(t)),
        C = (null == g ? void 0 : g.hasFeature(x.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !0,
        w = 'false' === s.K.get(S.tM, 'false'),
        E = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, r.jsx)(j.m, {
        id: 'shop-'.concat(t),
        className: l()(I.previewChannelRow, {
            [I.selected]: n,
            [I.phantomPreview]: w
        }),
        innerClassName: I.previewChannelRowContent,
        renderIcon: (e) =>
            (0, r.jsx)(m.Z, {
                width: 20,
                height: 20,
                className: l()([e, I.shopIcon])
            }),
        text: P.NW.string(P.t.al5EXF),
        selected: n,
        onClick: i,
        trailing: (0, r.jsxs)('div', {
            className: I.gifSection,
            children: [
                E
                    ? (0, r.jsx)(c.IGR, {
                          color: c.TVs.unsafe_rawColors.BRAND_260.css,
                          text: P.NW.string(P.t.y2b7CA),
                          className: I.newBadge
                      })
                    : (0, r.jsx)('img', {
                          src: (0, h.b)('server_products/storefront/money.gif'),
                          className: I.money,
                          alt: ''
                      }),
                n &&
                    (0, r.jsx)(c.P3F, {
                        className: I.closeButton,
                        onClick: (e) => {
                            if ((e.stopPropagation(), (0, b.EW)(a.z.SERVER_SHOP_PHANTOM_PREVIEW), O.default.track(x.rMx.GUILD_SHOP_PREVIEW_CLICK, Z(N({}, (0, p.hH)(t)), { action_taken: S.mz.DISMISS_CHANNEL_ROW })), !u || !C)) {
                                var n;
                                (0, y.dL)(x.Z5c.CHANNEL(t, null == (n = _.ZP.getDefaultChannel(t)) ? void 0 : n.id));
                            }
                        },
                        'aria-label': P.NW.string(P.t.cpT0Cg),
                        children: (0, r.jsx)(c.k$p, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
            ]
        })
    });
}
function E(e) {
    let { guild: t, selected: i } = e,
        l = (0, g.g)(t, 'guild_shop_channel_row'),
        o = () => {
            s.K.set(S.tM, 'true'), (0, y.uL)(x.Z5c.CHANNEL(t.id, C.oC.GUILD_SHOP));
        };
    return l
        ? (0, r.jsx)(w, {
              guildId: t.id,
              selected: i,
              handleClick: o
          })
        : (0, r.jsx)(j.m, {
              id: 'shop-'.concat(t.id),
              renderIcon: (e) =>
                  (0, r.jsx)(m.Z, {
                      width: 20,
                      height: 20,
                      className: e
                  }),
              text: P.NW.string(P.t.al5EXF),
              selected: i,
              onClick: o,
              onContextMenu: (e) => {
                  null != t &&
                      (0, u.jW)(e, async () => {
                          let { default: e } = await n.e('66050').then(n.bind(n, 376573));
                          return (n) => (0, r.jsx)(e, Z(N({}, n), { guild: t }));
                      });
              }
          });
}
