let _;
function r(e) {
    _ = e;
}
n.d(t, { bL: () => o, iI: () => b, lI: () => r, pY: () => c });
let a = null;
function f() {
    return (null === a || 0 === a.byteLength) && (a = new Uint8Array(_.memory.buffer)), a;
}
let i = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
i.decode();
let d = 0,
    l = 0;
function b(e, t, n, r, a, i, d, b, c) {
    let o,
        s = ((o = (0, _.__wbindgen_malloc)(+e.length, 1) >>> 0), f().set(e, o / 1), (l = e.length), o),
        u = l,
        g = _.crop_and_rotate_gif(s, u, t, n, r, a, i, d, null == b ? 0xffffff : b, null == c ? 0xffffff : c);
    if (g[3]) {
        let e;
        throw ((w = g[2]), (e = _.__wbindgen_externrefs.get(w)), _.__externref_table_dealloc(w), e);
    }
    var w,
        p,
        x,
        h = ((p = g[0]), (x = g[1]), (p >>>= 0), f().subarray(p / 1, p / 1 + x)).slice();
    return _.__wbindgen_free(g[0], +g[1], 1), h;
}
function c(e, t) {
    var n, _;
    return (
        (n = e >>> 0),
        (d += _ = t) >= 0x7ff00000 && ((i = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })).decode(), (d = _)),
        i.decode(f().subarray(n, n + _))
    );
}
function o() {
    let e = _.__wbindgen_externrefs,
        t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
}
