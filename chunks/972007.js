a.d(t, { i: () => d }), a(321073);
var s = a(64700),
    i = a(284009),
    n = a.n(i),
    r = a(17928),
    l = a(803306),
    c = a(326084),
    o = a(851746);
let d = (e) => {
    let { searchQuery: t, selectedUsers: a, limit: i } = e,
        d = (0, r.bG)([o.A], () => o.A.getRecipientStatus()),
        u = (0, r.bG)([o.A], () => o.A.getReferralsRemaining()),
        [m, A] = s.useState(0),
        [N, g] = s.useState([]),
        [p, x] = s.useState(!1),
        [E, h] = s.useState(!1),
        [f, C] = s.useState(new Map());
    n()(null != u, "Referrals remaining should not be null");
    let R = async (e, s) => {
            if (!p && !E && null != e && 0 !== u)
                try {
                    x(!0);
                    let i = [...f.values()];
                    for (let [e, t] of d)
                        if (t === c.aK.PENDING && !f.has(e)) {
                            let t = await (0, l.wz)(e);
                            i.push(t);
                        }
                    let n = await (0, c.P7)(e, t, s);
                    g((t) => {
                        i = i.filter((e) => !a.has(e.id));
                        let s = new Set(i.map((e) => e.id)),
                            r = n.users.filter((e) => !a.has(e.id) && !s.has(e.id));
                        return 0 === e ? [...a.values(), ...i.values(), ...r] : [...t, ...r];
                    }),
                        C((e) => {
                            let t = new Map(e);
                            for (let e of i) t.set(e.id, e);
                            return t;
                        }),
                        A(n.nextIndex);
                } catch (e) {
                    h(!0);
                } finally {
                    x(!1);
                }
        },
        _ = {
            limit: i,
            getNextRows: R,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, a] of d)
                    if (a === c.aK.PENDING && !f.has(t)) {
                        let a = await (0, l.wz)(t);
                        e.set(a.id, a);
                    }
                C(e), g(Array.from(e.values()));
            },
        },
        I = s.useRef(_);
    return (
        s.useEffect(() => {
            I.current = _;
        }),
        s.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: a } = I.current;
            u > 0 ? e(0, t) : a();
        }, [t, u]),
        { eligibleUsers: N, fetchUsers: () => R(m, i), hasError: E, isFetching: p, resendUsers: f }
    );
};
