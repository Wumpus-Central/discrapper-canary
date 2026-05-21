r.d(i, { A: () => s });
var n = r(627968),
    e = r(465794),
    l = r(204413);
function s(t) {
    let {
            subscriptionTier: i,
            hasActivePromotion: r,
            useShorterCTA: s,
            isPersistentCTA: u,
            buttonTextOverride: a,
            defaultTextOverride: o,
            iconOverride: p,
            variantOverride: T,
            ...c
        } = t,
        { subscribeButtonProps: v, subscriptionTier: d } = (0, l.$)({
            subscriptionTier: i,
            hasActivePromotion: r,
            useShorterCTA: s,
            isPersistentCTA: u,
            buttonTextOverride: a,
            defaultTextOverride: o,
            iconOverride: p,
            variantOverride: T,
        });
    return (0, n.jsx)(e.A, { ...c, ...v, subscriptionTier: d });
}
