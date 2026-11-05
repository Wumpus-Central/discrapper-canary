i.d(n, { default: () => _ });
var e = i(477900),
    l = i(582128),
    s = i(115560),
    r = i(189213),
    o = i(509434),
    c = i(95035),
    a = i(632738),
    p = i(975571),
    A = i(871309),
    R = i(171576),
    d = i(36149),
    E = i(652215),
    M = i(792996),
    S = i(750481),
    u = i(381944);
let _ = function (t) {
    let { transitionState: n, entryPoint: i, onClose: _ } = t,
        { loading: k, initiateAgeVerification: C } = (0, S.n)({ onComplete: _, entryPoint: i }),
        I = l.useMemo(() => (0, s.A)(), []);
    return (
        l.useEffect(() => {
            (0, R.Bs)(I, R.WU.PRIMARY, i);
        }, [I, i]),
        (0, e.jsx)(r.a, {
            transitionState: n,
            onClose: _,
            title: (0, d.ST)(i),
            subtitle: (0, d.mK)(i),
            actions: [
                {
                    text: M.intl.string(M.t.SJMnkX),
                    loading: k,
                    icon: o.LinkExternalSmallIcon,
                    iconPosition: "end",
                    onClick: async () => {
                        ((0, R.St)(I, R.WU.PRIMARY, R._7.GET_STARTED), await C());
                    },
                },
            ],
            actionBarInput: (0, e.jsxs)(c.A, {
                onClick: () => {
                    (A.A.openUrl(p.A.getArticleURL(E.MVz.AGE_VERIFICATION_LEARN_MORE)),
                        (0, R.St)(I, R.WU.PRIMARY, R._7.LEARN_MORE));
                },
                className: u.A,
                children: [
                    M.intl.string(M.t["aA6q/z"]),
                    (0, e.jsx)(o.LinkExternalSmallIcon, { size: "xs", color: "currentColor" }),
                ],
            }),
            children: [
                { title: M.intl.string(M.t.HphYKp), description: M.intl.string(M.t["GCZC+9"]) },
                { title: M.intl.string(M.t.nkO4L3), description: M.intl.string(M.t.rHZFsH) },
                {
                    title: M.intl.string(M.t.aVwLfn),
                    description: M.intl.format(M.t.n5vd1E, {
                        handleOnHelpUrlHook: () => {
                            (A.A.openUrl(p.A.getArticleURL(E.MVz.SYSTEM_DMS)),
                                (0, R.St)(I, R.WU.PRIMARY, R._7.SYSTEM_DMS_LEARN_MORE));
                        },
                    }),
                },
            ].map((t, n) => {
                let { title: i, description: l } = t;
                return (0, e.jsx)(a.PQ, { title: i, description: l, listType: "numbered", index: n }, n);
            }),
        })
    );
};
