n.d(t, { H: () => s }), n(47120), n(442837);
var i = n(271383),
    r = n(430824),
    a = n(700785);
let s = function (e, t) {
    let [n, s] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.Z, i.ZP];
    if (null == e || null == t) return null;
    let o = n.getGuild(e);
    if (null == o) return null;
    let l = s.getMember(o.id, t);
    return null == l ? null : a.Hu(o, l);
};
