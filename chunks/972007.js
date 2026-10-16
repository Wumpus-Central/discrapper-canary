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
        [S, g] = s.useState(!1),
        [R, m] = s.useState(!1),
        [E, C] = s.useState(new Map());
    async function w(e, s) {
        if (!S && !R && null != e && 0 !== d)
            try {
                g(!0);
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
                    C((e) => {
                        let t = new Map(e);
                        for (let e of a) t.set(e.id, e);
                        return t;
                    }),
                    h(n.nextIndex));
            } catch (e) {
                m(!0);
            } finally {
                g(!1);
            }
    }
    n()(null != d, "Referrals remaining should not be null");
    let y = {
            limit: a,
            getNextRows: w,
            getLocalReferrals: async function () {
                let e = new Map();
                for (let [t, i] of c)
                    if (i === u.aK.PENDING && !E.has(t)) {
                        let i = await (0, l.wz)(t);
                        e.set(i.id, i);
                    }
                (C(e), A(Array.from(e.values())));
            },
        },
        M = s.useRef(y);
    return (
        s.useEffect(() => {
            M.current = y;
        }),
        s.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: i } = M.current;
            d > 0 ? e(0, t) : i();
        }, [t, d]),
        { eligibleUsers: p, fetchUsers: () => w(f, a), hasError: R, isFetching: S, resendUsers: E }
    );
}
