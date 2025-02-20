n.d(e, {
    VR: () => h,
    bc: () => s,
    l3: () => o
});
var r = n(180450),
    i = n(362133);
let s = (t, e, n) => (t & e) ^ (~t & n),
    o = (t, e, n) => (t & e) ^ (t & n) ^ (e & n);
class h extends i.kb {
    constructor(t, e, n, r) {
        super(), (this.blockLen = t), (this.outputLen = e), (this.padOffset = n), (this.isLE = r), (this.finished = !1), (this.length = 0), (this.pos = 0), (this.destroyed = !1), (this.buffer = new Uint8Array(t)), (this.view = (0, i.GL)(this.buffer));
    }
    update(t) {
        (0, r.Gg)(this);
        let { view: e, buffer: n, blockLen: s } = this,
            o = (t = (0, i.O0)(t)).length;
        for (let r = 0; r < o; ) {
            let h = Math.min(s - this.pos, o - r);
            if (h === s) {
                let e = (0, i.GL)(t);
                for (; s <= o - r; r += s) this.process(e, r);
                continue;
            }
            n.set(t.subarray(r, r + h), this.pos), (this.pos += h), (r += h), this.pos === s && (this.process(e, 0), (this.pos = 0));
        }
        return (this.length += t.length), this.roundClean(), this;
    }
    digestInto(t) {
        (0, r.Gg)(this), (0, r.J8)(t, this), (this.finished = !0);
        let { buffer: e, view: n, blockLen: s, isLE: o } = this,
            { pos: h } = this;
        (e[h++] = 128), this.buffer.subarray(h).fill(0), this.padOffset > s - h && (this.process(n, 0), (h = 0));
        for (let t = h; t < s; t++) e[t] = 0;
        !(function (t, e, n, r) {
            if ('function' == typeof t.setBigUint64) return t.setBigUint64(e, n, r);
            let i = BigInt(32),
                s = BigInt(4294967295),
                o = Number((n >> i) & s),
                h = Number(n & s),
                a = 4 * !!r,
                f = 4 * !r;
            t.setUint32(e + a, o, r), t.setUint32(e + f, h, r);
        })(n, s - 8, BigInt(8 * this.length), o),
            this.process(n, 0);
        let a = (0, i.GL)(t),
            f = this.outputLen;
        if (f % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
        let c = f / 4,
            l = this.get();
        if (c > l.length) throw Error('_sha2: outputLen bigger than state');
        for (let t = 0; t < c; t++) a.setUint32(4 * t, l[t], o);
    }
    digest() {
        let { buffer: t, outputLen: e } = this;
        this.digestInto(t);
        let n = t.slice(0, e);
        return this.destroy(), n;
    }
    _cloneInto(t) {
        t || (t = new this.constructor()), t.set(...this.get());
        let { blockLen: e, buffer: n, length: r, finished: i, destroyed: s, pos: o } = this;
        return (t.length = r), (t.pos = o), (t.finished = i), (t.destroyed = s), r % e && t.buffer.set(n), t;
    }
}
