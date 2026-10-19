n.d(t, { QQ: () => o, Us: () => c, qD: () => u });
var i = n(17928),
    s = n(287809),
    r = n(166403),
    l = n(354670),
    a = n(202541);
function o() {
    let e = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription());
    return !!e?.hasActiveTrial;
}
function c() {
    let e = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription()),
        t = (0, i.bG)([s.default], () => s.default.getCurrentUser());
    return e?.hasActiveTrial ? t?.premiumType : null;
}
function u() {
    return a.MB.map((e) => l.A.getUserTrialOffer(e))
        .filter((e) => null != e && !e.hasExpired)
        .shift();
}
