function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
n.d(t, {
    A: () => o,
}),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(65821),
    n(896048),
    n(834879),
    n(321073);
class r {
    appendBytes(e) {
        if (this._offset + e.length > this._buffer.length) {
            let t = this._offset + e.length,
                n = new Uint8Array(Math.pow(2, Math.ceil(Math.log2(Math.max(2 * this._buffer.length, t)))));
            n.set(this._buffer.subarray(0, this._offset)), (this._buffer = n);
        }
        this._buffer.set(e, this._offset), (this._offset += e.length);
    }
    addPage(e) {
        if (e.segments.length > 255)
            throw Error("Too many segments: ".concat(e.segments.length, " exceeds limit of ").concat(255));
        for (let [t, n] of e.segments.entries())
            if (n.length > 255)
                throw Error(
                    "Segment at index ".concat(t, " too large (length ").concat(n.length, " exceeds ").concat(255, ")"),
                );
        let t = e.segments.reduce((e, t) => e + t.length, 0),
            n = 27 + e.segments.length + t;
        if (n > 65307) throw Error("Page too large (size ".concat(n, " exceeds ").concat(65307, ")"));
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
        let o = this._offset;
        for (let t of (this.appendBytes([0, 0, 0, 0, e.segments.length]),
        this.appendBytes(e.segments.map((e) => e.length)),
        e.segments))
            this.appendBytes(t);
        let i = this._buffer.subarray(a, this._offset).reduce((e, t) => ((e << 8) >>> 0) ^ s[(e >>> 24) ^ t], 0) >>> 0;
        this._buffer.set([255 & i, (i >> 8) & 255, (i >> 16) & 255, (i >> 24) & 255], o), this._pageSequenceNumber++;
    }
    finalize(e) {
        this.addPage({
            pageType: 4,
            granulePosition: e,
            segments: [],
        });
        let t = this._buffer,
            n = this._offset;
        return (
            (this._buffer = new Uint8Array(4096)), (this._offset = 0), (this._pageSequenceNumber = 0), t.subarray(0, n)
        );
    }
    constructor() {
        a(this, "_buffer", new Uint8Array(4096)), a(this, "_pageSequenceNumber", 0), a(this, "_offset", 0);
    }
}

function o(e, t) {
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
        o = new r();
    o.addPage({
        pageType: 2,
        granulePosition: 0,
        segments: [n],
    });
    let s = 0;
    for (let t of (o.addPage({
        pageType: 0,
        granulePosition: s,
        segments: [a],
    }),
    e)) {
        let e = (function (e) {
            let t = Math.floor(e.length / 255),
                n = [];
            for (let a = 0; a <= t; a++) {
                let r = 0 === a ? 0 : 255 * a,
                    o = a === t ? e.length : (a + 1) * 255;
                n.push(e.slice(r, o));
            }
            return n;
        })(t.buffer);
        (s += t.numSamples),
            o.addPage({
                pageType: 0,
                granulePosition: s,
                segments: e,
            });
    }
    return o.finalize(s);
}
let s = (function () {
    let e = new Uint32Array(256);
    for (let t = 256; t > 0; t--) {
        let n = t << 24;
        for (let e = 8; e > 0; e--) n = 0x80000000 & n ? 0x4c11db7 ^ (n << 1) : n << 1;
        e[t] = n;
    }
    return e;
})();
