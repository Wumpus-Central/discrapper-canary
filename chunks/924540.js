n.d(t, {
    $H: () => v,
    GN: () => h
});
var r = n(255367),
    s = n(73800),
    i = n(120356),
    o = n.n(i),
    l = n(481060),
    a = n(774078),
    c = n(55935),
    u = n(74538),
    d = n(278605),
    f = n(639119),
    p = n(474936),
    g = n(388032),
    b = n(952849);
function m(e) {
    let { isTabSelected: t, expiresAt: n, trialDuration: i, className: u } = e,
        d = s.useMemo(() => Date.parse(n), [n]),
        f = (0, a.Z)(d, 60000);
    return Object.values(f).every((e) => 0 === e)
        ? null
        : (0, r.jsx)(l.ua7, {
              text: (0, c.QX)(f, {
                  days: g.t.qVGNkZ,
                  hours: g.t.wyg9a2,
                  minutes: g.t.IzmIlZ
              }),
              children: (e) => {
                  var n, s;
                  return (0, r.jsxs)(
                      'div',
                      ((n = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
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
                      (s = s =
                          {
                              className: o()(b.premiumTrialBadge, b.premiumTrialAcknowledgedBadge, u, { [b.premiumTrialBadgeSelected]: t }),
                              children: [
                                  (0, r.jsx)(l.T39, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: 'currentColor',
                                      className: b.premiumTrialBadgeIcon
                                  }),
                                  (0, r.jsxs)(l.Text, {
                                      variant: 'eyebrow',
                                      children: [' ', i, ' ']
                                  })
                              ]
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(s)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e));
                            }),
                      n)
                  );
              }
          });
}
function v(e) {
    var t, n;
    let { isTabSelected: s, trialOffer: i } = e,
        o = null == (t = (0, f.N)()) ? void 0 : t.subscription_trial,
        l = (0, d.xP)('OfferTabBadge'),
        a = (0, u.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count
        });
    return (0, r.jsx)(O, {
        isTabSelected: s,
        badgeCopy: a,
        offerExpiresAt: i.expires_at,
        className: ((n = null == o ? void 0 : o.sku_id), l ? b.premiumTrialBadgeV2 : n === p.Si.TIER_2 ? b.premiumTrialTier2UnacknowledgedBadge : b.premiumTrialTier0UnacknowledgedBadge)
    });
}
function h(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: s } = e,
        i = g.intl.formatToPlainString(g.t.iiLbvr, { percent: n.discount.amount }),
        o = (0, d.xP)('OfferTabBadge');
    return (0, r.jsx)(O, {
        isTabSelected: t,
        badgeCopy: s ? i : g.intl.string(g.t['/DTtr6']),
        offerExpiresAt: n.expires_at,
        className: o ? b.premiumTrialBadgeV2 : b.premiumDiscountUnacknowledgedBadge
    });
}
function O(e) {
    let { isTabSelected: t, badgeCopy: n, offerExpiresAt: s, className: i, ackedClassName: a } = e;
    return null != s
        ? (0, r.jsx)(m, {
              className: a,
              expiresAt: s,
              isTabSelected: t,
              trialDuration: n
          })
        : (0, r.jsx)('div', {
              className: o()(b.premiumTrialBadge, i),
              children: (0, r.jsx)(l.Text, {
                  variant: 'eyebrow',
                  className: b.premiumOfferBadgeCopy,
                  children: n
              })
          });
}
