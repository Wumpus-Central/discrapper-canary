s.d(t, {
    $H: function () {
        return h;
    },
    GN: function () {
        return m;
    }
});
var n = s(200651),
    i = s(192379),
    r = s(120356),
    o = s.n(r),
    c = s(481060),
    a = s(774078),
    l = s(55935),
    u = s(74538),
    d = s(278605),
    f = s(639119),
    p = s(474936),
    g = s(388032),
    x = s(648932);
function b(e) {
    let { isTabSelected: t, expiresAt: s, trialDuration: r, className: u } = e,
        d = i.useMemo(() => Date.parse(s), [s]),
        f = (0, a.Z)(d, 60000);
    return Object.values(f).every((e) => 0 === e)
        ? null
        : (0, n.jsx)(c.Tooltip, {
              text: (0, l.QX)(f, {
                  days: g.t.qVGNkZ,
                  hours: g.t.wyg9a2,
                  minutes: g.t.IzmIlZ
              }),
              children: (e) =>
                  (0, n.jsxs)('div', {
                      ...e,
                      className: o()(x.premiumTrialBadge, x.premiumTrialAcknowledgedBadge, u, { [x.premiumTrialBadgeSelected]: t }),
                      children: [
                          (0, n.jsx)(c.ClockIcon, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              color: 'currentColor',
                              className: x.premiumTrialBadgeIcon
                          }),
                          (0, n.jsxs)(c.Text, {
                              variant: 'eyebrow',
                              children: [' ', r, ' ']
                          })
                      ]
                  })
          });
}
function h(e) {
    var t, s, i;
    let { isTabSelected: r, trialOffer: o } = e,
        c = null === (t = (0, f.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        a = (0, d.xP)('OfferTabBadge'),
        l = (0, u.a5)({
            intervalType: null == c ? void 0 : c.interval,
            intervalCount: null == c ? void 0 : c.interval_count
        });
    return (0, n.jsx)(v, {
        isTabSelected: r,
        badgeCopy: l,
        offerExpiresAt: o.expires_at,
        className: ((s = a), (i = null == c ? void 0 : c.sku_id), s ? x.premiumTrialBadgeV2 : i === p.Si.TIER_2 ? x.premiumTrialTier2UnacknowledgedBadge : x.premiumTrialTier0UnacknowledgedBadge)
    });
}
function m(e) {
    let { isTabSelected: t, userDiscount: s, includesAmountOff: i } = e,
        r = g.intl.formatToPlainString(g.t.iiLbvr, { percent: s.discount.amount }),
        o = (0, d.xP)('OfferTabBadge');
    return (0, n.jsx)(v, {
        isTabSelected: t,
        badgeCopy: i ? r : g.intl.string(g.t['/DTtr6']),
        offerExpiresAt: s.expires_at,
        className: o ? x.premiumTrialBadgeV2 : x.premiumDiscountUnacknowledgedBadge
    });
}
function v(e) {
    let { isTabSelected: t, badgeCopy: s, offerExpiresAt: i, className: r, ackedClassName: a } = e;
    return null != i
        ? (0, n.jsx)(b, {
              className: a,
              expiresAt: i,
              isTabSelected: t,
              trialDuration: s
          })
        : (0, n.jsx)('div', {
              className: o()(x.premiumTrialBadge, r),
              children: (0, n.jsx)(c.Text, {
                  variant: 'eyebrow',
                  className: x.premiumOfferBadgeCopy,
                  children: s
              })
          });
}
