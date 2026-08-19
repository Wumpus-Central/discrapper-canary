i.d(n, { A: () => s });
var e = i(477900),
    r = i(465794),
    u = i(204413);
function s(t) {
    let {
            subscriptionTier: n,
            hasActivePromotion: i,
            useShorterCTA: s,
            isPersistentCTA: l,
            buttonTextOverride: a,
            defaultTextOverride: o,
            iconOverride: c,
            variantOverride: p,
            ...d
        } = t,
        { subscribeButtonProps: T, subscriptionTier: v } = (0, u.$)({
            subscriptionTier: n,
            hasActivePromotion: i,
            useShorterCTA: s,
            isPersistentCTA: l,
            buttonTextOverride: a,
            defaultTextOverride: o,
            iconOverride: c,
            variantOverride: p,
        });
    return (0, e.jsx)(r.A, { ...d, ...T, subscriptionTier: v });
}
