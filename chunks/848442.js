n.d(t, { Z: () => w });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(399606),
    o = n(704215),
    s = n(433517),
    c = n(481060),
    u = n(239091),
    d = n(607070),
    f = n(367907),
    h = n(357352),
    p = n(652515),
    g = n(550951),
    b = n(886176),
    m = n(266454),
    y = n(703656),
    O = n(984933),
    v = n(430824),
    j = n(626135),
    C = n(434479),
    x = n(981631),
    E = n(176505),
    S = n(629481),
    I = n(388032),
    _ = n(265665);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function N(e, t) {
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
function Z(e) {
    let { guildId: t, selected: n, handleClick: i } = e,
        u = (0, p.RF)(t, "guild_shop_channel_row"),
        g = (0, a.e7)([v.Z], () => v.Z.getGuild(t)),
        E = (null == g ? void 0 : g.features.has(x.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !0,
        Z = "false" === s.K.get(S.tM, "false"),
        w = (0, a.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, r.jsx)(C.m, {
        id: "shop-".concat(t),
        className: l()(_.previewChannelRow, {
            [_.selected]: n,
            [_.phantomPreview]: Z,
        }),
        innerClassName: _.previewChannelRowContent,
        renderIcon: (e) =>
            (0, r.jsx)(b.Z, {
                width: 20,
                height: 20,
                className: l()([e, _.shopIcon]),
            }),
        text: I.intl.string(I.t.al5EXL),
        selected: n,
        onClick: i,
        trailing: (0, r.jsxs)("div", {
            className: _.gifSection,
            children: [
                w
                    ? (0, r.jsx)(c.IGR, {
                          color: c.TVs.unsafe_rawColors.BRAND_260.css,
                          text: I.intl.string(I.t.y2b7CA),
                          className: _.newBadge,
                      })
                    : (0, r.jsx)("img", {
                          src: (0, h.b)("server_products/storefront/money.gif"),
                          className: _.money,
                          alt: "",
                      }),
                n &&
                    (0, r.jsx)(c.P3F, {
                        className: _.closeButton,
                        onClick: (e) => {
                            if (
                                (e.stopPropagation(),
                                (0, m.Q3)(o.z.SERVER_SHOP_PHANTOM_PREVIEW),
                                j.default.track(
                                    x.rMx.GUILD_SHOP_PREVIEW_CLICK,
                                    N(P({}, (0, f.hH)(t)), { action_taken: S.mz.DISMISS_CHANNEL_ROW }),
                                ),
                                !u || !E)
                            ) {
                                var n;
                                (0, y.dL)(x.Z5c.CHANNEL(t, null == (n = O.ZP.getDefaultChannel(t)) ? void 0 : n.id));
                            }
                        },
                        "aria-label": I.intl.string(I.t.cpT0Cq),
                        children: (0, r.jsx)(c.k$p, {
                            size: "xs",
                            color: "currentColor",
                        }),
                    }),
            ],
        }),
    });
}
function w(e) {
    let { guild: t, selected: i } = e,
        l = (0, g.g)(t, "guild_shop_channel_row"),
        a = () => {
            s.K.set(S.tM, "true"), (0, y.uL)(x.Z5c.CHANNEL(t.id, E.oC.GUILD_SHOP));
        };
    return l
        ? (0, r.jsx)(Z, {
              guildId: t.id,
              selected: i,
              handleClick: a,
          })
        : (0, r.jsx)(C.m, {
              id: "shop-".concat(t.id),
              renderIcon: (e) =>
                  (0, r.jsx)(b.Z, {
                      width: 20,
                      height: 20,
                      className: e,
                  }),
              text: I.intl.string(I.t.al5EXL),
              selected: i,
              onClick: a,
              onContextMenu: (e) => {
                  null != t &&
                      (0, u.jW)(e, async () => {
                          let { default: e } = await n.e("66050").then(n.bind(n, 64220));
                          return (n) => (0, r.jsx)(e, N(P({}, n), { guild: t }));
                      });
              },
          });
}
