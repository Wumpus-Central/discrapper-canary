n.d(t, { b: () => f });
var r = n(477900);
n(582128);
var l = n(877624),
    i = n(17928),
    a = n(508770),
    s = n(406810),
    o = n(834730),
    c = n(951305),
    u = n(421108),
    d = n(240248),
    m = n(807098),
    g = n(412260),
    x = n(860300),
    h = n(531536),
    p = n(375708),
    I = n(951321);
function f() {
    let { claimableRewards: e } = (0, c.Pv)(),
        { enabled: t } = x.J.useConfig({ location: "PremiumBrandRefreshGiftPromotionElement" }),
        n = (0, i.bG)([g.A], () => {
            let e = g.A.getMarketingComponentByType(l.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        a = (0, m.T)(n?.avatarAsset),
        s = (0, i.bG)([g.A], () => g.A.getGiftPromotion()),
        o = (0, u.dA)(s?.endDate, t);
    return null == n || null == e || 0 === e.length
        ? null
        : (0, r.jsx)(T, {
              rewardImageUrl: a,
              countdownText: o,
              header: (0, d.uJ)(n.header) ? p.intl.string(p.t.OEtqpm) : n.header,
              body: (0, d.uJ)(n.desktopBody)
                  ? p.intl.formatToPlainString(p.t["2h5M+X"], { availableCount: e.length })
                  : n.desktopBody,
          });
}
function T(e) {
    let { rewardImageUrl: t, countdownText: n, header: l, body: i } = e;
    return (0, r.jsx)("div", {
        className: I.KE,
        "data-panel-banner": "true",
        children: (0, r.jsx)(h.W, {
            image: null != t ? (0, r.jsx)("img", { className: I.L8, alt: "", src: t }) : void 0,
            badge:
                null != n
                    ? (0, r.jsx)(a.E, { type: { text: n.toUpperCase() }, variant: "brand", icon: s.ClockIcon })
                    : void 0,
            title: (0, r.jsx)(o.E, { variant: "text-md/medium", color: "text-default", children: l }),
            body: (0, r.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", children: i }),
        }),
    });
}
