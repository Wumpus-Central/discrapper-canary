n.d(t, { i: () => d }), n(321073);
var i = n(64700),
    l = n(284009),
    r = n.n(l),
    s = n(17928),
    a = n(803306),
    c = n(326084),
    o = n(851746);
let d = (e) => {
    let { searchQuery: t, selectedUsers: n, limit: l } = e,
        d = (0, s.bG)([o.A], () => o.A.getRecipientStatus()),
        u = (0, s.bG)([o.A], () => o.A.getReferralsRemaining()),
        [E, A] = i.useState(0),
        [_, T] = i.useState([]),
        [I, N] = i.useState(!1),
        [R, m] = i.useState(!1),
        [C, p] = i.useState(new Map());
    r()(null != u, "Referrals remaining should not be null");
    let S = async (e, i) => {
            if (!I && !R && null != e && 0 !== u)
                try {
                    N(!0);
                    let l = [...C.values()];
                    for (let [e, t] of d)
                        if (t === c.aK.PENDING && !C.has(e)) {
                            let t = await (0, a.wz)(e);
                            l.push(t);
                        }
                    let r = await (0, c.P7)(e, t, i);
                    T((t) => {
                        l = l.filter((e) => !n.has(e.id));
                        let i = new Set(l.map((e) => e.id)),
                            s = r.users.filter((e) => !n.has(e.id) && !i.has(e.id));
                        return 0 === e ? [...n.values(), ...l.values(), ...s] : [...t, ...s];
                    }),
                        p((e) => {
                            let t = new Map(e);
                            for (let e of l) t.set(e.id, e);
                            return t;
                        }),
                        A(r.nextIndex);
                } catch (e) {
                    m(!0);
                } finally {
                    N(!1);
                }
        },
        O = {
            limit: l,
            getNextRows: S,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, n] of d)
                    if (n === c.aK.PENDING && !C.has(t)) {
                        let n = await (0, a.wz)(t);
                        e.set(n.id, n);
                    }
                p(e), T(Array.from(e.values()));
            },
        },
        g = i.useRef(O);
    return (
        i.useEffect(() => {
            g.current = O;
        }),
        i.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: n } = g.current;
            u > 0 ? e(0, t) : n();
        }, [t, u]),
        { eligibleUsers: _, fetchUsers: () => S(E, l), hasError: R, isFetching: I, resendUsers: C }
    );
};
