n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(823188),
    s = n(474936),
    o = n(894838);
function a(e) {
    let { onClick: t, isGift: n, priceOptions: s, showPromotionalGiftBanner: a } = e;
    return (0, r.jsx)(i.P3F, {
        onClick: t,
        style: { cursor: 'pointer' },
        children: (0, r.jsx)(l.wp, {
            className: o.tier2MarketingCard,
            ctaButton: null,
            showWumpus: !a,
            showPromotionalGiftBanner: a,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: s
        })
    });
}
function C(e) {
    let { onClick: t, isGift: n, priceOptions: s } = e;
    return (0, r.jsx)(i.P3F, {
        onClick: t,
        style: { cursor: 'pointer' },
        children: (0, r.jsx)(l.Gq, {
            className: o.tier0MarketingCard,
            ctaButton: null,
            showWumpus: !0,
            showYearlyPrice: !0,
            isGift: n,
            priceOptions: s
        })
    });
}
let d = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a, {
                onClick: () => t(s.Si.TIER_2),
                isGift: n,
                priceOptions: i,
                showPromotionalGiftBanner: l
            }),
            (0, r.jsx)(C, {
                onClick: () => t(s.Si.TIER_0),
                isGift: n,
                priceOptions: i
            })
        ]
    });
};
