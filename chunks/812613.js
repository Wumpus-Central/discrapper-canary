n.d(t, {
    NF: () => g,
    Zk: () => f,
    bb: () => d,
    kV: () => p,
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
var a = n(512722),
    i = n.n(a),
    r = n(304809),
    l = n(70956),
    o = n(208049),
    s = n(419202);
let u = null;
try {
    let e = (0, r.N)();
    if (null == e) throw Error("Failed to create media audio context");
    u = new AudioContext({ sampleRate: Math.min(e.sampleRate, 48000) });
} catch (e) {}
async function c(e) {
    if (null == u) throw Error("Failed to create audio context");
    let t = await e.arrayBuffer();
    if (!(t instanceof ArrayBuffer)) throw Error("Unexpected file type");
    return u.decodeAudioData(t);
}
async function f(e) {
    var t;
    let n = await ((t = (t) => {
        t.readAsDataURL(e);
    }),
    new Promise((e, n) => {
        let a = new FileReader(),
            i = () => {
                a.removeEventListener("load", i), a.removeEventListener("error", n), e(a.result);
            };
        a.addEventListener("load", i), a.addEventListener("error", n), t(a);
    }));
    if ("string" != typeof n) throw Error("Unexpected file type");
    return n;
}
async function d(e) {
    let { readPromise: t, guildId: n, name: a, volume: i, emojiId: r, emojiName: l } = e;
    return (0, o.Dx)({
        guildId: n,
        name: a,
        sound: await t,
        volume: i,
        emojiId: r,
        emojiName: l,
    });
}
async function h(e) {
    let t = [],
        n = (function (e) {
            if (1 === e.length) return e[0];
            if (2 === e.length) {
                let t = e[0],
                    n = e[1],
                    a = [];
                for (let e = 0; e < t.length; e++) a.push(t[e]), a.push(n[e]);
                let i = new Float32Array(a.length);
                return i.set(a), i;
            }
            throw Error("Only handles up to 2 channels");
        })(
            (function (e) {
                let { numberOfChannels: t } = e,
                    n = [];
                for (let a = 0; a < t; a++) n.push(e.getChannelData(a));
                return n;
            })(e),
        ),
        a = new AudioData({
            format: "f32",
            sampleRate: e.sampleRate,
            numberOfFrames: e.length,
            numberOfChannels: e.numberOfChannels,
            timestamp: 1000 * e.duration * 1000,
            data: n,
        }),
        r = new AudioEncoder({
            output: function (n) {
                i()(null != n.duration, "Chunk duration must not be null");
                let a = (n.duration / 1000000) * e.sampleRate,
                    r = new Uint8Array(n.byteLength);
                n.copyTo(r),
                    t.push({
                        buffer: r,
                        numSamples: a,
                    });
            },
            error: (e) => {
                throw Error("Audio encoding error: ".concat(e.message));
            },
        });
    return (
        r.configure({
            codec: "opus",
            sampleRate: e.sampleRate,
            numberOfChannels: e.numberOfChannels,
        }),
        r.encode(a),
        await r.flush(),
        new Blob(
            [
                (0, s.Z)(t, {
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
async function p(e, t) {
    let n = (function (e, t) {
        let { startMs: n, endMs: a } = t,
            { sampleRate: i, numberOfChannels: r, duration: o } = e,
            s = o * l.Z.Millis.SECOND,
            c = Math.min(a, s);
        if (0 === n && c === s) return e;
        if (null == u) throw Error("Failed to create audio context");
        let f = Math.floor((n / s) * e.length),
            d = Math.floor((c / s) * e.length),
            h = u.createBuffer(r, d - f, i);
        for (let t = 0; t < r; t++) {
            let n = h.getChannelData(t),
                a = e.getChannelData(t),
                i = 0;
            for (let e = f; e <= d; e++) (n[i] = a[e]), i++;
        }
        return h;
    })(await c(e), t);
    return new File([await h(n)], "sound.ogg", { type: "audio/ogg" });
}
async function g(e) {
    let t = new File([e], "audio.mp4", { type: e.type }),
        n = await c(t);
    return await h(n);
}
