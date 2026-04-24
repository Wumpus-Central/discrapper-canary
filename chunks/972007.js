n.d(t, { i: () => d }), n(321073);
var a = n(64700),
    i = n(284009),
    r = n.n(i),
    s = n(17928),
    l = n(803306),
    c = n(326084),
    o = n(851746);
let d = (e) => {
    let { searchQuery: t, selectedUsers: n, limit: i } = e,
        d = (0, s.bG)([o.A], () => o.A.getRecipientStatus()),
        u = (0, s.bG)([o.A], () => o.A.getReferralsRemaining()),
        [_, m] = a.useState(0),
        [p, f] = a.useState([]),
        [A, g] = a.useState(!1),
        [h, x] = a.useState(!1),
        [b, C] = a.useState(new Map());
    r()(null != u, "Referrals remaining should not be null");
    let N = async (e, a) => {
            if (!A && !h && null != e && 0 !== u)
                try {
                    g(!0);
                    let i = [...b.values()];
                    for (let [e, t] of d)
                        if (t === c.aK.PENDING && !b.has(e)) {
                            let t = await (0, l.wz)(e);
                            i.push(t);
                        }
                    let r = await (0, c.P7)(e, t, a);
                    f((t) => {
                        i = i.filter((e) => !n.has(e.id));
                        let a = new Set(i.map((e) => e.id)),
                            s = r.users.filter((e) => !n.has(e.id) && !a.has(e.id));
                        return 0 === e ? [...n.values(), ...i.values(), ...s] : [...t, ...s];
                    }),
                        C((e) => {
                            let t = new Map(e);
                            for (let e of i) t.set(e.id, e);
                            return t;
                        }),
                        m(r.nextIndex);
                } catch (e) {
                    x(!0);
                } finally {
                    g(!1);
                }
        },
        E = {
            limit: i,
            getNextRows: N,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, n] of d)
                    if (n === c.aK.PENDING && !b.has(t)) {
                        let n = await (0, l.wz)(t);
                        e.set(n.id, n);
                    }
                C(e), f(Array.from(e.values()));
            },
        },
        R = a.useRef(E);
    return (
        a.useEffect(() => {
            R.current = E;
        }),
        a.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: n } = R.current;
            u > 0 ? e(0, t) : n();
        }, [t, u]),
        { eligibleUsers: p, fetchUsers: () => N(_, i), hasError: h, isFetching: A, resendUsers: b }
    );
};
