u.d(i, { A: () => l });
var r = u(17928),
    n = u(212455),
    e = u(71393);
function l() {
    return (0, r.yK)([n.A, e.A], () =>
        (function () {
            let [t, i] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [n.A, e.A],
                u = t.computeGuildIds(),
                r = i.getGuilds();
            return u.filter((t) => null == r[t]);
        })([n.A, e.A]),
    );
}
