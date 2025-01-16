r.d(t, {
    q: function () {
        return d;
    }
}),
    r(47120),
    r(653041);
var s = r(192379),
    i = r(512722),
    a = r.n(i),
    n = r(442837),
    l = r(232567),
    C = r(281494),
    o = r(276444);
let d = (e) => {
    let { searchQuery: t, selectedUsers: r, limit: i } = e,
        d = (0, n.e7)([o.Z], () => o.Z.getRecipientStatus()),
        c = (0, n.e7)([o.Z], () => o.Z.getReferralsRemaining()),
        [x, f] = s.useState(0),
        [h, p] = s.useState([]),
        [u, m] = s.useState(!1),
        [_, j] = s.useState(!1),
        [g, L] = s.useState(new Map());
    a()(null != c, 'Referrals remaining should not be null');
    let S = async (e, s) => {
            if (!u && !_ && null != e && 0 !== c)
                try {
                    m(!0);
                    let i = [...g.values()];
                    for (let [e, t] of d)
                        if (t === C.Fe.PENDING && !g.has(e)) {
                            let t = await (0, l.PR)(e);
                            i.push(t);
                        }
                    let a = await (0, C.iF)(e, t, s);
                    p((t) => {
                        let s = a.users.filter((e) => !r.has(e.id));
                        return ((i = i.filter((e) => !r.has(e.id))), 0 === e) ? [...r.values(), ...i.values(), ...s] : [...t, ...s];
                    }),
                        L((e) => {
                            let t = new Map(e);
                            for (let e of i) t.set(e.id, e);
                            return t;
                        }),
                        f(a.nextIndex);
                } catch (e) {
                    j(!0);
                } finally {
                    m(!1);
                }
        },
        y = {
            limit: i,
            getNextRows: S,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, r] of d)
                    if (r === C.Fe.PENDING && !g.has(t)) {
                        let r = await (0, l.PR)(t);
                        e.set(r.id, r);
                    }
                L(e), p(Array.from(e.values()));
            }
        },
        v = s.useRef(y);
    return (
        s.useEffect(() => {
            v.current = y;
        }),
        s.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: r } = v.current;
            c > 0 ? e(0, t) : r();
        }, [t, c]),
        {
            eligibleUsers: h,
            fetchUsers: () => S(x, i),
            hasError: _,
            isFetching: u,
            resendUsers: g
        }
    );
};
