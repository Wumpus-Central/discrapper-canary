e.exports = (() => {
    "use strict";
    var e,
        t,
        r,
        n,
        o,
        i,
        a,
        s,
        l,
        u,
        c,
        f,
        p,
        d,
        h,
        m,
        v,
        y,
        g,
        b,
        w,
        _,
        S,
        x,
        E,
        k,
        C,
        T,
        M,
        P,
        A,
        O,
        I,
        D,
        L,
        R,
        F,
        N,
        j,
        B,
        $,
        K,
        V,
        U,
        z,
        W,
        H,
        G,
        q,
        Y,
        J,
        X,
        Z,
        Q,
        ee,
        et,
        er,
        en,
        eo,
        ei,
        ea,
        es,
        el = [
            ,
            (e, t, r) => {
                var n;
                r.r(t), r.d(t, { default: () => o });
                let o =
                    ((n = "u" > typeof document ? document.currentScript?.src : void 0),
                    function (e = {}) {
                        var t,
                            r,
                            o,
                            i,
                            a,
                            s,
                            l,
                            u = new Promise((e, t) => {
                                (s = e), (l = t);
                            }),
                            c = "object" == typeof window,
                            f = "function" == typeof importScripts;
                        function p() {
                            function e(e) {
                                let i = n;
                                (r = t = 0),
                                    (n = new Map()),
                                    i.forEach((t) => {
                                        try {
                                            t(e);
                                        } catch (e) {
                                            console.error(e);
                                        }
                                    }),
                                    this.nb(),
                                    o && o.Pb();
                            }
                            let t = 0,
                                r = 0,
                                n = new Map(),
                                o = null,
                                i = null;
                            (this.requestAnimationFrame = function (o) {
                                t ||= requestAnimationFrame(e.bind(this));
                                let i = ++r;
                                return n.set(i, o), i;
                            }),
                                (this.cancelAnimationFrame = function (e) {
                                    n.delete(e), t && 0 == n.size && (cancelAnimationFrame(t), (t = 0));
                                }),
                                (this.Nb = function (e) {
                                    i && (document.body.remove(i), (i = null)),
                                        e ||
                                            (((i = document.createElement("div")).style.backgroundColor = "black"),
                                            (i.style.position = "fixed"),
                                            (i.style.right = 0),
                                            (i.style.top = 0),
                                            (i.style.color = "white"),
                                            (i.style.padding = "4px"),
                                            (i.innerHTML = "RIVE FPS"),
                                            (e = function (e) {
                                                i.innerHTML = "RIVE FPS " + e.toFixed(1);
                                            }),
                                            document.body.appendChild(i)),
                                        (o = new (function () {
                                            let t = 0,
                                                r = 0;
                                            this.Pb = function () {
                                                var n = performance.now();
                                                r
                                                    ? (++t, 1e3 < (n -= r) && (e((1e3 * t) / n), (t = r = 0)))
                                                    : ((r = n), (t = 0));
                                            };
                                        })());
                                }),
                                (this.Kb = function () {
                                    i && (document.body.remove(i), (i = null)), (o = null);
                                }),
                                (this.nb = function () {});
                        }
                        function d(e) {
                            console.assert(!0);
                            let t = new Map(),
                                r = -1 / 0;
                            this.push = function (n) {
                                return (
                                    (n = (n + ((1 << e) - 1)) >> e),
                                    t.has(n) && clearTimeout(t.get(n)),
                                    t.set(
                                        n,
                                        setTimeout(function () {
                                            t.delete(n),
                                                0 == t.length
                                                    ? (r = -1 / 0)
                                                    : n == r && console.assert((r = Math.max(...t.keys())) < n);
                                        }, 1e3),
                                    ),
                                    (r = Math.max(n, r)) << e
                                );
                            };
                        }
                        let h = e.onRuntimeInitialized;
                        e.onRuntimeInitialized = function () {
                            h && h();
                            let t = e.decodeAudio;
                            e.decodeAudio = function (e, r) {
                                r((e = t(e)));
                            };
                            let r = e.decodeFont;
                            e.decodeFont = function (e, t) {
                                t((e = r(e)));
                            };
                            let n = e.FileAssetLoader;
                            (e.ptrToAsset = (t) => {
                                let r = e.ptrToFileAsset(t);
                                return r.isImage
                                    ? e.ptrToImageAsset(t)
                                    : r.isFont
                                      ? e.ptrToFontAsset(t)
                                      : r.isAudio
                                        ? e.ptrToAudioAsset(t)
                                        : r;
                            }),
                                (e.CustomFileAssetLoader = n.extend("CustomFileAssetLoader", {
                                    __construct: function ({ loadContents: e }) {
                                        this.__parent.__construct.call(this), (this.Db = e);
                                    },
                                    loadContents: function (t, r) {
                                        return (t = e.ptrToAsset(t)), this.Db(t, r);
                                    },
                                })),
                                (e.CDNFileAssetLoader = n.extend("CDNFileAssetLoader", {
                                    __construct: function () {
                                        this.__parent.__construct.call(this);
                                    },
                                    loadContents: function (t) {
                                        var r, n, o;
                                        let i = e.ptrToAsset(t);
                                        return (
                                            "" !== (t = i.cdnUuid) &&
                                            ((r = i.cdnBaseUrl + "/" + t),
                                            (n = (e) => {
                                                i.decode(new Uint8Array(e.response));
                                            }),
                                            ((o = new XMLHttpRequest()).responseType = "arraybuffer"),
                                            (o.onreadystatechange = function () {
                                                4 == o.readyState && 200 == o.status && n(o);
                                            }),
                                            o.open("GET", r, !0),
                                            o.send(null),
                                            !0)
                                        );
                                    },
                                })),
                                (e.FallbackFileAssetLoader = n.extend("FallbackFileAssetLoader", {
                                    __construct: function () {
                                        this.__parent.__construct.call(this), (this.jb = []);
                                    },
                                    addLoader: function (e) {
                                        this.jb.push(e);
                                    },
                                    loadContents: function (e, t) {
                                        for (let r of this.jb) if (r.loadContents(e, t)) return !0;
                                        return !1;
                                    },
                                }));
                            let o = e.computeAlignment;
                            e.computeAlignment = function (e, t, r, n, i = 1) {
                                return o.call(this, e, t, r, n, i);
                            };
                        };
                        let m =
                                "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(
                                    " ",
                                ),
                            v = new (function () {
                                function e() {
                                    if (!t) {
                                        let u;
                                        var e = document.createElement("canvas"),
                                            a = {
                                                alpha: 1,
                                                depth: 0,
                                                stencil: 0,
                                                antialias: 0,
                                                premultipliedAlpha: 1,
                                                preserveDrawingBuffer: 0,
                                                powerPreference: "high-performance",
                                                failIfMajorPerformanceCaveat: 0,
                                                enableExtensionsByDefault: 1,
                                                explicitSwapControl: 1,
                                                renderViaOffscreenBackBuffer: 1,
                                            };
                                        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                                            if (((u = e.getContext("webgl", a)), (r = 1), !u))
                                                return (
                                                    console.log("No WebGL support. Image mesh will not be drawn."), !1
                                                );
                                        } else if ((u = e.getContext("webgl2", a))) r = 2;
                                        else {
                                            if (!(u = e.getContext("webgl", a)))
                                                return (
                                                    console.log("No WebGL support. Image mesh will not be drawn."), !1
                                                );
                                            r = 1;
                                        }
                                        function s(e, t, r) {
                                            if (
                                                ((t = u.createShader(t)),
                                                u.shaderSource(t, r),
                                                u.compileShader(t),
                                                0 < ((r = u.getShaderInfoLog(t)) || "").length)
                                            )
                                                throw r;
                                            u.attachShader(e, t);
                                        }
                                        if (
                                            ((n = Math.min(
                                                (u = new Proxy(u, {
                                                    get: (e, t) =>
                                                        e.isContextLost()
                                                            ? (l ||
                                                                  (console.error(
                                                                      "Cannot render the mesh because the GL Context was lost. Tried to invoke ",
                                                                      t,
                                                                  ),
                                                                  (l = !0)),
                                                              "function" == typeof e[t])
                                                                ? function () {}
                                                                : void 0
                                                            : "function" == typeof e[t]
                                                              ? function (...r) {
                                                                    return e[t].apply(e, r);
                                                                }
                                                              : e[t],
                                                    set(e, t, r) {
                                                        if (!e.isContextLost()) return (e[t] = r), !0;
                                                        l ||
                                                            (console.error(
                                                                "Cannot render the mesh because the GL Context was lost. Tried to set property " +
                                                                    t,
                                                            ),
                                                            (l = !0));
                                                    },
                                                })).getParameter(u.MAX_RENDERBUFFER_SIZE),
                                                u.getParameter(u.MAX_TEXTURE_SIZE),
                                            )),
                                            s(
                                                (e = u.createProgram()),
                                                u.VERTEX_SHADER,
                                                "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }",
                                            ),
                                            s(
                                                e,
                                                u.FRAGMENT_SHADER,
                                                "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }",
                                            ),
                                            u.bindAttribLocation(e, 0, "vertex"),
                                            u.bindAttribLocation(e, 1, "uv"),
                                            u.linkProgram(e),
                                            0 < ((a = u.getProgramInfoLog(e)) || "").trim().length)
                                        )
                                            throw a;
                                        (o = u.getUniformLocation(e, "mat")),
                                            (i = u.getUniformLocation(e, "translate")),
                                            u.useProgram(e),
                                            u.bindBuffer(u.ARRAY_BUFFER, u.createBuffer()),
                                            u.enableVertexAttribArray(0),
                                            u.enableVertexAttribArray(1),
                                            u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, u.createBuffer()),
                                            u.uniform1i(u.getUniformLocation(e, "image"), 0),
                                            u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                                            (t = u);
                                    }
                                    return !0;
                                }
                                let t = null,
                                    r = 0,
                                    n = 0,
                                    o = null,
                                    i = null,
                                    a = 0,
                                    s = 0,
                                    l = !1;
                                e(),
                                    (this.ac = function () {
                                        return e(), n;
                                    }),
                                    (this.Jb = function (e) {
                                        t.deleteTexture && t.deleteTexture(e);
                                    }),
                                    (this.Ib = function (n) {
                                        if (!e()) return null;
                                        let o = t.createTexture();
                                        return o
                                            ? (t.bindTexture(t.TEXTURE_2D, o),
                                              t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, n),
                                              t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                                              t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                                              t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                                              2 == r
                                                  ? (t.texParameteri(
                                                        t.TEXTURE_2D,
                                                        t.TEXTURE_MIN_FILTER,
                                                        t.LINEAR_MIPMAP_LINEAR,
                                                    ),
                                                    t.generateMipmap(t.TEXTURE_2D))
                                                  : t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
                                              o)
                                            : null;
                                    });
                                let u = new d(8),
                                    c = new d(8),
                                    f = new d(10),
                                    p = new d(10);
                                (this.Mb = function (r, n, l, d, h) {
                                    if (e()) {
                                        var m = u.push(r),
                                            v = c.push(n);
                                        if (t.canvas) {
                                            for (var y of ((t.canvas.width != m || t.canvas.height != v) &&
                                                ((t.canvas.width = m), (t.canvas.height = v)),
                                            t.viewport(0, v - n, r, n),
                                            t.disable(t.SCISSOR_TEST),
                                            t.clearColor(0, 0, 0, 0),
                                            t.clear(t.COLOR_BUFFER_BIT),
                                            t.enable(t.SCISSOR_TEST),
                                            l.sort((e, t) => t.ub - e.ub),
                                            (m = f.push(d)),
                                            a != m && (t.bufferData(t.ARRAY_BUFFER, 8 * m, t.DYNAMIC_DRAW), (a = m)),
                                            (m = 0),
                                            l))
                                                t.bufferSubData(t.ARRAY_BUFFER, m, y.Sa), (m += 4 * y.Sa.length);
                                            for (var g of (console.assert(m == 4 * d), l))
                                                t.bufferSubData(t.ARRAY_BUFFER, m, g.Ab), (m += 4 * g.Ab.length);
                                            for (var b of (console.assert(m == 8 * d),
                                            (m = p.push(h)),
                                            s != m &&
                                                (t.bufferData(t.ELEMENT_ARRAY_BUFFER, 2 * m, t.DYNAMIC_DRAW), (s = m)),
                                            (y = 0),
                                            l))
                                                t.bufferSubData(t.ELEMENT_ARRAY_BUFFER, y, b.indices),
                                                    (y += 2 * b.indices.length);
                                            for (let e of (console.assert(y == 2 * h),
                                            (b = 0),
                                            (g = !0),
                                            (m = y = 0),
                                            l)) {
                                                e.image.Ia != b &&
                                                    (t.bindTexture(t.TEXTURE_2D, e.image.Ha || null), (b = e.image.Ia)),
                                                    e.fc
                                                        ? (t.scissor(e.Ya, v - e.Za - e.ib, e.tc, e.ib), (g = !0))
                                                        : g && (t.scissor(0, v - n, r, n), (g = !1)),
                                                    (l = 2 / r);
                                                let a = -2 / n;
                                                t.uniform4f(
                                                    o,
                                                    e.ga[0] * l * e.za,
                                                    e.ga[1] * a * e.Aa,
                                                    e.ga[2] * l * e.za,
                                                    e.ga[3] * a * e.Aa,
                                                ),
                                                    t.uniform2f(
                                                        i,
                                                        e.ga[4] * l * e.za + l * (e.Ya - e.bc * e.za) - 1,
                                                        e.ga[5] * a * e.Aa + a * (e.Za - e.cc * e.Aa) + 1,
                                                    ),
                                                    t.vertexAttribPointer(0, 2, t.FLOAT, !1, 0, m),
                                                    t.vertexAttribPointer(1, 2, t.FLOAT, !1, 0, m + 4 * d),
                                                    t.drawElements(t.TRIANGLES, e.indices.length, t.UNSIGNED_SHORT, y),
                                                    (m += 4 * e.Sa.length),
                                                    (y += 2 * e.indices.length);
                                            }
                                            console.assert(m == 4 * d), console.assert(y == 2 * h);
                                        }
                                    }
                                }),
                                    (this.canvas = function () {
                                        return e() && t.canvas;
                                    });
                            })(),
                            y = e.onRuntimeInitialized;
                        e.onRuntimeInitialized = function () {
                            function t(e) {
                                switch (e) {
                                    case c.srcOver:
                                        return "source-over";
                                    case c.screen:
                                        return "screen";
                                    case c.overlay:
                                        return "overlay";
                                    case c.darken:
                                        return "darken";
                                    case c.lighten:
                                        return "lighten";
                                    case c.colorDodge:
                                        return "color-dodge";
                                    case c.colorBurn:
                                        return "color-burn";
                                    case c.hardLight:
                                        return "hard-light";
                                    case c.softLight:
                                        return "soft-light";
                                    case c.difference:
                                        return "difference";
                                    case c.exclusion:
                                        return "exclusion";
                                    case c.multiply:
                                        return "multiply";
                                    case c.hue:
                                        return "hue";
                                    case c.saturation:
                                        return "saturation";
                                    case c.color:
                                        return "color";
                                    case c.luminosity:
                                        return "luminosity";
                                }
                            }
                            function r(e) {
                                return (
                                    "rgba(" +
                                    ((0xff0000 & e) >>> 16) +
                                    "," +
                                    ((65280 & e) >>> 8) +
                                    "," +
                                    ((255 & e) >>> 0) +
                                    "," +
                                    ((0xff000000 & e) >>> 24) / 255 +
                                    ")"
                                );
                            }
                            function n() {
                                for (let e of (0 < E.length &&
                                    (v.Mb(x.drawWidth(), x.drawHeight(), E, k, C),
                                    (E = []),
                                    (C = k = 0),
                                    x.reset(512, 512)),
                                S)) {
                                    for (let t of e.H) t();
                                    e.H = [];
                                }
                                S.clear();
                            }
                            y && y();
                            var o = e.RenderPaintStyle;
                            let i = e.RenderPath,
                                a = e.RenderPaint,
                                s = e.Renderer,
                                l = e.StrokeCap,
                                u = e.StrokeJoin,
                                c = e.BlendMode,
                                f = o.fill,
                                d = o.stroke,
                                h = e.FillRule.evenOdd,
                                g = 1;
                            var b = e.RenderImage.extend("CanvasRenderImage", {
                                    __construct: function ({ ka: e, va: t } = {}) {
                                        this.__parent.__construct.call(this),
                                            (this.Ia = g),
                                            (g = (g + 1) & 0x7fffffff || 1),
                                            (this.ka = e),
                                            (this.va = t);
                                    },
                                    __destruct: function () {
                                        this.Ha && (v.Jb(this.Ha), URL.revokeObjectURL(this.Va)),
                                            this.__parent.__destruct.call(this);
                                    },
                                    decode: function (e) {
                                        var t = this;
                                        t.va && t.va(t);
                                        var r = new Image();
                                        (t.Va = URL.createObjectURL(new Blob([e], { type: "image/png" }))),
                                            (r.onload = function () {
                                                (t.Cb = r),
                                                    (t.Ha = v.Ib(r)),
                                                    t.size(r.width, r.height),
                                                    t.ka && t.ka(t);
                                            }),
                                            (r.src = t.Va);
                                    },
                                }),
                                w = i.extend("CanvasRenderPath", {
                                    __construct: function () {
                                        this.__parent.__construct.call(this), (this.T = new Path2D());
                                    },
                                    rewind: function () {
                                        this.T = new Path2D();
                                    },
                                    addPath: function (e, t, r, n, o, i, a) {
                                        var s = this.T,
                                            l = s.addPath;
                                        e = e.T;
                                        let u = new DOMMatrix();
                                        (u.a = t),
                                            (u.b = r),
                                            (u.c = n),
                                            (u.d = o),
                                            (u.e = i),
                                            (u.f = a),
                                            l.call(s, e, u);
                                    },
                                    fillRule: function (e) {
                                        this.Ua = e;
                                    },
                                    moveTo: function (e, t) {
                                        this.T.moveTo(e, t);
                                    },
                                    lineTo: function (e, t) {
                                        this.T.lineTo(e, t);
                                    },
                                    cubicTo: function (e, t, r, n, o, i) {
                                        this.T.bezierCurveTo(e, t, r, n, o, i);
                                    },
                                    close: function () {
                                        this.T.closePath();
                                    },
                                }),
                                _ = a.extend("CanvasRenderPaint", {
                                    color: function (e) {
                                        this.Wa = r(e);
                                    },
                                    thickness: function (e) {
                                        this.Fb = e;
                                    },
                                    join: function (e) {
                                        switch (e) {
                                            case u.miter:
                                                this.Ga = "miter";
                                                break;
                                            case u.round:
                                                this.Ga = "round";
                                                break;
                                            case u.bevel:
                                                this.Ga = "bevel";
                                        }
                                    },
                                    cap: function (e) {
                                        switch (e) {
                                            case l.butt:
                                                this.Fa = "butt";
                                                break;
                                            case l.round:
                                                this.Fa = "round";
                                                break;
                                            case l.square:
                                                this.Fa = "square";
                                        }
                                    },
                                    style: function (e) {
                                        this.Eb = e;
                                    },
                                    blendMode: function (e) {
                                        this.Bb = t(e);
                                    },
                                    clearGradient: function () {
                                        this.ia = null;
                                    },
                                    linearGradient: function (e, t, r, n) {
                                        this.ia = { wb: e, xb: t, bb: r, cb: n, Pa: [] };
                                    },
                                    radialGradient: function (e, t, r, n) {
                                        this.ia = { wb: e, xb: t, bb: r, cb: n, Pa: [], $b: !0 };
                                    },
                                    addStop: function (e, t) {
                                        this.ia.Pa.push({ color: e, stop: t });
                                    },
                                    completeGradient: function () {},
                                    draw: function (e, t, n) {
                                        let o = this.Eb;
                                        var i = this.Wa,
                                            a = this.ia;
                                        if (((e.globalCompositeOperation = this.Bb), null != a)) {
                                            i = a.wb;
                                            var s = a.xb;
                                            let t = a.bb;
                                            var l = a.cb;
                                            let n = a.Pa;
                                            a.$b
                                                ? ((a = t - i),
                                                  (l -= s),
                                                  (i = e.createRadialGradient(i, s, 0, i, s, Math.sqrt(a * a + l * l))))
                                                : (i = e.createLinearGradient(i, s, t, l));
                                            for (let e = 0, t = n.length; e < t; e++)
                                                (s = n[e]), i.addColorStop(s.stop, r(s.color));
                                            (this.Wa = i), (this.ia = null);
                                        }
                                        switch (o) {
                                            case d:
                                                (e.strokeStyle = i),
                                                    (e.lineWidth = this.Fb),
                                                    (e.lineCap = this.Fa),
                                                    (e.lineJoin = this.Ga),
                                                    e.stroke(t);
                                                break;
                                            case f:
                                                (e.fillStyle = i), e.fill(t, n);
                                        }
                                    },
                                });
                            let S = new Set(),
                                x = null,
                                E = [],
                                k = 0,
                                C = 0;
                            var T = (e.CanvasRenderer = s.extend("Renderer", {
                                __construct: function (e) {
                                    this.__parent.__construct.call(this),
                                        (this.S = [1, 0, 0, 1, 0, 0]),
                                        (this.B = e.getContext("2d")),
                                        (this.Ta = e),
                                        (this.H = []);
                                },
                                save: function () {
                                    this.S.push(...this.S.slice(this.S.length - 6)),
                                        this.H.push(this.B.save.bind(this.B));
                                },
                                restore: function () {
                                    let e = this.S.length - 6;
                                    if (6 > e) throw "restore() called without matching save().";
                                    this.S.splice(e), this.H.push(this.B.restore.bind(this.B));
                                },
                                transform: function (e, t, r, n, o, i) {
                                    let a = this.S,
                                        s = a.length - 6;
                                    a.splice(
                                        s,
                                        6,
                                        a[s] * e + a[s + 2] * t,
                                        a[s + 1] * e + a[s + 3] * t,
                                        a[s] * r + a[s + 2] * n,
                                        a[s + 1] * r + a[s + 3] * n,
                                        a[s] * o + a[s + 2] * i + a[s + 4],
                                        a[s + 1] * o + a[s + 3] * i + a[s + 5],
                                    ),
                                        this.H.push(this.B.transform.bind(this.B, e, t, r, n, o, i));
                                },
                                rotate: function (e) {
                                    let t = Math.sin(e);
                                    (e = Math.cos(e)), this.transform(e, t, -t, e, 0, 0);
                                },
                                _drawPath: function (e, t) {
                                    this.H.push(t.draw.bind(t, this.B, e.T, e.Ua === h ? "evenodd" : "nonzero"));
                                },
                                _drawRiveImage: function (e, r, n, o) {
                                    var i = e.Cb;
                                    if (i) {
                                        var a = this.B,
                                            s = t(n);
                                        this.H.push(function () {
                                            (a.globalCompositeOperation = s),
                                                (a.globalAlpha = o),
                                                a.drawImage(i, 0, 0),
                                                (a.globalAlpha = 1);
                                        });
                                    }
                                },
                                _getMatrix: function (e) {
                                    let t = this.S,
                                        r = t.length - 6;
                                    for (let n = 0; 6 > n; ++n) e[n] = t[r + n];
                                },
                                _drawImageMesh: function (r, o, i, a, s, l, u, c, f, p, d) {
                                    o = this.B.canvas.width;
                                    var h = this.B.canvas.height;
                                    let m = p - c,
                                        y = d - f;
                                    (c = Math.max(c, 0)), (f = Math.max(f, 0));
                                    let g = (p = Math.min(p, o)) - c,
                                        b = (d = Math.min(d, h)) - f;
                                    if (
                                        (console.assert(g <= Math.min(m, o)),
                                        console.assert(b <= Math.min(y, h)),
                                        !(0 >= g || 0 >= b))
                                    ) {
                                        (p = g < m || b < y), (o = d = 1);
                                        var w = Math.ceil(g * d),
                                            _ = Math.ceil(b * o);
                                        (h = v.ac()),
                                            w > h && ((d *= h / w), (w = h)),
                                            _ > h && ((o *= h / _), (_ = h)),
                                            x || (x = new e.DynamicRectanizer(h)).reset(512, 512),
                                            0 > (h = x.addRect(w, _)) &&
                                                (n(), S.add(this), console.assert(0 <= (h = x.addRect(w, _))));
                                        var T = 65535 & h,
                                            M = h >> 16;
                                        E.push({
                                            ga: this.S.slice(this.S.length - 6),
                                            image: r,
                                            Ya: T,
                                            Za: M,
                                            bc: c,
                                            cc: f,
                                            tc: w,
                                            ib: _,
                                            za: d,
                                            Aa: o,
                                            Sa: new Float32Array(s),
                                            Ab: new Float32Array(l),
                                            indices: new Uint16Array(u),
                                            fc: p,
                                            ub: (r.Ia << 1) | !!p,
                                        }),
                                            (k += s.length),
                                            (C += u.length);
                                        var P = this.B,
                                            A = t(i);
                                        this.H.push(function () {
                                            P.save(),
                                                P.resetTransform(),
                                                (P.globalCompositeOperation = A),
                                                (P.globalAlpha = a);
                                            let e = v.canvas();
                                            e && P.drawImage(e, T, M, w, _, c, f, g, b), P.restore();
                                        });
                                    }
                                },
                                _clipPath: function (e) {
                                    this.H.push(this.B.clip.bind(this.B, e.T, e.Ua === h ? "evenodd" : "nonzero"));
                                },
                                clear: function () {
                                    S.add(this),
                                        this.H.push(this.B.clearRect.bind(this.B, 0, 0, this.Ta.width, this.Ta.height));
                                },
                                flush: function () {},
                                translate: function (e, t) {
                                    this.transform(1, 0, 0, 1, e, t);
                                },
                            }));
                            (e.makeRenderer = function (e) {
                                let t = new T(e),
                                    r = t.B;
                                return new Proxy(t, {
                                    get(e, n) {
                                        if ("function" == typeof e[n])
                                            return function (...t) {
                                                return e[n].apply(e, t);
                                            };
                                        if ("function" == typeof r[n]) {
                                            if (-1 < m.indexOf(n))
                                                throw Error(
                                                    "RiveException: Method call to '" +
                                                        n +
                                                        "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.",
                                                );
                                            return function (...e) {
                                                t.H.push(r[n].bind(r, ...e));
                                            };
                                        }
                                        return e[n];
                                    },
                                    set(e, n, o) {
                                        if (n in r)
                                            return (
                                                t.H.push(() => {
                                                    r[n] = o;
                                                }),
                                                !0
                                            );
                                    },
                                });
                            }),
                                (e.decodeImage = function (e, t) {
                                    new b({ ka: t }).decode(e);
                                }),
                                (e.renderFactory = {
                                    makeRenderPaint: function () {
                                        return new _();
                                    },
                                    makeRenderPath: function () {
                                        return new w();
                                    },
                                    makeRenderImage: function () {
                                        let e = P;
                                        return new b({
                                            va: () => {
                                                e.total++;
                                            },
                                            ka: () => {
                                                if ((e.loaded++, e.loaded === e.total)) {
                                                    let t = e.ready;
                                                    t && (t(), (e.ready = null));
                                                }
                                            },
                                        });
                                    },
                                });
                            let M = e.load,
                                P = null;
                            e.load = function (t, r, n = !0) {
                                let o = new e.FallbackFileAssetLoader();
                                return (
                                    void 0 !== r && o.addLoader(r),
                                    n && ((r = new e.CDNFileAssetLoader()), o.addLoader(r)),
                                    new Promise(function (e) {
                                        let r = null;
                                        (P = {
                                            total: 0,
                                            loaded: 0,
                                            ready: function () {
                                                e(r);
                                            },
                                        }),
                                            (r = M(t, o)),
                                            0 == P.total && e(r);
                                    })
                                );
                            };
                            let A = e.RendererWrapper.prototype.align;
                            (e.RendererWrapper.prototype.align = function (e, t, r, n, o = 1) {
                                A.call(this, e, t, r, n, o);
                            }),
                                (e.requestAnimationFrame = (o = new p()).requestAnimationFrame.bind(o)),
                                (e.cancelAnimationFrame = o.cancelAnimationFrame.bind(o)),
                                (e.enableFPSCounter = o.Nb.bind(o)),
                                (e.disableFPSCounter = o.Kb),
                                (o.nb = n),
                                (e.resolveAnimationFrame = n),
                                (e.cleanup = function () {
                                    x && x.delete();
                                });
                        };
                        var g,
                            b,
                            w = Object.assign({}, e),
                            _ = "./this.program",
                            S = "";
                        (c || f) &&
                            (f
                                ? (S = self.location.href)
                                : "u" > typeof document && document.currentScript && (S = document.currentScript.src),
                            n && (S = n),
                            (S = S.startsWith("blob:")
                                ? ""
                                : S.substr(0, S.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
                            f &&
                                (b = (e) => {
                                    var t = new XMLHttpRequest();
                                    return (
                                        t.open("GET", e, !1),
                                        (t.responseType = "arraybuffer"),
                                        t.send(null),
                                        new Uint8Array(t.response)
                                    );
                                }),
                            (g = (e, t, r) => {
                                if (W(e)) {
                                    var n = new XMLHttpRequest();
                                    n.open("GET", e, !0),
                                        (n.responseType = "arraybuffer"),
                                        (n.onload = () => {
                                            200 == n.status || (0 == n.status && n.response) ? t(n.response) : r();
                                        }),
                                        (n.onerror = r),
                                        n.send(null);
                                } else
                                    fetch(e, { credentials: "same-origin" })
                                        .then((e) =>
                                            e.ok ? e.arrayBuffer() : Promise.reject(Error(e.status + " : " + e.url)),
                                        )
                                        .then(t, r);
                            }));
                        var x = e.print || console.log.bind(console),
                            E = e.printErr || console.error.bind(console);
                        Object.assign(e, w),
                            (w = null),
                            e.thisProgram && (_ = e.thisProgram),
                            e.wasmBinary && (k = e.wasmBinary);
                        var k,
                            C,
                            T,
                            M,
                            P,
                            A,
                            O,
                            I,
                            D,
                            L,
                            R = !1;
                        function F() {
                            var t = C.buffer;
                            (e.HEAP8 = T = new Int8Array(t)),
                                (e.HEAP16 = P = new Int16Array(t)),
                                (e.HEAPU8 = M = new Uint8Array(t)),
                                (e.HEAPU16 = A = new Uint16Array(t)),
                                (e.HEAP32 = O = new Int32Array(t)),
                                (e.HEAPU32 = I = new Uint32Array(t)),
                                (e.HEAPF32 = D = new Float32Array(t)),
                                (e.HEAPF64 = L = new Float64Array(t));
                        }
                        var N = [],
                            j = [],
                            B = [],
                            $ = 0,
                            K = null,
                            V = null;
                        function U(t) {
                            throw (
                                (e.onAbort?.(t),
                                E((t = "Aborted(" + t + ")")),
                                (R = !0),
                                (t = new WebAssembly.RuntimeError(t + ". Build with -sASSERTIONS for more info.")),
                                l(t),
                                t)
                            );
                        }
                        var z,
                            W = (e) => e.startsWith("file://");
                        function H(e) {
                            if (e == z && k) return new Uint8Array(k);
                            if (b) return b(e);
                            throw "both async and sync fetching of the wasm failed";
                        }
                        function G(e, t, r) {
                            return (
                                k
                                    ? Promise.resolve().then(() => H(e))
                                    : new Promise((t, r) => {
                                          g(
                                              e,
                                              (e) => t(new Uint8Array(e)),
                                              () => {
                                                  try {
                                                      t(H(e));
                                                  } catch (e) {
                                                      r(e);
                                                  }
                                              },
                                          );
                                      })
                            )
                                .then((e) => WebAssembly.instantiate(e, t))
                                .then(r, (e) => {
                                    E(`failed to asynchronously prepare wasm: ${e}`), U(e);
                                });
                        }
                        var q,
                            Y,
                            J = {
                                464256: (e, t, r, n, o) => {
                                    if (
                                        "u" < typeof window ||
                                        void 0 === (window.AudioContext || window.webkitAudioContext)
                                    )
                                        return 0;
                                    if (void 0 === window.h) {
                                        (window.h = { ya: 0 }),
                                            (window.h.I = {}),
                                            (window.h.I.wa = e),
                                            (window.h.I.capture = t),
                                            (window.h.I.Ja = r),
                                            (window.h.fa = {}),
                                            (window.h.fa.stopped = n),
                                            (window.h.fa.vb = o);
                                        let i = window.h;
                                        (i.D = []),
                                            (i.rc = function (e) {
                                                for (var t = 0; t < i.D.length; ++t)
                                                    if (null == i.D[t]) return (i.D[t] = e), t;
                                                return i.D.push(e), i.D.length - 1;
                                            }),
                                            (i.zb = function (e) {
                                                for (i.D[e] = null; 0 < i.D.length; )
                                                    if (null == i.D[i.D.length - 1]) i.D.pop();
                                                    else break;
                                            }),
                                            (i.Oc = function (e) {
                                                for (var t = 0; t < i.D.length; ++t) if (i.D[t] == e) return i.zb(t);
                                            }),
                                            (i.pa = function (e) {
                                                return i.D[e];
                                            }),
                                            (i.Ra = ["touchend", "click"]),
                                            (i.unlock = function () {
                                                for (var e = 0; e < i.D.length; ++e) {
                                                    var t = i.D[e];
                                                    null != t &&
                                                        null != t.K &&
                                                        t.state === i.fa.vb &&
                                                        t.K.resume().then(
                                                            () => {
                                                                ro(t.ob);
                                                            },
                                                            (e) => {
                                                                console.error("Failed to resume audiocontext", e);
                                                            },
                                                        );
                                                }
                                                i.Ra.map(function (e) {
                                                    document.removeEventListener(e, i.unlock, !0);
                                                });
                                            }),
                                            i.Ra.map(function (e) {
                                                document.addEventListener(e, i.unlock, !0);
                                            });
                                    }
                                    return (window.h.ya += 1), 1;
                                },
                                466434: () => {
                                    void 0 !== window.h &&
                                        (window.h.Ra.map(function (e) {
                                            document.removeEventListener(e, window.h.unlock, !0);
                                        }),
                                        --window.h.ya,
                                        0 === window.h.ya && delete window.h);
                                },
                                466738: () =>
                                    void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia,
                                466842: () => {
                                    try {
                                        var e = new (window.AudioContext || window.webkitAudioContext)(),
                                            t = e.sampleRate;
                                        return e.close(), t;
                                    } catch (e) {
                                        return 0;
                                    }
                                },
                                467013: (e, t, r, n, o, i) => {
                                    if (void 0 === window.h) return -1;
                                    var a = {},
                                        s = {};
                                    return (
                                        e == window.h.I.wa && 0 != r && (s.sampleRate = r),
                                        (a.K = new (window.AudioContext || window.webkitAudioContext)(s)),
                                        a.K.suspend(),
                                        (a.state = window.h.fa.stopped),
                                        (r = 0),
                                        e != window.h.I.wa && (r = t),
                                        (a.Y = a.K.createScriptProcessor(n, r, t)),
                                        (a.Y.onaudioprocess = function (r) {
                                            if (
                                                ((null == a.qa || 0 == a.qa.length) &&
                                                    (a.qa = new Float32Array(D.buffer, o, n * t)),
                                                e == window.h.I.capture || e == window.h.I.Ja)
                                            ) {
                                                for (var s = 0; s < t; s += 1)
                                                    for (
                                                        var l = r.inputBuffer.getChannelData(s), u = a.qa, c = 0;
                                                        c < n;
                                                        c += 1
                                                    )
                                                        u[c * t + s] = l[c];
                                                ri(i, n, o);
                                            }
                                            if (e == window.h.I.wa || e == window.h.I.Ja)
                                                for (ra(i, n, o), s = 0; s < r.outputBuffer.numberOfChannels; ++s)
                                                    for (
                                                        l = r.outputBuffer.getChannelData(s), u = a.qa, c = 0;
                                                        c < n;
                                                        c += 1
                                                    )
                                                        l[c] = u[c * t + s];
                                            else
                                                for (s = 0; s < r.outputBuffer.numberOfChannels; ++s)
                                                    r.outputBuffer.getChannelData(s).fill(0);
                                        }),
                                        (e != window.h.I.capture && e != window.h.I.Ja) ||
                                            navigator.mediaDevices
                                                .getUserMedia({ audio: !0, video: !1 })
                                                .then(function (e) {
                                                    (a.Ba = a.K.createMediaStreamSource(e)),
                                                        a.Ba.connect(a.Y),
                                                        a.Y.connect(a.K.destination);
                                                })
                                                .catch(function (e) {
                                                    console.log("Failed to get user media: " + e);
                                                }),
                                        e == window.h.I.wa && a.Y.connect(a.K.destination),
                                        (a.ob = i),
                                        window.h.rc(a)
                                    );
                                },
                                469890: (e) => window.h.pa(e).K.sampleRate,
                                469963: (e) => {
                                    void 0 !== (e = window.h.pa(e)).Y &&
                                        ((e.Y.onaudioprocess = function () {}), e.Y.disconnect(), (e.Y = void 0)),
                                        void 0 !== e.Ba && (e.Ba.disconnect(), (e.Ba = void 0)),
                                        e.K.close(),
                                        (e.K = void 0),
                                        (e.ob = void 0);
                                },
                                470363: (e) => {
                                    window.h.zb(e);
                                },
                                470413: (e) => {
                                    (e = window.h.pa(e)).K.resume(), (e.state = window.h.fa.vb);
                                },
                                470552: (e) => {
                                    (e = window.h.pa(e)).K.suspend(), (e.state = window.h.fa.stopped);
                                },
                            },
                            X = (t) => {
                                for (; 0 < t.length; ) t.shift()(e);
                            };
                        function Z() {
                            var e = O[e0 >> 2];
                            return (e0 += 4), e;
                        }
                        var Q = (e, t) => {
                                for (var r = 0, n = e.length - 1; 0 <= n; n--) {
                                    var o = e[n];
                                    "." === o
                                        ? e.splice(n, 1)
                                        : ".." === o
                                          ? (e.splice(n, 1), r++)
                                          : r && (e.splice(n, 1), r--);
                                }
                                if (t) for (; r; r--) e.unshift("..");
                                return e;
                            },
                            ee = (e) => {
                                var t = "/" === e.charAt(0),
                                    r = "/" === e.substr(-1);
                                return (
                                    (e = Q(
                                        e.split("/").filter((e) => !!e),
                                        !t,
                                    ).join("/")) ||
                                        t ||
                                        (e = "."),
                                    e && r && (e += "/"),
                                    (t ? "/" : "") + e
                                );
                            },
                            et = (e) => {
                                var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                                    .exec(e)
                                    .slice(1);
                                return ((e = t[0]), (t = t[1]), e || t) ? e + (t &&= t.substr(0, t.length - 1)) : ".";
                            },
                            er = (e) => {
                                if ("/" === e) return "/";
                                var t = (e = (e = ee(e)).replace(/\/$/, "")).lastIndexOf("/");
                                return -1 === t ? e : e.substr(t + 1);
                            },
                            en = (e) =>
                                (en = (() => {
                                    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
                                        return (e) => crypto.getRandomValues(e);
                                    U("initRandomDevice");
                                })())(e),
                            eo = (...e) => {
                                for (var t = "", r = !1, n = e.length - 1; -1 <= n && !r; n--) {
                                    if ("string" != typeof (r = 0 <= n ? e[n] : "/"))
                                        throw TypeError("Arguments to path.resolve must be strings");
                                    if (!r) return "";
                                    (t = r + "/" + t), (r = "/" === r.charAt(0));
                                }
                                return (
                                    (t = Q(
                                        t.split("/").filter((e) => !!e),
                                        !r,
                                    ).join("/")),
                                    (r ? "/" : "") + t || "."
                                );
                            },
                            ei = "u" > typeof TextDecoder ? new TextDecoder("utf8") : void 0,
                            ea = (e, t, r) => {
                                var n = t + r;
                                for (r = t; e[r] && !(r >= n); ) ++r;
                                if (16 < r - t && e.buffer && ei) return ei.decode(e.subarray(t, r));
                                for (n = ""; t < r; ) {
                                    var o = e[t++];
                                    if (128 & o) {
                                        var i = 63 & e[t++];
                                        if (192 == (224 & o)) n += String.fromCharCode(((31 & o) << 6) | i);
                                        else {
                                            var a = 63 & e[t++];
                                            65536 >
                                            (o =
                                                224 == (240 & o)
                                                    ? ((15 & o) << 12) | (i << 6) | a
                                                    : ((7 & o) << 18) | (i << 12) | (a << 6) | (63 & e[t++]))
                                                ? (n += String.fromCharCode(o))
                                                : ((o -= 65536),
                                                  (n += String.fromCharCode(55296 | (o >> 10), 56320 | (1023 & o))));
                                        }
                                    } else n += String.fromCharCode(o);
                                }
                                return n;
                            },
                            es = [],
                            el = (e) => {
                                for (var t = 0, r = 0; r < e.length; ++r) {
                                    var n = e.charCodeAt(r);
                                    127 >= n
                                        ? t++
                                        : 2047 >= n
                                          ? (t += 2)
                                          : 55296 <= n && 57343 >= n
                                            ? ((t += 4), ++r)
                                            : (t += 3);
                                }
                                return t;
                            },
                            eu = (e, t, r, n) => {
                                if (!(0 < n)) return 0;
                                var o = r;
                                n = r + n - 1;
                                for (var i = 0; i < e.length; ++i) {
                                    var a = e.charCodeAt(i);
                                    if (
                                        (55296 <= a &&
                                            57343 >= a &&
                                            (a = (65536 + ((1023 & a) << 10)) | (1023 & e.charCodeAt(++i))),
                                        127 >= a)
                                    ) {
                                        if (r >= n) break;
                                        t[r++] = a;
                                    } else {
                                        if (2047 >= a) {
                                            if (r + 1 >= n) break;
                                            t[r++] = 192 | (a >> 6);
                                        } else {
                                            if (65535 >= a) {
                                                if (r + 2 >= n) break;
                                                t[r++] = 224 | (a >> 12);
                                            } else {
                                                if (r + 3 >= n) break;
                                                (t[r++] = 240 | (a >> 18)), (t[r++] = 128 | ((a >> 12) & 63));
                                            }
                                            t[r++] = 128 | ((a >> 6) & 63);
                                        }
                                        t[r++] = 128 | (63 & a);
                                    }
                                }
                                return (t[r] = 0), r - o;
                            };
                        function ec(e, t) {
                            var r = Array(el(e) + 1);
                            return (e = eu(e, r, 0, r.length)), t && (r.length = e), r;
                        }
                        var ef = [];
                        function ep(e, t) {
                            var r, n;
                            (ef[e] = { input: [], G: [], V: t }), (r = e), (n = ed), (ey[r] = { m: n });
                        }
                        var ed = {
                            open(e) {
                                var t = ef[e.node.xa];
                                if (!t) throw new eS(43);
                                (e.s = t), (e.seekable = !1);
                            },
                            close(e) {
                                e.s.V.oa(e.s);
                            },
                            oa(e) {
                                e.s.V.oa(e.s);
                            },
                            read(e, t, r, n) {
                                if (!e.s || !e.s.V.hb) throw new eS(60);
                                for (var o = 0, i = 0; i < n; i++) {
                                    try {
                                        var a = e.s.V.hb(e.s);
                                    } catch (e) {
                                        throw new eS(29);
                                    }
                                    if (void 0 === a && 0 === o) throw new eS(6);
                                    if (null == a) break;
                                    o++, (t[r + i] = a);
                                }
                                return o && (e.node.timestamp = Date.now()), o;
                            },
                            write(e, t, r, n) {
                                if (!e.s || !e.s.V.Ma) throw new eS(60);
                                try {
                                    for (var o = 0; o < n; o++) e.s.V.Ma(e.s, t[r + o]);
                                } catch (e) {
                                    throw new eS(29);
                                }
                                return n && (e.node.timestamp = Date.now()), o;
                            },
                        };
                        function eh(e, t) {
                            var r = e.l ? e.l.length : 0;
                            r >= t ||
                                ((t = Math.max(t, (r * (1048576 > r ? 2 : 1.125)) >>> 0)),
                                0 != r && (t = Math.max(t, 256)),
                                (r = e.l),
                                (e.l = new Uint8Array(t)),
                                0 < e.v && e.l.set(r.subarray(0, e.v), 0));
                        }
                        var em = {
                                N: null,
                                U: () => em.createNode(null, "/", 16895, 0),
                                createNode(e, t, r, n) {
                                    if (24576 == (61440 & r) || 4096 == (61440 & r)) throw new eS(63);
                                    return (
                                        em.N ||
                                            (em.N = {
                                                dir: {
                                                    node: {
                                                        X: em.j.X,
                                                        P: em.j.P,
                                                        ja: em.j.ja,
                                                        ta: em.j.ta,
                                                        sb: em.j.sb,
                                                        yb: em.j.yb,
                                                        tb: em.j.tb,
                                                        rb: em.j.rb,
                                                        Ca: em.j.Ca,
                                                    },
                                                    stream: { aa: em.m.aa },
                                                },
                                                file: {
                                                    node: { X: em.j.X, P: em.j.P },
                                                    stream: {
                                                        aa: em.m.aa,
                                                        read: em.m.read,
                                                        write: em.m.write,
                                                        Xa: em.m.Xa,
                                                        kb: em.m.kb,
                                                        mb: em.m.mb,
                                                    },
                                                },
                                                link: { node: { X: em.j.X, P: em.j.P, la: em.j.la }, stream: {} },
                                                $a: { node: { X: em.j.X, P: em.j.P }, stream: eF },
                                            }),
                                        16384 == (61440 & (r = eA(e, t, r, n)).mode)
                                            ? ((r.j = em.N.dir.node), (r.m = em.N.dir.stream), (r.l = {}))
                                            : 32768 == (61440 & r.mode)
                                              ? ((r.j = em.N.file.node),
                                                (r.m = em.N.file.stream),
                                                (r.v = 0),
                                                (r.l = null))
                                              : 40960 == (61440 & r.mode)
                                                ? ((r.j = em.N.link.node), (r.m = em.N.link.stream))
                                                : 8192 == (61440 & r.mode) &&
                                                  ((r.j = em.N.$a.node), (r.m = em.N.$a.stream)),
                                        (r.timestamp = Date.now()),
                                        e && ((e.l[t] = r), (e.timestamp = r.timestamp)),
                                        r
                                    );
                                },
                                Fc: (e) =>
                                    e.l
                                        ? e.l.subarray
                                            ? e.l.subarray(0, e.v)
                                            : new Uint8Array(e.l)
                                        : new Uint8Array(0),
                                j: {
                                    X(e) {
                                        var t = {};
                                        return (
                                            (t.Dc = 8192 == (61440 & e.mode) ? e.id : 1),
                                            (t.Hc = e.id),
                                            (t.mode = e.mode),
                                            (t.Kc = 1),
                                            (t.uid = 0),
                                            (t.Gc = 0),
                                            (t.xa = e.xa),
                                            16384 == (61440 & e.mode)
                                                ? (t.size = 4096)
                                                : 32768 == (61440 & e.mode)
                                                  ? (t.size = e.v)
                                                  : 40960 == (61440 & e.mode)
                                                    ? (t.size = e.link.length)
                                                    : (t.size = 0),
                                            (t.vc = new Date(e.timestamp)),
                                            (t.Jc = new Date(e.timestamp)),
                                            (t.Cc = new Date(e.timestamp)),
                                            (t.Gb = 4096),
                                            (t.wc = Math.ceil(t.size / t.Gb)),
                                            t
                                        );
                                    },
                                    P(e, t) {
                                        if (
                                            (void 0 !== t.mode && (e.mode = t.mode),
                                            void 0 !== t.timestamp && (e.timestamp = t.timestamp),
                                            void 0 !== t.size && ((t = t.size), e.v != t))
                                        )
                                            if (0 == t) (e.l = null), (e.v = 0);
                                            else {
                                                var r = e.l;
                                                (e.l = new Uint8Array(t)),
                                                    r && e.l.set(r.subarray(0, Math.min(t, e.v))),
                                                    (e.v = t);
                                            }
                                    },
                                    ja() {
                                        throw ex[44];
                                    },
                                    ta: (e, t, r, n) => em.createNode(e, t, r, n),
                                    sb(e, t, r) {
                                        if (16384 == (61440 & e.mode)) {
                                            try {
                                                var n = eP(t, r);
                                            } catch (e) {}
                                            if (n) for (var o in n.l) throw new eS(55);
                                        }
                                        delete e.parent.l[e.name],
                                            (e.parent.timestamp = Date.now()),
                                            (e.name = r),
                                            (t.l[r] = e),
                                            (t.timestamp = e.parent.timestamp);
                                    },
                                    yb(e, t) {
                                        delete e.l[t], (e.timestamp = Date.now());
                                    },
                                    tb(e, t) {
                                        var r,
                                            n = eP(e, t);
                                        for (r in n.l) throw new eS(55);
                                        delete e.l[t], (e.timestamp = Date.now());
                                    },
                                    rb(e) {
                                        var t,
                                            r = [".", ".."];
                                        for (t of Object.keys(e.l)) r.push(t);
                                        return r;
                                    },
                                    Ca: (e, t, r) => (((e = em.createNode(e, t, 41471, 0)).link = r), e),
                                    la(e) {
                                        if (40960 != (61440 & e.mode)) throw new eS(28);
                                        return e.link;
                                    },
                                },
                                m: {
                                    read(e, t, r, n, o) {
                                        var i = e.node.l;
                                        if (o >= e.node.v) return 0;
                                        if (8 < (e = Math.min(e.node.v - o, n)) && i.subarray)
                                            t.set(i.subarray(o, o + e), r);
                                        else for (n = 0; n < e; n++) t[r + n] = i[o + n];
                                        return e;
                                    },
                                    write(e, t, r, n, o, i) {
                                        if ((t.buffer === T.buffer && (i = !1), !n)) return 0;
                                        if (
                                            (((e = e.node).timestamp = Date.now()),
                                            t.subarray && (!e.l || e.l.subarray))
                                        ) {
                                            if (i) return (e.l = t.subarray(r, r + n)), (e.v = n);
                                            if (0 === e.v && 0 === o) return (e.l = t.slice(r, r + n)), (e.v = n);
                                            if (o + n <= e.v) return e.l.set(t.subarray(r, r + n), o), n;
                                        }
                                        if ((eh(e, o + n), e.l.subarray && t.subarray))
                                            e.l.set(t.subarray(r, r + n), o);
                                        else for (i = 0; i < n; i++) e.l[o + i] = t[r + i];
                                        return (e.v = Math.max(e.v, o + n)), n;
                                    },
                                    aa(e, t, r) {
                                        if (
                                            (1 === r
                                                ? (t += e.position)
                                                : 2 === r && 32768 == (61440 & e.node.mode) && (t += e.node.v),
                                            0 > t)
                                        )
                                            throw new eS(28);
                                        return t;
                                    },
                                    Xa(e, t, r) {
                                        eh(e.node, t + r), (e.node.v = Math.max(e.node.v, t + r));
                                    },
                                    kb(e, t, r, n, o) {
                                        if (32768 != (61440 & e.node.mode)) throw new eS(43);
                                        if (((e = e.node.l), 2 & o || e.buffer !== T.buffer))
                                            throw (
                                                ((0 < r || r + t < e.length) &&
                                                    (e = e.subarray
                                                        ? e.subarray(r, r + t)
                                                        : Array.prototype.slice.call(e, r, r + t)),
                                                (r = !0),
                                                U(),
                                                (t = void 0),
                                                new eS(48))
                                            );
                                        return (r = !1), (t = e.byteOffset), { o: t, uc: r };
                                    },
                                    mb: (e, t, r, n) => (em.m.write(e, t, 0, n, r, !1), 0),
                                },
                            },
                            ev = null,
                            ey = {},
                            eg = [],
                            eb = 1,
                            ew = null,
                            e_ = !0,
                            eS = class {
                                constructor(e) {
                                    (this.name = "ErrnoError"), (this.$ = e);
                                }
                            },
                            ex = {},
                            eE = class {
                                constructor() {
                                    (this.h = {}), (this.node = null);
                                }
                                get flags() {
                                    return this.h.flags;
                                }
                                set flags(e) {
                                    this.h.flags = e;
                                }
                                get position() {
                                    return this.h.position;
                                }
                                set position(e) {
                                    this.h.position = e;
                                }
                            },
                            ek = class {
                                constructor(e, t, r, n) {
                                    (e ||= this),
                                        (this.parent = e),
                                        (this.U = e.U),
                                        (this.ua = null),
                                        (this.id = eb++),
                                        (this.name = t),
                                        (this.mode = r),
                                        (this.j = {}),
                                        (this.m = {}),
                                        (this.xa = n);
                                }
                                get read() {
                                    return 365 == (365 & this.mode);
                                }
                                set read(e) {
                                    e ? (this.mode |= 365) : (this.mode &= -366);
                                }
                                get write() {
                                    return 146 == (146 & this.mode);
                                }
                                set write(e) {
                                    e ? (this.mode |= 146) : (this.mode &= -147);
                                }
                            };
                        function eC(e, t = {}) {
                            if (!(e = eo(e))) return { path: "", node: null };
                            if (8 < (t = Object.assign({ gb: !0, Oa: 0 }, t)).Oa) throw new eS(32);
                            e = e.split("/").filter((e) => !!e);
                            for (var r = ev, n = "/", o = 0; o < e.length; o++) {
                                var i = o === e.length - 1;
                                if (i && t.parent) break;
                                if (
                                    ((r = eP(r, e[o])),
                                    (n = ee(n + "/" + e[o])),
                                    r.ua && (!i || (i && t.gb)) && (r = r.ua.root),
                                    !i || t.fb)
                                ) {
                                    for (i = 0; 40960 == (61440 & r.mode); )
                                        if (
                                            ((r = (function (e) {
                                                if (!(e = eC(e).node)) throw new eS(44);
                                                if (!e.j.la) throw new eS(28);
                                                return eo(eT(e.parent), e.j.la(e));
                                            })(n)),
                                            (r = eC((n = eo(et(n), r)), { Oa: t.Oa + 1 }).node),
                                            40 < i++)
                                        )
                                            throw new eS(32);
                                }
                            }
                            return { path: n, node: r };
                        }
                        function eT(e) {
                            for (var t; ; ) {
                                if (e === e.parent)
                                    return (e = e.U.lb), t ? ("/" !== e[e.length - 1] ? `${e}/${t}` : e + t) : e;
                                (t = t ? `${e.name}/${t}` : e.name), (e = e.parent);
                            }
                        }
                        function eM(e, t) {
                            for (var r = 0, n = 0; n < t.length; n++) r = ((r << 5) - r + t.charCodeAt(n)) | 0;
                            return ((e + r) >>> 0) % ew.length;
                        }
                        function eP(e, t) {
                            var r = 16384 == (61440 & e.mode) ? ((r = eI(e, "x")) ? r : 2 * !e.j.ja) : 54;
                            if (r) throw new eS(r);
                            for (r = ew[eM(e.id, t)]; r; r = r.ec) {
                                var n = r.name;
                                if (r.parent.id === e.id && n === t) return r;
                            }
                            return e.j.ja(e, t);
                        }
                        function eA(e, t, r, n) {
                            return (t = eM((e = new ek(e, t, r, n)).parent.id, e.name)), (e.ec = ew[t]), (ew[t] = e);
                        }
                        function eO(e) {
                            var t = ["r", "w", "rw"][3 & e];
                            return 512 & e && (t += "w"), t;
                        }
                        function eI(e, t) {
                            return e_
                                ? 0
                                : (t.includes("r") && !(292 & e.mode)) ||
                                    (t.includes("w") && !(146 & e.mode)) ||
                                    (t.includes("x") && !(73 & e.mode))
                                  ? 2
                                  : 0;
                        }
                        function eD(e, t) {
                            try {
                                return eP(e, t), 20;
                            } catch (e) {}
                            return eI(e, "wx");
                        }
                        function eL(e) {
                            if (!(e = eg[e])) throw new eS(8);
                            return e;
                        }
                        function eR(e, t = -1) {
                            if (((e = Object.assign(new eE(), e)), -1 == t))
                                e: {
                                    for (t = 0; 4096 >= t; t++) if (!eg[t]) break e;
                                    throw new eS(33);
                                }
                            return (e.W = t), (eg[t] = e);
                        }
                        var eF = {
                            open(e) {
                                (e.m = ey[e.node.xa].m), e.m.open?.(e);
                            },
                            aa() {
                                throw new eS(70);
                            },
                        };
                        function eN(e, t) {
                            var r = "/" === t;
                            if (r && ev) throw new eS(10);
                            if (!r && t) {
                                var n = eC(t, { gb: !1 });
                                if (((t = n.path), (n = n.node).ua)) throw new eS(10);
                                if (16384 != (61440 & n.mode)) throw new eS(54);
                            }
                            (t = { type: e, Mc: {}, lb: t, dc: [] }),
                                ((e = e.U(t)).U = t),
                                (t.root = e),
                                r ? (ev = e) : n && ((n.ua = t), n.U && n.U.dc.push(t));
                        }
                        function ej(e, t, r) {
                            var n = eC(e, { parent: !0 }).node;
                            if (!(e = er(e)) || "." === e || ".." === e) throw new eS(28);
                            var o = eD(n, e);
                            if (o) throw new eS(o);
                            if (!n.j.ta) throw new eS(63);
                            return n.j.ta(n, e, t, r);
                        }
                        function eB(e) {
                            return ej(e, 16895, 0);
                        }
                        function e$(e, t, r) {
                            void 0 === r && ((r = t), (t = 438)), ej(e, 8192 | t, r);
                        }
                        function eK(e, t) {
                            if (!eo(e)) throw new eS(44);
                            var r = eC(t, { parent: !0 }).node;
                            if (!r) throw new eS(44);
                            var n = eD(r, (t = er(t)));
                            if (n) throw new eS(n);
                            if (!r.j.Ca) throw new eS(63);
                            r.j.Ca(r, t, e);
                        }
                        function eV(t, r, n) {
                            if ("" === t) throw new eS(44);
                            if ("string" == typeof r) {
                                var o = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[r];
                                if (void 0 === o) throw Error(`Unknown file open mode: ${r}`);
                                r = o;
                            }
                            if (((n = 64 & r ? ((void 0 === n ? 438 : n) & 4095) | 32768 : 0), "object" == typeof t))
                                var i = t;
                            else {
                                t = ee(t);
                                try {
                                    i = eC(t, { fb: !(131072 & r) }).node;
                                } catch (e) {}
                            }
                            if (((o = !1), 64 & r))
                                if (i) {
                                    if (128 & r) throw new eS(20);
                                } else (i = ej(t, n, 0)), (o = !0);
                            if (!i) throw new eS(44);
                            if ((8192 == (61440 & i.mode) && (r &= -513), 65536 & r && 16384 != (61440 & i.mode)))
                                throw new eS(54);
                            if (
                                !o &&
                                (n = i
                                    ? 40960 == (61440 & i.mode)
                                        ? 32
                                        : 16384 == (61440 & i.mode) && ("r" !== eO(r) || 512 & r)
                                          ? 31
                                          : eI(i, eO(r))
                                    : 44)
                            )
                                throw new eS(n);
                            if (512 & r && !o) {
                                if (!(n = "string" == typeof (n = i) ? eC(n, { fb: !0 }).node : n).j.P)
                                    throw new eS(63);
                                if (16384 == (61440 & n.mode)) throw new eS(31);
                                if (32768 != (61440 & n.mode)) throw new eS(28);
                                if ((o = eI(n, "w"))) throw new eS(o);
                                n.j.P(n, { size: 0, timestamp: Date.now() });
                            }
                            return (
                                (r &= -131713),
                                (i = eR({
                                    node: i,
                                    path: eT(i),
                                    flags: r,
                                    seekable: !0,
                                    position: 0,
                                    m: i.m,
                                    sc: [],
                                    error: !1,
                                })).m.open && i.m.open(i),
                                !e.logReadFiles || 1 & r || t in (eG ||= {}) || (eG[t] = 1),
                                i
                            );
                        }
                        function eU(e, t, r) {
                            if (null === e.W) throw new eS(8);
                            if (!e.seekable || !e.m.aa) throw new eS(70);
                            if (0 != r && 1 != r && 2 != r) throw new eS(28);
                            (e.position = e.m.aa(e, t, r)), (e.sc = []);
                        }
                        function ez(e, t, r) {
                            e = ee("/dev/" + e);
                            var n,
                                o = ((n = 0), t && (n |= 365), r && (n |= 146), n);
                            eH ||= 64;
                            var i = eH++ << 8;
                            (ey[i] = {
                                m: {
                                    open(e) {
                                        e.seekable = !1;
                                    },
                                    close() {
                                        r?.buffer?.length && r(10);
                                    },
                                    read(e, r, n, o) {
                                        for (var i = 0, a = 0; a < o; a++) {
                                            try {
                                                var s = t();
                                            } catch (e) {
                                                throw new eS(29);
                                            }
                                            if (void 0 === s && 0 === i) throw new eS(6);
                                            if (null == s) break;
                                            i++, (r[n + a] = s);
                                        }
                                        return i && (e.node.timestamp = Date.now()), i;
                                    },
                                    write(e, t, n, o) {
                                        for (var i = 0; i < o; i++)
                                            try {
                                                r(t[n + i]);
                                            } catch (e) {
                                                throw new eS(29);
                                            }
                                        return o && (e.node.timestamp = Date.now()), i;
                                    },
                                },
                            }),
                                e$(e, o, i);
                        }
                        var eW,
                            eH,
                            eG,
                            eq,
                            eY,
                            eJ,
                            eX,
                            eZ,
                            eQ = {},
                            e0 = void 0,
                            e1 = (e, t) => Object.defineProperty(t, "name", { value: e }),
                            e2 = [],
                            e3 = [],
                            e4 = (e) => {
                                if (!e) throw new eq("Cannot use deleted val. handle = " + e);
                                return e3[e];
                            },
                            e5 = (e) => {
                                switch (e) {
                                    case void 0:
                                        return 2;
                                    case null:
                                        return 4;
                                    case !0:
                                        return 6;
                                    case !1:
                                        return 8;
                                    default:
                                        let t = e2.pop() || e3.length;
                                        return (e3[t] = e), (e3[t + 1] = 1), t;
                                }
                            },
                            e6 = (e) => {
                                var t = Error,
                                    r = e1(e, function (t) {
                                        (this.name = e),
                                            (this.message = t),
                                            void 0 !== (t = Error(t).stack) &&
                                                (this.stack =
                                                    this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""));
                                    });
                                return (
                                    (r.prototype = Object.create(t.prototype)),
                                    (r.prototype.constructor = r),
                                    (r.prototype.toString = function () {
                                        return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
                                    }),
                                    r
                                );
                            },
                            e8 = (e) => {
                                for (var t = ""; M[e]; ) t += eJ[M[e++]];
                                return t;
                            },
                            e7 = [],
                            e9 = () => {
                                for (; e7.length; ) {
                                    var e = e7.pop();
                                    (e.g.ea = !1), e.delete();
                                }
                            },
                            te = {},
                            tt = (e, t) => {
                                if (void 0 === t) throw new eq("ptr should not be undefined");
                                for (; e.C; ) (t = e.ma(t)), (e = e.C);
                                return t;
                            },
                            tr = {},
                            tn = (e) => {
                                var t = e8((e = rn(e)));
                                return rt(e), t;
                            },
                            to = (e, t) => {
                                var r = tr[e];
                                if (void 0 === r) throw ((e = `${t} has unknown type ${tn(e)}`), new eq(e));
                                return r;
                            },
                            ti = () => {},
                            ta = !1,
                            ts = (e, t, r) =>
                                t === r ? e : void 0 === r.C || null === (e = ts(e, t, r.C)) ? null : r.Lb(e),
                            tl = {},
                            tu = (e, t) => {
                                if (!t.u || !t.o) throw new eZ("makeClassHandle requires ptr and ptrType");
                                if (!!t.J != !!t.F) throw new eZ("Both smartPtrType and smartPtr must be specified");
                                return (
                                    (t.count = { value: 1 }), tc(Object.create(e, { g: { value: t, writable: !0 } }))
                                );
                            },
                            tc = (e) =>
                                "u" < typeof FinalizationRegistry
                                    ? ((tc = (e) => e), e)
                                    : ((ta = new FinalizationRegistry((e) => {
                                          (e = e.g),
                                              --e.count.value,
                                              0 === e.count.value && (e.F ? e.J.O(e.F) : e.u.i.O(e.o));
                                      })),
                                      (tc = (e) => {
                                          var t = e.g;
                                          return t.F && ta.register(e, { g: t }, e), e;
                                      }),
                                      (ti = (e) => {
                                          ta.unregister(e);
                                      }),
                                      tc(e)),
                            tf = {},
                            tp = (e) => {
                                for (; e.length; ) {
                                    var t = e.pop();
                                    e.pop()(t);
                                }
                            };
                        function td(e) {
                            return this.fromWireType(I[e >> 2]);
                        }
                        var th = {},
                            tm = {},
                            tv = (e, t, r) => {
                                function n(t) {
                                    if ((t = r(t)).length !== e.length) throw new eZ("Mismatched type converter count");
                                    for (var n = 0; n < e.length; ++n) ty(e[n], t[n]);
                                }
                                e.forEach(function (e) {
                                    tm[e] = t;
                                });
                                var o = Array(t.length),
                                    i = [],
                                    a = 0;
                                t.forEach((e, t) => {
                                    tr.hasOwnProperty(e)
                                        ? (o[t] = tr[e])
                                        : (i.push(e),
                                          th.hasOwnProperty(e) || (th[e] = []),
                                          th[e].push(() => {
                                              (o[t] = tr[e]), ++a === i.length && n(o);
                                          }));
                                }),
                                    0 === i.length && n(o);
                            };
                        function ty(e, t, r = {}) {
                            if (!("argPackAdvance" in t))
                                throw TypeError("registerType registeredInstance requires argPackAdvance");
                            return (function (e, t, r = {}) {
                                var n = t.name;
                                if (!e) throw new eq(`type "${n}" must have a positive integer typeid pointer`);
                                if (tr.hasOwnProperty(e)) {
                                    if (r.Vb) return;
                                    throw new eq(`Cannot register type '${n}' twice`);
                                }
                                (tr[e] = t),
                                    delete tm[e],
                                    th.hasOwnProperty(e) && ((t = th[e]), delete th[e], t.forEach((e) => e()));
                            })(e, t, r);
                        }
                        var tg = (e) => {
                            throw new eq(e.g.u.i.name + " instance already deleted");
                        };
                        function tb() {}
                        var tw = (e, t, r) => {
                                if (void 0 === e[t].A) {
                                    var n = e[t];
                                    (e[t] = function (...n) {
                                        if (!e[t].A.hasOwnProperty(n.length))
                                            throw new eq(
                                                `Function '${r}' called with an invalid number of arguments (${n.length}) - expects one of (${e[t].A})!`,
                                            );
                                        return e[t].A[n.length].apply(this, n);
                                    }),
                                        (e[t].A = []),
                                        (e[t].A[n.da] = n);
                                }
                            },
                            t_ = (t, r, n) => {
                                if (e.hasOwnProperty(t)) {
                                    if (void 0 === n || (void 0 !== e[t].A && void 0 !== e[t].A[n]))
                                        throw new eq(`Cannot register public name '${t}' twice`);
                                    if ((tw(e, t, t), e.hasOwnProperty(n)))
                                        throw new eq(
                                            `Cannot register multiple overloads of a function with the same number of arguments (${n})!`,
                                        );
                                    e[t].A[n] = r;
                                } else (e[t] = r), void 0 !== n && (e[t].Lc = n);
                            };
                        function tS(e, t, r, n, o, i, a, s) {
                            (this.name = e),
                                (this.constructor = t),
                                (this.M = r),
                                (this.O = n),
                                (this.C = o),
                                (this.Qb = i),
                                (this.ma = a),
                                (this.Lb = s),
                                (this.pb = []);
                        }
                        var tx = (e, t, r) => {
                            for (; t !== r; ) {
                                if (!t.ma)
                                    throw new eq(
                                        `Expected null or instance of ${r.name}, got an instance of ${t.name}`,
                                    );
                                (e = t.ma(e)), (t = t.C);
                            }
                            return e;
                        };
                        function tE(e, t) {
                            if (null === t) {
                                if (this.La) throw new eq(`null is not a valid ${this.name}`);
                                return 0;
                            }
                            if (!t.g) throw new eq(`Cannot pass "${tV(t)}" as a ${this.name}`);
                            if (!t.g.o) throw new eq(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            return tx(t.g.o, t.g.u.i, this.i);
                        }
                        function tk(e, t) {
                            if (null === t) {
                                if (this.La) throw new eq(`null is not a valid ${this.name}`);
                                if (this.sa) {
                                    var r = this.Na();
                                    return null !== e && e.push(this.O, r), r;
                                }
                                return 0;
                            }
                            if (!t || !t.g) throw new eq(`Cannot pass "${tV(t)}" as a ${this.name}`);
                            if (!t.g.o) throw new eq(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            if (!this.ra && t.g.u.ra)
                                throw new eq(
                                    `Cannot convert argument of type ${t.g.J ? t.g.J.name : t.g.u.name} to parameter type ${this.name}`,
                                );
                            if (((r = tx(t.g.o, t.g.u.i, this.i)), this.sa)) {
                                if (void 0 === t.g.F) throw new eq("Passing raw pointer to smart pointer is illegal");
                                switch (this.mc) {
                                    case 0:
                                        if (t.g.J === this) r = t.g.F;
                                        else
                                            throw new eq(
                                                `Cannot convert argument of type ${t.g.J ? t.g.J.name : t.g.u.name} to parameter type ${this.name}`,
                                            );
                                        break;
                                    case 1:
                                        r = t.g.F;
                                        break;
                                    case 2:
                                        if (t.g.J === this) r = t.g.F;
                                        else {
                                            var n = t.clone();
                                            (r = this.ic(
                                                r,
                                                e5(() => n.delete()),
                                            )),
                                                null !== e && e.push(this.O, r);
                                        }
                                        break;
                                    default:
                                        throw new eq("Unsupporting sharing policy");
                                }
                            }
                            return r;
                        }
                        function tC(e, t) {
                            if (null === t) {
                                if (this.La) throw new eq(`null is not a valid ${this.name}`);
                                return 0;
                            }
                            if (!t.g) throw new eq(`Cannot pass "${tV(t)}" as a ${this.name}`);
                            if (!t.g.o) throw new eq(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            if (t.g.u.ra)
                                throw new eq(
                                    `Cannot convert argument of type ${t.g.u.name} to parameter type ${this.name}`,
                                );
                            return tx(t.g.o, t.g.u.i, this.i);
                        }
                        function tT(e, t, r, n, o, i, a, s, l, u, c) {
                            (this.name = e),
                                (this.i = t),
                                (this.La = r),
                                (this.ra = n),
                                (this.sa = o),
                                (this.hc = i),
                                (this.mc = a),
                                (this.qb = s),
                                (this.Na = l),
                                (this.ic = u),
                                (this.O = c),
                                o || void 0 !== t.C
                                    ? (this.toWireType = tk)
                                    : ((this.toWireType = n ? tE : tC), (this.L = null));
                        }
                        var tM,
                            tP,
                            tA = (t, r, n) => {
                                if (!e.hasOwnProperty(t)) throw new eZ("Replacing nonexistent public symbol");
                                void 0 !== e[t].A && void 0 !== n ? (e[t].A[n] = r) : ((e[t] = r), (e[t].da = n));
                            },
                            tO = [],
                            tI = (e) => {
                                var t = tO[e];
                                return t || (e >= tO.length && (tO.length = e + 1), (tO[e] = t = tM.get(e))), t;
                            },
                            tD = (t, r) => {
                                let n;
                                var o = (t = e8(t)).includes("j")
                                    ? ((n = t),
                                      (...t) =>
                                          ((t, r, n = []) =>
                                              t.includes("j")
                                                  ? (0, e["dynCall_" + (t = t.replace(/p/g, "i"))])(r, ...n)
                                                  : tI(r)(...n))(n, r, t))
                                    : tI(r);
                                if ("function" != typeof o)
                                    throw new eq(`unknown function pointer with signature ${t}: ${r}`);
                                return o;
                            },
                            tL = (e, t) => {
                                var r = [],
                                    n = {};
                                throw (
                                    (t.forEach(function e(t) {
                                        n[t] || tr[t] || (tm[t] ? tm[t].forEach(e) : (r.push(t), (n[t] = !0)));
                                    }),
                                    new tP(`${e}: ` + r.map(tn).join([", "])))
                                );
                            };
                        function tR(e, t, r, n, o) {
                            var i = t.length;
                            if (2 > i)
                                throw new eq(
                                    "argTypes array size mismatch! Must at least get return value and 'this' types!",
                                );
                            var a = null !== t[1] && null !== r,
                                s = (function (e) {
                                    for (var t = 1; t < e.length; ++t)
                                        if (null !== e[t] && void 0 === e[t].L) return !0;
                                    return !1;
                                })(t),
                                l = "void" !== t[0].name,
                                u = i - 2,
                                c = Array(u),
                                f = [],
                                p = [];
                            return e1(e, function (...r) {
                                if (r.length !== u)
                                    throw new eq(`function ${e} called with ${r.length} arguments, expected ${u}`);
                                if (((p.length = 0), (f.length = a ? 2 : 1), (f[0] = o), a)) {
                                    var i = t[1].toWireType(p, this);
                                    f[1] = i;
                                }
                                for (var d = 0; d < u; ++d) (c[d] = t[d + 2].toWireType(p, r[d])), f.push(c[d]);
                                if (((r = n(...f)), s)) tp(p);
                                else
                                    for (d = a ? 1 : 2; d < t.length; d++) {
                                        var h = 1 === d ? i : c[d - 2];
                                        null !== t[d].L && t[d].L(h);
                                    }
                                return l ? t[0].fromWireType(r) : void 0;
                            });
                        }
                        var tF,
                            tN = (e, t) => {
                                for (var r = [], n = 0; n < e; n++) r.push(I[(t + 4 * n) >> 2]);
                                return r;
                            },
                            tj = (e) => {
                                let t = (e = e.trim()).indexOf("(");
                                return -1 !== t ? e.substr(0, t) : e;
                            },
                            tB = (e, t, r) => {
                                if (!(e instanceof Object)) throw new eq(`${r} with invalid "this": ${e}`);
                                if (!(e instanceof t.i.constructor))
                                    throw new eq(`${r} incompatible with "this" of type ${e.constructor.name}`);
                                if (!e.g.o)
                                    throw new eq(`cannot call emscripten binding method ${r} on deleted object`);
                                return tx(e.g.o, e.g.u.i, t.i);
                            },
                            t$ = (e) => {
                                9 < e && 0 == --e3[e + 1] && ((e3[e] = void 0), e2.push(e));
                            },
                            tK = {
                                name: "emscripten::val",
                                fromWireType: (e) => {
                                    var t = e4(e);
                                    return t$(e), t;
                                },
                                toWireType: (e, t) => e5(t),
                                argPackAdvance: 8,
                                readValueFromPointer: td,
                                L: null,
                            },
                            tV = (e) => {
                                if (null === e) return "null";
                                var t = typeof e;
                                return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e;
                            },
                            tU = "u" > typeof TextDecoder ? new TextDecoder("utf-16le") : void 0,
                            tz = (e, t) => {
                                for (var r = e >> 1, n = r + t / 2; !(r >= n) && A[r]; ) ++r;
                                if (32 < (r <<= 1) - e && tU) return tU.decode(M.subarray(e, r));
                                for (n = 0, r = ""; !(n >= t / 2); ++n) {
                                    var o = P[(e + 2 * n) >> 1];
                                    if (0 == o) break;
                                    r += String.fromCharCode(o);
                                }
                                return r;
                            },
                            tW = (e, t, r) => {
                                if (2 > (r ??= 0x7fffffff)) return 0;
                                r -= 2;
                                var n = t;
                                r = r < 2 * e.length ? r / 2 : e.length;
                                for (var o = 0; o < r; ++o) (P[t >> 1] = e.charCodeAt(o)), (t += 2);
                                return (P[t >> 1] = 0), t - n;
                            },
                            tH = (e) => 2 * e.length,
                            tG = (e, t) => {
                                for (var r = 0, n = ""; !(r >= t / 4); ) {
                                    var o = O[(e + 4 * r) >> 2];
                                    if (0 == o) break;
                                    ++r,
                                        65536 <= o
                                            ? ((o -= 65536),
                                              (n += String.fromCharCode(55296 | (o >> 10), 56320 | (1023 & o))))
                                            : (n += String.fromCharCode(o));
                                }
                                return n;
                            },
                            tq = (e, t, r) => {
                                if (4 > (r ??= 0x7fffffff)) return 0;
                                var n = t;
                                r = n + r - 4;
                                for (var o = 0; o < e.length; ++o) {
                                    var i = e.charCodeAt(o);
                                    if (
                                        (55296 <= i &&
                                            57343 >= i &&
                                            (i = (65536 + ((1023 & i) << 10)) | (1023 & e.charCodeAt(++o))),
                                        (O[t >> 2] = i),
                                        (t += 4) + 4 > r)
                                    )
                                        break;
                                }
                                return (O[t >> 2] = 0), t - n;
                            },
                            tY = (e) => {
                                for (var t = 0, r = 0; r < e.length; ++r) {
                                    var n = e.charCodeAt(r);
                                    55296 <= n && 57343 >= n && ++r, (t += 4);
                                }
                                return t;
                            },
                            tJ = (e, t, r) => {
                                var n = [];
                                return (e = e.toWireType(n, r)), n.length && (I[t >> 2] = e5(n)), e;
                            },
                            tX = {},
                            tZ = (e) => {
                                var t = tX[e];
                                return void 0 === t ? e8(e) : t;
                            },
                            tQ = [],
                            t0 = Reflect.construct,
                            t1 = [],
                            t2 = {},
                            t3 = () => {
                                if (!tF) {
                                    var e,
                                        t = {
                                            USER: "web_user",
                                            LOGNAME: "web_user",
                                            PATH: "/",
                                            PWD: "/",
                                            HOME: "/home/web_user",
                                            LANG:
                                                (
                                                    ("object" == typeof navigator &&
                                                        navigator.languages &&
                                                        navigator.languages[0]) ||
                                                    "C"
                                                ).replace("-", "_") + ".UTF-8",
                                            _: _ || "./this.program",
                                        };
                                    for (e in t2) void 0 === t2[e] ? delete t[e] : (t[e] = t2[e]);
                                    var r = [];
                                    for (e in t) r.push(`${e}=${t[e]}`);
                                    tF = r;
                                }
                                return tF;
                            },
                            t4 = (e) => 0 == e % 4 && (0 != e % 100 || 0 == e % 400),
                            t5 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                            t6 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                        [44].forEach((e) => {
                            (ex[e] = new eS(e)), (ex[e].stack = "<generic error, no stack>");
                        }),
                            (ew = Array(4096)),
                            eN(em, "/"),
                            eB("/tmp"),
                            eB("/home"),
                            eB("/home/web_user"),
                            eB("/dev"),
                            (ey[259] = { m: { read: () => 0, write: (e, t, r, n) => n } }),
                            e$("/dev/null", 259),
                            ep(1280, {
                                hb() {
                                    e: {
                                        if (!es.length) {
                                            var e = null;
                                            if (
                                                ("u" > typeof window &&
                                                    "function" == typeof window.prompt &&
                                                    null !== (e = window.prompt("Input: ")) &&
                                                    (e += "\n"),
                                                !e)
                                            ) {
                                                e = null;
                                                break e;
                                            }
                                            es = ec(e, !0);
                                        }
                                        e = es.shift();
                                    }
                                    return e;
                                },
                                Ma(e, t) {
                                    null === t || 10 === t ? (x(ea(e.G, 0)), (e.G = [])) : 0 != t && e.G.push(t);
                                },
                                oa(e) {
                                    e.G && 0 < e.G.length && (x(ea(e.G, 0)), (e.G = []));
                                },
                                Xb: () => ({
                                    zc: 25856,
                                    Bc: 5,
                                    yc: 191,
                                    Ac: 35387,
                                    xc: [
                                        3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0, 0, 0, 0, 0,
                                    ],
                                }),
                                Yb: () => 0,
                                Zb: () => [24, 80],
                            }),
                            ep(1536, {
                                Ma(e, t) {
                                    null === t || 10 === t ? (E(ea(e.G, 0)), (e.G = [])) : 0 != t && e.G.push(t);
                                },
                                oa(e) {
                                    e.G && 0 < e.G.length && (E(ea(e.G, 0)), (e.G = []));
                                },
                            }),
                            e$("/dev/tty", 1280),
                            e$("/dev/tty1", 1536),
                            (t = new Uint8Array(1024)),
                            (r = 0),
                            ez("random", (o = () => (0 === r && (r = en(t).byteLength), t[--r]))),
                            ez("urandom", o),
                            eB("/dev/shm"),
                            eB("/dev/shm/tmp"),
                            eB("/proc"),
                            (i = eB("/proc/self")),
                            eB("/proc/self/fd"),
                            eN(
                                {
                                    U() {
                                        var e = eA(i, "fd", 16895, 73);
                                        return (
                                            (e.j = {
                                                ja(e, t) {
                                                    var r = eL(+t);
                                                    return ((e = {
                                                        parent: null,
                                                        U: { lb: "fake" },
                                                        j: { la: () => r.path },
                                                    }).parent = e);
                                                },
                                            }),
                                            e
                                        );
                                    },
                                },
                                "/proc/self/fd",
                            ),
                            (eq = e.BindingError =
                                class extends Error {
                                    constructor(e) {
                                        super(e), (this.name = "BindingError");
                                    }
                                }),
                            e3.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
                            (e.count_emval_handles = () => e3.length / 2 - 5 - e2.length),
                            (eY = e.PureVirtualError = e6("PureVirtualError"));
                        for (var t8 = Array(256), t7 = 0; 256 > t7; ++t7) t8[t7] = String.fromCharCode(t7);
                        (eJ = t8),
                            (e.getInheritedInstanceCount = () => Object.keys(te).length),
                            (e.getLiveInheritedInstances = () => {
                                var e,
                                    t = [];
                                for (e in te) te.hasOwnProperty(e) && t.push(te[e]);
                                return t;
                            }),
                            (e.flushPendingDeletes = e9),
                            (e.setDelayFunction = (e) => {
                                (eX = e), e7.length && eX && eX(e9);
                            }),
                            (eZ = e.InternalError =
                                class extends Error {
                                    constructor(e) {
                                        super(e), (this.name = "InternalError");
                                    }
                                }),
                            Object.assign(tb.prototype, {
                                isAliasOf: function (e) {
                                    if (!(this instanceof tb && e instanceof tb)) return !1;
                                    var t = this.g.u.i,
                                        r = this.g.o;
                                    e.g = e.g;
                                    var n = e.g.u.i;
                                    for (e = e.g.o; t.C; ) (r = t.ma(r)), (t = t.C);
                                    for (; n.C; ) (e = n.ma(e)), (n = n.C);
                                    return t === n && r === e;
                                },
                                clone: function () {
                                    if ((this.g.o || tg(this), this.g.ha)) return (this.g.count.value += 1), this;
                                    var e = tc,
                                        t = Object,
                                        r = t.create,
                                        n = Object.getPrototypeOf(this),
                                        o = this.g;
                                    return (
                                        (e = e(
                                            r.call(t, n, {
                                                g: {
                                                    value: {
                                                        count: o.count,
                                                        ea: o.ea,
                                                        ha: o.ha,
                                                        o: o.o,
                                                        u: o.u,
                                                        F: o.F,
                                                        J: o.J,
                                                    },
                                                },
                                            }),
                                        )),
                                        (e.g.count.value += 1),
                                        (e.g.ea = !1),
                                        e
                                    );
                                },
                                delete() {
                                    if ((this.g.o || tg(this), this.g.ea && !this.g.ha))
                                        throw new eq("Object already scheduled for deletion");
                                    ti(this);
                                    var e = this.g;
                                    --e.count.value,
                                        0 === e.count.value && (e.F ? e.J.O(e.F) : e.u.i.O(e.o)),
                                        this.g.ha || ((this.g.F = void 0), (this.g.o = void 0));
                                },
                                isDeleted: function () {
                                    return !this.g.o;
                                },
                                deleteLater: function () {
                                    if ((this.g.o || tg(this), this.g.ea && !this.g.ha))
                                        throw new eq("Object already scheduled for deletion");
                                    return e7.push(this), 1 === e7.length && eX && eX(e9), (this.g.ea = !0), this;
                                },
                            }),
                            Object.assign(tT.prototype, {
                                Rb(e) {
                                    return this.qb && (e = this.qb(e)), e;
                                },
                                ab(e) {
                                    this.O?.(e);
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: td,
                                fromWireType: function (e) {
                                    function t() {
                                        return this.sa
                                            ? tu(this.i.M, { u: this.hc, o: r, J: this, F: e })
                                            : tu(this.i.M, { u: this, o: e });
                                    }
                                    var r = this.Rb(e);
                                    if (!r) return this.ab(e), null;
                                    var n = te[tt(this.i, r)];
                                    if (void 0 !== n)
                                        return 0 === n.g.count.value
                                            ? ((n.g.o = r), (n.g.F = e), n.clone())
                                            : ((n = n.clone()), this.ab(e), n);
                                    if (!(n = tl[(n = this.i.Qb(r))])) return t.call(this);
                                    n = this.ra ? n.Hb : n.pointerType;
                                    var o = ts(r, this.i, n.i);
                                    return null === o
                                        ? t.call(this)
                                        : this.sa
                                          ? tu(n.i.M, { u: n, o: o, J: this, F: e })
                                          : tu(n.i.M, { u: n, o: o });
                                },
                            }),
                            (tP = e.UnboundTypeError = e6("UnboundTypeError"));
                        var t9 = {
                                __syscall_fcntl64: function (e, t, r) {
                                    e0 = r;
                                    try {
                                        var n = eL(e);
                                        switch (t) {
                                            case 0:
                                                var o = Z();
                                                if (0 > o) break;
                                                for (; eg[o]; ) o++;
                                                return (function (e, t = -1) {
                                                    return (e = eR(e, t)), e.m?.Ec?.(e), e;
                                                })(n, o).W;
                                            case 1:
                                            case 2:
                                            case 13:
                                            case 14:
                                                return 0;
                                            case 3:
                                                return n.flags;
                                            case 4:
                                                return (o = Z()), (n.flags |= o), 0;
                                            case 12:
                                                return (P[((o = Z()) + 0) >> 1] = 2), 0;
                                        }
                                        return -28;
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                                        return -e.$;
                                    }
                                },
                                __syscall_ioctl: function (e, t, r) {
                                    e0 = r;
                                    try {
                                        var n = eL(e);
                                        switch (t) {
                                            case 21509:
                                            case 21510:
                                            case 21511:
                                            case 21512:
                                            case 21524:
                                            case 21515:
                                                return n.s ? 0 : -59;
                                            case 21505:
                                                if (!n.s) return -59;
                                                if (n.s.V.Xb) {
                                                    e = [
                                                        3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0,
                                                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                                    ];
                                                    var o = Z();
                                                    (O[o >> 2] = 25856),
                                                        (O[(o + 4) >> 2] = 5),
                                                        (O[(o + 8) >> 2] = 191),
                                                        (O[(o + 12) >> 2] = 35387);
                                                    for (var i = 0; 32 > i; i++) T[o + i + 17] = e[i] || 0;
                                                }
                                                return 0;
                                            case 21506:
                                            case 21507:
                                            case 21508:
                                                if (!n.s) return -59;
                                                if (n.s.V.Yb)
                                                    for (o = Z(), e = [], i = 0; 32 > i; i++) e.push(T[o + i + 17]);
                                                return 0;
                                            case 21519:
                                                if (!n.s) return -59;
                                                return (O[(o = Z()) >> 2] = 0);
                                            case 21520:
                                                return n.s ? -28 : -59;
                                            case 21531:
                                                if (((o = Z()), !n.m.Wb)) throw new eS(59);
                                                return n.m.Wb(n, t, o);
                                            case 21523:
                                                if (!n.s) return -59;
                                                return (
                                                    n.s.V.Zb &&
                                                        ((i = [24, 80]),
                                                        (P[(o = Z()) >> 1] = i[0]),
                                                        (P[(o + 2) >> 1] = i[1])),
                                                    0
                                                );
                                            default:
                                                return -28;
                                        }
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                                        return -e.$;
                                    }
                                },
                                __syscall_openat: function (e, t, r, n) {
                                    e0 = n;
                                    try {
                                        var o = (t = t ? ea(M, t) : "");
                                        if ("/" === o.charAt(0)) t = o;
                                        else {
                                            var i = -100 === e ? "/" : eL(e).path;
                                            if (0 == o.length) throw new eS(44);
                                            t = ee(i + "/" + o);
                                        }
                                        var a = n ? Z() : 0;
                                        return eV(t, r, a).W;
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                                        return -e.$;
                                    }
                                },
                                _abort_js: () => {
                                    U("");
                                },
                                _embind_create_inheriting_constructor: (e, t, r) => {
                                    (e = e8(e)), (t = to(t, "wrapper")), (r = e4(r));
                                    var n = t.i,
                                        o = n.M,
                                        i = n.C.M,
                                        a = n.C.constructor;
                                    return (
                                        (e = e1(e, function (...e) {
                                            n.C.pb.forEach(
                                                function (e) {
                                                    if (this[e] === i[e])
                                                        throw new eY(
                                                            `Pure virtual function ${e} must be implemented in JavaScript`,
                                                        );
                                                }.bind(this),
                                            ),
                                                Object.defineProperty(this, "__parent", { value: o }),
                                                this.__construct(...e);
                                        })),
                                        (o.__construct = function (...e) {
                                            if (this === o) throw new eq("Pass correct 'this' to __construct");
                                            (e = a.implement(this, ...e)), ti(e);
                                            var t = e.g;
                                            if (
                                                (e.notifyOnDestruction(),
                                                (t.ha = !0),
                                                Object.defineProperties(this, { g: { value: t } }),
                                                tc(this),
                                                (e = tt(n, (e = t.o))),
                                                te.hasOwnProperty(e))
                                            )
                                                throw new eq(`Tried to register registered instance: ${e}`);
                                            te[e] = this;
                                        }),
                                        (o.__destruct = function () {
                                            if (this === o) throw new eq("Pass correct 'this' to __destruct");
                                            ti(this);
                                            var e = this.g.o;
                                            if (((e = tt(n, e)), te.hasOwnProperty(e))) delete te[e];
                                            else throw new eq(`Tried to unregister unregistered instance: ${e}`);
                                        }),
                                        (e.prototype = Object.create(o)),
                                        Object.assign(e.prototype, r),
                                        e5(e)
                                    );
                                },
                                _embind_finalize_value_object: (e) => {
                                    var t = tf[e];
                                    delete tf[e];
                                    var r = t.Na,
                                        n = t.O,
                                        o = t.eb;
                                    tv([e], o.map((e) => e.Ub).concat(o.map((e) => e.kc)), (e) => {
                                        var i = {};
                                        return (
                                            o.forEach((t, r) => {
                                                var n = e[r],
                                                    a = t.Sb,
                                                    s = t.Tb,
                                                    l = e[r + o.length],
                                                    u = t.jc,
                                                    c = t.lc;
                                                i[t.Ob] = {
                                                    read: (e) => n.fromWireType(a(s, e)),
                                                    write: (e, t) => {
                                                        var r = [];
                                                        u(c, e, l.toWireType(r, t)), tp(r);
                                                    },
                                                };
                                            }),
                                            [
                                                {
                                                    name: t.name,
                                                    fromWireType: (e) => {
                                                        var t,
                                                            r = {};
                                                        for (t in i) r[t] = i[t].read(e);
                                                        return n(e), r;
                                                    },
                                                    toWireType: (e, t) => {
                                                        for (var o in i)
                                                            if (!(o in t)) throw TypeError(`Missing field: "${o}"`);
                                                        var a = r();
                                                        for (o in i) i[o].write(a, t[o]);
                                                        return null !== e && e.push(n, a), a;
                                                    },
                                                    argPackAdvance: 8,
                                                    readValueFromPointer: td,
                                                    L: n,
                                                },
                                            ]
                                        );
                                    });
                                },
                                _embind_register_bigint: () => {},
                                _embind_register_bool: (e, t, r, n) => {
                                    ty(e, {
                                        name: (t = e8(t)),
                                        fromWireType: function (e) {
                                            return !!e;
                                        },
                                        toWireType: function (e, t) {
                                            return t ? r : n;
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: function (e) {
                                            return this.fromWireType(M[e]);
                                        },
                                        L: null,
                                    });
                                },
                                _embind_register_class: (e, t, r, n, o, i, a, s, l, u, c, f, p) => {
                                    (c = e8(c)), (i = tD(o, i)), (s &&= tD(a, s)), (u &&= tD(l, u)), (p = tD(f, p));
                                    var d = ((e) => {
                                        if (void 0 === e) return "_unknown";
                                        var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                                        return 48 <= t && 57 >= t ? `_${e}` : e;
                                    })(c);
                                    t_(d, function () {
                                        tL(`Cannot construct ${c} due to unbound types`, [n]);
                                    }),
                                        tv([e, t, r], n ? [n] : [], (t) => {
                                            if (((t = t[0]), n))
                                                var r,
                                                    o = t.i,
                                                    a = o.M;
                                            else a = tb.prototype;
                                            var l = Object.create(a, {
                                                constructor: {
                                                    value: (t = e1(c, function (...e) {
                                                        if (Object.getPrototypeOf(this) !== l)
                                                            throw new eq("Use 'new' to construct " + c);
                                                        if (void 0 === f.Z)
                                                            throw new eq(c + " has no accessible constructor");
                                                        var t = f.Z[e.length];
                                                        if (void 0 === t)
                                                            throw new eq(
                                                                `Tried to invoke ctor of ${c} with invalid number of parameters (${e.length}) - expected (${Object.keys(f.Z).toString()}) parameters instead!`,
                                                            );
                                                        return t.apply(this, e);
                                                    })),
                                                },
                                            });
                                            t.prototype = l;
                                            var f = new tS(c, t, l, p, o, i, s, u);
                                            return (
                                                f.C && ((r = f.C).na ?? (r.na = []), f.C.na.push(f)),
                                                (o = new tT(c, f, !0, !1, !1)),
                                                (r = new tT(c + "*", f, !1, !1, !1)),
                                                (a = new tT(c + " const*", f, !1, !0, !1)),
                                                (tl[e] = { pointerType: r, Hb: a }),
                                                tA(d, t),
                                                [o, r, a]
                                            );
                                        });
                                },
                                _embind_register_class_class_function: (e, t, r, n, o, i, a) => {
                                    var s = tN(r, n);
                                    (t = tj((t = e8(t)))),
                                        (i = tD(o, i)),
                                        tv([], [e], (e) => {
                                            function n() {
                                                tL(`Cannot call ${o} due to unbound types`, s);
                                            }
                                            e = e[0];
                                            var o = `${e.name}.${t}`;
                                            t.startsWith("@@") && (t = Symbol[t.substring(2)]);
                                            var l = e.i.constructor;
                                            return (
                                                void 0 === l[t]
                                                    ? ((n.da = r - 1), (l[t] = n))
                                                    : (tw(l, t, o), (l[t].A[r - 1] = n)),
                                                tv([], s, (n) => {
                                                    if (
                                                        ((n = tR(o, [n[0], null].concat(n.slice(1)), null, i, a)),
                                                        void 0 === l[t].A
                                                            ? ((n.da = r - 1), (l[t] = n))
                                                            : (l[t].A[r - 1] = n),
                                                        e.i.na)
                                                    )
                                                        for (let r of e.i.na)
                                                            r.constructor.hasOwnProperty(t) || (r.constructor[t] = n);
                                                    return [];
                                                }),
                                                []
                                            );
                                        });
                                },
                                _embind_register_class_class_property: (e, t, r, n, o, i, a, s) => {
                                    (t = e8(t)),
                                        (i = tD(o, i)),
                                        tv([], [e], (e) => {
                                            e = e[0];
                                            var o = `${e.name}.${t}`,
                                                l = {
                                                    get() {
                                                        tL(`Cannot access ${o} due to unbound types`, [r]);
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0,
                                                };
                                            return (
                                                (l.set = s
                                                    ? () => {
                                                          tL(`Cannot access ${o} due to unbound types`, [r]);
                                                      }
                                                    : () => {
                                                          throw new eq(`${o} is a read-only property`);
                                                      }),
                                                Object.defineProperty(e.i.constructor, t, l),
                                                tv([], [r], (r) => {
                                                    r = r[0];
                                                    var o = { get: () => r.fromWireType(i(n)), enumerable: !0 };
                                                    return (
                                                        s &&
                                                            ((s = tD(a, s)),
                                                            (o.set = (e) => {
                                                                var t = [];
                                                                s(n, r.toWireType(t, e)), tp(t);
                                                            })),
                                                        Object.defineProperty(e.i.constructor, t, o),
                                                        []
                                                    );
                                                }),
                                                []
                                            );
                                        });
                                },
                                _embind_register_class_constructor: (e, t, r, n, o, i) => {
                                    var a = tN(t, r);
                                    (o = tD(n, o)),
                                        tv([], [e], (e) => {
                                            e = e[0];
                                            var r = `constructor ${e.name}`;
                                            if ((void 0 === e.i.Z && (e.i.Z = []), void 0 !== e.i.Z[t - 1]))
                                                throw new eq(
                                                    `Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
                                                );
                                            return (
                                                (e.i.Z[t - 1] = () => {
                                                    tL(`Cannot construct ${e.name} due to unbound types`, a);
                                                }),
                                                tv(
                                                    [],
                                                    a,
                                                    (n) => (
                                                        n.splice(1, 0, null), (e.i.Z[t - 1] = tR(r, n, null, o, i)), []
                                                    ),
                                                ),
                                                []
                                            );
                                        });
                                },
                                _embind_register_class_function: (e, t, r, n, o, i, a, s) => {
                                    var l = tN(r, n);
                                    (t = tj((t = e8(t)))),
                                        (i = tD(o, i)),
                                        tv([], [e], (e) => {
                                            function n() {
                                                tL(`Cannot call ${o} due to unbound types`, l);
                                            }
                                            e = e[0];
                                            var o = `${e.name}.${t}`;
                                            t.startsWith("@@") && (t = Symbol[t.substring(2)]), s && e.i.pb.push(t);
                                            var u = e.i.M,
                                                c = u[t];
                                            return (
                                                void 0 === c ||
                                                (void 0 === c.A && c.className !== e.name && c.da === r - 2)
                                                    ? ((n.da = r - 2), (n.className = e.name), (u[t] = n))
                                                    : (tw(u, t, o), (u[t].A[r - 2] = n)),
                                                tv(
                                                    [],
                                                    l,
                                                    (n) => (
                                                        (n = tR(o, n, e, i, a)),
                                                        void 0 === u[t].A
                                                            ? ((n.da = r - 2), (u[t] = n))
                                                            : (u[t].A[r - 2] = n),
                                                        []
                                                    ),
                                                ),
                                                []
                                            );
                                        });
                                },
                                _embind_register_class_property: (e, t, r, n, o, i, a, s, l, u) => {
                                    (t = e8(t)),
                                        (o = tD(n, o)),
                                        tv([], [e], (e) => {
                                            e = e[0];
                                            var n = `${e.name}.${t}`,
                                                c = {
                                                    get() {
                                                        tL(`Cannot access ${n} due to unbound types`, [r, a]);
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0,
                                                };
                                            return (
                                                (c.set = l
                                                    ? () => tL(`Cannot access ${n} due to unbound types`, [r, a])
                                                    : () => {
                                                          throw new eq(n + " is a read-only property");
                                                      }),
                                                Object.defineProperty(e.i.M, t, c),
                                                tv([], l ? [r, a] : [r], (r) => {
                                                    var a = r[0],
                                                        c = {
                                                            get() {
                                                                var t = tB(this, e, n + " getter");
                                                                return a.fromWireType(o(i, t));
                                                            },
                                                            enumerable: !0,
                                                        };
                                                    if (l) {
                                                        l = tD(s, l);
                                                        var f = r[1];
                                                        c.set = function (t) {
                                                            var r = tB(this, e, n + " setter"),
                                                                o = [];
                                                            l(u, r, f.toWireType(o, t)), tp(o);
                                                        };
                                                    }
                                                    return Object.defineProperty(e.i.M, t, c), [];
                                                }),
                                                []
                                            );
                                        });
                                },
                                _embind_register_emval: (e) => ty(e, tK),
                                _embind_register_enum: (e, t, r, n) => {
                                    function o() {}
                                    (t = e8(t)),
                                        (o.values = {}),
                                        ty(e, {
                                            name: t,
                                            constructor: o,
                                            fromWireType: function (e) {
                                                return this.constructor.values[e];
                                            },
                                            toWireType: (e, t) => t.value,
                                            argPackAdvance: 8,
                                            readValueFromPointer: ((e, t, r) => {
                                                switch (t) {
                                                    case 1:
                                                        return r
                                                            ? function (e) {
                                                                  return this.fromWireType(T[e]);
                                                              }
                                                            : function (e) {
                                                                  return this.fromWireType(M[e]);
                                                              };
                                                    case 2:
                                                        return r
                                                            ? function (e) {
                                                                  return this.fromWireType(P[e >> 1]);
                                                              }
                                                            : function (e) {
                                                                  return this.fromWireType(A[e >> 1]);
                                                              };
                                                    case 4:
                                                        return r
                                                            ? function (e) {
                                                                  return this.fromWireType(O[e >> 2]);
                                                              }
                                                            : function (e) {
                                                                  return this.fromWireType(I[e >> 2]);
                                                              };
                                                    default:
                                                        throw TypeError(`invalid integer width (${t}): ${e}`);
                                                }
                                            })(t, r, n),
                                            L: null,
                                        }),
                                        t_(t, o);
                                },
                                _embind_register_enum_value: (e, t, r) => {
                                    var n = to(e, "enum");
                                    (t = e8(t)),
                                        (e = n.constructor),
                                        (n = Object.create(n.constructor.prototype, {
                                            value: { value: r },
                                            constructor: { value: e1(`${n.name}_${t}`, function () {}) },
                                        })),
                                        (e.values[r] = n),
                                        (e[t] = n);
                                },
                                _embind_register_float: (e, t, r) => {
                                    ty(e, {
                                        name: (t = e8(t)),
                                        fromWireType: (e) => e,
                                        toWireType: (e, t) => t,
                                        argPackAdvance: 8,
                                        readValueFromPointer: ((e, t) => {
                                            switch (t) {
                                                case 4:
                                                    return function (e) {
                                                        return this.fromWireType(D[e >> 2]);
                                                    };
                                                case 8:
                                                    return function (e) {
                                                        return this.fromWireType(L[e >> 3]);
                                                    };
                                                default:
                                                    throw TypeError(`invalid float width (${t}): ${e}`);
                                            }
                                        })(t, r),
                                        L: null,
                                    });
                                },
                                _embind_register_function: (e, t, r, n, o, i) => {
                                    var a = tN(t, r);
                                    (e = tj((e = e8(e)))),
                                        (o = tD(n, o)),
                                        t_(
                                            e,
                                            function () {
                                                tL(`Cannot call ${e} due to unbound types`, a);
                                            },
                                            t - 1,
                                        ),
                                        tv(
                                            [],
                                            a,
                                            (r) => (
                                                tA(e, tR(e, [r[0], null].concat(r.slice(1)), null, o, i), t - 1), []
                                            ),
                                        );
                                },
                                _embind_register_integer: (e, t, r, n, o) => {
                                    if (((t = e8(t)), -1 === o && (o = 0xffffffff), (o = (e) => e), 0 === n)) {
                                        var i = 32 - 8 * r;
                                        o = (e) => (e << i) >>> i;
                                    }
                                    var a = t.includes("unsigned")
                                        ? function (e, t) {
                                              return t >>> 0;
                                          }
                                        : function (e, t) {
                                              return t;
                                          };
                                    ty(e, {
                                        name: t,
                                        fromWireType: o,
                                        toWireType: a,
                                        argPackAdvance: 8,
                                        readValueFromPointer: ((e, t, r) => {
                                            switch (t) {
                                                case 1:
                                                    return r ? (e) => T[e] : (e) => M[e];
                                                case 2:
                                                    return r ? (e) => P[e >> 1] : (e) => A[e >> 1];
                                                case 4:
                                                    return r ? (e) => O[e >> 2] : (e) => I[e >> 2];
                                                default:
                                                    throw TypeError(`invalid integer width (${t}): ${e}`);
                                            }
                                        })(t, r, 0 !== n),
                                        L: null,
                                    });
                                },
                                _embind_register_memory_view: (e, t, r) => {
                                    function n(e) {
                                        return new o(T.buffer, I[(e + 4) >> 2], I[e >> 2]);
                                    }
                                    var o = [
                                        Int8Array,
                                        Uint8Array,
                                        Int16Array,
                                        Uint16Array,
                                        Int32Array,
                                        Uint32Array,
                                        Float32Array,
                                        Float64Array,
                                    ][t];
                                    ty(
                                        e,
                                        {
                                            name: (r = e8(r)),
                                            fromWireType: n,
                                            argPackAdvance: 8,
                                            readValueFromPointer: n,
                                        },
                                        { Vb: !0 },
                                    );
                                },
                                _embind_register_std_string: (e, t) => {
                                    var r = "std::string" === (t = e8(t));
                                    ty(e, {
                                        name: t,
                                        fromWireType: function (e) {
                                            var t = I[e >> 2],
                                                n = e + 4;
                                            if (r)
                                                for (var o = n, i = 0; i <= t; ++i) {
                                                    var a = n + i;
                                                    if (i == t || 0 == M[a]) {
                                                        if (((o = o ? ea(M, o, a - o) : ""), void 0 === s)) var s = o;
                                                        else (s += "\0"), (s += o);
                                                        o = a + 1;
                                                    }
                                                }
                                            else {
                                                for (i = 0, s = Array(t); i < t; ++i)
                                                    s[i] = String.fromCharCode(M[n + i]);
                                                s = s.join("");
                                            }
                                            return rt(e), s;
                                        },
                                        toWireType: function (e, t) {
                                            t instanceof ArrayBuffer && (t = new Uint8Array(t));
                                            var n = "string" == typeof t;
                                            if (
                                                !(
                                                    n ||
                                                    t instanceof Uint8Array ||
                                                    t instanceof Uint8ClampedArray ||
                                                    t instanceof Int8Array
                                                )
                                            )
                                                throw new eq("Cannot pass non-string to std::string");
                                            var o = r && n ? el(t) : t.length,
                                                i = rr(4 + o + 1),
                                                a = i + 4;
                                            if (((I[i >> 2] = o), r && n)) eu(t, M, a, o + 1);
                                            else if (n)
                                                for (n = 0; n < o; ++n) {
                                                    var s = t.charCodeAt(n);
                                                    if (255 < s)
                                                        throw (
                                                            (rt(a),
                                                            new eq(
                                                                "String has UTF-16 code units that do not fit in 8 bits",
                                                            ))
                                                        );
                                                    M[a + n] = s;
                                                }
                                            else for (n = 0; n < o; ++n) M[a + n] = t[n];
                                            return null !== e && e.push(rt, i), i;
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: td,
                                        L(e) {
                                            rt(e);
                                        },
                                    });
                                },
                                _embind_register_std_wstring: (e, t, r) => {
                                    if (((r = e8(r)), 2 === t))
                                        var n = tz,
                                            o = tW,
                                            i = tH,
                                            a = (e) => A[e >> 1];
                                    else 4 === t && ((n = tG), (o = tq), (i = tY), (a = (e) => I[e >> 2]));
                                    ty(e, {
                                        name: r,
                                        fromWireType: (e) => {
                                            for (var r, o = I[e >> 2], i = e + 4, s = 0; s <= o; ++s) {
                                                var l = e + 4 + s * t;
                                                (s == o || 0 == a(l)) &&
                                                    ((i = n(i, l - i)),
                                                    void 0 === r ? (r = i) : ((r += "\0"), (r += i)),
                                                    (i = l + t));
                                            }
                                            return rt(e), r;
                                        },
                                        toWireType: (e, n) => {
                                            if ("string" != typeof n)
                                                throw new eq(`Cannot pass non-string to C++ string type ${r}`);
                                            var a = i(n),
                                                s = rr(4 + a + t);
                                            return (
                                                (I[s >> 2] = a / t), o(n, s + 4, a + t), null !== e && e.push(rt, s), s
                                            );
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: td,
                                        L(e) {
                                            rt(e);
                                        },
                                    });
                                },
                                _embind_register_value_object: (e, t, r, n, o, i) => {
                                    tf[e] = { name: e8(t), Na: tD(r, n), O: tD(o, i), eb: [] };
                                },
                                _embind_register_value_object_field: (e, t, r, n, o, i, a, s, l, u) => {
                                    tf[e].eb.push({
                                        Ob: e8(t),
                                        Ub: r,
                                        Sb: tD(n, o),
                                        Tb: i,
                                        kc: a,
                                        jc: tD(s, l),
                                        lc: u,
                                    });
                                },
                                _embind_register_void: (e, t) => {
                                    ty(e, {
                                        Ic: !0,
                                        name: (t = e8(t)),
                                        argPackAdvance: 0,
                                        fromWireType: () => {},
                                        toWireType: () => {},
                                    });
                                },
                                _emscripten_get_now_is_monotonic: () => 1,
                                _emscripten_memcpy_js: (e, t, r) => M.copyWithin(e, t, t + r),
                                _emval_as: (e, t, r) => ((e = e4(e)), tJ((t = to(t, "emval::as")), r, e)),
                                _emval_call_method: (e, t, r, n, o) => (e = tQ[e])((t = e4(t)), t[(r = tZ(r))], n, o),
                                _emval_decref: t$,
                                _emval_get_method_caller: (e, t, r) => {
                                    var n,
                                        o,
                                        i = ((e, t) => {
                                            for (var r = Array(e), n = 0; n < e; ++n)
                                                r[n] = to(I[(t + 4 * n) >> 2], "parameter " + n);
                                            return r;
                                        })(e, t),
                                        a = i.shift(),
                                        s = Array(--e);
                                    return (
                                        (n = e1(
                                            (t = `methodCaller<(${i.map((e) => e.name).join(", ")}) => ${a.name}>`),
                                            (t, n, o, l) => {
                                                for (var u = 0, c = 0; c < e; ++c)
                                                    (s[c] = i[c].readValueFromPointer(l + u)),
                                                        (u += i[c].argPackAdvance);
                                                return tJ(a, o, (t = 1 === r ? t0(n, s) : n.apply(t, s)));
                                            },
                                        )),
                                        (o = tQ.length),
                                        tQ.push(n),
                                        o
                                    );
                                },
                                _emval_get_module_property: (t) => e5(e[(t = tZ(t))]),
                                _emval_get_property: (e, t) => e5((e = e4(e))[(t = e4(t))]),
                                _emval_incref: (e) => {
                                    9 < e && (e3[e + 1] += 1);
                                },
                                _emval_new_array: () => e5([]),
                                _emval_new_cstring: (e) => e5(tZ(e)),
                                _emval_new_object: () => e5({}),
                                _emval_run_destructors: (e) => {
                                    tp(e4(e)), t$(e);
                                },
                                _emval_set_property: (e, t, r) => {
                                    (e = e4(e)), (t = e4(t)), (r = e4(r)), (e[t] = r);
                                },
                                _emval_take_value: (e, t) =>
                                    e5((e = (e = to(e, "_emval_take_value")).readValueFromPointer(t))),
                                emscripten_asm_const_int: (e, t, r) => {
                                    t1.length = 0;
                                    for (var n; (n = M[t++]); ) {
                                        var o = 105 != n;
                                        (o &= 112 != n),
                                            (r += o && r % 8 ? 4 : 0),
                                            t1.push(112 == n ? I[r >> 2] : 105 == n ? O[r >> 2] : L[r >> 3]),
                                            (r += o ? 8 : 4);
                                    }
                                    return J[e](...t1);
                                },
                                emscripten_date_now: () => Date.now(),
                                emscripten_get_now: () => performance.now(),
                                emscripten_resize_heap: (e) => {
                                    var t = M.length;
                                    if (0x80000000 < (e >>>= 0)) return !1;
                                    for (var r = 1; 4 >= r; r *= 2) {
                                        var n = t * (1 + 0.2 / r);
                                        n = Math.min(n, e + 0x6000000);
                                        var o = Math;
                                        n = Math.max(e, n);
                                        e: {
                                            o =
                                                (o.min.call(o, 0x80000000, n + ((65536 - (n % 65536)) % 65536)) -
                                                    C.buffer.byteLength +
                                                    65535) /
                                                65536;
                                            try {
                                                C.grow(o), F();
                                                var i = 1;
                                                break e;
                                            } catch (e) {}
                                            i = void 0;
                                        }
                                        if (i) return !0;
                                    }
                                    return !1;
                                },
                                environ_get: (e, t) => {
                                    var r = 0;
                                    return (
                                        t3().forEach((n, o) => {
                                            var i = t + r;
                                            for (o = I[(e + 4 * o) >> 2] = i, i = 0; i < n.length; ++i)
                                                T[o++] = n.charCodeAt(i);
                                            (T[o] = 0), (r += n.length + 1);
                                        }),
                                        0
                                    );
                                },
                                environ_sizes_get: (e, t) => {
                                    var r = t3();
                                    I[e >> 2] = r.length;
                                    var n = 0;
                                    return r.forEach((e) => (n += e.length + 1)), (I[t >> 2] = n), 0;
                                },
                                fd_close: function (e) {
                                    try {
                                        var t = eL(e);
                                        if (null === t.W) throw new eS(8);
                                        t.Ka && (t.Ka = null);
                                        try {
                                            t.m.close && t.m.close(t);
                                        } catch (e) {
                                            throw e;
                                        } finally {
                                            eg[t.W] = null;
                                        }
                                        return (t.W = null), 0;
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                                        return e.$;
                                    }
                                },
                                fd_read: function (e, t, r, n) {
                                    try {
                                        e: {
                                            var o = eL(e);
                                            e = t;
                                            for (var i, a = (t = 0); a < r; a++) {
                                                var s = I[e >> 2],
                                                    l = I[(e + 4) >> 2];
                                                e += 8;
                                                var u = i,
                                                    c = T;
                                                if (0 > l || 0 > u) throw new eS(28);
                                                if (null === o.W || 1 == (2097155 & o.flags)) throw new eS(8);
                                                if (16384 == (61440 & o.node.mode)) throw new eS(31);
                                                if (!o.m.read) throw new eS(28);
                                                var f = void 0 !== u;
                                                if (f) {
                                                    if (!o.seekable) throw new eS(70);
                                                } else u = o.position;
                                                var p = o.m.read(o, c, s, l, u);
                                                if ((f || (o.position += p), 0 > p)) {
                                                    var d = -1;
                                                    break e;
                                                }
                                                if (((t += p), p < l)) break;
                                                void 0 !== i && (i += p);
                                            }
                                            d = t;
                                        }
                                        return (I[n >> 2] = d), 0;
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                                        return e.$;
                                    }
                                },
                                fd_seek: function (e, t, r, n, o) {
                                    t = (r + 2097152) >>> 0 < 4194305 - !!t ? (t >>> 0) + 0x100000000 * r : NaN;
                                    try {
                                        if (isNaN(t)) return 61;
                                        var i = eL(e);
                                        return (
                                            eU(i, t, n),
                                            (Y = [
                                                i.position >>> 0,
                                                ((q = i.position),
                                                1 <= +Math.abs(q)
                                                    ? 0 < q
                                                        ? Math.floor(q / 0x100000000) >>> 0
                                                        : ~~Math.ceil((q - (~~q >>> 0)) / 0x100000000) >>> 0
                                                    : 0),
                                            ]),
                                            (O[o >> 2] = Y[0]),
                                            (O[(o + 4) >> 2] = Y[1]),
                                            i.Ka && 0 === t && 0 === n && (i.Ka = null),
                                            0
                                        );
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                                        return e.$;
                                    }
                                },
                                fd_write: function (e, t, r, n) {
                                    try {
                                        e: {
                                            var o = eL(e);
                                            e = t;
                                            for (var i, a = (t = 0); a < r; a++) {
                                                var s = I[e >> 2],
                                                    l = I[(e + 4) >> 2];
                                                e += 8;
                                                var u = i,
                                                    c = T;
                                                if (0 > l || 0 > u) throw new eS(28);
                                                if (null === o.W || 0 == (2097155 & o.flags)) throw new eS(8);
                                                if (16384 == (61440 & o.node.mode)) throw new eS(31);
                                                if (!o.m.write) throw new eS(28);
                                                o.seekable && 1024 & o.flags && eU(o, 0, 2);
                                                var f = void 0 !== u;
                                                if (f) {
                                                    if (!o.seekable) throw new eS(70);
                                                } else u = o.position;
                                                var p = o.m.write(o, c, s, l, u, void 0);
                                                if ((f || (o.position += p), 0 > p)) {
                                                    var d = -1;
                                                    break e;
                                                }
                                                (t += p), void 0 !== i && (i += p);
                                            }
                                            d = t;
                                        }
                                        return (I[n >> 2] = d), 0;
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                                        return e.$;
                                    }
                                },
                                strftime_l: (e, t, r, n) =>
                                    ((e, t, r, n) => {
                                        function o(e, t, r) {
                                            for (e = "number" == typeof e ? e.toString() : e || ""; e.length < t; )
                                                e = r[0] + e;
                                            return e;
                                        }
                                        function i(e, t) {
                                            return o(e, t, "0");
                                        }
                                        function a(e, t) {
                                            var r;
                                            function n(e) {
                                                return 0 > e ? -1 : +(0 < e);
                                            }
                                            return (
                                                0 === (r = n(e.getFullYear() - t.getFullYear())) &&
                                                    0 === (r = n(e.getMonth() - t.getMonth())) &&
                                                    (r = n(e.getDate() - t.getDate())),
                                                r
                                            );
                                        }
                                        function s(e) {
                                            switch (e.getDay()) {
                                                case 0:
                                                    return new Date(e.getFullYear() - 1, 11, 29);
                                                case 1:
                                                    return e;
                                                case 2:
                                                    return new Date(e.getFullYear(), 0, 3);
                                                case 3:
                                                    return new Date(e.getFullYear(), 0, 2);
                                                case 4:
                                                    return new Date(e.getFullYear(), 0, 1);
                                                case 5:
                                                    return new Date(e.getFullYear() - 1, 11, 31);
                                                case 6:
                                                    return new Date(e.getFullYear() - 1, 11, 30);
                                            }
                                        }
                                        function l(e) {
                                            var t = e.ba;
                                            for (e = new Date(new Date(e.ca + 1900, 0, 1).getTime()); 0 < t; ) {
                                                var r = e.getMonth(),
                                                    n = (t4(e.getFullYear()) ? t5 : t6)[r];
                                                if (t > n - e.getDate())
                                                    (t -= n - e.getDate() + 1),
                                                        e.setDate(1),
                                                        11 > r
                                                            ? e.setMonth(r + 1)
                                                            : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1));
                                                else {
                                                    e.setDate(e.getDate() + t);
                                                    break;
                                                }
                                            }
                                            return (
                                                (r = new Date(e.getFullYear() + 1, 0, 4)),
                                                (t = s(new Date(e.getFullYear(), 0, 4))),
                                                (r = s(r)),
                                                0 >= a(t, e)
                                                    ? 0 >= a(r, e)
                                                        ? e.getFullYear() + 1
                                                        : e.getFullYear()
                                                    : e.getFullYear() - 1
                                            );
                                        }
                                        var u = I[(n + 40) >> 2];
                                        for (var c in ((n = {
                                            pc: O[n >> 2],
                                            oc: O[(n + 4) >> 2],
                                            Da: O[(n + 8) >> 2],
                                            Qa: O[(n + 12) >> 2],
                                            Ea: O[(n + 16) >> 2],
                                            ca: O[(n + 20) >> 2],
                                            R: O[(n + 24) >> 2],
                                            ba: O[(n + 28) >> 2],
                                            Nc: O[(n + 32) >> 2],
                                            nc: O[(n + 36) >> 2],
                                            qc: u && u ? ea(M, u) : "",
                                        }),
                                        (r = r ? ea(M, r) : ""),
                                        (u = {
                                            "%c": "%a %b %d %H:%M:%S %Y",
                                            "%D": "%m/%d/%y",
                                            "%F": "%Y-%m-%d",
                                            "%h": "%b",
                                            "%r": "%I:%M:%S %p",
                                            "%R": "%H:%M",
                                            "%T": "%H:%M:%S",
                                            "%x": "%m/%d/%y",
                                            "%X": "%H:%M:%S",
                                            "%Ec": "%c",
                                            "%EC": "%C",
                                            "%Ex": "%m/%d/%y",
                                            "%EX": "%H:%M:%S",
                                            "%Ey": "%y",
                                            "%EY": "%Y",
                                            "%Od": "%d",
                                            "%Oe": "%e",
                                            "%OH": "%H",
                                            "%OI": "%I",
                                            "%Om": "%m",
                                            "%OM": "%M",
                                            "%OS": "%S",
                                            "%Ou": "%u",
                                            "%OU": "%U",
                                            "%OV": "%V",
                                            "%Ow": "%w",
                                            "%OW": "%W",
                                            "%Oy": "%y",
                                        })))
                                            r = r.replace(RegExp(c, "g"), u[c]);
                                        var f = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                                            p =
                                                "January February March April May June July August September October November December".split(
                                                    " ",
                                                );
                                        for (c in ((u = {
                                            "%a": (e) => f[e.R].substring(0, 3),
                                            "%A": (e) => f[e.R],
                                            "%b": (e) => p[e.Ea].substring(0, 3),
                                            "%B": (e) => p[e.Ea],
                                            "%C": (e) => i(((e.ca + 1900) / 100) | 0, 2),
                                            "%d": (e) => i(e.Qa, 2),
                                            "%e": (e) => o(e.Qa, 2, " "),
                                            "%g": (e) => l(e).toString().substring(2),
                                            "%G": l,
                                            "%H": (e) => i(e.Da, 2),
                                            "%I": (e) => (0 == (e = e.Da) ? (e = 12) : 12 < e && (e -= 12), i(e, 2)),
                                            "%j": (e) => {
                                                for (
                                                    var t = 0, r = 0;
                                                    r <= e.Ea - 1;
                                                    t += (t4(e.ca + 1900) ? t5 : t6)[r++]
                                                );
                                                return i(e.Qa + t, 3);
                                            },
                                            "%m": (e) => i(e.Ea + 1, 2),
                                            "%M": (e) => i(e.oc, 2),
                                            "%n": () => "\n",
                                            "%p": (e) => (0 <= e.Da && 12 > e.Da ? "AM" : "PM"),
                                            "%S": (e) => i(e.pc, 2),
                                            "%t": () => "	",
                                            "%u": (e) => e.R || 7,
                                            "%U": (e) => i(Math.floor((e.ba + 7 - e.R) / 7), 2),
                                            "%V": (e) => {
                                                var t = Math.floor((e.ba + 7 - ((e.R + 6) % 7)) / 7);
                                                if ((2 >= (e.R + 371 - e.ba - 2) % 7 && t++, t))
                                                    53 == t &&
                                                        (4 == (r = (e.R + 371 - e.ba) % 7) ||
                                                            (3 == r && t4(e.ca)) ||
                                                            (t = 1));
                                                else {
                                                    t = 52;
                                                    var r = (e.R + 7 - e.ba - 1) % 7;
                                                    (4 == r || (5 == r && t4((e.ca % 400) - 1))) && t++;
                                                }
                                                return i(t, 2);
                                            },
                                            "%w": (e) => e.R,
                                            "%W": (e) => i(Math.floor((e.ba + 7 - ((e.R + 6) % 7)) / 7), 2),
                                            "%y": (e) => (e.ca + 1900).toString().substring(2),
                                            "%Y": (e) => e.ca + 1900,
                                            "%z": (e) => {
                                                var t = 0 <= (e = e.nc);
                                                return (
                                                    (t ? "+" : "-") +
                                                    String(
                                                        "0000" + (((e = Math.abs(e) / 60) / 60) * 100 + (e % 60)),
                                                    ).slice(-4)
                                                );
                                            },
                                            "%Z": (e) => e.qc,
                                            "%%": () => "%",
                                        }),
                                        (r = r.replace(/%%/g, "\0\0")),
                                        u))
                                            r.includes(c) && (r = r.replace(RegExp(c, "g"), u[c](n)));
                                        return (c = ec((r = r.replace(/\0\0/g, "%")), !1)).length > t
                                            ? 0
                                            : (T.set(c, e), c.length - 1);
                                    })(e, t, r, n),
                            },
                            re = (function () {
                                function t(t) {
                                    return (
                                        (C = (re = t.exports).memory),
                                        F(),
                                        (tM = re.__indirect_function_table),
                                        j.unshift(re.__wasm_call_ctors),
                                        $--,
                                        e.monitorRunDependencies?.($),
                                        0 == $ &&
                                            (null !== K && (clearInterval(K), (K = null)),
                                            V && ((t = V), (V = null), t())),
                                        re
                                    );
                                }
                                var r,
                                    n,
                                    o = { env: t9, wasi_snapshot_preview1: t9 };
                                if (($++, e.monitorRunDependencies?.($), e.instantiateWasm))
                                    try {
                                        return e.instantiateWasm(o, t);
                                    } catch (e) {
                                        E(`Module.instantiateWasm callback failed with error: ${e}`), l(e);
                                    }
                                return (
                                    (z ||= "canvas_advanced.wasm".startsWith("data:application/octet-stream;base64,")
                                        ? "canvas_advanced.wasm"
                                        : e.locateFile
                                          ? e.locateFile("canvas_advanced.wasm", S)
                                          : S + "canvas_advanced.wasm"),
                                    ((r = o),
                                    (n = function (e) {
                                        t(e.instance);
                                    }),
                                    k ||
                                    "function" != typeof WebAssembly.instantiateStreaming ||
                                    z.startsWith("data:application/octet-stream;base64,") ||
                                    W(z) ||
                                    "function" != typeof fetch
                                        ? G(z, r, n)
                                        : fetch(z, { credentials: "same-origin" }).then((e) =>
                                              WebAssembly.instantiateStreaming(e, r).then(n, function (e) {
                                                  return (
                                                      E(`wasm streaming compile failed: ${e}`),
                                                      E("falling back to ArrayBuffer instantiation"),
                                                      G(z, r, n)
                                                  );
                                              }),
                                          )).catch(l),
                                    {}
                                );
                            })(),
                            rt = (e) => (rt = re.free)(e),
                            rr = (e) => (rr = re.malloc)(e),
                            rn = (e) => (rn = re.__getTypeName)(e),
                            ro = (e._ma_device__on_notification_unlocked = (t) =>
                                (ro = e._ma_device__on_notification_unlocked = re.ma_device__on_notification_unlocked)(
                                    t,
                                ));
                        (e._ma_malloc_emscripten = (t, r) => (e._ma_malloc_emscripten = re.ma_malloc_emscripten)(t, r)),
                            (e._ma_free_emscripten = (t, r) => (e._ma_free_emscripten = re.ma_free_emscripten)(t, r));
                        var ri = (e._ma_device_process_pcm_frames_capture__webaudio = (t, r, n) =>
                                (ri = e._ma_device_process_pcm_frames_capture__webaudio =
                                    re.ma_device_process_pcm_frames_capture__webaudio)(t, r, n)),
                            ra = (e._ma_device_process_pcm_frames_playback__webaudio = (t, r, n) =>
                                (ra = e._ma_device_process_pcm_frames_playback__webaudio =
                                    re.ma_device_process_pcm_frames_playback__webaudio)(t, r, n));
                        function rs() {
                            function t() {
                                if (!a && ((a = !0), (e.calledRun = !0), !R)) {
                                    if (
                                        (e.noFSInit ||
                                            eW ||
                                            ((eW = !0),
                                            (e.stdin = e.stdin),
                                            (e.stdout = e.stdout),
                                            (e.stderr = e.stderr),
                                            e.stdin ? ez("stdin", e.stdin) : eK("/dev/tty", "/dev/stdin"),
                                            e.stdout ? ez("stdout", null, e.stdout) : eK("/dev/tty", "/dev/stdout"),
                                            e.stderr ? ez("stderr", null, e.stderr) : eK("/dev/tty1", "/dev/stderr"),
                                            eV("/dev/stdin", 0),
                                            eV("/dev/stdout", 1),
                                            eV("/dev/stderr", 1)),
                                        (e_ = !1),
                                        X(j),
                                        s(e),
                                        e.onRuntimeInitialized && e.onRuntimeInitialized(),
                                        e.postRun)
                                    )
                                        for (
                                            "function" == typeof e.postRun && (e.postRun = [e.postRun]);
                                            e.postRun.length;
                                        ) {
                                            var t = e.postRun.shift();
                                            B.unshift(t);
                                        }
                                    X(B);
                                }
                            }
                            if (!(0 < $)) {
                                if (e.preRun)
                                    for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length; )
                                        !(function () {
                                            var t = e.preRun.shift();
                                            N.unshift(t);
                                        })();
                                X(N),
                                    0 < $ ||
                                        (e.setStatus
                                            ? (e.setStatus("Running..."),
                                              setTimeout(function () {
                                                  setTimeout(function () {
                                                      e.setStatus("");
                                                  }, 1),
                                                      t();
                                              }, 1))
                                            : t());
                            }
                        }
                        if (
                            ((e.dynCall_iiji = (t, r, n, o, i) => (e.dynCall_iiji = re.dynCall_iiji)(t, r, n, o, i)),
                            (e.dynCall_jiji = (t, r, n, o, i) => (e.dynCall_jiji = re.dynCall_jiji)(t, r, n, o, i)),
                            (e.dynCall_iiiji = (t, r, n, o, i, a) =>
                                (e.dynCall_iiiji = re.dynCall_iiiji)(t, r, n, o, i, a)),
                            (e.dynCall_iij = (t, r, n, o) => (e.dynCall_iij = re.dynCall_iij)(t, r, n, o)),
                            (e.dynCall_jii = (t, r, n) => (e.dynCall_jii = re.dynCall_jii)(t, r, n)),
                            (e.dynCall_viijii = (t, r, n, o, i, a, s) =>
                                (e.dynCall_viijii = re.dynCall_viijii)(t, r, n, o, i, a, s)),
                            (e.dynCall_iiiiij = (t, r, n, o, i, a, s) =>
                                (e.dynCall_iiiiij = re.dynCall_iiiiij)(t, r, n, o, i, a, s)),
                            (e.dynCall_iiiiijj = (t, r, n, o, i, a, s, l, u) =>
                                (e.dynCall_iiiiijj = re.dynCall_iiiiijj)(t, r, n, o, i, a, s, l, u)),
                            (e.dynCall_iiiiiijj = (t, r, n, o, i, a, s, l, u, c) =>
                                (e.dynCall_iiiiiijj = re.dynCall_iiiiiijj)(t, r, n, o, i, a, s, l, u, c)),
                            (V = function e() {
                                a || rs(), a || (V = e);
                            }),
                            e.preInit)
                        )
                            for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length; )
                                e.preInit.pop()();
                        return rs(), u;
                    });
            },
            (e) => {
                e.exports = JSON.parse(
                    '{"name":"@rive-app/canvas","version":"2.32.0","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}',
                );
            },
            (e, t, r) => {
                r.r(t), r.d(t, { Animation: () => n.Animation });
                var n = r(4);
            },
            (e, t, r) => {
                r.r(t), r.d(t, { Animation: () => n });
                var n = (function () {
                    function e(e, t, r, n) {
                        (this.animation = e),
                            (this.artboard = t),
                            (this.playing = n),
                            (this.loopCount = 0),
                            (this.scrubTo = null),
                            (this.instance = new r.LinearAnimationInstance(e, t));
                    }
                    return (
                        Object.defineProperty(e.prototype, "name", {
                            get: function () {
                                return this.animation.name;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "time", {
                            get: function () {
                                return this.instance.time;
                            },
                            set: function (e) {
                                this.instance.time = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "loopValue", {
                            get: function () {
                                return this.animation.loopValue;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "needsScrub", {
                            get: function () {
                                return null !== this.scrubTo;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.advance = function (e) {
                            null === this.scrubTo
                                ? this.instance.advance(e)
                                : ((this.instance.time = 0),
                                  this.instance.advance(this.scrubTo),
                                  (this.scrubTo = null));
                        }),
                        (e.prototype.apply = function (e) {
                            this.instance.apply(e);
                        }),
                        (e.prototype.cleanup = function () {
                            this.instance.delete();
                        }),
                        e
                    );
                })();
            },
            (e, t, r) => {
                r.r(t),
                    r.d(t, {
                        AudioAssetWrapper: () => i.AudioAssetWrapper,
                        AudioWrapper: () => i.AudioWrapper,
                        BLANK_URL: () => o.BLANK_URL,
                        CustomFileAssetLoaderWrapper: () => i.CustomFileAssetLoaderWrapper,
                        FileAssetWrapper: () => i.FileAssetWrapper,
                        FileFinalizer: () => i.FileFinalizer,
                        FontAssetWrapper: () => i.FontAssetWrapper,
                        FontWrapper: () => i.FontWrapper,
                        ImageAssetWrapper: () => i.ImageAssetWrapper,
                        ImageWrapper: () => i.ImageWrapper,
                        createFinalization: () => i.createFinalization,
                        finalizationRegistry: () => i.finalizationRegistry,
                        registerTouchInteractions: () => n.registerTouchInteractions,
                        sanitizeUrl: () => o.sanitizeUrl,
                    });
                var n = r(6),
                    o = r(7),
                    i = r(8);
            },
            (e, t, r) => {
                r.r(t), r.d(t, { registerTouchInteractions: () => i });
                var n = void 0,
                    o = function (e, t, r) {
                        var n,
                            o,
                            i = [];
                        if (
                            ["touchstart", "touchmove"].indexOf(e.type) > -1 &&
                            (null == (n = e.changedTouches) ? void 0 : n.length)
                        ) {
                            t || e.preventDefault();
                            for (var a = 0, s = r ? e.changedTouches.length : 1; a < s; ) {
                                var l = e.changedTouches[a];
                                i.push({ clientX: l.clientX, clientY: l.clientY, identifier: l.identifier }), a++;
                            }
                        } else if ("touchend" === e.type && (null == (o = e.changedTouches) ? void 0 : o.length))
                            for (var a = 0, s = r ? e.changedTouches.length : 1; a < s; ) {
                                var l = e.changedTouches[a];
                                i.push({ clientX: l.clientX, clientY: l.clientY, identifier: l.identifier }), a++;
                            }
                        else i.push({ clientX: e.clientX, clientY: e.clientY, identifier: 0 });
                        return i;
                    },
                    i = function (e) {
                        var t = e.canvas,
                            r = e.artboard,
                            i = e.stateMachines,
                            a = void 0 === i ? [] : i,
                            s = e.renderer,
                            l = e.rive,
                            u = e.fit,
                            c = e.alignment,
                            f = e.isTouchScrollEnabled,
                            p = void 0 !== f && f,
                            d = e.dispatchPointerExit,
                            h = void 0 === d || d,
                            m = e.enableMultiTouch,
                            v = void 0 !== m && m,
                            y = e.layoutScaleFactor,
                            g = void 0 === y ? 1 : y,
                            b = e.listenOnDocumentBody,
                            w = e.eventCapture;
                        if (!t || !a.length || !s || !l || !r || "u" < typeof window) return null;
                        var _ = null,
                            S = !1,
                            x = function (e) {
                                if (S && e instanceof MouseEvent) {
                                    "mouseup" == e.type && (S = !1);
                                    return;
                                }
                                (S = p && "touchend" === e.type && "touchstart" === _), (_ = e.type);
                                var n = t.getBoundingClientRect(),
                                    i = o(e, p, v),
                                    s = l.computeAlignment(
                                        u,
                                        c,
                                        { minX: 0, minY: 0, maxX: n.width, maxY: n.height },
                                        r.bounds,
                                        g,
                                    ),
                                    f = new l.Mat2D();
                                s.invert(f);
                                var d = [];
                                switch (
                                    (i.forEach(function (t) {
                                        var r = t.clientX,
                                            o = t.clientY;
                                        if (r || o) {
                                            var i = r - n.left,
                                                a = o - n.top;
                                            if (
                                                (i >= 0 && i <= n.width && a >= 0 && a <= n.height) ||
                                                ["mouseleave", "mouseout"].includes(e.type)
                                            ) {
                                                var s = new l.Vec2D(i, a),
                                                    u = l.mapXY(f, s),
                                                    c = u.x(),
                                                    p = u.y();
                                                (t.transformedX = c),
                                                    (t.transformedY = p),
                                                    u.delete(),
                                                    s.delete(),
                                                    d.push(t);
                                            }
                                        }
                                    }),
                                    f.delete(),
                                    s.delete(),
                                    e.type)
                                ) {
                                    case "mouseleave":
                                    case "mouseout":
                                        for (
                                            var m = function (e) {
                                                    h
                                                        ? d.forEach(function (t) {
                                                              e.pointerExit(
                                                                  t.transformedX < 0
                                                                      ? t.transformedX - 1e4
                                                                      : t.transformedX + 1e4,
                                                                  t.transformedY < 0
                                                                      ? t.transformedY - 1e4
                                                                      : t.transformedY + 1e4,
                                                                  t.identifier,
                                                              );
                                                          })
                                                        : d.forEach(function (t) {
                                                              e.pointerMove(
                                                                  t.transformedX,
                                                                  t.transformedY,
                                                                  t.identifier,
                                                              );
                                                          });
                                                },
                                                y = 0;
                                            y < a.length;
                                            y++
                                        ) {
                                            var b = a[y];
                                            m(b);
                                        }
                                        break;
                                    case "mouseenter":
                                    case "touchmove":
                                    case "mouseover":
                                    case "mousemove":
                                        for (
                                            var w = function (e) {
                                                    d.forEach(function (t) {
                                                        e.pointerMove(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                x = 0;
                                            x < a.length;
                                            x++
                                        ) {
                                            var b = a[x];
                                            w(b);
                                        }
                                        break;
                                    case "touchstart":
                                    case "mousedown":
                                        for (
                                            var E = function (e) {
                                                    d.forEach(function (t) {
                                                        e.pointerDown(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                k = 0;
                                            k < a.length;
                                            k++
                                        ) {
                                            var b = a[k];
                                            E(b);
                                        }
                                        break;
                                    case "touchend":
                                        for (
                                            var C = function (e) {
                                                    d.forEach(function (t) {
                                                        e.pointerUp(t.transformedX, t.transformedY, t.identifier),
                                                            e.pointerExit(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                T = 0;
                                            T < a.length;
                                            T++
                                        ) {
                                            var b = a[T];
                                            C(b);
                                        }
                                        break;
                                    case "mouseup":
                                        for (
                                            var M = function (e) {
                                                    d.forEach(function (t) {
                                                        e.pointerUp(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                P = 0;
                                            P < a.length;
                                            P++
                                        ) {
                                            var b = a[P];
                                            M(b);
                                        }
                                }
                            }.bind(n),
                            E = b ? t.ownerDocument.body : t;
                        return (
                            E.addEventListener("mouseover", x, w),
                            E.addEventListener("mouseenter", x, w),
                            E.addEventListener("mouseout", x, w),
                            E.addEventListener("mouseleave", x, w),
                            E.addEventListener("mousemove", x, w),
                            E.addEventListener("mousedown", x, w),
                            E.addEventListener("mouseup", x, w),
                            t.addEventListener("touchmove", x, { passive: p }),
                            t.addEventListener("touchstart", x, { passive: p }),
                            t.addEventListener("touchend", x),
                            function () {
                                E.removeEventListener("mouseover", x, w),
                                    E.removeEventListener("mouseenter", x, w),
                                    E.removeEventListener("mouseout", x, w),
                                    E.removeEventListener("mouseleave", x, w),
                                    E.removeEventListener("mousemove", x, w),
                                    E.removeEventListener("mousedown", x, w),
                                    E.removeEventListener("mouseup", x, w),
                                    t.removeEventListener("touchmove", x),
                                    t.removeEventListener("touchstart", x),
                                    t.removeEventListener("touchend", x);
                            }
                        );
                    };
            },
            (e, t, r) => {
                r.r(t), r.d(t, { BLANK_URL: () => u, sanitizeUrl: () => c });
                var n = /^([^\w]*)(javascript|data|vbscript)/im,
                    o = /&#(\w+)(^\w|;)?/g,
                    i = /&(newline|tab);/gi,
                    a = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
                    s = /^.+(:|&colon;)/gim,
                    l = [".", "/"],
                    u = "about:blank";
                function c(e) {
                    if (!e) return u;
                    var t = e
                        .replace(a, "")
                        .replace(o, function (e, t) {
                            return String.fromCharCode(t);
                        })
                        .replace(i, "")
                        .replace(a, "")
                        .trim();
                    if (!t) return u;
                    if (l.indexOf(t[0]) > -1) return t;
                    var r = t.match(s);
                    if (!r) return t;
                    var c = r[0];
                    return n.test(c) ? u : t;
                }
            },
            (e, t, r) => {
                r.r(t),
                    r.d(t, {
                        AudioAssetWrapper: () => h,
                        AudioWrapper: () => u,
                        CustomFileAssetLoaderWrapper: () => f,
                        FileAssetWrapper: () => p,
                        FileFinalizer: () => i,
                        FontAssetWrapper: () => m,
                        FontWrapper: () => c,
                        ImageAssetWrapper: () => d,
                        ImageWrapper: () => l,
                        createFinalization: () => g,
                        finalizationRegistry: () => y,
                    });
                var n,
                    o =
                        ((n = function (e, t) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                })(e, t);
                        }),
                        function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                            function r() {
                                this.constructor = e;
                            }
                            n(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                        }),
                    i = (function () {
                        function e(e) {
                            (this.selfUnref = !1), (this._file = e);
                        }
                        return (
                            (e.prototype.unref = function () {
                                this._file && this._file.unref();
                            }),
                            e
                        );
                    })(),
                    a = (function () {
                        function e(e) {
                            this._finalizableObject = e;
                        }
                        return (
                            (e.prototype.unref = function () {
                                this._finalizableObject.unref();
                            }),
                            e
                        );
                    })(),
                    s = (function () {
                        function e() {
                            this.selfUnref = !1;
                        }
                        return (e.prototype.unref = function () {}), e;
                    })(),
                    l = (function (e) {
                        function t(t) {
                            var r = e.call(this) || this;
                            return (r._nativeImage = t), r;
                        }
                        return (
                            o(t, e),
                            Object.defineProperty(t.prototype, "nativeImage", {
                                get: function () {
                                    return this._nativeImage;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.unref = function () {
                                this.selfUnref && this._nativeImage.unref();
                            }),
                            t
                        );
                    })(s),
                    u = (function (e) {
                        function t(t) {
                            var r = e.call(this) || this;
                            return (r._nativeAudio = t), r;
                        }
                        return (
                            o(t, e),
                            Object.defineProperty(t.prototype, "nativeAudio", {
                                get: function () {
                                    return this._nativeAudio;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.unref = function () {
                                this.selfUnref && this._nativeAudio.unref();
                            }),
                            t
                        );
                    })(s),
                    c = (function (e) {
                        function t(t) {
                            var r = e.call(this) || this;
                            return (r._nativeFont = t), r;
                        }
                        return (
                            o(t, e),
                            Object.defineProperty(t.prototype, "nativeFont", {
                                get: function () {
                                    return this._nativeFont;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.unref = function () {
                                this.selfUnref && this._nativeFont.unref();
                            }),
                            t
                        );
                    })(s),
                    f = (function () {
                        function e(e, t) {
                            (this._assetLoaderCallback = t),
                                (this.assetLoader = new e.CustomFileAssetLoader({
                                    loadContents: this.loadContents.bind(this),
                                }));
                        }
                        return (
                            (e.prototype.loadContents = function (e, t) {
                                var r;
                                return (
                                    e.isImage
                                        ? (r = new d(e))
                                        : e.isAudio
                                          ? (r = new h(e))
                                          : e.isFont && (r = new m(e)),
                                    this._assetLoaderCallback(r, t)
                                );
                            }),
                            e
                        );
                    })(),
                    p = (function () {
                        function e(e) {
                            this._nativeFileAsset = e;
                        }
                        return (
                            (e.prototype.decode = function (e) {
                                this._nativeFileAsset.decode(e);
                            }),
                            Object.defineProperty(e.prototype, "name", {
                                get: function () {
                                    return this._nativeFileAsset.name;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "fileExtension", {
                                get: function () {
                                    return this._nativeFileAsset.fileExtension;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "uniqueFilename", {
                                get: function () {
                                    return this._nativeFileAsset.uniqueFilename;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "isAudio", {
                                get: function () {
                                    return this._nativeFileAsset.isAudio;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "isImage", {
                                get: function () {
                                    return this._nativeFileAsset.isImage;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "isFont", {
                                get: function () {
                                    return this._nativeFileAsset.isFont;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "cdnUuid", {
                                get: function () {
                                    return this._nativeFileAsset.cdnUuid;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "nativeFileAsset", {
                                get: function () {
                                    return this._nativeFileAsset;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            e
                        );
                    })(),
                    d = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this;
                        }
                        return (
                            o(t, e),
                            (t.prototype.setRenderImage = function (e) {
                                this._nativeFileAsset.setRenderImage(e.nativeImage);
                            }),
                            t
                        );
                    })(p),
                    h = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this;
                        }
                        return (
                            o(t, e),
                            (t.prototype.setAudioSource = function (e) {
                                this._nativeFileAsset.setAudioSource(e.nativeAudio);
                            }),
                            t
                        );
                    })(p),
                    m = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this;
                        }
                        return (
                            o(t, e),
                            (t.prototype.setFont = function (e) {
                                this._nativeFileAsset.setFont(e.nativeFont);
                            }),
                            t
                        );
                    })(p),
                    v = (function () {
                        function e(e) {}
                        return (
                            (e.prototype.register = function (e) {
                                e.selfUnref = !0;
                            }),
                            (e.prototype.unregister = function (e) {}),
                            e
                        );
                    })(),
                    y = new ("u" > typeof FinalizationRegistry ? FinalizationRegistry : v)(function (e) {
                        null == e || e.unref();
                    }),
                    g = function (e, t) {
                        var r = new a(t);
                        y.register(e, r);
                    };
            },
        ],
        eu = {};
    function ec(e) {
        var t = eu[e];
        if (void 0 !== t) return t.exports;
        var r = (eu[e] = { exports: {} });
        return el[e](r, r.exports, ec), r.exports;
    }
    (ec.d = (e, t) => {
        for (var r in t) ec.o(t, r) && !ec.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
        (ec.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (ec.r = (e) => {
            "u" > typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        });
    var ef = {};
    return (
        ec.r(ef),
        ec.d(ef, {
            Alignment: () => t,
            DataEnum: () => U,
            EventType: () => o,
            Fit: () => e,
            Layout: () => _,
            LoopType: () => i,
            Rive: () => K,
            RiveEventType: () => n,
            RiveFile: () => $,
            RuntimeLoader: () => S,
            StateMachineInput: () => E,
            StateMachineInputType: () => r,
            Testing: () => eo,
            ViewModel: () => V,
            ViewModelInstance: () => W,
            ViewModelInstanceArtboard: () => et,
            ViewModelInstanceAssetImage: () => ee,
            ViewModelInstanceBoolean: () => Y,
            ViewModelInstanceColor: () => Q,
            ViewModelInstanceEnum: () => X,
            ViewModelInstanceList: () => Z,
            ViewModelInstanceNumber: () => q,
            ViewModelInstanceString: () => G,
            ViewModelInstanceTrigger: () => J,
            ViewModelInstanceValue: () => H,
            decodeAudio: () => ei,
            decodeFont: () => es,
            decodeImage: () => ea,
        }),
        (l = ec(1)),
        (u = ec(2)),
        (c = ec(3)),
        (f = ec(5)),
        (p = function (e, t) {
            return (p =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                })(e, t);
        }),
        (d = function (e, t) {
            if ("function" != typeof t && null !== t)
                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function r() {
                this.constructor = e;
            }
            p(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
        }),
        (h = function () {
            return (h =
                Object.assign ||
                function (e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }).apply(this, arguments);
        }),
        (m = function (e, t, r, n) {
            return new (r || (r = Promise))(function (o, i) {
                function a(e) {
                    try {
                        l(n.next(e));
                    } catch (e) {
                        i(e);
                    }
                }
                function s(e) {
                    try {
                        l(n.throw(e));
                    } catch (e) {
                        i(e);
                    }
                }
                function l(e) {
                    var t;
                    e.done
                        ? o(e.value)
                        : ((t = e.value) instanceof r
                              ? t
                              : new r(function (e) {
                                    e(t);
                                })
                          ).then(a, s);
                }
                l((n = n.apply(e, t || [])).next());
            });
        }),
        (v = function (e, t) {
            var r,
                n,
                o,
                i = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1];
                    },
                    trys: [],
                    ops: [],
                },
                a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
            return (
                (a.next = s(0)),
                (a.throw = s(1)),
                (a.return = s(2)),
                "function" == typeof Symbol &&
                    (a[Symbol.iterator] = function () {
                        return this;
                    }),
                a
            );
            function s(s) {
                return function (l) {
                    var u = [s, l];
                    if (r) throw TypeError("Generator is already executing.");
                    for (; a && ((a = 0), u[0] && (i = 0)), i; )
                        try {
                            if (
                                ((r = 1),
                                n &&
                                    (o =
                                        2 & u[0]
                                            ? n.return
                                            : u[0]
                                              ? n.throw || ((o = n.return) && o.call(n), 0)
                                              : n.next) &&
                                    !(o = o.call(n, u[1])).done)
                            )
                                return o;
                            switch (((n = 0), o && (u = [2 & u[0], o.value]), u[0])) {
                                case 0:
                                case 1:
                                    o = u;
                                    break;
                                case 4:
                                    return i.label++, { value: u[1], done: !1 };
                                case 5:
                                    i.label++, (n = u[1]), (u = [0]);
                                    continue;
                                case 7:
                                    (u = i.ops.pop()), i.trys.pop();
                                    continue;
                                default:
                                    if (
                                        !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                                        (6 === u[0] || 2 === u[0])
                                    ) {
                                        i = 0;
                                        continue;
                                    }
                                    if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                                        i.label = u[1];
                                        break;
                                    }
                                    if (6 === u[0] && i.label < o[1]) {
                                        (i.label = o[1]), (o = u);
                                        break;
                                    }
                                    if (o && i.label < o[2]) {
                                        (i.label = o[2]), i.ops.push(u);
                                        break;
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                            }
                            u = t.call(e, i);
                        } catch (e) {
                            (u = [6, e]), (n = 0);
                        } finally {
                            r = o = 0;
                        }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                };
            }
        }),
        (y = function (e, t, r) {
            if (r || 2 == arguments.length)
                for (var n, o = 0, i = t.length; o < i; o++)
                    (!n && o in t) || (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
            return e.concat(n || Array.prototype.slice.call(t));
        }),
        (g = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.isHandledError = !0), t;
            }
            return d(t, e), t;
        })(Error)),
        ((b = e || (e = {})).Cover = "cover"),
        (b.Contain = "contain"),
        (b.Fill = "fill"),
        (b.FitWidth = "fitWidth"),
        (b.FitHeight = "fitHeight"),
        (b.None = "none"),
        (b.ScaleDown = "scaleDown"),
        (b.Layout = "layout"),
        ((w = t || (t = {})).Center = "center"),
        (w.TopLeft = "topLeft"),
        (w.TopCenter = "topCenter"),
        (w.TopRight = "topRight"),
        (w.CenterLeft = "centerLeft"),
        (w.CenterRight = "centerRight"),
        (w.BottomLeft = "bottomLeft"),
        (w.BottomCenter = "bottomCenter"),
        (w.BottomRight = "bottomRight"),
        (_ = (function () {
            function r(r) {
                var n, o, i, a, s, l, u;
                (this.fit = null != (n = null == r ? void 0 : r.fit) ? n : e.Contain),
                    (this.alignment = null != (o = null == r ? void 0 : r.alignment) ? o : t.Center),
                    (this.layoutScaleFactor = null != (i = null == r ? void 0 : r.layoutScaleFactor) ? i : 1),
                    (this.minX = null != (a = null == r ? void 0 : r.minX) ? a : 0),
                    (this.minY = null != (s = null == r ? void 0 : r.minY) ? s : 0),
                    (this.maxX = null != (l = null == r ? void 0 : r.maxX) ? l : 0),
                    (this.maxY = null != (u = null == r ? void 0 : r.maxY) ? u : 0);
            }
            return (
                (r.new = function (e) {
                    var t = e.fit,
                        n = e.alignment,
                        o = e.minX,
                        i = e.minY,
                        a = e.maxX,
                        s = e.maxY;
                    return (
                        console.warn("This function is deprecated: please use `new Layout({})` instead"),
                        new r({ fit: t, alignment: n, minX: o, minY: i, maxX: a, maxY: s })
                    );
                }),
                (r.prototype.copyWith = function (e) {
                    var t = e.fit,
                        n = e.alignment,
                        o = e.layoutScaleFactor,
                        i = e.minX,
                        a = e.minY,
                        s = e.maxX,
                        l = e.maxY;
                    return new r({
                        fit: null != t ? t : this.fit,
                        alignment: null != n ? n : this.alignment,
                        layoutScaleFactor: null != o ? o : this.layoutScaleFactor,
                        minX: null != i ? i : this.minX,
                        minY: null != a ? a : this.minY,
                        maxX: null != s ? s : this.maxX,
                        maxY: null != l ? l : this.maxY,
                    });
                }),
                (r.prototype.runtimeFit = function (t) {
                    var r;
                    return this.cachedRuntimeFit
                        ? this.cachedRuntimeFit
                        : ((r =
                              this.fit === e.Cover
                                  ? t.Fit.cover
                                  : this.fit === e.Contain
                                    ? t.Fit.contain
                                    : this.fit === e.Fill
                                      ? t.Fit.fill
                                      : this.fit === e.FitWidth
                                        ? t.Fit.fitWidth
                                        : this.fit === e.FitHeight
                                          ? t.Fit.fitHeight
                                          : this.fit === e.ScaleDown
                                            ? t.Fit.scaleDown
                                            : this.fit === e.Layout
                                              ? t.Fit.layout
                                              : t.Fit.none),
                          (this.cachedRuntimeFit = r),
                          r);
                }),
                (r.prototype.runtimeAlignment = function (e) {
                    var r;
                    return this.cachedRuntimeAlignment
                        ? this.cachedRuntimeAlignment
                        : ((r =
                              this.alignment === t.TopLeft
                                  ? e.Alignment.topLeft
                                  : this.alignment === t.TopCenter
                                    ? e.Alignment.topCenter
                                    : this.alignment === t.TopRight
                                      ? e.Alignment.topRight
                                      : this.alignment === t.CenterLeft
                                        ? e.Alignment.centerLeft
                                        : this.alignment === t.CenterRight
                                          ? e.Alignment.centerRight
                                          : this.alignment === t.BottomLeft
                                            ? e.Alignment.bottomLeft
                                            : this.alignment === t.BottomCenter
                                              ? e.Alignment.bottomCenter
                                              : this.alignment === t.BottomRight
                                                ? e.Alignment.bottomRight
                                                : e.Alignment.center),
                          (this.cachedRuntimeAlignment = r),
                          r);
                }),
                r
            );
        })()),
        (S = (function () {
            function e() {}
            return (
                (e.loadRuntime = function () {
                    l.default({
                        locateFile: function () {
                            return e.wasmURL;
                        },
                    })
                        .then(function (t) {
                            var r;
                            for (e.runtime = t; e.callBackQueue.length > 0; )
                                null == (r = e.callBackQueue.shift()) || r(e.runtime);
                        })
                        .catch(function (t) {
                            var r = {
                                message: (null == t ? void 0 : t.message) || "Unknown error",
                                type: (null == t ? void 0 : t.name) || "Error",
                                wasmError:
                                    t instanceof WebAssembly.CompileError || t instanceof WebAssembly.RuntimeError,
                                originalError: t,
                            };
                            console.debug("Rive WASM load error details:", r);
                            var n = "https://cdn.jsdelivr.net/npm/"
                                .concat(u.name, "@")
                                .concat(u.version, "/rive_fallback.wasm");
                            e.wasmURL.toLowerCase() !== n
                                ? (console.warn(
                                      "Failed to load WASM from "
                                          .concat(e.wasmURL, " (")
                                          .concat(r.message, "), trying jsdelivr as a backup"),
                                  ),
                                  e.setWasmUrl(n),
                                  e.loadRuntime())
                                : console.error(
                                      [
                                          "Could not load Rive WASM file from "
                                              .concat(e.wasmURL, " or ")
                                              .concat(n, "."),
                                          "Possible reasons:\n- Network connection is down\n- WebAssembly is not supported in this environment\n- The WASM file is corrupted or incompatible\n\nError details:",
                                          "- Type: ".concat(r.type),
                                          "- Message: ".concat(r.message),
                                          "- WebAssembly-specific error: ".concat(r.wasmError),
                                          "\nTo resolve, you may need to:\n1. Check your network connection\n2. Set a new WASM source via RuntimeLoader.setWasmUrl()\n3. Call RuntimeLoader.loadRuntime() again",
                                      ].join("\n"),
                                  );
                        });
                }),
                (e.getInstance = function (t) {
                    e.isLoading || ((e.isLoading = !0), e.loadRuntime()),
                        e.runtime ? t(e.runtime) : e.callBackQueue.push(t);
                }),
                (e.awaitInstance = function () {
                    return new Promise(function (t) {
                        return e.getInstance(function (e) {
                            return t(e);
                        });
                    });
                }),
                (e.setWasmUrl = function (t) {
                    e.wasmURL = t;
                }),
                (e.getWasmUrl = function () {
                    return e.wasmURL;
                }),
                (e.isLoading = !1),
                (e.callBackQueue = []),
                (e.wasmURL = "https://unpkg.com/".concat(u.name, "@").concat(u.version, "/rive.wasm")),
                e
            );
        })()),
        ((x = r || (r = {}))[(x.Number = 56)] = "Number"),
        (x[(x.Trigger = 58)] = "Trigger"),
        (x[(x.Boolean = 59)] = "Boolean"),
        (E = (function () {
            function e(e, t) {
                (this.type = e), (this.runtimeInput = t);
            }
            return (
                Object.defineProperty(e.prototype, "name", {
                    get: function () {
                        return this.runtimeInput.name;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "value", {
                    get: function () {
                        return this.runtimeInput.value;
                    },
                    set: function (e) {
                        this.runtimeInput.value = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.fire = function () {
                    this.type === r.Trigger && this.runtimeInput.fire();
                }),
                (e.prototype.delete = function () {
                    this.runtimeInput = null;
                }),
                e
            );
        })()),
        ((k = n || (n = {}))[(k.General = 128)] = "General"),
        (k[(k.OpenUrl = 131)] = "OpenUrl"),
        (T = (function (e) {
            function t(t, r) {
                var n = e.call(this, !1) || this;
                return (n.nativeArtboard = t), (n.file = r), n;
            }
            return d(t, e), t;
        })(
            (C = function (e) {
                (this.isBindableArtboard = !1), (this.isBindableArtboard = e);
            }),
        )),
        (M = (function (e) {
            function t(t) {
                var r = e.call(this, !0) || this;
                return (r.selfUnref = !1), (r.nativeArtboard = t), r;
            }
            return (
                d(t, e),
                (t.prototype.destroy = function () {
                    this.selfUnref && this.nativeArtboard.unref();
                }),
                t
            );
        })(C)),
        (P = (function () {
            function e(e, t, r, n) {
                (this.stateMachine = e),
                    (this.playing = r),
                    (this.artboard = n),
                    (this.inputs = []),
                    (this.instance = new t.StateMachineInstance(e, n)),
                    this.initInputs(t);
            }
            return (
                Object.defineProperty(e.prototype, "name", {
                    get: function () {
                        return this.stateMachine.name;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "statesChanged", {
                    get: function () {
                        for (var e = [], t = 0; t < this.instance.stateChangedCount(); t++)
                            e.push(this.instance.stateChangedNameByIndex(t));
                        return e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.advance = function (e) {
                    this.instance.advance(e);
                }),
                (e.prototype.advanceAndApply = function (e) {
                    this.instance.advanceAndApply(e);
                }),
                (e.prototype.reportedEventCount = function () {
                    return this.instance.reportedEventCount();
                }),
                (e.prototype.reportedEventAt = function (e) {
                    return this.instance.reportedEventAt(e);
                }),
                (e.prototype.initInputs = function (e) {
                    for (var t = 0; t < this.instance.inputCount(); t++) {
                        var r = this.instance.input(t);
                        this.inputs.push(this.mapRuntimeInput(r, e));
                    }
                }),
                (e.prototype.mapRuntimeInput = function (e, t) {
                    return e.type === t.SMIInput.bool
                        ? new E(r.Boolean, e.asBool())
                        : e.type === t.SMIInput.number
                          ? new E(r.Number, e.asNumber())
                          : e.type === t.SMIInput.trigger
                            ? new E(r.Trigger, e.asTrigger())
                            : void 0;
                }),
                (e.prototype.cleanup = function () {
                    this.inputs.forEach(function (e) {
                        e.delete();
                    }),
                        (this.inputs.length = 0),
                        this.instance.delete();
                }),
                (e.prototype.bindViewModelInstance = function (e) {
                    null != e.runtimeInstance && this.instance.bindViewModelInstance(e.runtimeInstance);
                }),
                e
            );
        })()),
        (A = (function () {
            function e(e, t, r, n, o) {
                void 0 === n && (n = []),
                    void 0 === o && (o = []),
                    (this.runtime = e),
                    (this.artboard = t),
                    (this.eventManager = r),
                    (this.animations = n),
                    (this.stateMachines = o);
            }
            return (
                (e.prototype.add = function (e, t, r) {
                    if ((void 0 === r && (r = !0), 0 === (e = en(e)).length))
                        this.animations.forEach(function (e) {
                            return (e.playing = t);
                        }),
                            this.stateMachines.forEach(function (e) {
                                return (e.playing = t);
                            });
                    else
                        for (
                            var n = this.animations.map(function (e) {
                                    return e.name;
                                }),
                                i = this.stateMachines.map(function (e) {
                                    return e.name;
                                }),
                                a = 0;
                            a < e.length;
                            a++
                        ) {
                            var s = n.indexOf(e[a]),
                                l = i.indexOf(e[a]);
                            if (s >= 0 || l >= 0)
                                s >= 0 ? (this.animations[s].playing = t) : (this.stateMachines[l].playing = t);
                            else {
                                var u = this.artboard.animationByName(e[a]);
                                if (u) {
                                    var f = new c.Animation(u, this.artboard, this.runtime, t);
                                    f.advance(0), f.apply(1), this.animations.push(f);
                                } else {
                                    var p = this.artboard.stateMachineByName(e[a]);
                                    if (p) {
                                        var d = new P(p, this.runtime, t, this.artboard);
                                        this.stateMachines.push(d);
                                    }
                                }
                            }
                        }
                    return (
                        r &&
                            (t
                                ? this.eventManager.fire({ type: o.Play, data: this.playing })
                                : this.eventManager.fire({ type: o.Pause, data: this.paused })),
                        t ? this.playing : this.paused
                    );
                }),
                (e.prototype.initLinearAnimations = function (e, t) {
                    for (
                        var r = this.animations.map(function (e) {
                                return e.name;
                            }),
                            n = 0;
                        n < e.length;
                        n++
                    ) {
                        var o = r.indexOf(e[n]);
                        if (o >= 0) this.animations[o].playing = t;
                        else {
                            var i = this.artboard.animationByName(e[n]);
                            if (i) {
                                var a = new c.Animation(i, this.artboard, this.runtime, t);
                                a.advance(0), a.apply(1), this.animations.push(a);
                            } else console.error("Animation with name ".concat(e[n], " not found."));
                        }
                    }
                }),
                (e.prototype.initStateMachines = function (e, t) {
                    for (
                        var r = this.stateMachines.map(function (e) {
                                return e.name;
                            }),
                            n = 0;
                        n < e.length;
                        n++
                    ) {
                        var o = r.indexOf(e[n]);
                        if (o >= 0) this.stateMachines[o].playing = t;
                        else {
                            var i = this.artboard.stateMachineByName(e[n]);
                            if (i) {
                                var a = new P(i, this.runtime, t, this.artboard);
                                this.stateMachines.push(a);
                            } else
                                console.warn("State Machine with name ".concat(e[n], " not found.")),
                                    this.initLinearAnimations([e[n]], t);
                        }
                    }
                }),
                (e.prototype.play = function (e) {
                    return this.add(e, !0);
                }),
                (e.prototype.advanceIfPaused = function () {
                    this.stateMachines.forEach(function (e) {
                        e.playing || e.advanceAndApply(0);
                    });
                }),
                (e.prototype.pause = function (e) {
                    return this.add(e, !1);
                }),
                (e.prototype.scrub = function (e, t) {
                    var r = this.animations.filter(function (t) {
                        return e.includes(t.name);
                    });
                    return (
                        r.forEach(function (e) {
                            return (e.scrubTo = t);
                        }),
                        r.map(function (e) {
                            return e.name;
                        })
                    );
                }),
                Object.defineProperty(e.prototype, "playing", {
                    get: function () {
                        return this.animations
                            .filter(function (e) {
                                return e.playing;
                            })
                            .map(function (e) {
                                return e.name;
                            })
                            .concat(
                                this.stateMachines
                                    .filter(function (e) {
                                        return e.playing;
                                    })
                                    .map(function (e) {
                                        return e.name;
                                    }),
                            );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "paused", {
                    get: function () {
                        return this.animations
                            .filter(function (e) {
                                return !e.playing;
                            })
                            .map(function (e) {
                                return e.name;
                            })
                            .concat(
                                this.stateMachines
                                    .filter(function (e) {
                                        return !e.playing;
                                    })
                                    .map(function (e) {
                                        return e.name;
                                    }),
                            );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.stop = function (e) {
                    var t = this;
                    e = en(e);
                    var r = [];
                    if (0 === e.length)
                        (r = this.animations
                            .map(function (e) {
                                return e.name;
                            })
                            .concat(
                                this.stateMachines.map(function (e) {
                                    return e.name;
                                }),
                            )),
                            this.animations.forEach(function (e) {
                                return e.cleanup();
                            }),
                            this.stateMachines.forEach(function (e) {
                                return e.cleanup();
                            }),
                            this.animations.splice(0, this.animations.length),
                            this.stateMachines.splice(0, this.stateMachines.length);
                    else {
                        var n = this.animations.filter(function (t) {
                            return e.includes(t.name);
                        });
                        n.forEach(function (e) {
                            e.cleanup(), t.animations.splice(t.animations.indexOf(e), 1);
                        });
                        var i = this.stateMachines.filter(function (t) {
                            return e.includes(t.name);
                        });
                        i.forEach(function (e) {
                            e.cleanup(), t.stateMachines.splice(t.stateMachines.indexOf(e), 1);
                        }),
                            (r = n
                                .map(function (e) {
                                    return e.name;
                                })
                                .concat(
                                    i.map(function (e) {
                                        return e.name;
                                    }),
                                ));
                    }
                    return this.eventManager.fire({ type: o.Stop, data: r }), r;
                }),
                Object.defineProperty(e.prototype, "isPlaying", {
                    get: function () {
                        return (
                            this.animations.reduce(function (e, t) {
                                return e || t.playing;
                            }, !1) ||
                            this.stateMachines.reduce(function (e, t) {
                                return e || t.playing;
                            }, !1)
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "isPaused", {
                    get: function () {
                        return !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "isStopped", {
                    get: function () {
                        return 0 === this.animations.length && 0 === this.stateMachines.length;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.atLeastOne = function (e, t) {
                    var r;
                    return (
                        void 0 === t && (t = !0),
                        0 === this.animations.length &&
                            0 === this.stateMachines.length &&
                            (this.artboard.animationCount() > 0
                                ? this.add([(r = this.artboard.animationByIndex(0).name)], e, t)
                                : this.artboard.stateMachineCount() > 0 &&
                                  this.add([(r = this.artboard.stateMachineByIndex(0).name)], e, t)),
                        r
                    );
                }),
                (e.prototype.handleLooping = function () {
                    for (
                        var e = 0,
                            t = this.animations.filter(function (e) {
                                return e.playing;
                            });
                        e < t.length;
                        e++
                    ) {
                        var r = t[e];
                        0 === r.loopValue && r.loopCount
                            ? ((r.loopCount = 0), this.stop(r.name))
                            : 1 === r.loopValue && r.loopCount
                              ? (this.eventManager.fire({ type: o.Loop, data: { animation: r.name, type: i.Loop } }),
                                (r.loopCount = 0))
                              : 2 === r.loopValue &&
                                r.loopCount > 1 &&
                                (this.eventManager.fire({
                                    type: o.Loop,
                                    data: { animation: r.name, type: i.PingPong },
                                }),
                                (r.loopCount = 0));
                    }
                }),
                (e.prototype.handleStateChanges = function () {
                    for (
                        var e = [],
                            t = 0,
                            r = this.stateMachines.filter(function (e) {
                                return e.playing;
                            });
                        t < r.length;
                        t++
                    ) {
                        var n = r[t];
                        e.push.apply(e, n.statesChanged);
                    }
                    e.length > 0 && this.eventManager.fire({ type: o.StateChange, data: e });
                }),
                (e.prototype.handleAdvancing = function (e) {
                    this.eventManager.fire({ type: o.Advance, data: e });
                }),
                e
            );
        })()),
        ((O = o || (o = {})).Load = "load"),
        (O.LoadError = "loaderror"),
        (O.Play = "play"),
        (O.Pause = "pause"),
        (O.Stop = "stop"),
        (O.Loop = "loop"),
        (O.Draw = "draw"),
        (O.Advance = "advance"),
        (O.StateChange = "statechange"),
        (O.RiveEvent = "riveevent"),
        (O.AudioStatusChange = "audiostatuschange"),
        ((I = i || (i = {})).OneShot = "oneshot"),
        (I.Loop = "loop"),
        (I.PingPong = "pingpong"),
        (D = (function () {
            function e(e) {
                void 0 === e && (e = []), (this.listeners = e);
            }
            return (
                (e.prototype.getListeners = function (e) {
                    return this.listeners.filter(function (t) {
                        return t.type === e;
                    });
                }),
                (e.prototype.add = function (e) {
                    this.listeners.includes(e) || this.listeners.push(e);
                }),
                (e.prototype.remove = function (e) {
                    for (var t = 0; t < this.listeners.length; t++) {
                        var r = this.listeners[t];
                        if (r.type === e.type && r.callback === e.callback) {
                            this.listeners.splice(t, 1);
                            break;
                        }
                    }
                }),
                (e.prototype.removeAll = function (e) {
                    var t = this;
                    e
                        ? this.listeners
                              .filter(function (t) {
                                  return t.type === e;
                              })
                              .forEach(function (e) {
                                  return t.remove(e);
                              })
                        : this.listeners.splice(0, this.listeners.length);
                }),
                (e.prototype.fire = function (e) {
                    this.getListeners(e.type).forEach(function (t) {
                        return t.callback(e);
                    });
                }),
                e
            );
        })()),
        (L = (function () {
            function e(e) {
                (this.eventManager = e), (this.queue = []);
            }
            return (
                (e.prototype.add = function (e) {
                    this.queue.push(e);
                }),
                (e.prototype.process = function () {
                    for (; this.queue.length > 0; ) {
                        var e = this.queue.shift();
                        (null == e ? void 0 : e.action) && e.action(),
                            (null == e ? void 0 : e.event) && this.eventManager.fire(e.event);
                    }
                }),
                e
            );
        })()),
        ((R = a || (a = {}))[(R.AVAILABLE = 0)] = "AVAILABLE"),
        (R[(R.UNAVAILABLE = 1)] = "UNAVAILABLE"),
        (F = new ((function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._started = !1), (t._enabled = !1), (t._status = a.UNAVAILABLE), t;
            }
            return (
                d(t, e),
                (t.prototype.delay = function (e) {
                    return m(this, void 0, void 0, function () {
                        return v(this, function (t) {
                            return [
                                2,
                                new Promise(function (t) {
                                    return setTimeout(t, e);
                                }),
                            ];
                        });
                    });
                }),
                (t.prototype.timeout = function () {
                    return m(this, void 0, void 0, function () {
                        return v(this, function (e) {
                            return [
                                2,
                                new Promise(function (e, t) {
                                    return setTimeout(t, 50);
                                }),
                            ];
                        });
                    });
                }),
                (t.prototype.reportToListeners = function () {
                    this.fire({ type: o.AudioStatusChange }), this.removeAll();
                }),
                (t.prototype.enableAudio = function () {
                    return m(this, void 0, void 0, function () {
                        return v(this, function (e) {
                            return (
                                this._enabled ||
                                    ((this._enabled = !0), (this._status = a.AVAILABLE), this.reportToListeners()),
                                [2]
                            );
                        });
                    });
                }),
                (t.prototype.testAudio = function () {
                    return m(this, void 0, void 0, function () {
                        return v(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    if (this._status !== a.UNAVAILABLE || null === this._audioContext) return [3, 4];
                                    e.label = 1;
                                case 1:
                                    return (
                                        e.trys.push([1, 3, , 4]),
                                        [4, Promise.race([this._audioContext.resume(), this.timeout()])]
                                    );
                                case 2:
                                    return e.sent(), this.enableAudio(), [3, 4];
                                case 3:
                                    return e.sent(), [3, 4];
                                case 4:
                                    return [2];
                            }
                        });
                    });
                }),
                (t.prototype._establishAudio = function () {
                    return m(this, void 0, void 0, function () {
                        return v(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    if (this._started) return [3, 5];
                                    if (((this._started = !0), "u" > typeof window)) return [3, 1];
                                    return this.enableAudio(), [3, 5];
                                case 1:
                                    (this._audioContext = new AudioContext()),
                                        this.listenForUserAction(),
                                        (e.label = 2);
                                case 2:
                                    if (this._status !== a.UNAVAILABLE) return [3, 5];
                                    return [4, this.testAudio()];
                                case 3:
                                    return e.sent(), [4, this.delay(1e3)];
                                case 4:
                                    return e.sent(), [3, 2];
                                case 5:
                                    return [2];
                            }
                        });
                    });
                }),
                (t.prototype.listenForUserAction = function () {
                    var e = this;
                    document.addEventListener(
                        "pointerdown",
                        function () {
                            return m(e, void 0, void 0, function () {
                                return v(this, function (e) {
                                    return this.enableAudio(), [2];
                                });
                            });
                        },
                        { once: !0 },
                    );
                }),
                (t.prototype.establishAudio = function () {
                    return m(this, void 0, void 0, function () {
                        return v(this, function (e) {
                            return this._establishAudio(), [2];
                        });
                    });
                }),
                Object.defineProperty(t.prototype, "systemVolume", {
                    get: function () {
                        return this._status === a.UNAVAILABLE ? (this.testAudio(), 0) : 1;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "status", {
                    get: function () {
                        return this._status;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                t
            );
        })(D))()),
        (N = (function () {
            function e() {}
            return (
                (e.prototype.observe = function () {}),
                (e.prototype.unobserve = function () {}),
                (e.prototype.disconnect = function () {}),
                e
            );
        })()),
        (j = globalThis.ResizeObserver || N),
        (B = new ((function () {
            function e() {
                var e = this;
                (this._elementsMap = new Map()),
                    (this._onObservedEntry = function (t) {
                        var r = e._elementsMap.get(t.target);
                        null !== r
                            ? r.onResize(0 == t.target.clientWidth || 0 == t.target.clientHeight)
                            : e._resizeObserver.unobserve(t.target);
                    }),
                    (this._onObserved = function (t) {
                        t.forEach(e._onObservedEntry);
                    }),
                    (this._resizeObserver = new j(this._onObserved));
            }
            return (
                (e.prototype.add = function (e, t) {
                    var r = { onResize: t, element: e };
                    return this._elementsMap.set(e, r), this._resizeObserver.observe(e), r;
                }),
                (e.prototype.remove = function (e) {
                    this._resizeObserver.unobserve(e.element), this._elementsMap.delete(e.element);
                }),
                e
            );
        })())()),
        ($ = (function () {
            function e(e) {
                (this.enableRiveAssetCDN = !0),
                    (this.referenceCount = 0),
                    (this.destroyed = !1),
                    (this.selfUnref = !1),
                    (this.bindableArtboards = []),
                    (this.src = e.src),
                    (this.buffer = e.buffer),
                    e.assetLoader && (this.assetLoader = e.assetLoader),
                    (this.enableRiveAssetCDN = "boolean" != typeof e.enableRiveAssetCDN || e.enableRiveAssetCDN),
                    (this.eventManager = new D()),
                    e.onLoad && this.on(o.Load, e.onLoad),
                    e.onLoadError && this.on(o.LoadError, e.onLoadError);
            }
            return (
                (e.prototype.releaseFile = function () {
                    var e;
                    this.selfUnref && (null == (e = this.file) || e.unref()), (this.file = null);
                }),
                (e.prototype.releaseBindableArtboards = function () {
                    this.bindableArtboards.forEach(function (e) {
                        return e.destroy();
                    });
                }),
                (e.prototype.initData = function () {
                    return m(this, void 0, void 0, function () {
                        var t, r, n, i;
                        return v(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    if (!this.src) return [3, 2];
                                    return (t = this), [4, er(this.src)];
                                case 1:
                                    (t.buffer = a.sent()), (a.label = 2);
                                case 2:
                                    if (this.destroyed) return [2];
                                    return (
                                        this.assetLoader &&
                                            (r = new f.CustomFileAssetLoaderWrapper(this.runtime, this.assetLoader)
                                                .assetLoader),
                                        (n = this),
                                        [4, this.runtime.load(new Uint8Array(this.buffer), r, this.enableRiveAssetCDN)]
                                    );
                                case 3:
                                    if (
                                        ((n.file = a.sent()),
                                        (i = new f.FileFinalizer(this.file)),
                                        f.finalizationRegistry.register(this, i),
                                        this.destroyed)
                                    )
                                        return this.releaseFile(), [2];
                                    return (
                                        null !== this.file
                                            ? this.eventManager.fire({ type: o.Load, data: this })
                                            : this.fireLoadError(e.fileLoadErrorMessage),
                                        [2]
                                    );
                            }
                        });
                    });
                }),
                (e.prototype.init = function () {
                    return m(this, void 0, void 0, function () {
                        var t, r;
                        return v(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    if (!this.src && !this.buffer)
                                        return this.fireLoadError(e.missingErrorMessage), [2];
                                    n.label = 1;
                                case 1:
                                    return n.trys.push([1, 4, , 5]), (t = this), [4, S.awaitInstance()];
                                case 2:
                                    if (((t.runtime = n.sent()), this.destroyed)) return [2];
                                    return [4, this.initData()];
                                case 3:
                                    return n.sent(), [3, 5];
                                case 4:
                                    return (
                                        (r = n.sent()),
                                        this.fireLoadError(r instanceof Error ? r.message : e.fileLoadErrorMessage),
                                        [3, 5]
                                    );
                                case 5:
                                    return [2];
                            }
                        });
                    });
                }),
                (e.prototype.fireLoadError = function (e) {
                    throw (this.eventManager.fire({ type: o.LoadError, data: e }), Error(e));
                }),
                (e.prototype.on = function (e, t) {
                    this.eventManager.add({ type: e, callback: t });
                }),
                (e.prototype.off = function (e, t) {
                    this.eventManager.remove({ type: e, callback: t });
                }),
                (e.prototype.cleanup = function () {
                    (this.referenceCount -= 1),
                        this.referenceCount <= 0 &&
                            (this.removeAllRiveEventListeners(),
                            this.releaseFile(),
                            this.releaseBindableArtboards(),
                            (this.destroyed = !0));
                }),
                (e.prototype.removeAllRiveEventListeners = function (e) {
                    this.eventManager.removeAll(e);
                }),
                (e.prototype.getInstance = function () {
                    if (null !== this.file) return (this.referenceCount += 1), this.file;
                }),
                (e.prototype.destroyIfUnused = function () {
                    this.referenceCount <= 0 && this.cleanup();
                }),
                (e.prototype.createBindableArtboard = function (e) {
                    if (null != e) {
                        var t = new M(e);
                        return (0, f.createFinalization)(t, t.nativeArtboard), this.bindableArtboards.push(t), t;
                    }
                    return null;
                }),
                (e.prototype.getArtboard = function (e) {
                    var t = this.file.artboardByName(e);
                    if (null != t) return new T(t, this);
                }),
                (e.prototype.getBindableArtboard = function (e) {
                    var t = this.file.bindableArtboardByName(e);
                    return this.createBindableArtboard(t);
                }),
                (e.prototype.getDefaultBindableArtboard = function () {
                    var e = this.file.bindableArtboardDefault();
                    return this.createBindableArtboard(e);
                }),
                (e.prototype.internalBindableArtboardFromArtboard = function (e) {
                    var t = this.file.internalBindableArtboardFromArtboard(e);
                    return this.createBindableArtboard(t);
                }),
                (e.missingErrorMessage = "Rive source file or data buffer required"),
                (e.fileLoadErrorMessage = "The file failed to load"),
                e
            );
        })()),
        (K = (function () {
            function t(e) {
                var t,
                    r = this;
                (this.loaded = !1),
                    (this.destroyed = !1),
                    (this._observed = null),
                    (this.readyForPlaying = !1),
                    (this.artboard = null),
                    (this.eventCleanup = null),
                    (this.shouldDisableRiveListeners = !1),
                    (this.automaticallyHandleEvents = !1),
                    (this.dispatchPointerExit = !0),
                    (this.enableMultiTouch = !1),
                    (this.enableRiveAssetCDN = !0),
                    (this._volume = 1),
                    (this._artboardWidth = void 0),
                    (this._artboardHeight = void 0),
                    (this._devicePixelRatioUsed = 1),
                    (this._hasZeroSize = !1),
                    (this._audioEventListener = null),
                    (this._boundDraw = null),
                    (this.eventTarget = e.eventTarget),
                    (this.eventCapture = null == e.eventCapture || e.eventCapture),
                    (this.listenOnDocumentBody = null != e.listenOnDocumentBody && e.listenOnDocumentBody),
                    null != e.eventTarget && (this.listenOnDocumentBody = !1),
                    (this._viewModelInstance = null),
                    (this._dataEnums = null),
                    (this.durations = []),
                    (this.frameTimes = []),
                    (this.frameCount = 0),
                    (this.isTouchScrollEnabled = !1),
                    (this.onCanvasResize = function (e) {
                        var t = r._hasZeroSize !== e;
                        (r._hasZeroSize = e),
                            e
                                ? (r._layout.maxX && r._layout.maxY) || r.resizeToCanvas()
                                : t && r.resizeDrawingSurfaceToCanvas();
                    }),
                    (this.renderSecondTimer = 0),
                    (this._boundDraw = this.draw.bind(this)),
                    (this.canvas = e.canvas),
                    e.canvas.constructor === HTMLCanvasElement &&
                        (this._observed = B.add(this.canvas, this.onCanvasResize)),
                    (this.src = e.src),
                    (this.buffer = e.buffer),
                    (this.riveFile = e.riveFile),
                    (this.layout = null != (t = e.layout) ? t : new _()),
                    (this.shouldDisableRiveListeners = !!e.shouldDisableRiveListeners),
                    (this.isTouchScrollEnabled = !!e.isTouchScrollEnabled),
                    (this.automaticallyHandleEvents = !!e.automaticallyHandleEvents),
                    (this.dispatchPointerExit =
                        !1 === e.dispatchPointerExit ? e.dispatchPointerExit : this.dispatchPointerExit),
                    (this.enableMultiTouch = !!e.enableMultiTouch),
                    (this.enableRiveAssetCDN = void 0 === e.enableRiveAssetCDN || e.enableRiveAssetCDN),
                    (this.eventManager = new D()),
                    e.onLoad && this.on(o.Load, e.onLoad),
                    e.onLoadError && this.on(o.LoadError, e.onLoadError),
                    e.onPlay && this.on(o.Play, e.onPlay),
                    e.onPause && this.on(o.Pause, e.onPause),
                    e.onStop && this.on(o.Stop, e.onStop),
                    e.onLoop && this.on(o.Loop, e.onLoop),
                    e.onStateChange && this.on(o.StateChange, e.onStateChange),
                    e.onAdvance && this.on(o.Advance, e.onAdvance),
                    e.onload && !e.onLoad && this.on(o.Load, e.onload),
                    e.onloaderror && !e.onLoadError && this.on(o.LoadError, e.onloaderror),
                    e.onplay && !e.onPlay && this.on(o.Play, e.onplay),
                    e.onpause && !e.onPause && this.on(o.Pause, e.onpause),
                    e.onstop && !e.onStop && this.on(o.Stop, e.onstop),
                    e.onloop && !e.onLoop && this.on(o.Loop, e.onloop),
                    e.onstatechange && !e.onStateChange && this.on(o.StateChange, e.onstatechange),
                    e.assetLoader && (this.assetLoader = e.assetLoader),
                    (this.taskQueue = new L(this.eventManager)),
                    this.init({
                        src: this.src,
                        buffer: this.buffer,
                        riveFile: this.riveFile,
                        autoplay: e.autoplay,
                        autoBind: e.autoBind,
                        animations: e.animations,
                        stateMachines: e.stateMachines,
                        artboard: e.artboard,
                        useOffscreenRenderer: e.useOffscreenRenderer,
                    });
            }
            return (
                Object.defineProperty(t.prototype, "viewModelCount", {
                    get: function () {
                        return this.file.viewModelCount();
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.new = function (e) {
                    return console.warn("This function is deprecated: please use `new Rive({})` instead"), new t(e);
                }),
                (t.prototype.onSystemAudioChanged = function () {
                    this.volume = this._volume;
                }),
                (t.prototype.init = function (e) {
                    var r = this,
                        n = e.src,
                        o = e.buffer,
                        i = e.riveFile,
                        a = e.animations,
                        s = e.stateMachines,
                        l = e.artboard,
                        u = e.autoplay,
                        c = void 0 !== u && u,
                        f = e.useOffscreenRenderer,
                        p = void 0 !== f && f,
                        d = e.autoBind,
                        h = void 0 !== d && d;
                    if (!this.destroyed) {
                        if (
                            ((this.src = n),
                            (this.buffer = o),
                            (this.riveFile = i),
                            !this.src && !this.buffer && !this.riveFile)
                        )
                            throw new g(t.missingErrorMessage);
                        var m = en(a),
                            v = en(s);
                        (this.loaded = !1),
                            (this.readyForPlaying = !1),
                            S.awaitInstance()
                                .then(function (e) {
                                    r.destroyed ||
                                        ((r.runtime = e),
                                        r.removeRiveListeners(),
                                        r.deleteRiveRenderer(),
                                        (r.renderer = r.runtime.makeRenderer(r.canvas, p)),
                                        r.canvas.width || r.canvas.height || r.resizeDrawingSurfaceToCanvas(),
                                        r
                                            .initData(l, m, v, c, h)
                                            .then(function (e) {
                                                if (e) return r.setupRiveListeners();
                                            })
                                            .catch(function (e) {
                                                console.error(e);
                                            }));
                                })
                                .catch(function (e) {
                                    console.error(e);
                                });
                    }
                }),
                (t.prototype.setupRiveListeners = function (e) {
                    var t = this;
                    if ((this.eventCleanup && this.eventCleanup(), !this.shouldDisableRiveListeners)) {
                        var r = (this.animator.stateMachines || [])
                                .filter(function (e) {
                                    return e.playing && t.runtime.hasListeners(e.instance);
                                })
                                .map(function (e) {
                                    return e.instance;
                                }),
                            n = this.isTouchScrollEnabled,
                            o = this.dispatchPointerExit,
                            i = this.enableMultiTouch;
                        e && "isTouchScrollEnabled" in e && (n = e.isTouchScrollEnabled);
                        var a = this.canvas;
                        null != this.eventTarget && (a = this.eventTarget),
                            (this.eventCleanup = (0, f.registerTouchInteractions)({
                                canvas: a,
                                listenOnDocumentBody: this.listenOnDocumentBody,
                                eventCapture: this.eventCapture,
                                artboard: this.artboard,
                                stateMachines: r,
                                renderer: this.renderer,
                                rive: this.runtime,
                                fit: this._layout.runtimeFit(this.runtime),
                                alignment: this._layout.runtimeAlignment(this.runtime),
                                isTouchScrollEnabled: n,
                                dispatchPointerExit: o,
                                enableMultiTouch: i,
                                layoutScaleFactor: this._layout.layoutScaleFactor,
                            }));
                    }
                }),
                (t.prototype.removeRiveListeners = function () {
                    this.eventCleanup && (this.eventCleanup(), (this.eventCleanup = null));
                }),
                (t.prototype.initializeAudio = function () {
                    var e,
                        t = this;
                    F.status == a.UNAVAILABLE &&
                        (null == (e = this.artboard) ? void 0 : e.hasAudio) &&
                        null === this._audioEventListener &&
                        ((this._audioEventListener = {
                            type: o.AudioStatusChange,
                            callback: function () {
                                return t.onSystemAudioChanged();
                            },
                        }),
                        F.add(this._audioEventListener),
                        F.establishAudio());
                }),
                (t.prototype.initArtboardSize = function () {
                    this.artboard &&
                        ((this._artboardWidth = this.artboard.width = this._artboardWidth || this.artboard.width),
                        (this._artboardHeight = this.artboard.height = this._artboardHeight || this.artboard.height));
                }),
                (t.prototype.initData = function (e, t, r, n, i) {
                    return m(this, void 0, void 0, function () {
                        var a, s, l;
                        return v(this, function (u) {
                            switch (u.label) {
                                case 0:
                                    if ((u.trys.push([0, 3, , 4]), null != this.riveFile)) return [3, 2];
                                    return (
                                        (a = new $({
                                            src: this.src,
                                            buffer: this.buffer,
                                            enableRiveAssetCDN: this.enableRiveAssetCDN,
                                            assetLoader: this.assetLoader,
                                        })),
                                        (this.riveFile = a),
                                        [4, a.init()]
                                    );
                                case 1:
                                    if ((u.sent(), this.destroyed)) return a.destroyIfUnused(), [2, !1];
                                    u.label = 2;
                                case 2:
                                    return (
                                        (this.file = this.riveFile.getInstance()),
                                        this.initArtboard(e, t, r, n, i),
                                        this.initArtboardSize(),
                                        this.initializeAudio(),
                                        (this.loaded = !0),
                                        this.eventManager.fire({
                                            type: o.Load,
                                            data: null != (l = this.src) ? l : "buffer",
                                        }),
                                        this.animator.advanceIfPaused(),
                                        (this.readyForPlaying = !0),
                                        this.taskQueue.process(),
                                        this.drawFrame(),
                                        [2, !0]
                                    );
                                case 3:
                                    var c;
                                    return (
                                        console.warn(
                                            (s =
                                                (c = u.sent()) && c.isHandledError
                                                    ? c.message
                                                    : "Problem loading file; may be corrupt!"),
                                        ),
                                        this.eventManager.fire({ type: o.LoadError, data: s }),
                                        [2, Promise.reject(s)]
                                    );
                                case 4:
                                    return [2];
                            }
                        });
                    });
                }),
                (t.prototype.initArtboard = function (e, t, r, n, i) {
                    if (this.file) {
                        var a,
                            s = e ? this.file.artboardByName(e) : this.file.defaultArtboard();
                        if (!s) {
                            var l = "Invalid artboard name or no default artboard";
                            console.warn(l), this.eventManager.fire({ type: o.LoadError, data: l });
                            return;
                        }
                        if (
                            ((this.artboard = s),
                            (s.volume = this._volume * F.systemVolume),
                            (this.animator = new A(this.runtime, this.artboard, this.eventManager)),
                            t.length > 0 || r.length > 0
                                ? ((a = t.concat(r)),
                                  this.animator.initLinearAnimations(t, n),
                                  this.animator.initStateMachines(r, n))
                                : (a = [this.animator.atLeastOne(n, !1)]),
                            this.taskQueue.add({ event: { type: n ? o.Play : o.Pause, data: a } }),
                            i)
                        ) {
                            var u = this.file.defaultArtboardViewModel(s);
                            if (null !== u) {
                                var c = u.defaultInstance();
                                if (null !== c) {
                                    var p = new W(c, null);
                                    (0, f.createFinalization)(p, p.runtimeInstance), this.bindViewModelInstance(p);
                                }
                            }
                        }
                    }
                }),
                (t.prototype.drawFrame = function () {
                    var e, t;
                    (null == (e = null == document ? void 0 : document.timeline) ? void 0 : e.currentTime)
                        ? this.loaded &&
                          this.artboard &&
                          !this.frameRequestId &&
                          (this._boundDraw(document.timeline.currentTime),
                          null == (t = this.runtime) || t.resolveAnimationFrame())
                        : this.startRendering();
                }),
                (t.prototype.draw = function (e, t) {
                    this.frameRequestId = null;
                    var r,
                        i = performance.now();
                    this.lastRenderTime || (this.lastRenderTime = e),
                        (this.renderSecondTimer += e - this.lastRenderTime),
                        this.renderSecondTimer > 5e3 && ((this.renderSecondTimer = 0), null == t || t());
                    var a = (e - this.lastRenderTime) / 1e3;
                    this.lastRenderTime = e;
                    for (
                        var s = this.animator.animations
                                .filter(function (e) {
                                    return e.playing || e.needsScrub;
                                })
                                .sort(function (e) {
                                    return e.needsScrub ? -1 : 1;
                                }),
                            l = 0;
                        l < s.length;
                        l++
                    ) {
                        var u = s[l];
                        u.advance(a), u.instance.didLoop && (u.loopCount += 1), u.apply(1);
                    }
                    for (
                        var c = this.animator.stateMachines.filter(function (e) {
                                return e.playing;
                            }),
                            p = 0;
                        p < c.length;
                        p++
                    ) {
                        var d = c[p],
                            h = d.reportedEventCount();
                        if (h)
                            for (var m = 0; m < h; m++) {
                                var v = d.reportedEventAt(m);
                                if (v)
                                    if (v.type === n.OpenUrl) {
                                        if (
                                            (this.eventManager.fire({ type: o.RiveEvent, data: v }),
                                            this.automaticallyHandleEvents)
                                        ) {
                                            var y = document.createElement("a"),
                                                g = v.url,
                                                b = v.target,
                                                w = (0, f.sanitizeUrl)(g);
                                            g && y.setAttribute("href", w),
                                                b && y.setAttribute("target", b),
                                                w && w !== f.BLANK_URL && y.click();
                                        }
                                    } else this.eventManager.fire({ type: o.RiveEvent, data: v });
                            }
                        d.advanceAndApply(a);
                    }
                    0 == this.animator.stateMachines.length && this.artboard.advance(a);
                    var _ = this.renderer;
                    _.clear(),
                        _.save(),
                        this.alignRenderer(),
                        this._hasZeroSize || this.artboard.draw(_),
                        _.restore(),
                        _.flush(),
                        this.animator.handleLooping(),
                        this.animator.handleStateChanges(),
                        this.animator.handleAdvancing(a),
                        this.frameCount++;
                    var S = performance.now();
                    for (this.frameTimes.push(S), this.durations.push(S - i); this.frameTimes[0] <= S - 1e3; )
                        this.frameTimes.shift(), this.durations.shift();
                    null == (r = this._viewModelInstance) || r.handleCallbacks(),
                        this.animator.isPlaying
                            ? this.startRendering()
                            : this.animator.isPaused
                              ? (this.lastRenderTime = 0)
                              : this.animator.isStopped && (this.lastRenderTime = 0);
                }),
                (t.prototype.alignRenderer = function () {
                    var e = this.renderer,
                        t = this.runtime,
                        r = this._layout,
                        n = this.artboard;
                    e.align(
                        r.runtimeFit(t),
                        r.runtimeAlignment(t),
                        { minX: r.minX, minY: r.minY, maxX: r.maxX, maxY: r.maxY },
                        n.bounds,
                        this._devicePixelRatioUsed * r.layoutScaleFactor,
                    );
                }),
                Object.defineProperty(t.prototype, "fps", {
                    get: function () {
                        return this.durations.length;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "frameTime", {
                    get: function () {
                        return 0 === this.durations.length
                            ? 0
                            : (
                                  this.durations.reduce(function (e, t) {
                                      return e + t;
                                  }, 0) / this.durations.length
                              ).toFixed(4);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.cleanup = function () {
                    var e, t;
                    (this.destroyed = !0),
                        this.stopRendering(),
                        this.cleanupInstances(),
                        null !== this._observed && B.remove(this._observed),
                        this.removeRiveListeners(),
                        this.file && (null == (e = this.riveFile) || e.cleanup(), (this.file = null)),
                        (this.riveFile = null),
                        this.deleteRiveRenderer(),
                        null !== this._audioEventListener &&
                            (F.remove(this._audioEventListener), (this._audioEventListener = null)),
                        null == (t = this._viewModelInstance) || t.cleanup(),
                        (this._viewModelInstance = null),
                        (this._dataEnums = null);
                }),
                (t.prototype.deleteRiveRenderer = function () {
                    var e;
                    null == (e = this.renderer) || e.delete(), (this.renderer = null);
                }),
                (t.prototype.cleanupInstances = function () {
                    null !== this.eventCleanup && this.eventCleanup(),
                        this.stop(),
                        this.artboard && (this.artboard.delete(), (this.artboard = null));
                }),
                (t.prototype.retrieveTextRun = function (e) {
                    if (!e) return void console.warn("No text run name provided");
                    if (!this.artboard) return void console.warn("Tried to access text run, but the Artboard is null");
                    var t,
                        r = this.artboard.textRun(e);
                    return (
                        r ||
                        void console.warn(
                            "Could not access a text run with name '"
                                .concat(e, "' in the '")
                                .concat(
                                    null == (t = this.artboard) ? void 0 : t.name,
                                    "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime.",
                                ),
                        )
                    );
                }),
                (t.prototype.getTextRunValue = function (e) {
                    var t = this.retrieveTextRun(e);
                    return t ? t.text : void 0;
                }),
                (t.prototype.setTextRunValue = function (e, t) {
                    var r = this.retrieveTextRun(e);
                    r && (r.text = t);
                }),
                (t.prototype.play = function (e, t) {
                    var r = this;
                    ((e = en(e)), this.readyForPlaying)
                        ? (this.animator.play(e),
                          this.eventCleanup && this.eventCleanup(),
                          this.setupRiveListeners(),
                          this.startRendering())
                        : this.taskQueue.add({
                              action: function () {
                                  return r.play(e, t);
                              },
                          });
                }),
                (t.prototype.pause = function (e) {
                    var t = this;
                    ((e = en(e)), this.readyForPlaying)
                        ? (this.eventCleanup && this.eventCleanup(), this.animator.pause(e))
                        : this.taskQueue.add({
                              action: function () {
                                  return t.pause(e);
                              },
                          });
                }),
                (t.prototype.scrub = function (e, t) {
                    var r = this;
                    ((e = en(e)), this.readyForPlaying)
                        ? (this.animator.scrub(e, t || 0), this.drawFrame())
                        : this.taskQueue.add({
                              action: function () {
                                  return r.scrub(e, t);
                              },
                          });
                }),
                (t.prototype.stop = function (e) {
                    var t = this;
                    ((e = en(e)), this.readyForPlaying)
                        ? (this.animator && this.animator.stop(e), this.eventCleanup && this.eventCleanup())
                        : this.taskQueue.add({
                              action: function () {
                                  return t.stop(e);
                              },
                          });
                }),
                (t.prototype.reset = function (e) {
                    var t,
                        r,
                        n = null == e ? void 0 : e.artboard,
                        o = en(null == e ? void 0 : e.animations),
                        i = en(null == e ? void 0 : e.stateMachines),
                        a = null != (t = null == e ? void 0 : e.autoplay) && t,
                        s = null != (r = null == e ? void 0 : e.autoBind) && r;
                    this.cleanupInstances(), this.initArtboard(n, o, i, a, s), this.taskQueue.process();
                }),
                (t.prototype.load = function (e) {
                    (this.file = null), this.stop(), this.init(e);
                }),
                Object.defineProperty(t.prototype, "layout", {
                    get: function () {
                        return this._layout;
                    },
                    set: function (e) {
                        (this._layout = e),
                            (e.maxX && e.maxY) || this.resizeToCanvas(),
                            this.loaded && !this.animator.isPlaying && this.drawFrame();
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.resizeToCanvas = function () {
                    this._layout = this.layout.copyWith({
                        minX: 0,
                        minY: 0,
                        maxX: this.canvas.width,
                        maxY: this.canvas.height,
                    });
                }),
                (t.prototype.resizeDrawingSurfaceToCanvas = function (t) {
                    if (this.canvas instanceof HTMLCanvasElement && window) {
                        var r = this.canvas.getBoundingClientRect(),
                            n = r.width,
                            o = r.height,
                            i = t || window.devicePixelRatio || 1;
                        if (
                            ((this.devicePixelRatioUsed = i),
                            (this.canvas.width = i * n),
                            (this.canvas.height = i * o),
                            this.resizeToCanvas(),
                            this.drawFrame(),
                            this.layout.fit === e.Layout)
                        ) {
                            var a = this._layout.layoutScaleFactor;
                            (this.artboard.width = n / a), (this.artboard.height = o / a);
                        }
                    }
                }),
                Object.defineProperty(t.prototype, "source", {
                    get: function () {
                        return this.src;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "activeArtboard", {
                    get: function () {
                        return this.artboard ? this.artboard.name : "";
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "animationNames", {
                    get: function () {
                        if (!this.loaded || !this.artboard) return [];
                        for (var e = [], t = 0; t < this.artboard.animationCount(); t++)
                            e.push(this.artboard.animationByIndex(t).name);
                        return e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "stateMachineNames", {
                    get: function () {
                        if (!this.loaded || !this.artboard) return [];
                        for (var e = [], t = 0; t < this.artboard.stateMachineCount(); t++)
                            e.push(this.artboard.stateMachineByIndex(t).name);
                        return e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.stateMachineInputs = function (e) {
                    if (this.loaded) {
                        var t = this.animator.stateMachines.find(function (t) {
                            return t.name === e;
                        });
                        return null == t ? void 0 : t.inputs;
                    }
                }),
                (t.prototype.retrieveInputAtPath = function (e, t) {
                    if (!e) return void console.warn("No input name provided for path '".concat(t, "'"));
                    if (!this.artboard)
                        return void console.warn(
                            "Tried to access input: '"
                                .concat(e, "', at path: '")
                                .concat(t, "', but the Artboard is null"),
                        );
                    var r = this.artboard.inputByPath(e, t);
                    return (
                        r ||
                        void console.warn(
                            "Could not access an input with name: '".concat(e, "', at path:'").concat(t, "'"),
                        )
                    );
                }),
                (t.prototype.setBooleanStateAtPath = function (e, t, n) {
                    var o = this.retrieveInputAtPath(e, n);
                    o &&
                        (o.type === r.Boolean
                            ? (o.asBool().value = t)
                            : console.warn(
                                  "Input with name: '".concat(e, "', at path:'").concat(n, "' is not a boolean"),
                              ));
                }),
                (t.prototype.setNumberStateAtPath = function (e, t, n) {
                    var o = this.retrieveInputAtPath(e, n);
                    o &&
                        (o.type === r.Number
                            ? (o.asNumber().value = t)
                            : console.warn(
                                  "Input with name: '".concat(e, "', at path:'").concat(n, "' is not a number"),
                              ));
                }),
                (t.prototype.fireStateAtPath = function (e, t) {
                    var n = this.retrieveInputAtPath(e, t);
                    n &&
                        (n.type === r.Trigger
                            ? n.asTrigger().fire()
                            : console.warn(
                                  "Input with name: '".concat(e, "', at path:'").concat(t, "' is not a trigger"),
                              ));
                }),
                (t.prototype.retrieveTextAtPath = function (e, t) {
                    if (!e) return void console.warn("No text name provided for path '".concat(t, "'"));
                    if (!t) return void console.warn("No path provided for text '".concat(e, "'"));
                    if (!this.artboard)
                        return void console.warn(
                            "Tried to access text: '"
                                .concat(e, "', at path: '")
                                .concat(t, "', but the Artboard is null"),
                        );
                    var r = this.artboard.textByPath(e, t);
                    return (
                        r ||
                        void console.warn("Could not access text with name: '".concat(e, "', at path:'").concat(t, "'"))
                    );
                }),
                (t.prototype.getTextRunValueAtPath = function (e, t) {
                    var r = this.retrieveTextAtPath(e, t);
                    return r
                        ? r.text
                        : void console.warn("Could not get text with name: '".concat(e, "', at path:'").concat(t, "'"));
                }),
                (t.prototype.setTextRunValueAtPath = function (e, t, r) {
                    var n = this.retrieveTextAtPath(e, r);
                    n
                        ? (n.text = t)
                        : console.warn("Could not set text with name: '".concat(e, "', at path:'").concat(r, "'"));
                }),
                Object.defineProperty(t.prototype, "playingStateMachineNames", {
                    get: function () {
                        return this.loaded
                            ? this.animator.stateMachines
                                  .filter(function (e) {
                                      return e.playing;
                                  })
                                  .map(function (e) {
                                      return e.name;
                                  })
                            : [];
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "playingAnimationNames", {
                    get: function () {
                        return this.loaded
                            ? this.animator.animations
                                  .filter(function (e) {
                                      return e.playing;
                                  })
                                  .map(function (e) {
                                      return e.name;
                                  })
                            : [];
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "pausedAnimationNames", {
                    get: function () {
                        return this.loaded
                            ? this.animator.animations
                                  .filter(function (e) {
                                      return !e.playing;
                                  })
                                  .map(function (e) {
                                      return e.name;
                                  })
                            : [];
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "pausedStateMachineNames", {
                    get: function () {
                        return this.loaded
                            ? this.animator.stateMachines
                                  .filter(function (e) {
                                      return !e.playing;
                                  })
                                  .map(function (e) {
                                      return e.name;
                                  })
                            : [];
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "isPlaying", {
                    get: function () {
                        return this.animator.isPlaying;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "isPaused", {
                    get: function () {
                        return this.animator.isPaused;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "isStopped", {
                    get: function () {
                        return this.animator.isStopped;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "bounds", {
                    get: function () {
                        return this.artboard ? this.artboard.bounds : void 0;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.on = function (e, t) {
                    this.eventManager.add({ type: e, callback: t });
                }),
                (t.prototype.off = function (e, t) {
                    this.eventManager.remove({ type: e, callback: t });
                }),
                (t.prototype.unsubscribe = function (e, t) {
                    console.warn("This function is deprecated: please use `off()` instead."), this.off(e, t);
                }),
                (t.prototype.removeAllRiveEventListeners = function (e) {
                    this.eventManager.removeAll(e);
                }),
                (t.prototype.unsubscribeAll = function (e) {
                    console.warn("This function is deprecated: please use `removeAllRiveEventListeners()` instead."),
                        this.removeAllRiveEventListeners(e);
                }),
                (t.prototype.stopRendering = function () {
                    this.loaded &&
                        this.frameRequestId &&
                        (this.runtime.cancelAnimationFrame
                            ? this.runtime.cancelAnimationFrame(this.frameRequestId)
                            : cancelAnimationFrame(this.frameRequestId),
                        (this.frameRequestId = null));
                }),
                (t.prototype.startRendering = function () {
                    this.loaded &&
                        this.artboard &&
                        !this.frameRequestId &&
                        (this.runtime.requestAnimationFrame
                            ? (this.frameRequestId = this.runtime.requestAnimationFrame(this._boundDraw))
                            : (this.frameRequestId = requestAnimationFrame(this._boundDraw)));
                }),
                (t.prototype.enableFPSCounter = function (e) {
                    this.runtime.enableFPSCounter(e);
                }),
                (t.prototype.disableFPSCounter = function () {
                    this.runtime.disableFPSCounter();
                }),
                Object.defineProperty(t.prototype, "contents", {
                    get: function () {
                        if (this.loaded) {
                            for (var e = { artboards: [] }, t = 0; t < this.file.artboardCount(); t++) {
                                for (
                                    var r = this.file.artboardByIndex(t),
                                        n = { name: r.name, animations: [], stateMachines: [] },
                                        o = 0;
                                    o < r.animationCount();
                                    o++
                                ) {
                                    var i = r.animationByIndex(o);
                                    n.animations.push(i.name);
                                }
                                for (var a = 0; a < r.stateMachineCount(); a++) {
                                    for (
                                        var s = r.stateMachineByIndex(a),
                                            l = s.name,
                                            u = new this.runtime.StateMachineInstance(s, r),
                                            c = [],
                                            f = 0;
                                        f < u.inputCount();
                                        f++
                                    ) {
                                        var p = u.input(f);
                                        c.push({ name: p.name, type: p.type });
                                    }
                                    n.stateMachines.push({ name: l, inputs: c });
                                }
                                e.artboards.push(n);
                            }
                            return e;
                        }
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "volume", {
                    get: function () {
                        return (
                            this.artboard &&
                                this.artboard.volume !== this._volume &&
                                (this._volume = this.artboard.volume),
                            this._volume
                        );
                    },
                    set: function (e) {
                        (this._volume = e), this.artboard && (this.artboard.volume = e * F.systemVolume);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "artboardWidth", {
                    get: function () {
                        var e;
                        return this.artboard ? this.artboard.width : null != (e = this._artboardWidth) ? e : 0;
                    },
                    set: function (e) {
                        (this._artboardWidth = e), this.artboard && (this.artboard.width = e);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "artboardHeight", {
                    get: function () {
                        var e;
                        return this.artboard ? this.artboard.height : null != (e = this._artboardHeight) ? e : 0;
                    },
                    set: function (e) {
                        (this._artboardHeight = e), this.artboard && (this.artboard.height = e);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.resetArtboardSize = function () {
                    this.artboard
                        ? (this.artboard.resetArtboardSize(),
                          (this._artboardWidth = this.artboard.width),
                          (this._artboardHeight = this.artboard.height))
                        : ((this._artboardWidth = void 0), (this._artboardHeight = void 0));
                }),
                Object.defineProperty(t.prototype, "devicePixelRatioUsed", {
                    get: function () {
                        return this._devicePixelRatioUsed;
                    },
                    set: function (e) {
                        this._devicePixelRatioUsed = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.bindViewModelInstance = function (e) {
                    var t;
                    this.artboard &&
                        !this.destroyed &&
                        e &&
                        e.runtimeInstance &&
                        (e.internalIncrementReferenceCount(),
                        null == (t = this._viewModelInstance) || t.cleanup(),
                        (this._viewModelInstance = e),
                        this.animator.stateMachines.length > 0
                            ? this.animator.stateMachines.forEach(function (t) {
                                  return t.bindViewModelInstance(e);
                              })
                            : this.artboard.bindViewModelInstance(e.runtimeInstance));
                }),
                Object.defineProperty(t.prototype, "viewModelInstance", {
                    get: function () {
                        return this._viewModelInstance;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.viewModelByIndex = function (e) {
                    var t = this.file.viewModelByIndex(e);
                    return null !== t ? new V(t) : null;
                }),
                (t.prototype.viewModelByName = function (e) {
                    var t = this.file.viewModelByName(e);
                    return null !== t ? new V(t) : null;
                }),
                (t.prototype.enums = function () {
                    if (null === this._dataEnums) {
                        var e = this.file.enums();
                        this._dataEnums = e.map(function (e) {
                            return new U(e);
                        });
                    }
                    return this._dataEnums;
                }),
                (t.prototype.defaultViewModel = function () {
                    if (this.artboard) {
                        var e = this.file.defaultArtboardViewModel(this.artboard);
                        if (e) return new V(e);
                    }
                    return null;
                }),
                (t.prototype.getArtboard = function (e) {
                    var t, r;
                    return null != (r = null == (t = this.riveFile) ? void 0 : t.getArtboard(e)) ? r : null;
                }),
                (t.prototype.getBindableArtboard = function (e) {
                    var t, r;
                    return null != (r = null == (t = this.riveFile) ? void 0 : t.getBindableArtboard(e)) ? r : null;
                }),
                (t.prototype.getDefaultBindableArtboard = function () {
                    var e, t;
                    return null != (t = null == (e = this.riveFile) ? void 0 : e.getDefaultBindableArtboard())
                        ? t
                        : null;
                }),
                (t.missingErrorMessage = "Rive source file or data buffer required"),
                (t.cleanupErrorMessage = "Attempt to use file after calling cleanup."),
                t
            );
        })()),
        (V = (function () {
            function e(e) {
                this._viewModel = e;
            }
            return (
                Object.defineProperty(e.prototype, "instanceCount", {
                    get: function () {
                        return this._viewModel.instanceCount;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "name", {
                    get: function () {
                        return this._viewModel.name;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.instanceByIndex = function (e) {
                    var t = this._viewModel.instanceByIndex(e);
                    if (null !== t) {
                        var r = new W(t, null);
                        return (0, f.createFinalization)(r, t), r;
                    }
                    return null;
                }),
                (e.prototype.instanceByName = function (e) {
                    var t = this._viewModel.instanceByName(e);
                    if (null !== t) {
                        var r = new W(t, null);
                        return (0, f.createFinalization)(r, t), r;
                    }
                    return null;
                }),
                (e.prototype.defaultInstance = function () {
                    var e = this._viewModel.defaultInstance();
                    if (null !== e) {
                        var t = new W(e, null);
                        return (0, f.createFinalization)(t, e), t;
                    }
                    return null;
                }),
                (e.prototype.instance = function () {
                    var e = this._viewModel.instance();
                    if (null !== e) {
                        var t = new W(e, null);
                        return (0, f.createFinalization)(t, e), t;
                    }
                    return null;
                }),
                Object.defineProperty(e.prototype, "properties", {
                    get: function () {
                        return this._viewModel.getProperties();
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "instanceNames", {
                    get: function () {
                        return this._viewModel.getInstanceNames();
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                e
            );
        })()),
        (U = (function () {
            function e(e) {
                this._dataEnum = e;
            }
            return (
                Object.defineProperty(e.prototype, "name", {
                    get: function () {
                        return this._dataEnum.name;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "values", {
                    get: function () {
                        return this._dataEnum.values;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                e
            );
        })()),
        ((z = s || (s = {})).Number = "number"),
        (z.String = "string"),
        (z.Boolean = "boolean"),
        (z.Color = "color"),
        (z.Trigger = "trigger"),
        (z.Enum = "enum"),
        (z.List = "list"),
        (z.Image = "image"),
        (z.Artboard = "artboard"),
        (W = (function () {
            function e(e, t) {
                (this._parents = []),
                    (this._children = []),
                    (this._viewModelInstances = new Map()),
                    (this._propertiesWithCallbacks = []),
                    (this._referenceCount = 0),
                    (this.selfUnref = !1),
                    (this._runtimeInstance = e),
                    null !== t && this._parents.push(t);
            }
            return (
                Object.defineProperty(e.prototype, "runtimeInstance", {
                    get: function () {
                        return this._runtimeInstance;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "nativeInstance", {
                    get: function () {
                        return this._runtimeInstance;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.handleCallbacks = function () {
                    0 !== this._propertiesWithCallbacks.length &&
                        (this._propertiesWithCallbacks.forEach(function (e) {
                            e.handleCallbacks();
                        }),
                        this._propertiesWithCallbacks.forEach(function (e) {
                            e.clearChanges();
                        })),
                        this._children.forEach(function (e) {
                            return e.handleCallbacks();
                        });
                }),
                (e.prototype.addParent = function (e) {
                    !this._parents.includes(e) &&
                        (this._parents.push(e),
                        (this._propertiesWithCallbacks.length > 0 || this._children.length > 0) &&
                            e.addToViewModelCallbacks(this));
                }),
                (e.prototype.removeParent = function (e) {
                    var t = this._parents.indexOf(e);
                    -1 !== t && (this._parents[t].removeFromViewModelCallbacks(this), this._parents.splice(t, 1));
                }),
                (e.prototype.addToPropertyCallbacks = function (e) {
                    var t = this;
                    !this._propertiesWithCallbacks.includes(e) &&
                        (this._propertiesWithCallbacks.push(e),
                        this._propertiesWithCallbacks.length > 0 &&
                            this._parents.forEach(function (e) {
                                e.addToViewModelCallbacks(t);
                            }));
                }),
                (e.prototype.removeFromPropertyCallbacks = function (e) {
                    var t = this;
                    this._propertiesWithCallbacks.includes(e) &&
                        ((this._propertiesWithCallbacks = this._propertiesWithCallbacks.filter(function (t) {
                            return t !== e;
                        })),
                        0 === this._children.length &&
                            0 === this._propertiesWithCallbacks.length &&
                            this._parents.forEach(function (e) {
                                e.removeFromViewModelCallbacks(t);
                            }));
                }),
                (e.prototype.addToViewModelCallbacks = function (e) {
                    var t = this;
                    this._children.includes(e) ||
                        (this._children.push(e),
                        this._parents.forEach(function (e) {
                            e.addToViewModelCallbacks(t);
                        }));
                }),
                (e.prototype.removeFromViewModelCallbacks = function (e) {
                    var t = this;
                    this._children.includes(e) &&
                        ((this._children = this._children.filter(function (t) {
                            return t !== e;
                        })),
                        0 === this._children.length &&
                            0 === this._propertiesWithCallbacks.length &&
                            this._parents.forEach(function (e) {
                                e.removeFromViewModelCallbacks(t);
                            }));
                }),
                (e.prototype.clearCallbacks = function () {
                    this._propertiesWithCallbacks.forEach(function (e) {
                        e.clearCallbacks();
                    });
                }),
                (e.prototype.propertyFromPath = function (e, t) {
                    var r = e.split("/");
                    return this.propertyFromPathSegments(r, 0, t);
                }),
                (e.prototype.viewModelFromPathSegments = function (e, t) {
                    var r = this.internalViewModelInstance(e[t]);
                    if (null !== r)
                        if (t == e.length - 1) return r;
                        else return r.viewModelFromPathSegments(e, t++);
                    return null;
                }),
                (e.prototype.propertyFromPathSegments = function (e, t, r) {
                    if (t < e.length - 1) {
                        var n,
                            o,
                            i,
                            a,
                            l,
                            u,
                            c,
                            f,
                            p,
                            d,
                            h,
                            m,
                            v,
                            y,
                            g,
                            b,
                            w,
                            _,
                            S = this.internalViewModelInstance(e[t]);
                        return null !== S ? S.propertyFromPathSegments(e, t + 1, r) : null;
                    }
                    var x = null;
                    switch (r) {
                        case s.Number:
                            if (
                                null !==
                                (x =
                                    null != (o = null == (n = this._runtimeInstance) ? void 0 : n.number(e[t]))
                                        ? o
                                        : null)
                            )
                                return new q(x, this);
                            break;
                        case s.String:
                            if (
                                null !==
                                (x =
                                    null != (a = null == (i = this._runtimeInstance) ? void 0 : i.string(e[t]))
                                        ? a
                                        : null)
                            )
                                return new G(x, this);
                            break;
                        case s.Boolean:
                            if (
                                null !==
                                (x =
                                    null != (u = null == (l = this._runtimeInstance) ? void 0 : l.boolean(e[t]))
                                        ? u
                                        : null)
                            )
                                return new Y(x, this);
                            break;
                        case s.Color:
                            if (
                                null !==
                                (x =
                                    null != (f = null == (c = this._runtimeInstance) ? void 0 : c.color(e[t]))
                                        ? f
                                        : null)
                            )
                                return new Q(x, this);
                            break;
                        case s.Trigger:
                            if (
                                null !==
                                (x =
                                    null != (d = null == (p = this._runtimeInstance) ? void 0 : p.trigger(e[t]))
                                        ? d
                                        : null)
                            )
                                return new J(x, this);
                            break;
                        case s.Enum:
                            if (
                                null !==
                                (x =
                                    null != (m = null == (h = this._runtimeInstance) ? void 0 : h.enum(e[t]))
                                        ? m
                                        : null)
                            )
                                return new X(x, this);
                            break;
                        case s.List:
                            if (
                                null !==
                                (x =
                                    null != (y = null == (v = this._runtimeInstance) ? void 0 : v.list(e[t]))
                                        ? y
                                        : null)
                            )
                                return new Z(x, this);
                            break;
                        case s.Image:
                            if (
                                null !==
                                (x =
                                    null != (b = null == (g = this._runtimeInstance) ? void 0 : g.image(e[t]))
                                        ? b
                                        : null)
                            )
                                return new ee(x, this);
                            break;
                        case s.Artboard:
                            if (
                                null !==
                                (x =
                                    null != (_ = null == (w = this._runtimeInstance) ? void 0 : w.artboard(e[t]))
                                        ? _
                                        : null)
                            )
                                return new et(x, this);
                    }
                    return null;
                }),
                (e.prototype.internalViewModelInstance = function (t) {
                    if (this._viewModelInstances.has(t)) return this._viewModelInstances.get(t);
                    var r,
                        n = null == (r = this._runtimeInstance) ? void 0 : r.viewModel(t);
                    if (null !== n) {
                        var o = new e(n, this);
                        return (
                            (0, f.createFinalization)(o, n),
                            o.internalIncrementReferenceCount(),
                            this._viewModelInstances.set(t, o),
                            o
                        );
                    }
                    return null;
                }),
                (e.prototype.number = function (e) {
                    return this.propertyFromPath(e, s.Number);
                }),
                (e.prototype.string = function (e) {
                    return this.propertyFromPath(e, s.String);
                }),
                (e.prototype.boolean = function (e) {
                    return this.propertyFromPath(e, s.Boolean);
                }),
                (e.prototype.color = function (e) {
                    return this.propertyFromPath(e, s.Color);
                }),
                (e.prototype.trigger = function (e) {
                    return this.propertyFromPath(e, s.Trigger);
                }),
                (e.prototype.enum = function (e) {
                    return this.propertyFromPath(e, s.Enum);
                }),
                (e.prototype.list = function (e) {
                    return this.propertyFromPath(e, s.List);
                }),
                (e.prototype.image = function (e) {
                    return this.propertyFromPath(e, s.Image);
                }),
                (e.prototype.artboard = function (e) {
                    return this.propertyFromPath(e, s.Artboard);
                }),
                (e.prototype.viewModel = function (e) {
                    var t = e.split("/"),
                        r = t.length > 1 ? this.viewModelFromPathSegments(t.slice(0, t.length - 1), 0) : this;
                    return null != r ? r.internalViewModelInstance(t[t.length - 1]) : null;
                }),
                (e.prototype.internalReplaceViewModel = function (e, t) {
                    var r;
                    if (null !== t.runtimeInstance) {
                        var n =
                            (null == (r = this._runtimeInstance) ? void 0 : r.replaceViewModel(e, t.runtimeInstance)) ||
                            !1;
                        if (n) {
                            t.internalIncrementReferenceCount();
                            var o = this.internalViewModelInstance(e);
                            null !== o &&
                                (o.removeParent(this),
                                this._children.includes(o) &&
                                    (this._children = this._children.filter(function (e) {
                                        return e !== o;
                                    })),
                                o.cleanup()),
                                this._viewModelInstances.set(e, t),
                                t.addParent(this);
                        }
                        return n;
                    }
                    return !1;
                }),
                (e.prototype.replaceViewModel = function (e, t) {
                    var r,
                        n = e.split("/"),
                        o = n.length > 1 ? this.viewModelFromPathSegments(n.slice(0, n.length - 1), 0) : this;
                    return null != (r = null == o ? void 0 : o.internalReplaceViewModel(n[n.length - 1], t)) && r;
                }),
                (e.prototype.incrementReferenceCount = function () {
                    var e;
                    this._referenceCount++, null == (e = this._runtimeInstance) || e.incrementReferenceCount();
                }),
                (e.prototype.decrementReferenceCount = function () {
                    var e;
                    this._referenceCount--, null == (e = this._runtimeInstance) || e.decrementReferenceCount();
                }),
                Object.defineProperty(e.prototype, "properties", {
                    get: function () {
                        var e;
                        return (
                            (null == (e = this._runtimeInstance)
                                ? void 0
                                : e.getProperties().map(function (e) {
                                      return h({}, e);
                                  })) || []
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.internalIncrementReferenceCount = function () {
                    this._referenceCount++;
                }),
                (e.prototype.cleanup = function () {
                    var e,
                        t = this;
                    if ((this._referenceCount--, this._referenceCount <= 0)) {
                        this.selfUnref && (null == (e = this._runtimeInstance) || e.unref()),
                            (this._runtimeInstance = null),
                            this.clearCallbacks(),
                            (this._propertiesWithCallbacks = []),
                            this._viewModelInstances.forEach(function (e) {
                                e.cleanup();
                            }),
                            this._viewModelInstances.clear();
                        var r = y([], this._children, !0);
                        this._children.length = 0;
                        var n = y([], this._parents, !0);
                        (this._parents.length = 0),
                            r.forEach(function (e) {
                                e.removeParent(t);
                            }),
                            n.forEach(function (e) {
                                e.removeFromViewModelCallbacks(t);
                            });
                    }
                }),
                e
            );
        })()),
        (G = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                d(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function (e) {
                        this._viewModelInstanceValue.value = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e(this.value);
                }),
                t
            );
        })(
            (H = (function () {
                function e(e, t) {
                    (this.callbacks = []), (this._viewModelInstanceValue = e), (this._parentViewModel = t);
                }
                return (
                    (e.prototype.on = function (e) {
                        0 === this.callbacks.length && this._viewModelInstanceValue.clearChanges(),
                            this.callbacks.includes(e) ||
                                (this.callbacks.push(e), this._parentViewModel.addToPropertyCallbacks(this));
                    }),
                    (e.prototype.off = function (e) {
                        e
                            ? (this.callbacks = this.callbacks.filter(function (t) {
                                  return t !== e;
                              }))
                            : (this.callbacks.length = 0),
                            0 === this.callbacks.length && this._parentViewModel.removeFromPropertyCallbacks(this);
                    }),
                    (e.prototype.internalHandleCallback = function (e) {}),
                    (e.prototype.handleCallbacks = function () {
                        var e = this;
                        this._viewModelInstanceValue.hasChanged &&
                            this.callbacks.forEach(function (t) {
                                e.internalHandleCallback(t);
                            });
                    }),
                    (e.prototype.clearChanges = function () {
                        this._viewModelInstanceValue.clearChanges();
                    }),
                    (e.prototype.clearCallbacks = function () {
                        this.callbacks.length = 0;
                    }),
                    Object.defineProperty(e.prototype, "name", {
                        get: function () {
                            return this._viewModelInstanceValue.name;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    e
                );
            })()),
        )),
        (q = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                d(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function (e) {
                        this._viewModelInstanceValue.value = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e(this.value);
                }),
                t
            );
        })(H)),
        (Y = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                d(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function (e) {
                        this._viewModelInstanceValue.value = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e(this.value);
                }),
                t
            );
        })(H)),
        (J = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                d(t, e),
                (t.prototype.trigger = function () {
                    return this._viewModelInstanceValue.trigger();
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e();
                }),
                t
            );
        })(H)),
        (X = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                d(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function (e) {
                        this._viewModelInstanceValue.value = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "valueIndex", {
                    get: function () {
                        return this._viewModelInstanceValue.valueIndex;
                    },
                    set: function (e) {
                        this._viewModelInstanceValue.valueIndex = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "values", {
                    get: function () {
                        return this._viewModelInstanceValue.values;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e(this.value);
                }),
                t
            );
        })(H)),
        (Z = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                d(t, e),
                Object.defineProperty(t.prototype, "length", {
                    get: function () {
                        return this._viewModelInstanceValue.size;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.addInstance = function (e) {
                    null != e.runtimeInstance &&
                        (this._viewModelInstanceValue.addInstance(e.runtimeInstance),
                        e.addParent(this._parentViewModel));
                }),
                (t.prototype.addInstanceAt = function (e, t) {
                    return (
                        !!(
                            null != e.runtimeInstance &&
                            this._viewModelInstanceValue.addInstanceAt(e.runtimeInstance, t)
                        ) && (e.addParent(this._parentViewModel), !0)
                    );
                }),
                (t.prototype.removeInstance = function (e) {
                    null != e.runtimeInstance &&
                        (this._viewModelInstanceValue.removeInstance(e.runtimeInstance),
                        e.removeParent(this._parentViewModel));
                }),
                (t.prototype.removeInstanceAt = function (e) {
                    this._viewModelInstanceValue.removeInstanceAt(e);
                }),
                (t.prototype.instanceAt = function (e) {
                    var t = this._viewModelInstanceValue.instanceAt(e);
                    if (null != t) {
                        var r = new W(t, this._parentViewModel);
                        return (0, f.createFinalization)(r, t), r;
                    }
                    return null;
                }),
                (t.prototype.swap = function (e, t) {
                    this._viewModelInstanceValue.swap(e, t);
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e();
                }),
                t
            );
        })(H)),
        (Q = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                d(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function (e) {
                        this._viewModelInstanceValue.value = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.rgb = function (e, t, r) {
                    this._viewModelInstanceValue.rgb(e, t, r);
                }),
                (t.prototype.rgba = function (e, t, r, n) {
                    this._viewModelInstanceValue.argb(n, e, t, r);
                }),
                (t.prototype.argb = function (e, t, r, n) {
                    this._viewModelInstanceValue.argb(e, t, r, n);
                }),
                (t.prototype.alpha = function (e) {
                    this._viewModelInstanceValue.alpha(e);
                }),
                (t.prototype.opacity = function (e) {
                    this._viewModelInstanceValue.alpha(Math.round(255 * Math.max(0, Math.min(1, e))));
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e(this.value);
                }),
                t
            );
        })(H)),
        (ee = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                d(t, e),
                Object.defineProperty(t.prototype, "value", {
                    set: function (e) {
                        var t;
                        this._viewModelInstanceValue.value(null != (t = null == e ? void 0 : e.nativeImage) ? t : null);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e();
                }),
                t
            );
        })(H)),
        (et = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                d(t, e),
                Object.defineProperty(t.prototype, "value", {
                    set: function (e) {
                        var t, r;
                        (r = e.isBindableArtboard ? e : e.file.internalBindableArtboardFromArtboard(e.nativeArtboard)),
                            this._viewModelInstanceValue.value(
                                null != (t = null == r ? void 0 : r.nativeArtboard) ? t : null,
                            );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e();
                }),
                t
            );
        })(H)),
        (er = function (e) {
            return m(void 0, void 0, void 0, function () {
                return v(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, fetch(new Request(e))];
                        case 1:
                            return [4, t.sent().arrayBuffer()];
                        case 2:
                            return [2, t.sent()];
                    }
                });
            });
        }),
        (en = function (e) {
            return "string" == typeof e ? [e] : e instanceof Array ? e : [];
        }),
        (eo = { EventManager: D, TaskQueueManager: L }),
        (ei = function (e) {
            return m(void 0, void 0, void 0, function () {
                var t, r;
                return v(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return [
                                4,
                                new Promise(function (t) {
                                    return S.getInstance(function (r) {
                                        r.decodeAudio(e, t);
                                    });
                                }),
                            ];
                        case 1:
                            return (
                                (t = n.sent()),
                                (r = new f.AudioWrapper(t)),
                                f.finalizationRegistry.register(r, t),
                                [2, r]
                            );
                    }
                });
            });
        }),
        (ea = function (e) {
            return m(void 0, void 0, void 0, function () {
                var t, r;
                return v(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return [
                                4,
                                new Promise(function (t) {
                                    return S.getInstance(function (r) {
                                        r.decodeImage(e, t);
                                    });
                                }),
                            ];
                        case 1:
                            return (
                                (t = n.sent()),
                                (r = new f.ImageWrapper(t)),
                                f.finalizationRegistry.register(r, t),
                                [2, r]
                            );
                    }
                });
            });
        }),
        (es = function (e) {
            return m(void 0, void 0, void 0, function () {
                var t, r;
                return v(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return [
                                4,
                                new Promise(function (t) {
                                    return S.getInstance(function (r) {
                                        r.decodeFont(e, t);
                                    });
                                }),
                            ];
                        case 1:
                            return (
                                (t = n.sent()),
                                (r = new f.FontWrapper(t)),
                                f.finalizationRegistry.register(r, t),
                                [2, r]
                            );
                    }
                });
            });
        }),
        ef
    );
})();
