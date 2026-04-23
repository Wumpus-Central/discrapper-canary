n.d(t, { YK: () => f, Yo: () => h, R_: () => y, JX: () => p }),
    n(321073),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(284009),
    a = n.n(i),
    r = n(602674),
    l = n(927813),
    o = n(796774);
class s {
    _buffer = new Uint8Array(4096);
    _pageSequenceNumber = 0;
    _offset = 0;
    appendBytes(e) {
        if (this._offset + e.length > this._buffer.length) {
            let t = this._offset + e.length,
                n = new Uint8Array(Math.pow(2, Math.ceil(Math.log2(Math.max(2 * this._buffer.length, t)))));
            n.set(this._buffer.subarray(0, this._offset)), (this._buffer = n);
        }
        this._buffer.set(e, this._offset), (this._offset += e.length);
    }
    addPage(e) {
        if (e.segments.length > 255) throw Error(`Too many segments: ${e.segments.length} exceeds limit of 255`);
        for (let [t, n] of e.segments.entries())
            if (n.length > 255) throw Error(`Segment at index ${t} too large (length ${n.length} exceeds 255)`);
        let t = e.segments.reduce((e, t) => e + t.length, 0),
            n = 27 + e.segments.length + t;
        if (n > 65307) throw Error(`Page too large (size ${n} exceeds 65307)`);
        let i = this._offset,
            a = 0;
        switch (e.pageType) {
            case 1:
                a = 1;
                break;
            case 2:
                a = 2;
                break;
            case 4:
                a = 4;
        }
        this.appendBytes([
            79,
            103,
            103,
            83,
            0,
            a,
            255 & e.granulePosition,
            (e.granulePosition >> 8) & 255,
            (e.granulePosition >> 16) & 255,
            (e.granulePosition >> 24) & 255,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            255 & this._pageSequenceNumber,
            (this._pageSequenceNumber >> 8) & 255,
            (this._pageSequenceNumber >> 16) & 255,
            (this._pageSequenceNumber >> 24) & 255,
        ]);
        let r = this._offset;
        for (let t of (this.appendBytes([0, 0, 0, 0, e.segments.length]),
        this.appendBytes(e.segments.map((e) => e.length)),
        e.segments))
            this.appendBytes(t);
        let l = this._buffer.subarray(i, this._offset).reduce((e, t) => ((e << 8) >>> 0) ^ u[(e >>> 24) ^ t], 0) >>> 0;
        this._buffer.set([255 & l, (l >> 8) & 255, (l >> 16) & 255, (l >> 24) & 255], r), this._pageSequenceNumber++;
    }
    finalize(e) {
        this.addPage({ pageType: 4, granulePosition: e, segments: [] });
        let t = this._buffer,
            n = this._offset;
        return (
            (this._buffer = new Uint8Array(4096)), (this._offset = 0), (this._pageSequenceNumber = 0), t.subarray(0, n)
        );
    }
}
let u = (function () {
        let e = new Uint32Array(256);
        for (let t = 256; t > 0; t--) {
            let n = t << 24;
            for (let e = 8; e > 0; e--) n = 0x80000000 & n ? 0x4c11db7 ^ (n << 1) : n << 1;
            e[t] = n;
        }
        return e;
    })(),
    c = null;
