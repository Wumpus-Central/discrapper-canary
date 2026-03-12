n.d(t, { i: () => d }), n(321073);
var i = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(311907),
    s = n(803306),
    o = n(326084),
    c = n(851746);
let d = (e) => {
    let { searchQuery: t, selectedUsers: n, limit: l } = e,
        d = (0, r.bG)([c.A], () => c.A.getRecipientStatus()),
        u = (0, r.bG)([c.A], () => c.A.getReferralsRemaining()),
        [_, m] = i.useState(0),
        [A, E] = i.useState([]),
        [I, T] = i.useState(!1),
        [f, C] = i.useState(!1),
        [N, g] = i.useState(new Map());
    a()(null != u, "Referrals remaining should not be null");
    let h = async (e, i) => {
            if (!I && !f && null != e && 0 !== u)
                try {
                    T(!0);
                    let l = [...N.values()];
                    for (let [e, t] of d)
                        if (t === o.aK.PENDING && !N.has(e)) {
                            let t = await (0, s.wz)(e);
                            l.push(t);
                        }
                    let a = await (0, o.P7)(e, t, i);
                    E((t) => {
                        l = l.filter((e) => !n.has(e.id));
                        let i = new Set(l.map((e) => e.id)),
                            r = a.users.filter((e) => !n.has(e.id) && !i.has(e.id));
                        return 0 === e ? [...n.values(), ...l.values(), ...r] : [...t, ...r];
                    }),
                        g((e) => {
                            let t = new Map(e);
                            for (let e of l) t.set(e.id, e);
                            return t;
                        }),
                        m(a.nextIndex);
                } catch (e) {
                    C(!0);
                } finally {
                    T(!1);
                }
        },
        p = {
            limit: l,
            getNextRows: h,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, n] of d)
                    if (n === o.aK.PENDING && !N.has(t)) {
                        let n = await (0, s.wz)(t);
                        e.set(n.id, n);
                    }
                g(e), E(Array.from(e.values()));
            },
        },
        S = i.useRef(p);
    return (
        i.useEffect(() => {
            S.current = p;
        }),
        i.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: n } = S.current;
            u > 0 ? e(0, t) : n();
        }, [t, u]),
        { eligibleUsers: A, fetchUsers: () => h(_, l), hasError: f, isFetching: I, resendUsers: N }
    );
};
