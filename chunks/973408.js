r.d(n, {
    X: function () {
        return l;
    }
});
var i = r(69122),
    a = r(825842),
    o = r(17146);
let s = {
    writeUnknownFields: !0,
    writerFactory: () => new u()
};
function l(e) {
    return e ? Object.assign(Object.assign({}, s), e) : s;
}
class u {
    constructor(e) {
        (this.stack = []), (this.textEncoder = null != e ? e : new TextEncoder()), (this.chunks = []), (this.buf = []);
    }
    finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e = 0;
        for (let n = 0; n < this.chunks.length; n++) e += this.chunks[n].length;
        let n = new Uint8Array(e),
            r = 0;
        for (let e = 0; e < this.chunks.length; e++) n.set(this.chunks[e], r), (r += this.chunks[e].length);
        return (this.chunks = []), n;
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
            n = this.stack.pop();
        if (!n) throw Error('invalid state, fork stack empty');
        return (this.chunks = n.chunks), (this.buf = n.buf), this.uint32(e.byteLength), this.raw(e);
    }
    tag(e, n) {
        return this.uint32(((e << 3) | n) >>> 0);
    }
    raw(e) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])), this.chunks.push(e), this;
    }
    uint32(e) {
        for ((0, o.fp)(e); e > 127; ) this.buf.push((127 & e) | 128), (e >>>= 7);
        return this.buf.push(e), this;
    }
    int32(e) {
        return (0, o.ug)(e), (0, a.fC)(e, this.buf), this;
    }
    bool(e) {
        return this.buf.push(e ? 1 : 0), this;
    }
    bytes(e) {
        return this.uint32(e.byteLength), this.raw(e);
    }
    string(e) {
        let n = this.textEncoder.encode(e);
        return this.uint32(n.byteLength), this.raw(n);
    }
    float(e) {
        (0, o.E_)(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setFloat32(0, e, !0), this.raw(n);
    }
    double(e) {
        let n = new Uint8Array(8);
        return new DataView(n.buffer).setFloat64(0, e, !0), this.raw(n);
    }
    fixed32(e) {
        (0, o.fp)(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setUint32(0, e, !0), this.raw(n);
    }
    sfixed32(e) {
        (0, o.ug)(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setInt32(0, e, !0), this.raw(n);
    }
    sint32(e) {
        return (0, o.ug)(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), (0, a.fC)(e, this.buf), this;
    }
    sfixed64(e) {
        let n = new Uint8Array(8),
            r = new DataView(n.buffer),
            a = i.M.from(e);
        return r.setInt32(0, a.lo, !0), r.setInt32(4, a.hi, !0), this.raw(n);
    }
    fixed64(e) {
        let n = new Uint8Array(8),
            r = new DataView(n.buffer),
            a = i.p.from(e);
        return r.setInt32(0, a.lo, !0), r.setInt32(4, a.hi, !0), this.raw(n);
    }
    int64(e) {
        let n = i.M.from(e);
        return (0, a._y)(n.lo, n.hi, this.buf), this;
    }
    sint64(e) {
        let n = i.M.from(e),
            r = n.hi >> 31,
            o = (n.lo << 1) ^ r,
            s = ((n.hi << 1) | (n.lo >>> 31)) ^ r;
        return (0, a._y)(o, s, this.buf), this;
    }
    uint64(e) {
        let n = i.p.from(e);
        return (0, a._y)(n.lo, n.hi, this.buf), this;
    }
}
