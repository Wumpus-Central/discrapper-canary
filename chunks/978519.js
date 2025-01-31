n.d(t, { r: () => c }), n(192379), n(399606);
var i = n(430824),
    r = n(358085),
    a = n(341653),
    s = n(981631);
let o = '13.2',
    l = [s.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];
function u(e, t) {
    let n = e.split('.').map(Number),
        i = t.split('.').map(Number),
        r = Math.max(n.length, i.length);
    for (let e = 0; e < r; e++) {
        var a, s;
        let t = null !== (a = n[e]) && void 0 !== a ? a : 0,
            r = null !== (s = i[e]) && void 0 !== s ? s : 0;
        if (t < r) return -1;
        if (t > r) return 1;
    }
    return 0;
}
function c(e) {
    if (!(0, r.isIOS)()) return !1;
    let t = (0, a.e)();
    if (null == t || -1 === u(t, o)) return !1;
    let n = i.Z.getGuild(e);
    return !!(null != n && l.every((e) => n.hasFeature(e)));
}
