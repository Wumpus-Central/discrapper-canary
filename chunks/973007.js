n.d(t, { Z: () => d });
var l = n(200651);
n(192379);
var i = n(481060),
    s = n(823188),
    r = n(474936),
    a = n(934947);
function o(e) {
    let { onClick: t, isGift: n, priceOptions: r, showPromotionalGiftBanner: o } = e;
    return (0, l.jsx)(i.P3F, {
        onClick: t,
        style: { cursor: 'pointer' },
        children: (0, l.jsx)(s.wp, {
            className: a.tier2MarketingCard,
            ctaButton: null,
            showWumpus: !o,
            showPromotionalGiftBanner: o,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: r
        })
    });
}
function C(e) {
    let { onClick: t, isGift: n, priceOptions: r } = e;
    return (0, l.jsx)(i.P3F, {
        onClick: t,
        style: { cursor: 'pointer' },
        children: (0, l.jsx)(s.Gq, {
            className: a.tier0MarketingCard,
            ctaButton: null,
            showWumpus: !0,
            showYearlyPrice: !0,
            isGift: n,
            priceOptions: r
        })
    });
}
let d = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(o, {
                onClick: () => t(r.Si.TIER_2),
                isGift: n,
                priceOptions: i,
                showPromotionalGiftBanner: s
            }),
            (0, l.jsx)(C, {
                onClick: () => t(r.Si.TIER_0),
                isGift: n,
                priceOptions: i
            })
        ]
    });
};
