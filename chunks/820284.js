a.d(e, { G: () => o });
var r = a(572299),
    n = a(263449),
    _ = a(233517);
let o = function () {
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
        captureEvent: _.eN,
        addBreadcrumb: r.n,
        setUser: _.av,
        setTags: _.mG,
        setTag: _.YA,
        setExtra: _.sU,
        setExtras: _.rJ,
        setContext: _.v,
        getIntegration(t) {
            let e = (0, n.s3)();
            return (e && e.getIntegrationByName(t.id)) || null;
        },
        startSession: _.yj,
        endSession: _.TM,
        captureSession(t) {
            if (t) return (0, _.TM)();
            let e = (0, n.nZ)(),
                a = (0, n.s3)(),
                r = e.getSession();
            a && r && a.captureSession(r);
        }
    };
};
