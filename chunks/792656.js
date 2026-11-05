var p = r(477900),
    t = r(465794),
    c = r(204413);
r.d(
    s,
    {},
    {
        A: function (i) {
            let {
                    subscriptionTier: s,
                    hasActivePromotion: r,
                    useShorterCTA: u,
                    isPersistentCTA: e,
                    buttonTextOverride: n,
                    defaultTextOverride: a,
                    iconOverride: d,
                    variantOverride: h,
                    enableMarketingSubscribeCopyTest: o = !1,
                    ...b
                } = i,
                { subscribeButtonProps: k, subscriptionTier: w } = (0, c.$)({
                    subscriptionTier: s,
                    hasActivePromotion: r,
                    useShorterCTA: u,
                    isPersistentCTA: e,
                    buttonTextOverride: n,
                    defaultTextOverride: a,
                    iconOverride: d,
                    variantOverride: h,
                    enableMarketingSubscribeCopyTest: o,
                });
            return (0, p.jsx)(t.A, { ...b, ...k, subscriptionTier: w });
        },
    },
);
