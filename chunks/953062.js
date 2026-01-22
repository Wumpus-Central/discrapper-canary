n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(554146),
    o = n(397927),
    c = n(379848),
    u = n(105390),
    d = n(49999),
    p = n(985018),
    f = n(318012);
let h = (e) => {
    let { isSelected: t, discountOffer: n } = e,
        [l, h] = (0, c.kn)([s.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE], void 0, !0);
    return (i.useEffect(() => {
        t && l === s.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE && h(d.i.TAKE_ACTION);
    }, [t, h, l]),
    l === s.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE)
        ? (0, r.jsx)(u.MA, {
              badgeCopy: p.intl
                  .format(p.t.AYcXGW, {
                      discountOfferAmount: n.discount.amount,
                  })
                  .toString(),
              isTabSelected: t,
              offerExpiresAt: null,
          })
        : (0, r.jsxs)("div", {
              className: a()(f.bv, f.Hf),
              children: [
                  (0, r.jsx)(o.O4, {
                      size: "custom",
                      width: 14,
                      height: 14,
                      color: "currentColor",
                      className: f.aW,
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: p.intl.format(p.t.AYcXGW, {
                          discountOfferAmount: n.discount.amount,
                      }),
                  }),
              ],
          });
};
