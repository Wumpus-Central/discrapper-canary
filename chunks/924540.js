n.d(t, {
    $H: () => O,
    GN: () => v,
    _y: () => I,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(704215),
    l = n(28664),
    c = n(481060),
    u = n(774078),
    d = n(266454),
    f = n(55935),
    _ = n(74538),
    p = n(931118),
    h = n(639119),
    m = n(533246),
    g = n(388032),
    E = n(788963);
let b = 60000;
function y(e) {
    let {
            isTabSelected: t,
            expiresAt: n,
            badgeCopy: a,
            className: _,
            tooltipTextOverride: p,
            tooltipPosition: h,
            shouldShowOfferReminder: m,
        } = e,
        y = i.useMemo(() => Date.parse(n), [n]),
        O = (0, u.Z)(y, b),
        v = (0, d.zu)(s.z.NITRO_TAB_BADGE_OFFER_REMINDER),
        I = m && !v;
    return Object.values(O).every((e) => 0 === e)
        ? null
        : (0, r.jsx)(l.u, {
              text:
                  null != p
                      ? p
                      : (0, f.QX)(O, {
                            days: g.t.qVGNkU,
                            hours: g.t.wyg9a9,
                            minutes: g.t.IzmIlV,
                        }),
              position: null != h ? h : "top",
              children: (0, r.jsxs)("div", {
                  className: o()(
                      E.premiumTrialBadge,
                      I ? E.premiumOfferUnackedBadge : E.premiumOfferWithTimerAcknowledgedBadge,
                      _,
                      { [E.premiumTrialBadgeSelected]: t },
                  ),
                  children: [
                      (0, r.jsx)(c.T39, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: I ? "white" : "currentColor",
                          className: E.premiumTrialBadgeIcon,
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: "eyebrow",
                          color: I ? "always-white" : "text-primary",
                          children: a,
                      }),
                  ],
              }),
          });
}
function O(e) {
    var t;
    let { isTabSelected: n, trialOffer: i, shouldShowOfferReminder: a } = e,
        o = null == (t = (0, h.N)()) ? void 0 : t.subscription_trial,
        s = (0, _.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count,
        }),
        l = (0, m.YF)(i),
        { hasExperimentalTooltip: c } = (0, p.ZP)("PremiumOfferTabBadge");
    return (0, r.jsx)(I, {
        isTabSelected: n,
        badgeCopy: s,
        offerExpiresAt: i.expires_at,
        tooltipTextOverride: c ? l : null,
        tooltipPosition: c ? "right" : "top",
        shouldShowOfferReminder: a,
    });
}
function v(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: i, shouldShowOfferReminder: a } = e,
        o = g.intl.formatToPlainString(g.t.iiLbvu, { percent: n.discount.amount }),
        s = (0, m.h$)(n),
        { hasExperimentalTooltip: l } = (0, p.ZP)("PremiumOfferTabBadge");
    return (0, r.jsx)(I, {
        isTabSelected: t,
        badgeCopy: i ? o : g.intl.string(g.t["/DTtr6"]),
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: l ? s : null,
        tooltipPosition: l ? "right" : "top",
        shouldShowOfferReminder: a,
    });
}
function I(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: i,
        tooltipTextOverride: a,
        tooltipPosition: s,
        shouldShowOfferReminder: l = !1,
    } = e;
    return null != i
        ? (0, r.jsx)(y, {
              expiresAt: i,
              isTabSelected: t,
              badgeCopy: n,
              tooltipTextOverride: a,
              tooltipPosition: s,
              shouldShowOfferReminder: l,
          })
        : (0, r.jsx)("div", {
              className: o()(E.premiumTrialBadge, E.premiumOfferUnackedBadge),
              children: (0, r.jsx)(c.Text, {
                  variant: "eyebrow",
                  className: E.premiumOfferBadgeCopy,
                  children: n,
              }),
          });
}
