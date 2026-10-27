t.d(n, { $: () => g });
var i = t(582128),
    l = t(75678),
    a = t(561794),
    o = t(95369),
    r = t(139486),
    s = t(945810);
let c = (0, s.mj)({
        name: "2026-02-gifting-modal-redesign",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    u = (0, s.mj)({
        name: "2026-02-non-dm-gifting-modal-redesign",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var d = t(990820),
    f = t(202541);
function g(e) {
    let {
            giftRecipient: n,
            analyticsLocations: t,
            analyticsObject: s,
            wishlistAnalyticsObject: g,
            premiumAnalyticsObject: C,
            analyticsLocation: m,
            giftMessage: A,
            subscriptionTier: p,
            location: b,
        } = e,
        { enabled: I } = c.useConfig({ location: b }),
        { enabled: T } = u.useConfig({ location: b }),
        h = (0, r.F5)(b),
        N = (0, a.tA)({ isGift: !0, giftRecipient: n }),
        k = I && null != n,
        j = T && null == n,
        _ = k || j,
        y = N && null != n;
    return {
        openGiftModal: i.useCallback(() => {
            null != p
                ? (0, l.A)({
                      isGift: !0,
                      giftRecipient: n ?? void 0,
                      subscriptionTier: p,
                      analyticsLocations: t,
                      analyticsLocation: m,
                      analyticsObject: C ?? s,
                      giftMessage: A,
                  })
                : h
                  ? y
                      ? (0, o.A)({
                            giftRecipient: n,
                            analyticsLocations: t,
                            analyticsLocation: m,
                            analyticsObject: g ?? s,
                            giftMessage: A,
                        })
                      : (0, d.A)({
                            giftRecipient: n ?? void 0,
                            analyticsLocations: t,
                            analyticsLocation: m,
                            analyticsObject: g ?? s,
                            giftMessage: A,
                        })
                  : k && null != n
                    ? (0, d.A)({
                          giftRecipient: n,
                          analyticsLocations: t,
                          analyticsLocation: m,
                          analyticsObject: g ?? s,
                          giftMessage: A,
                      })
                    : j
                      ? (0, d.A)({
                            analyticsLocations: t,
                            analyticsLocation: m,
                            analyticsObject: g ?? s,
                            giftMessage: A,
                            giftingOrigin: f.vQ.GUILD_CHANNEL,
                        })
                      : y && null != n
                        ? (0, o.A)({
                              giftRecipient: n,
                              analyticsLocations: t,
                              analyticsLocation: m,
                              analyticsObject: g ?? s,
                              giftMessage: A,
                          })
                        : (0, l.A)({
                              isGift: !0,
                              giftRecipient: n ?? void 0,
                              initialPlanId: null,
                              analyticsLocations: t,
                              analyticsLocation: m,
                              analyticsObject: C ?? s,
                              giftMessage: A,
                          });
        }, [h, k, j, y, n, t, m, s, g, C, A, p]),
        shouldShowWishlistModal: y,
        shouldShowGiftSelectionModal: _,
    };
}
