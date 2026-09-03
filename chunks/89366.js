n.d(t, { QQ: () => o, Us: () => u, qD: () => c });
var l = n(17928),
    i = n(287809),
    s = n(166403),
    r = n(354670),
    a = n(202541);
function o() {
    let e = (0, l.bG)([s.A], () => s.A.getPremiumTypeSubscription());
    return !!e?.hasActiveTrial;
}
function u() {
    let e = (0, l.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
        t = (0, l.bG)([i.default], () => i.default.getCurrentUser());
    return e?.hasActiveTrial ? t?.premiumType : null;
}
function c() {
    return a.MB.map((e) => r.A.getUserTrialOffer(e))
        .filter((e) => null != e && !e.hasExpired)
        .shift();
}
