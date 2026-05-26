n.d(t, { MA: () => m, Ag: () => S, fY: () => w });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(990078),
    o = n(406810),
    d = n(834730),
    h = n(508770),
    u = n(496431),
    c = n(58703),
    g = n(428262);
let C = (0, n(945810).mj)({
    name: "2026-05-nitro-tab-discount-expressive-badge",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var p = n(234419),
    y = n(99462),
    f = n(788868),
    I = n(375708),
    A = n(386667);
function v(e) {
    let {
            isTabSelected: t,
            expiresAt: n,
            badgeCopy: l,
            className: h,
            tooltipTextOverride: g,
            tooltipPosition: C,
            hideTooltip: p = !1,
        } = e,
        y = s.useMemo(() => Date.parse(n), [n]),
        f = (0, u.A)(y, 6e4);
    if (Object.values(f).every((e) => 0 === e)) return null;
    let v = (0, i.jsxs)("div", {
        className: r()(A.Fg, A.C8, h, { [A.WO]: t }),
        children: [
            (0, i.jsx)(o.O, { size: "custom", width: 16, height: 16, color: "currentColor", className: A._q }),
            (0, i.jsx)(d.E, { variant: "eyebrow", color: "text-strong", children: l }),
        ],
    });
    return p
        ? v
        : (0, i.jsx)(a.m, {
              text: null != g ? g : (0, c.uN)(f, { days: I.t.qVGNkU, hours: I.t.wyg9a9, minutes: I.t.IzmIlV }),
              position: null != C ? C : "top",
              children: v,
          });
}
function S(e) {
    let { isTabSelected: t, trialOffer: n } = e,
        s = (0, p.V)()?.subscription_trial,
        l = (0, g.tS)({ intervalType: s?.interval, intervalCount: s?.interval_count }),
        r = n.trial_id === f.Tt,
        a = (0, y.Fu)(n);
    return (0, i.jsx)(m, {
        isTabSelected: t,
        badgeCopy: l,
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: a,
        tooltipPosition: "right",
        hideTooltip: r,
    });
}
function w(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: s } = e,
        l = (function (e) {
            let { location: t } = e;
            return C.useConfig({ location: t });
        })({ location: "PremiumDiscountOfferTabBadge" }),
        r = I.intl.formatToPlainString(I.t.iiLbvu, { percent: n.discount.amount }),
        a = s ? r : I.intl.string(I.t["/DTtr6"]),
        o = n.expiresAt?.toISOString() ?? null,
        d = (0, y.__)(n);
    return (0, i.jsx)(m, {
        isTabSelected: t,
        badgeCopy: a,
        offerExpiresAt: o,
        tooltipTextOverride: d,
        tooltipPosition: "right",
        useExpressiveUnackedBadge: l,
    });
}
function m(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: s,
        tooltipTextOverride: l,
        tooltipPosition: a,
        hideTooltip: o,
        useExpressiveUnackedBadge: u = !1,
    } = e;
    return null != s
        ? (0, i.jsx)(v, {
              expiresAt: s,
              isTabSelected: t,
              badgeCopy: n,
              tooltipTextOverride: l,
              tooltipPosition: a,
              hideTooltip: o,
          })
        : u
          ? (0, i.jsx)(h.E, { type: { text: n }, variant: "expressive" })
          : (0, i.jsx)("div", {
                className: r()(A.Fg, A.AT),
                children: (0, i.jsx)(d.E, { variant: "eyebrow", className: A.md, children: n }),
            });
}
