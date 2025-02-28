n.d(t, {
    Jm: () => u,
    L5: () => c,
    WN: () => f,
    sf: () => l
}),
    n(301563);
var r = n(442837),
    i = n(911969),
    o = n(375954),
    a = n(594174),
    s = n(981631);
function l() {
    let e = a.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== i.F$.VERIFIED_ADULT;
}
function c() {
    let e = (0, r.e7)([a.default], () => a.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== i.F$.VERIFIED_ADULT;
}
function u() {
    let e = (0, r.e7)([a.default], () => a.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === i.F$.VERIFIED_TEEN;
}
function d(e, t) {
    let n = o.Z.getMessage(e, t);
    if (null == n || null == n.embeds || 0 === n.embeds.length || null == n.embeds[0].fields || n.embeds[0].type !== s.hBH.AGE_VERIFICATION_SYSTEM_NOTIFICATION) return !1;
    let r = n.embeds[0].fields.find((e) => 'ctas' === e.rawName);
    return null == r ? void 0 : r.rawValue.split(',').includes('retry');
}
function f(e, t) {
    return c() && d(e, t);
}
