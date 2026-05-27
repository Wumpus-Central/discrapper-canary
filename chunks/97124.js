"use strict";
n.d(t, { MA: () => y, Ag: () => T, fY: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(406810),
    u = n(834730),
    c = n(508770),
    d = n(496431),
    _ = n(58703),
    h = n(428262);
let f = (0, n(945810).mj)({
    name: "2026-05-nitro-tab-discount-expressive-badge",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var p = n(234419),
    E = n(99462),
    m = n(788868),
    g = n(375708),
    A = n(386667);
function I(e) {
    let {
            isTabSelected: t,
            expiresAt: n,
            badgeCopy: s,
            className: c,
            tooltipTextOverride: h,
            tooltipPosition: f,
            hideTooltip: p = !1,
        } = e,
        E = r.useMemo(() => Date.parse(n), [n]),
        m = (0, d.A)(E, 6e4);
    if (Object.values(m).every((e) => 0 === e)) return null;
    let I = (0, i.jsxs)("div", {
        className: a()(A.Fg, A.C8, c, { [A.WO]: t }),
        children: [
            (0, i.jsx)(l.O, { size: "custom", width: 16, height: 16, color: "currentColor", className: A._q }),
            (0, i.jsx)(u.E, { variant: "eyebrow", color: "text-strong", children: s }),
        ],
    });
    return p
        ? I
        : (0, i.jsx)(o.m, {
              text: null != h ? h : (0, _.uN)(m, { days: g.t.qVGNkU, hours: g.t.wyg9a9, minutes: g.t.IzmIlV }),
              position: null != f ? f : "top",
              children: I,
          });
}
function T(e) {
    let { isTabSelected: t, trialOffer: n } = e,
        r = (0, p.V)()?.subscription_trial,
        s = (0, h.tS)({ intervalType: r?.interval, intervalCount: r?.interval_count }),
        a = n.trial_id === m.Tt,
        o = (0, E.Fu)(n);
    return (0, i.jsx)(y, {
        isTabSelected: t,
        badgeCopy: s,
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: o,
        tooltipPosition: "right",
        hideTooltip: a,
    });
}
function S(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: r } = e,
        s = (function (e) {
            let { location: t } = e;
            return f.useConfig({ location: t });
        })({ location: "PremiumDiscountOfferTabBadge" }),
        a = g.intl.formatToPlainString(g.t.iiLbvu, { percent: n.discount.amount }),
        o = r ? a : g.intl.string(g.t["/DTtr6"]),
        l = n.expiresAt?.toISOString() ?? null,
        u = (0, E.__)(n);
    return (0, i.jsx)(y, {
        isTabSelected: t,
        badgeCopy: o,
        offerExpiresAt: l,
        tooltipTextOverride: u,
        tooltipPosition: "right",
        useExpressiveUnackedBadge: s,
    });
}
function y(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: r,
        tooltipTextOverride: s,
        tooltipPosition: o,
        hideTooltip: l,
        useExpressiveUnackedBadge: d = !1,
    } = e;
    return null != r
        ? (0, i.jsx)(I, {
              expiresAt: r,
              isTabSelected: t,
              badgeCopy: n,
              tooltipTextOverride: s,
              tooltipPosition: o,
              hideTooltip: l,
          })
        : d
          ? (0, i.jsx)(c.E, { type: { text: n }, variant: "expressive" })
          : (0, i.jsx)("div", {
                className: a()(A.Fg, A.AT),
                children: (0, i.jsx)(u.E, { variant: "eyebrow", className: A.md, children: n }),
            });
}
