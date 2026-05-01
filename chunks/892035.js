n.d(t, { z$: () => _, ix: () => E });
var i = n(17928),
    a = n(287809),
    r = n(772427);
let s = (0, n(945810).mj)({
    name: "2026-04-profile-frames-ea-marketing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var l = n(32206),
    o = n(482947),
    d = n(13875);
function c(e) {
    let {
            canViewProfileFramesInCollectiblesShop: t,
            isEarlyAccess: n,
            isFramesEAMarketingEnabled: i,
            isFrameGiftingEnabled: a,
            hasPaidTier2: r,
        } = e,
        s = t && !n;
    return {
        isAnnouncementEligible: s || (n && i),
        isEarlyAccess: n,
        showGiftingMarketing: s && a,
        showEaPremiumMarketing: n && i && r,
        showEaNonPremiumMarketing: n && i && !r,
    };
}
function _(e) {
    let t = (0, d.sk)(e),
        n = (0, d.Do)(e),
        l = s.useConfig({ location: e }).enabled;
    return c({
        canViewProfileFramesInCollectiblesShop: t,
        isEarlyAccess: n,
        isFramesEAMarketingEnabled: l,
        isFrameGiftingEnabled: (0, r.rV)(e),
        hasPaidTier2: (0, i.bG)([a.default], () => (0, d.M)(a.default.getCurrentUser())),
    });
}
function E(e) {
    let t = l.A.getConfig({ location: e }).enableProfileFrames,
        { bucket: n } = o.A.getConfig({ location: e });
    return c({
        canViewProfileFramesInCollectiblesShop: t && n !== o.H.CONTROL,
        isEarlyAccess: t && n === o.H.PAID_PREMIUM_SUBSCRIBERS_ONLY,
        isFramesEAMarketingEnabled: s.getConfig({ location: e }).enabled,
        isFrameGiftingEnabled: (0, r.QW)(e),
        hasPaidTier2: (0, d.M)(a.default.getCurrentUser()),
    });
}
