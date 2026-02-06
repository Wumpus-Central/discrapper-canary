"use strict";
n.d(t, { $: () => o });
var r = n(64700),
    i = n(532794),
    a = n(594832),
    s = n(404036);
function o(e) {
    let {
            giftRecipient: t,
            analyticsLocations: n,
            analyticsObject: o,
            wishlistAnalyticsObject: l,
            premiumAnalyticsObject: u,
            analyticsLocation: c,
            giftMessage: d,
            location: _,
            isDmChannel: f,
        } = e,
        p = (0, a.tA)({ location: _, isGift: !0, giftRecipient: t }) && null != t && (f ?? !0);
    return {
        openGiftModal: r.useCallback(() => {
            p && null != t
                ? (0, s.A)({
                      giftRecipient: t,
                      analyticsLocations: n,
                      analyticsLocation: c,
                      analyticsObject: l ?? o,
                      giftMessage: d,
                  })
                : (0, i.A)({
                      isGift: !0,
                      giftRecipient: t ?? void 0,
                      initialPlanId: null,
                      analyticsLocations: n,
                      analyticsLocation: c,
                      analyticsObject: u ?? o,
                      giftMessage: d,
                  });
        }, [p, t, n, c, o, l, u, d]),
        shouldShowWishlistModal: p,
    };
}
