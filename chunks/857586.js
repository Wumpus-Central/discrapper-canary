"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(732955),
    a = n(783420),
    s = n(938973);
let o = function (e) {
    let {
            subscriptionTier: t,
            onClick: n,
            postSuccessGuild: o,
            onSubscribeModalClose: l,
            premiumModalAnalyticsLocation: u,
            applicationId: c,
            confirmationFooter: d,
            buttonTextOverride: _,
            defaultTextOverride: f,
            iconOverride: p,
            variantOverride: h,
            ...m
        } = e,
        g = {
            onClick: n,
            subscriptionTier: t,
            postSuccessGuild: o,
            onSubscribeModalClose: l,
            premiumModalAnalyticsLocation: u,
            applicationId: c,
            confirmationFooter: d,
        },
        { subscribeButtonProps: E } = (0, s.B)({
            subscriptionTier: t,
            buttonTextOverride: _,
            defaultTextOverride: f,
            iconOverride: p,
            variantOverride: h,
        });
    return (0, r.jsx)(a.A, {
        ...g,
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(i.$nd, { onClick: t, ...E, ...m });
        },
    });
};
