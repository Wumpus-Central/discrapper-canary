s.d(t, {
    $H: () => m,
    GN: () => v
});
var n = s(200651),
    i = s(192379),
    r = s(120356),
    o = s.n(r),
    l = s(481060),
    a = s(774078),
    c = s(55935),
    u = s(74538),
    d = s(278605),
    p = s(639119),
    f = s(474936),
    g = s(388032),
    x = s(229830);
function h(e) {
    let { isTabSelected: t, expiresAt: s, trialDuration: r, className: u } = e,
        d = i.useMemo(() => Date.parse(s), [s]),
        p = (0, a.Z)(d, 60000);
    return Object.values(p).every((e) => 0 === e)
        ? null
        : (0, n.jsx)(l.ua7, {
              text: (0, c.QX)(p, {
                  days: g.t.qVGNkZ,
                  hours: g.t.wyg9a2,
                  minutes: g.t.IzmIlZ
              }),
              children: (e) =>
                  (0, n.jsxs)('div', {
                      ...e,
                      className: o()(x.premiumTrialBadge, x.premiumTrialAcknowledgedBadge, u, { [x.premiumTrialBadgeSelected]: t }),
                      children: [
                          (0, n.jsx)(l.T39, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              color: 'currentColor',
                              className: x.premiumTrialBadgeIcon
                          }),
                          (0, n.jsxs)(l.Text, {
                              variant: 'eyebrow',
                              children: [' ', r, ' ']
                          })
                      ]
                  })
          });
}
function m(e) {
    var t, s;
    let { isTabSelected: i, trialOffer: r } = e,
        o = null === (t = (0, p.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        l = (0, d.xP)('OfferTabBadge'),
        a = (0, u.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count
        });
    return (0, n.jsx)(b, {
        isTabSelected: i,
        badgeCopy: a,
        offerExpiresAt: r.expires_at,
        className: ((s = null == o ? void 0 : o.sku_id), l ? x.premiumTrialBadgeV2 : s === f.Si.TIER_2 ? x.premiumTrialTier2UnacknowledgedBadge : x.premiumTrialTier0UnacknowledgedBadge)
    });
}
function v(e) {
    let { isTabSelected: t, userDiscount: s, includesAmountOff: i } = e,
        r = g.intl.formatToPlainString(g.t.iiLbvr, { percent: s.discount.amount }),
        o = (0, d.xP)('OfferTabBadge');
    return (0, n.jsx)(b, {
        isTabSelected: t,
        badgeCopy: i ? r : g.intl.string(g.t['/DTtr6']),
        offerExpiresAt: s.expires_at,
        className: o ? x.premiumTrialBadgeV2 : x.premiumDiscountUnacknowledgedBadge
    });
}
function b(e) {
    let { isTabSelected: t, badgeCopy: s, offerExpiresAt: i, className: r, ackedClassName: a } = e;
    return null != i
        ? (0, n.jsx)(h, {
              className: a,
              expiresAt: i,
              isTabSelected: t,
              trialDuration: s
          })
        : (0, n.jsx)('div', {
              className: o()(x.premiumTrialBadge, r),
              children: (0, n.jsx)(l.Text, {
                  variant: 'eyebrow',
                  className: x.premiumOfferBadgeCopy,
                  children: s
              })
          });
}
