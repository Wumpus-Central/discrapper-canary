"use strict";
n.d(t, { z$: () => u, ix: () => _ });
var i = n(17928),
    r = n(287809),
    a = n(772427);
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
            isFrameGiftingEnabled: r,
            hasPaidTier2: a,
        } = e,
        s = t && !n;
    return {
        isAnnouncementEligible: s || (n && i),
        isEarlyAccess: n,
        showGiftingMarketing: s && r,
        showEaPremiumMarketing: n && i && a,
        showEaNonPremiumMarketing: n && i && !a,
    };
}
function u(e) {
    let t = (0, d.sk)(e),
        n = (0, d.Do)(e),
        l = s.useConfig({ location: e }).enabled;
    return c({
        canViewProfileFramesInCollectiblesShop: t,
        isEarlyAccess: n,
        isFramesEAMarketingEnabled: l,
        isFrameGiftingEnabled: (0, a.rV)(e),
        hasPaidTier2: (0, i.bG)([r.default], () => (0, d.M)(r.default.getCurrentUser())),
    });
}
function _(e) {
    let t = l.A.getConfig({ location: e }).enableProfileFrames,
        { bucket: n } = o.A.getConfig({ location: e });
    return c({
        canViewProfileFramesInCollectiblesShop: t && n !== o.H.CONTROL,
        isEarlyAccess: t && n === o.H.PAID_PREMIUM_SUBSCRIBERS_ONLY,
        isFramesEAMarketingEnabled: s.getConfig({ location: e }).enabled,
        isFrameGiftingEnabled: (0, a.QW)(e),
        hasPaidTier2: (0, d.M)(r.default.getCurrentUser()),
    });
}
