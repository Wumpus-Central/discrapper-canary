t.d(n, { Z: () => s });
var l = t(200651),
    a = t(192379),
    r = t(586826),
    i = t(990792);
let s = a.memo(function (e) {
    let { fineTuning: n, fineTuningResolution: t, duration: a } = e,
        { file: s, audio: o } = (0, r.p)();
    return (0, l.jsx)(i.Z, {
        file: s,
        audio: o,
        waveformSettings: {
            fineTuning: n,
            fineTuningResolution: t,
            duration: a
        }
    });
});
