n.d(t, { A: () => u });
var a = n(64700),
    s = n(311907),
    i = n(847599),
    l = n(787301),
    r = n(295972),
    o = n(36149),
    d = n(40449),
    c = n(985018);
let u = function (e) {
    let { onClose: t, onMethodClick: n, classificationId: u } = e,
        { methods: m, loading: h } = (0, s.cf)([l.A], () => ({ methods: l.A.methods, loading: l.A.loading })),
        { initiateAgeVerification: x } = (0, o.nn)({
            onComplete: t,
            entryPoint: i.q1.EXPRESSIVE_GET_STARTED,
            shouldShowExpressiveModal: !0,
            classificationId: u,
        });
    return (
        a.useEffect(() => {
            null == m && (0, r.DJ)();
        }, [m]),
        {
            ageVerificationMethods: m
                ?.map((e) => {
                    let t = d.uv[e];
                    if (null == t) return null;
                    let { title: a, description: s } = t;
                    return {
                        id: e,
                        title: c.intl.string(a),
                        description: c.intl.string(s),
                        onClick: async (t) => {
                            (0, i.St)(t, i.WU.EXPRESSIVE_PRIMARY, i._7.METHOD_SELECT, e), n?.(), await x(e);
                        },
                    };
                })
                .filter((e) => null != e),
            loading: h,
        }
    );
};
