n.d(t, {
    CE: () => l,
    WX: () => o,
    hl: () => a
});
var r = n(278401),
    i = n(907584);
let l = (e) => ({ enabled: i.Z.getCurrentConfig(e).enabled }),
    o = (e) => ({ enabled: i.Z.useExperiment(e).enabled }),
    a = (e) => {
        let { enabled: t } = o(e),
            n = r.Z.useExperiment(e);
        return { enabled: t && n.enabled };
    };
