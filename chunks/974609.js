n.d(t, { H: () => a }), n(47120), n(442837);
var r = n(271383),
    i = n(430824),
    o = n(700785);
let a = function (e, t) {
    let [n, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z, r.ZP];
    if (null == e || null == t) return null;
    let s = n.getGuild(e);
    if (null == s) return null;
    let l = a.getMember(s.id, t);
    return null == l ? null : o.Hu(s, l);
};
