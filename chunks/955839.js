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
        [f, p] = r.useState(0),
        [_, m] = r.useState([]),
        [h, g] = r.useState(!1),
        [E, b] = r.useState(!1),
        [y, O] = r.useState(new Map());
    a()(null != d, "Referrals remaining should not be null");
    let v = async (e, r) => {
            if (!h && !E && null != e && 0 !== d)
                try {
                    g(!0);
                    let i = [...y.values()];
                    for (let [e, t] of u)
                        if (t === l.Fe.PENDING && !y.has(e)) {
                            let t = await (0, s.PR)(e);
                            i.push(t);
                        }
                    let a = await (0, l.iF)(e, t, r);
                    m((t) => {
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
        S = {
            limit: i,
            getNextRows: v,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, n] of u)
                    if (n === l.Fe.PENDING && !y.has(t)) {
                        let n = await (0, s.PR)(t);
                        e.set(n.id, n);
                    }
                O(e), m(Array.from(e.values()));
            },
        },
        I = r.useRef(S);
    return (
        r.useEffect(() => {
            I.current = S;
        }),
        r.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: n } = I.current;
            d > 0 ? e(0, t) : n();
        }, [t, d]),
        {
            eligibleUsers: _,
            fetchUsers: () => v(f, i),
            hasError: E,
            isFetching: h,
            resendUsers: y,
        }
    );
};
