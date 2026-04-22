t.d(s, { g: () => b });
var a = t(627968),
    n = t(64700),
    l = t(403581),
    i = t(834730),
    r = t(862482),
    c = t(534514),
    d = t(192308),
    o = t(404374),
    u = t(725807),
    m = t(927578),
    x = t(226017),
    g = t(652215),
    v = t(788868),
    j = t(985018),
    h = t(398610),
    A = t(7410),
    f = t(936037);
function b() {
    return (0, x.A)()
        ? (0, a.jsx)("div", {
              className: h.do,
              children: (0, a.jsxs)("div", {
                  className: h.U6,
                  children: [
                      (0, a.jsx)("img", { src: A, className: h.Sl, alt: "" }),
                      (0, a.jsx)(c.D, {
                          className: h.wx,
                          variant: "heading-xl/semibold",
                          color: "text-default",
                          children: j.intl.string(j.t.erEf2g),
                      }),
                      (0, a.jsx)(i.E, {
                          variant: "text-md/medium",
                          color: "text-muted",
                          children: j.intl.string(j.t.NaRCXT),
                      }),
                  ],
              }),
          })
        : (0, a.jsxs)("div", {
              className: h.do,
              children: [
                  (0, a.jsxs)("div", {
                      className: h.U6,
                      children: [
                          (0, a.jsx)("img", { src: f, className: h.Sl, alt: "" }),
                          (0, a.jsx)(c.D, {
                              className: h.wx,
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: j.intl.string(j.t.w4DRbZ),
                          }),
                          (0, a.jsx)(i.E, {
                              variant: "text-md/medium",
                              color: "text-muted",
                              children: j.intl.string(j.t.F6u3E3),
                          }),
                      ],
                  }),
                  (0, a.jsx)(N, {}),
              ],
          });
}
function N() {
    let e = (0, m.Dd)(v.PremiumTypes.TIER_2),
        s = n.useCallback(
            () =>
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await t.e("159").then(t.bind(t, 530951));
                    return (s) => (0, a.jsx)(e, { ...s });
                }),
            [],
        ),
        c = j.intl.format(j.t.qXh3fo, { nitroTierName: e, onClick: s });
    return (0, a.jsxs)("div", {
        className: h.Zj,
        children: [
            (0, a.jsx)(l.t, { size: "md", color: o.k0.PREMIUM_TIER_2 }),
            (0, a.jsx)(i.E, { variant: "text-xs/medium", color: "text-strong", className: h.tD, children: c }),
            (0, a.jsx)(u.A, {
                className: h.Oy,
                size: r.lO.TINY,
                shinyButtonClassName: h.Oy,
                subscriptionTier: v.pe.TIER_2,
                premiumModalAnalyticsLocation: { section: g.JJy.FOR_LATER_POPOUT_UPSELL },
            }),
        ],
    });
}
