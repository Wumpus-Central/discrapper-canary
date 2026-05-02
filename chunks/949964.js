"use strict";
n.d(t, { c: () => S, A: () => N });
var i,
    r = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    o = n(862482),
    l = n(366010),
    u = n(534514),
    c = n(834730),
    d = n(736653),
    _ = n(793574),
    f = n(688810);
function h(e) {
    let { analyticsLocations: t } = (0, f.Ay)(...e.newLocations);
    return (0, r.jsx)(f.di.Provider, { value: t, children: e.children });
}
var p = n(975571),
    E = n(960851),
    m = n(396375),
    g = n(788868),
    A = n(652215),
    I = n(375708),
    T = n(74981),
    S =
        (((i = {}).SUBSCRIBER_HOME = "SUBSCRIBER_HOME"),
        (i.NITRO_SETTINGS = "SETTINGS"),
        (i.APPLICATION_NITRO_HOME = "APPLICATION_NITRO_HOME"),
        i);
let N = function (e) {
    let { variant: t } = e,
        n = (0, E.cg)(),
        i = (0, d.Ay)(),
        s = (0, l.M)(i) ? o.XD.BRAND_INVERTED : o.XD.BRAND;
    return n
        ? "APPLICATION_NITRO_HOME" === t
            ? (0, r.jsx)(
                  () =>
                      (0, r.jsx)(h, {
                          newLocations: [_.A.PREMIUM_MARKETING_PAGE_BANNER],
                          children: (0, r.jsxs)("div", {
                              className: T._G,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: T.V2,
                                      children: (0, r.jsx)("div", { className: T.N4 }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: a()(T.Fg, T.cj),
                                      children: (0, r.jsx)(c.E, {
                                          variant: "eyebrow",
                                          color: "always-white",
                                          children: I.intl.string(I.t.OS9KPu),
                                      }),
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: T.IH,
                                      children: [
                                          (0, r.jsx)(u.D, {
                                              className: T.U_,
                                              variant: "heading-xxl/extrabold",
                                              color: "text-strong",
                                              children: I.intl.string(I.t["+5UxML"]),
                                          }),
                                          (0, r.jsx)(c.E, {
                                              className: T._M,
                                              variant: "text-md/medium",
                                              color: "text-subtle",
                                              children: I.intl.format(I.t["lVOH/p"], {
                                                  helpCenterLink: p.A.getArticleURL(A.MVz.SUMMER_BOGO_2025),
                                              }),
                                          }),
                                          (0, r.jsx)(m.A, {
                                              textOptions: {
                                                  textOverride: I.intl.string(I.t.J61px0),
                                                  textClassName: T.cZ,
                                              },
                                              subscriptionTier: g.pe.TIER_2,
                                              showIcon: !1,
                                              className: T.xF,
                                              color: s,
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)("div", {
                                      className: T.ZS,
                                      children: (0, r.jsx)("img", {
                                          alt: "",
                                          src: "https://cdn.discordapp.com/assets/content/5ed4a5e53464f95f9a0a196a99b667b06b979eee4a7b7ede0442fa433c9833d0.png",
                                          className: T.F$,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  {},
              )
            : "SETTINGS" === t
              ? (0, r.jsx)(
                    () =>
                        (0, r.jsx)(h, {
                            newLocations: [_.A.PREMIUM_SETTINGS],
                            children: (0, r.jsxs)("div", {
                                className: T.O3,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: T.V9,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: "https://cdn.discordapp.com/assets/content/c363ff378ffd04d0561977f632dc2e1e5ca4906c8850be095be53ea369cdf309.png",
                                            className: T.$V,
                                        }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: T.l$,
                                        children: [
                                            (0, r.jsx)(u.D, {
                                                className: T.U_,
                                                variant: "heading-lg/extrabold",
                                                color: "text-strong",
                                                children: I.intl.string(I.t["+5UxML"]),
                                            }),
                                            (0, r.jsx)(c.E, {
                                                className: T._M,
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                children: I.intl.format(I.t["lVOH/p"], {
                                                    helpCenterLink: p.A.getArticleURL(A.MVz.SUMMER_BOGO_2025),
                                                }),
                                            }),
                                            (0, r.jsx)(m.A, {
                                                textOptions: {
                                                    textOverride: I.intl.string(I.t.J61px0),
                                                    textClassName: T.cZ,
                                                },
                                                subscriptionTier: g.pe.TIER_2,
                                                showIcon: !1,
                                                className: T.xF,
                                                color: s,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: T.m0,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: "https://cdn.discordapp.com/assets/content/4135eb5d081957191871c8ca942b65dab5d2c7cc0aea71c6099dc470d4b648c8.png",
                                            className: T.$V,
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    {},
                )
              : (0, r.jsx)(
                    () =>
                        (0, r.jsxs)("div", {
                            className: T.jo,
                            children: [
                                (0, r.jsx)("div", {
                                    className: T.yk,
                                    children: (0, r.jsx)("img", {
                                        alt: "",
                                        src: "https://cdn.discordapp.com/assets/content/e575cd15e039114aa5d6e92f4466b42043e8c035b5c26785806ce1e497892c7b.png",
                                        className: T.$V,
                                    }),
                                }),
                                (0, r.jsxs)("div", {
                                    className: T.Ep,
                                    children: [
                                        (0, r.jsx)(u.D, {
                                            className: T.U_,
                                            variant: "heading-md/extrabold",
                                            color: "text-strong",
                                            children: I.intl.string(I.t["+5UxML"]),
                                        }),
                                        (0, r.jsx)(c.E, {
                                            className: T._M,
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: I.intl.format(I.t["lVOH/p"], {
                                                helpCenterLink: p.A.getArticleURL(A.MVz.SUMMER_BOGO_2025),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(m.A, {
                                    subscriptionTier: g.pe.TIER_2,
                                    showIcon: !0,
                                    shinyButtonClassName: T.Xp,
                                    hasActivePromotion: !0,
                                }),
                            ],
                        }),
                    {},
                )
        : null;
};
