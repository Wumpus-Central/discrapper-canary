n.d(t, {
    $H: () => O,
    GN: () => h
});
var s = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    c = n(481060),
    a = n(774078),
    l = n(55935),
    u = n(74538),
    d = n(278605),
    p = n(639119),
    f = n(474936),
    b = n(388032),
    g = n(246290);
function m(e) {
    let { isTabSelected: t, expiresAt: n, trialDuration: i, className: u } = e,
        d = r.useMemo(() => Date.parse(n), [n]),
        p = (0, a.Z)(d, 60000);
    return Object.values(p).every((e) => 0 === e)
        ? null
        : (0, s.jsx)(c.ua7, {
              text: (0, l.QX)(p, {
                  days: b.t.qVGNkZ,
                  hours: b.t.wyg9a2,
                  minutes: b.t.IzmIlZ
              }),
              children: (e) => {
                  var n, r;
                  return (0, s.jsxs)(
                      'div',
                      ((n = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  s = Object.keys(n);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (s = s.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  s.forEach(function (t) {
                                      var s;
                                      (s = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: s,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = s);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (r = r =
                          {
                              className: o()(g.premiumTrialBadge, g.premiumTrialAcknowledgedBadge, u, { [g.premiumTrialBadgeSelected]: t }),
                              children: [
                                  (0, s.jsx)(c.T39, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: 'currentColor',
                                      className: g.premiumTrialBadgeIcon
                                  }),
                                  (0, s.jsxs)(c.Text, {
                                      variant: 'eyebrow',
                                      children: [' ', i, ' ']
                                  })
                              ]
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var s = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, s);
                                }
                                return n;
                            })(Object(r)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                            }),
                      n)
                  );
              }
          });
}
function O(e) {
    var t, n;
    let { isTabSelected: r, trialOffer: i } = e,
        o = null === (t = (0, p.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        c = (0, d.xP)('OfferTabBadge'),
        a = (0, u.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count
        });
    return (0, s.jsx)(v, {
        isTabSelected: r,
        badgeCopy: a,
        offerExpiresAt: i.expires_at,
        className: ((n = null == o ? void 0 : o.sku_id), c ? g.premiumTrialBadgeV2 : n === f.Si.TIER_2 ? g.premiumTrialTier2UnacknowledgedBadge : g.premiumTrialTier0UnacknowledgedBadge)
    });
}
function h(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: r } = e,
        i = b.NW.formatToPlainString(b.t.iiLbvr, { percent: n.discount.amount }),
        o = (0, d.xP)('OfferTabBadge');
    return (0, s.jsx)(v, {
        isTabSelected: t,
        badgeCopy: r ? i : b.NW.string(b.t['/DTtr6']),
        offerExpiresAt: n.expires_at,
        className: o ? g.premiumTrialBadgeV2 : g.premiumDiscountUnacknowledgedBadge
    });
}
function v(e) {
    let { isTabSelected: t, badgeCopy: n, offerExpiresAt: r, className: i, ackedClassName: a } = e;
    return null != r
        ? (0, s.jsx)(m, {
              className: a,
              expiresAt: r,
              isTabSelected: t,
              trialDuration: n
          })
        : (0, s.jsx)('div', {
              className: o()(g.premiumTrialBadge, i),
              children: (0, s.jsx)(c.Text, {
                  variant: 'eyebrow',
                  className: g.premiumOfferBadgeCopy,
                  children: n
              })
          });
}
