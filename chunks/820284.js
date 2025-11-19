_.d(e, { G: () => o });
var a = _(572299),
    r = _(263449),
    n = _(233517);
let o = function () {
    return {
        bindClient(t) {
            (0, r.nZ)().setClient(t);
        },
        withScope: r.$e,
        getClient: () => (0, r.s3)(),
        getScope: r.nZ,
        getIsolationScope: r.aF,
        captureException: (t, e) => (0, r.nZ)().captureException(t, e),
        captureMessage: (t, e, _) => (0, r.nZ)().captureMessage(t, e, _),
        captureEvent: n.eN,
        addBreadcrumb: a.n,
        setUser: n.av,
        setTags: n.mG,
        setTag: n.YA,
        setExtra: n.sU,
        setExtras: n.rJ,
        setContext: n.v,
        getIntegration(t) {
            let e = (0, r.s3)();
            return (e && e.getIntegrationByName(t.id)) || null;
        },
        startSession: n.yj,
        endSession: n.TM,
        captureSession(t) {
            if (t) return (0, n.TM)();
            let e = (0, r.nZ)(),
                _ = (0, r.s3)(),
                a = e.getSession();
            _ && a && _.captureSession(a);
        },
    };
};
