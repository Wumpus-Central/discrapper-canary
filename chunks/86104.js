let n, r, a, s, h, o, l, c, u;
i.d(e, {
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
var m = i(512722),
    d = i.n(m);
let f = (0, i(170830).G)(async () => {
    let t = await Promise.all([i.e('43676'), i.e('43903')]).then(i.bind(i, 241441)),
        e = await t.default();
    (a = e.cwrap('lottie_create', 'number', ['string'])), (s = e._lottie_destroy), (h = e._lottie_draw_into_bgra), (o = e._lottie_draw_into_rgba), (l = e._lottie_frame_count), (c = e._lottie_frame_rate), (u = e._memory_create), (n = e), (r = u(409600));
});
function v(t, e) {
    return new Uint8ClampedArray(n.HEAPU8.buffer, r, t * e * 4);
}
class p {
    get fps() {
        return c(this.native);
    }
    get frames() {
        return l(this.native);
    }
    get_bgra(t, e, i) {
        return d()(e <= 320, 'width exceeds static allocation.'), d()(i <= 320, 'height exceeds static allocation.'), h(this.native, r, t, e, i), v(e, i);
    }
    get_rgba(t, e, i) {
        return d()(e <= 320, 'width exceeds static allocation.'), d()(i <= 320, 'height exceeds static allocation.'), o(this.native, r, t, e, i), v(e, i);
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
