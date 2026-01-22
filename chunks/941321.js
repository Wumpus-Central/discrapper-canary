let _;

function r(e) {
    _ = e;
}
n.d(t, {
    bL: () => o,
    iI: () => b,
    lI: () => r,
    pY: () => c,
});
let a = null;

function f() {
    return (null === a || 0 === a.byteLength) && (a = new Uint8Array(_.memory.buffer)), a;
}
let i = new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0,
});
i.decode();
let l = 0,
    d = 0;

function b(e, t, n, r, a, i, l, b) {
    let c,
        o = ((c = (0, _.__wbindgen_malloc)(+e.length, 1) >>> 0), f().set(e, c / 1), (d = e.length), c),
        s = d,
        u = _.crop_and_rotate_gif(o, s, t, n, r, a, i, null == l ? 0xffffff : l, null == b ? 0xffffff : b);
    if (u[3]) {
        let e;
        throw ((g = u[2]), (e = _.__wbindgen_externrefs.get(g)), _.__externref_table_dealloc(g), e);
    }
    var g,
        w,
        p,
        x = ((w = u[0]), (p = u[1]), (w >>>= 0), f().subarray(w / 1, w / 1 + p)).slice();
    return _.__wbindgen_free(u[0], +u[1], 1), x;
}

function c(e, t) {
    var n, _;
    return (
        (n = e >>> 0),
        (l += _ = t) >= 0x7ff00000 &&
            ((i = new TextDecoder("utf-8", {
                ignoreBOM: !0,
                fatal: !0,
            })).decode(),
            (l = _)),
        i.decode(f().subarray(n, n + _))
    );
}

function o() {
    let e = _.__wbindgen_externrefs,
        t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
}
