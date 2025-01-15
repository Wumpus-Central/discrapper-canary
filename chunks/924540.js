n.d(t, {
    $H: function () {
        return b;
    },
    GN: function () {
        return m;
    }
});
var s = n(200651),
    i = n(192379),
    r = n(120356),
    o = n.n(r),
    c = n(481060),
    l = n(774078),
    a = n(55935),
    u = n(74538),
    d = n(278605),
    f = n(639119),
    p = n(474936),
    g = n(388032),
    x = n(229830);
function h(e) {
    let { isTabSelected: t, expiresAt: n, trialDuration: r, className: u } = e,
        d = i.useMemo(() => Date.parse(n), [n]),
        f = (0, l.Z)(d, 60000);
    return Object.values(f).every((e) => 0 === e)
        ? null
        : (0, s.jsx)(c.Tooltip, {
              text: (0, a.QX)(f, {
                  days: g.t.qVGNkZ,
                  hours: g.t.wyg9a2,
                  minutes: g.t.IzmIlZ
              }),
              children: (e) =>
                  (0, s.jsxs)('div', {
                      ...e,
                      className: o()(x.premiumTrialBadge, x.premiumTrialAcknowledgedBadge, u, { [x.premiumTrialBadgeSelected]: t }),
                      children: [
                          (0, s.jsx)(c.ClockIcon, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              color: 'currentColor',
                              className: x.premiumTrialBadgeIcon
                          }),
                          (0, s.jsxs)(c.Text, {
                              variant: 'eyebrow',
                              children: [' ', r, ' ']
                          })
                      ]
                  })
          });
}
function b(e) {
    var t, n, i;
    let { isTabSelected: r, trialOffer: o } = e,
        c = null === (t = (0, f.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        l = (0, d.xP)('OfferTabBadge'),
        a = (0, u.a5)({
            intervalType: null == c ? void 0 : c.interval,
            intervalCount: null == c ? void 0 : c.interval_count
        });
    return (0, s.jsx)(v, {
        isTabSelected: r,
        badgeCopy: a,
        offerExpiresAt: o.expires_at,
        className: ((n = l), (i = null == c ? void 0 : c.sku_id), n ? x.premiumTrialBadgeV2 : i === p.Si.TIER_2 ? x.premiumTrialTier2UnacknowledgedBadge : x.premiumTrialTier0UnacknowledgedBadge)
    });
}
function m(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: i } = e,
        r = g.intl.formatToPlainString(g.t.iiLbvr, { percent: n.discount.amount }),
        o = (0, d.xP)('OfferTabBadge');
    return (0, s.jsx)(v, {
        isTabSelected: t,
        badgeCopy: i ? r : g.intl.string(g.t['/DTtr6']),
        offerExpiresAt: n.expires_at,
        className: o ? x.premiumTrialBadgeV2 : x.premiumDiscountUnacknowledgedBadge
    });
}
function v(e) {
    let { isTabSelected: t, badgeCopy: n, offerExpiresAt: i, className: r, ackedClassName: l } = e;
    return null != i
        ? (0, s.jsx)(h, {
              className: l,
              expiresAt: i,
              isTabSelected: t,
              trialDuration: n
          })
        : (0, s.jsx)('div', {
              className: o()(x.premiumTrialBadge, r),
              children: (0, s.jsx)(c.Text, {
                  variant: 'eyebrow',
                  className: x.premiumOfferBadgeCopy,
                  children: n
              })
          });
}
