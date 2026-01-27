r.d(t, {
    g: () => m,
});
var n = r(627968),
    l = r(64700),
    s = r(934551),
    a = r(158954),
    i = r(421380),
    o = r(397927),
    c = r(793574),
    u = r(404374),
    d = r(465794),
    h = r(927578),
    p = r(226017),
    f = r(652215),
    g = r(788868),
    S = r(985018),
    E = r(316163),
    y = r(7410),
    _ = r(936037);

function m() {
    return (0, p.A)()
        ? (0, n.jsx)("div", {
              className: E.do,
              children: (0, n.jsxs)("div", {
                  className: E.U6,
                  children: [
                      (0, n.jsx)("img", {
                          src: y,
                          className: E.Sl,
                          alt: "",
                      }),
                      (0, n.jsx)(o.Heading, {
                          className: E.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: S.intl.string(S.t.erEf2g),
                      }),
                      (0, n.jsx)(a.EYj, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: S.intl.string(S.t.NaRCXT),
                      }),
                  ],
              }),
          })
        : (0, n.jsxs)("div", {
              className: E.do,
              children: [
                  (0, n.jsxs)("div", {
                      className: E.U6,
                      children: [
                          (0, n.jsx)("img", {
                              src: _,
                              className: E.Sl,
                              alt: "",
                          }),
                          (0, n.jsx)(o.Heading, {
                              className: E.wx,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: S.intl.string(S.t.w4DRbZ),
                          }),
                          (0, n.jsx)(a.EYj, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: S.intl.string(S.t.F6u3E3),
                          }),
                      ],
                  }),
                  (0, n.jsx)(A, {}),
              ],
          });
}

function A() {
    let e = (0, h.Dd)(g.PremiumTypes.TIER_2),
        t = l.useCallback(
            () =>
                (0, o.mMO)(async () => {
                    let { default: e } = await r.e("22540").then(r.bind(r, 530951));
                    return (t) =>
                        (0, n.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            }),
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })(
                                {
                                    source: c.A.FOR_LATER_POPOUT,
                                },
                                t,
                            ),
                        );
                }),
            [],
        ),
        p = S.intl.format(S.t.qXh3fo, {
            nitroTierName: e,
            onClick: t,
        });
    return (0, n.jsxs)("div", {
        className: E.Zj,
        children: [
            (0, n.jsx)(s.NitroWheelIcon, {
                size: "md",
                color: u.k0.PREMIUM_TIER_2,
            }),
            (0, n.jsx)(a.EYj, {
                variant: "text-xs/medium",
                color: "text-strong",
                className: E.tD,
                children: p,
            }),
            (0, n.jsx)(d.A, {
                className: E.Oy,
                size: i.lO.TINY,
                shinyButtonClassName: E.Oy,
                subscriptionTier: g.pe.TIER_2,
                premiumModalAnalyticsLocation: {
                    section: f.JJy.FOR_LATER_POPOUT_UPSELL,
                },
            }),
        ],
    });
}
