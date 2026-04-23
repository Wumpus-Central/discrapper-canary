n.d(t, { l: () => l }), n(17928);
var i = n(696451),
    r = n(71393),
    a = n(488926);
let l = function (e, t) {
    let [n, l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.A, i.Ay];
    if (null == e || null == t) return null;
    let s = n.getGuild(e);
    if (null == s) return null;
    let o = l.getMember(s.id, t);
    return null == o ? null : a.li(s, o);
};
