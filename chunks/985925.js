n.d(t, {
    q: () => u,
    r: () => c,
}),
    n(896048);
var r = n(136722),
    i = n(311907),
    a = n(71393),
    s = n(287809),
    o = n(488926),
    l = n(402655);
let c = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, s.default];
    if (null == e) return !1;
    let [n, i] = t,
        c = n.getGuild(e);
    if (null == c) return !1;
    let u = i.getCurrentUser();
    return r.X8(
        o.cc({
            user: u,
            context: c,
            checkElevated: !1,
        }),
        l.M,
    );
};

function u(e) {
    return (0, i.bG)([a.A, s.default], () => c(e, [a.A, s.default]), [e]);
}
