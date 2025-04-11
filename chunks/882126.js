n.d(t, { Z: () => s });
var l = n(200651),
    a = n(192379),
    r = n(586826),
    i = n(990792);
let s = a.memo(function (e) {
    let { fineTuning: t, fineTuningResolution: n, duration: a } = e,
        { file: s, audio: o } = (0, r.p)();
    return (0, l.jsx)(i.Z, {
        file: s,
        audio: o,
        waveformSettings: {
            fineTuning: t,
            fineTuningResolution: n,
            duration: a
        }
    });
});
