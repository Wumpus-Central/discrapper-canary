n.d(t, { i: () => d }), n(321073);
var r = n(64700),
    a = n(284009),
    i = n.n(a),
    s = n(311907),
    l = n(803306),
    c = n(326084),
    o = n(851746);
let d = (e) => {
    let { searchQuery: t, selectedUsers: n, limit: a } = e,
        d = (0, s.bG)([o.A], () => o.A.getRecipientStatus()),
        u = (0, s.bG)([o.A], () => o.A.getReferralsRemaining()),
        [_, m] = r.useState(0),
        [p, f] = r.useState([]),
        [A, g] = r.useState(!1),
        [h, b] = r.useState(!1),
        [x, C] = r.useState(new Map());
    i()(null != u, "Referrals remaining should not be null");
    let v = async (e, r) => {
            if (!A && !h && null != e && 0 !== u)
                try {
                    g(!0);
                    let a = [...x.values()];
                    for (let [e, t] of d)
                        if (t === c.aK.PENDING && !x.has(e)) {
                            let t = await (0, l.wz)(e);
                            a.push(t);
                        }
                    let i = await (0, c.P7)(e, t, r);
                    f((t) => {
                        a = a.filter((e) => !n.has(e.id));
                        let r = new Set(a.map((e) => e.id)),
                            s = i.users.filter((e) => !n.has(e.id) && !r.has(e.id));
                        return 0 === e ? [...n.values(), ...a.values(), ...s] : [...t, ...s];
                    }),
                        C((e) => {
                            let t = new Map(e);
                            for (let e of a) t.set(e.id, e);
                            return t;
                        }),
                        m(i.nextIndex);
                } catch (e) {
                    b(!0);
                } finally {
                    g(!1);
                }
        },
        R = {
            limit: a,
            getNextRows: v,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, n] of d)
                    if (n === c.aK.PENDING && !x.has(t)) {
                        let n = await (0, l.wz)(t);
                        e.set(n.id, n);
                    }
                C(e), f(Array.from(e.values()));
            },
        },
        N = r.useRef(R);
    return (
        r.useEffect(() => {
            N.current = R;
        }),
        r.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: n } = N.current;
            u > 0 ? e(0, t) : n();
        }, [t, u]),
        { eligibleUsers: p, fetchUsers: () => v(_, a), hasError: h, isFetching: A, resendUsers: x }
    );
};
