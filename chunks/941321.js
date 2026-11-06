let r;
function _(e, n) {
    return ((e >>>= 0), f().subarray(e / 1, e / 1 + n));
}
let i = null;
function f() {
    return ((null === i || 0 === i.byteLength) && (i = new Uint8Array(r.memory.buffer)), i);
}
function a(e, n) {
    let t = n(+e.length, 1) >>> 0;
    return (f().set(e, t / 1), (s = e.length), t);
}
function c(e) {
    let n = r.__wbindgen_externrefs.get(e);
    return (r.__externref_table_dealloc(e), n);
}
let l = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
l.decode();
let o = 0,
    s = 0;
t.d(
    n,
    {},
    {
        aL: function (e, n) {
            let t = a(e, r.__wbindgen_malloc),
                i = s,
                f = r.lossy_recompress_gif(t, i, n);
            if (f[3]) throw c(f[2]);
            var l = _(f[0], f[1]).slice();
            return (r.__wbindgen_free(f[0], +f[1], 1), l);
        },
        bL: function () {
            let e = r.__wbindgen_externrefs,
                n = e.grow(4);
            (e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1));
        },
        iI: function (e, n, t, i, f, l, o, d, u) {
            let b = a(e, r.__wbindgen_malloc),
                g = s,
                w = r.crop_and_rotate_gif(b, g, n, t, i, f, l, o, null == d ? 0xffffff : d, null == u ? 0xffffff : u);
            if (w[3]) throw c(w[2]);
            var p = _(w[0], w[1]).slice();
            return (r.__wbindgen_free(w[0], +w[1], 1), p);
        },
        lI: function (e) {
            r = e;
        },
        pY: function (e, n) {
            var t, r;
            return (
                (t = e >>> 0),
                (o += r = n) >= 0x7ff00000 &&
                    ((l = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })).decode(), (o = r)),
                l.decode(f().subarray(t, t + r))
            );
        },
    },
);
