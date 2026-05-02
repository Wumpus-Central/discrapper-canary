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
        [N, x] = s.useState(!1),
        [E, h] = s.useState(!1),
        [f, _] = s.useState(new Map());
    n()(null != u, "Referrals remaining should not be null");
    let R = async (e, s) => {
            if (!N && !E && null != e && 0 !== u)
                try {
                    x(!0);
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
                        _((e) => {
                            let t = new Map(e);
                            for (let e of a) t.set(e.id, e);
                            return t;
                        }),
                        A(n.nextIndex);
                } catch (e) {
                    h(!0);
                } finally {
                    x(!1);
                }
        },
        C = {
            limit: a,
            getNextRows: R,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, i] of o)
                    if (i === c.aK.PENDING && !f.has(t)) {
                        let i = await (0, l.wz)(t);
                        e.set(i.id, i);
                    }
                _(e), g(Array.from(e.values()));
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
        { eligibleUsers: p, fetchUsers: () => R(m, a), hasError: E, isFetching: N, resendUsers: f }
    );
};
