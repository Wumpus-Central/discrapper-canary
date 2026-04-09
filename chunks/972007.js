s.d(t, { i: () => d }), s(321073);
var i = s(64700),
    a = s(284009),
    n = s.n(a),
    l = s(311907),
    r = s(803306),
    c = s(326084),
    o = s(851746);
let d = (e) => {
    let { searchQuery: t, selectedUsers: s, limit: a } = e,
        d = (0, l.bG)([o.A], () => o.A.getRecipientStatus()),
        u = (0, l.bG)([o.A], () => o.A.getReferralsRemaining()),
        [A, m] = i.useState(0),
        [h, R] = i.useState([]),
        [f, g] = i.useState(!1),
        [x, E] = i.useState(!1),
        [p, _] = i.useState(new Map());
    n()(null != u, "Referrals remaining should not be null");
    let S = async (e, i) => {
            if (!f && !x && null != e && 0 !== u)
                try {
                    g(!0);
                    let a = [...p.values()];
                    for (let [e, t] of d)
                        if (t === c.aK.PENDING && !p.has(e)) {
                            let t = await (0, r.wz)(e);
                            a.push(t);
                        }
                    let n = await (0, c.P7)(e, t, i);
                    R((t) => {
                        a = a.filter((e) => !s.has(e.id));
                        let i = new Set(a.map((e) => e.id)),
                            l = n.users.filter((e) => !s.has(e.id) && !i.has(e.id));
                        return 0 === e ? [...s.values(), ...a.values(), ...l] : [...t, ...l];
                    }),
                        _((e) => {
                            let t = new Map(e);
                            for (let e of a) t.set(e.id, e);
                            return t;
                        }),
                        m(n.nextIndex);
                } catch (e) {
                    E(!0);
                } finally {
                    g(!1);
                }
        },
        T = {
            limit: a,
            getNextRows: S,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, s] of d)
                    if (s === c.aK.PENDING && !p.has(t)) {
                        let s = await (0, r.wz)(t);
                        e.set(s.id, s);
                    }
                _(e), R(Array.from(e.values()));
            },
        },
        j = i.useRef(T);
    return (
        i.useEffect(() => {
            j.current = T;
        }),
        i.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: s } = j.current;
            u > 0 ? e(0, t) : s();
        }, [t, u]),
        { eligibleUsers: h, fetchUsers: () => S(A, a), hasError: x, isFetching: f, resendUsers: p }
    );
};
