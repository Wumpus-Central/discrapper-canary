a.d(t, { A: () => i });
var r = a(627968),
    n = a(465794),
    l = a(204413);
function i(e) {
    let {
            subscriptionTier: t,
            hasActivePromotion: a,
            useShorterCTA: i,
            isPersistentCTA: s,
            buttonTextOverride: o,
            defaultTextOverride: c,
            iconOverride: d,
            variantOverride: u,
            ...h
        } = e,
        { subscribeButtonProps: p, subscriptionTier: m } = (0, l.$)({
            subscriptionTier: t,
            hasActivePromotion: a,
            useShorterCTA: i,
            isPersistentCTA: s,
            buttonTextOverride: o,
            defaultTextOverride: c,
            iconOverride: d,
            variantOverride: u,
        });
    return (0, r.jsx)(n.A, { ...h, ...p, subscriptionTier: m });
}
