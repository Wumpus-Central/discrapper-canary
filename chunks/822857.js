n.d(t, {
    CE: () => c,
    WX: () => s,
    hl: () => u
});
var r = n(594174),
    i = n(603077),
    l = n(278401),
    o = n(907584);
let a = (e) => {
        let t = r.default.getCurrentUser();
        return !(null != t && t.isStaff()) && !i.Z.getCurrentConfig(e).enabled;
    },
    c = (e) => (a(e) ? { enabled: !1 } : { enabled: o.Z.getCurrentConfig(e).enabled }),
    s = (e) => {
        let t = o.Z.useExperiment(e);
        return a(e) ? { enabled: !1 } : { enabled: t.enabled };
    },
    u = (e) => {
        let { enabled: t } = s(e),
            n = l.Z.useExperiment(e);
        return { enabled: t && n.enabled };
    };
