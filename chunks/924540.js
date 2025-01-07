t.d(e, {
    $H: function () {
        return v;
    },
    GN: function () {
        return m;
    }
});
var n = t(200651),
    r = t(192379),
    c = t(120356),
    i = t.n(c),
    a = t(481060),
    o = t(774078),
    u = t(55935),
    f = t(74538),
    p = t(278605),
    d = t(639119),
    l = t(474936),
    g = t(388032),
    b = t(229830);
function x(s) {
    let { isTabSelected: e, expiresAt: t, trialDuration: c, className: f } = s,
        p = r.useMemo(() => Date.parse(t), [t]),
        d = (0, o.Z)(p, 60000);
    return Object.values(d).every((s) => 0 === s)
        ? null
        : (0, n.jsx)(a.Tooltip, {
              text: (0, u.QX)(d, {
                  days: g.t.qVGNkZ,
                  hours: g.t.wyg9a2,
                  minutes: g.t.IzmIlZ
              }),
              children: (s) =>
                  (0, n.jsxs)('div', {
                      ...s,
                      className: i()(b.premiumTrialBadge, b.premiumTrialAcknowledgedBadge, f, { [b.premiumTrialBadgeSelected]: e }),
                      children: [
                          (0, n.jsx)(a.ClockIcon, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              color: 'currentColor',
                              className: b.premiumTrialBadgeIcon
                          }),
                          (0, n.jsxs)(a.Text, {
                              variant: 'eyebrow',
                              children: [' ', c, ' ']
                          })
                      ]
                  })
          });
}
function v(s) {
    var e, t, r;
    let { isTabSelected: c, trialOffer: i } = s,
        a = null === (e = (0, d.N)()) || void 0 === e ? void 0 : e.subscription_trial,
        o = (0, p.xP)('OfferTabBadge'),
        u = (0, f.a5)({
            intervalType: null == a ? void 0 : a.interval,
            intervalCount: null == a ? void 0 : a.interval_count
        });
    return (0, n.jsx)(T, {
        isTabSelected: c,
        badgeCopy: u,
        offerExpiresAt: i.expires_at,
        className: ((t = o), (r = null == a ? void 0 : a.sku_id), t ? b.premiumTrialBadgeV2 : r === l.Si.TIER_2 ? b.premiumTrialTier2UnacknowledgedBadge : b.premiumTrialTier0UnacknowledgedBadge)
    });
}
function m(s) {
    let { isTabSelected: e, userDiscount: t, includesAmountOff: r } = s,
        c = g.intl.formatToPlainString(g.t.iiLbvr, { percent: t.discount.amount }),
        i = (0, p.xP)('OfferTabBadge');
    return (0, n.jsx)(T, {
        isTabSelected: e,
        badgeCopy: r ? c : g.intl.string(g.t['/DTtr6']),
        offerExpiresAt: t.expires_at,
        className: i ? b.premiumTrialBadgeV2 : b.premiumDiscountUnacknowledgedBadge
    });
}
function T(s) {
    let { isTabSelected: e, badgeCopy: t, offerExpiresAt: r, className: c, ackedClassName: o } = s;
    return null != r
        ? (0, n.jsx)(x, {
              className: o,
              expiresAt: r,
              isTabSelected: e,
              trialDuration: t
          })
        : (0, n.jsx)('div', {
              className: i()(b.premiumTrialBadge, c),
              children: (0, n.jsx)(a.Text, {
                  variant: 'eyebrow',
                  className: b.premiumOfferBadgeCopy,
                  children: t
              })
          });
}
