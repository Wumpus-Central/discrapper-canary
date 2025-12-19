t.d(n, {
    NF: () => b,
    Zk: () => f,
    bb: () => u,
    kV: () => p,
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
    r = t.n(a),
    o = t(304809),
    i = t(70956),
    l = t(208049),
    c = t(419202);
let d = null;
try {
    let e = (0, o.N)();
    if (null == e) throw Error("Failed to create media audio context");
    d = new AudioContext({ sampleRate: Math.min(e.sampleRate, 48000) });
} catch (e) {}
async function s(e) {
    if (null == d) throw Error("Failed to create audio context");
    let n = await e.arrayBuffer();
    if (!(n instanceof ArrayBuffer)) throw Error("Unexpected file type");
    return d.decodeAudioData(n);
}
async function f(e) {
    var n;
    let t = await ((n = (n) => {
        n.readAsDataURL(e);
    }),
    new Promise((e, t) => {
        let a = new FileReader(),
            r = () => {
                a.removeEventListener("load", r), a.removeEventListener("error", t), e(a.result);
            };
        a.addEventListener("load", r), a.addEventListener("error", t), n(a);
    }));
    if ("string" != typeof t) throw Error("Unexpected file type");
    return t;
}
async function u(e) {
    let { readPromise: n, guildId: t, name: a, volume: r, emojiId: o, emojiName: i } = e;
    return (0, l.Dx)({
        guildId: t,
        name: a,
        sound: await n,
        volume: r,
        emojiId: o,
        emojiName: i,
    });
}
async function h(e) {
    let n = [],
        t = (function (e) {
            if (1 === e.length) return e[0];
            if (2 === e.length) {
                let n = e[0],
                    t = e[1],
                    a = [];
                for (let e = 0; e < n.length; e++) a.push(n[e]), a.push(t[e]);
                let r = new Float32Array(a.length);
                return r.set(a), r;
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
        o = new AudioEncoder({
            output: function (t) {
                r()(null != t.duration, "Chunk duration must not be null");
                let a = (t.duration / 1000000) * e.sampleRate,
                    o = new Uint8Array(t.byteLength);
                t.copyTo(o),
                    n.push({
                        buffer: o,
                        numSamples: a,
                    });
            },
            error: (e) => {
                throw Error("Audio encoding error: ".concat(e.message));
            },
        });
    return (
        o.configure({
            codec: "opus",
            sampleRate: e.sampleRate,
            numberOfChannels: e.numberOfChannels,
        }),
        o.encode(a),
        await o.flush(),
        new Blob(
            [
                (0, c.Z)(n, {
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
async function p(e, n) {
    let t = (function (e, n) {
        let { startMs: t, endMs: a } = n,
            { sampleRate: r, numberOfChannels: o, duration: l } = e,
            c = l * i.Z.Millis.SECOND,
            s = Math.min(a, c);
        if (0 === t && s === c) return e;
        if (null == d) throw Error("Failed to create audio context");
        let f = Math.floor((t / c) * e.length),
            u = Math.floor((s / c) * e.length),
            h = d.createBuffer(o, u - f, r);
        for (let n = 0; n < o; n++) {
            let t = h.getChannelData(n),
                a = e.getChannelData(n),
                r = 0;
            for (let e = f; e <= u; e++) (t[r] = a[e]), r++;
        }
        return h;
    })(await s(e), n);
    return new File([await h(t)], "sound.ogg", { type: "audio/ogg" });
}
async function b(e) {
    let n = new File([e], "audio.mp4", { type: e.type }),
        t = await s(n);
    return await h(t);
}
