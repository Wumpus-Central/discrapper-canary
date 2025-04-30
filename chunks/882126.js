n.d(t, { Z: () => s });
var l = n(200651),
    a = n(192379),
    i = n(586826),
    r = n(990792);
let s = a.memo(function (e) {
    let { fineTuning: t, fineTuningResolution: n, duration: a } = e,
        { file: s, audio: o } = (0, i.p)();
    return (0, l.jsx)(r.Z, {
        file: s,
        audio: o,
        waveformSettings: {
            fineTuning: t,
            fineTuningResolution: n,
            duration: a
        }
    });
});
