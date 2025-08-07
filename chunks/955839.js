s.d(t, { q: () => o }), s(388685), s(539854);
var r = s(73800),
    n = s(512722),
    a = s.n(n),
    i = s(442837),
    l = s(232567),
    c = s(281494),
    d = s(276444);
let o = (e) => {
    let { searchQuery: t, selectedUsers: s, limit: n } = e,
        o = (0, i.e7)([d.Z], () => d.Z.getRecipientStatus()),
        u = (0, i.e7)([d.Z], () => d.Z.getReferralsRemaining()),
        [h, m] = r.useState(0),
        [f, x] = r.useState([]),
        [g, j] = r.useState(!1),
        [p, v] = r.useState(!1),
        [N, S] = r.useState(new Map());
    a()(null != u, "Referrals remaining should not be null");
    let b = async (e, r) => {
            if (!g && !p && null != e && 0 !== u)
                try {
                    j(!0);
                    let n = [...N.values()];
                    for (let [e, t] of o)
                        if (t === c.Fe.PENDING && !N.has(e)) {
                            let t = await (0, l.PR)(e);
                            n.push(t);
                        }
                    let a = await (0, c.iF)(e, t, r);
                    x((t) => {
                        let r = a.users.filter((e) => !s.has(e.id));
                        return ((n = n.filter((e) => !s.has(e.id))), 0 === e)
                            ? [...s.values(), ...n.values(), ...r]
                            : [...t, ...r];
                    }),
                        S((e) => {
                            let t = new Map(e);
                            for (let e of n) t.set(e.id, e);
                            return t;
                        }),
                        m(a.nextIndex);
                } catch (e) {
                    v(!0);
                } finally {
                    j(!1);
                }
        },
        w = {
            limit: n,
            getNextRows: b,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, s] of o)
                    if (s === c.Fe.PENDING && !N.has(t)) {
                        let s = await (0, l.PR)(t);
                        e.set(s.id, s);
                    }
                S(e), x(Array.from(e.values()));
            },
        },
        Z = r.useRef(w);
    return (
        r.useEffect(() => {
            Z.current = w;
        }),
        r.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: s } = Z.current;
            u > 0 ? e(0, t) : s();
        }, [t, u]),
        {
            eligibleUsers: f,
            fetchUsers: () => b(h, n),
            hasError: p,
            isFetching: g,
            resendUsers: N,
        }
    );
};
