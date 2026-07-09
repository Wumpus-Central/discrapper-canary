n.d(t, { z$: () => u, ix: () => A });
var i = n(17928),
    l = n(287809),
    r = n(772427);
let s = (0, n(945810).mj)({
    name: "2026-04-profile-frames-ea-marketing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var a = n(32206),
    o = n(482947),
    d = n(13875);
function c(e) {
    let {
            canViewProfileFramesInCollectiblesShop: t,
            isEarlyAccess: n,
            isFramesEAMarketingEnabled: i,
            isFrameGiftingEnabled: l,
            hasPaidTier2: r,
        } = e,
        s = t && !n;
    return {
        isAnnouncementEligible: s || (n && i),
        isEarlyAccess: n,
        showGiftingMarketing: s && l,
        showEaPremiumMarketing: n && i && r,
        showEaNonPremiumMarketing: n && i && !r,
    };
}
function u(e) {
    let t = (0, d.sk)(e),
        n = (0, d.Do)(e),
        a = s.useConfig({ location: e }).enabled;
    return c({
        canViewProfileFramesInCollectiblesShop: t,
        isEarlyAccess: n,
        isFramesEAMarketingEnabled: a,
        isFrameGiftingEnabled: (0, r.rV)(e),
        hasPaidTier2: (0, i.bG)([l.default], () => (0, d.M)(l.default.getCurrentUser())),
    });
}
function A(e) {
    let t = a.A.getConfig({ location: e }).enableProfileFrames,
        { bucket: n } = o.A.getConfig({ location: e });
    return c({
        canViewProfileFramesInCollectiblesShop: t && n !== o.H.CONTROL,
        isEarlyAccess: t && n === o.H.PAID_PREMIUM_SUBSCRIBERS_ONLY,
        isFramesEAMarketingEnabled: s.getConfig({ location: e }).enabled,
        isFrameGiftingEnabled: (0, r.QW)(e),
        hasPaidTier2: (0, d.M)(l.default.getCurrentUser()),
    });
}
