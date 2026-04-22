"use strict";
var r = n(195554),
    i = n(549412),
    s = n(382811),
    a = n(231428),
    o = n(163173),
    l = n(267795),
    u = n(236525),
    d = Object.prototype.toString;
function c(e) {
    if (!(this instanceof c)) return new c(e);
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
    if (n !== a.Z_OK) throw Error(o[n]);
    (this.header = new u()), r.inflateGetHeader(this.strm, this.header);
}
function _(e, t) {
    var n = new c(t);
    if ((n.push(e, !0), n.err)) throw n.msg || o[n.err];
    return n.result;
}
(c.prototype.push = function (e, t) {
    var n,
        o,
        l,
        u,
        c,
        _,
        f = this.strm,
        E = this.options.chunkSize,
        h = this.options.dictionary,
        p = !1;
    if (this.ended) return !1;
    (o = t === ~~t ? t : !0 === t ? a.Z_FINISH : a.Z_NO_FLUSH),
        "string" == typeof e
            ? (f.input = s.binstring2buf(e))
            : "[object ArrayBuffer]" === d.call(e)
              ? (f.input = new Uint8Array(e))
              : (f.input = e),
        (f.next_in = 0),
        (f.avail_in = f.input.length);
    do {
        if (
            (0 === f.avail_out && ((f.output = new i.Buf8(E)), (f.next_out = 0), (f.avail_out = E)),
            (n = r.inflate(f, a.Z_NO_FLUSH)) === a.Z_NEED_DICT &&
                h &&
                ((_ =
                    "string" == typeof h
                        ? s.string2buf(h)
                        : "[object ArrayBuffer]" === d.call(h)
                          ? new Uint8Array(h)
                          : h),
                (n = r.inflateSetDictionary(this.strm, _))),
            n === a.Z_BUF_ERROR && !0 === p && ((n = a.Z_OK), (p = !1)),
            n !== a.Z_STREAM_END && n !== a.Z_OK)
        )
            return this.onEnd(n), (this.ended = !0), !1;
        f.next_out &&
            (0 === f.avail_out ||
                n === a.Z_STREAM_END ||
                (0 === f.avail_in && (o === a.Z_FINISH || o === a.Z_SYNC_FLUSH))) &&
            ("string" === this.options.to
                ? ((l = s.utf8border(f.output, f.next_out)),
                  (u = f.next_out - l),
                  (c = s.buf2string(f.output, l)),
                  (f.next_out = u),
                  (f.avail_out = E - u),
                  u && i.arraySet(f.output, f.output, l, u, 0),
                  this.onData(c))
                : this.onData(i.shrinkBuf(f.output, f.next_out))),
            0 === f.avail_in && 0 === f.avail_out && (p = !0);
    } while ((f.avail_in > 0 || 0 === f.avail_out) && n !== a.Z_STREAM_END);
    return (n === a.Z_STREAM_END && (o = a.Z_FINISH), o === a.Z_FINISH)
        ? ((n = r.inflateEnd(this.strm)), this.onEnd(n), (this.ended = !0), n === a.Z_OK)
        : (o === a.Z_SYNC_FLUSH && (this.onEnd(a.Z_OK), (f.avail_out = 0)), !0);
}),
    (c.prototype.onData = function (e) {
        this.chunks.push(e);
    }),
    (c.prototype.onEnd = function (e) {
        e === a.Z_OK &&
            ("string" === this.options.to
                ? (this.result = this.chunks.join(""))
                : (this.result = i.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = e),
            (this.msg = this.strm.msg);
    }),
    (t.Inflate = c),
    (t.inflate = _),
    (t.inflateRaw = function (e, t) {
        return ((t = t || {}).raw = !0), _(e, t);
    }),
    (t.ungzip = _);
