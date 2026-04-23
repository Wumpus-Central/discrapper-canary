"use strict";
n.d(t, { AP: () => c, Ay: () => l }), n(64700);
var r = n(311907),
    i = n(287809),
    s = n(583613),
    a = n(204369),
    o = n(622543);
function l(e, t) {
    return (0, r.bG)([i.default, o.A], () => (null == e ? null : c(e, t, [i.default, o.A])));
}
n(576622);
let u = (0, s.L_)((e, t) => new a.A(e, t));
function c(e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.default, o.A];
    if (null === e) return null;
    let s = n.getUser(e),
        a = r.getUserProfile(e),
        l = r.getGuildMemberProfile(e, t);
    return null == s || null == a ? null : u(a, l);
}
