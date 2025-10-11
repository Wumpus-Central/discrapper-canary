t.d(n, { Z: () => o });
var a = t(951288),
    l = t(647438),
    r = t(586826),
    i = t(990792);
let o = l.memo(function (e) {
    let { fineTuning: n, fineTuningResolution: t, duration: l } = e,
        { file: o, audio: s } = (0, r.p)();
    return (0, a.jsx)(i.Z, {
        file: o,
        audio: s,
        waveformSettings: {
            fineTuning: n,
            fineTuningResolution: t,
            duration: l,
        },
    });
});
