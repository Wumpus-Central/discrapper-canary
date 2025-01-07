r.d(t, {
    q: function () {
        return d;
    }
}),
    r(47120),
    r(653041);
var i = r(192379),
    s = r(512722),
    a = r.n(s),
    n = r(442837),
    l = r(232567),
    o = r(281494),
    C = r(276444);
let d = (e) => {
    let { searchQuery: t, selectedUsers: r, limit: s } = e,
        d = (0, n.e7)([C.Z], () => C.Z.getRecipientStatus()),
        c = (0, n.e7)([C.Z], () => C.Z.getReferralsRemaining()),
        [x, f] = i.useState(0),
        [h, p] = i.useState([]),
        [u, m] = i.useState(!1),
        [_, j] = i.useState(!1),
        [g, L] = i.useState(new Map());
    a()(null != c, 'Referrals remaining should not be null');
    let S = async (e, i) => {
            if (!u && !_ && null != e && 0 !== c)
                try {
                    m(!0);
                    let s = [...g.values()];
                    for (let [e, t] of d)
                        if (t === o.Fe.PENDING && !g.has(e)) {
                            let t = await (0, l.PR)(e);
                            s.push(t);
                        }
                    let a = await (0, o.iF)(e, t, i);
                    p((t) => {
                        let i = a.users.filter((e) => !r.has(e.id));
                        return ((s = s.filter((e) => !r.has(e.id))), 0 === e) ? [...r.values(), ...s.values(), ...i] : [...t, ...i];
                    }),
                        L((e) => {
                            let t = new Map(e);
                            for (let e of s) t.set(e.id, e);
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
            limit: s,
            getNextRows: S,
            getLocalReferrals: async () => {
                let e = new Map();
                for (let [t, r] of d)
                    if (r === o.Fe.PENDING && !g.has(t)) {
                        let r = await (0, l.PR)(t);
                        e.set(r.id, r);
                    }
                L(e), p(Array.from(e.values()));
            }
        },
        v = i.useRef(y);
    return (
        i.useEffect(() => {
            v.current = y;
        }),
        i.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: r } = v.current;
            c > 0 ? e(0, t) : r();
        }, [t, c]),
        {
            eligibleUsers: h,
            fetchUsers: () => S(x, s),
            hasError: _,
            isFetching: u,
            resendUsers: g
        }
    );
};
