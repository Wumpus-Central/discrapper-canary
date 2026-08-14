"use strict";
n.d(t, { QQ: () => o, Us: () => d, qD: () => c });
var i = n(17928),
    r = n(287809),
    a = n(166403),
    s = n(354670),
    l = n(202541);
function o() {
    let e = (0, i.bG)([a.A], () => a.A.getPremiumTypeSubscription());
    return !!e?.hasActiveTrial;
}
function d() {
    let e = (0, i.bG)([a.A], () => a.A.getPremiumTypeSubscription()),
        t = (0, i.bG)([r.default], () => r.default.getCurrentUser());
    return e?.hasActiveTrial ? t?.premiumType : null;
}
function c() {
    return l.MB.map((e) => s.A.getUserTrialOffer(e))
        .filter((e) => null != e && !e.hasExpired())
        .shift();
}
