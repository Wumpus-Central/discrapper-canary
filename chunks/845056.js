"use strict";
n.d(t, { mM: () => h, me: () => A }), n(321073);
var i = n(311907),
    s = n(961350),
    l = n(290863),
    a = n(461213),
    r = n(403362),
    o = n(833349),
    c = n(765379),
    d = n(652215);
let u = (e) =>
    ([d.$pd.PLAYING, d.$pd.WATCHING].includes(e.type) &&
        [e.name, e.application_id, e.assets, e.state, e.details, e.party].some((e) => null != e)) ||
    e.type === d.$pd.LISTENING;
function h(e) {
    let t = e?.filter(r.Vq) ?? [];
    return (0, i.bG)(
        [a.A, l.A, s.default],
        () => {
            let e = {};
            return (
                t.forEach((t) => {
                    let n = t.user.id === s.default.getId() ? a.A.findActivity(u, !0) : l.A.findActivity(t.user.id, u);
                    if (null != n && !(0, c.A)(n)) {
                        let i = `${n.application_id ?? ""}:${n.party?.id ?? t.user.id}`,
                            s = e[i] ?? { members: [], activity: n };
                        s.members.push(t), (0, o.A)(s.activity, d.jUm.JOIN) || (s.activity = n), (e[i] = s);
                    }
                }),
                Object.values(e)
            );
        },
        [t],
        i.My,
    );
}
function A(e, t) {
    return (0, i.bG)(
        [a.A, l.A, s.default],
        () => {
            let n = (e.id === s.default.getId() ? a.A.getActivities() : l.A.getActivities(e.id))
                    .filter(u)
                    .filter(
                        (e) =>
                            !(0, c.A)(e) &&
                            (null == t ||
                                ((null == t.application_id || e.application_id !== t.application_id) &&
                                    (null == t.name || e.name !== t.name))),
                    ),
                i = new Map();
            for (let e of n) {
                let t = e.application_id ?? e.name;
                null == t || i.has(t) || i.set(t, e);
            }
            return Array.from(i.values());
        },
        [e.id, t],
        i.My,
    );
}
