t.d(n, { Z: () => p });
var r = t(951288);
t(647438);
var i = t(481060),
    l = t(744129),
    s = t(823188),
    a = t(474936),
    o = t(402450);
function C(e) {
    let { onClick: n, isGift: t, priceOptions: a, showPromotionalGiftBanner: C, enablePremiumBrandRefresh: d } = e;
    return d
        ? (0, r.jsx)(i.P3F, {
              onClick: n,
              style: { cursor: "pointer" },
              children: (0, r.jsx)(l.IL, {
                  ctaButton: null,
                  showPromotionalGiftBanner: C,
                  showYearlyPrice: !0,
                  isGift: t,
                  isModal: !0,
                  priceOptions: a,
              }),
          })
        : (0, r.jsx)(i.P3F, {
              onClick: n,
              style: { cursor: "pointer" },
              children: (0, r.jsx)(s.wp, {
                  className: o.tier2MarketingCard,
                  ctaButton: null,
                  showWumpus: !C,
                  showPromotionalGiftBanner: C,
                  showYearlyPrice: !0,
                  isGift: t,
                  isModal: !0,
                  priceOptions: a,
              }),
          });
}
function d(e) {
    let { onClick: n, isGift: t, priceOptions: a, enablePremiumBrandRefresh: C } = e;
    return C
        ? (0, r.jsx)(i.P3F, {
              onClick: n,
              style: { cursor: "pointer" },
              children: (0, r.jsx)(l.UQ, {
                  className: o.premiumBrandRefreshTier0Card,
                  ctaButton: null,
                  showYearlyPrice: !0,
                  isGift: t,
                  priceOptions: a,
              }),
          })
        : (0, r.jsx)(i.P3F, {
              onClick: n,
              style: { cursor: "pointer" },
              children: (0, r.jsx)(s.Gq, {
                  className: o.tier0MarketingCard,
                  ctaButton: null,
                  showWumpus: !0,
                  showYearlyPrice: !0,
                  isGift: t,
                  priceOptions: a,
              }),
          });
}
let p = function (e) {
    let { onSelectSku: n, isGift: t, priceOptions: i, showPromotionalGiftBanner: l, enablePremiumBrandRefresh: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(C, {
                onClick: () => n(a.Si.TIER_2),
                isGift: t,
                priceOptions: i,
                showPromotionalGiftBanner: l,
                enablePremiumBrandRefresh: s,
            }),
            (0, r.jsx)(d, {
                onClick: () => n(a.Si.TIER_0),
                isGift: t,
                priceOptions: i,
                enablePremiumBrandRefresh: s,
            }),
        ],
    });
};
