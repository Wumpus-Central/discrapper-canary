t.d(n, { Z: () => r });
var l = t(200651),
    a = t(192379),
    i = t(586826),
    s = t(990792);
let r = a.memo(function (e) {
    let { fineTuning: n, fineTuningResolution: t, duration: a } = e,
        { file: r, audio: o } = (0, i.p)();
    return (0, l.jsx)(s.Z, {
        file: r,
        audio: o,
        waveformSettings: {
            fineTuning: n,
            fineTuningResolution: t,
            duration: a
        }
    });
});
