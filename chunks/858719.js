n.d(t, {
    A: () => d,
    C7: () => c,
    kE: () => u,
    ws: () => l,
});
var r = n(399606),
    i = n(937615),
    a = n(914788),
    o = n(546791),
    s = n(292352);
function l(e) {
    return (0, r.Wu)([a.Z], () => a.Z.getActionsForDisplayType(e));
}
function c(e) {
    return (0, r.e7)([a.Z], () => a.Z.getTotalForDisplayType(e));
}
function u() {
    return (0, r.e7)([a.Z], () => Object.values(s.MY).some((e) => a.Z.getTotalForDisplayType(e) > 0));
}
function d(e) {
    var t;
    let n = null != (t = c(e)) ? t : 0;
    if (e === s.MY.TOTAL_VOICE_MINUTES) return (0, o.yH)(n);
    if (e === s.MY.PURCHASES) {
        let e = a.Z.getTotalSpendAmount(),
            t = a.Z.getTotalSpendCurrency();
        if (null != e && null != t) return (0, i.qr)(e, t);
    }
    return n;
}
