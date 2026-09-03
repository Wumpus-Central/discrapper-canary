n.d(t, { A: () => d });
var i = n(574381),
    r = n(439372),
    a = n(710195),
    s = n(19575);
let l = (0, n(945810).mj)({
    name: "2026-03-requiremodule-caching-redux",
    kind: "user",
    defaultConfig: { moduleCacheEnabled: !1 },
    variations: { 1: { moduleCacheEnabled: !0 } },
});
class o extends r.A {
    handleExperimentChange = () => {
        if (!i.Av) return;
        let { moduleCacheEnabled: e } = l.getConfig({
            location: "CacheRequireModuleExperimentManager handleExperimentChange",
        });
        s.Ay.setUseRequireModuleCache(e);
    };
    stores = new Map().set(a.A, this.handleExperimentChange);
    actions = {};
}
let d = new o();
