n.d(i, { default: () => S });
var e = n(477900),
    s = n(582128),
    l = n(115560),
    r = n(189213),
    o = n(509434),
    c = n(95035),
    a = n(632738),
    p = n(975571),
    A = n(871309),
    R = n(171576),
    d = n(36149),
    M = n(652215),
    u = n(792996),
    E = n(750481),
    _ = n(381944);
let S = function (t) {
    let { transitionState: i, entryPoint: n, onClose: S } = t,
        { loading: C, initiateAgeVerification: I } = (0, E.n)({ onComplete: S, entryPoint: n }),
        g = s.useMemo(() => (0, l.A)(), []);
    return (
        s.useEffect(() => {
            (0, R.Bs)(g, R.WU.PRIMARY, n);
        }, [g, n]),
        (0, e.jsx)(r.a, {
            transitionState: i,
            onClose: S,
            title: (0, d.ST)(n),
            subtitle: (0, d.mK)(n),
            actions: [
                {
                    text: u.intl.string(u.t.SJMnkX),
                    loading: C,
                    icon: o.I,
                    iconPosition: "end",
                    onClick: async () => {
                        ((0, R.St)(g, R.WU.PRIMARY, R._7.GET_STARTED), await I());
                    },
                },
            ],
            actionBarInput: (0, e.jsxs)(c.A, {
                onClick: () => {
                    (A.A.openUrl(p.A.getArticleURL(M.MVz.AGE_VERIFICATION_LEARN_MORE)),
                        (0, R.St)(g, R.WU.PRIMARY, R._7.LEARN_MORE));
                },
                className: _.A,
                children: [u.intl.string(u.t["aA6q/z"]), (0, e.jsx)(o.I, { size: "xs", color: "currentColor" })],
            }),
            children: [
                { title: u.intl.string(u.t.HphYKp), description: u.intl.string(u.t["GCZC+9"]) },
                { title: u.intl.string(u.t.nkO4L3), description: u.intl.string(u.t.rHZFsH) },
                {
                    title: u.intl.string(u.t.aVwLfn),
                    description: u.intl.format(u.t.n5vd1E, {
                        handleOnHelpUrlHook: () => {
                            (A.A.openUrl(p.A.getArticleURL(M.MVz.SYSTEM_DMS)),
                                (0, R.St)(g, R.WU.PRIMARY, R._7.SYSTEM_DMS_LEARN_MORE));
                        },
                    }),
                },
            ].map((t, i) => {
                let { title: n, description: s } = t;
                return (0, e.jsx)(a.PQ, { title: n, description: s, listType: "numbered", index: i }, i);
            }),
        })
    );
};
