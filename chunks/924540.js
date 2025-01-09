t.d(s, {
    $H: function () {
        return v;
    },
    GN: function () {
        return m;
    }
});
var n = t(200651),
    a = t(192379),
    r = t(120356),
    i = t.n(r),
    o = t(481060),
    c = t(774078),
    u = t(55935),
    l = t(74538),
    f = t(278605),
    d = t(639119),
    p = t(474936),
    g = t(388032),
    x = t(229830);
function b(e) {
    let { isTabSelected: s, expiresAt: t, trialDuration: r, className: l } = e,
        f = a.useMemo(() => Date.parse(t), [t]),
        d = (0, c.Z)(f, 60000);
    return Object.values(d).every((e) => 0 === e)
        ? null
        : (0, n.jsx)(o.Tooltip, {
              text: (0, u.QX)(d, {
                  days: g.t.qVGNkZ,
                  hours: g.t.wyg9a2,
                  minutes: g.t.IzmIlZ
              }),
              children: (e) =>
                  (0, n.jsxs)('div', {
                      ...e,
                      className: i()(x.premiumTrialBadge, x.premiumTrialAcknowledgedBadge, l, { [x.premiumTrialBadgeSelected]: s }),
                      children: [
                          (0, n.jsx)(o.ClockIcon, {
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
function v(e) {
    var s, t, a;
    let { isTabSelected: r, trialOffer: i } = e,
        o = null === (s = (0, d.N)()) || void 0 === s ? void 0 : s.subscription_trial,
        c = (0, f.xP)('OfferTabBadge'),
        u = (0, l.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count
        });
    return (0, n.jsx)(T, {
        isTabSelected: r,
        badgeCopy: u,
        offerExpiresAt: i.expires_at,
        className: ((t = c), (a = null == o ? void 0 : o.sku_id), t ? x.premiumTrialBadgeV2 : a === p.Si.TIER_2 ? x.premiumTrialTier2UnacknowledgedBadge : x.premiumTrialTier0UnacknowledgedBadge)
    });
}
function m(e) {
    let { isTabSelected: s, userDiscount: t, includesAmountOff: a } = e,
        r = g.intl.formatToPlainString(g.t.iiLbvr, { percent: t.discount.amount }),
        i = (0, f.xP)('OfferTabBadge');
    return (0, n.jsx)(T, {
        isTabSelected: s,
        badgeCopy: a ? r : g.intl.string(g.t['/DTtr6']),
        offerExpiresAt: t.expires_at,
        className: i ? x.premiumTrialBadgeV2 : x.premiumDiscountUnacknowledgedBadge
    });
}
function T(e) {
    let { isTabSelected: s, badgeCopy: t, offerExpiresAt: a, className: r, ackedClassName: c } = e;
    return null != a
        ? (0, n.jsx)(b, {
              className: c,
              expiresAt: a,
              isTabSelected: s,
              trialDuration: t
          })
        : (0, n.jsx)('div', {
              className: i()(x.premiumTrialBadge, r),
              children: (0, n.jsx)(o.Text, {
                  variant: 'eyebrow',
                  className: x.premiumOfferBadgeCopy,
                  children: t
              })
          });
}
