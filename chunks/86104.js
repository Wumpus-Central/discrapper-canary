let n, r, a, s, o, h, l, u, c;
i.d(e, {
    Z: () => p,
    j: () => f
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
    i(610885),
    i(126298),
    i(411104);
var d = i(512722),
    m = i.n(d);
let f = (0, i(170830).G)(async () => {
    let t = await Promise.all([i.e('49670'), i.e('43903')]).then(i.bind(i, 241441)),
        e = await t.default();
    (a = e.cwrap('lottie_create', 'number', ['string'])), (s = e._lottie_destroy), (o = e._lottie_draw_into_bgra), (h = e._lottie_draw_into_rgba), (l = e._lottie_frame_count), (u = e._lottie_frame_rate), (c = e._memory_create), (n = e), (r = c(409600));
});
function v(t, e) {
    return new Uint8ClampedArray(n.HEAPU8.buffer, r, t * e * 4);
}
class p {
    get fps() {
        return u(this.native);
    }
    get frames() {
        return l(this.native);
    }
    get_bgra(t, e, i) {
        return m()(e <= 320, 'width exceeds static allocation.'), m()(i <= 320, 'height exceeds static allocation.'), o(this.native, r, t, e, i), v(e, i);
    }
    get_rgba(t, e, i) {
        return m()(e <= 320, 'width exceeds static allocation.'), m()(i <= 320, 'height exceeds static allocation.'), h(this.native, r, t, e, i), v(e, i);
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
