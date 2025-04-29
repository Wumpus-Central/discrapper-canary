r.d(t, { q: () => d }), r(388685), r(539854);
var a = r(73800),
    i = r(512722),
    s = r.n(i),
    n = r(442837),
    l = r(232567),
    o = r(281494),
    C = r(276444);
let d = (e) => {
    let { searchQuery: t, selectedUsers: r, limit: i } = e,
        d = (0, n.e7)([C.Z], () => C.Z.getRecipientStatus()),
        c = (0, n.e7)([C.Z], () => C.Z.getReferralsRemaining()),
        [x, f] = a.useState(0),
        [p, u] = a.useState([]),
        [h, m] = a.useState(!1),
        [j, _] = a.useState(!1),
        [g, L] = a.useState(new Map());
    s()(null != c, 'Referrals remaining should not be null');
    let y = async (e, a) => {
            if (!h && !j && null != e && 0 !== c)
                try {
                    m(!0);
                    let i = [...g.values()];
                    for (let [e, t] of d)
                        if (t === o.Fe.PENDING && !g.has(e)) {
                            let t = await (0, l.PR)(e);
                            i.push(t);
                        }
                    let s = await (0, o.iF)(e, t, a);
                    u((t) => {
                        let a = s.users.filter((e) => !r.has(e.id));
                        return ((i = i.filter((e) => !r.has(e.id))), 0 === e) ? [...r.values(), ...i.values(), ...a] : [...t, ...a];
                    }),
                        L((e) => {
                            let t = new Map(e);
                            for (let e of i) t.set(e.id, e);
                            return t;
                        }),
                        f(s.nextIndex);
                } catch (e) {
                    _(!0);
                } finally {
                    m(!1);
                }
        },
        v = {
            limit: i,
            getNextRows: y,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, r] of d)
                    if (r === o.Fe.PENDING && !g.has(t)) {
                        let r = await (0, l.PR)(t);
                        e.set(r.id, r);
                    }
                L(e), u(Array.from(e.values()));
            }
        },
        S = a.useRef(v);
    return (
        a.useEffect(() => {
            S.current = v;
        }),
        a.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: r } = S.current;
            c > 0 ? e(0, t) : r();
        }, [t, c]),
        {
            eligibleUsers: p,
            fetchUsers: () => y(x, i),
            hasError: j,
            isFetching: h,
            resendUsers: g
        }
    );
};
