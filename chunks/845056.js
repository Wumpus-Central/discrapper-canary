"use strict";
n.d(t, { mM: () => A, me: () => m }), n(321073);
var i = n(311907),
    s = n(52133),
    l = n(961350),
    r = n(290863),
    a = n(461213),
    o = n(833349),
    c = n(765379),
    d = n(652215);
let u = (e) =>
    ([d.$pd.PLAYING, d.$pd.WATCHING].includes(e.type) &&
        [e.name, e.application_id, e.assets, e.state, e.details, e.party].some((e) => null != e)) ||
    e.type === d.$pd.LISTENING;
function h(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++)
        if (e[n].activity !== t[n].activity || !(0, s.v)(e[n].members, t[n].members)) return !1;
    return !0;
}
function A(e) {
    return (0, i.bG)(
        [a.A, r.A, l.default],
        () => {
            let t = {};
            for (let n of e ?? []) {
                if (null == n) continue;
                let e = n.user.id === l.default.getId() ? a.A.findActivity(u, !0) : r.A.findActivity(n.user.id, u);
                if (null != e && !(0, c.A)(e)) {
                    let i = `${e.application_id ?? ""}:${e.party?.id ?? n.user.id}`,
                        s = t[i] ?? { members: [], activity: e };
                    s.members.push(n), (0, o.A)(s.activity, d.jUm.JOIN) || (s.activity = e), (t[i] = s);
                }
            }
            return Object.values(t);
        },
        [e],
        h,
    );
}
function m(e, t) {
    return (0, i.yK)([a.A, r.A, l.default], () => {
        let n = e.id === l.default.getId() ? a.A.getActivities() : r.A.getActivities(e.id),
            i = new Map();
        for (let e of n) {
            if (
                !u(e) ||
                (0, c.A)(e) ||
                (null != t &&
                    ((null != t.application_id && e.application_id === t.application_id) ||
                        (null != t.name && e.name === t.name)))
            )
                continue;
            let n = e.application_id ?? e.name;
            null == n || i.has(n) || i.set(n, e);
        }
        return Array.from(i.values());
    }, [e.id, t]);
}
