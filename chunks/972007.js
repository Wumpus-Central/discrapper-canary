(i.d(t, { i: () => u }), i(321073));
var s = i(582128),
    n = i(284009),
    a = i.n(n),
    r = i(17928),
    l = i(803306),
    c = i(326084),
    o = i(851746);
function u(e) {
    let { searchQuery: t, selectedUsers: i, limit: n } = e,
        u = (0, r.bG)([o.A], () => o.A.getRecipientStatus()),
        d = (0, r.bG)([o.A], () => o.A.getReferralsRemaining()),
        [f, A] = s.useState(0),
        [m, g] = s.useState([]),
        [h, R] = s.useState(!1),
        [p, S] = s.useState(!1),
        [E, x] = s.useState(new Map());
    async function C(e, s) {
        if (!h && !p && null != e && 0 !== d)
            try {
                R(!0);
                let n = [...E.values()];
                for (let [e, t] of u)
                    if (t === c.aK.PENDING && !E.has(e)) {
                        let t = await (0, l.wz)(e);
                        n.push(t);
                    }
                let a = await (0, c.P7)(e, t, s);
                (g((t) => {
                    n = n.filter((e) => !i.has(e.id));
                    let s = new Set(n.map((e) => e.id)),
                        r = a.users.filter((e) => !i.has(e.id) && !s.has(e.id));
                    return 0 === e ? [...i.values(), ...n.values(), ...r] : [...t, ...r];
                }),
                    x((e) => {
                        let t = new Map(e);
                        for (let e of n) t.set(e.id, e);
                        return t;
                    }),
                    A(a.nextIndex));
            } catch (e) {
                S(!0);
            } finally {
                R(!1);
            }
    }
    a()(null != d, "Referrals remaining should not be null");
    let v = {
            limit: n,
            getNextRows: C,
            getLocalReferrals: async function () {
                let e = new Map();
                for (let [t, i] of u)
                    if (i === c.aK.PENDING && !E.has(t)) {
                        let i = await (0, l.wz)(t);
                        e.set(i.id, i);
                    }
                (x(e), g(Array.from(e.values())));
            },
        },
        M = s.useRef(v);
    return (
        s.useEffect(() => {
            M.current = v;
        }),
        s.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: i } = M.current;
            d > 0 ? e(0, t) : i();
        }, [t, d]),
        { eligibleUsers: m, fetchUsers: () => C(f, n), hasError: p, isFetching: h, resendUsers: E }
    );
}
