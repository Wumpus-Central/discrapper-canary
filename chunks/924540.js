t.d(s, {
    $H: () => b,
    GN: () => m
});
var n = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    c = t(774078),
    l = t(55935),
    u = t(74538),
    d = t(278605),
    f = t(639119),
    p = t(474936),
    g = t(388032),
    x = t(21650);
function v(e) {
    let { isTabSelected: s, expiresAt: t, trialDuration: i, className: u } = e,
        d = a.useMemo(() => Date.parse(t), [t]),
        f = (0, c.Z)(d, 60000);
    return Object.values(f).every((e) => 0 === e)
        ? null
        : (0, n.jsx)(o.ua7, {
              text: (0, l.QX)(f, {
                  days: g.t.qVGNkZ,
                  hours: g.t.wyg9a2,
                  minutes: g.t.IzmIlZ
              }),
              children: (e) =>
                  (0, n.jsxs)('div', {
                      ...e,
                      className: r()(x.premiumTrialBadge, x.premiumTrialAcknowledgedBadge, u, { [x.premiumTrialBadgeSelected]: s }),
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
                              children: [' ', i, ' ']
                          })
                      ]
                  })
          });
}
function b(e) {
    var s, t;
    let { isTabSelected: a, trialOffer: i } = e,
        r = null === (s = (0, f.N)()) || void 0 === s ? void 0 : s.subscription_trial,
        o = (0, d.xP)('OfferTabBadge'),
        c = (0, u.a5)({
            intervalType: null == r ? void 0 : r.interval,
            intervalCount: null == r ? void 0 : r.interval_count
        });
    return (0, n.jsx)(T, {
        isTabSelected: a,
        badgeCopy: c,
        offerExpiresAt: i.expires_at,
        className: ((t = null == r ? void 0 : r.sku_id), o ? x.premiumTrialBadgeV2 : t === p.Si.TIER_2 ? x.premiumTrialTier2UnacknowledgedBadge : x.premiumTrialTier0UnacknowledgedBadge)
    });
}
function m(e) {
    let { isTabSelected: s, userDiscount: t, includesAmountOff: a } = e,
        i = g.intl.formatToPlainString(g.t.iiLbvr, { percent: t.discount.amount }),
        r = (0, d.xP)('OfferTabBadge');
    return (0, n.jsx)(T, {
        isTabSelected: s,
        badgeCopy: a ? i : g.intl.string(g.t['/DTtr6']),
        offerExpiresAt: t.expires_at,
        className: r ? x.premiumTrialBadgeV2 : x.premiumDiscountUnacknowledgedBadge
    });
}
function T(e) {
    let { isTabSelected: s, badgeCopy: t, offerExpiresAt: a, className: i, ackedClassName: c } = e;
    return null != a
        ? (0, n.jsx)(v, {
              className: c,
              expiresAt: a,
              isTabSelected: s,
              trialDuration: t
          })
        : (0, n.jsx)('div', {
              className: r()(x.premiumTrialBadge, i),
              children: (0, n.jsx)(o.Text, {
                  variant: 'eyebrow',
                  className: x.premiumOfferBadgeCopy,
                  children: t
              })
          });
}
