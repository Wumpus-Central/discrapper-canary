n.d(t, {
    A: () => j,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(58149),
    a = n(753838),
    o = n(631305),
    c = n(664007),
    d = n(405810),
    u = n(486020),
    g = n(997509),
    m = n(652215),
    p = n(874864),
    f = n(339984),
    h = n(478644),
    b = n(985018),
    x = n(659233);
let j = function (e) {
    let { guild: t } = e,
        j = t.features.has(m.GuildFeatures.BANNER),
        _ = i.useCallback(
            (e, i) => {
                null == e || void 0 === i
                    ? g.A.saveGuild(t.id, {
                          homeHeader: null,
                      })
                    : (0, l.mMO)(async () => {
                          let { default: l } = await Promise.all([
                              n.e("79149"),
                              n.e("35929"),
                              n.e("74571"),
                              n.e("1580"),
                          ]).then(n.bind(n, 142630));
                          return (n) =>
                              (0, r.jsx)(
                                  l,
                                  (function (e) {
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
                                  })(
                                      {
                                          imageUri: e,
                                          file: i,
                                          onCrop: (e) => {
                                              let { imageUri: n } = e;
                                              return g.A.saveGuild(t.id, {
                                                  homeHeader: n,
                                              });
                                          },
                                          uploadType: f.HL.HOME_HEADER,
                                      },
                                      n,
                                  ),
                              );
                      });
            },
            [t.id],
        ),
        O = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, s.zV)(m.HAw.PREMIUM_GUILD_PROMOTION_OPENED, {
                        location: {
                            section: m.JJy.GUILD_SETTINGS_ONBOARDING,
                            object: m.ZSU.LEARN_MORE,
                        },
                        guild_id: null == t ? void 0 : t.id,
                        location_stack: [],
                    }),
                    (0, o.A)({
                        analyticsLocations: [],
                        analyticsSourceLocation: {
                            section: m.JJy.GUILD_SETTINGS_ONBOARDING,
                            object: m.ZSU.ONBOARDING_EDIT,
                            page: m.liQ.GUILD_SETTINGS,
                        },
                        guild: t,
                        perks: (0, p.QR)(),
                    });
            },
            [t],
        ),
        v = (0, r.jsx)(c.A, {
            image: t.homeHeader,
            makeURL: (e) =>
                null != e
                    ? u.Ay.getGuildHomeHeaderURL({
                          id: t.id,
                          homeHeader: e,
                      })
                    : null,
            disabled: !j,
            onChange: _,
            hint: b.intl.string(b.t.NyXznh),
            enabled: j,
            maxFileSizeBytes: h.j,
        });
    return j
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: x.bV,
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: x.wx,
                              variant: "heading-lg/extrabold",
                              children: b.intl.string(b.t.BBj1nY),
                          }),
                          (0, r.jsx)(a.A, {
                              className: x.ts,
                              guild: t,
                              guildFeature: m.GuildFeatures.BANNER,
                              onClick: O,
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: x.uW,
                      children: [
                          (0, r.jsxs)("div", {
                              className: x.uc,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: b.intl.string(b.t.Vwintv),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: x.au,
                                      children: (0, r.jsx)(d.A, {
                                          onChange: _,
                                          maxFileSizeBytes: h.j,
                                          text: b.intl.string(b.t.yG2pUi),
                                          size: "md",
                                          variant: "primary",
                                      }),
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              children: v,
                          }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: x.bV,
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: x.wx,
                              variant: "heading-lg/extrabold",
                              children: b.intl.string(b.t.BBj1nY),
                          }),
                          (0, r.jsx)(a.A, {
                              className: x.ts,
                              guild: t,
                              guildFeature: m.GuildFeatures.BANNER,
                              onClick: O,
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: x.uW,
                      children: [
                          (0, r.jsxs)("div", {
                              className: x.uc,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      className: x.tb,
                                      children: b.intl.string(b.t.Vwintv),
                                  }),
                                  (0, r.jsx)(l.Button, {
                                      variant: "expressive",
                                      icon: l._Jp,
                                      text: b.intl.string(b.t["+7XY31"]),
                                      onClick: O,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              children: (0, r.jsx)(l.DUT, {
                                  "aria-hidden": !0,
                                  tabIndex: -1,
                                  onClick: O,
                                  children: v,
                              }),
                          }),
                      ],
                  }),
              ],
          });
};
