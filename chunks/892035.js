n.d(t, { z$: () => c, ix: () => u });
var i = n(17928),
    l = n(287809);
let r = (0, n(945810).mj)({
    name: "2026-04-profile-frames-ea-marketing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var s = n(32206),
    a = n(482947),
    o = n(13875);
function d(e) {
    let {
            canViewProfileFramesInCollectiblesShop: t,
            isEarlyAccess: n,
            isFramesEAMarketingEnabled: i,
            hasPaidTier2: l,
        } = e,
        r = t && !n;
    return {
        isAnnouncementEligible: r || (n && i),
        isEarlyAccess: n,
        showGiftingMarketing: r,
        showEaPremiumMarketing: n && i && l,
        showEaNonPremiumMarketing: n && i && !l,
    };
}
function c(e) {
    let t = (0, o.sk)(e),
        n = (0, o.Do)(e);
    return d({
        canViewProfileFramesInCollectiblesShop: t,
        isEarlyAccess: n,
        isFramesEAMarketingEnabled: r.useConfig({ location: e }).enabled,
        hasPaidTier2: (0, i.bG)([l.default], () => (0, o.M)(l.default.getCurrentUser())),
    });
}
function u(e) {
    let t = s.A.getConfig({ location: e }).enableProfileFrames,
        { bucket: n } = a.A.getConfig({ location: e });
    return d({
        canViewProfileFramesInCollectiblesShop: t && n !== a.H.CONTROL,
        isEarlyAccess: t && n === a.H.PAID_PREMIUM_SUBSCRIBERS_ONLY,
        isFramesEAMarketingEnabled: r.getConfig({ location: e }).enabled,
        hasPaidTier2: (0, o.M)(l.default.getCurrentUser()),
    });
}
