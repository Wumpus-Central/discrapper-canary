n.d(t, {
    CE: () => c,
    WX: () => d,
    hl: () => u
});
var i = n(211242),
    r = n(594174),
    s = n(603077),
    l = n(278401),
    a = n(907584);
let o = (e) => {
        let t = r.default.getCurrentUser();
        return !(null != t && t.isStaff()) && !s.Z.getCurrentConfig(e).enabled;
    },
    c = (e) => (o(e) ? { enabled: !1 } : { enabled: a.Z.getCurrentConfig(e).enabled }),
    d = (e) => {
        let t = a.Z.useExperiment(e);
        return o(e) ? { enabled: !1 } : { enabled: t.enabled };
    },
    u = (e) => {
        let t = (0, i.Q)(),
            { enabled: n } = d(e),
            r = l.Z.useExperiment(e);
        return t ? { enabled: !1 } : { enabled: n && r.enabled };
    };
