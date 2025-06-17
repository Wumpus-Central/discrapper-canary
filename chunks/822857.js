n.d(t, {
    CE: () => u,
    WX: () => c,
    hl: () => d
});
var i = n(211242),
    r = n(594174),
    l = n(603077),
    o = n(278401),
    s = n(907584);
let a = (e) => {
        let t = r.default.getCurrentUser();
        return !(null != t && t.isStaff()) && !l.Z.getCurrentConfig(e).enabled;
    },
    u = (e) => (a(e) ? { enabled: !1 } : { enabled: s.Z.getCurrentConfig(e).enabled }),
    c = (e) => {
        let t = s.Z.useExperiment(e);
        return a(e) ? { enabled: !1 } : { enabled: t.enabled };
    },
    d = (e) => {
        let t = (0, i.Q)(),
            { enabled: n } = c(e),
            r = o.Z.useExperiment(e);
        return t ? { enabled: !1 } : { enabled: n && r.enabled };
    };
