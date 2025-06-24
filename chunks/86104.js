let r, n, a, s, o, h, l, u, c;
i.d(t, {
    Z: () => p,
    j: () => f
}),
    i(559231),
    i(227481),
    i(730884),
    i(20464),
    i(341884),
    i(364341),
    i(629680),
    i(505025),
    i(918970),
    i(121784),
    i(644351),
    i(146733),
    i(415506);
var d = i(512722),
    m = i.n(d);
let f = (0, i(170830).G)(async () => {
    let e = await Promise.all([i.e('43676'), i.e('43903')]).then(i.bind(i, 241441)),
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
