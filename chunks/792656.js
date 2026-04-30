s.d(r, { A: () => n });
var t = s(627968),
    e = s(465794),
    u = s(204413);
function n(i) {
    let {
            subscriptionTier: r,
            hasActivePromotion: s,
            useShorterCTA: n,
            isPersistentCTA: p,
            buttonTextOverride: c,
            defaultTextOverride: o,
            iconOverride: b,
            variantOverride: d,
            ...l
        } = i,
        { subscribeButtonProps: a, subscriptionTier: h } = (0, u.$)({
            subscriptionTier: r,
            hasActivePromotion: s,
            useShorterCTA: n,
            isPersistentCTA: p,
            buttonTextOverride: c,
            defaultTextOverride: o,
            iconOverride: b,
            variantOverride: d,
        });
    return (0, t.jsx)(e.A, { ...l, ...a, subscriptionTier: h });
}
