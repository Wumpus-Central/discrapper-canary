n.d(t, { A: () => j });
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(58149),
    a = n(753838),
    c = n(631305),
    o = n(664007),
    d = n(405810),
    u = n(486020),
    f = n(997509),
    g = n(652215),
    b = n(874864),
    m = n(339984),
    p = n(478644),
    x = n(985018),
    h = n(659233);
let j = function (e) {
    let { guild: t } = e,
        j = t.features.has(g.GuildFeatures.BANNER),
        O = i.useCallback(
            (e, i) => {
                null == e || void 0 === i
                    ? f.A.saveGuild(t.id, { homeHeader: null })
                    : (0, l.mMO)(async () => {
                          let { default: l } = await Promise.all([
                              n.e("35929"),
                              n.e("79149"),
                              n.e("74571"),
                              n.e("94073"),
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
                                              return f.A.saveGuild(t.id, { homeHeader: n });
                                          },
                                          uploadType: m.HL.HOME_HEADER,
                                      },
                                      n,
                                  ),
                              );
                      });
            },
            [t.id],
        ),
        y = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, s.zV)(g.HAw.PREMIUM_GUILD_PROMOTION_OPENED, {
                        location: {
                            section: g.JJy.GUILD_SETTINGS_ONBOARDING,
                            object: g.ZSU.LEARN_MORE,
                        },
                        guild_id: null == t ? void 0 : t.id,
                        location_stack: [],
                    }),
                    (0, c.A)({
                        analyticsLocations: [],
                        analyticsSourceLocation: {
                            section: g.JJy.GUILD_SETTINGS_ONBOARDING,
                            object: g.ZSU.ONBOARDING_EDIT,
                            page: g.liQ.GUILD_SETTINGS,
                        },
                        guild: t,
                        perks: (0, b.QR)(),
                    });
            },
            [t],
        ),
        v = (0, r.jsx)(o.A, {
            image: t.homeHeader,
            makeURL: (e) =>
                null != e
                    ? u.Ay.getGuildHomeHeaderURL({
                          id: t.id,
                          homeHeader: e,
                      })
                    : null,
            disabled: !j,
            onChange: O,
            hint: x.intl.string(x.t.NyXznh),
            enabled: j,
            maxFileSizeBytes: p.j,
        });
    return j
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: h.bV,
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: h.wx,
                              variant: "heading-lg/extrabold",
                              children: x.intl.string(x.t.BBj1nY),
                          }),
                          (0, r.jsx)(a.A, {
                              className: h.ts,
                              guild: t,
                              guildFeature: g.GuildFeatures.BANNER,
                              onClick: y,
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: h.uW,
                      children: [
                          (0, r.jsxs)("div", {
                              className: h.uc,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: x.intl.string(x.t.Vwintv),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: h.au,
                                      children: (0, r.jsx)(d.A, {
                                          onChange: O,
                                          maxFileSizeBytes: p.j,
                                          text: x.intl.string(x.t.yG2pUi),
                                          size: "md",
                                          variant: "primary",
                                      }),
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", { children: v }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: h.bV,
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: h.wx,
                              variant: "heading-lg/extrabold",
                              children: x.intl.string(x.t.BBj1nY),
                          }),
                          (0, r.jsx)(a.A, {
                              className: h.ts,
                              guild: t,
                              guildFeature: g.GuildFeatures.BANNER,
                              onClick: y,
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: h.uW,
                      children: [
                          (0, r.jsxs)("div", {
                              className: h.uc,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      className: h.tb,
                                      children: x.intl.string(x.t.Vwintv),
                                  }),
                                  (0, r.jsx)(l.Button, {
                                      variant: "expressive",
                                      icon: l._Jp,
                                      text: x.intl.string(x.t["+7XY31"]),
                                      onClick: y,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              children: (0, r.jsx)(l.DUT, {
                                  "aria-hidden": !0,
                                  tabIndex: -1,
                                  onClick: y,
                                  children: v,
                              }),
                          }),
                      ],
                  }),
              ],
          });
};
