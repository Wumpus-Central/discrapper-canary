t.d(n, {
    Zk: function () {
        return d;
    },
    bb: function () {
        return f;
    },
    kV: function () {
        return h;
    }
}),
    t(411104),
    t(653041),
    t(951953),
    t(970173),
    t(520712),
    t(268111),
    t(941497),
    t(32026),
    t(480839),
    t(744285),
    t(492257),
    t(873817),
    t(518263);
var l = t(512722),
    a = t.n(l),
    i = t(304809),
    r = t(70956),
    s = t(208049),
    o = t(419202);
let u = new AudioContext({ sampleRate: Math.min((0, i.N)().sampleRate, 48000) });
async function c(e) {
    let n = await e.arrayBuffer();
    if (!(n instanceof ArrayBuffer)) throw Error('Unexpected file type');
    return u.decodeAudioData(n);
}
async function d(e) {
    var n;
    let t = await ((n = (n) => {
        n.readAsDataURL(e);
    }),
    new Promise((e, t) => {
        let l = new FileReader(),
            a = () => {
                l.removeEventListener('load', a), l.removeEventListener('error', t), e(l.result);
            };
        l.addEventListener('load', a), l.addEventListener('error', t), n(l);
    }));
    if ('string' != typeof t) throw Error('Unexpected file type');
    return t;
}
async function f(e) {
    let { readPromise: n, guildId: t, name: l, volume: a, emojiId: i, emojiName: r } = e;
    return (0, s.Dx)({
        guildId: t,
        name: l,
        sound: await n,
        volume: a,
        emojiId: i,
        emojiName: r
    });
}
async function m(e) {
    let n = [],
        t = (function (e) {
            if (1 === e.length) return e[0];
            if (2 === e.length) {
                let n = e[0],
                    t = e[1],
                    l = [];
                for (let e = 0; e < n.length; e++) l.push(n[e]), l.push(t[e]);
                let a = new Float32Array(l.length);
                return a.set(l), a;
            }
            throw Error('Only handles up to 2 channels');
        })(
            (function (e) {
                let { numberOfChannels: n } = e,
                    t = [];
                for (let l = 0; l < n; l++) t.push(e.getChannelData(l));
                return t;
            })(e)
        ),
        l = new AudioData({
            format: 'f32',
            sampleRate: e.sampleRate,
            numberOfFrames: e.length,
            numberOfChannels: e.numberOfChannels,
            timestamp: 1000000 * e.duration,
            data: t
        }),
        i = new AudioEncoder({
            output: function (t) {
                a()(null != t.duration, 'Chunk duration must not be null');
                let l = (t.duration / 1000000) * e.sampleRate,
                    i = new Uint8Array(t.byteLength);
                t.copyTo(i),
                    n.push({
                        buffer: i,
                        numSamples: l
                    });
            },
            error: (e) => {
                throw Error('Audio encoding error: '.concat(e.message));
            }
        });
    return (
        i.configure({
            codec: 'opus',
            sampleRate: e.sampleRate,
            numberOfChannels: e.numberOfChannels
        }),
        i.encode(l),
        await i.flush(),
        new Blob(
            [
                (0, o.Z)(n, {
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
async function h(e, n) {
    let t = (function (e, n) {
        let { startMs: t, endMs: l } = n,
            { sampleRate: a, numberOfChannels: i, duration: s } = e,
            o = s * r.Z.Millis.SECOND,
            c = Math.min(l, o);
        if (0 === t && c === o) return e;
        let d = Math.floor((t / o) * e.length),
            f = Math.floor((c / o) * e.length),
            m = u.createBuffer(i, f - d, a);
        for (let n = 0; n < i; n++) {
            let t = m.getChannelData(n),
                l = e.getChannelData(n),
                a = 0;
            for (let e = d; e <= f; e++) (t[a] = l[e]), a++;
        }
        return m;
    })(await c(e), n);
    return new File([await m(t)], 'sound.ogg', { type: 'audio/ogg' });
}
