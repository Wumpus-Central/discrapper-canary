n.d(t, { Z: () => Z });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(399606),
    s = n(704215),
    a = n(433517),
    c = n(481060),
    u = n(239091),
    d = n(607070),
    h = n(367907),
    p = n(357352),
    f = n(652515),
    g = n(550951),
    m = n(886176),
    b = n(605236),
    _ = n(703656),
    y = n(984933),
    v = n(430824),
    O = n(626135),
    C = n(434479),
    S = n(981631),
    j = n(176505),
    E = n(629481),
    x = n(388032),
    N = n(664832);
function I(e) {
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
function P(e, t) {
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
        j = (null == g ? void 0 : g.hasFeature(S.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !0,
        w = 'false' === a.K.get(E.tM, 'false'),
        Z = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, r.jsx)(C.m, {
        id: 'shop-'.concat(t),
        className: l()(N.previewChannelRow, {
            [N.selected]: n,
            [N.phantomPreview]: w
        }),
        innerClassName: N.previewChannelRowContent,
        renderIcon: (e) =>
            (0, r.jsx)(m.Z, {
                width: 20,
                height: 20,
                className: l()([e, N.shopIcon])
            }),
        text: x.NW.string(x.t.al5EXF),
        selected: n,
        onClick: i,
        trailing: (0, r.jsxs)('div', {
            className: N.gifSection,
            children: [
                Z
                    ? (0, r.jsx)(c.IGR, {
                          color: c.TVs.unsafe_rawColors.BRAND_260.css,
                          text: x.NW.string(x.t.y2b7CA),
                          className: N.newBadge
                      })
                    : (0, r.jsx)('img', {
                          src: (0, p.b)('server_products/storefront/money.gif'),
                          className: N.money,
                          alt: ''
                      }),
                n &&
                    (0, r.jsx)(c.P3F, {
                        className: N.closeButton,
                        onClick: (e) => {
                            if ((e.stopPropagation(), (0, b.EW)(s.z.SERVER_SHOP_PHANTOM_PREVIEW), O.default.track(S.rMx.GUILD_SHOP_PREVIEW_CLICK, P(I({}, (0, h.hH)(t)), { action_taken: E.mz.DISMISS_CHANNEL_ROW })), !u || !j)) {
                                var n;
                                (0, _.dL)(S.Z5c.CHANNEL(t, null == (n = y.ZP.getDefaultChannel(t)) ? void 0 : n.id));
                            }
                        },
                        'aria-label': x.NW.string(x.t.cpT0Cg),
                        children: (0, r.jsx)(c.k$p, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
            ]
        })
    });
}
function Z(e) {
    let { guild: t, selected: i } = e,
        l = (0, g.g)(t, 'guild_shop_channel_row'),
        o = () => {
            a.K.set(E.tM, 'true'), (0, _.uL)(S.Z5c.CHANNEL(t.id, j.oC.GUILD_SHOP));
        };
    return l
        ? (0, r.jsx)(w, {
              guildId: t.id,
              selected: i,
              handleClick: o
          })
        : (0, r.jsx)(C.m, {
              id: 'shop-'.concat(t.id),
              renderIcon: (e) =>
                  (0, r.jsx)(m.Z, {
                      width: 20,
                      height: 20,
                      className: e
                  }),
              text: x.NW.string(x.t.al5EXF),
              selected: i,
              onClick: o,
              onContextMenu: (e) => {
                  null != t &&
                      (0, u.jW)(e, async () => {
                          let { default: e } = await n.e('66050').then(n.bind(n, 376573));
                          return (n) => (0, r.jsx)(e, P(I({}, n), { guild: t }));
                      });
              }
          });
}
