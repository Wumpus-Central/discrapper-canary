n.d(t, { q: () => u }), n(388685), n(539854);
var r = n(473749),
    i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(232567),
    l = n(281494),
    c = n(276444);
let u = (e) => {
    let { searchQuery: t, selectedUsers: n, limit: i } = e,
        u = (0, o.e7)([c.Z], () => c.Z.getRecipientStatus()),
        d = (0, o.e7)([c.Z], () => c.Z.getReferralsRemaining()),
        [f, _] = r.useState(0),
        [p, h] = r.useState([]),
        [m, g] = r.useState(!1),
        [E, b] = r.useState(!1),
        [y, O] = r.useState(new Map());
    a()(null != d, "Referrals remaining should not be null");
    let v = async (e, r) => {
            if (!m && !E && null != e && 0 !== d)
                try {
                    g(!0);
                    let i = [...y.values()];
                    for (let [e, t] of u)
                        if (t === l.Fe.PENDING && !y.has(e)) {
                            let t = await (0, s.PR)(e);
                            i.push(t);
                        }
                    let a = await (0, l.iF)(e, t, r);
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
                        _(a.nextIndex);
                } catch (e) {
                    b(!0);
                } finally {
                    g(!1);
                }
        },
        I = {
            limit: i,
            getNextRows: v,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, n] of u)
                    if (n === l.Fe.PENDING && !y.has(t)) {
                        let n = await (0, s.PR)(t);
                        e.set(n.id, n);
                    }
                O(e), h(Array.from(e.values()));
            },
        },
        T = r.useRef(I);
    return (
        r.useEffect(() => {
            T.current = I;
        }),
        r.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: n } = T.current;
            d > 0 ? e(0, t) : n();
        }, [t, d]),
        {
            eligibleUsers: p,
            fetchUsers: () => v(f, i),
            hasError: E,
            isFetching: m,
            resendUsers: y,
        }
    );
};
