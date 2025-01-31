a.d(e, { G: () => _ });
var r = a(572299),
    n = a(263449),
    o = a(233517);
let _ = function () {
    return {
        bindClient(t) {
            (0, n.nZ)().setClient(t);
        },
        withScope: n.$e,
        getClient: () => (0, n.s3)(),
        getScope: n.nZ,
        getIsolationScope: n.aF,
        captureException: (t, e) => (0, n.nZ)().captureException(t, e),
        captureMessage: (t, e, a) => (0, n.nZ)().captureMessage(t, e, a),
        captureEvent: o.eN,
        addBreadcrumb: r.n,
        setUser: o.av,
        setTags: o.mG,
        setTag: o.YA,
        setExtra: o.sU,
        setExtras: o.rJ,
        setContext: o.v,
        getIntegration(t) {
            let e = (0, n.s3)();
            return (e && e.getIntegrationByName(t.id)) || null;
        },
        startSession: o.yj,
        endSession: o.TM,
        captureSession(t) {
            if (t) return (0, o.TM)();
            !(function () {
                let t = (0, n.nZ)(),
                    e = (0, n.s3)(),
                    a = t.getSession();
                e && a && e.captureSession(a);
            })();
        }
    };
};
