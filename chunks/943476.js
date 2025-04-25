n.d(t, { Z: () => s }), n(388685);
var a = n(192379),
    r = n(314897),
    i = n(823379),
    l = n(633289);
function s(e) {
    let t = e.id,
        n = e.kind,
        r = e.defaultConfig,
        i = l.Z.registerExperiment(t, n, r);
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
                        i
                    )
                );
            return (
                (0, a.useEffect)(() => {
                    null != u && l.Z.trackExposure(u, n, t, e.location);
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
                        i,
                        (e) => c(null != e ? e : r)
                    );
                    return () => e();
                }, [s, u]),
                o
            );
        },
        getCurrentConfig: function (e) {
            let a = d(n, e),
                r = l.Z.getEvaluation(n, a);
            return (
                null != r && l.Z.trackExposure(r, n, t, e.location),
                l.Z.getAssignedConfig(
                    {
                        experimentId: t,
                        unitId: a,
                        kind: n
                    },
                    i
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
            return r.default.getId();
        default:
            (0, i.vE)(e);
    }
}
