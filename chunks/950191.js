n.d(t, {
    AP: () => u,
    Ay: () => l,
}),
    n(896048),
    n(64700);
var r = n(311907),
    i = n(287809),
    a = n(583613),
    s = n(204369),
    o = n(622543);
function l(e, t) {
    return (0, r.bG)([i.default, o.A], () => (null == e ? null : u(e, t, [i.default, o.A])));
}
n(576622);
let c = (0, a.L_)((e, t) => new s.A(e, t));
function u(e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.default, o.A];
    if (null === e) return null;
    let a = n.getUser(e),
        s = r.getUserProfile(e),
        l = r.getGuildMemberProfile(e, t);
    return null == a || null == s ? null : c(s, l);
}
