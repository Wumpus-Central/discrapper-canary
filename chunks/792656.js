"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    i = n(857586),
    a = n(204413);
function s(e) {
    let {
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: s,
            isPersistentCTA: o,
            buttonTextOverride: l,
            defaultTextOverride: u,
            iconOverride: c,
            variantOverride: d,
            ..._
        } = e,
        f = {
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: s,
            isPersistentCTA: o,
            buttonTextOverride: l,
            defaultTextOverride: u,
            iconOverride: c,
            variantOverride: d,
        },
        { subscribeButtonProps: p, subscriptionTier: h } = (0, a.$)(f);
    return (0, r.jsx)(i.A, { ..._, ...p, subscriptionTier: h });
}
