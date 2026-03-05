"use strict";
n.d(t, { $: () => u });
var r = n(64700),
    i = n(532794),
    s = n(594832),
    a = n(404036),
    o = n(882873),
    l = n(990820);
function u(e) {
    let {
            giftRecipient: t,
            analyticsLocations: n,
            analyticsObject: u,
            wishlistAnalyticsObject: c,
            premiumAnalyticsObject: d,
            analyticsLocation: _,
            giftMessage: f,
            location: p,
            isDmChannel: h,
        } = e,
        { enabled: m } = o.u.useConfig({ location: p }),
        E = (0, s.tA)({ isGift: !0, giftRecipient: t }),
        g = h ?? !0,
        A = m && null != t && g,
        I = E && null != t && g;
    return {
        openGiftModal: r.useCallback(() => {
            A && null != t
                ? (0, l.A)({
                      giftRecipient: t,
                      analyticsLocations: n,
                      analyticsLocation: _,
                      analyticsObject: c ?? u,
                      giftMessage: f,
                  })
                : I && null != t
                  ? (0, a.A)({
                        giftRecipient: t,
                        analyticsLocations: n,
                        analyticsLocation: _,
                        analyticsObject: c ?? u,
                        giftMessage: f,
                    })
                  : (0, i.A)({
                        isGift: !0,
                        giftRecipient: t ?? void 0,
                        initialPlanId: null,
                        analyticsLocations: n,
                        analyticsLocation: _,
                        analyticsObject: d ?? u,
                        giftMessage: f,
                    });
        }, [A, I, t, n, _, u, c, d, f]),
        shouldShowWishlistModal: I,
        shouldShowGiftSelectionModal: A,
    };
}
