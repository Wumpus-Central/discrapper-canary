n.d(t, { A: () => r });
var a = n(627968),
    i = n(465794),
    l = n(204413);
function r(e) {
    let {
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: r,
            isPersistentCTA: o,
            buttonTextOverride: s,
            defaultTextOverride: c,
            iconOverride: d,
            variantOverride: u,
            ..._
        } = e,
        { subscribeButtonProps: p, subscriptionTier: f } = (0, l.$)({
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: r,
            isPersistentCTA: o,
            buttonTextOverride: s,
            defaultTextOverride: c,
            iconOverride: d,
            variantOverride: u,
        });
    return (0, a.jsx)(i.A, { ..._, ...p, subscriptionTier: f });
}
