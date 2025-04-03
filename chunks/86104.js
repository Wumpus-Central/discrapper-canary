let r, n, a, s, o, h, l, u, c;
i.d(t, {
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
    let e = await Promise.all([i.e('10651'), i.e('43903')]).then(i.bind(i, 241441)),
        t = await e.default();
    (a = t.cwrap('lottie_create', 'number', ['string'])), (s = t._lottie_destroy), (o = t._lottie_draw_into_bgra), (h = t._lottie_draw_into_rgba), (l = t._lottie_frame_count), (u = t._lottie_frame_rate), (c = t._memory_create), (r = t), (n = c(409600));
});
function v(e, t) {
    return new Uint8ClampedArray(r.HEAPU8.buffer, n, e * t * 4);
}
class p {
    get fps() {
        return u(this.native);
    }
    get frames() {
        return l(this.native);
    }
    get_bgra(e, t, i) {
        return m()(t <= 320, 'width exceeds static allocation.'), m()(i <= 320, 'height exceeds static allocation.'), o(this.native, n, e, t, i), v(t, i);
    }
    get_rgba(e, t, i) {
        return m()(t <= 320, 'width exceeds static allocation.'), m()(i <= 320, 'height exceeds static allocation.'), h(this.native, n, e, t, i), v(t, i);
    }
    drop() {
        s(this.native);
    }
    constructor(e) {
        var t, i;
        if (
            ((i = void 0),
            (t = 'native') in this
                ? Object.defineProperty(this, t, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = i),
            (this.native = a(e)),
            0 === this.native)
        )
            throw Error("couldn't create wasm lottie. potentially bad json.");
    }
}
