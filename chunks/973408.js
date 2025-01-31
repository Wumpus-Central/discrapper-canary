n.d(t, { X: () => o });
var i = n(69122),
    r = n(825842),
    a = n(17146);
let s = {
    writeUnknownFields: !0,
    writerFactory: () => new l()
};
function o(e) {
    return e ? Object.assign(Object.assign({}, s), e) : s;
}
class l {
    constructor(e) {
        (this.stack = []), (this.textEncoder = null != e ? e : new TextEncoder()), (this.chunks = []), (this.buf = []);
    }
    finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e = 0;
        for (let t = 0; t < this.chunks.length; t++) e += this.chunks[t].length;
        let t = new Uint8Array(e),
            n = 0;
        for (let e = 0; e < this.chunks.length; e++) t.set(this.chunks[e], n), (n += this.chunks[e].length);
        return (this.chunks = []), t;
    }
    fork() {
        return (
            this.stack.push({
                chunks: this.chunks,
                buf: this.buf
            }),
            (this.chunks = []),
            (this.buf = []),
            this
        );
    }
    join() {
        let e = this.finish(),
            t = this.stack.pop();
        if (!t) throw Error('invalid state, fork stack empty');
        return (this.chunks = t.chunks), (this.buf = t.buf), this.uint32(e.byteLength), this.raw(e);
    }
    tag(e, t) {
        return this.uint32(((e << 3) | t) >>> 0);
    }
    raw(e) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])), this.chunks.push(e), this;
    }
    uint32(e) {
        for ((0, a.fp)(e); e > 127; ) this.buf.push((127 & e) | 128), (e >>>= 7);
        return this.buf.push(e), this;
    }
    int32(e) {
        return (0, a.ug)(e), (0, r.fC)(e, this.buf), this;
    }
    bool(e) {
        return this.buf.push(e ? 1 : 0), this;
    }
    bytes(e) {
        return this.uint32(e.byteLength), this.raw(e);
    }
    string(e) {
        let t = this.textEncoder.encode(e);
        return this.uint32(t.byteLength), this.raw(t);
    }
    float(e) {
        (0, a.E_)(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t);
    }
    double(e) {
        let t = new Uint8Array(8);
        return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t);
    }
    fixed32(e) {
        (0, a.fp)(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
    }
    sfixed32(e) {
        (0, a.ug)(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
    }
    sint32(e) {
        return (0, a.ug)(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), (0, r.fC)(e, this.buf), this;
    }
    sfixed64(e) {
        let t = new Uint8Array(8),
            n = new DataView(t.buffer),
            r = i.M.from(e);
        return n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t);
    }
    fixed64(e) {
        let t = new Uint8Array(8),
            n = new DataView(t.buffer),
            r = i.p.from(e);
        return n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t);
    }
    int64(e) {
        let t = i.M.from(e);
        return (0, r._y)(t.lo, t.hi, this.buf), this;
    }
    sint64(e) {
        let t = i.M.from(e),
            n = t.hi >> 31,
            a = (t.lo << 1) ^ n,
            s = ((t.hi << 1) | (t.lo >>> 31)) ^ n;
        return (0, r._y)(a, s, this.buf), this;
    }
    uint64(e) {
        let t = i.p.from(e);
        return (0, r._y)(t.lo, t.hi, this.buf), this;
    }
}
