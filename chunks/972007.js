a.d(t, { i: () => c }), a(321073);
var s = a(64700),
    r = a(284009),
    l = a.n(r),
    i = a(17928),
    n = a(803306),
    u = a(326084),
    f = a(851746);
function c(e) {
    let { searchQuery: t, selectedUsers: a, limit: r } = e,
        c = (0, i.bG)([f.A], () => f.A.getRecipientStatus()),
        h = (0, i.bG)([f.A], () => f.A.getReferralsRemaining()),
        [o, d] = s.useState(0),
        [p, w] = s.useState([]),
        [S, g] = s.useState(!1),
        [R, b] = s.useState(!1),
        [v, y] = s.useState(new Map());
    l()(null != h, "Referrals remaining should not be null");
    let A = async (e, s) => {
            if (!S && !R && null != e && 0 !== h)
                try {
                    g(!0);
                    let r = [...v.values()];
                    for (let [e, t] of c)
                        if (t === u.aK.PENDING && !v.has(e)) {
                            let t = await (0, n.wz)(e);
                            r.push(t);
                        }
                    let l = await (0, u.P7)(e, t, s);
                    w((t) => {
                        r = r.filter((e) => !a.has(e.id));
                        let s = new Set(r.map((e) => e.id)),
                            i = l.users.filter((e) => !a.has(e.id) && !s.has(e.id));
                        return 0 === e ? [...a.values(), ...r.values(), ...i] : [...t, ...i];
                    }),
                        y((e) => {
                            let t = new Map(e);
                            for (let e of r) t.set(e.id, e);
                            return t;
                        }),
                        d(l.nextIndex);
                } catch (e) {
                    b(!0);
                } finally {
                    g(!1);
                }
        },
        E = {
            limit: r,
            getNextRows: A,
            getLocalReferrals: async function () {
                let e = new Map();
                for (let [t, a] of c)
                    if (a === u.aK.PENDING && !v.has(t)) {
                        let a = await (0, n.wz)(t);
                        e.set(a.id, a);
                    }
                y(e), w(Array.from(e.values()));
            },
        },
        k = s.useRef(E);
    return (
        s.useEffect(() => {
            k.current = E;
        }),
        s.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: a } = k.current;
            h > 0 ? e(0, t) : a();
        }, [t, h]),
        { eligibleUsers: p, fetchUsers: () => A(o, r), hasError: R, isFetching: S, resendUsers: v }
    );
}
