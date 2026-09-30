(i.d(t, { i: () => c }), i(321073));
var s = i(582128),
    a = i(284009),
    n = i.n(a),
    r = i(17928),
    l = i(803306),
    u = i(326084),
    o = i(851746);
function c(e) {
    let { searchQuery: t, selectedUsers: i, limit: a } = e,
        c = (0, r.bG)([o.A], () => o.A.getRecipientStatus()),
        d = (0, r.bG)([o.A], () => o.A.getReferralsRemaining()),
        [f, h] = s.useState(0),
        [p, A] = s.useState([]),
        [g, R] = s.useState(!1),
        [S, m] = s.useState(!1),
        [E, w] = s.useState(new Map());
    async function y(e, s) {
        if (!g && !S && null != e && 0 !== d)
            try {
                R(!0);
                let a = [...E.values()];
                for (let [e, t] of c)
                    if (t === u.aK.PENDING && !E.has(e)) {
                        let t = await (0, l.wz)(e);
                        a.push(t);
                    }
                let n = await (0, u.P7)(e, t, s);
                (A((t) => {
                    a = a.filter((e) => !i.has(e.id));
                    let s = new Set(a.map((e) => e.id)),
                        r = n.users.filter((e) => !i.has(e.id) && !s.has(e.id));
                    return 0 === e ? [...i.values(), ...a.values(), ...r] : [...t, ...r];
                }),
                    w((e) => {
                        let t = new Map(e);
                        for (let e of a) t.set(e.id, e);
                        return t;
                    }),
                    h(n.nextIndex));
            } catch (e) {
                m(!0);
            } finally {
                R(!1);
            }
    }
    n()(null != d, "Referrals remaining should not be null");
    let C = {
            limit: a,
            getNextRows: y,
            getLocalReferrals: async function () {
                let e = new Map();
                for (let [t, i] of c)
                    if (i === u.aK.PENDING && !E.has(t)) {
                        let i = await (0, l.wz)(t);
                        e.set(i.id, i);
                    }
                (w(e), A(Array.from(e.values())));
            },
        },
        M = s.useRef(C);
    return (
        s.useEffect(() => {
            M.current = C;
        }),
        s.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: i } = M.current;
            d > 0 ? e(0, t) : i();
        }, [t, d]),
        { eligibleUsers: p, fetchUsers: () => y(f, a), hasError: S, isFetching: g, resendUsers: E }
    );
}
