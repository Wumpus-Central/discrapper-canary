n.d(t, { A: () => u }), n(228524);
var a = n(64700),
    l = n(311907),
    i = n(847599),
    r = n(787301),
    s = n(295972),
    o = n(36149),
    c = n(40449),
    d = n(985018);
let u = function (e) {
    let { onClose: t, onMethodClick: n, classificationId: u } = e,
        { methods: m, loading: p } = (0, l.cf)([r.A], () => ({
            methods: r.A.methods,
            loading: r.A.loading,
        })),
        { initiateAgeVerification: h } = (0, o.nn)({
            onComplete: t,
            entryPoint: i.q1.EXPRESSIVE_GET_STARTED,
            shouldShowExpressiveModal: !0,
            classificationId: u,
        });
    return (
        a.useEffect(() => {
            null == m && (0, s.DJ)();
        }, [m]),
        {
            ageVerificationMethods:
                null == m
                    ? void 0
                    : m
                          .map((e) => {
                              let t = c.uv[e];
                              if (null == t) return null;
                              let { title: a, description: l } = t;
                              return {
                                  id: e,
                                  title: d.intl.string(a),
                                  description: d.intl.string(l),
                                  onClick: async (t) => {
                                      (0, i.St)(t, i.WU.EXPRESSIVE_PRIMARY, i._7.METHOD_SELECT, e),
                                          null == n || n(),
                                          await h(e);
                                  },
                              };
                          })
                          .filter((e) => null != e),
            loading: p,
        }
    );
};
