n.d(t, { q: () => s, r: () => u });
var i = n(136722),
    l = n(17928),
    a = n(71393),
    r = n(287809),
    o = n(488926),
    d = n(402655);
let u = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, r.default];
    if (null == e) return !1;
    let [n, l] = t,
        u = n.getGuild(e);
    if (null == u) return !1;
    let s = l.getCurrentUser();
    return i.X8(o.cc({ user: s, context: u, checkElevated: !1 }), d.M);
};
function s(e) {
    return (0, l.bG)([a.A, r.default], () => u(e, [a.A, r.default]), [e]);
}
