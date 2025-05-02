n.d(t, { Z: () => s }), n(388685);
var a = n(192379),
    i = n(314897),
    r = n(823379),
    l = n(633289);
function s(e) {
    let t = e.id,
        n = e.kind,
        i = e.defaultConfig,
        r = l.Z.registerExperiment(t, n, i);
    return {
        definition: e,
        useCurrentConfig: function (e) {
            let s = d(n, e),
                u = l.Z.getEvaluation(n, s),
                [o, c] = (0, a.useState)(
                    l.Z.getAssignedConfig(
                        {
                            experimentId: t,
                            unitId: s,
                            kind: n
                        },
                        r
                    )
                );
            return (
                (0, a.useEffect)(() => {
                    null != u &&
                        l.Z.trackEvaluationExposure({
                            evaluationId: u,
                            kind: n,
                            experimentId: t,
                            location: e.location
                        });
                }, [s, u, e.location]),
                (0, a.useEffect)(() => {
                    let e = (function (e, t, n) {
                        function a() {
                            n(l.Z.getAssignedConfig(e, t));
                        }
                        return (
                            l.Z.addReactChangeListener(a),
                            () => {
                                l.Z.removeReactChangeListener(a);
                            }
                        );
                    })(
                        {
                            experimentId: t,
                            unitId: s,
                            kind: n
                        },
                        r,
                        (e) => c(null != e ? e : i)
                    );
                    return () => e();
                }, [s, u]),
                o
            );
        },
        getCurrentConfig: function (e) {
            let a = d(n, e),
                i = l.Z.getEvaluation(n, a);
            return (
                null != i &&
                    l.Z.trackEvaluationExposure({
                        evaluationId: i,
                        kind: n,
                        experimentId: t,
                        location: e.location
                    }),
                l.Z.getAssignedConfig(
                    {
                        experimentId: t,
                        unitId: a,
                        kind: n
                    },
                    r
                )
            );
        }
    };
}
function d(e, t) {
    switch (e) {
        case 'guild':
            return t.guildId;
        case 'user':
            return i.default.getId();
        default:
            (0, r.vE)(e);
    }
}
