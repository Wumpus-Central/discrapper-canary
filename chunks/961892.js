n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(704215),
    o = n(481060),
    c = n(243778),
    u = n(924540),
    d = n(921944),
    p = n(388032),
    f = n(716651);
let h = (e) => {
    let { isSelected: t, discountOffer: n } = e,
        [l, h] = (0, c.US)([s.z.CHURN_DISCOUNT_PREMIUM_TAB_BADGE], void 0, !0);
    return (i.useEffect(() => {
        t && l === s.z.CHURN_DISCOUNT_PREMIUM_TAB_BADGE && h(d.L.TAKE_ACTION);
    }, [t, h, l]),
    l === s.z.CHURN_DISCOUNT_PREMIUM_TAB_BADGE)
        ? (0, r.jsx)(u._y, {
              badgeCopy: p.intl.format(p.t.AYcXGW, { discountOfferAmount: n.discount.amount }).toString(),
              isTabSelected: t,
              offerExpiresAt: null,
          })
        : (0, r.jsxs)("div", {
              className: a()(f.churnDiscountBadge, f.churnDiscountAcknowledgedBadge),
              children: [
                  (0, r.jsx)(o.T39, {
                      size: "custom",
                      width: 14,
                      height: 14,
                      color: "currentColor",
                      className: f.churnDiscountBadgeIcon,
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: "eyebrow",
                      color: "text-secondary",
                      children: p.intl.format(p.t.AYcXGW, { discountOfferAmount: n.discount.amount }),
                  }),
              ],
          });
};
