l.d(t, { A: () => a });
var i = l(311907),
    n = l(212455),
    s = l(71393);
function a() {
    return (0, i.yK)([n.A, s.A], () =>
        (function () {
            let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [n.A, s.A],
                l = e.computeGuildIds(),
                i = t.getGuilds();
            return l.filter((e) => null == i[e]);
        })([n.A, s.A]),
    );
}
