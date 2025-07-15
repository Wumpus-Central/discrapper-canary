(r.d(t, { q: () => C }), r(388685), r(539854));
var a = r(73800),
    s = r(512722),
    i = r.n(s),
    n = r(442837),
    l = r(232567),
    o = r(281494),
    d = r(276444);
let C = (e) => {
    let { searchQuery: t, selectedUsers: r, limit: s } = e,
        C = (0, n.e7)([d.Z], () => d.Z.getRecipientStatus()),
        c = (0, n.e7)([d.Z], () => d.Z.getReferralsRemaining()),
        [u, p] = a.useState(0),
        [h, f] = a.useState([]),
        [x, g] = a.useState(!1),
        [m, _] = a.useState(!1),
        [j, y] = a.useState(new Map());
    i()(null != c, 'Referrals remaining should not be null');
    let L = async (e, a) => {
            if (!x && !m && null != e && 0 !== c)
                try {
                    g(!0);
                    let s = [...j.values()];
                    for (let [e, t] of C)
                        if (t === o.Fe.PENDING && !j.has(e)) {
                            let t = await (0, l.PR)(e);
                            s.push(t);
                        }
                    let i = await (0, o.iF)(e, t, a);
                    (f((t) => {
                        let a = i.users.filter((e) => !r.has(e.id));
                        return ((s = s.filter((e) => !r.has(e.id))), 0 === e) ? [...r.values(), ...s.values(), ...a] : [...t, ...a];
                    }),
                        y((e) => {
                            let t = new Map(e);
                            for (let e of s) t.set(e.id, e);
                            return t;
                        }),
                        p(i.nextIndex));
                } catch (e) {
                    _(!0);
                } finally {
                    g(!1);
                }
        },
        v = {
            limit: s,
            getNextRows: L,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, r] of C)
                    if (r === o.Fe.PENDING && !j.has(t)) {
                        let r = await (0, l.PR)(t);
                        e.set(r.id, r);
                    }
                (y(e), f(Array.from(e.values())));
            }
        },
        b = a.useRef(v);
    return (
        a.useEffect(() => {
            b.current = v;
        }),
        a.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: r } = b.current;
            c > 0 ? e(0, t) : r();
        }, [t, c]),
        {
            eligibleUsers: h,
            fetchUsers: () => L(u, s),
            hasError: m,
            isFetching: x,
            resendUsers: j
        }
    );
};
