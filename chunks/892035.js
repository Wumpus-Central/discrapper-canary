"use strict";
n.d(t, { z$: () => d, ix: () => _ });
var i = n(17928),
    r = n(287809),
    s = n(772427);
let a = (0, n(945810).mj)({
    name: "2026-04-profile-frames-ea-marketing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var o = n(32206),
    l = n(482947),
    u = n(13875);
function c(e) {
    let {
            canViewProfileFramesInCollectiblesShop: t,
            isEarlyAccess: n,
            isFramesEAMarketingEnabled: i,
            isFrameGiftingEnabled: r,
            hasPaidTier2: s,
        } = e,
        a = t && !n;
    return {
        isAnnouncementEligible: a || (n && i),
        isEarlyAccess: n,
        showGiftingMarketing: a && r,
        showEaPremiumMarketing: n && i && s,
        showEaNonPremiumMarketing: n && i && !s,
    };
}
function d(e) {
    let t = (0, u.sk)(e),
        n = (0, u.Do)(e),
        o = a.useConfig({ location: e }).enabled;
    return c({
        canViewProfileFramesInCollectiblesShop: t,
        isEarlyAccess: n,
        isFramesEAMarketingEnabled: o,
        isFrameGiftingEnabled: (0, s.rV)(e),
        hasPaidTier2: (0, i.bG)([r.default], () => (0, u.M)(r.default.getCurrentUser())),
    });
}
function _(e) {
    let t = o.A.getConfig({ location: e }).enableProfileFrames,
        { bucket: n } = l.A.getConfig({ location: e });
    return c({
        canViewProfileFramesInCollectiblesShop: t && n !== l.H.CONTROL,
        isEarlyAccess: t && n === l.H.PAID_PREMIUM_SUBSCRIBERS_ONLY,
        isFramesEAMarketingEnabled: a.getConfig({ location: e }).enabled,
        isFrameGiftingEnabled: (0, s.QW)(e),
        hasPaidTier2: (0, u.M)(r.default.getCurrentUser()),
    });
}
