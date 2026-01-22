n.d(t, { g: () => A });
var r = n(627968),
    i = n(64700),
    a = n(934551),
    s = n(158954),
    o = n(421380),
    l = n(397927),
    c = n(793574),
    u = n(404374),
    d = n(465794),
    f = n(927578),
    p = n(226017),
    _ = n(652215),
    h = n(788868),
    m = n(985018),
    g = n(316163),
    E = n(7410),
    b = n(936037);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function A() {
    return (0, p.A)()
        ? (0, r.jsx)("div", {
              className: g.do,
              children: (0, r.jsxs)("div", {
                  className: g.U6,
                  children: [
                      (0, r.jsx)("img", {
                          src: E,
                          className: g.Sl,
                          alt: "",
                      }),
                      (0, r.jsx)(l.Heading, {
                          className: g.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: m.intl.string(m.t.erEf2g),
                      }),
                      (0, r.jsx)(s.EYj, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: m.intl.string(m.t.NaRCXT),
                      }),
                  ],
              }),
          })
        : (0, r.jsxs)("div", {
              className: g.do,
              children: [
                  (0, r.jsxs)("div", {
                      className: g.U6,
                      children: [
                          (0, r.jsx)("img", {
                              src: b,
                              className: g.Sl,
                              alt: "",
                          }),
                          (0, r.jsx)(l.Heading, {
                              className: g.wx,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: m.intl.string(m.t.w4DRbZ),
                          }),
                          (0, r.jsx)(s.EYj, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: m.intl.string(m.t.F6u3E3),
                          }),
                      ],
                  }),
                  (0, r.jsx)(v, {}),
              ],
          });
}
function v() {
    let e = (0, f.Dd)(h.PremiumTypes.TIER_2),
        t = i.useCallback(
            () =>
                (0, l.mMO)(async () => {
                    let { default: e } = await n.e("22540").then(n.bind(n, 530951));
                    return (t) => (0, r.jsx)(e, O({ source: c.A.FOR_LATER_POPOUT }, t));
                }),
            [],
        ),
        p = m.intl.format(m.t.qXh3fo, {
            nitroTierName: e,
            onClick: t,
        });
    return (0, r.jsxs)("div", {
        className: g.Zj,
        children: [
            (0, r.jsx)(a.NitroWheelIcon, {
                size: "md",
                color: u.k0.PREMIUM_TIER_2,
            }),
            (0, r.jsx)(s.EYj, {
                variant: "text-xs/medium",
                color: "text-strong",
                className: g.tD,
                children: p,
            }),
            (0, r.jsx)(d.A, {
                className: g.Oy,
                size: o.lO.TINY,
                shinyButtonClassName: g.Oy,
                subscriptionTier: h.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: _.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
