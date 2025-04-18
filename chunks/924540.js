r.d(t, {
    $H: () => Z,
    GN: () => M
});
var n = r(200651),
    i = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    a = r(774078),
    c = r(55935),
    h = r(74538),
    v = r(278605),
    u = r(639119),
    f = r(474936),
    p = r(388032),
    d = r(952849);
function b(e) {
    let { isTabSelected: t, expiresAt: r, trialDuration: s, className: h } = e,
        v = i.useMemo(() => Date.parse(r), [r]),
        u = (0, a.Z)(v, 60000);
    return Object.values(u).every((e) => 0 === e)
        ? null
        : (0, n.jsx)(l.ua7, {
              text: (0, c.QX)(u, {
                  days: p.t.qVGNkZ,
                  hours: p.t.wyg9a2,
                  minutes: p.t.IzmIlZ
              }),
              children: (e) => {
                  var r, i;
                  return (0, n.jsxs)(
                      'div',
                      ((r = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(r);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      })
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      (n = r[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = n);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (i = i =
                          {
                              className: o()(d.premiumTrialBadge, d.premiumTrialAcknowledgedBadge, h, { [d.premiumTrialBadgeSelected]: t }),
                              children: [
                                  (0, n.jsx)(l.T39, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: 'currentColor',
                                      className: d.premiumTrialBadgeIcon
                                  }),
                                  (0, n.jsxs)(l.Text, {
                                      variant: 'eyebrow',
                                      children: [' ', s, ' ']
                                  })
                              ]
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(i)).forEach(function (e) {
                                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                            }),
                      r)
                  );
              }
          });
}
function Z(e) {
    var t, r;
    let { isTabSelected: i, trialOffer: s } = e,
        o = null == (t = (0, u.N)()) ? void 0 : t.subscription_trial,
        l = (0, v.xP)('OfferTabBadge'),
        a = (0, h.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count
        });
    return (0, n.jsx)(g, {
        isTabSelected: i,
        badgeCopy: a,
        offerExpiresAt: s.expires_at,
        className: ((r = null == o ? void 0 : o.sku_id), l ? d.premiumTrialBadgeV2 : r === f.Si.TIER_2 ? d.premiumTrialTier2UnacknowledgedBadge : d.premiumTrialTier0UnacknowledgedBadge)
    });
}
function M(e) {
    let { isTabSelected: t, userDiscount: r, includesAmountOff: i } = e,
        s = p.NW.formatToPlainString(p.t.iiLbvr, { percent: r.discount.amount }),
        o = (0, v.xP)('OfferTabBadge');
    return (0, n.jsx)(g, {
        isTabSelected: t,
        badgeCopy: i ? s : p.NW.string(p.t['/DTtr6']),
        offerExpiresAt: r.expires_at,
        className: o ? d.premiumTrialBadgeV2 : d.premiumDiscountUnacknowledgedBadge
    });
}
function g(e) {
    let { isTabSelected: t, badgeCopy: r, offerExpiresAt: i, className: s, ackedClassName: a } = e;
    return null != i
        ? (0, n.jsx)(b, {
              className: a,
              expiresAt: i,
              isTabSelected: t,
              trialDuration: r
          })
        : (0, n.jsx)('div', {
              className: o()(d.premiumTrialBadge, s),
              children: (0, n.jsx)(l.Text, {
                  variant: 'eyebrow',
                  className: d.premiumOfferBadgeCopy,
                  children: r
              })
          });
}
