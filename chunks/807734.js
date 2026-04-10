n.d(t, { A: () => p });
var a = n(64700),
    i = n(731738),
    s = n(311907),
    l = n(831062),
    r = n(847599),
    o = n(787301),
    d = n(295972),
    c = n(36149),
    u = n(677501),
    m = n(634101),
    h = n(40449),
    x = n(985018);
let p = function (e) {
    let { onClose: t, onMethodClick: n, classificationId: p, onGoogleWalletSelect: g } = e,
        { methods: f, loading: v } = (0, s.cf)([o.A], () => ({ methods: o.A.methods, loading: o.A.loading })),
        { initiateAgeVerification: _ } = (0, c.nn)({
            onComplete: t,
            entryPoint: r.q1.EXPRESSIVE_GET_STARTED,
            shouldShowExpressiveModal: !0,
            classificationId: p,
        }),
        b = (0, m.D)("age_verification_methods"),
        [j, A] = a.useState(!1);
    return (
        a.useEffect(() => {
            b &&
                (0, u.sf)().then((e) => {
                    l.A.increment({ name: i.K.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: [`available:${e}`] }), A(e);
                });
        }, [b]),
        a.useEffect(() => {
            null == f && (0, d.DJ)();
        }, [f]),
        {
            ageVerificationMethods: a.useMemo(() => {
                let e =
                    f
                        ?.filter((e) => e !== h.VF.GOOGLE_WALLET)
                        .map((e) => {
                            let t = h.uv[e];
                            if (null == t) return null;
                            let { title: a, description: i } = t;
                            return {
                                id: e,
                                title: x.intl.string(a),
                                description: x.intl.string(i),
                                onClick: async (t) => {
                                    (0, r.St)(t, r.WU.EXPRESSIVE_PRIMARY, r._7.METHOD_SELECT, e), n?.(), await _(e);
                                },
                            };
                        })
                        .filter((e) => null != e) ?? [];
                if (b && j && null != g) {
                    let t = h.uv[h.VF.GOOGLE_WALLET];
                    if (null != t)
                        return [
                            {
                                id: h.VF.GOOGLE_WALLET,
                                title: x.intl.string(t.title),
                                description: x.intl.string(t.description),
                                onClick: (e) => {
                                    l.A.increment({ name: i.K.GOOGLE_WALLET_METHOD_SELECTED }),
                                        (0, r.St)(e, r.WU.EXPRESSIVE_PRIMARY, r._7.METHOD_SELECT, h.VF.GOOGLE_WALLET),
                                        n?.(),
                                        g();
                                },
                            },
                            ...e,
                        ];
                }
                return e;
            }, [f, b, j, g, n, _]),
            loading: v,
        }
    );
};
