i.d(u, { A: () => r });
var e = i(17928),
    n = i(212455),
    d = i(71393);
function r() {
    return (0, e.yK)([n.A, d.A], () =>
        (function () {
            let [t, u] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [n.A, d.A],
                i = t.computeGuildIds(),
                e = u.getGuilds();
            return i.filter((t) => null == e[t]);
        })([n.A, d.A]),
    );
}
