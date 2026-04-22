"use strict";
a.d(t, { A: () => i });
var r = a(627968),
    l = a(465794),
    n = a(204413);
function i(e) {
    let {
            subscriptionTier: t,
            hasActivePromotion: a,
            useShorterCTA: i,
            isPersistentCTA: s,
            buttonTextOverride: o,
            defaultTextOverride: d,
            iconOverride: c,
            variantOverride: u,
            ...h
        } = e,
        { subscribeButtonProps: p, subscriptionTier: _ } = (0, n.$)({
            subscriptionTier: t,
            hasActivePromotion: a,
            useShorterCTA: i,
            isPersistentCTA: s,
            buttonTextOverride: o,
            defaultTextOverride: d,
            iconOverride: c,
            variantOverride: u,
        });
    return (0, r.jsx)(l.A, { ...h, ...p, subscriptionTier: _ });
}
