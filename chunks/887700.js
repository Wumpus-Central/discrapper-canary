"use strict";
n.d(t, { A: () => u }), n(321073);
var r = n(64700),
    i = n(311907),
    a = n(10716),
    s = n(249350),
    o = n(685954),
    l = n(81790);
function u(e) {
    let { guildId: t, enableFilter: n = !1 } = e,
        { filter: u } = (0, i.cf)([a.A], () => ({ filter: a.A.getFilter() })),
        c = (0, s.n)(t),
        d = (0, o.A)(c),
        _ = (0, l.t)();
    return r.useMemo(() => {
        function e(e) {
            return !!(!n || "" === u || e.application.name.toLowerCase().includes(u.toLowerCase()));
        }
        let t = [..._].filter(e),
            r = new Set(t.map((e) => e.application.id));
        for (let n of d) !r.has(n.application.id) && e(n) && t.push(n);
        return t;
    }, [_, n, u, d]);
}
