n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(192308),
    r = n(534514),
    a = n(834730),
    o = n(821609),
    d = n(104510),
    c = n(939249),
    u = n(58149),
    m = n(753838),
    g = n(631305),
    h = n(664007),
    x = n(405810),
    _ = n(486020),
    p = n(997509),
    A = n(652215),
    E = n(874864),
    f = n(339984),
    j = n(478644),
    N = n(985018),
    I = n(327084);
let C = function (e) {
    let { guild: t } = e,
        C = t.features.has(A.GuildFeatures.BANNER),
        b = l.useCallback(
            (e, l) => {
                null == e || void 0 === l
                    ? p.A.saveGuild(t.id, { homeHeader: null })
                    : (0, s.openModalLazy)(async () => {
                          let { default: s } = await Promise.all([
                              n.e("79149"),
                              n.e("29259"),
                              n.e("74571"),
                              n.e("56000"),
                          ]).then(n.bind(n, 142630));
                          return (n) =>
                              (0, i.jsx)(s, {
                                  imageUri: e,
                                  file: l,
                                  onCrop: (e) => {
                                      let { imageUri: n } = e;
                                      return p.A.saveGuild(t.id, { homeHeader: n });
                                  },
                                  uploadType: f.HL.HOME_HEADER,
                                  ...n,
                              });
                      });
            },
            [t.id],
        ),
        v = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, u.zV)(A.HAw.PREMIUM_GUILD_PROMOTION_OPENED, {
                        location: { section: A.JJy.GUILD_SETTINGS_ONBOARDING, object: A.ZSU.LEARN_MORE },
                        guild_id: t?.id,
                        location_stack: [],
                    }),
                    (0, g.A)({
                        analyticsLocations: [],
                        analyticsSourceLocation: {
                            section: A.JJy.GUILD_SETTINGS_ONBOARDING,
                            object: A.ZSU.ONBOARDING_EDIT,
                            page: A.liQ.GUILD_SETTINGS,
                        },
                        guild: t,
                        perks: (0, E.QR)(),
                    });
            },
            [t],
        ),
        S = (0, i.jsx)(h.A, {
            image: t.homeHeader,
            makeURL: (e) => (null != e ? _.Ay.getGuildHomeHeaderURL({ id: t.id, homeHeader: e }) : null),
            disabled: !C,
            onChange: b,
            hint: N.intl.string(N.t.NyXznh),
            enabled: C,
            maxFileSizeBytes: j.j,
        });
    return C
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: I.bV,
                      children: [
                          (0, i.jsx)(r.D, {
                              className: I.wx,
                              variant: "heading-lg/extrabold",
                              children: N.intl.string(N.t.BBj1nY),
                          }),
                          (0, i.jsx)(m.A, {
                              className: I.ts,
                              guild: t,
                              guildFeature: A.GuildFeatures.BANNER,
                              onClick: v,
                          }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: I.uW,
                      children: [
                          (0, i.jsxs)("div", {
                              className: I.uc,
                              children: [
                                  (0, i.jsx)(a.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: N.intl.string(N.t.Vwintv),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: I.au,
                                      children: (0, i.jsx)(x.A, {
                                          onChange: b,
                                          maxFileSizeBytes: j.j,
                                          text: N.intl.string(N.t.yG2pUi),
                                          size: "md",
                                          variant: "primary",
                                      }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { children: S }),
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: I.bV,
                      children: [
                          (0, i.jsx)(r.D, {
                              className: I.wx,
                              variant: "heading-lg/extrabold",
                              children: N.intl.string(N.t.BBj1nY),
                          }),
                          (0, i.jsx)(m.A, {
                              className: I.ts,
                              guild: t,
                              guildFeature: A.GuildFeatures.BANNER,
                              onClick: v,
                          }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: I.uW,
                      children: [
                          (0, i.jsxs)("div", {
                              className: I.uc,
                              children: [
                                  (0, i.jsx)(a.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      className: I.tb,
                                      children: N.intl.string(N.t.Vwintv),
                                  }),
                                  (0, i.jsx)(o.$, {
                                      variant: "expressive",
                                      icon: d._,
                                      text: N.intl.string(N.t["+7XY31"]),
                                      onClick: v,
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              children: (0, i.jsx)(c.D, { "aria-hidden": !0, tabIndex: -1, onClick: v, children: S }),
                          }),
                      ],
                  }),
              ],
          });
};
