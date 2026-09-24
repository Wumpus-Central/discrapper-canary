n.d(t, { b: () => I });
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
    x = n(531536),
    h = n(375708),
    p = n(951321);
function I() {
    let { claimableRewards: e } = (0, c.Pv)(),
        t = (0, i.bG)([g.A], () => {
            let e = g.A.getMarketingComponentByType(l.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        n = (0, m.T)(t?.avatarAsset),
        a = (0, i.bG)([g.A], () => g.A.getGiftPromotion()),
        s = (0, u.dA)(a?.endDate);
    return null == t || null == e || 0 === e.length
        ? null
        : (0, r.jsx)(f, {
              rewardImageUrl: n,
              countdownText: s,
              header: (0, d.uJ)(t.header) ? h.intl.string(h.t.OEtqpm) : t.header,
              body: (0, d.uJ)(t.desktopBody)
                  ? h.intl.formatToPlainString(h.t["2h5M+X"], { availableCount: e.length })
                  : t.desktopBody,
          });
}
function f(e) {
    let { rewardImageUrl: t, countdownText: n, header: l, body: i } = e;
    return (0, r.jsx)("div", {
        className: p.KE,
        "data-panel-banner": "true",
        children: (0, r.jsx)(x.W, {
            image: null != t ? (0, r.jsx)("img", { className: p.L8, alt: "", src: t }) : void 0,
            badge:
                null != n
                    ? (0, r.jsx)(a.E, { type: { text: n.toUpperCase() }, variant: "brand", icon: s.ClockIcon })
                    : void 0,
            title: (0, r.jsx)(o.E, { variant: "text-md/medium", color: "text-default", children: l }),
            body: (0, r.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", children: i }),
        }),
    });
}
