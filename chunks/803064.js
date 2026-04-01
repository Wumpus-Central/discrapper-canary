"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(58149),
    a = n(753838),
    o = n(631305),
    d = n(664007),
    c = n(405810),
    u = n(486020),
    m = n(997509),
    g = n(652215),
    x = n(874864),
    h = n(339984),
    _ = n(478644),
    p = n(985018),
    A = n(927548);
let f = function (e) {
    let { guild: t } = e,
        f = t.features.has(g.GuildFeatures.BANNER),
        j = s.useCallback(
            (e, s) => {
                null == e || void 0 === s
                    ? m.A.saveGuild(t.id, { homeHeader: null })
                    : (0, l.mMO)(async () => {
                          let { default: l } = await Promise.all([
                              n.e("59701"),
                              n.e("35929"),
                              n.e("74571"),
                              n.e("9992"),
                          ]).then(n.bind(n, 142630));
                          return (n) =>
                              (0, i.jsx)(l, {
                                  imageUri: e,
                                  file: s,
                                  onCrop: (e) => {
                                      let { imageUri: n } = e;
                                      return m.A.saveGuild(t.id, { homeHeader: n });
                                  },
                                  uploadType: h.HL.HOME_HEADER,
                                  ...n,
                              });
                      });
            },
            [t.id],
        ),
        N = s.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, r.zV)(g.HAw.PREMIUM_GUILD_PROMOTION_OPENED, {
                        location: { section: g.JJy.GUILD_SETTINGS_ONBOARDING, object: g.ZSU.LEARN_MORE },
                        guild_id: t?.id,
                        location_stack: [],
                    }),
                    (0, o.A)({
                        analyticsLocations: [],
                        analyticsSourceLocation: {
                            section: g.JJy.GUILD_SETTINGS_ONBOARDING,
                            object: g.ZSU.ONBOARDING_EDIT,
                            page: g.liQ.GUILD_SETTINGS,
                        },
                        guild: t,
                        perks: (0, x.QR)(),
                    });
            },
            [t],
        ),
        E = (0, i.jsx)(d.A, {
            image: t.homeHeader,
            makeURL: (e) => (null != e ? u.Ay.getGuildHomeHeaderURL({ id: t.id, homeHeader: e }) : null),
            disabled: !f,
            onChange: j,
            hint: p.intl.string(p.t.NyXznh),
            enabled: f,
            maxFileSizeBytes: _.j,
        });
    return f
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: A.bV,
                      children: [
                          (0, i.jsx)(l.Heading, {
                              className: A.wx,
                              variant: "heading-lg/extrabold",
                              children: p.intl.string(p.t.BBj1nY),
                          }),
                          (0, i.jsx)(a.A, {
                              className: A.ts,
                              guild: t,
                              guildFeature: g.GuildFeatures.BANNER,
                              onClick: N,
                          }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: A.uW,
                      children: [
                          (0, i.jsxs)("div", {
                              className: A.uc,
                              children: [
                                  (0, i.jsx)(l.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: p.intl.string(p.t.Vwintv),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: A.au,
                                      children: (0, i.jsx)(c.A, {
                                          onChange: j,
                                          maxFileSizeBytes: _.j,
                                          text: p.intl.string(p.t.yG2pUi),
                                          size: "md",
                                          variant: "primary",
                                      }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { children: E }),
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: A.bV,
                      children: [
                          (0, i.jsx)(l.Heading, {
                              className: A.wx,
                              variant: "heading-lg/extrabold",
                              children: p.intl.string(p.t.BBj1nY),
                          }),
                          (0, i.jsx)(a.A, {
                              className: A.ts,
                              guild: t,
                              guildFeature: g.GuildFeatures.BANNER,
                              onClick: N,
                          }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: A.uW,
                      children: [
                          (0, i.jsxs)("div", {
                              className: A.uc,
                              children: [
                                  (0, i.jsx)(l.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      className: A.tb,
                                      children: p.intl.string(p.t.Vwintv),
                                  }),
                                  (0, i.jsx)(l.Button, {
                                      variant: "expressive",
                                      icon: l._Jp,
                                      text: p.intl.string(p.t["+7XY31"]),
                                      onClick: N,
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              children: (0, i.jsx)(l.DUT, { "aria-hidden": !0, tabIndex: -1, onClick: N, children: E }),
                          }),
                      ],
                  }),
              ],
          });
};
