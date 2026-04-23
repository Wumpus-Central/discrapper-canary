n.d(t, { A: () => c }), n(321073);
var i = n(64700),
    l = n(311907),
    a = n(10716),
    s = n(249350),
    r = n(685954),
    o = n(81790);
function c(e) {
    let { guildId: t, enableFilter: n = !1 } = e,
        { filter: c } = (0, l.cf)([a.A], () => ({ filter: a.A.getFilter() })),
        d = (0, s.n)(t),
        u = (0, r.A)(d),
        m = (0, o.t)();
    return i.useMemo(() => {
        function e(e) {
            return !!(!n || "" === c || e.application.name.toLowerCase().includes(c.toLowerCase()));
        }
        let t = [...m].filter(e),
            i = new Set(t.map((e) => e.application.id));
        for (let n of u) !i.has(n.application.id) && e(n) && t.push(n);
        return t;
    }, [m, n, c, u]);
}
