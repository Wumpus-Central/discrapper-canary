n.d(t, { q: () => c, r: () => d });
var a = n(136722),
    i = n(17928),
    l = n(71393),
    r = n(287809),
    o = n(488926),
    s = n(402655);
let d = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.A, r.default];
    if (null == e) return !1;
    let [n, i] = t,
        d = n.getGuild(e);
    if (null == d) return !1;
    let c = i.getCurrentUser();
    return a.X8(o.cc({ user: c, context: d, checkElevated: !1 }), s.M);
};
function c(e) {
    return (0, i.bG)([l.A, r.default], () => d(e, [l.A, r.default]), [e]);
}
