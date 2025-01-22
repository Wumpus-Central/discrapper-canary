r.d(n, {
    r: function () {
        return d;
    }
}),
    r(192379),
    r(399606);
var i = r(430824),
    a = r(358085),
    o = r(341653),
    s = r(981631);
let l = '13.2',
    u = [s.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];
function c(e, n) {
    let r = e.split('.').map(Number),
        i = n.split('.').map(Number),
        a = Math.max(r.length, i.length);
    for (let e = 0; e < a; e++) {
        var o, s;
        let n = null !== (o = r[e]) && void 0 !== o ? o : 0,
            a = null !== (s = i[e]) && void 0 !== s ? s : 0;
        if (n < a) return -1;
        if (n > a) return 1;
    }
    return 0;
}
function d(e) {
    if (!(0, a.isIOS)()) return !1;
    let n = (0, o.e)();
    if (null == n || -1 === c(n, l)) return !1;
    let r = i.Z.getGuild(e);
    return !!(null != r && u.every((e) => r.hasFeature(e))) || !1;
}
