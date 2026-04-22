a.d(l, { A: () => m });
var t = a(627968),
    s = a(64700),
    i = a(503698),
    n = a.n(i),
    c = a(554146),
    h = a(406810),
    r = a(834730),
    o = a(932001),
    d = a(105390),
    v = a(49999),
    g = a(985018),
    p = a(961773);
let m = (e) => {
    let { isSelected: l, discountOffer: a } = e,
        [i, m] = (0, o.kn)([c.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE], void 0, !0);
    return (s.useEffect(() => {
        l && i === c.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE && m(v.i.TAKE_ACTION);
    }, [l, m, i]),
    i === c.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE)
        ? (0, t.jsx)(d.MA, {
              badgeCopy: g.intl.format(g.t.AYcXGW, { discountOfferAmount: a.discount.amount }).toString(),
              isTabSelected: l,
              offerExpiresAt: null,
          })
        : (0, t.jsxs)("div", {
              className: n()(p.bv, p.Hf),
              children: [
                  (0, t.jsx)(h.O, { size: "custom", width: 14, height: 14, color: "currentColor", className: p.aW }),
                  (0, t.jsx)(r.E, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: g.intl.format(g.t.AYcXGW, { discountOfferAmount: a.discount.amount }),
                  }),
              ],
          });
};
