a.d(e, { G: () => o });
var r = a(572299),
    _ = a(263449),
    n = a(233517);
let o = function () {
    return {
        bindClient(t) {
            (0, _.nZ)().setClient(t);
        },
        withScope: _.$e,
        getClient: () => (0, _.s3)(),
        getScope: _.nZ,
        getIsolationScope: _.aF,
        captureException: (t, e) => (0, _.nZ)().captureException(t, e),
        captureMessage: (t, e, a) => (0, _.nZ)().captureMessage(t, e, a),
        captureEvent: n.eN,
        addBreadcrumb: r.n,
        setUser: n.av,
        setTags: n.mG,
        setTag: n.YA,
        setExtra: n.sU,
        setExtras: n.rJ,
        setContext: n.v,
        getIntegration(t) {
            let e = (0, _.s3)();
            return (e && e.getIntegrationByName(t.id)) || null;
        },
        startSession: n.yj,
        endSession: n.TM,
        captureSession(t) {
            if (t) return (0, n.TM)();
            let e = (0, _.nZ)(),
                a = (0, _.s3)(),
                r = e.getSession();
            a && r && a.captureSession(r);
        }
    };
};
