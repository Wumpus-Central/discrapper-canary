n.d(t, {
    $H: () => f,
    GN: () => v,
    _y: () => m,
});
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    o = n(481060),
    a = n(774078),
    u = n(55935),
    c = n(74538),
    d = n(639119),
    h = n(388032),
    p = n(788963);
function g(e) {
    let { isTabSelected: t, expiresAt: n, trialDuration: s, className: c } = e,
        d = r.useMemo(() => Date.parse(n), [n]),
        g = (0, a.Z)(d, 60000);
    return Object.values(g).every((e) => 0 === e)
        ? null
        : (0, i.jsx)(o.ua7, {
              text: (0, u.QX)(g, {
                  days: h.t.qVGNkZ,
                  hours: h.t.wyg9a2,
                  minutes: h.t.IzmIlZ,
              }),
              children: (e) => {
                  var n, r;
                  return (0, i.jsxs)(
                      "div",
                      ((n = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  i = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (i = i.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  i.forEach(function (t) {
                                      var i;
                                      (i = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: i,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = i);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (r = r =
                          {
                              className: l()(p.premiumTrialBadge, p.premiumTrialAcknowledgedBadge, c, {
                                  [p.premiumTrialBadgeSelected]: t,
                              }),
                              children: [
                                  (0, i.jsx)(o.T39, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                      className: p.premiumTrialBadgeIcon,
                                  }),
                                  (0, i.jsxs)(o.Text, {
                                      variant: "eyebrow",
                                      children: [" ", s, " "],
                                  }),
                              ],
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, i);
                                }
                                return n;
                            })(Object(r)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                            }),
                      n),
                  );
              },
          });
}
function f(e) {
    var t;
    let { isTabSelected: n, trialOffer: r } = e,
        s = null == (t = (0, d.N)()) ? void 0 : t.subscription_trial,
        l = (0, c.a5)({
            intervalType: null == s ? void 0 : s.interval,
            intervalCount: null == s ? void 0 : s.interval_count,
        });
    return (0, i.jsx)(m, {
        isTabSelected: n,
        badgeCopy: l,
        offerExpiresAt: r.expires_at,
    });
}
function v(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: r } = e,
        s = h.intl.formatToPlainString(h.t.iiLbvr, { percent: n.discount.amount });
    return (0, i.jsx)(m, {
        isTabSelected: t,
        badgeCopy: r ? s : h.intl.string(h.t["/DTtr6"]),
        offerExpiresAt: n.expires_at,
    });
}
function m(e) {
    let { isTabSelected: t, badgeCopy: n, offerExpiresAt: r } = e;
    return null != r
        ? (0, i.jsx)(g, {
              expiresAt: r,
              isTabSelected: t,
              trialDuration: n,
          })
        : (0, i.jsx)("div", {
              className: l()(p.premiumTrialBadge, p.premiumOfferUnackedBadge),
              children: (0, i.jsx)(o.Text, {
                  variant: "eyebrow",
                  className: p.premiumOfferBadgeCopy,
                  children: n,
              }),
          });
}
