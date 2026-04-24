e.exports = (() => {
    "use strict";
    var e,
        t,
        r,
        n,
        s,
        a,
        o,
        i,
        u,
        c,
        l,
        d,
        f,
        p,
        h,
        m,
        v,
        g,
        y,
        b,
        _,
        x,
        w,
        k,
        M,
        S,
        E,
        L,
        T,
        D,
        O,
        C,
        P,
        A,
        R,
        j,
        I,
        N,
        Y,
        F,
        H,
        z,
        B,
        U,
        W,
        $,
        V,
        K,
        q,
        G,
        J,
        X,
        Z,
        Q,
        ee,
        et,
        er,
        en,
        es,
        ea,
        eo,
        ei,
        eu = [
            ,
            (e, t, r) => {
                var n;
                r.r(t), r.d(t, { default: () => s });
                let s =
                    ((n = "u" > typeof document ? document.currentScript?.src : void 0),
                    function (e = {}) {
                        var t,
                            r,
                            s,
                            a,
                            o,
                            i,
                            u,
                            c = new Promise((e, t) => {
                                (i = e), (u = t);
                            }),
                            l = "object" == typeof window,
                            d = "function" == typeof importScripts;
                        function f() {
                            function e(e) {
                                let a = n;
                                (r = t = 0),
                                    (n = new Map()),
                                    a.forEach((t) => {
                                        try {
                                            t(e);
                                        } catch (e) {
                                            console.error(e);
                                        }
                                    }),
                                    this.nb(),
                                    s && s.Pb();
                            }
                            let t = 0,
                                r = 0,
                                n = new Map(),
                                s = null,
                                a = null;
                            (this.requestAnimationFrame = function (s) {
                                t ||= requestAnimationFrame(e.bind(this));
                                let a = ++r;
                                return n.set(a, s), a;
                            }),
                                (this.cancelAnimationFrame = function (e) {
                                    n.delete(e), t && 0 == n.size && (cancelAnimationFrame(t), (t = 0));
                                }),
                                (this.Nb = function (e) {
                                    a && (document.body.remove(a), (a = null)),
                                        e ||
                                            (((a = document.createElement("div")).style.backgroundColor = "black"),
                                            (a.style.position = "fixed"),
                                            (a.style.right = 0),
                                            (a.style.top = 0),
                                            (a.style.color = "white"),
                                            (a.style.padding = "4px"),
                                            (a.innerHTML = "RIVE FPS"),
                                            (e = function (e) {
                                                a.innerHTML = "RIVE FPS " + e.toFixed(1);
                                            }),
                                            document.body.appendChild(a)),
                                        (s = new (function () {
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
                                    a && (document.body.remove(a), (a = null)), (s = null);
                                }),
                                (this.nb = function () {});
                        }
                        function p(e) {
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
                                        var r, n, s;
                                        let a = e.ptrToAsset(t);
                                        return (
                                            "" !== (t = a.cdnUuid) &&
                                            ((r = a.cdnBaseUrl + "/" + t),
                                            (n = (e) => {
                                                a.decode(new Uint8Array(e.response));
                                            }),
                                            ((s = new XMLHttpRequest()).responseType = "arraybuffer"),
                                            (s.onreadystatechange = function () {
                                                4 == s.readyState && 200 == s.status && n(s);
                                            }),
                                            s.open("GET", r, !0),
                                            s.send(null),
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
                            let s = e.computeAlignment;
                            e.computeAlignment = function (e, t, r, n, a = 1) {
                                return s.call(this, e, t, r, n, a);
                            };
                        };
                        let m =
                                "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(
                                    " ",
                                ),
                            v = new (function () {
                                function e() {
                                    if (!t) {
                                        let c;
                                        var e = document.createElement("canvas"),
                                            o = {
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
                                            if (((c = e.getContext("webgl", o)), (r = 1), !c))
                                                return (
                                                    console.log("No WebGL support. Image mesh will not be drawn."), !1
                                                );
                                        } else if ((c = e.getContext("webgl2", o))) r = 2;
                                        else {
                                            if (!(c = e.getContext("webgl", o)))
                                                return (
                                                    console.log("No WebGL support. Image mesh will not be drawn."), !1
                                                );
                                            r = 1;
                                        }
                                        function i(e, t, r) {
                                            if (
                                                ((t = c.createShader(t)),
                                                c.shaderSource(t, r),
                                                c.compileShader(t),
                                                0 < ((r = c.getShaderInfoLog(t)) || "").length)
                                            )
                                                throw r;
                                            c.attachShader(e, t);
                                        }
                                        if (
                                            ((n = Math.min(
                                                (c = new Proxy(c, {
                                                    get: (e, t) =>
                                                        e.isContextLost()
                                                            ? (u ||
                                                                  (console.error(
                                                                      "Cannot render the mesh because the GL Context was lost. Tried to invoke ",
                                                                      t,
                                                                  ),
                                                                  (u = !0)),
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
                                                        u ||
                                                            (console.error(
                                                                "Cannot render the mesh because the GL Context was lost. Tried to set property " +
                                                                    t,
                                                            ),
                                                            (u = !0));
                                                    },
                                                })).getParameter(c.MAX_RENDERBUFFER_SIZE),
                                                c.getParameter(c.MAX_TEXTURE_SIZE),
                                            )),
                                            i(
                                                (e = c.createProgram()),
                                                c.VERTEX_SHADER,
                                                "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }",
                                            ),
                                            i(
                                                e,
                                                c.FRAGMENT_SHADER,
                                                "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }",
                                            ),
                                            c.bindAttribLocation(e, 0, "vertex"),
                                            c.bindAttribLocation(e, 1, "uv"),
                                            c.linkProgram(e),
                                            0 < ((o = c.getProgramInfoLog(e)) || "").trim().length)
                                        )
                                            throw o;
                                        (s = c.getUniformLocation(e, "mat")),
                                            (a = c.getUniformLocation(e, "translate")),
                                            c.useProgram(e),
                                            c.bindBuffer(c.ARRAY_BUFFER, c.createBuffer()),
                                            c.enableVertexAttribArray(0),
                                            c.enableVertexAttribArray(1),
                                            c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, c.createBuffer()),
                                            c.uniform1i(c.getUniformLocation(e, "image"), 0),
                                            c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                                            (t = c);
                                    }
                                    return !0;
                                }
                                let t = null,
                                    r = 0,
                                    n = 0,
                                    s = null,
                                    a = null,
                                    o = 0,
                                    i = 0,
                                    u = !1;
                                e(),
                                    (this.ac = function () {
                                        return e(), n;
                                    }),
                                    (this.Jb = function (e) {
                                        t.deleteTexture && t.deleteTexture(e);
                                    }),
                                    (this.Ib = function (n) {
                                        if (!e()) return null;
                                        let s = t.createTexture();
                                        return s
                                            ? (t.bindTexture(t.TEXTURE_2D, s),
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
                                              s)
                                            : null;
                                    });
                                let c = new p(8),
                                    l = new p(8),
                                    d = new p(10),
                                    f = new p(10);
                                (this.Mb = function (r, n, u, p, h) {
                                    if (e()) {
                                        var m = c.push(r),
                                            v = l.push(n);
                                        if (t.canvas) {
                                            for (var g of ((t.canvas.width != m || t.canvas.height != v) &&
                                                ((t.canvas.width = m), (t.canvas.height = v)),
                                            t.viewport(0, v - n, r, n),
                                            t.disable(t.SCISSOR_TEST),
                                            t.clearColor(0, 0, 0, 0),
                                            t.clear(t.COLOR_BUFFER_BIT),
                                            t.enable(t.SCISSOR_TEST),
                                            u.sort((e, t) => t.ub - e.ub),
                                            (m = d.push(p)),
                                            o != m && (t.bufferData(t.ARRAY_BUFFER, 8 * m, t.DYNAMIC_DRAW), (o = m)),
                                            (m = 0),
                                            u))
                                                t.bufferSubData(t.ARRAY_BUFFER, m, g.Sa), (m += 4 * g.Sa.length);
                                            for (var y of (console.assert(m == 4 * p), u))
                                                t.bufferSubData(t.ARRAY_BUFFER, m, y.Ab), (m += 4 * y.Ab.length);
                                            for (var b of (console.assert(m == 8 * p),
                                            (m = f.push(h)),
                                            i != m &&
                                                (t.bufferData(t.ELEMENT_ARRAY_BUFFER, 2 * m, t.DYNAMIC_DRAW), (i = m)),
                                            (g = 0),
                                            u))
                                                t.bufferSubData(t.ELEMENT_ARRAY_BUFFER, g, b.indices),
                                                    (g += 2 * b.indices.length);
                                            for (let e of (console.assert(g == 2 * h),
                                            (b = 0),
                                            (y = !0),
                                            (m = g = 0),
                                            u)) {
                                                e.image.Ia != b &&
                                                    (t.bindTexture(t.TEXTURE_2D, e.image.Ha || null), (b = e.image.Ia)),
                                                    e.fc
                                                        ? (t.scissor(e.Ya, v - e.Za - e.ib, e.tc, e.ib), (y = !0))
                                                        : y && (t.scissor(0, v - n, r, n), (y = !1)),
                                                    (u = 2 / r);
                                                let o = -2 / n;
                                                t.uniform4f(
                                                    s,
                                                    e.ga[0] * u * e.za,
                                                    e.ga[1] * o * e.Aa,
                                                    e.ga[2] * u * e.za,
                                                    e.ga[3] * o * e.Aa,
                                                ),
                                                    t.uniform2f(
                                                        a,
                                                        e.ga[4] * u * e.za + u * (e.Ya - e.bc * e.za) - 1,
                                                        e.ga[5] * o * e.Aa + o * (e.Za - e.cc * e.Aa) + 1,
                                                    ),
                                                    t.vertexAttribPointer(0, 2, t.FLOAT, !1, 0, m),
                                                    t.vertexAttribPointer(1, 2, t.FLOAT, !1, 0, m + 4 * p),
                                                    t.drawElements(t.TRIANGLES, e.indices.length, t.UNSIGNED_SHORT, g),
                                                    (m += 4 * e.Sa.length),
                                                    (g += 2 * e.indices.length);
                                            }
                                            console.assert(m == 4 * p), console.assert(g == 2 * h);
                                        }
                                    }
                                }),
                                    (this.canvas = function () {
                                        return e() && t.canvas;
                                    });
                            })(),
                            g = e.onRuntimeInitialized;
                        e.onRuntimeInitialized = function () {
                            function t(e) {
                                switch (e) {
                                    case l.srcOver:
                                        return "source-over";
                                    case l.screen:
                                        return "screen";
                                    case l.overlay:
                                        return "overlay";
                                    case l.darken:
                                        return "darken";
                                    case l.lighten:
                                        return "lighten";
                                    case l.colorDodge:
                                        return "color-dodge";
                                    case l.colorBurn:
                                        return "color-burn";
                                    case l.hardLight:
                                        return "hard-light";
                                    case l.softLight:
                                        return "soft-light";
                                    case l.difference:
                                        return "difference";
                                    case l.exclusion:
                                        return "exclusion";
                                    case l.multiply:
                                        return "multiply";
                                    case l.hue:
                                        return "hue";
                                    case l.saturation:
                                        return "saturation";
                                    case l.color:
                                        return "color";
                                    case l.luminosity:
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
                                for (let e of (0 < M.length &&
                                    (v.Mb(k.drawWidth(), k.drawHeight(), M, S, E),
                                    (M = []),
                                    (E = S = 0),
                                    k.reset(512, 512)),
                                w)) {
                                    for (let t of e.H) t();
                                    e.H = [];
                                }
                                w.clear();
                            }
                            g && g();
                            var s = e.RenderPaintStyle;
                            let a = e.RenderPath,
                                o = e.RenderPaint,
                                i = e.Renderer,
                                u = e.StrokeCap,
                                c = e.StrokeJoin,
                                l = e.BlendMode,
                                d = s.fill,
                                p = s.stroke,
                                h = e.FillRule.evenOdd,
                                y = 1;
                            var b = e.RenderImage.extend("CanvasRenderImage", {
                                    __construct: function ({ ka: e, va: t } = {}) {
                                        this.__parent.__construct.call(this),
                                            (this.Ia = y),
                                            (y = (y + 1) & 0x7fffffff || 1),
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
                                _ = a.extend("CanvasRenderPath", {
                                    __construct: function () {
                                        this.__parent.__construct.call(this), (this.T = new Path2D());
                                    },
                                    rewind: function () {
                                        this.T = new Path2D();
                                    },
                                    addPath: function (e, t, r, n, s, a, o) {
                                        var i = this.T,
                                            u = i.addPath;
                                        e = e.T;
                                        let c = new DOMMatrix();
                                        (c.a = t),
                                            (c.b = r),
                                            (c.c = n),
                                            (c.d = s),
                                            (c.e = a),
                                            (c.f = o),
                                            u.call(i, e, c);
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
                                    cubicTo: function (e, t, r, n, s, a) {
                                        this.T.bezierCurveTo(e, t, r, n, s, a);
                                    },
                                    close: function () {
                                        this.T.closePath();
                                    },
                                }),
                                x = o.extend("CanvasRenderPaint", {
                                    color: function (e) {
                                        this.Wa = r(e);
                                    },
                                    thickness: function (e) {
                                        this.Fb = e;
                                    },
                                    join: function (e) {
                                        switch (e) {
                                            case c.miter:
                                                this.Ga = "miter";
                                                break;
                                            case c.round:
                                                this.Ga = "round";
                                                break;
                                            case c.bevel:
                                                this.Ga = "bevel";
                                        }
                                    },
                                    cap: function (e) {
                                        switch (e) {
                                            case u.butt:
                                                this.Fa = "butt";
                                                break;
                                            case u.round:
                                                this.Fa = "round";
                                                break;
                                            case u.square:
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
                                        let s = this.Eb;
                                        var a = this.Wa,
                                            o = this.ia;
                                        if (((e.globalCompositeOperation = this.Bb), null != o)) {
                                            a = o.wb;
                                            var i = o.xb;
                                            let t = o.bb;
                                            var u = o.cb;
                                            let n = o.Pa;
                                            o.$b
                                                ? ((o = t - a),
                                                  (u -= i),
                                                  (a = e.createRadialGradient(a, i, 0, a, i, Math.sqrt(o * o + u * u))))
                                                : (a = e.createLinearGradient(a, i, t, u));
                                            for (let e = 0, t = n.length; e < t; e++)
                                                (i = n[e]), a.addColorStop(i.stop, r(i.color));
                                            (this.Wa = a), (this.ia = null);
                                        }
                                        switch (s) {
                                            case p:
                                                (e.strokeStyle = a),
                                                    (e.lineWidth = this.Fb),
                                                    (e.lineCap = this.Fa),
                                                    (e.lineJoin = this.Ga),
                                                    e.stroke(t);
                                                break;
                                            case d:
                                                (e.fillStyle = a), e.fill(t, n);
                                        }
                                    },
                                });
                            let w = new Set(),
                                k = null,
                                M = [],
                                S = 0,
                                E = 0;
                            var L = (e.CanvasRenderer = i.extend("Renderer", {
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
                                transform: function (e, t, r, n, s, a) {
                                    let o = this.S,
                                        i = o.length - 6;
                                    o.splice(
                                        i,
                                        6,
                                        o[i] * e + o[i + 2] * t,
                                        o[i + 1] * e + o[i + 3] * t,
                                        o[i] * r + o[i + 2] * n,
                                        o[i + 1] * r + o[i + 3] * n,
                                        o[i] * s + o[i + 2] * a + o[i + 4],
                                        o[i + 1] * s + o[i + 3] * a + o[i + 5],
                                    ),
                                        this.H.push(this.B.transform.bind(this.B, e, t, r, n, s, a));
                                },
                                rotate: function (e) {
                                    let t = Math.sin(e);
                                    (e = Math.cos(e)), this.transform(e, t, -t, e, 0, 0);
                                },
                                _drawPath: function (e, t) {
                                    this.H.push(t.draw.bind(t, this.B, e.T, e.Ua === h ? "evenodd" : "nonzero"));
                                },
                                _drawRiveImage: function (e, r, n, s) {
                                    var a = e.Cb;
                                    if (a) {
                                        var o = this.B,
                                            i = t(n);
                                        this.H.push(function () {
                                            (o.globalCompositeOperation = i),
                                                (o.globalAlpha = s),
                                                o.drawImage(a, 0, 0),
                                                (o.globalAlpha = 1);
                                        });
                                    }
                                },
                                _getMatrix: function (e) {
                                    let t = this.S,
                                        r = t.length - 6;
                                    for (let n = 0; 6 > n; ++n) e[n] = t[r + n];
                                },
                                _drawImageMesh: function (r, s, a, o, i, u, c, l, d, f, p) {
                                    s = this.B.canvas.width;
                                    var h = this.B.canvas.height;
                                    let m = f - l,
                                        g = p - d;
                                    (l = Math.max(l, 0)), (d = Math.max(d, 0));
                                    let y = (f = Math.min(f, s)) - l,
                                        b = (p = Math.min(p, h)) - d;
                                    if (
                                        (console.assert(y <= Math.min(m, s)),
                                        console.assert(b <= Math.min(g, h)),
                                        !(0 >= y || 0 >= b))
                                    ) {
                                        (f = y < m || b < g), (s = p = 1);
                                        var _ = Math.ceil(y * p),
                                            x = Math.ceil(b * s);
                                        (h = v.ac()),
                                            _ > h && ((p *= h / _), (_ = h)),
                                            x > h && ((s *= h / x), (x = h)),
                                            k || (k = new e.DynamicRectanizer(h)).reset(512, 512),
                                            0 > (h = k.addRect(_, x)) &&
                                                (n(), w.add(this), console.assert(0 <= (h = k.addRect(_, x))));
                                        var L = 65535 & h,
                                            T = h >> 16;
                                        M.push({
                                            ga: this.S.slice(this.S.length - 6),
                                            image: r,
                                            Ya: L,
                                            Za: T,
                                            bc: l,
                                            cc: d,
                                            tc: _,
                                            ib: x,
                                            za: p,
                                            Aa: s,
                                            Sa: new Float32Array(i),
                                            Ab: new Float32Array(u),
                                            indices: new Uint16Array(c),
                                            fc: f,
                                            ub: (r.Ia << 1) | !!f,
                                        }),
                                            (S += i.length),
                                            (E += c.length);
                                        var D = this.B,
                                            O = t(a);
                                        this.H.push(function () {
                                            D.save(),
                                                D.resetTransform(),
                                                (D.globalCompositeOperation = O),
                                                (D.globalAlpha = o);
                                            let e = v.canvas();
                                            e && D.drawImage(e, L, T, _, x, l, d, y, b), D.restore();
                                        });
                                    }
                                },
                                _clipPath: function (e) {
                                    this.H.push(this.B.clip.bind(this.B, e.T, e.Ua === h ? "evenodd" : "nonzero"));
                                },
                                clear: function () {
                                    w.add(this),
                                        this.H.push(this.B.clearRect.bind(this.B, 0, 0, this.Ta.width, this.Ta.height));
                                },
                                flush: function () {},
                                translate: function (e, t) {
                                    this.transform(1, 0, 0, 1, e, t);
                                },
                            }));
                            (e.makeRenderer = function (e) {
                                let t = new L(e),
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
                                    set(e, n, s) {
                                        if (n in r)
                                            return (
                                                t.H.push(() => {
                                                    r[n] = s;
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
                                        return new x();
                                    },
                                    makeRenderPath: function () {
                                        return new _();
                                    },
                                    makeRenderImage: function () {
                                        let e = D;
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
                            let T = e.load,
                                D = null;
                            e.load = function (t, r, n = !0) {
                                let s = new e.FallbackFileAssetLoader();
                                return (
                                    void 0 !== r && s.addLoader(r),
                                    n && ((r = new e.CDNFileAssetLoader()), s.addLoader(r)),
                                    new Promise(function (e) {
                                        let r = null;
                                        (D = {
                                            total: 0,
                                            loaded: 0,
                                            ready: function () {
                                                e(r);
                                            },
                                        }),
                                            (r = T(t, s)),
                                            0 == D.total && e(r);
                                    })
                                );
                            };
                            let O = e.RendererWrapper.prototype.align;
                            (e.RendererWrapper.prototype.align = function (e, t, r, n, s = 1) {
                                O.call(this, e, t, r, n, s);
                            }),
                                (e.requestAnimationFrame = (s = new f()).requestAnimationFrame.bind(s)),
                                (e.cancelAnimationFrame = s.cancelAnimationFrame.bind(s)),
                                (e.enableFPSCounter = s.Nb.bind(s)),
                                (e.disableFPSCounter = s.Kb),
                                (s.nb = n),
                                (e.resolveAnimationFrame = n),
                                (e.cleanup = function () {
                                    k && k.delete();
                                });
                        };
                        var y,
                            b,
                            _ = Object.assign({}, e),
                            x = "./this.program",
                            w = "";
                        (l || d) &&
                            (d
                                ? (w = self.location.href)
                                : "u" > typeof document && document.currentScript && (w = document.currentScript.src),
                            n && (w = n),
                            (w = w.startsWith("blob:")
                                ? ""
                                : w.substr(0, w.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
                            d &&
                                (b = (e) => {
                                    var t = new XMLHttpRequest();
                                    return (
                                        t.open("GET", e, !1),
                                        (t.responseType = "arraybuffer"),
                                        t.send(null),
                                        new Uint8Array(t.response)
                                    );
                                }),
                            (y = (e, t, r) => {
                                if ($(e)) {
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
                        var k = e.print || console.log.bind(console),
                            M = e.printErr || console.error.bind(console);
                        Object.assign(e, _),
                            (_ = null),
                            e.thisProgram && (x = e.thisProgram),
                            e.wasmBinary && (S = e.wasmBinary);
                        var S,
                            E,
                            L,
                            T,
                            D,
                            O,
                            C,
                            P,
                            A,
                            R,
                            j = !1;
                        function I() {
                            var t = E.buffer;
                            (e.HEAP8 = L = new Int8Array(t)),
                                (e.HEAP16 = D = new Int16Array(t)),
                                (e.HEAPU8 = T = new Uint8Array(t)),
                                (e.HEAPU16 = O = new Uint16Array(t)),
                                (e.HEAP32 = C = new Int32Array(t)),
                                (e.HEAPU32 = P = new Uint32Array(t)),
                                (e.HEAPF32 = A = new Float32Array(t)),
                                (e.HEAPF64 = R = new Float64Array(t));
                        }
                        var N = [],
                            Y = [],
                            F = [],
                            H = 0,
                            z = null,
                            B = null;
                        function U(t) {
                            throw (
                                (e.onAbort?.(t),
                                M((t = "Aborted(" + t + ")")),
                                (j = !0),
                                (t = new WebAssembly.RuntimeError(t + ". Build with -sASSERTIONS for more info.")),
                                u(t),
                                t)
                            );
                        }
                        var W,
                            $ = (e) => e.startsWith("file://");
                        function V(e) {
                            if (e == W && S) return new Uint8Array(S);
                            if (b) return b(e);
                            throw "both async and sync fetching of the wasm failed";
                        }
                        function K(e, t, r) {
                            return (
                                S
                                    ? Promise.resolve().then(() => V(e))
                                    : new Promise((t, r) => {
                                          y(
                                              e,
                                              (e) => t(new Uint8Array(e)),
                                              () => {
                                                  try {
                                                      t(V(e));
                                                  } catch (e) {
                                                      r(e);
                                                  }
                                              },
                                          );
                                      })
                            )
                                .then((e) => WebAssembly.instantiate(e, t))
                                .then(r, (e) => {
                                    M(`failed to asynchronously prepare wasm: ${e}`), U(e);
                                });
                        }
                        var q,
                            G,
                            J = {
                                464256: (e, t, r, n, s) => {
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
                                            (window.h.fa.vb = s);
                                        let a = window.h;
                                        (a.D = []),
                                            (a.rc = function (e) {
                                                for (var t = 0; t < a.D.length; ++t)
                                                    if (null == a.D[t]) return (a.D[t] = e), t;
                                                return a.D.push(e), a.D.length - 1;
                                            }),
                                            (a.zb = function (e) {
                                                for (a.D[e] = null; 0 < a.D.length; )
                                                    if (null == a.D[a.D.length - 1]) a.D.pop();
                                                    else break;
                                            }),
                                            (a.Oc = function (e) {
                                                for (var t = 0; t < a.D.length; ++t) if (a.D[t] == e) return a.zb(t);
                                            }),
                                            (a.pa = function (e) {
                                                return a.D[e];
                                            }),
                                            (a.Ra = ["touchend", "click"]),
                                            (a.unlock = function () {
                                                for (var e = 0; e < a.D.length; ++e) {
                                                    var t = a.D[e];
                                                    null != t &&
                                                        null != t.K &&
                                                        t.state === a.fa.vb &&
                                                        t.K.resume().then(
                                                            () => {
                                                                rs(t.ob);
                                                            },
                                                            (e) => {
                                                                console.error("Failed to resume audiocontext", e);
                                                            },
                                                        );
                                                }
                                                a.Ra.map(function (e) {
                                                    document.removeEventListener(e, a.unlock, !0);
                                                });
                                            }),
                                            a.Ra.map(function (e) {
                                                document.addEventListener(e, a.unlock, !0);
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
                                467013: (e, t, r, n, s, a) => {
                                    if (void 0 === window.h) return -1;
                                    var o = {},
                                        i = {};
                                    return (
                                        e == window.h.I.wa && 0 != r && (i.sampleRate = r),
                                        (o.K = new (window.AudioContext || window.webkitAudioContext)(i)),
                                        o.K.suspend(),
                                        (o.state = window.h.fa.stopped),
                                        (r = 0),
                                        e != window.h.I.wa && (r = t),
                                        (o.Y = o.K.createScriptProcessor(n, r, t)),
                                        (o.Y.onaudioprocess = function (r) {
                                            if (
                                                ((null == o.qa || 0 == o.qa.length) &&
                                                    (o.qa = new Float32Array(A.buffer, s, n * t)),
                                                e == window.h.I.capture || e == window.h.I.Ja)
                                            ) {
                                                for (var i = 0; i < t; i += 1)
                                                    for (
                                                        var u = r.inputBuffer.getChannelData(i), c = o.qa, l = 0;
                                                        l < n;
                                                        l += 1
                                                    )
                                                        c[l * t + i] = u[l];
                                                ra(a, n, s);
                                            }
                                            if (e == window.h.I.wa || e == window.h.I.Ja)
                                                for (ro(a, n, s), i = 0; i < r.outputBuffer.numberOfChannels; ++i)
                                                    for (
                                                        u = r.outputBuffer.getChannelData(i), c = o.qa, l = 0;
                                                        l < n;
                                                        l += 1
                                                    )
                                                        u[l] = c[l * t + i];
                                            else
                                                for (i = 0; i < r.outputBuffer.numberOfChannels; ++i)
                                                    r.outputBuffer.getChannelData(i).fill(0);
                                        }),
                                        (e != window.h.I.capture && e != window.h.I.Ja) ||
                                            navigator.mediaDevices
                                                .getUserMedia({ audio: !0, video: !1 })
                                                .then(function (e) {
                                                    (o.Ba = o.K.createMediaStreamSource(e)),
                                                        o.Ba.connect(o.Y),
                                                        o.Y.connect(o.K.destination);
                                                })
                                                .catch(function (e) {
                                                    console.log("Failed to get user media: " + e);
                                                }),
                                        e == window.h.I.wa && o.Y.connect(o.K.destination),
                                        (o.ob = a),
                                        window.h.rc(o)
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
                            var e = C[e0 >> 2];
                            return (e0 += 4), e;
                        }
                        var Q = (e, t) => {
                                for (var r = 0, n = e.length - 1; 0 <= n; n--) {
                                    var s = e[n];
                                    "." === s
                                        ? e.splice(n, 1)
                                        : ".." === s
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
                            es = (...e) => {
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
                            ea = "u" > typeof TextDecoder ? new TextDecoder("utf8") : void 0,
                            eo = (e, t, r) => {
                                var n = t + r;
                                for (r = t; e[r] && !(r >= n); ) ++r;
                                if (16 < r - t && e.buffer && ea) return ea.decode(e.subarray(t, r));
                                for (n = ""; t < r; ) {
                                    var s = e[t++];
                                    if (128 & s) {
                                        var a = 63 & e[t++];
                                        if (192 == (224 & s)) n += String.fromCharCode(((31 & s) << 6) | a);
                                        else {
                                            var o = 63 & e[t++];
                                            65536 >
                                            (s =
                                                224 == (240 & s)
                                                    ? ((15 & s) << 12) | (a << 6) | o
                                                    : ((7 & s) << 18) | (a << 12) | (o << 6) | (63 & e[t++]))
                                                ? (n += String.fromCharCode(s))
                                                : ((s -= 65536),
                                                  (n += String.fromCharCode(55296 | (s >> 10), 56320 | (1023 & s))));
                                        }
                                    } else n += String.fromCharCode(s);
                                }
                                return n;
                            },
                            ei = [],
                            eu = (e) => {
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
                            ec = (e, t, r, n) => {
                                if (!(0 < n)) return 0;
                                var s = r;
                                n = r + n - 1;
                                for (var a = 0; a < e.length; ++a) {
                                    var o = e.charCodeAt(a);
                                    if (
                                        (55296 <= o &&
                                            57343 >= o &&
                                            (o = (65536 + ((1023 & o) << 10)) | (1023 & e.charCodeAt(++a))),
                                        127 >= o)
                                    ) {
                                        if (r >= n) break;
                                        t[r++] = o;
                                    } else {
                                        if (2047 >= o) {
                                            if (r + 1 >= n) break;
                                            t[r++] = 192 | (o >> 6);
                                        } else {
                                            if (65535 >= o) {
                                                if (r + 2 >= n) break;
                                                t[r++] = 224 | (o >> 12);
                                            } else {
                                                if (r + 3 >= n) break;
                                                (t[r++] = 240 | (o >> 18)), (t[r++] = 128 | ((o >> 12) & 63));
                                            }
                                            t[r++] = 128 | ((o >> 6) & 63);
                                        }
                                        t[r++] = 128 | (63 & o);
                                    }
                                }
                                return (t[r] = 0), r - s;
                            };
                        function el(e, t) {
                            var r = Array(eu(e) + 1);
                            return (e = ec(e, r, 0, r.length)), t && (r.length = e), r;
                        }
                        var ed = [];
                        function ef(e, t) {
                            var r, n;
                            (ed[e] = { input: [], G: [], V: t }), (r = e), (n = ep), (eg[r] = { m: n });
                        }
                        var ep = {
                            open(e) {
                                var t = ed[e.node.xa];
                                if (!t) throw new ew(43);
                                (e.s = t), (e.seekable = !1);
                            },
                            close(e) {
                                e.s.V.oa(e.s);
                            },
                            oa(e) {
                                e.s.V.oa(e.s);
                            },
                            read(e, t, r, n) {
                                if (!e.s || !e.s.V.hb) throw new ew(60);
                                for (var s = 0, a = 0; a < n; a++) {
                                    try {
                                        var o = e.s.V.hb(e.s);
                                    } catch (e) {
                                        throw new ew(29);
                                    }
                                    if (void 0 === o && 0 === s) throw new ew(6);
                                    if (null == o) break;
                                    s++, (t[r + a] = o);
                                }
                                return s && (e.node.timestamp = Date.now()), s;
                            },
                            write(e, t, r, n) {
                                if (!e.s || !e.s.V.Ma) throw new ew(60);
                                try {
                                    for (var s = 0; s < n; s++) e.s.V.Ma(e.s, t[r + s]);
                                } catch (e) {
                                    throw new ew(29);
                                }
                                return n && (e.node.timestamp = Date.now()), s;
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
                                    if (24576 == (61440 & r) || 4096 == (61440 & r)) throw new ew(63);
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
                                                $a: { node: { X: em.j.X, P: em.j.P }, stream: eI },
                                            }),
                                        16384 == (61440 & (r = eO(e, t, r, n)).mode)
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
                                        throw ek[44];
                                    },
                                    ta: (e, t, r, n) => em.createNode(e, t, r, n),
                                    sb(e, t, r) {
                                        if (16384 == (61440 & e.mode)) {
                                            try {
                                                var n = eD(t, r);
                                            } catch (e) {}
                                            if (n) for (var s in n.l) throw new ew(55);
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
                                            n = eD(e, t);
                                        for (r in n.l) throw new ew(55);
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
                                        if (40960 != (61440 & e.mode)) throw new ew(28);
                                        return e.link;
                                    },
                                },
                                m: {
                                    read(e, t, r, n, s) {
                                        var a = e.node.l;
                                        if (s >= e.node.v) return 0;
                                        if (8 < (e = Math.min(e.node.v - s, n)) && a.subarray)
                                            t.set(a.subarray(s, s + e), r);
                                        else for (n = 0; n < e; n++) t[r + n] = a[s + n];
                                        return e;
                                    },
                                    write(e, t, r, n, s, a) {
                                        if ((t.buffer === L.buffer && (a = !1), !n)) return 0;
                                        if (
                                            (((e = e.node).timestamp = Date.now()),
                                            t.subarray && (!e.l || e.l.subarray))
                                        ) {
                                            if (a) return (e.l = t.subarray(r, r + n)), (e.v = n);
                                            if (0 === e.v && 0 === s) return (e.l = t.slice(r, r + n)), (e.v = n);
                                            if (s + n <= e.v) return e.l.set(t.subarray(r, r + n), s), n;
                                        }
                                        if ((eh(e, s + n), e.l.subarray && t.subarray))
                                            e.l.set(t.subarray(r, r + n), s);
                                        else for (a = 0; a < n; a++) e.l[s + a] = t[r + a];
                                        return (e.v = Math.max(e.v, s + n)), n;
                                    },
                                    aa(e, t, r) {
                                        if (
                                            (1 === r
                                                ? (t += e.position)
                                                : 2 === r && 32768 == (61440 & e.node.mode) && (t += e.node.v),
                                            0 > t)
                                        )
                                            throw new ew(28);
                                        return t;
                                    },
                                    Xa(e, t, r) {
                                        eh(e.node, t + r), (e.node.v = Math.max(e.node.v, t + r));
                                    },
                                    kb(e, t, r, n, s) {
                                        if (32768 != (61440 & e.node.mode)) throw new ew(43);
                                        if (((e = e.node.l), 2 & s || e.buffer !== L.buffer))
                                            throw (
                                                ((0 < r || r + t < e.length) &&
                                                    (e = e.subarray
                                                        ? e.subarray(r, r + t)
                                                        : Array.prototype.slice.call(e, r, r + t)),
                                                (r = !0),
                                                U(),
                                                (t = void 0),
                                                new ew(48))
                                            );
                                        return (r = !1), (t = e.byteOffset), { o: t, uc: r };
                                    },
                                    mb: (e, t, r, n) => (em.m.write(e, t, 0, n, r, !1), 0),
                                },
                            },
                            ev = null,
                            eg = {},
                            ey = [],
                            eb = 1,
                            e_ = null,
                            ex = !0,
                            ew = class {
                                constructor(e) {
                                    (this.name = "ErrnoError"), (this.$ = e);
                                }
                            },
                            ek = {},
                            eM = class {
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
                            eS = class {
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
                        function eE(e, t = {}) {
                            if (!(e = es(e))) return { path: "", node: null };
                            if (8 < (t = Object.assign({ gb: !0, Oa: 0 }, t)).Oa) throw new ew(32);
                            e = e.split("/").filter((e) => !!e);
                            for (var r = ev, n = "/", s = 0; s < e.length; s++) {
                                var a = s === e.length - 1;
                                if (a && t.parent) break;
                                if (
                                    ((r = eD(r, e[s])),
                                    (n = ee(n + "/" + e[s])),
                                    r.ua && (!a || (a && t.gb)) && (r = r.ua.root),
                                    !a || t.fb)
                                ) {
                                    for (a = 0; 40960 == (61440 & r.mode); )
                                        if (
                                            ((r = (function (e) {
                                                if (!(e = eE(e).node)) throw new ew(44);
                                                if (!e.j.la) throw new ew(28);
                                                return es(eL(e.parent), e.j.la(e));
                                            })(n)),
                                            (r = eE((n = es(et(n), r)), { Oa: t.Oa + 1 }).node),
                                            40 < a++)
                                        )
                                            throw new ew(32);
                                }
                            }
                            return { path: n, node: r };
                        }
                        function eL(e) {
                            for (var t; ; ) {
                                if (e === e.parent)
                                    return (e = e.U.lb), t ? ("/" !== e[e.length - 1] ? `${e}/${t}` : e + t) : e;
                                (t = t ? `${e.name}/${t}` : e.name), (e = e.parent);
                            }
                        }
                        function eT(e, t) {
                            for (var r = 0, n = 0; n < t.length; n++) r = ((r << 5) - r + t.charCodeAt(n)) | 0;
                            return ((e + r) >>> 0) % e_.length;
                        }
                        function eD(e, t) {
                            var r = 16384 == (61440 & e.mode) ? ((r = eP(e, "x")) ? r : 2 * !e.j.ja) : 54;
                            if (r) throw new ew(r);
                            for (r = e_[eT(e.id, t)]; r; r = r.ec) {
                                var n = r.name;
                                if (r.parent.id === e.id && n === t) return r;
                            }
                            return e.j.ja(e, t);
                        }
                        function eO(e, t, r, n) {
                            return (t = eT((e = new eS(e, t, r, n)).parent.id, e.name)), (e.ec = e_[t]), (e_[t] = e);
                        }
                        function eC(e) {
                            var t = ["r", "w", "rw"][3 & e];
                            return 512 & e && (t += "w"), t;
                        }
                        function eP(e, t) {
                            return ex
                                ? 0
                                : (t.includes("r") && !(292 & e.mode)) ||
                                    (t.includes("w") && !(146 & e.mode)) ||
                                    (t.includes("x") && !(73 & e.mode))
                                  ? 2
                                  : 0;
                        }
                        function eA(e, t) {
                            try {
                                return eD(e, t), 20;
                            } catch (e) {}
                            return eP(e, "wx");
                        }
                        function eR(e) {
                            if (!(e = ey[e])) throw new ew(8);
                            return e;
                        }
                        function ej(e, t = -1) {
                            if (((e = Object.assign(new eM(), e)), -1 == t))
                                e: {
                                    for (t = 0; 4096 >= t; t++) if (!ey[t]) break e;
                                    throw new ew(33);
                                }
                            return (e.W = t), (ey[t] = e);
                        }
                        var eI = {
                            open(e) {
                                (e.m = eg[e.node.xa].m), e.m.open?.(e);
                            },
                            aa() {
                                throw new ew(70);
                            },
                        };
                        function eN(e, t) {
                            var r = "/" === t;
                            if (r && ev) throw new ew(10);
                            if (!r && t) {
                                var n = eE(t, { gb: !1 });
                                if (((t = n.path), (n = n.node).ua)) throw new ew(10);
                                if (16384 != (61440 & n.mode)) throw new ew(54);
                            }
                            (t = { type: e, Mc: {}, lb: t, dc: [] }),
                                ((e = e.U(t)).U = t),
                                (t.root = e),
                                r ? (ev = e) : n && ((n.ua = t), n.U && n.U.dc.push(t));
                        }
                        function eY(e, t, r) {
                            var n = eE(e, { parent: !0 }).node;
                            if (!(e = er(e)) || "." === e || ".." === e) throw new ew(28);
                            var s = eA(n, e);
                            if (s) throw new ew(s);
                            if (!n.j.ta) throw new ew(63);
                            return n.j.ta(n, e, t, r);
                        }
                        function eF(e) {
                            return eY(e, 16895, 0);
                        }
                        function eH(e, t, r) {
                            void 0 === r && ((r = t), (t = 438)), eY(e, 8192 | t, r);
                        }
                        function ez(e, t) {
                            if (!es(e)) throw new ew(44);
                            var r = eE(t, { parent: !0 }).node;
                            if (!r) throw new ew(44);
                            var n = eA(r, (t = er(t)));
                            if (n) throw new ew(n);
                            if (!r.j.Ca) throw new ew(63);
                            r.j.Ca(r, t, e);
                        }
                        function eB(t, r, n) {
                            if ("" === t) throw new ew(44);
                            if ("string" == typeof r) {
                                var s = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[r];
                                if (void 0 === s) throw Error(`Unknown file open mode: ${r}`);
                                r = s;
                            }
                            if (((n = 64 & r ? ((void 0 === n ? 438 : n) & 4095) | 32768 : 0), "object" == typeof t))
                                var a = t;
                            else {
                                t = ee(t);
                                try {
                                    a = eE(t, { fb: !(131072 & r) }).node;
                                } catch (e) {}
                            }
                            if (((s = !1), 64 & r))
                                if (a) {
                                    if (128 & r) throw new ew(20);
                                } else (a = eY(t, n, 0)), (s = !0);
                            if (!a) throw new ew(44);
                            if ((8192 == (61440 & a.mode) && (r &= -513), 65536 & r && 16384 != (61440 & a.mode)))
                                throw new ew(54);
                            if (
                                !s &&
                                (n = a
                                    ? 40960 == (61440 & a.mode)
                                        ? 32
                                        : 16384 == (61440 & a.mode) && ("r" !== eC(r) || 512 & r)
                                          ? 31
                                          : eP(a, eC(r))
                                    : 44)
                            )
                                throw new ew(n);
                            if (512 & r && !s) {
                                if (!(n = "string" == typeof (n = a) ? eE(n, { fb: !0 }).node : n).j.P)
                                    throw new ew(63);
                                if (16384 == (61440 & n.mode)) throw new ew(31);
                                if (32768 != (61440 & n.mode)) throw new ew(28);
                                if ((s = eP(n, "w"))) throw new ew(s);
                                n.j.P(n, { size: 0, timestamp: Date.now() });
                            }
                            return (
                                (r &= -131713),
                                (a = ej({
                                    node: a,
                                    path: eL(a),
                                    flags: r,
                                    seekable: !0,
                                    position: 0,
                                    m: a.m,
                                    sc: [],
                                    error: !1,
                                })).m.open && a.m.open(a),
                                !e.logReadFiles || 1 & r || t in (eK ||= {}) || (eK[t] = 1),
                                a
                            );
                        }
                        function eU(e, t, r) {
                            if (null === e.W) throw new ew(8);
                            if (!e.seekable || !e.m.aa) throw new ew(70);
                            if (0 != r && 1 != r && 2 != r) throw new ew(28);
                            (e.position = e.m.aa(e, t, r)), (e.sc = []);
                        }
                        function eW(e, t, r) {
                            e = ee("/dev/" + e);
                            var n,
                                s = ((n = 0), t && (n |= 365), r && (n |= 146), n);
                            eV ||= 64;
                            var a = eV++ << 8;
                            (eg[a] = {
                                m: {
                                    open(e) {
                                        e.seekable = !1;
                                    },
                                    close() {
                                        r?.buffer?.length && r(10);
                                    },
                                    read(e, r, n, s) {
                                        for (var a = 0, o = 0; o < s; o++) {
                                            try {
                                                var i = t();
                                            } catch (e) {
                                                throw new ew(29);
                                            }
                                            if (void 0 === i && 0 === a) throw new ew(6);
                                            if (null == i) break;
                                            a++, (r[n + o] = i);
                                        }
                                        return a && (e.node.timestamp = Date.now()), a;
                                    },
                                    write(e, t, n, s) {
                                        for (var a = 0; a < s; a++)
                                            try {
                                                r(t[n + a]);
                                            } catch (e) {
                                                throw new ew(29);
                                            }
                                        return s && (e.node.timestamp = Date.now()), a;
                                    },
                                },
                            }),
                                eH(e, s, a);
                        }
                        var e$,
                            eV,
                            eK,
                            eq,
                            eG,
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
                            e6 = (e) => {
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
                            e5 = (e) => {
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
                                for (var t = ""; T[e]; ) t += eJ[T[e++]];
                                return t;
                            },
                            e9 = [],
                            e7 = () => {
                                for (; e9.length; ) {
                                    var e = e9.pop();
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
                            ts = (e, t) => {
                                var r = tr[e];
                                if (void 0 === r) throw ((e = `${t} has unknown type ${tn(e)}`), new eq(e));
                                return r;
                            },
                            ta = () => {},
                            to = !1,
                            ti = (e, t, r) =>
                                t === r ? e : void 0 === r.C || null === (e = ti(e, t, r.C)) ? null : r.Lb(e),
                            tu = {},
                            tc = (e, t) => {
                                if (!t.u || !t.o) throw new eZ("makeClassHandle requires ptr and ptrType");
                                if (!!t.J != !!t.F) throw new eZ("Both smartPtrType and smartPtr must be specified");
                                return (
                                    (t.count = { value: 1 }), tl(Object.create(e, { g: { value: t, writable: !0 } }))
                                );
                            },
                            tl = (e) =>
                                "u" < typeof FinalizationRegistry
                                    ? ((tl = (e) => e), e)
                                    : ((to = new FinalizationRegistry((e) => {
                                          (e = e.g),
                                              --e.count.value,
                                              0 === e.count.value && (e.F ? e.J.O(e.F) : e.u.i.O(e.o));
                                      })),
                                      (tl = (e) => {
                                          var t = e.g;
                                          return t.F && to.register(e, { g: t }, e), e;
                                      }),
                                      (ta = (e) => {
                                          to.unregister(e);
                                      }),
                                      tl(e)),
                            td = {},
                            tf = (e) => {
                                for (; e.length; ) {
                                    var t = e.pop();
                                    e.pop()(t);
                                }
                            };
                        function tp(e) {
                            return this.fromWireType(P[e >> 2]);
                        }
                        var th = {},
                            tm = {},
                            tv = (e, t, r) => {
                                function n(t) {
                                    if ((t = r(t)).length !== e.length) throw new eZ("Mismatched type converter count");
                                    for (var n = 0; n < e.length; ++n) tg(e[n], t[n]);
                                }
                                e.forEach(function (e) {
                                    tm[e] = t;
                                });
                                var s = Array(t.length),
                                    a = [],
                                    o = 0;
                                t.forEach((e, t) => {
                                    tr.hasOwnProperty(e)
                                        ? (s[t] = tr[e])
                                        : (a.push(e),
                                          th.hasOwnProperty(e) || (th[e] = []),
                                          th[e].push(() => {
                                              (s[t] = tr[e]), ++o === a.length && n(s);
                                          }));
                                }),
                                    0 === a.length && n(s);
                            };
                        function tg(e, t, r = {}) {
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
                        var ty = (e) => {
                            throw new eq(e.g.u.i.name + " instance already deleted");
                        };
                        function tb() {}
                        var t_ = (e, t, r) => {
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
                            tx = (t, r, n) => {
                                if (e.hasOwnProperty(t)) {
                                    if (void 0 === n || (void 0 !== e[t].A && void 0 !== e[t].A[n]))
                                        throw new eq(`Cannot register public name '${t}' twice`);
                                    if ((t_(e, t, t), e.hasOwnProperty(n)))
                                        throw new eq(
                                            `Cannot register multiple overloads of a function with the same number of arguments (${n})!`,
                                        );
                                    e[t].A[n] = r;
                                } else (e[t] = r), void 0 !== n && (e[t].Lc = n);
                            };
                        function tw(e, t, r, n, s, a, o, i) {
                            (this.name = e),
                                (this.constructor = t),
                                (this.M = r),
                                (this.O = n),
                                (this.C = s),
                                (this.Qb = a),
                                (this.ma = o),
                                (this.Lb = i),
                                (this.pb = []);
                        }
                        var tk = (e, t, r) => {
                            for (; t !== r; ) {
                                if (!t.ma)
                                    throw new eq(
                                        `Expected null or instance of ${r.name}, got an instance of ${t.name}`,
                                    );
                                (e = t.ma(e)), (t = t.C);
                            }
                            return e;
                        };
                        function tM(e, t) {
                            if (null === t) {
                                if (this.La) throw new eq(`null is not a valid ${this.name}`);
                                return 0;
                            }
                            if (!t.g) throw new eq(`Cannot pass "${tB(t)}" as a ${this.name}`);
                            if (!t.g.o) throw new eq(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            return tk(t.g.o, t.g.u.i, this.i);
                        }
                        function tS(e, t) {
                            if (null === t) {
                                if (this.La) throw new eq(`null is not a valid ${this.name}`);
                                if (this.sa) {
                                    var r = this.Na();
                                    return null !== e && e.push(this.O, r), r;
                                }
                                return 0;
                            }
                            if (!t || !t.g) throw new eq(`Cannot pass "${tB(t)}" as a ${this.name}`);
                            if (!t.g.o) throw new eq(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            if (!this.ra && t.g.u.ra)
                                throw new eq(
                                    `Cannot convert argument of type ${t.g.J ? t.g.J.name : t.g.u.name} to parameter type ${this.name}`,
                                );
                            if (((r = tk(t.g.o, t.g.u.i, this.i)), this.sa)) {
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
                                                e6(() => n.delete()),
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
                        function tE(e, t) {
                            if (null === t) {
                                if (this.La) throw new eq(`null is not a valid ${this.name}`);
                                return 0;
                            }
                            if (!t.g) throw new eq(`Cannot pass "${tB(t)}" as a ${this.name}`);
                            if (!t.g.o) throw new eq(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            if (t.g.u.ra)
                                throw new eq(
                                    `Cannot convert argument of type ${t.g.u.name} to parameter type ${this.name}`,
                                );
                            return tk(t.g.o, t.g.u.i, this.i);
                        }
                        function tL(e, t, r, n, s, a, o, i, u, c, l) {
                            (this.name = e),
                                (this.i = t),
                                (this.La = r),
                                (this.ra = n),
                                (this.sa = s),
                                (this.hc = a),
                                (this.mc = o),
                                (this.qb = i),
                                (this.Na = u),
                                (this.ic = c),
                                (this.O = l),
                                s || void 0 !== t.C
                                    ? (this.toWireType = tS)
                                    : ((this.toWireType = n ? tM : tE), (this.L = null));
                        }
                        var tT,
                            tD,
                            tO = (t, r, n) => {
                                if (!e.hasOwnProperty(t)) throw new eZ("Replacing nonexistent public symbol");
                                void 0 !== e[t].A && void 0 !== n ? (e[t].A[n] = r) : ((e[t] = r), (e[t].da = n));
                            },
                            tC = [],
                            tP = (e) => {
                                var t = tC[e];
                                return t || (e >= tC.length && (tC.length = e + 1), (tC[e] = t = tT.get(e))), t;
                            },
                            tA = (t, r) => {
                                let n;
                                var s = (t = e8(t)).includes("j")
                                    ? ((n = t),
                                      (...t) =>
                                          ((t, r, n = []) =>
                                              t.includes("j")
                                                  ? (0, e["dynCall_" + (t = t.replace(/p/g, "i"))])(r, ...n)
                                                  : tP(r)(...n))(n, r, t))
                                    : tP(r);
                                if ("function" != typeof s)
                                    throw new eq(`unknown function pointer with signature ${t}: ${r}`);
                                return s;
                            },
                            tR = (e, t) => {
                                var r = [],
                                    n = {};
                                throw (
                                    (t.forEach(function e(t) {
                                        n[t] || tr[t] || (tm[t] ? tm[t].forEach(e) : (r.push(t), (n[t] = !0)));
                                    }),
                                    new tD(`${e}: ` + r.map(tn).join([", "])))
                                );
                            };
                        function tj(e, t, r, n, s) {
                            var a = t.length;
                            if (2 > a)
                                throw new eq(
                                    "argTypes array size mismatch! Must at least get return value and 'this' types!",
                                );
                            var o = null !== t[1] && null !== r,
                                i = (function (e) {
                                    for (var t = 1; t < e.length; ++t)
                                        if (null !== e[t] && void 0 === e[t].L) return !0;
                                    return !1;
                                })(t),
                                u = "void" !== t[0].name,
                                c = a - 2,
                                l = Array(c),
                                d = [],
                                f = [];
                            return e1(e, function (...r) {
                                if (r.length !== c)
                                    throw new eq(`function ${e} called with ${r.length} arguments, expected ${c}`);
                                if (((f.length = 0), (d.length = o ? 2 : 1), (d[0] = s), o)) {
                                    var a = t[1].toWireType(f, this);
                                    d[1] = a;
                                }
                                for (var p = 0; p < c; ++p) (l[p] = t[p + 2].toWireType(f, r[p])), d.push(l[p]);
                                if (((r = n(...d)), i)) tf(f);
                                else
                                    for (p = o ? 1 : 2; p < t.length; p++) {
                                        var h = 1 === p ? a : l[p - 2];
                                        null !== t[p].L && t[p].L(h);
                                    }
                                return u ? t[0].fromWireType(r) : void 0;
                            });
                        }
                        var tI,
                            tN = (e, t) => {
                                for (var r = [], n = 0; n < e; n++) r.push(P[(t + 4 * n) >> 2]);
                                return r;
                            },
                            tY = (e) => {
                                let t = (e = e.trim()).indexOf("(");
                                return -1 !== t ? e.substr(0, t) : e;
                            },
                            tF = (e, t, r) => {
                                if (!(e instanceof Object)) throw new eq(`${r} with invalid "this": ${e}`);
                                if (!(e instanceof t.i.constructor))
                                    throw new eq(`${r} incompatible with "this" of type ${e.constructor.name}`);
                                if (!e.g.o)
                                    throw new eq(`cannot call emscripten binding method ${r} on deleted object`);
                                return tk(e.g.o, e.g.u.i, t.i);
                            },
                            tH = (e) => {
                                9 < e && 0 == --e3[e + 1] && ((e3[e] = void 0), e2.push(e));
                            },
                            tz = {
                                name: "emscripten::val",
                                fromWireType: (e) => {
                                    var t = e4(e);
                                    return tH(e), t;
                                },
                                toWireType: (e, t) => e6(t),
                                argPackAdvance: 8,
                                readValueFromPointer: tp,
                                L: null,
                            },
                            tB = (e) => {
                                if (null === e) return "null";
                                var t = typeof e;
                                return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e;
                            },
                            tU = "u" > typeof TextDecoder ? new TextDecoder("utf-16le") : void 0,
                            tW = (e, t) => {
                                for (var r = e >> 1, n = r + t / 2; !(r >= n) && O[r]; ) ++r;
                                if (32 < (r <<= 1) - e && tU) return tU.decode(T.subarray(e, r));
                                for (n = 0, r = ""; !(n >= t / 2); ++n) {
                                    var s = D[(e + 2 * n) >> 1];
                                    if (0 == s) break;
                                    r += String.fromCharCode(s);
                                }
                                return r;
                            },
                            t$ = (e, t, r) => {
                                if (2 > (r ??= 0x7fffffff)) return 0;
                                r -= 2;
                                var n = t;
                                r = r < 2 * e.length ? r / 2 : e.length;
                                for (var s = 0; s < r; ++s) (D[t >> 1] = e.charCodeAt(s)), (t += 2);
                                return (D[t >> 1] = 0), t - n;
                            },
                            tV = (e) => 2 * e.length,
                            tK = (e, t) => {
                                for (var r = 0, n = ""; !(r >= t / 4); ) {
                                    var s = C[(e + 4 * r) >> 2];
                                    if (0 == s) break;
                                    ++r,
                                        65536 <= s
                                            ? ((s -= 65536),
                                              (n += String.fromCharCode(55296 | (s >> 10), 56320 | (1023 & s))))
                                            : (n += String.fromCharCode(s));
                                }
                                return n;
                            },
                            tq = (e, t, r) => {
                                if (4 > (r ??= 0x7fffffff)) return 0;
                                var n = t;
                                r = n + r - 4;
                                for (var s = 0; s < e.length; ++s) {
                                    var a = e.charCodeAt(s);
                                    if (
                                        (55296 <= a &&
                                            57343 >= a &&
                                            (a = (65536 + ((1023 & a) << 10)) | (1023 & e.charCodeAt(++s))),
                                        (C[t >> 2] = a),
                                        (t += 4) + 4 > r)
                                    )
                                        break;
                                }
                                return (C[t >> 2] = 0), t - n;
                            },
                            tG = (e) => {
                                for (var t = 0, r = 0; r < e.length; ++r) {
                                    var n = e.charCodeAt(r);
                                    55296 <= n && 57343 >= n && ++r, (t += 4);
                                }
                                return t;
                            },
                            tJ = (e, t, r) => {
                                var n = [];
                                return (e = e.toWireType(n, r)), n.length && (P[t >> 2] = e6(n)), e;
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
                                if (!tI) {
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
                                            _: x || "./this.program",
                                        };
                                    for (e in t2) void 0 === t2[e] ? delete t[e] : (t[e] = t2[e]);
                                    var r = [];
                                    for (e in t) r.push(`${e}=${t[e]}`);
                                    tI = r;
                                }
                                return tI;
                            },
                            t4 = (e) => 0 == e % 4 && (0 != e % 100 || 0 == e % 400),
                            t6 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                            t5 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                        [44].forEach((e) => {
                            (ek[e] = new ew(e)), (ek[e].stack = "<generic error, no stack>");
                        }),
                            (e_ = Array(4096)),
                            eN(em, "/"),
                            eF("/tmp"),
                            eF("/home"),
                            eF("/home/web_user"),
                            eF("/dev"),
                            (eg[259] = { m: { read: () => 0, write: (e, t, r, n) => n } }),
                            eH("/dev/null", 259),
                            ef(1280, {
                                hb() {
                                    e: {
                                        if (!ei.length) {
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
                                            ei = el(e, !0);
                                        }
                                        e = ei.shift();
                                    }
                                    return e;
                                },
                                Ma(e, t) {
                                    null === t || 10 === t ? (k(eo(e.G, 0)), (e.G = [])) : 0 != t && e.G.push(t);
                                },
                                oa(e) {
                                    e.G && 0 < e.G.length && (k(eo(e.G, 0)), (e.G = []));
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
                            ef(1536, {
                                Ma(e, t) {
                                    null === t || 10 === t ? (M(eo(e.G, 0)), (e.G = [])) : 0 != t && e.G.push(t);
                                },
                                oa(e) {
                                    e.G && 0 < e.G.length && (M(eo(e.G, 0)), (e.G = []));
                                },
                            }),
                            eH("/dev/tty", 1280),
                            eH("/dev/tty1", 1536),
                            (t = new Uint8Array(1024)),
                            (r = 0),
                            eW("random", (s = () => (0 === r && (r = en(t).byteLength), t[--r]))),
                            eW("urandom", s),
                            eF("/dev/shm"),
                            eF("/dev/shm/tmp"),
                            eF("/proc"),
                            (a = eF("/proc/self")),
                            eF("/proc/self/fd"),
                            eN(
                                {
                                    U() {
                                        var e = eO(a, "fd", 16895, 73);
                                        return (
                                            (e.j = {
                                                ja(e, t) {
                                                    var r = eR(+t);
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
                            (eG = e.PureVirtualError = e5("PureVirtualError"));
                        for (var t8 = Array(256), t9 = 0; 256 > t9; ++t9) t8[t9] = String.fromCharCode(t9);
                        (eJ = t8),
                            (e.getInheritedInstanceCount = () => Object.keys(te).length),
                            (e.getLiveInheritedInstances = () => {
                                var e,
                                    t = [];
                                for (e in te) te.hasOwnProperty(e) && t.push(te[e]);
                                return t;
                            }),
                            (e.flushPendingDeletes = e7),
                            (e.setDelayFunction = (e) => {
                                (eX = e), e9.length && eX && eX(e7);
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
                                    if ((this.g.o || ty(this), this.g.ha)) return (this.g.count.value += 1), this;
                                    var e = tl,
                                        t = Object,
                                        r = t.create,
                                        n = Object.getPrototypeOf(this),
                                        s = this.g;
                                    return (
                                        (e = e(
                                            r.call(t, n, {
                                                g: {
                                                    value: {
                                                        count: s.count,
                                                        ea: s.ea,
                                                        ha: s.ha,
                                                        o: s.o,
                                                        u: s.u,
                                                        F: s.F,
                                                        J: s.J,
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
                                    if ((this.g.o || ty(this), this.g.ea && !this.g.ha))
                                        throw new eq("Object already scheduled for deletion");
                                    ta(this);
                                    var e = this.g;
                                    --e.count.value,
                                        0 === e.count.value && (e.F ? e.J.O(e.F) : e.u.i.O(e.o)),
                                        this.g.ha || ((this.g.F = void 0), (this.g.o = void 0));
                                },
                                isDeleted: function () {
                                    return !this.g.o;
                                },
                                deleteLater: function () {
                                    if ((this.g.o || ty(this), this.g.ea && !this.g.ha))
                                        throw new eq("Object already scheduled for deletion");
                                    return e9.push(this), 1 === e9.length && eX && eX(e7), (this.g.ea = !0), this;
                                },
                            }),
                            Object.assign(tL.prototype, {
                                Rb(e) {
                                    return this.qb && (e = this.qb(e)), e;
                                },
                                ab(e) {
                                    this.O?.(e);
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: tp,
                                fromWireType: function (e) {
                                    function t() {
                                        return this.sa
                                            ? tc(this.i.M, { u: this.hc, o: r, J: this, F: e })
                                            : tc(this.i.M, { u: this, o: e });
                                    }
                                    var r = this.Rb(e);
                                    if (!r) return this.ab(e), null;
                                    var n = te[tt(this.i, r)];
                                    if (void 0 !== n)
                                        return 0 === n.g.count.value
                                            ? ((n.g.o = r), (n.g.F = e), n.clone())
                                            : ((n = n.clone()), this.ab(e), n);
                                    if (!(n = tu[(n = this.i.Qb(r))])) return t.call(this);
                                    n = this.ra ? n.Hb : n.pointerType;
                                    var s = ti(r, this.i, n.i);
                                    return null === s
                                        ? t.call(this)
                                        : this.sa
                                          ? tc(n.i.M, { u: n, o: s, J: this, F: e })
                                          : tc(n.i.M, { u: n, o: s });
                                },
                            }),
                            (tD = e.UnboundTypeError = e5("UnboundTypeError"));
                        var t7 = {
                                __syscall_fcntl64: function (e, t, r) {
                                    e0 = r;
                                    try {
                                        var n = eR(e);
                                        switch (t) {
                                            case 0:
                                                var s = Z();
                                                if (0 > s) break;
                                                for (; ey[s]; ) s++;
                                                return (function (e, t = -1) {
                                                    return (e = ej(e, t)), e.m?.Ec?.(e), e;
                                                })(n, s).W;
                                            case 1:
                                            case 2:
                                            case 13:
                                            case 14:
                                                return 0;
                                            case 3:
                                                return n.flags;
                                            case 4:
                                                return (s = Z()), (n.flags |= s), 0;
                                            case 12:
                                                return (D[((s = Z()) + 0) >> 1] = 2), 0;
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
                                        var n = eR(e);
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
                                                    var s = Z();
                                                    (C[s >> 2] = 25856),
                                                        (C[(s + 4) >> 2] = 5),
                                                        (C[(s + 8) >> 2] = 191),
                                                        (C[(s + 12) >> 2] = 35387);
                                                    for (var a = 0; 32 > a; a++) L[s + a + 17] = e[a] || 0;
                                                }
                                                return 0;
                                            case 21506:
                                            case 21507:
                                            case 21508:
                                                if (!n.s) return -59;
                                                if (n.s.V.Yb)
                                                    for (s = Z(), e = [], a = 0; 32 > a; a++) e.push(L[s + a + 17]);
                                                return 0;
                                            case 21519:
                                                if (!n.s) return -59;
                                                return (C[(s = Z()) >> 2] = 0);
                                            case 21520:
                                                return n.s ? -28 : -59;
                                            case 21531:
                                                if (((s = Z()), !n.m.Wb)) throw new ew(59);
                                                return n.m.Wb(n, t, s);
                                            case 21523:
                                                if (!n.s) return -59;
                                                return (
                                                    n.s.V.Zb &&
                                                        ((a = [24, 80]),
                                                        (D[(s = Z()) >> 1] = a[0]),
                                                        (D[(s + 2) >> 1] = a[1])),
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
                                        var s = (t = t ? eo(T, t) : "");
                                        if ("/" === s.charAt(0)) t = s;
                                        else {
                                            var a = -100 === e ? "/" : eR(e).path;
                                            if (0 == s.length) throw new ew(44);
                                            t = ee(a + "/" + s);
                                        }
                                        var o = n ? Z() : 0;
                                        return eB(t, r, o).W;
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                                        return -e.$;
                                    }
                                },
                                _abort_js: () => {
                                    U("");
                                },
                                _embind_create_inheriting_constructor: (e, t, r) => {
                                    (e = e8(e)), (t = ts(t, "wrapper")), (r = e4(r));
                                    var n = t.i,
                                        s = n.M,
                                        a = n.C.M,
                                        o = n.C.constructor;
                                    return (
                                        (e = e1(e, function (...e) {
                                            n.C.pb.forEach(
                                                function (e) {
                                                    if (this[e] === a[e])
                                                        throw new eG(
                                                            `Pure virtual function ${e} must be implemented in JavaScript`,
                                                        );
                                                }.bind(this),
                                            ),
                                                Object.defineProperty(this, "__parent", { value: s }),
                                                this.__construct(...e);
                                        })),
                                        (s.__construct = function (...e) {
                                            if (this === s) throw new eq("Pass correct 'this' to __construct");
                                            (e = o.implement(this, ...e)), ta(e);
                                            var t = e.g;
                                            if (
                                                (e.notifyOnDestruction(),
                                                (t.ha = !0),
                                                Object.defineProperties(this, { g: { value: t } }),
                                                tl(this),
                                                (e = tt(n, (e = t.o))),
                                                te.hasOwnProperty(e))
                                            )
                                                throw new eq(`Tried to register registered instance: ${e}`);
                                            te[e] = this;
                                        }),
                                        (s.__destruct = function () {
                                            if (this === s) throw new eq("Pass correct 'this' to __destruct");
                                            ta(this);
                                            var e = this.g.o;
                                            if (((e = tt(n, e)), te.hasOwnProperty(e))) delete te[e];
                                            else throw new eq(`Tried to unregister unregistered instance: ${e}`);
                                        }),
                                        (e.prototype = Object.create(s)),
                                        Object.assign(e.prototype, r),
                                        e6(e)
                                    );
                                },
                                _embind_finalize_value_object: (e) => {
                                    var t = td[e];
                                    delete td[e];
                                    var r = t.Na,
                                        n = t.O,
                                        s = t.eb;
                                    tv([e], s.map((e) => e.Ub).concat(s.map((e) => e.kc)), (e) => {
                                        var a = {};
                                        return (
                                            s.forEach((t, r) => {
                                                var n = e[r],
                                                    o = t.Sb,
                                                    i = t.Tb,
                                                    u = e[r + s.length],
                                                    c = t.jc,
                                                    l = t.lc;
                                                a[t.Ob] = {
                                                    read: (e) => n.fromWireType(o(i, e)),
                                                    write: (e, t) => {
                                                        var r = [];
                                                        c(l, e, u.toWireType(r, t)), tf(r);
                                                    },
                                                };
                                            }),
                                            [
                                                {
                                                    name: t.name,
                                                    fromWireType: (e) => {
                                                        var t,
                                                            r = {};
                                                        for (t in a) r[t] = a[t].read(e);
                                                        return n(e), r;
                                                    },
                                                    toWireType: (e, t) => {
                                                        for (var s in a)
                                                            if (!(s in t)) throw TypeError(`Missing field: "${s}"`);
                                                        var o = r();
                                                        for (s in a) a[s].write(o, t[s]);
                                                        return null !== e && e.push(n, o), o;
                                                    },
                                                    argPackAdvance: 8,
                                                    readValueFromPointer: tp,
                                                    L: n,
                                                },
                                            ]
                                        );
                                    });
                                },
                                _embind_register_bigint: () => {},
                                _embind_register_bool: (e, t, r, n) => {
                                    tg(e, {
                                        name: (t = e8(t)),
                                        fromWireType: function (e) {
                                            return !!e;
                                        },
                                        toWireType: function (e, t) {
                                            return t ? r : n;
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: function (e) {
                                            return this.fromWireType(T[e]);
                                        },
                                        L: null,
                                    });
                                },
                                _embind_register_class: (e, t, r, n, s, a, o, i, u, c, l, d, f) => {
                                    (l = e8(l)), (a = tA(s, a)), (i &&= tA(o, i)), (c &&= tA(u, c)), (f = tA(d, f));
                                    var p = ((e) => {
                                        if (void 0 === e) return "_unknown";
                                        var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                                        return 48 <= t && 57 >= t ? `_${e}` : e;
                                    })(l);
                                    tx(p, function () {
                                        tR(`Cannot construct ${l} due to unbound types`, [n]);
                                    }),
                                        tv([e, t, r], n ? [n] : [], (t) => {
                                            if (((t = t[0]), n))
                                                var r,
                                                    s = t.i,
                                                    o = s.M;
                                            else o = tb.prototype;
                                            var u = Object.create(o, {
                                                constructor: {
                                                    value: (t = e1(l, function (...e) {
                                                        if (Object.getPrototypeOf(this) !== u)
                                                            throw new eq("Use 'new' to construct " + l);
                                                        if (void 0 === d.Z)
                                                            throw new eq(l + " has no accessible constructor");
                                                        var t = d.Z[e.length];
                                                        if (void 0 === t)
                                                            throw new eq(
                                                                `Tried to invoke ctor of ${l} with invalid number of parameters (${e.length}) - expected (${Object.keys(d.Z).toString()}) parameters instead!`,
                                                            );
                                                        return t.apply(this, e);
                                                    })),
                                                },
                                            });
                                            t.prototype = u;
                                            var d = new tw(l, t, u, f, s, a, i, c);
                                            return (
                                                d.C && ((r = d.C).na ?? (r.na = []), d.C.na.push(d)),
                                                (s = new tL(l, d, !0, !1, !1)),
                                                (r = new tL(l + "*", d, !1, !1, !1)),
                                                (o = new tL(l + " const*", d, !1, !0, !1)),
                                                (tu[e] = { pointerType: r, Hb: o }),
                                                tO(p, t),
                                                [s, r, o]
                                            );
                                        });
                                },
                                _embind_register_class_class_function: (e, t, r, n, s, a, o) => {
                                    var i = tN(r, n);
                                    (t = tY((t = e8(t)))),
                                        (a = tA(s, a)),
                                        tv([], [e], (e) => {
                                            function n() {
                                                tR(`Cannot call ${s} due to unbound types`, i);
                                            }
                                            e = e[0];
                                            var s = `${e.name}.${t}`;
                                            t.startsWith("@@") && (t = Symbol[t.substring(2)]);
                                            var u = e.i.constructor;
                                            return (
                                                void 0 === u[t]
                                                    ? ((n.da = r - 1), (u[t] = n))
                                                    : (t_(u, t, s), (u[t].A[r - 1] = n)),
                                                tv([], i, (n) => {
                                                    if (
                                                        ((n = tj(s, [n[0], null].concat(n.slice(1)), null, a, o)),
                                                        void 0 === u[t].A
                                                            ? ((n.da = r - 1), (u[t] = n))
                                                            : (u[t].A[r - 1] = n),
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
                                _embind_register_class_class_property: (e, t, r, n, s, a, o, i) => {
                                    (t = e8(t)),
                                        (a = tA(s, a)),
                                        tv([], [e], (e) => {
                                            e = e[0];
                                            var s = `${e.name}.${t}`,
                                                u = {
                                                    get() {
                                                        tR(`Cannot access ${s} due to unbound types`, [r]);
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0,
                                                };
                                            return (
                                                (u.set = i
                                                    ? () => {
                                                          tR(`Cannot access ${s} due to unbound types`, [r]);
                                                      }
                                                    : () => {
                                                          throw new eq(`${s} is a read-only property`);
                                                      }),
                                                Object.defineProperty(e.i.constructor, t, u),
                                                tv([], [r], (r) => {
                                                    r = r[0];
                                                    var s = { get: () => r.fromWireType(a(n)), enumerable: !0 };
                                                    return (
                                                        i &&
                                                            ((i = tA(o, i)),
                                                            (s.set = (e) => {
                                                                var t = [];
                                                                i(n, r.toWireType(t, e)), tf(t);
                                                            })),
                                                        Object.defineProperty(e.i.constructor, t, s),
                                                        []
                                                    );
                                                }),
                                                []
                                            );
                                        });
                                },
                                _embind_register_class_constructor: (e, t, r, n, s, a) => {
                                    var o = tN(t, r);
                                    (s = tA(n, s)),
                                        tv([], [e], (e) => {
                                            e = e[0];
                                            var r = `constructor ${e.name}`;
                                            if ((void 0 === e.i.Z && (e.i.Z = []), void 0 !== e.i.Z[t - 1]))
                                                throw new eq(
                                                    `Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
                                                );
                                            return (
                                                (e.i.Z[t - 1] = () => {
                                                    tR(`Cannot construct ${e.name} due to unbound types`, o);
                                                }),
                                                tv(
                                                    [],
                                                    o,
                                                    (n) => (
                                                        n.splice(1, 0, null), (e.i.Z[t - 1] = tj(r, n, null, s, a)), []
                                                    ),
                                                ),
                                                []
                                            );
                                        });
                                },
                                _embind_register_class_function: (e, t, r, n, s, a, o, i) => {
                                    var u = tN(r, n);
                                    (t = tY((t = e8(t)))),
                                        (a = tA(s, a)),
                                        tv([], [e], (e) => {
                                            function n() {
                                                tR(`Cannot call ${s} due to unbound types`, u);
                                            }
                                            e = e[0];
                                            var s = `${e.name}.${t}`;
                                            t.startsWith("@@") && (t = Symbol[t.substring(2)]), i && e.i.pb.push(t);
                                            var c = e.i.M,
                                                l = c[t];
                                            return (
                                                void 0 === l ||
                                                (void 0 === l.A && l.className !== e.name && l.da === r - 2)
                                                    ? ((n.da = r - 2), (n.className = e.name), (c[t] = n))
                                                    : (t_(c, t, s), (c[t].A[r - 2] = n)),
                                                tv(
                                                    [],
                                                    u,
                                                    (n) => (
                                                        (n = tj(s, n, e, a, o)),
                                                        void 0 === c[t].A
                                                            ? ((n.da = r - 2), (c[t] = n))
                                                            : (c[t].A[r - 2] = n),
                                                        []
                                                    ),
                                                ),
                                                []
                                            );
                                        });
                                },
                                _embind_register_class_property: (e, t, r, n, s, a, o, i, u, c) => {
                                    (t = e8(t)),
                                        (s = tA(n, s)),
                                        tv([], [e], (e) => {
                                            e = e[0];
                                            var n = `${e.name}.${t}`,
                                                l = {
                                                    get() {
                                                        tR(`Cannot access ${n} due to unbound types`, [r, o]);
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0,
                                                };
                                            return (
                                                (l.set = u
                                                    ? () => tR(`Cannot access ${n} due to unbound types`, [r, o])
                                                    : () => {
                                                          throw new eq(n + " is a read-only property");
                                                      }),
                                                Object.defineProperty(e.i.M, t, l),
                                                tv([], u ? [r, o] : [r], (r) => {
                                                    var o = r[0],
                                                        l = {
                                                            get() {
                                                                var t = tF(this, e, n + " getter");
                                                                return o.fromWireType(s(a, t));
                                                            },
                                                            enumerable: !0,
                                                        };
                                                    if (u) {
                                                        u = tA(i, u);
                                                        var d = r[1];
                                                        l.set = function (t) {
                                                            var r = tF(this, e, n + " setter"),
                                                                s = [];
                                                            u(c, r, d.toWireType(s, t)), tf(s);
                                                        };
                                                    }
                                                    return Object.defineProperty(e.i.M, t, l), [];
                                                }),
                                                []
                                            );
                                        });
                                },
                                _embind_register_emval: (e) => tg(e, tz),
                                _embind_register_enum: (e, t, r, n) => {
                                    function s() {}
                                    (t = e8(t)),
                                        (s.values = {}),
                                        tg(e, {
                                            name: t,
                                            constructor: s,
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
                                                                  return this.fromWireType(L[e]);
                                                              }
                                                            : function (e) {
                                                                  return this.fromWireType(T[e]);
                                                              };
                                                    case 2:
                                                        return r
                                                            ? function (e) {
                                                                  return this.fromWireType(D[e >> 1]);
                                                              }
                                                            : function (e) {
                                                                  return this.fromWireType(O[e >> 1]);
                                                              };
                                                    case 4:
                                                        return r
                                                            ? function (e) {
                                                                  return this.fromWireType(C[e >> 2]);
                                                              }
                                                            : function (e) {
                                                                  return this.fromWireType(P[e >> 2]);
                                                              };
                                                    default:
                                                        throw TypeError(`invalid integer width (${t}): ${e}`);
                                                }
                                            })(t, r, n),
                                            L: null,
                                        }),
                                        tx(t, s);
                                },
                                _embind_register_enum_value: (e, t, r) => {
                                    var n = ts(e, "enum");
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
                                    tg(e, {
                                        name: (t = e8(t)),
                                        fromWireType: (e) => e,
                                        toWireType: (e, t) => t,
                                        argPackAdvance: 8,
                                        readValueFromPointer: ((e, t) => {
                                            switch (t) {
                                                case 4:
                                                    return function (e) {
                                                        return this.fromWireType(A[e >> 2]);
                                                    };
                                                case 8:
                                                    return function (e) {
                                                        return this.fromWireType(R[e >> 3]);
                                                    };
                                                default:
                                                    throw TypeError(`invalid float width (${t}): ${e}`);
                                            }
                                        })(t, r),
                                        L: null,
                                    });
                                },
                                _embind_register_function: (e, t, r, n, s, a) => {
                                    var o = tN(t, r);
                                    (e = tY((e = e8(e)))),
                                        (s = tA(n, s)),
                                        tx(
                                            e,
                                            function () {
                                                tR(`Cannot call ${e} due to unbound types`, o);
                                            },
                                            t - 1,
                                        ),
                                        tv(
                                            [],
                                            o,
                                            (r) => (
                                                tO(e, tj(e, [r[0], null].concat(r.slice(1)), null, s, a), t - 1), []
                                            ),
                                        );
                                },
                                _embind_register_integer: (e, t, r, n, s) => {
                                    if (((t = e8(t)), -1 === s && (s = 0xffffffff), (s = (e) => e), 0 === n)) {
                                        var a = 32 - 8 * r;
                                        s = (e) => (e << a) >>> a;
                                    }
                                    var o = t.includes("unsigned")
                                        ? function (e, t) {
                                              return t >>> 0;
                                          }
                                        : function (e, t) {
                                              return t;
                                          };
                                    tg(e, {
                                        name: t,
                                        fromWireType: s,
                                        toWireType: o,
                                        argPackAdvance: 8,
                                        readValueFromPointer: ((e, t, r) => {
                                            switch (t) {
                                                case 1:
                                                    return r ? (e) => L[e] : (e) => T[e];
                                                case 2:
                                                    return r ? (e) => D[e >> 1] : (e) => O[e >> 1];
                                                case 4:
                                                    return r ? (e) => C[e >> 2] : (e) => P[e >> 2];
                                                default:
                                                    throw TypeError(`invalid integer width (${t}): ${e}`);
                                            }
                                        })(t, r, 0 !== n),
                                        L: null,
                                    });
                                },
                                _embind_register_memory_view: (e, t, r) => {
                                    function n(e) {
                                        return new s(L.buffer, P[(e + 4) >> 2], P[e >> 2]);
                                    }
                                    var s = [
                                        Int8Array,
                                        Uint8Array,
                                        Int16Array,
                                        Uint16Array,
                                        Int32Array,
                                        Uint32Array,
                                        Float32Array,
                                        Float64Array,
                                    ][t];
                                    tg(
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
                                    tg(e, {
                                        name: t,
                                        fromWireType: function (e) {
                                            var t = P[e >> 2],
                                                n = e + 4;
                                            if (r)
                                                for (var s = n, a = 0; a <= t; ++a) {
                                                    var o = n + a;
                                                    if (a == t || 0 == T[o]) {
                                                        if (((s = s ? eo(T, s, o - s) : ""), void 0 === i)) var i = s;
                                                        else (i += "\0"), (i += s);
                                                        s = o + 1;
                                                    }
                                                }
                                            else {
                                                for (a = 0, i = Array(t); a < t; ++a)
                                                    i[a] = String.fromCharCode(T[n + a]);
                                                i = i.join("");
                                            }
                                            return rt(e), i;
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
                                            var s = r && n ? eu(t) : t.length,
                                                a = rr(4 + s + 1),
                                                o = a + 4;
                                            if (((P[a >> 2] = s), r && n)) ec(t, T, o, s + 1);
                                            else if (n)
                                                for (n = 0; n < s; ++n) {
                                                    var i = t.charCodeAt(n);
                                                    if (255 < i)
                                                        throw (
                                                            (rt(o),
                                                            new eq(
                                                                "String has UTF-16 code units that do not fit in 8 bits",
                                                            ))
                                                        );
                                                    T[o + n] = i;
                                                }
                                            else for (n = 0; n < s; ++n) T[o + n] = t[n];
                                            return null !== e && e.push(rt, a), a;
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: tp,
                                        L(e) {
                                            rt(e);
                                        },
                                    });
                                },
                                _embind_register_std_wstring: (e, t, r) => {
                                    if (((r = e8(r)), 2 === t))
                                        var n = tW,
                                            s = t$,
                                            a = tV,
                                            o = (e) => O[e >> 1];
                                    else 4 === t && ((n = tK), (s = tq), (a = tG), (o = (e) => P[e >> 2]));
                                    tg(e, {
                                        name: r,
                                        fromWireType: (e) => {
                                            for (var r, s = P[e >> 2], a = e + 4, i = 0; i <= s; ++i) {
                                                var u = e + 4 + i * t;
                                                (i == s || 0 == o(u)) &&
                                                    ((a = n(a, u - a)),
                                                    void 0 === r ? (r = a) : ((r += "\0"), (r += a)),
                                                    (a = u + t));
                                            }
                                            return rt(e), r;
                                        },
                                        toWireType: (e, n) => {
                                            if ("string" != typeof n)
                                                throw new eq(`Cannot pass non-string to C++ string type ${r}`);
                                            var o = a(n),
                                                i = rr(4 + o + t);
                                            return (
                                                (P[i >> 2] = o / t), s(n, i + 4, o + t), null !== e && e.push(rt, i), i
                                            );
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: tp,
                                        L(e) {
                                            rt(e);
                                        },
                                    });
                                },
                                _embind_register_value_object: (e, t, r, n, s, a) => {
                                    td[e] = { name: e8(t), Na: tA(r, n), O: tA(s, a), eb: [] };
                                },
                                _embind_register_value_object_field: (e, t, r, n, s, a, o, i, u, c) => {
                                    td[e].eb.push({
                                        Ob: e8(t),
                                        Ub: r,
                                        Sb: tA(n, s),
                                        Tb: a,
                                        kc: o,
                                        jc: tA(i, u),
                                        lc: c,
                                    });
                                },
                                _embind_register_void: (e, t) => {
                                    tg(e, {
                                        Ic: !0,
                                        name: (t = e8(t)),
                                        argPackAdvance: 0,
                                        fromWireType: () => {},
                                        toWireType: () => {},
                                    });
                                },
                                _emscripten_get_now_is_monotonic: () => 1,
                                _emscripten_memcpy_js: (e, t, r) => T.copyWithin(e, t, t + r),
                                _emval_as: (e, t, r) => ((e = e4(e)), tJ((t = ts(t, "emval::as")), r, e)),
                                _emval_call_method: (e, t, r, n, s) => (e = tQ[e])((t = e4(t)), t[(r = tZ(r))], n, s),
                                _emval_decref: tH,
                                _emval_get_method_caller: (e, t, r) => {
                                    var n,
                                        s,
                                        a = ((e, t) => {
                                            for (var r = Array(e), n = 0; n < e; ++n)
                                                r[n] = ts(P[(t + 4 * n) >> 2], "parameter " + n);
                                            return r;
                                        })(e, t),
                                        o = a.shift(),
                                        i = Array(--e);
                                    return (
                                        (n = e1(
                                            (t = `methodCaller<(${a.map((e) => e.name).join(", ")}) => ${o.name}>`),
                                            (t, n, s, u) => {
                                                for (var c = 0, l = 0; l < e; ++l)
                                                    (i[l] = a[l].readValueFromPointer(u + c)),
                                                        (c += a[l].argPackAdvance);
                                                return tJ(o, s, (t = 1 === r ? t0(n, i) : n.apply(t, i)));
                                            },
                                        )),
                                        (s = tQ.length),
                                        tQ.push(n),
                                        s
                                    );
                                },
                                _emval_get_module_property: (t) => e6(e[(t = tZ(t))]),
                                _emval_get_property: (e, t) => e6((e = e4(e))[(t = e4(t))]),
                                _emval_incref: (e) => {
                                    9 < e && (e3[e + 1] += 1);
                                },
                                _emval_new_array: () => e6([]),
                                _emval_new_cstring: (e) => e6(tZ(e)),
                                _emval_new_object: () => e6({}),
                                _emval_run_destructors: (e) => {
                                    tf(e4(e)), tH(e);
                                },
                                _emval_set_property: (e, t, r) => {
                                    (e = e4(e)), (t = e4(t)), (r = e4(r)), (e[t] = r);
                                },
                                _emval_take_value: (e, t) =>
                                    e6((e = (e = ts(e, "_emval_take_value")).readValueFromPointer(t))),
                                emscripten_asm_const_int: (e, t, r) => {
                                    t1.length = 0;
                                    for (var n; (n = T[t++]); ) {
                                        var s = 105 != n;
                                        (s &= 112 != n),
                                            (r += s && r % 8 ? 4 : 0),
                                            t1.push(112 == n ? P[r >> 2] : 105 == n ? C[r >> 2] : R[r >> 3]),
                                            (r += s ? 8 : 4);
                                    }
                                    return J[e](...t1);
                                },
                                emscripten_date_now: () => Date.now(),
                                emscripten_get_now: () => performance.now(),
                                emscripten_resize_heap: (e) => {
                                    var t = T.length;
                                    if (0x80000000 < (e >>>= 0)) return !1;
                                    for (var r = 1; 4 >= r; r *= 2) {
                                        var n = t * (1 + 0.2 / r);
                                        n = Math.min(n, e + 0x6000000);
                                        var s = Math;
                                        n = Math.max(e, n);
                                        e: {
                                            s =
                                                (s.min.call(s, 0x80000000, n + ((65536 - (n % 65536)) % 65536)) -
                                                    E.buffer.byteLength +
                                                    65535) /
                                                65536;
                                            try {
                                                E.grow(s), I();
                                                var a = 1;
                                                break e;
                                            } catch (e) {}
                                            a = void 0;
                                        }
                                        if (a) return !0;
                                    }
                                    return !1;
                                },
                                environ_get: (e, t) => {
                                    var r = 0;
                                    return (
                                        t3().forEach((n, s) => {
                                            var a = t + r;
                                            for (s = P[(e + 4 * s) >> 2] = a, a = 0; a < n.length; ++a)
                                                L[s++] = n.charCodeAt(a);
                                            (L[s] = 0), (r += n.length + 1);
                                        }),
                                        0
                                    );
                                },
                                environ_sizes_get: (e, t) => {
                                    var r = t3();
                                    P[e >> 2] = r.length;
                                    var n = 0;
                                    return r.forEach((e) => (n += e.length + 1)), (P[t >> 2] = n), 0;
                                },
                                fd_close: function (e) {
                                    try {
                                        var t = eR(e);
                                        if (null === t.W) throw new ew(8);
                                        t.Ka && (t.Ka = null);
                                        try {
                                            t.m.close && t.m.close(t);
                                        } catch (e) {
                                            throw e;
                                        } finally {
                                            ey[t.W] = null;
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
                                            var s = eR(e);
                                            e = t;
                                            for (var a, o = (t = 0); o < r; o++) {
                                                var i = P[e >> 2],
                                                    u = P[(e + 4) >> 2];
                                                e += 8;
                                                var c = a,
                                                    l = L;
                                                if (0 > u || 0 > c) throw new ew(28);
                                                if (null === s.W || 1 == (2097155 & s.flags)) throw new ew(8);
                                                if (16384 == (61440 & s.node.mode)) throw new ew(31);
                                                if (!s.m.read) throw new ew(28);
                                                var d = void 0 !== c;
                                                if (d) {
                                                    if (!s.seekable) throw new ew(70);
                                                } else c = s.position;
                                                var f = s.m.read(s, l, i, u, c);
                                                if ((d || (s.position += f), 0 > f)) {
                                                    var p = -1;
                                                    break e;
                                                }
                                                if (((t += f), f < u)) break;
                                                void 0 !== a && (a += f);
                                            }
                                            p = t;
                                        }
                                        return (P[n >> 2] = p), 0;
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                                        return e.$;
                                    }
                                },
                                fd_seek: function (e, t, r, n, s) {
                                    t = (r + 2097152) >>> 0 < 4194305 - !!t ? (t >>> 0) + 0x100000000 * r : NaN;
                                    try {
                                        if (isNaN(t)) return 61;
                                        var a = eR(e);
                                        return (
                                            eU(a, t, n),
                                            (G = [
                                                a.position >>> 0,
                                                ((q = a.position),
                                                1 <= +Math.abs(q)
                                                    ? 0 < q
                                                        ? Math.floor(q / 0x100000000) >>> 0
                                                        : ~~Math.ceil((q - (~~q >>> 0)) / 0x100000000) >>> 0
                                                    : 0),
                                            ]),
                                            (C[s >> 2] = G[0]),
                                            (C[(s + 4) >> 2] = G[1]),
                                            a.Ka && 0 === t && 0 === n && (a.Ka = null),
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
                                            var s = eR(e);
                                            e = t;
                                            for (var a, o = (t = 0); o < r; o++) {
                                                var i = P[e >> 2],
                                                    u = P[(e + 4) >> 2];
                                                e += 8;
                                                var c = a,
                                                    l = L;
                                                if (0 > u || 0 > c) throw new ew(28);
                                                if (null === s.W || 0 == (2097155 & s.flags)) throw new ew(8);
                                                if (16384 == (61440 & s.node.mode)) throw new ew(31);
                                                if (!s.m.write) throw new ew(28);
                                                s.seekable && 1024 & s.flags && eU(s, 0, 2);
                                                var d = void 0 !== c;
                                                if (d) {
                                                    if (!s.seekable) throw new ew(70);
                                                } else c = s.position;
                                                var f = s.m.write(s, l, i, u, c, void 0);
                                                if ((d || (s.position += f), 0 > f)) {
                                                    var p = -1;
                                                    break e;
                                                }
                                                (t += f), void 0 !== a && (a += f);
                                            }
                                            p = t;
                                        }
                                        return (P[n >> 2] = p), 0;
                                    } catch (e) {
                                        if (void 0 === eQ || "ErrnoError" !== e.name) throw e;
                                        return e.$;
                                    }
                                },
                                strftime_l: (e, t, r, n) =>
                                    ((e, t, r, n) => {
                                        function s(e, t, r) {
                                            for (e = "number" == typeof e ? e.toString() : e || ""; e.length < t; )
                                                e = r[0] + e;
                                            return e;
                                        }
                                        function a(e, t) {
                                            return s(e, t, "0");
                                        }
                                        function o(e, t) {
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
                                        function i(e) {
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
                                        function u(e) {
                                            var t = e.ba;
                                            for (e = new Date(new Date(e.ca + 1900, 0, 1).getTime()); 0 < t; ) {
                                                var r = e.getMonth(),
                                                    n = (t4(e.getFullYear()) ? t6 : t5)[r];
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
                                                (t = i(new Date(e.getFullYear(), 0, 4))),
                                                (r = i(r)),
                                                0 >= o(t, e)
                                                    ? 0 >= o(r, e)
                                                        ? e.getFullYear() + 1
                                                        : e.getFullYear()
                                                    : e.getFullYear() - 1
                                            );
                                        }
                                        var c = P[(n + 40) >> 2];
                                        for (var l in ((n = {
                                            pc: C[n >> 2],
                                            oc: C[(n + 4) >> 2],
                                            Da: C[(n + 8) >> 2],
                                            Qa: C[(n + 12) >> 2],
                                            Ea: C[(n + 16) >> 2],
                                            ca: C[(n + 20) >> 2],
                                            R: C[(n + 24) >> 2],
                                            ba: C[(n + 28) >> 2],
                                            Nc: C[(n + 32) >> 2],
                                            nc: C[(n + 36) >> 2],
                                            qc: c && c ? eo(T, c) : "",
                                        }),
                                        (r = r ? eo(T, r) : ""),
                                        (c = {
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
                                            r = r.replace(RegExp(l, "g"), c[l]);
                                        var d = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                                            f =
                                                "January February March April May June July August September October November December".split(
                                                    " ",
                                                );
                                        for (l in ((c = {
                                            "%a": (e) => d[e.R].substring(0, 3),
                                            "%A": (e) => d[e.R],
                                            "%b": (e) => f[e.Ea].substring(0, 3),
                                            "%B": (e) => f[e.Ea],
                                            "%C": (e) => a(((e.ca + 1900) / 100) | 0, 2),
                                            "%d": (e) => a(e.Qa, 2),
                                            "%e": (e) => s(e.Qa, 2, " "),
                                            "%g": (e) => u(e).toString().substring(2),
                                            "%G": u,
                                            "%H": (e) => a(e.Da, 2),
                                            "%I": (e) => (0 == (e = e.Da) ? (e = 12) : 12 < e && (e -= 12), a(e, 2)),
                                            "%j": (e) => {
                                                for (
                                                    var t = 0, r = 0;
                                                    r <= e.Ea - 1;
                                                    t += (t4(e.ca + 1900) ? t6 : t5)[r++]
                                                );
                                                return a(e.Qa + t, 3);
                                            },
                                            "%m": (e) => a(e.Ea + 1, 2),
                                            "%M": (e) => a(e.oc, 2),
                                            "%n": () => "\n",
                                            "%p": (e) => (0 <= e.Da && 12 > e.Da ? "AM" : "PM"),
                                            "%S": (e) => a(e.pc, 2),
                                            "%t": () => "	",
                                            "%u": (e) => e.R || 7,
                                            "%U": (e) => a(Math.floor((e.ba + 7 - e.R) / 7), 2),
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
                                                return a(t, 2);
                                            },
                                            "%w": (e) => e.R,
                                            "%W": (e) => a(Math.floor((e.ba + 7 - ((e.R + 6) % 7)) / 7), 2),
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
                                        c))
                                            r.includes(l) && (r = r.replace(RegExp(l, "g"), c[l](n)));
                                        return (l = el((r = r.replace(/\0\0/g, "%")), !1)).length > t
                                            ? 0
                                            : (L.set(l, e), l.length - 1);
                                    })(e, t, r, n),
                            },
                            re = (function () {
                                function t(t) {
                                    return (
                                        (E = (re = t.exports).memory),
                                        I(),
                                        (tT = re.__indirect_function_table),
                                        Y.unshift(re.__wasm_call_ctors),
                                        H--,
                                        e.monitorRunDependencies?.(H),
                                        0 == H &&
                                            (null !== z && (clearInterval(z), (z = null)),
                                            B && ((t = B), (B = null), t())),
                                        re
                                    );
                                }
                                var r,
                                    n,
                                    s = { env: t7, wasi_snapshot_preview1: t7 };
                                if ((H++, e.monitorRunDependencies?.(H), e.instantiateWasm))
                                    try {
                                        return e.instantiateWasm(s, t);
                                    } catch (e) {
                                        M(`Module.instantiateWasm callback failed with error: ${e}`), u(e);
                                    }
                                return (
                                    (W ||= "canvas_advanced.wasm".startsWith("data:application/octet-stream;base64,")
                                        ? "canvas_advanced.wasm"
                                        : e.locateFile
                                          ? e.locateFile("canvas_advanced.wasm", w)
                                          : w + "canvas_advanced.wasm"),
                                    ((r = s),
                                    (n = function (e) {
                                        t(e.instance);
                                    }),
                                    S ||
                                    "function" != typeof WebAssembly.instantiateStreaming ||
                                    W.startsWith("data:application/octet-stream;base64,") ||
                                    $(W) ||
                                    "function" != typeof fetch
                                        ? K(W, r, n)
                                        : fetch(W, { credentials: "same-origin" }).then((e) =>
                                              WebAssembly.instantiateStreaming(e, r).then(n, function (e) {
                                                  return (
                                                      M(`wasm streaming compile failed: ${e}`),
                                                      M("falling back to ArrayBuffer instantiation"),
                                                      K(W, r, n)
                                                  );
                                              }),
                                          )).catch(u),
                                    {}
                                );
                            })(),
                            rt = (e) => (rt = re.free)(e),
                            rr = (e) => (rr = re.malloc)(e),
                            rn = (e) => (rn = re.__getTypeName)(e),
                            rs = (e._ma_device__on_notification_unlocked = (t) =>
                                (rs = e._ma_device__on_notification_unlocked = re.ma_device__on_notification_unlocked)(
                                    t,
                                ));
                        (e._ma_malloc_emscripten = (t, r) => (e._ma_malloc_emscripten = re.ma_malloc_emscripten)(t, r)),
                            (e._ma_free_emscripten = (t, r) => (e._ma_free_emscripten = re.ma_free_emscripten)(t, r));
                        var ra = (e._ma_device_process_pcm_frames_capture__webaudio = (t, r, n) =>
                                (ra = e._ma_device_process_pcm_frames_capture__webaudio =
                                    re.ma_device_process_pcm_frames_capture__webaudio)(t, r, n)),
                            ro = (e._ma_device_process_pcm_frames_playback__webaudio = (t, r, n) =>
                                (ro = e._ma_device_process_pcm_frames_playback__webaudio =
                                    re.ma_device_process_pcm_frames_playback__webaudio)(t, r, n));
                        function ri() {
                            function t() {
                                if (!o && ((o = !0), (e.calledRun = !0), !j)) {
                                    if (
                                        (e.noFSInit ||
                                            e$ ||
                                            ((e$ = !0),
                                            (e.stdin = e.stdin),
                                            (e.stdout = e.stdout),
                                            (e.stderr = e.stderr),
                                            e.stdin ? eW("stdin", e.stdin) : ez("/dev/tty", "/dev/stdin"),
                                            e.stdout ? eW("stdout", null, e.stdout) : ez("/dev/tty", "/dev/stdout"),
                                            e.stderr ? eW("stderr", null, e.stderr) : ez("/dev/tty1", "/dev/stderr"),
                                            eB("/dev/stdin", 0),
                                            eB("/dev/stdout", 1),
                                            eB("/dev/stderr", 1)),
                                        (ex = !1),
                                        X(Y),
                                        i(e),
                                        e.onRuntimeInitialized && e.onRuntimeInitialized(),
                                        e.postRun)
                                    )
                                        for (
                                            "function" == typeof e.postRun && (e.postRun = [e.postRun]);
                                            e.postRun.length;
                                        ) {
                                            var t = e.postRun.shift();
                                            F.unshift(t);
                                        }
                                    X(F);
                                }
                            }
                            if (!(0 < H)) {
                                if (e.preRun)
                                    for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length; )
                                        !(function () {
                                            var t = e.preRun.shift();
                                            N.unshift(t);
                                        })();
                                X(N),
                                    0 < H ||
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
                            ((e.dynCall_iiji = (t, r, n, s, a) => (e.dynCall_iiji = re.dynCall_iiji)(t, r, n, s, a)),
                            (e.dynCall_jiji = (t, r, n, s, a) => (e.dynCall_jiji = re.dynCall_jiji)(t, r, n, s, a)),
                            (e.dynCall_iiiji = (t, r, n, s, a, o) =>
                                (e.dynCall_iiiji = re.dynCall_iiiji)(t, r, n, s, a, o)),
                            (e.dynCall_iij = (t, r, n, s) => (e.dynCall_iij = re.dynCall_iij)(t, r, n, s)),
                            (e.dynCall_jii = (t, r, n) => (e.dynCall_jii = re.dynCall_jii)(t, r, n)),
                            (e.dynCall_viijii = (t, r, n, s, a, o, i) =>
                                (e.dynCall_viijii = re.dynCall_viijii)(t, r, n, s, a, o, i)),
                            (e.dynCall_iiiiij = (t, r, n, s, a, o, i) =>
                                (e.dynCall_iiiiij = re.dynCall_iiiiij)(t, r, n, s, a, o, i)),
                            (e.dynCall_iiiiijj = (t, r, n, s, a, o, i, u, c) =>
                                (e.dynCall_iiiiijj = re.dynCall_iiiiijj)(t, r, n, s, a, o, i, u, c)),
                            (e.dynCall_iiiiiijj = (t, r, n, s, a, o, i, u, c, l) =>
                                (e.dynCall_iiiiiijj = re.dynCall_iiiiiijj)(t, r, n, s, a, o, i, u, c, l)),
                            (B = function e() {
                                o || ri(), o || (B = e);
                            }),
                            e.preInit)
                        )
                            for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length; )
                                e.preInit.pop()();
                        return ri(), c;
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
                        AudioAssetWrapper: () => a.AudioAssetWrapper,
                        AudioWrapper: () => a.AudioWrapper,
                        BLANK_URL: () => s.BLANK_URL,
                        CustomFileAssetLoaderWrapper: () => a.CustomFileAssetLoaderWrapper,
                        FileAssetWrapper: () => a.FileAssetWrapper,
                        FileFinalizer: () => a.FileFinalizer,
                        FontAssetWrapper: () => a.FontAssetWrapper,
                        FontWrapper: () => a.FontWrapper,
                        ImageAssetWrapper: () => a.ImageAssetWrapper,
                        ImageWrapper: () => a.ImageWrapper,
                        createFinalization: () => a.createFinalization,
                        finalizationRegistry: () => a.finalizationRegistry,
                        registerTouchInteractions: () => n.registerTouchInteractions,
                        sanitizeUrl: () => s.sanitizeUrl,
                    });
                var n = r(6),
                    s = r(7),
                    a = r(8);
            },
            (e, t, r) => {
                r.r(t), r.d(t, { registerTouchInteractions: () => a });
                var n = void 0,
                    s = function (e, t, r) {
                        var n,
                            s,
                            a = [];
                        if (
                            ["touchstart", "touchmove"].indexOf(e.type) > -1 &&
                            (null == (n = e.changedTouches) ? void 0 : n.length)
                        ) {
                            t || e.preventDefault();
                            for (var o = 0, i = r ? e.changedTouches.length : 1; o < i; ) {
                                var u = e.changedTouches[o];
                                a.push({ clientX: u.clientX, clientY: u.clientY, identifier: u.identifier }), o++;
                            }
                        } else if ("touchend" === e.type && (null == (s = e.changedTouches) ? void 0 : s.length))
                            for (var o = 0, i = r ? e.changedTouches.length : 1; o < i; ) {
                                var u = e.changedTouches[o];
                                a.push({ clientX: u.clientX, clientY: u.clientY, identifier: u.identifier }), o++;
                            }
                        else a.push({ clientX: e.clientX, clientY: e.clientY, identifier: 0 });
                        return a;
                    },
                    a = function (e) {
                        var t = e.canvas,
                            r = e.artboard,
                            a = e.stateMachines,
                            o = void 0 === a ? [] : a,
                            i = e.renderer,
                            u = e.rive,
                            c = e.fit,
                            l = e.alignment,
                            d = e.isTouchScrollEnabled,
                            f = void 0 !== d && d,
                            p = e.dispatchPointerExit,
                            h = void 0 === p || p,
                            m = e.enableMultiTouch,
                            v = void 0 !== m && m,
                            g = e.layoutScaleFactor,
                            y = void 0 === g ? 1 : g,
                            b = e.listenOnDocumentBody,
                            _ = e.eventCapture;
                        if (!t || !o.length || !i || !u || !r || "u" < typeof window) return null;
                        var x = null,
                            w = !1,
                            k = function (e) {
                                if (w && e instanceof MouseEvent) {
                                    "mouseup" == e.type && (w = !1);
                                    return;
                                }
                                (w = f && "touchend" === e.type && "touchstart" === x), (x = e.type);
                                var n = t.getBoundingClientRect(),
                                    a = s(e, f, v),
                                    i = u.computeAlignment(
                                        c,
                                        l,
                                        { minX: 0, minY: 0, maxX: n.width, maxY: n.height },
                                        r.bounds,
                                        y,
                                    ),
                                    d = new u.Mat2D();
                                i.invert(d);
                                var p = [];
                                switch (
                                    (a.forEach(function (t) {
                                        var r = t.clientX,
                                            s = t.clientY;
                                        if (r || s) {
                                            var a = r - n.left,
                                                o = s - n.top;
                                            if (
                                                (a >= 0 && a <= n.width && o >= 0 && o <= n.height) ||
                                                ["mouseleave", "mouseout"].includes(e.type)
                                            ) {
                                                var i = new u.Vec2D(a, o),
                                                    c = u.mapXY(d, i),
                                                    l = c.x(),
                                                    f = c.y();
                                                (t.transformedX = l),
                                                    (t.transformedY = f),
                                                    c.delete(),
                                                    i.delete(),
                                                    p.push(t);
                                            }
                                        }
                                    }),
                                    d.delete(),
                                    i.delete(),
                                    e.type)
                                ) {
                                    case "mouseleave":
                                    case "mouseout":
                                        for (
                                            var m = function (e) {
                                                    h
                                                        ? p.forEach(function (t) {
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
                                                        : p.forEach(function (t) {
                                                              e.pointerMove(
                                                                  t.transformedX,
                                                                  t.transformedY,
                                                                  t.identifier,
                                                              );
                                                          });
                                                },
                                                g = 0;
                                            g < o.length;
                                            g++
                                        ) {
                                            var b = o[g];
                                            m(b);
                                        }
                                        break;
                                    case "mouseenter":
                                    case "touchmove":
                                    case "mouseover":
                                    case "mousemove":
                                        for (
                                            var _ = function (e) {
                                                    p.forEach(function (t) {
                                                        e.pointerMove(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                k = 0;
                                            k < o.length;
                                            k++
                                        ) {
                                            var b = o[k];
                                            _(b);
                                        }
                                        break;
                                    case "touchstart":
                                    case "mousedown":
                                        for (
                                            var M = function (e) {
                                                    p.forEach(function (t) {
                                                        e.pointerDown(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                S = 0;
                                            S < o.length;
                                            S++
                                        ) {
                                            var b = o[S];
                                            M(b);
                                        }
                                        break;
                                    case "touchend":
                                        for (
                                            var E = function (e) {
                                                    p.forEach(function (t) {
                                                        e.pointerUp(t.transformedX, t.transformedY, t.identifier),
                                                            e.pointerExit(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                L = 0;
                                            L < o.length;
                                            L++
                                        ) {
                                            var b = o[L];
                                            E(b);
                                        }
                                        break;
                                    case "mouseup":
                                        for (
                                            var T = function (e) {
                                                    p.forEach(function (t) {
                                                        e.pointerUp(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                D = 0;
                                            D < o.length;
                                            D++
                                        ) {
                                            var b = o[D];
                                            T(b);
                                        }
                                }
                            }.bind(n),
                            M = b ? t.ownerDocument.body : t;
                        return (
                            M.addEventListener("mouseover", k, _),
                            M.addEventListener("mouseenter", k, _),
                            M.addEventListener("mouseout", k, _),
                            M.addEventListener("mouseleave", k, _),
                            M.addEventListener("mousemove", k, _),
                            M.addEventListener("mousedown", k, _),
                            M.addEventListener("mouseup", k, _),
                            t.addEventListener("touchmove", k, { passive: f }),
                            t.addEventListener("touchstart", k, { passive: f }),
                            t.addEventListener("touchend", k),
                            function () {
                                M.removeEventListener("mouseover", k, _),
                                    M.removeEventListener("mouseenter", k, _),
                                    M.removeEventListener("mouseout", k, _),
                                    M.removeEventListener("mouseleave", k, _),
                                    M.removeEventListener("mousemove", k, _),
                                    M.removeEventListener("mousedown", k, _),
                                    M.removeEventListener("mouseup", k, _),
                                    t.removeEventListener("touchmove", k),
                                    t.removeEventListener("touchstart", k),
                                    t.removeEventListener("touchend", k);
                            }
                        );
                    };
            },
            (e, t, r) => {
                r.r(t), r.d(t, { BLANK_URL: () => c, sanitizeUrl: () => l });
                var n = /^([^\w]*)(javascript|data|vbscript)/im,
                    s = /&#(\w+)(^\w|;)?/g,
                    a = /&(newline|tab);/gi,
                    o = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
                    i = /^.+(:|&colon;)/gim,
                    u = [".", "/"],
                    c = "about:blank";
                function l(e) {
                    if (!e) return c;
                    var t = e
                        .replace(o, "")
                        .replace(s, function (e, t) {
                            return String.fromCharCode(t);
                        })
                        .replace(a, "")
                        .replace(o, "")
                        .trim();
                    if (!t) return c;
                    if (u.indexOf(t[0]) > -1) return t;
                    var r = t.match(i);
                    if (!r) return t;
                    var l = r[0];
                    return n.test(l) ? c : t;
                }
            },
            (e, t, r) => {
                r.r(t),
                    r.d(t, {
                        AudioAssetWrapper: () => h,
                        AudioWrapper: () => c,
                        CustomFileAssetLoaderWrapper: () => d,
                        FileAssetWrapper: () => f,
                        FileFinalizer: () => a,
                        FontAssetWrapper: () => m,
                        FontWrapper: () => l,
                        ImageAssetWrapper: () => p,
                        ImageWrapper: () => u,
                        createFinalization: () => y,
                        finalizationRegistry: () => g,
                    });
                var n,
                    s =
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
                    a = (function () {
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
                    o = (function () {
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
                    i = (function () {
                        function e() {
                            this.selfUnref = !1;
                        }
                        return (e.prototype.unref = function () {}), e;
                    })(),
                    u = (function (e) {
                        function t(t) {
                            var r = e.call(this) || this;
                            return (r._nativeImage = t), r;
                        }
                        return (
                            s(t, e),
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
                    })(i),
                    c = (function (e) {
                        function t(t) {
                            var r = e.call(this) || this;
                            return (r._nativeAudio = t), r;
                        }
                        return (
                            s(t, e),
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
                    })(i),
                    l = (function (e) {
                        function t(t) {
                            var r = e.call(this) || this;
                            return (r._nativeFont = t), r;
                        }
                        return (
                            s(t, e),
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
                    })(i),
                    d = (function () {
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
                                        ? (r = new p(e))
                                        : e.isAudio
                                          ? (r = new h(e))
                                          : e.isFont && (r = new m(e)),
                                    this._assetLoaderCallback(r, t)
                                );
                            }),
                            e
                        );
                    })(),
                    f = (function () {
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
                    p = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this;
                        }
                        return (
                            s(t, e),
                            (t.prototype.setRenderImage = function (e) {
                                this._nativeFileAsset.setRenderImage(e.nativeImage);
                            }),
                            t
                        );
                    })(f),
                    h = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this;
                        }
                        return (
                            s(t, e),
                            (t.prototype.setAudioSource = function (e) {
                                this._nativeFileAsset.setAudioSource(e.nativeAudio);
                            }),
                            t
                        );
                    })(f),
                    m = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this;
                        }
                        return (
                            s(t, e),
                            (t.prototype.setFont = function (e) {
                                this._nativeFileAsset.setFont(e.nativeFont);
                            }),
                            t
                        );
                    })(f),
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
                    g = new ("u" > typeof FinalizationRegistry ? FinalizationRegistry : v)(function (e) {
                        null == e || e.unref();
                    }),
                    y = function (e, t) {
                        var r = new o(t);
                        g.register(e, r);
                    };
            },
        ],
        ec = {};
    function el(e) {
        var t = ec[e];
        if (void 0 !== t) return t.exports;
        var r = (ec[e] = { exports: {} });
        return eu[e](r, r.exports, el), r.exports;
    }
    (el.d = (e, t) => {
        for (var r in t) el.o(t, r) && !el.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
        (el.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (el.r = (e) => {
            "u" > typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        });
    var ed = {};
    return (
        el.r(ed),
        el.d(ed, {
            Alignment: () => t,
            DataEnum: () => U,
            EventType: () => s,
            Fit: () => e,
            Layout: () => x,
            LoopType: () => a,
            Rive: () => z,
            RiveEventType: () => n,
            RiveFile: () => H,
            RuntimeLoader: () => w,
            StateMachineInput: () => M,
            StateMachineInputType: () => r,
            Testing: () => es,
            ViewModel: () => B,
            ViewModelInstance: () => $,
            ViewModelInstanceArtboard: () => et,
            ViewModelInstanceAssetImage: () => ee,
            ViewModelInstanceBoolean: () => G,
            ViewModelInstanceColor: () => Q,
            ViewModelInstanceEnum: () => X,
            ViewModelInstanceList: () => Z,
            ViewModelInstanceNumber: () => q,
            ViewModelInstanceString: () => K,
            ViewModelInstanceTrigger: () => J,
            ViewModelInstanceValue: () => V,
            decodeAudio: () => ea,
            decodeFont: () => ei,
            decodeImage: () => eo,
        }),
        (u = el(1)),
        (c = el(2)),
        (l = el(3)),
        (d = el(5)),
        (f = function (e, t) {
            return (f =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                })(e, t);
        }),
        (p = function (e, t) {
            if ("function" != typeof t && null !== t)
                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function r() {
                this.constructor = e;
            }
            f(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
        }),
        (h = function () {
            return (h =
                Object.assign ||
                function (e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e;
                }).apply(this, arguments);
        }),
        (m = function (e, t, r, n) {
            return new (r || (r = Promise))(function (s, a) {
                function o(e) {
                    try {
                        u(n.next(e));
                    } catch (e) {
                        a(e);
                    }
                }
                function i(e) {
                    try {
                        u(n.throw(e));
                    } catch (e) {
                        a(e);
                    }
                }
                function u(e) {
                    var t;
                    e.done
                        ? s(e.value)
                        : ((t = e.value) instanceof r
                              ? t
                              : new r(function (e) {
                                    e(t);
                                })
                          ).then(o, i);
                }
                u((n = n.apply(e, t || [])).next());
            });
        }),
        (v = function (e, t) {
            var r,
                n,
                s,
                a = {
                    label: 0,
                    sent: function () {
                        if (1 & s[0]) throw s[1];
                        return s[1];
                    },
                    trys: [],
                    ops: [],
                },
                o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
            return (
                (o.next = i(0)),
                (o.throw = i(1)),
                (o.return = i(2)),
                "function" == typeof Symbol &&
                    (o[Symbol.iterator] = function () {
                        return this;
                    }),
                o
            );
            function i(i) {
                return function (u) {
                    var c = [i, u];
                    if (r) throw TypeError("Generator is already executing.");
                    for (; o && ((o = 0), c[0] && (a = 0)), a; )
                        try {
                            if (
                                ((r = 1),
                                n &&
                                    (s =
                                        2 & c[0]
                                            ? n.return
                                            : c[0]
                                              ? n.throw || ((s = n.return) && s.call(n), 0)
                                              : n.next) &&
                                    !(s = s.call(n, c[1])).done)
                            )
                                return s;
                            switch (((n = 0), s && (c = [2 & c[0], s.value]), c[0])) {
                                case 0:
                                case 1:
                                    s = c;
                                    break;
                                case 4:
                                    return a.label++, { value: c[1], done: !1 };
                                case 5:
                                    a.label++, (n = c[1]), (c = [0]);
                                    continue;
                                case 7:
                                    (c = a.ops.pop()), a.trys.pop();
                                    continue;
                                default:
                                    if (
                                        !(s = (s = a.trys).length > 0 && s[s.length - 1]) &&
                                        (6 === c[0] || 2 === c[0])
                                    ) {
                                        a = 0;
                                        continue;
                                    }
                                    if (3 === c[0] && (!s || (c[1] > s[0] && c[1] < s[3]))) {
                                        a.label = c[1];
                                        break;
                                    }
                                    if (6 === c[0] && a.label < s[1]) {
                                        (a.label = s[1]), (s = c);
                                        break;
                                    }
                                    if (s && a.label < s[2]) {
                                        (a.label = s[2]), a.ops.push(c);
                                        break;
                                    }
                                    s[2] && a.ops.pop(), a.trys.pop();
                                    continue;
                            }
                            c = t.call(e, a);
                        } catch (e) {
                            (c = [6, e]), (n = 0);
                        } finally {
                            r = s = 0;
                        }
                    if (5 & c[0]) throw c[1];
                    return { value: c[0] ? c[1] : void 0, done: !0 };
                };
            }
        }),
        (g = function (e, t, r) {
            if (r || 2 == arguments.length)
                for (var n, s = 0, a = t.length; s < a; s++)
                    (!n && s in t) || (n || (n = Array.prototype.slice.call(t, 0, s)), (n[s] = t[s]));
            return e.concat(n || Array.prototype.slice.call(t));
        }),
        (y = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.isHandledError = !0), t;
            }
            return p(t, e), t;
        })(Error)),
        ((b = e || (e = {})).Cover = "cover"),
        (b.Contain = "contain"),
        (b.Fill = "fill"),
        (b.FitWidth = "fitWidth"),
        (b.FitHeight = "fitHeight"),
        (b.None = "none"),
        (b.ScaleDown = "scaleDown"),
        (b.Layout = "layout"),
        ((_ = t || (t = {})).Center = "center"),
        (_.TopLeft = "topLeft"),
        (_.TopCenter = "topCenter"),
        (_.TopRight = "topRight"),
        (_.CenterLeft = "centerLeft"),
        (_.CenterRight = "centerRight"),
        (_.BottomLeft = "bottomLeft"),
        (_.BottomCenter = "bottomCenter"),
        (_.BottomRight = "bottomRight"),
        (x = (function () {
            function r(r) {
                var n, s, a, o, i, u, c;
                (this.fit = null != (n = null == r ? void 0 : r.fit) ? n : e.Contain),
                    (this.alignment = null != (s = null == r ? void 0 : r.alignment) ? s : t.Center),
                    (this.layoutScaleFactor = null != (a = null == r ? void 0 : r.layoutScaleFactor) ? a : 1),
                    (this.minX = null != (o = null == r ? void 0 : r.minX) ? o : 0),
                    (this.minY = null != (i = null == r ? void 0 : r.minY) ? i : 0),
                    (this.maxX = null != (u = null == r ? void 0 : r.maxX) ? u : 0),
                    (this.maxY = null != (c = null == r ? void 0 : r.maxY) ? c : 0);
            }
            return (
                (r.new = function (e) {
                    var t = e.fit,
                        n = e.alignment,
                        s = e.minX,
                        a = e.minY,
                        o = e.maxX,
                        i = e.maxY;
                    return (
                        console.warn("This function is deprecated: please use `new Layout({})` instead"),
                        new r({ fit: t, alignment: n, minX: s, minY: a, maxX: o, maxY: i })
                    );
                }),
                (r.prototype.copyWith = function (e) {
                    var t = e.fit,
                        n = e.alignment,
                        s = e.layoutScaleFactor,
                        a = e.minX,
                        o = e.minY,
                        i = e.maxX,
                        u = e.maxY;
                    return new r({
                        fit: null != t ? t : this.fit,
                        alignment: null != n ? n : this.alignment,
                        layoutScaleFactor: null != s ? s : this.layoutScaleFactor,
                        minX: null != a ? a : this.minX,
                        minY: null != o ? o : this.minY,
                        maxX: null != i ? i : this.maxX,
                        maxY: null != u ? u : this.maxY,
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
        (w = (function () {
            function e() {}
            return (
                (e.loadRuntime = function () {
                    u.default({
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
                                .concat(c.name, "@")
                                .concat(c.version, "/rive_fallback.wasm");
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
                (e.wasmURL = "https://unpkg.com/".concat(c.name, "@").concat(c.version, "/rive.wasm")),
                e
            );
        })()),
        ((k = r || (r = {}))[(k.Number = 56)] = "Number"),
        (k[(k.Trigger = 58)] = "Trigger"),
        (k[(k.Boolean = 59)] = "Boolean"),
        (M = (function () {
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
        ((S = n || (n = {}))[(S.General = 128)] = "General"),
        (S[(S.OpenUrl = 131)] = "OpenUrl"),
        (L = (function (e) {
            function t(t, r) {
                var n = e.call(this, !1) || this;
                return (n.nativeArtboard = t), (n.file = r), n;
            }
            return p(t, e), t;
        })(
            (E = function (e) {
                (this.isBindableArtboard = !1), (this.isBindableArtboard = e);
            }),
        )),
        (T = (function (e) {
            function t(t) {
                var r = e.call(this, !0) || this;
                return (r.selfUnref = !1), (r.nativeArtboard = t), r;
            }
            return (
                p(t, e),
                (t.prototype.destroy = function () {
                    this.selfUnref && this.nativeArtboard.unref();
                }),
                t
            );
        })(E)),
        (D = (function () {
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
                        ? new M(r.Boolean, e.asBool())
                        : e.type === t.SMIInput.number
                          ? new M(r.Number, e.asNumber())
                          : e.type === t.SMIInput.trigger
                            ? new M(r.Trigger, e.asTrigger())
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
        (O = (function () {
            function e(e, t, r, n, s) {
                void 0 === n && (n = []),
                    void 0 === s && (s = []),
                    (this.runtime = e),
                    (this.artboard = t),
                    (this.eventManager = r),
                    (this.animations = n),
                    (this.stateMachines = s);
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
                                a = this.stateMachines.map(function (e) {
                                    return e.name;
                                }),
                                o = 0;
                            o < e.length;
                            o++
                        ) {
                            var i = n.indexOf(e[o]),
                                u = a.indexOf(e[o]);
                            if (i >= 0 || u >= 0)
                                i >= 0 ? (this.animations[i].playing = t) : (this.stateMachines[u].playing = t);
                            else {
                                var c = this.artboard.animationByName(e[o]);
                                if (c) {
                                    var d = new l.Animation(c, this.artboard, this.runtime, t);
                                    d.advance(0), d.apply(1), this.animations.push(d);
                                } else {
                                    var f = this.artboard.stateMachineByName(e[o]);
                                    if (f) {
                                        var p = new D(f, this.runtime, t, this.artboard);
                                        this.stateMachines.push(p);
                                    }
                                }
                            }
                        }
                    return (
                        r &&
                            (t
                                ? this.eventManager.fire({ type: s.Play, data: this.playing })
                                : this.eventManager.fire({ type: s.Pause, data: this.paused })),
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
                        var s = r.indexOf(e[n]);
                        if (s >= 0) this.animations[s].playing = t;
                        else {
                            var a = this.artboard.animationByName(e[n]);
                            if (a) {
                                var o = new l.Animation(a, this.artboard, this.runtime, t);
                                o.advance(0), o.apply(1), this.animations.push(o);
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
                        var s = r.indexOf(e[n]);
                        if (s >= 0) this.stateMachines[s].playing = t;
                        else {
                            var a = this.artboard.stateMachineByName(e[n]);
                            if (a) {
                                var o = new D(a, this.runtime, t, this.artboard);
                                this.stateMachines.push(o);
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
                        var a = this.stateMachines.filter(function (t) {
                            return e.includes(t.name);
                        });
                        a.forEach(function (e) {
                            e.cleanup(), t.stateMachines.splice(t.stateMachines.indexOf(e), 1);
                        }),
                            (r = n
                                .map(function (e) {
                                    return e.name;
                                })
                                .concat(
                                    a.map(function (e) {
                                        return e.name;
                                    }),
                                ));
                    }
                    return this.eventManager.fire({ type: s.Stop, data: r }), r;
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
                              ? (this.eventManager.fire({ type: s.Loop, data: { animation: r.name, type: a.Loop } }),
                                (r.loopCount = 0))
                              : 2 === r.loopValue &&
                                r.loopCount > 1 &&
                                (this.eventManager.fire({
                                    type: s.Loop,
                                    data: { animation: r.name, type: a.PingPong },
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
                    e.length > 0 && this.eventManager.fire({ type: s.StateChange, data: e });
                }),
                (e.prototype.handleAdvancing = function (e) {
                    this.eventManager.fire({ type: s.Advance, data: e });
                }),
                e
            );
        })()),
        ((C = s || (s = {})).Load = "load"),
        (C.LoadError = "loaderror"),
        (C.Play = "play"),
        (C.Pause = "pause"),
        (C.Stop = "stop"),
        (C.Loop = "loop"),
        (C.Draw = "draw"),
        (C.Advance = "advance"),
        (C.StateChange = "statechange"),
        (C.RiveEvent = "riveevent"),
        (C.AudioStatusChange = "audiostatuschange"),
        ((P = a || (a = {})).OneShot = "oneshot"),
        (P.Loop = "loop"),
        (P.PingPong = "pingpong"),
        (A = (function () {
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
        (R = (function () {
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
        ((j = o || (o = {}))[(j.AVAILABLE = 0)] = "AVAILABLE"),
        (j[(j.UNAVAILABLE = 1)] = "UNAVAILABLE"),
        (I = new ((function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._started = !1), (t._enabled = !1), (t._status = o.UNAVAILABLE), t;
            }
            return (
                p(t, e),
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
                    this.fire({ type: s.AudioStatusChange }), this.removeAll();
                }),
                (t.prototype.enableAudio = function () {
                    return m(this, void 0, void 0, function () {
                        return v(this, function (e) {
                            return (
                                this._enabled ||
                                    ((this._enabled = !0), (this._status = o.AVAILABLE), this.reportToListeners()),
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
                                    if (this._status !== o.UNAVAILABLE || null === this._audioContext) return [3, 4];
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
                                    if (this._status !== o.UNAVAILABLE) return [3, 5];
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
                        return this._status === o.UNAVAILABLE ? (this.testAudio(), 0) : 1;
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
        })(A))()),
        (N = (function () {
            function e() {}
            return (
                (e.prototype.observe = function () {}),
                (e.prototype.unobserve = function () {}),
                (e.prototype.disconnect = function () {}),
                e
            );
        })()),
        (Y = globalThis.ResizeObserver || N),
        (F = new ((function () {
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
                    (this._resizeObserver = new Y(this._onObserved));
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
        (H = (function () {
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
                    (this.eventManager = new A()),
                    e.onLoad && this.on(s.Load, e.onLoad),
                    e.onLoadError && this.on(s.LoadError, e.onLoadError);
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
                        var t, r, n, a;
                        return v(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    if (!this.src) return [3, 2];
                                    return (t = this), [4, er(this.src)];
                                case 1:
                                    (t.buffer = o.sent()), (o.label = 2);
                                case 2:
                                    if (this.destroyed) return [2];
                                    return (
                                        this.assetLoader &&
                                            (r = new d.CustomFileAssetLoaderWrapper(this.runtime, this.assetLoader)
                                                .assetLoader),
                                        (n = this),
                                        [4, this.runtime.load(new Uint8Array(this.buffer), r, this.enableRiveAssetCDN)]
                                    );
                                case 3:
                                    if (
                                        ((n.file = o.sent()),
                                        (a = new d.FileFinalizer(this.file)),
                                        d.finalizationRegistry.register(this, a),
                                        this.destroyed)
                                    )
                                        return this.releaseFile(), [2];
                                    return (
                                        null !== this.file
                                            ? this.eventManager.fire({ type: s.Load, data: this })
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
                                    return n.trys.push([1, 4, , 5]), (t = this), [4, w.awaitInstance()];
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
                    throw (this.eventManager.fire({ type: s.LoadError, data: e }), Error(e));
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
                        var t = new T(e);
                        return (0, d.createFinalization)(t, t.nativeArtboard), this.bindableArtboards.push(t), t;
                    }
                    return null;
                }),
                (e.prototype.getArtboard = function (e) {
                    var t = this.file.artboardByName(e);
                    if (null != t) return new L(t, this);
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
        (z = (function () {
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
                        (this._observed = F.add(this.canvas, this.onCanvasResize)),
                    (this.src = e.src),
                    (this.buffer = e.buffer),
                    (this.riveFile = e.riveFile),
                    (this.layout = null != (t = e.layout) ? t : new x()),
                    (this.shouldDisableRiveListeners = !!e.shouldDisableRiveListeners),
                    (this.isTouchScrollEnabled = !!e.isTouchScrollEnabled),
                    (this.automaticallyHandleEvents = !!e.automaticallyHandleEvents),
                    (this.dispatchPointerExit =
                        !1 === e.dispatchPointerExit ? e.dispatchPointerExit : this.dispatchPointerExit),
                    (this.enableMultiTouch = !!e.enableMultiTouch),
                    (this.enableRiveAssetCDN = void 0 === e.enableRiveAssetCDN || e.enableRiveAssetCDN),
                    (this.eventManager = new A()),
                    e.onLoad && this.on(s.Load, e.onLoad),
                    e.onLoadError && this.on(s.LoadError, e.onLoadError),
                    e.onPlay && this.on(s.Play, e.onPlay),
                    e.onPause && this.on(s.Pause, e.onPause),
                    e.onStop && this.on(s.Stop, e.onStop),
                    e.onLoop && this.on(s.Loop, e.onLoop),
                    e.onStateChange && this.on(s.StateChange, e.onStateChange),
                    e.onAdvance && this.on(s.Advance, e.onAdvance),
                    e.onload && !e.onLoad && this.on(s.Load, e.onload),
                    e.onloaderror && !e.onLoadError && this.on(s.LoadError, e.onloaderror),
                    e.onplay && !e.onPlay && this.on(s.Play, e.onplay),
                    e.onpause && !e.onPause && this.on(s.Pause, e.onpause),
                    e.onstop && !e.onStop && this.on(s.Stop, e.onstop),
                    e.onloop && !e.onLoop && this.on(s.Loop, e.onloop),
                    e.onstatechange && !e.onStateChange && this.on(s.StateChange, e.onstatechange),
                    e.assetLoader && (this.assetLoader = e.assetLoader),
                    (this.taskQueue = new R(this.eventManager)),
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
                        s = e.buffer,
                        a = e.riveFile,
                        o = e.animations,
                        i = e.stateMachines,
                        u = e.artboard,
                        c = e.autoplay,
                        l = void 0 !== c && c,
                        d = e.useOffscreenRenderer,
                        f = void 0 !== d && d,
                        p = e.autoBind,
                        h = void 0 !== p && p;
                    if (!this.destroyed) {
                        if (
                            ((this.src = n),
                            (this.buffer = s),
                            (this.riveFile = a),
                            !this.src && !this.buffer && !this.riveFile)
                        )
                            throw new y(t.missingErrorMessage);
                        var m = en(o),
                            v = en(i);
                        (this.loaded = !1),
                            (this.readyForPlaying = !1),
                            w
                                .awaitInstance()
                                .then(function (e) {
                                    r.destroyed ||
                                        ((r.runtime = e),
                                        r.removeRiveListeners(),
                                        r.deleteRiveRenderer(),
                                        (r.renderer = r.runtime.makeRenderer(r.canvas, f)),
                                        r.canvas.width || r.canvas.height || r.resizeDrawingSurfaceToCanvas(),
                                        r
                                            .initData(u, m, v, l, h)
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
                            s = this.dispatchPointerExit,
                            a = this.enableMultiTouch;
                        e && "isTouchScrollEnabled" in e && (n = e.isTouchScrollEnabled);
                        var o = this.canvas;
                        null != this.eventTarget && (o = this.eventTarget),
                            (this.eventCleanup = (0, d.registerTouchInteractions)({
                                canvas: o,
                                listenOnDocumentBody: this.listenOnDocumentBody,
                                eventCapture: this.eventCapture,
                                artboard: this.artboard,
                                stateMachines: r,
                                renderer: this.renderer,
                                rive: this.runtime,
                                fit: this._layout.runtimeFit(this.runtime),
                                alignment: this._layout.runtimeAlignment(this.runtime),
                                isTouchScrollEnabled: n,
                                dispatchPointerExit: s,
                                enableMultiTouch: a,
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
                    I.status == o.UNAVAILABLE &&
                        (null == (e = this.artboard) ? void 0 : e.hasAudio) &&
                        null === this._audioEventListener &&
                        ((this._audioEventListener = {
                            type: s.AudioStatusChange,
                            callback: function () {
                                return t.onSystemAudioChanged();
                            },
                        }),
                        I.add(this._audioEventListener),
                        I.establishAudio());
                }),
                (t.prototype.initArtboardSize = function () {
                    this.artboard &&
                        ((this._artboardWidth = this.artboard.width = this._artboardWidth || this.artboard.width),
                        (this._artboardHeight = this.artboard.height = this._artboardHeight || this.artboard.height));
                }),
                (t.prototype.initData = function (e, t, r, n, a) {
                    return m(this, void 0, void 0, function () {
                        var o, i, u;
                        return v(this, function (c) {
                            switch (c.label) {
                                case 0:
                                    if ((c.trys.push([0, 3, , 4]), null != this.riveFile)) return [3, 2];
                                    return (
                                        (o = new H({
                                            src: this.src,
                                            buffer: this.buffer,
                                            enableRiveAssetCDN: this.enableRiveAssetCDN,
                                            assetLoader: this.assetLoader,
                                        })),
                                        (this.riveFile = o),
                                        [4, o.init()]
                                    );
                                case 1:
                                    if ((c.sent(), this.destroyed)) return o.destroyIfUnused(), [2, !1];
                                    c.label = 2;
                                case 2:
                                    return (
                                        (this.file = this.riveFile.getInstance()),
                                        this.initArtboard(e, t, r, n, a),
                                        this.initArtboardSize(),
                                        this.initializeAudio(),
                                        (this.loaded = !0),
                                        this.eventManager.fire({
                                            type: s.Load,
                                            data: null != (u = this.src) ? u : "buffer",
                                        }),
                                        this.animator.advanceIfPaused(),
                                        (this.readyForPlaying = !0),
                                        this.taskQueue.process(),
                                        this.drawFrame(),
                                        [2, !0]
                                    );
                                case 3:
                                    var l;
                                    return (
                                        console.warn(
                                            (i =
                                                (l = c.sent()) && l.isHandledError
                                                    ? l.message
                                                    : "Problem loading file; may be corrupt!"),
                                        ),
                                        this.eventManager.fire({ type: s.LoadError, data: i }),
                                        [2, Promise.reject(i)]
                                    );
                                case 4:
                                    return [2];
                            }
                        });
                    });
                }),
                (t.prototype.initArtboard = function (e, t, r, n, a) {
                    if (this.file) {
                        var o,
                            i = e ? this.file.artboardByName(e) : this.file.defaultArtboard();
                        if (!i) {
                            var u = "Invalid artboard name or no default artboard";
                            console.warn(u), this.eventManager.fire({ type: s.LoadError, data: u });
                            return;
                        }
                        if (
                            ((this.artboard = i),
                            (i.volume = this._volume * I.systemVolume),
                            (this.animator = new O(this.runtime, this.artboard, this.eventManager)),
                            t.length > 0 || r.length > 0
                                ? ((o = t.concat(r)),
                                  this.animator.initLinearAnimations(t, n),
                                  this.animator.initStateMachines(r, n))
                                : (o = [this.animator.atLeastOne(n, !1)]),
                            this.taskQueue.add({ event: { type: n ? s.Play : s.Pause, data: o } }),
                            a)
                        ) {
                            var c = this.file.defaultArtboardViewModel(i);
                            if (null !== c) {
                                var l = c.defaultInstance();
                                if (null !== l) {
                                    var f = new $(l, null);
                                    (0, d.createFinalization)(f, f.runtimeInstance), this.bindViewModelInstance(f);
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
                        a = performance.now();
                    this.lastRenderTime || (this.lastRenderTime = e),
                        (this.renderSecondTimer += e - this.lastRenderTime),
                        this.renderSecondTimer > 5e3 && ((this.renderSecondTimer = 0), null == t || t());
                    var o = (e - this.lastRenderTime) / 1e3;
                    this.lastRenderTime = e;
                    for (
                        var i = this.animator.animations
                                .filter(function (e) {
                                    return e.playing || e.needsScrub;
                                })
                                .sort(function (e) {
                                    return e.needsScrub ? -1 : 1;
                                }),
                            u = 0;
                        u < i.length;
                        u++
                    ) {
                        var c = i[u];
                        c.advance(o), c.instance.didLoop && (c.loopCount += 1), c.apply(1);
                    }
                    for (
                        var l = this.animator.stateMachines.filter(function (e) {
                                return e.playing;
                            }),
                            f = 0;
                        f < l.length;
                        f++
                    ) {
                        var p = l[f],
                            h = p.reportedEventCount();
                        if (h)
                            for (var m = 0; m < h; m++) {
                                var v = p.reportedEventAt(m);
                                if (v)
                                    if (v.type === n.OpenUrl) {
                                        if (
                                            (this.eventManager.fire({ type: s.RiveEvent, data: v }),
                                            this.automaticallyHandleEvents)
                                        ) {
                                            var g = document.createElement("a"),
                                                y = v.url,
                                                b = v.target,
                                                _ = (0, d.sanitizeUrl)(y);
                                            y && g.setAttribute("href", _),
                                                b && g.setAttribute("target", b),
                                                _ && _ !== d.BLANK_URL && g.click();
                                        }
                                    } else this.eventManager.fire({ type: s.RiveEvent, data: v });
                            }
                        p.advanceAndApply(o);
                    }
                    0 == this.animator.stateMachines.length && this.artboard.advance(o);
                    var x = this.renderer;
                    x.clear(),
                        x.save(),
                        this.alignRenderer(),
                        this._hasZeroSize || this.artboard.draw(x),
                        x.restore(),
                        x.flush(),
                        this.animator.handleLooping(),
                        this.animator.handleStateChanges(),
                        this.animator.handleAdvancing(o),
                        this.frameCount++;
                    var w = performance.now();
                    for (this.frameTimes.push(w), this.durations.push(w - a); this.frameTimes[0] <= w - 1e3; )
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
                        null !== this._observed && F.remove(this._observed),
                        this.removeRiveListeners(),
                        this.file && (null == (e = this.riveFile) || e.cleanup(), (this.file = null)),
                        (this.riveFile = null),
                        this.deleteRiveRenderer(),
                        null !== this._audioEventListener &&
                            (I.remove(this._audioEventListener), (this._audioEventListener = null)),
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
                        s = en(null == e ? void 0 : e.animations),
                        a = en(null == e ? void 0 : e.stateMachines),
                        o = null != (t = null == e ? void 0 : e.autoplay) && t,
                        i = null != (r = null == e ? void 0 : e.autoBind) && r;
                    this.cleanupInstances(), this.initArtboard(n, s, a, o, i), this.taskQueue.process();
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
                            s = r.height,
                            a = t || window.devicePixelRatio || 1;
                        if (
                            ((this.devicePixelRatioUsed = a),
                            (this.canvas.width = a * n),
                            (this.canvas.height = a * s),
                            this.resizeToCanvas(),
                            this.drawFrame(),
                            this.layout.fit === e.Layout)
                        ) {
                            var o = this._layout.layoutScaleFactor;
                            (this.artboard.width = n / o), (this.artboard.height = s / o);
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
                    var s = this.retrieveInputAtPath(e, n);
                    s &&
                        (s.type === r.Boolean
                            ? (s.asBool().value = t)
                            : console.warn(
                                  "Input with name: '".concat(e, "', at path:'").concat(n, "' is not a boolean"),
                              ));
                }),
                (t.prototype.setNumberStateAtPath = function (e, t, n) {
                    var s = this.retrieveInputAtPath(e, n);
                    s &&
                        (s.type === r.Number
                            ? (s.asNumber().value = t)
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
                                        s = 0;
                                    s < r.animationCount();
                                    s++
                                ) {
                                    var a = r.animationByIndex(s);
                                    n.animations.push(a.name);
                                }
                                for (var o = 0; o < r.stateMachineCount(); o++) {
                                    for (
                                        var i = r.stateMachineByIndex(o),
                                            u = i.name,
                                            c = new this.runtime.StateMachineInstance(i, r),
                                            l = [],
                                            d = 0;
                                        d < c.inputCount();
                                        d++
                                    ) {
                                        var f = c.input(d);
                                        l.push({ name: f.name, type: f.type });
                                    }
                                    n.stateMachines.push({ name: u, inputs: l });
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
                        (this._volume = e), this.artboard && (this.artboard.volume = e * I.systemVolume);
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
                    return null !== t ? new B(t) : null;
                }),
                (t.prototype.viewModelByName = function (e) {
                    var t = this.file.viewModelByName(e);
                    return null !== t ? new B(t) : null;
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
                        if (e) return new B(e);
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
        (B = (function () {
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
                        var r = new $(t, null);
                        return (0, d.createFinalization)(r, t), r;
                    }
                    return null;
                }),
                (e.prototype.instanceByName = function (e) {
                    var t = this._viewModel.instanceByName(e);
                    if (null !== t) {
                        var r = new $(t, null);
                        return (0, d.createFinalization)(r, t), r;
                    }
                    return null;
                }),
                (e.prototype.defaultInstance = function () {
                    var e = this._viewModel.defaultInstance();
                    if (null !== e) {
                        var t = new $(e, null);
                        return (0, d.createFinalization)(t, e), t;
                    }
                    return null;
                }),
                (e.prototype.instance = function () {
                    var e = this._viewModel.instance();
                    if (null !== e) {
                        var t = new $(e, null);
                        return (0, d.createFinalization)(t, e), t;
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
        ((W = i || (i = {})).Number = "number"),
        (W.String = "string"),
        (W.Boolean = "boolean"),
        (W.Color = "color"),
        (W.Trigger = "trigger"),
        (W.Enum = "enum"),
        (W.List = "list"),
        (W.Image = "image"),
        (W.Artboard = "artboard"),
        ($ = (function () {
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
                            s,
                            a,
                            o,
                            u,
                            c,
                            l,
                            d,
                            f,
                            p,
                            h,
                            m,
                            v,
                            g,
                            y,
                            b,
                            _,
                            x,
                            w = this.internalViewModelInstance(e[t]);
                        return null !== w ? w.propertyFromPathSegments(e, t + 1, r) : null;
                    }
                    var k = null;
                    switch (r) {
                        case i.Number:
                            if (
                                null !==
                                (k =
                                    null != (s = null == (n = this._runtimeInstance) ? void 0 : n.number(e[t]))
                                        ? s
                                        : null)
                            )
                                return new q(k, this);
                            break;
                        case i.String:
                            if (
                                null !==
                                (k =
                                    null != (o = null == (a = this._runtimeInstance) ? void 0 : a.string(e[t]))
                                        ? o
                                        : null)
                            )
                                return new K(k, this);
                            break;
                        case i.Boolean:
                            if (
                                null !==
                                (k =
                                    null != (c = null == (u = this._runtimeInstance) ? void 0 : u.boolean(e[t]))
                                        ? c
                                        : null)
                            )
                                return new G(k, this);
                            break;
                        case i.Color:
                            if (
                                null !==
                                (k =
                                    null != (d = null == (l = this._runtimeInstance) ? void 0 : l.color(e[t]))
                                        ? d
                                        : null)
                            )
                                return new Q(k, this);
                            break;
                        case i.Trigger:
                            if (
                                null !==
                                (k =
                                    null != (p = null == (f = this._runtimeInstance) ? void 0 : f.trigger(e[t]))
                                        ? p
                                        : null)
                            )
                                return new J(k, this);
                            break;
                        case i.Enum:
                            if (
                                null !==
                                (k =
                                    null != (m = null == (h = this._runtimeInstance) ? void 0 : h.enum(e[t]))
                                        ? m
                                        : null)
                            )
                                return new X(k, this);
                            break;
                        case i.List:
                            if (
                                null !==
                                (k =
                                    null != (g = null == (v = this._runtimeInstance) ? void 0 : v.list(e[t]))
                                        ? g
                                        : null)
                            )
                                return new Z(k, this);
                            break;
                        case i.Image:
                            if (
                                null !==
                                (k =
                                    null != (b = null == (y = this._runtimeInstance) ? void 0 : y.image(e[t]))
                                        ? b
                                        : null)
                            )
                                return new ee(k, this);
                            break;
                        case i.Artboard:
                            if (
                                null !==
                                (k =
                                    null != (x = null == (_ = this._runtimeInstance) ? void 0 : _.artboard(e[t]))
                                        ? x
                                        : null)
                            )
                                return new et(k, this);
                    }
                    return null;
                }),
                (e.prototype.internalViewModelInstance = function (t) {
                    if (this._viewModelInstances.has(t)) return this._viewModelInstances.get(t);
                    var r,
                        n = null == (r = this._runtimeInstance) ? void 0 : r.viewModel(t);
                    if (null !== n) {
                        var s = new e(n, this);
                        return (
                            (0, d.createFinalization)(s, n),
                            s.internalIncrementReferenceCount(),
                            this._viewModelInstances.set(t, s),
                            s
                        );
                    }
                    return null;
                }),
                (e.prototype.number = function (e) {
                    return this.propertyFromPath(e, i.Number);
                }),
                (e.prototype.string = function (e) {
                    return this.propertyFromPath(e, i.String);
                }),
                (e.prototype.boolean = function (e) {
                    return this.propertyFromPath(e, i.Boolean);
                }),
                (e.prototype.color = function (e) {
                    return this.propertyFromPath(e, i.Color);
                }),
                (e.prototype.trigger = function (e) {
                    return this.propertyFromPath(e, i.Trigger);
                }),
                (e.prototype.enum = function (e) {
                    return this.propertyFromPath(e, i.Enum);
                }),
                (e.prototype.list = function (e) {
                    return this.propertyFromPath(e, i.List);
                }),
                (e.prototype.image = function (e) {
                    return this.propertyFromPath(e, i.Image);
                }),
                (e.prototype.artboard = function (e) {
                    return this.propertyFromPath(e, i.Artboard);
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
                            var s = this.internalViewModelInstance(e);
                            null !== s &&
                                (s.removeParent(this),
                                this._children.includes(s) &&
                                    (this._children = this._children.filter(function (e) {
                                        return e !== s;
                                    })),
                                s.cleanup()),
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
                        s = n.length > 1 ? this.viewModelFromPathSegments(n.slice(0, n.length - 1), 0) : this;
                    return null != (r = null == s ? void 0 : s.internalReplaceViewModel(n[n.length - 1], t)) && r;
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
                        var r = g([], this._children, !0);
                        this._children.length = 0;
                        var n = g([], this._parents, !0);
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
        (K = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                p(t, e),
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
            (V = (function () {
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
                p(t, e),
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
        })(V)),
        (G = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                p(t, e),
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
        })(V)),
        (J = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                p(t, e),
                (t.prototype.trigger = function () {
                    return this._viewModelInstanceValue.trigger();
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e();
                }),
                t
            );
        })(V)),
        (X = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                p(t, e),
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
        })(V)),
        (Z = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                p(t, e),
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
                        var r = new $(t, this._parentViewModel);
                        return (0, d.createFinalization)(r, t), r;
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
        })(V)),
        (Q = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                p(t, e),
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
        })(V)),
        (ee = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                p(t, e),
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
        })(V)),
        (et = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                p(t, e),
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
        })(V)),
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
        (es = { EventManager: A, TaskQueueManager: R }),
        (ea = function (e) {
            return m(void 0, void 0, void 0, function () {
                var t, r;
                return v(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return [
                                4,
                                new Promise(function (t) {
                                    return w.getInstance(function (r) {
                                        r.decodeAudio(e, t);
                                    });
                                }),
                            ];
                        case 1:
                            return (
                                (t = n.sent()),
                                (r = new d.AudioWrapper(t)),
                                d.finalizationRegistry.register(r, t),
                                [2, r]
                            );
                    }
                });
            });
        }),
        (eo = function (e) {
            return m(void 0, void 0, void 0, function () {
                var t, r;
                return v(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return [
                                4,
                                new Promise(function (t) {
                                    return w.getInstance(function (r) {
                                        r.decodeImage(e, t);
                                    });
                                }),
                            ];
                        case 1:
                            return (
                                (t = n.sent()),
                                (r = new d.ImageWrapper(t)),
                                d.finalizationRegistry.register(r, t),
                                [2, r]
                            );
                    }
                });
            });
        }),
        (ei = function (e) {
            return m(void 0, void 0, void 0, function () {
                var t, r;
                return v(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return [
                                4,
                                new Promise(function (t) {
                                    return w.getInstance(function (r) {
                                        r.decodeFont(e, t);
                                    });
                                }),
                            ];
                        case 1:
                            return (
                                (t = n.sent()),
                                (r = new d.FontWrapper(t)),
                                d.finalizationRegistry.register(r, t),
                                [2, r]
                            );
                    }
                });
            });
        }),
        ed
    );
})();
