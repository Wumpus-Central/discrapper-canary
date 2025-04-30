n.d(t, { H: () => o }), n(388685), n(442837);
var r = n(271383),
    i = n(430824),
    a = n(700785);
let o = function (e, t) {
    let [n, o] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z, r.ZP];
    if (null == e || null == t) return null;
    let s = n.getGuild(e);
    if (null == s) return null;
    let l = o.getMember(s.id, t);
    return null == l ? null : a.Hu(s, l);
};
