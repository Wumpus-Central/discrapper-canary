n.d(t, {
    CE: () => c,
    WX: () => u,
    hl: () => d,
});
var r = n(211242),
    i = n(594174),
    l = n(603077),
    o = n(278401),
    s = n(907584);
let a = (e) => {
        let t = i.default.getCurrentUser();
        return !(null != t && t.isStaff()) && !l.Z.getCurrentConfig(e).enabled;
    },
    c = (e) => (a(e) ? { enabled: !1 } : { enabled: s.Z.getCurrentConfig(e).enabled }),
    u = (e) => {
        let t = s.Z.useExperiment(e);
        return a(e) ? { enabled: !1 } : { enabled: t.enabled };
    },
    d = (e) => {
        let t = (0, r.Q)(),
            { enabled: n } = u(e),
            i = o.Z.useExperiment(e);
        return t ? { enabled: !1 } : { enabled: n && i.enabled };
    };
