n.d(t, { Z: () => c });
var i = n(255367);
n(73800);
var l = n(481060),
    s = n(389973),
    r = n(823188),
    a = n(474936),
    o = n(894838);
function C(e) {
    let { onClick: t, isGift: n, priceOptions: a, showPromotionalGiftBanner: C, enablePremiumRebrandDesign: d } = e;
    return d
        ? (0, i.jsx)(l.P3F, {
              onClick: t,
              style: { cursor: 'pointer' },
              children: (0, i.jsx)(s.P, {
                  ctaButton: null,
                  showPromotionalGiftBanner: C,
                  showYearlyPrice: !0,
                  isGift: n,
                  isModal: !0,
                  priceOptions: a
              })
          })
        : (0, i.jsx)(l.P3F, {
              onClick: t,
              style: { cursor: 'pointer' },
              children: (0, i.jsx)(r.wp, {
                  className: o.tier2MarketingCard,
                  ctaButton: null,
                  showWumpus: !C,
                  showPromotionalGiftBanner: C,
                  showYearlyPrice: !0,
                  isGift: n,
                  isModal: !0,
                  priceOptions: a
              })
          });
}
function d(e) {
    let { onClick: t, isGift: n, priceOptions: a, enablePremiumRebrandDesign: C } = e;
    return C
        ? (0, i.jsx)(l.P3F, {
              onClick: t,
              style: { cursor: 'pointer' },
              children: (0, i.jsx)(s.F, {
                  ctaButton: null,
                  showYearlyPrice: !0,
                  isGift: n,
                  priceOptions: a
              })
          })
        : (0, i.jsx)(l.P3F, {
              onClick: t,
              style: { cursor: 'pointer' },
              children: (0, i.jsx)(r.Gq, {
                  className: o.tier0MarketingCard,
                  ctaButton: null,
                  showWumpus: !0,
                  showYearlyPrice: !0,
                  isGift: n,
                  priceOptions: a
              })
          });
}
let c = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: l, showPromotionalGiftBanner: s, enablePremiumRebrandDesign: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C, {
                onClick: () => t(a.Si.TIER_2),
                isGift: n,
                priceOptions: l,
                showPromotionalGiftBanner: s,
                enablePremiumRebrandDesign: r
            }),
            (0, i.jsx)(d, {
                onClick: () => t(a.Si.TIER_0),
                isGift: n,
                priceOptions: l,
                enablePremiumRebrandDesign: r
            })
        ]
    });
};
