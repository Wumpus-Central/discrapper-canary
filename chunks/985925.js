l.d(t, { q: () => _, r: () => a });
var n = l(136722),
    r = l(17928),
    u = l(71393),
    E = l(287809),
    d = l(488926),
    i = l(402655);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.A, E.default];
    if (null == e) return !1;
    let [l, r] = t,
        a = l.getGuild(e);
    if (null == a) return !1;
    let _ = r.getCurrentUser();
    return n.X8(d.cc({ user: _, context: a, checkElevated: !1 }), i.M);
}
function _(e) {
    return (0, r.bG)([u.A, E.default], () => a(e, [u.A, E.default]), [e]);
}
