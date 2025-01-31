r.d(t, { q: () => d }), r(47120), r(653041);
var a = r(192379),
    s = r(512722),
    i = r.n(s),
    n = r(442837),
    l = r(232567),
    C = r(281494),
    o = r(276444);
let d = (e) => {
    let { searchQuery: t, selectedUsers: r, limit: s } = e,
        d = (0, n.e7)([o.Z], () => o.Z.getRecipientStatus()),
        c = (0, n.e7)([o.Z], () => o.Z.getReferralsRemaining()),
        [x, h] = a.useState(0),
        [p, f] = a.useState([]),
        [u, m] = a.useState(!1),
        [_, j] = a.useState(!1),
        [g, L] = a.useState(new Map());
    i()(null != c, 'Referrals remaining should not be null');
    let y = async (e, a) => {
            if (!u && !_ && null != e && 0 !== c)
                try {
                    m(!0);
                    let s = [...g.values()];
                    for (let [e, t] of d)
                        if (t === C.Fe.PENDING && !g.has(e)) {
                            let t = await (0, l.PR)(e);
                            s.push(t);
                        }
                    let i = await (0, C.iF)(e, t, a);
                    f((t) => {
                        let a = i.users.filter((e) => !r.has(e.id));
                        return ((s = s.filter((e) => !r.has(e.id))), 0 === e) ? [...r.values(), ...s.values(), ...a] : [...t, ...a];
                    }),
                        L((e) => {
                            let t = new Map(e);
                            for (let e of s) t.set(e.id, e);
                            return t;
                        }),
                        h(i.nextIndex);
                } catch (e) {
                    j(!0);
                } finally {
                    m(!1);
                }
        },
        v = {
            limit: s,
            getNextRows: y,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, r] of d)
                    if (r === C.Fe.PENDING && !g.has(t)) {
                        let r = await (0, l.PR)(t);
                        e.set(r.id, r);
                    }
                L(e), f(Array.from(e.values()));
            }
        },
        S = a.useRef(v);
    return (
        a.useEffect(() => {
            S.current = v;
        }),
        a.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: r } = S.current;
            c > 0 ? e(0, t) : r();
        }, [t, c]),
        {
            eligibleUsers: p,
            fetchUsers: () => y(x, s),
            hasError: _,
            isFetching: u,
            resendUsers: g
        }
    );
};
