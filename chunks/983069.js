n.d(t, { YK: () => c, Yo: () => p, R_: () => g, JX: () => h }),
    n(321073),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var a = n(284009),
    r = n.n(a),
    i = n(602674),
    o = n(927813),
    l = n(796774);
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
        let a = this._offset,
            r = 0;
        switch (e.pageType) {
            case 1:
                r = 1;
                break;
            case 2:
                r = 2;
                break;
            case 4:
                r = 4;
        }
        this.appendBytes([
            79,
            103,
            103,
            83,
            0,
            r,
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
        let i = this._offset;
        for (let t of (this.appendBytes([0, 0, 0, 0, e.segments.length]),
        this.appendBytes(e.segments.map((e) => e.length)),
        e.segments))
            this.appendBytes(t);
        let o = this._buffer.subarray(a, this._offset).reduce((e, t) => ((e << 8) >>> 0) ^ u[(e >>> 24) ^ t], 0) >>> 0;
        this._buffer.set([255 & o, (o >> 8) & 255, (o >> 16) & 255, (o >> 24) & 255], i), this._pageSequenceNumber++;
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
    d = null;
try {
    let e = (0, i.v)();
    if (null == e) throw Error("Failed to create media audio context");
    d = new AudioContext({ sampleRate: Math.min(e.sampleRate, 48e3) });
} catch (e) {}
async function f(e) {
    if (null == d) throw Error("Failed to create audio context");
    let t = await e.arrayBuffer();
    if (!(t instanceof ArrayBuffer)) throw Error("Unexpected file type");
    return d.decodeAudioData(t);
}
async function c(e) {
    var t;
    let n = await ((t = (t) => {
        t.readAsDataURL(e);
    }),
    new Promise((e, n) => {
        let a = new FileReader(),
            r = () => {
                a.removeEventListener("load", r), a.removeEventListener("error", n), e(a.result);
            };
        a.addEventListener("load", r), a.addEventListener("error", n), t(a);
    }));
    if ("string" != typeof n) throw Error("Unexpected file type");
    return n;
}
async function h(e) {
    let { readPromise: t, guildId: n, name: a, volume: r, emojiId: i, emojiName: o } = e;
    return (0, l.lT)({ guildId: n, name: a, sound: await t, volume: r, emojiId: i, emojiName: o });
}
async function _(e) {
    let t = [],
        n = (function (e) {
            if (1 === e.length) return e[0];
            if (2 === e.length) {
                let t = e[0],
                    n = e[1],
                    a = [];
                for (let e = 0; e < t.length; e++) a.push(t[e]), a.push(n[e]);
                let r = new Float32Array(a.length);
                return r.set(a), r;
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
            timestamp: 1e3 * e.duration * 1e3,
            data: n,
        }),
        i = new AudioEncoder({
            output: function (n) {
                r()(null != n.duration, "Chunk duration must not be null");
                let a = (n.duration / 1e6) * e.sampleRate,
                    i = new Uint8Array(n.byteLength);
                n.copyTo(i), t.push({ buffer: i, numSamples: a });
            },
            error: (e) => {
                throw Error(`Audio encoding error: ${e.message}`);
            },
        });
    return (
        i.configure({ codec: "opus", sampleRate: e.sampleRate, numberOfChannels: e.numberOfChannels }),
        i.encode(a),
        await i.flush(),
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
                        a = new Uint8Array([79, 112, 117, 115, 84, 97, 103, 115, 0, 0, 0, 0, 0, 0, 0, 0]),
                        r = new s();
                    r.addPage({ pageType: 2, granulePosition: 0, segments: [n] });
                    let i = 0;
                    for (let t of (r.addPage({ pageType: 0, granulePosition: i, segments: [a] }), e)) {
                        let e = (function (e) {
                            let t = Math.floor(e.length / 255),
                                n = [];
                            for (let a = 0; a <= t; a++) {
                                let r = 0 === a ? 0 : 255 * a,
                                    i = a === t ? e.length : (a + 1) * 255;
                                n.push(e.slice(r, i));
                            }
                            return n;
                        })(t.buffer);
                        (i += t.numSamples), r.addPage({ pageType: 0, granulePosition: i, segments: e });
                    }
                    return r.finalize(i);
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
async function p(e, t) {
    let n = (function (e, t) {
        let { startMs: n, endMs: a } = t,
            { sampleRate: r, numberOfChannels: i, duration: l } = e,
            s = l * o.A.Millis.SECOND,
            u = Math.min(a, s);
        if (0 === n && u === s) return e;
        if (null == d) throw Error("Failed to create audio context");
        let f = Math.floor((n / s) * e.length),
            c = Math.floor((u / s) * e.length),
            h = d.createBuffer(i, c - f, r);
        for (let t = 0; t < i; t++) {
            let n = h.getChannelData(t),
                a = e.getChannelData(t),
                r = 0;
            for (let e = f; e <= c; e++) (n[r] = a[e]), r++;
        }
        return h;
    })(await f(e), t);
    return new File([await _(n)], "sound.ogg", { type: "audio/ogg" });
}
async function g(e) {
    let t = new File([e], "audio.mp4", { type: e.type }),
        n = await f(t);
    return await _(n);
}
