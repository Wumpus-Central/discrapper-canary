n.d(i, { A: () => l });
var r = n(477900),
    e = n(465794),
    u = n(204413);
function l(t) {
    let {
            subscriptionTier: i,
            hasActivePromotion: n,
            useShorterCTA: l,
            isPersistentCTA: s,
            buttonTextOverride: o,
            defaultTextOverride: a,
            iconOverride: p,
            variantOverride: c,
            ...T
        } = t,
        { subscribeButtonProps: d, subscriptionTier: v } = (0, u.$)({
            subscriptionTier: i,
            hasActivePromotion: n,
            useShorterCTA: l,
            isPersistentCTA: s,
            buttonTextOverride: o,
            defaultTextOverride: a,
            iconOverride: p,
            variantOverride: c,
        });
    return (0, r.jsx)(e.A, { ...T, ...d, subscriptionTier: v });
}
