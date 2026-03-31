"use strict";
s.d(t, { i: () => o }), s(321073);
var r = s(64700),
    i = s(284009),
    n = s.n(i),
    a = s(311907),
    l = s(803306),
    u = s(326084),
    c = s(851746);
let o = (e) => {
    let { searchQuery: t, selectedUsers: s, limit: i } = e,
        o = (0, a.bG)([c.A], () => c.A.getRecipientStatus()),
        d = (0, a.bG)([c.A], () => c.A.getReferralsRemaining()),
        [E, _] = r.useState(0),
        [R, p] = r.useState([]),
        [I, S] = r.useState(!1),
        [h, f] = r.useState(!1),
        [g, M] = r.useState(new Map());
    n()(null != d, "Referrals remaining should not be null");
    let A = async (e, r) => {
            if (!I && !h && null != e && 0 !== d)
                try {
                    S(!0);
                    let i = [...g.values()];
                    for (let [e, t] of o)
                        if (t === u.aK.PENDING && !g.has(e)) {
                            let t = await (0, l.wz)(e);
                            i.push(t);
                        }
                    let n = await (0, u.P7)(e, t, r);
                    p((t) => {
                        i = i.filter((e) => !s.has(e.id));
                        let r = new Set(i.map((e) => e.id)),
                            a = n.users.filter((e) => !s.has(e.id) && !r.has(e.id));
                        return 0 === e ? [...s.values(), ...i.values(), ...a] : [...t, ...a];
                    }),
                        M((e) => {
                            let t = new Map(e);
                            for (let e of i) t.set(e.id, e);
                            return t;
                        }),
                        _(n.nextIndex);
                } catch (e) {
                    f(!0);
                } finally {
                    S(!1);
                }
        },
        m = {
            limit: i,
            getNextRows: A,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, s] of o)
                    if (s === u.aK.PENDING && !g.has(t)) {
                        let s = await (0, l.wz)(t);
                        e.set(s.id, s);
                    }
                M(e), p(Array.from(e.values()));
            },
        },
        P = r.useRef(m);
    return (
        r.useEffect(() => {
            P.current = m;
        }),
        r.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: s } = P.current;
            d > 0 ? e(0, t) : s();
        }, [t, d]),
        { eligibleUsers: R, fetchUsers: () => A(E, i), hasError: h, isFetching: I, resendUsers: g }
    );
};
