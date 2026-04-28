a.d(t, { A: () => i });
var n = a(627968),
    l = a(465794),
    r = a(204413);
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
        { subscribeButtonProps: p, subscriptionTier: m } = (0, r.$)({
            subscriptionTier: t,
            hasActivePromotion: a,
            useShorterCTA: i,
            isPersistentCTA: s,
            buttonTextOverride: o,
            defaultTextOverride: c,
            iconOverride: d,
            variantOverride: u,
        });
    return (0, n.jsx)(l.A, { ...h, ...p, subscriptionTier: m });
}
