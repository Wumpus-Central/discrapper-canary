n.d(t, {
    C: () => a,
    W: () => o,
});
var r = n(199350),
    i = n(569703);
let a = (e) => ((0, r.o)(e) ? { enabled: !1 } : { enabled: i.Z.getCurrentConfig(e).enabled }),
    o = (e) => {
        let t = i.Z.useExperiment(e);
        return (0, r.o)(e) ? { enabled: !1 } : { enabled: t.enabled };
    };
