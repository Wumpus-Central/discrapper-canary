r.d(t, { g: () => m });
var s = r(627968),
    n = r(64700),
    l = r(934551),
    a = r(158954),
    i = r(421380),
    o = r(397927),
    u = r(793574),
    c = r(404374),
    d = r(465794),
    h = r(927578),
    _ = r(226017),
    S = r(652215),
    E = r(788868),
    g = r(985018),
    p = r(316163),
    f = r(7410),
    A = r(936037);
function m() {
    return (0, _.A)()
        ? (0, s.jsx)("div", {
              className: p.do,
              children: (0, s.jsxs)("div", {
                  className: p.U6,
                  children: [
                      (0, s.jsx)("img", { src: f, className: p.Sl, alt: "" }),
                      (0, s.jsx)(o.Heading, {
                          className: p.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: g.intl.string(g.t.erEf2g),
                      }),
                      (0, s.jsx)(a.EYj, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: g.intl.string(g.t.NaRCXT),
                      }),
                  ],
              }),
          })
        : (0, s.jsxs)("div", {
              className: p.do,
              children: [
                  (0, s.jsxs)("div", {
                      className: p.U6,
                      children: [
                          (0, s.jsx)("img", { src: A, className: p.Sl, alt: "" }),
                          (0, s.jsx)(o.Heading, {
                              className: p.wx,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: g.intl.string(g.t.w4DRbZ),
                          }),
                          (0, s.jsx)(a.EYj, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: g.intl.string(g.t.F6u3E3),
                          }),
                      ],
                  }),
                  (0, s.jsx)(R, {}),
              ],
          });
}
function R() {
    let e = (0, h.Dd)(E.PremiumTypes.TIER_2),
        t = n.useCallback(
            () =>
                (0, o.mMO)(async () => {
                    let { default: e } = await r.e("22540").then(r.bind(r, 530951));
                    return (t) => (0, s.jsx)(e, { source: u.A.FOR_LATER_POPOUT, ...t });
                }),
            [],
        ),
        _ = g.intl.format(g.t.qXh3fo, { nitroTierName: e, onClick: t });
    return (0, s.jsxs)("div", {
        className: p.Zj,
        children: [
            (0, s.jsx)(l.NitroWheelIcon, { size: "md", color: c.k0.PREMIUM_TIER_2 }),
            (0, s.jsx)(a.EYj, { variant: "text-xs/medium", color: "text-strong", className: p.tD, children: _ }),
            (0, s.jsx)(d.A, {
                className: p.Oy,
                size: i.lO.TINY,
                shinyButtonClassName: p.Oy,
                subscriptionTier: E.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: S.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
