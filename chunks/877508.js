!(function (t, n) {
    e.exports = n();
})(0, () =>
    (() => {
        var e = [
                ,
                (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            default: () => r,
                        });
                    let r = (() => {
                        var e = "u" > typeof document ? document.currentScript?.src : void 0;
                        return function (t = {}) {
                            var n,
                                r,
                                i,
                                a = t,
                                s = new Promise((e, t) => {
                                    (r = e), (i = t);
                                }),
                                o = "object" == typeof window,
                                l = "function" == typeof importScripts;

                            function c() {
                                function e(e) {
                                    let a = r;
                                    (n = t = 0),
                                        (r = new Map()),
                                        a.forEach((t) => {
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
                                    a = null;
                                (this.requestAnimationFrame = function (i) {
                                    t ||= requestAnimationFrame(e.bind(this));
                                    let a = ++n;
                                    return r.set(a, i), a;
                                }),
                                    (this.cancelAnimationFrame = function (e) {
                                        r.delete(e), t && 0 == r.size && (cancelAnimationFrame(t), (t = 0));
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
                                        a && (document.body.remove(a), (a = null)), (i = null);
                                    }),
                                    (this.nb = function () {});
                            }

                            function u(e) {
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
                            let d = a.onRuntimeInitialized;
                            a.onRuntimeInitialized = function () {
                                d && d();
                                let e = a.decodeAudio;
                                a.decodeAudio = function (t, n) {
                                    n((t = e(t)));
                                };
                                let t = a.decodeFont;
                                a.decodeFont = function (e, n) {
                                    n((e = t(e)));
                                };
                                let n = a.FileAssetLoader;
                                (a.ptrToAsset = (e) => {
                                    let t = a.ptrToFileAsset(e);
                                    return t.isImage
                                        ? a.ptrToImageAsset(e)
                                        : t.isFont
                                          ? a.ptrToFontAsset(e)
                                          : t.isAudio
                                            ? a.ptrToAudioAsset(e)
                                            : t;
                                }),
                                    (a.CustomFileAssetLoader = n.extend("CustomFileAssetLoader", {
                                        __construct: function ({ loadContents: e }) {
                                            this.__parent.__construct.call(this), (this.Db = e);
                                        },
                                        loadContents: function (e, t) {
                                            return (e = a.ptrToAsset(e)), this.Db(e, t);
                                        },
                                    })),
                                    (a.CDNFileAssetLoader = n.extend("CDNFileAssetLoader", {
                                        __construct: function () {
                                            this.__parent.__construct.call(this);
                                        },
                                        loadContents: function (e) {
                                            let t = a.ptrToAsset(e);
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
                                    (a.FallbackFileAssetLoader = n.extend("FallbackFileAssetLoader", {
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
                                let r = a.computeAlignment;
                                a.computeAlignment = function (e, t, n, i, a = 1) {
                                    return r.call(this, e, t, n, i, a);
                                };
                            };
                            let f =
                                    "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(
                                        " ",
                                    ),
                                p = new (function () {
                                    function e() {
                                        if (!t) {
                                            let c;
                                            var e = document.createElement("canvas"),
                                                s = {
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
                                                if (((c = e.getContext("webgl", s)), (n = 1), !c))
                                                    return (
                                                        console.log("No WebGL support. Image mesh will not be drawn."),
                                                        !1
                                                    );
                                            } else if ((c = e.getContext("webgl2", s))) n = 2;
                                            else {
                                                if (!(c = e.getContext("webgl", s)))
                                                    return (
                                                        console.log("No WebGL support. Image mesh will not be drawn."),
                                                        !1
                                                    );
                                                n = 1;
                                            }

                                            function o(e, t, n) {
                                                if (
                                                    ((t = c.createShader(t)),
                                                    c.shaderSource(t, n),
                                                    c.compileShader(t),
                                                    0 < ((n = c.getShaderInfoLog(t)) || "").length)
                                                )
                                                    throw n;
                                                c.attachShader(e, t);
                                            }
                                            if (
                                                ((r = Math.min(
                                                    (c = new Proxy(c, {
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
                                                    })).getParameter(c.MAX_RENDERBUFFER_SIZE),
                                                    c.getParameter(c.MAX_TEXTURE_SIZE),
                                                )),
                                                o(
                                                    (e = c.createProgram()),
                                                    c.VERTEX_SHADER,
                                                    "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }",
                                                ),
                                                o(
                                                    e,
                                                    c.FRAGMENT_SHADER,
                                                    "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }",
                                                ),
                                                c.bindAttribLocation(e, 0, "vertex"),
                                                c.bindAttribLocation(e, 1, "uv"),
                                                c.linkProgram(e),
                                                0 < ((s = c.getProgramInfoLog(e)) || "").trim().length)
                                            )
                                                throw s;
                                            (i = c.getUniformLocation(e, "mat")),
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
                                        n = 0,
                                        r = 0,
                                        i = null,
                                        a = null,
                                        s = 0,
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
                                    let c = new u(8),
                                        d = new u(8),
                                        f = new u(10),
                                        p = new u(10);
                                    (this.Mb = function (n, r, l, u, _) {
                                        if (e()) {
                                            var h = c.push(n),
                                                m = d.push(r);
                                            if (t.canvas) {
                                                for (var g of ((t.canvas.width != h || t.canvas.height != m) &&
                                                    ((t.canvas.width = h), (t.canvas.height = m)),
                                                t.viewport(0, m - r, n, r),
                                                t.disable(t.SCISSOR_TEST),
                                                t.clearColor(0, 0, 0, 0),
                                                t.clear(t.COLOR_BUFFER_BIT),
                                                t.enable(t.SCISSOR_TEST),
                                                l.sort((e, t) => t.ub - e.ub),
                                                (h = f.push(u)),
                                                s != h &&
                                                    (t.bufferData(t.ARRAY_BUFFER, 8 * h, t.DYNAMIC_DRAW), (s = h)),
                                                (h = 0),
                                                l))
                                                    t.bufferSubData(t.ARRAY_BUFFER, h, g.Sa), (h += 4 * g.Sa.length);
                                                for (var E of (console.assert(h == 4 * u), l))
                                                    t.bufferSubData(t.ARRAY_BUFFER, h, E.Ab), (h += 4 * E.Ab.length);
                                                for (var y of (console.assert(h == 8 * u),
                                                (h = p.push(_)),
                                                o != h &&
                                                    (t.bufferData(t.ELEMENT_ARRAY_BUFFER, 2 * h, t.DYNAMIC_DRAW),
                                                    (o = h)),
                                                (g = 0),
                                                l))
                                                    t.bufferSubData(t.ELEMENT_ARRAY_BUFFER, g, y.indices),
                                                        (g += 2 * y.indices.length);
                                                for (let e of (console.assert(g == 2 * _),
                                                (y = 0),
                                                (E = !0),
                                                (h = g = 0),
                                                l)) {
                                                    e.image.Ia != y &&
                                                        (t.bindTexture(t.TEXTURE_2D, e.image.Ha || null),
                                                        (y = e.image.Ia)),
                                                        e.fc
                                                            ? (t.scissor(e.Ya, m - e.Za - e.ib, e.tc, e.ib), (E = !0))
                                                            : E && (t.scissor(0, m - r, n, r), (E = !1)),
                                                        (l = 2 / n);
                                                    let s = -2 / r;
                                                    t.uniform4f(
                                                        i,
                                                        e.ga[0] * l * e.za,
                                                        e.ga[1] * s * e.Aa,
                                                        e.ga[2] * l * e.za,
                                                        e.ga[3] * s * e.Aa,
                                                    ),
                                                        t.uniform2f(
                                                            a,
                                                            e.ga[4] * l * e.za + l * (e.Ya - e.bc * e.za) - 1,
                                                            e.ga[5] * s * e.Aa + s * (e.Za - e.cc * e.Aa) + 1,
                                                        ),
                                                        t.vertexAttribPointer(0, 2, t.FLOAT, !1, 0, h),
                                                        t.vertexAttribPointer(1, 2, t.FLOAT, !1, 0, h + 4 * u),
                                                        t.drawElements(
                                                            t.TRIANGLES,
                                                            e.indices.length,
                                                            t.UNSIGNED_SHORT,
                                                            g,
                                                        ),
                                                        (h += 4 * e.Sa.length),
                                                        (g += 2 * e.indices.length);
                                                }
                                                console.assert(h == 4 * u), console.assert(g == 2 * _);
                                            }
                                        }
                                    }),
                                        (this.canvas = function () {
                                            return e() && t.canvas;
                                        });
                                })(),
                                _ = a.onRuntimeInitialized;
                            a.onRuntimeInitialized = function () {
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
                                    for (let e of (0 < I.length &&
                                        (p.Mb(A.drawWidth(), A.drawHeight(), I, S, T),
                                        (I = []),
                                        (T = S = 0),
                                        A.reset(512, 512)),
                                    v)) {
                                        for (let t of e.H) t();
                                        e.H = [];
                                    }
                                    v.clear();
                                }
                                _ && _();
                                var r = a.RenderPaintStyle;
                                let i = a.RenderPath,
                                    s = a.RenderPaint,
                                    o = a.Renderer,
                                    l = a.StrokeCap,
                                    u = a.StrokeJoin,
                                    d = a.BlendMode,
                                    h = r.fill,
                                    m = r.stroke,
                                    g = a.FillRule.evenOdd,
                                    E = 1;
                                var y = a.RenderImage.extend("CanvasRenderImage", {
                                        __construct: function ({ ka: e, va: t } = {}) {
                                            this.__parent.__construct.call(this),
                                                (this.Ia = E),
                                                (E = (E + 1) & 0x7fffffff || 1),
                                                (this.ka = e),
                                                (this.va = t);
                                        },
                                        __destruct: function () {
                                            this.Ha && (p.Jb(this.Ha), URL.revokeObjectURL(this.Va)),
                                                this.__parent.__destruct.call(this);
                                        },
                                        decode: function (e) {
                                            var t = this;
                                            t.va && t.va(t);
                                            var n = new Image();
                                            (t.Va = URL.createObjectURL(
                                                new Blob([e], {
                                                    type: "image/png",
                                                }),
                                            )),
                                                (n.onload = function () {
                                                    (t.Cb = n),
                                                        (t.Ha = p.Ib(n)),
                                                        t.size(n.width, n.height),
                                                        t.ka && t.ka(t);
                                                }),
                                                (n.src = t.Va);
                                        },
                                    }),
                                    b = i.extend("CanvasRenderPath", {
                                        __construct: function () {
                                            this.__parent.__construct.call(this), (this.T = new Path2D());
                                        },
                                        rewind: function () {
                                            this.T = new Path2D();
                                        },
                                        addPath: function (e, t, n, r, i, a, s) {
                                            var o = this.T,
                                                l = o.addPath;
                                            e = e.T;
                                            let c = new DOMMatrix();
                                            (c.a = t),
                                                (c.b = n),
                                                (c.c = r),
                                                (c.d = i),
                                                (c.e = a),
                                                (c.f = s),
                                                l.call(o, e, c);
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
                                        cubicTo: function (e, t, n, r, i, a) {
                                            this.T.bezierCurveTo(e, t, n, r, i, a);
                                        },
                                        close: function () {
                                            this.T.closePath();
                                        },
                                    }),
                                    O = s.extend("CanvasRenderPaint", {
                                        color: function (e) {
                                            this.Wa = t(e);
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
                                        blendMode: function (t) {
                                            this.Bb = e(t);
                                        },
                                        clearGradient: function () {
                                            this.ia = null;
                                        },
                                        linearGradient: function (e, t, n, r) {
                                            this.ia = {
                                                wb: e,
                                                xb: t,
                                                bb: n,
                                                cb: r,
                                                Pa: [],
                                            };
                                        },
                                        radialGradient: function (e, t, n, r) {
                                            this.ia = {
                                                wb: e,
                                                xb: t,
                                                bb: n,
                                                cb: r,
                                                Pa: [],
                                                $b: !0,
                                            };
                                        },
                                        addStop: function (e, t) {
                                            this.ia.Pa.push({
                                                color: e,
                                                stop: t,
                                            });
                                        },
                                        completeGradient: function () {},
                                        draw: function (e, n, r) {
                                            let i = this.Eb;
                                            var a = this.Wa,
                                                s = this.ia;
                                            if (((e.globalCompositeOperation = this.Bb), null != s)) {
                                                a = s.wb;
                                                var o = s.xb;
                                                let n = s.bb;
                                                var l = s.cb;
                                                let r = s.Pa;
                                                s.$b
                                                    ? ((s = n - a),
                                                      (l -= o),
                                                      (a = e.createRadialGradient(
                                                          a,
                                                          o,
                                                          0,
                                                          a,
                                                          o,
                                                          Math.sqrt(s * s + l * l),
                                                      )))
                                                    : (a = e.createLinearGradient(a, o, n, l));
                                                for (let e = 0, n = r.length; e < n; e++)
                                                    (o = r[e]), a.addColorStop(o.stop, t(o.color));
                                                (this.Wa = a), (this.ia = null);
                                            }
                                            switch (i) {
                                                case m:
                                                    (e.strokeStyle = a),
                                                        (e.lineWidth = this.Fb),
                                                        (e.lineCap = this.Fa),
                                                        (e.lineJoin = this.Ga),
                                                        e.stroke(n);
                                                    break;
                                                case h:
                                                    (e.fillStyle = a), e.fill(n, r);
                                            }
                                        },
                                    });
                                let v = new Set(),
                                    A = null,
                                    I = [],
                                    S = 0,
                                    T = 0;
                                var C = (a.CanvasRenderer = o.extend("Renderer", {
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
                                    transform: function (e, t, n, r, i, a) {
                                        let s = this.S,
                                            o = s.length - 6;
                                        s.splice(
                                            o,
                                            6,
                                            s[o] * e + s[o + 2] * t,
                                            s[o + 1] * e + s[o + 3] * t,
                                            s[o] * n + s[o + 2] * r,
                                            s[o + 1] * n + s[o + 3] * r,
                                            s[o] * i + s[o + 2] * a + s[o + 4],
                                            s[o + 1] * i + s[o + 3] * a + s[o + 5],
                                        ),
                                            this.H.push(this.B.transform.bind(this.B, e, t, n, r, i, a));
                                    },
                                    rotate: function (e) {
                                        let t = Math.sin(e);
                                        (e = Math.cos(e)), this.transform(e, t, -t, e, 0, 0);
                                    },
                                    _drawPath: function (e, t) {
                                        this.H.push(t.draw.bind(t, this.B, e.T, e.Ua === g ? "evenodd" : "nonzero"));
                                    },
                                    _drawRiveImage: function (t, n, r, i) {
                                        var a = t.Cb;
                                        if (a) {
                                            var s = this.B,
                                                o = e(r);
                                            this.H.push(function () {
                                                (s.globalCompositeOperation = o),
                                                    (s.globalAlpha = i),
                                                    s.drawImage(a, 0, 0),
                                                    (s.globalAlpha = 1);
                                            });
                                        }
                                    },
                                    _getMatrix: function (e) {
                                        let t = this.S,
                                            n = t.length - 6;
                                        for (let r = 0; 6 > r; ++r) e[r] = t[n + r];
                                    },
                                    _drawImageMesh: function (t, r, i, s, o, l, c, u, d, f, _) {
                                        r = this.B.canvas.width;
                                        var h = this.B.canvas.height;
                                        let m = f - u,
                                            g = _ - d;
                                        (u = Math.max(u, 0)), (d = Math.max(d, 0));
                                        let E = (f = Math.min(f, r)) - u,
                                            y = (_ = Math.min(_, h)) - d;
                                        if (
                                            (console.assert(E <= Math.min(m, r)),
                                            console.assert(y <= Math.min(g, h)),
                                            !(0 >= E || 0 >= y))
                                        ) {
                                            (f = E < m || y < g), (r = _ = 1);
                                            var b = Math.ceil(E * _),
                                                O = Math.ceil(y * r);
                                            (h = p.ac()),
                                                b > h && ((_ *= h / b), (b = h)),
                                                O > h && ((r *= h / O), (O = h)),
                                                A || (A = new a.DynamicRectanizer(h)).reset(512, 512),
                                                0 > (h = A.addRect(b, O)) &&
                                                    (n(), v.add(this), console.assert(0 <= (h = A.addRect(b, O))));
                                            var C = 65535 & h,
                                                N = h >> 16;
                                            I.push({
                                                ga: this.S.slice(this.S.length - 6),
                                                image: t,
                                                Ya: C,
                                                Za: N,
                                                bc: u,
                                                cc: d,
                                                tc: b,
                                                ib: O,
                                                za: _,
                                                Aa: r,
                                                Sa: new Float32Array(o),
                                                Ab: new Float32Array(l),
                                                indices: new Uint16Array(c),
                                                fc: f,
                                                ub: (t.Ia << 1) | !!f,
                                            }),
                                                (S += o.length),
                                                (T += c.length);
                                            var R = this.B,
                                                w = e(i);
                                            this.H.push(function () {
                                                R.save(),
                                                    R.resetTransform(),
                                                    (R.globalCompositeOperation = w),
                                                    (R.globalAlpha = s);
                                                let e = p.canvas();
                                                e && R.drawImage(e, C, N, b, O, u, d, E, y), R.restore();
                                            });
                                        }
                                    },
                                    _clipPath: function (e) {
                                        this.H.push(this.B.clip.bind(this.B, e.T, e.Ua === g ? "evenodd" : "nonzero"));
                                    },
                                    clear: function () {
                                        v.add(this),
                                            this.H.push(
                                                this.B.clearRect.bind(this.B, 0, 0, this.Ta.width, this.Ta.height),
                                            );
                                    },
                                    flush: function () {},
                                    translate: function (e, t) {
                                        this.transform(1, 0, 0, 1, e, t);
                                    },
                                }));
                                (a.makeRenderer = function (e) {
                                    let t = new C(e),
                                        n = t.B;
                                    return new Proxy(t, {
                                        get(e, r) {
                                            if ("function" == typeof e[r])
                                                return function (...t) {
                                                    return e[r].apply(e, t);
                                                };
                                            if ("function" == typeof n[r]) {
                                                if (-1 < f.indexOf(r))
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
                                    (a.decodeImage = function (e, t) {
                                        new y({
                                            ka: t,
                                        }).decode(e);
                                    }),
                                    (a.renderFactory = {
                                        makeRenderPaint: function () {
                                            return new O();
                                        },
                                        makeRenderPath: function () {
                                            return new b();
                                        },
                                        makeRenderImage: function () {
                                            let e = R;
                                            return new y({
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
                                let N = a.load,
                                    R = null;
                                a.load = function (e, t, n = !0) {
                                    let r = new a.FallbackFileAssetLoader();
                                    return (
                                        void 0 !== t && r.addLoader(t),
                                        n && ((t = new a.CDNFileAssetLoader()), r.addLoader(t)),
                                        new Promise(function (t) {
                                            let n = null;
                                            (R = {
                                                total: 0,
                                                loaded: 0,
                                                ready: function () {
                                                    t(n);
                                                },
                                            }),
                                                (n = N(e, r)),
                                                0 == R.total && t(n);
                                        })
                                    );
                                };
                                let w = a.RendererWrapper.prototype.align;
                                (a.RendererWrapper.prototype.align = function (e, t, n, r, i = 1) {
                                    w.call(this, e, t, n, r, i);
                                }),
                                    (a.requestAnimationFrame = (r = new c()).requestAnimationFrame.bind(r)),
                                    (a.cancelAnimationFrame = r.cancelAnimationFrame.bind(r)),
                                    (a.enableFPSCounter = r.Nb.bind(r)),
                                    (a.disableFPSCounter = r.Kb),
                                    (r.nb = n),
                                    (a.resolveAnimationFrame = n),
                                    (a.cleanup = function () {
                                        A && A.delete();
                                    });
                            };
                            var h,
                                m,
                                g = Object.assign({}, a),
                                E = "./this.program",
                                y = "";
                            (o || l) &&
                                (l
                                    ? (y = self.location.href)
                                    : "u" > typeof document &&
                                      document.currentScript &&
                                      (y = document.currentScript.src),
                                e && (y = e),
                                (y = y.startsWith("blob:")
                                    ? ""
                                    : y.substr(0, y.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
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
                                        fetch(e, {
                                            credentials: "same-origin",
                                        })
                                            .then((e) =>
                                                e.ok
                                                    ? e.arrayBuffer()
                                                    : Promise.reject(Error(e.status + " : " + e.url)),
                                            )
                                            .then(t, n);
                                }));
                            var b = a.print || console.log.bind(console),
                                O = a.printErr || console.error.bind(console);
                            Object.assign(a, g),
                                (g = null),
                                a.thisProgram && (E = a.thisProgram),
                                a.wasmBinary && (v = a.wasmBinary);
                            var v,
                                A,
                                I,
                                S,
                                T,
                                C,
                                N,
                                R,
                                w,
                                P,
                                D = !1;

                            function x() {
                                var e = A.buffer;
                                (a.HEAP8 = I = new Int8Array(e)),
                                    (a.HEAP16 = T = new Int16Array(e)),
                                    (a.HEAPU8 = S = new Uint8Array(e)),
                                    (a.HEAPU16 = C = new Uint16Array(e)),
                                    (a.HEAP32 = N = new Int32Array(e)),
                                    (a.HEAPU32 = R = new Uint32Array(e)),
                                    (a.HEAPF32 = w = new Float32Array(e)),
                                    (a.HEAPF64 = P = new Float64Array(e));
                            }
                            var L = [],
                                j = [],
                                M = [];

                            function k() {
                                var e = a.preRun.shift();
                                L.unshift(e);
                            }
                            var U = 0,
                                G = null,
                                V = null;

                            function F(e) {
                                throw (
                                    (a.onAbort?.(e),
                                    O((e = "Aborted(" + e + ")")),
                                    (D = !0),
                                    (e = new WebAssembly.RuntimeError(e + ". Build with -sASSERTIONS for more info.")),
                                    i(e),
                                    e)
                                );
                            }
                            var B,
                                H = (e) => e.startsWith("data:application/octet-stream;base64,"),
                                Y = (e) => e.startsWith("file://");

                            function W(e) {
                                if (e == B && v) return new Uint8Array(v);
                                if (m) return m(e);
                                throw "both async and sync fetching of the wasm failed";
                            }

                            function K(e) {
                                return v
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

                            function z(e, t, n) {
                                return K(e)
                                    .then((e) => WebAssembly.instantiate(e, t))
                                    .then(n, (e) => {
                                        O(`failed to asynchronously prepare wasm: ${e}`), F(e);
                                    });
                            }

                            function q(e, t) {
                                var n = B;
                                return v ||
                                    "function" != typeof WebAssembly.instantiateStreaming ||
                                    H(n) ||
                                    Y(n) ||
                                    "function" != typeof fetch
                                    ? z(n, e, t)
                                    : fetch(n, {
                                          credentials: "same-origin",
                                      }).then((r) =>
                                          WebAssembly.instantiateStreaming(r, e).then(t, function (r) {
                                              return (
                                                  O(`wasm streaming compile failed: ${r}`),
                                                  O("falling back to ArrayBuffer instantiation"),
                                                  z(n, e, t)
                                              );
                                          }),
                                      );
                            }
                            var X,
                                Z,
                                Q = {
                                    464256: (e, t, n, r, i) => {
                                        if (
                                            "u" < typeof window ||
                                            void 0 === (window.AudioContext || window.webkitAudioContext)
                                        )
                                            return 0;
                                        if (void 0 === window.h) {
                                            (window.h = {
                                                ya: 0,
                                            }),
                                                (window.h.I = {}),
                                                (window.h.I.wa = e),
                                                (window.h.I.capture = t),
                                                (window.h.I.Ja = n),
                                                (window.h.fa = {}),
                                                (window.h.fa.stopped = r),
                                                (window.h.fa.vb = i);
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
                                                    for (var t = 0; t < a.D.length; ++t)
                                                        if (a.D[t] == e) return a.zb(t);
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
                                                                    nI(t.ob);
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
                                    467013: (e, t, n, r, i, a) => {
                                        if (void 0 === window.h) return -1;
                                        var s = {},
                                            o = {};
                                        return (
                                            e == window.h.I.wa && 0 != n && (o.sampleRate = n),
                                            (s.K = new (window.AudioContext || window.webkitAudioContext)(o)),
                                            s.K.suspend(),
                                            (s.state = window.h.fa.stopped),
                                            (n = 0),
                                            e != window.h.I.wa && (n = t),
                                            (s.Y = s.K.createScriptProcessor(r, n, t)),
                                            (s.Y.onaudioprocess = function (n) {
                                                if (
                                                    ((null == s.qa || 0 == s.qa.length) &&
                                                        (s.qa = new Float32Array(w.buffer, i, r * t)),
                                                    e == window.h.I.capture || e == window.h.I.Ja)
                                                ) {
                                                    for (var o = 0; o < t; o += 1)
                                                        for (
                                                            var l = n.inputBuffer.getChannelData(o), c = s.qa, u = 0;
                                                            u < r;
                                                            u += 1
                                                        )
                                                            c[u * t + o] = l[u];
                                                    nS(a, r, i);
                                                }
                                                if (e == window.h.I.wa || e == window.h.I.Ja)
                                                    for (nT(a, r, i), o = 0; o < n.outputBuffer.numberOfChannels; ++o)
                                                        for (
                                                            l = n.outputBuffer.getChannelData(o), c = s.qa, u = 0;
                                                            u < r;
                                                            u += 1
                                                        )
                                                            l[u] = c[u * t + o];
                                                else
                                                    for (o = 0; o < n.outputBuffer.numberOfChannels; ++o)
                                                        n.outputBuffer.getChannelData(o).fill(0);
                                            }),
                                            (e != window.h.I.capture && e != window.h.I.Ja) ||
                                                navigator.mediaDevices
                                                    .getUserMedia({
                                                        audio: !0,
                                                        video: !1,
                                                    })
                                                    .then(function (e) {
                                                        (s.Ba = s.K.createMediaStreamSource(e)),
                                                            s.Ba.connect(s.Y),
                                                            s.Y.connect(s.K.destination);
                                                    })
                                                    .catch(function (e) {
                                                        console.log("Failed to get user media: " + e);
                                                    }),
                                            e == window.h.I.wa && s.Y.connect(s.K.destination),
                                            (s.ob = a),
                                            window.h.rc(s)
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
                                $ = (e) => {
                                    for (; 0 < e.length; ) e.shift()(a);
                                };

                            function J() {
                                var e = N[e8 >> 2];
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
                                    F("initRandomDevice");
                                },
                                ea = (e) => (ea = ei())(e),
                                es = (...e) => {
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
                                            var a = 63 & e[t++];
                                            if (192 == (224 & i)) r += String.fromCharCode(((31 & i) << 6) | a);
                                            else {
                                                var s = 63 & e[t++];
                                                65536 >
                                                (i =
                                                    224 == (240 & i)
                                                        ? ((15 & i) << 12) | (a << 6) | s
                                                        : ((7 & i) << 18) | (a << 12) | (s << 6) | (63 & e[t++]))
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
                                ec = [],
                                eu = (e) => {
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
                                    for (var a = 0; a < e.length; ++a) {
                                        var s = e.charCodeAt(a);
                                        if (
                                            (55296 <= s &&
                                                57343 >= s &&
                                                (s = (65536 + ((1023 & s) << 10)) | (1023 & e.charCodeAt(++a))),
                                            127 >= s)
                                        ) {
                                            if (n >= r) break;
                                            t[n++] = s;
                                        } else {
                                            if (2047 >= s) {
                                                if (n + 1 >= r) break;
                                                t[n++] = 192 | (s >> 6);
                                            } else {
                                                if (65535 >= s) {
                                                    if (n + 2 >= r) break;
                                                    t[n++] = 224 | (s >> 12);
                                                } else {
                                                    if (n + 3 >= r) break;
                                                    (t[n++] = 240 | (s >> 18)), (t[n++] = 128 | ((s >> 12) & 63));
                                                }
                                                t[n++] = 128 | ((s >> 6) & 63);
                                            }
                                            t[n++] = 128 | (63 & s);
                                        }
                                    }
                                    return (t[n] = 0), n - i;
                                };

                            function ef(e, t) {
                                var n = Array(eu(e) + 1);
                                return (e = ed(e, n, 0, n.length)), t && (n.length = e), n;
                            }
                            var ep = [];

                            function e_(e, t) {
                                (ep[e] = {
                                    input: [],
                                    G: [],
                                    V: t,
                                }),
                                    eH(e, eh);
                            }
                            var eh = {
                                    open(e) {
                                        var t = ep[e.node.xa];
                                        if (!t) throw new eC(43);
                                        (e.s = t), (e.seekable = !1);
                                    },
                                    close(e) {
                                        e.s.V.oa(e.s);
                                    },
                                    oa(e) {
                                        e.s.V.oa(e.s);
                                    },
                                    read(e, t, n, r) {
                                        if (!e.s || !e.s.V.hb) throw new eC(60);
                                        for (var i = 0, a = 0; a < r; a++) {
                                            try {
                                                var s = e.s.V.hb(e.s);
                                            } catch (e) {
                                                throw new eC(29);
                                            }
                                            if (void 0 === s && 0 === i) throw new eC(6);
                                            if (null == s) break;
                                            i++, (t[n + a] = s);
                                        }
                                        return i && (e.node.timestamp = Date.now()), i;
                                    },
                                    write(e, t, n, r) {
                                        if (!e.s || !e.s.V.Ma) throw new eC(60);
                                        try {
                                            for (var i = 0; i < r; i++) e.s.V.Ma(e.s, t[n + i]);
                                        } catch (e) {
                                            throw new eC(29);
                                        }
                                        return r && (e.node.timestamp = Date.now()), i;
                                    },
                                },
                                em = {
                                    hb() {
                                        e: {
                                            if (!ec.length) {
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
                                                ec = ef(e, !0);
                                            }
                                            e = ec.shift();
                                        }
                                        return e;
                                    },
                                    Ma(e, t) {
                                        null === t || 10 === t ? (b(el(e.G, 0)), (e.G = [])) : 0 != t && e.G.push(t);
                                    },
                                    oa(e) {
                                        e.G && 0 < e.G.length && (b(el(e.G, 0)), (e.G = []));
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
                                eg = {
                                    Ma(e, t) {
                                        null === t || 10 === t ? (O(el(e.G, 0)), (e.G = [])) : 0 != t && e.G.push(t);
                                    },
                                    oa(e) {
                                        e.G && 0 < e.G.length && (O(el(e.G, 0)), (e.G = []));
                                    },
                                };

                            function eE(e, t) {
                                var n = e.l ? e.l.length : 0;
                                n >= t ||
                                    ((t = Math.max(t, (n * (1048576 > n ? 2 : 1.125)) >>> 0)),
                                    0 != n && (t = Math.max(t, 256)),
                                    (n = e.l),
                                    (e.l = new Uint8Array(t)),
                                    0 < e.v && e.l.set(n.subarray(0, e.v), 0));
                            }
                            var ey = {
                                    N: null,
                                    U: () => ey.createNode(null, "/", 16895, 0),
                                    createNode(e, t, n, r) {
                                        if (24576 == (61440 & n) || 4096 == (61440 & n)) throw new eC(63);
                                        return (
                                            ey.N ||
                                                (ey.N = {
                                                    dir: {
                                                        node: {
                                                            X: ey.j.X,
                                                            P: ey.j.P,
                                                            ja: ey.j.ja,
                                                            ta: ey.j.ta,
                                                            sb: ey.j.sb,
                                                            yb: ey.j.yb,
                                                            tb: ey.j.tb,
                                                            rb: ey.j.rb,
                                                            Ca: ey.j.Ca,
                                                        },
                                                        stream: {
                                                            aa: ey.m.aa,
                                                        },
                                                    },
                                                    file: {
                                                        node: {
                                                            X: ey.j.X,
                                                            P: ey.j.P,
                                                        },
                                                        stream: {
                                                            aa: ey.m.aa,
                                                            read: ey.m.read,
                                                            write: ey.m.write,
                                                            Xa: ey.m.Xa,
                                                            kb: ey.m.kb,
                                                            mb: ey.m.mb,
                                                        },
                                                    },
                                                    link: {
                                                        node: {
                                                            X: ey.j.X,
                                                            P: ey.j.P,
                                                            la: ey.j.la,
                                                        },
                                                        stream: {},
                                                    },
                                                    $a: {
                                                        node: {
                                                            X: ey.j.X,
                                                            P: ey.j.P,
                                                        },
                                                        stream: eB,
                                                    },
                                                }),
                                            16384 == (61440 & (n = ej(e, t, n, r)).mode)
                                                ? ((n.j = ey.N.dir.node), (n.m = ey.N.dir.stream), (n.l = {}))
                                                : 32768 == (61440 & n.mode)
                                                  ? ((n.j = ey.N.file.node),
                                                    (n.m = ey.N.file.stream),
                                                    (n.v = 0),
                                                    (n.l = null))
                                                  : 40960 == (61440 & n.mode)
                                                    ? ((n.j = ey.N.link.node), (n.m = ey.N.link.stream))
                                                    : 8192 == (61440 & n.mode) &&
                                                      ((n.j = ey.N.$a.node), (n.m = ey.N.$a.stream)),
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
                                            throw eN[44];
                                        },
                                        ta: (e, t, n, r) => ey.createNode(e, t, n, r),
                                        sb(e, t, n) {
                                            if (16384 == (61440 & e.mode)) {
                                                try {
                                                    var r = eL(t, n);
                                                } catch (e) {}
                                                if (r) for (var i in r.l) throw new eC(55);
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
                                                r = eL(e, t);
                                            for (n in r.l) throw new eC(55);
                                            delete e.l[t], (e.timestamp = Date.now());
                                        },
                                        rb(e) {
                                            var t,
                                                n = [".", ".."];
                                            for (t of Object.keys(e.l)) n.push(t);
                                            return n;
                                        },
                                        Ca: (e, t, n) => (((e = ey.createNode(e, t, 41471, 0)).link = n), e),
                                        la(e) {
                                            if (40960 != (61440 & e.mode)) throw new eC(28);
                                            return e.link;
                                        },
                                    },
                                    m: {
                                        read(e, t, n, r, i) {
                                            var a = e.node.l;
                                            if (i >= e.node.v) return 0;
                                            if (8 < (e = Math.min(e.node.v - i, r)) && a.subarray)
                                                t.set(a.subarray(i, i + e), n);
                                            else for (r = 0; r < e; r++) t[n + r] = a[i + r];
                                            return e;
                                        },
                                        write(e, t, n, r, i, a) {
                                            if ((t.buffer === I.buffer && (a = !1), !r)) return 0;
                                            if (
                                                (((e = e.node).timestamp = Date.now()),
                                                t.subarray && (!e.l || e.l.subarray))
                                            ) {
                                                if (a) return (e.l = t.subarray(n, n + r)), (e.v = r);
                                                if (0 === e.v && 0 === i) return (e.l = t.slice(n, n + r)), (e.v = r);
                                                if (i + r <= e.v) return e.l.set(t.subarray(n, n + r), i), r;
                                            }
                                            if ((eE(e, i + r), e.l.subarray && t.subarray))
                                                e.l.set(t.subarray(n, n + r), i);
                                            else for (a = 0; a < r; a++) e.l[i + a] = t[n + a];
                                            return (e.v = Math.max(e.v, i + r)), r;
                                        },
                                        aa(e, t, n) {
                                            if (
                                                (1 === n
                                                    ? (t += e.position)
                                                    : 2 === n && 32768 == (61440 & e.node.mode) && (t += e.node.v),
                                                0 > t)
                                            )
                                                throw new eC(28);
                                            return t;
                                        },
                                        Xa(e, t, n) {
                                            eE(e.node, t + n), (e.node.v = Math.max(e.node.v, t + n));
                                        },
                                        kb(e, t, n, r, i) {
                                            if (32768 != (61440 & e.node.mode)) throw new eC(43);
                                            if (((e = e.node.l), 2 & i || e.buffer !== I.buffer))
                                                throw (
                                                    ((0 < n || n + t < e.length) &&
                                                        (e = e.subarray
                                                            ? e.subarray(n, n + t)
                                                            : Array.prototype.slice.call(e, n, n + t)),
                                                    (n = !0),
                                                    F(),
                                                    (t = void 0),
                                                    new eC(48))
                                                );
                                            return (
                                                (n = !1),
                                                (t = e.byteOffset),
                                                {
                                                    o: t,
                                                    uc: n,
                                                }
                                            );
                                        },
                                        mb: (e, t, n, r) => (ey.m.write(e, t, 0, r, n, !1), 0),
                                    },
                                },
                                eb = (e, t) => {
                                    var n = 0;
                                    return e && (n |= 365), t && (n |= 146), n;
                                },
                                eO = null,
                                ev = {},
                                eA = [],
                                eI = 1,
                                eS = null,
                                eT = !0,
                                eC = class {
                                    constructor(e) {
                                        (this.name = "ErrnoError"), (this.$ = e);
                                    }
                                },
                                eN = {},
                                eR = class {
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
                                ew = class {
                                    constructor(e, t, n, r) {
                                        (e ||= this),
                                            (this.parent = e),
                                            (this.U = e.U),
                                            (this.ua = null),
                                            (this.id = eI++),
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

                            function eP(e, t = {}) {
                                if (!(e = es(e)))
                                    return {
                                        path: "",
                                        node: null,
                                    };
                                if (
                                    8 <
                                    (t = Object.assign(
                                        {
                                            gb: !0,
                                            Oa: 0,
                                        },
                                        t,
                                    )).Oa
                                )
                                    throw new eC(32);
                                e = e.split("/").filter((e) => !!e);
                                for (var n = eO, r = "/", i = 0; i < e.length; i++) {
                                    var a = i === e.length - 1;
                                    if (a && t.parent) break;
                                    if (
                                        ((n = eL(n, e[i])),
                                        (r = et(r + "/" + e[i])),
                                        n.ua && (!a || (a && t.gb)) && (n = n.ua.root),
                                        !a || t.fb)
                                    ) {
                                        for (a = 0; 40960 == (61440 & n.mode); )
                                            if (
                                                ((n = eX(r)),
                                                (n = eP((r = es(en(r), n)), {
                                                    Oa: t.Oa + 1,
                                                }).node),
                                                40 < a++)
                                            )
                                                throw new eC(32);
                                    }
                                }
                                return {
                                    path: r,
                                    node: n,
                                };
                            }

                            function eD(e) {
                                for (var t; ; ) {
                                    if (e === e.parent)
                                        return (e = e.U.lb), t ? ("/" !== e[e.length - 1] ? `${e}/${t}` : e + t) : e;
                                    (t = t ? `${e.name}/${t}` : e.name), (e = e.parent);
                                }
                            }

                            function ex(e, t) {
                                for (var n = 0, r = 0; r < t.length; r++) n = ((n << 5) - n + t.charCodeAt(r)) | 0;
                                return ((e + n) >>> 0) % eS.length;
                            }

                            function eL(e, t) {
                                var n = 16384 == (61440 & e.mode) ? ((n = ek(e, "x")) ? n : 2 * !e.j.ja) : 54;
                                if (n) throw new eC(n);
                                for (n = eS[ex(e.id, t)]; n; n = n.ec) {
                                    var r = n.name;
                                    if (n.parent.id === e.id && r === t) return n;
                                }
                                return e.j.ja(e, t);
                            }

                            function ej(e, t, n, r) {
                                return (
                                    (t = ex((e = new ew(e, t, n, r)).parent.id, e.name)), (e.ec = eS[t]), (eS[t] = e)
                                );
                            }

                            function eM(e) {
                                var t = ["r", "w", "rw"][3 & e];
                                return 512 & e && (t += "w"), t;
                            }

                            function ek(e, t) {
                                return eT
                                    ? 0
                                    : (t.includes("r") && !(292 & e.mode)) ||
                                        (t.includes("w") && !(146 & e.mode)) ||
                                        (t.includes("x") && !(73 & e.mode))
                                      ? 2
                                      : 0;
                            }

                            function eU(e, t) {
                                try {
                                    return eL(e, t), 20;
                                } catch (e) {}
                                return ek(e, "wx");
                            }

                            function eG(e) {
                                if (!(e = eA[e])) throw new eC(8);
                                return e;
                            }

                            function eV(e, t = -1) {
                                if (((e = Object.assign(new eR(), e)), -1 == t))
                                    e: {
                                        for (t = 0; 4096 >= t; t++) if (!eA[t]) break e;
                                        throw new eC(33);
                                    }
                                return (e.W = t), (eA[t] = e);
                            }

                            function eF(e, t = -1) {
                                return (e = eV(e, t)), e.m?.Ec?.(e), e;
                            }
                            var eB = {
                                open(e) {
                                    (e.m = ev[e.node.xa].m), e.m.open?.(e);
                                },
                                aa() {
                                    throw new eC(70);
                                },
                            };

                            function eH(e, t) {
                                ev[e] = {
                                    m: t,
                                };
                            }

                            function eY(e, t) {
                                var n = "/" === t;
                                if (n && eO) throw new eC(10);
                                if (!n && t) {
                                    var r = eP(t, {
                                        gb: !1,
                                    });
                                    if (((t = r.path), (r = r.node).ua)) throw new eC(10);
                                    if (16384 != (61440 & r.mode)) throw new eC(54);
                                }
                                (t = {
                                    type: e,
                                    Mc: {},
                                    lb: t,
                                    dc: [],
                                }),
                                    ((e = e.U(t)).U = t),
                                    (t.root = e),
                                    n ? (eO = e) : r && ((r.ua = t), r.U && r.U.dc.push(t));
                            }

                            function eW(e, t, n) {
                                var r = eP(e, {
                                    parent: !0,
                                }).node;
                                if (!(e = er(e)) || "." === e || ".." === e) throw new eC(28);
                                var i = eU(r, e);
                                if (i) throw new eC(i);
                                if (!r.j.ta) throw new eC(63);
                                return r.j.ta(r, e, t, n);
                            }

                            function eK(e) {
                                return eW(e, 16895, 0);
                            }

                            function ez(e, t, n) {
                                void 0 === n && ((n = t), (t = 438)), eW(e, 8192 | t, n);
                            }

                            function eq(e, t) {
                                if (!es(e)) throw new eC(44);
                                var n = eP(t, {
                                    parent: !0,
                                }).node;
                                if (!n) throw new eC(44);
                                var r = eU(n, (t = er(t)));
                                if (r) throw new eC(r);
                                if (!n.j.Ca) throw new eC(63);
                                n.j.Ca(n, t, e);
                            }

                            function eX(e) {
                                if (!(e = eP(e).node)) throw new eC(44);
                                if (!e.j.la) throw new eC(28);
                                return es(eD(e.parent), e.j.la(e));
                            }

                            function eZ(e, t, n) {
                                if ("" === e) throw new eC(44);
                                if ("string" == typeof t) {
                                    var r = {
                                        r: 0,
                                        "r+": 2,
                                        w: 577,
                                        "w+": 578,
                                        a: 1089,
                                        "a+": 1090,
                                    }[t];
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
                                        i = eP(e, {
                                            fb: !(131072 & t),
                                        }).node;
                                    } catch (e) {}
                                }
                                if (((r = !1), 64 & t))
                                    if (i) {
                                        if (128 & t) throw new eC(20);
                                    } else (i = eW(e, n, 0)), (r = !0);
                                if (!i) throw new eC(44);
                                if ((8192 == (61440 & i.mode) && (t &= -513), 65536 & t && 16384 != (61440 & i.mode)))
                                    throw new eC(54);
                                if (
                                    !r &&
                                    (n = i
                                        ? 40960 == (61440 & i.mode)
                                            ? 32
                                            : 16384 == (61440 & i.mode) && ("r" !== eM(t) || 512 & t)
                                              ? 31
                                              : ek(i, eM(t))
                                        : 44)
                                )
                                    throw new eC(n);
                                if (512 & t && !r) {
                                    if (
                                        !(n =
                                            "string" == typeof (n = i)
                                                ? eP(n, {
                                                      fb: !0,
                                                  }).node
                                                : n).j.P
                                    )
                                        throw new eC(63);
                                    if (16384 == (61440 & n.mode)) throw new eC(31);
                                    if (32768 != (61440 & n.mode)) throw new eC(28);
                                    if ((r = ek(n, "w"))) throw new eC(r);
                                    n.j.P(n, {
                                        size: 0,
                                        timestamp: Date.now(),
                                    });
                                }
                                return (
                                    (t &= -131713),
                                    (i = eV({
                                        node: i,
                                        path: eD(i),
                                        flags: t,
                                        seekable: !0,
                                        position: 0,
                                        m: i.m,
                                        sc: [],
                                        error: !1,
                                    })).m.open && i.m.open(i),
                                    !a.logReadFiles || 1 & t || e in (e1 ||= {}) || (e1[e] = 1),
                                    i
                                );
                            }

                            function eQ(e, t, n) {
                                if (null === e.W) throw new eC(8);
                                if (!e.seekable || !e.m.aa) throw new eC(70);
                                if (0 != n && 1 != n && 2 != n) throw new eC(28);
                                (e.position = e.m.aa(e, t, n)), (e.sc = []);
                            }

                            function e$(e, t, n) {
                                e = et("/dev/" + e);
                                var r = eb(!!t, !!n);
                                e0 ||= 64;
                                var i = e0++ << 8;
                                eH(i, {
                                    open(e) {
                                        e.seekable = !1;
                                    },
                                    close() {
                                        n?.buffer?.length && n(10);
                                    },
                                    read(e, n, r, i) {
                                        for (var a = 0, s = 0; s < i; s++) {
                                            try {
                                                var o = t();
                                            } catch (e) {
                                                throw new eC(29);
                                            }
                                            if (void 0 === o && 0 === a) throw new eC(6);
                                            if (null == o) break;
                                            a++, (n[r + s] = o);
                                        }
                                        return a && (e.node.timestamp = Date.now()), a;
                                    },
                                    write(e, t, r, i) {
                                        for (var a = 0; a < i; a++)
                                            try {
                                                n(t[r + a]);
                                            } catch (e) {
                                                throw new eC(29);
                                            }
                                        return i && (e.node.timestamp = Date.now()), a;
                                    },
                                }),
                                    ez(e, r, i);
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
                                e9 = (e, t) =>
                                    Object.defineProperty(t, "name", {
                                        value: e,
                                    }),
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
                                ta = (e) => {
                                    for (var t = ""; S[e]; ) t += e6[S[e++]];
                                    return t;
                                },
                                ts = [],
                                to = () => {
                                    for (; ts.length; ) {
                                        var e = ts.pop();
                                        (e.g.ea = !1), e.delete();
                                    }
                                },
                                tl = {},
                                tc = (e, t) => {
                                    if (void 0 === t) throw new e2("ptr should not be undefined");
                                    for (; e.C; ) (t = e.ma(t)), (e = e.C);
                                    return t;
                                },
                                tu = {},
                                td = (e) => {
                                    var t = ta((e = nA(e)));
                                    return nO(e), t;
                                },
                                tf = (e, t) => {
                                    var n = tu[e];
                                    if (void 0 === n) throw ((e = `${t} has unknown type ${td(e)}`), new e2(e));
                                    return n;
                                },
                                tp = () => {},
                                t_ = !1,
                                th = (e, t, n) =>
                                    t === n ? e : void 0 === n.C || null === (e = th(e, t, n.C)) ? null : n.Lb(e),
                                tm = {},
                                tg = (e, t) => tl[(t = tc(e, t))],
                                tE = (e, t) => {
                                    if (!t.u || !t.o) throw new e5("makeClassHandle requires ptr and ptrType");
                                    if (!!t.J != !!t.F)
                                        throw new e5("Both smartPtrType and smartPtr must be specified");
                                    return (
                                        (t.count = {
                                            value: 1,
                                        }),
                                        ty(
                                            Object.create(e, {
                                                g: {
                                                    value: t,
                                                    writable: !0,
                                                },
                                            }),
                                        )
                                    );
                                },
                                ty = (e) =>
                                    "u" < typeof FinalizationRegistry
                                        ? ((ty = (e) => e), e)
                                        : ((t_ = new FinalizationRegistry((e) => {
                                              (e = e.g),
                                                  --e.count.value,
                                                  0 === e.count.value && (e.F ? e.J.O(e.F) : e.u.i.O(e.o));
                                          })),
                                          (ty = (e) => {
                                              var t = e.g;
                                              return (
                                                  t.F &&
                                                      t_.register(
                                                          e,
                                                          {
                                                              g: t,
                                                          },
                                                          e,
                                                      ),
                                                  e
                                              );
                                          }),
                                          (tp = (e) => {
                                              t_.unregister(e);
                                          }),
                                          ty(e)),
                                tb = {},
                                tO = (e) => {
                                    for (; e.length; ) {
                                        var t = e.pop();
                                        e.pop()(t);
                                    }
                                };

                            function tv(e) {
                                return this.fromWireType(R[e >> 2]);
                            }
                            var tA = {},
                                tI = {},
                                tS = (e, t, n) => {
                                    function r(t) {
                                        if ((t = n(t)).length !== e.length)
                                            throw new e5("Mismatched type converter count");
                                        for (var r = 0; r < e.length; ++r) tC(e[r], t[r]);
                                    }
                                    e.forEach(function (e) {
                                        tI[e] = t;
                                    });
                                    var i = Array(t.length),
                                        a = [],
                                        s = 0;
                                    t.forEach((e, t) => {
                                        tu.hasOwnProperty(e)
                                            ? (i[t] = tu[e])
                                            : (a.push(e),
                                              tA.hasOwnProperty(e) || (tA[e] = []),
                                              tA[e].push(() => {
                                                  (i[t] = tu[e]), ++s === a.length && r(i);
                                              }));
                                    }),
                                        0 === a.length && r(i);
                                };

                            function tT(e, t, n = {}) {
                                var r = t.name;
                                if (!e) throw new e2(`type "${r}" must have a positive integer typeid pointer`);
                                if (tu.hasOwnProperty(e)) {
                                    if (n.Vb) return;
                                    throw new e2(`Cannot register type '${r}' twice`);
                                }
                                (tu[e] = t),
                                    delete tI[e],
                                    tA.hasOwnProperty(e) && ((t = tA[e]), delete tA[e], t.forEach((e) => e()));
                            }

                            function tC(e, t, n = {}) {
                                if (!("argPackAdvance" in t))
                                    throw TypeError("registerType registeredInstance requires argPackAdvance");
                                return tT(e, t, n);
                            }
                            var tN = (e) => {
                                throw new e2(e.g.u.i.name + " instance already deleted");
                            };

                            function tR() {}
                            var tw = (e, t, n) => {
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
                                tP = (e, t, n) => {
                                    if (a.hasOwnProperty(e)) {
                                        if (void 0 === n || (void 0 !== a[e].A && void 0 !== a[e].A[n]))
                                            throw new e2(`Cannot register public name '${e}' twice`);
                                        if ((tw(a, e, e), a.hasOwnProperty(n)))
                                            throw new e2(
                                                `Cannot register multiple overloads of a function with the same number of arguments (${n})!`,
                                            );
                                        a[e].A[n] = t;
                                    } else (a[e] = t), void 0 !== n && (a[e].Lc = n);
                                },
                                tD = (e) => {
                                    if (void 0 === e) return "_unknown";
                                    var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                                    return 48 <= t && 57 >= t ? `_${e}` : e;
                                };

                            function tx(e, t, n, r, i, a, s, o) {
                                (this.name = e),
                                    (this.constructor = t),
                                    (this.M = n),
                                    (this.O = r),
                                    (this.C = i),
                                    (this.Qb = a),
                                    (this.ma = s),
                                    (this.Lb = o),
                                    (this.pb = []);
                            }
                            var tL = (e, t, n) => {
                                for (; t !== n; ) {
                                    if (!t.ma)
                                        throw new e2(
                                            `Expected null or instance of ${n.name}, got an instance of ${t.name}`,
                                        );
                                    (e = t.ma(e)), (t = t.C);
                                }
                                return e;
                            };

                            function tj(e, t) {
                                if (null === t) {
                                    if (this.La) throw new e2(`null is not a valid ${this.name}`);
                                    return 0;
                                }
                                if (!t.g) throw new e2(`Cannot pass "${t3(t)}" as a ${this.name}`);
                                if (!t.g.o)
                                    throw new e2(`Cannot pass deleted object as a pointer of type ${this.name}`);
                                return tL(t.g.o, t.g.u.i, this.i);
                            }

                            function tM(e, t) {
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
                                if (((n = tL(t.g.o, t.g.u.i, this.i)), this.sa)) {
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

                            function tk(e, t) {
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
                                return tL(t.g.o, t.g.u.i, this.i);
                            }

                            function tU(e, t, n, r, i, a, s, o, l, c, u) {
                                (this.name = e),
                                    (this.i = t),
                                    (this.La = n),
                                    (this.ra = r),
                                    (this.sa = i),
                                    (this.hc = a),
                                    (this.mc = s),
                                    (this.qb = o),
                                    (this.Na = l),
                                    (this.ic = c),
                                    (this.O = u),
                                    i || void 0 !== t.C
                                        ? (this.toWireType = tM)
                                        : ((this.toWireType = r ? tj : tk), (this.L = null));
                            }
                            var tG,
                                tV,
                                tF = (e, t, n) => {
                                    if (!a.hasOwnProperty(e)) throw new e5("Replacing nonexistent public symbol");
                                    void 0 !== a[e].A && void 0 !== n ? (a[e].A[n] = t) : ((a[e] = t), (a[e].da = n));
                                },
                                tB = [],
                                tH = (e) => {
                                    var t = tB[e];
                                    return t || (e >= tB.length && (tB.length = e + 1), (tB[e] = t = tG.get(e))), t;
                                },
                                tY = (e, t, n = []) =>
                                    (t = e.includes("j")
                                        ? (0, a["dynCall_" + (e = e.replace(/p/g, "i"))])(t, ...n)
                                        : tH(t)(...n)),
                                tW =
                                    (e, t) =>
                                    (...n) =>
                                        tY(e, t, n),
                                tK = (e, t) => {
                                    var n = (e = ta(e)).includes("j") ? tW(e, t) : tH(t);
                                    if ("function" != typeof n)
                                        throw new e2(`unknown function pointer with signature ${e}: ${t}`);
                                    return n;
                                },
                                tz = (e, t) => {
                                    function n(e) {
                                        i[e] || tu[e] || (tI[e] ? tI[e].forEach(n) : (r.push(e), (i[e] = !0)));
                                    }
                                    var r = [],
                                        i = {};
                                    throw (t.forEach(n), new tV(`${e}: ` + r.map(td).join([", "])));
                                };

                            function tq(e) {
                                for (var t = 1; t < e.length; ++t) if (null !== e[t] && void 0 === e[t].L) return !0;
                                return !1;
                            }

                            function tX(e, t, n, r, i) {
                                var a = t.length;
                                if (2 > a)
                                    throw new e2(
                                        "argTypes array size mismatch! Must at least get return value and 'this' types!",
                                    );
                                var s = null !== t[1] && null !== n,
                                    o = tq(t),
                                    l = "void" !== t[0].name,
                                    c = a - 2,
                                    u = Array(c),
                                    d = [],
                                    f = [];
                                return e9(e, function (...n) {
                                    if (n.length !== c)
                                        throw new e2(`function ${e} called with ${n.length} arguments, expected ${c}`);
                                    if (((f.length = 0), (d.length = s ? 2 : 1), (d[0] = i), s)) {
                                        var a = t[1].toWireType(f, this);
                                        d[1] = a;
                                    }
                                    for (var p = 0; p < c; ++p) (u[p] = t[p + 2].toWireType(f, n[p])), d.push(u[p]);
                                    if (((n = r(...d)), o)) tO(f);
                                    else
                                        for (p = s ? 1 : 2; p < t.length; p++) {
                                            var _ = 1 === p ? a : u[p - 2];
                                            null !== t[p].L && t[p].L(_);
                                        }
                                    return l ? t[0].fromWireType(n) : void 0;
                                });
                            }
                            var tZ,
                                tQ = (e, t) => {
                                    for (var n = [], r = 0; r < e; r++) n.push(R[(t + 4 * r) >> 2]);
                                    return n;
                                },
                                t$ = (e) => {
                                    let t = (e = e.trim()).indexOf("(");
                                    return -1 !== t ? e.substr(0, t) : e;
                                },
                                tJ = (e, t, n) => {
                                    if (!(e instanceof Object)) throw new e2(`${n} with invalid "this": ${e}`);
                                    if (!(e instanceof t.i.constructor))
                                        throw new e2(`${n} incompatible with "this" of type ${e.constructor.name}`);
                                    if (!e.g.o)
                                        throw new e2(`cannot call emscripten binding method ${n} on deleted object`);
                                    return tL(e.g.o, e.g.u.i, t.i);
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
                                    readValueFromPointer: tv,
                                    L: null,
                                },
                                t2 = (e, t, n) => {
                                    switch (t) {
                                        case 1:
                                            return n
                                                ? function (e) {
                                                      return this.fromWireType(I[e]);
                                                  }
                                                : function (e) {
                                                      return this.fromWireType(S[e]);
                                                  };
                                        case 2:
                                            return n
                                                ? function (e) {
                                                      return this.fromWireType(T[e >> 1]);
                                                  }
                                                : function (e) {
                                                      return this.fromWireType(C[e >> 1]);
                                                  };
                                        case 4:
                                            return n
                                                ? function (e) {
                                                      return this.fromWireType(N[e >> 2]);
                                                  }
                                                : function (e) {
                                                      return this.fromWireType(R[e >> 2]);
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
                                                return this.fromWireType(w[e >> 2]);
                                            };
                                        case 8:
                                            return function (e) {
                                                return this.fromWireType(P[e >> 3]);
                                            };
                                        default:
                                            throw TypeError(`invalid float width (${t}): ${e}`);
                                    }
                                },
                                t4 = (e, t, n) => {
                                    switch (t) {
                                        case 1:
                                            return n ? (e) => I[e] : (e) => S[e];
                                        case 2:
                                            return n ? (e) => T[e >> 1] : (e) => C[e >> 1];
                                        case 4:
                                            return n ? (e) => N[e >> 2] : (e) => R[e >> 2];
                                        default:
                                            throw TypeError(`invalid integer width (${t}): ${e}`);
                                    }
                                },
                                t5 = "u" > typeof TextDecoder ? new TextDecoder("utf-16le") : void 0,
                                t7 = (e, t) => {
                                    for (var n = e >> 1, r = n + t / 2; !(n >= r) && C[n]; ) ++n;
                                    if (32 < (n <<= 1) - e && t5) return t5.decode(S.subarray(e, n));
                                    for (r = 0, n = ""; !(r >= t / 2); ++r) {
                                        var i = T[(e + 2 * r) >> 1];
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
                                    for (var i = 0; i < n; ++i) (T[t >> 1] = e.charCodeAt(i)), (t += 2);
                                    return (T[t >> 1] = 0), t - r;
                                },
                                t9 = (e) => 2 * e.length,
                                ne = (e, t) => {
                                    for (var n = 0, r = ""; !(n >= t / 4); ) {
                                        var i = N[(e + 4 * n) >> 2];
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
                                        var a = e.charCodeAt(i);
                                        if (
                                            (55296 <= a &&
                                                57343 >= a &&
                                                (a = (65536 + ((1023 & a) << 10)) | (1023 & e.charCodeAt(++i))),
                                            (N[t >> 2] = a),
                                            (t += 4) + 4 > n)
                                        )
                                            break;
                                    }
                                    return (N[t >> 2] = 0), t - r;
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
                                    return (e = e.toWireType(r, n)), r.length && (R[t >> 2] = tr(r)), e;
                                },
                                ni = {},
                                na = (e) => {
                                    var t = ni[e];
                                    return void 0 === t ? ta(e) : t;
                                },
                                ns = [],
                                no = (e) => {
                                    var t = ns.length;
                                    return ns.push(e), t;
                                },
                                nl = (e, t) => {
                                    for (var n = Array(e), r = 0; r < e; ++r)
                                        n[r] = tf(R[(t + 4 * r) >> 2], "parameter " + r);
                                    return n;
                                },
                                nc = Reflect.construct,
                                nu = [],
                                nd = {},
                                nf = () => {
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
                                                _: E || "./this.program",
                                            };
                                        for (e in nd) void 0 === nd[e] ? delete t[e] : (t[e] = nd[e]);
                                        var n = [];
                                        for (e in t) n.push(`${e}=${t[e]}`);
                                        tZ = n;
                                    }
                                    return tZ;
                                },
                                np = (e) => 0 == e % 4 && (0 != e % 100 || 0 == e % 400),
                                n_ = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                                nh = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                                nm = (e, t, n, r) => {
                                    function i(e, t, n) {
                                        for (e = "number" == typeof e ? e.toString() : e || ""; e.length < t; )
                                            e = n[0] + e;
                                        return e;
                                    }

                                    function a(e, t) {
                                        return i(e, t, "0");
                                    }

                                    function s(e, t) {
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
                                                r = (np(e.getFullYear()) ? n_ : nh)[n];
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
                                            0 >= s(t, e)
                                                ? 0 >= s(n, e)
                                                    ? e.getFullYear() + 1
                                                    : e.getFullYear()
                                                : e.getFullYear() - 1
                                        );
                                    }
                                    var c = R[(r + 40) >> 2];
                                    for (var u in ((r = {
                                        pc: N[r >> 2],
                                        oc: N[(r + 4) >> 2],
                                        Da: N[(r + 8) >> 2],
                                        Qa: N[(r + 12) >> 2],
                                        Ea: N[(r + 16) >> 2],
                                        ca: N[(r + 20) >> 2],
                                        R: N[(r + 24) >> 2],
                                        ba: N[(r + 28) >> 2],
                                        Nc: N[(r + 32) >> 2],
                                        nc: N[(r + 36) >> 2],
                                        qc: c && c ? el(S, c) : "",
                                    }),
                                    (n = n ? el(S, n) : ""),
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
                                        n = n.replace(RegExp(u, "g"), c[u]);
                                    var d = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                                        f =
                                            "January February March April May June July August September October November December".split(
                                                " ",
                                            );
                                    for (u in ((c = {
                                        "%a": (e) => d[e.R].substring(0, 3),
                                        "%A": (e) => d[e.R],
                                        "%b": (e) => f[e.Ea].substring(0, 3),
                                        "%B": (e) => f[e.Ea],
                                        "%C": (e) => a(((e.ca + 1900) / 100) | 0, 2),
                                        "%d": (e) => a(e.Qa, 2),
                                        "%e": (e) => i(e.Qa, 2, " "),
                                        "%g": (e) => l(e).toString().substring(2),
                                        "%G": l,
                                        "%H": (e) => a(e.Da, 2),
                                        "%I": (e) => (0 == (e = e.Da) ? (e = 12) : 12 < e && (e -= 12), a(e, 2)),
                                        "%j": (e) => {
                                            for (
                                                var t = 0, n = 0;
                                                n <= e.Ea - 1;
                                                t += (np(e.ca + 1900) ? n_ : nh)[n++]
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
                                                    (4 == (n = (e.R + 371 - e.ba) % 7) ||
                                                        (3 == n && np(e.ca)) ||
                                                        (t = 1));
                                            else {
                                                t = 52;
                                                var n = (e.R + 7 - e.ba - 1) % 7;
                                                (4 == n || (5 == n && np((e.ca % 400) - 1))) && t++;
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
                                                String("0000" + (((e = Math.abs(e) / 60) / 60) * 100 + (e % 60))).slice(
                                                    -4,
                                                )
                                            );
                                        },
                                        "%Z": (e) => e.qc,
                                        "%%": () => "%",
                                    }),
                                    (n = n.replace(/%%/g, "\0\0")),
                                    c))
                                        n.includes(u) && (n = n.replace(RegExp(u, "g"), c[u](r)));
                                    return (u = ef((n = n.replace(/\0\0/g, "%")), !1)).length > t
                                        ? 0
                                        : (I.set(u, e), u.length - 1);
                                };
                            [44].forEach((e) => {
                                (eN[e] = new eC(e)), (eN[e].stack = "<generic error, no stack>");
                            }),
                                (eS = Array(4096)),
                                eY(ey, "/"),
                                eK("/tmp"),
                                eK("/home"),
                                eK("/home/web_user"),
                                (function () {
                                    eK("/dev"),
                                        eH(259, {
                                            read: () => 0,
                                            write: (e, t, n, r) => r,
                                        }),
                                        ez("/dev/null", 259),
                                        e_(1280, em),
                                        e_(1536, eg),
                                        ez("/dev/tty", 1280),
                                        ez("/dev/tty1", 1536);
                                    var e = new Uint8Array(1024),
                                        t = 0,
                                        n = () => (0 === t && (t = ea(e).byteLength), e[--t]);
                                    e$("random", n), e$("urandom", n), eK("/dev/shm"), eK("/dev/shm/tmp");
                                })(),
                                (function () {
                                    eK("/proc");
                                    var e = eK("/proc/self");
                                    eK("/proc/self/fd"),
                                        eY(
                                            {
                                                U() {
                                                    var t = ej(e, "fd", 16895, 73);
                                                    return (
                                                        (t.j = {
                                                            ja(e, t) {
                                                                var n = eG(+t);
                                                                return ((e = {
                                                                    parent: null,
                                                                    U: {
                                                                        lb: "fake",
                                                                    },
                                                                    j: {
                                                                        la: () => n.path,
                                                                    },
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
                                (e2 = a.BindingError =
                                    class extends Error {
                                        constructor(e) {
                                            super(e), (this.name = "BindingError");
                                        }
                                    }),
                                tt.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
                                (a.count_emval_handles = () => tt.length / 2 - 5 - te.length),
                                (e3 = a.PureVirtualError = ti("PureVirtualError"));
                            for (var ng = Array(256), nE = 0; 256 > nE; ++nE) ng[nE] = String.fromCharCode(nE);
                            (e6 = ng),
                                (a.getInheritedInstanceCount = () => Object.keys(tl).length),
                                (a.getLiveInheritedInstances = () => {
                                    var e,
                                        t = [];
                                    for (e in tl) tl.hasOwnProperty(e) && t.push(tl[e]);
                                    return t;
                                }),
                                (a.flushPendingDeletes = to),
                                (a.setDelayFunction = (e) => {
                                    (e4 = e), ts.length && e4 && e4(to);
                                }),
                                (e5 = a.InternalError =
                                    class extends Error {
                                        constructor(e) {
                                            super(e), (this.name = "InternalError");
                                        }
                                    }),
                                Object.assign(tR.prototype, {
                                    isAliasOf: function (e) {
                                        if (!(this instanceof tR && e instanceof tR)) return !1;
                                        var t = this.g.u.i,
                                            n = this.g.o;
                                        e.g = e.g;
                                        var r = e.g.u.i;
                                        for (e = e.g.o; t.C; ) (n = t.ma(n)), (t = t.C);
                                        for (; r.C; ) (e = r.ma(e)), (r = r.C);
                                        return t === r && n === e;
                                    },
                                    clone: function () {
                                        if ((this.g.o || tN(this), this.g.ha)) return (this.g.count.value += 1), this;
                                        var e = ty,
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
                                        if ((this.g.o || tN(this), this.g.ea && !this.g.ha))
                                            throw new e2("Object already scheduled for deletion");
                                        tp(this);
                                        var e = this.g;
                                        --e.count.value,
                                            0 === e.count.value && (e.F ? e.J.O(e.F) : e.u.i.O(e.o)),
                                            this.g.ha || ((this.g.F = void 0), (this.g.o = void 0));
                                    },
                                    isDeleted: function () {
                                        return !this.g.o;
                                    },
                                    deleteLater: function () {
                                        if ((this.g.o || tN(this), this.g.ea && !this.g.ha))
                                            throw new e2("Object already scheduled for deletion");
                                        return ts.push(this), 1 === ts.length && e4 && e4(to), (this.g.ea = !0), this;
                                    },
                                }),
                                Object.assign(tU.prototype, {
                                    Rb(e) {
                                        return this.qb && (e = this.qb(e)), e;
                                    },
                                    ab(e) {
                                        this.O?.(e);
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: tv,
                                    fromWireType: function (e) {
                                        function t() {
                                            return this.sa
                                                ? tE(this.i.M, {
                                                      u: this.hc,
                                                      o: n,
                                                      J: this,
                                                      F: e,
                                                  })
                                                : tE(this.i.M, {
                                                      u: this,
                                                      o: e,
                                                  });
                                        }
                                        var n = this.Rb(e);
                                        if (!n) return this.ab(e), null;
                                        var r = tg(this.i, n);
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
                                              ? tE(r.i.M, {
                                                    u: r,
                                                    o: i,
                                                    J: this,
                                                    F: e,
                                                })
                                              : tE(r.i.M, {
                                                    u: r,
                                                    o: i,
                                                });
                                    },
                                }),
                                (tV = a.UnboundTypeError = ti("UnboundTypeError"));
                            var ny = {
                                    __syscall_fcntl64: function (e, t, n) {
                                        e8 = n;
                                        try {
                                            var r = eG(e);
                                            switch (t) {
                                                case 0:
                                                    var i = J();
                                                    if (0 > i) break;
                                                    for (; eA[i]; ) i++;
                                                    return eF(r, i).W;
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
                                                    return (T[((i = J()) + 0) >> 1] = 2), 0;
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
                                            var r = eG(e);
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
                                                        (N[i >> 2] = 25856),
                                                            (N[(i + 4) >> 2] = 5),
                                                            (N[(i + 8) >> 2] = 191),
                                                            (N[(i + 12) >> 2] = 35387);
                                                        for (var a = 0; 32 > a; a++) I[i + a + 17] = e[a] || 0;
                                                    }
                                                    return 0;
                                                case 21506:
                                                case 21507:
                                                case 21508:
                                                    if (!r.s) return -59;
                                                    if (r.s.V.Yb)
                                                        for (i = J(), e = [], a = 0; 32 > a; a++) e.push(I[i + a + 17]);
                                                    return 0;
                                                case 21519:
                                                    if (!r.s) return -59;
                                                    return (N[(i = J()) >> 2] = 0);
                                                case 21520:
                                                    return r.s ? -28 : -59;
                                                case 21531:
                                                    if (((i = J()), !r.m.Wb)) throw new eC(59);
                                                    return r.m.Wb(r, t, i);
                                                case 21523:
                                                    if (!r.s) return -59;
                                                    return (
                                                        r.s.V.Zb &&
                                                            ((a = [24, 80]),
                                                            (T[(i = J()) >> 1] = a[0]),
                                                            (T[(i + 2) >> 1] = a[1])),
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
                                            var i = (t = t ? el(S, t) : "");
                                            if ("/" === i.charAt(0)) t = i;
                                            else {
                                                var a = -100 === e ? "/" : eG(e).path;
                                                if (0 == i.length) throw new eC(44);
                                                t = et(a + "/" + i);
                                            }
                                            var s = r ? J() : 0;
                                            return eZ(t, n, s).W;
                                        } catch (e) {
                                            if (void 0 === e7 || "ErrnoError" !== e.name) throw e;
                                            return -e.$;
                                        }
                                    },
                                    _abort_js: () => {
                                        F("");
                                    },
                                    _embind_create_inheriting_constructor: (e, t, n) => {
                                        (e = ta(e)), (t = tf(t, "wrapper")), (n = tn(n));
                                        var r = t.i,
                                            i = r.M,
                                            a = r.C.M,
                                            s = r.C.constructor;
                                        return (
                                            (e = e9(e, function (...e) {
                                                r.C.pb.forEach(
                                                    function (e) {
                                                        if (this[e] === a[e])
                                                            throw new e3(
                                                                `Pure virtual function ${e} must be implemented in JavaScript`,
                                                            );
                                                    }.bind(this),
                                                ),
                                                    Object.defineProperty(this, "__parent", {
                                                        value: i,
                                                    }),
                                                    this.__construct(...e);
                                            })),
                                            (i.__construct = function (...e) {
                                                if (this === i) throw new e2("Pass correct 'this' to __construct");
                                                (e = s.implement(this, ...e)), tp(e);
                                                var t = e.g;
                                                if (
                                                    (e.notifyOnDestruction(),
                                                    (t.ha = !0),
                                                    Object.defineProperties(this, {
                                                        g: {
                                                            value: t,
                                                        },
                                                    }),
                                                    ty(this),
                                                    (e = tc(r, (e = t.o))),
                                                    tl.hasOwnProperty(e))
                                                )
                                                    throw new e2(`Tried to register registered instance: ${e}`);
                                                tl[e] = this;
                                            }),
                                            (i.__destruct = function () {
                                                if (this === i) throw new e2("Pass correct 'this' to __destruct");
                                                tp(this);
                                                var e = this.g.o;
                                                if (((e = tc(r, e)), tl.hasOwnProperty(e))) delete tl[e];
                                                else throw new e2(`Tried to unregister unregistered instance: ${e}`);
                                            }),
                                            (e.prototype = Object.create(i)),
                                            Object.assign(e.prototype, n),
                                            tr(e)
                                        );
                                    },
                                    _embind_finalize_value_object: (e) => {
                                        var t = tb[e];
                                        delete tb[e];
                                        var n = t.Na,
                                            r = t.O,
                                            i = t.eb;
                                        tS([e], i.map((e) => e.Ub).concat(i.map((e) => e.kc)), (e) => {
                                            var a = {};
                                            return (
                                                i.forEach((t, n) => {
                                                    var r = e[n],
                                                        s = t.Sb,
                                                        o = t.Tb,
                                                        l = e[n + i.length],
                                                        c = t.jc,
                                                        u = t.lc;
                                                    a[t.Ob] = {
                                                        read: (e) => r.fromWireType(s(o, e)),
                                                        write: (e, t) => {
                                                            var n = [];
                                                            c(u, e, l.toWireType(n, t)), tO(n);
                                                        },
                                                    };
                                                }),
                                                [
                                                    {
                                                        name: t.name,
                                                        fromWireType: (e) => {
                                                            var t,
                                                                n = {};
                                                            for (t in a) n[t] = a[t].read(e);
                                                            return r(e), n;
                                                        },
                                                        toWireType: (e, t) => {
                                                            for (var i in a)
                                                                if (!(i in t)) throw TypeError(`Missing field: "${i}"`);
                                                            var s = n();
                                                            for (i in a) a[i].write(s, t[i]);
                                                            return null !== e && e.push(r, s), s;
                                                        },
                                                        argPackAdvance: 8,
                                                        readValueFromPointer: tv,
                                                        L: r,
                                                    },
                                                ]
                                            );
                                        });
                                    },
                                    _embind_register_bigint: () => {},
                                    _embind_register_bool: (e, t, n, r) => {
                                        tC(e, {
                                            name: (t = ta(t)),
                                            fromWireType: function (e) {
                                                return !!e;
                                            },
                                            toWireType: function (e, t) {
                                                return t ? n : r;
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: function (e) {
                                                return this.fromWireType(S[e]);
                                            },
                                            L: null,
                                        });
                                    },
                                    _embind_register_class: (e, t, n, r, i, a, s, o, l, c, u, d, f) => {
                                        (u = ta(u)), (a = tK(i, a)), (o &&= tK(s, o)), (c &&= tK(l, c)), (f = tK(d, f));
                                        var p = tD(u);
                                        tP(p, function () {
                                            tz(`Cannot construct ${u} due to unbound types`, [r]);
                                        }),
                                            tS([e, t, n], r ? [r] : [], (t) => {
                                                if (((t = t[0]), r))
                                                    var n,
                                                        i = t.i,
                                                        s = i.M;
                                                else s = tR.prototype;
                                                var l = Object.create(s, {
                                                    constructor: {
                                                        value: (t = e9(u, function (...e) {
                                                            if (Object.getPrototypeOf(this) !== l)
                                                                throw new e2("Use 'new' to construct " + u);
                                                            if (void 0 === d.Z)
                                                                throw new e2(u + " has no accessible constructor");
                                                            var t = d.Z[e.length];
                                                            if (void 0 === t)
                                                                throw new e2(
                                                                    `Tried to invoke ctor of ${u} with invalid number of parameters (${e.length}) - expected (${Object.keys(d.Z).toString()}) parameters instead!`,
                                                                );
                                                            return t.apply(this, e);
                                                        })),
                                                    },
                                                });
                                                t.prototype = l;
                                                var d = new tx(u, t, l, f, i, a, o, c);
                                                return (
                                                    d.C && ((n = d.C).na ?? (n.na = []), d.C.na.push(d)),
                                                    (i = new tU(u, d, !0, !1, !1)),
                                                    (n = new tU(u + "*", d, !1, !1, !1)),
                                                    (s = new tU(u + " const*", d, !1, !0, !1)),
                                                    (tm[e] = {
                                                        pointerType: n,
                                                        Hb: s,
                                                    }),
                                                    tF(p, t),
                                                    [i, n, s]
                                                );
                                            });
                                    },
                                    _embind_register_class_class_function: (e, t, n, r, i, a, s) => {
                                        var o = tQ(n, r);
                                        (t = t$((t = ta(t)))),
                                            (a = tK(i, a)),
                                            tS([], [e], (e) => {
                                                function r() {
                                                    tz(`Cannot call ${i} due to unbound types`, o);
                                                }
                                                e = e[0];
                                                var i = `${e.name}.${t}`;
                                                t.startsWith("@@") && (t = Symbol[t.substring(2)]);
                                                var l = e.i.constructor;
                                                return (
                                                    void 0 === l[t]
                                                        ? ((r.da = n - 1), (l[t] = r))
                                                        : (tw(l, t, i), (l[t].A[n - 1] = r)),
                                                    tS([], o, (r) => {
                                                        if (
                                                            ((r = tX(i, [r[0], null].concat(r.slice(1)), null, a, s)),
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
                                    _embind_register_class_class_property: (e, t, n, r, i, a, s, o) => {
                                        (t = ta(t)),
                                            (a = tK(i, a)),
                                            tS([], [e], (e) => {
                                                e = e[0];
                                                var i = `${e.name}.${t}`,
                                                    l = {
                                                        get() {
                                                            tz(`Cannot access ${i} due to unbound types`, [n]);
                                                        },
                                                        enumerable: !0,
                                                        configurable: !0,
                                                    };
                                                return (
                                                    (l.set = o
                                                        ? () => {
                                                              tz(`Cannot access ${i} due to unbound types`, [n]);
                                                          }
                                                        : () => {
                                                              throw new e2(`${i} is a read-only property`);
                                                          }),
                                                    Object.defineProperty(e.i.constructor, t, l),
                                                    tS([], [n], (n) => {
                                                        n = n[0];
                                                        var i = {
                                                            get: () => n.fromWireType(a(r)),
                                                            enumerable: !0,
                                                        };
                                                        return (
                                                            o &&
                                                                ((o = tK(s, o)),
                                                                (i.set = (e) => {
                                                                    var t = [];
                                                                    o(r, n.toWireType(t, e)), tO(t);
                                                                })),
                                                            Object.defineProperty(e.i.constructor, t, i),
                                                            []
                                                        );
                                                    }),
                                                    []
                                                );
                                            });
                                    },
                                    _embind_register_class_constructor: (e, t, n, r, i, a) => {
                                        var s = tQ(t, n);
                                        (i = tK(r, i)),
                                            tS([], [e], (e) => {
                                                e = e[0];
                                                var n = `constructor ${e.name}`;
                                                if ((void 0 === e.i.Z && (e.i.Z = []), void 0 !== e.i.Z[t - 1]))
                                                    throw new e2(
                                                        `Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
                                                    );
                                                return (
                                                    (e.i.Z[t - 1] = () => {
                                                        tz(`Cannot construct ${e.name} due to unbound types`, s);
                                                    }),
                                                    tS(
                                                        [],
                                                        s,
                                                        (r) => (
                                                            r.splice(1, 0, null),
                                                            (e.i.Z[t - 1] = tX(n, r, null, i, a)),
                                                            []
                                                        ),
                                                    ),
                                                    []
                                                );
                                            });
                                    },
                                    _embind_register_class_function: (e, t, n, r, i, a, s, o) => {
                                        var l = tQ(n, r);
                                        (t = t$((t = ta(t)))),
                                            (a = tK(i, a)),
                                            tS([], [e], (e) => {
                                                function r() {
                                                    tz(`Cannot call ${i} due to unbound types`, l);
                                                }
                                                e = e[0];
                                                var i = `${e.name}.${t}`;
                                                t.startsWith("@@") && (t = Symbol[t.substring(2)]), o && e.i.pb.push(t);
                                                var c = e.i.M,
                                                    u = c[t];
                                                return (
                                                    void 0 === u ||
                                                    (void 0 === u.A && u.className !== e.name && u.da === n - 2)
                                                        ? ((r.da = n - 2), (r.className = e.name), (c[t] = r))
                                                        : (tw(c, t, i), (c[t].A[n - 2] = r)),
                                                    tS(
                                                        [],
                                                        l,
                                                        (r) => (
                                                            (r = tX(i, r, e, a, s)),
                                                            void 0 === c[t].A
                                                                ? ((r.da = n - 2), (c[t] = r))
                                                                : (c[t].A[n - 2] = r),
                                                            []
                                                        ),
                                                    ),
                                                    []
                                                );
                                            });
                                    },
                                    _embind_register_class_property: (e, t, n, r, i, a, s, o, l, c) => {
                                        (t = ta(t)),
                                            (i = tK(r, i)),
                                            tS([], [e], (e) => {
                                                e = e[0];
                                                var r = `${e.name}.${t}`,
                                                    u = {
                                                        get() {
                                                            tz(`Cannot access ${r} due to unbound types`, [n, s]);
                                                        },
                                                        enumerable: !0,
                                                        configurable: !0,
                                                    };
                                                return (
                                                    (u.set = l
                                                        ? () => tz(`Cannot access ${r} due to unbound types`, [n, s])
                                                        : () => {
                                                              throw new e2(r + " is a read-only property");
                                                          }),
                                                    Object.defineProperty(e.i.M, t, u),
                                                    tS([], l ? [n, s] : [n], (n) => {
                                                        var s = n[0],
                                                            u = {
                                                                get() {
                                                                    var t = tJ(this, e, r + " getter");
                                                                    return s.fromWireType(i(a, t));
                                                                },
                                                                enumerable: !0,
                                                            };
                                                        if (l) {
                                                            l = tK(o, l);
                                                            var d = n[1];
                                                            u.set = function (t) {
                                                                var n = tJ(this, e, r + " setter"),
                                                                    i = [];
                                                                l(c, n, d.toWireType(i, t)), tO(i);
                                                            };
                                                        }
                                                        return Object.defineProperty(e.i.M, t, u), [];
                                                    }),
                                                    []
                                                );
                                            });
                                    },
                                    _embind_register_emval: (e) => tC(e, t1),
                                    _embind_register_enum: (e, t, n, r) => {
                                        function i() {}
                                        (t = ta(t)),
                                            (i.values = {}),
                                            tC(e, {
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
                                            tP(t, i);
                                    },
                                    _embind_register_enum_value: (e, t, n) => {
                                        var r = tf(e, "enum");
                                        (t = ta(t)),
                                            (e = r.constructor),
                                            (r = Object.create(r.constructor.prototype, {
                                                value: {
                                                    value: n,
                                                },
                                                constructor: {
                                                    value: e9(`${r.name}_${t}`, function () {}),
                                                },
                                            })),
                                            (e.values[n] = r),
                                            (e[t] = r);
                                    },
                                    _embind_register_float: (e, t, n) => {
                                        tC(e, {
                                            name: (t = ta(t)),
                                            fromWireType: (e) => e,
                                            toWireType: (e, t) => t,
                                            argPackAdvance: 8,
                                            readValueFromPointer: t6(t, n),
                                            L: null,
                                        });
                                    },
                                    _embind_register_function: (e, t, n, r, i, a) => {
                                        var s = tQ(t, n);
                                        (e = t$((e = ta(e)))),
                                            (i = tK(r, i)),
                                            tP(
                                                e,
                                                function () {
                                                    tz(`Cannot call ${e} due to unbound types`, s);
                                                },
                                                t - 1,
                                            ),
                                            tS(
                                                [],
                                                s,
                                                (n) => (
                                                    tF(e, tX(e, [n[0], null].concat(n.slice(1)), null, i, a), t - 1), []
                                                ),
                                            );
                                    },
                                    _embind_register_integer: (e, t, n, r, i) => {
                                        if (((t = ta(t)), -1 === i && (i = 0xffffffff), (i = (e) => e), 0 === r)) {
                                            var a = 32 - 8 * n;
                                            i = (e) => (e << a) >>> a;
                                        }
                                        var s = t.includes("unsigned")
                                            ? function (e, t) {
                                                  return t >>> 0;
                                              }
                                            : function (e, t) {
                                                  return t;
                                              };
                                        tC(e, {
                                            name: t,
                                            fromWireType: i,
                                            toWireType: s,
                                            argPackAdvance: 8,
                                            readValueFromPointer: t4(t, n, 0 !== r),
                                            L: null,
                                        });
                                    },
                                    _embind_register_memory_view: (e, t, n) => {
                                        function r(e) {
                                            return new i(I.buffer, R[(e + 4) >> 2], R[e >> 2]);
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
                                        tC(
                                            e,
                                            {
                                                name: (n = ta(n)),
                                                fromWireType: r,
                                                argPackAdvance: 8,
                                                readValueFromPointer: r,
                                            },
                                            {
                                                Vb: !0,
                                            },
                                        );
                                    },
                                    _embind_register_std_string: (e, t) => {
                                        var n = "std::string" === (t = ta(t));
                                        tC(e, {
                                            name: t,
                                            fromWireType: function (e) {
                                                var t = R[e >> 2],
                                                    r = e + 4;
                                                if (n)
                                                    for (var i = r, a = 0; a <= t; ++a) {
                                                        var s = r + a;
                                                        if (a == t || 0 == S[s]) {
                                                            if (((i = i ? el(S, i, s - i) : ""), void 0 === o))
                                                                var o = i;
                                                            else (o += "\0"), (o += i);
                                                            i = s + 1;
                                                        }
                                                    }
                                                else {
                                                    for (a = 0, o = Array(t); a < t; ++a)
                                                        o[a] = String.fromCharCode(S[r + a]);
                                                    o = o.join("");
                                                }
                                                return nO(e), o;
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
                                                var i = n && r ? eu(t) : t.length,
                                                    a = nv(4 + i + 1),
                                                    s = a + 4;
                                                if (((R[a >> 2] = i), n && r)) ed(t, S, s, i + 1);
                                                else if (r)
                                                    for (r = 0; r < i; ++r) {
                                                        var o = t.charCodeAt(r);
                                                        if (255 < o)
                                                            throw (
                                                                (nO(s),
                                                                new e2(
                                                                    "String has UTF-16 code units that do not fit in 8 bits",
                                                                ))
                                                            );
                                                        S[s + r] = o;
                                                    }
                                                else for (r = 0; r < i; ++r) S[s + r] = t[r];
                                                return null !== e && e.push(nO, a), a;
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: tv,
                                            L(e) {
                                                nO(e);
                                            },
                                        });
                                    },
                                    _embind_register_std_wstring: (e, t, n) => {
                                        if (((n = ta(n)), 2 === t))
                                            var r = t7,
                                                i = t8,
                                                a = t9,
                                                s = (e) => C[e >> 1];
                                        else 4 === t && ((r = ne), (i = nt), (a = nn), (s = (e) => R[e >> 2]));
                                        tC(e, {
                                            name: n,
                                            fromWireType: (e) => {
                                                for (var n, i = R[e >> 2], a = e + 4, o = 0; o <= i; ++o) {
                                                    var l = e + 4 + o * t;
                                                    (o == i || 0 == s(l)) &&
                                                        ((a = r(a, l - a)),
                                                        void 0 === n ? (n = a) : ((n += "\0"), (n += a)),
                                                        (a = l + t));
                                                }
                                                return nO(e), n;
                                            },
                                            toWireType: (e, r) => {
                                                if ("string" != typeof r)
                                                    throw new e2(`Cannot pass non-string to C++ string type ${n}`);
                                                var s = a(r),
                                                    o = nv(4 + s + t);
                                                return (
                                                    (R[o >> 2] = s / t),
                                                    i(r, o + 4, s + t),
                                                    null !== e && e.push(nO, o),
                                                    o
                                                );
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: tv,
                                            L(e) {
                                                nO(e);
                                            },
                                        });
                                    },
                                    _embind_register_value_object: (e, t, n, r, i, a) => {
                                        tb[e] = {
                                            name: ta(t),
                                            Na: tK(n, r),
                                            O: tK(i, a),
                                            eb: [],
                                        };
                                    },
                                    _embind_register_value_object_field: (e, t, n, r, i, a, s, o, l, c) => {
                                        tb[e].eb.push({
                                            Ob: ta(t),
                                            Ub: n,
                                            Sb: tK(r, i),
                                            Tb: a,
                                            kc: s,
                                            jc: tK(o, l),
                                            lc: c,
                                        });
                                    },
                                    _embind_register_void: (e, t) => {
                                        tC(e, {
                                            Ic: !0,
                                            name: (t = ta(t)),
                                            argPackAdvance: 0,
                                            fromWireType: () => {},
                                            toWireType: () => {},
                                        });
                                    },
                                    _emscripten_get_now_is_monotonic: () => 1,
                                    _emscripten_memcpy_js: (e, t, n) => S.copyWithin(e, t, t + n),
                                    _emval_as: (e, t, n) => ((e = tn(e)), nr((t = tf(t, "emval::as")), n, e)),
                                    _emval_call_method: (e, t, n, r, i) => (
                                        (e = ns[e]), (t = tn(t)), e(t, t[(n = na(n))], r, i)
                                    ),
                                    _emval_decref: t0,
                                    _emval_get_method_caller: (e, t, n) => {
                                        var r = nl(e, t),
                                            i = r.shift(),
                                            a = Array(--e);
                                        return no(
                                            e9(
                                                (t = `methodCaller<(${r.map((e) => e.name).join(", ")}) => ${i.name}>`),
                                                (t, s, o, l) => {
                                                    for (var c = 0, u = 0; u < e; ++u)
                                                        (a[u] = r[u].readValueFromPointer(l + c)),
                                                            (c += r[u].argPackAdvance);
                                                    return nr(i, o, (t = 1 === n ? nc(s, a) : s.apply(t, a)));
                                                },
                                            ),
                                        );
                                    },
                                    _emval_get_module_property: (e) => tr(a[(e = na(e))]),
                                    _emval_get_property: (e, t) => ((e = tn(e)), tr(e[(t = tn(t))])),
                                    _emval_incref: (e) => {
                                        9 < e && (tt[e + 1] += 1);
                                    },
                                    _emval_new_array: () => tr([]),
                                    _emval_new_cstring: (e) => tr(na(e)),
                                    _emval_new_object: () => tr({}),
                                    _emval_run_destructors: (e) => {
                                        tO(tn(e)), t0(e);
                                    },
                                    _emval_set_property: (e, t, n) => {
                                        (e = tn(e)), (t = tn(t)), (n = tn(n)), (e[t] = n);
                                    },
                                    _emval_take_value: (e, t) =>
                                        tr((e = (e = tf(e, "_emval_take_value")).readValueFromPointer(t))),
                                    emscripten_asm_const_int: (e, t, n) => {
                                        nu.length = 0;
                                        for (var r; (r = S[t++]); ) {
                                            var i = 105 != r;
                                            (i &= 112 != r),
                                                (n += i && n % 8 ? 4 : 0),
                                                nu.push(112 == r ? R[n >> 2] : 105 == r ? N[n >> 2] : P[n >> 3]),
                                                (n += i ? 8 : 4);
                                        }
                                        return Q[e](...nu);
                                    },
                                    emscripten_date_now: () => Date.now(),
                                    emscripten_get_now: () => performance.now(),
                                    emscripten_resize_heap: (e) => {
                                        var t = S.length;
                                        if (0x80000000 < (e >>>= 0)) return !1;
                                        for (var n = 1; 4 >= n; n *= 2) {
                                            var r = t * (1 + 0.2 / n);
                                            r = Math.min(r, e + 0x6000000);
                                            var i = Math;
                                            r = Math.max(e, r);
                                            e: {
                                                i =
                                                    (i.min.call(i, 0x80000000, r + ((65536 - (r % 65536)) % 65536)) -
                                                        A.buffer.byteLength +
                                                        65535) /
                                                    65536;
                                                try {
                                                    A.grow(i), x();
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
                                        var n = 0;
                                        return (
                                            nf().forEach((r, i) => {
                                                var a = t + n;
                                                for (i = R[(e + 4 * i) >> 2] = a, a = 0; a < r.length; ++a)
                                                    I[i++] = r.charCodeAt(a);
                                                (I[i] = 0), (n += r.length + 1);
                                            }),
                                            0
                                        );
                                    },
                                    environ_sizes_get: (e, t) => {
                                        var n = nf();
                                        R[e >> 2] = n.length;
                                        var r = 0;
                                        return n.forEach((e) => (r += e.length + 1)), (R[t >> 2] = r), 0;
                                    },
                                    fd_close: function (e) {
                                        try {
                                            var t = eG(e);
                                            if (null === t.W) throw new eC(8);
                                            t.Ka && (t.Ka = null);
                                            try {
                                                t.m.close && t.m.close(t);
                                            } catch (e) {
                                                throw e;
                                            } finally {
                                                eA[t.W] = null;
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
                                                var i = eG(e);
                                                e = t;
                                                for (var a, s = (t = 0); s < n; s++) {
                                                    var o = R[e >> 2],
                                                        l = R[(e + 4) >> 2];
                                                    e += 8;
                                                    var c = i,
                                                        u = a,
                                                        d = I;
                                                    if (0 > l || 0 > u) throw new eC(28);
                                                    if (null === c.W || 1 == (2097155 & c.flags)) throw new eC(8);
                                                    if (16384 == (61440 & c.node.mode)) throw new eC(31);
                                                    if (!c.m.read) throw new eC(28);
                                                    var f = void 0 !== u;
                                                    if (f) {
                                                        if (!c.seekable) throw new eC(70);
                                                    } else u = c.position;
                                                    var p = c.m.read(c, d, o, l, u);
                                                    f || (c.position += p);
                                                    var _ = p;
                                                    if (0 > _) {
                                                        var h = -1;
                                                        break e;
                                                    }
                                                    if (((t += _), _ < l)) break;
                                                    void 0 !== a && (a += _);
                                                }
                                                h = t;
                                            }
                                            return (R[r >> 2] = h), 0;
                                        } catch (e) {
                                            if (void 0 === e7 || "ErrnoError" !== e.name) throw e;
                                            return e.$;
                                        }
                                    },
                                    fd_seek: function (e, t, n, r, i) {
                                        t = (n + 2097152) >>> 0 < 4194305 - !!t ? (t >>> 0) + 0x100000000 * n : NaN;
                                        try {
                                            if (isNaN(t)) return 61;
                                            var a = eG(e);
                                            return (
                                                eQ(a, t, r),
                                                (Z = [
                                                    a.position >>> 0,
                                                    ((X = a.position),
                                                    1 <= +Math.abs(X)
                                                        ? 0 < X
                                                            ? Math.floor(X / 0x100000000) >>> 0
                                                            : ~~Math.ceil((X - (~~X >>> 0)) / 0x100000000) >>> 0
                                                        : 0),
                                                ]),
                                                (N[i >> 2] = Z[0]),
                                                (N[(i + 4) >> 2] = Z[1]),
                                                a.Ka && 0 === t && 0 === r && (a.Ka = null),
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
                                                var i = eG(e);
                                                e = t;
                                                for (var a, s = (t = 0); s < n; s++) {
                                                    var o = R[e >> 2],
                                                        l = R[(e + 4) >> 2];
                                                    e += 8;
                                                    var c = i,
                                                        u = o,
                                                        d = l,
                                                        f = a,
                                                        p = I;
                                                    if (0 > d || 0 > f) throw new eC(28);
                                                    if (null === c.W || 0 == (2097155 & c.flags)) throw new eC(8);
                                                    if (16384 == (61440 & c.node.mode)) throw new eC(31);
                                                    if (!c.m.write) throw new eC(28);
                                                    c.seekable && 1024 & c.flags && eQ(c, 0, 2);
                                                    var _ = void 0 !== f;
                                                    if (_) {
                                                        if (!c.seekable) throw new eC(70);
                                                    } else f = c.position;
                                                    var h = c.m.write(c, p, u, d, f, void 0);
                                                    _ || (c.position += h);
                                                    var m = h;
                                                    if (0 > m) {
                                                        var g = -1;
                                                        break e;
                                                    }
                                                    (t += m), void 0 !== a && (a += m);
                                                }
                                                g = t;
                                            }
                                            return (R[r >> 2] = g), 0;
                                        } catch (e) {
                                            if (void 0 === e7 || "ErrnoError" !== e.name) throw e;
                                            return e.$;
                                        }
                                    },
                                    strftime_l: (e, t, n, r) => nm(e, t, n, r),
                                },
                                nb = (function () {
                                    function e(e) {
                                        return (
                                            (A = (nb = e.exports).memory),
                                            x(),
                                            (tG = nb.__indirect_function_table),
                                            j.unshift(nb.__wasm_call_ctors),
                                            U--,
                                            a.monitorRunDependencies?.(U),
                                            0 == U &&
                                                (null !== G && (clearInterval(G), (G = null)),
                                                V && ((e = V), (V = null), e())),
                                            nb
                                        );
                                    }
                                    var t = {
                                        env: ny,
                                        wasi_snapshot_preview1: ny,
                                    };
                                    if ((U++, a.monitorRunDependencies?.(U), a.instantiateWasm))
                                        try {
                                            return a.instantiateWasm(t, e);
                                        } catch (e) {
                                            O(`Module.instantiateWasm callback failed with error: ${e}`), i(e);
                                        }
                                    return (
                                        (B ||= H("canvas_advanced.wasm")
                                            ? "canvas_advanced.wasm"
                                            : a.locateFile
                                              ? a.locateFile("canvas_advanced.wasm", y)
                                              : y + "canvas_advanced.wasm"),
                                        q(t, function (t) {
                                            e(t.instance);
                                        }).catch(i),
                                        {}
                                    );
                                })(),
                                nO = (e) => (nO = nb.free)(e),
                                nv = (e) => (nv = nb.malloc)(e),
                                nA = (e) => (nA = nb.__getTypeName)(e),
                                nI = (a._ma_device__on_notification_unlocked = (e) =>
                                    (nI = a._ma_device__on_notification_unlocked =
                                        nb.ma_device__on_notification_unlocked)(e));
                            (a._ma_malloc_emscripten = (e, t) =>
                                (a._ma_malloc_emscripten = nb.ma_malloc_emscripten)(e, t)),
                                (a._ma_free_emscripten = (e, t) =>
                                    (a._ma_free_emscripten = nb.ma_free_emscripten)(e, t));
                            var nS = (a._ma_device_process_pcm_frames_capture__webaudio = (e, t, n) =>
                                    (nS = a._ma_device_process_pcm_frames_capture__webaudio =
                                        nb.ma_device_process_pcm_frames_capture__webaudio)(e, t, n)),
                                nT = (a._ma_device_process_pcm_frames_playback__webaudio = (e, t, n) =>
                                    (nT = a._ma_device_process_pcm_frames_playback__webaudio =
                                        nb.ma_device_process_pcm_frames_playback__webaudio)(e, t, n));

                            function nC() {
                                function e() {
                                    if (!n && ((n = !0), (a.calledRun = !0), !D)) {
                                        if (
                                            (a.noFSInit ||
                                                eJ ||
                                                ((eJ = !0),
                                                (a.stdin = a.stdin),
                                                (a.stdout = a.stdout),
                                                (a.stderr = a.stderr),
                                                a.stdin ? e$("stdin", a.stdin) : eq("/dev/tty", "/dev/stdin"),
                                                a.stdout ? e$("stdout", null, a.stdout) : eq("/dev/tty", "/dev/stdout"),
                                                a.stderr
                                                    ? e$("stderr", null, a.stderr)
                                                    : eq("/dev/tty1", "/dev/stderr"),
                                                eZ("/dev/stdin", 0),
                                                eZ("/dev/stdout", 1),
                                                eZ("/dev/stderr", 1)),
                                            (eT = !1),
                                            $(j),
                                            r(a),
                                            a.onRuntimeInitialized && a.onRuntimeInitialized(),
                                            a.postRun)
                                        )
                                            for (
                                                "function" == typeof a.postRun && (a.postRun = [a.postRun]);
                                                a.postRun.length;
                                            ) {
                                                var e = a.postRun.shift();
                                                M.unshift(e);
                                            }
                                        $(M);
                                    }
                                }
                                if (!(0 < U)) {
                                    if (a.preRun)
                                        for (
                                            "function" == typeof a.preRun && (a.preRun = [a.preRun]);
                                            a.preRun.length;
                                        )
                                            k();
                                    $(L),
                                        0 < U ||
                                            (a.setStatus
                                                ? (a.setStatus("Running..."),
                                                  setTimeout(function () {
                                                      setTimeout(function () {
                                                          a.setStatus("");
                                                      }, 1),
                                                          e();
                                                  }, 1))
                                                : e());
                                }
                            }
                            if (
                                ((a.dynCall_iiji = (e, t, n, r, i) =>
                                    (a.dynCall_iiji = nb.dynCall_iiji)(e, t, n, r, i)),
                                (a.dynCall_jiji = (e, t, n, r, i) => (a.dynCall_jiji = nb.dynCall_jiji)(e, t, n, r, i)),
                                (a.dynCall_iiiji = (e, t, n, r, i, s) =>
                                    (a.dynCall_iiiji = nb.dynCall_iiiji)(e, t, n, r, i, s)),
                                (a.dynCall_iij = (e, t, n, r) => (a.dynCall_iij = nb.dynCall_iij)(e, t, n, r)),
                                (a.dynCall_jii = (e, t, n) => (a.dynCall_jii = nb.dynCall_jii)(e, t, n)),
                                (a.dynCall_viijii = (e, t, n, r, i, s, o) =>
                                    (a.dynCall_viijii = nb.dynCall_viijii)(e, t, n, r, i, s, o)),
                                (a.dynCall_iiiiij = (e, t, n, r, i, s, o) =>
                                    (a.dynCall_iiiiij = nb.dynCall_iiiiij)(e, t, n, r, i, s, o)),
                                (a.dynCall_iiiiijj = (e, t, n, r, i, s, o, l, c) =>
                                    (a.dynCall_iiiiijj = nb.dynCall_iiiiijj)(e, t, n, r, i, s, o, l, c)),
                                (a.dynCall_iiiiiijj = (e, t, n, r, i, s, o, l, c, u) =>
                                    (a.dynCall_iiiiiijj = nb.dynCall_iiiiiijj)(e, t, n, r, i, s, o, l, c, u)),
                                (V = function e() {
                                    n || nC(), n || (V = e);
                                }),
                                a.preInit)
                            )
                                for (
                                    "function" == typeof a.preInit && (a.preInit = [a.preInit]);
                                    0 < a.preInit.length;
                                )
                                    a.preInit.pop()();
                            return nC(), s;
                        };
                    })();
                },
                (e) => {
                    e.exports = JSON.parse(
                        '{"name":"@rive-app/canvas","version":"2.32.0","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}',
                    );
                },
                (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            Animation: () => r.Animation,
                        });
                    var r = n(4);
                },
                (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            Animation: () => r,
                        });
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
                            AudioAssetWrapper: () => a.AudioAssetWrapper,
                            AudioWrapper: () => a.AudioWrapper,
                            BLANK_URL: () => i.BLANK_URL,
                            CustomFileAssetLoaderWrapper: () => a.CustomFileAssetLoaderWrapper,
                            FileAssetWrapper: () => a.FileAssetWrapper,
                            FileFinalizer: () => a.FileFinalizer,
                            FontAssetWrapper: () => a.FontAssetWrapper,
                            FontWrapper: () => a.FontWrapper,
                            ImageAssetWrapper: () => a.ImageAssetWrapper,
                            ImageWrapper: () => a.ImageWrapper,
                            createFinalization: () => a.createFinalization,
                            finalizationRegistry: () => a.finalizationRegistry,
                            registerTouchInteractions: () => r.registerTouchInteractions,
                            sanitizeUrl: () => i.sanitizeUrl,
                        });
                    var r = n(6),
                        i = n(7),
                        a = n(8);
                },
                (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            registerTouchInteractions: () => a,
                        });
                    var r = void 0,
                        i = function (e, t, n) {
                            var r,
                                i,
                                a = [];
                            if (
                                ["touchstart", "touchmove"].indexOf(e.type) > -1 &&
                                (null == (r = e.changedTouches) ? void 0 : r.length)
                            ) {
                                t || e.preventDefault();
                                for (var s = 0, o = n ? e.changedTouches.length : 1; s < o; ) {
                                    var l = e.changedTouches[s];
                                    a.push({
                                        clientX: l.clientX,
                                        clientY: l.clientY,
                                        identifier: l.identifier,
                                    }),
                                        s++;
                                }
                            } else if ("touchend" === e.type && (null == (i = e.changedTouches) ? void 0 : i.length))
                                for (var s = 0, o = n ? e.changedTouches.length : 1; s < o; ) {
                                    var l = e.changedTouches[s];
                                    a.push({
                                        clientX: l.clientX,
                                        clientY: l.clientY,
                                        identifier: l.identifier,
                                    }),
                                        s++;
                                }
                            else
                                a.push({
                                    clientX: e.clientX,
                                    clientY: e.clientY,
                                    identifier: 0,
                                });
                            return a;
                        },
                        a = function (e) {
                            var t = e.canvas,
                                n = e.artboard,
                                a = e.stateMachines,
                                s = void 0 === a ? [] : a,
                                o = e.renderer,
                                l = e.rive,
                                c = e.fit,
                                u = e.alignment,
                                d = e.isTouchScrollEnabled,
                                f = void 0 !== d && d,
                                p = e.dispatchPointerExit,
                                _ = void 0 === p || p,
                                h = e.enableMultiTouch,
                                m = void 0 !== h && h,
                                g = e.layoutScaleFactor,
                                E = void 0 === g ? 1 : g,
                                y = e.listenOnDocumentBody,
                                b = e.eventCapture;
                            if (!t || !s.length || !o || !l || !n || "u" < typeof window) return null;
                            var O = null,
                                v = !1,
                                A = function (e) {
                                    if (v && e instanceof MouseEvent) {
                                        "mouseup" == e.type && (v = !1);
                                        return;
                                    }
                                    (v = f && "touchend" === e.type && "touchstart" === O), (O = e.type);
                                    var r = t.getBoundingClientRect(),
                                        a = i(e, f, m),
                                        o = l.computeAlignment(
                                            c,
                                            u,
                                            {
                                                minX: 0,
                                                minY: 0,
                                                maxX: r.width,
                                                maxY: r.height,
                                            },
                                            n.bounds,
                                            E,
                                        ),
                                        d = new l.Mat2D();
                                    o.invert(d);
                                    var p = [];
                                    switch (
                                        (a.forEach(function (t) {
                                            var n = t.clientX,
                                                i = t.clientY;
                                            if (n || i) {
                                                var a = n - r.left,
                                                    s = i - r.top;
                                                if (
                                                    (a >= 0 && a <= r.width && s >= 0 && s <= r.height) ||
                                                    ["mouseleave", "mouseout"].includes(e.type)
                                                ) {
                                                    var o = new l.Vec2D(a, s),
                                                        c = l.mapXY(d, o),
                                                        u = c.x(),
                                                        f = c.y();
                                                    (t.transformedX = u),
                                                        (t.transformedY = f),
                                                        c.delete(),
                                                        o.delete(),
                                                        p.push(t);
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
                                                        _
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
                                                    g = 0,
                                                    y = s;
                                                g < y.length;
                                                g++
                                            ) {
                                                var b = y[g];
                                                h(b);
                                            }
                                            break;
                                        case "mouseenter":
                                        case "touchmove":
                                        case "mouseover":
                                        case "mousemove":
                                            for (
                                                var A = function (e) {
                                                        p.forEach(function (t) {
                                                            e.pointerMove(t.transformedX, t.transformedY, t.identifier);
                                                        });
                                                    },
                                                    I = 0,
                                                    S = s;
                                                I < S.length;
                                                I++
                                            ) {
                                                var b = S[I];
                                                A(b);
                                            }
                                            break;
                                        case "touchstart":
                                        case "mousedown":
                                            for (
                                                var T = function (e) {
                                                        p.forEach(function (t) {
                                                            e.pointerDown(t.transformedX, t.transformedY, t.identifier);
                                                        });
                                                    },
                                                    C = 0,
                                                    N = s;
                                                C < N.length;
                                                C++
                                            ) {
                                                var b = N[C];
                                                T(b);
                                            }
                                            break;
                                        case "touchend":
                                            for (
                                                var R = function (e) {
                                                        p.forEach(function (t) {
                                                            e.pointerUp(t.transformedX, t.transformedY, t.identifier),
                                                                e.pointerExit(
                                                                    t.transformedX,
                                                                    t.transformedY,
                                                                    t.identifier,
                                                                );
                                                        });
                                                    },
                                                    w = 0,
                                                    P = s;
                                                w < P.length;
                                                w++
                                            ) {
                                                var b = P[w];
                                                R(b);
                                            }
                                            break;
                                        case "mouseup":
                                            for (
                                                var D = function (e) {
                                                        p.forEach(function (t) {
                                                            e.pointerUp(t.transformedX, t.transformedY, t.identifier);
                                                        });
                                                    },
                                                    x = 0,
                                                    L = s;
                                                x < L.length;
                                                x++
                                            ) {
                                                var b = L[x];
                                                D(b);
                                            }
                                    }
                                }.bind(r),
                                I = y ? t.ownerDocument.body : t;
                            return (
                                I.addEventListener("mouseover", A, b),
                                I.addEventListener("mouseenter", A, b),
                                I.addEventListener("mouseout", A, b),
                                I.addEventListener("mouseleave", A, b),
                                I.addEventListener("mousemove", A, b),
                                I.addEventListener("mousedown", A, b),
                                I.addEventListener("mouseup", A, b),
                                t.addEventListener("touchmove", A, {
                                    passive: f,
                                }),
                                t.addEventListener("touchstart", A, {
                                    passive: f,
                                }),
                                t.addEventListener("touchend", A),
                                function () {
                                    I.removeEventListener("mouseover", A, b),
                                        I.removeEventListener("mouseenter", A, b),
                                        I.removeEventListener("mouseout", A, b),
                                        I.removeEventListener("mouseleave", A, b),
                                        I.removeEventListener("mousemove", A, b),
                                        I.removeEventListener("mousedown", A, b),
                                        I.removeEventListener("mouseup", A, b),
                                        t.removeEventListener("touchmove", A),
                                        t.removeEventListener("touchstart", A),
                                        t.removeEventListener("touchend", A);
                                }
                            );
                        };
                },
                (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            BLANK_URL: () => c,
                            sanitizeUrl: () => f,
                        });
                    var r = /^([^\w]*)(javascript|data|vbscript)/im,
                        i = /&#(\w+)(^\w|;)?/g,
                        a = /&(newline|tab);/gi,
                        s = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
                        o = /^.+(:|&colon;)/gim,
                        l = [".", "/"],
                        c = "about:blank";

                    function u(e) {
                        return l.indexOf(e[0]) > -1;
                    }

                    function d(e) {
                        return e.replace(s, "").replace(i, function (e, t) {
                            return String.fromCharCode(t);
                        });
                    }

                    function f(e) {
                        if (!e) return c;
                        var t = d(e).replace(a, "").replace(s, "").trim();
                        if (!t) return c;
                        if (u(t)) return t;
                        var n = t.match(o);
                        if (!n) return t;
                        var i = n[0];
                        return r.test(i) ? c : t;
                    }
                },
                (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            AudioAssetWrapper: () => p,
                            AudioWrapper: () => l,
                            CustomFileAssetLoaderWrapper: () => u,
                            FileAssetWrapper: () => d,
                            FileFinalizer: () => i,
                            FontAssetWrapper: () => _,
                            FontWrapper: () => c,
                            ImageAssetWrapper: () => f,
                            ImageWrapper: () => o,
                            createFinalization: () => g,
                            finalizationRegistry: () => m,
                        });
                    var r = (function () {
                            var e = function (t, n) {
                                return (e =
                                    Object.setPrototypeOf ||
                                    ({
                                        __proto__: [],
                                    } instanceof Array &&
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
                        })(s),
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
                        })(s),
                        c = (function (e) {
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
                        })(s),
                        u = (function () {
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
                                            ? (n = new f(e))
                                            : e.isAudio
                                              ? (n = new p(e))
                                              : e.isFont && (n = new _(e)),
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
                        f = (function (e) {
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
                        p = (function (e) {
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
                        _ = (function (e) {
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
                        g = function (e, t) {
                            var n = new a(t);
                            m.register(e, n);
                        };
                },
            ],
            t = {};

        function n(r) {
            var i = t[r];
            if (void 0 !== i) return i.exports;
            var a = (t[r] = {
                exports: {},
            });
            return e[r](a, a.exports, n), a.exports;
        }
        (() => {
            n.d = (e, t) => {
                for (var r in t)
                    n.o(t, r) &&
                        !n.o(e, r) &&
                        Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r],
                        });
            };
        })(),
            (() => {
                n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
            })(),
            (() => {
                n.r = (e) => {
                    "u" > typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module",
                        }),
                        Object.defineProperty(e, "__esModule", {
                            value: !0,
                        });
                };
            })();
        var r = {};
        return (
            (() => {
                n.r(r),
                    n.d(r, {
                        Alignment: () => t,
                        DataEnum: () => U,
                        EventType: () => s,
                        Fit: () => e,
                        Layout: () => O,
                        LoopType: () => o,
                        Rive: () => M,
                        RiveEventType: () => a,
                        RiveFile: () => j,
                        RuntimeLoader: () => v,
                        StateMachineInput: () => A,
                        StateMachineInputType: () => i,
                        Testing: () => $,
                        ViewModel: () => k,
                        ViewModelInstance: () => G,
                        ViewModelInstanceArtboard: () => X,
                        ViewModelInstanceAssetImage: () => q,
                        ViewModelInstanceBoolean: () => H,
                        ViewModelInstanceColor: () => z,
                        ViewModelInstanceEnum: () => W,
                        ViewModelInstanceList: () => K,
                        ViewModelInstanceNumber: () => B,
                        ViewModelInstanceString: () => F,
                        ViewModelInstanceTrigger: () => Y,
                        ViewModelInstanceValue: () => V,
                        decodeAudio: () => J,
                        decodeFont: () => et,
                        decodeImage: () => ee,
                    });
                var e,
                    t,
                    i,
                    a,
                    s,
                    o,
                    l,
                    c,
                    u = n(1),
                    d = n(2),
                    f = n(3),
                    p = n(5),
                    _ = (function () {
                        var e = function (t, n) {
                            return (e =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
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
                        return new (n || (n = Promise))(function (n, a) {
                            function s(e) {
                                try {
                                    l(r.next(e));
                                } catch (e) {
                                    a(e);
                                }
                            }

                            function o(e) {
                                try {
                                    l(r.throw(e));
                                } catch (e) {
                                    a(e);
                                }
                            }

                            function l(e) {
                                e.done ? n(e.value) : i(e.value).then(s, o);
                            }
                            l((r = r.apply(e, t || [])).next());
                        });
                    },
                    g = function (e, t) {
                        var n,
                            r,
                            i,
                            a = {
                                label: 0,
                                sent: function () {
                                    if (1 & i[0]) throw i[1];
                                    return i[1];
                                },
                                trys: [],
                                ops: [],
                            },
                            s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                        return (
                            (s.next = o(0)),
                            (s.throw = o(1)),
                            (s.return = o(2)),
                            "function" == typeof Symbol &&
                                (s[Symbol.iterator] = function () {
                                    return this;
                                }),
                            s
                        );

                        function o(e) {
                            return function (t) {
                                return l([e, t]);
                            };
                        }

                        function l(o) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; s && ((s = 0), o[0] && (a = 0)), a; )
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
                                            return (
                                                a.label++,
                                                {
                                                    value: o[1],
                                                    done: !1,
                                                }
                                            );
                                        case 5:
                                            a.label++, (r = o[1]), (o = [0]);
                                            continue;
                                        case 7:
                                            (o = a.ops.pop()), a.trys.pop();
                                            continue;
                                        default:
                                            if (
                                                !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                                                (6 === o[0] || 2 === o[0])
                                            ) {
                                                a = 0;
                                                continue;
                                            }
                                            if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                                a.label = o[1];
                                                break;
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                (a.label = i[1]), (i = o);
                                                break;
                                            }
                                            if (i && a.label < i[2]) {
                                                (a.label = i[2]), a.ops.push(o);
                                                break;
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue;
                                    }
                                    o = t.call(e, a);
                                } catch (e) {
                                    (o = [6, e]), (r = 0);
                                } finally {
                                    n = i = 0;
                                }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0,
                            };
                        }
                    },
                    E = function (e, t, n) {
                        if (n || 2 == arguments.length)
                            for (var r, i = 0, a = t.length; i < a; i++)
                                (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
                        return e.concat(r || Array.prototype.slice.call(t));
                    },
                    y = (function (e) {
                        function t() {
                            var t = (null !== e && e.apply(this, arguments)) || this;
                            return (t.isHandledError = !0), t;
                        }
                        return _(t, e), t;
                    })(Error),
                    b = function (e) {
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
                var O = (function () {
                        function n(n) {
                            var r, i, a, s, o, l, c;
                            (this.fit = null != (r = null == n ? void 0 : n.fit) ? r : e.Contain),
                                (this.alignment = null != (i = null == n ? void 0 : n.alignment) ? i : t.Center),
                                (this.layoutScaleFactor =
                                    null != (a = null == n ? void 0 : n.layoutScaleFactor) ? a : 1),
                                (this.minX = null != (s = null == n ? void 0 : n.minX) ? s : 0),
                                (this.minY = null != (o = null == n ? void 0 : n.minY) ? o : 0),
                                (this.maxX = null != (l = null == n ? void 0 : n.maxX) ? l : 0),
                                (this.maxY = null != (c = null == n ? void 0 : n.maxY) ? c : 0);
                        }
                        return (
                            (n.new = function (e) {
                                var t = e.fit,
                                    r = e.alignment,
                                    i = e.minX,
                                    a = e.minY,
                                    s = e.maxX,
                                    o = e.maxY;
                                return (
                                    console.warn("This function is deprecated: please use `new Layout({})` instead"),
                                    new n({
                                        fit: t,
                                        alignment: r,
                                        minX: i,
                                        minY: a,
                                        maxX: s,
                                        maxY: o,
                                    })
                                );
                            }),
                            (n.prototype.copyWith = function (e) {
                                var t = e.fit,
                                    r = e.alignment,
                                    i = e.layoutScaleFactor,
                                    a = e.minX,
                                    s = e.minY,
                                    o = e.maxX,
                                    l = e.maxY;
                                return new n({
                                    fit: null != t ? t : this.fit,
                                    alignment: null != r ? r : this.alignment,
                                    layoutScaleFactor: null != i ? i : this.layoutScaleFactor,
                                    minX: null != a ? a : this.minX,
                                    minY: null != s ? s : this.minY,
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
                    v = (function () {
                        function e() {}
                        return (
                            (e.loadRuntime = function () {
                                u.default({
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
                var A = (function () {
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
                })(a || (a = {}));
                var I = (function () {
                        return function (e) {
                            (this.isBindableArtboard = !1), (this.isBindableArtboard = e);
                        };
                    })(),
                    S = (function (e) {
                        function t(t, n) {
                            var r = e.call(this, !1) || this;
                            return (r.nativeArtboard = t), (r.file = n), r;
                        }
                        return _(t, e), t;
                    })(I),
                    T = (function (e) {
                        function t(t) {
                            var n = e.call(this, !0) || this;
                            return (n.selfUnref = !1), (n.nativeArtboard = t), n;
                        }
                        return (
                            _(t, e),
                            (t.prototype.destroy = function () {
                                this.selfUnref && this.nativeArtboard.unref();
                            }),
                            t
                        );
                    })(I),
                    C = (function () {
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
                                    ? new A(i.Boolean, e.asBool())
                                    : e.type === t.SMIInput.number
                                      ? new A(i.Number, e.asNumber())
                                      : e.type === t.SMIInput.trigger
                                        ? new A(i.Trigger, e.asTrigger())
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
                    N = (function () {
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
                                if ((void 0 === n && (n = !0), 0 === (e = Q(e)).length))
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
                                            a = 0;
                                        a < e.length;
                                        a++
                                    ) {
                                        var o = r.indexOf(e[a]),
                                            l = i.indexOf(e[a]);
                                        if (o >= 0 || l >= 0)
                                            o >= 0
                                                ? (this.animations[o].playing = t)
                                                : (this.stateMachines[l].playing = t);
                                        else {
                                            var c = this.artboard.animationByName(e[a]);
                                            if (c) {
                                                var u = new f.Animation(c, this.artboard, this.runtime, t);
                                                u.advance(0), u.apply(1), this.animations.push(u);
                                            } else {
                                                var d = this.artboard.stateMachineByName(e[a]);
                                                if (d) {
                                                    var p = new C(d, this.runtime, t, this.artboard);
                                                    this.stateMachines.push(p);
                                                }
                                            }
                                        }
                                    }
                                return (
                                    n &&
                                        (t
                                            ? this.eventManager.fire({
                                                  type: s.Play,
                                                  data: this.playing,
                                              })
                                            : this.eventManager.fire({
                                                  type: s.Pause,
                                                  data: this.paused,
                                              })),
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
                                        var a = this.artboard.animationByName(e[r]);
                                        if (a) {
                                            var s = new f.Animation(a, this.artboard, this.runtime, t);
                                            s.advance(0), s.apply(1), this.animations.push(s);
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
                                        var a = this.artboard.stateMachineByName(e[r]);
                                        if (a) {
                                            var s = new C(a, this.runtime, t, this.artboard);
                                            this.stateMachines.push(s);
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
                                e = Q(e);
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
                                return (
                                    this.eventManager.fire({
                                        type: s.Stop,
                                        data: n,
                                    }),
                                    n
                                );
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
                                                type: s.Loop,
                                                data: {
                                                    animation: n.name,
                                                    type: o.Loop,
                                                },
                                            }),
                                            (n.loopCount = 0))
                                          : 2 === n.loopValue &&
                                            n.loopCount > 1 &&
                                            (this.eventManager.fire({
                                                type: s.Loop,
                                                data: {
                                                    animation: n.name,
                                                    type: o.PingPong,
                                                },
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
                                e.length > 0 &&
                                    this.eventManager.fire({
                                        type: s.StateChange,
                                        data: e,
                                    });
                            }),
                            (e.prototype.handleAdvancing = function (e) {
                                this.eventManager.fire({
                                    type: s.Advance,
                                    data: e,
                                });
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
                })(s || (s = {})),
                    (function (e) {
                        (e.OneShot = "oneshot"), (e.Loop = "loop"), (e.PingPong = "pingpong");
                    })(o || (o = {}));
                var R = (function () {
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
                    w = (function () {
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
                var P = new ((function (e) {
                        function t() {
                            var t = (null !== e && e.apply(this, arguments)) || this;
                            return (t._started = !1), (t._enabled = !1), (t._status = l.UNAVAILABLE), t;
                        }
                        return (
                            _(t, e),
                            (t.prototype.delay = function (e) {
                                return m(this, void 0, void 0, function () {
                                    return g(this, function (t) {
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
                                    return g(this, function (e) {
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
                                this.fire({
                                    type: s.AudioStatusChange,
                                }),
                                    this.removeAll();
                            }),
                            (t.prototype.enableAudio = function () {
                                return m(this, void 0, void 0, function () {
                                    return g(this, function (e) {
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
                                    return g(this, function (t) {
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
                                    return g(this, function (e) {
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
                                            return g(this, function (e) {
                                                return this.enableAudio(), [2];
                                            });
                                        });
                                    };
                                document.addEventListener("pointerdown", t, {
                                    once: !0,
                                });
                            }),
                            (t.prototype.establishAudio = function () {
                                return m(this, void 0, void 0, function () {
                                    return g(this, function (e) {
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
                    })(R))(),
                    D = (function () {
                        function e() {}
                        return (
                            (e.prototype.observe = function () {}),
                            (e.prototype.unobserve = function () {}),
                            (e.prototype.disconnect = function () {}),
                            e
                        );
                    })(),
                    x = globalThis.ResizeObserver || D,
                    L = new ((function () {
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
                                (this._resizeObserver = new x(this._onObserved));
                        }
                        return (
                            (e.prototype.add = function (e, t) {
                                var n = {
                                    onResize: t,
                                    element: e,
                                };
                                return this._elementsMap.set(e, n), this._resizeObserver.observe(e), n;
                            }),
                            (e.prototype.remove = function (e) {
                                this._resizeObserver.unobserve(e.element), this._elementsMap.delete(e.element);
                            }),
                            e
                        );
                    })())(),
                    j = (function () {
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
                                (this.eventManager = new R()),
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
                                    var t, n, r, i;
                                    return g(this, function (a) {
                                        switch (a.label) {
                                            case 0:
                                                if (!this.src) return [3, 2];
                                                return (t = this), [4, Z(this.src)];
                                            case 1:
                                                (t.buffer = a.sent()), (a.label = 2);
                                            case 2:
                                                if (this.destroyed) return [2];
                                                return (
                                                    this.assetLoader &&
                                                        (n = new p.CustomFileAssetLoaderWrapper(
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
                                                    ((r.file = a.sent()),
                                                    (i = new p.FileFinalizer(this.file)),
                                                    p.finalizationRegistry.register(this, i),
                                                    this.destroyed)
                                                )
                                                    return this.releaseFile(), [2];
                                                return (
                                                    null !== this.file
                                                        ? this.eventManager.fire({
                                                              type: s.Load,
                                                              data: this,
                                                          })
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
                                    return g(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                if (!this.src && !this.buffer)
                                                    return this.fireLoadError(e.missingErrorMessage), [2];
                                                r.label = 1;
                                            case 1:
                                                return r.trys.push([1, 4, , 5]), (t = this), [4, v.awaitInstance()];
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
                                throw (
                                    (this.eventManager.fire({
                                        type: s.LoadError,
                                        data: e,
                                    }),
                                    Error(e))
                                );
                            }),
                            (e.prototype.on = function (e, t) {
                                this.eventManager.add({
                                    type: e,
                                    callback: t,
                                });
                            }),
                            (e.prototype.off = function (e, t) {
                                this.eventManager.remove({
                                    type: e,
                                    callback: t,
                                });
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
                                    return (
                                        (0, p.createFinalization)(t, t.nativeArtboard),
                                        this.bindableArtboards.push(t),
                                        t
                                    );
                                }
                                return null;
                            }),
                            (e.prototype.getArtboard = function (e) {
                                var t = this.file.artboardByName(e);
                                if (null != t) return new S(t, this);
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
                    M = (function () {
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
                                    (this._observed = L.add(this.canvas, this.onCanvasResize)),
                                (this.src = e.src),
                                (this.buffer = e.buffer),
                                (this.riveFile = e.riveFile),
                                (this.layout = null != (t = e.layout) ? t : new O()),
                                (this.shouldDisableRiveListeners = !!e.shouldDisableRiveListeners),
                                (this.isTouchScrollEnabled = !!e.isTouchScrollEnabled),
                                (this.automaticallyHandleEvents = !!e.automaticallyHandleEvents),
                                (this.dispatchPointerExit =
                                    !1 === e.dispatchPointerExit ? e.dispatchPointerExit : this.dispatchPointerExit),
                                (this.enableMultiTouch = !!e.enableMultiTouch),
                                (this.enableRiveAssetCDN = void 0 === e.enableRiveAssetCDN || e.enableRiveAssetCDN),
                                (this.eventManager = new R()),
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
                                (this.taskQueue = new w(this.eventManager)),
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
                                    a = e.riveFile,
                                    s = e.animations,
                                    o = e.stateMachines,
                                    l = e.artboard,
                                    c = e.autoplay,
                                    u = void 0 !== c && c,
                                    d = e.useOffscreenRenderer,
                                    f = void 0 !== d && d,
                                    p = e.autoBind,
                                    _ = void 0 !== p && p;
                                if (!this.destroyed) {
                                    if (
                                        ((this.src = r),
                                        (this.buffer = i),
                                        (this.riveFile = a),
                                        !this.src && !this.buffer && !this.riveFile)
                                    )
                                        throw new y(t.missingErrorMessage);
                                    var h = Q(s),
                                        m = Q(o);
                                    (this.loaded = !1),
                                        (this.readyForPlaying = !1),
                                        v
                                            .awaitInstance()
                                            .then(function (e) {
                                                n.destroyed ||
                                                    ((n.runtime = e),
                                                    n.removeRiveListeners(),
                                                    n.deleteRiveRenderer(),
                                                    (n.renderer = n.runtime.makeRenderer(n.canvas, f)),
                                                    n.canvas.width ||
                                                        n.canvas.height ||
                                                        n.resizeDrawingSurfaceToCanvas(),
                                                    n
                                                        .initData(l, h, m, u, _)
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
                                        a = this.enableMultiTouch;
                                    e && "isTouchScrollEnabled" in e && (r = e.isTouchScrollEnabled);
                                    var s = this.canvas;
                                    null != this.eventTarget && (s = this.eventTarget),
                                        (this.eventCleanup = (0, p.registerTouchInteractions)({
                                            canvas: s,
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
                                P.status == l.UNAVAILABLE &&
                                    (null == (e = this.artboard) ? void 0 : e.hasAudio) &&
                                    null === this._audioEventListener &&
                                    ((this._audioEventListener = {
                                        type: s.AudioStatusChange,
                                        callback: function () {
                                            return t.onSystemAudioChanged();
                                        },
                                    }),
                                    P.add(this._audioEventListener),
                                    P.establishAudio());
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
                                    var a, o, l;
                                    return g(this, function (c) {
                                        switch (c.label) {
                                            case 0:
                                                if ((c.trys.push([0, 3, , 4]), null != this.riveFile)) return [3, 2];
                                                return (
                                                    (a = new j({
                                                        src: this.src,
                                                        buffer: this.buffer,
                                                        enableRiveAssetCDN: this.enableRiveAssetCDN,
                                                        assetLoader: this.assetLoader,
                                                    })),
                                                    (this.riveFile = a),
                                                    [4, a.init()]
                                                );
                                            case 1:
                                                if ((c.sent(), this.destroyed)) return a.destroyIfUnused(), [2, !1];
                                                c.label = 2;
                                            case 2:
                                                return (
                                                    (this.file = this.riveFile.getInstance()),
                                                    this.initArtboard(e, t, n, r, i),
                                                    this.initArtboardSize(),
                                                    this.initializeAudio(),
                                                    (this.loaded = !0),
                                                    this.eventManager.fire({
                                                        type: s.Load,
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
                                                    console.warn((o = b(c.sent()))),
                                                    this.eventManager.fire({
                                                        type: s.LoadError,
                                                        data: o,
                                                    }),
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
                                    var a,
                                        o = e ? this.file.artboardByName(e) : this.file.defaultArtboard();
                                    if (!o) {
                                        var l = "Invalid artboard name or no default artboard";
                                        console.warn(l),
                                            this.eventManager.fire({
                                                type: s.LoadError,
                                                data: l,
                                            });
                                        return;
                                    }
                                    if (
                                        ((this.artboard = o),
                                        (o.volume = this._volume * P.systemVolume),
                                        (this.animator = new N(this.runtime, this.artboard, this.eventManager)),
                                        t.length > 0 || n.length > 0
                                            ? ((a = t.concat(n)),
                                              this.animator.initLinearAnimations(t, r),
                                              this.animator.initStateMachines(n, r))
                                            : (a = [this.animator.atLeastOne(r, !1)]),
                                        this.taskQueue.add({
                                            event: {
                                                type: r ? s.Play : s.Pause,
                                                data: a,
                                            },
                                        }),
                                        i)
                                    ) {
                                        var c = this.file.defaultArtboardViewModel(o);
                                        if (null !== c) {
                                            var u = c.defaultInstance();
                                            if (null !== u) {
                                                var d = new G(u, null);
                                                (0, p.createFinalization)(d, d.runtimeInstance),
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
                                        c = o;
                                    l < c.length;
                                    l++
                                ) {
                                    var u = c[l];
                                    u.advance(i), u.instance.didLoop && (u.loopCount += 1), u.apply(1);
                                }
                                for (
                                    var d = this.animator.stateMachines.filter(function (e) {
                                            return e.playing;
                                        }),
                                        f = 0,
                                        _ = d;
                                    f < _.length;
                                    f++
                                ) {
                                    var h = _[f],
                                        m = h.reportedEventCount();
                                    if (m)
                                        for (var g = 0; g < m; g++) {
                                            var E = h.reportedEventAt(g);
                                            if (E)
                                                if (E.type === a.OpenUrl) {
                                                    if (
                                                        (this.eventManager.fire({
                                                            type: s.RiveEvent,
                                                            data: E,
                                                        }),
                                                        this.automaticallyHandleEvents)
                                                    ) {
                                                        var y = document.createElement("a"),
                                                            b = E,
                                                            O = b.url,
                                                            v = b.target,
                                                            A = (0, p.sanitizeUrl)(O);
                                                        O && y.setAttribute("href", A),
                                                            v && y.setAttribute("target", v),
                                                            A && A !== p.BLANK_URL && y.click();
                                                    }
                                                } else
                                                    this.eventManager.fire({
                                                        type: s.RiveEvent,
                                                        data: E,
                                                    });
                                        }
                                    h.advanceAndApply(i);
                                }
                                0 == this.animator.stateMachines.length && this.artboard.advance(i);
                                var I = this.renderer;
                                I.clear(),
                                    I.save(),
                                    this.alignRenderer(),
                                    this._hasZeroSize || this.artboard.draw(I),
                                    I.restore(),
                                    I.flush(),
                                    this.animator.handleLooping(),
                                    this.animator.handleStateChanges(),
                                    this.animator.handleAdvancing(i),
                                    this.frameCount++;
                                var S = performance.now();
                                for (
                                    this.frameTimes.push(S), this.durations.push(S - r);
                                    this.frameTimes[0] <= S - 1e3;
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
                                    {
                                        minX: r.minX,
                                        minY: r.minY,
                                        maxX: r.maxX,
                                        maxY: r.maxY,
                                    },
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
                                    null !== this._observed && L.remove(this._observed),
                                    this.removeRiveListeners(),
                                    this.file && (null == (e = this.riveFile) || e.cleanup(), (this.file = null)),
                                    (this.riveFile = null),
                                    this.deleteRiveRenderer(),
                                    null !== this._audioEventListener &&
                                        (P.remove(this._audioEventListener), (this._audioEventListener = null)),
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
                                ((e = Q(e)), this.readyForPlaying)
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
                                ((e = Q(e)), this.readyForPlaying)
                                    ? (this.eventCleanup && this.eventCleanup(), this.animator.pause(e))
                                    : this.taskQueue.add({
                                          action: function () {
                                              return t.pause(e);
                                          },
                                      });
                            }),
                            (t.prototype.scrub = function (e, t) {
                                var n = this;
                                ((e = Q(e)), this.readyForPlaying)
                                    ? (this.animator.scrub(e, t || 0), this.drawFrame())
                                    : this.taskQueue.add({
                                          action: function () {
                                              return n.scrub(e, t);
                                          },
                                      });
                            }),
                            (t.prototype.stop = function (e) {
                                var t = this;
                                ((e = Q(e)), this.readyForPlaying)
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
                                    i = Q(null == e ? void 0 : e.animations),
                                    a = Q(null == e ? void 0 : e.stateMachines),
                                    s = null != (t = null == e ? void 0 : e.autoplay) && t,
                                    o = null != (n = null == e ? void 0 : e.autoBind) && n;
                                this.cleanupInstances(), this.initArtboard(r, i, a, s, o), this.taskQueue.process();
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
                                        a = t || window.devicePixelRatio || 1;
                                    if (
                                        ((this.devicePixelRatioUsed = a),
                                        (this.canvas.width = a * r),
                                        (this.canvas.height = a * i),
                                        this.resizeToCanvas(),
                                        this.drawFrame(),
                                        this.layout.fit === e.Layout)
                                    ) {
                                        var s = this._layout.layoutScaleFactor;
                                        (this.artboard.width = r / s), (this.artboard.height = i / s);
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
                                this.eventManager.add({
                                    type: e,
                                    callback: t,
                                });
                            }),
                            (t.prototype.off = function (e, t) {
                                this.eventManager.remove({
                                    type: e,
                                    callback: t,
                                });
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
                                        for (
                                            var e = {
                                                    artboards: [],
                                                },
                                                t = 0;
                                            t < this.file.artboardCount();
                                            t++
                                        ) {
                                            for (
                                                var n = this.file.artboardByIndex(t),
                                                    r = {
                                                        name: n.name,
                                                        animations: [],
                                                        stateMachines: [],
                                                    },
                                                    i = 0;
                                                i < n.animationCount();
                                                i++
                                            ) {
                                                var a = n.animationByIndex(i);
                                                r.animations.push(a.name);
                                            }
                                            for (var s = 0; s < n.stateMachineCount(); s++) {
                                                for (
                                                    var o = n.stateMachineByIndex(s),
                                                        l = o.name,
                                                        c = new this.runtime.StateMachineInstance(o, n),
                                                        u = [],
                                                        d = 0;
                                                    d < c.inputCount();
                                                    d++
                                                ) {
                                                    var f = c.input(d);
                                                    u.push({
                                                        name: f.name,
                                                        type: f.type,
                                                    });
                                                }
                                                r.stateMachines.push({
                                                    name: l,
                                                    inputs: u,
                                                });
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
                                    (this._volume = e), this.artboard && (this.artboard.volume = e * P.systemVolume);
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
                                return null !== t ? new k(t) : null;
                            }),
                            (t.prototype.viewModelByName = function (e) {
                                var t = this.file.viewModelByName(e);
                                return null !== t ? new k(t) : null;
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
                                    if (e) return new k(e);
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
                    k = (function () {
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
                                    var n = new G(t, null);
                                    return (0, p.createFinalization)(n, t), n;
                                }
                                return null;
                            }),
                            (e.prototype.instanceByName = function (e) {
                                var t = this._viewModel.instanceByName(e);
                                if (null !== t) {
                                    var n = new G(t, null);
                                    return (0, p.createFinalization)(n, t), n;
                                }
                                return null;
                            }),
                            (e.prototype.defaultInstance = function () {
                                var e = this._viewModel.defaultInstance();
                                if (null !== e) {
                                    var t = new G(e, null);
                                    return (0, p.createFinalization)(t, e), t;
                                }
                                return null;
                            }),
                            (e.prototype.instance = function () {
                                var e = this._viewModel.instance();
                                if (null !== e) {
                                    var t = new G(e, null);
                                    return (0, p.createFinalization)(t, e), t;
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
                    U = (function () {
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
                })(c || (c = {}));
                var G = (function () {
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
                                        a,
                                        s,
                                        o,
                                        l,
                                        u,
                                        d,
                                        f,
                                        p,
                                        _,
                                        h,
                                        m,
                                        g,
                                        E,
                                        y,
                                        b,
                                        O,
                                        v = this.internalViewModelInstance(e[t]);
                                    return null !== v ? v.propertyFromPathSegments(e, t + 1, n) : null;
                                }
                                var A = null;
                                switch (n) {
                                    case c.Number:
                                        if (
                                            null !==
                                            (A =
                                                null !=
                                                (i = null == (r = this._runtimeInstance) ? void 0 : r.number(e[t]))
                                                    ? i
                                                    : null)
                                        )
                                            return new B(A, this);
                                        break;
                                    case c.String:
                                        if (
                                            null !==
                                            (A =
                                                null !=
                                                (s = null == (a = this._runtimeInstance) ? void 0 : a.string(e[t]))
                                                    ? s
                                                    : null)
                                        )
                                            return new F(A, this);
                                        break;
                                    case c.Boolean:
                                        if (
                                            null !==
                                            (A =
                                                null !=
                                                (l = null == (o = this._runtimeInstance) ? void 0 : o.boolean(e[t]))
                                                    ? l
                                                    : null)
                                        )
                                            return new H(A, this);
                                        break;
                                    case c.Color:
                                        if (
                                            null !==
                                            (A =
                                                null !=
                                                (d = null == (u = this._runtimeInstance) ? void 0 : u.color(e[t]))
                                                    ? d
                                                    : null)
                                        )
                                            return new z(A, this);
                                        break;
                                    case c.Trigger:
                                        if (
                                            null !==
                                            (A =
                                                null !=
                                                (p = null == (f = this._runtimeInstance) ? void 0 : f.trigger(e[t]))
                                                    ? p
                                                    : null)
                                        )
                                            return new Y(A, this);
                                        break;
                                    case c.Enum:
                                        if (
                                            null !==
                                            (A =
                                                null !=
                                                (h = null == (_ = this._runtimeInstance) ? void 0 : _.enum(e[t]))
                                                    ? h
                                                    : null)
                                        )
                                            return new W(A, this);
                                        break;
                                    case c.List:
                                        if (
                                            null !==
                                            (A =
                                                null !=
                                                (g = null == (m = this._runtimeInstance) ? void 0 : m.list(e[t]))
                                                    ? g
                                                    : null)
                                        )
                                            return new K(A, this);
                                        break;
                                    case c.Image:
                                        if (
                                            null !==
                                            (A =
                                                null !=
                                                (y = null == (E = this._runtimeInstance) ? void 0 : E.image(e[t]))
                                                    ? y
                                                    : null)
                                        )
                                            return new q(A, this);
                                        break;
                                    case c.Artboard:
                                        if (
                                            null !==
                                            (A =
                                                null !=
                                                (O = null == (b = this._runtimeInstance) ? void 0 : b.artboard(e[t]))
                                                    ? O
                                                    : null)
                                        )
                                            return new X(A, this);
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
                                        (0, p.createFinalization)(i, r),
                                        i.internalIncrementReferenceCount(),
                                        this._viewModelInstances.set(t, i),
                                        i
                                    );
                                }
                                return null;
                            }),
                            (e.prototype.number = function (e) {
                                return this.propertyFromPath(e, c.Number);
                            }),
                            (e.prototype.string = function (e) {
                                return this.propertyFromPath(e, c.String);
                            }),
                            (e.prototype.boolean = function (e) {
                                return this.propertyFromPath(e, c.Boolean);
                            }),
                            (e.prototype.color = function (e) {
                                return this.propertyFromPath(e, c.Color);
                            }),
                            (e.prototype.trigger = function (e) {
                                return this.propertyFromPath(e, c.Trigger);
                            }),
                            (e.prototype.enum = function (e) {
                                return this.propertyFromPath(e, c.Enum);
                            }),
                            (e.prototype.list = function (e) {
                                return this.propertyFromPath(e, c.List);
                            }),
                            (e.prototype.image = function (e) {
                                return this.propertyFromPath(e, c.Image);
                            }),
                            (e.prototype.artboard = function (e) {
                                return this.propertyFromPath(e, c.Artboard);
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
                                    var n = E([], this._children, !0);
                                    this._children.length = 0;
                                    var r = E([], this._parents, !0);
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
                    F = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
                        }
                        return (
                            _(t, e),
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
                    B = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
                        }
                        return (
                            _(t, e),
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
                            _(t, e),
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
                            _(t, e),
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
                            _(t, e),
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
                            _(t, e),
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
                                    var n = new G(t, this._parentViewModel);
                                    return (0, p.createFinalization)(n, t), n;
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
                    z = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
                        }
                        return (
                            _(t, e),
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
                    q = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
                        }
                        return (
                            _(t, e),
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
                    X = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
                        }
                        return (
                            _(t, e),
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
                            return g(this, function (t) {
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
                    Q = function (e) {
                        return "string" == typeof e ? [e] : e instanceof Array ? e : [];
                    },
                    $ = {
                        EventManager: R,
                        TaskQueueManager: w,
                    },
                    J = function (e) {
                        return m(void 0, void 0, void 0, function () {
                            var t, n;
                            return g(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        return [
                                            4,
                                            new Promise(function (t) {
                                                return v.getInstance(function (n) {
                                                    n.decodeAudio(e, t);
                                                });
                                            }),
                                        ];
                                    case 1:
                                        return (
                                            (t = r.sent()),
                                            (n = new p.AudioWrapper(t)),
                                            p.finalizationRegistry.register(n, t),
                                            [2, n]
                                        );
                                }
                            });
                        });
                    },
                    ee = function (e) {
                        return m(void 0, void 0, void 0, function () {
                            var t, n;
                            return g(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        return [
                                            4,
                                            new Promise(function (t) {
                                                return v.getInstance(function (n) {
                                                    n.decodeImage(e, t);
                                                });
                                            }),
                                        ];
                                    case 1:
                                        return (
                                            (t = r.sent()),
                                            (n = new p.ImageWrapper(t)),
                                            p.finalizationRegistry.register(n, t),
                                            [2, n]
                                        );
                                }
                            });
                        });
                    },
                    et = function (e) {
                        return m(void 0, void 0, void 0, function () {
                            var t, n;
                            return g(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        return [
                                            4,
                                            new Promise(function (t) {
                                                return v.getInstance(function (n) {
                                                    n.decodeFont(e, t);
                                                });
                                            }),
                                        ];
                                    case 1:
                                        return (
                                            (t = r.sent()),
                                            (n = new p.FontWrapper(t)),
                                            p.finalizationRegistry.register(n, t),
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
