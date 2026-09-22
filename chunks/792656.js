t.d(i, { A: () => a });
var e = t(477900),
    n = t(465794),
    u = t(204413);
function a(r) {
    let {
            subscriptionTier: i,
            hasActivePromotion: t,
            useShorterCTA: a,
            isPersistentCTA: s,
            buttonTextOverride: l,
            defaultTextOverride: c,
            iconOverride: o,
            variantOverride: p,
            ...d
        } = r,
        { subscribeButtonProps: f, subscriptionTier: b } = (0, u.$)({
            subscriptionTier: i,
            hasActivePromotion: t,
            useShorterCTA: a,
            isPersistentCTA: s,
            buttonTextOverride: l,
            defaultTextOverride: c,
            iconOverride: o,
            variantOverride: p,
        });
    return (0, e.jsx)(n.A, { ...d, ...f, subscriptionTier: b });
}
