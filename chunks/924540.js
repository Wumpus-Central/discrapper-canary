n.d(t, {
    $H: () => b,
    GN: () => y,
    _y: () => O,
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
    f = n(931118),
    _ = n(639119),
    p = n(533246),
    h = n(388032),
    m = n(788963);
let g = 60000;
function E(e) {
    let {
            isTabSelected: t,
            expiresAt: n,
            trialDuration: a,
            className: d,
            tooltipTextOverride: f,
            tooltipPosition: _,
        } = e,
        p = i.useMemo(() => Date.parse(n), [n]),
        E = (0, c.Z)(p, g);
    return Object.values(E).every((e) => 0 === e)
        ? null
        : (0, r.jsx)(s.u, {
              text:
                  null != f
                      ? f
                      : (0, u.QX)(E, {
                            days: h.t.qVGNkZ,
                            hours: h.t.wyg9a2,
                            minutes: h.t.IzmIlZ,
                        }),
              position: null != _ ? _ : "top",
              children: (0, r.jsxs)("div", {
                  className: o()(m.premiumTrialBadge, m.premiumTrialAcknowledgedBadge, d, {
                      [m.premiumTrialBadgeSelected]: t,
                  }),
                  children: [
                      (0, r.jsx)(l.T39, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: m.premiumTrialBadgeIcon,
                      }),
                      (0, r.jsxs)(l.Text, {
                          variant: "eyebrow",
                          children: [" ", a, " "],
                      }),
                  ],
              }),
          });
}
function b(e) {
    var t;
    let { isTabSelected: n, trialOffer: i } = e,
        a = null == (t = (0, _.N)()) ? void 0 : t.subscription_trial,
        o = (0, d.a5)({
            intervalType: null == a ? void 0 : a.interval,
            intervalCount: null == a ? void 0 : a.interval_count,
        }),
        s = (0, p.YF)(i),
        { hasExperimentalTooltip: l } = (0, f.ZP)("PremiumOfferTabBadge");
    return (0, r.jsx)(O, {
        isTabSelected: n,
        badgeCopy: o,
        offerExpiresAt: i.expires_at,
        tooltipTextOverride: l ? s : null,
        tooltipPosition: l ? "right" : "top",
    });
}
function y(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: i } = e,
        a = h.intl.formatToPlainString(h.t.iiLbvr, { percent: n.discount.amount }),
        o = (0, p.h$)(n),
        { hasExperimentalTooltip: s } = (0, f.ZP)("PremiumOfferTabBadge");
    return (0, r.jsx)(O, {
        isTabSelected: t,
        badgeCopy: i ? a : h.intl.string(h.t["/DTtr6"]),
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: s ? o : null,
        tooltipPosition: s ? "right" : "top",
    });
}
function O(e) {
    let { isTabSelected: t, badgeCopy: n, offerExpiresAt: i, tooltipTextOverride: a, tooltipPosition: s } = e;
    return null != i
        ? (0, r.jsx)(E, {
              expiresAt: i,
              isTabSelected: t,
              trialDuration: n,
              tooltipTextOverride: a,
              tooltipPosition: s,
          })
        : (0, r.jsx)("div", {
              className: o()(m.premiumTrialBadge, m.premiumOfferUnackedBadge),
              children: (0, r.jsx)(l.Text, {
                  variant: "eyebrow",
                  className: m.premiumOfferBadgeCopy,
                  children: n,
              }),
          });
}
