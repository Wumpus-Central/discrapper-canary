"use strict";
var r = n(195554),
    i = n(549412),
    a = n(382811),
    s = n(231428),
    o = n(163173),
    l = n(267795),
    u = n(236525),
    c = Object.prototype.toString;
function d(e) {
    if (!(this instanceof d)) return new d(e);
    this.options = i.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e || {});
    var t = this.options;
    t.raw &&
        t.windowBits >= 0 &&
        t.windowBits < 16 &&
        ((t.windowBits = -t.windowBits), 0 === t.windowBits && (t.windowBits = -15)),
        t.windowBits >= 0 && t.windowBits < 16 && !(e && e.windowBits) && (t.windowBits += 32),
        t.windowBits > 15 && t.windowBits < 48 && (15 & t.windowBits) == 0 && (t.windowBits |= 15),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new l()),
        (this.strm.avail_out = 0);
    var n = r.inflateInit2(this.strm, t.windowBits);
    if (n !== s.Z_OK) throw Error(o[n]);
    (this.header = new u()), r.inflateGetHeader(this.strm, this.header);
}
function _(e, t) {
    var n = new d(t);
    if ((n.push(e, !0), n.err)) throw n.msg || o[n.err];
    return n.result;
}
function f(e, t) {
    return ((t = t || {}).raw = !0), _(e, t);
}
(d.prototype.push = function (e, t) {
    var n,
        o,
        l,
        u,
        d,
        _,
        f = this.strm,
        p = this.options.chunkSize,
        h = this.options.dictionary,
        m = !1;
    if (this.ended) return !1;
    (o = t === ~~t ? t : !0 === t ? s.Z_FINISH : s.Z_NO_FLUSH),
        "string" == typeof e
            ? (f.input = a.binstring2buf(e))
            : "[object ArrayBuffer]" === c.call(e)
              ? (f.input = new Uint8Array(e))
              : (f.input = e),
        (f.next_in = 0),
        (f.avail_in = f.input.length);
    do {
        if (
            (0 === f.avail_out && ((f.output = new i.Buf8(p)), (f.next_out = 0), (f.avail_out = p)),
            (n = r.inflate(f, s.Z_NO_FLUSH)) === s.Z_NEED_DICT &&
                h &&
                ((_ =
                    "string" == typeof h
                        ? a.string2buf(h)
                        : "[object ArrayBuffer]" === c.call(h)
                          ? new Uint8Array(h)
                          : h),
                (n = r.inflateSetDictionary(this.strm, _))),
            n === s.Z_BUF_ERROR && !0 === m && ((n = s.Z_OK), (m = !1)),
            n !== s.Z_STREAM_END && n !== s.Z_OK)
        )
            return this.onEnd(n), (this.ended = !0), !1;
        f.next_out &&
            (0 === f.avail_out ||
                n === s.Z_STREAM_END ||
                (0 === f.avail_in && (o === s.Z_FINISH || o === s.Z_SYNC_FLUSH))) &&
            ("string" === this.options.to
                ? ((l = a.utf8border(f.output, f.next_out)),
                  (u = f.next_out - l),
                  (d = a.buf2string(f.output, l)),
                  (f.next_out = u),
                  (f.avail_out = p - u),
                  u && i.arraySet(f.output, f.output, l, u, 0),
                  this.onData(d))
                : this.onData(i.shrinkBuf(f.output, f.next_out))),
            0 === f.avail_in && 0 === f.avail_out && (m = !0);
    } while ((f.avail_in > 0 || 0 === f.avail_out) && n !== s.Z_STREAM_END);
    return (n === s.Z_STREAM_END && (o = s.Z_FINISH), o === s.Z_FINISH)
        ? ((n = r.inflateEnd(this.strm)), this.onEnd(n), (this.ended = !0), n === s.Z_OK)
        : (o === s.Z_SYNC_FLUSH && (this.onEnd(s.Z_OK), (f.avail_out = 0)), !0);
}),
    (d.prototype.onData = function (e) {
        this.chunks.push(e);
    }),
    (d.prototype.onEnd = function (e) {
        e === s.Z_OK &&
            ("string" === this.options.to
                ? (this.result = this.chunks.join(""))
                : (this.result = i.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = e),
            (this.msg = this.strm.msg);
    }),
    (t.Inflate = d),
    (t.inflate = _),
    (t.inflateRaw = f),
    (t.ungzip = _);
