e.exports = (() => {
    "use strict";
    var e,
        t,
        n,
        i,
        r,
        s,
        a,
        o,
        l,
        u,
        c,
        d,
        _,
        f,
        h,
        p,
        E,
        m,
        g,
        A,
        I,
        T,
        S,
        N,
        y,
        C,
        v,
        O,
        R,
        b,
        D,
        L,
        w,
        M,
        P,
        x,
        U,
        k,
        G,
        F,
        V,
        B,
        H,
        j,
        Y,
        W,
        K,
        z,
        $,
        q,
        Z,
        X,
        Q,
        J,
        ee,
        et,
        en,
        ei,
        er,
        es,
        ea,
        eo,
        el = [
            ,
            (e, t, n) => {
                var i;
                n.r(t), n.d(t, { default: () => r });
                let r =
                    ((i = "u" > typeof document ? document.currentScript?.src : void 0),
                    function (e = {}) {
                        var t,
                            n,
                            r,
                            s,
                            a,
                            o,
                            l,
                            u = new Promise((e, t) => {
                                (o = e), (l = t);
                            }),
                            c = "object" == typeof window,
                            d = "function" == typeof importScripts;
                        function _() {
                            function e(e) {
                                let s = i;
                                (n = t = 0),
                                    (i = new Map()),
                                    s.forEach((t) => {
                                        try {
                                            t(e);
                                        } catch (e) {
                                            console.error(e);
                                        }
                                    }),
                                    this.nb(),
                                    r && r.Pb();
                            }
                            let t = 0,
                                n = 0,
                                i = new Map(),
                                r = null,
                                s = null;
                            (this.requestAnimationFrame = function (r) {
                                t ||= requestAnimationFrame(e.bind(this));
                                let s = ++n;
                                return i.set(s, r), s;
                            }),
                                (this.cancelAnimationFrame = function (e) {
                                    i.delete(e), t && 0 == i.size && (cancelAnimationFrame(t), (t = 0));
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
                                        (r = new (function () {
                                            let t = 0,
                                                n = 0;
                                            this.Pb = function () {
                                                var i = performance.now();
                                                n
                                                    ? (++t, 1e3 < (i -= n) && (e((1e3 * t) / i), (t = n = 0)))
                                                    : ((n = i), (t = 0));
                                            };
                                        })());
                                }),
                                (this.Kb = function () {
                                    s && (document.body.remove(s), (s = null)), (r = null);
                                }),
                                (this.nb = function () {});
                        }
                        function f(e) {
                            console.assert(!0);
                            let t = new Map(),
                                n = -1 / 0;
                            this.push = function (i) {
                                return (
                                    (i = (i + ((1 << e) - 1)) >> e),
                                    t.has(i) && clearTimeout(t.get(i)),
                                    t.set(
                                        i,
                                        setTimeout(function () {
                                            t.delete(i),
                                                0 == t.length
                                                    ? (n = -1 / 0)
                                                    : i == n && console.assert((n = Math.max(...t.keys())) < i);
                                        }, 1e3),
                                    ),
                                    (n = Math.max(i, n)) << e
                                );
                            };
                        }
                        let h = e.onRuntimeInitialized;
                        e.onRuntimeInitialized = function () {
                            h && h();
                            let t = e.decodeAudio;
                            e.decodeAudio = function (e, n) {
                                n((e = t(e)));
                            };
                            let n = e.decodeFont;
                            e.decodeFont = function (e, t) {
                                t((e = n(e)));
                            };
                            let i = e.FileAssetLoader;
                            (e.ptrToAsset = (t) => {
                                let n = e.ptrToFileAsset(t);
                                return n.isImage
                                    ? e.ptrToImageAsset(t)
                                    : n.isFont
                                      ? e.ptrToFontAsset(t)
                                      : n.isAudio
                                        ? e.ptrToAudioAsset(t)
                                        : n;
                            }),
                                (e.CustomFileAssetLoader = i.extend("CustomFileAssetLoader", {
                                    __construct: function ({ loadContents: e }) {
                                        this.__parent.__construct.call(this), (this.Db = e);
                                    },
                                    loadContents: function (t, n) {
                                        return (t = e.ptrToAsset(t)), this.Db(t, n);
                                    },
                                })),
                                (e.CDNFileAssetLoader = i.extend("CDNFileAssetLoader", {
                                    __construct: function () {
                                        this.__parent.__construct.call(this);
                                    },
                                    loadContents: function (t) {
                                        var n, i, r;
                                        let s = e.ptrToAsset(t);
                                        return (
                                            "" !== (t = s.cdnUuid) &&
                                            ((n = s.cdnBaseUrl + "/" + t),
                                            (i = (e) => {
                                                s.decode(new Uint8Array(e.response));
                                            }),
                                            ((r = new XMLHttpRequest()).responseType = "arraybuffer"),
                                            (r.onreadystatechange = function () {
                                                4 == r.readyState && 200 == r.status && i(r);
                                            }),
                                            r.open("GET", n, !0),
                                            r.send(null),
                                            !0)
                                        );
                                    },
                                })),
                                (e.FallbackFileAssetLoader = i.extend("FallbackFileAssetLoader", {
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
                            let r = e.computeAlignment;
                            e.computeAlignment = function (e, t, n, i, s = 1) {
                                return r.call(this, e, t, n, i, s);
                            };
                        };
                        let p =
                                "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(
                                    " ",
                                ),
                            E = new (function () {
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
                                                    console.log("No WebGL support. Image mesh will not be drawn."), !1
                                                );
                                        } else if ((u = e.getContext("webgl2", a))) n = 2;
                                        else {
                                            if (!(u = e.getContext("webgl", a)))
                                                return (
                                                    console.log("No WebGL support. Image mesh will not be drawn."), !1
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
                                            ((i = Math.min(
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
                                        (r = u.getUniformLocation(e, "mat")),
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
                                    i = 0,
                                    r = null,
                                    s = null,
                                    a = 0,
                                    o = 0,
                                    l = !1;
                                e(),
                                    (this.ac = function () {
                                        return e(), i;
                                    }),
                                    (this.Jb = function (e) {
                                        t.deleteTexture && t.deleteTexture(e);
                                    }),
                                    (this.Ib = function (i) {
                                        if (!e()) return null;
                                        let r = t.createTexture();
                                        return r
                                            ? (t.bindTexture(t.TEXTURE_2D, r),
                                              t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, i),
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
                                              r)
                                            : null;
                                    });
                                let u = new f(8),
                                    c = new f(8),
                                    d = new f(10),
                                    _ = new f(10);
                                (this.Mb = function (n, i, l, f, h) {
                                    if (e()) {
                                        var p = u.push(n),
                                            E = c.push(i);
                                        if (t.canvas) {
                                            for (var m of ((t.canvas.width != p || t.canvas.height != E) &&
                                                ((t.canvas.width = p), (t.canvas.height = E)),
                                            t.viewport(0, E - i, n, i),
                                            t.disable(t.SCISSOR_TEST),
                                            t.clearColor(0, 0, 0, 0),
                                            t.clear(t.COLOR_BUFFER_BIT),
                                            t.enable(t.SCISSOR_TEST),
                                            l.sort((e, t) => t.ub - e.ub),
                                            (p = d.push(f)),
                                            a != p && (t.bufferData(t.ARRAY_BUFFER, 8 * p, t.DYNAMIC_DRAW), (a = p)),
                                            (p = 0),
                                            l))
                                                t.bufferSubData(t.ARRAY_BUFFER, p, m.Sa), (p += 4 * m.Sa.length);
                                            for (var g of (console.assert(p == 4 * f), l))
                                                t.bufferSubData(t.ARRAY_BUFFER, p, g.Ab), (p += 4 * g.Ab.length);
                                            for (var A of (console.assert(p == 8 * f),
                                            (p = _.push(h)),
                                            o != p &&
                                                (t.bufferData(t.ELEMENT_ARRAY_BUFFER, 2 * p, t.DYNAMIC_DRAW), (o = p)),
                                            (m = 0),
                                            l))
                                                t.bufferSubData(t.ELEMENT_ARRAY_BUFFER, m, A.indices),
                                                    (m += 2 * A.indices.length);
                                            for (let e of (console.assert(m == 2 * h),
                                            (A = 0),
                                            (g = !0),
                                            (p = m = 0),
                                            l)) {
                                                e.image.Ia != A &&
                                                    (t.bindTexture(t.TEXTURE_2D, e.image.Ha || null), (A = e.image.Ia)),
                                                    e.fc
                                                        ? (t.scissor(e.Ya, E - e.Za - e.ib, e.tc, e.ib), (g = !0))
                                                        : g && (t.scissor(0, E - i, n, i), (g = !1)),
                                                    (l = 2 / n);
                                                let a = -2 / i;
                                                t.uniform4f(
                                                    r,
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
                                                    t.vertexAttribPointer(0, 2, t.FLOAT, !1, 0, p),
                                                    t.vertexAttribPointer(1, 2, t.FLOAT, !1, 0, p + 4 * f),
                                                    t.drawElements(t.TRIANGLES, e.indices.length, t.UNSIGNED_SHORT, m),
                                                    (p += 4 * e.Sa.length),
                                                    (m += 2 * e.indices.length);
                                            }
                                            console.assert(p == 4 * f), console.assert(m == 2 * h);
                                        }
                                    }
                                }),
                                    (this.canvas = function () {
                                        return e() && t.canvas;
                                    });
                            })(),
                            m = e.onRuntimeInitialized;
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
                            function n(e) {
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
                            function i() {
                                for (let e of (0 < y.length &&
                                    (E.Mb(N.drawWidth(), N.drawHeight(), y, C, v),
                                    (y = []),
                                    (v = C = 0),
                                    N.reset(512, 512)),
                                S)) {
                                    for (let t of e.H) t();
                                    e.H = [];
                                }
                                S.clear();
                            }
                            m && m();
                            var r = e.RenderPaintStyle;
                            let s = e.RenderPath,
                                a = e.RenderPaint,
                                o = e.Renderer,
                                l = e.StrokeCap,
                                u = e.StrokeJoin,
                                c = e.BlendMode,
                                d = r.fill,
                                f = r.stroke,
                                h = e.FillRule.evenOdd,
                                g = 1;
                            var A = e.RenderImage.extend("CanvasRenderImage", {
                                    __construct: function ({ ka: e, va: t } = {}) {
                                        this.__parent.__construct.call(this),
                                            (this.Ia = g),
                                            (g = (g + 1) & 0x7fffffff || 1),
                                            (this.ka = e),
                                            (this.va = t);
                                    },
                                    __destruct: function () {
                                        this.Ha && (E.Jb(this.Ha), URL.revokeObjectURL(this.Va)),
                                            this.__parent.__destruct.call(this);
                                    },
                                    decode: function (e) {
                                        var t = this;
                                        t.va && t.va(t);
                                        var n = new Image();
                                        (t.Va = URL.createObjectURL(new Blob([e], { type: "image/png" }))),
                                            (n.onload = function () {
                                                (t.Cb = n),
                                                    (t.Ha = E.Ib(n)),
                                                    t.size(n.width, n.height),
                                                    t.ka && t.ka(t);
                                            }),
                                            (n.src = t.Va);
                                    },
                                }),
                                I = s.extend("CanvasRenderPath", {
                                    __construct: function () {
                                        this.__parent.__construct.call(this), (this.T = new Path2D());
                                    },
                                    rewind: function () {
                                        this.T = new Path2D();
                                    },
                                    addPath: function (e, t, n, i, r, s, a) {
                                        var o = this.T,
                                            l = o.addPath;
                                        e = e.T;
                                        let u = new DOMMatrix();
                                        (u.a = t),
                                            (u.b = n),
                                            (u.c = i),
                                            (u.d = r),
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
                                    cubicTo: function (e, t, n, i, r, s) {
                                        this.T.bezierCurveTo(e, t, n, i, r, s);
                                    },
                                    close: function () {
                                        this.T.closePath();
                                    },
                                }),
                                T = a.extend("CanvasRenderPaint", {
                                    color: function (e) {
                                        this.Wa = n(e);
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
                                    linearGradient: function (e, t, n, i) {
                                        this.ia = { wb: e, xb: t, bb: n, cb: i, Pa: [] };
                                    },
                                    radialGradient: function (e, t, n, i) {
                                        this.ia = { wb: e, xb: t, bb: n, cb: i, Pa: [], $b: !0 };
                                    },
                                    addStop: function (e, t) {
                                        this.ia.Pa.push({ color: e, stop: t });
                                    },
                                    completeGradient: function () {},
                                    draw: function (e, t, i) {
                                        let r = this.Eb;
                                        var s = this.Wa,
                                            a = this.ia;
                                        if (((e.globalCompositeOperation = this.Bb), null != a)) {
                                            s = a.wb;
                                            var o = a.xb;
                                            let t = a.bb;
                                            var l = a.cb;
                                            let i = a.Pa;
                                            a.$b
                                                ? ((a = t - s),
                                                  (l -= o),
                                                  (s = e.createRadialGradient(s, o, 0, s, o, Math.sqrt(a * a + l * l))))
                                                : (s = e.createLinearGradient(s, o, t, l));
                                            for (let e = 0, t = i.length; e < t; e++)
                                                (o = i[e]), s.addColorStop(o.stop, n(o.color));
                                            (this.Wa = s), (this.ia = null);
                                        }
                                        switch (r) {
                                            case f:
                                                (e.strokeStyle = s),
                                                    (e.lineWidth = this.Fb),
                                                    (e.lineCap = this.Fa),
                                                    (e.lineJoin = this.Ga),
                                                    e.stroke(t);
                                                break;
                                            case d:
                                                (e.fillStyle = s), e.fill(t, i);
                                        }
                                    },
                                });
                            let S = new Set(),
                                N = null,
                                y = [],
                                C = 0,
                                v = 0;
                            var O = (e.CanvasRenderer = o.extend("Renderer", {
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
                                transform: function (e, t, n, i, r, s) {
                                    let a = this.S,
                                        o = a.length - 6;
                                    a.splice(
                                        o,
                                        6,
                                        a[o] * e + a[o + 2] * t,
                                        a[o + 1] * e + a[o + 3] * t,
                                        a[o] * n + a[o + 2] * i,
                                        a[o + 1] * n + a[o + 3] * i,
                                        a[o] * r + a[o + 2] * s + a[o + 4],
                                        a[o + 1] * r + a[o + 3] * s + a[o + 5],
                                    ),
                                        this.H.push(this.B.transform.bind(this.B, e, t, n, i, r, s));
                                },
                                rotate: function (e) {
                                    let t = Math.sin(e);
                                    (e = Math.cos(e)), this.transform(e, t, -t, e, 0, 0);
                                },
                                _drawPath: function (e, t) {
                                    this.H.push(t.draw.bind(t, this.B, e.T, e.Ua === h ? "evenodd" : "nonzero"));
                                },
                                _drawRiveImage: function (e, n, i, r) {
                                    var s = e.Cb;
                                    if (s) {
                                        var a = this.B,
                                            o = t(i);
                                        this.H.push(function () {
                                            (a.globalCompositeOperation = o),
                                                (a.globalAlpha = r),
                                                a.drawImage(s, 0, 0),
                                                (a.globalAlpha = 1);
                                        });
                                    }
                                },
                                _getMatrix: function (e) {
                                    let t = this.S,
                                        n = t.length - 6;
                                    for (let i = 0; 6 > i; ++i) e[i] = t[n + i];
                                },
                                _drawImageMesh: function (n, r, s, a, o, l, u, c, d, _, f) {
                                    r = this.B.canvas.width;
                                    var h = this.B.canvas.height;
                                    let p = _ - c,
                                        m = f - d;
                                    (c = Math.max(c, 0)), (d = Math.max(d, 0));
                                    let g = (_ = Math.min(_, r)) - c,
                                        A = (f = Math.min(f, h)) - d;
                                    if (
                                        (console.assert(g <= Math.min(p, r)),
                                        console.assert(A <= Math.min(m, h)),
                                        !(0 >= g || 0 >= A))
                                    ) {
                                        (_ = g < p || A < m), (r = f = 1);
                                        var I = Math.ceil(g * f),
                                            T = Math.ceil(A * r);
                                        (h = E.ac()),
                                            I > h && ((f *= h / I), (I = h)),
                                            T > h && ((r *= h / T), (T = h)),
                                            N || (N = new e.DynamicRectanizer(h)).reset(512, 512),
                                            0 > (h = N.addRect(I, T)) &&
                                                (i(), S.add(this), console.assert(0 <= (h = N.addRect(I, T))));
                                        var O = 65535 & h,
                                            R = h >> 16;
                                        y.push({
                                            ga: this.S.slice(this.S.length - 6),
                                            image: n,
                                            Ya: O,
                                            Za: R,
                                            bc: c,
                                            cc: d,
                                            tc: I,
                                            ib: T,
                                            za: f,
                                            Aa: r,
                                            Sa: new Float32Array(o),
                                            Ab: new Float32Array(l),
                                            indices: new Uint16Array(u),
                                            fc: _,
                                            ub: (n.Ia << 1) | !!_,
                                        }),
                                            (C += o.length),
                                            (v += u.length);
                                        var b = this.B,
                                            D = t(s);
                                        this.H.push(function () {
                                            b.save(),
                                                b.resetTransform(),
                                                (b.globalCompositeOperation = D),
                                                (b.globalAlpha = a);
                                            let e = E.canvas();
                                            e && b.drawImage(e, O, R, I, T, c, d, g, A), b.restore();
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
                                let t = new O(e),
                                    n = t.B;
                                return new Proxy(t, {
                                    get(e, i) {
                                        if ("function" == typeof e[i])
                                            return function (...t) {
                                                return e[i].apply(e, t);
                                            };
                                        if ("function" == typeof n[i]) {
                                            if (-1 < p.indexOf(i))
                                                throw Error(
                                                    "RiveException: Method call to '" +
                                                        i +
                                                        "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.",
                                                );
                                            return function (...e) {
                                                t.H.push(n[i].bind(n, ...e));
                                            };
                                        }
                                        return e[i];
                                    },
                                    set(e, i, r) {
                                        if (i in n)
                                            return (
                                                t.H.push(() => {
                                                    n[i] = r;
                                                }),
                                                !0
                                            );
                                    },
                                });
                            }),
                                (e.decodeImage = function (e, t) {
                                    new A({ ka: t }).decode(e);
                                }),
                                (e.renderFactory = {
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
                            let R = e.load,
                                b = null;
                            e.load = function (t, n, i = !0) {
                                let r = new e.FallbackFileAssetLoader();
                                return (
                                    void 0 !== n && r.addLoader(n),
                                    i && ((n = new e.CDNFileAssetLoader()), r.addLoader(n)),
                                    new Promise(function (e) {
                                        let n = null;
                                        (b = {
                                            total: 0,
                                            loaded: 0,
                                            ready: function () {
                                                e(n);
                                            },
                                        }),
                                            (n = R(t, r)),
                                            0 == b.total && e(n);
                                    })
                                );
                            };
                            let D = e.RendererWrapper.prototype.align;
                            (e.RendererWrapper.prototype.align = function (e, t, n, i, r = 1) {
                                D.call(this, e, t, n, i, r);
                            }),
                                (e.requestAnimationFrame = (r = new _()).requestAnimationFrame.bind(r)),
                                (e.cancelAnimationFrame = r.cancelAnimationFrame.bind(r)),
                                (e.enableFPSCounter = r.Nb.bind(r)),
                                (e.disableFPSCounter = r.Kb),
                                (r.nb = i),
                                (e.resolveAnimationFrame = i),
                                (e.cleanup = function () {
                                    N && N.delete();
                                });
                        };
                        var g,
                            A,
                            I = Object.assign({}, e),
                            T = "./this.program",
                            S = "";
                        (c || d) &&
                            (d
                                ? (S = self.location.href)
                                : "u" > typeof document && document.currentScript && (S = document.currentScript.src),
                            i && (S = i),
                            (S = S.startsWith("blob:")
                                ? ""
                                : S.substr(0, S.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
                            d &&
                                (A = (e) => {
                                    var t = new XMLHttpRequest();
                                    return (
                                        t.open("GET", e, !1),
                                        (t.responseType = "arraybuffer"),
                                        t.send(null),
                                        new Uint8Array(t.response)
                                    );
                                }),
                            (g = (e, t, n) => {
                                if (W(e)) {
                                    var i = new XMLHttpRequest();
                                    i.open("GET", e, !0),
                                        (i.responseType = "arraybuffer"),
                                        (i.onload = () => {
                                            200 == i.status || (0 == i.status && i.response) ? t(i.response) : n();
                                        }),
                                        (i.onerror = n),
                                        i.send(null);
                                } else
                                    fetch(e, { credentials: "same-origin" })
                                        .then((e) =>
                                            e.ok ? e.arrayBuffer() : Promise.reject(Error(e.status + " : " + e.url)),
                                        )
                                        .then(t, n);
                            }));
                        var N = e.print || console.log.bind(console),
                            y = e.printErr || console.error.bind(console);
                        Object.assign(e, I),
                            (I = null),
                            e.thisProgram && (T = e.thisProgram),
                            e.wasmBinary && (C = e.wasmBinary);
                        var C,
                            v,
                            O,
                            R,
                            b,
                            D,
                            L,
                            w,
                            M,
                            P,
                            x = !1;
                        function U() {
                            var t = v.buffer;
                            (e.HEAP8 = O = new Int8Array(t)),
                                (e.HEAP16 = b = new Int16Array(t)),
                                (e.HEAPU8 = R = new Uint8Array(t)),
                                (e.HEAPU16 = D = new Uint16Array(t)),
                                (e.HEAP32 = L = new Int32Array(t)),
                                (e.HEAPU32 = w = new Uint32Array(t)),
                                (e.HEAPF32 = M = new Float32Array(t)),
                                (e.HEAPF64 = P = new Float64Array(t));
                        }
                        var k = [],
                            G = [],
                            F = [],
                            V = 0,
                            B = null,
                            H = null;
                        function j(t) {
                            throw (
                                (e.onAbort?.(t),
                                y((t = "Aborted(" + t + ")")),
                                (x = !0),
                                (t = new WebAssembly.RuntimeError(t + ". Build with -sASSERTIONS for more info.")),
                                l(t),
                                t)
                            );
                        }
                        var Y,
                            W = (e) => e.startsWith("file://");
                        function K(e) {
                            if (e == Y && C) return new Uint8Array(C);
                            if (A) return A(e);
                            throw "both async and sync fetching of the wasm failed";
                        }
                        function z(e, t, n) {
                            return (
                                C
                                    ? Promise.resolve().then(() => K(e))
                                    : new Promise((t, n) => {
                                          g(
                                              e,
                                              (e) => t(new Uint8Array(e)),
                                              () => {
                                                  try {
                                                      t(K(e));
                                                  } catch (e) {
                                                      n(e);
                                                  }
                                              },
                                          );
                                      })
                            )
                                .then((e) => WebAssembly.instantiate(e, t))
                                .then(n, (e) => {
                                    y(`failed to asynchronously prepare wasm: ${e}`), j(e);
                                });
                        }
                        var $,
                            q,
                            Z = {
                                464256: (e, t, n, i, r) => {
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
                                            (window.h.fa.stopped = i),
                                            (window.h.fa.vb = r);
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
                                                for (var t = 0; t < s.D.length; ++t) if (s.D[t] == e) return s.zb(t);
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
                                                                nr(t.ob);
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
                                467013: (e, t, n, i, r, s) => {
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
                                        (a.Y = a.K.createScriptProcessor(i, n, t)),
                                        (a.Y.onaudioprocess = function (n) {
                                            if (
                                                ((null == a.qa || 0 == a.qa.length) &&
                                                    (a.qa = new Float32Array(M.buffer, r, i * t)),
                                                e == window.h.I.capture || e == window.h.I.Ja)
                                            ) {
                                                for (var o = 0; o < t; o += 1)
                                                    for (
                                                        var l = n.inputBuffer.getChannelData(o), u = a.qa, c = 0;
                                                        c < i;
                                                        c += 1
                                                    )
                                                        u[c * t + o] = l[c];
                                                ns(s, i, r);
                                            }
                                            if (e == window.h.I.wa || e == window.h.I.Ja)
                                                for (na(s, i, r), o = 0; o < n.outputBuffer.numberOfChannels; ++o)
                                                    for (
                                                        l = n.outputBuffer.getChannelData(o), u = a.qa, c = 0;
                                                        c < i;
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
                            X = (t) => {
                                for (; 0 < t.length; ) t.shift()(e);
                            };
                        function Q() {
                            var e = L[e0 >> 2];
                            return (e0 += 4), e;
                        }
                        var J = (e, t) => {
                                for (var n = 0, i = e.length - 1; 0 <= i; i--) {
                                    var r = e[i];
                                    "." === r
                                        ? e.splice(i, 1)
                                        : ".." === r
                                          ? (e.splice(i, 1), n++)
                                          : n && (e.splice(i, 1), n--);
                                }
                                if (t) for (; n; n--) e.unshift("..");
                                return e;
                            },
                            ee = (e) => {
                                var t = "/" === e.charAt(0),
                                    n = "/" === e.substr(-1);
                                return (
                                    (e = J(
                                        e.split("/").filter((e) => !!e),
                                        !t,
                                    ).join("/")) ||
                                        t ||
                                        (e = "."),
                                    e && n && (e += "/"),
                                    (t ? "/" : "") + e
                                );
                            },
                            et = (e) => {
                                var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                                    .exec(e)
                                    .slice(1);
                                return ((e = t[0]), (t = t[1]), e || t) ? e + (t &&= t.substr(0, t.length - 1)) : ".";
                            },
                            en = (e) => {
                                if ("/" === e) return "/";
                                var t = (e = (e = ee(e)).replace(/\/$/, "")).lastIndexOf("/");
                                return -1 === t ? e : e.substr(t + 1);
                            },
                            ei = (e) =>
                                (ei = (() => {
                                    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
                                        return (e) => crypto.getRandomValues(e);
                                    j("initRandomDevice");
                                })())(e),
                            er = (...e) => {
                                for (var t = "", n = !1, i = e.length - 1; -1 <= i && !n; i--) {
                                    if ("string" != typeof (n = 0 <= i ? e[i] : "/"))
                                        throw TypeError("Arguments to path.resolve must be strings");
                                    if (!n) return "";
                                    (t = n + "/" + t), (n = "/" === n.charAt(0));
                                }
                                return (
                                    (t = J(
                                        t.split("/").filter((e) => !!e),
                                        !n,
                                    ).join("/")),
                                    (n ? "/" : "") + t || "."
                                );
                            },
                            es = "u" > typeof TextDecoder ? new TextDecoder("utf8") : void 0,
                            ea = (e, t, n) => {
                                var i = t + n;
                                for (n = t; e[n] && !(n >= i); ) ++n;
                                if (16 < n - t && e.buffer && es) return es.decode(e.subarray(t, n));
                                for (i = ""; t < n; ) {
                                    var r = e[t++];
                                    if (128 & r) {
                                        var s = 63 & e[t++];
                                        if (192 == (224 & r)) i += String.fromCharCode(((31 & r) << 6) | s);
                                        else {
                                            var a = 63 & e[t++];
                                            65536 >
                                            (r =
                                                224 == (240 & r)
                                                    ? ((15 & r) << 12) | (s << 6) | a
                                                    : ((7 & r) << 18) | (s << 12) | (a << 6) | (63 & e[t++]))
                                                ? (i += String.fromCharCode(r))
                                                : ((r -= 65536),
                                                  (i += String.fromCharCode(55296 | (r >> 10), 56320 | (1023 & r))));
                                        }
                                    } else i += String.fromCharCode(r);
                                }
                                return i;
                            },
                            eo = [],
                            el = (e) => {
                                for (var t = 0, n = 0; n < e.length; ++n) {
                                    var i = e.charCodeAt(n);
                                    127 >= i
                                        ? t++
                                        : 2047 >= i
                                          ? (t += 2)
                                          : 55296 <= i && 57343 >= i
                                            ? ((t += 4), ++n)
                                            : (t += 3);
                                }
                                return t;
                            },
                            eu = (e, t, n, i) => {
                                if (!(0 < i)) return 0;
                                var r = n;
                                i = n + i - 1;
                                for (var s = 0; s < e.length; ++s) {
                                    var a = e.charCodeAt(s);
                                    if (
                                        (55296 <= a &&
                                            57343 >= a &&
                                            (a = (65536 + ((1023 & a) << 10)) | (1023 & e.charCodeAt(++s))),
                                        127 >= a)
                                    ) {
                                        if (n >= i) break;
                                        t[n++] = a;
                                    } else {
                                        if (2047 >= a) {
                                            if (n + 1 >= i) break;
                                            t[n++] = 192 | (a >> 6);
                                        } else {
                                            if (65535 >= a) {
                                                if (n + 2 >= i) break;
                                                t[n++] = 224 | (a >> 12);
                                            } else {
                                                if (n + 3 >= i) break;
                                                (t[n++] = 240 | (a >> 18)), (t[n++] = 128 | ((a >> 12) & 63));
                                            }
                                            t[n++] = 128 | ((a >> 6) & 63);
                                        }
                                        t[n++] = 128 | (63 & a);
                                    }
                                }
                                return (t[n] = 0), n - r;
                            };
                        function ec(e, t) {
                            var n = Array(el(e) + 1);
                            return (e = eu(e, n, 0, n.length)), t && (n.length = e), n;
                        }
                        var ed = [];
                        function e_(e, t) {
                            var n, i;
                            (ed[e] = { input: [], G: [], V: t }), (n = e), (i = ef), (em[n] = { m: i });
                        }
                        var ef = {
                            open(e) {
                                var t = ed[e.node.xa];
                                if (!t) throw new eS(43);
                                (e.s = t), (e.seekable = !1);
                            },
                            close(e) {
                                e.s.V.oa(e.s);
                            },
                            oa(e) {
                                e.s.V.oa(e.s);
                            },
                            read(e, t, n, i) {
                                if (!e.s || !e.s.V.hb) throw new eS(60);
                                for (var r = 0, s = 0; s < i; s++) {
                                    try {
                                        var a = e.s.V.hb(e.s);
                                    } catch (e) {
                                        throw new eS(29);
                                    }
                                    if (void 0 === a && 0 === r) throw new eS(6);
                                    if (null == a) break;
                                    r++, (t[n + s] = a);
                                }
                                return r && (e.node.timestamp = Date.now()), r;
                            },
                            write(e, t, n, i) {
                                if (!e.s || !e.s.V.Ma) throw new eS(60);
                                try {
                                    for (var r = 0; r < i; r++) e.s.V.Ma(e.s, t[n + r]);
                                } catch (e) {
                                    throw new eS(29);
                                }
                                return i && (e.node.timestamp = Date.now()), r;
                            },
                        };
                        function eh(e, t) {
                            var n = e.l ? e.l.length : 0;
                            n >= t ||
                                ((t = Math.max(t, (n * (1048576 > n ? 2 : 1.125)) >>> 0)),
                                0 != n && (t = Math.max(t, 256)),
                                (n = e.l),
                                (e.l = new Uint8Array(t)),
                                0 < e.v && e.l.set(n.subarray(0, e.v), 0));
                        }
                        var ep = {
                                N: null,
                                U: () => ep.createNode(null, "/", 16895, 0),
                                createNode(e, t, n, i) {
                                    if (24576 == (61440 & n) || 4096 == (61440 & n)) throw new eS(63);
                                    return (
                                        ep.N ||
                                            (ep.N = {
                                                dir: {
                                                    node: {
                                                        X: ep.j.X,
                                                        P: ep.j.P,
                                                        ja: ep.j.ja,
                                                        ta: ep.j.ta,
                                                        sb: ep.j.sb,
                                                        yb: ep.j.yb,
                                                        tb: ep.j.tb,
                                                        rb: ep.j.rb,
                                                        Ca: ep.j.Ca,
                                                    },
                                                    stream: { aa: ep.m.aa },
                                                },
                                                file: {
                                                    node: { X: ep.j.X, P: ep.j.P },
                                                    stream: {
                                                        aa: ep.m.aa,
                                                        read: ep.m.read,
                                                        write: ep.m.write,
                                                        Xa: ep.m.Xa,
                                                        kb: ep.m.kb,
                                                        mb: ep.m.mb,
                                                    },
                                                },
                                                link: { node: { X: ep.j.X, P: ep.j.P, la: ep.j.la }, stream: {} },
                                                $a: { node: { X: ep.j.X, P: ep.j.P }, stream: eU },
                                            }),
                                        16384 == (61440 & (n = eD(e, t, n, i)).mode)
                                            ? ((n.j = ep.N.dir.node), (n.m = ep.N.dir.stream), (n.l = {}))
                                            : 32768 == (61440 & n.mode)
                                              ? ((n.j = ep.N.file.node),
                                                (n.m = ep.N.file.stream),
                                                (n.v = 0),
                                                (n.l = null))
                                              : 40960 == (61440 & n.mode)
                                                ? ((n.j = ep.N.link.node), (n.m = ep.N.link.stream))
                                                : 8192 == (61440 & n.mode) &&
                                                  ((n.j = ep.N.$a.node), (n.m = ep.N.$a.stream)),
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
                                    ta: (e, t, n, i) => ep.createNode(e, t, n, i),
                                    sb(e, t, n) {
                                        if (16384 == (61440 & e.mode)) {
                                            try {
                                                var i = eb(t, n);
                                            } catch (e) {}
                                            if (i) for (var r in i.l) throw new eS(55);
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
                                            i = eb(e, t);
                                        for (n in i.l) throw new eS(55);
                                        delete e.l[t], (e.timestamp = Date.now());
                                    },
                                    rb(e) {
                                        var t,
                                            n = [".", ".."];
                                        for (t of Object.keys(e.l)) n.push(t);
                                        return n;
                                    },
                                    Ca: (e, t, n) => (((e = ep.createNode(e, t, 41471, 0)).link = n), e),
                                    la(e) {
                                        if (40960 != (61440 & e.mode)) throw new eS(28);
                                        return e.link;
                                    },
                                },
                                m: {
                                    read(e, t, n, i, r) {
                                        var s = e.node.l;
                                        if (r >= e.node.v) return 0;
                                        if (8 < (e = Math.min(e.node.v - r, i)) && s.subarray)
                                            t.set(s.subarray(r, r + e), n);
                                        else for (i = 0; i < e; i++) t[n + i] = s[r + i];
                                        return e;
                                    },
                                    write(e, t, n, i, r, s) {
                                        if ((t.buffer === O.buffer && (s = !1), !i)) return 0;
                                        if (
                                            (((e = e.node).timestamp = Date.now()),
                                            t.subarray && (!e.l || e.l.subarray))
                                        ) {
                                            if (s) return (e.l = t.subarray(n, n + i)), (e.v = i);
                                            if (0 === e.v && 0 === r) return (e.l = t.slice(n, n + i)), (e.v = i);
                                            if (r + i <= e.v) return e.l.set(t.subarray(n, n + i), r), i;
                                        }
                                        if ((eh(e, r + i), e.l.subarray && t.subarray))
                                            e.l.set(t.subarray(n, n + i), r);
                                        else for (s = 0; s < i; s++) e.l[r + s] = t[n + s];
                                        return (e.v = Math.max(e.v, r + i)), i;
                                    },
                                    aa(e, t, n) {
                                        if (
                                            (1 === n
                                                ? (t += e.position)
                                                : 2 === n && 32768 == (61440 & e.node.mode) && (t += e.node.v),
                                            0 > t)
                                        )
                                            throw new eS(28);
                                        return t;
                                    },
                                    Xa(e, t, n) {
                                        eh(e.node, t + n), (e.node.v = Math.max(e.node.v, t + n));
                                    },
                                    kb(e, t, n, i, r) {
                                        if (32768 != (61440 & e.node.mode)) throw new eS(43);
                                        if (((e = e.node.l), 2 & r || e.buffer !== O.buffer))
                                            throw (
                                                ((0 < n || n + t < e.length) &&
                                                    (e = e.subarray
                                                        ? e.subarray(n, n + t)
                                                        : Array.prototype.slice.call(e, n, n + t)),
                                                (n = !0),
                                                j(),
                                                (t = void 0),
                                                new eS(48))
                                            );
                                        return (n = !1), (t = e.byteOffset), { o: t, uc: n };
                                    },
                                    mb: (e, t, n, i) => (ep.m.write(e, t, 0, i, n, !1), 0),
                                },
                            },
                            eE = null,
                            em = {},
                            eg = [],
                            eA = 1,
                            eI = null,
                            eT = !0,
                            eS = class {
                                constructor(e) {
                                    (this.name = "ErrnoError"), (this.$ = e);
                                }
                            },
                            eN = {},
                            ey = class {
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
                            eC = class {
                                constructor(e, t, n, i) {
                                    (e ||= this),
                                        (this.parent = e),
                                        (this.U = e.U),
                                        (this.ua = null),
                                        (this.id = eA++),
                                        (this.name = t),
                                        (this.mode = n),
                                        (this.j = {}),
                                        (this.m = {}),
                                        (this.xa = i);
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
                        function ev(e, t = {}) {
                            if (!(e = er(e))) return { path: "", node: null };
                            if (8 < (t = Object.assign({ gb: !0, Oa: 0 }, t)).Oa) throw new eS(32);
                            e = e.split("/").filter((e) => !!e);
                            for (var n = eE, i = "/", r = 0; r < e.length; r++) {
                                var s = r === e.length - 1;
                                if (s && t.parent) break;
                                if (
                                    ((n = eb(n, e[r])),
                                    (i = ee(i + "/" + e[r])),
                                    n.ua && (!s || (s && t.gb)) && (n = n.ua.root),
                                    !s || t.fb)
                                ) {
                                    for (s = 0; 40960 == (61440 & n.mode); )
                                        if (
                                            ((n = (function (e) {
                                                if (!(e = ev(e).node)) throw new eS(44);
                                                if (!e.j.la) throw new eS(28);
                                                return er(eO(e.parent), e.j.la(e));
                                            })(i)),
                                            (n = ev((i = er(et(i), n)), { Oa: t.Oa + 1 }).node),
                                            40 < s++)
                                        )
                                            throw new eS(32);
                                }
                            }
                            return { path: i, node: n };
                        }
                        function eO(e) {
                            for (var t; ; ) {
                                if (e === e.parent)
                                    return (e = e.U.lb), t ? ("/" !== e[e.length - 1] ? `${e}/${t}` : e + t) : e;
                                (t = t ? `${e.name}/${t}` : e.name), (e = e.parent);
                            }
                        }
                        function eR(e, t) {
                            for (var n = 0, i = 0; i < t.length; i++) n = ((n << 5) - n + t.charCodeAt(i)) | 0;
                            return ((e + n) >>> 0) % eI.length;
                        }
                        function eb(e, t) {
                            var n = 16384 == (61440 & e.mode) ? ((n = ew(e, "x")) ? n : 2 * !e.j.ja) : 54;
                            if (n) throw new eS(n);
                            for (n = eI[eR(e.id, t)]; n; n = n.ec) {
                                var i = n.name;
                                if (n.parent.id === e.id && i === t) return n;
                            }
                            return e.j.ja(e, t);
                        }
                        function eD(e, t, n, i) {
                            return (t = eR((e = new eC(e, t, n, i)).parent.id, e.name)), (e.ec = eI[t]), (eI[t] = e);
                        }
                        function eL(e) {
                            var t = ["r", "w", "rw"][3 & e];
                            return 512 & e && (t += "w"), t;
                        }
                        function ew(e, t) {
                            return eT
                                ? 0
                                : (t.includes("r") && !(292 & e.mode)) ||
                                    (t.includes("w") && !(146 & e.mode)) ||
                                    (t.includes("x") && !(73 & e.mode))
                                  ? 2
                                  : 0;
                        }
                        function eM(e, t) {
                            try {
                                return eb(e, t), 20;
                            } catch (e) {}
                            return ew(e, "wx");
                        }
                        function eP(e) {
                            if (!(e = eg[e])) throw new eS(8);
                            return e;
                        }
                        function ex(e, t = -1) {
                            if (((e = Object.assign(new ey(), e)), -1 == t))
                                e: {
                                    for (t = 0; 4096 >= t; t++) if (!eg[t]) break e;
                                    throw new eS(33);
                                }
                            return (e.W = t), (eg[t] = e);
                        }
                        var eU = {
                            open(e) {
                                (e.m = em[e.node.xa].m), e.m.open?.(e);
                            },
                            aa() {
                                throw new eS(70);
                            },
                        };
                        function ek(e, t) {
                            var n = "/" === t;
                            if (n && eE) throw new eS(10);
                            if (!n && t) {
                                var i = ev(t, { gb: !1 });
                                if (((t = i.path), (i = i.node).ua)) throw new eS(10);
                                if (16384 != (61440 & i.mode)) throw new eS(54);
                            }
                            (t = { type: e, Mc: {}, lb: t, dc: [] }),
                                ((e = e.U(t)).U = t),
                                (t.root = e),
                                n ? (eE = e) : i && ((i.ua = t), i.U && i.U.dc.push(t));
                        }
                        function eG(e, t, n) {
                            var i = ev(e, { parent: !0 }).node;
                            if (!(e = en(e)) || "." === e || ".." === e) throw new eS(28);
                            var r = eM(i, e);
                            if (r) throw new eS(r);
                            if (!i.j.ta) throw new eS(63);
                            return i.j.ta(i, e, t, n);
                        }
                        function eF(e) {
                            return eG(e, 16895, 0);
                        }
                        function eV(e, t, n) {
                            void 0 === n && ((n = t), (t = 438)), eG(e, 8192 | t, n);
                        }
                        function eB(e, t) {
                            if (!er(e)) throw new eS(44);
                            var n = ev(t, { parent: !0 }).node;
                            if (!n) throw new eS(44);
                            var i = eM(n, (t = en(t)));
                            if (i) throw new eS(i);
                            if (!n.j.Ca) throw new eS(63);
                            n.j.Ca(n, t, e);
                        }
                        function eH(t, n, i) {
                            if ("" === t) throw new eS(44);
                            if ("string" == typeof n) {
                                var r = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[n];
                                if (void 0 === r) throw Error(`Unknown file open mode: ${n}`);
                                n = r;
                            }
                            if (((i = 64 & n ? ((void 0 === i ? 438 : i) & 4095) | 32768 : 0), "object" == typeof t))
                                var s = t;
                            else {
                                t = ee(t);
                                try {
                                    s = ev(t, { fb: !(131072 & n) }).node;
                                } catch (e) {}
                            }
                            if (((r = !1), 64 & n))
                                if (s) {
                                    if (128 & n) throw new eS(20);
                                } else (s = eG(t, i, 0)), (r = !0);
                            if (!s) throw new eS(44);
                            if ((8192 == (61440 & s.mode) && (n &= -513), 65536 & n && 16384 != (61440 & s.mode)))
                                throw new eS(54);
                            if (
                                !r &&
                                (i = s
                                    ? 40960 == (61440 & s.mode)
                                        ? 32
                                        : 16384 == (61440 & s.mode) && ("r" !== eL(n) || 512 & n)
                                          ? 31
                                          : ew(s, eL(n))
                                    : 44)
                            )
                                throw new eS(i);
                            if (512 & n && !r) {
                                if (!(i = "string" == typeof (i = s) ? ev(i, { fb: !0 }).node : i).j.P)
                                    throw new eS(63);
                                if (16384 == (61440 & i.mode)) throw new eS(31);
                                if (32768 != (61440 & i.mode)) throw new eS(28);
                                if ((r = ew(i, "w"))) throw new eS(r);
                                i.j.P(i, { size: 0, timestamp: Date.now() });
                            }
                            return (
                                (n &= -131713),
                                (s = ex({
                                    node: s,
                                    path: eO(s),
                                    flags: n,
                                    seekable: !0,
                                    position: 0,
                                    m: s.m,
                                    sc: [],
                                    error: !1,
                                })).m.open && s.m.open(s),
                                !e.logReadFiles || 1 & n || t in (ez ||= {}) || (ez[t] = 1),
                                s
                            );
                        }
                        function ej(e, t, n) {
                            if (null === e.W) throw new eS(8);
                            if (!e.seekable || !e.m.aa) throw new eS(70);
                            if (0 != n && 1 != n && 2 != n) throw new eS(28);
                            (e.position = e.m.aa(e, t, n)), (e.sc = []);
                        }
                        function eY(e, t, n) {
                            e = ee("/dev/" + e);
                            var i,
                                r = ((i = 0), t && (i |= 365), n && (i |= 146), i);
                            eK ||= 64;
                            var s = eK++ << 8;
                            (em[s] = {
                                m: {
                                    open(e) {
                                        e.seekable = !1;
                                    },
                                    close() {
                                        n?.buffer?.length && n(10);
                                    },
                                    read(e, n, i, r) {
                                        for (var s = 0, a = 0; a < r; a++) {
                                            try {
                                                var o = t();
                                            } catch (e) {
                                                throw new eS(29);
                                            }
                                            if (void 0 === o && 0 === s) throw new eS(6);
                                            if (null == o) break;
                                            s++, (n[i + a] = o);
                                        }
                                        return s && (e.node.timestamp = Date.now()), s;
                                    },
                                    write(e, t, i, r) {
                                        for (var s = 0; s < r; s++)
                                            try {
                                                n(t[i + s]);
                                            } catch (e) {
                                                throw new eS(29);
                                            }
                                        return r && (e.node.timestamp = Date.now()), s;
                                    },
                                },
                            }),
                                eV(e, r, s);
                        }
                        var eW,
                            eK,
                            ez,
                            e$,
                            eq,
                            eZ,
                            eX,
                            eQ,
                            eJ = {},
                            e0 = void 0,
                            e1 = (e, t) => Object.defineProperty(t, "name", { value: e }),
                            e2 = [],
                            e3 = [],
                            e6 = (e) => {
                                if (!e) throw new e$("Cannot use deleted val. handle = " + e);
                                return e3[e];
                            },
                            e4 = (e) => {
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
                                    n = e1(e, function (t) {
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
                                        return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
                                    }),
                                    n
                                );
                            },
                            e7 = (e) => {
                                for (var t = ""; R[e]; ) t += eZ[R[e++]];
                                return t;
                            },
                            e8 = [],
                            e9 = () => {
                                for (; e8.length; ) {
                                    var e = e8.pop();
                                    (e.g.ea = !1), e.delete();
                                }
                            },
                            te = {},
                            tt = (e, t) => {
                                if (void 0 === t) throw new e$("ptr should not be undefined");
                                for (; e.C; ) (t = e.ma(t)), (e = e.C);
                                return t;
                            },
                            tn = {},
                            ti = (e) => {
                                var t = e7((e = ni(e)));
                                return nt(e), t;
                            },
                            tr = (e, t) => {
                                var n = tn[e];
                                if (void 0 === n) throw ((e = `${t} has unknown type ${ti(e)}`), new e$(e));
                                return n;
                            },
                            ts = () => {},
                            ta = !1,
                            to = (e, t, n) =>
                                t === n ? e : void 0 === n.C || null === (e = to(e, t, n.C)) ? null : n.Lb(e),
                            tl = {},
                            tu = (e, t) => {
                                if (!t.u || !t.o) throw new eQ("makeClassHandle requires ptr and ptrType");
                                if (!!t.J != !!t.F) throw new eQ("Both smartPtrType and smartPtr must be specified");
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
                                      (ts = (e) => {
                                          ta.unregister(e);
                                      }),
                                      tc(e)),
                            td = {},
                            t_ = (e) => {
                                for (; e.length; ) {
                                    var t = e.pop();
                                    e.pop()(t);
                                }
                            };
                        function tf(e) {
                            return this.fromWireType(w[e >> 2]);
                        }
                        var th = {},
                            tp = {},
                            tE = (e, t, n) => {
                                function i(t) {
                                    if ((t = n(t)).length !== e.length) throw new eQ("Mismatched type converter count");
                                    for (var i = 0; i < e.length; ++i) tm(e[i], t[i]);
                                }
                                e.forEach(function (e) {
                                    tp[e] = t;
                                });
                                var r = Array(t.length),
                                    s = [],
                                    a = 0;
                                t.forEach((e, t) => {
                                    tn.hasOwnProperty(e)
                                        ? (r[t] = tn[e])
                                        : (s.push(e),
                                          th.hasOwnProperty(e) || (th[e] = []),
                                          th[e].push(() => {
                                              (r[t] = tn[e]), ++a === s.length && i(r);
                                          }));
                                }),
                                    0 === s.length && i(r);
                            };
                        function tm(e, t, n = {}) {
                            if (!("argPackAdvance" in t))
                                throw TypeError("registerType registeredInstance requires argPackAdvance");
                            return (function (e, t, n = {}) {
                                var i = t.name;
                                if (!e) throw new e$(`type "${i}" must have a positive integer typeid pointer`);
                                if (tn.hasOwnProperty(e)) {
                                    if (n.Vb) return;
                                    throw new e$(`Cannot register type '${i}' twice`);
                                }
                                (tn[e] = t),
                                    delete tp[e],
                                    th.hasOwnProperty(e) && ((t = th[e]), delete th[e], t.forEach((e) => e()));
                            })(e, t, n);
                        }
                        var tg = (e) => {
                            throw new e$(e.g.u.i.name + " instance already deleted");
                        };
                        function tA() {}
                        var tI = (e, t, n) => {
                                if (void 0 === e[t].A) {
                                    var i = e[t];
                                    (e[t] = function (...i) {
                                        if (!e[t].A.hasOwnProperty(i.length))
                                            throw new e$(
                                                `Function '${n}' called with an invalid number of arguments (${i.length}) - expects one of (${e[t].A})!`,
                                            );
                                        return e[t].A[i.length].apply(this, i);
                                    }),
                                        (e[t].A = []),
                                        (e[t].A[i.da] = i);
                                }
                            },
                            tT = (t, n, i) => {
                                if (e.hasOwnProperty(t)) {
                                    if (void 0 === i || (void 0 !== e[t].A && void 0 !== e[t].A[i]))
                                        throw new e$(`Cannot register public name '${t}' twice`);
                                    if ((tI(e, t, t), e.hasOwnProperty(i)))
                                        throw new e$(
                                            `Cannot register multiple overloads of a function with the same number of arguments (${i})!`,
                                        );
                                    e[t].A[i] = n;
                                } else (e[t] = n), void 0 !== i && (e[t].Lc = i);
                            };
                        function tS(e, t, n, i, r, s, a, o) {
                            (this.name = e),
                                (this.constructor = t),
                                (this.M = n),
                                (this.O = i),
                                (this.C = r),
                                (this.Qb = s),
                                (this.ma = a),
                                (this.Lb = o),
                                (this.pb = []);
                        }
                        var tN = (e, t, n) => {
                            for (; t !== n; ) {
                                if (!t.ma)
                                    throw new e$(
                                        `Expected null or instance of ${n.name}, got an instance of ${t.name}`,
                                    );
                                (e = t.ma(e)), (t = t.C);
                            }
                            return e;
                        };
                        function ty(e, t) {
                            if (null === t) {
                                if (this.La) throw new e$(`null is not a valid ${this.name}`);
                                return 0;
                            }
                            if (!t.g) throw new e$(`Cannot pass "${tH(t)}" as a ${this.name}`);
                            if (!t.g.o) throw new e$(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            return tN(t.g.o, t.g.u.i, this.i);
                        }
                        function tC(e, t) {
                            if (null === t) {
                                if (this.La) throw new e$(`null is not a valid ${this.name}`);
                                if (this.sa) {
                                    var n = this.Na();
                                    return null !== e && e.push(this.O, n), n;
                                }
                                return 0;
                            }
                            if (!t || !t.g) throw new e$(`Cannot pass "${tH(t)}" as a ${this.name}`);
                            if (!t.g.o) throw new e$(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            if (!this.ra && t.g.u.ra)
                                throw new e$(
                                    `Cannot convert argument of type ${t.g.J ? t.g.J.name : t.g.u.name} to parameter type ${this.name}`,
                                );
                            if (((n = tN(t.g.o, t.g.u.i, this.i)), this.sa)) {
                                if (void 0 === t.g.F) throw new e$("Passing raw pointer to smart pointer is illegal");
                                switch (this.mc) {
                                    case 0:
                                        if (t.g.J === this) n = t.g.F;
                                        else
                                            throw new e$(
                                                `Cannot convert argument of type ${t.g.J ? t.g.J.name : t.g.u.name} to parameter type ${this.name}`,
                                            );
                                        break;
                                    case 1:
                                        n = t.g.F;
                                        break;
                                    case 2:
                                        if (t.g.J === this) n = t.g.F;
                                        else {
                                            var i = t.clone();
                                            (n = this.ic(
                                                n,
                                                e4(() => i.delete()),
                                            )),
                                                null !== e && e.push(this.O, n);
                                        }
                                        break;
                                    default:
                                        throw new e$("Unsupporting sharing policy");
                                }
                            }
                            return n;
                        }
                        function tv(e, t) {
                            if (null === t) {
                                if (this.La) throw new e$(`null is not a valid ${this.name}`);
                                return 0;
                            }
                            if (!t.g) throw new e$(`Cannot pass "${tH(t)}" as a ${this.name}`);
                            if (!t.g.o) throw new e$(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            if (t.g.u.ra)
                                throw new e$(
                                    `Cannot convert argument of type ${t.g.u.name} to parameter type ${this.name}`,
                                );
                            return tN(t.g.o, t.g.u.i, this.i);
                        }
                        function tO(e, t, n, i, r, s, a, o, l, u, c) {
                            (this.name = e),
                                (this.i = t),
                                (this.La = n),
                                (this.ra = i),
                                (this.sa = r),
                                (this.hc = s),
                                (this.mc = a),
                                (this.qb = o),
                                (this.Na = l),
                                (this.ic = u),
                                (this.O = c),
                                r || void 0 !== t.C
                                    ? (this.toWireType = tC)
                                    : ((this.toWireType = i ? ty : tv), (this.L = null));
                        }
                        var tR,
                            tb,
                            tD = (t, n, i) => {
                                if (!e.hasOwnProperty(t)) throw new eQ("Replacing nonexistent public symbol");
                                void 0 !== e[t].A && void 0 !== i ? (e[t].A[i] = n) : ((e[t] = n), (e[t].da = i));
                            },
                            tL = [],
                            tw = (e) => {
                                var t = tL[e];
                                return t || (e >= tL.length && (tL.length = e + 1), (tL[e] = t = tR.get(e))), t;
                            },
                            tM = (t, n) => {
                                let i;
                                var r = (t = e7(t)).includes("j")
                                    ? ((i = t),
                                      (...t) =>
                                          ((t, n, i = []) =>
                                              t.includes("j")
                                                  ? (0, e["dynCall_" + (t = t.replace(/p/g, "i"))])(n, ...i)
                                                  : tw(n)(...i))(i, n, t))
                                    : tw(n);
                                if ("function" != typeof r)
                                    throw new e$(`unknown function pointer with signature ${t}: ${n}`);
                                return r;
                            },
                            tP = (e, t) => {
                                var n = [],
                                    i = {};
                                throw (
                                    (t.forEach(function e(t) {
                                        i[t] || tn[t] || (tp[t] ? tp[t].forEach(e) : (n.push(t), (i[t] = !0)));
                                    }),
                                    new tb(`${e}: ` + n.map(ti).join([", "])))
                                );
                            };
                        function tx(e, t, n, i, r) {
                            var s = t.length;
                            if (2 > s)
                                throw new e$(
                                    "argTypes array size mismatch! Must at least get return value and 'this' types!",
                                );
                            var a = null !== t[1] && null !== n,
                                o = (function (e) {
                                    for (var t = 1; t < e.length; ++t)
                                        if (null !== e[t] && void 0 === e[t].L) return !0;
                                    return !1;
                                })(t),
                                l = "void" !== t[0].name,
                                u = s - 2,
                                c = Array(u),
                                d = [],
                                _ = [];
                            return e1(e, function (...n) {
                                if (n.length !== u)
                                    throw new e$(`function ${e} called with ${n.length} arguments, expected ${u}`);
                                if (((_.length = 0), (d.length = a ? 2 : 1), (d[0] = r), a)) {
                                    var s = t[1].toWireType(_, this);
                                    d[1] = s;
                                }
                                for (var f = 0; f < u; ++f) (c[f] = t[f + 2].toWireType(_, n[f])), d.push(c[f]);
                                if (((n = i(...d)), o)) t_(_);
                                else
                                    for (f = a ? 1 : 2; f < t.length; f++) {
                                        var h = 1 === f ? s : c[f - 2];
                                        null !== t[f].L && t[f].L(h);
                                    }
                                return l ? t[0].fromWireType(n) : void 0;
                            });
                        }
                        var tU,
                            tk = (e, t) => {
                                for (var n = [], i = 0; i < e; i++) n.push(w[(t + 4 * i) >> 2]);
                                return n;
                            },
                            tG = (e) => {
                                let t = (e = e.trim()).indexOf("(");
                                return -1 !== t ? e.substr(0, t) : e;
                            },
                            tF = (e, t, n) => {
                                if (!(e instanceof Object)) throw new e$(`${n} with invalid "this": ${e}`);
                                if (!(e instanceof t.i.constructor))
                                    throw new e$(`${n} incompatible with "this" of type ${e.constructor.name}`);
                                if (!e.g.o)
                                    throw new e$(`cannot call emscripten binding method ${n} on deleted object`);
                                return tN(e.g.o, e.g.u.i, t.i);
                            },
                            tV = (e) => {
                                9 < e && 0 == --e3[e + 1] && ((e3[e] = void 0), e2.push(e));
                            },
                            tB = {
                                name: "emscripten::val",
                                fromWireType: (e) => {
                                    var t = e6(e);
                                    return tV(e), t;
                                },
                                toWireType: (e, t) => e4(t),
                                argPackAdvance: 8,
                                readValueFromPointer: tf,
                                L: null,
                            },
                            tH = (e) => {
                                if (null === e) return "null";
                                var t = typeof e;
                                return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e;
                            },
                            tj = "u" > typeof TextDecoder ? new TextDecoder("utf-16le") : void 0,
                            tY = (e, t) => {
                                for (var n = e >> 1, i = n + t / 2; !(n >= i) && D[n]; ) ++n;
                                if (32 < (n <<= 1) - e && tj) return tj.decode(R.subarray(e, n));
                                for (i = 0, n = ""; !(i >= t / 2); ++i) {
                                    var r = b[(e + 2 * i) >> 1];
                                    if (0 == r) break;
                                    n += String.fromCharCode(r);
                                }
                                return n;
                            },
                            tW = (e, t, n) => {
                                if (2 > (n ??= 0x7fffffff)) return 0;
                                n -= 2;
                                var i = t;
                                n = n < 2 * e.length ? n / 2 : e.length;
                                for (var r = 0; r < n; ++r) (b[t >> 1] = e.charCodeAt(r)), (t += 2);
                                return (b[t >> 1] = 0), t - i;
                            },
                            tK = (e) => 2 * e.length,
                            tz = (e, t) => {
                                for (var n = 0, i = ""; !(n >= t / 4); ) {
                                    var r = L[(e + 4 * n) >> 2];
                                    if (0 == r) break;
                                    ++n,
                                        65536 <= r
                                            ? ((r -= 65536),
                                              (i += String.fromCharCode(55296 | (r >> 10), 56320 | (1023 & r))))
                                            : (i += String.fromCharCode(r));
                                }
                                return i;
                            },
                            t$ = (e, t, n) => {
                                if (4 > (n ??= 0x7fffffff)) return 0;
                                var i = t;
                                n = i + n - 4;
                                for (var r = 0; r < e.length; ++r) {
                                    var s = e.charCodeAt(r);
                                    if (
                                        (55296 <= s &&
                                            57343 >= s &&
                                            (s = (65536 + ((1023 & s) << 10)) | (1023 & e.charCodeAt(++r))),
                                        (L[t >> 2] = s),
                                        (t += 4) + 4 > n)
                                    )
                                        break;
                                }
                                return (L[t >> 2] = 0), t - i;
                            },
                            tq = (e) => {
                                for (var t = 0, n = 0; n < e.length; ++n) {
                                    var i = e.charCodeAt(n);
                                    55296 <= i && 57343 >= i && ++n, (t += 4);
                                }
                                return t;
                            },
                            tZ = (e, t, n) => {
                                var i = [];
                                return (e = e.toWireType(i, n)), i.length && (w[t >> 2] = e4(i)), e;
                            },
                            tX = {},
                            tQ = (e) => {
                                var t = tX[e];
                                return void 0 === t ? e7(e) : t;
                            },
                            tJ = [],
                            t0 = Reflect.construct,
                            t1 = [],
                            t2 = {},
                            t3 = () => {
                                if (!tU) {
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
                                            _: T || "./this.program",
                                        };
                                    for (e in t2) void 0 === t2[e] ? delete t[e] : (t[e] = t2[e]);
                                    var n = [];
                                    for (e in t) n.push(`${e}=${t[e]}`);
                                    tU = n;
                                }
                                return tU;
                            },
                            t6 = (e) => 0 == e % 4 && (0 != e % 100 || 0 == e % 400),
                            t4 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                            t5 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                        [44].forEach((e) => {
                            (eN[e] = new eS(e)), (eN[e].stack = "<generic error, no stack>");
                        }),
                            (eI = Array(4096)),
                            ek(ep, "/"),
                            eF("/tmp"),
                            eF("/home"),
                            eF("/home/web_user"),
                            eF("/dev"),
                            (em[259] = { m: { read: () => 0, write: (e, t, n, i) => i } }),
                            eV("/dev/null", 259),
                            e_(1280, {
                                hb() {
                                    e: {
                                        if (!eo.length) {
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
                                            eo = ec(e, !0);
                                        }
                                        e = eo.shift();
                                    }
                                    return e;
                                },
                                Ma(e, t) {
                                    null === t || 10 === t ? (N(ea(e.G, 0)), (e.G = [])) : 0 != t && e.G.push(t);
                                },
                                oa(e) {
                                    e.G && 0 < e.G.length && (N(ea(e.G, 0)), (e.G = []));
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
                            e_(1536, {
                                Ma(e, t) {
                                    null === t || 10 === t ? (y(ea(e.G, 0)), (e.G = [])) : 0 != t && e.G.push(t);
                                },
                                oa(e) {
                                    e.G && 0 < e.G.length && (y(ea(e.G, 0)), (e.G = []));
                                },
                            }),
                            eV("/dev/tty", 1280),
                            eV("/dev/tty1", 1536),
                            (t = new Uint8Array(1024)),
                            (n = 0),
                            eY("random", (r = () => (0 === n && (n = ei(t).byteLength), t[--n]))),
                            eY("urandom", r),
                            eF("/dev/shm"),
                            eF("/dev/shm/tmp"),
                            eF("/proc"),
                            (s = eF("/proc/self")),
                            eF("/proc/self/fd"),
                            ek(
                                {
                                    U() {
                                        var e = eD(s, "fd", 16895, 73);
                                        return (
                                            (e.j = {
                                                ja(e, t) {
                                                    var n = eP(+t);
                                                    return ((e = {
                                                        parent: null,
                                                        U: { lb: "fake" },
                                                        j: { la: () => n.path },
                                                    }).parent = e);
                                                },
                                            }),
                                            e
                                        );
                                    },
                                },
                                "/proc/self/fd",
                            ),
                            (e$ = e.BindingError =
                                class extends Error {
                                    constructor(e) {
                                        super(e), (this.name = "BindingError");
                                    }
                                }),
                            e3.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
                            (e.count_emval_handles = () => e3.length / 2 - 5 - e2.length),
                            (eq = e.PureVirtualError = e5("PureVirtualError"));
                        for (var t7 = Array(256), t8 = 0; 256 > t8; ++t8) t7[t8] = String.fromCharCode(t8);
                        (eZ = t7),
                            (e.getInheritedInstanceCount = () => Object.keys(te).length),
                            (e.getLiveInheritedInstances = () => {
                                var e,
                                    t = [];
                                for (e in te) te.hasOwnProperty(e) && t.push(te[e]);
                                return t;
                            }),
                            (e.flushPendingDeletes = e9),
                            (e.setDelayFunction = (e) => {
                                (eX = e), e8.length && eX && eX(e9);
                            }),
                            (eQ = e.InternalError =
                                class extends Error {
                                    constructor(e) {
                                        super(e), (this.name = "InternalError");
                                    }
                                }),
                            Object.assign(tA.prototype, {
                                isAliasOf: function (e) {
                                    if (!(this instanceof tA && e instanceof tA)) return !1;
                                    var t = this.g.u.i,
                                        n = this.g.o;
                                    e.g = e.g;
                                    var i = e.g.u.i;
                                    for (e = e.g.o; t.C; ) (n = t.ma(n)), (t = t.C);
                                    for (; i.C; ) (e = i.ma(e)), (i = i.C);
                                    return t === i && n === e;
                                },
                                clone: function () {
                                    if ((this.g.o || tg(this), this.g.ha)) return (this.g.count.value += 1), this;
                                    var e = tc,
                                        t = Object,
                                        n = t.create,
                                        i = Object.getPrototypeOf(this),
                                        r = this.g;
                                    return (
                                        (e = e(
                                            n.call(t, i, {
                                                g: {
                                                    value: {
                                                        count: r.count,
                                                        ea: r.ea,
                                                        ha: r.ha,
                                                        o: r.o,
                                                        u: r.u,
                                                        F: r.F,
                                                        J: r.J,
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
                                        throw new e$("Object already scheduled for deletion");
                                    ts(this);
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
                                        throw new e$("Object already scheduled for deletion");
                                    return e8.push(this), 1 === e8.length && eX && eX(e9), (this.g.ea = !0), this;
                                },
                            }),
                            Object.assign(tO.prototype, {
                                Rb(e) {
                                    return this.qb && (e = this.qb(e)), e;
                                },
                                ab(e) {
                                    this.O?.(e);
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: tf,
                                fromWireType: function (e) {
                                    function t() {
                                        return this.sa
                                            ? tu(this.i.M, { u: this.hc, o: n, J: this, F: e })
                                            : tu(this.i.M, { u: this, o: e });
                                    }
                                    var n = this.Rb(e);
                                    if (!n) return this.ab(e), null;
                                    var i = te[tt(this.i, n)];
                                    if (void 0 !== i)
                                        return 0 === i.g.count.value
                                            ? ((i.g.o = n), (i.g.F = e), i.clone())
                                            : ((i = i.clone()), this.ab(e), i);
                                    if (!(i = tl[(i = this.i.Qb(n))])) return t.call(this);
                                    i = this.ra ? i.Hb : i.pointerType;
                                    var r = to(n, this.i, i.i);
                                    return null === r
                                        ? t.call(this)
                                        : this.sa
                                          ? tu(i.i.M, { u: i, o: r, J: this, F: e })
                                          : tu(i.i.M, { u: i, o: r });
                                },
                            }),
                            (tb = e.UnboundTypeError = e5("UnboundTypeError"));
                        var t9 = {
                                __syscall_fcntl64: function (e, t, n) {
                                    e0 = n;
                                    try {
                                        var i = eP(e);
                                        switch (t) {
                                            case 0:
                                                var r = Q();
                                                if (0 > r) break;
                                                for (; eg[r]; ) r++;
                                                return (function (e, t = -1) {
                                                    return (e = ex(e, t)), e.m?.Ec?.(e), e;
                                                })(i, r).W;
                                            case 1:
                                            case 2:
                                            case 13:
                                            case 14:
                                                return 0;
                                            case 3:
                                                return i.flags;
                                            case 4:
                                                return (r = Q()), (i.flags |= r), 0;
                                            case 12:
                                                return (b[((r = Q()) + 0) >> 1] = 2), 0;
                                        }
                                        return -28;
                                    } catch (e) {
                                        if (void 0 === eJ || "ErrnoError" !== e.name) throw e;
                                        return -e.$;
                                    }
                                },
                                __syscall_ioctl: function (e, t, n) {
                                    e0 = n;
                                    try {
                                        var i = eP(e);
                                        switch (t) {
                                            case 21509:
                                            case 21510:
                                            case 21511:
                                            case 21512:
                                            case 21524:
                                            case 21515:
                                                return i.s ? 0 : -59;
                                            case 21505:
                                                if (!i.s) return -59;
                                                if (i.s.V.Xb) {
                                                    e = [
                                                        3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0,
                                                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                                    ];
                                                    var r = Q();
                                                    (L[r >> 2] = 25856),
                                                        (L[(r + 4) >> 2] = 5),
                                                        (L[(r + 8) >> 2] = 191),
                                                        (L[(r + 12) >> 2] = 35387);
                                                    for (var s = 0; 32 > s; s++) O[r + s + 17] = e[s] || 0;
                                                }
                                                return 0;
                                            case 21506:
                                            case 21507:
                                            case 21508:
                                                if (!i.s) return -59;
                                                if (i.s.V.Yb)
                                                    for (r = Q(), e = [], s = 0; 32 > s; s++) e.push(O[r + s + 17]);
                                                return 0;
                                            case 21519:
                                                if (!i.s) return -59;
                                                return (L[(r = Q()) >> 2] = 0);
                                            case 21520:
                                                return i.s ? -28 : -59;
                                            case 21531:
                                                if (((r = Q()), !i.m.Wb)) throw new eS(59);
                                                return i.m.Wb(i, t, r);
                                            case 21523:
                                                if (!i.s) return -59;
                                                return (
                                                    i.s.V.Zb &&
                                                        ((s = [24, 80]),
                                                        (b[(r = Q()) >> 1] = s[0]),
                                                        (b[(r + 2) >> 1] = s[1])),
                                                    0
                                                );
                                            default:
                                                return -28;
                                        }
                                    } catch (e) {
                                        if (void 0 === eJ || "ErrnoError" !== e.name) throw e;
                                        return -e.$;
                                    }
                                },
                                __syscall_openat: function (e, t, n, i) {
                                    e0 = i;
                                    try {
                                        var r = (t = t ? ea(R, t) : "");
                                        if ("/" === r.charAt(0)) t = r;
                                        else {
                                            var s = -100 === e ? "/" : eP(e).path;
                                            if (0 == r.length) throw new eS(44);
                                            t = ee(s + "/" + r);
                                        }
                                        var a = i ? Q() : 0;
                                        return eH(t, n, a).W;
                                    } catch (e) {
                                        if (void 0 === eJ || "ErrnoError" !== e.name) throw e;
                                        return -e.$;
                                    }
                                },
                                _abort_js: () => {
                                    j("");
                                },
                                _embind_create_inheriting_constructor: (e, t, n) => {
                                    (e = e7(e)), (t = tr(t, "wrapper")), (n = e6(n));
                                    var i = t.i,
                                        r = i.M,
                                        s = i.C.M,
                                        a = i.C.constructor;
                                    return (
                                        (e = e1(e, function (...e) {
                                            i.C.pb.forEach(
                                                function (e) {
                                                    if (this[e] === s[e])
                                                        throw new eq(
                                                            `Pure virtual function ${e} must be implemented in JavaScript`,
                                                        );
                                                }.bind(this),
                                            ),
                                                Object.defineProperty(this, "__parent", { value: r }),
                                                this.__construct(...e);
                                        })),
                                        (r.__construct = function (...e) {
                                            if (this === r) throw new e$("Pass correct 'this' to __construct");
                                            (e = a.implement(this, ...e)), ts(e);
                                            var t = e.g;
                                            if (
                                                (e.notifyOnDestruction(),
                                                (t.ha = !0),
                                                Object.defineProperties(this, { g: { value: t } }),
                                                tc(this),
                                                (e = tt(i, (e = t.o))),
                                                te.hasOwnProperty(e))
                                            )
                                                throw new e$(`Tried to register registered instance: ${e}`);
                                            te[e] = this;
                                        }),
                                        (r.__destruct = function () {
                                            if (this === r) throw new e$("Pass correct 'this' to __destruct");
                                            ts(this);
                                            var e = this.g.o;
                                            if (((e = tt(i, e)), te.hasOwnProperty(e))) delete te[e];
                                            else throw new e$(`Tried to unregister unregistered instance: ${e}`);
                                        }),
                                        (e.prototype = Object.create(r)),
                                        Object.assign(e.prototype, n),
                                        e4(e)
                                    );
                                },
                                _embind_finalize_value_object: (e) => {
                                    var t = td[e];
                                    delete td[e];
                                    var n = t.Na,
                                        i = t.O,
                                        r = t.eb;
                                    tE([e], r.map((e) => e.Ub).concat(r.map((e) => e.kc)), (e) => {
                                        var s = {};
                                        return (
                                            r.forEach((t, n) => {
                                                var i = e[n],
                                                    a = t.Sb,
                                                    o = t.Tb,
                                                    l = e[n + r.length],
                                                    u = t.jc,
                                                    c = t.lc;
                                                s[t.Ob] = {
                                                    read: (e) => i.fromWireType(a(o, e)),
                                                    write: (e, t) => {
                                                        var n = [];
                                                        u(c, e, l.toWireType(n, t)), t_(n);
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
                                                        return i(e), n;
                                                    },
                                                    toWireType: (e, t) => {
                                                        for (var r in s)
                                                            if (!(r in t)) throw TypeError(`Missing field: "${r}"`);
                                                        var a = n();
                                                        for (r in s) s[r].write(a, t[r]);
                                                        return null !== e && e.push(i, a), a;
                                                    },
                                                    argPackAdvance: 8,
                                                    readValueFromPointer: tf,
                                                    L: i,
                                                },
                                            ]
                                        );
                                    });
                                },
                                _embind_register_bigint: () => {},
                                _embind_register_bool: (e, t, n, i) => {
                                    tm(e, {
                                        name: (t = e7(t)),
                                        fromWireType: function (e) {
                                            return !!e;
                                        },
                                        toWireType: function (e, t) {
                                            return t ? n : i;
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: function (e) {
                                            return this.fromWireType(R[e]);
                                        },
                                        L: null,
                                    });
                                },
                                _embind_register_class: (e, t, n, i, r, s, a, o, l, u, c, d, _) => {
                                    (c = e7(c)), (s = tM(r, s)), (o &&= tM(a, o)), (u &&= tM(l, u)), (_ = tM(d, _));
                                    var f = ((e) => {
                                        if (void 0 === e) return "_unknown";
                                        var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                                        return 48 <= t && 57 >= t ? `_${e}` : e;
                                    })(c);
                                    tT(f, function () {
                                        tP(`Cannot construct ${c} due to unbound types`, [i]);
                                    }),
                                        tE([e, t, n], i ? [i] : [], (t) => {
                                            if (((t = t[0]), i))
                                                var n,
                                                    r = t.i,
                                                    a = r.M;
                                            else a = tA.prototype;
                                            var l = Object.create(a, {
                                                constructor: {
                                                    value: (t = e1(c, function (...e) {
                                                        if (Object.getPrototypeOf(this) !== l)
                                                            throw new e$("Use 'new' to construct " + c);
                                                        if (void 0 === d.Z)
                                                            throw new e$(c + " has no accessible constructor");
                                                        var t = d.Z[e.length];
                                                        if (void 0 === t)
                                                            throw new e$(
                                                                `Tried to invoke ctor of ${c} with invalid number of parameters (${e.length}) - expected (${Object.keys(d.Z).toString()}) parameters instead!`,
                                                            );
                                                        return t.apply(this, e);
                                                    })),
                                                },
                                            });
                                            t.prototype = l;
                                            var d = new tS(c, t, l, _, r, s, o, u);
                                            return (
                                                d.C && ((n = d.C).na ?? (n.na = []), d.C.na.push(d)),
                                                (r = new tO(c, d, !0, !1, !1)),
                                                (n = new tO(c + "*", d, !1, !1, !1)),
                                                (a = new tO(c + " const*", d, !1, !0, !1)),
                                                (tl[e] = { pointerType: n, Hb: a }),
                                                tD(f, t),
                                                [r, n, a]
                                            );
                                        });
                                },
                                _embind_register_class_class_function: (e, t, n, i, r, s, a) => {
                                    var o = tk(n, i);
                                    (t = tG((t = e7(t)))),
                                        (s = tM(r, s)),
                                        tE([], [e], (e) => {
                                            function i() {
                                                tP(`Cannot call ${r} due to unbound types`, o);
                                            }
                                            e = e[0];
                                            var r = `${e.name}.${t}`;
                                            t.startsWith("@@") && (t = Symbol[t.substring(2)]);
                                            var l = e.i.constructor;
                                            return (
                                                void 0 === l[t]
                                                    ? ((i.da = n - 1), (l[t] = i))
                                                    : (tI(l, t, r), (l[t].A[n - 1] = i)),
                                                tE([], o, (i) => {
                                                    if (
                                                        ((i = tx(r, [i[0], null].concat(i.slice(1)), null, s, a)),
                                                        void 0 === l[t].A
                                                            ? ((i.da = n - 1), (l[t] = i))
                                                            : (l[t].A[n - 1] = i),
                                                        e.i.na)
                                                    )
                                                        for (let n of e.i.na)
                                                            n.constructor.hasOwnProperty(t) || (n.constructor[t] = i);
                                                    return [];
                                                }),
                                                []
                                            );
                                        });
                                },
                                _embind_register_class_class_property: (e, t, n, i, r, s, a, o) => {
                                    (t = e7(t)),
                                        (s = tM(r, s)),
                                        tE([], [e], (e) => {
                                            e = e[0];
                                            var r = `${e.name}.${t}`,
                                                l = {
                                                    get() {
                                                        tP(`Cannot access ${r} due to unbound types`, [n]);
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0,
                                                };
                                            return (
                                                (l.set = o
                                                    ? () => {
                                                          tP(`Cannot access ${r} due to unbound types`, [n]);
                                                      }
                                                    : () => {
                                                          throw new e$(`${r} is a read-only property`);
                                                      }),
                                                Object.defineProperty(e.i.constructor, t, l),
                                                tE([], [n], (n) => {
                                                    n = n[0];
                                                    var r = { get: () => n.fromWireType(s(i)), enumerable: !0 };
                                                    return (
                                                        o &&
                                                            ((o = tM(a, o)),
                                                            (r.set = (e) => {
                                                                var t = [];
                                                                o(i, n.toWireType(t, e)), t_(t);
                                                            })),
                                                        Object.defineProperty(e.i.constructor, t, r),
                                                        []
                                                    );
                                                }),
                                                []
                                            );
                                        });
                                },
                                _embind_register_class_constructor: (e, t, n, i, r, s) => {
                                    var a = tk(t, n);
                                    (r = tM(i, r)),
                                        tE([], [e], (e) => {
                                            e = e[0];
                                            var n = `constructor ${e.name}`;
                                            if ((void 0 === e.i.Z && (e.i.Z = []), void 0 !== e.i.Z[t - 1]))
                                                throw new e$(
                                                    `Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
                                                );
                                            return (
                                                (e.i.Z[t - 1] = () => {
                                                    tP(`Cannot construct ${e.name} due to unbound types`, a);
                                                }),
                                                tE(
                                                    [],
                                                    a,
                                                    (i) => (
                                                        i.splice(1, 0, null), (e.i.Z[t - 1] = tx(n, i, null, r, s)), []
                                                    ),
                                                ),
                                                []
                                            );
                                        });
                                },
                                _embind_register_class_function: (e, t, n, i, r, s, a, o) => {
                                    var l = tk(n, i);
                                    (t = tG((t = e7(t)))),
                                        (s = tM(r, s)),
                                        tE([], [e], (e) => {
                                            function i() {
                                                tP(`Cannot call ${r} due to unbound types`, l);
                                            }
                                            e = e[0];
                                            var r = `${e.name}.${t}`;
                                            t.startsWith("@@") && (t = Symbol[t.substring(2)]), o && e.i.pb.push(t);
                                            var u = e.i.M,
                                                c = u[t];
                                            return (
                                                void 0 === c ||
                                                (void 0 === c.A && c.className !== e.name && c.da === n - 2)
                                                    ? ((i.da = n - 2), (i.className = e.name), (u[t] = i))
                                                    : (tI(u, t, r), (u[t].A[n - 2] = i)),
                                                tE(
                                                    [],
                                                    l,
                                                    (i) => (
                                                        (i = tx(r, i, e, s, a)),
                                                        void 0 === u[t].A
                                                            ? ((i.da = n - 2), (u[t] = i))
                                                            : (u[t].A[n - 2] = i),
                                                        []
                                                    ),
                                                ),
                                                []
                                            );
                                        });
                                },
                                _embind_register_class_property: (e, t, n, i, r, s, a, o, l, u) => {
                                    (t = e7(t)),
                                        (r = tM(i, r)),
                                        tE([], [e], (e) => {
                                            e = e[0];
                                            var i = `${e.name}.${t}`,
                                                c = {
                                                    get() {
                                                        tP(`Cannot access ${i} due to unbound types`, [n, a]);
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0,
                                                };
                                            return (
                                                (c.set = l
                                                    ? () => tP(`Cannot access ${i} due to unbound types`, [n, a])
                                                    : () => {
                                                          throw new e$(i + " is a read-only property");
                                                      }),
                                                Object.defineProperty(e.i.M, t, c),
                                                tE([], l ? [n, a] : [n], (n) => {
                                                    var a = n[0],
                                                        c = {
                                                            get() {
                                                                var t = tF(this, e, i + " getter");
                                                                return a.fromWireType(r(s, t));
                                                            },
                                                            enumerable: !0,
                                                        };
                                                    if (l) {
                                                        l = tM(o, l);
                                                        var d = n[1];
                                                        c.set = function (t) {
                                                            var n = tF(this, e, i + " setter"),
                                                                r = [];
                                                            l(u, n, d.toWireType(r, t)), t_(r);
                                                        };
                                                    }
                                                    return Object.defineProperty(e.i.M, t, c), [];
                                                }),
                                                []
                                            );
                                        });
                                },
                                _embind_register_emval: (e) => tm(e, tB),
                                _embind_register_enum: (e, t, n, i) => {
                                    function r() {}
                                    (t = e7(t)),
                                        (r.values = {}),
                                        tm(e, {
                                            name: t,
                                            constructor: r,
                                            fromWireType: function (e) {
                                                return this.constructor.values[e];
                                            },
                                            toWireType: (e, t) => t.value,
                                            argPackAdvance: 8,
                                            readValueFromPointer: ((e, t, n) => {
                                                switch (t) {
                                                    case 1:
                                                        return n
                                                            ? function (e) {
                                                                  return this.fromWireType(O[e]);
                                                              }
                                                            : function (e) {
                                                                  return this.fromWireType(R[e]);
                                                              };
                                                    case 2:
                                                        return n
                                                            ? function (e) {
                                                                  return this.fromWireType(b[e >> 1]);
                                                              }
                                                            : function (e) {
                                                                  return this.fromWireType(D[e >> 1]);
                                                              };
                                                    case 4:
                                                        return n
                                                            ? function (e) {
                                                                  return this.fromWireType(L[e >> 2]);
                                                              }
                                                            : function (e) {
                                                                  return this.fromWireType(w[e >> 2]);
                                                              };
                                                    default:
                                                        throw TypeError(`invalid integer width (${t}): ${e}`);
                                                }
                                            })(t, n, i),
                                            L: null,
                                        }),
                                        tT(t, r);
                                },
                                _embind_register_enum_value: (e, t, n) => {
                                    var i = tr(e, "enum");
                                    (t = e7(t)),
                                        (e = i.constructor),
                                        (i = Object.create(i.constructor.prototype, {
                                            value: { value: n },
                                            constructor: { value: e1(`${i.name}_${t}`, function () {}) },
                                        })),
                                        (e.values[n] = i),
                                        (e[t] = i);
                                },
                                _embind_register_float: (e, t, n) => {
                                    tm(e, {
                                        name: (t = e7(t)),
                                        fromWireType: (e) => e,
                                        toWireType: (e, t) => t,
                                        argPackAdvance: 8,
                                        readValueFromPointer: ((e, t) => {
                                            switch (t) {
                                                case 4:
                                                    return function (e) {
                                                        return this.fromWireType(M[e >> 2]);
                                                    };
                                                case 8:
                                                    return function (e) {
                                                        return this.fromWireType(P[e >> 3]);
                                                    };
                                                default:
                                                    throw TypeError(`invalid float width (${t}): ${e}`);
                                            }
                                        })(t, n),
                                        L: null,
                                    });
                                },
                                _embind_register_function: (e, t, n, i, r, s) => {
                                    var a = tk(t, n);
                                    (e = tG((e = e7(e)))),
                                        (r = tM(i, r)),
                                        tT(
                                            e,
                                            function () {
                                                tP(`Cannot call ${e} due to unbound types`, a);
                                            },
                                            t - 1,
                                        ),
                                        tE(
                                            [],
                                            a,
                                            (n) => (
                                                tD(e, tx(e, [n[0], null].concat(n.slice(1)), null, r, s), t - 1), []
                                            ),
                                        );
                                },
                                _embind_register_integer: (e, t, n, i, r) => {
                                    if (((t = e7(t)), -1 === r && (r = 0xffffffff), (r = (e) => e), 0 === i)) {
                                        var s = 32 - 8 * n;
                                        r = (e) => (e << s) >>> s;
                                    }
                                    var a = t.includes("unsigned")
                                        ? function (e, t) {
                                              return t >>> 0;
                                          }
                                        : function (e, t) {
                                              return t;
                                          };
                                    tm(e, {
                                        name: t,
                                        fromWireType: r,
                                        toWireType: a,
                                        argPackAdvance: 8,
                                        readValueFromPointer: ((e, t, n) => {
                                            switch (t) {
                                                case 1:
                                                    return n ? (e) => O[e] : (e) => R[e];
                                                case 2:
                                                    return n ? (e) => b[e >> 1] : (e) => D[e >> 1];
                                                case 4:
                                                    return n ? (e) => L[e >> 2] : (e) => w[e >> 2];
                                                default:
                                                    throw TypeError(`invalid integer width (${t}): ${e}`);
                                            }
                                        })(t, n, 0 !== i),
                                        L: null,
                                    });
                                },
                                _embind_register_memory_view: (e, t, n) => {
                                    function i(e) {
                                        return new r(O.buffer, w[(e + 4) >> 2], w[e >> 2]);
                                    }
                                    var r = [
                                        Int8Array,
                                        Uint8Array,
                                        Int16Array,
                                        Uint16Array,
                                        Int32Array,
                                        Uint32Array,
                                        Float32Array,
                                        Float64Array,
                                    ][t];
                                    tm(
                                        e,
                                        {
                                            name: (n = e7(n)),
                                            fromWireType: i,
                                            argPackAdvance: 8,
                                            readValueFromPointer: i,
                                        },
                                        { Vb: !0 },
                                    );
                                },
                                _embind_register_std_string: (e, t) => {
                                    var n = "std::string" === (t = e7(t));
                                    tm(e, {
                                        name: t,
                                        fromWireType: function (e) {
                                            var t = w[e >> 2],
                                                i = e + 4;
                                            if (n)
                                                for (var r = i, s = 0; s <= t; ++s) {
                                                    var a = i + s;
                                                    if (s == t || 0 == R[a]) {
                                                        if (((r = r ? ea(R, r, a - r) : ""), void 0 === o)) var o = r;
                                                        else (o += "\0"), (o += r);
                                                        r = a + 1;
                                                    }
                                                }
                                            else {
                                                for (s = 0, o = Array(t); s < t; ++s)
                                                    o[s] = String.fromCharCode(R[i + s]);
                                                o = o.join("");
                                            }
                                            return nt(e), o;
                                        },
                                        toWireType: function (e, t) {
                                            t instanceof ArrayBuffer && (t = new Uint8Array(t));
                                            var i = "string" == typeof t;
                                            if (
                                                !(
                                                    i ||
                                                    t instanceof Uint8Array ||
                                                    t instanceof Uint8ClampedArray ||
                                                    t instanceof Int8Array
                                                )
                                            )
                                                throw new e$("Cannot pass non-string to std::string");
                                            var r = n && i ? el(t) : t.length,
                                                s = nn(4 + r + 1),
                                                a = s + 4;
                                            if (((w[s >> 2] = r), n && i)) eu(t, R, a, r + 1);
                                            else if (i)
                                                for (i = 0; i < r; ++i) {
                                                    var o = t.charCodeAt(i);
                                                    if (255 < o)
                                                        throw (
                                                            (nt(a),
                                                            new e$(
                                                                "String has UTF-16 code units that do not fit in 8 bits",
                                                            ))
                                                        );
                                                    R[a + i] = o;
                                                }
                                            else for (i = 0; i < r; ++i) R[a + i] = t[i];
                                            return null !== e && e.push(nt, s), s;
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: tf,
                                        L(e) {
                                            nt(e);
                                        },
                                    });
                                },
                                _embind_register_std_wstring: (e, t, n) => {
                                    if (((n = e7(n)), 2 === t))
                                        var i = tY,
                                            r = tW,
                                            s = tK,
                                            a = (e) => D[e >> 1];
                                    else 4 === t && ((i = tz), (r = t$), (s = tq), (a = (e) => w[e >> 2]));
                                    tm(e, {
                                        name: n,
                                        fromWireType: (e) => {
                                            for (var n, r = w[e >> 2], s = e + 4, o = 0; o <= r; ++o) {
                                                var l = e + 4 + o * t;
                                                (o == r || 0 == a(l)) &&
                                                    ((s = i(s, l - s)),
                                                    void 0 === n ? (n = s) : ((n += "\0"), (n += s)),
                                                    (s = l + t));
                                            }
                                            return nt(e), n;
                                        },
                                        toWireType: (e, i) => {
                                            if ("string" != typeof i)
                                                throw new e$(`Cannot pass non-string to C++ string type ${n}`);
                                            var a = s(i),
                                                o = nn(4 + a + t);
                                            return (
                                                (w[o >> 2] = a / t), r(i, o + 4, a + t), null !== e && e.push(nt, o), o
                                            );
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: tf,
                                        L(e) {
                                            nt(e);
                                        },
                                    });
                                },
                                _embind_register_value_object: (e, t, n, i, r, s) => {
                                    td[e] = { name: e7(t), Na: tM(n, i), O: tM(r, s), eb: [] };
                                },
                                _embind_register_value_object_field: (e, t, n, i, r, s, a, o, l, u) => {
                                    td[e].eb.push({
                                        Ob: e7(t),
                                        Ub: n,
                                        Sb: tM(i, r),
                                        Tb: s,
                                        kc: a,
                                        jc: tM(o, l),
                                        lc: u,
                                    });
                                },
                                _embind_register_void: (e, t) => {
                                    tm(e, {
                                        Ic: !0,
                                        name: (t = e7(t)),
                                        argPackAdvance: 0,
                                        fromWireType: () => {},
                                        toWireType: () => {},
                                    });
                                },
                                _emscripten_get_now_is_monotonic: () => 1,
                                _emscripten_memcpy_js: (e, t, n) => R.copyWithin(e, t, t + n),
                                _emval_as: (e, t, n) => ((e = e6(e)), tZ((t = tr(t, "emval::as")), n, e)),
                                _emval_call_method: (e, t, n, i, r) => (e = tJ[e])((t = e6(t)), t[(n = tQ(n))], i, r),
                                _emval_decref: tV,
                                _emval_get_method_caller: (e, t, n) => {
                                    var i,
                                        r,
                                        s = ((e, t) => {
                                            for (var n = Array(e), i = 0; i < e; ++i)
                                                n[i] = tr(w[(t + 4 * i) >> 2], "parameter " + i);
                                            return n;
                                        })(e, t),
                                        a = s.shift(),
                                        o = Array(--e);
                                    return (
                                        (i = e1(
                                            (t = `methodCaller<(${s.map((e) => e.name).join(", ")}) => ${a.name}>`),
                                            (t, i, r, l) => {
                                                for (var u = 0, c = 0; c < e; ++c)
                                                    (o[c] = s[c].readValueFromPointer(l + u)),
                                                        (u += s[c].argPackAdvance);
                                                return tZ(a, r, (t = 1 === n ? t0(i, o) : i.apply(t, o)));
                                            },
                                        )),
                                        (r = tJ.length),
                                        tJ.push(i),
                                        r
                                    );
                                },
                                _emval_get_module_property: (t) => e4(e[(t = tQ(t))]),
                                _emval_get_property: (e, t) => e4((e = e6(e))[(t = e6(t))]),
                                _emval_incref: (e) => {
                                    9 < e && (e3[e + 1] += 1);
                                },
                                _emval_new_array: () => e4([]),
                                _emval_new_cstring: (e) => e4(tQ(e)),
                                _emval_new_object: () => e4({}),
                                _emval_run_destructors: (e) => {
                                    t_(e6(e)), tV(e);
                                },
                                _emval_set_property: (e, t, n) => {
                                    (e = e6(e)), (t = e6(t)), (n = e6(n)), (e[t] = n);
                                },
                                _emval_take_value: (e, t) =>
                                    e4((e = (e = tr(e, "_emval_take_value")).readValueFromPointer(t))),
                                emscripten_asm_const_int: (e, t, n) => {
                                    t1.length = 0;
                                    for (var i; (i = R[t++]); ) {
                                        var r = 105 != i;
                                        (r &= 112 != i),
                                            (n += r && n % 8 ? 4 : 0),
                                            t1.push(112 == i ? w[n >> 2] : 105 == i ? L[n >> 2] : P[n >> 3]),
                                            (n += r ? 8 : 4);
                                    }
                                    return Z[e](...t1);
                                },
                                emscripten_date_now: () => Date.now(),
                                emscripten_get_now: () => performance.now(),
                                emscripten_resize_heap: (e) => {
                                    var t = R.length;
                                    if (0x80000000 < (e >>>= 0)) return !1;
                                    for (var n = 1; 4 >= n; n *= 2) {
                                        var i = t * (1 + 0.2 / n);
                                        i = Math.min(i, e + 0x6000000);
                                        var r = Math;
                                        i = Math.max(e, i);
                                        e: {
                                            r =
                                                (r.min.call(r, 0x80000000, i + ((65536 - (i % 65536)) % 65536)) -
                                                    v.buffer.byteLength +
                                                    65535) /
                                                65536;
                                            try {
                                                v.grow(r), U();
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
                                        t3().forEach((i, r) => {
                                            var s = t + n;
                                            for (r = w[(e + 4 * r) >> 2] = s, s = 0; s < i.length; ++s)
                                                O[r++] = i.charCodeAt(s);
                                            (O[r] = 0), (n += i.length + 1);
                                        }),
                                        0
                                    );
                                },
                                environ_sizes_get: (e, t) => {
                                    var n = t3();
                                    w[e >> 2] = n.length;
                                    var i = 0;
                                    return n.forEach((e) => (i += e.length + 1)), (w[t >> 2] = i), 0;
                                },
                                fd_close: function (e) {
                                    try {
                                        var t = eP(e);
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
                                        if (void 0 === eJ || "ErrnoError" !== e.name) throw e;
                                        return e.$;
                                    }
                                },
                                fd_read: function (e, t, n, i) {
                                    try {
                                        e: {
                                            var r = eP(e);
                                            e = t;
                                            for (var s, a = (t = 0); a < n; a++) {
                                                var o = w[e >> 2],
                                                    l = w[(e + 4) >> 2];
                                                e += 8;
                                                var u = s,
                                                    c = O;
                                                if (0 > l || 0 > u) throw new eS(28);
                                                if (null === r.W || 1 == (2097155 & r.flags)) throw new eS(8);
                                                if (16384 == (61440 & r.node.mode)) throw new eS(31);
                                                if (!r.m.read) throw new eS(28);
                                                var d = void 0 !== u;
                                                if (d) {
                                                    if (!r.seekable) throw new eS(70);
                                                } else u = r.position;
                                                var _ = r.m.read(r, c, o, l, u);
                                                if ((d || (r.position += _), 0 > _)) {
                                                    var f = -1;
                                                    break e;
                                                }
                                                if (((t += _), _ < l)) break;
                                                void 0 !== s && (s += _);
                                            }
                                            f = t;
                                        }
                                        return (w[i >> 2] = f), 0;
                                    } catch (e) {
                                        if (void 0 === eJ || "ErrnoError" !== e.name) throw e;
                                        return e.$;
                                    }
                                },
                                fd_seek: function (e, t, n, i, r) {
                                    t = (n + 2097152) >>> 0 < 4194305 - !!t ? (t >>> 0) + 0x100000000 * n : NaN;
                                    try {
                                        if (isNaN(t)) return 61;
                                        var s = eP(e);
                                        return (
                                            ej(s, t, i),
                                            (q = [
                                                s.position >>> 0,
                                                (($ = s.position),
                                                1 <= +Math.abs($)
                                                    ? 0 < $
                                                        ? Math.floor($ / 0x100000000) >>> 0
                                                        : ~~Math.ceil(($ - (~~$ >>> 0)) / 0x100000000) >>> 0
                                                    : 0),
                                            ]),
                                            (L[r >> 2] = q[0]),
                                            (L[(r + 4) >> 2] = q[1]),
                                            s.Ka && 0 === t && 0 === i && (s.Ka = null),
                                            0
                                        );
                                    } catch (e) {
                                        if (void 0 === eJ || "ErrnoError" !== e.name) throw e;
                                        return e.$;
                                    }
                                },
                                fd_write: function (e, t, n, i) {
                                    try {
                                        e: {
                                            var r = eP(e);
                                            e = t;
                                            for (var s, a = (t = 0); a < n; a++) {
                                                var o = w[e >> 2],
                                                    l = w[(e + 4) >> 2];
                                                e += 8;
                                                var u = s,
                                                    c = O;
                                                if (0 > l || 0 > u) throw new eS(28);
                                                if (null === r.W || 0 == (2097155 & r.flags)) throw new eS(8);
                                                if (16384 == (61440 & r.node.mode)) throw new eS(31);
                                                if (!r.m.write) throw new eS(28);
                                                r.seekable && 1024 & r.flags && ej(r, 0, 2);
                                                var d = void 0 !== u;
                                                if (d) {
                                                    if (!r.seekable) throw new eS(70);
                                                } else u = r.position;
                                                var _ = r.m.write(r, c, o, l, u, void 0);
                                                if ((d || (r.position += _), 0 > _)) {
                                                    var f = -1;
                                                    break e;
                                                }
                                                (t += _), void 0 !== s && (s += _);
                                            }
                                            f = t;
                                        }
                                        return (w[i >> 2] = f), 0;
                                    } catch (e) {
                                        if (void 0 === eJ || "ErrnoError" !== e.name) throw e;
                                        return e.$;
                                    }
                                },
                                strftime_l: (e, t, n, i) =>
                                    ((e, t, n, i) => {
                                        function r(e, t, n) {
                                            for (e = "number" == typeof e ? e.toString() : e || ""; e.length < t; )
                                                e = n[0] + e;
                                            return e;
                                        }
                                        function s(e, t) {
                                            return r(e, t, "0");
                                        }
                                        function a(e, t) {
                                            var n;
                                            function i(e) {
                                                return 0 > e ? -1 : +(0 < e);
                                            }
                                            return (
                                                0 === (n = i(e.getFullYear() - t.getFullYear())) &&
                                                    0 === (n = i(e.getMonth() - t.getMonth())) &&
                                                    (n = i(e.getDate() - t.getDate())),
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
                                                    i = (t6(e.getFullYear()) ? t4 : t5)[n];
                                                if (t > i - e.getDate())
                                                    (t -= i - e.getDate() + 1),
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
                                        var u = w[(i + 40) >> 2];
                                        for (var c in ((i = {
                                            pc: L[i >> 2],
                                            oc: L[(i + 4) >> 2],
                                            Da: L[(i + 8) >> 2],
                                            Qa: L[(i + 12) >> 2],
                                            Ea: L[(i + 16) >> 2],
                                            ca: L[(i + 20) >> 2],
                                            R: L[(i + 24) >> 2],
                                            ba: L[(i + 28) >> 2],
                                            Nc: L[(i + 32) >> 2],
                                            nc: L[(i + 36) >> 2],
                                            qc: u && u ? ea(R, u) : "",
                                        }),
                                        (n = n ? ea(R, n) : ""),
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
                                            "%e": (e) => r(e.Qa, 2, " "),
                                            "%g": (e) => l(e).toString().substring(2),
                                            "%G": l,
                                            "%H": (e) => s(e.Da, 2),
                                            "%I": (e) => (0 == (e = e.Da) ? (e = 12) : 12 < e && (e -= 12), s(e, 2)),
                                            "%j": (e) => {
                                                for (
                                                    var t = 0, n = 0;
                                                    n <= e.Ea - 1;
                                                    t += (t6(e.ca + 1900) ? t4 : t5)[n++]
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
                                                            (3 == n && t6(e.ca)) ||
                                                            (t = 1));
                                                else {
                                                    t = 52;
                                                    var n = (e.R + 7 - e.ba - 1) % 7;
                                                    (4 == n || (5 == n && t6((e.ca % 400) - 1))) && t++;
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
                                                    String(
                                                        "0000" + (((e = Math.abs(e) / 60) / 60) * 100 + (e % 60)),
                                                    ).slice(-4)
                                                );
                                            },
                                            "%Z": (e) => e.qc,
                                            "%%": () => "%",
                                        }),
                                        (n = n.replace(/%%/g, "\0\0")),
                                        u))
                                            n.includes(c) && (n = n.replace(RegExp(c, "g"), u[c](i)));
                                        return (c = ec((n = n.replace(/\0\0/g, "%")), !1)).length > t
                                            ? 0
                                            : (O.set(c, e), c.length - 1);
                                    })(e, t, n, i),
                            },
                            ne = (function () {
                                function t(t) {
                                    return (
                                        (v = (ne = t.exports).memory),
                                        U(),
                                        (tR = ne.__indirect_function_table),
                                        G.unshift(ne.__wasm_call_ctors),
                                        V--,
                                        e.monitorRunDependencies?.(V),
                                        0 == V &&
                                            (null !== B && (clearInterval(B), (B = null)),
                                            H && ((t = H), (H = null), t())),
                                        ne
                                    );
                                }
                                var n,
                                    i,
                                    r = { env: t9, wasi_snapshot_preview1: t9 };
                                if ((V++, e.monitorRunDependencies?.(V), e.instantiateWasm))
                                    try {
                                        return e.instantiateWasm(r, t);
                                    } catch (e) {
                                        y(`Module.instantiateWasm callback failed with error: ${e}`), l(e);
                                    }
                                return (
                                    (Y ||= "canvas_advanced.wasm".startsWith("data:application/octet-stream;base64,")
                                        ? "canvas_advanced.wasm"
                                        : e.locateFile
                                          ? e.locateFile("canvas_advanced.wasm", S)
                                          : S + "canvas_advanced.wasm"),
                                    ((n = r),
                                    (i = function (e) {
                                        t(e.instance);
                                    }),
                                    C ||
                                    "function" != typeof WebAssembly.instantiateStreaming ||
                                    Y.startsWith("data:application/octet-stream;base64,") ||
                                    W(Y) ||
                                    "function" != typeof fetch
                                        ? z(Y, n, i)
                                        : fetch(Y, { credentials: "same-origin" }).then((e) =>
                                              WebAssembly.instantiateStreaming(e, n).then(i, function (e) {
                                                  return (
                                                      y(`wasm streaming compile failed: ${e}`),
                                                      y("falling back to ArrayBuffer instantiation"),
                                                      z(Y, n, i)
                                                  );
                                              }),
                                          )).catch(l),
                                    {}
                                );
                            })(),
                            nt = (e) => (nt = ne.free)(e),
                            nn = (e) => (nn = ne.malloc)(e),
                            ni = (e) => (ni = ne.__getTypeName)(e),
                            nr = (e._ma_device__on_notification_unlocked = (t) =>
                                (nr = e._ma_device__on_notification_unlocked = ne.ma_device__on_notification_unlocked)(
                                    t,
                                ));
                        (e._ma_malloc_emscripten = (t, n) => (e._ma_malloc_emscripten = ne.ma_malloc_emscripten)(t, n)),
                            (e._ma_free_emscripten = (t, n) => (e._ma_free_emscripten = ne.ma_free_emscripten)(t, n));
                        var ns = (e._ma_device_process_pcm_frames_capture__webaudio = (t, n, i) =>
                                (ns = e._ma_device_process_pcm_frames_capture__webaudio =
                                    ne.ma_device_process_pcm_frames_capture__webaudio)(t, n, i)),
                            na = (e._ma_device_process_pcm_frames_playback__webaudio = (t, n, i) =>
                                (na = e._ma_device_process_pcm_frames_playback__webaudio =
                                    ne.ma_device_process_pcm_frames_playback__webaudio)(t, n, i));
                        function no() {
                            function t() {
                                if (!a && ((a = !0), (e.calledRun = !0), !x)) {
                                    if (
                                        (e.noFSInit ||
                                            eW ||
                                            ((eW = !0),
                                            (e.stdin = e.stdin),
                                            (e.stdout = e.stdout),
                                            (e.stderr = e.stderr),
                                            e.stdin ? eY("stdin", e.stdin) : eB("/dev/tty", "/dev/stdin"),
                                            e.stdout ? eY("stdout", null, e.stdout) : eB("/dev/tty", "/dev/stdout"),
                                            e.stderr ? eY("stderr", null, e.stderr) : eB("/dev/tty1", "/dev/stderr"),
                                            eH("/dev/stdin", 0),
                                            eH("/dev/stdout", 1),
                                            eH("/dev/stderr", 1)),
                                        (eT = !1),
                                        X(G),
                                        o(e),
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
                            if (!(0 < V)) {
                                if (e.preRun)
                                    for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length; )
                                        !(function () {
                                            var t = e.preRun.shift();
                                            k.unshift(t);
                                        })();
                                X(k),
                                    0 < V ||
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
                            ((e.dynCall_iiji = (t, n, i, r, s) => (e.dynCall_iiji = ne.dynCall_iiji)(t, n, i, r, s)),
                            (e.dynCall_jiji = (t, n, i, r, s) => (e.dynCall_jiji = ne.dynCall_jiji)(t, n, i, r, s)),
                            (e.dynCall_iiiji = (t, n, i, r, s, a) =>
                                (e.dynCall_iiiji = ne.dynCall_iiiji)(t, n, i, r, s, a)),
                            (e.dynCall_iij = (t, n, i, r) => (e.dynCall_iij = ne.dynCall_iij)(t, n, i, r)),
                            (e.dynCall_jii = (t, n, i) => (e.dynCall_jii = ne.dynCall_jii)(t, n, i)),
                            (e.dynCall_viijii = (t, n, i, r, s, a, o) =>
                                (e.dynCall_viijii = ne.dynCall_viijii)(t, n, i, r, s, a, o)),
                            (e.dynCall_iiiiij = (t, n, i, r, s, a, o) =>
                                (e.dynCall_iiiiij = ne.dynCall_iiiiij)(t, n, i, r, s, a, o)),
                            (e.dynCall_iiiiijj = (t, n, i, r, s, a, o, l, u) =>
                                (e.dynCall_iiiiijj = ne.dynCall_iiiiijj)(t, n, i, r, s, a, o, l, u)),
                            (e.dynCall_iiiiiijj = (t, n, i, r, s, a, o, l, u, c) =>
                                (e.dynCall_iiiiiijj = ne.dynCall_iiiiiijj)(t, n, i, r, s, a, o, l, u, c)),
                            (H = function e() {
                                a || no(), a || (H = e);
                            }),
                            e.preInit)
                        )
                            for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length; )
                                e.preInit.pop()();
                        return no(), u;
                    });
            },
            (e) => {
                e.exports = JSON.parse(
                    '{"name":"@rive-app/canvas","version":"2.32.0","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}',
                );
            },
            (e, t, n) => {
                n.r(t), n.d(t, { Animation: () => i.Animation });
                var i = n(4);
            },
            (e, t, n) => {
                n.r(t), n.d(t, { Animation: () => i });
                var i = (function () {
                    function e(e, t, n, i) {
                        (this.animation = e),
                            (this.artboard = t),
                            (this.playing = i),
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
                        BLANK_URL: () => r.BLANK_URL,
                        CustomFileAssetLoaderWrapper: () => s.CustomFileAssetLoaderWrapper,
                        FileAssetWrapper: () => s.FileAssetWrapper,
                        FileFinalizer: () => s.FileFinalizer,
                        FontAssetWrapper: () => s.FontAssetWrapper,
                        FontWrapper: () => s.FontWrapper,
                        ImageAssetWrapper: () => s.ImageAssetWrapper,
                        ImageWrapper: () => s.ImageWrapper,
                        createFinalization: () => s.createFinalization,
                        finalizationRegistry: () => s.finalizationRegistry,
                        registerTouchInteractions: () => i.registerTouchInteractions,
                        sanitizeUrl: () => r.sanitizeUrl,
                    });
                var i = n(6),
                    r = n(7),
                    s = n(8);
            },
            (e, t, n) => {
                n.r(t), n.d(t, { registerTouchInteractions: () => s });
                var i = void 0,
                    r = function (e, t, n) {
                        var i,
                            r,
                            s = [];
                        if (
                            ["touchstart", "touchmove"].indexOf(e.type) > -1 &&
                            (null == (i = e.changedTouches) ? void 0 : i.length)
                        ) {
                            t || e.preventDefault();
                            for (var a = 0, o = n ? e.changedTouches.length : 1; a < o; ) {
                                var l = e.changedTouches[a];
                                s.push({ clientX: l.clientX, clientY: l.clientY, identifier: l.identifier }), a++;
                            }
                        } else if ("touchend" === e.type && (null == (r = e.changedTouches) ? void 0 : r.length))
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
                            h = void 0 === f || f,
                            p = e.enableMultiTouch,
                            E = void 0 !== p && p,
                            m = e.layoutScaleFactor,
                            g = void 0 === m ? 1 : m,
                            A = e.listenOnDocumentBody,
                            I = e.eventCapture;
                        if (!t || !a.length || !o || !l || !n || "u" < typeof window) return null;
                        var T = null,
                            S = !1,
                            N = function (e) {
                                if (S && e instanceof MouseEvent) {
                                    "mouseup" == e.type && (S = !1);
                                    return;
                                }
                                (S = _ && "touchend" === e.type && "touchstart" === T), (T = e.type);
                                var i = t.getBoundingClientRect(),
                                    s = r(e, _, E),
                                    o = l.computeAlignment(
                                        u,
                                        c,
                                        { minX: 0, minY: 0, maxX: i.width, maxY: i.height },
                                        n.bounds,
                                        g,
                                    ),
                                    d = new l.Mat2D();
                                o.invert(d);
                                var f = [];
                                switch (
                                    (s.forEach(function (t) {
                                        var n = t.clientX,
                                            r = t.clientY;
                                        if (n || r) {
                                            var s = n - i.left,
                                                a = r - i.top;
                                            if (
                                                (s >= 0 && s <= i.width && a >= 0 && a <= i.height) ||
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
                                            var p = function (e) {
                                                    h
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
                                                m = 0;
                                            m < a.length;
                                            m++
                                        ) {
                                            var A = a[m];
                                            p(A);
                                        }
                                        break;
                                    case "mouseenter":
                                    case "touchmove":
                                    case "mouseover":
                                    case "mousemove":
                                        for (
                                            var I = function (e) {
                                                    f.forEach(function (t) {
                                                        e.pointerMove(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                N = 0;
                                            N < a.length;
                                            N++
                                        ) {
                                            var A = a[N];
                                            I(A);
                                        }
                                        break;
                                    case "touchstart":
                                    case "mousedown":
                                        for (
                                            var y = function (e) {
                                                    f.forEach(function (t) {
                                                        e.pointerDown(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                C = 0;
                                            C < a.length;
                                            C++
                                        ) {
                                            var A = a[C];
                                            y(A);
                                        }
                                        break;
                                    case "touchend":
                                        for (
                                            var v = function (e) {
                                                    f.forEach(function (t) {
                                                        e.pointerUp(t.transformedX, t.transformedY, t.identifier),
                                                            e.pointerExit(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                O = 0;
                                            O < a.length;
                                            O++
                                        ) {
                                            var A = a[O];
                                            v(A);
                                        }
                                        break;
                                    case "mouseup":
                                        for (
                                            var R = function (e) {
                                                    f.forEach(function (t) {
                                                        e.pointerUp(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                b = 0;
                                            b < a.length;
                                            b++
                                        ) {
                                            var A = a[b];
                                            R(A);
                                        }
                                }
                            }.bind(i),
                            y = A ? t.ownerDocument.body : t;
                        return (
                            y.addEventListener("mouseover", N, I),
                            y.addEventListener("mouseenter", N, I),
                            y.addEventListener("mouseout", N, I),
                            y.addEventListener("mouseleave", N, I),
                            y.addEventListener("mousemove", N, I),
                            y.addEventListener("mousedown", N, I),
                            y.addEventListener("mouseup", N, I),
                            t.addEventListener("touchmove", N, { passive: _ }),
                            t.addEventListener("touchstart", N, { passive: _ }),
                            t.addEventListener("touchend", N),
                            function () {
                                y.removeEventListener("mouseover", N, I),
                                    y.removeEventListener("mouseenter", N, I),
                                    y.removeEventListener("mouseout", N, I),
                                    y.removeEventListener("mouseleave", N, I),
                                    y.removeEventListener("mousemove", N, I),
                                    y.removeEventListener("mousedown", N, I),
                                    y.removeEventListener("mouseup", N, I),
                                    t.removeEventListener("touchmove", N),
                                    t.removeEventListener("touchstart", N),
                                    t.removeEventListener("touchend", N);
                            }
                        );
                    };
            },
            (e, t, n) => {
                n.r(t), n.d(t, { BLANK_URL: () => u, sanitizeUrl: () => c });
                var i = /^([^\w]*)(javascript|data|vbscript)/im,
                    r = /&#(\w+)(^\w|;)?/g,
                    s = /&(newline|tab);/gi,
                    a = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
                    o = /^.+(:|&colon;)/gim,
                    l = [".", "/"],
                    u = "about:blank";
                function c(e) {
                    if (!e) return u;
                    var t = e
                        .replace(a, "")
                        .replace(r, function (e, t) {
                            return String.fromCharCode(t);
                        })
                        .replace(s, "")
                        .replace(a, "")
                        .trim();
                    if (!t) return u;
                    if (l.indexOf(t[0]) > -1) return t;
                    var n = t.match(o);
                    if (!n) return t;
                    var c = n[0];
                    return i.test(c) ? u : t;
                }
            },
            (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        AudioAssetWrapper: () => h,
                        AudioWrapper: () => u,
                        CustomFileAssetLoaderWrapper: () => d,
                        FileAssetWrapper: () => _,
                        FileFinalizer: () => s,
                        FontAssetWrapper: () => p,
                        FontWrapper: () => c,
                        ImageAssetWrapper: () => f,
                        ImageWrapper: () => l,
                        createFinalization: () => g,
                        finalizationRegistry: () => m,
                    });
                var i,
                    r =
                        ((i = function (e, t) {
                            return (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                })(e, t);
                        }),
                        function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                            function n() {
                                this.constructor = e;
                            }
                            i(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
                        }),
                    s = (function () {
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
                    o = (function () {
                        function e() {
                            this.selfUnref = !1;
                        }
                        return (e.prototype.unref = function () {}), e;
                    })(),
                    l = (function (e) {
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
                    })(o),
                    u = (function (e) {
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
                    })(o),
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
                    })(o),
                    d = (function () {
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
                                          ? (n = new h(e))
                                          : e.isFont && (n = new p(e)),
                                    this._assetLoaderCallback(n, t)
                                );
                            }),
                            e
                        );
                    })(),
                    _ = (function () {
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
                    })(_),
                    h = (function (e) {
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
                    })(_),
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
                    })(_),
                    E = (function () {
                        function e(e) {}
                        return (
                            (e.prototype.register = function (e) {
                                e.selfUnref = !0;
                            }),
                            (e.prototype.unregister = function (e) {}),
                            e
                        );
                    })(),
                    m = new ("u" > typeof FinalizationRegistry ? FinalizationRegistry : E)(function (e) {
                        null == e || e.unref();
                    }),
                    g = function (e, t) {
                        var n = new a(t);
                        m.register(e, n);
                    };
            },
        ],
        eu = {};
    function ec(e) {
        var t = eu[e];
        if (void 0 !== t) return t.exports;
        var n = (eu[e] = { exports: {} });
        return el[e](n, n.exports, ec), n.exports;
    }
    (ec.d = (e, t) => {
        for (var n in t) ec.o(t, n) && !ec.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
        (ec.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (ec.r = (e) => {
            "u" > typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        });
    var ed = {};
    return (
        ec.r(ed),
        ec.d(ed, {
            Alignment: () => t,
            DataEnum: () => j,
            EventType: () => r,
            Fit: () => e,
            Layout: () => T,
            LoopType: () => s,
            Rive: () => B,
            RiveEventType: () => i,
            RiveFile: () => V,
            RuntimeLoader: () => S,
            StateMachineInput: () => y,
            StateMachineInputType: () => n,
            Testing: () => er,
            ViewModel: () => H,
            ViewModelInstance: () => W,
            ViewModelInstanceArtboard: () => et,
            ViewModelInstanceAssetImage: () => ee,
            ViewModelInstanceBoolean: () => q,
            ViewModelInstanceColor: () => J,
            ViewModelInstanceEnum: () => X,
            ViewModelInstanceList: () => Q,
            ViewModelInstanceNumber: () => $,
            ViewModelInstanceString: () => z,
            ViewModelInstanceTrigger: () => Z,
            ViewModelInstanceValue: () => K,
            decodeAudio: () => es,
            decodeFont: () => eo,
            decodeImage: () => ea,
        }),
        (l = ec(1)),
        (u = ec(2)),
        (c = ec(3)),
        (d = ec(5)),
        (_ = function (e, t) {
            return (_ =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
        }),
        (f = function (e, t) {
            if ("function" != typeof t && null !== t)
                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
                this.constructor = e;
            }
            _(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
        }),
        (h = function () {
            return (h =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e;
                }).apply(this, arguments);
        }),
        (p = function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, s) {
                function a(e) {
                    try {
                        l(i.next(e));
                    } catch (e) {
                        s(e);
                    }
                }
                function o(e) {
                    try {
                        l(i.throw(e));
                    } catch (e) {
                        s(e);
                    }
                }
                function l(e) {
                    var t;
                    e.done
                        ? r(e.value)
                        : ((t = e.value) instanceof n
                              ? t
                              : new n(function (e) {
                                    e(t);
                                })
                          ).then(a, o);
                }
                l((i = i.apply(e, t || [])).next());
            });
        }),
        (E = function (e, t) {
            var n,
                i,
                r,
                s = {
                    label: 0,
                    sent: function () {
                        if (1 & r[0]) throw r[1];
                        return r[1];
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
            function o(o) {
                return function (l) {
                    var u = [o, l];
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a && ((a = 0), u[0] && (s = 0)), s; )
                        try {
                            if (
                                ((n = 1),
                                i &&
                                    (r =
                                        2 & u[0]
                                            ? i.return
                                            : u[0]
                                              ? i.throw || ((r = i.return) && r.call(i), 0)
                                              : i.next) &&
                                    !(r = r.call(i, u[1])).done)
                            )
                                return r;
                            switch (((i = 0), r && (u = [2 & u[0], r.value]), u[0])) {
                                case 0:
                                case 1:
                                    r = u;
                                    break;
                                case 4:
                                    return s.label++, { value: u[1], done: !1 };
                                case 5:
                                    s.label++, (i = u[1]), (u = [0]);
                                    continue;
                                case 7:
                                    (u = s.ops.pop()), s.trys.pop();
                                    continue;
                                default:
                                    if (
                                        !(r = (r = s.trys).length > 0 && r[r.length - 1]) &&
                                        (6 === u[0] || 2 === u[0])
                                    ) {
                                        s = 0;
                                        continue;
                                    }
                                    if (3 === u[0] && (!r || (u[1] > r[0] && u[1] < r[3]))) {
                                        s.label = u[1];
                                        break;
                                    }
                                    if (6 === u[0] && s.label < r[1]) {
                                        (s.label = r[1]), (r = u);
                                        break;
                                    }
                                    if (r && s.label < r[2]) {
                                        (s.label = r[2]), s.ops.push(u);
                                        break;
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                            }
                            u = t.call(e, s);
                        } catch (e) {
                            (u = [6, e]), (i = 0);
                        } finally {
                            n = r = 0;
                        }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                };
            }
        }),
        (m = function (e, t, n) {
            if (n || 2 == arguments.length)
                for (var i, r = 0, s = t.length; r < s; r++)
                    (!i && r in t) || (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
            return e.concat(i || Array.prototype.slice.call(t));
        }),
        (g = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.isHandledError = !0), t;
            }
            return f(t, e), t;
        })(Error)),
        ((A = e || (e = {})).Cover = "cover"),
        (A.Contain = "contain"),
        (A.Fill = "fill"),
        (A.FitWidth = "fitWidth"),
        (A.FitHeight = "fitHeight"),
        (A.None = "none"),
        (A.ScaleDown = "scaleDown"),
        (A.Layout = "layout"),
        ((I = t || (t = {})).Center = "center"),
        (I.TopLeft = "topLeft"),
        (I.TopCenter = "topCenter"),
        (I.TopRight = "topRight"),
        (I.CenterLeft = "centerLeft"),
        (I.CenterRight = "centerRight"),
        (I.BottomLeft = "bottomLeft"),
        (I.BottomCenter = "bottomCenter"),
        (I.BottomRight = "bottomRight"),
        (T = (function () {
            function n(n) {
                var i, r, s, a, o, l, u;
                (this.fit = null != (i = null == n ? void 0 : n.fit) ? i : e.Contain),
                    (this.alignment = null != (r = null == n ? void 0 : n.alignment) ? r : t.Center),
                    (this.layoutScaleFactor = null != (s = null == n ? void 0 : n.layoutScaleFactor) ? s : 1),
                    (this.minX = null != (a = null == n ? void 0 : n.minX) ? a : 0),
                    (this.minY = null != (o = null == n ? void 0 : n.minY) ? o : 0),
                    (this.maxX = null != (l = null == n ? void 0 : n.maxX) ? l : 0),
                    (this.maxY = null != (u = null == n ? void 0 : n.maxY) ? u : 0);
            }
            return (
                (n.new = function (e) {
                    var t = e.fit,
                        i = e.alignment,
                        r = e.minX,
                        s = e.minY,
                        a = e.maxX,
                        o = e.maxY;
                    return (
                        console.warn("This function is deprecated: please use `new Layout({})` instead"),
                        new n({ fit: t, alignment: i, minX: r, minY: s, maxX: a, maxY: o })
                    );
                }),
                (n.prototype.copyWith = function (e) {
                    var t = e.fit,
                        i = e.alignment,
                        r = e.layoutScaleFactor,
                        s = e.minX,
                        a = e.minY,
                        o = e.maxX,
                        l = e.maxY;
                    return new n({
                        fit: null != t ? t : this.fit,
                        alignment: null != i ? i : this.alignment,
                        layoutScaleFactor: null != r ? r : this.layoutScaleFactor,
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
                            var n;
                            for (e.runtime = t; e.callBackQueue.length > 0; )
                                null == (n = e.callBackQueue.shift()) || n(e.runtime);
                        })
                        .catch(function (t) {
                            var n = {
                                message: (null == t ? void 0 : t.message) || "Unknown error",
                                type: (null == t ? void 0 : t.name) || "Error",
                                wasmError:
                                    t instanceof WebAssembly.CompileError || t instanceof WebAssembly.RuntimeError,
                                originalError: t,
                            };
                            console.debug("Rive WASM load error details:", n);
                            var i = "https://cdn.jsdelivr.net/npm/"
                                .concat(u.name, "@")
                                .concat(u.version, "/rive_fallback.wasm");
                            e.wasmURL.toLowerCase() !== i
                                ? (console.warn(
                                      "Failed to load WASM from "
                                          .concat(e.wasmURL, " (")
                                          .concat(n.message, "), trying jsdelivr as a backup"),
                                  ),
                                  e.setWasmUrl(i),
                                  e.loadRuntime())
                                : console.error(
                                      [
                                          "Could not load Rive WASM file from "
                                              .concat(e.wasmURL, " or ")
                                              .concat(i, "."),
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
                (e.wasmURL = "https://unpkg.com/".concat(u.name, "@").concat(u.version, "/rive.wasm")),
                e
            );
        })()),
        ((N = n || (n = {}))[(N.Number = 56)] = "Number"),
        (N[(N.Trigger = 58)] = "Trigger"),
        (N[(N.Boolean = 59)] = "Boolean"),
        (y = (function () {
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
                    this.type === n.Trigger && this.runtimeInput.fire();
                }),
                (e.prototype.delete = function () {
                    this.runtimeInput = null;
                }),
                e
            );
        })()),
        ((C = i || (i = {}))[(C.General = 128)] = "General"),
        (C[(C.OpenUrl = 131)] = "OpenUrl"),
        (O = (function (e) {
            function t(t, n) {
                var i = e.call(this, !1) || this;
                return (i.nativeArtboard = t), (i.file = n), i;
            }
            return f(t, e), t;
        })(
            (v = function (e) {
                (this.isBindableArtboard = !1), (this.isBindableArtboard = e);
            }),
        )),
        (R = (function (e) {
            function t(t) {
                var n = e.call(this, !0) || this;
                return (n.selfUnref = !1), (n.nativeArtboard = t), n;
            }
            return (
                f(t, e),
                (t.prototype.destroy = function () {
                    this.selfUnref && this.nativeArtboard.unref();
                }),
                t
            );
        })(v)),
        (b = (function () {
            function e(e, t, n, i) {
                (this.stateMachine = e),
                    (this.playing = n),
                    (this.artboard = i),
                    (this.inputs = []),
                    (this.instance = new t.StateMachineInstance(e, i)),
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
                        ? new y(n.Boolean, e.asBool())
                        : e.type === t.SMIInput.number
                          ? new y(n.Number, e.asNumber())
                          : e.type === t.SMIInput.trigger
                            ? new y(n.Trigger, e.asTrigger())
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
        (D = (function () {
            function e(e, t, n, i, r) {
                void 0 === i && (i = []),
                    void 0 === r && (r = []),
                    (this.runtime = e),
                    (this.artboard = t),
                    (this.eventManager = n),
                    (this.animations = i),
                    (this.stateMachines = r);
            }
            return (
                (e.prototype.add = function (e, t, n) {
                    if ((void 0 === n && (n = !0), 0 === (e = ei(e)).length))
                        this.animations.forEach(function (e) {
                            return (e.playing = t);
                        }),
                            this.stateMachines.forEach(function (e) {
                                return (e.playing = t);
                            });
                    else
                        for (
                            var i = this.animations.map(function (e) {
                                    return e.name;
                                }),
                                s = this.stateMachines.map(function (e) {
                                    return e.name;
                                }),
                                a = 0;
                            a < e.length;
                            a++
                        ) {
                            var o = i.indexOf(e[a]),
                                l = s.indexOf(e[a]);
                            if (o >= 0 || l >= 0)
                                o >= 0 ? (this.animations[o].playing = t) : (this.stateMachines[l].playing = t);
                            else {
                                var u = this.artboard.animationByName(e[a]);
                                if (u) {
                                    var d = new c.Animation(u, this.artboard, this.runtime, t);
                                    d.advance(0), d.apply(1), this.animations.push(d);
                                } else {
                                    var _ = this.artboard.stateMachineByName(e[a]);
                                    if (_) {
                                        var f = new b(_, this.runtime, t, this.artboard);
                                        this.stateMachines.push(f);
                                    }
                                }
                            }
                        }
                    return (
                        n &&
                            (t
                                ? this.eventManager.fire({ type: r.Play, data: this.playing })
                                : this.eventManager.fire({ type: r.Pause, data: this.paused })),
                        t ? this.playing : this.paused
                    );
                }),
                (e.prototype.initLinearAnimations = function (e, t) {
                    for (
                        var n = this.animations.map(function (e) {
                                return e.name;
                            }),
                            i = 0;
                        i < e.length;
                        i++
                    ) {
                        var r = n.indexOf(e[i]);
                        if (r >= 0) this.animations[r].playing = t;
                        else {
                            var s = this.artboard.animationByName(e[i]);
                            if (s) {
                                var a = new c.Animation(s, this.artboard, this.runtime, t);
                                a.advance(0), a.apply(1), this.animations.push(a);
                            } else console.error("Animation with name ".concat(e[i], " not found."));
                        }
                    }
                }),
                (e.prototype.initStateMachines = function (e, t) {
                    for (
                        var n = this.stateMachines.map(function (e) {
                                return e.name;
                            }),
                            i = 0;
                        i < e.length;
                        i++
                    ) {
                        var r = n.indexOf(e[i]);
                        if (r >= 0) this.stateMachines[r].playing = t;
                        else {
                            var s = this.artboard.stateMachineByName(e[i]);
                            if (s) {
                                var a = new b(s, this.runtime, t, this.artboard);
                                this.stateMachines.push(a);
                            } else
                                console.warn("State Machine with name ".concat(e[i], " not found.")),
                                    this.initLinearAnimations([e[i]], t);
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
                    e = ei(e);
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
                        var i = this.animations.filter(function (t) {
                            return e.includes(t.name);
                        });
                        i.forEach(function (e) {
                            e.cleanup(), t.animations.splice(t.animations.indexOf(e), 1);
                        });
                        var s = this.stateMachines.filter(function (t) {
                            return e.includes(t.name);
                        });
                        s.forEach(function (e) {
                            e.cleanup(), t.stateMachines.splice(t.stateMachines.indexOf(e), 1);
                        }),
                            (n = i
                                .map(function (e) {
                                    return e.name;
                                })
                                .concat(
                                    s.map(function (e) {
                                        return e.name;
                                    }),
                                ));
                    }
                    return this.eventManager.fire({ type: r.Stop, data: n }), n;
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
                              ? (this.eventManager.fire({ type: r.Loop, data: { animation: n.name, type: s.Loop } }),
                                (n.loopCount = 0))
                              : 2 === n.loopValue &&
                                n.loopCount > 1 &&
                                (this.eventManager.fire({
                                    type: r.Loop,
                                    data: { animation: n.name, type: s.PingPong },
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
                        var i = n[t];
                        e.push.apply(e, i.statesChanged);
                    }
                    e.length > 0 && this.eventManager.fire({ type: r.StateChange, data: e });
                }),
                (e.prototype.handleAdvancing = function (e) {
                    this.eventManager.fire({ type: r.Advance, data: e });
                }),
                e
            );
        })()),
        ((L = r || (r = {})).Load = "load"),
        (L.LoadError = "loaderror"),
        (L.Play = "play"),
        (L.Pause = "pause"),
        (L.Stop = "stop"),
        (L.Loop = "loop"),
        (L.Draw = "draw"),
        (L.Advance = "advance"),
        (L.StateChange = "statechange"),
        (L.RiveEvent = "riveevent"),
        (L.AudioStatusChange = "audiostatuschange"),
        ((w = s || (s = {})).OneShot = "oneshot"),
        (w.Loop = "loop"),
        (w.PingPong = "pingpong"),
        (M = (function () {
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
        })()),
        (P = (function () {
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
        ((x = a || (a = {}))[(x.AVAILABLE = 0)] = "AVAILABLE"),
        (x[(x.UNAVAILABLE = 1)] = "UNAVAILABLE"),
        (U = new ((function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._started = !1), (t._enabled = !1), (t._status = a.UNAVAILABLE), t;
            }
            return (
                f(t, e),
                (t.prototype.delay = function (e) {
                    return p(this, void 0, void 0, function () {
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
                    return p(this, void 0, void 0, function () {
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
                    this.fire({ type: r.AudioStatusChange }), this.removeAll();
                }),
                (t.prototype.enableAudio = function () {
                    return p(this, void 0, void 0, function () {
                        return E(this, function (e) {
                            return (
                                this._enabled ||
                                    ((this._enabled = !0), (this._status = a.AVAILABLE), this.reportToListeners()),
                                [2]
                            );
                        });
                    });
                }),
                (t.prototype.testAudio = function () {
                    return p(this, void 0, void 0, function () {
                        return E(this, function (e) {
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
                    return p(this, void 0, void 0, function () {
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
                            return p(e, void 0, void 0, function () {
                                return E(this, function (e) {
                                    return this.enableAudio(), [2];
                                });
                            });
                        },
                        { once: !0 },
                    );
                }),
                (t.prototype.establishAudio = function () {
                    return p(this, void 0, void 0, function () {
                        return E(this, function (e) {
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
        })(M))()),
        (k = (function () {
            function e() {}
            return (
                (e.prototype.observe = function () {}),
                (e.prototype.unobserve = function () {}),
                (e.prototype.disconnect = function () {}),
                e
            );
        })()),
        (G = globalThis.ResizeObserver || k),
        (F = new ((function () {
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
                    (this._resizeObserver = new G(this._onObserved));
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
        })())()),
        (V = (function () {
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
                    (this.eventManager = new M()),
                    e.onLoad && this.on(r.Load, e.onLoad),
                    e.onLoadError && this.on(r.LoadError, e.onLoadError);
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
                    return p(this, void 0, void 0, function () {
                        var t, n, i, s;
                        return E(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    if (!this.src) return [3, 2];
                                    return (t = this), [4, en(this.src)];
                                case 1:
                                    (t.buffer = a.sent()), (a.label = 2);
                                case 2:
                                    if (this.destroyed) return [2];
                                    return (
                                        this.assetLoader &&
                                            (n = new d.CustomFileAssetLoaderWrapper(this.runtime, this.assetLoader)
                                                .assetLoader),
                                        (i = this),
                                        [4, this.runtime.load(new Uint8Array(this.buffer), n, this.enableRiveAssetCDN)]
                                    );
                                case 3:
                                    if (
                                        ((i.file = a.sent()),
                                        (s = new d.FileFinalizer(this.file)),
                                        d.finalizationRegistry.register(this, s),
                                        this.destroyed)
                                    )
                                        return this.releaseFile(), [2];
                                    return (
                                        null !== this.file
                                            ? this.eventManager.fire({ type: r.Load, data: this })
                                            : this.fireLoadError(e.fileLoadErrorMessage),
                                        [2]
                                    );
                            }
                        });
                    });
                }),
                (e.prototype.init = function () {
                    return p(this, void 0, void 0, function () {
                        var t, n;
                        return E(this, function (i) {
                            switch (i.label) {
                                case 0:
                                    if (!this.src && !this.buffer)
                                        return this.fireLoadError(e.missingErrorMessage), [2];
                                    i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, , 5]), (t = this), [4, S.awaitInstance()];
                                case 2:
                                    if (((t.runtime = i.sent()), this.destroyed)) return [2];
                                    return [4, this.initData()];
                                case 3:
                                    return i.sent(), [3, 5];
                                case 4:
                                    return (
                                        (n = i.sent()),
                                        this.fireLoadError(n instanceof Error ? n.message : e.fileLoadErrorMessage),
                                        [3, 5]
                                    );
                                case 5:
                                    return [2];
                            }
                        });
                    });
                }),
                (e.prototype.fireLoadError = function (e) {
                    throw (this.eventManager.fire({ type: r.LoadError, data: e }), Error(e));
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
                        var t = new R(e);
                        return (0, d.createFinalization)(t, t.nativeArtboard), this.bindableArtboards.push(t), t;
                    }
                    return null;
                }),
                (e.prototype.getArtboard = function (e) {
                    var t = this.file.artboardByName(e);
                    if (null != t) return new O(t, this);
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
        (B = (function () {
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
                        (this._observed = F.add(this.canvas, this.onCanvasResize)),
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
                    (this.eventManager = new M()),
                    e.onLoad && this.on(r.Load, e.onLoad),
                    e.onLoadError && this.on(r.LoadError, e.onLoadError),
                    e.onPlay && this.on(r.Play, e.onPlay),
                    e.onPause && this.on(r.Pause, e.onPause),
                    e.onStop && this.on(r.Stop, e.onStop),
                    e.onLoop && this.on(r.Loop, e.onLoop),
                    e.onStateChange && this.on(r.StateChange, e.onStateChange),
                    e.onAdvance && this.on(r.Advance, e.onAdvance),
                    e.onload && !e.onLoad && this.on(r.Load, e.onload),
                    e.onloaderror && !e.onLoadError && this.on(r.LoadError, e.onloaderror),
                    e.onplay && !e.onPlay && this.on(r.Play, e.onplay),
                    e.onpause && !e.onPause && this.on(r.Pause, e.onpause),
                    e.onstop && !e.onStop && this.on(r.Stop, e.onstop),
                    e.onloop && !e.onLoop && this.on(r.Loop, e.onloop),
                    e.onstatechange && !e.onStateChange && this.on(r.StateChange, e.onstatechange),
                    e.assetLoader && (this.assetLoader = e.assetLoader),
                    (this.taskQueue = new P(this.eventManager)),
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
                    var n = this,
                        i = e.src,
                        r = e.buffer,
                        s = e.riveFile,
                        a = e.animations,
                        o = e.stateMachines,
                        l = e.artboard,
                        u = e.autoplay,
                        c = void 0 !== u && u,
                        d = e.useOffscreenRenderer,
                        _ = void 0 !== d && d,
                        f = e.autoBind,
                        h = void 0 !== f && f;
                    if (!this.destroyed) {
                        if (
                            ((this.src = i),
                            (this.buffer = r),
                            (this.riveFile = s),
                            !this.src && !this.buffer && !this.riveFile)
                        )
                            throw new g(t.missingErrorMessage);
                        var p = ei(a),
                            E = ei(o);
                        (this.loaded = !1),
                            (this.readyForPlaying = !1),
                            S.awaitInstance()
                                .then(function (e) {
                                    n.destroyed ||
                                        ((n.runtime = e),
                                        n.removeRiveListeners(),
                                        n.deleteRiveRenderer(),
                                        (n.renderer = n.runtime.makeRenderer(n.canvas, _)),
                                        n.canvas.width || n.canvas.height || n.resizeDrawingSurfaceToCanvas(),
                                        n
                                            .initData(l, p, E, c, h)
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
                            i = this.isTouchScrollEnabled,
                            r = this.dispatchPointerExit,
                            s = this.enableMultiTouch;
                        e && "isTouchScrollEnabled" in e && (i = e.isTouchScrollEnabled);
                        var a = this.canvas;
                        null != this.eventTarget && (a = this.eventTarget),
                            (this.eventCleanup = (0, d.registerTouchInteractions)({
                                canvas: a,
                                listenOnDocumentBody: this.listenOnDocumentBody,
                                eventCapture: this.eventCapture,
                                artboard: this.artboard,
                                stateMachines: n,
                                renderer: this.renderer,
                                rive: this.runtime,
                                fit: this._layout.runtimeFit(this.runtime),
                                alignment: this._layout.runtimeAlignment(this.runtime),
                                isTouchScrollEnabled: i,
                                dispatchPointerExit: r,
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
                    U.status == a.UNAVAILABLE &&
                        (null == (e = this.artboard) ? void 0 : e.hasAudio) &&
                        null === this._audioEventListener &&
                        ((this._audioEventListener = {
                            type: r.AudioStatusChange,
                            callback: function () {
                                return t.onSystemAudioChanged();
                            },
                        }),
                        U.add(this._audioEventListener),
                        U.establishAudio());
                }),
                (t.prototype.initArtboardSize = function () {
                    this.artboard &&
                        ((this._artboardWidth = this.artboard.width = this._artboardWidth || this.artboard.width),
                        (this._artboardHeight = this.artboard.height = this._artboardHeight || this.artboard.height));
                }),
                (t.prototype.initData = function (e, t, n, i, s) {
                    return p(this, void 0, void 0, function () {
                        var a, o, l;
                        return E(this, function (u) {
                            switch (u.label) {
                                case 0:
                                    if ((u.trys.push([0, 3, , 4]), null != this.riveFile)) return [3, 2];
                                    return (
                                        (a = new V({
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
                                        this.initArtboard(e, t, n, i, s),
                                        this.initArtboardSize(),
                                        this.initializeAudio(),
                                        (this.loaded = !0),
                                        this.eventManager.fire({
                                            type: r.Load,
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
                                            (o =
                                                (c = u.sent()) && c.isHandledError
                                                    ? c.message
                                                    : "Problem loading file; may be corrupt!"),
                                        ),
                                        this.eventManager.fire({ type: r.LoadError, data: o }),
                                        [2, Promise.reject(o)]
                                    );
                                case 4:
                                    return [2];
                            }
                        });
                    });
                }),
                (t.prototype.initArtboard = function (e, t, n, i, s) {
                    if (this.file) {
                        var a,
                            o = e ? this.file.artboardByName(e) : this.file.defaultArtboard();
                        if (!o) {
                            var l = "Invalid artboard name or no default artboard";
                            console.warn(l), this.eventManager.fire({ type: r.LoadError, data: l });
                            return;
                        }
                        if (
                            ((this.artboard = o),
                            (o.volume = this._volume * U.systemVolume),
                            (this.animator = new D(this.runtime, this.artboard, this.eventManager)),
                            t.length > 0 || n.length > 0
                                ? ((a = t.concat(n)),
                                  this.animator.initLinearAnimations(t, i),
                                  this.animator.initStateMachines(n, i))
                                : (a = [this.animator.atLeastOne(i, !1)]),
                            this.taskQueue.add({ event: { type: i ? r.Play : r.Pause, data: a } }),
                            s)
                        ) {
                            var u = this.file.defaultArtboardViewModel(o);
                            if (null !== u) {
                                var c = u.defaultInstance();
                                if (null !== c) {
                                    var _ = new W(c, null);
                                    (0, d.createFinalization)(_, _.runtimeInstance), this.bindViewModelInstance(_);
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
                        s = performance.now();
                    this.lastRenderTime || (this.lastRenderTime = e),
                        (this.renderSecondTimer += e - this.lastRenderTime),
                        this.renderSecondTimer > 5e3 && ((this.renderSecondTimer = 0), null == t || t());
                    var a = (e - this.lastRenderTime) / 1e3;
                    this.lastRenderTime = e;
                    for (
                        var o = this.animator.animations
                                .filter(function (e) {
                                    return e.playing || e.needsScrub;
                                })
                                .sort(function (e) {
                                    return e.needsScrub ? -1 : 1;
                                }),
                            l = 0;
                        l < o.length;
                        l++
                    ) {
                        var u = o[l];
                        u.advance(a), u.instance.didLoop && (u.loopCount += 1), u.apply(1);
                    }
                    for (
                        var c = this.animator.stateMachines.filter(function (e) {
                                return e.playing;
                            }),
                            _ = 0;
                        _ < c.length;
                        _++
                    ) {
                        var f = c[_],
                            h = f.reportedEventCount();
                        if (h)
                            for (var p = 0; p < h; p++) {
                                var E = f.reportedEventAt(p);
                                if (E)
                                    if (E.type === i.OpenUrl) {
                                        if (
                                            (this.eventManager.fire({ type: r.RiveEvent, data: E }),
                                            this.automaticallyHandleEvents)
                                        ) {
                                            var m = document.createElement("a"),
                                                g = E.url,
                                                A = E.target,
                                                I = (0, d.sanitizeUrl)(g);
                                            g && m.setAttribute("href", I),
                                                A && m.setAttribute("target", A),
                                                I && I !== d.BLANK_URL && m.click();
                                        }
                                    } else this.eventManager.fire({ type: r.RiveEvent, data: E });
                            }
                        f.advanceAndApply(a);
                    }
                    0 == this.animator.stateMachines.length && this.artboard.advance(a);
                    var T = this.renderer;
                    T.clear(),
                        T.save(),
                        this.alignRenderer(),
                        this._hasZeroSize || this.artboard.draw(T),
                        T.restore(),
                        T.flush(),
                        this.animator.handleLooping(),
                        this.animator.handleStateChanges(),
                        this.animator.handleAdvancing(a),
                        this.frameCount++;
                    var S = performance.now();
                    for (this.frameTimes.push(S), this.durations.push(S - s); this.frameTimes[0] <= S - 1e3; )
                        this.frameTimes.shift(), this.durations.shift();
                    null == (n = this._viewModelInstance) || n.handleCallbacks(),
                        this.animator.isPlaying
                            ? this.startRendering()
                            : this.animator.isPaused
                              ? (this.lastRenderTime = 0)
                              : this.animator.isStopped && (this.lastRenderTime = 0);
                }),
                (t.prototype.alignRenderer = function () {
                    var e = this.renderer,
                        t = this.runtime,
                        n = this._layout,
                        i = this.artboard;
                    e.align(
                        n.runtimeFit(t),
                        n.runtimeAlignment(t),
                        { minX: n.minX, minY: n.minY, maxX: n.maxX, maxY: n.maxY },
                        i.bounds,
                        this._devicePixelRatioUsed * n.layoutScaleFactor,
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
                            (U.remove(this._audioEventListener), (this._audioEventListener = null)),
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
                    ((e = ei(e)), this.readyForPlaying)
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
                    ((e = ei(e)), this.readyForPlaying)
                        ? (this.eventCleanup && this.eventCleanup(), this.animator.pause(e))
                        : this.taskQueue.add({
                              action: function () {
                                  return t.pause(e);
                              },
                          });
                }),
                (t.prototype.scrub = function (e, t) {
                    var n = this;
                    ((e = ei(e)), this.readyForPlaying)
                        ? (this.animator.scrub(e, t || 0), this.drawFrame())
                        : this.taskQueue.add({
                              action: function () {
                                  return n.scrub(e, t);
                              },
                          });
                }),
                (t.prototype.stop = function (e) {
                    var t = this;
                    ((e = ei(e)), this.readyForPlaying)
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
                        i = null == e ? void 0 : e.artboard,
                        r = ei(null == e ? void 0 : e.animations),
                        s = ei(null == e ? void 0 : e.stateMachines),
                        a = null != (t = null == e ? void 0 : e.autoplay) && t,
                        o = null != (n = null == e ? void 0 : e.autoBind) && n;
                    this.cleanupInstances(), this.initArtboard(i, r, s, a, o), this.taskQueue.process();
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
                            i = n.width,
                            r = n.height,
                            s = t || window.devicePixelRatio || 1;
                        if (
                            ((this.devicePixelRatioUsed = s),
                            (this.canvas.width = s * i),
                            (this.canvas.height = s * r),
                            this.resizeToCanvas(),
                            this.drawFrame(),
                            this.layout.fit === e.Layout)
                        ) {
                            var a = this._layout.layoutScaleFactor;
                            (this.artboard.width = i / a), (this.artboard.height = r / a);
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
                            "Could not access an input with name: '".concat(e, "', at path:'").concat(t, "'"),
                        )
                    );
                }),
                (t.prototype.setBooleanStateAtPath = function (e, t, i) {
                    var r = this.retrieveInputAtPath(e, i);
                    r &&
                        (r.type === n.Boolean
                            ? (r.asBool().value = t)
                            : console.warn(
                                  "Input with name: '".concat(e, "', at path:'").concat(i, "' is not a boolean"),
                              ));
                }),
                (t.prototype.setNumberStateAtPath = function (e, t, i) {
                    var r = this.retrieveInputAtPath(e, i);
                    r &&
                        (r.type === n.Number
                            ? (r.asNumber().value = t)
                            : console.warn(
                                  "Input with name: '".concat(e, "', at path:'").concat(i, "' is not a number"),
                              ));
                }),
                (t.prototype.fireStateAtPath = function (e, t) {
                    var i = this.retrieveInputAtPath(e, t);
                    i &&
                        (i.type === n.Trigger
                            ? i.asTrigger().fire()
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
                    var n = this.artboard.textByPath(e, t);
                    return (
                        n ||
                        void console.warn("Could not access text with name: '".concat(e, "', at path:'").concat(t, "'"))
                    );
                }),
                (t.prototype.getTextRunValueAtPath = function (e, t) {
                    var n = this.retrieveTextAtPath(e, t);
                    return n
                        ? n.text
                        : void console.warn("Could not get text with name: '".concat(e, "', at path:'").concat(t, "'"));
                }),
                (t.prototype.setTextRunValueAtPath = function (e, t, n) {
                    var i = this.retrieveTextAtPath(e, n);
                    i
                        ? (i.text = t)
                        : console.warn("Could not set text with name: '".concat(e, "', at path:'").concat(n, "'"));
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
                                    var n = this.file.artboardByIndex(t),
                                        i = { name: n.name, animations: [], stateMachines: [] },
                                        r = 0;
                                    r < n.animationCount();
                                    r++
                                ) {
                                    var s = n.animationByIndex(r);
                                    i.animations.push(s.name);
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
                                    i.stateMachines.push({ name: l, inputs: c });
                                }
                                e.artboards.push(i);
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
                        (this._volume = e), this.artboard && (this.artboard.volume = e * U.systemVolume);
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
                    return null !== t ? new H(t) : null;
                }),
                (t.prototype.viewModelByName = function (e) {
                    var t = this.file.viewModelByName(e);
                    return null !== t ? new H(t) : null;
                }),
                (t.prototype.enums = function () {
                    if (null === this._dataEnums) {
                        var e = this.file.enums();
                        this._dataEnums = e.map(function (e) {
                            return new j(e);
                        });
                    }
                    return this._dataEnums;
                }),
                (t.prototype.defaultViewModel = function () {
                    if (this.artboard) {
                        var e = this.file.defaultArtboardViewModel(this.artboard);
                        if (e) return new H(e);
                    }
                    return null;
                }),
                (t.prototype.getArtboard = function (e) {
                    var t, n;
                    return null != (n = null == (t = this.riveFile) ? void 0 : t.getArtboard(e)) ? n : null;
                }),
                (t.prototype.getBindableArtboard = function (e) {
                    var t, n;
                    return null != (n = null == (t = this.riveFile) ? void 0 : t.getBindableArtboard(e)) ? n : null;
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
        (H = (function () {
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
                        var n = new W(t, null);
                        return (0, d.createFinalization)(n, t), n;
                    }
                    return null;
                }),
                (e.prototype.instanceByName = function (e) {
                    var t = this._viewModel.instanceByName(e);
                    if (null !== t) {
                        var n = new W(t, null);
                        return (0, d.createFinalization)(n, t), n;
                    }
                    return null;
                }),
                (e.prototype.defaultInstance = function () {
                    var e = this._viewModel.defaultInstance();
                    if (null !== e) {
                        var t = new W(e, null);
                        return (0, d.createFinalization)(t, e), t;
                    }
                    return null;
                }),
                (e.prototype.instance = function () {
                    var e = this._viewModel.instance();
                    if (null !== e) {
                        var t = new W(e, null);
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
        (j = (function () {
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
        ((Y = o || (o = {})).Number = "number"),
        (Y.String = "string"),
        (Y.Boolean = "boolean"),
        (Y.Color = "color"),
        (Y.Trigger = "trigger"),
        (Y.Enum = "enum"),
        (Y.List = "list"),
        (Y.Image = "image"),
        (Y.Artboard = "artboard"),
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
                        var i,
                            r,
                            s,
                            a,
                            l,
                            u,
                            c,
                            d,
                            _,
                            f,
                            h,
                            p,
                            E,
                            m,
                            g,
                            A,
                            I,
                            T,
                            S = this.internalViewModelInstance(e[t]);
                        return null !== S ? S.propertyFromPathSegments(e, t + 1, n) : null;
                    }
                    var N = null;
                    switch (n) {
                        case o.Number:
                            if (
                                null !==
                                (N =
                                    null != (r = null == (i = this._runtimeInstance) ? void 0 : i.number(e[t]))
                                        ? r
                                        : null)
                            )
                                return new $(N, this);
                            break;
                        case o.String:
                            if (
                                null !==
                                (N =
                                    null != (a = null == (s = this._runtimeInstance) ? void 0 : s.string(e[t]))
                                        ? a
                                        : null)
                            )
                                return new z(N, this);
                            break;
                        case o.Boolean:
                            if (
                                null !==
                                (N =
                                    null != (u = null == (l = this._runtimeInstance) ? void 0 : l.boolean(e[t]))
                                        ? u
                                        : null)
                            )
                                return new q(N, this);
                            break;
                        case o.Color:
                            if (
                                null !==
                                (N =
                                    null != (d = null == (c = this._runtimeInstance) ? void 0 : c.color(e[t]))
                                        ? d
                                        : null)
                            )
                                return new J(N, this);
                            break;
                        case o.Trigger:
                            if (
                                null !==
                                (N =
                                    null != (f = null == (_ = this._runtimeInstance) ? void 0 : _.trigger(e[t]))
                                        ? f
                                        : null)
                            )
                                return new Z(N, this);
                            break;
                        case o.Enum:
                            if (
                                null !==
                                (N =
                                    null != (p = null == (h = this._runtimeInstance) ? void 0 : h.enum(e[t]))
                                        ? p
                                        : null)
                            )
                                return new X(N, this);
                            break;
                        case o.List:
                            if (
                                null !==
                                (N =
                                    null != (m = null == (E = this._runtimeInstance) ? void 0 : E.list(e[t]))
                                        ? m
                                        : null)
                            )
                                return new Q(N, this);
                            break;
                        case o.Image:
                            if (
                                null !==
                                (N =
                                    null != (A = null == (g = this._runtimeInstance) ? void 0 : g.image(e[t]))
                                        ? A
                                        : null)
                            )
                                return new ee(N, this);
                            break;
                        case o.Artboard:
                            if (
                                null !==
                                (N =
                                    null != (T = null == (I = this._runtimeInstance) ? void 0 : I.artboard(e[t]))
                                        ? T
                                        : null)
                            )
                                return new et(N, this);
                    }
                    return null;
                }),
                (e.prototype.internalViewModelInstance = function (t) {
                    if (this._viewModelInstances.has(t)) return this._viewModelInstances.get(t);
                    var n,
                        i = null == (n = this._runtimeInstance) ? void 0 : n.viewModel(t);
                    if (null !== i) {
                        var r = new e(i, this);
                        return (
                            (0, d.createFinalization)(r, i),
                            r.internalIncrementReferenceCount(),
                            this._viewModelInstances.set(t, r),
                            r
                        );
                    }
                    return null;
                }),
                (e.prototype.number = function (e) {
                    return this.propertyFromPath(e, o.Number);
                }),
                (e.prototype.string = function (e) {
                    return this.propertyFromPath(e, o.String);
                }),
                (e.prototype.boolean = function (e) {
                    return this.propertyFromPath(e, o.Boolean);
                }),
                (e.prototype.color = function (e) {
                    return this.propertyFromPath(e, o.Color);
                }),
                (e.prototype.trigger = function (e) {
                    return this.propertyFromPath(e, o.Trigger);
                }),
                (e.prototype.enum = function (e) {
                    return this.propertyFromPath(e, o.Enum);
                }),
                (e.prototype.list = function (e) {
                    return this.propertyFromPath(e, o.List);
                }),
                (e.prototype.image = function (e) {
                    return this.propertyFromPath(e, o.Image);
                }),
                (e.prototype.artboard = function (e) {
                    return this.propertyFromPath(e, o.Artboard);
                }),
                (e.prototype.viewModel = function (e) {
                    var t = e.split("/"),
                        n = t.length > 1 ? this.viewModelFromPathSegments(t.slice(0, t.length - 1), 0) : this;
                    return null != n ? n.internalViewModelInstance(t[t.length - 1]) : null;
                }),
                (e.prototype.internalReplaceViewModel = function (e, t) {
                    var n;
                    if (null !== t.runtimeInstance) {
                        var i =
                            (null == (n = this._runtimeInstance) ? void 0 : n.replaceViewModel(e, t.runtimeInstance)) ||
                            !1;
                        if (i) {
                            t.internalIncrementReferenceCount();
                            var r = this.internalViewModelInstance(e);
                            null !== r &&
                                (r.removeParent(this),
                                this._children.includes(r) &&
                                    (this._children = this._children.filter(function (e) {
                                        return e !== r;
                                    })),
                                r.cleanup()),
                                this._viewModelInstances.set(e, t),
                                t.addParent(this);
                        }
                        return i;
                    }
                    return !1;
                }),
                (e.prototype.replaceViewModel = function (e, t) {
                    var n,
                        i = e.split("/"),
                        r = i.length > 1 ? this.viewModelFromPathSegments(i.slice(0, i.length - 1), 0) : this;
                    return null != (n = null == r ? void 0 : r.internalReplaceViewModel(i[i.length - 1], t)) && n;
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
                        var n = m([], this._children, !0);
                        this._children.length = 0;
                        var i = m([], this._parents, !0);
                        (this._parents.length = 0),
                            n.forEach(function (e) {
                                e.removeParent(t);
                            }),
                            i.forEach(function (e) {
                                e.removeFromViewModelCallbacks(t);
                            });
                    }
                }),
                e
            );
        })()),
        (z = (function (e) {
            function t(t, n) {
                return e.call(this, t, n) || this;
            }
            return (
                f(t, e),
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
            (K = (function () {
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
        ($ = (function (e) {
            function t(t, n) {
                return e.call(this, t, n) || this;
            }
            return (
                f(t, e),
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
        })(K)),
        (q = (function (e) {
            function t(t, n) {
                return e.call(this, t, n) || this;
            }
            return (
                f(t, e),
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
        })(K)),
        (Z = (function (e) {
            function t(t, n) {
                return e.call(this, t, n) || this;
            }
            return (
                f(t, e),
                (t.prototype.trigger = function () {
                    return this._viewModelInstanceValue.trigger();
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e();
                }),
                t
            );
        })(K)),
        (X = (function (e) {
            function t(t, n) {
                return e.call(this, t, n) || this;
            }
            return (
                f(t, e),
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
        })(K)),
        (Q = (function (e) {
            function t(t, n) {
                return e.call(this, t, n) || this;
            }
            return (
                f(t, e),
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
                        var n = new W(t, this._parentViewModel);
                        return (0, d.createFinalization)(n, t), n;
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
        })(K)),
        (J = (function (e) {
            function t(t, n) {
                return e.call(this, t, n) || this;
            }
            return (
                f(t, e),
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
                (t.prototype.rgba = function (e, t, n, i) {
                    this._viewModelInstanceValue.argb(i, e, t, n);
                }),
                (t.prototype.argb = function (e, t, n, i) {
                    this._viewModelInstanceValue.argb(e, t, n, i);
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
        })(K)),
        (ee = (function (e) {
            function t(t, n) {
                return e.call(this, t, n) || this;
            }
            return (
                f(t, e),
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
        })(K)),
        (et = (function (e) {
            function t(t, n) {
                return e.call(this, t, n) || this;
            }
            return (
                f(t, e),
                Object.defineProperty(t.prototype, "value", {
                    set: function (e) {
                        var t, n;
                        (n = e.isBindableArtboard ? e : e.file.internalBindableArtboardFromArtboard(e.nativeArtboard)),
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
        })(K)),
        (en = function (e) {
            return p(void 0, void 0, void 0, function () {
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
        }),
        (ei = function (e) {
            return "string" == typeof e ? [e] : e instanceof Array ? e : [];
        }),
        (er = { EventManager: M, TaskQueueManager: P }),
        (es = function (e) {
            return p(void 0, void 0, void 0, function () {
                var t, n;
                return E(this, function (i) {
                    switch (i.label) {
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
                                (t = i.sent()),
                                (n = new d.AudioWrapper(t)),
                                d.finalizationRegistry.register(n, t),
                                [2, n]
                            );
                    }
                });
            });
        }),
        (ea = function (e) {
            return p(void 0, void 0, void 0, function () {
                var t, n;
                return E(this, function (i) {
                    switch (i.label) {
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
                                (t = i.sent()),
                                (n = new d.ImageWrapper(t)),
                                d.finalizationRegistry.register(n, t),
                                [2, n]
                            );
                    }
                });
            });
        }),
        (eo = function (e) {
            return p(void 0, void 0, void 0, function () {
                var t, n;
                return E(this, function (i) {
                    switch (i.label) {
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
                                (t = i.sent()),
                                (n = new d.FontWrapper(t)),
                                d.finalizationRegistry.register(n, t),
                                [2, n]
                            );
                    }
                });
            });
        }),
        ed
    );
})();
