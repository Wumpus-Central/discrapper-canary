var l = t(200651),
    a = t(192379),
    i = t(586826),
    r = t(990792);
n.Z = a.memo(function (e) {
    let { fineTuning: n, fineTuningResolution: t, duration: a } = e,
        { file: s, audio: o } = (0, i.p)();
    return (0, l.jsx)(r.Z, {
        file: s,
        audio: o,
        waveformSettings: {
            fineTuning: n,
            fineTuningResolution: t,
            duration: a
        }
    });
});
