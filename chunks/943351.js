t.d(n, {
    V3: () => a,
    bp: () => r,
    hp: () => i,
    nl: () => l
}),
    t(49124),
    t(388685);
let l = {
        waveformBlockWidth: 2,
        waveformBarWidth: 0.5,
        fineTuningDelay: 500,
        fineTuningScale: 10,
        loudnessThreshold: 0.3
    },
    a = (e, n) => {
        let t = ''
            .concat(e[0], '-')
            .concat(e[e.length - 1], '-')
            .concat(e.byteLength);
        return ''.concat(t, '-').concat(JSON.stringify(n));
    },
    i = (e) => ''.concat(e.name, '-').concat(e.size, '-').concat(e.lastModified),
    r = new Set(['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/x-wav', 'audio/ogg', 'video/mp4']);