try {
    let e = (0, r.v)();
    if (null == e) throw Error("Failed to create media audio context");
    c = new AudioContext({ sampleRate: Math.min(e.sampleRate, 48e3) });
} catch (e) {}
async function d(e) {
    if (null == c) throw Error("Failed to create audio context");
    let t = await e.arrayBuffer();
    if (!(t instanceof ArrayBuffer)) throw Error("Unexpected file type");
    return c.decodeAudioData(t);
}
async function f(e) {
    var t;
    let n = await ((t = (t) => {
        t.readAsDataURL(e);
    }),
    new Promise((e, n) => {
        let i = new FileReader(),
            a = () => {
                i.removeEventListener("load", a), i.removeEventListener("error", n), e(i.result);
            };
        i.addEventListener("load", a), i.addEventListener("error", n), t(i);
    }));
    if ("string" != typeof n) throw Error("Unexpected file type");
    return n;
}
async function p(e) {
    let { readPromise: t, guildId: n, name: i, volume: a, emojiId: r, emojiName: l } = e;
    return (0, o.lT)({ guildId: n, name: i, sound: await t, volume: a, emojiId: r, emojiName: l });
}
async function g(e) {
    let t = [],
        n = (function (e) {
            if (1 === e.length) return e[0];
            if (2 === e.length) {
                let t = e[0],
                    n = e[1],
                    i = [];
                for (let e = 0; e < t.length; e++) i.push(t[e]), i.push(n[e]);
                let a = new Float32Array(i.length);
                return a.set(i), a;
            }
            throw Error("Only handles up to 2 channels");
        })(
            (function (e) {
                let { numberOfChannels: t } = e,
                    n = [];
                for (let i = 0; i < t; i++) n.push(e.getChannelData(i));
                return n;
            })(e),
        ),
        i = new AudioData({
            format: "f32",
            sampleRate: e.sampleRate,
            numberOfFrames: e.length,
            numberOfChannels: e.numberOfChannels,
            timestamp: 1e3 * e.duration * 1e3,
            data: n,
        }),
        r = new AudioEncoder({
            output: function (n) {
                a()(null != n.duration, "Chunk duration must not be null");
                let i = (n.duration / 1e6) * e.sampleRate,
                    r = new Uint8Array(n.byteLength);
                n.copyTo(r), t.push({ buffer: r, numSamples: i });
            },
            error: (e) => {
                throw Error(`Audio encoding error: ${e.message}`);
            },
        });
    return (
        r.configure({ codec: "opus", sampleRate: e.sampleRate, numberOfChannels: e.numberOfChannels }),
        r.encode(i),
        await r.flush(),
        new Blob(
            [
                (function (e, t) {
                    let n = new Uint8Array([
                            79,
                            112,
                            117,
                            115,
                            72,
                            101,
                            97,
                            100,
                            1,
                            t.channelCount,
                            0,
                            0,
                            255 & t.inputSampleRate,
                            (t.inputSampleRate >> 8) & 255,
                            (t.inputSampleRate >> 16) & 255,
                            (t.inputSampleRate >> 24) & 255,
                            255 & t.outputGain,
                            (t.outputGain >> 8) & 255,
                            t.channelMappingFamily,
                        ]),
                        i = new Uint8Array([79, 112, 117, 115, 84, 97, 103, 115, 0, 0, 0, 0, 0, 0, 0, 0]),
                        a = new s();
                    a.addPage({ pageType: 2, granulePosition: 0, segments: [n] });
                    let r = 0;
                    for (let t of (a.addPage({ pageType: 0, granulePosition: r, segments: [i] }), e)) {
                        let e = (function (e) {
                            let t = Math.floor(e.length / 255),
                                n = [];
                            for (let i = 0; i <= t; i++) {
                                let a = 0 === i ? 0 : 255 * i,
                                    r = i === t ? e.length : (i + 1) * 255;
                                n.push(e.slice(a, r));
                            }
                            return n;
                        })(t.buffer);
                        (r += t.numSamples), a.addPage({ pageType: 0, granulePosition: r, segments: e });
                    }
                    return a.finalize(r);
                })(t, {
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
async function h(e, t) {
    let n = (function (e, t) {
        let { startMs: n, endMs: i } = t,
            { sampleRate: a, numberOfChannels: r, duration: o } = e,
            s = o * l.A.Millis.SECOND,
            u = Math.min(i, s);
        if (0 === n && u === s) return e;
        if (null == c) throw Error("Failed to create audio context");
        let d = Math.floor((n / s) * e.length),
            f = Math.floor((u / s) * e.length),
            p = c.createBuffer(r, f - d, a);
        for (let t = 0; t < r; t++) {
            let n = p.getChannelData(t),
                i = e.getChannelData(t),
                a = 0;
            for (let e = d; e <= f; e++) (n[a] = i[e]), a++;
        }
        return p;
    })(await d(e), t);
    return new File([await g(n)], "sound.ogg", { type: "audio/ogg" });
}
async function y(e) {
    let t = new File([e], "audio.mp4", { type: e.type }),
        n = await d(t);
    return await g(n);
}
