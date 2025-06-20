t.d(n, { Z: () => c });
var i = t(255367);
t(73800);
var l = t(481060),
    s = t(389973),
    r = t(823188),
    a = t(474936),
    o = t(894838);
function C(e) {
    let { onClick: n, isGift: t, priceOptions: a, showPromotionalGiftBanner: C, enablePremiumRebrandDesign: d } = e;
    return d
        ? (0, i.jsx)(l.P3F, {
              onClick: n,
              style: { cursor: 'pointer' },
              children: (0, i.jsx)(s.P, {
                  ctaButton: null,
                  showPromotionalGiftBanner: C,
                  showYearlyPrice: !0,
                  isGift: t,
                  isModal: !0,
                  priceOptions: a
              })
          })
        : (0, i.jsx)(l.P3F, {
              onClick: n,
              style: { cursor: 'pointer' },
              children: (0, i.jsx)(r.wp, {
                  className: o.tier2MarketingCard,
                  ctaButton: null,
                  showWumpus: !C,
                  showPromotionalGiftBanner: C,
                  showYearlyPrice: !0,
                  isGift: t,
                  isModal: !0,
                  priceOptions: a
              })
          });
}
function d(e) {
    let { onClick: n, isGift: t, priceOptions: a, enablePremiumRebrandDesign: C } = e;
    return C
        ? (0, i.jsx)(l.P3F, {
              onClick: n,
              style: { cursor: 'pointer' },
              children: (0, i.jsx)(s.F, {
                  ctaButton: null,
                  showYearlyPrice: !0,
                  isGift: t,
                  priceOptions: a
              })
          })
        : (0, i.jsx)(l.P3F, {
              onClick: n,
              style: { cursor: 'pointer' },
              children: (0, i.jsx)(r.Gq, {
                  className: o.tier0MarketingCard,
                  ctaButton: null,
                  showWumpus: !0,
                  showYearlyPrice: !0,
                  isGift: t,
                  priceOptions: a
              })
          });
}
let c = function (e) {
    let { onSelectSku: n, isGift: t, priceOptions: l, showPromotionalGiftBanner: s, enablePremiumRebrandDesign: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C, {
                onClick: () => n(a.Si.TIER_2),
                isGift: t,
                priceOptions: l,
                showPromotionalGiftBanner: s,
                enablePremiumRebrandDesign: r
            }),
            (0, i.jsx)(d, {
                onClick: () => n(a.Si.TIER_0),
                isGift: t,
                priceOptions: l,
                enablePremiumRebrandDesign: r
            })
        ]
    });
};
