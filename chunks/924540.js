n.d(t, {
    $H: () => _,
    GN: () => v
});
var r = n(255367),
    i = n(73800),
    s = n(120356),
    o = n.n(s),
    a = n(481060),
    l = n(774078),
    c = n(55935),
    u = n(74538),
    d = n(278605),
    p = n(639119),
    f = n(474936),
    g = n(388032),
    b = n(217750);
function m(e) {
    let { isTabSelected: t, expiresAt: n, trialDuration: s, className: u } = e,
        d = i.useMemo(() => Date.parse(n), [n]),
        p = (0, l.Z)(d, 60000);
    return Object.values(p).every((e) => 0 === e)
        ? null
        : (0, r.jsx)(a.ua7, {
              text: (0, c.QX)(p, {
                  days: g.t.qVGNkZ,
                  hours: g.t.wyg9a2,
                  minutes: g.t.IzmIlZ
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
                              className: o()(b.premiumTrialBadge, b.premiumTrialAcknowledgedBadge, u, { [b.premiumTrialBadgeSelected]: t }),
                              children: [
                                  (0, r.jsx)(a.T39, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: 'currentColor',
                                      className: b.premiumTrialBadgeIcon
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
function _(e) {
    var t, n;
    let { isTabSelected: i, trialOffer: s } = e,
        o = null == (t = (0, p.N)()) ? void 0 : t.subscription_trial,
        a = (0, d.xP)('OfferTabBadge'),
        l = (0, u.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count
        });
    return (0, r.jsx)(h, {
        isTabSelected: i,
        badgeCopy: l,
        offerExpiresAt: s.expires_at,
        className: ((n = null == o ? void 0 : o.sku_id), a ? b.premiumTrialBadgeV2 : n === f.Si.TIER_2 ? b.premiumTrialTier2UnacknowledgedBadge : b.premiumTrialTier0UnacknowledgedBadge)
    });
}
function v(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: i } = e,
        s = g.intl.formatToPlainString(g.t.iiLbvr, { percent: n.discount.amount }),
        o = (0, d.xP)('OfferTabBadge');
    return (0, r.jsx)(h, {
        isTabSelected: t,
        badgeCopy: i ? s : g.intl.string(g.t['/DTtr6']),
        offerExpiresAt: n.expires_at,
        className: o ? b.premiumTrialBadgeV2 : b.premiumDiscountUnacknowledgedBadge
    });
}
function h(e) {
    let { isTabSelected: t, badgeCopy: n, offerExpiresAt: i, className: s, ackedClassName: l } = e;
    return null != i
        ? (0, r.jsx)(m, {
              className: l,
              expiresAt: i,
              isTabSelected: t,
              trialDuration: n
          })
        : (0, r.jsx)('div', {
              className: o()(b.premiumTrialBadge, s),
              children: (0, r.jsx)(a.Text, {
                  variant: 'eyebrow',
                  className: b.premiumOfferBadgeCopy,
                  children: n
              })
          });
}
