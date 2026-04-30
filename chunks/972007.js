"use strict";
n.d(t, { i: () => c }), n(321073);
var i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(17928),
    o = n(803306),
    l = n(326084),
    u = n(851746);
let c = (e) => {
    let { searchQuery: t, selectedUsers: n, limit: r } = e,
        c = (0, a.bG)([u.A], () => u.A.getRecipientStatus()),
        d = (0, a.bG)([u.A], () => u.A.getReferralsRemaining()),
        [_, f] = i.useState(0),
        [h, p] = i.useState([]),
        [E, m] = i.useState(!1),
        [g, A] = i.useState(!1),
        [I, T] = i.useState(new Map());
    s()(null != d, "Referrals remaining should not be null");
    let S = async (e, i) => {
            if (!E && !g && null != e && 0 !== d)
                try {
                    m(!0);
                    let r = [...I.values()];
                    for (let [e, t] of c)
                        if (t === l.aK.PENDING && !I.has(e)) {
                            let t = await (0, o.wz)(e);
                            r.push(t);
                        }
                    let s = await (0, l.P7)(e, t, i);
                    p((t) => {
                        r = r.filter((e) => !n.has(e.id));
                        let i = new Set(r.map((e) => e.id)),
                            a = s.users.filter((e) => !n.has(e.id) && !i.has(e.id));
                        return 0 === e ? [...n.values(), ...r.values(), ...a] : [...t, ...a];
                    }),
                        T((e) => {
                            let t = new Map(e);
                            for (let e of r) t.set(e.id, e);
                            return t;
                        }),
                        f(s.nextIndex);
                } catch (e) {
                    A(!0);
                } finally {
                    m(!1);
                }
        },
        N = {
            limit: r,
            getNextRows: S,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, n] of c)
                    if (n === l.aK.PENDING && !I.has(t)) {
                        let n = await (0, o.wz)(t);
                        e.set(n.id, n);
                    }
                T(e), p(Array.from(e.values()));
            },
        },
        y = i.useRef(N);
    return (
        i.useEffect(() => {
            y.current = N;
        }),
        i.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: n } = y.current;
            d > 0 ? e(0, t) : n();
        }, [t, d]),
        { eligibleUsers: h, fetchUsers: () => S(_, r), hasError: g, isFetching: E, resendUsers: I }
    );
};
