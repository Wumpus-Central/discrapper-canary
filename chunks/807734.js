n.d(t, { A: () => _ });
var i = n(64700),
    s = n(731738),
    l = n(311907),
    a = n(831062),
    r = n(847599),
    o = n(787301),
    d = n(295972),
    c = n(36149),
    u = n(677501),
    p = n(634101),
    h = n(40449),
    m = n(985018);
let _ = function (e) {
    let { onClose: t, onMethodClick: n, classificationId: _, onGoogleWalletSelect: A } = e,
        { methods: f, loading: g } = (0, l.cf)([o.A], () => ({ methods: o.A.methods, loading: o.A.loading })),
        { initiateAgeVerification: x } = (0, c.nn)({
            onComplete: t,
            entryPoint: r.q1.EXPRESSIVE_GET_STARTED,
            shouldShowExpressiveModal: !0,
            classificationId: _,
        }),
        E = (0, p.D)("age_verification_methods"),
        [C, T] = i.useState(!1);
    return (
        i.useEffect(() => {
            E &&
                (0, u.sf)().then((e) => {
                    a.A.increment({ name: s.K.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: [`available:${e}`] }), T(e);
                });
        }, [E]),
        i.useEffect(() => {
            null == f && (0, d.DJ)();
        }, [f]),
        {
            ageVerificationMethods: i.useMemo(() => {
                let e =
                    f
                        ?.filter((e) => e !== h.VF.GOOGLE_WALLET)
                        .map((e) => {
                            let t = h.uv[e];
                            if (null == t) return null;
                            let { title: i, description: s } = t;
                            return {
                                id: e,
                                title: m.intl.string(i),
                                description: m.intl.string(s),
                                onClick: async (t) => {
                                    (0, r.St)(t, r.WU.EXPRESSIVE_PRIMARY, r._7.METHOD_SELECT, e), n?.(), await x(e);
                                },
                            };
                        })
                        .filter((e) => null != e) ?? [];
                if (E && C && null != A) {
                    let t = h.uv[h.VF.GOOGLE_WALLET];
                    if (null != t)
                        return [
                            {
                                id: h.VF.GOOGLE_WALLET,
                                title: m.intl.string(t.title),
                                description: m.intl.string(t.description),
                                onClick: (e) => {
                                    a.A.increment({ name: s.K.GOOGLE_WALLET_METHOD_SELECTED }),
                                        (0, r.St)(e, r.WU.EXPRESSIVE_PRIMARY, r._7.METHOD_SELECT, h.VF.GOOGLE_WALLET),
                                        n?.(),
                                        A();
                                },
                            },
                            ...e,
                        ];
                }
                return e;
            }, [f, E, C, A, n, x]),
            loading: g,
        }
    );
};
