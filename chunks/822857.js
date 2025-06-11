t.d(n, {
    CE: () => l,
    WX: () => d,
    hl: () => u
});
var r = t(211242),
    a = t(594174),
    c = t(603077),
    o = t(278401),
    s = t(907584);
let i = (e) => {
        let n = a.default.getCurrentUser();
        return !(null != n && n.isStaff()) && !c.Z.getCurrentConfig(e).enabled;
    },
    l = (e) => (i(e) ? { enabled: !1 } : { enabled: s.Z.getCurrentConfig(e).enabled }),
    d = (e) => {
        let n = s.Z.useExperiment(e);
        return i(e) ? { enabled: !1 } : { enabled: n.enabled };
    },
    u = (e) => {
        let n = (0, r.Q)(),
            { enabled: t } = d(e),
            a = o.Z.useExperiment(e);
        return n ? { enabled: !1 } : { enabled: t && a.enabled };
    };
