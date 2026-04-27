"use strict";
n.d(t, { A: () => l });
var a = n(627968),
    r = n(465794),
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
        { subscribeButtonProps: p, subscriptionTier: m } = (0, i.$)({
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: l,
            isPersistentCTA: s,
            buttonTextOverride: o,
            defaultTextOverride: c,
            iconOverride: d,
            variantOverride: u,
        });
    return (0, a.jsx)(r.A, { ..._, ...p, subscriptionTier: m });
}
