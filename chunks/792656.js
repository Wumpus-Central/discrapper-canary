"use strict";
n.d(t, { A: () => a });
var i = n(627968),
    r = n(465794),
    s = n(204413);
function a(e) {
    let {
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: a,
            isPersistentCTA: o,
            buttonTextOverride: l,
            defaultTextOverride: u,
            iconOverride: c,
            variantOverride: d,
            ..._
        } = e,
        { subscribeButtonProps: f, subscriptionTier: h } = (0, s.$)({
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: a,
            isPersistentCTA: o,
            buttonTextOverride: l,
            defaultTextOverride: u,
            iconOverride: c,
            variantOverride: d,
        });
    return (0, i.jsx)(r.A, { ..._, ...f, subscriptionTier: h });
}
