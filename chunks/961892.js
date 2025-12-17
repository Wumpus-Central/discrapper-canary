n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(704215),
    s = n(481060),
    c = n(243778),
    u = n(924540),
    d = n(921944),
    p = n(388032),
    f = n(565854);
let g = (e) => {
    let { isSelected: t, discountOffer: n } = e,
        [l, g] = (0, c.US)([o.z.CHURN_DISCOUNT_PREMIUM_TAB_BADGE], void 0, !0);
    return (i.useEffect(() => {
        t && l === o.z.CHURN_DISCOUNT_PREMIUM_TAB_BADGE && g(d.L.TAKE_ACTION);
    }, [t, g, l]),
    l === o.z.CHURN_DISCOUNT_PREMIUM_TAB_BADGE)
        ? (0, r.jsx)(u._y, {
              badgeCopy: p.intl.format(p.t.AYcXGW, { discountOfferAmount: n.discount.amount }).toString(),
              isTabSelected: t,
              offerExpiresAt: null,
          })
        : (0, r.jsxs)("div", {
              className: a()(f.churnDiscountBadge, f.churnDiscountAcknowledgedBadge),
              children: [
                  (0, r.jsx)(s.T39, {
                      size: "custom",
                      width: 14,
                      height: 14,
                      color: "currentColor",
                      className: f.churnDiscountBadgeIcon,
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: "eyebrow",
                      color: "text-subtle",
                      children: p.intl.format(p.t.AYcXGW, { discountOfferAmount: n.discount.amount }),
                  }),
              ],
          });
};
