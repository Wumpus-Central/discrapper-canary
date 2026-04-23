"use strict";
n.d(t, { A: () => d });
var i = n(574381),
    r = n(439372),
    s = n(710195),
    a = n(19575);
let o = (0, n(945810).mj)({
    name: "2026-03-requiremodule-caching-redux",
    kind: "user",
    defaultConfig: { moduleCacheEnabled: !1 },
    variations: { 1: { moduleCacheEnabled: !0 } },
});
class l extends r.A {
    handleExperimentChange = () => {
        if (!i.Av) return;
        let { moduleCacheEnabled: e } = o.getConfig({
            location: "CacheRequireModuleExperimentManager handleExperimentChange",
        });
        a.Ay.setUseRequireModuleCache(e);
    };
    stores = new Map().set(s.A, this.handleExperimentChange);
    actions = {};
}
let d = new l();
