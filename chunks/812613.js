t.d(n, {
    Zk: () => d,
    bb: () => f,
    kV: () => g,
}),
    t(415506),
    t(644351),
    t(146733),
    t(539854),
    t(17294),
    t(227481),
    t(730884),
    t(20464),
    t(341884),
    t(364341),
    t(629680),
    t(505025),
    t(918970),
    t(121784),
    t(410992);
var a = t(512722),
    l = t.n(a),
    i = t(304809),
    r = t(70956),
    o = t(208049),
    s = t(419202);
let u = null;
try {
    let e = (0, i.N)();
    if (null == e) throw Error("Failed to create media audio context");
    u = new AudioContext({ sampleRate: Math.min(e.sampleRate, 48000) });
} catch (e) {}
async function c(e) {
    if (null == u) throw Error("Failed to create audio context");
    let n = await e.arrayBuffer();
    if (!(n instanceof ArrayBuffer)) throw Error("Unexpected file type");
    return u.decodeAudioData(n);
}
async function d(e) {
    var n;
    let t = await ((n = (n) => {
        n.readAsDataURL(e);
    }),
    new Promise((e, t) => {
        let a = new FileReader(),
            l = () => {
                a.removeEventListener("load", l), a.removeEventListener("error", t), e(a.result);
            };
        a.addEventListener("load", l), a.addEventListener("error", t), n(a);
    }));
    if ("string" != typeof t) throw Error("Unexpected file type");
    return t;
}
async function f(e) {
    let { readPromise: n, guildId: t, name: a, volume: l, emojiId: i, emojiName: r } = e;
    return (0, o.Dx)({
        guildId: t,
        name: a,
        sound: await n,
        volume: l,
        emojiId: i,
        emojiName: r,
    });
}
async function m(e) {
    let n = [],
        t = (function (e) {
            if (1 === e.length) return e[0];
            if (2 === e.length) {
                let n = e[0],
                    t = e[1],
                    a = [];
                for (let e = 0; e < n.length; e++) a.push(n[e]), a.push(t[e]);
                let l = new Float32Array(a.length);
                return l.set(a), l;
            }
            throw Error("Only handles up to 2 channels");
        })(
            (function (e) {
                let { numberOfChannels: n } = e,
                    t = [];
                for (let a = 0; a < n; a++) t.push(e.getChannelData(a));
                return t;
            })(e),
        ),
        a = new AudioData({
            format: "f32",
            sampleRate: e.sampleRate,
            numberOfFrames: e.length,
            numberOfChannels: e.numberOfChannels,
            timestamp: 1000 * e.duration * 1000,
            data: t,
        }),
        i = new AudioEncoder({
            output: function (t) {
                l()(null != t.duration, "Chunk duration must not be null");
                let a = (t.duration / 1000000) * e.sampleRate,
                    i = new Uint8Array(t.byteLength);
                t.copyTo(i),
                    n.push({
                        buffer: i,
                        numSamples: a,
                    });
            },
            error: (e) => {
                throw Error("Audio encoding error: ".concat(e.message));
            },
        });
    return (
        i.configure({
            codec: "opus",
            sampleRate: e.sampleRate,
            numberOfChannels: e.numberOfChannels,
        }),
        i.encode(a),
        await i.flush(),
        new Blob(
            [
                (0, s.Z)(n, {
                    channelCount: e.numberOfChannels,
                    inputSampleRate: e.sampleRate,
                    outputGain: 0,
                    channelMappingFamily: 0,
                }),
            ],
            { type: "audio/ogg" },
        )
    );
}
async function g(e, n) {
    let t = (function (e, n) {
        let { startMs: t, endMs: a } = n,
            { sampleRate: l, numberOfChannels: i, duration: o } = e,
            s = o * r.Z.Millis.SECOND,
            c = Math.min(a, s);
        if (0 === t && c === s) return e;
        if (null == u) throw Error("Failed to create audio context");
        let d = Math.floor((t / s) * e.length),
            f = Math.floor((c / s) * e.length),
            m = u.createBuffer(i, f - d, l);
        for (let n = 0; n < i; n++) {
            let t = m.getChannelData(n),
                a = e.getChannelData(n),
                l = 0;
            for (let e = d; e <= f; e++) (t[l] = a[e]), l++;
        }
        return m;
    })(await c(e), n);
    return new File([await m(t)], "sound.ogg", { type: "audio/ogg" });
}
