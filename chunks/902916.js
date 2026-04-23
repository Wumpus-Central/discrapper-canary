r.d(t, { _: () => f }), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var a = r(64700),
    n = r(626584);
r(323874), r(14289), r(35956), r(321073);
let i = null;
function o(e, t, r) {
    let a = e._malloc(t);
    if (0 === a) throw Error(`Failed to allocate ${t} bytes for ${r} - out of WASM memory`);
    return a;
}
async function l() {
    if (null != i) return i;
    try {
        let e = (await r.e("37971").then(r.bind(r, 543198))).default;
        return (i = await e({ locateFile: (e) => (e.endsWith(".wasm") ? new URL(r(14927), r.b).href : e) }));
    } catch (t) {
        let e = Error("WebP module failed to load. Ensure webp_wasm.js and webp_wasm.wasm are built and available.");
        throw ((e.cause = t), e);
    }
}
async function s(e) {
    if (!(e instanceof Uint8Array)) throw Error("webpData must be a Uint8Array");
    if (0 === e.length) throw Error("webpData cannot be empty");
    let t = await l(),
        r = o(t, e.length, "WebP input data");
    t.HEAPU8.set(e, r);
    let a = t._malloc(8);
    if (0 === a) throw (t._free(r), Error("Failed to allocate 8 bytes for WebPData struct - out of WASM memory"));
    (t.HEAPU32[a >> 2] = r), (t.HEAPU32[(a >> 2) + 1] = e.length);
    let n = t._malloc(32);
    if (0 === n)
        throw (
            (t._free(r),
            t._free(a),
            Error("Failed to allocate 32 bytes for WebPAnimDecoderOptions - out of WASM memory"))
        );
    t._WebPAnimDecoderOptionsInitInternal(n, 263);
    let i = t._WebPAnimDecoderNewInternal(a, n, 263);
    if ((t._free(n), 0 === i))
        throw (
            (t._free(r), t._free(a), Error("Failed to create WebP decoder - file may be corrupt or not a valid WebP"))
        );
    try {
        let e = o(t, 32, "WebPAnimInfo");
        t._WebPAnimDecoderGetInfo(i, e);
        let r = t.HEAPU32[e >> 2],
            a = t.HEAPU32[(e >> 2) + 1],
            n = t.HEAPU32[(e >> 2) + 4];
        t._free(e);
        let l = [],
            s = r * a * 4;
        for (; 0 !== t._WebPAnimDecoderHasMoreFrames(i); ) {
            let e = t._malloc(4);
            if (0 === e) throw Error("Failed to allocate 4 bytes for frame buffer pointer - out of WASM memory");
            let n = t._malloc(4);
            if (0 === n)
                throw (t._free(e), Error("Failed to allocate 4 bytes for timestamp pointer - out of WASM memory"));
            let o = t._WebPAnimDecoderGetNext(i, e, n);
            if (0 === o) {
                t._free(e), t._free(n);
                break;
            }
            let h = t.HEAPU32[e >> 2],
                c = t.HEAP32[n >> 2],
                f = new Uint8Array(t.HEAPU8.buffer, h, s).slice();
            l.push({ data: f, timestamp: c, width: r, height: a }), t._free(e), t._free(n);
        }
        return { frames: l, width: r, height: a, frameCount: n };
    } finally {
        t._WebPAnimDecoderDelete(i), t._free(r), t._free(a);
    }
}
async function h(e) {
    if (!(e instanceof Uint8Array) || 0 === e.length) return !1;
    try {
        let { frameCount: t } = await s(e);
        return t > 1;
    } catch {
        return !1;
    }
}
let c = new n.A("useAnimatedImageCheck");
function f(e) {
    let t = "image/gif" === e.type,
        n = "image/webp" === e.type,
        [i, o] = a.useState(!1),
        [s, f] = a.useState(null),
        u = n && s !== e;
    a.useEffect(() => {
        let a = !1;
        return (
            t
                ? (r.e("47580").then(r.bind(r, 844183)), o(!1), f(e))
                : n
                  ? (async () => {
                        try {
                            let t = await e.arrayBuffer(),
                                r = new Uint8Array(t),
                                n = await h(r);
                            a || (o(n), n && l(), f(e));
                        } catch (t) {
                            a || (c.error("Error checking WebP animation", t), o(!1), f(e));
                        }
                    })()
                  : (o(!1), f(e)),
            () => {
                a = !0;
            }
        );
    }, [e, t, n]);
    let A = i && s === e,
        m = t || A;
    return { isGIF: t, isWebP: n, isAnimatedWebPFile: A, isCheckingAnimation: u, isEditableAnimatedImage: m };
}
