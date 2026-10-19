r.d(s, { A: () => u });
var p = r(477900),
    t = r(465794),
    c = r(204413);
function u(i) {
    let {
            subscriptionTier: s,
            hasActivePromotion: r,
            useShorterCTA: u,
            isPersistentCTA: e,
            buttonTextOverride: n,
            defaultTextOverride: a,
            iconOverride: d,
            variantOverride: h,
            ...o
        } = i,
        { subscribeButtonProps: b, subscriptionTier: k } = (0, c.$)({
            subscriptionTier: s,
            hasActivePromotion: r,
            useShorterCTA: u,
            isPersistentCTA: e,
            buttonTextOverride: n,
            defaultTextOverride: a,
            iconOverride: d,
            variantOverride: h,
        });
    return (0, p.jsx)(t.A, { ...o, ...b, subscriptionTier: k });
}
