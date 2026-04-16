!(function (t) {
    e.exports = t();
})(() =>
    (() => {
        "use strict";
        var e = [
                ,
                (e, t, n) => {
                    n.r(t), n.d(t, { default: () => r });
                    let r = (() => {
                        var e = "u" > typeof document ? document.currentScript?.src : void 0;
                        return function (t = {}) {
                            var n,
                                r,
                                i,
                                s = t,
                                a = new Promise((e, t) => {
                                    (r = e), (i = t);
                                }),
                                o = "object" == typeof window,
                                l = "function" == typeof importScripts;
                            function u() {
                                function e(e) {
                                    let s = r;
                                    (n = t = 0),
                                        (r = new Map()),
                                        s.forEach((t) => {
                                            try {
                                                t(e);
                                            } catch (e) {
                                                console.error(e);
                                            }
                                        }),
                                        this.nb(),
                                        i && i.Pb();
                                }
                                let t = 0,
                                    n = 0,
                                    r = new Map(),
                                    i = null,
                                    s = null;
                                (this.requestAnimationFrame = function (i) {
                                    t ||= requestAnimationFrame(e.bind(this));
                                    let s = ++n;
                                    return r.set(s, i), s;
                                }),
                                    (this.cancelAnimationFrame = function (e) {
                                        r.delete(e), t && 0 == r.size && (cancelAnimationFrame(t), (t = 0));
                                    }),
                                    (this.Nb = function (e) {
                                        s && (document.body.remove(s), (s = null)),
                                            e ||
                                                (((s = document.createElement("div")).style.backgroundColor = "black"),
                                                (s.style.position = "fixed"),
                                                (s.style.right = 0),
                                                (s.style.top = 0),
                                                (s.style.color = "white"),
                                                (s.style.padding = "4px"),
                                                (s.innerHTML = "RIVE FPS"),
                                                (e = function (e) {
                                                    s.innerHTML = "RIVE FPS " + e.toFixed(1);
                                                }),
                                                document.body.appendChild(s)),
                                            (i = new (function () {
                                                let t = 0,
                                                    n = 0;
                                                this.Pb = function () {
                                                    var r = performance.now();
                                                    n
                                                        ? (++t, 1e3 < (r -= n) && (e((1e3 * t) / r), (t = n = 0)))
                                                        : ((n = r), (t = 0));
                                                };
                                            })());
                                    }),
                                    (this.Kb = function () {
                                        s && (document.body.remove(s), (s = null)), (i = null);
                                    }),
                                    (this.nb = function () {});
                            }
                            function c(e) {
                                console.assert(!0);
                                let t = new Map(),
                                    n = -1 / 0;
                                this.push = function (r) {
                                    return (
                                        (r = (r + ((1 << e) - 1)) >> e),
                                        t.has(r) && clearTimeout(t.get(r)),
                                        t.set(
                                            r,
                                            setTimeout(function () {
                                                t.delete(r),
                                                    0 == t.length
                                                        ? (n = -1 / 0)
                                                        : r == n && console.assert((n = Math.max(...t.keys())) < r);
                                            }, 1e3),
                                        ),
                                        (n = Math.max(r, n)) << e
                                    );
                                };
                            }
                            let d = s.onRuntimeInitialized;
                            s.onRuntimeInitialized = function () {
                                d && d();
                                let e = s.decodeAudio;
                                s.decodeAudio = function (t, n) {
                                    n((t = e(t)));
                                };
                                let t = s.decodeFont;
                                s.decodeFont = function (e, n) {
                                    n((e = t(e)));
                                };
                                let n = s.FileAssetLoader;
                                (s.ptrToAsset = (e) => {
                                    let t = s.ptrToFileAsset(e);
                                    return t.isImage
                                        ? s.ptrToImageAsset(e)
                                        : t.isFont
                                          ? s.ptrToFontAsset(e)
                                          : t.isAudio
                                            ? s.ptrToAudioAsset(e)
                                            : t;
                                }),
                                    (s.CustomFileAssetLoader = n.extend("CustomFileAssetLoader", {
                                        __construct: function ({ loadContents: e }) {
                                            this.__parent.__construct.call(this), (this.Db = e);
                                        },
                                        loadContents: function (e, t) {
                                            return (e = s.ptrToAsset(e)), this.Db(e, t);
                                        },
                                    })),
                                    (s.CDNFileAssetLoader = n.extend("CDNFileAssetLoader", {
                                        __construct: function () {
                                            this.__parent.__construct.call(this);
                                        },
                                        loadContents: function (e) {
                                            let t = s.ptrToAsset(e);
                                            return (
                                                "" !== (e = t.cdnUuid) &&
                                                (!(function (e, t) {
                                                    var n = new XMLHttpRequest();
                                                    (n.responseType = "arraybuffer"),
                                                        (n.onreadystatechange = function () {
                                                            4 == n.readyState && 200 == n.status && t(n);
                                                        }),
                                                        n.open("GET", e, !0),
                                                        n.send(null);
                                                })(t.cdnBaseUrl + "/" + e, (e) => {
                                                    t.decode(new Uint8Array(e.response));
                                                }),
                                                !0)
                                            );
                                        },
                                    })),
                                    (s.FallbackFileAssetLoader = n.extend("FallbackFileAssetLoader", {
                                        __construct: function () {
                                            this.__parent.__construct.call(this), (this.jb = []);
                                        },
                                        addLoader: function (e) {
                                            this.jb.push(e);
                                        },
                                        loadContents: function (e, t) {
                                            for (let n of this.jb) if (n.loadContents(e, t)) return !0;
                                            return !1;
                                        },
                                    }));
                                let r = s.computeAlignment;
                                s.computeAlignment = function (e, t, n, i, s = 1) {
                                    return r.call(this, e, t, n, i, s);
                                };
                            };
                            let _ =
                                    "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(
                                        " ",
                                    ),
                                f = new (function () {
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
                                                if (((u = e.getContext("webgl", a)), (n = 1), !u))
                                                    return (
                                                        console.log("No WebGL support. Image mesh will not be drawn."),
                                                        !1
                                                    );
                                            } else if ((u = e.getContext("webgl2", a))) n = 2;
                                            else {
                                                if (!(u = e.getContext("webgl", a)))
                                                    return (
                                                        console.log("No WebGL support. Image mesh will not be drawn."),
                                                        !1
                                                    );
                                                n = 1;
                                            }
                                            function o(e, t, n) {
                                                if (
                                                    ((t = u.createShader(t)),
                                                    u.shaderSource(t, n),
                                                    u.compileShader(t),
                                                    0 < ((n = u.getShaderInfoLog(t)) || "").length)
                                                )
                                                    throw n;
                                                u.attachShader(e, t);
                                            }
                                            if (
                                                ((r = Math.min(
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
                                                                  ? function (...n) {
                                                                        return e[t].apply(e, n);
                                                                    }
                                                                  : e[t],
                                                        set(e, t, n) {
                                                            if (!e.isContextLost()) return (e[t] = n), !0;
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
                                                o(
                                                    (e = u.createProgram()),
                                                    u.VERTEX_SHADER,
                                                    "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }",
                                                ),
                                                o(
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
                                            (i = u.getUniformLocation(e, "mat")),
                                                (s = u.getUniformLocation(e, "translate")),
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
                                        n = 0,
                                        r = 0,
                                        i = null,
                                        s = null,
                                        a = 0,
                                        o = 0,
                                        l = !1;
                                    e(),
                                        (this.ac = function () {
                                            return e(), r;
                                        }),
                                        (this.Jb = function (e) {
                                            t.deleteTexture && t.deleteTexture(e);
                                        }),
                                        (this.Ib = function (r) {
                                            if (!e()) return null;
                                            let i = t.createTexture();
                                            return i
                                                ? (t.bindTexture(t.TEXTURE_2D, i),
                                                  t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, r),
                                                  t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                                                  t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                                                  t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                                                  2 == n
                                                      ? (t.texParameteri(
                                                            t.TEXTURE_2D,
                                                            t.TEXTURE_MIN_FILTER,
                                                            t.LINEAR_MIPMAP_LINEAR,
                                                        ),
                                                        t.generateMipmap(t.TEXTURE_2D))
                                                      : t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
                                                  i)
                                                : null;
                                        });
                                    let u = new c(8),
                                        d = new c(8),
                                        _ = new c(10),
                                        f = new c(10);
                                    (this.Mb = function (n, r, l, c, p) {
                                        if (e()) {
                                            var h = u.push(n),
                                                m = d.push(r);
                                            if (t.canvas) {
                                                for (var E of ((t.canvas.width != h || t.canvas.height != m) &&
                                                    ((t.canvas.width = h), (t.canvas.height = m)),
                                                t.viewport(0, m - r, n, r),
                                                t.disable(t.SCISSOR_TEST),
                                                t.clearColor(0, 0, 0, 0),
                                                t.clear(t.COLOR_BUFFER_BIT),
                                                t.enable(t.SCISSOR_TEST),
                                                l.sort((e, t) => t.ub - e.ub),
                                                (h = _.push(c)),
                                                a != h &&
                                                    (t.bufferData(t.ARRAY_BUFFER, 8 * h, t.DYNAMIC_DRAW), (a = h)),
                                                (h = 0),
                                                l))
                                                    t.bufferSubData(t.ARRAY_BUFFER, h, E.Sa), (h += 4 * E.Sa.length);
                                                for (var g of (console.assert(h == 4 * c), l))
                                                    t.bufferSubData(t.ARRAY_BUFFER, h, g.Ab), (h += 4 * g.Ab.length);
                                                for (var A of (console.assert(h == 8 * c),
                                                (h = f.push(p)),
                                                o != h &&
                                                    (t.bufferData(t.ELEMENT_ARRAY_BUFFER, 2 * h, t.DYNAMIC_DRAW),
                                                    (o = h)),
                                                (E = 0),
                                                l))
                                                    t.bufferSubData(t.ELEMENT_ARRAY_BUFFER, E, A.indices),
                                                        (E += 2 * A.indices.length);
                                                for (let e of (console.assert(E == 2 * p),
                                                (A = 0),
                                                (g = !0),
                                                (h = E = 0),
                                                l)) {
                                                    e.image.Ia != A &&
                                                        (t.bindTexture(t.TEXTURE_2D, e.image.Ha || null),
                                                        (A = e.image.Ia)),
                                                        e.fc
                                                            ? (t.scissor(e.Ya, m - e.Za - e.ib, e.tc, e.ib), (g = !0))
                                                            : g && (t.scissor(0, m - r, n, r), (g = !1)),
                                                        (l = 2 / n);
                                                    let a = -2 / r;
                                                    t.uniform4f(
                                                        i,
                                                        e.ga[0] * l * e.za,
                                                        e.ga[1] * a * e.Aa,
                                                        e.ga[2] * l * e.za,
                                                        e.ga[3] * a * e.Aa,
                                                    ),
                                                        t.uniform2f(
                                                            s,
                                                            e.ga[4] * l * e.za + l * (e.Ya - e.bc * e.za) - 1,
                                                            e.ga[5] * a * e.Aa + a * (e.Za - e.cc * e.Aa) + 1,
                                                        ),
                                                        t.vertexAttribPointer(0, 2, t.FLOAT, !1, 0, h),
                                                        t.vertexAttribPointer(1, 2, t.FLOAT, !1, 0, h + 4 * c),
                                                        t.drawElements(
                                                            t.TRIANGLES,
                                                            e.indices.length,
                                                            t.UNSIGNED_SHORT,
                                                            E,
                                                        ),
                                                        (h += 4 * e.Sa.length),
                                                        (E += 2 * e.indices.length);
                                                }
                                                console.assert(h == 4 * c), console.assert(E == 2 * p);
                                            }
                                        }
                                    }),
                                        (this.canvas = function () {
                                            return e() && t.canvas;
                                        });
                                })(),
                                p = s.onRuntimeInitialized;
                            s.onRuntimeInitialized = function () {
                                function e(e) {
                                    switch (e) {
                                        case d.srcOver:
                                            return "source-over";
                                        case d.screen:
                                            return "screen";
                                        case d.overlay:
                                            return "overlay";
                                        case d.darken:
                                            return "darken";
                                        case d.lighten:
                                            return "lighten";
                                        case d.colorDodge:
                                            return "color-dodge";
                                        case d.colorBurn:
                                            return "color-burn";
                                        case d.hardLight:
                                            return "hard-light";
                                        case d.softLight:
                                            return "soft-light";
                                        case d.difference:
                                            return "difference";
                                        case d.exclusion:
                                            return "exclusion";
                                        case d.multiply:
                                            return "multiply";
                                        case d.hue:
                                            return "hue";
                                        case d.saturation:
                                            return "saturation";
                                        case d.color:
                                            return "color";
                                        case d.luminosity:
                                            return "luminosity";
                                    }
                                }
                                function t(e) {
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
                                    for (let e of (0 < v.length &&
                                        (f.Mb(y.drawWidth(), y.drawHeight(), v, N, C),
                                        (v = []),
                                        (C = N = 0),
                                        y.reset(512, 512)),
                                    S)) {
                                        for (let t of e.H) t();
                                        e.H = [];
                                    }
                                    S.clear();
                                }
                                p && p();
                                var r = s.RenderPaintStyle;
                                let i = s.RenderPath,
                                    a = s.RenderPaint,
                                    o = s.Renderer,
                                    l = s.StrokeCap,
                                    c = s.StrokeJoin,
                                    d = s.BlendMode,
                                    h = r.fill,
                                    m = r.stroke,
                                    E = s.FillRule.evenOdd,
                                    g = 1;
                                var A = s.RenderImage.extend("CanvasRenderImage", {
                                        __construct: function ({ ka: e, va: t } = {}) {
                                            this.__parent.__construct.call(this),
                                                (this.Ia = g),
                                                (g = (g + 1) & 0x7fffffff || 1),
                                                (this.ka = e),
                                                (this.va = t);
                                        },
                                        __destruct: function () {
                                            this.Ha && (f.Jb(this.Ha), URL.revokeObjectURL(this.Va)),
                                                this.__parent.__destruct.call(this);
                                        },
                                        decode: function (e) {
                                            var t = this;
                                            t.va && t.va(t);
                                            var n = new Image();
                                            (t.Va = URL.createObjectURL(new Blob([e], { type: "image/png" }))),
                                                (n.onload = function () {
                                                    (t.Cb = n),
                                                        (t.Ha = f.Ib(n)),
                                                        t.size(n.width, n.height),
                                                        t.ka && t.ka(t);
                                                }),
                                                (n.src = t.Va);
                                        },
                                    }),
                                    I = i.extend("CanvasRenderPath", {
                                        __construct: function () {
                                            this.__parent.__construct.call(this), (this.T = new Path2D());
                                        },
                                        rewind: function () {
                                            this.T = new Path2D();
                                        },
                                        addPath: function (e, t, n, r, i, s, a) {
                                            var o = this.T,
                                                l = o.addPath;
                                            e = e.T;
                                            let u = new DOMMatrix();
                                            (u.a = t),
                                                (u.b = n),
                                                (u.c = r),
                                                (u.d = i),
                                                (u.e = s),
                                                (u.f = a),
                                                l.call(o, e, u);
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
                                        cubicTo: function (e, t, n, r, i, s) {
                                            this.T.bezierCurveTo(e, t, n, r, i, s);
                                        },
                                        close: function () {
                                            this.T.closePath();
                                        },
                                    }),
                                    T = a.extend("CanvasRenderPaint", {
                                        color: function (e) {
                                            this.Wa = t(e);
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
                                        blendMode: function (t) {
                                            this.Bb = e(t);
                                        },
                                        clearGradient: function () {
                                            this.ia = null;
                                        },
                                        linearGradient: function (e, t, n, r) {
                                            this.ia = { wb: e, xb: t, bb: n, cb: r, Pa: [] };
                                        },
                                        radialGradient: function (e, t, n, r) {
                                            this.ia = { wb: e, xb: t, bb: n, cb: r, Pa: [], $b: !0 };
                                        },
                                        addStop: function (e, t) {
                                            this.ia.Pa.push({ color: e, stop: t });
                                        },
                                        completeGradient: function () {},
                                        draw: function (e, n, r) {
                                            let i = this.Eb;
                                            var s = this.Wa,
                                                a = this.ia;
                                            if (((e.globalCompositeOperation = this.Bb), null != a)) {
                                                s = a.wb;
                                                var o = a.xb;
                                                let n = a.bb;
                                                var l = a.cb;
                                                let r = a.Pa;
                                                a.$b
                                                    ? ((a = n - s),
                                                      (l -= o),
                                                      (s = e.createRadialGradient(
                                                          s,
                                                          o,
                                                          0,
                                                          s,
                                                          o,
                                                          Math.sqrt(a * a + l * l),
                                                      )))
                                                    : (s = e.createLinearGradient(s, o, n, l));
                                                for (let e = 0, n = r.length; e < n; e++)
                                                    (o = r[e]), s.addColorStop(o.stop, t(o.color));
                                                (this.Wa = s), (this.ia = null);
                                            }
                                            switch (i) {
                                                case m:
                                                    (e.strokeStyle = s),
                                                        (e.lineWidth = this.Fb),
                                                        (e.lineCap = this.Fa),
                                                        (e.lineJoin = this.Ga),
                                                        e.stroke(n);
                                                    break;
                                                case h:
                                                    (e.fillStyle = s), e.fill(n, r);
                                            }
                                        },
                                    });
                                let S = new Set(),
                                    y = null,
                                    v = [],
                                    N = 0,
                                    C = 0;
                                var R = (s.CanvasRenderer = o.extend("Renderer", {
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
                                    transform: function (e, t, n, r, i, s) {
                                        let a = this.S,
                                            o = a.length - 6;
                                        a.splice(
                                            o,
                                            6,
                                            a[o] * e + a[o + 2] * t,
                                            a[o + 1] * e + a[o + 3] * t,
                                            a[o] * n + a[o + 2] * r,
                                            a[o + 1] * n + a[o + 3] * r,
                                            a[o] * i + a[o + 2] * s + a[o + 4],
                                            a[o + 1] * i + a[o + 3] * s + a[o + 5],
                                        ),
                                            this.H.push(this.B.transform.bind(this.B, e, t, n, r, i, s));
                                    },
                                    rotate: function (e) {
                                        let t = Math.sin(e);
                                        (e = Math.cos(e)), this.transform(e, t, -t, e, 0, 0);
                                    },
                                    _drawPath: function (e, t) {
                                        this.H.push(t.draw.bind(t, this.B, e.T, e.Ua === E ? "evenodd" : "nonzero"));
                                    },
                                    _drawRiveImage: function (t, n, r, i) {
                                        var s = t.Cb;
                                        if (s) {
                                            var a = this.B,
                                                o = e(r);
                                            this.H.push(function () {
                                                (a.globalCompositeOperation = o),
                                                    (a.globalAlpha = i),
                                                    a.drawImage(s, 0, 0),
                                                    (a.globalAlpha = 1);
                                            });
                                        }
                                    },
                                    _getMatrix: function (e) {
                                        let t = this.S,
                                            n = t.length - 6;
                                        for (let r = 0; 6 > r; ++r) e[r] = t[n + r];
                                    },
                                    _drawImageMesh: function (t, r, i, a, o, l, u, c, d, _, p) {
                                        r = this.B.canvas.width;
                                        var h = this.B.canvas.height;
                                        let m = _ - c,
                                            E = p - d;
                                        (c = Math.max(c, 0)), (d = Math.max(d, 0));
                                        let g = (_ = Math.min(_, r)) - c,
                                            A = (p = Math.min(p, h)) - d;
                                        if (
                                            (console.assert(g <= Math.min(m, r)),
                                            console.assert(A <= Math.min(E, h)),
                                            !(0 >= g || 0 >= A))
                                        ) {
                                            (_ = g < m || A < E), (r = p = 1);
                                            var I = Math.ceil(g * p),
                                                T = Math.ceil(A * r);
                                            (h = f.ac()),
                                                I > h && ((p *= h / I), (I = h)),
                                                T > h && ((r *= h / T), (T = h)),
                                                y || (y = new s.DynamicRectanizer(h)).reset(512, 512),
                                                0 > (h = y.addRect(I, T)) &&
                                                    (n(), S.add(this), console.assert(0 <= (h = y.addRect(I, T))));
                                            var R = 65535 & h,
                                                O = h >> 16;
                                            v.push({
                                                ga: this.S.slice(this.S.length - 6),
                                                image: t,
                                                Ya: R,
                                                Za: O,
                                                bc: c,
                                                cc: d,
                                                tc: I,
                                                ib: T,
                                                za: p,
                                                Aa: r,
                                                Sa: new Float32Array(o),
                                                Ab: new Float32Array(l),
                                                indices: new Uint16Array(u),
                                                fc: _,
                                                ub: (t.Ia << 1) | !!_,
                                            }),
                                                (N += o.length),
                                                (C += u.length);
                                            var b = this.B,
                                                D = e(i);
                                            this.H.push(function () {
                                                b.save(),
                                                    b.resetTransform(),
                                                    (b.globalCompositeOperation = D),
                                                    (b.globalAlpha = a);
                                                let e = f.canvas();
                                                e && b.drawImage(e, R, O, I, T, c, d, g, A), b.restore();
                                            });
                                        }
                                    },
                                    _clipPath: function (e) {
                                        this.H.push(this.B.clip.bind(this.B, e.T, e.Ua === E ? "evenodd" : "nonzero"));
                                    },
                                    clear: function () {
                                        S.add(this),
                                            this.H.push(
                                                this.B.clearRect.bind(this.B, 0, 0, this.Ta.width, this.Ta.height),
                                            );
                                    },
                                    flush: function () {},
                                    translate: function (e, t) {
                                        this.transform(1, 0, 0, 1, e, t);
                                    },
                                }));
                                (s.makeRenderer = function (e) {
                                    let t = new R(e),
                                        n = t.B;
                                    return new Proxy(t, {
                                        get(e, r) {
                                            if ("function" == typeof e[r])
                                                return function (...t) {
                                                    return e[r].apply(e, t);
                                                };
                                            if ("function" == typeof n[r]) {
                                                if (-1 < _.indexOf(r))
                                                    throw Error(
                                                        "RiveException: Method call to '" +
                                                            r +
                                                            "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.",
                                                    );
                                                return function (...e) {
                                                    t.H.push(n[r].bind(n, ...e));
                                                };
                                            }
                                            return e[r];
                                        },
                                        set(e, r, i) {
                                            if (r in n)
                                                return (
                                                    t.H.push(() => {
                                                        n[r] = i;
                                                    }),
                                                    !0
                                                );
                                        },
                                    });
                                }),
                                    (s.decodeImage = function (e, t) {
                                        new A({ ka: t }).decode(e);
                                    }),
                                    (s.renderFactory = {
                                        makeRenderPaint: function () {
                                            return new T();
                                        },
                                        makeRenderPath: function () {
                                            return new I();
                                        },
                                        makeRenderImage: function () {
                                            let e = b;
                                            return new A({
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
                                let O = s.load,
                                    b = null;
                                s.load = function (e, t, n = !0) {
                                    let r = new s.FallbackFileAssetLoader();
                                    return (
                                        void 0 !== t && r.addLoader(t),
                                        n && ((t = new s.CDNFileAssetLoader()), r.addLoader(t)),
                                        new Promise(function (t) {
                                            let n = null;
                                            (b = {
                                                total: 0,
                                                loaded: 0,
                                                ready: function () {
                                                    t(n);
                                                },
                                            }),
                                                (n = O(e, r)),
                                                0 == b.total && t(n);
                                        })
                                    );
                                };
                                let D = s.RendererWrapper.prototype.align;
                                (s.RendererWrapper.prototype.align = function (e, t, n, r, i = 1) {
                                    D.call(this, e, t, n, r, i);
                                }),
                                    (s.requestAnimationFrame = (r = new u()).requestAnimationFrame.bind(r)),
                                    (s.cancelAnimationFrame = r.cancelAnimationFrame.bind(r)),
                                    (s.enableFPSCounter = r.Nb.bind(r)),
                                    (s.disableFPSCounter = r.Kb),
                                    (r.nb = n),
                                    (s.resolveAnimationFrame = n),
                                    (s.cleanup = function () {
                                        y && y.delete();
                                    });
                            };
                            var h,
                                m,
                                E = Object.assign({}, s),
                                g = "./this.program",
                                A = "";
                            (o || l) &&
                                (l
                                    ? (A = self.location.href)
                                    : "u" > typeof document &&
                                      document.currentScript &&
                                      (A = document.currentScript.src),
                                e && (A = e),
                                (A = A.startsWith("blob:")
                                    ? ""
                                    : A.substr(0, A.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
                                l &&
                                    (m = (e) => {
                                        var t = new XMLHttpRequest();
                                        return (
                                            t.open("GET", e, !1),
                                            (t.responseType = "arraybuffer"),
                                            t.send(null),
                                            new Uint8Array(t.response)
                                        );
                                    }),
                                (h = (e, t, n) => {
                                    if (Y(e)) {
                                        var r = new XMLHttpRequest();
                                        r.open("GET", e, !0),
                                            (r.responseType = "arraybuffer"),
                                            (r.onload = () => {
                                                200 == r.status || (0 == r.status && r.response) ? t(r.response) : n();
                                            }),
                                            (r.onerror = n),
                                            r.send(null);
                                    } else
                                        fetch(e, { credentials: "same-origin" })
                                            .then((e) =>
                                                e.ok
                                                    ? e.arrayBuffer()
                                                    : Promise.reject(Error(e.status + " : " + e.url)),
                                            )
                                            .then(t, n);
                                }));
                            var I = s.print || console.log.bind(console),
                                T = s.printErr || console.error.bind(console);
                            Object.assign(s, E),
                                (E = null),
                                s.thisProgram && (g = s.thisProgram),
                                s.wasmBinary && (S = s.wasmBinary);
                            var S,
                                y,
                                v,
                                N,
                                C,
                                R,
                                O,
                                b,
                                D,
                                L,
                                w = !1;
                            function M() {
                                var e = y.buffer;
                                (s.HEAP8 = v = new Int8Array(e)),
                                    (s.HEAP16 = C = new Int16Array(e)),
                                    (s.HEAPU8 = N = new Uint8Array(e)),
                                    (s.HEAPU16 = R = new Uint16Array(e)),
                                    (s.HEAP32 = O = new Int32Array(e)),
                                    (s.HEAPU32 = b = new Uint32Array(e)),
                                    (s.HEAPF32 = D = new Float32Array(e)),
                                    (s.HEAPF64 = L = new Float64Array(e));
                            }
                            var P = [],
                                x = [],
                                k = [];
                            function U() {
                                var e = s.preRun.shift();
                                P.unshift(e);
                            }
                            var G = 0,
                                F = null,
                                V = null;
                            function B(e) {
                                throw (
                                    (s.onAbort?.(e),
                                    T((e = "Aborted(" + e + ")")),
                                    (w = !0),
                                    (e = new WebAssembly.RuntimeError(e + ". Build with -sASSERTIONS for more info.")),
                                    i(e),
                                    e)
                                );
                            }
                            var H,
                                j = (e) => e.startsWith("data:application/octet-stream;base64,"),
                                Y = (e) => e.startsWith("file://");
                            function W(e) {
                                if (e == H && S) return new Uint8Array(S);
                                if (m) return m(e);
                                throw "both async and sync fetching of the wasm failed";
                            }
                            function K(e) {
                                return S
                                    ? Promise.resolve().then(() => W(e))
                                    : new Promise((t, n) => {
                                          h(
                                              e,
                                              (e) => t(new Uint8Array(e)),
                                              () => {
                                                  try {
                                                      t(W(e));
                                                  } catch (e) {
                                                      n(e);
                                                  }
                                              },
                                          );
                                      });
                            }
                            function $(e, t, n) {
                                return K(e)
                                    .then((e) => WebAssembly.instantiate(e, t))
                                    .then(n, (e) => {
                                        T(`failed to asynchronously prepare wasm: ${e}`), B(e);
                                    });
                            }
                            function z(e, t) {
                                var n = H;
                                return S ||
                                    "function" != typeof WebAssembly.instantiateStreaming ||
                                    j(n) ||
                                    Y(n) ||
                                    "function" != typeof fetch
                                    ? $(n, e, t)
                                    : fetch(n, { credentials: "same-origin" }).then((r) =>
                                          WebAssembly.instantiateStreaming(r, e).then(t, function (r) {
                                              return (
                                                  T(`wasm streaming compile failed: ${r}`),
                                                  T("falling back to ArrayBuffer instantiation"),
                                                  $(n, e, t)
                                              );
                                          }),
                                      );
                            }
                            var q,
                                Z,
                                X = {
                                    464256: (e, t, n, r, i) => {
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
                                                (window.h.I.Ja = n),
                                                (window.h.fa = {}),
                                                (window.h.fa.stopped = r),
                                                (window.h.fa.vb = i);
                                            let s = window.h;
                                            (s.D = []),
                                                (s.rc = function (e) {
                                                    for (var t = 0; t < s.D.length; ++t)
                                                        if (null == s.D[t]) return (s.D[t] = e), t;
                                                    return s.D.push(e), s.D.length - 1;
                                                }),
                                                (s.zb = function (e) {
                                                    for (s.D[e] = null; 0 < s.D.length; )
                                                        if (null == s.D[s.D.length - 1]) s.D.pop();
                                                        else break;
                                                }),
                                                (s.Oc = function (e) {
                                                    for (var t = 0; t < s.D.length; ++t)
                                                        if (s.D[t] == e) return s.zb(t);
                                                }),
                                                (s.pa = function (e) {
                                                    return s.D[e];
                                                }),
                                                (s.Ra = ["touchend", "click"]),
                                                (s.unlock = function () {
                                                    for (var e = 0; e < s.D.length; ++e) {
                                                        var t = s.D[e];
                                                        null != t &&
                                                            null != t.K &&
                                                            t.state === s.fa.vb &&
                                                            t.K.resume().then(
                                                                () => {
                                                                    nv(t.ob);
                                                                },
                                                                (e) => {
                                                                    console.error("Failed to resume audiocontext", e);
                                                                },
                                                            );
                                                    }
                                                    s.Ra.map(function (e) {
                                                        document.removeEventListener(e, s.unlock, !0);
                                                    });
                                                }),
                                                s.Ra.map(function (e) {
                                                    document.addEventListener(e, s.unlock, !0);
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
                                        void 0 !== navigator.mediaDevices &&
                                        void 0 !== navigator.mediaDevices.getUserMedia,
                                    466842: () => {
                                        try {
                                            var e = new (window.AudioContext || window.webkitAudioContext)(),
                                                t = e.sampleRate;
                                            return e.close(), t;
                                        } catch (e) {
                                            return 0;
                                        }
                                    },
                                    467013: (e, t, n, r, i, s) => {
                                        if (void 0 === window.h) return -1;
                                        var a = {},
                                            o = {};
                                        return (
                                            e == window.h.I.wa && 0 != n && (o.sampleRate = n),
                                            (a.K = new (window.AudioContext || window.webkitAudioContext)(o)),
                                            a.K.suspend(),
                                            (a.state = window.h.fa.stopped),
                                            (n = 0),
                                            e != window.h.I.wa && (n = t),
                                            (a.Y = a.K.createScriptProcessor(r, n, t)),
                                            (a.Y.onaudioprocess = function (n) {
                                                if (
                                                    ((null == a.qa || 0 == a.qa.length) &&
                                                        (a.qa = new Float32Array(D.buffer, i, r * t)),
                                                    e == window.h.I.capture || e == window.h.I.Ja)
                                                ) {
                                                    for (var o = 0; o < t; o += 1)
                                                        for (
                                                            var l = n.inputBuffer.getChannelData(o), u = a.qa, c = 0;
                                                            c < r;
                                                            c += 1
                                                        )
                                                            u[c * t + o] = l[c];
                                                    nN(s, r, i);
                                                }
                                                if (e == window.h.I.wa || e == window.h.I.Ja)
                                                    for (nC(s, r, i), o = 0; o < n.outputBuffer.numberOfChannels; ++o)
                                                        for (
                                                            l = n.outputBuffer.getChannelData(o), u = a.qa, c = 0;
                                                            c < r;
                                                            c += 1
                                                        )
                                                            l[c] = u[c * t + o];
                                                else
                                                    for (o = 0; o < n.outputBuffer.numberOfChannels; ++o)
                                                        n.outputBuffer.getChannelData(o).fill(0);
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
                                            (a.ob = s),
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
                                Q = (e) => {
                                    for (; 0 < e.length; ) e.shift()(s);
                                };
                            function J() {
                                var e = O[e8 >> 2];
                                return (e8 += 4), e;
                            }
                            var ee = (e, t) => {
                                    for (var n = 0, r = e.length - 1; 0 <= r; r--) {
                                        var i = e[r];
                                        "." === i
                                            ? e.splice(r, 1)
                                            : ".." === i
                                              ? (e.splice(r, 1), n++)
                                              : n && (e.splice(r, 1), n--);
                                    }
                                    if (t) for (; n; n--) e.unshift("..");
                                    return e;
                                },
                                et = (e) => {
                                    var t = "/" === e.charAt(0),
                                        n = "/" === e.substr(-1);
                                    return (
                                        (e = ee(
                                            e.split("/").filter((e) => !!e),
                                            !t,
                                        ).join("/")) ||
                                            t ||
                                            (e = "."),
                                        e && n && (e += "/"),
                                        (t ? "/" : "") + e
                                    );
                                },
                                en = (e) => {
                                    var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                                        .exec(e)
                                        .slice(1);
                                    return ((e = t[0]), (t = t[1]), e || t)
                                        ? e + (t &&= t.substr(0, t.length - 1))
                                        : ".";
                                },
                                er = (e) => {
                                    if ("/" === e) return "/";
                                    var t = (e = (e = et(e)).replace(/\/$/, "")).lastIndexOf("/");
                                    return -1 === t ? e : e.substr(t + 1);
                                },
                                ei = () => {
                                    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
                                        return (e) => crypto.getRandomValues(e);
                                    B("initRandomDevice");
                                },
                                es = (e) => (es = ei())(e),
                                ea = (...e) => {
                                    for (var t = "", n = !1, r = e.length - 1; -1 <= r && !n; r--) {
                                        if ("string" != typeof (n = 0 <= r ? e[r] : "/"))
                                            throw TypeError("Arguments to path.resolve must be strings");
                                        if (!n) return "";
                                        (t = n + "/" + t), (n = "/" === n.charAt(0));
                                    }
                                    return (
                                        (t = ee(
                                            t.split("/").filter((e) => !!e),
                                            !n,
                                        ).join("/")),
                                        (n ? "/" : "") + t || "."
                                    );
                                },
                                eo = "u" > typeof TextDecoder ? new TextDecoder("utf8") : void 0,
                                el = (e, t, n) => {
                                    var r = t + n;
                                    for (n = t; e[n] && !(n >= r); ) ++n;
                                    if (16 < n - t && e.buffer && eo) return eo.decode(e.subarray(t, n));
                                    for (r = ""; t < n; ) {
                                        var i = e[t++];
                                        if (128 & i) {
                                            var s = 63 & e[t++];
                                            if (192 == (224 & i)) r += String.fromCharCode(((31 & i) << 6) | s);
                                            else {
                                                var a = 63 & e[t++];
                                                65536 >
                                                (i =
                                                    224 == (240 & i)
                                                        ? ((15 & i) << 12) | (s << 6) | a
                                                        : ((7 & i) << 18) | (s << 12) | (a << 6) | (63 & e[t++]))
                                                    ? (r += String.fromCharCode(i))
                                                    : ((i -= 65536),
                                                      (r += String.fromCharCode(
                                                          55296 | (i >> 10),
                                                          56320 | (1023 & i),
                                                      )));
                                            }
                                        } else r += String.fromCharCode(i);
                                    }
                                    return r;
                                },
                                eu = [],
                                ec = (e) => {
                                    for (var t = 0, n = 0; n < e.length; ++n) {
                                        var r = e.charCodeAt(n);
                                        127 >= r
                                            ? t++
                                            : 2047 >= r
                                              ? (t += 2)
                                              : 55296 <= r && 57343 >= r
                                                ? ((t += 4), ++n)
                                                : (t += 3);
                                    }
                                    return t;
                                },
                                ed = (e, t, n, r) => {
                                    if (!(0 < r)) return 0;
                                    var i = n;
                                    r = n + r - 1;
                                    for (var s = 0; s < e.length; ++s) {
                                        var a = e.charCodeAt(s);
                                        if (
                                            (55296 <= a &&
                                                57343 >= a &&
                                                (a = (65536 + ((1023 & a) << 10)) | (1023 & e.charCodeAt(++s))),
                                            127 >= a)
                                        ) {
                                            if (n >= r) break;
                                            t[n++] = a;
                                        } else {
                                            if (2047 >= a) {
                                                if (n + 1 >= r) break;
                                                t[n++] = 192 | (a >> 6);
                                            } else {
                                                if (65535 >= a) {
                                                    if (n + 2 >= r) break;
                                                    t[n++] = 224 | (a >> 12);
                                                } else {
                                                    if (n + 3 >= r) break;
                                                    (t[n++] = 240 | (a >> 18)), (t[n++] = 128 | ((a >> 12) & 63));
                                                }
                                                t[n++] = 128 | ((a >> 6) & 63);
                                            }
                                            t[n++] = 128 | (63 & a);
                                        }
                                    }
                                    return (t[n] = 0), n - i;
                                };
                            function e_(e, t) {
                                var n = Array(ec(e) + 1);
                                return (e = ed(e, n, 0, n.length)), t && (n.length = e), n;
                            }
                            var ef = [];
                            function ep(e, t) {
                                (ef[e] = { input: [], G: [], V: t }), ej(e, eh);
                            }
                            var eh = {
                                    open(e) {
                                        var t = ef[e.node.xa];
                                        if (!t) throw new eR(43);
                                        (e.s = t), (e.seekable = !1);
                                    },
                                    close(e) {
                                        e.s.V.oa(e.s);
                                    },
                                    oa(e) {
                                        e.s.V.oa(e.s);
                                    },
                                    read(e, t, n, r) {
                                        if (!e.s || !e.s.V.hb) throw new eR(60);
                                        for (var i = 0, s = 0; s < r; s++) {
                                            try {
                                                var a = e.s.V.hb(e.s);
                                            } catch (e) {
                                                throw new eR(29);
                                            }
                                            if (void 0 === a && 0 === i) throw new eR(6);
                                            if (null == a) break;
                                            i++, (t[n + s] = a);
                                        }
                                        return i && (e.node.timestamp = Date.now()), i;
                                    },
                                    write(e, t, n, r) {
                                        if (!e.s || !e.s.V.Ma) throw new eR(60);
                                        try {
                                            for (var i = 0; i < r; i++) e.s.V.Ma(e.s, t[n + i]);
                                        } catch (e) {
                                            throw new eR(29);
                                        }
                                        return r && (e.node.timestamp = Date.now()), i;
                                    },
                                },
                                em = {
                                    hb() {
                                        e: {
                                            if (!eu.length) {
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
                                                eu = e_(e, !0);
                                            }
                                            e = eu.shift();
                                        }
                                        return e;
                                    },
                                    Ma(e, t) {
                                        null === t || 10 === t ? (I(el(e.G, 0)), (e.G = [])) : 0 != t && e.G.push(t);
                                    },
                                    oa(e) {
                                        e.G && 0 < e.G.length && (I(el(e.G, 0)), (e.G = []));
                                    },
                                    Xb: () => ({
                                        zc: 25856,
                                        Bc: 5,
                                        yc: 191,
                                        Ac: 35387,
                                        xc: [
                                            3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0,
                                            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                        ],
                                    }),
                                    Yb: () => 0,
                                    Zb: () => [24, 80],
                                },
                                eE = {
                                    Ma(e, t) {
                                        null === t || 10 === t ? (T(el(e.G, 0)), (e.G = [])) : 0 != t && e.G.push(t);
                                    },
                                    oa(e) {
                                        e.G && 0 < e.G.length && (T(el(e.G, 0)), (e.G = []));
                                    },
                                };
                            function eg(e, t) {
                                var n = e.l ? e.l.length : 0;
                                n >= t ||
                                    ((t = Math.max(t, (n * (1048576 > n ? 2 : 1.125)) >>> 0)),
                                    0 != n && (t = Math.max(t, 256)),
                                    (n = e.l),
                                    (e.l = new Uint8Array(t)),
                                    0 < e.v && e.l.set(n.subarray(0, e.v), 0));
                            }
                            var eA = {
                                    N: null,
                                    U: () => eA.createNode(null, "/", 16895, 0),
                                    createNode(e, t, n, r) {
                                        if (24576 == (61440 & n) || 4096 == (61440 & n)) throw new eR(63);
                                        return (
                                            eA.N ||
                                                (eA.N = {
                                                    dir: {
                                                        node: {
                                                            X: eA.j.X,
                                                            P: eA.j.P,
                                                            ja: eA.j.ja,
                                                            ta: eA.j.ta,
                                                            sb: eA.j.sb,
                                                            yb: eA.j.yb,
                                                            tb: eA.j.tb,
                                                            rb: eA.j.rb,
                                                            Ca: eA.j.Ca,
                                                        },
                                                        stream: { aa: eA.m.aa },
                                                    },
                                                    file: {
                                                        node: { X: eA.j.X, P: eA.j.P },
                                                        stream: {
                                                            aa: eA.m.aa,
                                                            read: eA.m.read,
                                                            write: eA.m.write,
                                                            Xa: eA.m.Xa,
                                                            kb: eA.m.kb,
                                                            mb: eA.m.mb,
                                                        },
                                                    },
                                                    link: { node: { X: eA.j.X, P: eA.j.P, la: eA.j.la }, stream: {} },
                                                    $a: { node: { X: eA.j.X, P: eA.j.P }, stream: eH },
                                                }),
                                            16384 == (61440 & (n = ex(e, t, n, r)).mode)
                                                ? ((n.j = eA.N.dir.node), (n.m = eA.N.dir.stream), (n.l = {}))
                                                : 32768 == (61440 & n.mode)
                                                  ? ((n.j = eA.N.file.node),
                                                    (n.m = eA.N.file.stream),
                                                    (n.v = 0),
                                                    (n.l = null))
                                                  : 40960 == (61440 & n.mode)
                                                    ? ((n.j = eA.N.link.node), (n.m = eA.N.link.stream))
                                                    : 8192 == (61440 & n.mode) &&
                                                      ((n.j = eA.N.$a.node), (n.m = eA.N.$a.stream)),
                                            (n.timestamp = Date.now()),
                                            e && ((e.l[t] = n), (e.timestamp = n.timestamp)),
                                            n
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
                                                    var n = e.l;
                                                    (e.l = new Uint8Array(t)),
                                                        n && e.l.set(n.subarray(0, Math.min(t, e.v))),
                                                        (e.v = t);
                                                }
                                        },
                                        ja() {
                                            throw eO[44];
                                        },
                                        ta: (e, t, n, r) => eA.createNode(e, t, n, r),
                                        sb(e, t, n) {
                                            if (16384 == (61440 & e.mode)) {
                                                try {
                                                    var r = eP(t, n);
                                                } catch (e) {}
                                                if (r) for (var i in r.l) throw new eR(55);
                                            }
                                            delete e.parent.l[e.name],
                                                (e.parent.timestamp = Date.now()),
                                                (e.name = n),
                                                (t.l[n] = e),
                                                (t.timestamp = e.parent.timestamp);
                                        },
                                        yb(e, t) {
                                            delete e.l[t], (e.timestamp = Date.now());
                                        },
                                        tb(e, t) {
                                            var n,
                                                r = eP(e, t);
                                            for (n in r.l) throw new eR(55);
                                            delete e.l[t], (e.timestamp = Date.now());
                                        },
                                        rb(e) {
                                            var t,
                                                n = [".", ".."];
                                            for (t of Object.keys(e.l)) n.push(t);
                                            return n;
                                        },
                                        Ca: (e, t, n) => (((e = eA.createNode(e, t, 41471, 0)).link = n), e),
                                        la(e) {
                                            if (40960 != (61440 & e.mode)) throw new eR(28);
                                            return e.link;
                                        },
                                    },
                                    m: {
                                        read(e, t, n, r, i) {
                                            var s = e.node.l;
                                            if (i >= e.node.v) return 0;
                                            if (8 < (e = Math.min(e.node.v - i, r)) && s.subarray)
                                                t.set(s.subarray(i, i + e), n);
                                            else for (r = 0; r < e; r++) t[n + r] = s[i + r];
                                            return e;
                                        },
                                        write(e, t, n, r, i, s) {
                                            if ((t.buffer === v.buffer && (s = !1), !r)) return 0;
                                            if (
                                                (((e = e.node).timestamp = Date.now()),
                                                t.subarray && (!e.l || e.l.subarray))
                                            ) {
                                                if (s) return (e.l = t.subarray(n, n + r)), (e.v = r);
                                                if (0 === e.v && 0 === i) return (e.l = t.slice(n, n + r)), (e.v = r);
                                                if (i + r <= e.v) return e.l.set(t.subarray(n, n + r), i), r;
                                            }
                                            if ((eg(e, i + r), e.l.subarray && t.subarray))
                                                e.l.set(t.subarray(n, n + r), i);
                                            else for (s = 0; s < r; s++) e.l[i + s] = t[n + s];
                                            return (e.v = Math.max(e.v, i + r)), r;
                                        },
                                        aa(e, t, n) {
                                            if (
                                                (1 === n
                                                    ? (t += e.position)
                                                    : 2 === n && 32768 == (61440 & e.node.mode) && (t += e.node.v),
                                                0 > t)
                                            )
                                                throw new eR(28);
                                            return t;
                                        },
                                        Xa(e, t, n) {
                                            eg(e.node, t + n), (e.node.v = Math.max(e.node.v, t + n));
                                        },
                                        kb(e, t, n, r, i) {
                                            if (32768 != (61440 & e.node.mode)) throw new eR(43);
                                            if (((e = e.node.l), 2 & i || e.buffer !== v.buffer))
                                                throw (
                                                    ((0 < n || n + t < e.length) &&
                                                        (e = e.subarray
                                                            ? e.subarray(n, n + t)
                                                            : Array.prototype.slice.call(e, n, n + t)),
                                                    (n = !0),
                                                    B(),
                                                    (t = void 0),
                                                    new eR(48))
                                                );
                                            return (n = !1), (t = e.byteOffset), { o: t, uc: n };
                                        },
                                        mb: (e, t, n, r) => (eA.m.write(e, t, 0, r, n, !1), 0),
                                    },
                                },
                                eI = (e, t) => {
                                    var n = 0;
                                    return e && (n |= 365), t && (n |= 146), n;
                                },
                                eT = null,
                                eS = {},
                                ey = [],
                                ev = 1,
                                eN = null,
                                eC = !0,
                                eR = class {
                                    constructor(e) {
                                        (this.name = "ErrnoError"), (this.$ = e);
                                    }
                                },
                                eO = {},
                                eb = class {
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
                                eD = class {
                                    constructor(e, t, n, r) {
                                        (e ||= this),
                                            (this.parent = e),
                                            (this.U = e.U),
                                            (this.ua = null),
                                            (this.id = ev++),
                                            (this.name = t),
                                            (this.mode = n),
                                            (this.j = {}),
                                            (this.m = {}),
                                            (this.xa = r);
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
                            function eL(e, t = {}) {
                                if (!(e = ea(e))) return { path: "", node: null };
                                if (8 < (t = Object.assign({ gb: !0, Oa: 0 }, t)).Oa) throw new eR(32);
                                e = e.split("/").filter((e) => !!e);
                                for (var n = eT, r = "/", i = 0; i < e.length; i++) {
                                    var s = i === e.length - 1;
                                    if (s && t.parent) break;
                                    if (
                                        ((n = eP(n, e[i])),
                                        (r = et(r + "/" + e[i])),
                                        n.ua && (!s || (s && t.gb)) && (n = n.ua.root),
                                        !s || t.fb)
                                    ) {
                                        for (s = 0; 40960 == (61440 & n.mode); )
                                            if (
                                                ((n = eq(r)),
                                                (n = eL((r = ea(en(r), n)), { Oa: t.Oa + 1 }).node),
                                                40 < s++)
                                            )
                                                throw new eR(32);
                                    }
                                }
                                return { path: r, node: n };
                            }
                            function ew(e) {
                                for (var t; ; ) {
                                    if (e === e.parent)
                                        return (e = e.U.lb), t ? ("/" !== e[e.length - 1] ? `${e}/${t}` : e + t) : e;
                                    (t = t ? `${e.name}/${t}` : e.name), (e = e.parent);
                                }
                            }
                            function eM(e, t) {
                                for (var n = 0, r = 0; r < t.length; r++) n = ((n << 5) - n + t.charCodeAt(r)) | 0;
                                return ((e + n) >>> 0) % eN.length;
                            }
                            function eP(e, t) {
                                var n = 16384 == (61440 & e.mode) ? ((n = eU(e, "x")) ? n : 2 * !e.j.ja) : 54;
                                if (n) throw new eR(n);
                                for (n = eN[eM(e.id, t)]; n; n = n.ec) {
                                    var r = n.name;
                                    if (n.parent.id === e.id && r === t) return n;
                                }
                                return e.j.ja(e, t);
                            }
                            function ex(e, t, n, r) {
                                return (
                                    (t = eM((e = new eD(e, t, n, r)).parent.id, e.name)), (e.ec = eN[t]), (eN[t] = e)
                                );
                            }
                            function ek(e) {
                                var t = ["r", "w", "rw"][3 & e];
                                return 512 & e && (t += "w"), t;
                            }
                            function eU(e, t) {
                                return eC
                                    ? 0
                                    : (t.includes("r") && !(292 & e.mode)) ||
                                        (t.includes("w") && !(146 & e.mode)) ||
                                        (t.includes("x") && !(73 & e.mode))
                                      ? 2
                                      : 0;
                            }
                            function eG(e, t) {
                                try {
                                    return eP(e, t), 20;
                                } catch (e) {}
                                return eU(e, "wx");
                            }
                            function eF(e) {
                                if (!(e = ey[e])) throw new eR(8);
                                return e;
                            }
                            function eV(e, t = -1) {
                                if (((e = Object.assign(new eb(), e)), -1 == t))
                                    e: {
                                        for (t = 0; 4096 >= t; t++) if (!ey[t]) break e;
                                        throw new eR(33);
                                    }
                                return (e.W = t), (ey[t] = e);
                            }
                            function eB(e, t = -1) {
                                return (e = eV(e, t)), e.m?.Ec?.(e), e;
                            }
                            var eH = {
                                open(e) {
                                    (e.m = eS[e.node.xa].m), e.m.open?.(e);
                                },
                                aa() {
                                    throw new eR(70);
                                },
                            };
                            function ej(e, t) {
                                eS[e] = { m: t };
                            }
                            function eY(e, t) {
                                var n = "/" === t;
                                if (n && eT) throw new eR(10);
                                if (!n && t) {
                                    var r = eL(t, { gb: !1 });
                                    if (((t = r.path), (r = r.node).ua)) throw new eR(10);
                                    if (16384 != (61440 & r.mode)) throw new eR(54);
                                }
                                (t = { type: e, Mc: {}, lb: t, dc: [] }),
                                    ((e = e.U(t)).U = t),
                                    (t.root = e),
                                    n ? (eT = e) : r && ((r.ua = t), r.U && r.U.dc.push(t));
                            }
                            function eW(e, t, n) {
                                var r = eL(e, { parent: !0 }).node;
                                if (!(e = er(e)) || "." === e || ".." === e) throw new eR(28);
                                var i = eG(r, e);
                                if (i) throw new eR(i);
                                if (!r.j.ta) throw new eR(63);
                                return r.j.ta(r, e, t, n);
                            }
                            function eK(e) {
                                return eW(e, 16895, 0);
                            }
                            function e$(e, t, n) {
                                void 0 === n && ((n = t), (t = 438)), eW(e, 8192 | t, n);
                            }
                            function ez(e, t) {
                                if (!ea(e)) throw new eR(44);
                                var n = eL(t, { parent: !0 }).node;
                                if (!n) throw new eR(44);
                                var r = eG(n, (t = er(t)));
                                if (r) throw new eR(r);
                                if (!n.j.Ca) throw new eR(63);
                                n.j.Ca(n, t, e);
                            }
                            function eq(e) {
                                if (!(e = eL(e).node)) throw new eR(44);
                                if (!e.j.la) throw new eR(28);
                                return ea(ew(e.parent), e.j.la(e));
                            }
                            function eZ(e, t, n) {
                                if ("" === e) throw new eR(44);
                                if ("string" == typeof t) {
                                    var r = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[t];
                                    if (void 0 === r) throw Error(`Unknown file open mode: ${t}`);
                                    t = r;
                                }
                                if (
                                    ((n = 64 & t ? ((void 0 === n ? 438 : n) & 4095) | 32768 : 0), "object" == typeof e)
                                )
                                    var i = e;
                                else {
                                    e = et(e);
                                    try {
                                        i = eL(e, { fb: !(131072 & t) }).node;
                                    } catch (e) {}
                                }
                                if (((r = !1), 64 & t))
                                    if (i) {
                                        if (128 & t) throw new eR(20);
                                    } else (i = eW(e, n, 0)), (r = !0);
                                if (!i) throw new eR(44);
                                if ((8192 == (61440 & i.mode) && (t &= -513), 65536 & t && 16384 != (61440 & i.mode)))
                                    throw new eR(54);
                                if (
                                    !r &&
                                    (n = i
                                        ? 40960 == (61440 & i.mode)
                                            ? 32
                                            : 16384 == (61440 & i.mode) && ("r" !== ek(t) || 512 & t)
                                              ? 31
                                              : eU(i, ek(t))
                                        : 44)
                                )
                                    throw new eR(n);
                                if (512 & t && !r) {
                                    if (!(n = "string" == typeof (n = i) ? eL(n, { fb: !0 }).node : n).j.P)
                                        throw new eR(63);
                                    if (16384 == (61440 & n.mode)) throw new eR(31);
                                    if (32768 != (61440 & n.mode)) throw new eR(28);
                                    if ((r = eU(n, "w"))) throw new eR(r);
                                    n.j.P(n, { size: 0, timestamp: Date.now() });
                                }
                                return (
                                    (t &= -131713),
                                    (i = eV({
                                        node: i,
                                        path: ew(i),
                                        flags: t,
                                        seekable: !0,
                                        position: 0,
                                        m: i.m,
                                        sc: [],
                                        error: !1,
                                    })).m.open && i.m.open(i),
                                    !s.logReadFiles || 1 & t || e in (e1 ||= {}) || (e1[e] = 1),
                                    i
                                );
                            }
                            function eX(e, t, n) {
                                if (null === e.W) throw new eR(8);
                                if (!e.seekable || !e.m.aa) throw new eR(70);
                                if (0 != n && 1 != n && 2 != n) throw new eR(28);
                                (e.position = e.m.aa(e, t, n)), (e.sc = []);
                            }
                            function eQ(e, t, n) {
                                e = et("/dev/" + e);
                                var r = eI(!!t, !!n);
                                e0 ||= 64;
                                var i = e0++ << 8;
                                ej(i, {
                                    open(e) {
                                        e.seekable = !1;
                                    },
                                    close() {
                                        n?.buffer?.length && n(10);
                                    },
                                    read(e, n, r, i) {
                                        for (var s = 0, a = 0; a < i; a++) {
                                            try {
                                                var o = t();
                                            } catch (e) {
                                                throw new eR(29);
                                            }
                                            if (void 0 === o && 0 === s) throw new eR(6);
                                            if (null == o) break;
                                            s++, (n[r + a] = o);
                                        }
                                        return s && (e.node.timestamp = Date.now()), s;
                                    },
                                    write(e, t, r, i) {
                                        for (var s = 0; s < i; s++)
                                            try {
                                                n(t[r + s]);
                                            } catch (e) {
                                                throw new eR(29);
                                            }
                                        return i && (e.node.timestamp = Date.now()), s;
                                    },
                                }),
                                    e$(e, r, i);
                            }
                            var eJ,
                                e0,
                                e1,
                                e2,
                                e3,
                                e6,
                                e4,
                                e5,
                                e7 = {},
                                e8 = void 0,
                                e9 = (e, t) => Object.defineProperty(t, "name", { value: e }),
                                te = [],
                                tt = [],
                                tn = (e) => {
                                    if (!e) throw new e2("Cannot use deleted val. handle = " + e);
                                    return tt[e];
                                },
                                tr = (e) => {
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
                                            let t = te.pop() || tt.length;
                                            return (tt[t] = e), (tt[t + 1] = 1), t;
                                    }
                                },
                                ti = (e) => {
                                    var t = Error,
                                        n = e9(e, function (t) {
                                            (this.name = e),
                                                (this.message = t),
                                                void 0 !== (t = Error(t).stack) &&
                                                    (this.stack =
                                                        this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""));
                                        });
                                    return (
                                        (n.prototype = Object.create(t.prototype)),
                                        (n.prototype.constructor = n),
                                        (n.prototype.toString = function () {
                                            return void 0 === this.message
                                                ? this.name
                                                : `${this.name}: ${this.message}`;
                                        }),
                                        n
                                    );
                                },
                                ts = (e) => {
                                    for (var t = ""; N[e]; ) t += e6[N[e++]];
                                    return t;
                                },
                                ta = [],
                                to = () => {
                                    for (; ta.length; ) {
                                        var e = ta.pop();
                                        (e.g.ea = !1), e.delete();
                                    }
                                },
                                tl = {},
                                tu = (e, t) => {
                                    if (void 0 === t) throw new e2("ptr should not be undefined");
                                    for (; e.C; ) (t = e.ma(t)), (e = e.C);
                                    return t;
                                },
                                tc = {},
                                td = (e) => {
                                    var t = ts((e = ny(e)));
                                    return nT(e), t;
                                },
                                t_ = (e, t) => {
                                    var n = tc[e];
                                    if (void 0 === n) throw ((e = `${t} has unknown type ${td(e)}`), new e2(e));
                                    return n;
                                },
                                tf = () => {},
                                tp = !1,
                                th = (e, t, n) =>
                                    t === n ? e : void 0 === n.C || null === (e = th(e, t, n.C)) ? null : n.Lb(e),
                                tm = {},
                                tE = (e, t) => tl[(t = tu(e, t))],
                                tg = (e, t) => {
                                    if (!t.u || !t.o) throw new e5("makeClassHandle requires ptr and ptrType");
                                    if (!!t.J != !!t.F)
                                        throw new e5("Both smartPtrType and smartPtr must be specified");
                                    return (
                                        (t.count = { value: 1 }),
                                        tA(Object.create(e, { g: { value: t, writable: !0 } }))
                                    );
                                },
                                tA = (e) =>
                                    "u" < typeof FinalizationRegistry
                                        ? ((tA = (e) => e), e)
                                        : ((tp = new FinalizationRegistry((e) => {
                                              (e = e.g),
                                                  --e.count.value,
                                                  0 === e.count.value && (e.F ? e.J.O(e.F) : e.u.i.O(e.o));
                                          })),
                                          (tA = (e) => {
                                              var t = e.g;
                                              return t.F && tp.register(e, { g: t }, e), e;
                                          }),
                                          (tf = (e) => {
                                              tp.unregister(e);
                                          }),
                                          tA(e)),
                                tI = {},
                                tT = (e) => {
                                    for (; e.length; ) {
                                        var t = e.pop();
                                        e.pop()(t);
                                    }
                                };
                            function tS(e) {
                                return this.fromWireType(b[e >> 2]);
                            }
                            var ty = {},
                                tv = {},
                                tN = (e, t, n) => {
                                    function r(t) {
                                        if ((t = n(t)).length !== e.length)
                                            throw new e5("Mismatched type converter count");
                                        for (var r = 0; r < e.length; ++r) tR(e[r], t[r]);
                                    }
                                    e.forEach(function (e) {
                                        tv[e] = t;
                                    });
                                    var i = Array(t.length),
                                        s = [],
                                        a = 0;
                                    t.forEach((e, t) => {
                                        tc.hasOwnProperty(e)
                                            ? (i[t] = tc[e])
                                            : (s.push(e),
                                              ty.hasOwnProperty(e) || (ty[e] = []),
                                              ty[e].push(() => {
                                                  (i[t] = tc[e]), ++a === s.length && r(i);
                                              }));
                                    }),
                                        0 === s.length && r(i);
                                };
                            function tC(e, t, n = {}) {
                                var r = t.name;
                                if (!e) throw new e2(`type "${r}" must have a positive integer typeid pointer`);
                                if (tc.hasOwnProperty(e)) {
                                    if (n.Vb) return;
                                    throw new e2(`Cannot register type '${r}' twice`);
                                }
                                (tc[e] = t),
                                    delete tv[e],
                                    ty.hasOwnProperty(e) && ((t = ty[e]), delete ty[e], t.forEach((e) => e()));
                            }
                            function tR(e, t, n = {}) {
                                if (!("argPackAdvance" in t))
                                    throw TypeError("registerType registeredInstance requires argPackAdvance");
                                return tC(e, t, n);
                            }
                            var tO = (e) => {
                                throw new e2(e.g.u.i.name + " instance already deleted");
                            };
                            function tb() {}
                            var tD = (e, t, n) => {
                                    if (void 0 === e[t].A) {
                                        var r = e[t];
                                        (e[t] = function (...r) {
                                            if (!e[t].A.hasOwnProperty(r.length))
                                                throw new e2(
                                                    `Function '${n}' called with an invalid number of arguments (${r.length}) - expects one of (${e[t].A})!`,
                                                );
                                            return e[t].A[r.length].apply(this, r);
                                        }),
                                            (e[t].A = []),
                                            (e[t].A[r.da] = r);
                                    }
                                },
                                tL = (e, t, n) => {
                                    if (s.hasOwnProperty(e)) {
                                        if (void 0 === n || (void 0 !== s[e].A && void 0 !== s[e].A[n]))
                                            throw new e2(`Cannot register public name '${e}' twice`);
                                        if ((tD(s, e, e), s.hasOwnProperty(n)))
                                            throw new e2(
                                                `Cannot register multiple overloads of a function with the same number of arguments (${n})!`,
                                            );
                                        s[e].A[n] = t;
                                    } else (s[e] = t), void 0 !== n && (s[e].Lc = n);
                                },
                                tw = (e) => {
                                    if (void 0 === e) return "_unknown";
                                    var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                                    return 48 <= t && 57 >= t ? `_${e}` : e;
                                };
                            function tM(e, t, n, r, i, s, a, o) {
                                (this.name = e),
                                    (this.constructor = t),
                                    (this.M = n),
                                    (this.O = r),
                                    (this.C = i),
                                    (this.Qb = s),
                                    (this.ma = a),
                                    (this.Lb = o),
                                    (this.pb = []);
                            }
                            var tP = (e, t, n) => {
                                for (; t !== n; ) {
                                    if (!t.ma)
                                        throw new e2(
                                            `Expected null or instance of ${n.name}, got an instance of ${t.name}`,
                                        );
                                    (e = t.ma(e)), (t = t.C);
                                }
                                return e;
                            };
                            function tx(e, t) {
                                if (null === t) {
                                    if (this.La) throw new e2(`null is not a valid ${this.name}`);
                                    return 0;
                                }
                                if (!t.g) throw new e2(`Cannot pass "${t3(t)}" as a ${this.name}`);
                                if (!t.g.o)
                                    throw new e2(`Cannot pass deleted object as a pointer of type ${this.name}`);
                                return tP(t.g.o, t.g.u.i, this.i);
                            }
                            function tk(e, t) {
                                if (null === t) {
                                    if (this.La) throw new e2(`null is not a valid ${this.name}`);
                                    if (this.sa) {
                                        var n = this.Na();
                                        return null !== e && e.push(this.O, n), n;
                                    }
                                    return 0;
                                }
                                if (!t || !t.g) throw new e2(`Cannot pass "${t3(t)}" as a ${this.name}`);
                                if (!t.g.o)
                                    throw new e2(`Cannot pass deleted object as a pointer of type ${this.name}`);
                                if (!this.ra && t.g.u.ra)
                                    throw new e2(
                                        `Cannot convert argument of type ${t.g.J ? t.g.J.name : t.g.u.name} to parameter type ${this.name}`,
                                    );
                                if (((n = tP(t.g.o, t.g.u.i, this.i)), this.sa)) {
                                    if (void 0 === t.g.F)
                                        throw new e2("Passing raw pointer to smart pointer is illegal");
                                    switch (this.mc) {
                                        case 0:
                                            if (t.g.J === this) n = t.g.F;
                                            else
                                                throw new e2(
                                                    `Cannot convert argument of type ${t.g.J ? t.g.J.name : t.g.u.name} to parameter type ${this.name}`,
                                                );
                                            break;
                                        case 1:
                                            n = t.g.F;
                                            break;
                                        case 2:
                                            if (t.g.J === this) n = t.g.F;
                                            else {
                                                var r = t.clone();
                                                (n = this.ic(
                                                    n,
                                                    tr(() => r.delete()),
                                                )),
                                                    null !== e && e.push(this.O, n);
                                            }
                                            break;
                                        default:
                                            throw new e2("Unsupporting sharing policy");
                                    }
                                }
                                return n;
                            }
                            function tU(e, t) {
                                if (null === t) {
                                    if (this.La) throw new e2(`null is not a valid ${this.name}`);
                                    return 0;
                                }
                                if (!t.g) throw new e2(`Cannot pass "${t3(t)}" as a ${this.name}`);
                                if (!t.g.o)
                                    throw new e2(`Cannot pass deleted object as a pointer of type ${this.name}`);
                                if (t.g.u.ra)
                                    throw new e2(
                                        `Cannot convert argument of type ${t.g.u.name} to parameter type ${this.name}`,
                                    );
                                return tP(t.g.o, t.g.u.i, this.i);
                            }
                            function tG(e, t, n, r, i, s, a, o, l, u, c) {
                                (this.name = e),
                                    (this.i = t),
                                    (this.La = n),
                                    (this.ra = r),
                                    (this.sa = i),
                                    (this.hc = s),
                                    (this.mc = a),
                                    (this.qb = o),
                                    (this.Na = l),
                                    (this.ic = u),
                                    (this.O = c),
                                    i || void 0 !== t.C
                                        ? (this.toWireType = tk)
                                        : ((this.toWireType = r ? tx : tU), (this.L = null));
                            }
                            var tF,
                                tV,
                                tB = (e, t, n) => {
                                    if (!s.hasOwnProperty(e)) throw new e5("Replacing nonexistent public symbol");
                                    void 0 !== s[e].A && void 0 !== n ? (s[e].A[n] = t) : ((s[e] = t), (s[e].da = n));
                                },
                                tH = [],
                                tj = (e) => {
                                    var t = tH[e];
                                    return t || (e >= tH.length && (tH.length = e + 1), (tH[e] = t = tF.get(e))), t;
                                },
                                tY = (e, t, n = []) =>
                                    (t = e.includes("j")
                                        ? (0, s["dynCall_" + (e = e.replace(/p/g, "i"))])(t, ...n)
                                        : tj(t)(...n)),
                                tW =
                                    (e, t) =>
                                    (...n) =>
                                        tY(e, t, n),
                                tK = (e, t) => {
                                    var n = (e = ts(e)).includes("j") ? tW(e, t) : tj(t);
                                    if ("function" != typeof n)
                                        throw new e2(`unknown function pointer with signature ${e}: ${t}`);
                                    return n;
                                },
                                t$ = (e, t) => {
                                    function n(e) {
                                        i[e] || tc[e] || (tv[e] ? tv[e].forEach(n) : (r.push(e), (i[e] = !0)));
                                    }
                                    var r = [],
                                        i = {};
                                    throw (t.forEach(n), new tV(`${e}: ` + r.map(td).join([", "])));
                                };
                            function tz(e) {
                                for (var t = 1; t < e.length; ++t) if (null !== e[t] && void 0 === e[t].L) return !0;
                                return !1;
                            }
                            function tq(e, t, n, r, i) {
                                var s = t.length;
                                if (2 > s)
                                    throw new e2(
                                        "argTypes array size mismatch! Must at least get return value and 'this' types!",
                                    );
                                var a = null !== t[1] && null !== n,
                                    o = tz(t),
                                    l = "void" !== t[0].name,
                                    u = s - 2,
                                    c = Array(u),
                                    d = [],
                                    _ = [];
                                return e9(e, function (...n) {
                                    if (n.length !== u)
                                        throw new e2(`function ${e} called with ${n.length} arguments, expected ${u}`);
                                    if (((_.length = 0), (d.length = a ? 2 : 1), (d[0] = i), a)) {
                                        var s = t[1].toWireType(_, this);
                                        d[1] = s;
                                    }
                                    for (var f = 0; f < u; ++f) (c[f] = t[f + 2].toWireType(_, n[f])), d.push(c[f]);
                                    if (((n = r(...d)), o)) tT(_);
                                    else
                                        for (f = a ? 1 : 2; f < t.length; f++) {
                                            var p = 1 === f ? s : c[f - 2];
                                            null !== t[f].L && t[f].L(p);
                                        }
                                    return l ? t[0].fromWireType(n) : void 0;
                                });
                            }
                            var tZ,
                                tX = (e, t) => {
                                    for (var n = [], r = 0; r < e; r++) n.push(b[(t + 4 * r) >> 2]);
                                    return n;
                                },
                                tQ = (e) => {
                                    let t = (e = e.trim()).indexOf("(");
                                    return -1 !== t ? e.substr(0, t) : e;
                                },
                                tJ = (e, t, n) => {
                                    if (!(e instanceof Object)) throw new e2(`${n} with invalid "this": ${e}`);
                                    if (!(e instanceof t.i.constructor))
                                        throw new e2(`${n} incompatible with "this" of type ${e.constructor.name}`);
                                    if (!e.g.o)
                                        throw new e2(`cannot call emscripten binding method ${n} on deleted object`);
                                    return tP(e.g.o, e.g.u.i, t.i);
                                },
                                t0 = (e) => {
                                    9 < e && 0 == --tt[e + 1] && ((tt[e] = void 0), te.push(e));
                                },
                                t1 = {
                                    name: "emscripten::val",
                                    fromWireType: (e) => {
                                        var t = tn(e);
                                        return t0(e), t;
                                    },
                                    toWireType: (e, t) => tr(t),
                                    argPackAdvance: 8,
                                    readValueFromPointer: tS,
                                    L: null,
                                },
                                t2 = (e, t, n) => {
                                    switch (t) {
                                        case 1:
                                            return n
                                                ? function (e) {
                                                      return this.fromWireType(v[e]);
                                                  }
                                                : function (e) {
                                                      return this.fromWireType(N[e]);
                                                  };
                                        case 2:
                                            return n
                                                ? function (e) {
                                                      return this.fromWireType(C[e >> 1]);
                                                  }
                                                : function (e) {
                                                      return this.fromWireType(R[e >> 1]);
                                                  };
                                        case 4:
                                            return n
                                                ? function (e) {
                                                      return this.fromWireType(O[e >> 2]);
                                                  }
                                                : function (e) {
                                                      return this.fromWireType(b[e >> 2]);
                                                  };
                                        default:
                                            throw TypeError(`invalid integer width (${t}): ${e}`);
                                    }
                                },
                                t3 = (e) => {
                                    if (null === e) return "null";
                                    var t = typeof e;
                                    return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e;
                                },
                                t6 = (e, t) => {
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
                                },
                                t4 = (e, t, n) => {
                                    switch (t) {
                                        case 1:
                                            return n ? (e) => v[e] : (e) => N[e];
                                        case 2:
                                            return n ? (e) => C[e >> 1] : (e) => R[e >> 1];
                                        case 4:
                                            return n ? (e) => O[e >> 2] : (e) => b[e >> 2];
                                        default:
                                            throw TypeError(`invalid integer width (${t}): ${e}`);
                                    }
                                },
                                t5 = "u" > typeof TextDecoder ? new TextDecoder("utf-16le") : void 0,
                                t7 = (e, t) => {
                                    for (var n = e >> 1, r = n + t / 2; !(n >= r) && R[n]; ) ++n;
                                    if (32 < (n <<= 1) - e && t5) return t5.decode(N.subarray(e, n));
                                    for (r = 0, n = ""; !(r >= t / 2); ++r) {
                                        var i = C[(e + 2 * r) >> 1];
                                        if (0 == i) break;
                                        n += String.fromCharCode(i);
                                    }
                                    return n;
                                },
                                t8 = (e, t, n) => {
                                    if (2 > (n ??= 0x7fffffff)) return 0;
                                    n -= 2;
                                    var r = t;
                                    n = n < 2 * e.length ? n / 2 : e.length;
                                    for (var i = 0; i < n; ++i) (C[t >> 1] = e.charCodeAt(i)), (t += 2);
                                    return (C[t >> 1] = 0), t - r;
                                },
                                t9 = (e) => 2 * e.length,
                                ne = (e, t) => {
                                    for (var n = 0, r = ""; !(n >= t / 4); ) {
                                        var i = O[(e + 4 * n) >> 2];
                                        if (0 == i) break;
                                        ++n,
                                            65536 <= i
                                                ? ((i -= 65536),
                                                  (r += String.fromCharCode(55296 | (i >> 10), 56320 | (1023 & i))))
                                                : (r += String.fromCharCode(i));
                                    }
                                    return r;
                                },
                                nt = (e, t, n) => {
                                    if (4 > (n ??= 0x7fffffff)) return 0;
                                    var r = t;
                                    n = r + n - 4;
                                    for (var i = 0; i < e.length; ++i) {
                                        var s = e.charCodeAt(i);
                                        if (
                                            (55296 <= s &&
                                                57343 >= s &&
                                                (s = (65536 + ((1023 & s) << 10)) | (1023 & e.charCodeAt(++i))),
                                            (O[t >> 2] = s),
                                            (t += 4) + 4 > n)
                                        )
                                            break;
                                    }
                                    return (O[t >> 2] = 0), t - r;
                                },
                                nn = (e) => {
                                    for (var t = 0, n = 0; n < e.length; ++n) {
                                        var r = e.charCodeAt(n);
                                        55296 <= r && 57343 >= r && ++n, (t += 4);
                                    }
                                    return t;
                                },
                                nr = (e, t, n) => {
                                    var r = [];
                                    return (e = e.toWireType(r, n)), r.length && (b[t >> 2] = tr(r)), e;
                                },
                                ni = {},
                                ns = (e) => {
                                    var t = ni[e];
                                    return void 0 === t ? ts(e) : t;
                                },
                                na = [],
                                no = (e) => {
                                    var t = na.length;
                                    return na.push(e), t;
                                },
                                nl = (e, t) => {
                                    for (var n = Array(e), r = 0; r < e; ++r)
                                        n[r] = t_(b[(t + 4 * r) >> 2], "parameter " + r);
                                    return n;
                                },
                                nu = Reflect.construct,
                                nc = [],
                                nd = {},
                                n_ = () => {
                                    if (!tZ) {
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
                                                _: g || "./this.program",
                                            };
                                        for (e in nd) void 0 === nd[e] ? delete t[e] : (t[e] = nd[e]);
                                        var n = [];
                                        for (e in t) n.push(`${e}=${t[e]}`);
                                        tZ = n;
                                    }
                                    return tZ;
                                },
                                nf = (e) => 0 == e % 4 && (0 != e % 100 || 0 == e % 400),
                                np = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                                nh = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                                nm = (e, t, n, r) => {
                                    function i(e, t, n) {
                                        for (e = "number" == typeof e ? e.toString() : e || ""; e.length < t; )
                                            e = n[0] + e;
                                        return e;
                                    }
                                    function s(e, t) {
                                        return i(e, t, "0");
                                    }
                                    function a(e, t) {
                                        var n;
                                        function r(e) {
                                            return 0 > e ? -1 : +(0 < e);
                                        }
                                        return (
                                            0 === (n = r(e.getFullYear() - t.getFullYear())) &&
                                                0 === (n = r(e.getMonth() - t.getMonth())) &&
                                                (n = r(e.getDate() - t.getDate())),
                                            n
                                        );
                                    }
                                    function o(e) {
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
                                            var n = e.getMonth(),
                                                r = (nf(e.getFullYear()) ? np : nh)[n];
                                            if (t > r - e.getDate())
                                                (t -= r - e.getDate() + 1),
                                                    e.setDate(1),
                                                    11 > n
                                                        ? e.setMonth(n + 1)
                                                        : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1));
                                            else {
                                                e.setDate(e.getDate() + t);
                                                break;
                                            }
                                        }
                                        return (
                                            (n = new Date(e.getFullYear() + 1, 0, 4)),
                                            (t = o(new Date(e.getFullYear(), 0, 4))),
                                            (n = o(n)),
                                            0 >= a(t, e)
                                                ? 0 >= a(n, e)
                                                    ? e.getFullYear() + 1
                                                    : e.getFullYear()
                                                : e.getFullYear() - 1
                                        );
                                    }
                                    var u = b[(r + 40) >> 2];
                                    for (var c in ((r = {
                                        pc: O[r >> 2],
                                        oc: O[(r + 4) >> 2],
                                        Da: O[(r + 8) >> 2],
                                        Qa: O[(r + 12) >> 2],
                                        Ea: O[(r + 16) >> 2],
                                        ca: O[(r + 20) >> 2],
                                        R: O[(r + 24) >> 2],
                                        ba: O[(r + 28) >> 2],
                                        Nc: O[(r + 32) >> 2],
                                        nc: O[(r + 36) >> 2],
                                        qc: u && u ? el(N, u) : "",
                                    }),
                                    (n = n ? el(N, n) : ""),
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
                                        n = n.replace(RegExp(c, "g"), u[c]);
                                    var d = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                                        _ =
                                            "January February March April May June July August September October November December".split(
                                                " ",
                                            );
                                    for (c in ((u = {
                                        "%a": (e) => d[e.R].substring(0, 3),
                                        "%A": (e) => d[e.R],
                                        "%b": (e) => _[e.Ea].substring(0, 3),
                                        "%B": (e) => _[e.Ea],
                                        "%C": (e) => s(((e.ca + 1900) / 100) | 0, 2),
                                        "%d": (e) => s(e.Qa, 2),
                                        "%e": (e) => i(e.Qa, 2, " "),
                                        "%g": (e) => l(e).toString().substring(2),
                                        "%G": l,
                                        "%H": (e) => s(e.Da, 2),
                                        "%I": (e) => (0 == (e = e.Da) ? (e = 12) : 12 < e && (e -= 12), s(e, 2)),
                                        "%j": (e) => {
                                            for (
                                                var t = 0, n = 0;
                                                n <= e.Ea - 1;
                                                t += (nf(e.ca + 1900) ? np : nh)[n++]
                                            );
                                            return s(e.Qa + t, 3);
                                        },
                                        "%m": (e) => s(e.Ea + 1, 2),
                                        "%M": (e) => s(e.oc, 2),
                                        "%n": () => "\n",
                                        "%p": (e) => (0 <= e.Da && 12 > e.Da ? "AM" : "PM"),
                                        "%S": (e) => s(e.pc, 2),
                                        "%t": () => "	",
                                        "%u": (e) => e.R || 7,
                                        "%U": (e) => s(Math.floor((e.ba + 7 - e.R) / 7), 2),
                                        "%V": (e) => {
                                            var t = Math.floor((e.ba + 7 - ((e.R + 6) % 7)) / 7);
                                            if ((2 >= (e.R + 371 - e.ba - 2) % 7 && t++, t))
                                                53 == t &&
                                                    (4 == (n = (e.R + 371 - e.ba) % 7) ||
                                                        (3 == n && nf(e.ca)) ||
                                                        (t = 1));
                                            else {
                                                t = 52;
                                                var n = (e.R + 7 - e.ba - 1) % 7;
                                                (4 == n || (5 == n && nf((e.ca % 400) - 1))) && t++;
                                            }
                                            return s(t, 2);
                                        },
                                        "%w": (e) => e.R,
                                        "%W": (e) => s(Math.floor((e.ba + 7 - ((e.R + 6) % 7)) / 7), 2),
                                        "%y": (e) => (e.ca + 1900).toString().substring(2),
                                        "%Y": (e) => e.ca + 1900,
                                        "%z": (e) => {
                                            var t = 0 <= (e = e.nc);
                                            return (
                                                (t ? "+" : "-") +
                                                String("0000" + (((e = Math.abs(e) / 60) / 60) * 100 + (e % 60))).slice(
                                                    -4,
                                                )
                                            );
                                        },
                                        "%Z": (e) => e.qc,
                                        "%%": () => "%",
                                    }),
                                    (n = n.replace(/%%/g, "\0\0")),
                                    u))
                                        n.includes(c) && (n = n.replace(RegExp(c, "g"), u[c](r)));
                                    return (c = e_((n = n.replace(/\0\0/g, "%")), !1)).length > t
                                        ? 0
                                        : (v.set(c, e), c.length - 1);
                                };
                            [44].forEach((e) => {
                                (eO[e] = new eR(e)), (eO[e].stack = "<generic error, no stack>");
                            }),
                                (eN = Array(4096)),
                                eY(eA, "/"),
                                eK("/tmp"),
                                eK("/home"),
                                eK("/home/web_user"),
                                (function () {
                                    eK("/dev"),
                                        ej(259, { read: () => 0, write: (e, t, n, r) => r }),
                                        e$("/dev/null", 259),
                                        ep(1280, em),
                                        ep(1536, eE),
                                        e$("/dev/tty", 1280),
                                        e$("/dev/tty1", 1536);
                                    var e = new Uint8Array(1024),
                                        t = 0,
                                        n = () => (0 === t && (t = es(e).byteLength), e[--t]);
                                    eQ("random", n), eQ("urandom", n), eK("/dev/shm"), eK("/dev/shm/tmp");
                                })(),
                                (function () {
                                    eK("/proc");
                                    var e = eK("/proc/self");
                                    eK("/proc/self/fd"),
                                        eY(
                                            {
                                                U() {
                                                    var t = ex(e, "fd", 16895, 73);
                                                    return (
                                                        (t.j = {
                                                            ja(e, t) {
                                                                var n = eF(+t);
                                                                return ((e = {
                                                                    parent: null,
                                                                    U: { lb: "fake" },
                                                                    j: { la: () => n.path },
                                                                }).parent = e);
                                                            },
                                                        }),
                                                        t
                                                    );
                                                },
                                            },
                                            "/proc/self/fd",
                                        );
                                })(),
                                (e2 = s.BindingError =
                                    class extends Error {
                                        constructor(e) {
                                            super(e), (this.name = "BindingError");
                                        }
                                    }),
                                tt.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
                                (s.count_emval_handles = () => tt.length / 2 - 5 - te.length),
                                (e3 = s.PureVirtualError = ti("PureVirtualError"));
                            for (var nE = Array(256), ng = 0; 256 > ng; ++ng) nE[ng] = String.fromCharCode(ng);
                            (e6 = nE),
                                (s.getInheritedInstanceCount = () => Object.keys(tl).length),
                                (s.getLiveInheritedInstances = () => {
                                    var e,
                                        t = [];
                                    for (e in tl) tl.hasOwnProperty(e) && t.push(tl[e]);
                                    return t;
                                }),
                                (s.flushPendingDeletes = to),
                                (s.setDelayFunction = (e) => {
                                    (e4 = e), ta.length && e4 && e4(to);
                                }),
                                (e5 = s.InternalError =
                                    class extends Error {
                                        constructor(e) {
                                            super(e), (this.name = "InternalError");
                                        }
                                    }),
                                Object.assign(tb.prototype, {
                                    isAliasOf: function (e) {
                                        if (!(this instanceof tb && e instanceof tb)) return !1;
                                        var t = this.g.u.i,
                                            n = this.g.o;
                                        e.g = e.g;
                                        var r = e.g.u.i;
                                        for (e = e.g.o; t.C; ) (n = t.ma(n)), (t = t.C);
                                        for (; r.C; ) (e = r.ma(e)), (r = r.C);
                                        return t === r && n === e;
                                    },
                                    clone: function () {
                                        if ((this.g.o || tO(this), this.g.ha)) return (this.g.count.value += 1), this;
                                        var e = tA,
                                            t = Object,
                                            n = t.create,
                                            r = Object.getPrototypeOf(this),
                                            i = this.g;
                                        return (
                                            (e = e(
                                                n.call(t, r, {
                                                    g: {
                                                        value: {
                                                            count: i.count,
                                                            ea: i.ea,
                                                            ha: i.ha,
                                                            o: i.o,
                                                            u: i.u,
                                                            F: i.F,
                                                            J: i.J,
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
                                        if ((this.g.o || tO(this), this.g.ea && !this.g.ha))
                                            throw new e2("Object already scheduled for deletion");
                                        tf(this);
                                        var e = this.g;
                                        --e.count.value,
                                            0 === e.count.value && (e.F ? e.J.O(e.F) : e.u.i.O(e.o)),
                                            this.g.ha || ((this.g.F = void 0), (this.g.o = void 0));
                                    },
                                    isDeleted: function () {
                                        return !this.g.o;
                                    },
                                    deleteLater: function () {
                                        if ((this.g.o || tO(this), this.g.ea && !this.g.ha))
                                            throw new e2("Object already scheduled for deletion");
                                        return ta.push(this), 1 === ta.length && e4 && e4(to), (this.g.ea = !0), this;
                                    },
                                }),
                                Object.assign(tG.prototype, {
                                    Rb(e) {
                                        return this.qb && (e = this.qb(e)), e;
                                    },
                                    ab(e) {
                                        this.O?.(e);
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: tS,
                                    fromWireType: function (e) {
                                        function t() {
                                            return this.sa
                                                ? tg(this.i.M, { u: this.hc, o: n, J: this, F: e })
                                                : tg(this.i.M, { u: this, o: e });
                                        }
                                        var n = this.Rb(e);
                                        if (!n) return this.ab(e), null;
                                        var r = tE(this.i, n);
                                        if (void 0 !== r)
                                            return 0 === r.g.count.value
                                                ? ((r.g.o = n), (r.g.F = e), r.clone())
                                                : ((r = r.clone()), this.ab(e), r);
                                        if (!(r = tm[(r = this.i.Qb(n))])) return t.call(this);
                                        r = this.ra ? r.Hb : r.pointerType;
                                        var i = th(n, this.i, r.i);
                                        return null === i
                                            ? t.call(this)
                                            : this.sa
                                              ? tg(r.i.M, { u: r, o: i, J: this, F: e })
                                              : tg(r.i.M, { u: r, o: i });
                                    },
                                }),
                                (tV = s.UnboundTypeError = ti("UnboundTypeError"));
                            var nA = {
                                    __syscall_fcntl64: function (e, t, n) {
                                        e8 = n;
                                        try {
                                            var r = eF(e);
                                            switch (t) {
                                                case 0:
                                                    var i = J();
                                                    if (0 > i) break;
                                                    for (; ey[i]; ) i++;
                                                    return eB(r, i).W;
                                                case 1:
                                                case 2:
                                                case 13:
                                                case 14:
                                                    return 0;
                                                case 3:
                                                    return r.flags;
                                                case 4:
                                                    return (i = J()), (r.flags |= i), 0;
                                                case 12:
                                                    return (C[((i = J()) + 0) >> 1] = 2), 0;
                                            }
                                            return -28;
                                        } catch (e) {
                                            if (void 0 === e7 || "ErrnoError" !== e.name) throw e;
                                            return -e.$;
                                        }
                                    },
                                    __syscall_ioctl: function (e, t, n) {
                                        e8 = n;
                                        try {
                                            var r = eF(e);
                                            switch (t) {
                                                case 21509:
                                                case 21510:
                                                case 21511:
                                                case 21512:
                                                case 21524:
                                                case 21515:
                                                    return r.s ? 0 : -59;
                                                case 21505:
                                                    if (!r.s) return -59;
                                                    if (r.s.V.Xb) {
                                                        e = [
                                                            3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22,
                                                            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                                        ];
                                                        var i = J();
                                                        (O[i >> 2] = 25856),
                                                            (O[(i + 4) >> 2] = 5),
                                                            (O[(i + 8) >> 2] = 191),
                                                            (O[(i + 12) >> 2] = 35387);
                                                        for (var s = 0; 32 > s; s++) v[i + s + 17] = e[s] || 0;
                                                    }
                                                    return 0;
                                                case 21506:
                                                case 21507:
                                                case 21508:
                                                    if (!r.s) return -59;
                                                    if (r.s.V.Yb)
                                                        for (i = J(), e = [], s = 0; 32 > s; s++) e.push(v[i + s + 17]);
                                                    return 0;
                                                case 21519:
                                                    if (!r.s) return -59;
                                                    return (O[(i = J()) >> 2] = 0);
                                                case 21520:
                                                    return r.s ? -28 : -59;
                                                case 21531:
                                                    if (((i = J()), !r.m.Wb)) throw new eR(59);
                                                    return r.m.Wb(r, t, i);
                                                case 21523:
                                                    if (!r.s) return -59;
                                                    return (
                                                        r.s.V.Zb &&
                                                            ((s = [24, 80]),
                                                            (C[(i = J()) >> 1] = s[0]),
                                                            (C[(i + 2) >> 1] = s[1])),
                                                        0
                                                    );
                                                default:
                                                    return -28;
                                            }
                                        } catch (e) {
                                            if (void 0 === e7 || "ErrnoError" !== e.name) throw e;
                                            return -e.$;
                                        }
                                    },
                                    __syscall_openat: function (e, t, n, r) {
                                        e8 = r;
                                        try {
                                            var i = (t = t ? el(N, t) : "");
                                            if ("/" === i.charAt(0)) t = i;
                                            else {
                                                var s = -100 === e ? "/" : eF(e).path;
                                                if (0 == i.length) throw new eR(44);
                                                t = et(s + "/" + i);
                                            }
                                            var a = r ? J() : 0;
                                            return eZ(t, n, a).W;
                                        } catch (e) {
                                            if (void 0 === e7 || "ErrnoError" !== e.name) throw e;
                                            return -e.$;
                                        }
                                    },
                                    _abort_js: () => {
                                        B("");
                                    },
                                    _embind_create_inheriting_constructor: (e, t, n) => {
                                        (e = ts(e)), (t = t_(t, "wrapper")), (n = tn(n));
                                        var r = t.i,
                                            i = r.M,
                                            s = r.C.M,
                                            a = r.C.constructor;
                                        return (
                                            (e = e9(e, function (...e) {
                                                r.C.pb.forEach(
                                                    function (e) {
                                                        if (this[e] === s[e])
                                                            throw new e3(
                                                                `Pure virtual function ${e} must be implemented in JavaScript`,
                                                            );
                                                    }.bind(this),
                                                ),
                                                    Object.defineProperty(this, "__parent", { value: i }),
                                                    this.__construct(...e);
                                            })),
                                            (i.__construct = function (...e) {
                                                if (this === i) throw new e2("Pass correct 'this' to __construct");
                                                (e = a.implement(this, ...e)), tf(e);
                                                var t = e.g;
                                                if (
                                                    (e.notifyOnDestruction(),
                                                    (t.ha = !0),
                                                    Object.defineProperties(this, { g: { value: t } }),
                                                    tA(this),
                                                    (e = tu(r, (e = t.o))),
                                                    tl.hasOwnProperty(e))
                                                )
                                                    throw new e2(`Tried to register registered instance: ${e}`);
                                                tl[e] = this;
                                            }),
                                            (i.__destruct = function () {
                                                if (this === i) throw new e2("Pass correct 'this' to __destruct");
                                                tf(this);
                                                var e = this.g.o;
                                                if (((e = tu(r, e)), tl.hasOwnProperty(e))) delete tl[e];
                                                else throw new e2(`Tried to unregister unregistered instance: ${e}`);
                                            }),
                                            (e.prototype = Object.create(i)),
                                            Object.assign(e.prototype, n),
                                            tr(e)
                                        );
                                    },
                                    _embind_finalize_value_object: (e) => {
                                        var t = tI[e];
                                        delete tI[e];
                                        var n = t.Na,
                                            r = t.O,
                                            i = t.eb;
                                        tN([e], i.map((e) => e.Ub).concat(i.map((e) => e.kc)), (e) => {
                                            var s = {};
                                            return (
                                                i.forEach((t, n) => {
                                                    var r = e[n],
                                                        a = t.Sb,
                                                        o = t.Tb,
                                                        l = e[n + i.length],
                                                        u = t.jc,
                                                        c = t.lc;
                                                    s[t.Ob] = {
                                                        read: (e) => r.fromWireType(a(o, e)),
                                                        write: (e, t) => {
                                                            var n = [];
                                                            u(c, e, l.toWireType(n, t)), tT(n);
                                                        },
                                                    };
                                                }),
                                                [
                                                    {
                                                        name: t.name,
                                                        fromWireType: (e) => {
                                                            var t,
                                                                n = {};
                                                            for (t in s) n[t] = s[t].read(e);
                                                            return r(e), n;
                                                        },
                                                        toWireType: (e, t) => {
                                                            for (var i in s)
                                                                if (!(i in t)) throw TypeError(`Missing field: "${i}"`);
                                                            var a = n();
                                                            for (i in s) s[i].write(a, t[i]);
                                                            return null !== e && e.push(r, a), a;
                                                        },
                                                        argPackAdvance: 8,
                                                        readValueFromPointer: tS,
                                                        L: r,
                                                    },
                                                ]
                                            );
                                        });
                                    },
                                    _embind_register_bigint: () => {},
                                    _embind_register_bool: (e, t, n, r) => {
                                        tR(e, {
                                            name: (t = ts(t)),
                                            fromWireType: function (e) {
                                                return !!e;
                                            },
                                            toWireType: function (e, t) {
                                                return t ? n : r;
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: function (e) {
                                                return this.fromWireType(N[e]);
                                            },
                                            L: null,
                                        });
                                    },
                                    _embind_register_class: (e, t, n, r, i, s, a, o, l, u, c, d, _) => {
                                        (c = ts(c)), (s = tK(i, s)), (o &&= tK(a, o)), (u &&= tK(l, u)), (_ = tK(d, _));
                                        var f = tw(c);
                                        tL(f, function () {
                                            t$(`Cannot construct ${c} due to unbound types`, [r]);
                                        }),
                                            tN([e, t, n], r ? [r] : [], (t) => {
                                                if (((t = t[0]), r))
                                                    var n,
                                                        i = t.i,
                                                        a = i.M;
                                                else a = tb.prototype;
                                                var l = Object.create(a, {
                                                    constructor: {
                                                        value: (t = e9(c, function (...e) {
                                                            if (Object.getPrototypeOf(this) !== l)
                                                                throw new e2("Use 'new' to construct " + c);
                                                            if (void 0 === d.Z)
                                                                throw new e2(c + " has no accessible constructor");
                                                            var t = d.Z[e.length];
                                                            if (void 0 === t)
                                                                throw new e2(
                                                                    `Tried to invoke ctor of ${c} with invalid number of parameters (${e.length}) - expected (${Object.keys(d.Z).toString()}) parameters instead!`,
                                                                );
                                                            return t.apply(this, e);
                                                        })),
                                                    },
                                                });
                                                t.prototype = l;
                                                var d = new tM(c, t, l, _, i, s, o, u);
                                                return (
                                                    d.C && ((n = d.C).na ?? (n.na = []), d.C.na.push(d)),
                                                    (i = new tG(c, d, !0, !1, !1)),
                                                    (n = new tG(c + "*", d, !1, !1, !1)),
                                                    (a = new tG(c + " const*", d, !1, !0, !1)),
                                                    (tm[e] = { pointerType: n, Hb: a }),
                                                    tB(f, t),
                                                    [i, n, a]
                                                );
                                            });
                                    },
                                    _embind_register_class_class_function: (e, t, n, r, i, s, a) => {
                                        var o = tX(n, r);
                                        (t = tQ((t = ts(t)))),
                                            (s = tK(i, s)),
                                            tN([], [e], (e) => {
                                                function r() {
                                                    t$(`Cannot call ${i} due to unbound types`, o);
                                                }
                                                e = e[0];
                                                var i = `${e.name}.${t}`;
                                                t.startsWith("@@") && (t = Symbol[t.substring(2)]);
                                                var l = e.i.constructor;
                                                return (
                                                    void 0 === l[t]
                                                        ? ((r.da = n - 1), (l[t] = r))
                                                        : (tD(l, t, i), (l[t].A[n - 1] = r)),
                                                    tN([], o, (r) => {
                                                        if (
                                                            ((r = tq(i, [r[0], null].concat(r.slice(1)), null, s, a)),
                                                            void 0 === l[t].A
                                                                ? ((r.da = n - 1), (l[t] = r))
                                                                : (l[t].A[n - 1] = r),
                                                            e.i.na)
                                                        )
                                                            for (let n of e.i.na)
                                                                n.constructor.hasOwnProperty(t) ||
                                                                    (n.constructor[t] = r);
                                                        return [];
                                                    }),
                                                    []
                                                );
                                            });
                                    },
                                    _embind_register_class_class_property: (e, t, n, r, i, s, a, o) => {
                                        (t = ts(t)),
                                            (s = tK(i, s)),
                                            tN([], [e], (e) => {
                                                e = e[0];
                                                var i = `${e.name}.${t}`,
                                                    l = {
                                                        get() {
                                                            t$(`Cannot access ${i} due to unbound types`, [n]);
                                                        },
                                                        enumerable: !0,
                                                        configurable: !0,
                                                    };
                                                return (
                                                    (l.set = o
                                                        ? () => {
                                                              t$(`Cannot access ${i} due to unbound types`, [n]);
                                                          }
                                                        : () => {
                                                              throw new e2(`${i} is a read-only property`);
                                                          }),
                                                    Object.defineProperty(e.i.constructor, t, l),
                                                    tN([], [n], (n) => {
                                                        n = n[0];
                                                        var i = { get: () => n.fromWireType(s(r)), enumerable: !0 };
                                                        return (
                                                            o &&
                                                                ((o = tK(a, o)),
                                                                (i.set = (e) => {
                                                                    var t = [];
                                                                    o(r, n.toWireType(t, e)), tT(t);
                                                                })),
                                                            Object.defineProperty(e.i.constructor, t, i),
                                                            []
                                                        );
                                                    }),
                                                    []
                                                );
                                            });
                                    },
                                    _embind_register_class_constructor: (e, t, n, r, i, s) => {
                                        var a = tX(t, n);
                                        (i = tK(r, i)),
                                            tN([], [e], (e) => {
                                                e = e[0];
                                                var n = `constructor ${e.name}`;
                                                if ((void 0 === e.i.Z && (e.i.Z = []), void 0 !== e.i.Z[t - 1]))
                                                    throw new e2(
                                                        `Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
                                                    );
                                                return (
                                                    (e.i.Z[t - 1] = () => {
                                                        t$(`Cannot construct ${e.name} due to unbound types`, a);
                                                    }),
                                                    tN(
                                                        [],
                                                        a,
                                                        (r) => (
                                                            r.splice(1, 0, null),
                                                            (e.i.Z[t - 1] = tq(n, r, null, i, s)),
                                                            []
                                                        ),
                                                    ),
                                                    []
                                                );
                                            });
                                    },
                                    _embind_register_class_function: (e, t, n, r, i, s, a, o) => {
                                        var l = tX(n, r);
                                        (t = tQ((t = ts(t)))),
                                            (s = tK(i, s)),
                                            tN([], [e], (e) => {
                                                function r() {
                                                    t$(`Cannot call ${i} due to unbound types`, l);
                                                }
                                                e = e[0];
                                                var i = `${e.name}.${t}`;
                                                t.startsWith("@@") && (t = Symbol[t.substring(2)]), o && e.i.pb.push(t);
                                                var u = e.i.M,
                                                    c = u[t];
                                                return (
                                                    void 0 === c ||
                                                    (void 0 === c.A && c.className !== e.name && c.da === n - 2)
                                                        ? ((r.da = n - 2), (r.className = e.name), (u[t] = r))
                                                        : (tD(u, t, i), (u[t].A[n - 2] = r)),
                                                    tN(
                                                        [],
                                                        l,
                                                        (r) => (
                                                            (r = tq(i, r, e, s, a)),
                                                            void 0 === u[t].A
                                                                ? ((r.da = n - 2), (u[t] = r))
                                                                : (u[t].A[n - 2] = r),
                                                            []
                                                        ),
                                                    ),
                                                    []
                                                );
                                            });
                                    },
                                    _embind_register_class_property: (e, t, n, r, i, s, a, o, l, u) => {
                                        (t = ts(t)),
                                            (i = tK(r, i)),
                                            tN([], [e], (e) => {
                                                e = e[0];
                                                var r = `${e.name}.${t}`,
                                                    c = {
                                                        get() {
                                                            t$(`Cannot access ${r} due to unbound types`, [n, a]);
                                                        },
                                                        enumerable: !0,
                                                        configurable: !0,
                                                    };
                                                return (
                                                    (c.set = l
                                                        ? () => t$(`Cannot access ${r} due to unbound types`, [n, a])
                                                        : () => {
                                                              throw new e2(r + " is a read-only property");
                                                          }),
                                                    Object.defineProperty(e.i.M, t, c),
                                                    tN([], l ? [n, a] : [n], (n) => {
                                                        var a = n[0],
                                                            c = {
                                                                get() {
                                                                    var t = tJ(this, e, r + " getter");
                                                                    return a.fromWireType(i(s, t));
                                                                },
                                                                enumerable: !0,
                                                            };
                                                        if (l) {
                                                            l = tK(o, l);
                                                            var d = n[1];
                                                            c.set = function (t) {
                                                                var n = tJ(this, e, r + " setter"),
                                                                    i = [];
                                                                l(u, n, d.toWireType(i, t)), tT(i);
                                                            };
                                                        }
                                                        return Object.defineProperty(e.i.M, t, c), [];
                                                    }),
                                                    []
                                                );
                                            });
                                    },
                                    _embind_register_emval: (e) => tR(e, t1),
                                    _embind_register_enum: (e, t, n, r) => {
                                        function i() {}
                                        (t = ts(t)),
                                            (i.values = {}),
                                            tR(e, {
                                                name: t,
                                                constructor: i,
                                                fromWireType: function (e) {
                                                    return this.constructor.values[e];
                                                },
                                                toWireType: (e, t) => t.value,
                                                argPackAdvance: 8,
                                                readValueFromPointer: t2(t, n, r),
                                                L: null,
                                            }),
                                            tL(t, i);
                                    },
                                    _embind_register_enum_value: (e, t, n) => {
                                        var r = t_(e, "enum");
                                        (t = ts(t)),
                                            (e = r.constructor),
                                            (r = Object.create(r.constructor.prototype, {
                                                value: { value: n },
                                                constructor: { value: e9(`${r.name}_${t}`, function () {}) },
                                            })),
                                            (e.values[n] = r),
                                            (e[t] = r);
                                    },
                                    _embind_register_float: (e, t, n) => {
                                        tR(e, {
                                            name: (t = ts(t)),
                                            fromWireType: (e) => e,
                                            toWireType: (e, t) => t,
                                            argPackAdvance: 8,
                                            readValueFromPointer: t6(t, n),
                                            L: null,
                                        });
                                    },
                                    _embind_register_function: (e, t, n, r, i, s) => {
                                        var a = tX(t, n);
                                        (e = tQ((e = ts(e)))),
                                            (i = tK(r, i)),
                                            tL(
                                                e,
                                                function () {
                                                    t$(`Cannot call ${e} due to unbound types`, a);
                                                },
                                                t - 1,
                                            ),
                                            tN(
                                                [],
                                                a,
                                                (n) => (
                                                    tB(e, tq(e, [n[0], null].concat(n.slice(1)), null, i, s), t - 1), []
                                                ),
                                            );
                                    },
                                    _embind_register_integer: (e, t, n, r, i) => {
                                        if (((t = ts(t)), -1 === i && (i = 0xffffffff), (i = (e) => e), 0 === r)) {
                                            var s = 32 - 8 * n;
                                            i = (e) => (e << s) >>> s;
                                        }
                                        var a = t.includes("unsigned")
                                            ? function (e, t) {
                                                  return t >>> 0;
                                              }
                                            : function (e, t) {
                                                  return t;
                                              };
                                        tR(e, {
                                            name: t,
                                            fromWireType: i,
                                            toWireType: a,
                                            argPackAdvance: 8,
                                            readValueFromPointer: t4(t, n, 0 !== r),
                                            L: null,
                                        });
                                    },
                                    _embind_register_memory_view: (e, t, n) => {
                                        function r(e) {
                                            return new i(v.buffer, b[(e + 4) >> 2], b[e >> 2]);
                                        }
                                        var i = [
                                            Int8Array,
                                            Uint8Array,
                                            Int16Array,
                                            Uint16Array,
                                            Int32Array,
                                            Uint32Array,
                                            Float32Array,
                                            Float64Array,
                                        ][t];
                                        tR(
                                            e,
                                            {
                                                name: (n = ts(n)),
                                                fromWireType: r,
                                                argPackAdvance: 8,
                                                readValueFromPointer: r,
                                            },
                                            { Vb: !0 },
                                        );
                                    },
                                    _embind_register_std_string: (e, t) => {
                                        var n = "std::string" === (t = ts(t));
                                        tR(e, {
                                            name: t,
                                            fromWireType: function (e) {
                                                var t = b[e >> 2],
                                                    r = e + 4;
                                                if (n)
                                                    for (var i = r, s = 0; s <= t; ++s) {
                                                        var a = r + s;
                                                        if (s == t || 0 == N[a]) {
                                                            if (((i = i ? el(N, i, a - i) : ""), void 0 === o))
                                                                var o = i;
                                                            else (o += "\0"), (o += i);
                                                            i = a + 1;
                                                        }
                                                    }
                                                else {
                                                    for (s = 0, o = Array(t); s < t; ++s)
                                                        o[s] = String.fromCharCode(N[r + s]);
                                                    o = o.join("");
                                                }
                                                return nT(e), o;
                                            },
                                            toWireType: function (e, t) {
                                                t instanceof ArrayBuffer && (t = new Uint8Array(t));
                                                var r = "string" == typeof t;
                                                if (
                                                    !(
                                                        r ||
                                                        t instanceof Uint8Array ||
                                                        t instanceof Uint8ClampedArray ||
                                                        t instanceof Int8Array
                                                    )
                                                )
                                                    throw new e2("Cannot pass non-string to std::string");
                                                var i = n && r ? ec(t) : t.length,
                                                    s = nS(4 + i + 1),
                                                    a = s + 4;
                                                if (((b[s >> 2] = i), n && r)) ed(t, N, a, i + 1);
                                                else if (r)
                                                    for (r = 0; r < i; ++r) {
                                                        var o = t.charCodeAt(r);
                                                        if (255 < o)
                                                            throw (
                                                                (nT(a),
                                                                new e2(
                                                                    "String has UTF-16 code units that do not fit in 8 bits",
                                                                ))
                                                            );
                                                        N[a + r] = o;
                                                    }
                                                else for (r = 0; r < i; ++r) N[a + r] = t[r];
                                                return null !== e && e.push(nT, s), s;
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: tS,
                                            L(e) {
                                                nT(e);
                                            },
                                        });
                                    },
                                    _embind_register_std_wstring: (e, t, n) => {
                                        if (((n = ts(n)), 2 === t))
                                            var r = t7,
                                                i = t8,
                                                s = t9,
                                                a = (e) => R[e >> 1];
                                        else 4 === t && ((r = ne), (i = nt), (s = nn), (a = (e) => b[e >> 2]));
                                        tR(e, {
                                            name: n,
                                            fromWireType: (e) => {
                                                for (var n, i = b[e >> 2], s = e + 4, o = 0; o <= i; ++o) {
                                                    var l = e + 4 + o * t;
                                                    (o == i || 0 == a(l)) &&
                                                        ((s = r(s, l - s)),
                                                        void 0 === n ? (n = s) : ((n += "\0"), (n += s)),
                                                        (s = l + t));
                                                }
                                                return nT(e), n;
                                            },
                                            toWireType: (e, r) => {
                                                if ("string" != typeof r)
                                                    throw new e2(`Cannot pass non-string to C++ string type ${n}`);
                                                var a = s(r),
                                                    o = nS(4 + a + t);
                                                return (
                                                    (b[o >> 2] = a / t),
                                                    i(r, o + 4, a + t),
                                                    null !== e && e.push(nT, o),
                                                    o
                                                );
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: tS,
                                            L(e) {
                                                nT(e);
                                            },
                                        });
                                    },
                                    _embind_register_value_object: (e, t, n, r, i, s) => {
                                        tI[e] = { name: ts(t), Na: tK(n, r), O: tK(i, s), eb: [] };
                                    },
                                    _embind_register_value_object_field: (e, t, n, r, i, s, a, o, l, u) => {
                                        tI[e].eb.push({
                                            Ob: ts(t),
                                            Ub: n,
                                            Sb: tK(r, i),
                                            Tb: s,
                                            kc: a,
                                            jc: tK(o, l),
                                            lc: u,
                                        });
                                    },
                                    _embind_register_void: (e, t) => {
                                        tR(e, {
                                            Ic: !0,
                                            name: (t = ts(t)),
                                            argPackAdvance: 0,
                                            fromWireType: () => {},
                                            toWireType: () => {},
                                        });
                                    },
                                    _emscripten_get_now_is_monotonic: () => 1,
                                    _emscripten_memcpy_js: (e, t, n) => N.copyWithin(e, t, t + n),
                                    _emval_as: (e, t, n) => ((e = tn(e)), nr((t = t_(t, "emval::as")), n, e)),
                                    _emval_call_method: (e, t, n, r, i) => (
                                        (e = na[e]), (t = tn(t)), e(t, t[(n = ns(n))], r, i)
                                    ),
                                    _emval_decref: t0,
                                    _emval_get_method_caller: (e, t, n) => {
                                        var r = nl(e, t),
                                            i = r.shift(),
                                            s = Array(--e);
                                        return no(
                                            e9(
                                                (t = `methodCaller<(${r.map((e) => e.name).join(", ")}) => ${i.name}>`),
                                                (t, a, o, l) => {
                                                    for (var u = 0, c = 0; c < e; ++c)
                                                        (s[c] = r[c].readValueFromPointer(l + u)),
                                                            (u += r[c].argPackAdvance);
                                                    return nr(i, o, (t = 1 === n ? nu(a, s) : a.apply(t, s)));
                                                },
                                            ),
                                        );
                                    },
                                    _emval_get_module_property: (e) => tr(s[(e = ns(e))]),
                                    _emval_get_property: (e, t) => ((e = tn(e)), tr(e[(t = tn(t))])),
                                    _emval_incref: (e) => {
                                        9 < e && (tt[e + 1] += 1);
                                    },
                                    _emval_new_array: () => tr([]),
                                    _emval_new_cstring: (e) => tr(ns(e)),
                                    _emval_new_object: () => tr({}),
                                    _emval_run_destructors: (e) => {
                                        tT(tn(e)), t0(e);
                                    },
                                    _emval_set_property: (e, t, n) => {
                                        (e = tn(e)), (t = tn(t)), (n = tn(n)), (e[t] = n);
                                    },
                                    _emval_take_value: (e, t) =>
                                        tr((e = (e = t_(e, "_emval_take_value")).readValueFromPointer(t))),
                                    emscripten_asm_const_int: (e, t, n) => {
                                        nc.length = 0;
                                        for (var r; (r = N[t++]); ) {
                                            var i = 105 != r;
                                            (i &= 112 != r),
                                                (n += i && n % 8 ? 4 : 0),
                                                nc.push(112 == r ? b[n >> 2] : 105 == r ? O[n >> 2] : L[n >> 3]),
                                                (n += i ? 8 : 4);
                                        }
                                        return X[e](...nc);
                                    },
                                    emscripten_date_now: () => Date.now(),
                                    emscripten_get_now: () => performance.now(),
                                    emscripten_resize_heap: (e) => {
                                        var t = N.length;
                                        if (0x80000000 < (e >>>= 0)) return !1;
                                        for (var n = 1; 4 >= n; n *= 2) {
                                            var r = t * (1 + 0.2 / n);
                                            r = Math.min(r, e + 0x6000000);
                                            var i = Math;
                                            r = Math.max(e, r);
                                            e: {
                                                i =
                                                    (i.min.call(i, 0x80000000, r + ((65536 - (r % 65536)) % 65536)) -
                                                        y.buffer.byteLength +
                                                        65535) /
                                                    65536;
                                                try {
                                                    y.grow(i), M();
                                                    var s = 1;
                                                    break e;
                                                } catch (e) {}
                                                s = void 0;
                                            }
                                            if (s) return !0;
                                        }
                                        return !1;
                                    },
                                    environ_get: (e, t) => {
                                        var n = 0;
                                        return (
                                            n_().forEach((r, i) => {
                                                var s = t + n;
                                                for (i = b[(e + 4 * i) >> 2] = s, s = 0; s < r.length; ++s)
                                                    v[i++] = r.charCodeAt(s);
                                                (v[i] = 0), (n += r.length + 1);
                                            }),
                                            0
                                        );
                                    },
                                    environ_sizes_get: (e, t) => {
                                        var n = n_();
                                        b[e >> 2] = n.length;
                                        var r = 0;
                                        return n.forEach((e) => (r += e.length + 1)), (b[t >> 2] = r), 0;
                                    },
                                    fd_close: function (e) {
                                        try {
                                            var t = eF(e);
                                            if (null === t.W) throw new eR(8);
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
                                            if (void 0 === e7 || "ErrnoError" !== e.name) throw e;
                                            return e.$;
                                        }
                                    },
                                    fd_read: function (e, t, n, r) {
                                        try {
                                            e: {
                                                var i = eF(e);
                                                e = t;
                                                for (var s, a = (t = 0); a < n; a++) {
                                                    var o = b[e >> 2],
                                                        l = b[(e + 4) >> 2];
                                                    e += 8;
                                                    var u = i,
                                                        c = s,
                                                        d = v;
                                                    if (0 > l || 0 > c) throw new eR(28);
                                                    if (null === u.W || 1 == (2097155 & u.flags)) throw new eR(8);
                                                    if (16384 == (61440 & u.node.mode)) throw new eR(31);
                                                    if (!u.m.read) throw new eR(28);
                                                    var _ = void 0 !== c;
                                                    if (_) {
                                                        if (!u.seekable) throw new eR(70);
                                                    } else c = u.position;
                                                    var f = u.m.read(u, d, o, l, c);
                                                    _ || (u.position += f);
                                                    var p = f;
                                                    if (0 > p) {
                                                        var h = -1;
                                                        break e;
                                                    }
                                                    if (((t += p), p < l)) break;
                                                    void 0 !== s && (s += p);
                                                }
                                                h = t;
                                            }
                                            return (b[r >> 2] = h), 0;
                                        } catch (e) {
                                            if (void 0 === e7 || "ErrnoError" !== e.name) throw e;
                                            return e.$;
                                        }
                                    },
                                    fd_seek: function (e, t, n, r, i) {
                                        t = (n + 2097152) >>> 0 < 4194305 - !!t ? (t >>> 0) + 0x100000000 * n : NaN;
                                        try {
                                            if (isNaN(t)) return 61;
                                            var s = eF(e);
                                            return (
                                                eX(s, t, r),
                                                (Z = [
                                                    s.position >>> 0,
                                                    ((q = s.position),
                                                    1 <= +Math.abs(q)
                                                        ? 0 < q
                                                            ? Math.floor(q / 0x100000000) >>> 0
                                                            : ~~Math.ceil((q - (~~q >>> 0)) / 0x100000000) >>> 0
                                                        : 0),
                                                ]),
                                                (O[i >> 2] = Z[0]),
                                                (O[(i + 4) >> 2] = Z[1]),
                                                s.Ka && 0 === t && 0 === r && (s.Ka = null),
                                                0
                                            );
                                        } catch (e) {
                                            if (void 0 === e7 || "ErrnoError" !== e.name) throw e;
                                            return e.$;
                                        }
                                    },
                                    fd_write: function (e, t, n, r) {
                                        try {
                                            e: {
                                                var i = eF(e);
                                                e = t;
                                                for (var s, a = (t = 0); a < n; a++) {
                                                    var o = b[e >> 2],
                                                        l = b[(e + 4) >> 2];
                                                    e += 8;
                                                    var u = i,
                                                        c = o,
                                                        d = l,
                                                        _ = s,
                                                        f = v;
                                                    if (0 > d || 0 > _) throw new eR(28);
                                                    if (null === u.W || 0 == (2097155 & u.flags)) throw new eR(8);
                                                    if (16384 == (61440 & u.node.mode)) throw new eR(31);
                                                    if (!u.m.write) throw new eR(28);
                                                    u.seekable && 1024 & u.flags && eX(u, 0, 2);
                                                    var p = void 0 !== _;
                                                    if (p) {
                                                        if (!u.seekable) throw new eR(70);
                                                    } else _ = u.position;
                                                    var h = u.m.write(u, f, c, d, _, void 0);
                                                    p || (u.position += h);
                                                    var m = h;
                                                    if (0 > m) {
                                                        var E = -1;
                                                        break e;
                                                    }
                                                    (t += m), void 0 !== s && (s += m);
                                                }
                                                E = t;
                                            }
                                            return (b[r >> 2] = E), 0;
                                        } catch (e) {
                                            if (void 0 === e7 || "ErrnoError" !== e.name) throw e;
                                            return e.$;
                                        }
                                    },
                                    strftime_l: (e, t, n, r) => nm(e, t, n, r),
                                },
                                nI = (function () {
                                    function e(e) {
                                        return (
                                            (y = (nI = e.exports).memory),
                                            M(),
                                            (tF = nI.__indirect_function_table),
                                            x.unshift(nI.__wasm_call_ctors),
                                            G--,
                                            s.monitorRunDependencies?.(G),
                                            0 == G &&
                                                (null !== F && (clearInterval(F), (F = null)),
                                                V && ((e = V), (V = null), e())),
                                            nI
                                        );
                                    }
                                    var t = { env: nA, wasi_snapshot_preview1: nA };
                                    if ((G++, s.monitorRunDependencies?.(G), s.instantiateWasm))
                                        try {
                                            return s.instantiateWasm(t, e);
                                        } catch (e) {
                                            T(`Module.instantiateWasm callback failed with error: ${e}`), i(e);
                                        }
                                    return (
                                        (H ||= j("canvas_advanced.wasm")
                                            ? "canvas_advanced.wasm"
                                            : s.locateFile
                                              ? s.locateFile("canvas_advanced.wasm", A)
                                              : A + "canvas_advanced.wasm"),
                                        z(t, function (t) {
                                            e(t.instance);
                                        }).catch(i),
                                        {}
                                    );
                                })(),
                                nT = (e) => (nT = nI.free)(e),
                                nS = (e) => (nS = nI.malloc)(e),
                                ny = (e) => (ny = nI.__getTypeName)(e),
                                nv = (s._ma_device__on_notification_unlocked = (e) =>
                                    (nv = s._ma_device__on_notification_unlocked =
                                        nI.ma_device__on_notification_unlocked)(e));
                            (s._ma_malloc_emscripten = (e, t) =>
                                (s._ma_malloc_emscripten = nI.ma_malloc_emscripten)(e, t)),
                                (s._ma_free_emscripten = (e, t) =>
                                    (s._ma_free_emscripten = nI.ma_free_emscripten)(e, t));
                            var nN = (s._ma_device_process_pcm_frames_capture__webaudio = (e, t, n) =>
                                    (nN = s._ma_device_process_pcm_frames_capture__webaudio =
                                        nI.ma_device_process_pcm_frames_capture__webaudio)(e, t, n)),
                                nC = (s._ma_device_process_pcm_frames_playback__webaudio = (e, t, n) =>
                                    (nC = s._ma_device_process_pcm_frames_playback__webaudio =
                                        nI.ma_device_process_pcm_frames_playback__webaudio)(e, t, n));
                            function nR() {
                                function e() {
                                    if (!n && ((n = !0), (s.calledRun = !0), !w)) {
                                        if (
                                            (s.noFSInit ||
                                                eJ ||
                                                ((eJ = !0),
                                                (s.stdin = s.stdin),
                                                (s.stdout = s.stdout),
                                                (s.stderr = s.stderr),
                                                s.stdin ? eQ("stdin", s.stdin) : ez("/dev/tty", "/dev/stdin"),
                                                s.stdout ? eQ("stdout", null, s.stdout) : ez("/dev/tty", "/dev/stdout"),
                                                s.stderr
                                                    ? eQ("stderr", null, s.stderr)
                                                    : ez("/dev/tty1", "/dev/stderr"),
                                                eZ("/dev/stdin", 0),
                                                eZ("/dev/stdout", 1),
                                                eZ("/dev/stderr", 1)),
                                            (eC = !1),
                                            Q(x),
                                            r(s),
                                            s.onRuntimeInitialized && s.onRuntimeInitialized(),
                                            s.postRun)
                                        )
                                            for (
                                                "function" == typeof s.postRun && (s.postRun = [s.postRun]);
                                                s.postRun.length;
                                            ) {
                                                var e = s.postRun.shift();
                                                k.unshift(e);
                                            }
                                        Q(k);
                                    }
                                }
                                if (!(0 < G)) {
                                    if (s.preRun)
                                        for (
                                            "function" == typeof s.preRun && (s.preRun = [s.preRun]);
                                            s.preRun.length;
                                        )
                                            U();
                                    Q(P),
                                        0 < G ||
                                            (s.setStatus
                                                ? (s.setStatus("Running..."),
                                                  setTimeout(function () {
                                                      setTimeout(function () {
                                                          s.setStatus("");
                                                      }, 1),
                                                          e();
                                                  }, 1))
                                                : e());
                                }
                            }
                            if (
                                ((s.dynCall_iiji = (e, t, n, r, i) =>
                                    (s.dynCall_iiji = nI.dynCall_iiji)(e, t, n, r, i)),
                                (s.dynCall_jiji = (e, t, n, r, i) => (s.dynCall_jiji = nI.dynCall_jiji)(e, t, n, r, i)),
                                (s.dynCall_iiiji = (e, t, n, r, i, a) =>
                                    (s.dynCall_iiiji = nI.dynCall_iiiji)(e, t, n, r, i, a)),
                                (s.dynCall_iij = (e, t, n, r) => (s.dynCall_iij = nI.dynCall_iij)(e, t, n, r)),
                                (s.dynCall_jii = (e, t, n) => (s.dynCall_jii = nI.dynCall_jii)(e, t, n)),
                                (s.dynCall_viijii = (e, t, n, r, i, a, o) =>
                                    (s.dynCall_viijii = nI.dynCall_viijii)(e, t, n, r, i, a, o)),
                                (s.dynCall_iiiiij = (e, t, n, r, i, a, o) =>
                                    (s.dynCall_iiiiij = nI.dynCall_iiiiij)(e, t, n, r, i, a, o)),
                                (s.dynCall_iiiiijj = (e, t, n, r, i, a, o, l, u) =>
                                    (s.dynCall_iiiiijj = nI.dynCall_iiiiijj)(e, t, n, r, i, a, o, l, u)),
                                (s.dynCall_iiiiiijj = (e, t, n, r, i, a, o, l, u, c) =>
                                    (s.dynCall_iiiiiijj = nI.dynCall_iiiiiijj)(e, t, n, r, i, a, o, l, u, c)),
                                (V = function e() {
                                    n || nR(), n || (V = e);
                                }),
                                s.preInit)
                            )
                                for (
                                    "function" == typeof s.preInit && (s.preInit = [s.preInit]);
                                    0 < s.preInit.length;
                                )
                                    s.preInit.pop()();
                            return nR(), a;
                        };
                    })();
                },
                (e) => {
                    e.exports = JSON.parse(
                        '{"name":"@rive-app/canvas","version":"2.32.0","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}',
                    );
                },
                (e, t, n) => {
                    n.r(t), n.d(t, { Animation: () => r.Animation });
                    var r = n(4);
                },
                (e, t, n) => {
                    n.r(t), n.d(t, { Animation: () => r });
                    var r = (function () {
                        function e(e, t, n, r) {
                            (this.animation = e),
                                (this.artboard = t),
                                (this.playing = r),
                                (this.loopCount = 0),
                                (this.scrubTo = null),
                                (this.instance = new n.LinearAnimationInstance(e, t));
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
                (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            AudioAssetWrapper: () => s.AudioAssetWrapper,
                            AudioWrapper: () => s.AudioWrapper,
                            BLANK_URL: () => i.BLANK_URL,
                            CustomFileAssetLoaderWrapper: () => s.CustomFileAssetLoaderWrapper,
                            FileAssetWrapper: () => s.FileAssetWrapper,
                            FileFinalizer: () => s.FileFinalizer,
                            FontAssetWrapper: () => s.FontAssetWrapper,
                            FontWrapper: () => s.FontWrapper,
                            ImageAssetWrapper: () => s.ImageAssetWrapper,
                            ImageWrapper: () => s.ImageWrapper,
                            createFinalization: () => s.createFinalization,
                            finalizationRegistry: () => s.finalizationRegistry,
                            registerTouchInteractions: () => r.registerTouchInteractions,
                            sanitizeUrl: () => i.sanitizeUrl,
                        });
                    var r = n(6),
                        i = n(7),
                        s = n(8);
                },
                (e, t, n) => {
                    n.r(t), n.d(t, { registerTouchInteractions: () => s });
                    var r = void 0,
                        i = function (e, t, n) {
                            var r,
                                i,
                                s = [];
                            if (
                                ["touchstart", "touchmove"].indexOf(e.type) > -1 &&
                                (null == (r = e.changedTouches) ? void 0 : r.length)
                            ) {
                                t || e.preventDefault();
                                for (var a = 0, o = n ? e.changedTouches.length : 1; a < o; ) {
                                    var l = e.changedTouches[a];
                                    s.push({ clientX: l.clientX, clientY: l.clientY, identifier: l.identifier }), a++;
                                }
                            } else if ("touchend" === e.type && (null == (i = e.changedTouches) ? void 0 : i.length))
                                for (var a = 0, o = n ? e.changedTouches.length : 1; a < o; ) {
                                    var l = e.changedTouches[a];
                                    s.push({ clientX: l.clientX, clientY: l.clientY, identifier: l.identifier }), a++;
                                }
                            else s.push({ clientX: e.clientX, clientY: e.clientY, identifier: 0 });
                            return s;
                        },
                        s = function (e) {
                            var t = e.canvas,
                                n = e.artboard,
                                s = e.stateMachines,
                                a = void 0 === s ? [] : s,
                                o = e.renderer,
                                l = e.rive,
                                u = e.fit,
                                c = e.alignment,
                                d = e.isTouchScrollEnabled,
                                _ = void 0 !== d && d,
                                f = e.dispatchPointerExit,
                                p = void 0 === f || f,
                                h = e.enableMultiTouch,
                                m = void 0 !== h && h,
                                E = e.layoutScaleFactor,
                                g = void 0 === E ? 1 : E,
                                A = e.listenOnDocumentBody,
                                I = e.eventCapture;
                            if (!t || !a.length || !o || !l || !n || "u" < typeof window) return null;
                            var T = null,
                                S = !1,
                                y = function (e) {
                                    if (S && e instanceof MouseEvent) {
                                        "mouseup" == e.type && (S = !1);
                                        return;
                                    }
                                    (S = _ && "touchend" === e.type && "touchstart" === T), (T = e.type);
                                    var r = t.getBoundingClientRect(),
                                        s = i(e, _, m),
                                        o = l.computeAlignment(
                                            u,
                                            c,
                                            { minX: 0, minY: 0, maxX: r.width, maxY: r.height },
                                            n.bounds,
                                            g,
                                        ),
                                        d = new l.Mat2D();
                                    o.invert(d);
                                    var f = [];
                                    switch (
                                        (s.forEach(function (t) {
                                            var n = t.clientX,
                                                i = t.clientY;
                                            if (n || i) {
                                                var s = n - r.left,
                                                    a = i - r.top;
                                                if (
                                                    (s >= 0 && s <= r.width && a >= 0 && a <= r.height) ||
                                                    ["mouseleave", "mouseout"].includes(e.type)
                                                ) {
                                                    var o = new l.Vec2D(s, a),
                                                        u = l.mapXY(d, o),
                                                        c = u.x(),
                                                        _ = u.y();
                                                    (t.transformedX = c),
                                                        (t.transformedY = _),
                                                        u.delete(),
                                                        o.delete(),
                                                        f.push(t);
                                                }
                                            }
                                        }),
                                        d.delete(),
                                        o.delete(),
                                        e.type)
                                    ) {
                                        case "mouseleave":
                                        case "mouseout":
                                            for (
                                                var h = function (e) {
                                                        p
                                                            ? f.forEach(function (t) {
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
                                                            : f.forEach(function (t) {
                                                                  e.pointerMove(
                                                                      t.transformedX,
                                                                      t.transformedY,
                                                                      t.identifier,
                                                                  );
                                                              });
                                                    },
                                                    E = 0,
                                                    A = a;
                                                E < A.length;
                                                E++
                                            ) {
                                                var I = A[E];
                                                h(I);
                                            }
                                            break;
                                        case "mouseenter":
                                        case "touchmove":
                                        case "mouseover":
                                        case "mousemove":
                                            for (
                                                var y = function (e) {
                                                        f.forEach(function (t) {
                                                            e.pointerMove(t.transformedX, t.transformedY, t.identifier);
                                                        });
                                                    },
                                                    v = 0,
                                                    N = a;
                                                v < N.length;
                                                v++
                                            ) {
                                                var I = N[v];
                                                y(I);
                                            }
                                            break;
                                        case "touchstart":
                                        case "mousedown":
                                            for (
                                                var C = function (e) {
                                                        f.forEach(function (t) {
                                                            e.pointerDown(t.transformedX, t.transformedY, t.identifier);
                                                        });
                                                    },
                                                    R = 0,
                                                    O = a;
                                                R < O.length;
                                                R++
                                            ) {
                                                var I = O[R];
                                                C(I);
                                            }
                                            break;
                                        case "touchend":
                                            for (
                                                var b = function (e) {
                                                        f.forEach(function (t) {
                                                            e.pointerUp(t.transformedX, t.transformedY, t.identifier),
                                                                e.pointerExit(
                                                                    t.transformedX,
                                                                    t.transformedY,
                                                                    t.identifier,
                                                                );
                                                        });
                                                    },
                                                    D = 0,
                                                    L = a;
                                                D < L.length;
                                                D++
                                            ) {
                                                var I = L[D];
                                                b(I);
                                            }
                                            break;
                                        case "mouseup":
                                            for (
                                                var w = function (e) {
                                                        f.forEach(function (t) {
                                                            e.pointerUp(t.transformedX, t.transformedY, t.identifier);
                                                        });
                                                    },
                                                    M = 0,
                                                    P = a;
                                                M < P.length;
                                                M++
                                            ) {
                                                var I = P[M];
                                                w(I);
                                            }
                                    }
                                }.bind(r),
                                v = A ? t.ownerDocument.body : t;
                            return (
                                v.addEventListener("mouseover", y, I),
                                v.addEventListener("mouseenter", y, I),
                                v.addEventListener("mouseout", y, I),
                                v.addEventListener("mouseleave", y, I),
                                v.addEventListener("mousemove", y, I),
                                v.addEventListener("mousedown", y, I),
                                v.addEventListener("mouseup", y, I),
                                t.addEventListener("touchmove", y, { passive: _ }),
                                t.addEventListener("touchstart", y, { passive: _ }),
                                t.addEventListener("touchend", y),
                                function () {
                                    v.removeEventListener("mouseover", y, I),
                                        v.removeEventListener("mouseenter", y, I),
                                        v.removeEventListener("mouseout", y, I),
                                        v.removeEventListener("mouseleave", y, I),
                                        v.removeEventListener("mousemove", y, I),
                                        v.removeEventListener("mousedown", y, I),
                                        v.removeEventListener("mouseup", y, I),
                                        t.removeEventListener("touchmove", y),
                                        t.removeEventListener("touchstart", y),
                                        t.removeEventListener("touchend", y);
                                }
                            );
                        };
                },
                (e, t, n) => {
                    n.r(t), n.d(t, { BLANK_URL: () => u, sanitizeUrl: () => _ });
                    var r = /^([^\w]*)(javascript|data|vbscript)/im,
                        i = /&#(\w+)(^\w|;)?/g,
                        s = /&(newline|tab);/gi,
                        a = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
                        o = /^.+(:|&colon;)/gim,
                        l = [".", "/"],
                        u = "about:blank";
                    function c(e) {
                        return l.indexOf(e[0]) > -1;
                    }
                    function d(e) {
                        return e.replace(a, "").replace(i, function (e, t) {
                            return String.fromCharCode(t);
                        });
                    }
                    function _(e) {
                        if (!e) return u;
                        var t = d(e).replace(s, "").replace(a, "").trim();
                        if (!t) return u;
                        if (c(t)) return t;
                        var n = t.match(o);
                        if (!n) return t;
                        var i = n[0];
                        return r.test(i) ? u : t;
                    }
                },
                (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            AudioAssetWrapper: () => f,
                            AudioWrapper: () => l,
                            CustomFileAssetLoaderWrapper: () => c,
                            FileAssetWrapper: () => d,
                            FileFinalizer: () => i,
                            FontAssetWrapper: () => p,
                            FontWrapper: () => u,
                            ImageAssetWrapper: () => _,
                            ImageWrapper: () => o,
                            createFinalization: () => E,
                            finalizationRegistry: () => m,
                        });
                    var r = (function () {
                            var e = function (t, n) {
                                return (e =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (e, t) {
                                            e.__proto__ = t;
                                        }) ||
                                    function (e, t) {
                                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                    })(t, n);
                            };
                            return function (t, n) {
                                if ("function" != typeof n && null !== n)
                                    throw TypeError(
                                        "Class extends value " + String(n) + " is not a constructor or null",
                                    );
                                function r() {
                                    this.constructor = t;
                                }
                                e(t, n),
                                    (t.prototype =
                                        null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                            };
                        })(),
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
                        s = (function () {
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
                        a = (function () {
                            function e() {
                                this.selfUnref = !1;
                            }
                            return (e.prototype.unref = function () {}), e;
                        })(),
                        o = (function (e) {
                            function t(t) {
                                var n = e.call(this) || this;
                                return (n._nativeImage = t), n;
                            }
                            return (
                                r(t, e),
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
                        })(a),
                        l = (function (e) {
                            function t(t) {
                                var n = e.call(this) || this;
                                return (n._nativeAudio = t), n;
                            }
                            return (
                                r(t, e),
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
                        })(a),
                        u = (function (e) {
                            function t(t) {
                                var n = e.call(this) || this;
                                return (n._nativeFont = t), n;
                            }
                            return (
                                r(t, e),
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
                        })(a),
                        c = (function () {
                            function e(e, t) {
                                (this._assetLoaderCallback = t),
                                    (this.assetLoader = new e.CustomFileAssetLoader({
                                        loadContents: this.loadContents.bind(this),
                                    }));
                            }
                            return (
                                (e.prototype.loadContents = function (e, t) {
                                    var n;
                                    return (
                                        e.isImage
                                            ? (n = new _(e))
                                            : e.isAudio
                                              ? (n = new f(e))
                                              : e.isFont && (n = new p(e)),
                                        this._assetLoaderCallback(n, t)
                                    );
                                }),
                                e
                            );
                        })(),
                        d = (function () {
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
                        _ = (function (e) {
                            function t() {
                                return (null !== e && e.apply(this, arguments)) || this;
                            }
                            return (
                                r(t, e),
                                (t.prototype.setRenderImage = function (e) {
                                    this._nativeFileAsset.setRenderImage(e.nativeImage);
                                }),
                                t
                            );
                        })(d),
                        f = (function (e) {
                            function t() {
                                return (null !== e && e.apply(this, arguments)) || this;
                            }
                            return (
                                r(t, e),
                                (t.prototype.setAudioSource = function (e) {
                                    this._nativeFileAsset.setAudioSource(e.nativeAudio);
                                }),
                                t
                            );
                        })(d),
                        p = (function (e) {
                            function t() {
                                return (null !== e && e.apply(this, arguments)) || this;
                            }
                            return (
                                r(t, e),
                                (t.prototype.setFont = function (e) {
                                    this._nativeFileAsset.setFont(e.nativeFont);
                                }),
                                t
                            );
                        })(d),
                        h = (function () {
                            function e(e) {}
                            return (
                                (e.prototype.register = function (e) {
                                    e.selfUnref = !0;
                                }),
                                (e.prototype.unregister = function (e) {}),
                                e
                            );
                        })(),
                        m = new ("u" > typeof FinalizationRegistry ? FinalizationRegistry : h)(function (e) {
                            null == e || e.unref();
                        }),
                        E = function (e, t) {
                            var n = new s(t);
                            m.register(e, n);
                        };
                },
            ],
            t = {};
        function n(r) {
            var i = t[r];
            if (void 0 !== i) return i.exports;
            var s = (t[r] = { exports: {} });
            return e[r](s, s.exports, n), s.exports;
        }
        (() => {
            n.d = (e, t) => {
                for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            };
        })(),
            (() => {
                n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
            })(),
            (() => {
                n.r = (e) => {
                    "u" > typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                        Object.defineProperty(e, "__esModule", { value: !0 });
                };
            })();
        var r = {};
        return (
            (() => {
                n.r(r),
                    n.d(r, {
                        Alignment: () => t,
                        DataEnum: () => G,
                        EventType: () => a,
                        Fit: () => e,
                        Layout: () => T,
                        LoopType: () => o,
                        Rive: () => k,
                        RiveEventType: () => s,
                        RiveFile: () => x,
                        RuntimeLoader: () => S,
                        StateMachineInput: () => y,
                        StateMachineInputType: () => i,
                        Testing: () => Q,
                        ViewModel: () => U,
                        ViewModelInstance: () => F,
                        ViewModelInstanceArtboard: () => q,
                        ViewModelInstanceAssetImage: () => z,
                        ViewModelInstanceBoolean: () => j,
                        ViewModelInstanceColor: () => $,
                        ViewModelInstanceEnum: () => W,
                        ViewModelInstanceList: () => K,
                        ViewModelInstanceNumber: () => H,
                        ViewModelInstanceString: () => B,
                        ViewModelInstanceTrigger: () => Y,
                        ViewModelInstanceValue: () => V,
                        decodeAudio: () => J,
                        decodeFont: () => et,
                        decodeImage: () => ee,
                    });
                var e,
                    t,
                    i,
                    s,
                    a,
                    o,
                    l,
                    u,
                    c = n(1),
                    d = n(2),
                    _ = n(3),
                    f = n(5),
                    p = (function () {
                        var e = function (t, n) {
                            return (e =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                })(t, n);
                        };
                        return function (t, n) {
                            if ("function" != typeof n && null !== n)
                                throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
                            function r() {
                                this.constructor = t;
                            }
                            e(t, n),
                                (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                        };
                    })(),
                    h = function () {
                        return (h =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in (t = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e;
                            }).apply(this, arguments);
                    },
                    m = function (e, t, n, r) {
                        function i(e) {
                            return e instanceof n
                                ? e
                                : new n(function (t) {
                                      t(e);
                                  });
                        }
                        return new (n || (n = Promise))(function (n, s) {
                            function a(e) {
                                try {
                                    l(r.next(e));
                                } catch (e) {
                                    s(e);
                                }
                            }
                            function o(e) {
                                try {
                                    l(r.throw(e));
                                } catch (e) {
                                    s(e);
                                }
                            }
                            function l(e) {
                                e.done ? n(e.value) : i(e.value).then(a, o);
                            }
                            l((r = r.apply(e, t || [])).next());
                        });
                    },
                    E = function (e, t) {
                        var n,
                            r,
                            i,
                            s = {
                                label: 0,
                                sent: function () {
                                    if (1 & i[0]) throw i[1];
                                    return i[1];
                                },
                                trys: [],
                                ops: [],
                            },
                            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                        return (
                            (a.next = o(0)),
                            (a.throw = o(1)),
                            (a.return = o(2)),
                            "function" == typeof Symbol &&
                                (a[Symbol.iterator] = function () {
                                    return this;
                                }),
                            a
                        );
                        function o(e) {
                            return function (t) {
                                return l([e, t]);
                            };
                        }
                        function l(o) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a && ((a = 0), o[0] && (s = 0)), s; )
                                try {
                                    if (
                                        ((n = 1),
                                        r &&
                                            (i =
                                                2 & o[0]
                                                    ? r.return
                                                    : o[0]
                                                      ? r.throw || ((i = r.return) && i.call(r), 0)
                                                      : r.next) &&
                                            !(i = i.call(r, o[1])).done)
                                    )
                                        return i;
                                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return s.label++, { value: o[1], done: !1 };
                                        case 5:
                                            s.label++, (r = o[1]), (o = [0]);
                                            continue;
                                        case 7:
                                            (o = s.ops.pop()), s.trys.pop();
                                            continue;
                                        default:
                                            if (
                                                !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                                                (6 === o[0] || 2 === o[0])
                                            ) {
                                                s = 0;
                                                continue;
                                            }
                                            if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                                s.label = o[1];
                                                break;
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                (s.label = i[1]), (i = o);
                                                break;
                                            }
                                            if (i && s.label < i[2]) {
                                                (s.label = i[2]), s.ops.push(o);
                                                break;
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue;
                                    }
                                    o = t.call(e, s);
                                } catch (e) {
                                    (o = [6, e]), (r = 0);
                                } finally {
                                    n = i = 0;
                                }
                            if (5 & o[0]) throw o[1];
                            return { value: o[0] ? o[1] : void 0, done: !0 };
                        }
                    },
                    g = function (e, t, n) {
                        if (n || 2 == arguments.length)
                            for (var r, i = 0, s = t.length; i < s; i++)
                                (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
                        return e.concat(r || Array.prototype.slice.call(t));
                    },
                    A = (function (e) {
                        function t() {
                            var t = (null !== e && e.apply(this, arguments)) || this;
                            return (t.isHandledError = !0), t;
                        }
                        return p(t, e), t;
                    })(Error),
                    I = function (e) {
                        return e && e.isHandledError ? e.message : "Problem loading file; may be corrupt!";
                    };
                !(function (e) {
                    (e.Cover = "cover"),
                        (e.Contain = "contain"),
                        (e.Fill = "fill"),
                        (e.FitWidth = "fitWidth"),
                        (e.FitHeight = "fitHeight"),
                        (e.None = "none"),
                        (e.ScaleDown = "scaleDown"),
                        (e.Layout = "layout");
                })(e || (e = {})),
                    (function (e) {
                        (e.Center = "center"),
                            (e.TopLeft = "topLeft"),
                            (e.TopCenter = "topCenter"),
                            (e.TopRight = "topRight"),
                            (e.CenterLeft = "centerLeft"),
                            (e.CenterRight = "centerRight"),
                            (e.BottomLeft = "bottomLeft"),
                            (e.BottomCenter = "bottomCenter"),
                            (e.BottomRight = "bottomRight");
                    })(t || (t = {}));
                var T = (function () {
                        function n(n) {
                            var r, i, s, a, o, l, u;
                            (this.fit = null != (r = null == n ? void 0 : n.fit) ? r : e.Contain),
                                (this.alignment = null != (i = null == n ? void 0 : n.alignment) ? i : t.Center),
                                (this.layoutScaleFactor =
                                    null != (s = null == n ? void 0 : n.layoutScaleFactor) ? s : 1),
                                (this.minX = null != (a = null == n ? void 0 : n.minX) ? a : 0),
                                (this.minY = null != (o = null == n ? void 0 : n.minY) ? o : 0),
                                (this.maxX = null != (l = null == n ? void 0 : n.maxX) ? l : 0),
                                (this.maxY = null != (u = null == n ? void 0 : n.maxY) ? u : 0);
                        }
                        return (
                            (n.new = function (e) {
                                var t = e.fit,
                                    r = e.alignment,
                                    i = e.minX,
                                    s = e.minY,
                                    a = e.maxX,
                                    o = e.maxY;
                                return (
                                    console.warn("This function is deprecated: please use `new Layout({})` instead"),
                                    new n({ fit: t, alignment: r, minX: i, minY: s, maxX: a, maxY: o })
                                );
                            }),
                            (n.prototype.copyWith = function (e) {
                                var t = e.fit,
                                    r = e.alignment,
                                    i = e.layoutScaleFactor,
                                    s = e.minX,
                                    a = e.minY,
                                    o = e.maxX,
                                    l = e.maxY;
                                return new n({
                                    fit: null != t ? t : this.fit,
                                    alignment: null != r ? r : this.alignment,
                                    layoutScaleFactor: null != i ? i : this.layoutScaleFactor,
                                    minX: null != s ? s : this.minX,
                                    minY: null != a ? a : this.minY,
                                    maxX: null != o ? o : this.maxX,
                                    maxY: null != l ? l : this.maxY,
                                });
                            }),
                            (n.prototype.runtimeFit = function (t) {
                                var n;
                                return this.cachedRuntimeFit
                                    ? this.cachedRuntimeFit
                                    : ((n =
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
                                      (this.cachedRuntimeFit = n),
                                      n);
                            }),
                            (n.prototype.runtimeAlignment = function (e) {
                                var n;
                                return this.cachedRuntimeAlignment
                                    ? this.cachedRuntimeAlignment
                                    : ((n =
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
                                      (this.cachedRuntimeAlignment = n),
                                      n);
                            }),
                            n
                        );
                    })(),
                    S = (function () {
                        function e() {}
                        return (
                            (e.loadRuntime = function () {
                                c.default({
                                    locateFile: function () {
                                        return e.wasmURL;
                                    },
                                })
                                    .then(function (t) {
                                        var n;
                                        for (e.runtime = t; e.callBackQueue.length > 0; )
                                            null == (n = e.callBackQueue.shift()) || n(e.runtime);
                                    })
                                    .catch(function (t) {
                                        var n = {
                                            message: (null == t ? void 0 : t.message) || "Unknown error",
                                            type: (null == t ? void 0 : t.name) || "Error",
                                            wasmError:
                                                t instanceof WebAssembly.CompileError ||
                                                t instanceof WebAssembly.RuntimeError,
                                            originalError: t,
                                        };
                                        console.debug("Rive WASM load error details:", n);
                                        var r = "https://cdn.jsdelivr.net/npm/"
                                            .concat(d.name, "@")
                                            .concat(d.version, "/rive_fallback.wasm");
                                        e.wasmURL.toLowerCase() !== r
                                            ? (console.warn(
                                                  "Failed to load WASM from "
                                                      .concat(e.wasmURL, " (")
                                                      .concat(n.message, "), trying jsdelivr as a backup"),
                                              ),
                                              e.setWasmUrl(r),
                                              e.loadRuntime())
                                            : console.error(
                                                  [
                                                      "Could not load Rive WASM file from "
                                                          .concat(e.wasmURL, " or ")
                                                          .concat(r, "."),
                                                      "Possible reasons:\n- Network connection is down\n- WebAssembly is not supported in this environment\n- The WASM file is corrupted or incompatible\n\nError details:",
                                                      "- Type: ".concat(n.type),
                                                      "- Message: ".concat(n.message),
                                                      "- WebAssembly-specific error: ".concat(n.wasmError),
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
                            (e.wasmURL = "https://unpkg.com/".concat(d.name, "@").concat(d.version, "/rive.wasm")),
                            e
                        );
                    })();
                !(function (e) {
                    (e[(e.Number = 56)] = "Number"),
                        (e[(e.Trigger = 58)] = "Trigger"),
                        (e[(e.Boolean = 59)] = "Boolean");
                })(i || (i = {}));
                var y = (function () {
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
                            this.type === i.Trigger && this.runtimeInput.fire();
                        }),
                        (e.prototype.delete = function () {
                            this.runtimeInput = null;
                        }),
                        e
                    );
                })();
                !(function (e) {
                    (e[(e.General = 128)] = "General"), (e[(e.OpenUrl = 131)] = "OpenUrl");
                })(s || (s = {}));
                var v = (function () {
                        return function (e) {
                            (this.isBindableArtboard = !1), (this.isBindableArtboard = e);
                        };
                    })(),
                    N = (function (e) {
                        function t(t, n) {
                            var r = e.call(this, !1) || this;
                            return (r.nativeArtboard = t), (r.file = n), r;
                        }
                        return p(t, e), t;
                    })(v),
                    C = (function (e) {
                        function t(t) {
                            var n = e.call(this, !0) || this;
                            return (n.selfUnref = !1), (n.nativeArtboard = t), n;
                        }
                        return (
                            p(t, e),
                            (t.prototype.destroy = function () {
                                this.selfUnref && this.nativeArtboard.unref();
                            }),
                            t
                        );
                    })(v),
                    R = (function () {
                        function e(e, t, n, r) {
                            (this.stateMachine = e),
                                (this.playing = n),
                                (this.artboard = r),
                                (this.inputs = []),
                                (this.instance = new t.StateMachineInstance(e, r)),
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
                                    var n = this.instance.input(t);
                                    this.inputs.push(this.mapRuntimeInput(n, e));
                                }
                            }),
                            (e.prototype.mapRuntimeInput = function (e, t) {
                                return e.type === t.SMIInput.bool
                                    ? new y(i.Boolean, e.asBool())
                                    : e.type === t.SMIInput.number
                                      ? new y(i.Number, e.asNumber())
                                      : e.type === t.SMIInput.trigger
                                        ? new y(i.Trigger, e.asTrigger())
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
                    })(),
                    O = (function () {
                        function e(e, t, n, r, i) {
                            void 0 === r && (r = []),
                                void 0 === i && (i = []),
                                (this.runtime = e),
                                (this.artboard = t),
                                (this.eventManager = n),
                                (this.animations = r),
                                (this.stateMachines = i);
                        }
                        return (
                            (e.prototype.add = function (e, t, n) {
                                if ((void 0 === n && (n = !0), 0 === (e = X(e)).length))
                                    this.animations.forEach(function (e) {
                                        return (e.playing = t);
                                    }),
                                        this.stateMachines.forEach(function (e) {
                                            return (e.playing = t);
                                        });
                                else
                                    for (
                                        var r = this.animations.map(function (e) {
                                                return e.name;
                                            }),
                                            i = this.stateMachines.map(function (e) {
                                                return e.name;
                                            }),
                                            s = 0;
                                        s < e.length;
                                        s++
                                    ) {
                                        var o = r.indexOf(e[s]),
                                            l = i.indexOf(e[s]);
                                        if (o >= 0 || l >= 0)
                                            o >= 0
                                                ? (this.animations[o].playing = t)
                                                : (this.stateMachines[l].playing = t);
                                        else {
                                            var u = this.artboard.animationByName(e[s]);
                                            if (u) {
                                                var c = new _.Animation(u, this.artboard, this.runtime, t);
                                                c.advance(0), c.apply(1), this.animations.push(c);
                                            } else {
                                                var d = this.artboard.stateMachineByName(e[s]);
                                                if (d) {
                                                    var f = new R(d, this.runtime, t, this.artboard);
                                                    this.stateMachines.push(f);
                                                }
                                            }
                                        }
                                    }
                                return (
                                    n &&
                                        (t
                                            ? this.eventManager.fire({ type: a.Play, data: this.playing })
                                            : this.eventManager.fire({ type: a.Pause, data: this.paused })),
                                    t ? this.playing : this.paused
                                );
                            }),
                            (e.prototype.initLinearAnimations = function (e, t) {
                                for (
                                    var n = this.animations.map(function (e) {
                                            return e.name;
                                        }),
                                        r = 0;
                                    r < e.length;
                                    r++
                                ) {
                                    var i = n.indexOf(e[r]);
                                    if (i >= 0) this.animations[i].playing = t;
                                    else {
                                        var s = this.artboard.animationByName(e[r]);
                                        if (s) {
                                            var a = new _.Animation(s, this.artboard, this.runtime, t);
                                            a.advance(0), a.apply(1), this.animations.push(a);
                                        } else console.error("Animation with name ".concat(e[r], " not found."));
                                    }
                                }
                            }),
                            (e.prototype.initStateMachines = function (e, t) {
                                for (
                                    var n = this.stateMachines.map(function (e) {
                                            return e.name;
                                        }),
                                        r = 0;
                                    r < e.length;
                                    r++
                                ) {
                                    var i = n.indexOf(e[r]);
                                    if (i >= 0) this.stateMachines[i].playing = t;
                                    else {
                                        var s = this.artboard.stateMachineByName(e[r]);
                                        if (s) {
                                            var a = new R(s, this.runtime, t, this.artboard);
                                            this.stateMachines.push(a);
                                        } else
                                            console.warn("State Machine with name ".concat(e[r], " not found.")),
                                                this.initLinearAnimations([e[r]], t);
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
                                var n = this.animations.filter(function (t) {
                                    return e.includes(t.name);
                                });
                                return (
                                    n.forEach(function (e) {
                                        return (e.scrubTo = t);
                                    }),
                                    n.map(function (e) {
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
                                e = X(e);
                                var n = [];
                                if (0 === e.length)
                                    (n = this.animations
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
                                    var r = this.animations.filter(function (t) {
                                        return e.includes(t.name);
                                    });
                                    r.forEach(function (e) {
                                        e.cleanup(), t.animations.splice(t.animations.indexOf(e), 1);
                                    });
                                    var i = this.stateMachines.filter(function (t) {
                                        return e.includes(t.name);
                                    });
                                    i.forEach(function (e) {
                                        e.cleanup(), t.stateMachines.splice(t.stateMachines.indexOf(e), 1);
                                    }),
                                        (n = r
                                            .map(function (e) {
                                                return e.name;
                                            })
                                            .concat(
                                                i.map(function (e) {
                                                    return e.name;
                                                }),
                                            ));
                                }
                                return this.eventManager.fire({ type: a.Stop, data: n }), n;
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
                                    return (
                                        !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0)
                                    );
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
                                var n;
                                return (
                                    void 0 === t && (t = !0),
                                    0 === this.animations.length &&
                                        0 === this.stateMachines.length &&
                                        (this.artboard.animationCount() > 0
                                            ? this.add([(n = this.artboard.animationByIndex(0).name)], e, t)
                                            : this.artboard.stateMachineCount() > 0 &&
                                              this.add([(n = this.artboard.stateMachineByIndex(0).name)], e, t)),
                                    n
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
                                    var n = t[e];
                                    0 === n.loopValue && n.loopCount
                                        ? ((n.loopCount = 0), this.stop(n.name))
                                        : 1 === n.loopValue && n.loopCount
                                          ? (this.eventManager.fire({
                                                type: a.Loop,
                                                data: { animation: n.name, type: o.Loop },
                                            }),
                                            (n.loopCount = 0))
                                          : 2 === n.loopValue &&
                                            n.loopCount > 1 &&
                                            (this.eventManager.fire({
                                                type: a.Loop,
                                                data: { animation: n.name, type: o.PingPong },
                                            }),
                                            (n.loopCount = 0));
                                }
                            }),
                            (e.prototype.handleStateChanges = function () {
                                for (
                                    var e = [],
                                        t = 0,
                                        n = this.stateMachines.filter(function (e) {
                                            return e.playing;
                                        });
                                    t < n.length;
                                    t++
                                ) {
                                    var r = n[t];
                                    e.push.apply(e, r.statesChanged);
                                }
                                e.length > 0 && this.eventManager.fire({ type: a.StateChange, data: e });
                            }),
                            (e.prototype.handleAdvancing = function (e) {
                                this.eventManager.fire({ type: a.Advance, data: e });
                            }),
                            e
                        );
                    })();
                !(function (e) {
                    (e.Load = "load"),
                        (e.LoadError = "loaderror"),
                        (e.Play = "play"),
                        (e.Pause = "pause"),
                        (e.Stop = "stop"),
                        (e.Loop = "loop"),
                        (e.Draw = "draw"),
                        (e.Advance = "advance"),
                        (e.StateChange = "statechange"),
                        (e.RiveEvent = "riveevent"),
                        (e.AudioStatusChange = "audiostatuschange");
                })(a || (a = {})),
                    (function (e) {
                        (e.OneShot = "oneshot"), (e.Loop = "loop"), (e.PingPong = "pingpong");
                    })(o || (o = {}));
                var b = (function () {
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
                                    var n = this.listeners[t];
                                    if (n.type === e.type && n.callback === e.callback) {
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
                    })(),
                    D = (function () {
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
                    })();
                !(function (e) {
                    (e[(e.AVAILABLE = 0)] = "AVAILABLE"), (e[(e.UNAVAILABLE = 1)] = "UNAVAILABLE");
                })(l || (l = {}));
                var L = new ((function (e) {
                        function t() {
                            var t = (null !== e && e.apply(this, arguments)) || this;
                            return (t._started = !1), (t._enabled = !1), (t._status = l.UNAVAILABLE), t;
                        }
                        return (
                            p(t, e),
                            (t.prototype.delay = function (e) {
                                return m(this, void 0, void 0, function () {
                                    return E(this, function (t) {
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
                                    return E(this, function (e) {
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
                                this.fire({ type: a.AudioStatusChange }), this.removeAll();
                            }),
                            (t.prototype.enableAudio = function () {
                                return m(this, void 0, void 0, function () {
                                    return E(this, function (e) {
                                        return (
                                            this._enabled ||
                                                ((this._enabled = !0),
                                                (this._status = l.AVAILABLE),
                                                this.reportToListeners()),
                                            [2]
                                        );
                                    });
                                });
                            }),
                            (t.prototype.testAudio = function () {
                                return m(this, void 0, void 0, function () {
                                    var e;
                                    return E(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                if (this._status !== l.UNAVAILABLE || null === this._audioContext)
                                                    return [3, 4];
                                                t.label = 1;
                                            case 1:
                                                return (
                                                    t.trys.push([1, 3, , 4]),
                                                    [4, Promise.race([this._audioContext.resume(), this.timeout()])]
                                                );
                                            case 2:
                                                return t.sent(), this.enableAudio(), [3, 4];
                                            case 3:
                                                return (e = t.sent()), [3, 4];
                                            case 4:
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (t.prototype._establishAudio = function () {
                                return m(this, void 0, void 0, function () {
                                    return E(this, function (e) {
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
                                                if (this._status !== l.UNAVAILABLE) return [3, 5];
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
                                var e = this,
                                    t = function () {
                                        return m(e, void 0, void 0, function () {
                                            return E(this, function (e) {
                                                return this.enableAudio(), [2];
                                            });
                                        });
                                    };
                                document.addEventListener("pointerdown", t, { once: !0 });
                            }),
                            (t.prototype.establishAudio = function () {
                                return m(this, void 0, void 0, function () {
                                    return E(this, function (e) {
                                        return this._establishAudio(), [2];
                                    });
                                });
                            }),
                            Object.defineProperty(t.prototype, "systemVolume", {
                                get: function () {
                                    return this._status === l.UNAVAILABLE ? (this.testAudio(), 0) : 1;
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
                    })(b))(),
                    w = (function () {
                        function e() {}
                        return (
                            (e.prototype.observe = function () {}),
                            (e.prototype.unobserve = function () {}),
                            (e.prototype.disconnect = function () {}),
                            e
                        );
                    })(),
                    M = globalThis.ResizeObserver || w,
                    P = new ((function () {
                        function e() {
                            var e = this;
                            (this._elementsMap = new Map()),
                                (this._onObservedEntry = function (t) {
                                    var n = e._elementsMap.get(t.target);
                                    null !== n
                                        ? n.onResize(0 == t.target.clientWidth || 0 == t.target.clientHeight)
                                        : e._resizeObserver.unobserve(t.target);
                                }),
                                (this._onObserved = function (t) {
                                    t.forEach(e._onObservedEntry);
                                }),
                                (this._resizeObserver = new M(this._onObserved));
                        }
                        return (
                            (e.prototype.add = function (e, t) {
                                var n = { onResize: t, element: e };
                                return this._elementsMap.set(e, n), this._resizeObserver.observe(e), n;
                            }),
                            (e.prototype.remove = function (e) {
                                this._resizeObserver.unobserve(e.element), this._elementsMap.delete(e.element);
                            }),
                            e
                        );
                    })())(),
                    x = (function () {
                        function e(e) {
                            (this.enableRiveAssetCDN = !0),
                                (this.referenceCount = 0),
                                (this.destroyed = !1),
                                (this.selfUnref = !1),
                                (this.bindableArtboards = []),
                                (this.src = e.src),
                                (this.buffer = e.buffer),
                                e.assetLoader && (this.assetLoader = e.assetLoader),
                                (this.enableRiveAssetCDN =
                                    "boolean" != typeof e.enableRiveAssetCDN || e.enableRiveAssetCDN),
                                (this.eventManager = new b()),
                                e.onLoad && this.on(a.Load, e.onLoad),
                                e.onLoadError && this.on(a.LoadError, e.onLoadError);
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
                                    var t, n, r, i;
                                    return E(this, function (s) {
                                        switch (s.label) {
                                            case 0:
                                                if (!this.src) return [3, 2];
                                                return (t = this), [4, Z(this.src)];
                                            case 1:
                                                (t.buffer = s.sent()), (s.label = 2);
                                            case 2:
                                                if (this.destroyed) return [2];
                                                return (
                                                    this.assetLoader &&
                                                        (n = new f.CustomFileAssetLoaderWrapper(
                                                            this.runtime,
                                                            this.assetLoader,
                                                        ).assetLoader),
                                                    (r = this),
                                                    [
                                                        4,
                                                        this.runtime.load(
                                                            new Uint8Array(this.buffer),
                                                            n,
                                                            this.enableRiveAssetCDN,
                                                        ),
                                                    ]
                                                );
                                            case 3:
                                                if (
                                                    ((r.file = s.sent()),
                                                    (i = new f.FileFinalizer(this.file)),
                                                    f.finalizationRegistry.register(this, i),
                                                    this.destroyed)
                                                )
                                                    return this.releaseFile(), [2];
                                                return (
                                                    null !== this.file
                                                        ? this.eventManager.fire({ type: a.Load, data: this })
                                                        : this.fireLoadError(e.fileLoadErrorMessage),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            (e.prototype.init = function () {
                                return m(this, void 0, void 0, function () {
                                    var t, n;
                                    return E(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                if (!this.src && !this.buffer)
                                                    return this.fireLoadError(e.missingErrorMessage), [2];
                                                r.label = 1;
                                            case 1:
                                                return r.trys.push([1, 4, , 5]), (t = this), [4, S.awaitInstance()];
                                            case 2:
                                                if (((t.runtime = r.sent()), this.destroyed)) return [2];
                                                return [4, this.initData()];
                                            case 3:
                                                return r.sent(), [3, 5];
                                            case 4:
                                                return (
                                                    (n = r.sent()),
                                                    this.fireLoadError(
                                                        n instanceof Error ? n.message : e.fileLoadErrorMessage,
                                                    ),
                                                    [3, 5]
                                                );
                                            case 5:
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (e.prototype.fireLoadError = function (e) {
                                throw (this.eventManager.fire({ type: a.LoadError, data: e }), Error(e));
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
                                    var t = new C(e);
                                    return (
                                        (0, f.createFinalization)(t, t.nativeArtboard),
                                        this.bindableArtboards.push(t),
                                        t
                                    );
                                }
                                return null;
                            }),
                            (e.prototype.getArtboard = function (e) {
                                var t = this.file.artboardByName(e);
                                if (null != t) return new N(t, this);
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
                    })(),
                    k = (function () {
                        function t(e) {
                            var t,
                                n = this;
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
                                    var t = n._hasZeroSize !== e;
                                    (n._hasZeroSize = e),
                                        e
                                            ? (n._layout.maxX && n._layout.maxY) || n.resizeToCanvas()
                                            : t && n.resizeDrawingSurfaceToCanvas();
                                }),
                                (this.renderSecondTimer = 0),
                                (this._boundDraw = this.draw.bind(this)),
                                (this.canvas = e.canvas),
                                e.canvas.constructor === HTMLCanvasElement &&
                                    (this._observed = P.add(this.canvas, this.onCanvasResize)),
                                (this.src = e.src),
                                (this.buffer = e.buffer),
                                (this.riveFile = e.riveFile),
                                (this.layout = null != (t = e.layout) ? t : new T()),
                                (this.shouldDisableRiveListeners = !!e.shouldDisableRiveListeners),
                                (this.isTouchScrollEnabled = !!e.isTouchScrollEnabled),
                                (this.automaticallyHandleEvents = !!e.automaticallyHandleEvents),
                                (this.dispatchPointerExit =
                                    !1 === e.dispatchPointerExit ? e.dispatchPointerExit : this.dispatchPointerExit),
                                (this.enableMultiTouch = !!e.enableMultiTouch),
                                (this.enableRiveAssetCDN = void 0 === e.enableRiveAssetCDN || e.enableRiveAssetCDN),
                                (this.eventManager = new b()),
                                e.onLoad && this.on(a.Load, e.onLoad),
                                e.onLoadError && this.on(a.LoadError, e.onLoadError),
                                e.onPlay && this.on(a.Play, e.onPlay),
                                e.onPause && this.on(a.Pause, e.onPause),
                                e.onStop && this.on(a.Stop, e.onStop),
                                e.onLoop && this.on(a.Loop, e.onLoop),
                                e.onStateChange && this.on(a.StateChange, e.onStateChange),
                                e.onAdvance && this.on(a.Advance, e.onAdvance),
                                e.onload && !e.onLoad && this.on(a.Load, e.onload),
                                e.onloaderror && !e.onLoadError && this.on(a.LoadError, e.onloaderror),
                                e.onplay && !e.onPlay && this.on(a.Play, e.onplay),
                                e.onpause && !e.onPause && this.on(a.Pause, e.onpause),
                                e.onstop && !e.onStop && this.on(a.Stop, e.onstop),
                                e.onloop && !e.onLoop && this.on(a.Loop, e.onloop),
                                e.onstatechange && !e.onStateChange && this.on(a.StateChange, e.onstatechange),
                                e.assetLoader && (this.assetLoader = e.assetLoader),
                                (this.taskQueue = new D(this.eventManager)),
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
                                return (
                                    console.warn("This function is deprecated: please use `new Rive({})` instead"),
                                    new t(e)
                                );
                            }),
                            (t.prototype.onSystemAudioChanged = function () {
                                this.volume = this._volume;
                            }),
                            (t.prototype.init = function (e) {
                                var n = this,
                                    r = e.src,
                                    i = e.buffer,
                                    s = e.riveFile,
                                    a = e.animations,
                                    o = e.stateMachines,
                                    l = e.artboard,
                                    u = e.autoplay,
                                    c = void 0 !== u && u,
                                    d = e.useOffscreenRenderer,
                                    _ = void 0 !== d && d,
                                    f = e.autoBind,
                                    p = void 0 !== f && f;
                                if (!this.destroyed) {
                                    if (
                                        ((this.src = r),
                                        (this.buffer = i),
                                        (this.riveFile = s),
                                        !this.src && !this.buffer && !this.riveFile)
                                    )
                                        throw new A(t.missingErrorMessage);
                                    var h = X(a),
                                        m = X(o);
                                    (this.loaded = !1),
                                        (this.readyForPlaying = !1),
                                        S.awaitInstance()
                                            .then(function (e) {
                                                n.destroyed ||
                                                    ((n.runtime = e),
                                                    n.removeRiveListeners(),
                                                    n.deleteRiveRenderer(),
                                                    (n.renderer = n.runtime.makeRenderer(n.canvas, _)),
                                                    n.canvas.width ||
                                                        n.canvas.height ||
                                                        n.resizeDrawingSurfaceToCanvas(),
                                                    n
                                                        .initData(l, h, m, c, p)
                                                        .then(function (e) {
                                                            if (e) return n.setupRiveListeners();
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
                                    var n = (this.animator.stateMachines || [])
                                            .filter(function (e) {
                                                return e.playing && t.runtime.hasListeners(e.instance);
                                            })
                                            .map(function (e) {
                                                return e.instance;
                                            }),
                                        r = this.isTouchScrollEnabled,
                                        i = this.dispatchPointerExit,
                                        s = this.enableMultiTouch;
                                    e && "isTouchScrollEnabled" in e && (r = e.isTouchScrollEnabled);
                                    var a = this.canvas;
                                    null != this.eventTarget && (a = this.eventTarget),
                                        (this.eventCleanup = (0, f.registerTouchInteractions)({
                                            canvas: a,
                                            listenOnDocumentBody: this.listenOnDocumentBody,
                                            eventCapture: this.eventCapture,
                                            artboard: this.artboard,
                                            stateMachines: n,
                                            renderer: this.renderer,
                                            rive: this.runtime,
                                            fit: this._layout.runtimeFit(this.runtime),
                                            alignment: this._layout.runtimeAlignment(this.runtime),
                                            isTouchScrollEnabled: r,
                                            dispatchPointerExit: i,
                                            enableMultiTouch: s,
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
                                L.status == l.UNAVAILABLE &&
                                    (null == (e = this.artboard) ? void 0 : e.hasAudio) &&
                                    null === this._audioEventListener &&
                                    ((this._audioEventListener = {
                                        type: a.AudioStatusChange,
                                        callback: function () {
                                            return t.onSystemAudioChanged();
                                        },
                                    }),
                                    L.add(this._audioEventListener),
                                    L.establishAudio());
                            }),
                            (t.prototype.initArtboardSize = function () {
                                this.artboard &&
                                    ((this._artboardWidth = this.artboard.width =
                                        this._artboardWidth || this.artboard.width),
                                    (this._artboardHeight = this.artboard.height =
                                        this._artboardHeight || this.artboard.height));
                            }),
                            (t.prototype.initData = function (e, t, n, r, i) {
                                return m(this, void 0, void 0, function () {
                                    var s, o, l;
                                    return E(this, function (u) {
                                        switch (u.label) {
                                            case 0:
                                                if ((u.trys.push([0, 3, , 4]), null != this.riveFile)) return [3, 2];
                                                return (
                                                    (s = new x({
                                                        src: this.src,
                                                        buffer: this.buffer,
                                                        enableRiveAssetCDN: this.enableRiveAssetCDN,
                                                        assetLoader: this.assetLoader,
                                                    })),
                                                    (this.riveFile = s),
                                                    [4, s.init()]
                                                );
                                            case 1:
                                                if ((u.sent(), this.destroyed)) return s.destroyIfUnused(), [2, !1];
                                                u.label = 2;
                                            case 2:
                                                return (
                                                    (this.file = this.riveFile.getInstance()),
                                                    this.initArtboard(e, t, n, r, i),
                                                    this.initArtboardSize(),
                                                    this.initializeAudio(),
                                                    (this.loaded = !0),
                                                    this.eventManager.fire({
                                                        type: a.Load,
                                                        data: null != (l = this.src) ? l : "buffer",
                                                    }),
                                                    this.animator.advanceIfPaused(),
                                                    (this.readyForPlaying = !0),
                                                    this.taskQueue.process(),
                                                    this.drawFrame(),
                                                    [2, !0]
                                                );
                                            case 3:
                                                return (
                                                    console.warn((o = I(u.sent()))),
                                                    this.eventManager.fire({ type: a.LoadError, data: o }),
                                                    [2, Promise.reject(o)]
                                                );
                                            case 4:
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (t.prototype.initArtboard = function (e, t, n, r, i) {
                                if (this.file) {
                                    var s,
                                        o = e ? this.file.artboardByName(e) : this.file.defaultArtboard();
                                    if (!o) {
                                        var l = "Invalid artboard name or no default artboard";
                                        console.warn(l), this.eventManager.fire({ type: a.LoadError, data: l });
                                        return;
                                    }
                                    if (
                                        ((this.artboard = o),
                                        (o.volume = this._volume * L.systemVolume),
                                        (this.animator = new O(this.runtime, this.artboard, this.eventManager)),
                                        t.length > 0 || n.length > 0
                                            ? ((s = t.concat(n)),
                                              this.animator.initLinearAnimations(t, r),
                                              this.animator.initStateMachines(n, r))
                                            : (s = [this.animator.atLeastOne(r, !1)]),
                                        this.taskQueue.add({ event: { type: r ? a.Play : a.Pause, data: s } }),
                                        i)
                                    ) {
                                        var u = this.file.defaultArtboardViewModel(o);
                                        if (null !== u) {
                                            var c = u.defaultInstance();
                                            if (null !== c) {
                                                var d = new F(c, null);
                                                (0, f.createFinalization)(d, d.runtimeInstance),
                                                    this.bindViewModelInstance(d);
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
                                var n,
                                    r = performance.now();
                                this.lastRenderTime || (this.lastRenderTime = e),
                                    (this.renderSecondTimer += e - this.lastRenderTime),
                                    this.renderSecondTimer > 5e3 && ((this.renderSecondTimer = 0), null == t || t());
                                var i = (e - this.lastRenderTime) / 1e3;
                                this.lastRenderTime = e;
                                for (
                                    var o = this.animator.animations
                                            .filter(function (e) {
                                                return e.playing || e.needsScrub;
                                            })
                                            .sort(function (e) {
                                                return e.needsScrub ? -1 : 1;
                                            }),
                                        l = 0,
                                        u = o;
                                    l < u.length;
                                    l++
                                ) {
                                    var c = u[l];
                                    c.advance(i), c.instance.didLoop && (c.loopCount += 1), c.apply(1);
                                }
                                for (
                                    var d = this.animator.stateMachines.filter(function (e) {
                                            return e.playing;
                                        }),
                                        _ = 0,
                                        p = d;
                                    _ < p.length;
                                    _++
                                ) {
                                    var h = p[_],
                                        m = h.reportedEventCount();
                                    if (m)
                                        for (var E = 0; E < m; E++) {
                                            var g = h.reportedEventAt(E);
                                            if (g)
                                                if (g.type === s.OpenUrl) {
                                                    if (
                                                        (this.eventManager.fire({ type: a.RiveEvent, data: g }),
                                                        this.automaticallyHandleEvents)
                                                    ) {
                                                        var A = document.createElement("a"),
                                                            I = g,
                                                            T = I.url,
                                                            S = I.target,
                                                            y = (0, f.sanitizeUrl)(T);
                                                        T && A.setAttribute("href", y),
                                                            S && A.setAttribute("target", S),
                                                            y && y !== f.BLANK_URL && A.click();
                                                    }
                                                } else this.eventManager.fire({ type: a.RiveEvent, data: g });
                                        }
                                    h.advanceAndApply(i);
                                }
                                0 == this.animator.stateMachines.length && this.artboard.advance(i);
                                var v = this.renderer;
                                v.clear(),
                                    v.save(),
                                    this.alignRenderer(),
                                    this._hasZeroSize || this.artboard.draw(v),
                                    v.restore(),
                                    v.flush(),
                                    this.animator.handleLooping(),
                                    this.animator.handleStateChanges(),
                                    this.animator.handleAdvancing(i),
                                    this.frameCount++;
                                var N = performance.now();
                                for (
                                    this.frameTimes.push(N), this.durations.push(N - r);
                                    this.frameTimes[0] <= N - 1e3;
                                )
                                    this.frameTimes.shift(), this.durations.shift();
                                null == (n = this._viewModelInstance) || n.handleCallbacks(),
                                    this.animator.isPlaying
                                        ? this.startRendering()
                                        : this.animator.isPaused
                                          ? (this.lastRenderTime = 0)
                                          : this.animator.isStopped && (this.lastRenderTime = 0);
                            }),
                            (t.prototype.alignRenderer = function () {
                                var e = this,
                                    t = e.renderer,
                                    n = e.runtime,
                                    r = e._layout,
                                    i = e.artboard;
                                t.align(
                                    r.runtimeFit(n),
                                    r.runtimeAlignment(n),
                                    { minX: r.minX, minY: r.minY, maxX: r.maxX, maxY: r.maxY },
                                    i.bounds,
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
                                    null !== this._observed && P.remove(this._observed),
                                    this.removeRiveListeners(),
                                    this.file && (null == (e = this.riveFile) || e.cleanup(), (this.file = null)),
                                    (this.riveFile = null),
                                    this.deleteRiveRenderer(),
                                    null !== this._audioEventListener &&
                                        (L.remove(this._audioEventListener), (this._audioEventListener = null)),
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
                                if (!this.artboard)
                                    return void console.warn("Tried to access text run, but the Artboard is null");
                                var t,
                                    n = this.artboard.textRun(e);
                                return (
                                    n ||
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
                                var n = this.retrieveTextRun(e);
                                n && (n.text = t);
                            }),
                            (t.prototype.play = function (e, t) {
                                var n = this;
                                ((e = X(e)), this.readyForPlaying)
                                    ? (this.animator.play(e),
                                      this.eventCleanup && this.eventCleanup(),
                                      this.setupRiveListeners(),
                                      this.startRendering())
                                    : this.taskQueue.add({
                                          action: function () {
                                              return n.play(e, t);
                                          },
                                      });
                            }),
                            (t.prototype.pause = function (e) {
                                var t = this;
                                ((e = X(e)), this.readyForPlaying)
                                    ? (this.eventCleanup && this.eventCleanup(), this.animator.pause(e))
                                    : this.taskQueue.add({
                                          action: function () {
                                              return t.pause(e);
                                          },
                                      });
                            }),
                            (t.prototype.scrub = function (e, t) {
                                var n = this;
                                ((e = X(e)), this.readyForPlaying)
                                    ? (this.animator.scrub(e, t || 0), this.drawFrame())
                                    : this.taskQueue.add({
                                          action: function () {
                                              return n.scrub(e, t);
                                          },
                                      });
                            }),
                            (t.prototype.stop = function (e) {
                                var t = this;
                                ((e = X(e)), this.readyForPlaying)
                                    ? (this.animator && this.animator.stop(e), this.eventCleanup && this.eventCleanup())
                                    : this.taskQueue.add({
                                          action: function () {
                                              return t.stop(e);
                                          },
                                      });
                            }),
                            (t.prototype.reset = function (e) {
                                var t,
                                    n,
                                    r = null == e ? void 0 : e.artboard,
                                    i = X(null == e ? void 0 : e.animations),
                                    s = X(null == e ? void 0 : e.stateMachines),
                                    a = null != (t = null == e ? void 0 : e.autoplay) && t,
                                    o = null != (n = null == e ? void 0 : e.autoBind) && n;
                                this.cleanupInstances(), this.initArtboard(r, i, s, a, o), this.taskQueue.process();
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
                                    var n = this.canvas.getBoundingClientRect(),
                                        r = n.width,
                                        i = n.height,
                                        s = t || window.devicePixelRatio || 1;
                                    if (
                                        ((this.devicePixelRatioUsed = s),
                                        (this.canvas.width = s * r),
                                        (this.canvas.height = s * i),
                                        this.resizeToCanvas(),
                                        this.drawFrame(),
                                        this.layout.fit === e.Layout)
                                    ) {
                                        var a = this._layout.layoutScaleFactor;
                                        (this.artboard.width = r / a), (this.artboard.height = i / a);
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
                                var n = this.artboard.inputByPath(e, t);
                                return (
                                    n ||
                                    void console.warn(
                                        "Could not access an input with name: '"
                                            .concat(e, "', at path:'")
                                            .concat(t, "'"),
                                    )
                                );
                            }),
                            (t.prototype.setBooleanStateAtPath = function (e, t, n) {
                                var r = this.retrieveInputAtPath(e, n);
                                r &&
                                    (r.type === i.Boolean
                                        ? (r.asBool().value = t)
                                        : console.warn(
                                              "Input with name: '"
                                                  .concat(e, "', at path:'")
                                                  .concat(n, "' is not a boolean"),
                                          ));
                            }),
                            (t.prototype.setNumberStateAtPath = function (e, t, n) {
                                var r = this.retrieveInputAtPath(e, n);
                                r &&
                                    (r.type === i.Number
                                        ? (r.asNumber().value = t)
                                        : console.warn(
                                              "Input with name: '"
                                                  .concat(e, "', at path:'")
                                                  .concat(n, "' is not a number"),
                                          ));
                            }),
                            (t.prototype.fireStateAtPath = function (e, t) {
                                var n = this.retrieveInputAtPath(e, t);
                                n &&
                                    (n.type === i.Trigger
                                        ? n.asTrigger().fire()
                                        : console.warn(
                                              "Input with name: '"
                                                  .concat(e, "', at path:'")
                                                  .concat(t, "' is not a trigger"),
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
                                var n = this.artboard.textByPath(e, t);
                                return (
                                    n ||
                                    void console.warn(
                                        "Could not access text with name: '".concat(e, "', at path:'").concat(t, "'"),
                                    )
                                );
                            }),
                            (t.prototype.getTextRunValueAtPath = function (e, t) {
                                var n = this.retrieveTextAtPath(e, t);
                                return n
                                    ? n.text
                                    : void console.warn(
                                          "Could not get text with name: '".concat(e, "', at path:'").concat(t, "'"),
                                      );
                            }),
                            (t.prototype.setTextRunValueAtPath = function (e, t, n) {
                                var r = this.retrieveTextAtPath(e, n);
                                r
                                    ? (r.text = t)
                                    : console.warn(
                                          "Could not set text with name: '".concat(e, "', at path:'").concat(n, "'"),
                                      );
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
                                console.warn("This function is deprecated: please use `off()` instead."),
                                    this.off(e, t);
                            }),
                            (t.prototype.removeAllRiveEventListeners = function (e) {
                                this.eventManager.removeAll(e);
                            }),
                            (t.prototype.unsubscribeAll = function (e) {
                                console.warn(
                                    "This function is deprecated: please use `removeAllRiveEventListeners()` instead.",
                                ),
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
                                                var n = this.file.artboardByIndex(t),
                                                    r = { name: n.name, animations: [], stateMachines: [] },
                                                    i = 0;
                                                i < n.animationCount();
                                                i++
                                            ) {
                                                var s = n.animationByIndex(i);
                                                r.animations.push(s.name);
                                            }
                                            for (var a = 0; a < n.stateMachineCount(); a++) {
                                                for (
                                                    var o = n.stateMachineByIndex(a),
                                                        l = o.name,
                                                        u = new this.runtime.StateMachineInstance(o, n),
                                                        c = [],
                                                        d = 0;
                                                    d < u.inputCount();
                                                    d++
                                                ) {
                                                    var _ = u.input(d);
                                                    c.push({ name: _.name, type: _.type });
                                                }
                                                r.stateMachines.push({ name: l, inputs: c });
                                            }
                                            e.artboards.push(r);
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
                                    (this._volume = e), this.artboard && (this.artboard.volume = e * L.systemVolume);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "artboardWidth", {
                                get: function () {
                                    var e;
                                    return this.artboard
                                        ? this.artboard.width
                                        : null != (e = this._artboardWidth)
                                          ? e
                                          : 0;
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
                                    return this.artboard
                                        ? this.artboard.height
                                        : null != (e = this._artboardHeight)
                                          ? e
                                          : 0;
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
                                return null !== t ? new U(t) : null;
                            }),
                            (t.prototype.viewModelByName = function (e) {
                                var t = this.file.viewModelByName(e);
                                return null !== t ? new U(t) : null;
                            }),
                            (t.prototype.enums = function () {
                                if (null === this._dataEnums) {
                                    var e = this.file.enums();
                                    this._dataEnums = e.map(function (e) {
                                        return new G(e);
                                    });
                                }
                                return this._dataEnums;
                            }),
                            (t.prototype.defaultViewModel = function () {
                                if (this.artboard) {
                                    var e = this.file.defaultArtboardViewModel(this.artboard);
                                    if (e) return new U(e);
                                }
                                return null;
                            }),
                            (t.prototype.getArtboard = function (e) {
                                var t, n;
                                return null != (n = null == (t = this.riveFile) ? void 0 : t.getArtboard(e)) ? n : null;
                            }),
                            (t.prototype.getBindableArtboard = function (e) {
                                var t, n;
                                return null != (n = null == (t = this.riveFile) ? void 0 : t.getBindableArtboard(e))
                                    ? n
                                    : null;
                            }),
                            (t.prototype.getDefaultBindableArtboard = function () {
                                var e, t;
                                return null !=
                                    (t = null == (e = this.riveFile) ? void 0 : e.getDefaultBindableArtboard())
                                    ? t
                                    : null;
                            }),
                            (t.missingErrorMessage = "Rive source file or data buffer required"),
                            (t.cleanupErrorMessage = "Attempt to use file after calling cleanup."),
                            t
                        );
                    })(),
                    U = (function () {
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
                                    var n = new F(t, null);
                                    return (0, f.createFinalization)(n, t), n;
                                }
                                return null;
                            }),
                            (e.prototype.instanceByName = function (e) {
                                var t = this._viewModel.instanceByName(e);
                                if (null !== t) {
                                    var n = new F(t, null);
                                    return (0, f.createFinalization)(n, t), n;
                                }
                                return null;
                            }),
                            (e.prototype.defaultInstance = function () {
                                var e = this._viewModel.defaultInstance();
                                if (null !== e) {
                                    var t = new F(e, null);
                                    return (0, f.createFinalization)(t, e), t;
                                }
                                return null;
                            }),
                            (e.prototype.instance = function () {
                                var e = this._viewModel.instance();
                                if (null !== e) {
                                    var t = new F(e, null);
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
                    })(),
                    G = (function () {
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
                    })();
                !(function (e) {
                    (e.Number = "number"),
                        (e.String = "string"),
                        (e.Boolean = "boolean"),
                        (e.Color = "color"),
                        (e.Trigger = "trigger"),
                        (e.Enum = "enum"),
                        (e.List = "list"),
                        (e.Image = "image"),
                        (e.Artboard = "artboard");
                })(u || (u = {}));
                var F = (function () {
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
                                -1 !== t &&
                                    (this._parents[t].removeFromViewModelCallbacks(this), this._parents.splice(t, 1));
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
                                    ((this._propertiesWithCallbacks = this._propertiesWithCallbacks.filter(
                                        function (t) {
                                            return t !== e;
                                        },
                                    )),
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
                                var n = e.split("/");
                                return this.propertyFromPathSegments(n, 0, t);
                            }),
                            (e.prototype.viewModelFromPathSegments = function (e, t) {
                                var n = this.internalViewModelInstance(e[t]);
                                if (null !== n)
                                    if (t == e.length - 1) return n;
                                    else return n.viewModelFromPathSegments(e, t++);
                                return null;
                            }),
                            (e.prototype.propertyFromPathSegments = function (e, t, n) {
                                if (t < e.length - 1) {
                                    var r,
                                        i,
                                        s,
                                        a,
                                        o,
                                        l,
                                        c,
                                        d,
                                        _,
                                        f,
                                        p,
                                        h,
                                        m,
                                        E,
                                        g,
                                        A,
                                        I,
                                        T,
                                        S = this.internalViewModelInstance(e[t]);
                                    return null !== S ? S.propertyFromPathSegments(e, t + 1, n) : null;
                                }
                                var y = null;
                                switch (n) {
                                    case u.Number:
                                        if (
                                            null !==
                                            (y =
                                                null !=
                                                (i = null == (r = this._runtimeInstance) ? void 0 : r.number(e[t]))
                                                    ? i
                                                    : null)
                                        )
                                            return new H(y, this);
                                        break;
                                    case u.String:
                                        if (
                                            null !==
                                            (y =
                                                null !=
                                                (a = null == (s = this._runtimeInstance) ? void 0 : s.string(e[t]))
                                                    ? a
                                                    : null)
                                        )
                                            return new B(y, this);
                                        break;
                                    case u.Boolean:
                                        if (
                                            null !==
                                            (y =
                                                null !=
                                                (l = null == (o = this._runtimeInstance) ? void 0 : o.boolean(e[t]))
                                                    ? l
                                                    : null)
                                        )
                                            return new j(y, this);
                                        break;
                                    case u.Color:
                                        if (
                                            null !==
                                            (y =
                                                null !=
                                                (d = null == (c = this._runtimeInstance) ? void 0 : c.color(e[t]))
                                                    ? d
                                                    : null)
                                        )
                                            return new $(y, this);
                                        break;
                                    case u.Trigger:
                                        if (
                                            null !==
                                            (y =
                                                null !=
                                                (f = null == (_ = this._runtimeInstance) ? void 0 : _.trigger(e[t]))
                                                    ? f
                                                    : null)
                                        )
                                            return new Y(y, this);
                                        break;
                                    case u.Enum:
                                        if (
                                            null !==
                                            (y =
                                                null !=
                                                (h = null == (p = this._runtimeInstance) ? void 0 : p.enum(e[t]))
                                                    ? h
                                                    : null)
                                        )
                                            return new W(y, this);
                                        break;
                                    case u.List:
                                        if (
                                            null !==
                                            (y =
                                                null !=
                                                (E = null == (m = this._runtimeInstance) ? void 0 : m.list(e[t]))
                                                    ? E
                                                    : null)
                                        )
                                            return new K(y, this);
                                        break;
                                    case u.Image:
                                        if (
                                            null !==
                                            (y =
                                                null !=
                                                (A = null == (g = this._runtimeInstance) ? void 0 : g.image(e[t]))
                                                    ? A
                                                    : null)
                                        )
                                            return new z(y, this);
                                        break;
                                    case u.Artboard:
                                        if (
                                            null !==
                                            (y =
                                                null !=
                                                (T = null == (I = this._runtimeInstance) ? void 0 : I.artboard(e[t]))
                                                    ? T
                                                    : null)
                                        )
                                            return new q(y, this);
                                }
                                return null;
                            }),
                            (e.prototype.internalViewModelInstance = function (t) {
                                if (this._viewModelInstances.has(t)) return this._viewModelInstances.get(t);
                                var n,
                                    r = null == (n = this._runtimeInstance) ? void 0 : n.viewModel(t);
                                if (null !== r) {
                                    var i = new e(r, this);
                                    return (
                                        (0, f.createFinalization)(i, r),
                                        i.internalIncrementReferenceCount(),
                                        this._viewModelInstances.set(t, i),
                                        i
                                    );
                                }
                                return null;
                            }),
                            (e.prototype.number = function (e) {
                                return this.propertyFromPath(e, u.Number);
                            }),
                            (e.prototype.string = function (e) {
                                return this.propertyFromPath(e, u.String);
                            }),
                            (e.prototype.boolean = function (e) {
                                return this.propertyFromPath(e, u.Boolean);
                            }),
                            (e.prototype.color = function (e) {
                                return this.propertyFromPath(e, u.Color);
                            }),
                            (e.prototype.trigger = function (e) {
                                return this.propertyFromPath(e, u.Trigger);
                            }),
                            (e.prototype.enum = function (e) {
                                return this.propertyFromPath(e, u.Enum);
                            }),
                            (e.prototype.list = function (e) {
                                return this.propertyFromPath(e, u.List);
                            }),
                            (e.prototype.image = function (e) {
                                return this.propertyFromPath(e, u.Image);
                            }),
                            (e.prototype.artboard = function (e) {
                                return this.propertyFromPath(e, u.Artboard);
                            }),
                            (e.prototype.viewModel = function (e) {
                                var t = e.split("/"),
                                    n =
                                        t.length > 1
                                            ? this.viewModelFromPathSegments(t.slice(0, t.length - 1), 0)
                                            : this;
                                return null != n ? n.internalViewModelInstance(t[t.length - 1]) : null;
                            }),
                            (e.prototype.internalReplaceViewModel = function (e, t) {
                                var n;
                                if (null !== t.runtimeInstance) {
                                    var r =
                                        (null == (n = this._runtimeInstance)
                                            ? void 0
                                            : n.replaceViewModel(e, t.runtimeInstance)) || !1;
                                    if (r) {
                                        t.internalIncrementReferenceCount();
                                        var i = this.internalViewModelInstance(e);
                                        null !== i &&
                                            (i.removeParent(this),
                                            this._children.includes(i) &&
                                                (this._children = this._children.filter(function (e) {
                                                    return e !== i;
                                                })),
                                            i.cleanup()),
                                            this._viewModelInstances.set(e, t),
                                            t.addParent(this);
                                    }
                                    return r;
                                }
                                return !1;
                            }),
                            (e.prototype.replaceViewModel = function (e, t) {
                                var n,
                                    r = e.split("/"),
                                    i =
                                        r.length > 1
                                            ? this.viewModelFromPathSegments(r.slice(0, r.length - 1), 0)
                                            : this;
                                return (
                                    null != (n = null == i ? void 0 : i.internalReplaceViewModel(r[r.length - 1], t)) &&
                                    n
                                );
                            }),
                            (e.prototype.incrementReferenceCount = function () {
                                var e;
                                this._referenceCount++,
                                    null == (e = this._runtimeInstance) || e.incrementReferenceCount();
                            }),
                            (e.prototype.decrementReferenceCount = function () {
                                var e;
                                this._referenceCount--,
                                    null == (e = this._runtimeInstance) || e.decrementReferenceCount();
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
                                    var n = g([], this._children, !0);
                                    this._children.length = 0;
                                    var r = g([], this._parents, !0);
                                    (this._parents.length = 0),
                                        n.forEach(function (e) {
                                            e.removeParent(t);
                                        }),
                                        r.forEach(function (e) {
                                            e.removeFromViewModelCallbacks(t);
                                        });
                                }
                            }),
                            e
                        );
                    })(),
                    V = (function () {
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
                                    0 === this.callbacks.length &&
                                        this._parentViewModel.removeFromPropertyCallbacks(this);
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
                    })(),
                    B = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
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
                    })(V),
                    H = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
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
                    })(V),
                    j = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
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
                    })(V),
                    Y = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
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
                    })(V),
                    W = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
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
                    })(V),
                    K = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
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
                                    var n = new F(t, this._parentViewModel);
                                    return (0, f.createFinalization)(n, t), n;
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
                    })(V),
                    $ = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
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
                            (t.prototype.rgb = function (e, t, n) {
                                this._viewModelInstanceValue.rgb(e, t, n);
                            }),
                            (t.prototype.rgba = function (e, t, n, r) {
                                this._viewModelInstanceValue.argb(r, e, t, n);
                            }),
                            (t.prototype.argb = function (e, t, n, r) {
                                this._viewModelInstanceValue.argb(e, t, n, r);
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
                    })(V),
                    z = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
                        }
                        return (
                            p(t, e),
                            Object.defineProperty(t.prototype, "value", {
                                set: function (e) {
                                    var t;
                                    this._viewModelInstanceValue.value(
                                        null != (t = null == e ? void 0 : e.nativeImage) ? t : null,
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
                    })(V),
                    q = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
                        }
                        return (
                            p(t, e),
                            Object.defineProperty(t.prototype, "value", {
                                set: function (e) {
                                    var t, n;
                                    (n = e.isBindableArtboard
                                        ? e
                                        : e.file.internalBindableArtboardFromArtboard(e.nativeArtboard)),
                                        this._viewModelInstanceValue.value(
                                            null != (t = null == n ? void 0 : n.nativeArtboard) ? t : null,
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
                    })(V),
                    Z = function (e) {
                        return m(void 0, void 0, void 0, function () {
                            return E(this, function (t) {
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
                    },
                    X = function (e) {
                        return "string" == typeof e ? [e] : e instanceof Array ? e : [];
                    },
                    Q = { EventManager: b, TaskQueueManager: D },
                    J = function (e) {
                        return m(void 0, void 0, void 0, function () {
                            var t, n;
                            return E(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        return [
                                            4,
                                            new Promise(function (t) {
                                                return S.getInstance(function (n) {
                                                    n.decodeAudio(e, t);
                                                });
                                            }),
                                        ];
                                    case 1:
                                        return (
                                            (t = r.sent()),
                                            (n = new f.AudioWrapper(t)),
                                            f.finalizationRegistry.register(n, t),
                                            [2, n]
                                        );
                                }
                            });
                        });
                    },
                    ee = function (e) {
                        return m(void 0, void 0, void 0, function () {
                            var t, n;
                            return E(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        return [
                                            4,
                                            new Promise(function (t) {
                                                return S.getInstance(function (n) {
                                                    n.decodeImage(e, t);
                                                });
                                            }),
                                        ];
                                    case 1:
                                        return (
                                            (t = r.sent()),
                                            (n = new f.ImageWrapper(t)),
                                            f.finalizationRegistry.register(n, t),
                                            [2, n]
                                        );
                                }
                            });
                        });
                    },
                    et = function (e) {
                        return m(void 0, void 0, void 0, function () {
                            var t, n;
                            return E(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        return [
                                            4,
                                            new Promise(function (t) {
                                                return S.getInstance(function (n) {
                                                    n.decodeFont(e, t);
                                                });
                                            }),
                                        ];
                                    case 1:
                                        return (
                                            (t = r.sent()),
                                            (n = new f.FontWrapper(t)),
                                            f.finalizationRegistry.register(n, t),
                                            [2, n]
                                        );
                                }
                            });
                        });
                    };
            })(),
            r
        );
    })(),
);
