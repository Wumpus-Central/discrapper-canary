"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    a = n(465794),
    i = n(204413);
function l(e) {
    let {
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: l,
            isPersistentCTA: s,
            buttonTextOverride: o,
            defaultTextOverride: c,
            iconOverride: d,
            variantOverride: u,
            ..._
        } = e,
        { subscribeButtonProps: p, subscriptionTier: f } = (0, i.$)({
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: l,
            isPersistentCTA: s,
            buttonTextOverride: o,
            defaultTextOverride: c,
            iconOverride: d,
            variantOverride: u,
        });
    return (0, r.jsx)(a.A, { ..._, ...p, subscriptionTier: f });
}
