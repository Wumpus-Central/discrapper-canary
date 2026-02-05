n.d(t, { i: () => c }), n(321073);
var i = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(311907),
    s = n(803306),
    o = n(326084),
    d = n(851746);
let c = (e) => {
    let { searchQuery: t, selectedUsers: n, limit: l } = e,
        c = (0, r.bG)([d.A], () => d.A.getRecipientStatus()),
        u = (0, r.bG)([d.A], () => d.A.getReferralsRemaining()),
        [m, _] = i.useState(0),
        [h, p] = i.useState([]),
        [g, A] = i.useState(!1),
        [f, x] = i.useState(!1),
        [E, C] = i.useState(new Map());
    a()(null != u, "Referrals remaining should not be null");
    let I = async (e, i) => {
            if (!g && !f && null != e && 0 !== u)
                try {
                    A(!0);
                    let l = [...E.values()];
                    for (let [e, t] of c)
                        if (t === o.aK.PENDING && !E.has(e)) {
                            let t = await (0, s.wz)(e);
                            l.push(t);
                        }
                    let a = await (0, o.P7)(e, t, i);
                    p((t) => {
                        let i = a.users.filter((e) => !n.has(e.id));
                        return ((l = l.filter((e) => !n.has(e.id))), 0 === e)
                            ? [...n.values(), ...l.values(), ...i]
                            : [...t, ...i];
                    }),
                        C((e) => {
                            let t = new Map(e);
                            for (let e of l) t.set(e.id, e);
                            return t;
                        }),
                        _(a.nextIndex);
                } catch (e) {
                    x(!0);
                } finally {
                    A(!1);
                }
        },
        T = {
            limit: l,
            getNextRows: I,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, n] of c)
                    if (n === o.aK.PENDING && !E.has(t)) {
                        let n = await (0, s.wz)(t);
                        e.set(n.id, n);
                    }
                C(e), p(Array.from(e.values()));
            },
        },
        v = i.useRef(T);
    return (
        i.useEffect(() => {
            v.current = T;
        }),
        i.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: n } = v.current;
            u > 0 ? e(0, t) : n();
        }, [t, u]),
        { eligibleUsers: h, fetchUsers: () => I(m, l), hasError: f, isFetching: g, resendUsers: E }
    );
};
