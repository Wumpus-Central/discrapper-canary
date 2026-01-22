n.d(t, {
    A: () => c,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(311907),
    a = n(10716),
    s = n(249350),
    o = n(685954),
    l = n(81790);

function c(e) {
    let { guildId: t, enableFilter: n = !1 } = e,
        { filter: c } = (0, i.cf)([a.A], () => ({
            filter: a.A.getFilter(),
        })),
        u = (0, s.n)(t),
        d = (0, o.A)(u),
        f = (0, l.t)();
    return r.useMemo(() => {
        function e(e) {
            return !!(!n || "" === c || e.application.name.toLowerCase().includes(c.toLowerCase()));
        }
        let t = [...f].filter(e),
            r = new Set(t.map((e) => e.application.id));
        for (let n of d) !r.has(n.application.id) && e(n) && t.push(n);
        return t;
    }, [f, n, c, d]);
}
