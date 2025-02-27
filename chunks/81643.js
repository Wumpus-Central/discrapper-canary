n.d(t, {
    Jm: () => u,
    L5: () => a,
    WN: () => l,
    sf: () => o
}),
    n(301563);
var r = n(375954),
    i = n(981631);
function o() {
    return !0;
}
function a() {
    return !0;
}
function s(e, t) {
    let n = r.Z.getMessage(e, t);
    if (null == n || null == n.embeds || 0 === n.embeds.length || null == n.embeds[0].fields || n.embeds[0].type !== i.hBH.AGE_VERIFICATION_SYSTEM_NOTIFICATION) return !1;
    let o = n.embeds[0].fields.find((e) => 'ctas' === e.rawName);
    return null == o ? void 0 : o.rawValue.split(',').includes('retry');
}
function l(e, t) {
    return c() && s(e, t);
}
function c() {
    return !1;
}
function u() {
    return !1;
}
