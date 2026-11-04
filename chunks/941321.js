let _,
    r = null;
function a() {
    return ((null === r || 0 === r.byteLength) && (r = new Uint8Array(_.memory.buffer)), r);
}
let f = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
f.decode();
let i = 0,
    l = 0;
n.d(
    t,
    {},
    {
        bL: function () {
            let e = _.__wbindgen_externrefs,
                t = e.grow(4);
            (e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1));
        },
        iI: function (e, t, n, r, f, i, d, c, o) {
            let b,
                s = ((b = (0, _.__wbindgen_malloc)(+e.length, 1) >>> 0), a().set(e, b / 1), (l = e.length), b),
                u = l,
                g = _.crop_and_rotate_gif(s, u, t, n, r, f, i, d, null == c ? 0xffffff : c, null == o ? 0xffffff : o);
            if (g[3]) {
                let e;
                throw ((w = g[2]), (e = _.__wbindgen_externrefs.get(w)), _.__externref_table_dealloc(w), e);
            }
            var w,
                p,
                x,
                h = ((p = g[0]), (x = g[1]), (p >>>= 0), a().subarray(p / 1, p / 1 + x)).slice();
            return (_.__wbindgen_free(g[0], +g[1], 1), h);
        },
        lI: function (e) {
            _ = e;
        },
        pY: function (e, t) {
            var n, _;
            return (
                (n = e >>> 0),
                (i += _ = t) >= 0x7ff00000 &&
                    ((f = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })).decode(), (i = _)),
                f.decode(a().subarray(n, n + _))
            );
        },
    },
);
