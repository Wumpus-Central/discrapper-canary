n.d(t, {
    V3: () => a,
    bp: () => r,
    hp: () => i,
    nl: () => l
}),
    n(49124),
    n(388685);
let l = {
        waveformBlockWidth: 2,
        waveformBarWidth: 0.5,
        fineTuningDelay: 500,
        fineTuningScale: 10,
        loudnessThreshold: 0.3
    },
    a = (e, t) => {
        let n = ''
            .concat(e[0], '-')
            .concat(e[e.length - 1], '-')
            .concat(e.byteLength);
        return ''.concat(n, '-').concat(JSON.stringify(t));
    },
    i = (e) => ''.concat(e.name, '-').concat(e.size, '-').concat(e.lastModified),
    r = new Set(['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/x-wav', 'audio/ogg', 'video/mp4']);
