s.d(t, {
    $H: () => m,
    GN: () => v
});
var n = s(200651),
    i = s(192379),
    r = s(120356),
    l = s.n(r),
    o = s(481060),
    a = s(774078),
    c = s(55935),
    u = s(74538),
    d = s(278605),
    f = s(639119),
    p = s(474936),
    g = s(388032),
    x = s(21650);
function h(e) {
    let { isTabSelected: t, expiresAt: s, trialDuration: r, className: u } = e,
        d = i.useMemo(() => Date.parse(s), [s]),
        f = (0, a.Z)(d, 60000);
    return Object.values(f).every((e) => 0 === e)
        ? null
        : (0, n.jsx)(o.ua7, {
              text: (0, c.QX)(f, {
                  days: g.t.qVGNkZ,
                  hours: g.t.wyg9a2,
                  minutes: g.t.IzmIlZ
              }),
              children: (e) =>
                  (0, n.jsxs)('div', {
                      ...e,
                      className: l()(x.premiumTrialBadge, x.premiumTrialAcknowledgedBadge, u, { [x.premiumTrialBadgeSelected]: t }),
                      children: [
                          (0, n.jsx)(o.T39, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              color: 'currentColor',
                              className: x.premiumTrialBadgeIcon
                          }),
                          (0, n.jsxs)(o.Text, {
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
        l = null === (t = (0, f.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        o = (0, d.xP)('OfferTabBadge'),
        a = (0, u.a5)({
            intervalType: null == l ? void 0 : l.interval,
            intervalCount: null == l ? void 0 : l.interval_count
        });
    return (0, n.jsx)(b, {
        isTabSelected: i,
        badgeCopy: a,
        offerExpiresAt: r.expires_at,
        className: ((s = null == l ? void 0 : l.sku_id), o ? x.premiumTrialBadgeV2 : s === p.Si.TIER_2 ? x.premiumTrialTier2UnacknowledgedBadge : x.premiumTrialTier0UnacknowledgedBadge)
    });
}
function v(e) {
    let { isTabSelected: t, userDiscount: s, includesAmountOff: i } = e,
        r = g.intl.formatToPlainString(g.t.iiLbvr, { percent: s.discount.amount }),
        l = (0, d.xP)('OfferTabBadge');
    return (0, n.jsx)(b, {
        isTabSelected: t,
        badgeCopy: i ? r : g.intl.string(g.t['/DTtr6']),
        offerExpiresAt: s.expires_at,
        className: l ? x.premiumTrialBadgeV2 : x.premiumDiscountUnacknowledgedBadge
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
              className: l()(x.premiumTrialBadge, r),
              children: (0, n.jsx)(o.Text, {
                  variant: 'eyebrow',
                  className: x.premiumOfferBadgeCopy,
                  children: s
              })
          });
}
