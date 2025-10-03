n.d(t, {
    $H: () => g,
    GN: () => E,
    _y: () => b,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(481060),
    c = n(774078),
    u = n(55935),
    d = n(74538),
    f = n(639119),
    _ = n(388032),
    p = n(788963);
let h = 60000;
function m(e) {
    let { isTabSelected: t, expiresAt: n, trialDuration: a, className: d } = e,
        f = i.useMemo(() => Date.parse(n), [n]),
        m = (0, c.Z)(f, h);
    return Object.values(m).every((e) => 0 === e)
        ? null
        : (0, r.jsx)(s.u, {
              text: (0, u.QX)(m, {
                  days: _.t.qVGNkZ,
                  hours: _.t.wyg9a2,
                  minutes: _.t.IzmIlZ,
              }),
              children: (0, r.jsxs)("div", {
                  className: o()(p.premiumTrialBadge, p.premiumTrialAcknowledgedBadge, d, {
                      [p.premiumTrialBadgeSelected]: t,
                  }),
                  children: [
                      (0, r.jsx)(l.T39, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: p.premiumTrialBadgeIcon,
                      }),
                      (0, r.jsxs)(l.Text, {
                          variant: "eyebrow",
                          children: [" ", a, " "],
                      }),
                  ],
              }),
          });
}
function g(e) {
    var t;
    let { isTabSelected: n, trialOffer: i } = e,
        a = null == (t = (0, f.N)()) ? void 0 : t.subscription_trial,
        o = (0, d.a5)({
            intervalType: null == a ? void 0 : a.interval,
            intervalCount: null == a ? void 0 : a.interval_count,
        });
    return (0, r.jsx)(b, {
        isTabSelected: n,
        badgeCopy: o,
        offerExpiresAt: i.expires_at,
    });
}
function E(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: i } = e,
        a = _.intl.formatToPlainString(_.t.iiLbvr, { percent: n.discount.amount });
    return (0, r.jsx)(b, {
        isTabSelected: t,
        badgeCopy: i ? a : _.intl.string(_.t["/DTtr6"]),
        offerExpiresAt: n.expires_at,
    });
}
function b(e) {
    let { isTabSelected: t, badgeCopy: n, offerExpiresAt: i } = e;
    return null != i
        ? (0, r.jsx)(m, {
              expiresAt: i,
              isTabSelected: t,
              trialDuration: n,
          })
        : (0, r.jsx)("div", {
              className: o()(p.premiumTrialBadge, p.premiumOfferUnackedBadge),
              children: (0, r.jsx)(l.Text, {
                  variant: "eyebrow",
                  className: p.premiumOfferBadgeCopy,
                  children: n,
              }),
          });
}
