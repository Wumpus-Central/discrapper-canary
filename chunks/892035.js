n.d(t, { z$: () => u, ix: () => m });
var i = n(17928),
    a = n(287809),
    s = n(772427);
let r = (0, n(945810).mj)({
    name: "2026-04-profile-frames-ea-marketing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var l = n(32206),
    c = n(482947),
    o = n(13875);
function d(e) {
    let {
            canViewProfileFramesInCollectiblesShop: t,
            isEarlyAccess: n,
            isFramesEAMarketingEnabled: i,
            isFrameGiftingEnabled: a,
            hasPaidTier2: s,
        } = e,
        r = t && !n;
    return {
        isAnnouncementEligible: r || (n && i),
        isEarlyAccess: n,
        showGiftingMarketing: r && a,
        showEaPremiumMarketing: n && i && s,
        showEaNonPremiumMarketing: n && i && !s,
    };
}
function u(e) {
    let t = (0, o.sk)(e),
        n = (0, o.Do)(e),
        l = r.useConfig({ location: e }).enabled;
    return d({
        canViewProfileFramesInCollectiblesShop: t,
        isEarlyAccess: n,
        isFramesEAMarketingEnabled: l,
        isFrameGiftingEnabled: (0, s.rV)(e),
        hasPaidTier2: (0, i.bG)([a.default], () => (0, o.M)(a.default.getCurrentUser())),
    });
}
function m(e) {
    let t = l.A.getConfig({ location: e }).enableProfileFrames,
        { bucket: n } = c.A.getConfig({ location: e });
    return d({
        canViewProfileFramesInCollectiblesShop: t && n !== c.H.CONTROL,
        isEarlyAccess: t && n === c.H.PAID_PREMIUM_SUBSCRIBERS_ONLY,
        isFramesEAMarketingEnabled: r.getConfig({ location: e }).enabled,
        isFrameGiftingEnabled: (0, s.QW)(e),
        hasPaidTier2: (0, o.M)(a.default.getCurrentUser()),
    });
}
