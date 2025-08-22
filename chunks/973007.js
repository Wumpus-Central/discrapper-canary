n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(744129),
    s = n(823188),
    a = n(474936),
    o = n(402450);
function C(e) {
    let { onClick: t, isGift: n, priceOptions: a, showPromotionalGiftBanner: C, enablePremiumBrandRefresh: d } = e;
    return d
        ? (0, r.jsx)(i.P3F, {
              onClick: t,
              style: { cursor: "pointer" },
              children: (0, r.jsx)(l.IL, {
                  ctaButton: null,
                  showPromotionalGiftBanner: C,
                  showYearlyPrice: !0,
                  isGift: n,
                  isModal: !0,
                  priceOptions: a,
              }),
          })
        : (0, r.jsx)(i.P3F, {
              onClick: t,
              style: { cursor: "pointer" },
              children: (0, r.jsx)(s.wp, {
                  className: o.tier2MarketingCard,
                  ctaButton: null,
                  showWumpus: !C,
                  showPromotionalGiftBanner: C,
                  showYearlyPrice: !0,
                  isGift: n,
                  isModal: !0,
                  priceOptions: a,
              }),
          });
}
function d(e) {
    let { onClick: t, isGift: n, priceOptions: a, enablePremiumBrandRefresh: C } = e;
    return C
        ? (0, r.jsx)(i.P3F, {
              onClick: t,
              style: { cursor: "pointer" },
              children: (0, r.jsx)(l.UQ, {
                  className: o.premiumBrandRefreshTier0Card,
                  ctaButton: null,
                  showYearlyPrice: !0,
                  isGift: n,
                  priceOptions: a,
              }),
          })
        : (0, r.jsx)(i.P3F, {
              onClick: t,
              style: { cursor: "pointer" },
              children: (0, r.jsx)(s.Gq, {
                  className: o.tier0MarketingCard,
                  ctaButton: null,
                  showWumpus: !0,
                  showYearlyPrice: !0,
                  isGift: n,
                  priceOptions: a,
              }),
          });
}
let p = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: l, enablePremiumBrandRefresh: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(C, {
                onClick: () => t(a.Si.TIER_2),
                isGift: n,
                priceOptions: i,
                showPromotionalGiftBanner: l,
                enablePremiumBrandRefresh: s,
            }),
            (0, r.jsx)(d, {
                onClick: () => t(a.Si.TIER_0),
                isGift: n,
                priceOptions: i,
                enablePremiumBrandRefresh: s,
            }),
        ],
    });
};
