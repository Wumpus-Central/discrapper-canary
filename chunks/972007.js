n.d(t, {
    i: () => u,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(311907),
    o = n(803306),
    l = n(326084),
    c = n(851746);
let u = (e) => {
    let { searchQuery: t, selectedUsers: n, limit: i } = e,
        u = (0, s.bG)([c.A], () => c.A.getRecipientStatus()),
        d = (0, s.bG)([c.A], () => c.A.getReferralsRemaining()),
        [f, p] = r.useState(0),
        [_, h] = r.useState([]),
        [m, g] = r.useState(!1),
        [E, b] = r.useState(!1),
        [y, O] = r.useState(new Map());
    a()(null != d, "Referrals remaining should not be null");
    let A = async (e, r) => {
            if (!m && !E && null != e && 0 !== d)
                try {
                    g(!0);
                    let i = [...y.values()];
                    for (let [e, t] of u)
                        if (t === l.aK.PENDING && !y.has(e)) {
                            let t = await (0, o.wz)(e);
                            i.push(t);
                        }
                    let a = await (0, l.P7)(e, t, r);
                    h((t) => {
                        let r = a.users.filter((e) => !n.has(e.id));
                        return ((i = i.filter((e) => !n.has(e.id))), 0 === e)
                            ? [...n.values(), ...i.values(), ...r]
                            : [...t, ...r];
                    }),
                        O((e) => {
                            let t = new Map(e);
                            for (let e of i) t.set(e.id, e);
                            return t;
                        }),
                        p(a.nextIndex);
                } catch (e) {
                    b(!0);
                } finally {
                    g(!1);
                }
        },
        v = {
            limit: i,
            getNextRows: A,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, n] of u)
                    if (n === l.aK.PENDING && !y.has(t)) {
                        let n = await (0, o.wz)(t);
                        e.set(n.id, n);
                    }
                O(e), h(Array.from(e.values()));
            },
        },
        S = r.useRef(v);
    return (
        r.useEffect(() => {
            S.current = v;
        }),
        r.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: n } = S.current;
            d > 0 ? e(0, t) : n();
        }, [t, d]),
        {
            eligibleUsers: _,
            fetchUsers: () => A(f, i),
            hasError: E,
            isFetching: m,
            resendUsers: y,
        }
    );
};
