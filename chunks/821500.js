"use strict";
var i = n(195554),
    r = n(549412),
    s = n(382811),
    a = n(231428),
    o = n(163173),
    l = n(267795),
    u = n(236525),
    c = Object.prototype.toString;
function d(e) {
    if (!(this instanceof d)) return new d(e);
    this.options = r.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e || {});
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
    var n = i.inflateInit2(this.strm, t.windowBits);
    if (n !== a.Z_OK) throw Error(o[n]);
    (this.header = new u()), i.inflateGetHeader(this.strm, this.header);
}
function _(e, t) {
    var n = new d(t);
    if ((n.push(e, !0), n.err)) throw n.msg || o[n.err];
    return n.result;
}
(d.prototype.push = function (e, t) {
    var n,
        o,
        l,
        u,
        d,
        _,
        h = this.strm,
        f = this.options.chunkSize,
        p = this.options.dictionary,
        E = !1;
    if (this.ended) return !1;
    (o = t === ~~t ? t : !0 === t ? a.Z_FINISH : a.Z_NO_FLUSH),
        "string" == typeof e
            ? (h.input = s.binstring2buf(e))
            : "[object ArrayBuffer]" === c.call(e)
              ? (h.input = new Uint8Array(e))
              : (h.input = e),
        (h.next_in = 0),
        (h.avail_in = h.input.length);
    do {
        if (
            (0 === h.avail_out && ((h.output = new r.Buf8(f)), (h.next_out = 0), (h.avail_out = f)),
            (n = i.inflate(h, a.Z_NO_FLUSH)) === a.Z_NEED_DICT &&
                p &&
                ((_ =
                    "string" == typeof p
                        ? s.string2buf(p)
                        : "[object ArrayBuffer]" === c.call(p)
                          ? new Uint8Array(p)
                          : p),
                (n = i.inflateSetDictionary(this.strm, _))),
            n === a.Z_BUF_ERROR && !0 === E && ((n = a.Z_OK), (E = !1)),
            n !== a.Z_STREAM_END && n !== a.Z_OK)
        )
            return this.onEnd(n), (this.ended = !0), !1;
        h.next_out &&
            (0 === h.avail_out ||
                n === a.Z_STREAM_END ||
                (0 === h.avail_in && (o === a.Z_FINISH || o === a.Z_SYNC_FLUSH))) &&
            ("string" === this.options.to
                ? ((l = s.utf8border(h.output, h.next_out)),
                  (u = h.next_out - l),
                  (d = s.buf2string(h.output, l)),
                  (h.next_out = u),
                  (h.avail_out = f - u),
                  u && r.arraySet(h.output, h.output, l, u, 0),
                  this.onData(d))
                : this.onData(r.shrinkBuf(h.output, h.next_out))),
            0 === h.avail_in && 0 === h.avail_out && (E = !0);
    } while ((h.avail_in > 0 || 0 === h.avail_out) && n !== a.Z_STREAM_END);
    return (n === a.Z_STREAM_END && (o = a.Z_FINISH), o === a.Z_FINISH)
        ? ((n = i.inflateEnd(this.strm)), this.onEnd(n), (this.ended = !0), n === a.Z_OK)
        : (o === a.Z_SYNC_FLUSH && (this.onEnd(a.Z_OK), (h.avail_out = 0)), !0);
}),
    (d.prototype.onData = function (e) {
        this.chunks.push(e);
    }),
    (d.prototype.onEnd = function (e) {
        e === a.Z_OK &&
            ("string" === this.options.to
                ? (this.result = this.chunks.join(""))
                : (this.result = r.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = e),
            (this.msg = this.strm.msg);
    }),
    (t.Inflate = d),
    (t.inflate = _),
    (t.inflateRaw = function (e, t) {
        return ((t = t || {}).raw = !0), _(e, t);
    }),
    (t.ungzip = _);
