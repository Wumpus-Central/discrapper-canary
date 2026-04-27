"use strict";
r.d(t, { A: () => s });
var n = r(627968),
    i = r(465794),
    a = r(204413);
function s(e) {
    let {
            subscriptionTier: t,
            hasActivePromotion: r,
            useShorterCTA: s,
            isPersistentCTA: l,
            buttonTextOverride: o,
            defaultTextOverride: c,
            iconOverride: d,
            variantOverride: u,
            ..._
        } = e,
        { subscribeButtonProps: p, subscriptionTier: f } = (0, a.$)({
            subscriptionTier: t,
            hasActivePromotion: r,
            useShorterCTA: s,
            isPersistentCTA: l,
            buttonTextOverride: o,
            defaultTextOverride: c,
            iconOverride: d,
            variantOverride: u,
        });
    return (0, n.jsx)(i.A, { ..._, ...p, subscriptionTier: f });
}
