s.d(t, {
    $H: function () {
        return _;
    },
    GN: function () {
        return m;
    },
    _y: function () {
        return h;
    }
});
var n = s(200651),
    r = s(192379),
    i = s(120356),
    a = s.n(i),
    o = s(481060),
    l = s(774078),
    c = s(55935),
    u = s(74538),
    d = s(278605),
    p = s(639119),
    f = s(474936),
    x = s(388032),
    g = s(229830);
function C(e) {
    let { isTabSelected: t, expiresAt: s, trialDuration: i, className: u } = e,
        d = r.useMemo(() => Date.parse(s), [s]),
        p = (0, l.Z)(d, 60000);
    return Object.values(p).every((e) => 0 === e)
        ? null
        : (0, n.jsx)(o.Tooltip, {
              text: (0, c.QX)(p, {
                  days: x.t.qVGNkZ,
                  hours: x.t.wyg9a2,
                  minutes: x.t.IzmIlZ
              }),
              children: (e) =>
                  (0, n.jsxs)('div', {
                      ...e,
                      className: a()(g.premiumTrialBadge, g.premiumTrialAcknowledgedBadge, u, { [g.premiumTrialBadgeSelected]: t }),
                      children: [
                          (0, n.jsx)(o.ClockIcon, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              color: 'currentColor',
                              className: g.premiumTrialBadgeIcon
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
        l = (0, d.xP)('OfferTabBadge'),
        c = (0, u.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count
        });
    return (0, n.jsx)(h, {
        isTabSelected: i,
        badgeCopy: c,
        offerExpiresAt: a.expires_at,
        className: ((s = l), (r = null == o ? void 0 : o.sku_id), s ? g.premiumTrialBadgeV2 : r === f.Si.TIER_2 ? g.premiumTrialTier2UnacknowledgedBadge : g.premiumTrialTier0UnacknowledgedBadge)
    });
}
function m(e) {
    let { isTabSelected: t, userDiscount: s, includesAmountOff: r } = e,
        i = x.intl.formatToPlainString(x.t.iiLbvr, { percent: s.discount.amount }),
        a = (0, d.xP)('OfferTabBadge');
    return (0, n.jsx)(h, {
        isTabSelected: t,
        badgeCopy: r ? i : x.intl.string(x.t['/DTtr6']),
        offerExpiresAt: s.expires_at,
        className: a ? g.premiumTrialBadgeV2 : g.premiumDiscountUnacknowledgedBadge
    });
}
function h(e) {
    let { isTabSelected: t, badgeCopy: s, offerExpiresAt: r, className: i, ackedClassName: l } = e;
    return null != r
        ? (0, n.jsx)(C, {
              className: l,
              expiresAt: r,
              isTabSelected: t,
              trialDuration: s
          })
        : (0, n.jsx)('div', {
              className: a()(g.premiumTrialBadge, i),
              children: (0, n.jsx)(o.Text, {
                  variant: 'eyebrow',
                  className: g.premiumOfferBadgeCopy,
                  children: s
              })
          });
}
