n.d(t, {
    CE: () => s,
    WX: () => l,
}),
    n(211242);
var r = n(594174),
    i = n(603077);
n(278401);
var a = n(907584);
let o = (e) => {
        let t = r.default.getCurrentUser();
        return !(null != t && t.isStaff()) && !i.Z.getCurrentConfig(e).enabled;
    },
    s = (e) => (o(e) ? { enabled: !1 } : { enabled: a.Z.getCurrentConfig(e).enabled }),
    l = (e) => {
        let t = a.Z.useExperiment(e);
        return o(e) ? { enabled: !1 } : { enabled: t.enabled };
    };
