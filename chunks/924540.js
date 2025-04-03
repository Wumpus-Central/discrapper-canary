s.d(t, {
    $H: () => x,
    GN: () => m
});
var r = s(200651),
    n = s(192379),
    i = s(120356),
    o = s.n(i),
    l = s(481060),
    a = s(774078),
    c = s(55935),
    u = s(74538),
    d = s(278605),
    p = s(639119),
    f = s(474936),
    b = s(388032),
    g = s(952849);
function O(e) {
    let { isTabSelected: t, expiresAt: s, trialDuration: i, className: u } = e,
        d = n.useMemo(() => Date.parse(s), [s]),
        p = (0, a.Z)(d, 60000);
    return Object.values(p).every((e) => 0 === e)
        ? null
        : (0, r.jsx)(l.ua7, {
              text: (0, c.QX)(p, {
                  days: b.t.qVGNkZ,
                  hours: b.t.wyg9a2,
                  minutes: b.t.IzmIlZ
              }),
              children: (e) => {
                  var s, n;
                  return (0, r.jsxs)(
                      'div',
                      ((s = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var s = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(s);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(s).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(s, e).enumerable;
                                      })
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = s[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (n = n =
                          {
                              className: o()(g.premiumTrialBadge, g.premiumTrialAcknowledgedBadge, u, { [g.premiumTrialBadgeSelected]: t }),
                              children: [
                                  (0, r.jsx)(l.T39, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: 'currentColor',
                                      className: g.premiumTrialBadgeIcon
                                  }),
                                  (0, r.jsxs)(l.Text, {
                                      variant: 'eyebrow',
                                      children: [' ', i, ' ']
                                  })
                              ]
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n))
                          : (function (e, t) {
                                var s = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    s.push.apply(s, r);
                                }
                                return s;
                            })(Object(n)).forEach(function (e) {
                                Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(n, e));
                            }),
                      s)
                  );
              }
          });
}
function x(e) {
    var t, s;
    let { isTabSelected: n, trialOffer: i } = e,
        o = null == (t = (0, p.N)()) ? void 0 : t.subscription_trial,
        l = (0, d.xP)('OfferTabBadge'),
        a = (0, u.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count
        });
    return (0, r.jsx)(h, {
        isTabSelected: n,
        badgeCopy: a,
        offerExpiresAt: i.expires_at,
        className: ((s = null == o ? void 0 : o.sku_id), l ? g.premiumTrialBadgeV2 : s === f.Si.TIER_2 ? g.premiumTrialTier2UnacknowledgedBadge : g.premiumTrialTier0UnacknowledgedBadge)
    });
}
function m(e) {
    let { isTabSelected: t, userDiscount: s, includesAmountOff: n } = e,
        i = b.NW.formatToPlainString(b.t.iiLbvr, { percent: s.discount.amount }),
        o = (0, d.xP)('OfferTabBadge');
    return (0, r.jsx)(h, {
        isTabSelected: t,
        badgeCopy: n ? i : b.NW.string(b.t['/DTtr6']),
        offerExpiresAt: s.expires_at,
        className: o ? g.premiumTrialBadgeV2 : g.premiumDiscountUnacknowledgedBadge
    });
}
function h(e) {
    let { isTabSelected: t, badgeCopy: s, offerExpiresAt: n, className: i, ackedClassName: a } = e;
    return null != n
        ? (0, r.jsx)(O, {
              className: a,
              expiresAt: n,
              isTabSelected: t,
              trialDuration: s
          })
        : (0, r.jsx)('div', {
              className: o()(g.premiumTrialBadge, i),
              children: (0, r.jsx)(l.Text, {
                  variant: 'eyebrow',
                  className: g.premiumOfferBadgeCopy,
                  children: s
              })
          });
}
