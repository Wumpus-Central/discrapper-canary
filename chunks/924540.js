s.d(t, {
    $H: function () {
        return _;
    },
    GN: function () {
        return h;
    },
    _y: function () {
        return m;
    }
});
var n = s(200651),
    r = s(192379),
    i = s(120356),
    a = s.n(i),
    o = s(481060),
    c = s(774078),
    l = s(55935),
    u = s(74538),
    d = s(278605),
    p = s(639119),
    f = s(474936),
    g = s(388032),
    x = s(229830);
function C(e) {
    let { isTabSelected: t, expiresAt: s, trialDuration: i, className: u } = e,
        d = r.useMemo(() => Date.parse(s), [s]),
        p = (0, c.Z)(d, 60000);
    return Object.values(p).every((e) => 0 === e)
        ? null
        : (0, n.jsx)(o.Tooltip, {
              text: (0, l.QX)(p, {
                  days: g.t.qVGNkZ,
                  hours: g.t.wyg9a2,
                  minutes: g.t.IzmIlZ
              }),
              children: (e) =>
                  (0, n.jsxs)('div', {
                      ...e,
                      className: a()(x.premiumTrialBadge, x.premiumTrialAcknowledgedBadge, u, { [x.premiumTrialBadgeSelected]: t }),
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
                              children: [' ', i, ' ']
                          })
                      ]
                  })
          });
}
function _(e) {
    var t, s, r;
    let { isTabSelected: i, trialOffer: a } = e,
        o = null === (t = (0, p.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        c = (0, d.xP)('OfferTabBadge'),
        l = (0, u.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count
        });
    return (0, n.jsx)(m, {
        isTabSelected: i,
        badgeCopy: l,
        offerExpiresAt: a.expires_at,
        className: ((s = c), (r = null == o ? void 0 : o.sku_id), s ? x.premiumTrialBadgeV2 : r === f.Si.TIER_2 ? x.premiumTrialTier2UnacknowledgedBadge : x.premiumTrialTier0UnacknowledgedBadge)
    });
}
function h(e) {
    let { isTabSelected: t, userDiscount: s, includesAmountOff: r } = e,
        i = g.intl.formatToPlainString(g.t.iiLbvr, { percent: s.discount.amount }),
        a = (0, d.xP)('OfferTabBadge');
    return (0, n.jsx)(m, {
        isTabSelected: t,
        badgeCopy: r ? i : g.intl.string(g.t['/DTtr6']),
        offerExpiresAt: s.expires_at,
        className: a ? x.premiumTrialBadgeV2 : x.premiumDiscountUnacknowledgedBadge
    });
}
function m(e) {
    let { isTabSelected: t, badgeCopy: s, offerExpiresAt: r, className: i, ackedClassName: c } = e;
    return null != r
        ? (0, n.jsx)(C, {
              className: c,
              expiresAt: r,
              isTabSelected: t,
              trialDuration: s
          })
        : (0, n.jsx)('div', {
              className: a()(x.premiumTrialBadge, i),
              children: (0, n.jsx)(o.Text, {
                  variant: 'eyebrow',
                  className: x.premiumOfferBadgeCopy,
                  children: s
              })
          });
}
