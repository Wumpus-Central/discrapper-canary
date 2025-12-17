n.d(t, {
    $H: () => O,
    GN: () => v,
    _y: () => S,
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
    p = n(74538),
    _ = n(931118),
    m = n(639119),
    h = n(533246),
    g = n(388032),
    E = n(952908);
let b = 60000;
function y(e) {
    let {
            isTabSelected: t,
            expiresAt: n,
            badgeCopy: a,
            className: p,
            tooltipTextOverride: _,
            tooltipPosition: m,
            shouldShowOfferReminder: h,
        } = e,
        y = i.useMemo(() => Date.parse(n), [n]),
        O = (0, u.Z)(y, b),
        v = (0, d.zu)(s.z.NITRO_TAB_BADGE_OFFER_REMINDER),
        S = h && !v;
    return Object.values(O).every((e) => 0 === e)
        ? null
        : (0, r.jsx)(l.u, {
              text:
                  null != _
                      ? _
                      : (0, f.QX)(O, {
                            days: g.t.qVGNkU,
                            hours: g.t.wyg9a9,
                            minutes: g.t.IzmIlV,
                        }),
              position: null != m ? m : "top",
              children: (0, r.jsxs)("div", {
                  className: o()(
                      E.premiumTrialBadge,
                      S ? E.premiumOfferUnackedBadge : E.premiumOfferWithTimerAcknowledgedBadge,
                      p,
                      { [E.premiumTrialBadgeSelected]: t },
                  ),
                  children: [
                      (0, r.jsx)(c.T39, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: S ? "white" : "currentColor",
                          className: E.premiumTrialBadgeIcon,
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: "eyebrow",
                          color: S ? "always-white" : "text-strong",
                          children: a,
                      }),
                  ],
              }),
          });
}
function O(e) {
    var t;
    let { isTabSelected: n, trialOffer: i, shouldShowOfferReminder: a } = e,
        o = null == (t = (0, m.N)()) ? void 0 : t.subscription_trial,
        s = (0, p.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count,
        }),
        l = (0, h.YF)(i),
        { hasExperimentalTooltip: c } = (0, _.ZP)("PremiumOfferTabBadge");
    return (0, r.jsx)(S, {
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
        s = (0, h.h$)(n),
        { hasExperimentalTooltip: l } = (0, _.ZP)("PremiumOfferTabBadge");
    return (0, r.jsx)(S, {
        isTabSelected: t,
        badgeCopy: i ? o : g.intl.string(g.t["/DTtr6"]),
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: l ? s : null,
        tooltipPosition: l ? "right" : "top",
        shouldShowOfferReminder: a,
    });
}
function S(e) {
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
