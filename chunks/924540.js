n.d(t, {
    $H: () => b,
    GN: () => m
});
var r = n(255367),
    i = n(73800),
    s = n(120356),
    o = n.n(s),
    a = n(481060),
    l = n(774078),
    c = n(55935),
    u = n(74538),
    d = n(639119),
    p = n(388032),
    f = n(952849);
function g(e) {
    let { isTabSelected: t, expiresAt: n, trialDuration: s, className: u } = e,
        d = i.useMemo(() => Date.parse(n), [n]),
        g = (0, l.Z)(d, 60000);
    return Object.values(g).every((e) => 0 === e)
        ? null
        : (0, r.jsx)(a.ua7, {
              text: (0, c.QX)(g, {
                  days: p.t.qVGNkZ,
                  hours: p.t.wyg9a2,
                  minutes: p.t.IzmIlZ
              }),
              children: (e) => {
                  var n, i;
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
                      (i = i =
                          {
                              className: o()(f.premiumTrialBadge, f.premiumTrialAcknowledgedBadge, u, { [f.premiumTrialBadgeSelected]: t }),
                              children: [
                                  (0, r.jsx)(a.T39, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: 'currentColor',
                                      className: f.premiumTrialBadgeIcon
                                  }),
                                  (0, r.jsxs)(a.Text, {
                                      variant: 'eyebrow',
                                      children: [' ', s, ' ']
                                  })
                              ]
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(i)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                            }),
                      n)
                  );
              }
          });
}
function b(e) {
    var t;
    let { isTabSelected: n, trialOffer: i } = e,
        s = null == (t = (0, d.N)()) ? void 0 : t.subscription_trial,
        o = (0, u.a5)({
            intervalType: null == s ? void 0 : s.interval,
            intervalCount: null == s ? void 0 : s.interval_count
        });
    return (0, r.jsx)(_, {
        isTabSelected: n,
        badgeCopy: o,
        offerExpiresAt: i.expires_at
    });
}
function m(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: i } = e,
        s = p.intl.formatToPlainString(p.t.iiLbvr, { percent: n.discount.amount });
    return (0, r.jsx)(_, {
        isTabSelected: t,
        badgeCopy: i ? s : p.intl.string(p.t['/DTtr6']),
        offerExpiresAt: n.expires_at
    });
}
function _(e) {
    let { isTabSelected: t, badgeCopy: n, offerExpiresAt: i } = e;
    return null != i
        ? (0, r.jsx)(g, {
              expiresAt: i,
              isTabSelected: t,
              trialDuration: n
          })
        : (0, r.jsx)('div', {
              className: o()(f.premiumTrialBadge, f.premiumOfferUnackedBadge),
              children: (0, r.jsx)(a.Text, {
                  variant: 'eyebrow',
                  className: f.premiumOfferBadgeCopy,
                  children: n
              })
          });
}
