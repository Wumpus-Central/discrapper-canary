n.d(t, {
    CE: () => s,
    WX: () => u,
    hl: () => d
});
var r = n(211242),
    i = n(594174),
    l = n(603077),
    a = n(278401),
    o = n(907584);
let c = (e) => {
        let t = i.default.getCurrentUser();
        return !(null != t && t.isStaff()) && !l.Z.getCurrentConfig(e).enabled;
    },
    s = (e) => (c(e) ? { enabled: !1 } : { enabled: o.Z.getCurrentConfig(e).enabled }),
    u = (e) => {
        let t = o.Z.useExperiment(e);
        return c(e) ? { enabled: !1 } : { enabled: t.enabled };
    },
    d = (e) => {
        let t = (0, r.Q)(),
            { enabled: n } = u(e),
            i = a.Z.useExperiment(e);
        return t ? { enabled: !1 } : { enabled: n && i.enabled };
    };
