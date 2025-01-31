let r, n, a, s, o, u, c, h, l;
i.d(e, {
    Z: () => p,
    j: () => m
}),
    i(66153),
    i(970173),
    i(520712),
    i(268111),
    i(941497),
    i(32026),
    i(480839),
    i(744285),
    i(492257),
    i(873817),
    i(411104);
var f = i(512722),
    d = i.n(f);
let m = (0, i(170830).G)(async () => {
    let t = await Promise.all([i.e('91789'), i.e('43903')]).then(i.bind(i, 241441)),
        e = await t.default();
    (a = e.cwrap('lottie_create', 'number', ['string'])), (s = e._lottie_destroy), (o = e._lottie_draw_into_bgra), (u = e._lottie_draw_into_rgba), (c = e._lottie_frame_count), (h = e._lottie_frame_rate), (l = e._memory_create), (r = e), (n = l(409600));
});
function v(t, e) {
    return new Uint8ClampedArray(r.HEAPU8.buffer, n, t * e * 4);
}
class p {
    get fps() {
        return h(this.native);
    }
    get frames() {
        return c(this.native);
    }
    get_bgra(t, e, i) {
        return d()(e <= 320, 'width exceeds static allocation.'), d()(i <= 320, 'height exceeds static allocation.'), o(this.native, n, t, e, i), v(e, i);
    }
    get_rgba(t, e, i) {
        return d()(e <= 320, 'width exceeds static allocation.'), d()(i <= 320, 'height exceeds static allocation.'), u(this.native, n, t, e, i), v(e, i);
    }
    drop() {
        s(this.native);
    }
    constructor(t) {
        var e, i;
        if (
            ((i = void 0),
            (e = 'native') in this
                ? Object.defineProperty(this, e, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[e] = i),
            (this.native = a(t)),
            0 === this.native)
        )
            throw Error("couldn't create wasm lottie. potentially bad json.");
    }
}
