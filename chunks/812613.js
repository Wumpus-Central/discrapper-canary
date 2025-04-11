n.d(t, {
    Zk: () => d,
    bb: () => f,
    kV: () => h
}),
    n(415506),
    n(644351),
    n(146733),
    n(539854),
    n(17294),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(410992);
var l = n(512722),
    a = n.n(l),
    r = n(304809),
    i = n(70956),
    s = n(208049),
    o = n(419202);
let u = null;
try {
    let e = (0, r.N)();
    if (null == e) throw Error('Failed to create media audio context');
    u = new AudioContext({ sampleRate: Math.min(e.sampleRate, 48000) });
} catch (e) {}
async function c(e) {
    if (null == u) throw Error('Failed to create audio context');
    let t = await e.arrayBuffer();
    if (!(t instanceof ArrayBuffer)) throw Error('Unexpected file type');
    return u.decodeAudioData(t);
}
async function d(e) {
    var t;
    let n = await ((t = (t) => {
        t.readAsDataURL(e);
    }),
    new Promise((e, n) => {
        let l = new FileReader(),
            a = () => {
                l.removeEventListener('load', a), l.removeEventListener('error', n), e(l.result);
            };
        l.addEventListener('load', a), l.addEventListener('error', n), t(l);
    }));
    if ('string' != typeof n) throw Error('Unexpected file type');
    return n;
}
async function f(e) {
    let { readPromise: t, guildId: n, name: l, volume: a, emojiId: r, emojiName: i } = e;
    return (0, s.Dx)({
        guildId: n,
        name: l,
        sound: await t,
        volume: a,
        emojiId: r,
        emojiName: i
    });
}
async function m(e) {
    let t = [],
        n = (function (e) {
            if (1 === e.length) return e[0];
            if (2 === e.length) {
                let t = e[0],
                    n = e[1],
                    l = [];
                for (let e = 0; e < t.length; e++) l.push(t[e]), l.push(n[e]);
                let a = new Float32Array(l.length);
                return a.set(l), a;
            }
            throw Error('Only handles up to 2 channels');
        })(
            (function (e) {
                let { numberOfChannels: t } = e,
                    n = [];
                for (let l = 0; l < t; l++) n.push(e.getChannelData(l));
                return n;
            })(e)
        ),
        l = new AudioData({
            format: 'f32',
            sampleRate: e.sampleRate,
            numberOfFrames: e.length,
            numberOfChannels: e.numberOfChannels,
            timestamp: 1000 * e.duration * 1000,
            data: n
        }),
        r = new AudioEncoder({
            output: function (n) {
                a()(null != n.duration, 'Chunk duration must not be null');
                let l = (n.duration / 1000000) * e.sampleRate,
                    r = new Uint8Array(n.byteLength);
                n.copyTo(r),
                    t.push({
                        buffer: r,
                        numSamples: l
                    });
            },
            error: (e) => {
                throw Error('Audio encoding error: '.concat(e.message));
            }
        });
    return (
        r.configure({
            codec: 'opus',
            sampleRate: e.sampleRate,
            numberOfChannels: e.numberOfChannels
        }),
        r.encode(l),
        await r.flush(),
        new Blob(
            [
                (0, o.Z)(t, {
                    channelCount: e.numberOfChannels,
                    inputSampleRate: e.sampleRate,
                    outputGain: 0,
                    channelMappingFamily: 0
                })
            ],
            { type: 'audio/ogg' }
        )
    );
}
async function h(e, t) {
    let n = (function (e, t) {
        let { startMs: n, endMs: l } = t,
            { sampleRate: a, numberOfChannels: r, duration: s } = e,
            o = s * i.Z.Millis.SECOND,
            c = Math.min(l, o);
        if (0 === n && c === o) return e;
        if (null == u) throw Error('Failed to create audio context');
        let d = Math.floor((n / o) * e.length),
            f = Math.floor((c / o) * e.length),
            m = u.createBuffer(r, f - d, a);
        for (let t = 0; t < r; t++) {
            let n = m.getChannelData(t),
                l = e.getChannelData(t),
                a = 0;
            for (let e = d; e <= f; e++) (n[a] = l[e]), a++;
        }
        return m;
    })(await c(e), t);
    return new File([await m(n)], 'sound.ogg', { type: 'audio/ogg' });
}
