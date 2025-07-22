n.d(t, {
    $H: () => b,
    GN: () => m,
    _y: () => v
});
var r = n(255367),
    i = n(73800),
    s = n(120356),
    l = n.n(s),
    o = n(481060),
    a = n(774078),
    c = n(55935),
    u = n(74538),
    d = n(639119),
    f = n(388032),
    p = n(952849);
function g(e) {
    let { isTabSelected: t, expiresAt: n, trialDuration: s, className: u } = e,
        d = i.useMemo(() => Date.parse(n), [n]),
        g = (0, a.Z)(d, 60000);
    return Object.values(g).every((e) => 0 === e)
        ? null
        : (0, r.jsx)(o.ua7, {
              text: (0, c.QX)(g, {
                  days: f.t.qVGNkZ,
                  hours: f.t.wyg9a2,
                  minutes: f.t.IzmIlZ
              }),
              children: (e) => {
                  var n, i;
                  return (0, r.jsxs)(
                      'div',
                      ((n = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              ('function' == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      ((r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = r));
                                  }));
                          }
                          return e;
                      })({}, e)),
                      (i = i =
                          {
                              className: l()(p.premiumTrialBadge, p.premiumTrialAcknowledgedBadge, u, { [p.premiumTrialBadgeSelected]: t }),
                              children: [
                                  (0, r.jsx)(o.T39, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: 'currentColor',
                                      className: p.premiumTrialBadgeIcon
                                  }),
                                  (0, r.jsxs)(o.Text, {
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
        l = (0, u.a5)({
            intervalType: null == s ? void 0 : s.interval,
            intervalCount: null == s ? void 0 : s.interval_count
        });
    return (0, r.jsx)(v, {
        isTabSelected: n,
        badgeCopy: l,
        offerExpiresAt: i.expires_at
    });
}
function m(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: i } = e,
        s = f.intl.formatToPlainString(f.t.iiLbvr, { percent: n.discount.amount });
    return (0, r.jsx)(v, {
        isTabSelected: t,
        badgeCopy: i ? s : f.intl.string(f.t['/DTtr6']),
        offerExpiresAt: n.expires_at
    });
}
function v(e) {
    let { isTabSelected: t, badgeCopy: n, offerExpiresAt: i } = e;
    return null != i
        ? (0, r.jsx)(g, {
              expiresAt: i,
              isTabSelected: t,
              trialDuration: n
          })
        : (0, r.jsx)('div', {
              className: l()(p.premiumTrialBadge, p.premiumOfferUnackedBadge),
              children: (0, r.jsx)(o.Text, {
                  variant: 'eyebrow',
                  className: p.premiumOfferBadgeCopy,
                  children: n
              })
          });
}
