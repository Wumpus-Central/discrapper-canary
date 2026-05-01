i.d(t, { i: () => o }), i(321073);
var s = i(64700),
    a = i(284009),
    n = i.n(a),
    r = i(17928),
    l = i(803306),
    c = i(326084),
    d = i(851746);
let o = (e) => {
    let { searchQuery: t, selectedUsers: i, limit: a } = e,
        o = (0, r.bG)([d.A], () => d.A.getRecipientStatus()),
        u = (0, r.bG)([d.A], () => d.A.getReferralsRemaining()),
        [m, A] = s.useState(0),
        [p, g] = s.useState([]),
        [x, N] = s.useState(!1),
        [E, h] = s.useState(!1),
        [f, R] = s.useState(new Map());
    n()(null != u, "Referrals remaining should not be null");
    let _ = async (e, s) => {
            if (!x && !E && null != e && 0 !== u)
                try {
                    N(!0);
                    let a = [...f.values()];
                    for (let [e, t] of o)
                        if (t === c.aK.PENDING && !f.has(e)) {
                            let t = await (0, l.wz)(e);
                            a.push(t);
                        }
                    let n = await (0, c.P7)(e, t, s);
                    g((t) => {
                        a = a.filter((e) => !i.has(e.id));
                        let s = new Set(a.map((e) => e.id)),
                            r = n.users.filter((e) => !i.has(e.id) && !s.has(e.id));
                        return 0 === e ? [...i.values(), ...a.values(), ...r] : [...t, ...r];
                    }),
                        R((e) => {
                            let t = new Map(e);
                            for (let e of a) t.set(e.id, e);
                            return t;
                        }),
                        A(n.nextIndex);
                } catch (e) {
                    h(!0);
                } finally {
                    N(!1);
                }
        },
        C = {
            limit: a,
            getNextRows: _,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, i] of o)
                    if (i === c.aK.PENDING && !f.has(t)) {
                        let i = await (0, l.wz)(t);
                        e.set(i.id, i);
                    }
                R(e), g(Array.from(e.values()));
            },
        },
        I = s.useRef(C);
    return (
        s.useEffect(() => {
            I.current = C;
        }),
        s.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: i } = I.current;
            u > 0 ? e(0, t) : i();
        }, [t, u]),
        { eligibleUsers: p, fetchUsers: () => _(m, a), hasError: E, isFetching: x, resendUsers: f }
    );
};
