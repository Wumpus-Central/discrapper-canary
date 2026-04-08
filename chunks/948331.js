n.d(t, { g: () => x });
var i = n(627968),
    l = n(64700),
    s = n(934551),
    a = n(158954),
    r = n(421380),
    o = n(397927),
    d = n(404374),
    c = n(725807),
    u = n(927578),
    h = n(226017),
    A = n(652215),
    _ = n(788868),
    m = n(985018),
    p = n(939957),
    g = n(7410),
    f = n(936037);
function x() {
    return (0, h.A)()
        ? (0, i.jsx)("div", {
              className: p.do,
              children: (0, i.jsxs)("div", {
                  className: p.U6,
                  children: [
                      (0, i.jsx)("img", { src: g, className: p.Sl, alt: "" }),
                      (0, i.jsx)(o.Heading, {
                          className: p.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: m.intl.string(m.t.erEf2g),
                      }),
                      (0, i.jsx)(a.EYj, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: m.intl.string(m.t.NaRCXT),
                      }),
                  ],
              }),
          })
        : (0, i.jsxs)("div", {
              className: p.do,
              children: [
                  (0, i.jsxs)("div", {
                      className: p.U6,
                      children: [
                          (0, i.jsx)("img", { src: f, className: p.Sl, alt: "" }),
                          (0, i.jsx)(o.Heading, {
                              className: p.wx,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: m.intl.string(m.t.w4DRbZ),
                          }),
                          (0, i.jsx)(a.EYj, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: m.intl.string(m.t.F6u3E3),
                          }),
                      ],
                  }),
                  (0, i.jsx)(E, {}),
              ],
          });
}
function E() {
    let e = (0, u.Dd)(_.PremiumTypes.TIER_2),
        t = l.useCallback(
            () =>
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("159").then(n.bind(n, 530951));
                    return (t) => (0, i.jsx)(e, { ...t });
                }),
            [],
        ),
        h = m.intl.format(m.t.qXh3fo, { nitroTierName: e, onClick: t });
    return (0, i.jsxs)("div", {
        className: p.Zj,
        children: [
            (0, i.jsx)(s.NitroWheelIcon, { size: "md", color: d.k0.PREMIUM_TIER_2 }),
            (0, i.jsx)(a.EYj, { variant: "text-xs/medium", color: "text-strong", className: p.tD, children: h }),
            (0, i.jsx)(c.A, {
                className: p.Oy,
                size: r.lO.TINY,
                shinyButtonClassName: p.Oy,
                subscriptionTier: _.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: A.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
