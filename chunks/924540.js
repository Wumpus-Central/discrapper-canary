n.d(t, {
    $H: () => y,
    GN: () => O,
    _y: () => v,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(774078),
    c = n(55935),
    u = n(74538),
    d = n(639119),
    f = n(388032),
    _ = n(788963);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = 60000;
function b(e) {
    let { isTabSelected: t, expiresAt: n, trialDuration: a, className: u } = e,
        d = i.useMemo(() => Date.parse(n), [n]),
        p = (0, l.Z)(d, E);
    return Object.values(p).every((e) => 0 === e)
        ? null
        : (0, r.jsx)(s.ua7, {
              text: (0, c.QX)(p, {
                  days: f.t.qVGNkZ,
                  hours: f.t.wyg9a2,
                  minutes: f.t.IzmIlZ,
              }),
              children: (e) =>
                  (0, r.jsxs)(
                      "div",
                      g(h({}, e), {
                          className: o()(_.premiumTrialBadge, _.premiumTrialAcknowledgedBadge, u, {
                              [_.premiumTrialBadgeSelected]: t,
                          }),
                          children: [
                              (0, r.jsx)(s.T39, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: _.premiumTrialBadgeIcon,
                              }),
                              (0, r.jsxs)(s.Text, {
                                  variant: "eyebrow",
                                  children: [" ", a, " "],
                              }),
                          ],
                      }),
                  ),
          });
}
function y(e) {
    var t;
    let { isTabSelected: n, trialOffer: i } = e,
        a = null == (t = (0, d.N)()) ? void 0 : t.subscription_trial,
        o = (0, u.a5)({
            intervalType: null == a ? void 0 : a.interval,
            intervalCount: null == a ? void 0 : a.interval_count,
        });
    return (0, r.jsx)(v, {
        isTabSelected: n,
        badgeCopy: o,
        offerExpiresAt: i.expires_at,
    });
}
function O(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: i } = e,
        a = f.intl.formatToPlainString(f.t.iiLbvr, { percent: n.discount.amount });
    return (0, r.jsx)(v, {
        isTabSelected: t,
        badgeCopy: i ? a : f.intl.string(f.t["/DTtr6"]),
        offerExpiresAt: n.expires_at,
    });
}
function v(e) {
    let { isTabSelected: t, badgeCopy: n, offerExpiresAt: i } = e;
    return null != i
        ? (0, r.jsx)(b, {
              expiresAt: i,
              isTabSelected: t,
              trialDuration: n,
          })
        : (0, r.jsx)("div", {
              className: o()(_.premiumTrialBadge, _.premiumOfferUnackedBadge),
              children: (0, r.jsx)(s.Text, {
                  variant: "eyebrow",
                  className: _.premiumOfferBadgeCopy,
                  children: n,
              }),
          });
}
