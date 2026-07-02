n.d(t, { i: () => d }), n(321073);
var i = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(17928),
    l = n(803306),
    c = n(326084),
    o = n(851746);
function d(e) {
    let { searchQuery: t, selectedUsers: n, limit: a } = e,
        d = (0, r.bG)([o.A], () => o.A.getRecipientStatus()),
        u = (0, r.bG)([o.A], () => o.A.getReferralsRemaining()),
        [m, A] = i.useState(0),
        [g, N] = i.useState([]),
        [p, f] = i.useState(!1),
        [E, x] = i.useState(!1),
        [h, C] = i.useState(new Map());
    s()(null != u, "Referrals remaining should not be null");
    let R = async (e, i) => {
            if (!p && !E && null != e && 0 !== u)
                try {
                    f(!0);
                    let a = [...h.values()];
                    for (let [e, t] of d)
                        if (t === c.aK.PENDING && !h.has(e)) {
                            let t = await (0, l.wz)(e);
                            a.push(t);
                        }
                    let s = await (0, c.P7)(e, t, i);
                    N((t) => {
                        a = a.filter((e) => !n.has(e.id));
                        let i = new Set(a.map((e) => e.id)),
                            r = s.users.filter((e) => !n.has(e.id) && !i.has(e.id));
                        return 0 === e ? [...n.values(), ...a.values(), ...r] : [...t, ...r];
                    }),
                        C((e) => {
                            let t = new Map(e);
                            for (let e of a) t.set(e.id, e);
                            return t;
                        }),
                        A(s.nextIndex);
                } catch (e) {
                    x(!0);
                } finally {
                    f(!1);
                }
        },
        _ = {
            limit: a,
            getNextRows: R,
            getLocalReferrals: async function () {
                let e = new Map();
                for (let [t, n] of d)
                    if (n === c.aK.PENDING && !h.has(t)) {
                        let n = await (0, l.wz)(t);
                        e.set(n.id, n);
                    }
                C(e), N(Array.from(e.values()));
            },
        },
        I = i.useRef(_);
    return (
        i.useEffect(() => {
            I.current = _;
        }),
        i.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: n } = I.current;
            u > 0 ? e(0, t) : n();
        }, [t, u]),
        { eligibleUsers: g, fetchUsers: () => R(m, a), hasError: E, isFetching: p, resendUsers: h }
    );
}
