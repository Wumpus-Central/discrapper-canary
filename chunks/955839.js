s.d(t, { q: () => o }), s(388685), s(539854);
var n = s(73800),
    r = s(512722),
    a = s.n(r),
    i = s(442837),
    l = s(232567),
    d = s(281494),
    c = s(276444);
let o = (e) => {
    let { searchQuery: t, selectedUsers: s, limit: r } = e,
        o = (0, i.e7)([c.Z], () => c.Z.getRecipientStatus()),
        u = (0, i.e7)([c.Z], () => c.Z.getReferralsRemaining()),
        [h, m] = n.useState(0),
        [f, x] = n.useState([]),
        [g, j] = n.useState(!1),
        [p, v] = n.useState(!1),
        [N, S] = n.useState(new Map());
    a()(null != u, "Referrals remaining should not be null");
    let b = async (e, n) => {
            if (!g && !p && null != e && 0 !== u)
                try {
                    j(!0);
                    let r = [...N.values()];
                    for (let [e, t] of o)
                        if (t === d.Fe.PENDING && !N.has(e)) {
                            let t = await (0, l.PR)(e);
                            r.push(t);
                        }
                    let a = await (0, d.iF)(e, t, n);
                    x((t) => {
                        let n = a.users.filter((e) => !s.has(e.id));
                        return ((r = r.filter((e) => !s.has(e.id))), 0 === e)
                            ? [...s.values(), ...r.values(), ...n]
                            : [...t, ...n];
                    }),
                        S((e) => {
                            let t = new Map(e);
                            for (let e of r) t.set(e.id, e);
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
            limit: r,
            getNextRows: b,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, s] of o)
                    if (s === d.Fe.PENDING && !N.has(t)) {
                        let s = await (0, l.PR)(t);
                        e.set(s.id, s);
                    }
                S(e), x(Array.from(e.values()));
            },
        },
        Z = n.useRef(w);
    return (
        n.useEffect(() => {
            Z.current = w;
        }),
        n.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: s } = Z.current;
            u > 0 ? e(0, t) : s();
        }, [t, u]),
        {
            eligibleUsers: f,
            fetchUsers: () => b(h, r),
            hasError: p,
            isFetching: g,
            resendUsers: N,
        }
    );
};
