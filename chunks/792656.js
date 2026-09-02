s.d(r, { A: () => u });
var t = s(477900),
    e = s(465794),
    n = s(204413);
function u(i) {
    let {
            subscriptionTier: r,
            hasActivePromotion: s,
            useShorterCTA: u,
            isPersistentCTA: p,
            buttonTextOverride: c,
            defaultTextOverride: o,
            iconOverride: b,
            variantOverride: d,
            ...a
        } = i,
        { subscribeButtonProps: l, subscriptionTier: h } = (0, n.$)({
            subscriptionTier: r,
            hasActivePromotion: s,
            useShorterCTA: u,
            isPersistentCTA: p,
            buttonTextOverride: c,
            defaultTextOverride: o,
            iconOverride: b,
            variantOverride: d,
        });
    return (0, t.jsx)(e.A, { ...a, ...l, subscriptionTier: h });
}
