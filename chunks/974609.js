r.d(n, {
    H: function () {
        return l;
    }
});
var i = r(47120);
r(442837);
var a = r(271383),
    o = r(430824),
    s = r(700785);
let l = function (e, n) {
    let [r, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.Z, a.ZP];
    if (null == e || null == n) return null;
    let l = r.getGuild(e);
    if (null == l) return null;
    let u = i.getMember(l.id, n);
    return null == u ? null : s.Hu(l, u);
};
