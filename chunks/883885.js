"u" > typeof navigator &&
    (function (e) {
        module.exports = e();
    })(function () {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            _useWebWorker = !1,
            initialDefaultFrame = -999999,
            setWebWorker = function (e) {
                _useWebWorker = !!e;
            },
            getWebWorker = function () {
                return _useWebWorker;
            },
            setLocationHref = function (e) {
                locationHref = e;
            },
            getLocationHref = function () {
                return locationHref;
            };
        function createTag(e) {
            return document.createElement(e);
        }
        function extendPrototype(e, t) {
            var n,
                r,
                i = e.length;
            for (n = 0; n < i; n += 1)
                for (var s in (r = e[n].prototype))
                    Object.prototype.hasOwnProperty.call(r, s) && (t.prototype[s] = r[s]);
        }
        function getDescriptor(e, t) {
            return Object.getOwnPropertyDescriptor(e, t);
        }
        function createProxyFunction(e) {
            function t() {}
            return (t.prototype = e), t;
        }
        var audioControllerFactory = (function () {
                function e(e) {
                    (this.audios = []), (this.audioFactory = e), (this._volume = 1), (this._isMuted = !1);
                }
                return (
                    (e.prototype = {
                        addAudio: function (e) {
                            this.audios.push(e);
                        },
                        pause: function () {
                            var e,
                                t = this.audios.length;
                            for (e = 0; e < t; e += 1) this.audios[e].pause();
                        },
                        resume: function () {
                            var e,
                                t = this.audios.length;
                            for (e = 0; e < t; e += 1) this.audios[e].resume();
                        },
                        setRate: function (e) {
                            var t,
                                n = this.audios.length;
                            for (t = 0; t < n; t += 1) this.audios[t].setRate(e);
                        },
                        createAudio: function (e) {
                            return this.audioFactory
                                ? this.audioFactory(e)
                                : window.Howl
                                  ? new window.Howl({ src: [e] })
                                  : {
                                        isPlaying: !1,
                                        play: function () {
                                            this.isPlaying = !0;
                                        },
                                        seek: function () {
                                            this.isPlaying = !1;
                                        },
                                        playing: function () {},
                                        rate: function () {},
                                        setVolume: function () {},
                                    };
                        },
                        setAudioFactory: function (e) {
                            this.audioFactory = e;
                        },
                        setVolume: function (e) {
                            (this._volume = e), this._updateVolume();
                        },
                        mute: function () {
                            (this._isMuted = !0), this._updateVolume();
                        },
                        unmute: function () {
                            (this._isMuted = !1), this._updateVolume();
                        },
                        getVolume: function () {
                            return this._volume;
                        },
                        _updateVolume: function () {
                            var e,
                                t = this.audios.length;
                            for (e = 0; e < t; e += 1) this.audios[e].volume(!this._isMuted * this._volume);
                        },
                    }),
                    function () {
                        return new e();
                    }
                );
            })(),
            createTypedArray = (function () {
                function e(e, t) {
                    var n,
                        r = 0,
                        i = [];
                    switch (e) {
                        case "int16":
                        case "uint8c":
                            n = 1;
                            break;
                        default:
                            n = 1.1;
                    }
                    for (r = 0; r < t; r += 1) i.push(n);
                    return i;
                }
                function t(t, n) {
                    return "float32" === t
                        ? new Float32Array(n)
                        : "int16" === t
                          ? new Int16Array(n)
                          : "uint8c" === t
                            ? new Uint8ClampedArray(n)
                            : e(t, n);
                }
                return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? t : e;
            })();
        function createSizedArray(e) {
            return Array.apply(null, { length: e });
        }
        function _typeof$6(e) {
            return (_typeof$6 =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                      })(e);
        }
        var subframeEnabled = !0,
            expressionsPlugin = null,
            expressionsInterfaces = null,
            idPrefix$1 = "",
            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            _shouldRoundValues = !1,
            bmPow = Math.pow,
            bmSqrt = Math.sqrt,
            bmFloor = Math.floor,
            bmMax = Math.max,
            bmMin = Math.min,
            BMMath = {};
        function ProjectInterface$1() {
            return {};
        }
        !(function () {
            var e,
                t = [
                    "abs",
                    "acos",
                    "acosh",
                    "asin",
                    "asinh",
                    "atan",
                    "atanh",
                    "atan2",
                    "ceil",
                    "cbrt",
                    "expm1",
                    "clz32",
                    "cos",
                    "cosh",
                    "exp",
                    "floor",
                    "fround",
                    "hypot",
                    "imul",
                    "log",
                    "log1p",
                    "log2",
                    "log10",
                    "max",
                    "min",
                    "pow",
                    "random",
                    "round",
                    "sign",
                    "sin",
                    "sinh",
                    "sqrt",
                    "tan",
                    "tanh",
                    "trunc",
                    "E",
                    "LN10",
                    "LN2",
                    "LOG10E",
                    "LOG2E",
                    "PI",
                    "SQRT1_2",
                    "SQRT2",
                ],
                n = t.length;
            for (e = 0; e < n; e += 1) BMMath[t[e]] = Math[t[e]];
        })(),
            (BMMath.random = Math.random),
            (BMMath.abs = function (e) {
                if ("object" === _typeof$6(e) && e.length) {
                    var t,
                        n = createSizedArray(e.length),
                        r = e.length;
                    for (t = 0; t < r; t += 1) n[t] = Math.abs(e[t]);
                    return n;
                }
                return Math.abs(e);
            });
        var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = 0.5519;
        function roundValues(e) {
            _shouldRoundValues = !!e;
        }
        function bmRnd(e) {
            return _shouldRoundValues ? Math.round(e) : e;
        }
        function styleDiv(e) {
            (e.style.position = "absolute"),
                (e.style.top = 0),
                (e.style.left = 0),
                (e.style.display = "block"),
                (e.style.transformOrigin = "0 0"),
                (e.style.webkitTransformOrigin = "0 0"),
                (e.style.backfaceVisibility = "visible"),
                (e.style.webkitBackfaceVisibility = "visible"),
                (e.style.transformStyle = "preserve-3d"),
                (e.style.webkitTransformStyle = "preserve-3d"),
                (e.style.mozTransformStyle = "preserve-3d");
        }
        function BMEnterFrameEvent(e, t, n, r) {
            (this.type = e), (this.currentTime = t), (this.totalTime = n), (this.direction = r < 0 ? -1 : 1);
        }
        function BMCompleteEvent(e, t) {
            (this.type = e), (this.direction = t < 0 ? -1 : 1);
        }
        function BMCompleteLoopEvent(e, t, n, r) {
            (this.type = e), (this.currentLoop = n), (this.totalLoops = t), (this.direction = r < 0 ? -1 : 1);
        }
        function BMSegmentStartEvent(e, t, n) {
            (this.type = e), (this.firstFrame = t), (this.totalFrames = n);
        }
        function BMDestroyEvent(e, t) {
            (this.type = e), (this.target = t);
        }
        function BMRenderFrameErrorEvent(e, t) {
            (this.type = "renderFrameError"), (this.nativeError = e), (this.currentTime = t);
        }
        function BMConfigErrorEvent(e) {
            (this.type = "configError"), (this.nativeError = e);
        }
        function BMAnimationConfigErrorEvent(e, t) {
            (this.type = e), (this.nativeError = t);
        }
        var createElementID = (function () {
            var e = 0;
            return function () {
                return (e += 1), idPrefix$1 + "__lottie_element_" + e;
            };
        })();
        function HSVtoRGB(e, t, n) {
            var r, i, s, a, o, l, u, c;
            switch (
                ((a = Math.floor(6 * e)),
                (o = 6 * e - a),
                (l = n * (1 - t)),
                (u = n * (1 - o * t)),
                (c = n * (1 - (1 - o) * t)),
                a % 6)
            ) {
                case 0:
                    (r = n), (i = c), (s = l);
                    break;
                case 1:
                    (r = u), (i = n), (s = l);
                    break;
                case 2:
                    (r = l), (i = n), (s = c);
                    break;
                case 3:
                    (r = l), (i = u), (s = n);
                    break;
                case 4:
                    (r = c), (i = l), (s = n);
                    break;
                case 5:
                    (r = n), (i = l), (s = u);
            }
            return [r, i, s];
        }
        function RGBtoHSV(e, t, n) {
            var r,
                i = Math.max(e, t, n),
                s = Math.min(e, t, n),
                a = i - s,
                o = 0 === i ? 0 : a / i,
                l = i / 255;
            switch (i) {
                case s:
                    r = 0;
                    break;
                case e:
                    r = (t - n + 6 * (t < n) * a) / (6 * a);
                    break;
                case t:
                    r = (n - e + 2 * a) / (6 * a);
                    break;
                case n:
                    r = (e - t + 4 * a) / (6 * a);
            }
            return [r, o, l];
        }
        function addSaturationToRGB(e, t) {
            var n = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
            return (n[1] += t), n[1] > 1 ? (n[1] = 1) : n[1] <= 0 && (n[1] = 0), HSVtoRGB(n[0], n[1], n[2]);
        }
        function addBrightnessToRGB(e, t) {
            var n = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
            return (n[2] += t), n[2] > 1 ? (n[2] = 1) : n[2] < 0 && (n[2] = 0), HSVtoRGB(n[0], n[1], n[2]);
        }
        function addHueToRGB(e, t) {
            var n = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
            return (n[0] += t / 360), n[0] > 1 ? (n[0] -= 1) : n[0] < 0 && (n[0] += 1), HSVtoRGB(n[0], n[1], n[2]);
        }
        var rgbToHex = (function () {
                var e,
                    t,
                    n = [];
                for (e = 0; e < 256; e += 1) (t = e.toString(16)), (n[e] = 1 === t.length ? "0" + t : t);
                return function (e, t, r) {
                    return e < 0 && (e = 0), t < 0 && (t = 0), r < 0 && (r = 0), "#" + n[e] + n[t] + n[r];
                };
            })(),
            setSubframeEnabled = function (e) {
                subframeEnabled = !!e;
            },
            getSubframeEnabled = function () {
                return subframeEnabled;
            },
            setExpressionsPlugin = function (e) {
                expressionsPlugin = e;
            },
            getExpressionsPlugin = function () {
                return expressionsPlugin;
            },
            setExpressionInterfaces = function (e) {
                expressionsInterfaces = e;
            },
            getExpressionInterfaces = function () {
                return expressionsInterfaces;
            },
            setDefaultCurveSegments = function (e) {
                defaultCurveSegments = e;
            },
            getDefaultCurveSegments = function () {
                return defaultCurveSegments;
            },
            setIdPrefix = function (e) {
                idPrefix$1 = e;
            },
            getIdPrefix = function () {
                return idPrefix$1;
            };
        function createNS(e) {
            return document.createElementNS(svgNS, e);
        }
        function _typeof$5(e) {
            return (_typeof$5 =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                      })(e);
        }
        var dataManager = (function () {
                var e,
                    t,
                    n = 1,
                    r = [],
                    i = {
                        onmessage: function () {},
                        postMessage: function (t) {
                            e({ data: t });
                        },
                    },
                    s = {
                        postMessage: function (e) {
                            i.onmessage({ data: e });
                        },
                    };
                function a(t) {
                    if (window.Worker && window.Blob && getWebWorker()) {
                        var n = new Blob(["var _workerSelf = self; self.onmessage = ", t.toString()], {
                            type: "text/javascript",
                        });
                        return new Worker(URL.createObjectURL(n));
                    }
                    return (e = t), i;
                }
                function o() {
                    t ||
                        ((t = a(function (e) {
                            function t() {
                                function e(t, n) {
                                    var a,
                                        o,
                                        l,
                                        u,
                                        c,
                                        d,
                                        f = t.length;
                                    for (o = 0; o < f; o += 1)
                                        if ("ks" in (a = t[o]) && !a.completed) {
                                            if (((a.completed = !0), a.hasMask)) {
                                                var p = a.masksProperties;
                                                for (l = 0, u = p.length; l < u; l += 1)
                                                    if (p[l].pt.k.i) s(p[l].pt.k);
                                                    else
                                                        for (c = 0, d = p[l].pt.k.length; c < d; c += 1)
                                                            p[l].pt.k[c].s && s(p[l].pt.k[c].s[0]),
                                                                p[l].pt.k[c].e && s(p[l].pt.k[c].e[0]);
                                            }
                                            0 === a.ty
                                                ? ((a.layers = r(a.refId, n)), e(a.layers, n))
                                                : 4 === a.ty
                                                  ? i(a.shapes)
                                                  : 5 === a.ty && _(a);
                                        }
                                }
                                function t(t, n) {
                                    if (t) {
                                        var i = 0,
                                            s = t.length;
                                        for (i = 0; i < s; i += 1)
                                            1 === t[i].t &&
                                                ((t[i].data.layers = r(t[i].data.refId, n)), e(t[i].data.layers, n));
                                    }
                                }
                                function n(e, t) {
                                    for (var n = 0, r = t.length; n < r; ) {
                                        if (t[n].id === e) return t[n];
                                        n += 1;
                                    }
                                    return null;
                                }
                                function r(e, t) {
                                    var r = n(e, t);
                                    return r
                                        ? r.layers.__used
                                            ? JSON.parse(JSON.stringify(r.layers))
                                            : ((r.layers.__used = !0), r.layers)
                                        : null;
                                }
                                function i(e) {
                                    var t, n, r;
                                    for (t = e.length - 1; t >= 0; t -= 1)
                                        if ("sh" === e[t].ty)
                                            if (e[t].ks.k.i) s(e[t].ks.k);
                                            else
                                                for (n = 0, r = e[t].ks.k.length; n < r; n += 1)
                                                    e[t].ks.k[n].s && s(e[t].ks.k[n].s[0]),
                                                        e[t].ks.k[n].e && s(e[t].ks.k[n].e[0]);
                                        else "gr" === e[t].ty && i(e[t].it);
                                }
                                function s(e) {
                                    var t,
                                        n = e.i.length;
                                    for (t = 0; t < n; t += 1)
                                        (e.i[t][0] += e.v[t][0]),
                                            (e.i[t][1] += e.v[t][1]),
                                            (e.o[t][0] += e.v[t][0]),
                                            (e.o[t][1] += e.v[t][1]);
                                }
                                function a(e, t) {
                                    var n = t ? t.split(".") : [100, 100, 100];
                                    return (
                                        e[0] > n[0] ||
                                        (!(n[0] > e[0]) &&
                                            (e[1] > n[1] ||
                                                (!(n[1] > e[1]) && (e[2] > n[2] || (!(n[2] > e[2]) && null)))))
                                    );
                                }
                                var o = (function () {
                                        var e = [4, 4, 14];
                                        function t(e) {
                                            var t = e.t.d;
                                            e.t.d = { k: [{ s: t, t: 0 }] };
                                        }
                                        function n(e) {
                                            var n,
                                                r = e.length;
                                            for (n = 0; n < r; n += 1) 5 === e[n].ty && t(e[n]);
                                        }
                                        return function (t) {
                                            if (a(e, t.v) && (n(t.layers), t.assets)) {
                                                var r,
                                                    i = t.assets.length;
                                                for (r = 0; r < i; r += 1) t.assets[r].layers && n(t.assets[r].layers);
                                            }
                                        };
                                    })(),
                                    l = (function () {
                                        var e = [4, 7, 99];
                                        return function (t) {
                                            if (t.chars && !a(e, t.v)) {
                                                var n,
                                                    r = t.chars.length;
                                                for (n = 0; n < r; n += 1) {
                                                    var s = t.chars[n];
                                                    s.data &&
                                                        s.data.shapes &&
                                                        (i(s.data.shapes),
                                                        (s.data.ip = 0),
                                                        (s.data.op = 99999),
                                                        (s.data.st = 0),
                                                        (s.data.sr = 1),
                                                        (s.data.ks = {
                                                            p: { k: [0, 0], a: 0 },
                                                            s: { k: [100, 100], a: 0 },
                                                            a: { k: [0, 0], a: 0 },
                                                            r: { k: 0, a: 0 },
                                                            o: { k: 100, a: 0 },
                                                        }),
                                                        t.chars[n].t ||
                                                            (s.data.shapes.push({ ty: "no" }),
                                                            s.data.shapes[0].it.push({
                                                                p: { k: [0, 0], a: 0 },
                                                                s: { k: [100, 100], a: 0 },
                                                                a: { k: [0, 0], a: 0 },
                                                                r: { k: 0, a: 0 },
                                                                o: { k: 100, a: 0 },
                                                                sk: { k: 0, a: 0 },
                                                                sa: { k: 0, a: 0 },
                                                                ty: "tr",
                                                            })));
                                                }
                                            }
                                        };
                                    })(),
                                    u = (function () {
                                        var e = [5, 7, 15];
                                        function t(e) {
                                            var t = e.t.p;
                                            "number" == typeof t.a && (t.a = { a: 0, k: t.a }),
                                                "number" == typeof t.p && (t.p = { a: 0, k: t.p }),
                                                "number" == typeof t.r && (t.r = { a: 0, k: t.r });
                                        }
                                        function n(e) {
                                            var n,
                                                r = e.length;
                                            for (n = 0; n < r; n += 1) 5 === e[n].ty && t(e[n]);
                                        }
                                        return function (t) {
                                            if (a(e, t.v) && (n(t.layers), t.assets)) {
                                                var r,
                                                    i = t.assets.length;
                                                for (r = 0; r < i; r += 1) t.assets[r].layers && n(t.assets[r].layers);
                                            }
                                        };
                                    })(),
                                    c = (function () {
                                        var e = [4, 1, 9];
                                        function t(e) {
                                            var n,
                                                r,
                                                i,
                                                s = e.length;
                                            for (n = 0; n < s; n += 1)
                                                if ("gr" === e[n].ty) t(e[n].it);
                                                else if ("fl" === e[n].ty || "st" === e[n].ty)
                                                    if (e[n].c.k && e[n].c.k[0].i)
                                                        for (r = 0, i = e[n].c.k.length; r < i; r += 1)
                                                            e[n].c.k[r].s &&
                                                                ((e[n].c.k[r].s[0] /= 255),
                                                                (e[n].c.k[r].s[1] /= 255),
                                                                (e[n].c.k[r].s[2] /= 255),
                                                                (e[n].c.k[r].s[3] /= 255)),
                                                                e[n].c.k[r].e &&
                                                                    ((e[n].c.k[r].e[0] /= 255),
                                                                    (e[n].c.k[r].e[1] /= 255),
                                                                    (e[n].c.k[r].e[2] /= 255),
                                                                    (e[n].c.k[r].e[3] /= 255));
                                                    else
                                                        (e[n].c.k[0] /= 255),
                                                            (e[n].c.k[1] /= 255),
                                                            (e[n].c.k[2] /= 255),
                                                            (e[n].c.k[3] /= 255);
                                        }
                                        function n(e) {
                                            var n,
                                                r = e.length;
                                            for (n = 0; n < r; n += 1) 4 === e[n].ty && t(e[n].shapes);
                                        }
                                        return function (t) {
                                            if (a(e, t.v) && (n(t.layers), t.assets)) {
                                                var r,
                                                    i = t.assets.length;
                                                for (r = 0; r < i; r += 1) t.assets[r].layers && n(t.assets[r].layers);
                                            }
                                        };
                                    })(),
                                    d = (function () {
                                        var e = [4, 4, 18];
                                        function t(e) {
                                            var n, r, i;
                                            for (n = e.length - 1; n >= 0; n -= 1)
                                                if ("sh" === e[n].ty)
                                                    if (e[n].ks.k.i) e[n].ks.k.c = e[n].closed;
                                                    else
                                                        for (r = 0, i = e[n].ks.k.length; r < i; r += 1)
                                                            e[n].ks.k[r].s && (e[n].ks.k[r].s[0].c = e[n].closed),
                                                                e[n].ks.k[r].e && (e[n].ks.k[r].e[0].c = e[n].closed);
                                                else "gr" === e[n].ty && t(e[n].it);
                                        }
                                        function n(e) {
                                            var n,
                                                r,
                                                i,
                                                s,
                                                a,
                                                o,
                                                l = e.length;
                                            for (r = 0; r < l; r += 1) {
                                                if ((n = e[r]).hasMask) {
                                                    var u = n.masksProperties;
                                                    for (i = 0, s = u.length; i < s; i += 1)
                                                        if (u[i].pt.k.i) u[i].pt.k.c = u[i].cl;
                                                        else
                                                            for (a = 0, o = u[i].pt.k.length; a < o; a += 1)
                                                                u[i].pt.k[a].s && (u[i].pt.k[a].s[0].c = u[i].cl),
                                                                    u[i].pt.k[a].e && (u[i].pt.k[a].e[0].c = u[i].cl);
                                                }
                                                4 === n.ty && t(n.shapes);
                                            }
                                        }
                                        return function (t) {
                                            if (a(e, t.v) && (n(t.layers), t.assets)) {
                                                var r,
                                                    i = t.assets.length;
                                                for (r = 0; r < i; r += 1) t.assets[r].layers && n(t.assets[r].layers);
                                            }
                                        };
                                    })();
                                function _(e) {
                                    0 === e.t.a.length && e.t.p;
                                }
                                var f = {};
                                return (
                                    (f.completeData = function (n) {
                                        n.__complete ||
                                            (c(n),
                                            o(n),
                                            l(n),
                                            u(n),
                                            d(n),
                                            e(n.layers, n.assets),
                                            t(n.chars, n.assets),
                                            (n.__complete = !0));
                                    }),
                                    (f.checkColors = c),
                                    (f.checkChars = l),
                                    (f.checkPathProperties = u),
                                    (f.checkShapes = d),
                                    (f.completeLayers = e),
                                    f
                                );
                            }
                            if (
                                (s.dataManager || (s.dataManager = t()),
                                s.assetLoader ||
                                    (s.assetLoader = (function () {
                                        function e(e) {
                                            var t = e.getResponseHeader("content-type");
                                            return (t && "json" === e.responseType && -1 !== t.indexOf("json")) ||
                                                (e.response && "object" === _typeof$5(e.response))
                                                ? e.response
                                                : e.response && "string" == typeof e.response
                                                  ? JSON.parse(e.response)
                                                  : e.responseText
                                                    ? JSON.parse(e.responseText)
                                                    : null;
                                        }
                                        return {
                                            load: function (t, n, r, i) {
                                                var s,
                                                    a = new XMLHttpRequest();
                                                try {
                                                    a.responseType = "json";
                                                } catch (e) {}
                                                a.onreadystatechange = function () {
                                                    if (4 === a.readyState)
                                                        if (200 === a.status) r((s = e(a)));
                                                        else
                                                            try {
                                                                (s = e(a)), r(s);
                                                            } catch (e) {
                                                                i && i(e);
                                                            }
                                                };
                                                try {
                                                    a.open("GET", t, !0);
                                                } catch (e) {
                                                    a.open("GET", n + "/" + t, !0);
                                                }
                                                a.send();
                                            },
                                        };
                                    })()),
                                "loadAnimation" === e.data.type)
                            )
                                s.assetLoader.load(
                                    e.data.path,
                                    e.data.fullPath,
                                    function (t) {
                                        s.dataManager.completeData(t),
                                            s.postMessage({ id: e.data.id, payload: t, status: "success" });
                                    },
                                    function () {
                                        s.postMessage({ id: e.data.id, status: "error" });
                                    },
                                );
                            else if ("complete" === e.data.type) {
                                var n = e.data.animation;
                                s.dataManager.completeData(n),
                                    s.postMessage({ id: e.data.id, payload: n, status: "success" });
                            } else
                                "loadData" === e.data.type &&
                                    s.assetLoader.load(
                                        e.data.path,
                                        e.data.fullPath,
                                        function (t) {
                                            s.postMessage({ id: e.data.id, payload: t, status: "success" });
                                        },
                                        function () {
                                            s.postMessage({ id: e.data.id, status: "error" });
                                        },
                                    );
                        })).onmessage = function (e) {
                            var t = e.data,
                                n = t.id,
                                i = r[n];
                            (r[n] = null), "success" === t.status ? i.onComplete(t.payload) : i.onError && i.onError();
                        });
                }
                function l(e, t) {
                    var i = "processId_" + (n += 1);
                    return (r[i] = { onComplete: e, onError: t }), i;
                }
                return {
                    loadAnimation: function (e, n, r) {
                        o();
                        var i = l(n, r);
                        t.postMessage({
                            type: "loadAnimation",
                            path: e,
                            fullPath: window.location.origin + window.location.pathname,
                            id: i,
                        });
                    },
                    loadData: function (e, n, r) {
                        o();
                        var i = l(n, r);
                        t.postMessage({
                            type: "loadData",
                            path: e,
                            fullPath: window.location.origin + window.location.pathname,
                            id: i,
                        });
                    },
                    completeAnimation: function (e, n, r) {
                        o();
                        var i = l(n, r);
                        t.postMessage({ type: "complete", animation: e, id: i });
                    },
                };
            })(),
            ImagePreloader = (function () {
                var e = (function () {
                    var e = createTag("canvas");
                    (e.width = 1), (e.height = 1);
                    var t = e.getContext("2d");
                    return (t.fillStyle = "rgba(0,0,0,0)"), t.fillRect(0, 0, 1, 1), e;
                })();
                function t() {
                    (this.loadedAssets += 1),
                        this.loadedAssets === this.totalImages &&
                            this.loadedFootagesCount === this.totalFootages &&
                            this.imagesLoadedCb &&
                            this.imagesLoadedCb(null);
                }
                function n() {
                    (this.loadedFootagesCount += 1),
                        this.loadedAssets === this.totalImages &&
                            this.loadedFootagesCount === this.totalFootages &&
                            this.imagesLoadedCb &&
                            this.imagesLoadedCb(null);
                }
                function r(e, t, n) {
                    var r = "";
                    if (e.e) r = e.p;
                    else if (t) {
                        var i = e.p;
                        -1 !== i.indexOf("images/") && (i = i.split("/")[1]), (r = t + i);
                    } else r = n + (e.u ? e.u : "") + e.p;
                    return r;
                }
                function i(e) {
                    var t = 0,
                        n = setInterval(
                            function () {
                                (e.getBBox().width || t > 500) && (this._imageLoaded(), clearInterval(n)), (t += 1);
                            }.bind(this),
                            50,
                        );
                }
                function s(e) {
                    var t = { assetData: e },
                        n = r(e, this.assetsPath, this.path);
                    return (
                        dataManager.loadData(
                            n,
                            function (e) {
                                (t.img = e), this._footageLoaded();
                            }.bind(this),
                            function () {
                                (t.img = {}), this._footageLoaded();
                            }.bind(this),
                        ),
                        t
                    );
                }
                function a() {
                    (this._imageLoaded = t.bind(this)),
                        (this._footageLoaded = n.bind(this)),
                        (this.testImageLoaded = i.bind(this)),
                        (this.createFootageData = s.bind(this)),
                        (this.assetsPath = ""),
                        (this.path = ""),
                        (this.totalImages = 0),
                        (this.totalFootages = 0),
                        (this.loadedAssets = 0),
                        (this.loadedFootagesCount = 0),
                        (this.imagesLoadedCb = null),
                        (this.images = []);
                }
                return (
                    (a.prototype = {
                        loadAssets: function (e, t) {
                            this.imagesLoadedCb = t;
                            var n,
                                r = e.length;
                            for (n = 0; n < r; n += 1)
                                e[n].layers ||
                                    (e[n].t && "seq" !== e[n].t
                                        ? 3 === e[n].t &&
                                          ((this.totalFootages += 1), this.images.push(this.createFootageData(e[n])))
                                        : ((this.totalImages += 1), this.images.push(this._createImageData(e[n]))));
                        },
                        setAssetsPath: function (e) {
                            this.assetsPath = e || "";
                        },
                        setPath: function (e) {
                            this.path = e || "";
                        },
                        loadedImages: function () {
                            return this.totalImages === this.loadedAssets;
                        },
                        loadedFootages: function () {
                            return this.totalFootages === this.loadedFootagesCount;
                        },
                        destroy: function () {
                            (this.imagesLoadedCb = null), (this.images.length = 0);
                        },
                        getAsset: function (e) {
                            for (var t = 0, n = this.images.length; t < n; ) {
                                if (this.images[t].assetData === e) return this.images[t].img;
                                t += 1;
                            }
                            return null;
                        },
                        createImgData: function (t) {
                            var n = r(t, this.assetsPath, this.path),
                                i = createTag("img");
                            (i.crossOrigin = "anonymous"),
                                i.addEventListener("load", this._imageLoaded, !1),
                                i.addEventListener(
                                    "error",
                                    function () {
                                        (s.img = e), this._imageLoaded();
                                    }.bind(this),
                                    !1,
                                ),
                                (i.src = n);
                            var s = { img: i, assetData: t };
                            return s;
                        },
                        createImageData: function (t) {
                            var n = r(t, this.assetsPath, this.path),
                                i = createNS("image");
                            isSafari ? this.testImageLoaded(i) : i.addEventListener("load", this._imageLoaded, !1),
                                i.addEventListener(
                                    "error",
                                    function () {
                                        (s.img = e), this._imageLoaded();
                                    }.bind(this),
                                    !1,
                                ),
                                i.setAttributeNS("http://www.w3.org/1999/xlink", "href", n),
                                this._elementHelper.append
                                    ? this._elementHelper.append(i)
                                    : this._elementHelper.appendChild(i);
                            var s = { img: i, assetData: t };
                            return s;
                        },
                        imageLoaded: t,
                        footageLoaded: n,
                        setCacheType: function (e, t) {
                            "svg" === e
                                ? ((this._elementHelper = t), (this._createImageData = this.createImageData.bind(this)))
                                : (this._createImageData = this.createImgData.bind(this));
                        },
                    }),
                    a
                );
            })();
        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function (e, t) {
                if (this._cbs[e]) for (var n = this._cbs[e], r = 0; r < n.length; r += 1) n[r](t);
            },
            addEventListener: function (e, t) {
                return (
                    this._cbs[e] || (this._cbs[e] = []),
                    this._cbs[e].push(t),
                    function () {
                        this.removeEventListener(e, t);
                    }.bind(this)
                );
            },
            removeEventListener: function (e, t) {
                if (t) {
                    if (this._cbs[e]) {
                        for (var n = 0, r = this._cbs[e].length; n < r; )
                            this._cbs[e][n] === t && (this._cbs[e].splice(n, 1), (n -= 1), (r -= 1)), (n += 1);
                        this._cbs[e].length || (this._cbs[e] = null);
                    }
                } else this._cbs[e] = null;
            },
        };
        var markerParser = (function () {
                function e(e) {
                    for (var t, n = e.split("\r\n"), r = {}, i = 0, s = 0; s < n.length; s += 1)
                        2 === (t = n[s].split(":")).length && ((r[t[0]] = t[1].trim()), (i += 1));
                    if (0 === i) throw Error();
                    return r;
                }
                return function (t) {
                    for (var n = [], r = 0; r < t.length; r += 1) {
                        var i = t[r],
                            s = { time: i.tm, duration: i.dr };
                        try {
                            s.payload = JSON.parse(t[r].cm);
                        } catch (n) {
                            try {
                                s.payload = e(t[r].cm);
                            } catch (e) {
                                s.payload = { name: t[r].cm };
                            }
                        }
                        n.push(s);
                    }
                    return n;
                };
            })(),
            ProjectInterface = (function () {
                function e(e) {
                    this.compositions.push(e);
                }
                return function () {
                    function t(e) {
                        for (var t = 0, n = this.compositions.length; t < n; ) {
                            if (this.compositions[t].data && this.compositions[t].data.nm === e)
                                return (
                                    this.compositions[t].prepareFrame &&
                                        this.compositions[t].data.xt &&
                                        this.compositions[t].prepareFrame(this.currentFrame),
                                    this.compositions[t].compInterface
                                );
                            t += 1;
                        }
                        return null;
                    }
                    return (t.compositions = []), (t.currentFrame = 0), (t.registerComposition = e), t;
                };
            })(),
            renderers = {},
            registerRenderer = function (e, t) {
                renderers[e] = t;
            };
        function getRenderer(e) {
            return renderers[e];
        }
        function getRegisteredRenderer() {
            if (renderers.canvas) return "canvas";
            for (var e in renderers) if (renderers[e]) return e;
            return "";
        }
        function _typeof$4(e) {
            return (_typeof$4 =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                      })(e);
        }
        var AnimationItem = function () {
            (this._cbs = []),
                (this.name = ""),
                (this.path = ""),
                (this.isLoaded = !1),
                (this.currentFrame = 0),
                (this.currentRawFrame = 0),
                (this.firstFrame = 0),
                (this.totalFrames = 0),
                (this.frameRate = 0),
                (this.frameMult = 0),
                (this.playSpeed = 1),
                (this.playDirection = 1),
                (this.playCount = 0),
                (this.animationData = {}),
                (this.assets = []),
                (this.isPaused = !0),
                (this.autoplay = !1),
                (this.loop = !0),
                (this.renderer = null),
                (this.animationID = createElementID()),
                (this.assetsPath = ""),
                (this.timeCompleted = 0),
                (this.segmentPos = 0),
                (this.isSubframeEnabled = getSubframeEnabled()),
                (this.segments = []),
                (this._idle = !0),
                (this._completedLoop = !1),
                (this.projectInterface = ProjectInterface()),
                (this.imagePreloader = new ImagePreloader()),
                (this.audioController = audioControllerFactory()),
                (this.markers = []),
                (this.configAnimation = this.configAnimation.bind(this)),
                (this.onSetupError = this.onSetupError.bind(this)),
                (this.onSegmentComplete = this.onSegmentComplete.bind(this)),
                (this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0)),
                (this.expressionsPlugin = getExpressionsPlugin());
        };
        extendPrototype([BaseEvent], AnimationItem),
            (AnimationItem.prototype.setParams = function (e) {
                (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
                var t = "svg";
                e.animType ? (t = e.animType) : e.renderer && (t = e.renderer);
                var n = getRenderer(t);
                (this.renderer = new n(this, e.rendererSettings)),
                    this.imagePreloader.setCacheType(t, this.renderer.globalData.defs),
                    this.renderer.setProjectInterface(this.projectInterface),
                    (this.animType = t),
                    "" === e.loop || null === e.loop || void 0 === e.loop || !0 === e.loop
                        ? (this.loop = !0)
                        : !1 === e.loop
                          ? (this.loop = !1)
                          : (this.loop = parseInt(e.loop, 10)),
                    (this.autoplay = !("autoplay" in e) || e.autoplay),
                    (this.name = e.name ? e.name : ""),
                    (this.autoloadSegments =
                        !Object.prototype.hasOwnProperty.call(e, "autoloadSegments") || e.autoloadSegments),
                    (this.assetsPath = e.assetsPath),
                    (this.initialSegment = e.initialSegment),
                    e.audioFactory && this.audioController.setAudioFactory(e.audioFactory),
                    e.animationData
                        ? this.setupAnimation(e.animationData)
                        : e.path &&
                          (-1 !== e.path.lastIndexOf("\\")
                              ? (this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1))
                              : (this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1)),
                          (this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1)),
                          (this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json"))),
                          dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError));
            }),
            (AnimationItem.prototype.onSetupError = function () {
                this.trigger("data_failed");
            }),
            (AnimationItem.prototype.setupAnimation = function (e) {
                dataManager.completeAnimation(e, this.configAnimation);
            }),
            (AnimationItem.prototype.setData = function (e, t) {
                t && "object" !== _typeof$4(t) && (t = JSON.parse(t));
                var n = { wrapper: e, animationData: t },
                    r = e.attributes;
                (n.path = r.getNamedItem("data-animation-path")
                    ? r.getNamedItem("data-animation-path").value
                    : r.getNamedItem("data-bm-path")
                      ? r.getNamedItem("data-bm-path").value
                      : r.getNamedItem("bm-path")
                        ? r.getNamedItem("bm-path").value
                        : ""),
                    (n.animType = r.getNamedItem("data-anim-type")
                        ? r.getNamedItem("data-anim-type").value
                        : r.getNamedItem("data-bm-type")
                          ? r.getNamedItem("data-bm-type").value
                          : r.getNamedItem("bm-type")
                            ? r.getNamedItem("bm-type").value
                            : r.getNamedItem("data-bm-renderer")
                              ? r.getNamedItem("data-bm-renderer").value
                              : r.getNamedItem("bm-renderer")
                                ? r.getNamedItem("bm-renderer").value
                                : getRegisteredRenderer() || "canvas");
                var i = r.getNamedItem("data-anim-loop")
                    ? r.getNamedItem("data-anim-loop").value
                    : r.getNamedItem("data-bm-loop")
                      ? r.getNamedItem("data-bm-loop").value
                      : r.getNamedItem("bm-loop")
                        ? r.getNamedItem("bm-loop").value
                        : "";
                "false" === i ? (n.loop = !1) : "true" === i ? (n.loop = !0) : "" !== i && (n.loop = parseInt(i, 10)),
                    (n.autoplay =
                        "false" !==
                        (r.getNamedItem("data-anim-autoplay")
                            ? r.getNamedItem("data-anim-autoplay").value
                            : r.getNamedItem("data-bm-autoplay")
                              ? r.getNamedItem("data-bm-autoplay").value
                              : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value)),
                    (n.name = r.getNamedItem("data-name")
                        ? r.getNamedItem("data-name").value
                        : r.getNamedItem("data-bm-name")
                          ? r.getNamedItem("data-bm-name").value
                          : r.getNamedItem("bm-name")
                            ? r.getNamedItem("bm-name").value
                            : ""),
                    "false" ===
                        (r.getNamedItem("data-anim-prerender")
                            ? r.getNamedItem("data-anim-prerender").value
                            : r.getNamedItem("data-bm-prerender")
                              ? r.getNamedItem("data-bm-prerender").value
                              : r.getNamedItem("bm-prerender")
                                ? r.getNamedItem("bm-prerender").value
                                : "") && (n.prerender = !1),
                    n.path ? this.setParams(n) : this.trigger("destroy");
            }),
            (AnimationItem.prototype.includeLayers = function (e) {
                e.op > this.animationData.op &&
                    ((this.animationData.op = e.op), (this.totalFrames = Math.floor(e.op - this.animationData.ip)));
                var t,
                    n,
                    r = this.animationData.layers,
                    i = r.length,
                    s = e.layers,
                    a = s.length;
                for (n = 0; n < a; n += 1)
                    for (t = 0; t < i; ) {
                        if (r[t].id === s[n].id) {
                            r[t] = s[n];
                            break;
                        }
                        t += 1;
                    }
                if (
                    ((e.chars || e.fonts) &&
                        (this.renderer.globalData.fontManager.addChars(e.chars),
                        this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)),
                    e.assets)
                )
                    for (t = 0, i = e.assets.length; t < i; t += 1) this.animationData.assets.push(e.assets[t]);
                (this.animationData.__complete = !1),
                    dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
            }),
            (AnimationItem.prototype.onSegmentComplete = function (e) {
                this.animationData = e;
                var t = getExpressionsPlugin();
                t && t.initExpressions(this), this.loadNextSegment();
            }),
            (AnimationItem.prototype.loadNextSegment = function () {
                var e = this.animationData.segments;
                if (!e || 0 === e.length || !this.autoloadSegments) {
                    this.trigger("data_ready"), (this.timeCompleted = this.totalFrames);
                    return;
                }
                var t = e.shift();
                this.timeCompleted = t.time * this.frameRate;
                var n = this.path + this.fileName + "_" + this.segmentPos + ".json";
                (this.segmentPos += 1),
                    dataManager.loadData(
                        n,
                        this.includeLayers.bind(this),
                        function () {
                            this.trigger("data_failed");
                        }.bind(this),
                    );
            }),
            (AnimationItem.prototype.loadSegments = function () {
                this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
            }),
            (AnimationItem.prototype.imagesLoaded = function () {
                this.trigger("loaded_images"), this.checkLoaded();
            }),
            (AnimationItem.prototype.preloadImages = function () {
                this.imagePreloader.setAssetsPath(this.assetsPath),
                    this.imagePreloader.setPath(this.path),
                    this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
            }),
            (AnimationItem.prototype.configAnimation = function (e) {
                if (this.renderer)
                    try {
                        (this.animationData = e),
                            this.initialSegment
                                ? ((this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0])),
                                  (this.firstFrame = Math.round(this.initialSegment[0])))
                                : ((this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip)),
                                  (this.firstFrame = Math.round(this.animationData.ip))),
                            this.renderer.configAnimation(e),
                            e.assets || (e.assets = []),
                            (this.assets = this.animationData.assets),
                            (this.frameRate = this.animationData.fr),
                            (this.frameMult = this.animationData.fr / 1e3),
                            this.renderer.searchExtraCompositions(e.assets),
                            (this.markers = markerParser(e.markers || [])),
                            this.trigger("config_ready"),
                            this.preloadImages(),
                            this.loadSegments(),
                            this.updaFrameModifier(),
                            this.waitForFontsLoaded(),
                            this.isPaused && this.audioController.pause();
                    } catch (e) {
                        this.triggerConfigError(e);
                    }
            }),
            (AnimationItem.prototype.waitForFontsLoaded = function () {
                this.renderer &&
                    (this.renderer.globalData.fontManager.isLoaded
                        ? this.checkLoaded()
                        : setTimeout(this.waitForFontsLoaded.bind(this), 20));
            }),
            (AnimationItem.prototype.checkLoaded = function () {
                if (
                    !this.isLoaded &&
                    this.renderer.globalData.fontManager.isLoaded &&
                    (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) &&
                    this.imagePreloader.loadedFootages()
                ) {
                    this.isLoaded = !0;
                    var e = getExpressionsPlugin();
                    e && e.initExpressions(this),
                        this.renderer.initItems(),
                        setTimeout(
                            function () {
                                this.trigger("DOMLoaded");
                            }.bind(this),
                            0,
                        ),
                        this.gotoFrame(),
                        this.autoplay && this.play();
                }
            }),
            (AnimationItem.prototype.resize = function (e, t) {
                var n = "number" == typeof e ? e : void 0,
                    r = "number" == typeof t ? t : void 0;
                this.renderer.updateContainerSize(n, r);
            }),
            (AnimationItem.prototype.setSubframe = function (e) {
                this.isSubframeEnabled = !!e;
            }),
            (AnimationItem.prototype.gotoFrame = function () {
                (this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame),
                    this.timeCompleted !== this.totalFrames &&
                        this.currentFrame > this.timeCompleted &&
                        (this.currentFrame = this.timeCompleted),
                    this.trigger("enterFrame"),
                    this.renderFrame(),
                    this.trigger("drawnFrame");
            }),
            (AnimationItem.prototype.renderFrame = function () {
                if (!1 !== this.isLoaded && this.renderer)
                    try {
                        this.expressionsPlugin && this.expressionsPlugin.resetFrame(),
                            this.renderer.renderFrame(this.currentFrame + this.firstFrame);
                    } catch (e) {
                        this.triggerRenderFrameError(e);
                    }
            }),
            (AnimationItem.prototype.play = function (e) {
                (!e || this.name === e) &&
                    !0 === this.isPaused &&
                    ((this.isPaused = !1),
                    this.trigger("_play"),
                    this.audioController.resume(),
                    this._idle && ((this._idle = !1), this.trigger("_active")));
            }),
            (AnimationItem.prototype.pause = function (e) {
                (e && this.name !== e) ||
                    (!1 === this.isPaused &&
                        ((this.isPaused = !0),
                        this.trigger("_pause"),
                        (this._idle = !0),
                        this.trigger("_idle"),
                        this.audioController.pause()));
            }),
            (AnimationItem.prototype.togglePause = function (e) {
                (e && this.name !== e) || (!0 === this.isPaused ? this.play() : this.pause());
            }),
            (AnimationItem.prototype.stop = function (e) {
                (e && this.name !== e) ||
                    (this.pause(), (this.playCount = 0), (this._completedLoop = !1), this.setCurrentRawFrameValue(0));
            }),
            (AnimationItem.prototype.getMarkerData = function (e) {
                for (var t, n = 0; n < this.markers.length; n += 1)
                    if ((t = this.markers[n]).payload && t.payload.name === e) return t;
                return null;
            }),
            (AnimationItem.prototype.goToAndStop = function (e, t, n) {
                if (!n || this.name === n) {
                    var r = Number(e);
                    if (isNaN(r)) {
                        var i = this.getMarkerData(e);
                        i && this.goToAndStop(i.time, !0);
                    } else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
                    this.pause();
                }
            }),
            (AnimationItem.prototype.goToAndPlay = function (e, t, n) {
                if (!n || this.name === n) {
                    var r = Number(e);
                    if (isNaN(r)) {
                        var i = this.getMarkerData(e);
                        i &&
                            (i.duration
                                ? this.playSegments([i.time, i.time + i.duration], !0)
                                : this.goToAndStop(i.time, !0));
                    } else this.goToAndStop(r, t, n);
                    this.play();
                }
            }),
            (AnimationItem.prototype.advanceTime = function (e) {
                if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                    var t = this.currentRawFrame + e * this.frameModifier,
                        n = !1;
                    t >= this.totalFrames - 1 && this.frameModifier > 0
                        ? this.loop && this.playCount !== this.loop
                            ? t >= this.totalFrames
                                ? ((this.playCount += 1),
                                  this.checkSegments(t % this.totalFrames) ||
                                      (this.setCurrentRawFrameValue(t % this.totalFrames),
                                      (this._completedLoop = !0),
                                      this.trigger("loopComplete")))
                                : this.setCurrentRawFrameValue(t)
                            : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) ||
                              ((n = !0), (t = this.totalFrames - 1))
                        : t < 0
                          ? this.checkSegments(t % this.totalFrames) ||
                            (this.loop && !(this.playCount-- <= 0 && !0 !== this.loop)
                                ? (this.setCurrentRawFrameValue(this.totalFrames + (t % this.totalFrames)),
                                  this._completedLoop ? this.trigger("loopComplete") : (this._completedLoop = !0))
                                : ((n = !0), (t = 0)))
                          : this.setCurrentRawFrameValue(t),
                        n && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"));
                }
            }),
            (AnimationItem.prototype.adjustSegment = function (e, t) {
                (this.playCount = 0),
                    e[1] < e[0]
                        ? (this.frameModifier > 0 &&
                              (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)),
                          (this.totalFrames = e[0] - e[1]),
                          (this.timeCompleted = this.totalFrames),
                          (this.firstFrame = e[1]),
                          this.setCurrentRawFrameValue(this.totalFrames - 0.001 - t))
                        : e[1] > e[0] &&
                          (this.frameModifier < 0 &&
                              (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)),
                          (this.totalFrames = e[1] - e[0]),
                          (this.timeCompleted = this.totalFrames),
                          (this.firstFrame = e[0]),
                          this.setCurrentRawFrameValue(0.001 + t)),
                    this.trigger("segmentStart");
            }),
            (AnimationItem.prototype.setSegment = function (e, t) {
                var n = -1;
                this.isPaused &&
                    (this.currentRawFrame + this.firstFrame < e
                        ? (n = e)
                        : this.currentRawFrame + this.firstFrame > t && (n = t - e)),
                    (this.firstFrame = e),
                    (this.totalFrames = t - e),
                    (this.timeCompleted = this.totalFrames),
                    -1 !== n && this.goToAndStop(n, !0);
            }),
            (AnimationItem.prototype.playSegments = function (e, t) {
                if ((t && (this.segments.length = 0), "object" === _typeof$4(e[0]))) {
                    var n,
                        r = e.length;
                    for (n = 0; n < r; n += 1) this.segments.push(e[n]);
                } else this.segments.push(e);
                this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
            }),
            (AnimationItem.prototype.resetSegments = function (e) {
                (this.segments.length = 0),
                    this.segments.push([this.animationData.ip, this.animationData.op]),
                    e && this.checkSegments(0);
            }),
            (AnimationItem.prototype.checkSegments = function (e) {
                return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0);
            }),
            (AnimationItem.prototype.destroy = function (e) {
                (!e || this.name === e) &&
                    this.renderer &&
                    (this.renderer.destroy(),
                    this.imagePreloader.destroy(),
                    this.trigger("destroy"),
                    (this._cbs = null),
                    (this.onEnterFrame = null),
                    (this.onLoopComplete = null),
                    (this.onComplete = null),
                    (this.onSegmentStart = null),
                    (this.onDestroy = null),
                    (this.renderer = null),
                    (this.expressionsPlugin = null),
                    (this.imagePreloader = null),
                    (this.projectInterface = null));
            }),
            (AnimationItem.prototype.setCurrentRawFrameValue = function (e) {
                (this.currentRawFrame = e), this.gotoFrame();
            }),
            (AnimationItem.prototype.setSpeed = function (e) {
                (this.playSpeed = e), this.updaFrameModifier();
            }),
            (AnimationItem.prototype.setDirection = function (e) {
                (this.playDirection = e < 0 ? -1 : 1), this.updaFrameModifier();
            }),
            (AnimationItem.prototype.setLoop = function (e) {
                this.loop = e;
            }),
            (AnimationItem.prototype.setVolume = function (e, t) {
                (t && this.name !== t) || this.audioController.setVolume(e);
            }),
            (AnimationItem.prototype.getVolume = function () {
                return this.audioController.getVolume();
            }),
            (AnimationItem.prototype.mute = function (e) {
                (e && this.name !== e) || this.audioController.mute();
            }),
            (AnimationItem.prototype.unmute = function (e) {
                (e && this.name !== e) || this.audioController.unmute();
            }),
            (AnimationItem.prototype.updaFrameModifier = function () {
                (this.frameModifier = this.frameMult * this.playSpeed * this.playDirection),
                    this.audioController.setRate(this.playSpeed * this.playDirection);
            }),
            (AnimationItem.prototype.getPath = function () {
                return this.path;
            }),
            (AnimationItem.prototype.getAssetsPath = function (e) {
                var t = "";
                if (e.e) t = e.p;
                else if (this.assetsPath) {
                    var n = e.p;
                    -1 !== n.indexOf("images/") && (n = n.split("/")[1]), (t = this.assetsPath + n);
                } else t = this.path + (e.u ? e.u : "") + e.p;
                return t;
            }),
            (AnimationItem.prototype.getAssetData = function (e) {
                for (var t = 0, n = this.assets.length; t < n; ) {
                    if (e === this.assets[t].id) return this.assets[t];
                    t += 1;
                }
                return null;
            }),
            (AnimationItem.prototype.hide = function () {
                this.renderer.hide();
            }),
            (AnimationItem.prototype.show = function () {
                this.renderer.show();
            }),
            (AnimationItem.prototype.getDuration = function (e) {
                return e ? this.totalFrames : this.totalFrames / this.frameRate;
            }),
            (AnimationItem.prototype.updateDocumentData = function (e, t, n) {
                try {
                    this.renderer.getElementByPath(e).updateDocumentData(t, n);
                } catch (e) {}
            }),
            (AnimationItem.prototype.trigger = function (e) {
                if (this._cbs && this._cbs[e])
                    switch (e) {
                        case "enterFrame":
                            this.triggerEvent(
                                e,
                                new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier),
                            );
                            break;
                        case "drawnFrame":
                            (this.drawnFrameEvent.currentTime = this.currentFrame),
                                (this.drawnFrameEvent.totalTime = this.totalFrames),
                                (this.drawnFrameEvent.direction = this.frameModifier),
                                this.triggerEvent(e, this.drawnFrameEvent);
                            break;
                        case "loopComplete":
                            this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
                            break;
                        case "complete":
                            this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
                            break;
                        case "segmentStart":
                            this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
                            break;
                        case "destroy":
                            this.triggerEvent(e, new BMDestroyEvent(e, this));
                            break;
                        default:
                            this.triggerEvent(e);
                    }
                "enterFrame" === e &&
                    this.onEnterFrame &&
                    this.onEnterFrame.call(
                        this,
                        new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult),
                    ),
                    "loopComplete" === e &&
                        this.onLoopComplete &&
                        this.onLoopComplete.call(
                            this,
                            new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult),
                        ),
                    "complete" === e &&
                        this.onComplete &&
                        this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)),
                    "segmentStart" === e &&
                        this.onSegmentStart &&
                        this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)),
                    "destroy" === e && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this));
            }),
            (AnimationItem.prototype.triggerRenderFrameError = function (e) {
                var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
                this.triggerEvent("error", t), this.onError && this.onError.call(this, t);
            }),
            (AnimationItem.prototype.triggerConfigError = function (e) {
                var t = new BMConfigErrorEvent(e, this.currentFrame);
                this.triggerEvent("error", t), this.onError && this.onError.call(this, t);
            });
        var animationManager = (function () {
                var e = {},
                    t = [],
                    n = 0,
                    r = 0,
                    i = 0,
                    s = !0,
                    a = !1;
                function o(e) {
                    for (var n = 0, i = e.target; n < r; )
                        t[n].animation === i && (t.splice(n, 1), (n -= 1), (r -= 1), i.isPaused || d()), (n += 1);
                }
                function l(e, n) {
                    if (!e) return null;
                    for (var i = 0; i < r; ) {
                        if (t[i].elem === e && null !== t[i].elem) return t[i].animation;
                        i += 1;
                    }
                    var s = new AnimationItem();
                    return _(s, e), s.setData(e, n), s;
                }
                function u() {
                    var e,
                        n = t.length,
                        r = [];
                    for (e = 0; e < n; e += 1) r.push(t[e].animation);
                    return r;
                }
                function c() {
                    (i += 1), C();
                }
                function d() {
                    i -= 1;
                }
                function _(e, n) {
                    e.addEventListener("destroy", o),
                        e.addEventListener("_active", c),
                        e.addEventListener("_idle", d),
                        t.push({ elem: n, animation: e }),
                        (r += 1);
                }
                function f(e) {
                    var t = new AnimationItem();
                    return _(t, null), t.setParams(e), t;
                }
                function p(e, n) {
                    var i;
                    for (i = 0; i < r; i += 1) t[i].animation.setSpeed(e, n);
                }
                function h(e, n) {
                    var i;
                    for (i = 0; i < r; i += 1) t[i].animation.setDirection(e, n);
                }
                function m(e) {
                    var n;
                    for (n = 0; n < r; n += 1) t[n].animation.play(e);
                }
                function E(e) {
                    var o,
                        l = e - n;
                    for (o = 0; o < r; o += 1) t[o].animation.advanceTime(l);
                    (n = e), i && !a ? window.requestAnimationFrame(E) : (s = !0);
                }
                function g(e) {
                    (n = e), window.requestAnimationFrame(E);
                }
                function A(e) {
                    var n;
                    for (n = 0; n < r; n += 1) t[n].animation.pause(e);
                }
                function I(e, n, i) {
                    var s;
                    for (s = 0; s < r; s += 1) t[s].animation.goToAndStop(e, n, i);
                }
                function T(e) {
                    var n;
                    for (n = 0; n < r; n += 1) t[n].animation.stop(e);
                }
                function S(e) {
                    var n;
                    for (n = 0; n < r; n += 1) t[n].animation.togglePause(e);
                }
                function y(e) {
                    var n;
                    for (n = r - 1; n >= 0; n -= 1) t[n].animation.destroy(e);
                }
                function v(e, t, n) {
                    var r,
                        i = [].concat(
                            [].slice.call(document.getElementsByClassName("lottie")),
                            [].slice.call(document.getElementsByClassName("bodymovin")),
                        ),
                        s = i.length;
                    for (r = 0; r < s; r += 1) n && i[r].setAttribute("data-bm-type", n), l(i[r], e);
                    if (t && 0 === s) {
                        n || (n = "svg");
                        var a = document.getElementsByTagName("body")[0];
                        a.innerText = "";
                        var o = createTag("div");
                        (o.style.width = "100%"),
                            (o.style.height = "100%"),
                            o.setAttribute("data-bm-type", n),
                            a.appendChild(o),
                            l(o, e);
                    }
                }
                function N() {
                    var e;
                    for (e = 0; e < r; e += 1) t[e].animation.resize();
                }
                function C() {
                    !a && i && s && (window.requestAnimationFrame(g), (s = !1));
                }
                function R() {
                    a = !0;
                }
                function O() {
                    (a = !1), C();
                }
                function b(e, n) {
                    var i;
                    for (i = 0; i < r; i += 1) t[i].animation.setVolume(e, n);
                }
                function D(e) {
                    var n;
                    for (n = 0; n < r; n += 1) t[n].animation.mute(e);
                }
                function L(e) {
                    var n;
                    for (n = 0; n < r; n += 1) t[n].animation.unmute(e);
                }
                return (
                    (e.registerAnimation = l),
                    (e.loadAnimation = f),
                    (e.setSpeed = p),
                    (e.setDirection = h),
                    (e.play = m),
                    (e.pause = A),
                    (e.stop = T),
                    (e.togglePause = S),
                    (e.searchAnimations = v),
                    (e.resize = N),
                    (e.goToAndStop = I),
                    (e.destroy = y),
                    (e.freeze = R),
                    (e.unfreeze = O),
                    (e.setVolume = b),
                    (e.mute = D),
                    (e.unmute = L),
                    (e.getRegisteredAnimations = u),
                    e
                );
            })(),
            BezierFactory = (function () {
                var e = {};
                e.getBezierEasing = n;
                var t = {};
                function n(e, n, r, i, s) {
                    var a = s || ("bez_" + e + "_" + n + "_" + r + "_" + i).replace(/\./g, "p");
                    if (t[a]) return t[a];
                    var o = new E([e, n, r, i]);
                    return (t[a] = o), o;
                }
                var r = 4,
                    i = 0.001,
                    s = 1e-7,
                    a = 10,
                    o = 11,
                    l = 0.1,
                    u = "function" == typeof Float32Array;
                function c(e, t) {
                    return 1 - 3 * t + 3 * e;
                }
                function d(e, t) {
                    return 3 * t - 6 * e;
                }
                function _(e) {
                    return 3 * e;
                }
                function f(e, t, n) {
                    return ((c(t, n) * e + d(t, n)) * e + _(t)) * e;
                }
                function p(e, t, n) {
                    return 3 * c(t, n) * e * e + 2 * d(t, n) * e + _(t);
                }
                function h(e, t, n, r, i) {
                    var o,
                        l,
                        u = 0;
                    do (o = f((l = t + (n - t) / 2), r, i) - e) > 0 ? (n = l) : (t = l);
                    while (Math.abs(o) > s && ++u < a);
                    return l;
                }
                function m(e, t, n, i) {
                    for (var s = 0; s < r; ++s) {
                        var a = p(t, n, i);
                        if (0 === a) break;
                        var o = f(t, n, i) - e;
                        t -= o / a;
                    }
                    return t;
                }
                function E(e) {
                    (this._p = e),
                        (this._mSampleValues = u ? new Float32Array(o) : Array(o)),
                        (this._precomputed = !1),
                        (this.get = this.get.bind(this));
                }
                return (
                    (E.prototype = {
                        get: function (e) {
                            var t = this._p[0],
                                n = this._p[1],
                                r = this._p[2],
                                i = this._p[3];
                            return (this._precomputed || this._precompute(), t === n && r === i)
                                ? e
                                : 0 === e
                                  ? 0
                                  : 1 === e
                                    ? 1
                                    : f(this._getTForX(e), n, i);
                        },
                        _precompute: function () {
                            var e = this._p[0],
                                t = this._p[1],
                                n = this._p[2],
                                r = this._p[3];
                            (this._precomputed = !0), (e !== t || n !== r) && this._calcSampleValues();
                        },
                        _calcSampleValues: function () {
                            for (var e = this._p[0], t = this._p[2], n = 0; n < o; ++n)
                                this._mSampleValues[n] = f(n * l, e, t);
                        },
                        _getTForX: function (e) {
                            for (
                                var t = this._p[0], n = this._p[2], r = this._mSampleValues, s = 0, a = 1, u = o - 1;
                                a !== u && r[a] <= e;
                                ++a
                            )
                                s += l;
                            var c = s + ((e - r[--a]) / (r[a + 1] - r[a])) * l,
                                d = p(c, t, n);
                            return d >= i ? m(e, c, t, n) : 0 === d ? c : h(e, s, s + l, t, n);
                        },
                    }),
                    e
                );
            })(),
            pooling = (function () {
                return {
                    double: function (e) {
                        return e.concat(createSizedArray(e.length));
                    },
                };
            })(),
            poolFactory = (function () {
                return function (e, t, n) {
                    var r = 0,
                        i = e,
                        s = createSizedArray(i);
                    return {
                        newElement: function () {
                            var e;
                            return r ? ((r -= 1), (e = s[r])) : (e = t()), e;
                        },
                        release: function (e) {
                            r === i && ((s = pooling.double(s)), (i *= 2)), n && n(e), (s[r] = e), (r += 1);
                        },
                    };
                };
            })(),
            bezierLengthPool = (function () {
                return poolFactory(8, function () {
                    return {
                        addedLength: 0,
                        percents: createTypedArray("float32", getDefaultCurveSegments()),
                        lengths: createTypedArray("float32", getDefaultCurveSegments()),
                    };
                });
            })(),
            segmentsLengthPool = (function () {
                return poolFactory(
                    8,
                    function () {
                        return { lengths: [], totalLength: 0 };
                    },
                    function (e) {
                        var t,
                            n = e.lengths.length;
                        for (t = 0; t < n; t += 1) bezierLengthPool.release(e.lengths[t]);
                        e.lengths.length = 0;
                    },
                );
            })();
        function bezFunction() {
            var e = Math;
            function t(e, t, n, r, i, s) {
                var a = e * r + t * i + n * s - i * r - s * e - n * t;
                return a > -0.001 && a < 0.001;
            }
            function n(n, r, i, s, a, o, l, u, c) {
                if (0 === i && 0 === o && 0 === c) return t(n, r, s, a, l, u);
                var d,
                    _ = e.sqrt(e.pow(s - n, 2) + e.pow(a - r, 2) + e.pow(o - i, 2)),
                    f = e.sqrt(e.pow(l - n, 2) + e.pow(u - r, 2) + e.pow(c - i, 2)),
                    p = e.sqrt(e.pow(l - s, 2) + e.pow(u - a, 2) + e.pow(c - o, 2));
                return (
                    (d = _ > f ? (_ > p ? _ - f - p : p - f - _) : p > f ? p - f - _ : f - _ - p) > -1e-4 && d < 1e-4
                );
            }
            var r = (function () {
                return function (e, t, n, r) {
                    var i,
                        s,
                        a,
                        o,
                        l,
                        u,
                        c = getDefaultCurveSegments(),
                        d = 0,
                        _ = [],
                        f = [],
                        p = bezierLengthPool.newElement();
                    for (i = 0, a = n.length; i < c; i += 1) {
                        for (s = 0, l = i / (c - 1), u = 0; s < a; s += 1)
                            (o =
                                bmPow(1 - l, 3) * e[s] +
                                3 * bmPow(1 - l, 2) * l * n[s] +
                                3 * (1 - l) * bmPow(l, 2) * r[s] +
                                bmPow(l, 3) * t[s]),
                                (_[s] = o),
                                null !== f[s] && (u += bmPow(_[s] - f[s], 2)),
                                (f[s] = _[s]);
                        u && (d += u = bmSqrt(u)), (p.percents[i] = l), (p.lengths[i] = d);
                    }
                    return (p.addedLength = d), p;
                };
            })();
            function i(e) {
                var t,
                    n = segmentsLengthPool.newElement(),
                    i = e.c,
                    s = e.v,
                    a = e.o,
                    o = e.i,
                    l = e._length,
                    u = n.lengths,
                    c = 0;
                for (t = 0; t < l - 1; t += 1) (u[t] = r(s[t], s[t + 1], a[t], o[t + 1])), (c += u[t].addedLength);
                return i && l && ((u[t] = r(s[t], s[0], a[t], o[0])), (c += u[t].addedLength)), (n.totalLength = c), n;
            }
            function s(e) {
                (this.segmentLength = 0), (this.points = Array(e));
            }
            function a(e, t) {
                (this.partialLength = e), (this.point = t);
            }
            var o = (function () {
                var e = {};
                return function (n, r, i, o) {
                    var l = (
                        n[0] +
                        "_" +
                        n[1] +
                        "_" +
                        r[0] +
                        "_" +
                        r[1] +
                        "_" +
                        i[0] +
                        "_" +
                        i[1] +
                        "_" +
                        o[0] +
                        "_" +
                        o[1]
                    ).replace(/\./g, "p");
                    if (!e[l]) {
                        var u,
                            c,
                            d,
                            _,
                            f,
                            p,
                            h,
                            m = getDefaultCurveSegments(),
                            E = 0,
                            g = null;
                        2 === n.length &&
                            (n[0] !== r[0] || n[1] !== r[1]) &&
                            t(n[0], n[1], r[0], r[1], n[0] + i[0], n[1] + i[1]) &&
                            t(n[0], n[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) &&
                            (m = 2);
                        var A = new s(m);
                        for (u = 0, d = i.length; u < m; u += 1) {
                            for (c = 0, h = createSizedArray(d), f = u / (m - 1), p = 0; c < d; c += 1)
                                (_ =
                                    bmPow(1 - f, 3) * n[c] +
                                    3 * bmPow(1 - f, 2) * f * (n[c] + i[c]) +
                                    3 * (1 - f) * bmPow(f, 2) * (r[c] + o[c]) +
                                    bmPow(f, 3) * r[c]),
                                    (h[c] = _),
                                    null !== g && (p += bmPow(h[c] - g[c], 2));
                            (E += p = bmSqrt(p)), (A.points[u] = new a(p, h)), (g = h);
                        }
                        (A.segmentLength = E), (e[l] = A);
                    }
                    return e[l];
                };
            })();
            function l(e, t) {
                var n = t.percents,
                    r = t.lengths,
                    i = n.length,
                    s = bmFloor((i - 1) * e),
                    a = e * t.addedLength,
                    o = 0;
                if (s === i - 1 || 0 === s || a === r[s]) return n[s];
                for (var l = r[s] > a ? -1 : 1, u = !0; u; )
                    if (
                        (r[s] <= a && r[s + 1] > a ? ((o = (a - r[s]) / (r[s + 1] - r[s])), (u = !1)) : (s += l),
                        s < 0 || s >= i - 1)
                    ) {
                        if (s === i - 1) return n[s];
                        u = !1;
                    }
                return n[s] + (n[s + 1] - n[s]) * o;
            }
            function u(t, n, r, i, s, a) {
                var o = l(s, a),
                    u = 1 - o;
                return [
                    e.round(
                        (u * u * u * t[0] +
                            (o * u * u + u * o * u + u * u * o) * r[0] +
                            (o * o * u + u * o * o + o * u * o) * i[0] +
                            o * o * o * n[0]) *
                            1e3,
                    ) / 1e3,
                    e.round(
                        (u * u * u * t[1] +
                            (o * u * u + u * o * u + u * u * o) * r[1] +
                            (o * o * u + u * o * o + o * u * o) * i[1] +
                            o * o * o * n[1]) *
                            1e3,
                    ) / 1e3,
                ];
            }
            var c = createTypedArray("float32", 8);
            return {
                getSegmentsLength: i,
                getNewSegment: function (t, n, r, i, s, a, o) {
                    s < 0 ? (s = 0) : s > 1 && (s = 1);
                    var u,
                        d = l(s, o),
                        _ = l((a = a > 1 ? 1 : a), o),
                        f = t.length,
                        p = 1 - d,
                        h = 1 - _,
                        m = p * p * p,
                        E = d * p * p * 3,
                        g = d * d * p * 3,
                        A = d * d * d,
                        I = p * p * h,
                        T = d * p * h + p * d * h + p * p * _,
                        S = d * d * h + p * d * _ + d * p * _,
                        y = d * d * _,
                        v = p * h * h,
                        N = d * h * h + p * _ * h + p * h * _,
                        C = d * _ * h + p * _ * _ + d * h * _,
                        R = d * _ * _,
                        O = h * h * h,
                        b = _ * h * h + h * _ * h + h * h * _,
                        D = _ * _ * h + h * _ * _ + _ * h * _,
                        L = _ * _ * _;
                    for (u = 0; u < f; u += 1)
                        (c[4 * u] = e.round((m * t[u] + E * r[u] + g * i[u] + A * n[u]) * 1e3) / 1e3),
                            (c[4 * u + 1] = e.round((I * t[u] + T * r[u] + S * i[u] + y * n[u]) * 1e3) / 1e3),
                            (c[4 * u + 2] = e.round((v * t[u] + N * r[u] + C * i[u] + R * n[u]) * 1e3) / 1e3),
                            (c[4 * u + 3] = e.round((O * t[u] + b * r[u] + D * i[u] + L * n[u]) * 1e3) / 1e3);
                    return c;
                },
                getPointInSegment: u,
                buildBezierData: o,
                pointOnLine2D: t,
                pointOnLine3D: n,
            };
        }
        var bez = bezFunction(),
            initFrame = initialDefaultFrame,
            mathAbs = Math.abs;
        function interpolateValue(e, t) {
            var n,
                r,
                i,
                s,
                a,
                o = this.offsetTime;
            "multidimensional" === this.propType && (m = createTypedArray("float32", this.pv.length));
            for (var l = t.lastIndex, u = l, c = this.keyframes.length - 1, d = !0; d; ) {
                if (((E = this.keyframes[u]), (g = this.keyframes[u + 1]), u === c - 1 && e >= g.t - o)) {
                    E.h && (E = g), (l = 0);
                    break;
                }
                if (g.t - o > e) {
                    l = u;
                    break;
                }
                u < c - 1 ? (u += 1) : ((l = 0), (d = !1));
            }
            A = this.keyframesMetadata[u] || {};
            var _ = g.t - o,
                f = E.t - o;
            if (E.to) {
                A.bezierData || (A.bezierData = bez.buildBezierData(E.s, g.s || E.e, E.to, E.ti));
                var p = A.bezierData;
                if (e >= _ || e < f) {
                    var h = e >= _ ? p.points.length - 1 : 0;
                    for (I = 0, T = p.points[h].point.length; I < T; I += 1) m[I] = p.points[h].point[I];
                } else {
                    A.__fnct
                        ? (v = A.__fnct)
                        : (A.__fnct = v = BezierFactory.getBezierEasing(E.o.x, E.o.y, E.i.x, E.i.y, E.n).get);
                    var m,
                        E,
                        g,
                        A,
                        I,
                        T,
                        S,
                        y,
                        v,
                        N,
                        C,
                        R = v((e - f) / (_ - f)),
                        O = p.segmentLength * R,
                        b = t.lastFrame < e && t._lastKeyframeIndex === u ? t._lastAddedLength : 0;
                    for (
                        y = t.lastFrame < e && t._lastKeyframeIndex === u ? t._lastPoint : 0,
                            d = !0,
                            S = p.points.length;
                        d;
                    ) {
                        if (((b += p.points[y].partialLength), 0 === O || 0 === R || y === p.points.length - 1)) {
                            for (I = 0, T = p.points[y].point.length; I < T; I += 1) m[I] = p.points[y].point[I];
                            break;
                        }
                        if (O >= b && O < b + p.points[y + 1].partialLength) {
                            for (
                                I = 0, C = (O - b) / p.points[y + 1].partialLength, T = p.points[y].point.length;
                                I < T;
                                I += 1
                            )
                                m[I] = p.points[y].point[I] + (p.points[y + 1].point[I] - p.points[y].point[I]) * C;
                            break;
                        }
                        y < S - 1 ? (y += 1) : (d = !1);
                    }
                    (t._lastPoint = y),
                        (t._lastAddedLength = b - p.points[y].partialLength),
                        (t._lastKeyframeIndex = u);
                }
            } else if (((c = E.s.length), (N = g.s || E.e), this.sh && 1 !== E.h))
                e >= _
                    ? ((m[0] = N[0]), (m[1] = N[1]), (m[2] = N[2]))
                    : e <= f
                      ? ((m[0] = E.s[0]), (m[1] = E.s[1]), (m[2] = E.s[2]))
                      : quaternionToEuler(m, slerp(createQuaternion(E.s), createQuaternion(N), (e - f) / (_ - f)));
            else
                for (u = 0; u < c; u += 1)
                    1 !== E.h &&
                        (e >= _
                            ? (R = 1)
                            : e < f
                              ? (R = 0)
                              : (E.o.x.constructor === Array
                                    ? (A.__fnct || (A.__fnct = []),
                                      A.__fnct[u]
                                          ? (v = A.__fnct[u])
                                          : ((n = void 0 === E.o.x[u] ? E.o.x[0] : E.o.x[u]),
                                            (r = void 0 === E.o.y[u] ? E.o.y[0] : E.o.y[u]),
                                            (i = void 0 === E.i.x[u] ? E.i.x[0] : E.i.x[u]),
                                            (s = void 0 === E.i.y[u] ? E.i.y[0] : E.i.y[u]),
                                            (v = BezierFactory.getBezierEasing(n, r, i, s).get),
                                            (A.__fnct[u] = v)))
                                    : A.__fnct
                                      ? (v = A.__fnct)
                                      : ((n = E.o.x),
                                        (r = E.o.y),
                                        (i = E.i.x),
                                        (s = E.i.y),
                                        (v = BezierFactory.getBezierEasing(n, r, i, s).get),
                                        (E.keyframeMetadata = v)),
                                (R = v((e - f) / (_ - f))))),
                        (N = g.s || E.e),
                        (a = 1 === E.h ? E.s[u] : E.s[u] + (N[u] - E.s[u]) * R),
                        "multidimensional" === this.propType ? (m[u] = a) : (m = a);
            return (t.lastIndex = l), m;
        }
        function slerp(e, t, n) {
            var r,
                i,
                s,
                a,
                o,
                l = [],
                u = e[0],
                c = e[1],
                d = e[2],
                _ = e[3],
                f = t[0],
                p = t[1],
                h = t[2],
                m = t[3];
            return (
                (i = u * f + c * p + d * h + _ * m) < 0 && ((i = -i), (f = -f), (p = -p), (h = -h), (m = -m)),
                1 - i > 1e-6
                    ? ((s = Math.sin((r = Math.acos(i)))), (a = Math.sin((1 - n) * r) / s), (o = Math.sin(n * r) / s))
                    : ((a = 1 - n), (o = n)),
                (l[0] = a * u + o * f),
                (l[1] = a * c + o * p),
                (l[2] = a * d + o * h),
                (l[3] = a * _ + o * m),
                l
            );
        }
        function quaternionToEuler(e, t) {
            var n = t[0],
                r = t[1],
                i = t[2],
                s = t[3],
                a = Math.atan2(2 * r * s - 2 * n * i, 1 - 2 * r * r - 2 * i * i),
                o = Math.asin(2 * n * r + 2 * i * s),
                l = Math.atan2(2 * n * s - 2 * r * i, 1 - 2 * n * n - 2 * i * i);
            (e[0] = a / degToRads), (e[1] = o / degToRads), (e[2] = l / degToRads);
        }
        function createQuaternion(e) {
            var t = e[0] * degToRads,
                n = e[1] * degToRads,
                r = e[2] * degToRads,
                i = Math.cos(t / 2),
                s = Math.cos(n / 2),
                a = Math.cos(r / 2),
                o = Math.sin(t / 2),
                l = Math.sin(n / 2),
                u = Math.sin(r / 2),
                c = i * s * a - o * l * u;
            return [o * l * a + i * s * u, o * s * a + i * l * u, i * l * a - o * s * u, c];
        }
        function getValueAtCurrentTime() {
            var e = this.comp.renderedFrame - this.offsetTime,
                t = this.keyframes[0].t - this.offsetTime,
                n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (
                !(
                    e === this._caching.lastFrame ||
                    (this._caching.lastFrame !== initFrame &&
                        ((this._caching.lastFrame >= n && e >= n) || (this._caching.lastFrame < t && e < t)))
                )
            ) {
                this._caching.lastFrame >= e &&
                    ((this._caching._lastKeyframeIndex = -1), (this._caching.lastIndex = 0));
                var r = this.interpolateValue(e, this._caching);
                this.pv = r;
            }
            return (this._caching.lastFrame = e), this.pv;
        }
        function setVValue(e) {
            var t;
            if ("unidimensional" === this.propType)
                (t = e * this.mult), mathAbs(this.v - t) > 1e-5 && ((this.v = t), (this._mdf = !0));
            else
                for (var n = 0, r = this.v.length; n < r; )
                    (t = e[n] * this.mult),
                        mathAbs(this.v[n] - t) > 1e-5 && ((this.v[n] = t), (this._mdf = !0)),
                        (n += 1);
        }
        function processEffectsSequence() {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
                if (this.lock) return void this.setVValue(this.pv);
                (this.lock = !0), (this._mdf = this._isFirstFrame);
                var e,
                    t = this.effectsSequence.length,
                    n = this.kf ? this.pv : this.data.k;
                for (e = 0; e < t; e += 1) n = this.effectsSequence[e](n);
                this.setVValue(n),
                    (this._isFirstFrame = !1),
                    (this.lock = !1),
                    (this.frameId = this.elem.globalData.frameId);
            }
        }
        function addEffect(e) {
            this.effectsSequence.push(e), this.container.addDynamicProperty(this);
        }
        function ValueProperty(e, t, n, r) {
            (this.propType = "unidimensional"),
                (this.mult = n || 1),
                (this.data = t),
                (this.v = n ? t.k * n : t.k),
                (this.pv = t.k),
                (this._mdf = !1),
                (this.elem = e),
                (this.container = r),
                (this.comp = e.comp),
                (this.k = !1),
                (this.kf = !1),
                (this.vel = 0),
                (this.effectsSequence = []),
                (this._isFirstFrame = !0),
                (this.getValue = processEffectsSequence),
                (this.setVValue = setVValue),
                (this.addEffect = addEffect);
        }
        function MultiDimensionalProperty(e, t, n, r) {
            (this.propType = "multidimensional"),
                (this.mult = n || 1),
                (this.data = t),
                (this._mdf = !1),
                (this.elem = e),
                (this.container = r),
                (this.comp = e.comp),
                (this.k = !1),
                (this.kf = !1),
                (this.frameId = -1);
            var i,
                s = t.k.length;
            for (
                i = 0,
                    this.v = createTypedArray("float32", s),
                    this.pv = createTypedArray("float32", s),
                    this.vel = createTypedArray("float32", s);
                i < s;
                i += 1
            )
                (this.v[i] = t.k[i] * this.mult), (this.pv[i] = t.k[i]);
            (this._isFirstFrame = !0),
                (this.effectsSequence = []),
                (this.getValue = processEffectsSequence),
                (this.setVValue = setVValue),
                (this.addEffect = addEffect);
        }
        function KeyframedValueProperty(e, t, n, r) {
            (this.propType = "unidimensional"),
                (this.keyframes = t.k),
                (this.keyframesMetadata = []),
                (this.offsetTime = e.data.st),
                (this.frameId = -1),
                (this._caching = { lastFrame: initFrame, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }),
                (this.k = !0),
                (this.kf = !0),
                (this.data = t),
                (this.mult = n || 1),
                (this.elem = e),
                (this.container = r),
                (this.comp = e.comp),
                (this.v = initFrame),
                (this.pv = initFrame),
                (this._isFirstFrame = !0),
                (this.getValue = processEffectsSequence),
                (this.setVValue = setVValue),
                (this.interpolateValue = interpolateValue),
                (this.effectsSequence = [getValueAtCurrentTime.bind(this)]),
                (this.addEffect = addEffect);
        }
        function KeyframedMultidimensionalProperty(e, t, n, r) {
            this.propType = "multidimensional";
            var i,
                s,
                a,
                o,
                l,
                u = t.k.length;
            for (i = 0; i < u - 1; i += 1)
                t.k[i].to &&
                    t.k[i].s &&
                    t.k[i + 1] &&
                    t.k[i + 1].s &&
                    ((s = t.k[i].s),
                    (a = t.k[i + 1].s),
                    (o = t.k[i].to),
                    (l = t.k[i].ti),
                    ((2 === s.length &&
                        (s[0] !== a[0] || s[1] !== a[1]) &&
                        bez.pointOnLine2D(s[0], s[1], a[0], a[1], s[0] + o[0], s[1] + o[1]) &&
                        bez.pointOnLine2D(s[0], s[1], a[0], a[1], a[0] + l[0], a[1] + l[1])) ||
                        (3 === s.length &&
                            (s[0] !== a[0] || s[1] !== a[1] || s[2] !== a[2]) &&
                            bez.pointOnLine3D(
                                s[0],
                                s[1],
                                s[2],
                                a[0],
                                a[1],
                                a[2],
                                s[0] + o[0],
                                s[1] + o[1],
                                s[2] + o[2],
                            ) &&
                            bez.pointOnLine3D(
                                s[0],
                                s[1],
                                s[2],
                                a[0],
                                a[1],
                                a[2],
                                a[0] + l[0],
                                a[1] + l[1],
                                a[2] + l[2],
                            ))) &&
                        ((t.k[i].to = null), (t.k[i].ti = null)),
                    s[0] === a[0] &&
                        s[1] === a[1] &&
                        0 === o[0] &&
                        0 === o[1] &&
                        0 === l[0] &&
                        0 === l[1] &&
                        (2 === s.length || (s[2] === a[2] && 0 === o[2] && 0 === l[2])) &&
                        ((t.k[i].to = null), (t.k[i].ti = null)));
            (this.effectsSequence = [getValueAtCurrentTime.bind(this)]),
                (this.data = t),
                (this.keyframes = t.k),
                (this.keyframesMetadata = []),
                (this.offsetTime = e.data.st),
                (this.k = !0),
                (this.kf = !0),
                (this._isFirstFrame = !0),
                (this.mult = n || 1),
                (this.elem = e),
                (this.container = r),
                (this.comp = e.comp),
                (this.getValue = processEffectsSequence),
                (this.setVValue = setVValue),
                (this.interpolateValue = interpolateValue),
                (this.frameId = -1);
            var c = t.k[0].s.length;
            for (
                i = 0, this.v = createTypedArray("float32", c), this.pv = createTypedArray("float32", c);
                i < c;
                i += 1
            )
                (this.v[i] = initFrame), (this.pv[i] = initFrame);
            (this._caching = { lastFrame: initFrame, lastIndex: 0, value: createTypedArray("float32", c) }),
                (this.addEffect = addEffect);
        }
        var PropertyFactory = (function () {
            return {
                getProp: function (e, t, n, r, i) {
                    var s;
                    if ((t.sid && (t = e.globalData.slotManager.getProp(t)), t.k.length))
                        if ("number" == typeof t.k[0]) s = new MultiDimensionalProperty(e, t, r, i);
                        else
                            switch (n) {
                                case 0:
                                    s = new KeyframedValueProperty(e, t, r, i);
                                    break;
                                case 1:
                                    s = new KeyframedMultidimensionalProperty(e, t, r, i);
                            }
                    else s = new ValueProperty(e, t, r, i);
                    return s.effectsSequence.length && i.addDynamicProperty(s), s;
                },
            };
        })();
        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function (e) {
                -1 === this.dynamicProperties.indexOf(e) &&
                    (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), (this._isAnimated = !0));
            },
            iterateDynamicProperties: function () {
                this._mdf = !1;
                var e,
                    t = this.dynamicProperties.length;
                for (e = 0; e < t; e += 1)
                    this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0);
            },
            initDynamicPropertyContainer: function (e) {
                (this.container = e), (this.dynamicProperties = []), (this._mdf = !1), (this._isAnimated = !1);
            },
        };
        var pointPool = (function () {
            return poolFactory(8, function () {
                return createTypedArray("float32", 2);
            });
        })();
        function ShapePath() {
            (this.c = !1),
                (this._length = 0),
                (this._maxLength = 8),
                (this.v = createSizedArray(this._maxLength)),
                (this.o = createSizedArray(this._maxLength)),
                (this.i = createSizedArray(this._maxLength));
        }
        (ShapePath.prototype.setPathData = function (e, t) {
            (this.c = e), this.setLength(t);
            for (var n = 0; n < t; )
                (this.v[n] = pointPool.newElement()),
                    (this.o[n] = pointPool.newElement()),
                    (this.i[n] = pointPool.newElement()),
                    (n += 1);
        }),
            (ShapePath.prototype.setLength = function (e) {
                for (; this._maxLength < e; ) this.doubleArrayLength();
                this._length = e;
            }),
            (ShapePath.prototype.doubleArrayLength = function () {
                (this.v = this.v.concat(createSizedArray(this._maxLength))),
                    (this.i = this.i.concat(createSizedArray(this._maxLength))),
                    (this.o = this.o.concat(createSizedArray(this._maxLength))),
                    (this._maxLength *= 2);
            }),
            (ShapePath.prototype.setXYAt = function (e, t, n, r, i) {
                var s;
                switch (
                    ((this._length = Math.max(this._length, r + 1)),
                    this._length >= this._maxLength && this.doubleArrayLength(),
                    n)
                ) {
                    case "v":
                        s = this.v;
                        break;
                    case "i":
                        s = this.i;
                        break;
                    case "o":
                        s = this.o;
                        break;
                    default:
                        s = [];
                }
                (s[r] && (!s[r] || i)) || (s[r] = pointPool.newElement()), (s[r][0] = e), (s[r][1] = t);
            }),
            (ShapePath.prototype.setTripleAt = function (e, t, n, r, i, s, a, o) {
                this.setXYAt(e, t, "v", a, o), this.setXYAt(n, r, "o", a, o), this.setXYAt(i, s, "i", a, o);
            }),
            (ShapePath.prototype.reverse = function () {
                var e,
                    t = new ShapePath();
                t.setPathData(this.c, this._length);
                var n = this.v,
                    r = this.o,
                    i = this.i,
                    s = 0;
                this.c && (t.setTripleAt(n[0][0], n[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), (s = 1));
                var a = this._length - 1,
                    o = this._length;
                for (e = s; e < o; e += 1)
                    t.setTripleAt(n[a][0], n[a][1], i[a][0], i[a][1], r[a][0], r[a][1], e, !1), (a -= 1);
                return t;
            }),
            (ShapePath.prototype.length = function () {
                return this._length;
            });
        var shapePool = (function () {
            function e(e) {
                var n,
                    r = t.newElement(),
                    i = void 0 === e._length ? e.v.length : e._length;
                for (r.setLength(i), r.c = e.c, n = 0; n < i; n += 1)
                    r.setTripleAt(e.v[n][0], e.v[n][1], e.o[n][0], e.o[n][1], e.i[n][0], e.i[n][1], n);
                return r;
            }
            var t = poolFactory(
                4,
                function () {
                    return new ShapePath();
                },
                function (e) {
                    var t,
                        n = e._length;
                    for (t = 0; t < n; t += 1)
                        pointPool.release(e.v[t]),
                            pointPool.release(e.i[t]),
                            pointPool.release(e.o[t]),
                            (e.v[t] = null),
                            (e.i[t] = null),
                            (e.o[t] = null);
                    (e._length = 0), (e.c = !1);
                },
            );
            return (t.clone = e), t;
        })();
        function ShapeCollection() {
            (this._length = 0), (this._maxLength = 4), (this.shapes = createSizedArray(this._maxLength));
        }
        (ShapeCollection.prototype.addShape = function (e) {
            this._length === this._maxLength &&
                ((this.shapes = this.shapes.concat(createSizedArray(this._maxLength))), (this._maxLength *= 2)),
                (this.shapes[this._length] = e),
                (this._length += 1);
        }),
            (ShapeCollection.prototype.releaseShapes = function () {
                var e;
                for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
                this._length = 0;
            });
        var shapeCollectionPool = (function () {
                var e = { newShapeCollection: i, release: s },
                    t = 0,
                    n = 4,
                    r = createSizedArray(4);
                function i() {
                    var e;
                    return t ? ((t -= 1), (e = r[t])) : (e = new ShapeCollection()), e;
                }
                function s(e) {
                    var i,
                        s = e._length;
                    for (i = 0; i < s; i += 1) shapePool.release(e.shapes[i]);
                    (e._length = 0), t === n && ((r = pooling.double(r)), (n *= 2)), (r[t] = e), (t += 1);
                }
                return e;
            })(),
            ShapePropertyFactory = (function () {
                var e = -999999;
                function t(e, t, n) {
                    var r = n.lastIndex,
                        i = this.keyframes;
                    if (e < i[0].t - this.offsetTime) (s = i[0].s[0]), (o = !0), (r = 0);
                    else if (e >= i[i.length - 1].t - this.offsetTime)
                        (s = i[i.length - 1].s ? i[i.length - 1].s[0] : i[i.length - 2].e[0]), (o = !0);
                    else {
                        for (
                            var s, a, o, l, u, c, d, _, f, p, h, m, E, g = r, A = i.length - 1, I = !0;
                            I && ((p = i[g]), !((h = i[g + 1]).t - this.offsetTime > e));
                        )
                            g < A - 1 ? (g += 1) : (I = !1);
                        (m = this.keyframesMetadata[g] || {}),
                            (o = 1 === p.h),
                            (r = g),
                            o ||
                                (e >= h.t - this.offsetTime
                                    ? (_ = 1)
                                    : e < p.t - this.offsetTime
                                      ? (_ = 0)
                                      : (m.__fnct
                                            ? (E = m.__fnct)
                                            : (m.__fnct = E =
                                                  BezierFactory.getBezierEasing(p.o.x, p.o.y, p.i.x, p.i.y).get),
                                        (_ = E(
                                            (e - (p.t - this.offsetTime)) /
                                                (h.t - this.offsetTime - (p.t - this.offsetTime)),
                                        ))),
                                (a = h.s ? h.s[0] : p.e[0])),
                            (s = p.s[0]);
                    }
                    for (l = 0, c = t._length, d = s.i[0].length, n.lastIndex = r; l < c; l += 1)
                        for (u = 0; u < d; u += 1)
                            (f = o ? s.i[l][u] : s.i[l][u] + (a.i[l][u] - s.i[l][u]) * _),
                                (t.i[l][u] = f),
                                (f = o ? s.o[l][u] : s.o[l][u] + (a.o[l][u] - s.o[l][u]) * _),
                                (t.o[l][u] = f),
                                (f = o ? s.v[l][u] : s.v[l][u] + (a.v[l][u] - s.v[l][u]) * _),
                                (t.v[l][u] = f);
                }
                function n() {
                    var t = this.comp.renderedFrame - this.offsetTime,
                        n = this.keyframes[0].t - this.offsetTime,
                        r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                        i = this._caching.lastFrame;
                    return (
                        (i !== e && ((i < n && t < n) || (i > r && t > r))) ||
                            ((this._caching.lastIndex = i < t ? this._caching.lastIndex : 0),
                            this.interpolateShape(t, this.pv, this._caching)),
                        (this._caching.lastFrame = t),
                        this.pv
                    );
                }
                function r() {
                    this.paths = this.localShapeCollection;
                }
                function i(e, t) {
                    if (e._length !== t._length || e.c !== t.c) return !1;
                    var n,
                        r = e._length;
                    for (n = 0; n < r; n += 1)
                        if (
                            e.v[n][0] !== t.v[n][0] ||
                            e.v[n][1] !== t.v[n][1] ||
                            e.o[n][0] !== t.o[n][0] ||
                            e.o[n][1] !== t.o[n][1] ||
                            e.i[n][0] !== t.i[n][0] ||
                            e.i[n][1] !== t.i[n][1]
                        )
                            return !1;
                    return !0;
                }
                function s(e) {
                    i(this.v, e) ||
                        ((this.v = shapePool.clone(e)),
                        this.localShapeCollection.releaseShapes(),
                        this.localShapeCollection.addShape(this.v),
                        (this._mdf = !0),
                        (this.paths = this.localShapeCollection));
                }
                function a() {
                    if (this.elem.globalData.frameId !== this.frameId) {
                        if (!this.effectsSequence.length) {
                            this._mdf = !1;
                            return;
                        }
                        if (this.lock) return void this.setVValue(this.pv);
                        (this.lock = !0),
                            (this._mdf = !1),
                            (e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k);
                        var e,
                            t,
                            n = this.effectsSequence.length;
                        for (t = 0; t < n; t += 1) e = this.effectsSequence[t](e);
                        this.setVValue(e), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
                    }
                }
                function o(e, t, n) {
                    (this.propType = "shape"),
                        (this.comp = e.comp),
                        (this.container = e),
                        (this.elem = e),
                        (this.data = t),
                        (this.k = !1),
                        (this.kf = !1),
                        (this._mdf = !1);
                    var i = 3 === n ? t.pt.k : t.ks.k;
                    (this.v = shapePool.clone(i)),
                        (this.pv = shapePool.clone(this.v)),
                        (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                        (this.paths = this.localShapeCollection),
                        this.paths.addShape(this.v),
                        (this.reset = r),
                        (this.effectsSequence = []);
                }
                function l(e) {
                    this.effectsSequence.push(e), this.container.addDynamicProperty(this);
                }
                function u(t, i, s) {
                    (this.propType = "shape"),
                        (this.comp = t.comp),
                        (this.elem = t),
                        (this.container = t),
                        (this.offsetTime = t.data.st),
                        (this.keyframes = 3 === s ? i.pt.k : i.ks.k),
                        (this.keyframesMetadata = []),
                        (this.k = !0),
                        (this.kf = !0);
                    var a = this.keyframes[0].s[0].i.length;
                    (this.v = shapePool.newElement()),
                        this.v.setPathData(this.keyframes[0].s[0].c, a),
                        (this.pv = shapePool.clone(this.v)),
                        (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                        (this.paths = this.localShapeCollection),
                        this.paths.addShape(this.v),
                        (this.lastFrame = e),
                        (this.reset = r),
                        (this._caching = { lastFrame: e, lastIndex: 0 }),
                        (this.effectsSequence = [n.bind(this)]);
                }
                (o.prototype.interpolateShape = t),
                    (o.prototype.getValue = a),
                    (o.prototype.setVValue = s),
                    (o.prototype.addEffect = l),
                    (u.prototype.getValue = a),
                    (u.prototype.interpolateShape = t),
                    (u.prototype.setVValue = s),
                    (u.prototype.addEffect = l);
                var c = (function () {
                        var e = roundCorner;
                        function t(e, t) {
                            (this.v = shapePool.newElement()),
                                this.v.setPathData(!0, 4),
                                (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                                (this.paths = this.localShapeCollection),
                                this.localShapeCollection.addShape(this.v),
                                (this.d = t.d),
                                (this.elem = e),
                                (this.comp = e.comp),
                                (this.frameId = -1),
                                this.initDynamicPropertyContainer(e),
                                (this.p = PropertyFactory.getProp(e, t.p, 1, 0, this)),
                                (this.s = PropertyFactory.getProp(e, t.s, 1, 0, this)),
                                this.dynamicProperties.length
                                    ? (this.k = !0)
                                    : ((this.k = !1), this.convertEllToPath());
                        }
                        return (
                            (t.prototype = {
                                reset: r,
                                getValue: function () {
                                    this.elem.globalData.frameId !== this.frameId &&
                                        ((this.frameId = this.elem.globalData.frameId),
                                        this.iterateDynamicProperties(),
                                        this._mdf && this.convertEllToPath());
                                },
                                convertEllToPath: function () {
                                    var t = this.p.v[0],
                                        n = this.p.v[1],
                                        r = this.s.v[0] / 2,
                                        i = this.s.v[1] / 2,
                                        s = 3 !== this.d,
                                        a = this.v;
                                    (a.v[0][0] = t),
                                        (a.v[0][1] = n - i),
                                        (a.v[1][0] = s ? t + r : t - r),
                                        (a.v[1][1] = n),
                                        (a.v[2][0] = t),
                                        (a.v[2][1] = n + i),
                                        (a.v[3][0] = s ? t - r : t + r),
                                        (a.v[3][1] = n),
                                        (a.i[0][0] = s ? t - r * e : t + r * e),
                                        (a.i[0][1] = n - i),
                                        (a.i[1][0] = s ? t + r : t - r),
                                        (a.i[1][1] = n - i * e),
                                        (a.i[2][0] = s ? t + r * e : t - r * e),
                                        (a.i[2][1] = n + i),
                                        (a.i[3][0] = s ? t - r : t + r),
                                        (a.i[3][1] = n + i * e),
                                        (a.o[0][0] = s ? t + r * e : t - r * e),
                                        (a.o[0][1] = n - i),
                                        (a.o[1][0] = s ? t + r : t - r),
                                        (a.o[1][1] = n + i * e),
                                        (a.o[2][0] = s ? t - r * e : t + r * e),
                                        (a.o[2][1] = n + i),
                                        (a.o[3][0] = s ? t - r : t + r),
                                        (a.o[3][1] = n - i * e);
                                },
                            }),
                            extendPrototype([DynamicPropertyContainer], t),
                            t
                        );
                    })(),
                    d = (function () {
                        function e(e, t) {
                            (this.v = shapePool.newElement()),
                                this.v.setPathData(!0, 0),
                                (this.elem = e),
                                (this.comp = e.comp),
                                (this.data = t),
                                (this.frameId = -1),
                                (this.d = t.d),
                                this.initDynamicPropertyContainer(e),
                                1 === t.sy
                                    ? ((this.ir = PropertyFactory.getProp(e, t.ir, 0, 0, this)),
                                      (this.is = PropertyFactory.getProp(e, t.is, 0, 0.01, this)),
                                      (this.convertToPath = this.convertStarToPath))
                                    : (this.convertToPath = this.convertPolygonToPath),
                                (this.pt = PropertyFactory.getProp(e, t.pt, 0, 0, this)),
                                (this.p = PropertyFactory.getProp(e, t.p, 1, 0, this)),
                                (this.r = PropertyFactory.getProp(e, t.r, 0, degToRads, this)),
                                (this.or = PropertyFactory.getProp(e, t.or, 0, 0, this)),
                                (this.os = PropertyFactory.getProp(e, t.os, 0, 0.01, this)),
                                (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                                this.localShapeCollection.addShape(this.v),
                                (this.paths = this.localShapeCollection),
                                this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertToPath());
                        }
                        return (
                            (e.prototype = {
                                reset: r,
                                getValue: function () {
                                    this.elem.globalData.frameId !== this.frameId &&
                                        ((this.frameId = this.elem.globalData.frameId),
                                        this.iterateDynamicProperties(),
                                        this._mdf && this.convertToPath());
                                },
                                convertStarToPath: function () {
                                    var e,
                                        t,
                                        n,
                                        r,
                                        i = 2 * Math.floor(this.pt.v),
                                        s = (2 * Math.PI) / i,
                                        a = !0,
                                        o = this.or.v,
                                        l = this.ir.v,
                                        u = this.os.v,
                                        c = this.is.v,
                                        d = (2 * Math.PI * o) / (2 * i),
                                        _ = (2 * Math.PI * l) / (2 * i),
                                        f = -Math.PI / 2;
                                    f += this.r.v;
                                    var p = 3 === this.data.d ? -1 : 1;
                                    for (e = 0, this.v._length = 0; e < i; e += 1) {
                                        (t = a ? o : l), (n = a ? u : c), (r = a ? d : _);
                                        var h = t * Math.cos(f),
                                            m = t * Math.sin(f),
                                            E = 0 === h && 0 === m ? 0 : m / Math.sqrt(h * h + m * m),
                                            g = 0 === h && 0 === m ? 0 : -h / Math.sqrt(h * h + m * m);
                                        (h += +this.p.v[0]),
                                            (m += +this.p.v[1]),
                                            this.v.setTripleAt(
                                                h,
                                                m,
                                                h - E * r * n * p,
                                                m - g * r * n * p,
                                                h + E * r * n * p,
                                                m + g * r * n * p,
                                                e,
                                                !0,
                                            ),
                                            (a = !a),
                                            (f += s * p);
                                    }
                                },
                                convertPolygonToPath: function () {
                                    var e,
                                        t = Math.floor(this.pt.v),
                                        n = (2 * Math.PI) / t,
                                        r = this.or.v,
                                        i = this.os.v,
                                        s = (2 * Math.PI * r) / (4 * t),
                                        a = -(0.5 * Math.PI),
                                        o = 3 === this.data.d ? -1 : 1;
                                    for (a += this.r.v, this.v._length = 0, e = 0; e < t; e += 1) {
                                        var l = r * Math.cos(a),
                                            u = r * Math.sin(a),
                                            c = 0 === l && 0 === u ? 0 : u / Math.sqrt(l * l + u * u),
                                            d = 0 === l && 0 === u ? 0 : -l / Math.sqrt(l * l + u * u);
                                        (l += +this.p.v[0]),
                                            (u += +this.p.v[1]),
                                            this.v.setTripleAt(
                                                l,
                                                u,
                                                l - c * s * i * o,
                                                u - d * s * i * o,
                                                l + c * s * i * o,
                                                u + d * s * i * o,
                                                e,
                                                !0,
                                            ),
                                            (a += n * o);
                                    }
                                    (this.paths.length = 0), (this.paths[0] = this.v);
                                },
                            }),
                            extendPrototype([DynamicPropertyContainer], e),
                            e
                        );
                    })(),
                    _ = (function () {
                        function e(e, t) {
                            (this.v = shapePool.newElement()),
                                (this.v.c = !0),
                                (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                                this.localShapeCollection.addShape(this.v),
                                (this.paths = this.localShapeCollection),
                                (this.elem = e),
                                (this.comp = e.comp),
                                (this.frameId = -1),
                                (this.d = t.d),
                                this.initDynamicPropertyContainer(e),
                                (this.p = PropertyFactory.getProp(e, t.p, 1, 0, this)),
                                (this.s = PropertyFactory.getProp(e, t.s, 1, 0, this)),
                                (this.r = PropertyFactory.getProp(e, t.r, 0, 0, this)),
                                this.dynamicProperties.length
                                    ? (this.k = !0)
                                    : ((this.k = !1), this.convertRectToPath());
                        }
                        return (
                            (e.prototype = {
                                convertRectToPath: function () {
                                    var e = this.p.v[0],
                                        t = this.p.v[1],
                                        n = this.s.v[0] / 2,
                                        r = this.s.v[1] / 2,
                                        i = bmMin(n, r, this.r.v),
                                        s = i * (1 - roundCorner);
                                    (this.v._length = 0),
                                        2 === this.d || 1 === this.d
                                            ? (this.v.setTripleAt(
                                                  e + n,
                                                  t - r + i,
                                                  e + n,
                                                  t - r + i,
                                                  e + n,
                                                  t - r + s,
                                                  0,
                                                  !0,
                                              ),
                                              this.v.setTripleAt(
                                                  e + n,
                                                  t + r - i,
                                                  e + n,
                                                  t + r - s,
                                                  e + n,
                                                  t + r - i,
                                                  1,
                                                  !0,
                                              ),
                                              0 !== i
                                                  ? (this.v.setTripleAt(
                                                        e + n - i,
                                                        t + r,
                                                        e + n - i,
                                                        t + r,
                                                        e + n - s,
                                                        t + r,
                                                        2,
                                                        !0,
                                                    ),
                                                    this.v.setTripleAt(
                                                        e - n + i,
                                                        t + r,
                                                        e - n + s,
                                                        t + r,
                                                        e - n + i,
                                                        t + r,
                                                        3,
                                                        !0,
                                                    ),
                                                    this.v.setTripleAt(
                                                        e - n,
                                                        t + r - i,
                                                        e - n,
                                                        t + r - i,
                                                        e - n,
                                                        t + r - s,
                                                        4,
                                                        !0,
                                                    ),
                                                    this.v.setTripleAt(
                                                        e - n,
                                                        t - r + i,
                                                        e - n,
                                                        t - r + s,
                                                        e - n,
                                                        t - r + i,
                                                        5,
                                                        !0,
                                                    ),
                                                    this.v.setTripleAt(
                                                        e - n + i,
                                                        t - r,
                                                        e - n + i,
                                                        t - r,
                                                        e - n + s,
                                                        t - r,
                                                        6,
                                                        !0,
                                                    ),
                                                    this.v.setTripleAt(
                                                        e + n - i,
                                                        t - r,
                                                        e + n - s,
                                                        t - r,
                                                        e + n - i,
                                                        t - r,
                                                        7,
                                                        !0,
                                                    ))
                                                  : (this.v.setTripleAt(
                                                        e - n,
                                                        t + r,
                                                        e - n + s,
                                                        t + r,
                                                        e - n,
                                                        t + r,
                                                        2,
                                                    ),
                                                    this.v.setTripleAt(
                                                        e - n,
                                                        t - r,
                                                        e - n,
                                                        t - r + s,
                                                        e - n,
                                                        t - r,
                                                        3,
                                                    )))
                                            : (this.v.setTripleAt(
                                                  e + n,
                                                  t - r + i,
                                                  e + n,
                                                  t - r + s,
                                                  e + n,
                                                  t - r + i,
                                                  0,
                                                  !0,
                                              ),
                                              0 !== i
                                                  ? (this.v.setTripleAt(
                                                        e + n - i,
                                                        t - r,
                                                        e + n - i,
                                                        t - r,
                                                        e + n - s,
                                                        t - r,
                                                        1,
                                                        !0,
                                                    ),
                                                    this.v.setTripleAt(
                                                        e - n + i,
                                                        t - r,
                                                        e - n + s,
                                                        t - r,
                                                        e - n + i,
                                                        t - r,
                                                        2,
                                                        !0,
                                                    ),
                                                    this.v.setTripleAt(
                                                        e - n,
                                                        t - r + i,
                                                        e - n,
                                                        t - r + i,
                                                        e - n,
                                                        t - r + s,
                                                        3,
                                                        !0,
                                                    ),
                                                    this.v.setTripleAt(
                                                        e - n,
                                                        t + r - i,
                                                        e - n,
                                                        t + r - s,
                                                        e - n,
                                                        t + r - i,
                                                        4,
                                                        !0,
                                                    ),
                                                    this.v.setTripleAt(
                                                        e - n + i,
                                                        t + r,
                                                        e - n + i,
                                                        t + r,
                                                        e - n + s,
                                                        t + r,
                                                        5,
                                                        !0,
                                                    ),
                                                    this.v.setTripleAt(
                                                        e + n - i,
                                                        t + r,
                                                        e + n - s,
                                                        t + r,
                                                        e + n - i,
                                                        t + r,
                                                        6,
                                                        !0,
                                                    ),
                                                    this.v.setTripleAt(
                                                        e + n,
                                                        t + r - i,
                                                        e + n,
                                                        t + r - i,
                                                        e + n,
                                                        t + r - s,
                                                        7,
                                                        !0,
                                                    ))
                                                  : (this.v.setTripleAt(
                                                        e - n,
                                                        t - r,
                                                        e - n + s,
                                                        t - r,
                                                        e - n,
                                                        t - r,
                                                        1,
                                                        !0,
                                                    ),
                                                    this.v.setTripleAt(
                                                        e - n,
                                                        t + r,
                                                        e - n,
                                                        t + r - s,
                                                        e - n,
                                                        t + r,
                                                        2,
                                                        !0,
                                                    ),
                                                    this.v.setTripleAt(
                                                        e + n,
                                                        t + r,
                                                        e + n - s,
                                                        t + r,
                                                        e + n,
                                                        t + r,
                                                        3,
                                                        !0,
                                                    )));
                                },
                                getValue: function () {
                                    this.elem.globalData.frameId !== this.frameId &&
                                        ((this.frameId = this.elem.globalData.frameId),
                                        this.iterateDynamicProperties(),
                                        this._mdf && this.convertRectToPath());
                                },
                                reset: r,
                            }),
                            extendPrototype([DynamicPropertyContainer], e),
                            e
                        );
                    })();
                function f() {
                    return o;
                }
                function p() {
                    return u;
                }
                var h = {};
                return (
                    (h.getShapeProp = function (e, t, n) {
                        var r;
                        return (
                            3 === n || 4 === n
                                ? (r = (3 === n ? t.pt : t.ks).k.length ? new u(e, t, n) : new o(e, t, n))
                                : 5 === n
                                  ? (r = new _(e, t))
                                  : 6 === n
                                    ? (r = new c(e, t))
                                    : 7 === n && (r = new d(e, t)),
                            r.k && e.addDynamicProperty(r),
                            r
                        );
                    }),
                    (h.getConstructorFunction = f),
                    (h.getKeyframedConstructorFunction = p),
                    h
                );
            })(),
            Matrix = (function () {
                var e = Math.cos,
                    t = Math.sin,
                    n = Math.tan,
                    r = Math.round;
                function i() {
                    return (
                        (this.props[0] = 1),
                        (this.props[1] = 0),
                        (this.props[2] = 0),
                        (this.props[3] = 0),
                        (this.props[4] = 0),
                        (this.props[5] = 1),
                        (this.props[6] = 0),
                        (this.props[7] = 0),
                        (this.props[8] = 0),
                        (this.props[9] = 0),
                        (this.props[10] = 1),
                        (this.props[11] = 0),
                        (this.props[12] = 0),
                        (this.props[13] = 0),
                        (this.props[14] = 0),
                        (this.props[15] = 1),
                        this
                    );
                }
                function s(n) {
                    if (0 === n) return this;
                    var r = e(n),
                        i = t(n);
                    return this._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function a(n) {
                    if (0 === n) return this;
                    var r = e(n),
                        i = t(n);
                    return this._t(1, 0, 0, 0, 0, r, -i, 0, 0, i, r, 0, 0, 0, 0, 1);
                }
                function o(n) {
                    if (0 === n) return this;
                    var r = e(n),
                        i = t(n);
                    return this._t(r, 0, i, 0, 0, 1, 0, 0, -i, 0, r, 0, 0, 0, 0, 1);
                }
                function l(n) {
                    if (0 === n) return this;
                    var r = e(n),
                        i = t(n);
                    return this._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function u(e, t) {
                    return this._t(1, t, e, 1, 0, 0);
                }
                function c(e, t) {
                    return this.shear(n(e), n(t));
                }
                function d(r, i) {
                    var s = e(i),
                        a = t(i);
                    return this._t(s, a, 0, 0, -a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        ._t(1, 0, 0, 0, n(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        ._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function _(e, t, n) {
                    return (n || 0 === n || (n = 1), 1 === e && 1 === t && 1 === n)
                        ? this
                        : this._t(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1);
                }
                function f(e, t, n, r, i, s, a, o, l, u, c, d, _, f, p, h) {
                    return (
                        (this.props[0] = e),
                        (this.props[1] = t),
                        (this.props[2] = n),
                        (this.props[3] = r),
                        (this.props[4] = i),
                        (this.props[5] = s),
                        (this.props[6] = a),
                        (this.props[7] = o),
                        (this.props[8] = l),
                        (this.props[9] = u),
                        (this.props[10] = c),
                        (this.props[11] = d),
                        (this.props[12] = _),
                        (this.props[13] = f),
                        (this.props[14] = p),
                        (this.props[15] = h),
                        this
                    );
                }
                function p(e, t, n) {
                    return ((n = n || 0), 0 !== e || 0 !== t || 0 !== n)
                        ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, t, n, 1)
                        : this;
                }
                function h(e, t, n, r, i, s, a, o, l, u, c, d, _, f, p, h) {
                    var m = this.props;
                    if (
                        1 === e &&
                        0 === t &&
                        0 === n &&
                        0 === r &&
                        0 === i &&
                        1 === s &&
                        0 === a &&
                        0 === o &&
                        0 === l &&
                        0 === u &&
                        1 === c &&
                        0 === d
                    )
                        return (
                            (m[12] = m[12] * e + m[15] * _),
                            (m[13] = m[13] * s + m[15] * f),
                            (m[14] = m[14] * c + m[15] * p),
                            (m[15] *= h),
                            (this._identityCalculated = !1),
                            this
                        );
                    var E = m[0],
                        g = m[1],
                        A = m[2],
                        I = m[3],
                        T = m[4],
                        S = m[5],
                        y = m[6],
                        v = m[7],
                        N = m[8],
                        C = m[9],
                        R = m[10],
                        O = m[11],
                        b = m[12],
                        D = m[13],
                        L = m[14],
                        w = m[15];
                    return (
                        (m[0] = E * e + g * i + A * l + I * _),
                        (m[1] = E * t + g * s + A * u + I * f),
                        (m[2] = E * n + g * a + A * c + I * p),
                        (m[3] = E * r + g * o + A * d + I * h),
                        (m[4] = T * e + S * i + y * l + v * _),
                        (m[5] = T * t + S * s + y * u + v * f),
                        (m[6] = T * n + S * a + y * c + v * p),
                        (m[7] = T * r + S * o + y * d + v * h),
                        (m[8] = N * e + C * i + R * l + O * _),
                        (m[9] = N * t + C * s + R * u + O * f),
                        (m[10] = N * n + C * a + R * c + O * p),
                        (m[11] = N * r + C * o + R * d + O * h),
                        (m[12] = b * e + D * i + L * l + w * _),
                        (m[13] = b * t + D * s + L * u + w * f),
                        (m[14] = b * n + D * a + L * c + w * p),
                        (m[15] = b * r + D * o + L * d + w * h),
                        (this._identityCalculated = !1),
                        this
                    );
                }
                function m(e) {
                    var t = e.props;
                    return this.transform(
                        t[0],
                        t[1],
                        t[2],
                        t[3],
                        t[4],
                        t[5],
                        t[6],
                        t[7],
                        t[8],
                        t[9],
                        t[10],
                        t[11],
                        t[12],
                        t[13],
                        t[14],
                        t[15],
                    );
                }
                function E() {
                    return (
                        this._identityCalculated ||
                            ((this._identity =
                                1 === this.props[0] &&
                                0 === this.props[1] &&
                                0 === this.props[2] &&
                                0 === this.props[3] &&
                                0 === this.props[4] &&
                                1 === this.props[5] &&
                                0 === this.props[6] &&
                                0 === this.props[7] &&
                                0 === this.props[8] &&
                                0 === this.props[9] &&
                                1 === this.props[10] &&
                                0 === this.props[11] &&
                                0 === this.props[12] &&
                                0 === this.props[13] &&
                                0 === this.props[14] &&
                                1 === this.props[15]),
                            (this._identityCalculated = !0)),
                        this._identity
                    );
                }
                function g(e) {
                    for (var t = 0; t < 16; ) {
                        if (e.props[t] !== this.props[t]) return !1;
                        t += 1;
                    }
                    return !0;
                }
                function A(e) {
                    var t;
                    for (t = 0; t < 16; t += 1) e.props[t] = this.props[t];
                    return e;
                }
                function I(e) {
                    var t;
                    for (t = 0; t < 16; t += 1) this.props[t] = e[t];
                }
                function T(e, t, n) {
                    return {
                        x: e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12],
                        y: e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13],
                        z: e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14],
                    };
                }
                function S(e, t, n) {
                    return e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12];
                }
                function y(e, t, n) {
                    return e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13];
                }
                function v(e, t, n) {
                    return e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14];
                }
                function N() {
                    var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                        t = this.props[5] / e,
                        n = -this.props[1] / e,
                        r = -this.props[4] / e,
                        i = this.props[0] / e,
                        s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
                        a = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e,
                        o = new Matrix();
                    return (
                        (o.props[0] = t),
                        (o.props[1] = n),
                        (o.props[4] = r),
                        (o.props[5] = i),
                        (o.props[12] = s),
                        (o.props[13] = a),
                        o
                    );
                }
                function C(e) {
                    return this.getInverseMatrix().applyToPointArray(e[0], e[1], e[2] || 0);
                }
                function R(e) {
                    var t,
                        n = e.length,
                        r = [];
                    for (t = 0; t < n; t += 1) r[t] = C(e[t]);
                    return r;
                }
                function O(e, t, n) {
                    var r = createTypedArray("float32", 6);
                    if (this.isIdentity())
                        (r[0] = e[0]), (r[1] = e[1]), (r[2] = t[0]), (r[3] = t[1]), (r[4] = n[0]), (r[5] = n[1]);
                    else {
                        var i = this.props[0],
                            s = this.props[1],
                            a = this.props[4],
                            o = this.props[5],
                            l = this.props[12],
                            u = this.props[13];
                        (r[0] = e[0] * i + e[1] * a + l),
                            (r[1] = e[0] * s + e[1] * o + u),
                            (r[2] = t[0] * i + t[1] * a + l),
                            (r[3] = t[0] * s + t[1] * o + u),
                            (r[4] = n[0] * i + n[1] * a + l),
                            (r[5] = n[0] * s + n[1] * o + u);
                    }
                    return r;
                }
                function b(e, t, n) {
                    var r;
                    return this.isIdentity()
                        ? [e, t, n]
                        : [
                              e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12],
                              e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13],
                              e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14],
                          ];
                }
                function D(e, t) {
                    if (this.isIdentity()) return e + "," + t;
                    var n = this.props;
                    return (
                        Math.round((e * n[0] + t * n[4] + n[12]) * 100) / 100 +
                        "," +
                        Math.round((e * n[1] + t * n[5] + n[13]) * 100) / 100
                    );
                }
                function L() {
                    for (var e = 0, t = this.props, n = "matrix3d(", i = 1e4; e < 16; )
                        (n += r(t[e] * i) / i), (n += 15 === e ? ")" : ","), (e += 1);
                    return n;
                }
                function w(e) {
                    var t = 1e4;
                    return (e < 1e-6 && e > 0) || (e > -1e-6 && e < 0) ? r(e * t) / t : e;
                }
                function M() {
                    var e = this.props;
                    return (
                        "matrix(" +
                        w(e[0]) +
                        "," +
                        w(e[1]) +
                        "," +
                        w(e[4]) +
                        "," +
                        w(e[5]) +
                        "," +
                        w(e[12]) +
                        "," +
                        w(e[13]) +
                        ")"
                    );
                }
                return function () {
                    (this.reset = i),
                        (this.rotate = s),
                        (this.rotateX = a),
                        (this.rotateY = o),
                        (this.rotateZ = l),
                        (this.skew = c),
                        (this.skewFromAxis = d),
                        (this.shear = u),
                        (this.scale = _),
                        (this.setTransform = f),
                        (this.translate = p),
                        (this.transform = h),
                        (this.multiply = m),
                        (this.applyToPoint = T),
                        (this.applyToX = S),
                        (this.applyToY = y),
                        (this.applyToZ = v),
                        (this.applyToPointArray = b),
                        (this.applyToTriplePoints = O),
                        (this.applyToPointStringified = D),
                        (this.toCSS = L),
                        (this.to2dCSS = M),
                        (this.clone = A),
                        (this.cloneFromProps = I),
                        (this.equals = g),
                        (this.inversePoints = R),
                        (this.inversePoint = C),
                        (this.getInverseMatrix = N),
                        (this._t = this.transform),
                        (this.isIdentity = E),
                        (this._identity = !0),
                        (this._identityCalculated = !1),
                        (this.props = createTypedArray("float32", 16)),
                        this.reset();
                };
            })();
        function _typeof$3(e) {
            return (_typeof$3 =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                      })(e);
        }
        var lottie = {},
            standalone = "__[STANDALONE]__",
            animationData = "__[ANIMATIONDATA]__",
            renderer = "";
        function setLocation(e) {
            setLocationHref(e);
        }
        function searchAnimations() {
            !0 === standalone
                ? animationManager.searchAnimations(animationData, standalone, renderer)
                : animationManager.searchAnimations();
        }
        function setSubframeRendering(e) {
            setSubframeEnabled(e);
        }
        function setPrefix(e) {
            setIdPrefix(e);
        }
        function loadAnimation(e) {
            return (
                !0 === standalone && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e)
            );
        }
        function setQuality(e) {
            if ("string" == typeof e)
                switch (e) {
                    case "high":
                        setDefaultCurveSegments(200);
                        break;
                    default:
                    case "medium":
                        setDefaultCurveSegments(50);
                        break;
                    case "low":
                        setDefaultCurveSegments(10);
                }
            else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
            getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0);
        }
        function inBrowser() {
            return "u" > typeof navigator;
        }
        function installPlugin(e, t) {
            "expressions" === e && setExpressionsPlugin(t);
        }
        function getFactory(e) {
            switch (e) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix;
                default:
                    return null;
            }
        }
        function checkReady() {
            "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
        }
        function getQueryVariable(e) {
            for (var t = queryString.split("&"), n = 0; n < t.length; n += 1) {
                var r = t[n].split("=");
                if (decodeURIComponent(r[0]) == e) return decodeURIComponent(r[1]);
            }
            return null;
        }
        (lottie.play = animationManager.play),
            (lottie.pause = animationManager.pause),
            (lottie.setLocationHref = setLocation),
            (lottie.togglePause = animationManager.togglePause),
            (lottie.setSpeed = animationManager.setSpeed),
            (lottie.setDirection = animationManager.setDirection),
            (lottie.stop = animationManager.stop),
            (lottie.searchAnimations = searchAnimations),
            (lottie.registerAnimation = animationManager.registerAnimation),
            (lottie.loadAnimation = loadAnimation),
            (lottie.setSubframeRendering = setSubframeRendering),
            (lottie.resize = animationManager.resize),
            (lottie.goToAndStop = animationManager.goToAndStop),
            (lottie.destroy = animationManager.destroy),
            (lottie.setQuality = setQuality),
            (lottie.inBrowser = inBrowser),
            (lottie.installPlugin = installPlugin),
            (lottie.freeze = animationManager.freeze),
            (lottie.unfreeze = animationManager.unfreeze),
            (lottie.setVolume = animationManager.setVolume),
            (lottie.mute = animationManager.mute),
            (lottie.unmute = animationManager.unmute),
            (lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations),
            (lottie.useWebWorker = setWebWorker),
            (lottie.setIDPrefix = setPrefix),
            (lottie.__getFactory = getFactory),
            (lottie.version = "5.12.2");
        var queryString = "";
        if (standalone) {
            var scripts = document.getElementsByTagName("script"),
                index = scripts.length - 1,
                myScript = scripts[index] || { src: "" };
            (queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : ""),
                (renderer = getQueryVariable("renderer"));
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
            "object" === _typeof$3(exports) ||
                ("function" == typeof define && define.amd) ||
                (window.bodymovin = lottie);
        } catch (err) {}
        var ShapeModifiers = (function () {
            var e = {},
                t = {};
            function n(e, n, r) {
                return new t[e](n, r);
            }
            return (
                (e.registerModifier = function e(e, n) {
                    t[e] || (t[e] = n);
                }),
                (e.getModifier = n),
                e
            );
        })();
        function ShapeModifier() {}
        function TrimModifier() {}
        function PuckerAndBloatModifier() {}
        (ShapeModifier.prototype.initModifierProperties = function () {}),
            (ShapeModifier.prototype.addShapeToModifier = function () {}),
            (ShapeModifier.prototype.addShape = function (e) {
                if (!this.closed) {
                    e.sh.container.addDynamicProperty(e.sh);
                    var t = { shape: e.sh, data: e, localShapeCollection: shapeCollectionPool.newShapeCollection() };
                    this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated();
                }
            }),
            (ShapeModifier.prototype.init = function (e, t) {
                (this.shapes = []),
                    (this.elem = e),
                    this.initDynamicPropertyContainer(e),
                    this.initModifierProperties(e, t),
                    (this.frameId = initialDefaultFrame),
                    (this.closed = !1),
                    (this.k = !1),
                    this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
            }),
            (ShapeModifier.prototype.processKeys = function () {
                this.elem.globalData.frameId !== this.frameId &&
                    ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties());
            }),
            extendPrototype([DynamicPropertyContainer], ShapeModifier),
            extendPrototype([ShapeModifier], TrimModifier),
            (TrimModifier.prototype.initModifierProperties = function (e, t) {
                (this.s = PropertyFactory.getProp(e, t.s, 0, 0.01, this)),
                    (this.e = PropertyFactory.getProp(e, t.e, 0, 0.01, this)),
                    (this.o = PropertyFactory.getProp(e, t.o, 0, 0, this)),
                    (this.sValue = 0),
                    (this.eValue = 0),
                    (this.getValue = this.processKeys),
                    (this.m = t.m),
                    (this._isAnimated =
                        !!this.s.effectsSequence.length ||
                        !!this.e.effectsSequence.length ||
                        !!this.o.effectsSequence.length);
            }),
            (TrimModifier.prototype.addShapeToModifier = function (e) {
                e.pathsData = [];
            }),
            (TrimModifier.prototype.calculateShapeEdges = function (e, t, n, r, i) {
                var s,
                    a,
                    o,
                    l = [];
                t <= 1
                    ? l.push({ s: e, e: t })
                    : e >= 1
                      ? l.push({ s: e - 1, e: t - 1 })
                      : (l.push({ s: e, e: 1 }), l.push({ s: 0, e: t - 1 }));
                var u = [],
                    c = l.length;
                for (s = 0; s < c; s += 1)
                    (a = l[s]).e * i < r ||
                        a.s * i > r + n ||
                        ((o = a.s * i <= r ? 0 : (a.s * i - r) / n),
                        u.push([o, a.e * i >= r + n ? 1 : (a.e * i - r) / n]));
                return u.length || u.push([0, 0]), u;
            }),
            (TrimModifier.prototype.releasePathsData = function (e) {
                var t,
                    n = e.length;
                for (t = 0; t < n; t += 1) segmentsLengthPool.release(e[t]);
                return (e.length = 0), e;
            }),
            (TrimModifier.prototype.processShapes = function (e) {
                if (this._mdf || e) {
                    var t = (this.o.v % 360) / 360;
                    if (
                        (t < 0 && (t += 1),
                        (s = this.s.v > 1 ? 1 + t : this.s.v < 0 ? 0 + t : this.s.v + t) >
                            (a = this.e.v > 1 ? 1 + t : this.e.v < 0 ? 0 + t : this.e.v + t))
                    ) {
                        var n = s;
                        (s = a), (a = n);
                    }
                    (s = 1e-4 * Math.round(1e4 * s)),
                        (a = 1e-4 * Math.round(1e4 * a)),
                        (this.sValue = s),
                        (this.eValue = a);
                } else (s = this.sValue), (a = this.eValue);
                var r = this.shapes.length,
                    i = 0;
                if (a === s)
                    for (l = 0; l < r; l += 1)
                        this.shapes[l].localShapeCollection.releaseShapes(),
                            (this.shapes[l].shape._mdf = !0),
                            (this.shapes[l].shape.paths = this.shapes[l].localShapeCollection),
                            this._mdf && (this.shapes[l].pathsData.length = 0);
                else if ((1 !== a || 0 !== s) && (0 !== a || 1 !== s)) {
                    var s,
                        a,
                        o,
                        l,
                        u,
                        c,
                        d,
                        _,
                        f,
                        p,
                        h,
                        m,
                        E = [];
                    for (l = 0; l < r; l += 1)
                        if ((p = this.shapes[l]).shape._mdf || this._mdf || e || 2 === this.m) {
                            if (((c = (o = p.shape.paths)._length), (f = 0), !p.shape._mdf && p.pathsData.length))
                                f = p.totalShapeLength;
                            else {
                                for (u = 0, d = this.releasePathsData(p.pathsData); u < c; u += 1)
                                    (_ = bez.getSegmentsLength(o.shapes[u])), d.push(_), (f += _.totalLength);
                                (p.totalShapeLength = f), (p.pathsData = d);
                            }
                            (i += f), (p.shape._mdf = !0);
                        } else p.shape.paths = p.localShapeCollection;
                    var g = s,
                        A = a,
                        I = 0;
                    for (l = r - 1; l >= 0; l -= 1)
                        if ((p = this.shapes[l]).shape._mdf) {
                            for (
                                (h = p.localShapeCollection).releaseShapes(),
                                    2 === this.m && r > 1
                                        ? ((m = this.calculateShapeEdges(s, a, p.totalShapeLength, I, i)),
                                          (I += p.totalShapeLength))
                                        : (m = [[g, A]]),
                                    c = m.length,
                                    u = 0;
                                u < c;
                                u += 1
                            ) {
                                (g = m[u][0]),
                                    (A = m[u][1]),
                                    (E.length = 0),
                                    A <= 1
                                        ? E.push({ s: p.totalShapeLength * g, e: p.totalShapeLength * A })
                                        : g >= 1
                                          ? E.push({ s: p.totalShapeLength * (g - 1), e: p.totalShapeLength * (A - 1) })
                                          : (E.push({ s: p.totalShapeLength * g, e: p.totalShapeLength }),
                                            E.push({ s: 0, e: p.totalShapeLength * (A - 1) }));
                                var T = this.addShapes(p, E[0]);
                                if (E[0].s !== E[0].e) {
                                    if (E.length > 1)
                                        if (p.shape.paths.shapes[p.shape.paths._length - 1].c) {
                                            var S = T.pop();
                                            this.addPaths(T, h), (T = this.addShapes(p, E[1], S));
                                        } else this.addPaths(T, h), (T = this.addShapes(p, E[1]));
                                    this.addPaths(T, h);
                                }
                            }
                            p.shape.paths = h;
                        }
                } else if (this._mdf)
                    for (l = 0; l < r; l += 1) (this.shapes[l].pathsData.length = 0), (this.shapes[l].shape._mdf = !0);
            }),
            (TrimModifier.prototype.addPaths = function (e, t) {
                var n,
                    r = e.length;
                for (n = 0; n < r; n += 1) t.addShape(e[n]);
            }),
            (TrimModifier.prototype.addSegment = function (e, t, n, r, i, s, a) {
                i.setXYAt(t[0], t[1], "o", s),
                    i.setXYAt(n[0], n[1], "i", s + 1),
                    a && i.setXYAt(e[0], e[1], "v", s),
                    i.setXYAt(r[0], r[1], "v", s + 1);
            }),
            (TrimModifier.prototype.addSegmentFromArray = function (e, t, n, r) {
                t.setXYAt(e[1], e[5], "o", n),
                    t.setXYAt(e[2], e[6], "i", n + 1),
                    r && t.setXYAt(e[0], e[4], "v", n),
                    t.setXYAt(e[3], e[7], "v", n + 1);
            }),
            (TrimModifier.prototype.addShapes = function (e, t, n) {
                var r,
                    i,
                    s,
                    a,
                    o,
                    l,
                    u,
                    c,
                    d = e.pathsData,
                    _ = e.shape.paths.shapes,
                    f = e.shape.paths._length,
                    p = 0,
                    h = [],
                    m = !0;
                for (
                    n ? ((o = n._length), (c = n._length)) : ((n = shapePool.newElement()), (o = 0), (c = 0)),
                        h.push(n),
                        r = 0;
                    r < f;
                    r += 1
                ) {
                    for (i = 1, l = d[r].lengths, n.c = _[r].c, s = _[r].c ? l.length : l.length + 1; i < s; i += 1)
                        if (p + (a = l[i - 1]).addedLength < t.s) (p += a.addedLength), (n.c = !1);
                        else if (p > t.e) {
                            n.c = !1;
                            break;
                        } else
                            t.s <= p && t.e >= p + a.addedLength
                                ? (this.addSegment(_[r].v[i - 1], _[r].o[i - 1], _[r].i[i], _[r].v[i], n, o, m),
                                  (m = !1))
                                : ((u = bez.getNewSegment(
                                      _[r].v[i - 1],
                                      _[r].v[i],
                                      _[r].o[i - 1],
                                      _[r].i[i],
                                      (t.s - p) / a.addedLength,
                                      (t.e - p) / a.addedLength,
                                      l[i - 1],
                                  )),
                                  this.addSegmentFromArray(u, n, o, m),
                                  (m = !1),
                                  (n.c = !1)),
                                (p += a.addedLength),
                                (o += 1);
                    if (_[r].c && l.length) {
                        if (((a = l[i - 1]), p <= t.e)) {
                            var E = l[i - 1].addedLength;
                            t.s <= p && t.e >= p + E
                                ? (this.addSegment(_[r].v[i - 1], _[r].o[i - 1], _[r].i[0], _[r].v[0], n, o, m),
                                  (m = !1))
                                : ((u = bez.getNewSegment(
                                      _[r].v[i - 1],
                                      _[r].v[0],
                                      _[r].o[i - 1],
                                      _[r].i[0],
                                      (t.s - p) / E,
                                      (t.e - p) / E,
                                      l[i - 1],
                                  )),
                                  this.addSegmentFromArray(u, n, o, m),
                                  (m = !1),
                                  (n.c = !1));
                        } else n.c = !1;
                        (p += a.addedLength), (o += 1);
                    }
                    if (
                        (n._length &&
                            (n.setXYAt(n.v[c][0], n.v[c][1], "i", c),
                            n.setXYAt(n.v[n._length - 1][0], n.v[n._length - 1][1], "o", n._length - 1)),
                        p > t.e)
                    )
                        break;
                    r < f - 1 && ((n = shapePool.newElement()), (m = !0), h.push(n), (o = 0));
                }
                return h;
            }),
            extendPrototype([ShapeModifier], PuckerAndBloatModifier),
            (PuckerAndBloatModifier.prototype.initModifierProperties = function (e, t) {
                (this.getValue = this.processKeys),
                    (this.amount = PropertyFactory.getProp(e, t.a, 0, null, this)),
                    (this._isAnimated = !!this.amount.effectsSequence.length);
            }),
            (PuckerAndBloatModifier.prototype.processPath = function (e, t) {
                var n,
                    r,
                    i,
                    s,
                    a,
                    o,
                    l = t / 100,
                    u = [0, 0],
                    c = e._length,
                    d = 0;
                for (d = 0; d < c; d += 1) (u[0] += e.v[d][0]), (u[1] += e.v[d][1]);
                (u[0] /= c), (u[1] /= c);
                var _ = shapePool.newElement();
                for (d = 0, _.c = e.c; d < c; d += 1)
                    (n = e.v[d][0] + (u[0] - e.v[d][0]) * l),
                        (r = e.v[d][1] + (u[1] - e.v[d][1]) * l),
                        (i = e.o[d][0] + -((u[0] - e.o[d][0]) * l)),
                        (s = e.o[d][1] + -((u[1] - e.o[d][1]) * l)),
                        (a = e.i[d][0] + -((u[0] - e.i[d][0]) * l)),
                        (o = e.i[d][1] + -((u[1] - e.i[d][1]) * l)),
                        _.setTripleAt(n, r, i, s, a, o, d);
                return _;
            }),
            (PuckerAndBloatModifier.prototype.processShapes = function (e) {
                var t,
                    n,
                    r,
                    i,
                    s,
                    a,
                    o = this.shapes.length,
                    l = this.amount.v;
                if (0 !== l)
                    for (n = 0; n < o; n += 1) {
                        if (((a = (s = this.shapes[n]).localShapeCollection), !(!s.shape._mdf && !this._mdf && !e)))
                            for (
                                a.releaseShapes(),
                                    s.shape._mdf = !0,
                                    t = s.shape.paths.shapes,
                                    i = s.shape.paths._length,
                                    r = 0;
                                r < i;
                                r += 1
                            )
                                a.addShape(this.processPath(t[r], l));
                        s.shape.paths = s.localShapeCollection;
                    }
                this.dynamicProperties.length || (this._mdf = !1);
            });
        var TransformPropertyFactory = (function () {
            var e = [0, 0];
            function t(e) {
                this._addDynamicProperty(e), this.elem.addDynamicProperty(e), (this._isDirty = !0);
            }
            function n(e, t, n) {
                if (
                    ((this.elem = e),
                    (this.frameId = -1),
                    (this.propType = "transform"),
                    (this.data = t),
                    (this.v = new Matrix()),
                    (this.pre = new Matrix()),
                    (this.appliedTransformations = 0),
                    this.initDynamicPropertyContainer(n || e),
                    t.p && t.p.s
                        ? ((this.px = PropertyFactory.getProp(e, t.p.x, 0, 0, this)),
                          (this.py = PropertyFactory.getProp(e, t.p.y, 0, 0, this)),
                          t.p.z && (this.pz = PropertyFactory.getProp(e, t.p.z, 0, 0, this)))
                        : (this.p = PropertyFactory.getProp(e, t.p || { k: [0, 0, 0] }, 1, 0, this)),
                    t.rx)
                ) {
                    if (
                        ((this.rx = PropertyFactory.getProp(e, t.rx, 0, degToRads, this)),
                        (this.ry = PropertyFactory.getProp(e, t.ry, 0, degToRads, this)),
                        (this.rz = PropertyFactory.getProp(e, t.rz, 0, degToRads, this)),
                        t.or.k[0].ti)
                    ) {
                        var r,
                            i = t.or.k.length;
                        for (r = 0; r < i; r += 1) (t.or.k[r].to = null), (t.or.k[r].ti = null);
                    }
                    (this.or = PropertyFactory.getProp(e, t.or, 1, degToRads, this)), (this.or.sh = !0);
                } else this.r = PropertyFactory.getProp(e, t.r || { k: 0 }, 0, degToRads, this);
                t.sk &&
                    ((this.sk = PropertyFactory.getProp(e, t.sk, 0, degToRads, this)),
                    (this.sa = PropertyFactory.getProp(e, t.sa, 0, degToRads, this))),
                    (this.a = PropertyFactory.getProp(e, t.a || { k: [0, 0, 0] }, 1, 0, this)),
                    (this.s = PropertyFactory.getProp(e, t.s || { k: [100, 100, 100] }, 1, 0.01, this)),
                    t.o ? (this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, e)) : (this.o = { _mdf: !1, v: 1 }),
                    (this._isDirty = !0),
                    this.dynamicProperties.length || this.getValue(!0);
            }
            return (
                (n.prototype = {
                    applyToMatrix: function (e) {
                        var t = this._mdf;
                        this.iterateDynamicProperties(),
                            (this._mdf = this._mdf || t),
                            this.a && e.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                            this.s && e.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                            this.sk && e.skewFromAxis(-this.sk.v, this.sa.v),
                            this.r
                                ? e.rotate(-this.r.v)
                                : e
                                      .rotateZ(-this.rz.v)
                                      .rotateY(this.ry.v)
                                      .rotateX(this.rx.v)
                                      .rotateZ(-this.or.v[2])
                                      .rotateY(this.or.v[1])
                                      .rotateX(this.or.v[0]),
                            this.data.p.s
                                ? this.data.p.z
                                    ? e.translate(this.px.v, this.py.v, -this.pz.v)
                                    : e.translate(this.px.v, this.py.v, 0)
                                : e.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                    },
                    getValue: function (t) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (
                                (this._isDirty && (this.precalculateMatrix(), (this._isDirty = !1)),
                                this.iterateDynamicProperties(),
                                this._mdf || t)
                            ) {
                                var n;
                                if (
                                    (this.v.cloneFromProps(this.pre.props),
                                    this.appliedTransformations < 1 &&
                                        this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                                    this.appliedTransformations < 2 &&
                                        this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                                    this.sk &&
                                        this.appliedTransformations < 3 &&
                                        this.v.skewFromAxis(-this.sk.v, this.sa.v),
                                    this.r && this.appliedTransformations < 4
                                        ? this.v.rotate(-this.r.v)
                                        : !this.r &&
                                          this.appliedTransformations < 4 &&
                                          this.v
                                              .rotateZ(-this.rz.v)
                                              .rotateY(this.ry.v)
                                              .rotateX(this.rx.v)
                                              .rotateZ(-this.or.v[2])
                                              .rotateY(this.or.v[1])
                                              .rotateX(this.or.v[0]),
                                    this.autoOriented)
                                ) {
                                    if (
                                        ((n = this.elem.globalData.frameRate),
                                        this.p && this.p.keyframes && this.p.getValueAtTime)
                                    )
                                        this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t
                                            ? ((r = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / n, 0)),
                                              (i = this.p.getValueAtTime(this.p.keyframes[0].t / n, 0)))
                                            : this.p._caching.lastFrame + this.p.offsetTime >=
                                                this.p.keyframes[this.p.keyframes.length - 1].t
                                              ? ((r = this.p.getValueAtTime(
                                                    this.p.keyframes[this.p.keyframes.length - 1].t / n,
                                                    0,
                                                )),
                                                (i = this.p.getValueAtTime(
                                                    (this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / n,
                                                    0,
                                                )))
                                              : ((r = this.p.pv),
                                                (i = this.p.getValueAtTime(
                                                    (this.p._caching.lastFrame + this.p.offsetTime - 0.01) / n,
                                                    this.p.offsetTime,
                                                )));
                                    else if (
                                        this.px &&
                                        this.px.keyframes &&
                                        this.py.keyframes &&
                                        this.px.getValueAtTime &&
                                        this.py.getValueAtTime
                                    ) {
                                        var r = [],
                                            i = [],
                                            s = this.px,
                                            a = this.py;
                                        s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t
                                            ? ((r[0] = s.getValueAtTime((s.keyframes[0].t + 0.01) / n, 0)),
                                              (r[1] = a.getValueAtTime((a.keyframes[0].t + 0.01) / n, 0)),
                                              (i[0] = s.getValueAtTime(s.keyframes[0].t / n, 0)),
                                              (i[1] = a.getValueAtTime(a.keyframes[0].t / n, 0)))
                                            : s._caching.lastFrame + s.offsetTime >=
                                                s.keyframes[s.keyframes.length - 1].t
                                              ? ((r[0] = s.getValueAtTime(
                                                    s.keyframes[s.keyframes.length - 1].t / n,
                                                    0,
                                                )),
                                                (r[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / n, 0)),
                                                (i[0] = s.getValueAtTime(
                                                    (s.keyframes[s.keyframes.length - 1].t - 0.01) / n,
                                                    0,
                                                )),
                                                (i[1] = a.getValueAtTime(
                                                    (a.keyframes[a.keyframes.length - 1].t - 0.01) / n,
                                                    0,
                                                )))
                                              : ((r = [s.pv, a.pv]),
                                                (i[0] = s.getValueAtTime(
                                                    (s._caching.lastFrame + s.offsetTime - 0.01) / n,
                                                    s.offsetTime,
                                                )),
                                                (i[1] = a.getValueAtTime(
                                                    (a._caching.lastFrame + a.offsetTime - 0.01) / n,
                                                    a.offsetTime,
                                                )));
                                    } else r = i = e;
                                    this.v.rotate(-Math.atan2(r[1] - i[1], r[0] - i[0]));
                                }
                                this.data.p && this.data.p.s
                                    ? this.data.p.z
                                        ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                                        : this.v.translate(this.px.v, this.py.v, 0)
                                    : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                            }
                            this.frameId = this.elem.globalData.frameId;
                        }
                    },
                    precalculateMatrix: function () {
                        if (((this.appliedTransformations = 0), this.pre.reset(), !this.a.effectsSequence.length)) {
                            if (
                                (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                                (this.appliedTransformations = 1),
                                !this.s.effectsSequence.length)
                            ) {
                                if (
                                    (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                                    (this.appliedTransformations = 2),
                                    this.sk)
                                )
                                    if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                    else
                                        this.pre.skewFromAxis(-this.sk.v, this.sa.v), (this.appliedTransformations = 3);
                                this.r
                                    ? this.r.effectsSequence.length ||
                                      (this.pre.rotate(-this.r.v), (this.appliedTransformations = 4))
                                    : this.rz.effectsSequence.length ||
                                      this.ry.effectsSequence.length ||
                                      this.rx.effectsSequence.length ||
                                      this.or.effectsSequence.length ||
                                      (this.pre
                                          .rotateZ(-this.rz.v)
                                          .rotateY(this.ry.v)
                                          .rotateX(this.rx.v)
                                          .rotateZ(-this.or.v[2])
                                          .rotateY(this.or.v[1])
                                          .rotateX(this.or.v[0]),
                                      (this.appliedTransformations = 4));
                            }
                        }
                    },
                    autoOrient: function () {},
                }),
                extendPrototype([DynamicPropertyContainer], n),
                (n.prototype.addDynamicProperty = t),
                (n.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty),
                {
                    getTransformProperty: function (e, t, r) {
                        return new n(e, t, r);
                    },
                }
            );
        })();
        function RepeaterModifier() {}
        function RoundCornersModifier() {}
        function floatEqual(e, t) {
            return 1e5 * Math.abs(e - t) <= Math.min(Math.abs(e), Math.abs(t));
        }
        function floatZero(e) {
            return 1e-5 >= Math.abs(e);
        }
        function lerp(e, t, n) {
            return e * (1 - n) + t * n;
        }
        function lerpPoint(e, t, n) {
            return [lerp(e[0], t[0], n), lerp(e[1], t[1], n)];
        }
        function quadRoots(e, t, n) {
            if (0 === e) return [];
            var r = t * t - 4 * e * n;
            if (r < 0) return [];
            var i = -t / (2 * e);
            if (0 === r) return [i];
            var s = Math.sqrt(r) / (2 * e);
            return [i - s, i + s];
        }
        function polynomialCoefficients(e, t, n, r) {
            return [-e + 3 * t - 3 * n + r, 3 * e - 6 * t + 3 * n, -3 * e + 3 * t, e];
        }
        function singlePoint(e) {
            return new PolynomialBezier(e, e, e, e, !1);
        }
        function PolynomialBezier(e, t, n, r, i) {
            i && pointEqual(e, t) && (t = lerpPoint(e, r, 1 / 3)),
                i && pointEqual(n, r) && (n = lerpPoint(e, r, 2 / 3));
            var s = polynomialCoefficients(e[0], t[0], n[0], r[0]),
                a = polynomialCoefficients(e[1], t[1], n[1], r[1]);
            (this.a = [s[0], a[0]]),
                (this.b = [s[1], a[1]]),
                (this.c = [s[2], a[2]]),
                (this.d = [s[3], a[3]]),
                (this.points = [e, t, n, r]);
        }
        function extrema(e, t) {
            var n = e.points[0][t],
                r = e.points[e.points.length - 1][t];
            if (n > r) {
                var i = r;
                (r = n), (n = i);
            }
            for (var s = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), a = 0; a < s.length; a += 1)
                if (s[a] > 0 && s[a] < 1) {
                    var o = e.point(s[a])[t];
                    o < n ? (n = o) : o > r && (r = o);
                }
            return { min: n, max: r };
        }
        function intersectData(e, t, n) {
            var r = e.boundingBox();
            return { cx: r.cx, cy: r.cy, width: r.width, height: r.height, bez: e, t: (t + n) / 2, t1: t, t2: n };
        }
        function splitData(e) {
            var t = e.bez.split(0.5);
            return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)];
        }
        function boxIntersect(e, t) {
            return 2 * Math.abs(e.cx - t.cx) < e.width + t.width && 2 * Math.abs(e.cy - t.cy) < e.height + t.height;
        }
        function intersectsImpl(e, t, n, r, i, s) {
            if (boxIntersect(e, t)) {
                if (n >= s || (e.width <= r && e.height <= r && t.width <= r && t.height <= r))
                    return void i.push([e.t, t.t]);
                var a = splitData(e),
                    o = splitData(t);
                intersectsImpl(a[0], o[0], n + 1, r, i, s),
                    intersectsImpl(a[0], o[1], n + 1, r, i, s),
                    intersectsImpl(a[1], o[0], n + 1, r, i, s),
                    intersectsImpl(a[1], o[1], n + 1, r, i, s);
            }
        }
        function crossProduct(e, t) {
            return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
        }
        function lineIntersection(e, t, n, r) {
            var i = [e[0], e[1], 1],
                s = [t[0], t[1], 1],
                a = [n[0], n[1], 1],
                o = [r[0], r[1], 1],
                l = crossProduct(crossProduct(i, s), crossProduct(a, o));
            return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]];
        }
        function polarOffset(e, t, n) {
            return [e[0] + Math.cos(t) * n, e[1] - Math.sin(t) * n];
        }
        function pointDistance(e, t) {
            return Math.hypot(e[0] - t[0], e[1] - t[1]);
        }
        function pointEqual(e, t) {
            return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1]);
        }
        function ZigZagModifier() {}
        function setPoint(e, t, n, r, i, s, a) {
            var o = n - Math.PI / 2,
                l = n + Math.PI / 2,
                u = t[0] + Math.cos(n) * r * i,
                c = t[1] - Math.sin(n) * r * i;
            e.setTripleAt(
                u,
                c,
                u + Math.cos(o) * s,
                c - Math.sin(o) * s,
                u + Math.cos(l) * a,
                c - Math.sin(l) * a,
                e.length(),
            );
        }
        function getPerpendicularVector(e, t) {
            var n = [t[0] - e[0], t[1] - e[1]],
                r = -(0.5 * Math.PI);
            return [Math.cos(r) * n[0] - Math.sin(r) * n[1], Math.sin(r) * n[0] + Math.cos(r) * n[1]];
        }
        function getProjectingAngle(e, t) {
            var n = 0 === t ? e.length() - 1 : t - 1,
                r = (t + 1) % e.length(),
                i = getPerpendicularVector(e.v[n], e.v[r]);
            return Math.atan2(0, 1) - Math.atan2(i[1], i[0]);
        }
        function zigZagCorner(e, t, n, r, i, s, a) {
            var o = getProjectingAngle(t, n),
                l = t.v[n % t._length],
                u = t.v[0 === n ? t._length - 1 : n - 1],
                c = t.v[(n + 1) % t._length],
                d = 2 === s ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0,
                _ = 2 === s ? Math.sqrt(Math.pow(l[0] - c[0], 2) + Math.pow(l[1] - c[1], 2)) : 0;
            setPoint(e, t.v[n % t._length], o, a, r, _ / ((i + 1) * 2), d / ((i + 1) * 2), s);
        }
        function zigZagSegment(e, t, n, r, i, s) {
            for (var a = 0; a < r; a += 1) {
                var o = (a + 1) / (r + 1),
                    l =
                        2 === i
                            ? Math.sqrt(
                                  Math.pow(t.points[3][0] - t.points[0][0], 2) +
                                      Math.pow(t.points[3][1] - t.points[0][1], 2),
                              )
                            : 0,
                    u = t.normalAngle(o);
                setPoint(e, t.point(o), u, s, n, l / ((r + 1) * 2), l / ((r + 1) * 2), i), (s = -s);
            }
            return s;
        }
        function linearOffset(e, t, n) {
            var r = Math.atan2(t[0] - e[0], t[1] - e[1]);
            return [polarOffset(e, r, n), polarOffset(t, r, n)];
        }
        function offsetSegment(e, t) {
            (n = (o = linearOffset(e.points[0], e.points[1], t))[0]),
                (r = o[1]),
                (i = (o = linearOffset(e.points[1], e.points[2], t))[0]),
                (s = o[1]),
                (a = (o = linearOffset(e.points[2], e.points[3], t))[0]);
            var n,
                r,
                i,
                s,
                a,
                o,
                l = o[1],
                u = lineIntersection(n, r, i, s);
            null === u && (u = r);
            var c = lineIntersection(a, l, i, s);
            return null === c && (c = a), new PolynomialBezier(n, u, c, l);
        }
        function joinLines(e, t, n, r, i) {
            var s = t.points[3],
                a = n.points[0];
            if (3 === r || pointEqual(s, a)) return s;
            if (2 === r) {
                var o = -t.tangentAngle(1),
                    l = -n.tangentAngle(0) + Math.PI,
                    u = lineIntersection(
                        s,
                        polarOffset(s, o + Math.PI / 2, 100),
                        a,
                        polarOffset(a, o + Math.PI / 2, 100),
                    ),
                    c = u ? pointDistance(u, s) : pointDistance(s, a) / 2,
                    d = polarOffset(s, o, 2 * c * roundCorner);
                return (
                    e.setXYAt(d[0], d[1], "o", e.length() - 1),
                    (d = polarOffset(a, l, 2 * c * roundCorner)),
                    e.setTripleAt(a[0], a[1], a[0], a[1], d[0], d[1], e.length()),
                    a
                );
            }
            var _ = pointEqual(s, t.points[2]) ? t.points[0] : t.points[2],
                f = pointEqual(a, n.points[1]) ? n.points[3] : n.points[1],
                p = lineIntersection(_, s, a, f);
            return p && pointDistance(p, s) < i
                ? (e.setTripleAt(p[0], p[1], p[0], p[1], p[0], p[1], e.length()), p)
                : s;
        }
        function getIntersection(e, t) {
            var n = e.intersections(t);
            return (n.length && floatEqual(n[0][0], 1) && n.shift(), n.length) ? n[0] : null;
        }
        function pruneSegmentIntersection(e, t) {
            var n = e.slice(),
                r = t.slice(),
                i = getIntersection(e[e.length - 1], t[0]);
            return (i && ((n[e.length - 1] = e[e.length - 1].split(i[0])[0]), (r[0] = t[0].split(i[1])[1])),
            e.length > 1 && t.length > 1 && (i = getIntersection(e[0], t[t.length - 1])))
                ? [[e[0].split(i[0])[0]], [t[t.length - 1].split(i[1])[1]]]
                : [n, r];
        }
        function pruneIntersections(e) {
            for (var t, n = 1; n < e.length; n += 1)
                (t = pruneSegmentIntersection(e[n - 1], e[n])), (e[n - 1] = t[0]), (e[n] = t[1]);
            return (
                e.length > 1 &&
                    ((t = pruneSegmentIntersection(e[e.length - 1], e[0])), (e[e.length - 1] = t[0]), (e[0] = t[1])),
                e
            );
        }
        function offsetSegmentSplit(e, t) {
            var n,
                r,
                i,
                s,
                a = e.inflectionPoints();
            if (0 === a.length) return [offsetSegment(e, t)];
            if (1 === a.length || floatEqual(a[1], 1))
                return (n = (i = e.split(a[0]))[0]), (r = i[1]), [offsetSegment(n, t), offsetSegment(r, t)];
            n = (i = e.split(a[0]))[0];
            var o = (a[1] - a[0]) / (1 - a[0]);
            return (
                (s = (i = i[1].split(o))[0]),
                (r = i[1]),
                [offsetSegment(n, t), offsetSegment(s, t), offsetSegment(r, t)]
            );
        }
        function OffsetPathModifier() {}
        function getFontProperties(e) {
            for (
                var t = e.fStyle ? e.fStyle.split(" ") : [], n = "normal", r = "normal", i = t.length, s = 0;
                s < i;
                s += 1
            )
                switch (t[s].toLowerCase()) {
                    case "italic":
                        r = "italic";
                        break;
                    case "bold":
                        n = "700";
                        break;
                    case "black":
                        n = "900";
                        break;
                    case "medium":
                        n = "500";
                        break;
                    case "regular":
                    case "normal":
                        n = "400";
                        break;
                    case "light":
                    case "thin":
                        n = "200";
                }
            return { style: r, weight: e.fWeight || n };
        }
        extendPrototype([ShapeModifier], RepeaterModifier),
            (RepeaterModifier.prototype.initModifierProperties = function (e, t) {
                (this.getValue = this.processKeys),
                    (this.c = PropertyFactory.getProp(e, t.c, 0, null, this)),
                    (this.o = PropertyFactory.getProp(e, t.o, 0, null, this)),
                    (this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this)),
                    (this.so = PropertyFactory.getProp(e, t.tr.so, 0, 0.01, this)),
                    (this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, 0.01, this)),
                    (this.data = t),
                    this.dynamicProperties.length || this.getValue(!0),
                    (this._isAnimated = !!this.dynamicProperties.length),
                    (this.pMatrix = new Matrix()),
                    (this.rMatrix = new Matrix()),
                    (this.sMatrix = new Matrix()),
                    (this.tMatrix = new Matrix()),
                    (this.matrix = new Matrix());
            }),
            (RepeaterModifier.prototype.applyTransforms = function (e, t, n, r, i, s) {
                var a = s ? -1 : 1,
                    o = r.s.v[0] + (1 - r.s.v[0]) * (1 - i),
                    l = r.s.v[1] + (1 - r.s.v[1]) * (1 - i);
                e.translate(r.p.v[0] * a * i, r.p.v[1] * a * i, r.p.v[2]),
                    t.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
                    t.rotate(-r.r.v * a * i),
                    t.translate(r.a.v[0], r.a.v[1], r.a.v[2]),
                    n.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
                    n.scale(s ? 1 / o : o, s ? 1 / l : l),
                    n.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
            }),
            (RepeaterModifier.prototype.init = function (e, t, n, r) {
                for (
                    this.elem = e,
                        this.arr = t,
                        this.pos = n,
                        this.elemsData = r,
                        this._currentCopies = 0,
                        this._elements = [],
                        this._groups = [],
                        this.frameId = -1,
                        this.initDynamicPropertyContainer(e),
                        this.initModifierProperties(e, t[n]);
                    n > 0;
                )
                    (n -= 1), this._elements.unshift(t[n]);
                this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
            }),
            (RepeaterModifier.prototype.resetElements = function (e) {
                var t,
                    n = e.length;
                for (t = 0; t < n; t += 1) (e[t]._processed = !1), "gr" === e[t].ty && this.resetElements(e[t].it);
            }),
            (RepeaterModifier.prototype.cloneElements = function (e) {
                var t = JSON.parse(JSON.stringify(e));
                return this.resetElements(t), t;
            }),
            (RepeaterModifier.prototype.changeGroupRender = function (e, t) {
                var n,
                    r = e.length;
                for (n = 0; n < r; n += 1) (e[n]._render = t), "gr" === e[n].ty && this.changeGroupRender(e[n].it, t);
            }),
            (RepeaterModifier.prototype.processShapes = function (e) {
                var t = !1;
                if (this._mdf || e) {
                    var n,
                        r,
                        i,
                        s,
                        a,
                        o,
                        l,
                        u,
                        c = Math.ceil(this.c.v);
                    if (this._groups.length < c) {
                        for (; this._groups.length < c; ) {
                            var d = { it: this.cloneElements(this._elements), ty: "gr" };
                            d.it.push({
                                a: { a: 0, ix: 1, k: [0, 0] },
                                nm: "Transform",
                                o: { a: 0, ix: 7, k: 100 },
                                p: { a: 0, ix: 2, k: [0, 0] },
                                r: {
                                    a: 1,
                                    ix: 6,
                                    k: [
                                        { s: 0, e: 0, t: 0 },
                                        { s: 0, e: 0, t: 1 },
                                    ],
                                },
                                s: { a: 0, ix: 3, k: [100, 100] },
                                sa: { a: 0, ix: 5, k: 0 },
                                sk: { a: 0, ix: 4, k: 0 },
                                ty: "tr",
                            }),
                                this.arr.splice(0, 0, d),
                                this._groups.splice(0, 0, d),
                                (this._currentCopies += 1);
                        }
                        this.elem.reloadShapes(), (t = !0);
                    }
                    for (i = 0, a = 0; i <= this._groups.length - 1; i += 1) {
                        if (
                            ((o = a < c),
                            (this._groups[i]._render = o),
                            this.changeGroupRender(this._groups[i].it, o),
                            !o)
                        ) {
                            var _ = this.elemsData[i].it,
                                f = _[_.length - 1];
                            0 !== f.transform.op.v
                                ? ((f.transform.op._mdf = !0), (f.transform.op.v = 0))
                                : (f.transform.op._mdf = !1);
                        }
                        a += 1;
                    }
                    this._currentCopies = c;
                    var p = this.o.v,
                        h = p % 1,
                        m = p > 0 ? Math.floor(p) : Math.ceil(p),
                        E = this.pMatrix.props,
                        g = this.rMatrix.props,
                        A = this.sMatrix.props;
                    this.pMatrix.reset(),
                        this.rMatrix.reset(),
                        this.sMatrix.reset(),
                        this.tMatrix.reset(),
                        this.matrix.reset();
                    var I = 0;
                    if (p > 0) {
                        for (; I < m; )
                            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), (I += 1);
                        h && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, h, !1), (I += h));
                    } else if (p < 0) {
                        for (; I > m; )
                            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), (I -= 1);
                        h &&
                            (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -h, !0), (I -= h));
                    }
                    for (
                        i = 1 === this.data.m ? 0 : this._currentCopies - 1,
                            s = 1 === this.data.m ? 1 : -1,
                            a = this._currentCopies;
                        a;
                    ) {
                        if (
                            ((u = (r = (n = this.elemsData[i].it)[n.length - 1].transform.mProps.v.props).length),
                            (n[n.length - 1].transform.mProps._mdf = !0),
                            (n[n.length - 1].transform.op._mdf = !0),
                            (n[n.length - 1].transform.op.v =
                                1 === this._currentCopies
                                    ? this.so.v
                                    : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1))),
                            0 !== I)
                        ) {
                            for (
                                ((0 !== i && 1 === s) || (i !== this._currentCopies - 1 && -1 === s)) &&
                                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                                    this.matrix.transform(
                                        g[0],
                                        g[1],
                                        g[2],
                                        g[3],
                                        g[4],
                                        g[5],
                                        g[6],
                                        g[7],
                                        g[8],
                                        g[9],
                                        g[10],
                                        g[11],
                                        g[12],
                                        g[13],
                                        g[14],
                                        g[15],
                                    ),
                                    this.matrix.transform(
                                        A[0],
                                        A[1],
                                        A[2],
                                        A[3],
                                        A[4],
                                        A[5],
                                        A[6],
                                        A[7],
                                        A[8],
                                        A[9],
                                        A[10],
                                        A[11],
                                        A[12],
                                        A[13],
                                        A[14],
                                        A[15],
                                    ),
                                    this.matrix.transform(
                                        E[0],
                                        E[1],
                                        E[2],
                                        E[3],
                                        E[4],
                                        E[5],
                                        E[6],
                                        E[7],
                                        E[8],
                                        E[9],
                                        E[10],
                                        E[11],
                                        E[12],
                                        E[13],
                                        E[14],
                                        E[15],
                                    ),
                                    l = 0;
                                l < u;
                                l += 1
                            )
                                r[l] = this.matrix.props[l];
                            this.matrix.reset();
                        } else for (this.matrix.reset(), l = 0; l < u; l += 1) r[l] = this.matrix.props[l];
                        (I += 1), (a -= 1), (i += s);
                    }
                } else
                    for (a = this._currentCopies, i = 0, s = 1; a; )
                        (r = (n = this.elemsData[i].it)[n.length - 1].transform.mProps.v.props),
                            (n[n.length - 1].transform.mProps._mdf = !1),
                            (n[n.length - 1].transform.op._mdf = !1),
                            (a -= 1),
                            (i += s);
                return t;
            }),
            (RepeaterModifier.prototype.addShape = function () {}),
            extendPrototype([ShapeModifier], RoundCornersModifier),
            (RoundCornersModifier.prototype.initModifierProperties = function (e, t) {
                (this.getValue = this.processKeys),
                    (this.rd = PropertyFactory.getProp(e, t.r, 0, null, this)),
                    (this._isAnimated = !!this.rd.effectsSequence.length);
            }),
            (RoundCornersModifier.prototype.processPath = function (e, t) {
                var n,
                    r,
                    i,
                    s,
                    a,
                    o,
                    l,
                    u,
                    c,
                    d,
                    _,
                    f,
                    p,
                    h = shapePool.newElement();
                h.c = e.c;
                var m = e._length,
                    E = 0;
                for (n = 0; n < m; n += 1)
                    (r = e.v[n]),
                        (s = e.o[n]),
                        (i = e.i[n]),
                        r[0] === s[0] && r[1] === s[1] && r[0] === i[0] && r[1] === i[1]
                            ? (0 !== n && n !== m - 1) || e.c
                                ? ((a = 0 === n ? e.v[m - 1] : e.v[n - 1]),
                                  (l = (o = Math.sqrt(Math.pow(r[0] - a[0], 2) + Math.pow(r[1] - a[1], 2)))
                                      ? Math.min(o / 2, t) / o
                                      : 0),
                                  (u = f = r[0] + (a[0] - r[0]) * l),
                                  (c = p = r[1] - (r[1] - a[1]) * l),
                                  (d = u - (u - r[0]) * roundCorner),
                                  (_ = c - (c - r[1]) * roundCorner),
                                  h.setTripleAt(u, c, d, _, f, p, E),
                                  (E += 1),
                                  (a = n === m - 1 ? e.v[0] : e.v[n + 1]),
                                  (l = (o = Math.sqrt(Math.pow(r[0] - a[0], 2) + Math.pow(r[1] - a[1], 2)))
                                      ? Math.min(o / 2, t) / o
                                      : 0),
                                  (u = d = r[0] + (a[0] - r[0]) * l),
                                  (c = _ = r[1] + (a[1] - r[1]) * l),
                                  (f = u - (u - r[0]) * roundCorner),
                                  (p = c - (c - r[1]) * roundCorner),
                                  h.setTripleAt(u, c, d, _, f, p, E))
                                : h.setTripleAt(r[0], r[1], s[0], s[1], i[0], i[1], E)
                            : h.setTripleAt(e.v[n][0], e.v[n][1], e.o[n][0], e.o[n][1], e.i[n][0], e.i[n][1], E),
                        (E += 1);
                return h;
            }),
            (RoundCornersModifier.prototype.processShapes = function (e) {
                var t,
                    n,
                    r,
                    i,
                    s,
                    a,
                    o = this.shapes.length,
                    l = this.rd.v;
                if (0 !== l)
                    for (n = 0; n < o; n += 1) {
                        if (((a = (s = this.shapes[n]).localShapeCollection), !(!s.shape._mdf && !this._mdf && !e)))
                            for (
                                a.releaseShapes(),
                                    s.shape._mdf = !0,
                                    t = s.shape.paths.shapes,
                                    i = s.shape.paths._length,
                                    r = 0;
                                r < i;
                                r += 1
                            )
                                a.addShape(this.processPath(t[r], l));
                        s.shape.paths = s.localShapeCollection;
                    }
                this.dynamicProperties.length || (this._mdf = !1);
            }),
            (PolynomialBezier.prototype.point = function (e) {
                return [
                    ((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0],
                    ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1],
                ];
            }),
            (PolynomialBezier.prototype.derivative = function (e) {
                return [
                    (3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0],
                    (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1],
                ];
            }),
            (PolynomialBezier.prototype.tangentAngle = function (e) {
                var t = this.derivative(e);
                return Math.atan2(t[1], t[0]);
            }),
            (PolynomialBezier.prototype.normalAngle = function (e) {
                var t = this.derivative(e);
                return Math.atan2(t[0], t[1]);
            }),
            (PolynomialBezier.prototype.inflectionPoints = function () {
                var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                if (floatZero(e)) return [];
                var t = (-0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1])) / e,
                    n = t * t - ((1 / 3) * (this.b[1] * this.c[0] - this.b[0] * this.c[1])) / e;
                if (n < 0) return [];
                var r = Math.sqrt(n);
                return floatZero(r)
                    ? r > 0 && r < 1
                        ? [t]
                        : []
                    : [t - r, t + r].filter(function (e) {
                          return e > 0 && e < 1;
                      });
            }),
            (PolynomialBezier.prototype.split = function (e) {
                if (e <= 0) return [singlePoint(this.points[0]), this];
                if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
                var t = lerpPoint(this.points[0], this.points[1], e),
                    n = lerpPoint(this.points[1], this.points[2], e),
                    r = lerpPoint(this.points[2], this.points[3], e),
                    i = lerpPoint(t, n, e),
                    s = lerpPoint(n, r, e),
                    a = lerpPoint(i, s, e);
                return [
                    new PolynomialBezier(this.points[0], t, i, a, !0),
                    new PolynomialBezier(a, s, r, this.points[3], !0),
                ];
            }),
            (PolynomialBezier.prototype.bounds = function () {
                return { x: extrema(this, 0), y: extrema(this, 1) };
            }),
            (PolynomialBezier.prototype.boundingBox = function () {
                var e = this.bounds();
                return {
                    left: e.x.min,
                    right: e.x.max,
                    top: e.y.min,
                    bottom: e.y.max,
                    width: e.x.max - e.x.min,
                    height: e.y.max - e.y.min,
                    cx: (e.x.max + e.x.min) / 2,
                    cy: (e.y.max + e.y.min) / 2,
                };
            }),
            (PolynomialBezier.prototype.intersections = function (e, t, n) {
                void 0 === t && (t = 2), void 0 === n && (n = 7);
                var r = [];
                return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, r, n), r;
            }),
            (PolynomialBezier.shapeSegment = function (e, t) {
                var n = (t + 1) % e.length();
                return new PolynomialBezier(e.v[t], e.o[t], e.i[n], e.v[n], !0);
            }),
            (PolynomialBezier.shapeSegmentInverted = function (e, t) {
                var n = (t + 1) % e.length();
                return new PolynomialBezier(e.v[n], e.i[n], e.o[t], e.v[t], !0);
            }),
            extendPrototype([ShapeModifier], ZigZagModifier),
            (ZigZagModifier.prototype.initModifierProperties = function (e, t) {
                (this.getValue = this.processKeys),
                    (this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this)),
                    (this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this)),
                    (this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this)),
                    (this._isAnimated =
                        0 !== this.amplitude.effectsSequence.length ||
                        0 !== this.frequency.effectsSequence.length ||
                        0 !== this.pointsType.effectsSequence.length);
            }),
            (ZigZagModifier.prototype.processPath = function (e, t, n, r) {
                var i = e._length,
                    s = shapePool.newElement();
                if (((s.c = e.c), e.c || (i -= 1), 0 === i)) return s;
                var a = -1,
                    o = PolynomialBezier.shapeSegment(e, 0);
                zigZagCorner(s, e, 0, t, n, r, a);
                for (var l = 0; l < i; l += 1)
                    (a = zigZagSegment(s, o, t, n, r, -a)),
                        (o = l !== i - 1 || e.c ? PolynomialBezier.shapeSegment(e, (l + 1) % i) : null),
                        zigZagCorner(s, e, l + 1, t, n, r, a);
                return s;
            }),
            (ZigZagModifier.prototype.processShapes = function (e) {
                var t,
                    n,
                    r,
                    i,
                    s,
                    a,
                    o = this.shapes.length,
                    l = this.amplitude.v,
                    u = Math.max(0, Math.round(this.frequency.v)),
                    c = this.pointsType.v;
                if (0 !== l)
                    for (n = 0; n < o; n += 1) {
                        if (((a = (s = this.shapes[n]).localShapeCollection), !(!s.shape._mdf && !this._mdf && !e)))
                            for (
                                a.releaseShapes(),
                                    s.shape._mdf = !0,
                                    t = s.shape.paths.shapes,
                                    i = s.shape.paths._length,
                                    r = 0;
                                r < i;
                                r += 1
                            )
                                a.addShape(this.processPath(t[r], l, u, c));
                        s.shape.paths = s.localShapeCollection;
                    }
                this.dynamicProperties.length || (this._mdf = !1);
            }),
            extendPrototype([ShapeModifier], OffsetPathModifier),
            (OffsetPathModifier.prototype.initModifierProperties = function (e, t) {
                (this.getValue = this.processKeys),
                    (this.amount = PropertyFactory.getProp(e, t.a, 0, null, this)),
                    (this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this)),
                    (this.lineJoin = t.lj),
                    (this._isAnimated = 0 !== this.amount.effectsSequence.length);
            }),
            (OffsetPathModifier.prototype.processPath = function (e, t, n, r) {
                var i,
                    s,
                    a,
                    o = shapePool.newElement();
                o.c = e.c;
                var l = e.length();
                e.c || (l -= 1);
                var u = [];
                for (i = 0; i < l; i += 1) (a = PolynomialBezier.shapeSegment(e, i)), u.push(offsetSegmentSplit(a, t));
                if (!e.c)
                    for (i = l - 1; i >= 0; i -= 1)
                        (a = PolynomialBezier.shapeSegmentInverted(e, i)), u.push(offsetSegmentSplit(a, t));
                u = pruneIntersections(u);
                var c = null,
                    d = null;
                for (i = 0; i < u.length; i += 1) {
                    var _ = u[i];
                    for (d && (c = joinLines(o, d, _[0], n, r)), d = _[_.length - 1], s = 0; s < _.length; s += 1)
                        (a = _[s]),
                            c && pointEqual(a.points[0], c)
                                ? o.setXYAt(a.points[1][0], a.points[1][1], "o", o.length() - 1)
                                : o.setTripleAt(
                                      a.points[0][0],
                                      a.points[0][1],
                                      a.points[1][0],
                                      a.points[1][1],
                                      a.points[0][0],
                                      a.points[0][1],
                                      o.length(),
                                  ),
                            o.setTripleAt(
                                a.points[3][0],
                                a.points[3][1],
                                a.points[3][0],
                                a.points[3][1],
                                a.points[2][0],
                                a.points[2][1],
                                o.length(),
                            ),
                            (c = a.points[3]);
                }
                return u.length && joinLines(o, d, u[0][0], n, r), o;
            }),
            (OffsetPathModifier.prototype.processShapes = function (e) {
                var t,
                    n,
                    r,
                    i,
                    s,
                    a,
                    o = this.shapes.length,
                    l = this.amount.v,
                    u = this.miterLimit.v,
                    c = this.lineJoin;
                if (0 !== l)
                    for (n = 0; n < o; n += 1) {
                        if (((a = (s = this.shapes[n]).localShapeCollection), !(!s.shape._mdf && !this._mdf && !e)))
                            for (
                                a.releaseShapes(),
                                    s.shape._mdf = !0,
                                    t = s.shape.paths.shapes,
                                    i = s.shape.paths._length,
                                    r = 0;
                                r < i;
                                r += 1
                            )
                                a.addShape(this.processPath(t[r], l, c, u));
                        s.shape.paths = s.localShapeCollection;
                    }
                this.dynamicProperties.length || (this._mdf = !1);
            });
        var FontManager = (function () {
            var e = 5e3,
                t = { w: 0, size: 0, shapes: [], data: { shapes: [] } },
                n = [];
            n = n.concat([
                2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374,
                2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403,
            ]);
            var r = 127988,
                i = 917631,
                s = 917601,
                a = 917626,
                o = 65039,
                l = 8205,
                u = 127462,
                c = 127487,
                d = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
            function _(e) {
                var t,
                    n = e.split(","),
                    r = n.length,
                    i = [];
                for (t = 0; t < r; t += 1) "sans-serif" !== n[t] && "monospace" !== n[t] && i.push(n[t]);
                return i.join(",");
            }
            function f(e, t) {
                var n = createTag("span");
                n.setAttribute("aria-hidden", !0), (n.style.fontFamily = t);
                var r = createTag("span");
                (r.innerText = "giItT1WQy@!-/#"),
                    (n.style.position = "absolute"),
                    (n.style.left = "-10000px"),
                    (n.style.top = "-10000px"),
                    (n.style.fontSize = "300px"),
                    (n.style.fontVariant = "normal"),
                    (n.style.fontStyle = "normal"),
                    (n.style.fontWeight = "normal"),
                    (n.style.letterSpacing = "0"),
                    n.appendChild(r),
                    document.body.appendChild(n);
                var i = r.offsetWidth;
                return (r.style.fontFamily = _(e) + ", " + t), { node: r, w: i, parent: n };
            }
            function p() {
                var t,
                    n,
                    r,
                    i = this.fonts.length,
                    s = i;
                for (t = 0; t < i; t += 1)
                    this.fonts[t].loaded
                        ? (s -= 1)
                        : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin
                          ? (this.fonts[t].loaded = !0)
                          : ((n = this.fonts[t].monoCase.node),
                            (r = this.fonts[t].monoCase.w),
                            n.offsetWidth !== r
                                ? ((s -= 1), (this.fonts[t].loaded = !0))
                                : ((n = this.fonts[t].sansCase.node),
                                  (r = this.fonts[t].sansCase.w),
                                  n.offsetWidth !== r && ((s -= 1), (this.fonts[t].loaded = !0))),
                            this.fonts[t].loaded &&
                                (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),
                                this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                0 !== s && Date.now() - this.initTime < e
                    ? setTimeout(this.checkLoadedFontsBinded, 20)
                    : setTimeout(this.setIsLoadedBinded, 10);
            }
            function h(e, t) {
                var n,
                    r = document.body && t ? "svg" : "canvas",
                    i = getFontProperties(e);
                if ("svg" === r) {
                    var s = createNS("text");
                    (s.style.fontSize = "100px"),
                        s.setAttribute("font-family", e.fFamily),
                        s.setAttribute("font-style", i.style),
                        s.setAttribute("font-weight", i.weight),
                        (s.textContent = "1"),
                        e.fClass
                            ? ((s.style.fontFamily = "inherit"), s.setAttribute("class", e.fClass))
                            : (s.style.fontFamily = e.fFamily),
                        t.appendChild(s),
                        (n = s);
                } else {
                    var a = new OffscreenCanvas(500, 500).getContext("2d");
                    (a.font = i.style + " " + i.weight + " 100px " + e.fFamily), (n = a);
                }
                return {
                    measureText: function (e) {
                        return "svg" === r ? ((n.textContent = e), n.getComputedTextLength()) : n.measureText(e).width;
                    },
                };
            }
            function m(e, t) {
                if (!e) {
                    this.isLoaded = !0;
                    return;
                }
                if (this.chars) {
                    (this.isLoaded = !0), (this.fonts = e.list);
                    return;
                }
                if (!document.body) {
                    (this.isLoaded = !0),
                        e.list.forEach(function (e) {
                            (e.helper = h(e)), (e.cache = {});
                        }),
                        (this.fonts = e.list);
                    return;
                }
                var n = e.list,
                    r = n.length,
                    i = r;
                for (s = 0; s < r; s += 1) {
                    var s,
                        a,
                        o,
                        l = !0;
                    if (
                        ((n[s].loaded = !1),
                        (n[s].monoCase = f(n[s].fFamily, "monospace")),
                        (n[s].sansCase = f(n[s].fFamily, "sans-serif")),
                        n[s].fPath)
                    ) {
                        if ("p" === n[s].fOrigin || 3 === n[s].origin) {
                            if (
                                ((a = document.querySelectorAll(
                                    'style[f-forigin="p"][f-family="' +
                                        n[s].fFamily +
                                        '"], style[f-origin="3"][f-family="' +
                                        n[s].fFamily +
                                        '"]',
                                )).length > 0 && (l = !1),
                                l)
                            ) {
                                var u = createTag("style");
                                u.setAttribute("f-forigin", n[s].fOrigin),
                                    u.setAttribute("f-origin", n[s].origin),
                                    u.setAttribute("f-family", n[s].fFamily),
                                    (u.type = "text/css"),
                                    (u.innerText =
                                        "@font-face {font-family: " +
                                        n[s].fFamily +
                                        "; font-style: normal; src: url('" +
                                        n[s].fPath +
                                        "');}"),
                                    t.appendChild(u);
                            }
                        } else if ("g" === n[s].fOrigin || 1 === n[s].origin) {
                            for (
                                o = 0, a = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');
                                o < a.length;
                                o += 1
                            )
                                -1 !== a[o].href.indexOf(n[s].fPath) && (l = !1);
                            if (l) {
                                var c = createTag("link");
                                c.setAttribute("f-forigin", n[s].fOrigin),
                                    c.setAttribute("f-origin", n[s].origin),
                                    (c.type = "text/css"),
                                    (c.rel = "stylesheet"),
                                    (c.href = n[s].fPath),
                                    document.body.appendChild(c);
                            }
                        } else if ("t" === n[s].fOrigin || 2 === n[s].origin) {
                            for (
                                o = 0, a = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');
                                o < a.length;
                                o += 1
                            )
                                n[s].fPath === a[o].src && (l = !1);
                            if (l) {
                                var d = createTag("link");
                                d.setAttribute("f-forigin", n[s].fOrigin),
                                    d.setAttribute("f-origin", n[s].origin),
                                    d.setAttribute("rel", "stylesheet"),
                                    d.setAttribute("href", n[s].fPath),
                                    t.appendChild(d);
                            }
                        }
                    } else (n[s].loaded = !0), (i -= 1);
                    (n[s].helper = h(n[s], t)), (n[s].cache = {}), this.fonts.push(n[s]);
                }
                0 === i ? (this.isLoaded = !0) : setTimeout(this.checkLoadedFonts.bind(this), 100);
            }
            function E(e) {
                if (e) {
                    this.chars || (this.chars = []);
                    var t,
                        n,
                        r,
                        i = e.length,
                        s = this.chars.length;
                    for (t = 0; t < i; t += 1) {
                        for (n = 0, r = !1; n < s; )
                            this.chars[n].style === e[t].style &&
                                this.chars[n].fFamily === e[t].fFamily &&
                                this.chars[n].ch === e[t].ch &&
                                (r = !0),
                                (n += 1);
                        r || (this.chars.push(e[t]), (s += 1));
                    }
                }
            }
            function g(e, n, r) {
                for (var i = 0, s = this.chars.length; i < s; ) {
                    if (this.chars[i].ch === e && this.chars[i].style === n && this.chars[i].fFamily === r)
                        return this.chars[i];
                    i += 1;
                }
                return (
                    (("string" == typeof e && 13 !== e.charCodeAt(0)) || !e) &&
                        console &&
                        console.warn &&
                        !this._warned &&
                        ((this._warned = !0),
                        console.warn("Missing character from exported characters list: ", e, n, r)),
                    t
                );
            }
            function A(e, t, n) {
                var r = this.getFontByName(t),
                    i = e;
                if (!r.cache[i]) {
                    var s = r.helper;
                    if (" " === e) {
                        var a = s.measureText("|" + e + "|"),
                            o = s.measureText("||");
                        r.cache[i] = (a - o) / 100;
                    } else r.cache[i] = s.measureText(e) / 100;
                }
                return r.cache[i] * n;
            }
            function I(e) {
                for (var t = 0, n = this.fonts.length; t < n; ) {
                    if (this.fonts[t].fName === e) return this.fonts[t];
                    t += 1;
                }
                return this.fonts[0];
            }
            function T(e) {
                var t = 0,
                    n = e.charCodeAt(0);
                if (n >= 55296 && n <= 56319) {
                    var r = e.charCodeAt(1);
                    r >= 56320 && r <= 57343 && (t = (n - 55296) * 1024 + r - 56320 + 65536);
                }
                return t;
            }
            function S(e) {
                return e === l;
            }
            function y(e) {
                return e === o;
            }
            function v(e) {
                var t = T(e);
                return !!(t >= u) && !!(t <= c);
            }
            function N(e) {
                return v(e.substr(0, 2)) && v(e.substr(2, 2));
            }
            function C(e) {
                return -1 !== n.indexOf(e);
            }
            function R(e, t) {
                var n = T(e.substr(t, 2));
                if (n !== r) return !1;
                var o = 0;
                for (t += 2; o < 5; ) {
                    if ((n = T(e.substr(t, 2))) < s || n > a) return !1;
                    (o += 1), (t += 2);
                }
                return T(e.substr(t, 2)) === i;
            }
            function O() {
                this.isLoaded = !0;
            }
            var b = function () {
                (this.fonts = []),
                    (this.chars = null),
                    (this.typekitLoaded = 0),
                    (this.isLoaded = !1),
                    (this._warned = !1),
                    (this.initTime = Date.now()),
                    (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
                    (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
            };
            return (
                (b.isModifier = function (e, t) {
                    var n = e.toString(16) + t.toString(16);
                    return -1 !== d.indexOf(n);
                }),
                (b.isZeroWidthJoiner = S),
                (b.isFlagEmoji = N),
                (b.isRegionalCode = v),
                (b.isCombinedCharacter = C),
                (b.isRegionalFlag = R),
                (b.isVariationSelector = y),
                (b.BLACK_FLAG_CODE_POINT = r),
                (b.prototype = {
                    addChars: E,
                    addFonts: m,
                    getCharData: g,
                    getFontByName: I,
                    measureText: A,
                    checkLoadedFonts: p,
                    setIsLoaded: O,
                }),
                b
            );
        })();
        function SlotManager(e) {
            this.animationData = e;
        }
        function slotFactory(e) {
            return new SlotManager(e);
        }
        function RenderableElement() {}
        (SlotManager.prototype.getProp = function (e) {
            return this.animationData.slots && this.animationData.slots[e.sid]
                ? Object.assign(e, this.animationData.slots[e.sid].p)
                : e;
        }),
            (RenderableElement.prototype = {
                initRenderable: function () {
                    (this.isInRange = !1),
                        (this.hidden = !1),
                        (this.isTransparent = !1),
                        (this.renderableComponents = []);
                },
                addRenderableComponent: function (e) {
                    -1 === this.renderableComponents.indexOf(e) && this.renderableComponents.push(e);
                },
                removeRenderableComponent: function (e) {
                    -1 !== this.renderableComponents.indexOf(e) &&
                        this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1);
                },
                prepareRenderableFrame: function (e) {
                    this.checkLayerLimits(e);
                },
                checkTransparency: function () {
                    this.finalTransform.mProp.o.v <= 0
                        ? !this.isTransparent &&
                          this.globalData.renderConfig.hideOnTransparent &&
                          ((this.isTransparent = !0), this.hide())
                        : this.isTransparent && ((this.isTransparent = !1), this.show());
                },
                checkLayerLimits: function (e) {
                    this.data.ip - this.data.st <= e && this.data.op - this.data.st > e
                        ? !0 !== this.isInRange &&
                          ((this.globalData._mdf = !0), (this._mdf = !0), (this.isInRange = !0), this.show())
                        : !1 !== this.isInRange && ((this.globalData._mdf = !0), (this.isInRange = !1), this.hide());
                },
                renderRenderable: function () {
                    var e,
                        t = this.renderableComponents.length;
                    for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame);
                },
                sourceRectAtTime: function () {
                    return { top: 0, left: 0, width: 100, height: 100 };
                },
                getLayerSize: function () {
                    return 5 === this.data.ty
                        ? { w: this.data.textData.width, h: this.data.textData.height }
                        : { w: this.data.width, h: this.data.height };
                },
            });
        var getBlendMode = (function () {
            var e = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity",
            };
            return function (t) {
                return e[t] || "";
            };
        })();
        function SliderEffect(e, t, n) {
            this.p = PropertyFactory.getProp(t, e.v, 0, 0, n);
        }
        function AngleEffect(e, t, n) {
            this.p = PropertyFactory.getProp(t, e.v, 0, 0, n);
        }
        function ColorEffect(e, t, n) {
            this.p = PropertyFactory.getProp(t, e.v, 1, 0, n);
        }
        function PointEffect(e, t, n) {
            this.p = PropertyFactory.getProp(t, e.v, 1, 0, n);
        }
        function LayerIndexEffect(e, t, n) {
            this.p = PropertyFactory.getProp(t, e.v, 0, 0, n);
        }
        function MaskIndexEffect(e, t, n) {
            this.p = PropertyFactory.getProp(t, e.v, 0, 0, n);
        }
        function CheckboxEffect(e, t, n) {
            this.p = PropertyFactory.getProp(t, e.v, 0, 0, n);
        }
        function NoValueEffect() {
            this.p = {};
        }
        function EffectsManager(e, t) {
            var n,
                r,
                i = e.ef || [];
            this.effectElements = [];
            var s = i.length;
            for (n = 0; n < s; n += 1) (r = new GroupEffect(i[n], t)), this.effectElements.push(r);
        }
        function GroupEffect(e, t) {
            this.init(e, t);
        }
        function BaseElement() {}
        function FrameElement() {}
        function FootageElement(e, t, n) {
            this.initFrame(),
                this.initRenderable(),
                (this.assetData = t.getAssetData(e.refId)),
                (this.footageData = t.imageLoader.getAsset(this.assetData)),
                this.initBaseData(e, t, n);
        }
        function AudioElement(e, t, n) {
            this.initFrame(),
                this.initRenderable(),
                (this.assetData = t.getAssetData(e.refId)),
                this.initBaseData(e, t, n),
                (this._isPlaying = !1),
                (this._canPlay = !1);
            var r = this.globalData.getAssetsPath(this.assetData);
            (this.audio = this.globalData.audioController.createAudio(r)),
                (this._currentTime = 0),
                this.globalData.audioController.addAudio(this),
                (this._volumeMultiplier = 1),
                (this._volume = 1),
                (this._previousVolume = null),
                (this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 }),
                (this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : { k: [100] }, 1, 0.01, this));
        }
        function BaseRenderer() {}
        extendPrototype([DynamicPropertyContainer], GroupEffect),
            (GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties),
            (GroupEffect.prototype.init = function (e, t) {
                (this.data = e), (this.effectElements = []), this.initDynamicPropertyContainer(t);
                var n,
                    r,
                    i = this.data.ef.length,
                    s = this.data.ef;
                for (n = 0; n < i; n += 1) {
                    switch (((r = null), s[n].ty)) {
                        case 0:
                            r = new SliderEffect(s[n], t, this);
                            break;
                        case 1:
                            r = new AngleEffect(s[n], t, this);
                            break;
                        case 2:
                            r = new ColorEffect(s[n], t, this);
                            break;
                        case 3:
                            r = new PointEffect(s[n], t, this);
                            break;
                        case 4:
                        case 7:
                            r = new CheckboxEffect(s[n], t, this);
                            break;
                        case 10:
                            r = new LayerIndexEffect(s[n], t, this);
                            break;
                        case 11:
                            r = new MaskIndexEffect(s[n], t, this);
                            break;
                        case 5:
                            r = new EffectsManager(s[n], t, this);
                            break;
                        default:
                            r = new NoValueEffect(s[n], t, this);
                    }
                    r && this.effectElements.push(r);
                }
            }),
            (BaseElement.prototype = {
                checkMasks: function () {
                    if (!this.data.hasMask) return !1;
                    for (var e = 0, t = this.data.masksProperties.length; e < t; ) {
                        if ("n" !== this.data.masksProperties[e].mode && !1 !== this.data.masksProperties[e].cl)
                            return !0;
                        e += 1;
                    }
                    return !1;
                },
                initExpressions: function () {
                    var e = getExpressionInterfaces();
                    if (e) {
                        var t = e("layer"),
                            n = e("effects"),
                            r = e("shape"),
                            i = e("text"),
                            s = e("comp");
                        (this.layerInterface = t(this)),
                            this.data.hasMask &&
                                this.maskManager &&
                                this.layerInterface.registerMaskInterface(this.maskManager);
                        var a = n.createEffectsInterface(this, this.layerInterface);
                        this.layerInterface.registerEffectsInterface(a),
                            0 === this.data.ty || this.data.xt
                                ? (this.compInterface = s(this))
                                : 4 === this.data.ty
                                  ? ((this.layerInterface.shapeInterface = r(
                                        this.shapesData,
                                        this.itemsData,
                                        this.layerInterface,
                                    )),
                                    (this.layerInterface.content = this.layerInterface.shapeInterface))
                                  : 5 === this.data.ty &&
                                    ((this.layerInterface.textInterface = i(this)),
                                    (this.layerInterface.text = this.layerInterface.textInterface));
                    }
                },
                setBlendMode: function () {
                    var e = getBlendMode(this.data.bm);
                    (this.baseElement || this.layerElement).style["mix-blend-mode"] = e;
                },
                initBaseData: function (e, t, n) {
                    (this.globalData = t),
                        (this.comp = n),
                        (this.data = e),
                        (this.layerId = createElementID()),
                        this.data.sr || (this.data.sr = 1),
                        (this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties));
                },
                getType: function () {
                    return this.type;
                },
                sourceRectAtTime: function () {},
            }),
            (FrameElement.prototype = {
                initFrame: function () {
                    (this._isFirstFrame = !1), (this.dynamicProperties = []), (this._mdf = !1);
                },
                prepareProperties: function (e, t) {
                    var n,
                        r = this.dynamicProperties.length;
                    for (n = 0; n < r; n += 1)
                        (t || (this._isParent && "transform" === this.dynamicProperties[n].propType)) &&
                            (this.dynamicProperties[n].getValue(),
                            this.dynamicProperties[n]._mdf && ((this.globalData._mdf = !0), (this._mdf = !0)));
                },
                addDynamicProperty: function (e) {
                    -1 === this.dynamicProperties.indexOf(e) && this.dynamicProperties.push(e);
                },
            }),
            (FootageElement.prototype.prepareFrame = function () {}),
            extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement),
            (FootageElement.prototype.getBaseElement = function () {
                return null;
            }),
            (FootageElement.prototype.renderFrame = function () {}),
            (FootageElement.prototype.destroy = function () {}),
            (FootageElement.prototype.initExpressions = function () {
                var e = getExpressionInterfaces();
                if (e) {
                    var t = e("footage");
                    this.layerInterface = t(this);
                }
            }),
            (FootageElement.prototype.getFootageData = function () {
                return this.footageData;
            }),
            (AudioElement.prototype.prepareFrame = function (e) {
                if ((this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder))
                    this._currentTime = e / this.data.sr;
                else {
                    var t = this.tm.v;
                    this._currentTime = t;
                }
                this._volume = this.lv.v[0];
                var n = this._volume * this._volumeMultiplier;
                this._previousVolume !== n && ((this._previousVolume = n), this.audio.volume(n));
            }),
            extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement),
            (AudioElement.prototype.renderFrame = function () {
                this.isInRange &&
                    this._canPlay &&
                    (this._isPlaying
                        ? (!this.audio.playing() ||
                              Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) &&
                          this.audio.seek(this._currentTime / this.globalData.frameRate)
                        : (this.audio.play(),
                          this.audio.seek(this._currentTime / this.globalData.frameRate),
                          (this._isPlaying = !0)));
            }),
            (AudioElement.prototype.show = function () {}),
            (AudioElement.prototype.hide = function () {
                this.audio.pause(), (this._isPlaying = !1);
            }),
            (AudioElement.prototype.pause = function () {
                this.audio.pause(), (this._isPlaying = !1), (this._canPlay = !1);
            }),
            (AudioElement.prototype.resume = function () {
                this._canPlay = !0;
            }),
            (AudioElement.prototype.setRate = function (e) {
                this.audio.rate(e);
            }),
            (AudioElement.prototype.volume = function (e) {
                (this._volumeMultiplier = e),
                    (this._previousVolume = e * this._volume),
                    this.audio.volume(this._previousVolume);
            }),
            (AudioElement.prototype.getBaseElement = function () {
                return null;
            }),
            (AudioElement.prototype.destroy = function () {}),
            (AudioElement.prototype.sourceRectAtTime = function () {}),
            (AudioElement.prototype.initExpressions = function () {}),
            (BaseRenderer.prototype.checkLayers = function (e) {
                var t,
                    n,
                    r = this.layers.length;
                for (this.completeLayers = !0, t = r - 1; t >= 0; t -= 1)
                    !this.elements[t] &&
                        (n = this.layers[t]).ip - n.st <= e - this.layers[t].st &&
                        n.op - n.st > e - this.layers[t].st &&
                        this.buildItem(t),
                        (this.completeLayers = !!this.elements[t] && this.completeLayers);
                this.checkPendingElements();
            }),
            (BaseRenderer.prototype.createItem = function (e) {
                switch (e.ty) {
                    case 2:
                        return this.createImage(e);
                    case 0:
                        return this.createComp(e);
                    case 1:
                        return this.createSolid(e);
                    case 3:
                    default:
                        return this.createNull(e);
                    case 4:
                        return this.createShape(e);
                    case 5:
                        return this.createText(e);
                    case 6:
                        return this.createAudio(e);
                    case 13:
                        return this.createCamera(e);
                    case 15:
                        return this.createFootage(e);
                }
            }),
            (BaseRenderer.prototype.createCamera = function () {
                throw Error("You're using a 3d camera. Try the html renderer.");
            }),
            (BaseRenderer.prototype.createAudio = function (e) {
                return new AudioElement(e, this.globalData, this);
            }),
            (BaseRenderer.prototype.createFootage = function (e) {
                return new FootageElement(e, this.globalData, this);
            }),
            (BaseRenderer.prototype.buildAllItems = function () {
                var e,
                    t = this.layers.length;
                for (e = 0; e < t; e += 1) this.buildItem(e);
                this.checkPendingElements();
            }),
            (BaseRenderer.prototype.includeLayers = function (e) {
                this.completeLayers = !1;
                var t,
                    n,
                    r = e.length,
                    i = this.layers.length;
                for (t = 0; t < r; t += 1)
                    for (n = 0; n < i; ) {
                        if (this.layers[n].id === e[t].id) {
                            this.layers[n] = e[t];
                            break;
                        }
                        n += 1;
                    }
            }),
            (BaseRenderer.prototype.setProjectInterface = function (e) {
                this.globalData.projectInterface = e;
            }),
            (BaseRenderer.prototype.initItems = function () {
                this.globalData.progressiveLoad || this.buildAllItems();
            }),
            (BaseRenderer.prototype.buildElementParenting = function (e, t, n) {
                for (var r = this.elements, i = this.layers, s = 0, a = i.length; s < a; )
                    i[s].ind == t &&
                        (r[s] && !0 !== r[s]
                            ? (n.push(r[s]),
                              r[s].setAsParent(),
                              void 0 !== i[s].parent
                                  ? this.buildElementParenting(e, i[s].parent, n)
                                  : e.setHierarchy(n))
                            : (this.buildItem(s), this.addPendingElement(e))),
                        (s += 1);
            }),
            (BaseRenderer.prototype.addPendingElement = function (e) {
                this.pendingElements.push(e);
            }),
            (BaseRenderer.prototype.searchExtraCompositions = function (e) {
                var t,
                    n = e.length;
                for (t = 0; t < n; t += 1)
                    if (e[t].xt) {
                        var r = this.createComp(e[t]);
                        r.initExpressions(), this.globalData.projectInterface.registerComposition(r);
                    }
            }),
            (BaseRenderer.prototype.getElementById = function (e) {
                var t,
                    n = this.elements.length;
                for (t = 0; t < n; t += 1) if (this.elements[t].data.ind === e) return this.elements[t];
                return null;
            }),
            (BaseRenderer.prototype.getElementByPath = function (e) {
                var t = e.shift();
                if ("number" == typeof t) n = this.elements[t];
                else {
                    var n,
                        r,
                        i = this.elements.length;
                    for (r = 0; r < i; r += 1)
                        if (this.elements[r].data.nm === t) {
                            n = this.elements[r];
                            break;
                        }
                }
                return 0 === e.length ? n : n.getElementByPath(e);
            }),
            (BaseRenderer.prototype.setupGlobalData = function (e, t) {
                (this.globalData.fontManager = new FontManager()),
                    (this.globalData.slotManager = slotFactory(e)),
                    this.globalData.fontManager.addChars(e.chars),
                    this.globalData.fontManager.addFonts(e.fonts, t),
                    (this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem)),
                    (this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem)),
                    (this.globalData.imageLoader = this.animationItem.imagePreloader),
                    (this.globalData.audioController = this.animationItem.audioController),
                    (this.globalData.frameId = 0),
                    (this.globalData.frameRate = e.fr),
                    (this.globalData.nm = e.nm),
                    (this.globalData.compSize = { w: e.w, h: e.h });
            });
        var effectTypes = { TRANSFORM_EFFECT: "transformEFfect" };
        function TransformElement() {}
        function MaskElement(e, t, n) {
            (this.data = e),
                (this.element = t),
                (this.globalData = n),
                (this.storedData = []),
                (this.masksProperties = this.data.masksProperties || []),
                (this.maskElement = null);
            var r = this.globalData.defs,
                i = this.masksProperties ? this.masksProperties.length : 0;
            (this.viewData = createSizedArray(i)), (this.solidPath = "");
            var s = this.masksProperties,
                a = 0,
                o = [],
                l = createElementID(),
                u = "clipPath",
                c = "clip-path";
            for (d = 0; d < i; d += 1)
                if (
                    ((("a" !== s[d].mode && "n" !== s[d].mode) || s[d].inv || 100 !== s[d].o.k || s[d].o.x) &&
                        ((u = "mask"), (c = "mask")),
                    ("s" === s[d].mode || "i" === s[d].mode) && 0 === a
                        ? ((p = createNS("rect")).setAttribute("fill", "#ffffff"),
                          p.setAttribute("width", this.element.comp.data.w || 0),
                          p.setAttribute("height", this.element.comp.data.h || 0),
                          o.push(p))
                        : (p = null),
                    (_ = createNS("path")),
                    "n" === s[d].mode)
                )
                    (this.viewData[d] = {
                        op: PropertyFactory.getProp(this.element, s[d].o, 0, 0.01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, s[d], 3),
                        elem: _,
                        lastPath: "",
                    }),
                        r.appendChild(_);
                else {
                    if (
                        ((a += 1),
                        _.setAttribute("fill", "s" === s[d].mode ? "#000000" : "#ffffff"),
                        _.setAttribute("clip-rule", "nonzero"),
                        0 !== s[d].x.k
                            ? ((u = "mask"),
                              (c = "mask"),
                              (E = PropertyFactory.getProp(this.element, s[d].x, 0, null, this.element)),
                              (g = createElementID()),
                              (h = createNS("filter")).setAttribute("id", g),
                              (m = createNS("feMorphology")).setAttribute("operator", "erode"),
                              m.setAttribute("in", "SourceGraphic"),
                              m.setAttribute("radius", "0"),
                              h.appendChild(m),
                              r.appendChild(h),
                              _.setAttribute("stroke", "s" === s[d].mode ? "#000000" : "#ffffff"))
                            : ((m = null), (E = null)),
                        (this.storedData[d] = {
                            elem: _,
                            x: E,
                            expan: m,
                            lastPath: "",
                            lastOperator: "",
                            filterId: g,
                            lastRadius: 0,
                        }),
                        "i" === s[d].mode)
                    ) {
                        var d,
                            _,
                            f,
                            p,
                            h,
                            m,
                            E,
                            g,
                            A = o.length,
                            I = createNS("g");
                        for (f = 0; f < A; f += 1) I.appendChild(o[f]);
                        var T = createNS("mask");
                        T.setAttribute("mask-type", "alpha"),
                            T.setAttribute("id", l + "_" + a),
                            T.appendChild(_),
                            r.appendChild(T),
                            I.setAttribute("mask", "url(" + getLocationHref() + "#" + l + "_" + a + ")"),
                            (o.length = 0),
                            o.push(I);
                    } else o.push(_);
                    s[d].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                        (this.viewData[d] = {
                            elem: _,
                            lastPath: "",
                            op: PropertyFactory.getProp(this.element, s[d].o, 0, 0.01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, s[d], 3),
                            invRect: p,
                        }),
                        this.viewData[d].prop.k || this.drawPath(s[d], this.viewData[d].prop.v, this.viewData[d]);
                }
            for (d = 0, this.maskElement = createNS(u), i = o.length; d < i; d += 1) this.maskElement.appendChild(o[d]);
            a > 0 &&
                (this.maskElement.setAttribute("id", l),
                this.element.maskedElement.setAttribute(c, "url(" + getLocationHref() + "#" + l + ")"),
                r.appendChild(this.maskElement)),
                this.viewData.length && this.element.addRenderableComponent(this);
        }
        (TransformElement.prototype = {
            initTransform: function () {
                var e = new Matrix();
                (this.finalTransform = {
                    mProp: this.data.ks
                        ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this)
                        : { o: 0 },
                    _matMdf: !1,
                    _localMatMdf: !1,
                    _opMdf: !1,
                    mat: e,
                    localMat: e,
                    localOpacity: 1,
                }),
                    this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                    this.data.ty;
            },
            renderTransform: function () {
                if (
                    ((this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame),
                    (this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame),
                    this.hierarchy)
                ) {
                    var e,
                        t = this.finalTransform.mat,
                        n = 0,
                        r = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; n < r; ) {
                            if (this.hierarchy[n].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break;
                            }
                            n += 1;
                        }
                    if (this.finalTransform._matMdf)
                        for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), n = 0; n < r; n += 1)
                            t.multiply(this.hierarchy[n].finalTransform.mProp.v);
                }
                this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf),
                    this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
            },
            renderLocalTransform: function () {
                if (this.localTransforms) {
                    var e = 0,
                        t = this.localTransforms.length;
                    if (
                        ((this.finalTransform._localMatMdf = this.finalTransform._matMdf),
                        !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                    )
                        for (; e < t; )
                            this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0),
                                this.localTransforms[e]._opMdf &&
                                    !this.finalTransform._opMdf &&
                                    ((this.finalTransform.localOpacity = this.finalTransform.mProp.o.v),
                                    (this.finalTransform._opMdf = !0)),
                                (e += 1);
                    if (this.finalTransform._localMatMdf) {
                        var n = this.finalTransform.localMat;
                        for (this.localTransforms[0].matrix.clone(n), e = 1; e < t; e += 1) {
                            var r = this.localTransforms[e].matrix;
                            n.multiply(r);
                        }
                        n.multiply(this.finalTransform.mat);
                    }
                    if (this.finalTransform._opMdf) {
                        var i = this.finalTransform.localOpacity;
                        for (e = 0; e < t; e += 1) i *= 0.01 * this.localTransforms[e].opacity;
                        this.finalTransform.localOpacity = i;
                    }
                }
            },
            searchEffectTransforms: function () {
                if (this.renderableEffectsManager) {
                    var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                    if (e.length) {
                        (this.localTransforms = []), (this.finalTransform.localMat = new Matrix());
                        var t = 0,
                            n = e.length;
                        for (t = 0; t < n; t += 1) this.localTransforms.push(e[t]);
                    }
                }
            },
            globalToLocal: function (e) {
                var t,
                    n,
                    r = [];
                r.push(this.finalTransform);
                for (var i = !0, s = this.comp; i; )
                    s.finalTransform ? (s.data.hasMask && r.splice(0, 0, s.finalTransform), (s = s.comp)) : (i = !1);
                var a = r.length;
                for (t = 0; t < a; t += 1)
                    (n = r[t].mat.applyToPointArray(0, 0, 0)), (e = [e[0] - n[0], e[1] - n[1], 0]);
                return e;
            },
            mHelper: new Matrix(),
        }),
            (MaskElement.prototype.getMaskProperty = function (e) {
                return this.viewData[e].prop;
            }),
            (MaskElement.prototype.renderFrame = function (e) {
                var t,
                    n = this.element.finalTransform.mat,
                    r = this.masksProperties.length;
                for (t = 0; t < r; t += 1)
                    if (
                        ((this.viewData[t].prop._mdf || e) &&
                            this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]),
                        (this.viewData[t].op._mdf || e) &&
                            this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v),
                        "n" !== this.masksProperties[t].mode &&
                            (this.viewData[t].invRect &&
                                (this.element.finalTransform.mProp._mdf || e) &&
                                this.viewData[t].invRect.setAttribute("transform", n.getInverseMatrix().to2dCSS()),
                            this.storedData[t].x && (this.storedData[t].x._mdf || e)))
                    ) {
                        var i = this.storedData[t].expan;
                        this.storedData[t].x.v < 0
                            ? ("erode" !== this.storedData[t].lastOperator &&
                                  ((this.storedData[t].lastOperator = "erode"),
                                  this.storedData[t].elem.setAttribute(
                                      "filter",
                                      "url(" + getLocationHref() + "#" + this.storedData[t].filterId + ")",
                                  )),
                              i.setAttribute("radius", -this.storedData[t].x.v))
                            : ("dilate" !== this.storedData[t].lastOperator &&
                                  ((this.storedData[t].lastOperator = "dilate"),
                                  this.storedData[t].elem.setAttribute("filter", null)),
                              this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v));
                    }
            }),
            (MaskElement.prototype.getMaskelement = function () {
                return this.maskElement;
            }),
            (MaskElement.prototype.createLayerSolidPath = function () {
                var e = "M0,0 ";
                return (
                    e +
                    (" h" +
                        this.globalData.compSize.w +
                        " v" +
                        this.globalData.compSize.h +
                        " h-" +
                        this.globalData.compSize.w +
                        (" v-" + this.globalData.compSize.h) +
                        " ")
                );
            }),
            (MaskElement.prototype.drawPath = function (e, t, n) {
                var r,
                    i,
                    s = " M" + t.v[0][0] + "," + t.v[0][1];
                for (r = 1, i = t._length; r < i; r += 1)
                    s +=
                        " C" +
                        t.o[r - 1][0] +
                        "," +
                        t.o[r - 1][1] +
                        " " +
                        t.i[r][0] +
                        "," +
                        t.i[r][1] +
                        " " +
                        t.v[r][0] +
                        "," +
                        t.v[r][1];
                if (
                    (t.c &&
                        i > 1 &&
                        (s +=
                            " C" +
                            t.o[r - 1][0] +
                            "," +
                            t.o[r - 1][1] +
                            " " +
                            t.i[0][0] +
                            "," +
                            t.i[0][1] +
                            " " +
                            t.v[0][0] +
                            "," +
                            t.v[0][1]),
                    n.lastPath !== s)
                ) {
                    var a = "";
                    n.elem && (t.c && (a = e.inv ? this.solidPath + s : s), n.elem.setAttribute("d", a)),
                        (n.lastPath = s);
                }
            }),
            (MaskElement.prototype.destroy = function () {
                (this.element = null),
                    (this.globalData = null),
                    (this.maskElement = null),
                    (this.data = null),
                    (this.masksProperties = null);
            });
        var filtersFactory = (function () {
                var e = {};
                function t() {
                    var e = createNS("feColorMatrix");
                    return (
                        e.setAttribute("type", "matrix"),
                        e.setAttribute("color-interpolation-filters", "sRGB"),
                        e.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),
                        e
                    );
                }
                return (
                    (e.createFilter = function e(e, t) {
                        var n = createNS("filter");
                        return (
                            n.setAttribute("id", e),
                            !0 !== t &&
                                (n.setAttribute("filterUnits", "objectBoundingBox"),
                                n.setAttribute("x", "0%"),
                                n.setAttribute("y", "0%"),
                                n.setAttribute("width", "100%"),
                                n.setAttribute("height", "100%")),
                            n
                        );
                    }),
                    (e.createAlphaToLuminanceFilter = t),
                    e
                );
            })(),
            featureSupport = (function () {
                var e = { maskType: !0, svgLumaHidden: !0, offscreenCanvas: "u" > typeof OffscreenCanvas };
                return (
                    (/MSIE 10/i.test(navigator.userAgent) ||
                        /MSIE 9/i.test(navigator.userAgent) ||
                        /rv:11.0/i.test(navigator.userAgent) ||
                        /Edge\/\d./i.test(navigator.userAgent)) &&
                        (e.maskType = !1),
                    /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1),
                    e
                );
            })(),
            registeredEffects$1 = {},
            idPrefix = "filter_result_";
        function SVGEffects(e) {
            var t,
                n,
                r = "SourceGraphic",
                i = e.data.ef ? e.data.ef.length : 0,
                s = createElementID(),
                a = filtersFactory.createFilter(s, !0),
                o = 0;
            for (t = 0, this.filters = []; t < i; t += 1) {
                n = null;
                var l = e.data.ef[t].ty;
                registeredEffects$1[l] &&
                    ((n = new registeredEffects$1[l].effect(a, e.effectsManager.effectElements[t], e, idPrefix + o, r)),
                    (r = idPrefix + o),
                    registeredEffects$1[l].countsAsEffect && (o += 1)),
                    n && this.filters.push(n);
            }
            o &&
                (e.globalData.defs.appendChild(a),
                e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")),
                this.filters.length && e.addRenderableComponent(this);
        }
        function registerEffect$1(e, t, n) {
            registeredEffects$1[e] = { effect: t, countsAsEffect: n };
        }
        function SVGBaseElement() {}
        function HierarchyElement() {}
        function RenderableDOMElement() {}
        function IImageElement(e, t, n) {
            (this.assetData = t.getAssetData(e.refId)),
                this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)),
                this.initElement(e, t, n),
                (this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h });
        }
        function ProcessedElement(e, t) {
            (this.elem = e), (this.pos = t);
        }
        function IShapeElement() {}
        (SVGEffects.prototype.renderFrame = function (e) {
            var t,
                n = this.filters.length;
            for (t = 0; t < n; t += 1) this.filters[t].renderFrame(e);
        }),
            (SVGEffects.prototype.getEffects = function (e) {
                var t,
                    n = this.filters.length,
                    r = [];
                for (t = 0; t < n; t += 1) this.filters[t].type === e && r.push(this.filters[t]);
                return r;
            }),
            (SVGBaseElement.prototype = {
                initRendererElement: function () {
                    this.layerElement = createNS("g");
                },
                createContainerElements: function () {
                    (this.matteElement = createNS("g")),
                        (this.transformedElement = this.layerElement),
                        (this.maskedElement = this.layerElement),
                        (this._sizeChanged = !1);
                    var e = null;
                    if (this.data.td) {
                        this.matteMasks = {};
                        var t = createNS("g");
                        t.setAttribute("id", this.layerId),
                            t.appendChild(this.layerElement),
                            (e = t),
                            this.globalData.defs.appendChild(t);
                    } else
                        this.data.tt
                            ? (this.matteElement.appendChild(this.layerElement),
                              (e = this.matteElement),
                              (this.baseElement = this.matteElement))
                            : (this.baseElement = this.layerElement);
                    if (
                        (this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                        this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                        0 === this.data.ty && !this.data.hd)
                    ) {
                        var n = createNS("clipPath"),
                            r = createNS("path");
                        r.setAttribute(
                            "d",
                            "M0,0 L" +
                                this.data.w +
                                ",0 L" +
                                this.data.w +
                                "," +
                                this.data.h +
                                " L0," +
                                this.data.h +
                                "z",
                        );
                        var i = createElementID();
                        if (
                            (n.setAttribute("id", i),
                            n.appendChild(r),
                            this.globalData.defs.appendChild(n),
                            this.checkMasks())
                        ) {
                            var s = createNS("g");
                            s.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"),
                                s.appendChild(this.layerElement),
                                (this.transformedElement = s),
                                e
                                    ? e.appendChild(this.transformedElement)
                                    : (this.baseElement = this.transformedElement);
                        } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")");
                    }
                    0 !== this.data.bm && this.setBlendMode();
                },
                renderElement: function () {
                    this.finalTransform._localMatMdf &&
                        this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()),
                        this.finalTransform._opMdf &&
                            this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
                },
                destroyBaseElement: function () {
                    (this.layerElement = null), (this.matteElement = null), this.maskManager.destroy();
                },
                getBaseElement: function () {
                    return this.data.hd ? null : this.baseElement;
                },
                createRenderableComponents: function () {
                    (this.maskManager = new MaskElement(this.data, this, this.globalData)),
                        (this.renderableEffectsManager = new SVGEffects(this)),
                        this.searchEffectTransforms();
                },
                getMatte: function (e) {
                    if ((this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e])) {
                        var t,
                            n,
                            r,
                            i,
                            s = this.layerId + "_" + e;
                        if (1 === e || 3 === e) {
                            var a = createNS("mask");
                            a.setAttribute("id", s),
                                a.setAttribute("mask-type", 3 === e ? "luminance" : "alpha"),
                                (r = createNS("use")).setAttributeNS(
                                    "http://www.w3.org/1999/xlink",
                                    "href",
                                    "#" + this.layerId,
                                ),
                                a.appendChild(r),
                                this.globalData.defs.appendChild(a),
                                featureSupport.maskType ||
                                    1 !== e ||
                                    (a.setAttribute("mask-type", "luminance"),
                                    (t = createElementID()),
                                    (n = filtersFactory.createFilter(t)),
                                    this.globalData.defs.appendChild(n),
                                    n.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                                    (i = createNS("g")).appendChild(r),
                                    a.appendChild(i),
                                    i.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"));
                        } else if (2 === e) {
                            var o = createNS("mask");
                            o.setAttribute("id", s), o.setAttribute("mask-type", "alpha");
                            var l = createNS("g");
                            o.appendChild(l), (t = createElementID()), (n = filtersFactory.createFilter(t));
                            var u = createNS("feComponentTransfer");
                            u.setAttribute("in", "SourceGraphic"), n.appendChild(u);
                            var c = createNS("feFuncA");
                            c.setAttribute("type", "table"),
                                c.setAttribute("tableValues", "1.0 0.0"),
                                u.appendChild(c),
                                this.globalData.defs.appendChild(n);
                            var d = createNS("rect");
                            d.setAttribute("width", this.comp.data.w),
                                d.setAttribute("height", this.comp.data.h),
                                d.setAttribute("x", "0"),
                                d.setAttribute("y", "0"),
                                d.setAttribute("fill", "#ffffff"),
                                d.setAttribute("opacity", "0"),
                                l.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"),
                                l.appendChild(d),
                                (r = createNS("use")).setAttributeNS(
                                    "http://www.w3.org/1999/xlink",
                                    "href",
                                    "#" + this.layerId,
                                ),
                                l.appendChild(r),
                                featureSupport.maskType ||
                                    (o.setAttribute("mask-type", "luminance"),
                                    n.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                                    (i = createNS("g")),
                                    l.appendChild(d),
                                    i.appendChild(this.layerElement),
                                    l.appendChild(i)),
                                this.globalData.defs.appendChild(o);
                        }
                        this.matteMasks[e] = s;
                    }
                    return this.matteMasks[e];
                },
                setMatte: function (e) {
                    this.matteElement &&
                        this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")");
                },
            }),
            (HierarchyElement.prototype = {
                initHierarchy: function () {
                    (this.hierarchy = []), (this._isParent = !1), this.checkParenting();
                },
                setHierarchy: function (e) {
                    this.hierarchy = e;
                },
                setAsParent: function () {
                    this._isParent = !0;
                },
                checkParenting: function () {
                    void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
                },
            }),
            (function () {
                extendPrototype(
                    [
                        RenderableElement,
                        createProxyFunction({
                            initElement: function (e, t, n) {
                                this.initFrame(),
                                    this.initBaseData(e, t, n),
                                    this.initTransform(e, t, n),
                                    this.initHierarchy(),
                                    this.initRenderable(),
                                    this.initRendererElement(),
                                    this.createContainerElements(),
                                    this.createRenderableComponents(),
                                    this.createContent(),
                                    this.hide();
                            },
                            hide: function () {
                                this.hidden ||
                                    (this.isInRange && !this.isTransparent) ||
                                    (((this.baseElement || this.layerElement).style.display = "none"),
                                    (this.hidden = !0));
                            },
                            show: function () {
                                this.isInRange &&
                                    !this.isTransparent &&
                                    (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"),
                                    (this.hidden = !1),
                                    (this._isFirstFrame = !0));
                            },
                            renderFrame: function () {
                                this.data.hd ||
                                    this.hidden ||
                                    (this.renderTransform(),
                                    this.renderRenderable(),
                                    this.renderLocalTransform(),
                                    this.renderElement(),
                                    this.renderInnerContent(),
                                    this._isFirstFrame && (this._isFirstFrame = !1));
                            },
                            renderInnerContent: function () {},
                            prepareFrame: function (e) {
                                (this._mdf = !1),
                                    this.prepareRenderableFrame(e),
                                    this.prepareProperties(e, this.isInRange),
                                    this.checkTransparency();
                            },
                            destroy: function () {
                                (this.innerElem = null), this.destroyBaseElement();
                            },
                        }),
                    ],
                    RenderableDOMElement,
                );
            })(),
            extendPrototype(
                [BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement],
                IImageElement,
            ),
            (IImageElement.prototype.createContent = function () {
                var e = this.globalData.getAssetsPath(this.assetData);
                (this.innerElem = createNS("image")),
                    this.innerElem.setAttribute("width", this.assetData.w + "px"),
                    this.innerElem.setAttribute("height", this.assetData.h + "px"),
                    this.innerElem.setAttribute(
                        "preserveAspectRatio",
                        this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio,
                    ),
                    this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e),
                    this.layerElement.appendChild(this.innerElem);
            }),
            (IImageElement.prototype.sourceRectAtTime = function () {
                return this.sourceRect;
            }),
            (IShapeElement.prototype = {
                addShapeToModifiers: function (e) {
                    var t,
                        n = this.shapeModifiers.length;
                    for (t = 0; t < n; t += 1) this.shapeModifiers[t].addShape(e);
                },
                isShapeInAnimatedModifiers: function (e) {
                    for (var t = 0, n = this.shapeModifiers.length; t < n; )
                        if (this.shapeModifiers[t].isAnimatedWithShape(e)) return !0;
                    return !1;
                },
                renderModifiers: function () {
                    if (this.shapeModifiers.length) {
                        var e,
                            t = this.shapes.length;
                        for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
                        for (
                            t = this.shapeModifiers.length, e = t - 1;
                            e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame);
                            e -= 1
                        );
                    }
                },
                searchProcessedElement: function (e) {
                    for (var t = this.processedElements, n = 0, r = t.length; n < r; ) {
                        if (t[n].elem === e) return t[n].pos;
                        n += 1;
                    }
                    return 0;
                },
                addProcessedElement: function (e, t) {
                    for (var n = this.processedElements, r = n.length; r; )
                        if (n[(r -= 1)].elem === e) {
                            n[r].pos = t;
                            return;
                        }
                    n.push(new ProcessedElement(e, t));
                },
                prepareFrame: function (e) {
                    this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
                },
            });
        var lineCapEnum = { 1: "butt", 2: "round", 3: "square" },
            lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
        function SVGShapeData(e, t, n) {
            (this.caches = []),
                (this.styles = []),
                (this.transformers = e),
                (this.lStr = ""),
                (this.sh = n),
                (this.lvl = t),
                (this._isAnimated = !!n.k);
            for (var r = 0, i = e.length; r < i; ) {
                if (e[r].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break;
                }
                r += 1;
            }
        }
        function SVGStyleData(e, t) {
            (this.data = e),
                (this.type = e.ty),
                (this.d = ""),
                (this.lvl = t),
                (this._mdf = !1),
                (this.closed = !0 === e.hd),
                (this.pElem = createNS("path")),
                (this.msElem = null);
        }
        function DashProperty(e, t, n, r) {
            (this.elem = e),
                (this.frameId = -1),
                (this.dataProps = createSizedArray(t.length)),
                (this.renderer = n),
                (this.k = !1),
                (this.dashStr = ""),
                (this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0)),
                (this.dashoffset = createTypedArray("float32", 1)),
                this.initDynamicPropertyContainer(r);
            var i,
                s,
                a = t.length || 0;
            for (i = 0; i < a; i += 1)
                (s = PropertyFactory.getProp(e, t[i].v, 0, 0, this)),
                    (this.k = s.k || this.k),
                    (this.dataProps[i] = { n: t[i].n, p: s });
            this.k || this.getValue(!0), (this._isAnimated = this.k);
        }
        function SVGStrokeStyleData(e, t, n) {
            this.initDynamicPropertyContainer(e),
                (this.getValue = this.iterateDynamicProperties),
                (this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)),
                (this.w = PropertyFactory.getProp(e, t.w, 0, null, this)),
                (this.d = new DashProperty(e, t.d || {}, "svg", this)),
                (this.c = PropertyFactory.getProp(e, t.c, 1, 255, this)),
                (this.style = n),
                (this._isAnimated = !!this._isAnimated);
        }
        function SVGFillStyleData(e, t, n) {
            this.initDynamicPropertyContainer(e),
                (this.getValue = this.iterateDynamicProperties),
                (this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)),
                (this.c = PropertyFactory.getProp(e, t.c, 1, 255, this)),
                (this.style = n);
        }
        function SVGNoStyleData(e, t, n) {
            this.initDynamicPropertyContainer(e), (this.getValue = this.iterateDynamicProperties), (this.style = n);
        }
        function GradientProperty(e, t, n) {
            (this.data = t), (this.c = createTypedArray("uint8c", 4 * t.p));
            var r = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
            (this.o = createTypedArray("float32", r)),
                (this._cmdf = !1),
                (this._omdf = !1),
                (this._collapsable = this.checkCollapsable()),
                (this._hasOpacity = r),
                this.initDynamicPropertyContainer(n),
                (this.prop = PropertyFactory.getProp(e, t.k, 1, null, this)),
                (this.k = this.prop.k),
                this.getValue(!0);
        }
        function SVGGradientFillStyleData(e, t, n) {
            this.initDynamicPropertyContainer(e),
                (this.getValue = this.iterateDynamicProperties),
                this.initGradientData(e, t, n);
        }
        function SVGGradientStrokeStyleData(e, t, n) {
            this.initDynamicPropertyContainer(e),
                (this.getValue = this.iterateDynamicProperties),
                (this.w = PropertyFactory.getProp(e, t.w, 0, null, this)),
                (this.d = new DashProperty(e, t.d || {}, "svg", this)),
                this.initGradientData(e, t, n),
                (this._isAnimated = !!this._isAnimated);
        }
        function ShapeGroupData() {
            (this.it = []), (this.prevViewData = []), (this.gr = createNS("g"));
        }
        function SVGTransformData(e, t, n) {
            (this.transform = { mProps: e, op: t, container: n }),
                (this.elements = []),
                (this._isAnimated =
                    this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length);
        }
        (SVGShapeData.prototype.setAsAnimated = function () {
            this._isAnimated = !0;
        }),
            (SVGStyleData.prototype.reset = function () {
                (this.d = ""), (this._mdf = !1);
            }),
            (DashProperty.prototype.getValue = function (e) {
                if (
                    (this.elem.globalData.frameId !== this.frameId || e) &&
                    ((this.frameId = this.elem.globalData.frameId),
                    this.iterateDynamicProperties(),
                    (this._mdf = this._mdf || e),
                    this._mdf)
                ) {
                    var t = 0,
                        n = this.dataProps.length;
                    for ("svg" === this.renderer && (this.dashStr = ""), t = 0; t < n; t += 1)
                        "o" !== this.dataProps[t].n
                            ? "svg" === this.renderer
                                ? (this.dashStr += " " + this.dataProps[t].p.v)
                                : (this.dashArray[t] = this.dataProps[t].p.v)
                            : (this.dashoffset[0] = this.dataProps[t].p.v);
                }
            }),
            extendPrototype([DynamicPropertyContainer], DashProperty),
            extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
            extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
            extendPrototype([DynamicPropertyContainer], SVGNoStyleData),
            (GradientProperty.prototype.comparePoints = function (e, t) {
                for (var n = 0, r = this.o.length / 2; n < r; ) {
                    if (Math.abs(e[4 * n] - e[4 * t + 2 * n]) > 0.01) return !1;
                    n += 1;
                }
                return !0;
            }),
            (GradientProperty.prototype.checkCollapsable = function () {
                if (this.o.length / 2 != this.c.length / 4) return !1;
                if (this.data.k.k[0].s)
                    for (var e = 0, t = this.data.k.k.length; e < t; ) {
                        if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
                        e += 1;
                    }
                else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                return !0;
            }),
            (GradientProperty.prototype.getValue = function (e) {
                if (
                    (this.prop.getValue(), (this._mdf = !1), (this._cmdf = !1), (this._omdf = !1), this.prop._mdf || e)
                ) {
                    var t,
                        n,
                        r,
                        i = 4 * this.data.p;
                    for (t = 0; t < i; t += 1)
                        (n = t % 4 == 0 ? 100 : 255),
                            (r = Math.round(this.prop.v[t] * n)),
                            this.c[t] !== r && ((this.c[t] = r), (this._cmdf = !e));
                    if (this.o.length)
                        for (i = this.prop.v.length, t = 4 * this.data.p; t < i; t += 1)
                            (n = t % 2 == 0 ? 100 : 1),
                                (r = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t]),
                                this.o[t - 4 * this.data.p] !== r &&
                                    ((this.o[t - 4 * this.data.p] = r), (this._omdf = !e));
                    this._mdf = !e;
                }
            }),
            extendPrototype([DynamicPropertyContainer], GradientProperty),
            (SVGGradientFillStyleData.prototype.initGradientData = function (e, t, n) {
                (this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)),
                    (this.s = PropertyFactory.getProp(e, t.s, 1, null, this)),
                    (this.e = PropertyFactory.getProp(e, t.e, 1, null, this)),
                    (this.h = PropertyFactory.getProp(e, t.h || { k: 0 }, 0, 0.01, this)),
                    (this.a = PropertyFactory.getProp(e, t.a || { k: 0 }, 0, degToRads, this)),
                    (this.g = new GradientProperty(e, t.g, this)),
                    (this.style = n),
                    (this.stops = []),
                    this.setGradientData(n.pElem, t),
                    this.setGradientOpacity(t, n),
                    (this._isAnimated = !!this._isAnimated);
            }),
            (SVGGradientFillStyleData.prototype.setGradientData = function (e, t) {
                var n,
                    r,
                    i,
                    s = createElementID(),
                    a = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                a.setAttribute("id", s),
                    a.setAttribute("spreadMethod", "pad"),
                    a.setAttribute("gradientUnits", "userSpaceOnUse");
                var o = [];
                for (r = 0, i = 4 * t.g.p; r < i; r += 4) (n = createNS("stop")), a.appendChild(n), o.push(n);
                e.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + s + ")"),
                    (this.gf = a),
                    (this.cst = o);
            }),
            (SVGGradientFillStyleData.prototype.setGradientOpacity = function (e, t) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var n,
                        r,
                        i,
                        s = createNS("mask"),
                        a = createNS("path");
                    s.appendChild(a);
                    var o = createElementID(),
                        l = createElementID();
                    s.setAttribute("id", l);
                    var u = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                    u.setAttribute("id", o),
                        u.setAttribute("spreadMethod", "pad"),
                        u.setAttribute("gradientUnits", "userSpaceOnUse"),
                        (i = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length);
                    var c = this.stops;
                    for (r = 4 * e.g.p; r < i; r += 2)
                        (n = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"),
                            u.appendChild(n),
                            c.push(n);
                    a.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"),
                        "gs" === e.ty &&
                            (a.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]),
                            a.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]),
                            1 === e.lj && a.setAttribute("stroke-miterlimit", e.ml)),
                        (this.of = u),
                        (this.ms = s),
                        (this.ost = c),
                        (this.maskId = l),
                        (t.msElem = a);
                }
            }),
            extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
            extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function (e, t, n, r) {
                if (0 === t) return "";
                var i,
                    s = e.o,
                    a = e.i,
                    o = e.v,
                    l = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
                for (i = 1; i < t; i += 1)
                    l +=
                        " C" +
                        r.applyToPointStringified(s[i - 1][0], s[i - 1][1]) +
                        " " +
                        r.applyToPointStringified(a[i][0], a[i][1]) +
                        " " +
                        r.applyToPointStringified(o[i][0], o[i][1]);
                return (
                    n &&
                        t &&
                        (l +=
                            " C" +
                            r.applyToPointStringified(s[i - 1][0], s[i - 1][1]) +
                            " " +
                            r.applyToPointStringified(a[0][0], a[0][1]) +
                            " " +
                            r.applyToPointStringified(o[0][0], o[0][1]) +
                            "z"),
                    l
                );
            },
            SVGElementsRenderer = (function () {
                var e = new Matrix(),
                    t = new Matrix();
                function n(e, t, n) {
                    (n || t.transform.op._mdf) && t.transform.container.setAttribute("opacity", t.transform.op.v),
                        (n || t.transform.mProps._mdf) &&
                            t.transform.container.setAttribute("transform", t.transform.mProps.v.to2dCSS());
                }
                function r() {}
                function i(n, r, i) {
                    var s,
                        a,
                        o,
                        l,
                        u,
                        c,
                        d,
                        _,
                        f,
                        p,
                        h = r.styles.length,
                        m = r.lvl;
                    for (c = 0; c < h; c += 1) {
                        if (((l = r.sh._mdf || i), r.styles[c].lvl < m)) {
                            for (_ = t.reset(), f = m - r.styles[c].lvl, p = r.transformers.length - 1; !l && f > 0; )
                                (l = r.transformers[p].mProps._mdf || l), (f -= 1), (p -= 1);
                            if (l)
                                for (f = m - r.styles[c].lvl, p = r.transformers.length - 1; f > 0; )
                                    _.multiply(r.transformers[p].mProps.v), (f -= 1), (p -= 1);
                        } else _ = e;
                        if (((a = (d = r.sh.paths)._length), l)) {
                            for (s = 0, o = ""; s < a; s += 1)
                                (u = d.shapes[s]) && u._length && (o += buildShapeString(u, u._length, u.c, _));
                            r.caches[c] = o;
                        } else o = r.caches[c];
                        (r.styles[c].d += !0 === n.hd ? "" : o), (r.styles[c]._mdf = l || r.styles[c]._mdf);
                    }
                }
                function s(e, t, n) {
                    var r = t.style;
                    (t.c._mdf || n) &&
                        r.pElem.setAttribute(
                            "fill",
                            "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")",
                        ),
                        (t.o._mdf || n) && r.pElem.setAttribute("fill-opacity", t.o.v);
                }
                function a(e, t, n) {
                    o(e, t, n), l(e, t, n);
                }
                function o(e, t, n) {
                    var r,
                        i,
                        s,
                        a,
                        o,
                        l = t.gf,
                        u = t.g._hasOpacity,
                        c = t.s.v,
                        d = t.e.v;
                    if (t.o._mdf || n) {
                        var _ = "gf" === e.ty ? "fill-opacity" : "stroke-opacity";
                        t.style.pElem.setAttribute(_, t.o.v);
                    }
                    if (t.s._mdf || n) {
                        var f = 1 === e.t ? "x1" : "cx",
                            p = "x1" === f ? "y1" : "cy";
                        l.setAttribute(f, c[0]),
                            l.setAttribute(p, c[1]),
                            u && !t.g._collapsable && (t.of.setAttribute(f, c[0]), t.of.setAttribute(p, c[1]));
                    }
                    if (t.g._cmdf || n) {
                        r = t.cst;
                        var h = t.g.c;
                        for (i = 0, s = r.length; i < s; i += 1)
                            (a = r[i]).setAttribute("offset", h[4 * i] + "%"),
                                a.setAttribute(
                                    "stop-color",
                                    "rgb(" + h[4 * i + 1] + "," + h[4 * i + 2] + "," + h[4 * i + 3] + ")",
                                );
                    }
                    if (u && (t.g._omdf || n)) {
                        var m = t.g.o;
                        for (i = 0, s = (r = t.g._collapsable ? t.cst : t.ost).length; i < s; i += 1)
                            (a = r[i]),
                                t.g._collapsable || a.setAttribute("offset", m[2 * i] + "%"),
                                a.setAttribute("stop-opacity", m[2 * i + 1]);
                    }
                    if (1 === e.t)
                        (t.e._mdf || n) &&
                            (l.setAttribute("x2", d[0]),
                            l.setAttribute("y2", d[1]),
                            u && !t.g._collapsable && (t.of.setAttribute("x2", d[0]), t.of.setAttribute("y2", d[1])));
                    else if (
                        ((t.s._mdf || t.e._mdf || n) &&
                            ((o = Math.sqrt(Math.pow(c[0] - d[0], 2) + Math.pow(c[1] - d[1], 2))),
                            l.setAttribute("r", o),
                            u && !t.g._collapsable && t.of.setAttribute("r", o)),
                        t.e._mdf || t.h._mdf || t.a._mdf || n)
                    ) {
                        o || (o = Math.sqrt(Math.pow(c[0] - d[0], 2) + Math.pow(c[1] - d[1], 2)));
                        var E = Math.atan2(d[1] - c[1], d[0] - c[0]),
                            g = t.h.v;
                        g >= 1 ? (g = 0.99) : g <= -1 && (g = -0.99);
                        var A = o * g,
                            I = Math.cos(E + t.a.v) * A + c[0],
                            T = Math.sin(E + t.a.v) * A + c[1];
                        l.setAttribute("fx", I),
                            l.setAttribute("fy", T),
                            u && !t.g._collapsable && (t.of.setAttribute("fx", I), t.of.setAttribute("fy", T));
                    }
                }
                function l(e, t, n) {
                    var r = t.style,
                        i = t.d;
                    i &&
                        (i._mdf || n) &&
                        i.dashStr &&
                        (r.pElem.setAttribute("stroke-dasharray", i.dashStr),
                        r.pElem.setAttribute("stroke-dashoffset", i.dashoffset[0])),
                        t.c &&
                            (t.c._mdf || n) &&
                            r.pElem.setAttribute(
                                "stroke",
                                "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")",
                            ),
                        (t.o._mdf || n) && r.pElem.setAttribute("stroke-opacity", t.o.v),
                        (t.w._mdf || n) &&
                            (r.pElem.setAttribute("stroke-width", t.w.v),
                            r.msElem && r.msElem.setAttribute("stroke-width", t.w.v));
                }
                return {
                    createRenderFunction: function (e) {
                        switch (e.ty) {
                            case "fl":
                                return s;
                            case "gf":
                                return o;
                            case "gs":
                                return a;
                            case "st":
                                return l;
                            case "sh":
                            case "el":
                            case "rc":
                            case "sr":
                                return i;
                            case "tr":
                                return n;
                            case "no":
                                return r;
                            default:
                                return null;
                        }
                    },
                };
            })();
        function SVGShapeElement(e, t, n) {
            (this.shapes = []),
                (this.shapesData = e.shapes),
                (this.stylesList = []),
                (this.shapeModifiers = []),
                (this.itemsData = []),
                (this.processedElements = []),
                (this.animatedContents = []),
                this.initElement(e, t, n),
                (this.prevViewData = []);
        }
        function LetterProps(e, t, n, r, i, s) {
            (this.o = e),
                (this.sw = t),
                (this.sc = n),
                (this.fc = r),
                (this.m = i),
                (this.p = s),
                (this._mdf = { o: !0, sw: !!t, sc: !!n, fc: !!r, m: !0, p: !0 });
        }
        function TextProperty(e, t) {
            (this._frameId = initialDefaultFrame),
                (this.pv = ""),
                (this.v = ""),
                (this.kf = !1),
                (this._isFirstFrame = !0),
                (this._mdf = !1),
                t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)),
                (this.data = t),
                (this.elem = e),
                (this.comp = this.elem.comp),
                (this.keysIndex = 0),
                (this.canResize = !1),
                (this.minimumFontSize = 1),
                (this.effectsSequence = []),
                (this.currentData = {
                    ascent: 0,
                    boxWidth: this.defaultBoxWidth,
                    f: "",
                    fStyle: "",
                    fWeight: "",
                    fc: "",
                    j: "",
                    justifyOffset: "",
                    l: [],
                    lh: 0,
                    lineWidths: [],
                    ls: "",
                    of: "",
                    s: "",
                    sc: "",
                    sw: 0,
                    t: 0,
                    tr: 0,
                    sz: 0,
                    ps: null,
                    fillColorAnim: !1,
                    strokeColorAnim: !1,
                    strokeWidthAnim: !1,
                    yOffset: 0,
                    finalSize: 0,
                    finalText: [],
                    finalLineHeight: 0,
                    __complete: !1,
                }),
                this.copyData(this.currentData, this.data.d.k[0].s),
                this.searchProperty() || this.completeTextData(this.currentData);
        }
        extendPrototype(
            [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                IShapeElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
            ],
            SVGShapeElement,
        ),
            (SVGShapeElement.prototype.initSecondaryElement = function () {}),
            (SVGShapeElement.prototype.identityMatrix = new Matrix()),
            (SVGShapeElement.prototype.buildExpressionInterface = function () {}),
            (SVGShapeElement.prototype.createContent = function () {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
                    this.filterUniqueShapes();
            }),
            (SVGShapeElement.prototype.filterUniqueShapes = function () {
                var e,
                    t,
                    n,
                    r,
                    i = this.shapes.length,
                    s = this.stylesList.length,
                    a = [],
                    o = !1;
                for (n = 0; n < s; n += 1) {
                    for (e = 0, r = this.stylesList[n], o = !1, a.length = 0; e < i; e += 1)
                        -1 !== (t = this.shapes[e]).styles.indexOf(r) && (a.push(t), (o = t._isAnimated || o));
                    a.length > 1 && o && this.setShapesAsAnimated(a);
                }
            }),
            (SVGShapeElement.prototype.setShapesAsAnimated = function (e) {
                var t,
                    n = e.length;
                for (t = 0; t < n; t += 1) e[t].setAsAnimated();
            }),
            (SVGShapeElement.prototype.createStyleElement = function (e, t) {
                var n,
                    r = new SVGStyleData(e, t),
                    i = r.pElem;
                return (
                    "st" === e.ty
                        ? (n = new SVGStrokeStyleData(this, e, r))
                        : "fl" === e.ty
                          ? (n = new SVGFillStyleData(this, e, r))
                          : "gf" === e.ty || "gs" === e.ty
                            ? ((n = new ("gf" === e.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(
                                  this,
                                  e,
                                  r,
                              )),
                              this.globalData.defs.appendChild(n.gf),
                              n.maskId &&
                                  (this.globalData.defs.appendChild(n.ms),
                                  this.globalData.defs.appendChild(n.of),
                                  i.setAttribute("mask", "url(" + getLocationHref() + "#" + n.maskId + ")")))
                            : "no" === e.ty && (n = new SVGNoStyleData(this, e, r)),
                    ("st" === e.ty || "gs" === e.ty) &&
                        (i.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]),
                        i.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]),
                        i.setAttribute("fill-opacity", "0"),
                        1 === e.lj && i.setAttribute("stroke-miterlimit", e.ml)),
                    2 === e.r && i.setAttribute("fill-rule", "evenodd"),
                    e.ln && i.setAttribute("id", e.ln),
                    e.cl && i.setAttribute("class", e.cl),
                    e.bm && (i.style["mix-blend-mode"] = getBlendMode(e.bm)),
                    this.stylesList.push(r),
                    this.addToAnimatedContents(e, n),
                    n
                );
            }),
            (SVGShapeElement.prototype.createGroupElement = function (e) {
                var t = new ShapeGroupData();
                return (
                    e.ln && t.gr.setAttribute("id", e.ln),
                    e.cl && t.gr.setAttribute("class", e.cl),
                    e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)),
                    t
                );
            }),
            (SVGShapeElement.prototype.createTransformElement = function (e, t) {
                var n = TransformPropertyFactory.getTransformProperty(this, e, this),
                    r = new SVGTransformData(n, n.o, t);
                return this.addToAnimatedContents(e, r), r;
            }),
            (SVGShapeElement.prototype.createShapeElement = function (e, t, n) {
                var r = 4;
                "rc" === e.ty ? (r = 5) : "el" === e.ty ? (r = 6) : "sr" === e.ty && (r = 7);
                var i = new SVGShapeData(t, n, ShapePropertyFactory.getShapeProp(this, e, r, this));
                return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(e, i), i;
            }),
            (SVGShapeElement.prototype.addToAnimatedContents = function (e, t) {
                for (var n = 0, r = this.animatedContents.length; n < r; ) {
                    if (this.animatedContents[n].element === t) return;
                    n += 1;
                }
                this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(e), element: t, data: e });
            }),
            (SVGShapeElement.prototype.setElementStyles = function (e) {
                var t,
                    n = e.styles,
                    r = this.stylesList.length;
                for (t = 0; t < r; t += 1) this.stylesList[t].closed || n.push(this.stylesList[t]);
            }),
            (SVGShapeElement.prototype.reloadShapes = function () {
                this._isFirstFrame = !0;
                var e,
                    t = this.itemsData.length;
                for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                for (
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
                        this.filterUniqueShapes(),
                        t = this.dynamicProperties.length,
                        e = 0;
                    e < t;
                    e += 1
                )
                    this.dynamicProperties[e].getValue();
                this.renderModifiers();
            }),
            (SVGShapeElement.prototype.searchShapes = function (e, t, n, r, i, s, a) {
                var o,
                    l,
                    u,
                    c,
                    d,
                    _,
                    f = [].concat(s),
                    p = e.length - 1,
                    h = [],
                    m = [];
                for (o = p; o >= 0; o -= 1) {
                    if (
                        ((_ = this.searchProcessedElement(e[o])) ? (t[o] = n[_ - 1]) : (e[o]._render = a),
                        "fl" === e[o].ty ||
                            "st" === e[o].ty ||
                            "gf" === e[o].ty ||
                            "gs" === e[o].ty ||
                            "no" === e[o].ty)
                    )
                        _ ? (t[o].style.closed = !1) : (t[o] = this.createStyleElement(e[o], i)),
                            e[o]._render && t[o].style.pElem.parentNode !== r && r.appendChild(t[o].style.pElem),
                            h.push(t[o].style);
                    else if ("gr" === e[o].ty) {
                        if (_) for (l = 0, u = t[o].it.length; l < u; l += 1) t[o].prevViewData[l] = t[o].it[l];
                        else t[o] = this.createGroupElement(e[o]);
                        this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, i + 1, f, a),
                            e[o]._render && t[o].gr.parentNode !== r && r.appendChild(t[o].gr);
                    } else
                        "tr" === e[o].ty
                            ? (_ || (t[o] = this.createTransformElement(e[o], r)), (c = t[o].transform), f.push(c))
                            : "sh" === e[o].ty || "rc" === e[o].ty || "el" === e[o].ty || "sr" === e[o].ty
                              ? (_ || (t[o] = this.createShapeElement(e[o], f, i)), this.setElementStyles(t[o]))
                              : "tm" === e[o].ty ||
                                  "rd" === e[o].ty ||
                                  "ms" === e[o].ty ||
                                  "pb" === e[o].ty ||
                                  "zz" === e[o].ty ||
                                  "op" === e[o].ty
                                ? (_
                                      ? ((d = t[o]).closed = !1)
                                      : ((d = ShapeModifiers.getModifier(e[o].ty)).init(this, e[o]),
                                        (t[o] = d),
                                        this.shapeModifiers.push(d)),
                                  m.push(d))
                                : "rp" === e[o].ty &&
                                  (_
                                      ? ((d = t[o]).closed = !0)
                                      : ((d = ShapeModifiers.getModifier(e[o].ty)),
                                        (t[o] = d),
                                        d.init(this, e, o, t),
                                        this.shapeModifiers.push(d),
                                        (a = !1)),
                                  m.push(d));
                    this.addProcessedElement(e[o], o + 1);
                }
                for (o = 0, p = h.length; o < p; o += 1) h[o].closed = !0;
                for (o = 0, p = m.length; o < p; o += 1) m[o].closed = !0;
            }),
            (SVGShapeElement.prototype.renderInnerContent = function () {
                this.renderModifiers();
                var e,
                    t = this.stylesList.length;
                for (e = 0; e < t; e += 1) this.stylesList[e].reset();
                for (this.renderShape(), e = 0; e < t; e += 1)
                    (this.stylesList[e]._mdf || this._isFirstFrame) &&
                        (this.stylesList[e].msElem &&
                            (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d),
                            (this.stylesList[e].d = "M0 0" + this.stylesList[e].d)),
                        this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"));
            }),
            (SVGShapeElement.prototype.renderShape = function () {
                var e,
                    t,
                    n = this.animatedContents.length;
                for (e = 0; e < n; e += 1)
                    (t = this.animatedContents[e]),
                        (this._isFirstFrame || t.element._isAnimated) &&
                            !0 !== t.data &&
                            t.fn(t.data, t.element, this._isFirstFrame);
            }),
            (SVGShapeElement.prototype.destroy = function () {
                this.destroyBaseElement(), (this.shapesData = null), (this.itemsData = null);
            }),
            (LetterProps.prototype.update = function (e, t, n, r, i, s) {
                (this._mdf.o = !1),
                    (this._mdf.sw = !1),
                    (this._mdf.sc = !1),
                    (this._mdf.fc = !1),
                    (this._mdf.m = !1),
                    (this._mdf.p = !1);
                var a = !1;
                return (
                    this.o !== e && ((this.o = e), (this._mdf.o = !0), (a = !0)),
                    this.sw !== t && ((this.sw = t), (this._mdf.sw = !0), (a = !0)),
                    this.sc !== n && ((this.sc = n), (this._mdf.sc = !0), (a = !0)),
                    this.fc !== r && ((this.fc = r), (this._mdf.fc = !0), (a = !0)),
                    this.m !== i && ((this.m = i), (this._mdf.m = !0), (a = !0)),
                    s.length &&
                        (this.p[0] !== s[0] ||
                            this.p[1] !== s[1] ||
                            this.p[4] !== s[4] ||
                            this.p[5] !== s[5] ||
                            this.p[12] !== s[12] ||
                            this.p[13] !== s[13]) &&
                        ((this.p = s), (this._mdf.p = !0), (a = !0)),
                    a
                );
            }),
            (TextProperty.prototype.defaultBoxWidth = [0, 0]),
            (TextProperty.prototype.copyData = function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
            }),
            (TextProperty.prototype.setCurrentData = function (e) {
                e.__complete || this.completeTextData(e),
                    (this.currentData = e),
                    (this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth),
                    (this._mdf = !0);
            }),
            (TextProperty.prototype.searchProperty = function () {
                return this.searchKeyframes();
            }),
            (TextProperty.prototype.searchKeyframes = function () {
                return (
                    (this.kf = this.data.d.k.length > 1),
                    this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
                    this.kf
                );
            }),
            (TextProperty.prototype.addEffect = function (e) {
                this.effectsSequence.push(e), this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.getValue = function (e) {
                if ((this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) || e) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var t,
                        n = this.currentData,
                        r = this.keysIndex;
                    if (this.lock) return void this.setCurrentData(this.currentData);
                    (this.lock = !0), (this._mdf = !1);
                    var i = this.effectsSequence.length,
                        s = e || this.data.d.k[this.keysIndex].s;
                    for (t = 0; t < i; t += 1)
                        s =
                            r !== this.keysIndex
                                ? this.effectsSequence[t](s, s.t)
                                : this.effectsSequence[t](this.currentData, s.t);
                    n !== s && this.setCurrentData(s),
                        (this.v = this.currentData),
                        (this.pv = this.v),
                        (this.lock = !1),
                        (this.frameId = this.elem.globalData.frameId);
                }
            }),
            (TextProperty.prototype.getKeyframeValue = function () {
                for (
                    var e = this.data.d.k, t = this.elem.comp.renderedFrame, n = 0, r = e.length;
                    n <= r - 1 && n !== r - 1 && !(e[n + 1].t > t);
                )
                    n += 1;
                return this.keysIndex !== n && (this.keysIndex = n), this.data.d.k[this.keysIndex].s;
            }),
            (TextProperty.prototype.buildFinalText = function (e) {
                for (var t, n, r = [], i = 0, s = e.length, a = !1, o = !1, l = ""; i < s; )
                    (a = o),
                        (o = !1),
                        (t = e.charCodeAt(i)),
                        (l = e.charAt(i)),
                        FontManager.isCombinedCharacter(t)
                            ? (a = !0)
                            : t >= 55296 && t <= 56319
                              ? FontManager.isRegionalFlag(e, i)
                                  ? (l = e.substr(i, 14))
                                  : (n = e.charCodeAt(i + 1)) >= 56320 &&
                                    n <= 57343 &&
                                    (FontManager.isModifier(t, n)
                                        ? ((l = e.substr(i, 2)), (a = !0))
                                        : (l = FontManager.isFlagEmoji(e.substr(i, 4))
                                              ? e.substr(i, 4)
                                              : e.substr(i, 2)))
                              : t > 56319
                                ? ((n = e.charCodeAt(i + 1)), FontManager.isVariationSelector(t) && (a = !0))
                                : FontManager.isZeroWidthJoiner(t) && ((a = !0), (o = !0)),
                        a ? ((r[r.length - 1] += l), (a = !1)) : r.push(l),
                        (i += l.length);
                return r;
            }),
            (TextProperty.prototype.completeTextData = function (e) {
                e.__complete = !0;
                var t = this.elem.globalData.fontManager,
                    n = this.data,
                    r = [],
                    i = 0,
                    s = n.m.g,
                    a = 0,
                    o = 0,
                    l = 0,
                    u = [],
                    c = 0,
                    d = 0,
                    _ = t.getFontByName(e.f),
                    f = 0,
                    p = getFontProperties(_);
                (e.fWeight = p.weight),
                    (e.fStyle = p.style),
                    (e.finalSize = e.s),
                    (e.finalText = this.buildFinalText(e.t)),
                    (E = e.finalText.length),
                    (e.finalLineHeight = e.lh);
                var h = (e.tr / 1e3) * e.finalSize;
                if (e.sz)
                    for (var m, E, g, A, I, T, S, y, v, N, C = !0, R = e.sz[0], O = e.sz[1]; C; ) {
                        (N = this.buildFinalText(e.t)),
                            (v = 0),
                            (c = 0),
                            (E = N.length),
                            (h = (e.tr / 1e3) * e.finalSize);
                        var b = -1;
                        for (m = 0; m < E; m += 1)
                            (y = N[m].charCodeAt(0)),
                                (g = !1),
                                " " === N[m]
                                    ? (b = m)
                                    : (13 === y || 3 === y) &&
                                      ((c = 0), (g = !0), (v += e.finalLineHeight || 1.2 * e.finalSize)),
                                t.chars
                                    ? ((S = t.getCharData(N[m], _.fStyle, _.fFamily)),
                                      (f = g ? 0 : (S.w * e.finalSize) / 100))
                                    : (f = t.measureText(N[m], e.f, e.finalSize)),
                                c + f > R && " " !== N[m]
                                    ? (-1 === b ? (E += 1) : (m = b),
                                      (v += e.finalLineHeight || 1.2 * e.finalSize),
                                      N.splice(m, +(b === m), "\r"),
                                      (b = -1),
                                      (c = 0))
                                    : ((c += f), (c += h));
                        (v += (_.ascent * e.finalSize) / 100),
                            this.canResize && e.finalSize > this.minimumFontSize && O < v
                                ? ((e.finalSize -= 1), (e.finalLineHeight = (e.finalSize * e.lh) / e.s))
                                : ((e.finalText = N), (E = e.finalText.length), (C = !1));
                    }
                (c = -h), (f = 0);
                var D = 0;
                for (m = 0; m < E; m += 1)
                    if (
                        ((g = !1),
                        13 === (y = (M = e.finalText[m]).charCodeAt(0)) || 3 === y
                            ? ((D = 0), u.push(c), (d = c > d ? c : d), (c = -2 * h), (A = ""), (g = !0), (l += 1))
                            : (A = M),
                        t.chars
                            ? ((S = t.getCharData(M, _.fStyle, t.getFontByName(e.f).fFamily)),
                              (f = g ? 0 : (S.w * e.finalSize) / 100))
                            : (f = t.measureText(A, e.f, e.finalSize)),
                        " " === M ? (D += f + h) : ((c += f + h + D), (D = 0)),
                        r.push({ l: f, an: f, add: a, n: g, anIndexes: [], val: A, line: l, animatorJustifyOffset: 0 }),
                        2 == s)
                    ) {
                        if (((a += f), "" === A || " " === A || m === E - 1)) {
                            for (("" === A || " " === A) && (a -= f); o <= m; )
                                (r[o].an = a), (r[o].ind = i), (r[o].extra = f), (o += 1);
                            (i += 1), (a = 0);
                        }
                    } else if (3 == s) {
                        if (((a += f), "" === A || m === E - 1)) {
                            for ("" === A && (a -= f); o <= m; )
                                (r[o].an = a), (r[o].ind = i), (r[o].extra = f), (o += 1);
                            (a = 0), (i += 1);
                        }
                    } else (r[i].ind = i), (r[i].extra = 0), (i += 1);
                if (((e.l = r), (d = c > d ? c : d), u.push(c), e.sz)) (e.boxWidth = e.sz[0]), (e.justifyOffset = 0);
                else
                    switch (((e.boxWidth = d), e.j)) {
                        case 1:
                            e.justifyOffset = -e.boxWidth;
                            break;
                        case 2:
                            e.justifyOffset = -e.boxWidth / 2;
                            break;
                        default:
                            e.justifyOffset = 0;
                    }
                e.lineWidths = u;
                var L = n.a;
                T = L.length;
                var w = [];
                for (I = 0; I < T; I += 1) {
                    for (
                        (P = L[I]).a.sc && (e.strokeColorAnim = !0),
                            P.a.sw && (e.strokeWidthAnim = !0),
                            (P.a.fc || P.a.fh || P.a.fs || P.a.fb) && (e.fillColorAnim = !0),
                            U = 0,
                            k = P.s.b,
                            m = 0;
                        m < E;
                        m += 1
                    )
                        ((x = r[m]).anIndexes[I] = U),
                            ((1 == k && "" !== x.val) ||
                                (2 == k && "" !== x.val && " " !== x.val) ||
                                (3 == k && (x.n || " " == x.val || m == E - 1)) ||
                                (4 == k && (x.n || m == E - 1))) &&
                                (1 === P.s.rn && w.push(U), (U += 1));
                    n.a[I].s.totalChars = U;
                    var M,
                        P,
                        x,
                        k,
                        U,
                        G,
                        F = -1;
                    if (1 === P.s.rn)
                        for (m = 0; m < E; m += 1)
                            F != (x = r[m]).anIndexes[I] &&
                                ((F = x.anIndexes[I]), (G = w.splice(Math.floor(Math.random() * w.length), 1)[0])),
                                (x.anIndexes[I] = G);
                }
                (e.yOffset = e.finalLineHeight || 1.2 * e.finalSize),
                    (e.ls = e.ls || 0),
                    (e.ascent = (_.ascent * e.finalSize) / 100);
            }),
            (TextProperty.prototype.updateDocumentData = function (e, t) {
                t = void 0 === t ? this.keysIndex : t;
                var n = this.copyData({}, this.data.d.k[t].s);
                (n = this.copyData(n, e)),
                    (this.data.d.k[t].s = n),
                    this.recalculate(t),
                    this.setCurrentData(n),
                    this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.recalculate = function (e) {
                var t = this.data.d.k[e].s;
                (t.__complete = !1), (this.keysIndex = 0), (this._isFirstFrame = !0), this.getValue(t);
            }),
            (TextProperty.prototype.canResizeFont = function (e) {
                (this.canResize = e), this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.setMinimumFontSize = function (e) {
                (this.minimumFontSize = Math.floor(e) || 1),
                    this.recalculate(this.keysIndex),
                    this.elem.addDynamicProperty(this);
            });
        var TextSelectorProp = (function () {
            var e = Math.max,
                t = Math.min,
                n = Math.floor;
            function r(e, t) {
                (this._currentTextLength = -1),
                    (this.k = !1),
                    (this.data = t),
                    (this.elem = e),
                    (this.comp = e.comp),
                    (this.finalS = 0),
                    (this.finalE = 0),
                    this.initDynamicPropertyContainer(e),
                    (this.s = PropertyFactory.getProp(e, t.s || { k: 0 }, 0, 0, this)),
                    "e" in t ? (this.e = PropertyFactory.getProp(e, t.e, 0, 0, this)) : (this.e = { v: 100 }),
                    (this.o = PropertyFactory.getProp(e, t.o || { k: 0 }, 0, 0, this)),
                    (this.xe = PropertyFactory.getProp(e, t.xe || { k: 0 }, 0, 0, this)),
                    (this.ne = PropertyFactory.getProp(e, t.ne || { k: 0 }, 0, 0, this)),
                    (this.sm = PropertyFactory.getProp(e, t.sm || { k: 100 }, 0, 0, this)),
                    (this.a = PropertyFactory.getProp(e, t.a, 0, 0.01, this)),
                    this.dynamicProperties.length || this.getValue();
            }
            return (
                (r.prototype = {
                    getMult: function (r) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var i = 0,
                            s = 0,
                            a = 1,
                            o = 1;
                        this.ne.v > 0 ? (i = this.ne.v / 100) : (s = -this.ne.v / 100),
                            this.xe.v > 0 ? (a = 1 - this.xe.v / 100) : (o = 1 + this.xe.v / 100);
                        var l = BezierFactory.getBezierEasing(i, s, a, o).get,
                            u = 0,
                            c = this.finalS,
                            d = this.finalE,
                            _ = this.data.sh;
                        if (2 === _) u = l((u = d === c ? +(r >= d) : e(0, t(0.5 / (d - c) + (r - c) / (d - c), 1))));
                        else if (3 === _)
                            u = l((u = d === c ? (r >= d ? 0 : 1) : 1 - e(0, t(0.5 / (d - c) + (r - c) / (d - c), 1))));
                        else if (4 === _)
                            d === c
                                ? (u = 0)
                                : (u = e(0, t(0.5 / (d - c) + (r - c) / (d - c), 1))) < 0.5
                                  ? (u *= 2)
                                  : (u = 1 - 2 * (u - 0.5)),
                                (u = l(u));
                        else if (5 === _) {
                            if (d === c) u = 0;
                            else {
                                var f = d - c,
                                    p = -f / 2 + (r = t(e(0, r + 0.5 - c), d - c)),
                                    h = f / 2;
                                u = Math.sqrt(1 - (p * p) / (h * h));
                            }
                            u = l(u);
                        } else
                            6 === _
                                ? (u = l(
                                      (u =
                                          d === c
                                              ? 0
                                              : (1 +
                                                    Math.cos(
                                                        Math.PI +
                                                            (2 * Math.PI * (r = t(e(0, r + 0.5 - c), d - c))) / (d - c),
                                                    )) /
                                                2),
                                  ))
                                : (r >= n(c) && (u = r - c < 0 ? e(0, t(t(d, 1) - (c - r), 1)) : e(0, t(d - r, 1))),
                                  (u = l(u)));
                        if (100 !== this.sm.v) {
                            var m = 0.01 * this.sm.v;
                            0 === m && (m = 1e-8);
                            var E = 0.5 - 0.5 * m;
                            u < E ? (u = 0) : (u = (u - E) / m) > 1 && (u = 1);
                        }
                        return u * this.a.v;
                    },
                    getValue: function (e) {
                        this.iterateDynamicProperties(),
                            (this._mdf = e || this._mdf),
                            (this._currentTextLength = this.elem.textProperty.currentData.l.length || 0),
                            e && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var t = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                            n = this.o.v / t,
                            r = this.s.v / t + n,
                            i = this.e.v / t + n;
                        if (r > i) {
                            var s = r;
                            (r = i), (i = s);
                        }
                        (this.finalS = r), (this.finalE = i);
                    },
                }),
                extendPrototype([DynamicPropertyContainer], r),
                {
                    getTextSelectorProp: function (e, t, n) {
                        return new r(e, t, n);
                    },
                }
            );
        })();
        function TextAnimatorDataProperty(e, t, n) {
            var r = { propType: !1 },
                i = PropertyFactory.getProp,
                s = t.a;
            (this.a = {
                r: s.r ? i(e, s.r, 0, degToRads, n) : r,
                rx: s.rx ? i(e, s.rx, 0, degToRads, n) : r,
                ry: s.ry ? i(e, s.ry, 0, degToRads, n) : r,
                sk: s.sk ? i(e, s.sk, 0, degToRads, n) : r,
                sa: s.sa ? i(e, s.sa, 0, degToRads, n) : r,
                s: s.s ? i(e, s.s, 1, 0.01, n) : r,
                a: s.a ? i(e, s.a, 1, 0, n) : r,
                o: s.o ? i(e, s.o, 0, 0.01, n) : r,
                p: s.p ? i(e, s.p, 1, 0, n) : r,
                sw: s.sw ? i(e, s.sw, 0, 0, n) : r,
                sc: s.sc ? i(e, s.sc, 1, 0, n) : r,
                fc: s.fc ? i(e, s.fc, 1, 0, n) : r,
                fh: s.fh ? i(e, s.fh, 0, 0, n) : r,
                fs: s.fs ? i(e, s.fs, 0, 0.01, n) : r,
                fb: s.fb ? i(e, s.fb, 0, 0.01, n) : r,
                t: s.t ? i(e, s.t, 0, 0, n) : r,
            }),
                (this.s = TextSelectorProp.getTextSelectorProp(e, t.s, n)),
                (this.s.t = t.s.t);
        }
        function TextAnimatorProperty(e, t, n) {
            (this._isFirstFrame = !0),
                (this._hasMaskedPath = !1),
                (this._frameId = -1),
                (this._textData = e),
                (this._renderType = t),
                (this._elem = n),
                (this._animatorsData = createSizedArray(this._textData.a.length)),
                (this._pathData = {}),
                (this._moreOptions = { alignment: {} }),
                (this.renderedLetters = []),
                (this.lettersChangedFlag = !1),
                this.initDynamicPropertyContainer(n);
        }
        function ITextElement() {}
        (TextAnimatorProperty.prototype.searchProperties = function () {
            var e,
                t,
                n = this._textData.a.length,
                r = PropertyFactory.getProp;
            for (e = 0; e < n; e += 1)
                (t = this._textData.a[e]), (this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this));
            this._textData.p && "m" in this._textData.p
                ? ((this._pathData = {
                      a: r(this._elem, this._textData.p.a, 0, 0, this),
                      f: r(this._elem, this._textData.p.f, 0, 0, this),
                      l: r(this._elem, this._textData.p.l, 0, 0, this),
                      r: r(this._elem, this._textData.p.r, 0, 0, this),
                      p: r(this._elem, this._textData.p.p, 0, 0, this),
                      m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
                  }),
                  (this._hasMaskedPath = !0))
                : (this._hasMaskedPath = !1),
                (this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this));
        }),
            (TextAnimatorProperty.prototype.getMeasures = function (e, t) {
                if (
                    ((this.lettersChangedFlag = t),
                    this._mdf || this._isFirstFrame || t || (this._hasMaskedPath && this._pathData.m._mdf))
                ) {
                    this._isFirstFrame = !1;
                    var n,
                        r,
                        i,
                        s,
                        a,
                        o,
                        l,
                        u,
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
                        I = this._moreOptions.alignment.v,
                        T = this._animatorsData,
                        S = this._textData,
                        y = this.mHelper,
                        v = this._renderType,
                        N = this.renderedLetters.length,
                        C = e.l;
                    if (this._hasMaskedPath) {
                        if (((W = this._pathData.m), !this._pathData.n || this._pathData._mdf)) {
                            var R,
                                O,
                                b,
                                D,
                                L,
                                w,
                                M,
                                P,
                                x,
                                k,
                                U,
                                G,
                                F,
                                V,
                                B,
                                H,
                                j,
                                Y,
                                W,
                                K,
                                $ = W.v;
                            for (
                                this._pathData.r.v && ($ = $.reverse()),
                                    L = { tLength: 0, segments: [] },
                                    D = $._length - 1,
                                    H = 0,
                                    b = 0;
                                b < D;
                                b += 1
                            )
                                (K = bez.buildBezierData(
                                    $.v[b],
                                    $.v[b + 1],
                                    [$.o[b][0] - $.v[b][0], $.o[b][1] - $.v[b][1]],
                                    [$.i[b + 1][0] - $.v[b + 1][0], $.i[b + 1][1] - $.v[b + 1][1]],
                                )),
                                    (L.tLength += K.segmentLength),
                                    L.segments.push(K),
                                    (H += K.segmentLength);
                            (b = D),
                                W.v.c &&
                                    ((K = bez.buildBezierData(
                                        $.v[b],
                                        $.v[0],
                                        [$.o[b][0] - $.v[b][0], $.o[b][1] - $.v[b][1]],
                                        [$.i[0][0] - $.v[0][0], $.i[0][1] - $.v[0][1]],
                                    )),
                                    (L.tLength += K.segmentLength),
                                    L.segments.push(K),
                                    (H += K.segmentLength)),
                                (this._pathData.pi = L);
                        }
                        if (
                            ((L = this._pathData.pi),
                            (w = this._pathData.f.v),
                            (U = 0),
                            (k = 1),
                            (P = 0),
                            (x = !0),
                            (V = L.segments),
                            w < 0 && W.v.c)
                        )
                            for (
                                L.tLength < Math.abs(w) && (w = -Math.abs(w) % L.tLength),
                                    U = V.length - 1,
                                    k = (F = V[U].points).length - 1;
                                w < 0;
                            )
                                (w += F[k].partialLength),
                                    (k -= 1) < 0 && ((U -= 1), (k = (F = V[U].points).length - 1));
                        (G = (F = V[U].points)[k - 1]), (B = (M = F[k]).partialLength);
                    }
                    (D = C.length), (R = 0), (O = 0);
                    var z = 1.2 * e.finalSize * 0.714,
                        q = !0;
                    s = T.length;
                    var Z = -1,
                        X = w,
                        Q = U,
                        J = k,
                        ee = -1,
                        et = "",
                        en = this.defaultPropsArray;
                    if (2 === e.j || 1 === e.j) {
                        var er = 0,
                            ei = 0,
                            es = 2 === e.j ? -0.5 : -1,
                            ea = 0,
                            eo = !0;
                        for (b = 0; b < D; b += 1)
                            if (C[b].n) {
                                for (er && (er += ei); ea < b; ) (C[ea].animatorJustifyOffset = er), (ea += 1);
                                (er = 0), (eo = !0);
                            } else {
                                for (i = 0; i < s; i += 1)
                                    (n = T[i].a).t.propType &&
                                        (eo && 2 === e.j && (ei += n.t.v * es),
                                        (o = (r = T[i].s).getMult(C[b].anIndexes[i], S.a[i].s.totalChars)).length
                                            ? (er += n.t.v * o[0] * es)
                                            : (er += n.t.v * o * es));
                                eo = !1;
                            }
                        for (er && (er += ei); ea < b; ) (C[ea].animatorJustifyOffset = er), (ea += 1);
                    }
                    for (b = 0; b < D; b += 1) {
                        if ((y.reset(), (d = 1), C[b].n))
                            (R = 0),
                                (O += e.yOffset),
                                (O += +!!q),
                                (w = X),
                                (q = !1),
                                this._hasMaskedPath &&
                                    ((U = Q),
                                    (k = J),
                                    (G = (F = V[U].points)[k - 1]),
                                    (B = (M = F[k]).partialLength),
                                    (P = 0)),
                                (et = ""),
                                (g = ""),
                                (m = ""),
                                (A = ""),
                                (en = this.defaultPropsArray);
                        else {
                            if (this._hasMaskedPath) {
                                if (ee !== C[b].line) {
                                    switch (e.j) {
                                        case 1:
                                            w += H - e.lineWidths[C[b].line];
                                            break;
                                        case 2:
                                            w += (H - e.lineWidths[C[b].line]) / 2;
                                    }
                                    ee = C[b].line;
                                }
                                Z !== C[b].ind && (C[Z] && (w += C[Z].extra), (w += C[b].an / 2), (Z = C[b].ind)),
                                    (w += I[0] * C[b].an * 0.005);
                                var el = 0;
                                for (i = 0; i < s; i += 1)
                                    (n = T[i].a).p.propType &&
                                        ((o = (r = T[i].s).getMult(C[b].anIndexes[i], S.a[i].s.totalChars)).length
                                            ? (el += n.p.v[0] * o[0])
                                            : (el += n.p.v[0] * o)),
                                        n.a.propType &&
                                            ((o = (r = T[i].s).getMult(C[b].anIndexes[i], S.a[i].s.totalChars)).length
                                                ? (el += n.a.v[0] * o[0])
                                                : (el += n.a.v[0] * o));
                                for (
                                    x = !0,
                                        this._pathData.a.v &&
                                            (w =
                                                0.5 * C[0].an +
                                                ((H - this._pathData.f.v - 0.5 * C[0].an - 0.5 * C[C.length - 1].an) *
                                                    Z) /
                                                    (D - 1) +
                                                this._pathData.f.v);
                                    x;
                                )
                                    P + B >= w + el || !F
                                        ? ((j = (w + el - P) / M.partialLength),
                                          (u = G.point[0] + (M.point[0] - G.point[0]) * j),
                                          (c = G.point[1] + (M.point[1] - G.point[1]) * j),
                                          y.translate(-I[0] * C[b].an * 0.005, -(0.01 * (I[1] * z))),
                                          (x = !1))
                                        : F &&
                                          ((P += M.partialLength),
                                          (k += 1) >= F.length &&
                                              ((k = 0),
                                              V[(U += 1)]
                                                  ? (F = V[U].points)
                                                  : W.v.c
                                                    ? ((k = 0), (F = V[(U = 0)].points))
                                                    : ((P -= M.partialLength), (F = null))),
                                          F && ((G = M), (B = (M = F[k]).partialLength)));
                                (l = C[b].an / 2 - C[b].add), y.translate(-l, 0, 0);
                            } else
                                (l = C[b].an / 2 - C[b].add),
                                    y.translate(-l, 0, 0),
                                    y.translate(-I[0] * C[b].an * 0.005, -I[1] * z * 0.01, 0);
                            for (i = 0; i < s; i += 1)
                                (n = T[i].a).t.propType &&
                                    ((o = (r = T[i].s).getMult(C[b].anIndexes[i], S.a[i].s.totalChars)),
                                    (0 !== R || 0 !== e.j) &&
                                        (this._hasMaskedPath
                                            ? o.length
                                                ? (w += n.t.v * o[0])
                                                : (w += n.t.v * o)
                                            : o.length
                                              ? (R += n.t.v * o[0])
                                              : (R += n.t.v * o)));
                            for (
                                e.strokeWidthAnim && (f = e.sw || 0),
                                    e.strokeColorAnim && (_ = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]),
                                    e.fillColorAnim && e.fc && (p = [e.fc[0], e.fc[1], e.fc[2]]),
                                    i = 0;
                                i < s;
                                i += 1
                            )
                                (n = T[i].a).a.propType &&
                                    ((o = (r = T[i].s).getMult(C[b].anIndexes[i], S.a[i].s.totalChars)).length
                                        ? y.translate(-n.a.v[0] * o[0], -n.a.v[1] * o[1], n.a.v[2] * o[2])
                                        : y.translate(-n.a.v[0] * o, -n.a.v[1] * o, n.a.v[2] * o));
                            for (i = 0; i < s; i += 1)
                                (n = T[i].a).s.propType &&
                                    ((o = (r = T[i].s).getMult(C[b].anIndexes[i], S.a[i].s.totalChars)).length
                                        ? y.scale(1 + (n.s.v[0] - 1) * o[0], 1 + (n.s.v[1] - 1) * o[1], 1)
                                        : y.scale(1 + (n.s.v[0] - 1) * o, 1 + (n.s.v[1] - 1) * o, 1));
                            for (i = 0; i < s; i += 1) {
                                if (
                                    ((n = T[i].a),
                                    (o = (r = T[i].s).getMult(C[b].anIndexes[i], S.a[i].s.totalChars)),
                                    n.sk.propType &&
                                        (o.length
                                            ? y.skewFromAxis(-n.sk.v * o[0], n.sa.v * o[1])
                                            : y.skewFromAxis(-n.sk.v * o, n.sa.v * o)),
                                    n.r.propType && (o.length ? y.rotateZ(-n.r.v * o[2]) : y.rotateZ(-n.r.v * o)),
                                    n.ry.propType && (o.length ? y.rotateY(n.ry.v * o[1]) : y.rotateY(n.ry.v * o)),
                                    n.rx.propType && (o.length ? y.rotateX(n.rx.v * o[0]) : y.rotateX(n.rx.v * o)),
                                    n.o.propType &&
                                        (o.length ? (d += (n.o.v * o[0] - d) * o[0]) : (d += (n.o.v * o - d) * o)),
                                    e.strokeWidthAnim &&
                                        n.sw.propType &&
                                        (o.length ? (f += n.sw.v * o[0]) : (f += n.sw.v * o)),
                                    e.strokeColorAnim && n.sc.propType)
                                )
                                    for (h = 0; h < 3; h += 1)
                                        o.length
                                            ? (_[h] += (n.sc.v[h] - _[h]) * o[0])
                                            : (_[h] += (n.sc.v[h] - _[h]) * o);
                                if (e.fillColorAnim && e.fc) {
                                    if (n.fc.propType)
                                        for (h = 0; h < 3; h += 1)
                                            o.length
                                                ? (p[h] += (n.fc.v[h] - p[h]) * o[0])
                                                : (p[h] += (n.fc.v[h] - p[h]) * o);
                                    n.fh.propType &&
                                        (p = o.length ? addHueToRGB(p, n.fh.v * o[0]) : addHueToRGB(p, n.fh.v * o)),
                                        n.fs.propType &&
                                            (p = o.length
                                                ? addSaturationToRGB(p, n.fs.v * o[0])
                                                : addSaturationToRGB(p, n.fs.v * o)),
                                        n.fb.propType &&
                                            (p = o.length
                                                ? addBrightnessToRGB(p, n.fb.v * o[0])
                                                : addBrightnessToRGB(p, n.fb.v * o));
                                }
                            }
                            for (i = 0; i < s; i += 1)
                                (n = T[i].a).p.propType &&
                                    ((o = (r = T[i].s).getMult(C[b].anIndexes[i], S.a[i].s.totalChars)),
                                    this._hasMaskedPath
                                        ? o.length
                                            ? y.translate(0, n.p.v[1] * o[0], -n.p.v[2] * o[1])
                                            : y.translate(0, n.p.v[1] * o, -n.p.v[2] * o)
                                        : o.length
                                          ? y.translate(n.p.v[0] * o[0], n.p.v[1] * o[1], -n.p.v[2] * o[2])
                                          : y.translate(n.p.v[0] * o, n.p.v[1] * o, -n.p.v[2] * o));
                            if (
                                (e.strokeWidthAnim && (m = f < 0 ? 0 : f),
                                e.strokeColorAnim &&
                                    (E =
                                        "rgb(" +
                                        Math.round(255 * _[0]) +
                                        "," +
                                        Math.round(255 * _[1]) +
                                        "," +
                                        Math.round(255 * _[2]) +
                                        ")"),
                                e.fillColorAnim &&
                                    e.fc &&
                                    (g =
                                        "rgb(" +
                                        Math.round(255 * p[0]) +
                                        "," +
                                        Math.round(255 * p[1]) +
                                        "," +
                                        Math.round(255 * p[2]) +
                                        ")"),
                                this._hasMaskedPath)
                            ) {
                                if (
                                    (y.translate(0, -e.ls), y.translate(0, I[1] * z * 0.01 + O, 0), this._pathData.p.v)
                                ) {
                                    var eu =
                                        (180 * Math.atan((Y = (M.point[1] - G.point[1]) / (M.point[0] - G.point[0])))) /
                                        Math.PI;
                                    M.point[0] < G.point[0] && (eu += 180), y.rotate((-eu * Math.PI) / 180);
                                }
                                y.translate(u, c, 0),
                                    (w -= I[0] * C[b].an * 0.005),
                                    C[b + 1] &&
                                        Z !== C[b + 1].ind &&
                                        ((w += C[b].an / 2), (w += 0.001 * e.tr * e.finalSize));
                            } else {
                                switch (
                                    (y.translate(R, O, 0), e.ps && y.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j)
                                ) {
                                    case 1:
                                        y.translate(
                                            C[b].animatorJustifyOffset +
                                                e.justifyOffset +
                                                (e.boxWidth - e.lineWidths[C[b].line]),
                                            0,
                                            0,
                                        );
                                        break;
                                    case 2:
                                        y.translate(
                                            C[b].animatorJustifyOffset +
                                                e.justifyOffset +
                                                (e.boxWidth - e.lineWidths[C[b].line]) / 2,
                                            0,
                                            0,
                                        );
                                }
                                y.translate(0, -e.ls),
                                    y.translate(l, 0, 0),
                                    y.translate(I[0] * C[b].an * 0.005, I[1] * z * 0.01, 0),
                                    (R += C[b].l + 0.001 * e.tr * e.finalSize);
                            }
                            "html" === v
                                ? (et = y.toCSS())
                                : "svg" === v
                                  ? (et = y.to2dCSS())
                                  : (en = [
                                        y.props[0],
                                        y.props[1],
                                        y.props[2],
                                        y.props[3],
                                        y.props[4],
                                        y.props[5],
                                        y.props[6],
                                        y.props[7],
                                        y.props[8],
                                        y.props[9],
                                        y.props[10],
                                        y.props[11],
                                        y.props[12],
                                        y.props[13],
                                        y.props[14],
                                        y.props[15],
                                    ]),
                                (A = d);
                        }
                        N <= b
                            ? ((a = new LetterProps(A, m, E, g, et, en)),
                              this.renderedLetters.push(a),
                              (N += 1),
                              (this.lettersChangedFlag = !0))
                            : ((a = this.renderedLetters[b]),
                              (this.lettersChangedFlag = a.update(A, m, E, g, et, en) || this.lettersChangedFlag));
                    }
                }
            }),
            (TextAnimatorProperty.prototype.getValue = function () {
                this._elem.globalData.frameId !== this._frameId &&
                    ((this._frameId = this._elem.globalData.frameId), this.iterateDynamicProperties());
            }),
            (TextAnimatorProperty.prototype.mHelper = new Matrix()),
            (TextAnimatorProperty.prototype.defaultPropsArray = []),
            extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
            (ITextElement.prototype.initElement = function (e, t, n) {
                (this.lettersChangedFlag = !0),
                    this.initFrame(),
                    this.initBaseData(e, t, n),
                    (this.textProperty = new TextProperty(this, e.t, this.dynamicProperties)),
                    (this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this)),
                    this.initTransform(e, t, n),
                    this.initHierarchy(),
                    this.initRenderable(),
                    this.initRendererElement(),
                    this.createContainerElements(),
                    this.createRenderableComponents(),
                    this.createContent(),
                    this.hide(),
                    this.textAnimator.searchProperties(this.dynamicProperties);
            }),
            (ITextElement.prototype.prepareFrame = function (e) {
                (this._mdf = !1), this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
            }),
            (ITextElement.prototype.createPathShape = function (e, t) {
                var n,
                    r,
                    i = t.length,
                    s = "";
                for (n = 0; n < i; n += 1)
                    "sh" === t[n].ty && (s += buildShapeString((r = t[n].ks.k), r.i.length, !0, e));
                return s;
            }),
            (ITextElement.prototype.updateDocumentData = function (e, t) {
                this.textProperty.updateDocumentData(e, t);
            }),
            (ITextElement.prototype.canResizeFont = function (e) {
                this.textProperty.canResizeFont(e);
            }),
            (ITextElement.prototype.setMinimumFontSize = function (e) {
                this.textProperty.setMinimumFontSize(e);
            }),
            (ITextElement.prototype.applyTextPropertiesToMatrix = function (e, t, n, r, i) {
                switch ((e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j)) {
                    case 1:
                        t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[n]), 0, 0);
                        break;
                    case 2:
                        t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[n]) / 2, 0, 0);
                }
                t.translate(r, i, 0);
            }),
            (ITextElement.prototype.buildColor = function (e) {
                return (
                    "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")"
                );
            }),
            (ITextElement.prototype.emptyProp = new LetterProps()),
            (ITextElement.prototype.destroy = function () {}),
            (ITextElement.prototype.validateText = function () {
                (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
                    (this.buildNewText(), (this.textProperty._isFirstFrame = !1), (this.textProperty._mdf = !1));
            });
        var emptyShapeData = { shapes: [] };
        function SVGTextLottieElement(e, t, n) {
            (this.textSpans = []), (this.renderType = "svg"), this.initElement(e, t, n);
        }
        function ISolidElement(e, t, n) {
            this.initElement(e, t, n);
        }
        function NullElement(e, t, n) {
            this.initFrame(),
                this.initBaseData(e, t, n),
                this.initFrame(),
                this.initTransform(e, t, n),
                this.initHierarchy();
        }
        function SVGRendererBase() {}
        function ICompElement() {}
        function SVGCompElement(e, t, n) {
            (this.layers = e.layers),
                (this.supports3d = !0),
                (this.completeLayers = !1),
                (this.pendingElements = []),
                (this.elements = this.layers ? createSizedArray(this.layers.length) : []),
                this.initElement(e, t, n),
                (this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 });
        }
        function SVGRenderer(e, t) {
            (this.animationItem = e),
                (this.layers = null),
                (this.renderedFrame = -1),
                (this.svgElement = createNS("svg"));
            var n = "";
            if (t && t.title) {
                var r = createNS("title"),
                    i = createElementID();
                r.setAttribute("id", i), (r.textContent = t.title), this.svgElement.appendChild(r), (n += i);
            }
            if (t && t.description) {
                var s = createNS("desc"),
                    a = createElementID();
                s.setAttribute("id", a),
                    (s.textContent = t.description),
                    this.svgElement.appendChild(s),
                    (n += " " + a);
            }
            n && this.svgElement.setAttribute("aria-labelledby", n);
            var o = createNS("defs");
            this.svgElement.appendChild(o);
            var l = createNS("g");
            this.svgElement.appendChild(l),
                (this.layerElement = l),
                (this.renderConfig = {
                    preserveAspectRatio: (t && t.preserveAspectRatio) || "xMidYMid meet",
                    imagePreserveAspectRatio: (t && t.imagePreserveAspectRatio) || "xMidYMid slice",
                    contentVisibility: (t && t.contentVisibility) || "visible",
                    progressiveLoad: (t && t.progressiveLoad) || !1,
                    hideOnTransparent: !(t && !1 === t.hideOnTransparent),
                    viewBoxOnly: (t && t.viewBoxOnly) || !1,
                    viewBoxSize: (t && t.viewBoxSize) || !1,
                    className: (t && t.className) || "",
                    id: (t && t.id) || "",
                    focusable: t && t.focusable,
                    filterSize: {
                        width: (t && t.filterSize && t.filterSize.width) || "100%",
                        height: (t && t.filterSize && t.filterSize.height) || "100%",
                        x: (t && t.filterSize && t.filterSize.x) || "0%",
                        y: (t && t.filterSize && t.filterSize.y) || "0%",
                    },
                    width: t && t.width,
                    height: t && t.height,
                    runExpressions: !t || void 0 === t.runExpressions || t.runExpressions,
                }),
                (this.globalData = { _mdf: !1, frameNum: -1, defs: o, renderConfig: this.renderConfig }),
                (this.elements = []),
                (this.pendingElements = []),
                (this.destroyed = !1),
                (this.rendererType = "svg");
        }
        function ShapeTransformManager() {
            (this.sequences = {}), (this.sequenceList = []), (this.transform_key_count = 0);
        }
        extendPrototype(
            [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
                ITextElement,
            ],
            SVGTextLottieElement,
        ),
            (SVGTextLottieElement.prototype.createContent = function () {
                this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
            }),
            (SVGTextLottieElement.prototype.buildTextContents = function (e) {
                for (var t = 0, n = e.length, r = [], i = ""; t < n; )
                    "\r" === e[t] || "\x03" === e[t] ? (r.push(i), (i = "")) : (i += e[t]), (t += 1);
                return r.push(i), r;
            }),
            (SVGTextLottieElement.prototype.buildShapeData = function (e, t) {
                if (e.shapes && e.shapes.length) {
                    var n = e.shapes[0];
                    if (n.it) {
                        var r = n.it[n.it.length - 1];
                        r.s && ((r.s.k[0] = t), (r.s.k[1] = t));
                    }
                }
                return e;
            }),
            (SVGTextLottieElement.prototype.buildNewText = function () {
                this.addDynamicProperty(this);
                var e = this.textProperty.currentData;
                (this.renderedLetters = createSizedArray(e ? e.l.length : 0)),
                    e.fc
                        ? this.layerElement.setAttribute("fill", this.buildColor(e.fc))
                        : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
                    e.sc &&
                        (this.layerElement.setAttribute("stroke", this.buildColor(e.sc)),
                        this.layerElement.setAttribute("stroke-width", e.sw)),
                    this.layerElement.setAttribute("font-size", e.finalSize);
                var t = this.globalData.fontManager.getFontByName(e.f);
                if (t.fClass) this.layerElement.setAttribute("class", t.fClass);
                else {
                    this.layerElement.setAttribute("font-family", t.fFamily);
                    var n = e.fWeight,
                        r = e.fStyle;
                    this.layerElement.setAttribute("font-style", r), this.layerElement.setAttribute("font-weight", n);
                }
                this.layerElement.setAttribute("aria-label", e.t);
                var i = e.l || [],
                    s = !!this.globalData.fontManager.chars;
                m = i.length;
                var a = this.mHelper,
                    o = "",
                    l = this.data.singleShape,
                    u = 0,
                    c = 0,
                    d = !0,
                    _ = 0.001 * e.tr * e.finalSize;
                if (!l || s || e.sz) {
                    var f = this.textSpans.length;
                    for (h = 0; h < m; h += 1) {
                        if (
                            (this.textSpans[h] || (this.textSpans[h] = { span: null, childSpan: null, glyph: null }),
                            !s || !l || 0 === h)
                        ) {
                            if (((E = f > h ? this.textSpans[h].span : createNS(s ? "g" : "text")), f <= h)) {
                                if (
                                    (E.setAttribute("stroke-linecap", "butt"),
                                    E.setAttribute("stroke-linejoin", "round"),
                                    E.setAttribute("stroke-miterlimit", "4"),
                                    (this.textSpans[h].span = E),
                                    s)
                                ) {
                                    var p = createNS("g");
                                    E.appendChild(p), (this.textSpans[h].childSpan = p);
                                }
                                (this.textSpans[h].span = E), this.layerElement.appendChild(E);
                            }
                            E.style.display = "inherit";
                        }
                        if (
                            (a.reset(),
                            l &&
                                (i[h].n && ((u = -_), (c += e.yOffset), (c += +!!d), (d = !1)),
                                this.applyTextPropertiesToMatrix(e, a, i[h].line, u, c),
                                (u += i[h].l || 0),
                                (u += _)),
                            s)
                        ) {
                            if (
                                1 ===
                                (g = this.globalData.fontManager.getCharData(
                                    e.finalText[h],
                                    t.fStyle,
                                    this.globalData.fontManager.getFontByName(e.f).fFamily,
                                )).t
                            )
                                A = new SVGCompElement(g.data, this.globalData, this);
                            else {
                                var h,
                                    m,
                                    E,
                                    g,
                                    A,
                                    I = emptyShapeData;
                                g.data && g.data.shapes && (I = this.buildShapeData(g.data, e.finalSize)),
                                    (A = new SVGShapeElement(I, this.globalData, this));
                            }
                            if (this.textSpans[h].glyph) {
                                var T = this.textSpans[h].glyph;
                                this.textSpans[h].childSpan.removeChild(T.layerElement), T.destroy();
                            }
                            (this.textSpans[h].glyph = A),
                                (A._debug = !0),
                                A.prepareFrame(0),
                                A.renderFrame(),
                                this.textSpans[h].childSpan.appendChild(A.layerElement),
                                1 === g.t &&
                                    this.textSpans[h].childSpan.setAttribute(
                                        "transform",
                                        "scale(" + e.finalSize / 100 + "," + e.finalSize / 100 + ")",
                                    );
                        } else
                            l && E.setAttribute("transform", "translate(" + a.props[12] + "," + a.props[13] + ")"),
                                (E.textContent = i[h].val),
                                E.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                    }
                    l && E && E.setAttribute("d", o);
                } else {
                    var S = this.textContainer,
                        y = "start";
                    switch (e.j) {
                        case 1:
                            y = "end";
                            break;
                        case 2:
                            y = "middle";
                            break;
                        default:
                            y = "start";
                    }
                    S.setAttribute("text-anchor", y), S.setAttribute("letter-spacing", _);
                    var v = this.buildTextContents(e.finalText);
                    for (h = 0, m = v.length, c = e.ps ? e.ps[1] + e.ascent : 0; h < m; h += 1)
                        ((E = this.textSpans[h].span || createNS("tspan")).textContent = v[h]),
                            E.setAttribute("x", 0),
                            E.setAttribute("y", c),
                            (E.style.display = "inherit"),
                            S.appendChild(E),
                            this.textSpans[h] || (this.textSpans[h] = { span: null, glyph: null }),
                            (this.textSpans[h].span = E),
                            (c += e.finalLineHeight);
                    this.layerElement.appendChild(S);
                }
                for (; h < this.textSpans.length; ) (this.textSpans[h].span.style.display = "none"), (h += 1);
                this._sizeChanged = !0;
            }),
            (SVGTextLottieElement.prototype.sourceRectAtTime = function () {
                if (
                    (this.prepareFrame(this.comp.renderedFrame - this.data.st),
                    this.renderInnerContent(),
                    this._sizeChanged)
                ) {
                    this._sizeChanged = !1;
                    var e = this.layerElement.getBBox();
                    this.bbox = { top: e.y, left: e.x, width: e.width, height: e.height };
                }
                return this.bbox;
            }),
            (SVGTextLottieElement.prototype.getValue = function () {
                var e,
                    t,
                    n = this.textSpans.length;
                for (e = 0, this.renderedFrame = this.comp.renderedFrame; e < n; e += 1)
                    (t = this.textSpans[e].glyph) &&
                        (t.prepareFrame(this.comp.renderedFrame - this.data.st), t._mdf && (this._mdf = !0));
            }),
            (SVGTextLottieElement.prototype.renderInnerContent = function () {
                if (
                    (this.validateText(),
                    (!this.data.singleShape || this._mdf) &&
                        (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
                        this.lettersChangedFlag || this.textAnimator.lettersChangedFlag))
                ) {
                    this._sizeChanged = !0;
                    var e,
                        t,
                        n,
                        r,
                        i,
                        s = this.textAnimator.renderedLetters,
                        a = this.textProperty.currentData.l;
                    for (e = 0, t = a.length; e < t; e += 1)
                        !a[e].n &&
                            ((n = s[e]),
                            (r = this.textSpans[e].span),
                            (i = this.textSpans[e].glyph) && i.renderFrame(),
                            n._mdf.m && r.setAttribute("transform", n.m),
                            n._mdf.o && r.setAttribute("opacity", n.o),
                            n._mdf.sw && r.setAttribute("stroke-width", n.sw),
                            n._mdf.sc && r.setAttribute("stroke", n.sc),
                            n._mdf.fc && r.setAttribute("fill", n.fc));
                }
            }),
            extendPrototype([IImageElement], ISolidElement),
            (ISolidElement.prototype.createContent = function () {
                var e = createNS("rect");
                e.setAttribute("width", this.data.sw),
                    e.setAttribute("height", this.data.sh),
                    e.setAttribute("fill", this.data.sc),
                    this.layerElement.appendChild(e);
            }),
            (NullElement.prototype.prepareFrame = function (e) {
                this.prepareProperties(e, !0);
            }),
            (NullElement.prototype.renderFrame = function () {}),
            (NullElement.prototype.getBaseElement = function () {
                return null;
            }),
            (NullElement.prototype.destroy = function () {}),
            (NullElement.prototype.sourceRectAtTime = function () {}),
            (NullElement.prototype.hide = function () {}),
            extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement),
            extendPrototype([BaseRenderer], SVGRendererBase),
            (SVGRendererBase.prototype.createNull = function (e) {
                return new NullElement(e, this.globalData, this);
            }),
            (SVGRendererBase.prototype.createShape = function (e) {
                return new SVGShapeElement(e, this.globalData, this);
            }),
            (SVGRendererBase.prototype.createText = function (e) {
                return new SVGTextLottieElement(e, this.globalData, this);
            }),
            (SVGRendererBase.prototype.createImage = function (e) {
                return new IImageElement(e, this.globalData, this);
            }),
            (SVGRendererBase.prototype.createSolid = function (e) {
                return new ISolidElement(e, this.globalData, this);
            }),
            (SVGRendererBase.prototype.configAnimation = function (e) {
                this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                    this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
                    this.renderConfig.viewBoxSize
                        ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize)
                        : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h),
                    this.renderConfig.viewBoxOnly ||
                        (this.svgElement.setAttribute("width", e.w),
                        this.svgElement.setAttribute("height", e.h),
                        (this.svgElement.style.width = "100%"),
                        (this.svgElement.style.height = "100%"),
                        (this.svgElement.style.transform = "translate3d(0,0,0)"),
                        (this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility)),
                    this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width),
                    this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height),
                    this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className),
                    this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id),
                    void 0 !== this.renderConfig.focusable &&
                        this.svgElement.setAttribute("focusable", this.renderConfig.focusable),
                    this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio),
                    this.animationItem.wrapper.appendChild(this.svgElement);
                var t = this.globalData.defs;
                this.setupGlobalData(e, t),
                    (this.globalData.progressiveLoad = this.renderConfig.progressiveLoad),
                    (this.data = e);
                var n = createNS("clipPath"),
                    r = createNS("rect");
                r.setAttribute("width", e.w),
                    r.setAttribute("height", e.h),
                    r.setAttribute("x", 0),
                    r.setAttribute("y", 0);
                var i = createElementID();
                n.setAttribute("id", i),
                    n.appendChild(r),
                    this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"),
                    t.appendChild(n),
                    (this.layers = e.layers),
                    (this.elements = createSizedArray(e.layers.length));
            }),
            (SVGRendererBase.prototype.destroy = function () {
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
                    (this.layerElement = null),
                    (this.globalData.defs = null);
                var e,
                    t = this.layers ? this.layers.length : 0;
                for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
                (this.elements.length = 0), (this.destroyed = !0), (this.animationItem = null);
            }),
            (SVGRendererBase.prototype.updateContainerSize = function () {}),
            (SVGRendererBase.prototype.findIndexByInd = function (e) {
                var t = 0,
                    n = this.layers.length;
                for (t = 0; t < n; t += 1) if (this.layers[t].ind === e) return t;
                return -1;
            }),
            (SVGRendererBase.prototype.buildItem = function (e) {
                var t = this.elements;
                if (!t[e] && 99 !== this.layers[e].ty) {
                    t[e] = !0;
                    var n = this.createItem(this.layers[e]);
                    if (
                        ((t[e] = n),
                        getExpressionsPlugin() &&
                            (0 === this.layers[e].ty && this.globalData.projectInterface.registerComposition(n),
                            n.initExpressions()),
                        this.appendElementInPos(n, e),
                        this.layers[e].tt)
                    ) {
                        var r = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
                        if (-1 === r) return;
                        if (this.elements[r] && !0 !== this.elements[r]) {
                            var i = t[r].getMatte(this.layers[e].tt);
                            n.setMatte(i);
                        } else this.buildItem(r), this.addPendingElement(n);
                    }
                }
            }),
            (SVGRendererBase.prototype.checkPendingElements = function () {
                for (; this.pendingElements.length; ) {
                    var e = this.pendingElements.pop();
                    if ((e.checkParenting(), e.data.tt))
                        for (var t = 0, n = this.elements.length; t < n; ) {
                            if (this.elements[t] === e) {
                                var r = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                                    i = this.elements[r].getMatte(this.layers[t].tt);
                                e.setMatte(i);
                                break;
                            }
                            t += 1;
                        }
                }
            }),
            (SVGRendererBase.prototype.renderFrame = function (e) {
                if (this.renderedFrame !== e && !this.destroyed) {
                    null === e ? (e = this.renderedFrame) : (this.renderedFrame = e),
                        (this.globalData.frameNum = e),
                        (this.globalData.frameId += 1),
                        (this.globalData.projectInterface.currentFrame = e),
                        (this.globalData._mdf = !1);
                    var t,
                        n = this.layers.length;
                    for (this.completeLayers || this.checkLayers(e), t = n - 1; t >= 0; t -= 1)
                        (this.completeLayers || this.elements[t]) &&
                            this.elements[t].prepareFrame(e - this.layers[t].st);
                    if (this.globalData._mdf)
                        for (t = 0; t < n; t += 1)
                            (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
                }
            }),
            (SVGRendererBase.prototype.appendElementInPos = function (e, t) {
                var n,
                    r = e.getBaseElement();
                if (r) {
                    for (var i = 0; i < t; )
                        this.elements[i] &&
                            !0 !== this.elements[i] &&
                            this.elements[i].getBaseElement() &&
                            (n = this.elements[i].getBaseElement()),
                            (i += 1);
                    n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r);
                }
            }),
            (SVGRendererBase.prototype.hide = function () {
                this.layerElement.style.display = "none";
            }),
            (SVGRendererBase.prototype.show = function () {
                this.layerElement.style.display = "block";
            }),
            extendPrototype(
                [BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement],
                ICompElement,
            ),
            (ICompElement.prototype.initElement = function (e, t, n) {
                this.initFrame(),
                    this.initBaseData(e, t, n),
                    this.initTransform(e, t, n),
                    this.initRenderable(),
                    this.initHierarchy(),
                    this.initRendererElement(),
                    this.createContainerElements(),
                    this.createRenderableComponents(),
                    (this.data.xt || !t.progressiveLoad) && this.buildAllItems(),
                    this.hide();
            }),
            (ICompElement.prototype.prepareFrame = function (e) {
                if (
                    ((this._mdf = !1),
                    this.prepareRenderableFrame(e),
                    this.prepareProperties(e, this.isInRange),
                    this.isInRange || this.data.xt)
                ) {
                    if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
                    else {
                        var t,
                            n = this.tm.v;
                        n === this.data.op && (n = this.data.op - 1), (this.renderedFrame = n);
                    }
                    var r = this.elements.length;
                    for (this.completeLayers || this.checkLayers(this.renderedFrame), t = r - 1; t >= 0; t -= 1)
                        (this.completeLayers || this.elements[t]) &&
                            (this.elements[t].prepareFrame(this.renderedFrame - this.layers[t].st),
                            this.elements[t]._mdf && (this._mdf = !0));
                }
            }),
            (ICompElement.prototype.renderInnerContent = function () {
                var e,
                    t = this.layers.length;
                for (e = 0; e < t; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            }),
            (ICompElement.prototype.setElements = function (e) {
                this.elements = e;
            }),
            (ICompElement.prototype.getElements = function () {
                return this.elements;
            }),
            (ICompElement.prototype.destroyElements = function () {
                var e,
                    t = this.layers.length;
                for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy();
            }),
            (ICompElement.prototype.destroy = function () {
                this.destroyElements(), this.destroyBaseElement();
            }),
            extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement),
            (SVGCompElement.prototype.createComp = function (e) {
                return new SVGCompElement(e, this.globalData, this);
            }),
            extendPrototype([SVGRendererBase], SVGRenderer),
            (SVGRenderer.prototype.createComp = function (e) {
                return new SVGCompElement(e, this.globalData, this);
            }),
            (ShapeTransformManager.prototype = {
                addTransformSequence: function (e) {
                    var t,
                        n = e.length,
                        r = "_";
                    for (t = 0; t < n; t += 1) r += e[t].transform.key + "_";
                    var i = this.sequences[r];
                    return (
                        i ||
                            ((i = { transforms: [].concat(e), finalTransform: new Matrix(), _mdf: !1 }),
                            (this.sequences[r] = i),
                            this.sequenceList.push(i)),
                        i
                    );
                },
                processSequence: function (e, t) {
                    for (var n = 0, r = e.transforms.length, i = t; n < r && !t; ) {
                        if (e.transforms[n].transform.mProps._mdf) {
                            i = !0;
                            break;
                        }
                        n += 1;
                    }
                    if (i)
                        for (e.finalTransform.reset(), n = r - 1; n >= 0; n -= 1)
                            e.finalTransform.multiply(e.transforms[n].transform.mProps.v);
                    e._mdf = i;
                },
                processSequences: function (e) {
                    var t,
                        n = this.sequenceList.length;
                    for (t = 0; t < n; t += 1) this.processSequence(this.sequenceList[t], e);
                },
                getNewKey: function () {
                    return (this.transform_key_count += 1), "_" + this.transform_key_count;
                },
            });
        var lumaLoader = function () {
            var e = "__lottie_element_luma_buffer",
                t = null,
                n = null,
                r = null;
            function i() {
                var t = createNS("svg"),
                    n = createNS("filter"),
                    r = createNS("feColorMatrix");
                return (
                    n.setAttribute("id", e),
                    r.setAttribute("type", "matrix"),
                    r.setAttribute("color-interpolation-filters", "sRGB"),
                    r.setAttribute(
                        "values",
                        "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0",
                    ),
                    n.appendChild(r),
                    t.appendChild(n),
                    t.setAttribute("id", e + "_svg"),
                    featureSupport.svgLumaHidden && (t.style.display = "none"),
                    t
                );
            }
            function s() {
                t ||
                    ((r = i()),
                    document.body.appendChild(r),
                    ((n = (t = createTag("canvas")).getContext("2d")).filter = "url(#" + e + ")"),
                    (n.fillStyle = "rgba(0,0,0,0)"),
                    n.fillRect(0, 0, 1, 1));
            }
            function a(r) {
                return t || s(), (t.width = r.width), (t.height = r.height), (n.filter = "url(#" + e + ")"), t;
            }
            return { load: s, get: a };
        };
        function createCanvas(e, t) {
            if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
            var n = createTag("canvas");
            return (n.width = e), (n.height = t), n;
        }
        var assetLoader = (function () {
                return { loadLumaCanvas: lumaLoader.load, getLumaCanvas: lumaLoader.get, createCanvas: createCanvas };
            })(),
            registeredEffects = {};
        function CVEffects(e) {
            var t,
                n,
                r = e.data.ef ? e.data.ef.length : 0;
            for (t = 0, this.filters = []; t < r; t += 1) {
                n = null;
                var i = e.data.ef[t].ty;
                registeredEffects[i] && (n = new registeredEffects[i].effect(e.effectsManager.effectElements[t], e)),
                    n && this.filters.push(n);
            }
            this.filters.length && e.addRenderableComponent(this);
        }
        function registerEffect(e, t) {
            registeredEffects[e] = { effect: t };
        }
        function CVMaskElement(e, t) {
            (this.data = e),
                (this.element = t),
                (this.masksProperties = this.data.masksProperties || []),
                (this.viewData = createSizedArray(this.masksProperties.length));
            var n,
                r = this.masksProperties.length,
                i = !1;
            for (n = 0; n < r; n += 1)
                "n" !== this.masksProperties[n].mode && (i = !0),
                    (this.viewData[n] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[n], 3));
            (this.hasMasks = i), i && this.element.addRenderableComponent(this);
        }
        function CVBaseElement() {}
        (CVEffects.prototype.renderFrame = function (e) {
            var t,
                n = this.filters.length;
            for (t = 0; t < n; t += 1) this.filters[t].renderFrame(e);
        }),
            (CVEffects.prototype.getEffects = function (e) {
                var t,
                    n = this.filters.length,
                    r = [];
                for (t = 0; t < n; t += 1) this.filters[t].type === e && r.push(this.filters[t]);
                return r;
            }),
            (CVMaskElement.prototype.renderFrame = function () {
                if (this.hasMasks) {
                    var e = this.element.finalTransform.mat,
                        t = this.element.canvasContext,
                        n = this.masksProperties.length;
                    for (t.beginPath(), r = 0; r < n; r += 1)
                        if ("n" !== this.masksProperties[r].mode) {
                            this.masksProperties[r].inv &&
                                (t.moveTo(0, 0),
                                t.lineTo(this.element.globalData.compSize.w, 0),
                                t.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h),
                                t.lineTo(0, this.element.globalData.compSize.h),
                                t.lineTo(0, 0)),
                                (a = this.viewData[r].v),
                                (i = e.applyToPointArray(a.v[0][0], a.v[0][1], 0)),
                                t.moveTo(i[0], i[1]);
                            var r,
                                i,
                                s,
                                a,
                                o,
                                l = a._length;
                            for (o = 1; o < l; o += 1)
                                (s = e.applyToTriplePoints(a.o[o - 1], a.i[o], a.v[o])),
                                    t.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]);
                            (s = e.applyToTriplePoints(a.o[o - 1], a.i[0], a.v[0])),
                                t.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]);
                        }
                    this.element.globalData.renderer.save(!0), t.clip();
                }
            }),
            (CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty),
            (CVMaskElement.prototype.destroy = function () {
                this.element = null;
            });
        var operationsMap = { 1: "source-in", 2: "source-out", 3: "source-in", 4: "source-out" };
        function CVShapeData(e, t, n, r) {
            (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
            var i,
                s,
                a = 4;
            "rc" === t.ty ? (a = 5) : "el" === t.ty ? (a = 6) : "sr" === t.ty && (a = 7),
                (this.sh = ShapePropertyFactory.getShapeProp(e, t, a, e));
            var o = n.length;
            for (i = 0; i < o; i += 1)
                n[i].closed ||
                    ((s = { transforms: r.addTransformSequence(n[i].transforms), trNodes: [] }),
                    this.styledShapes.push(s),
                    n[i].elements.push(s));
        }
        function CVShapeElement(e, t, n) {
            (this.shapes = []),
                (this.shapesData = e.shapes),
                (this.stylesList = []),
                (this.itemsData = []),
                (this.prevViewData = []),
                (this.shapeModifiers = []),
                (this.processedElements = []),
                (this.transformsManager = new ShapeTransformManager()),
                this.initElement(e, t, n);
        }
        function CVTextElement(e, t, n) {
            (this.textSpans = []),
                (this.yOffset = 0),
                (this.fillColorAnim = !1),
                (this.strokeColorAnim = !1),
                (this.strokeWidthAnim = !1),
                (this.stroke = !1),
                (this.fill = !1),
                (this.justifyOffset = 0),
                (this.currentRender = null),
                (this.renderType = "canvas"),
                (this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }),
                this.initElement(e, t, n);
        }
        function CVImageElement(e, t, n) {
            (this.assetData = t.getAssetData(e.refId)),
                (this.img = t.imageLoader.getAsset(this.assetData)),
                this.initElement(e, t, n);
        }
        function CVSolidElement(e, t, n) {
            this.initElement(e, t, n);
        }
        function CanvasRendererBase() {}
        function CanvasContext() {
            (this.opacity = -1),
                (this.transform = createTypedArray("float32", 16)),
                (this.fillStyle = ""),
                (this.strokeStyle = ""),
                (this.lineWidth = ""),
                (this.lineCap = ""),
                (this.lineJoin = ""),
                (this.miterLimit = ""),
                (this.id = Math.random());
        }
        function CVContextData() {
            (this.stack = []), (this.cArrPos = 0), (this.cTr = new Matrix());
            var e,
                t = 15;
            for (e = 0; e < t; e += 1) {
                var n = new CanvasContext();
                this.stack[e] = n;
            }
            (this._length = t),
                (this.nativeContext = null),
                (this.transformMat = new Matrix()),
                (this.currentOpacity = 1),
                (this.currentFillStyle = ""),
                (this.appliedFillStyle = ""),
                (this.currentStrokeStyle = ""),
                (this.appliedStrokeStyle = ""),
                (this.currentLineWidth = ""),
                (this.appliedLineWidth = ""),
                (this.currentLineCap = ""),
                (this.appliedLineCap = ""),
                (this.currentLineJoin = ""),
                (this.appliedLineJoin = ""),
                (this.appliedMiterLimit = ""),
                (this.currentMiterLimit = "");
        }
        function CVCompElement(e, t, n) {
            (this.completeLayers = !1),
                (this.layers = e.layers),
                (this.pendingElements = []),
                (this.elements = createSizedArray(this.layers.length)),
                this.initElement(e, t, n),
                (this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 });
        }
        function CanvasRenderer(e, t) {
            (this.animationItem = e),
                (this.renderConfig = {
                    clearCanvas: !t || void 0 === t.clearCanvas || t.clearCanvas,
                    context: (t && t.context) || null,
                    progressiveLoad: (t && t.progressiveLoad) || !1,
                    preserveAspectRatio: (t && t.preserveAspectRatio) || "xMidYMid meet",
                    imagePreserveAspectRatio: (t && t.imagePreserveAspectRatio) || "xMidYMid slice",
                    contentVisibility: (t && t.contentVisibility) || "visible",
                    className: (t && t.className) || "",
                    id: (t && t.id) || "",
                    runExpressions: !t || void 0 === t.runExpressions || t.runExpressions,
                }),
                (this.renderConfig.dpr = (t && t.dpr) || 1),
                this.animationItem.wrapper && (this.renderConfig.dpr = (t && t.dpr) || window.devicePixelRatio || 1),
                (this.renderedFrame = -1),
                (this.globalData = { frameNum: -1, _mdf: !1, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }),
                (this.contextData = new CVContextData()),
                (this.elements = []),
                (this.pendingElements = []),
                (this.transformMat = new Matrix()),
                (this.completeLayers = !1),
                (this.rendererType = "canvas"),
                this.renderConfig.clearCanvas &&
                    ((this.ctxTransform = this.contextData.transform.bind(this.contextData)),
                    (this.ctxOpacity = this.contextData.opacity.bind(this.contextData)),
                    (this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData)),
                    (this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData)),
                    (this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData)),
                    (this.ctxLineCap = this.contextData.lineCap.bind(this.contextData)),
                    (this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData)),
                    (this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData)),
                    (this.ctxFill = this.contextData.fill.bind(this.contextData)),
                    (this.ctxFillRect = this.contextData.fillRect.bind(this.contextData)),
                    (this.ctxStroke = this.contextData.stroke.bind(this.contextData)),
                    (this.save = this.contextData.save.bind(this.contextData)));
        }
        function HBaseElement() {}
        function HSolidElement(e, t, n) {
            this.initElement(e, t, n);
        }
        function HShapeElement(e, t, n) {
            (this.shapes = []),
                (this.shapesData = e.shapes),
                (this.stylesList = []),
                (this.shapeModifiers = []),
                (this.itemsData = []),
                (this.processedElements = []),
                (this.animatedContents = []),
                (this.shapesContainer = createNS("g")),
                this.initElement(e, t, n),
                (this.prevViewData = []),
                (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
        }
        function HTextElement(e, t, n) {
            (this.textSpans = []),
                (this.textPaths = []),
                (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
                (this.renderType = "svg"),
                (this.isMasked = !1),
                this.initElement(e, t, n);
        }
        function HCameraElement(e, t, n) {
            this.initFrame(), this.initBaseData(e, t, n), this.initHierarchy();
            var r = PropertyFactory.getProp;
            if (
                ((this.pe = r(this, e.pe, 0, 0, this)),
                e.ks.p.s
                    ? ((this.px = r(this, e.ks.p.x, 1, 0, this)),
                      (this.py = r(this, e.ks.p.y, 1, 0, this)),
                      (this.pz = r(this, e.ks.p.z, 1, 0, this)))
                    : (this.p = r(this, e.ks.p, 1, 0, this)),
                e.ks.a && (this.a = r(this, e.ks.a, 1, 0, this)),
                e.ks.or.k.length && e.ks.or.k[0].to)
            ) {
                var i,
                    s = e.ks.or.k.length;
                for (i = 0; i < s; i += 1) (e.ks.or.k[i].to = null), (e.ks.or.k[i].ti = null);
            }
            (this.or = r(this, e.ks.or, 1, degToRads, this)),
                (this.or.sh = !0),
                (this.rx = r(this, e.ks.rx, 0, degToRads, this)),
                (this.ry = r(this, e.ks.ry, 0, degToRads, this)),
                (this.rz = r(this, e.ks.rz, 0, degToRads, this)),
                (this.mat = new Matrix()),
                (this._prevMat = new Matrix()),
                (this._isFirstFrame = !0),
                (this.finalTransform = { mProp: this });
        }
        function HImageElement(e, t, n) {
            (this.assetData = t.getAssetData(e.refId)), this.initElement(e, t, n);
        }
        function HybridRendererBase(e, t) {
            (this.animationItem = e),
                (this.layers = null),
                (this.renderedFrame = -1),
                (this.renderConfig = {
                    className: (t && t.className) || "",
                    imagePreserveAspectRatio: (t && t.imagePreserveAspectRatio) || "xMidYMid slice",
                    hideOnTransparent: !(t && !1 === t.hideOnTransparent),
                    filterSize: {
                        width: (t && t.filterSize && t.filterSize.width) || "400%",
                        height: (t && t.filterSize && t.filterSize.height) || "400%",
                        x: (t && t.filterSize && t.filterSize.x) || "-100%",
                        y: (t && t.filterSize && t.filterSize.y) || "-100%",
                    },
                }),
                (this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }),
                (this.pendingElements = []),
                (this.elements = []),
                (this.threeDElements = []),
                (this.destroyed = !1),
                (this.camera = null),
                (this.supports3d = !0),
                (this.rendererType = "html");
        }
        function HCompElement(e, t, n) {
            (this.layers = e.layers),
                (this.supports3d = !e.hasMask),
                (this.completeLayers = !1),
                (this.pendingElements = []),
                (this.elements = this.layers ? createSizedArray(this.layers.length) : []),
                this.initElement(e, t, n),
                (this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 });
        }
        function HybridRenderer(e, t) {
            (this.animationItem = e),
                (this.layers = null),
                (this.renderedFrame = -1),
                (this.renderConfig = {
                    className: (t && t.className) || "",
                    imagePreserveAspectRatio: (t && t.imagePreserveAspectRatio) || "xMidYMid slice",
                    hideOnTransparent: !(t && !1 === t.hideOnTransparent),
                    filterSize: {
                        width: (t && t.filterSize && t.filterSize.width) || "400%",
                        height: (t && t.filterSize && t.filterSize.height) || "400%",
                        x: (t && t.filterSize && t.filterSize.x) || "-100%",
                        y: (t && t.filterSize && t.filterSize.y) || "-100%",
                    },
                    runExpressions: !t || void 0 === t.runExpressions || t.runExpressions,
                }),
                (this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }),
                (this.pendingElements = []),
                (this.elements = []),
                (this.threeDElements = []),
                (this.destroyed = !1),
                (this.camera = null),
                (this.supports3d = !0),
                (this.rendererType = "html");
        }
        (CVBaseElement.prototype = {
            createElements: function () {},
            initRendererElement: function () {},
            createContainerElements: function () {
                if (this.data.tt >= 1) {
                    this.buffers = [];
                    var e = this.globalData.canvasContext,
                        t = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                    this.buffers.push(t);
                    var n = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                    this.buffers.push(n), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
                }
                (this.canvasContext = this.globalData.canvasContext),
                    (this.transformCanvas = this.globalData.transformCanvas),
                    (this.renderableEffectsManager = new CVEffects(this)),
                    this.searchEffectTransforms();
            },
            createContent: function () {},
            setBlendMode: function () {
                var e = this.globalData;
                if (e.blendMode !== this.data.bm) {
                    e.blendMode = this.data.bm;
                    var t = getBlendMode(this.data.bm);
                    e.canvasContext.globalCompositeOperation = t;
                }
            },
            createRenderableComponents: function () {
                (this.maskManager = new CVMaskElement(this.data, this)),
                    (this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT));
            },
            hideElement: function () {
                this.hidden || (this.isInRange && !this.isTransparent) || (this.hidden = !0);
            },
            showElement: function () {
                this.isInRange &&
                    !this.isTransparent &&
                    ((this.hidden = !1), (this._isFirstFrame = !0), (this.maskManager._isFirstFrame = !0));
            },
            clearCanvas: function (e) {
                e.clearRect(
                    this.transformCanvas.tx,
                    this.transformCanvas.ty,
                    this.transformCanvas.w * this.transformCanvas.sx,
                    this.transformCanvas.h * this.transformCanvas.sy,
                );
            },
            prepareLayer: function () {
                if (this.data.tt >= 1) {
                    var e = this.buffers[0].getContext("2d");
                    this.clearCanvas(e),
                        e.drawImage(this.canvasContext.canvas, 0, 0),
                        (this.currentTransform = this.canvasContext.getTransform()),
                        this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
                        this.clearCanvas(this.canvasContext),
                        this.canvasContext.setTransform(this.currentTransform);
                }
            },
            exitLayer: function () {
                if (this.data.tt >= 1) {
                    var e = this.buffers[1],
                        t = e.getContext("2d");
                    if (
                        (this.clearCanvas(t),
                        t.drawImage(this.canvasContext.canvas, 0, 0),
                        this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
                        this.clearCanvas(this.canvasContext),
                        this.canvasContext.setTransform(this.currentTransform),
                        this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0),
                        this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
                        this.data.tt >= 3 && !document._isProxy)
                    ) {
                        var n = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                        n.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0),
                            this.clearCanvas(this.canvasContext),
                            this.canvasContext.drawImage(n, 0, 0);
                    }
                    (this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt]),
                        this.canvasContext.drawImage(e, 0, 0),
                        (this.canvasContext.globalCompositeOperation = "destination-over"),
                        this.canvasContext.drawImage(this.buffers[0], 0, 0),
                        this.canvasContext.setTransform(this.currentTransform),
                        (this.canvasContext.globalCompositeOperation = "source-over");
                }
            },
            renderFrame: function (e) {
                if (!this.hidden && !this.data.hd && (1 !== this.data.td || e)) {
                    this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
                    var t = 0 === this.data.ty;
                    this.prepareLayer(),
                        this.globalData.renderer.save(t),
                        this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props),
                        this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity),
                        this.renderInnerContent(),
                        this.globalData.renderer.restore(t),
                        this.exitLayer(),
                        this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
                        this._isFirstFrame && (this._isFirstFrame = !1);
                }
            },
            destroy: function () {
                (this.canvasContext = null), (this.data = null), (this.globalData = null), this.maskManager.destroy();
            },
            mHelper: new Matrix(),
        }),
            (CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement),
            (CVBaseElement.prototype.show = CVBaseElement.prototype.showElement),
            (CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated),
            extendPrototype(
                [
                    BaseElement,
                    TransformElement,
                    CVBaseElement,
                    IShapeElement,
                    HierarchyElement,
                    FrameElement,
                    RenderableElement,
                ],
                CVShapeElement,
            ),
            (CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement),
            (CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }),
            (CVShapeElement.prototype.dashResetter = []),
            (CVShapeElement.prototype.createContent = function () {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
            }),
            (CVShapeElement.prototype.createStyleElement = function (e, t) {
                var n = {
                        data: e,
                        type: e.ty,
                        preTransforms: this.transformsManager.addTransformSequence(t),
                        transforms: [],
                        elements: [],
                        closed: !0 === e.hd,
                    },
                    r = {};
                return (
                    "fl" === e.ty || "st" === e.ty
                        ? ((r.c = PropertyFactory.getProp(this, e.c, 1, 255, this)),
                          r.c.k ||
                              (n.co =
                                  "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")"))
                        : ("gf" === e.ty || "gs" === e.ty) &&
                          ((r.s = PropertyFactory.getProp(this, e.s, 1, null, this)),
                          (r.e = PropertyFactory.getProp(this, e.e, 1, null, this)),
                          (r.h = PropertyFactory.getProp(this, e.h || { k: 0 }, 0, 0.01, this)),
                          (r.a = PropertyFactory.getProp(this, e.a || { k: 0 }, 0, degToRads, this)),
                          (r.g = new GradientProperty(this, e.g, this))),
                    (r.o = PropertyFactory.getProp(this, e.o, 0, 0.01, this)),
                    "st" === e.ty || "gs" === e.ty
                        ? ((n.lc = lineCapEnum[e.lc || 2]),
                          (n.lj = lineJoinEnum[e.lj || 2]),
                          1 == e.lj && (n.ml = e.ml),
                          (r.w = PropertyFactory.getProp(this, e.w, 0, null, this)),
                          r.w.k || (n.wi = r.w.v),
                          e.d &&
                              ((r.d = new DashProperty(this, e.d, "canvas", this)),
                              r.d.k || ((n.da = r.d.dashArray), (n.do = r.d.dashoffset[0]))))
                        : (n.r = 2 === e.r ? "evenodd" : "nonzero"),
                    this.stylesList.push(n),
                    (r.style = n),
                    r
                );
            }),
            (CVShapeElement.prototype.createGroupElement = function () {
                return { it: [], prevViewData: [] };
            }),
            (CVShapeElement.prototype.createTransformElement = function (e) {
                return {
                    transform: {
                        opacity: 1,
                        _opMdf: !1,
                        key: this.transformsManager.getNewKey(),
                        op: PropertyFactory.getProp(this, e.o, 0, 0.01, this),
                        mProps: TransformPropertyFactory.getTransformProperty(this, e, this),
                    },
                };
            }),
            (CVShapeElement.prototype.createShapeElement = function (e) {
                var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
                return this.shapes.push(t), this.addShapeToModifiers(t), t;
            }),
            (CVShapeElement.prototype.reloadShapes = function () {
                this._isFirstFrame = !0;
                var e,
                    t = this.itemsData.length;
                for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                for (
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []),
                        t = this.dynamicProperties.length,
                        e = 0;
                    e < t;
                    e += 1
                )
                    this.dynamicProperties[e].getValue();
                this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
            }),
            (CVShapeElement.prototype.addTransformToStyleList = function (e) {
                var t,
                    n = this.stylesList.length;
                for (t = 0; t < n; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e);
            }),
            (CVShapeElement.prototype.removeTransformFromStyleList = function () {
                var e,
                    t = this.stylesList.length;
                for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop();
            }),
            (CVShapeElement.prototype.closeStyles = function (e) {
                var t,
                    n = e.length;
                for (t = 0; t < n; t += 1) e[t].closed = !0;
            }),
            (CVShapeElement.prototype.searchShapes = function (e, t, n, r, i) {
                var s,
                    a,
                    o,
                    l,
                    u,
                    c,
                    d = e.length - 1,
                    _ = [],
                    f = [],
                    p = [].concat(i);
                for (s = d; s >= 0; s -= 1) {
                    if (
                        ((l = this.searchProcessedElement(e[s])) ? (t[s] = n[l - 1]) : (e[s]._shouldRender = r),
                        "fl" === e[s].ty || "st" === e[s].ty || "gf" === e[s].ty || "gs" === e[s].ty)
                    )
                        l ? (t[s].style.closed = !1) : (t[s] = this.createStyleElement(e[s], p)), _.push(t[s].style);
                    else if ("gr" === e[s].ty) {
                        if (l) for (a = 0, o = t[s].it.length; a < o; a += 1) t[s].prevViewData[a] = t[s].it[a];
                        else t[s] = this.createGroupElement(e[s]);
                        this.searchShapes(e[s].it, t[s].it, t[s].prevViewData, r, p);
                    } else
                        "tr" === e[s].ty
                            ? (l || ((c = this.createTransformElement(e[s])), (t[s] = c)),
                              p.push(t[s]),
                              this.addTransformToStyleList(t[s]))
                            : "sh" === e[s].ty || "rc" === e[s].ty || "el" === e[s].ty || "sr" === e[s].ty
                              ? l || (t[s] = this.createShapeElement(e[s]))
                              : "tm" === e[s].ty ||
                                  "rd" === e[s].ty ||
                                  "pb" === e[s].ty ||
                                  "zz" === e[s].ty ||
                                  "op" === e[s].ty
                                ? (l
                                      ? ((u = t[s]).closed = !1)
                                      : ((u = ShapeModifiers.getModifier(e[s].ty)).init(this, e[s]),
                                        (t[s] = u),
                                        this.shapeModifiers.push(u)),
                                  f.push(u))
                                : "rp" === e[s].ty &&
                                  (l
                                      ? ((u = t[s]).closed = !0)
                                      : ((u = ShapeModifiers.getModifier(e[s].ty)),
                                        (t[s] = u),
                                        u.init(this, e, s, t),
                                        this.shapeModifiers.push(u),
                                        (r = !1)),
                                  f.push(u));
                    this.addProcessedElement(e[s], s + 1);
                }
                for (this.removeTransformFromStyleList(), this.closeStyles(_), d = f.length, s = 0; s < d; s += 1)
                    f[s].closed = !0;
            }),
            (CVShapeElement.prototype.renderInnerContent = function () {
                (this.transformHelper.opacity = 1),
                    (this.transformHelper._opMdf = !1),
                    this.renderModifiers(),
                    this.transformsManager.processSequences(this._isFirstFrame),
                    this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
            }),
            (CVShapeElement.prototype.renderShapeTransform = function (e, t) {
                (e._opMdf || t.op._mdf || this._isFirstFrame) &&
                    ((t.opacity = e.opacity), (t.opacity *= t.op.v), (t._opMdf = !0));
            }),
            (CVShapeElement.prototype.drawLayer = function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    s,
                    a,
                    o,
                    l,
                    u = this.stylesList.length,
                    c = this.globalData.renderer,
                    d = this.globalData.canvasContext;
                for (e = 0; e < u; e += 1)
                    if (
                        !(
                            (("st" === (o = (l = this.stylesList[e]).type) || "gs" === o) && 0 === l.wi) ||
                            !l.data._shouldRender ||
                            0 === l.coOp ||
                            0 === this.globalData.currentGlobalAlpha
                        )
                    ) {
                        for (
                            c.save(),
                                s = l.elements,
                                "st" === o || "gs" === o
                                    ? (c.ctxStrokeStyle("st" === o ? l.co : l.grd),
                                      c.ctxLineWidth(l.wi),
                                      c.ctxLineCap(l.lc),
                                      c.ctxLineJoin(l.lj),
                                      c.ctxMiterLimit(l.ml || 0))
                                    : c.ctxFillStyle("fl" === o ? l.co : l.grd),
                                c.ctxOpacity(l.coOp),
                                "st" !== o && "gs" !== o && d.beginPath(),
                                c.ctxTransform(l.preTransforms.finalTransform.props),
                                n = s.length,
                                t = 0;
                            t < n;
                            t += 1
                        ) {
                            for (
                                ("st" === o || "gs" === o) &&
                                    (d.beginPath(), l.da && (d.setLineDash(l.da), (d.lineDashOffset = l.do))),
                                    i = (a = s[t].trNodes).length,
                                    r = 0;
                                r < i;
                                r += 1
                            )
                                "m" === a[r].t
                                    ? d.moveTo(a[r].p[0], a[r].p[1])
                                    : "c" === a[r].t
                                      ? d.bezierCurveTo(
                                            a[r].pts[0],
                                            a[r].pts[1],
                                            a[r].pts[2],
                                            a[r].pts[3],
                                            a[r].pts[4],
                                            a[r].pts[5],
                                        )
                                      : d.closePath();
                            ("st" === o || "gs" === o) && (c.ctxStroke(), l.da && d.setLineDash(this.dashResetter));
                        }
                        "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(l.r), c.restore();
                    }
            }),
            (CVShapeElement.prototype.renderShape = function (e, t, n, r) {
                var i,
                    s,
                    a = t.length - 1;
                for (s = e, i = a; i >= 0; i -= 1)
                    "tr" === t[i].ty
                        ? ((s = n[i].transform), this.renderShapeTransform(e, s))
                        : "sh" === t[i].ty || "el" === t[i].ty || "rc" === t[i].ty || "sr" === t[i].ty
                          ? this.renderPath(t[i], n[i])
                          : "fl" === t[i].ty
                            ? this.renderFill(t[i], n[i], s)
                            : "st" === t[i].ty
                              ? this.renderStroke(t[i], n[i], s)
                              : "gf" === t[i].ty || "gs" === t[i].ty
                                ? this.renderGradientFill(t[i], n[i], s)
                                : "gr" === t[i].ty
                                  ? this.renderShape(s, t[i].it, n[i].it)
                                  : t[i].ty;
                r && this.drawLayer();
            }),
            (CVShapeElement.prototype.renderStyledShape = function (e, t) {
                if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
                    var n,
                        r,
                        i,
                        s = e.trNodes,
                        a = t.paths,
                        o = a._length;
                    s.length = 0;
                    var l = e.transforms.finalTransform;
                    for (i = 0; i < o; i += 1) {
                        var u = a.shapes[i];
                        if (u && u.v) {
                            for (n = 1, r = u._length; n < r; n += 1)
                                1 === n && s.push({ t: "m", p: l.applyToPointArray(u.v[0][0], u.v[0][1], 0) }),
                                    s.push({ t: "c", pts: l.applyToTriplePoints(u.o[n - 1], u.i[n], u.v[n]) });
                            1 === r && s.push({ t: "m", p: l.applyToPointArray(u.v[0][0], u.v[0][1], 0) }),
                                u.c &&
                                    r &&
                                    (s.push({ t: "c", pts: l.applyToTriplePoints(u.o[n - 1], u.i[0], u.v[0]) }),
                                    s.push({ t: "z" }));
                        }
                    }
                    e.trNodes = s;
                }
            }),
            (CVShapeElement.prototype.renderPath = function (e, t) {
                if (!0 !== e.hd && e._shouldRender) {
                    var n,
                        r = t.styledShapes.length;
                    for (n = 0; n < r; n += 1) this.renderStyledShape(t.styledShapes[n], t.sh);
                }
            }),
            (CVShapeElement.prototype.renderFill = function (e, t, n) {
                var r = t.style;
                (t.c._mdf || this._isFirstFrame) &&
                    (r.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"),
                    (t.o._mdf || n._opMdf || this._isFirstFrame) && (r.coOp = t.o.v * n.opacity);
            }),
            (CVShapeElement.prototype.renderGradientFill = function (e, t, n) {
                var r = t.style;
                if (!r.grd || t.g._mdf || t.s._mdf || t.e._mdf || (1 !== e.t && (t.h._mdf || t.a._mdf))) {
                    var i,
                        s,
                        a = this.globalData.canvasContext,
                        o = t.s.v,
                        l = t.e.v;
                    if (1 === e.t) i = a.createLinearGradient(o[0], o[1], l[0], l[1]);
                    else {
                        var u = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                            c = Math.atan2(l[1] - o[1], l[0] - o[0]),
                            d = t.h.v;
                        d >= 1 ? (d = 0.99) : d <= -1 && (d = -0.99);
                        var _ = u * d,
                            f = Math.cos(c + t.a.v) * _ + o[0],
                            p = Math.sin(c + t.a.v) * _ + o[1];
                        i = a.createRadialGradient(f, p, 0, o[0], o[1], u);
                    }
                    var h = e.g.p,
                        m = t.g.c,
                        E = 1;
                    for (s = 0; s < h; s += 1)
                        t.g._hasOpacity && t.g._collapsable && (E = t.g.o[2 * s + 1]),
                            i.addColorStop(
                                m[4 * s] / 100,
                                "rgba(" + m[4 * s + 1] + "," + m[4 * s + 2] + "," + m[4 * s + 3] + "," + E + ")",
                            );
                    r.grd = i;
                }
                r.coOp = t.o.v * n.opacity;
            }),
            (CVShapeElement.prototype.renderStroke = function (e, t, n) {
                var r = t.style,
                    i = t.d;
                i && (i._mdf || this._isFirstFrame) && ((r.da = i.dashArray), (r.do = i.dashoffset[0])),
                    (t.c._mdf || this._isFirstFrame) &&
                        (r.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"),
                    (t.o._mdf || n._opMdf || this._isFirstFrame) && (r.coOp = t.o.v * n.opacity),
                    (t.w._mdf || this._isFirstFrame) && (r.wi = t.w.v);
            }),
            (CVShapeElement.prototype.destroy = function () {
                (this.shapesData = null),
                    (this.globalData = null),
                    (this.canvasContext = null),
                    (this.stylesList.length = 0),
                    (this.itemsData.length = 0);
            }),
            extendPrototype(
                [
                    BaseElement,
                    TransformElement,
                    CVBaseElement,
                    HierarchyElement,
                    FrameElement,
                    RenderableElement,
                    ITextElement,
                ],
                CVTextElement,
            ),
            (CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d")),
            (CVTextElement.prototype.buildNewText = function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    s,
                    a,
                    o,
                    l,
                    u,
                    c,
                    d,
                    _ = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(_.l ? _.l.length : 0);
                var f = !1;
                _.fc ? ((f = !0), (this.values.fill = this.buildColor(_.fc))) : (this.values.fill = "rgba(0,0,0,0)"),
                    (this.fill = f);
                var p = !1;
                _.sc && ((p = !0), (this.values.stroke = this.buildColor(_.sc)), (this.values.sWidth = _.sw));
                var h = this.globalData.fontManager.getFontByName(_.f),
                    m = _.l,
                    E = this.mHelper;
                (this.stroke = p),
                    (this.values.fValue = _.finalSize + "px " + this.globalData.fontManager.getFontByName(_.f).fFamily),
                    (t = _.finalText.length);
                var g = this.data.singleShape,
                    A = 0.001 * _.tr * _.finalSize,
                    I = 0,
                    T = 0,
                    S = !0,
                    y = 0;
                for (e = 0; e < t; e += 1) {
                    (r =
                        ((n = this.globalData.fontManager.getCharData(
                            _.finalText[e],
                            h.fStyle,
                            this.globalData.fontManager.getFontByName(_.f).fFamily,
                        )) &&
                            n.data) ||
                        {}),
                        E.reset(),
                        g && m[e].n && ((I = -A), (T += _.yOffset), (T += +!!S), (S = !1)),
                        (l = (a = r.shapes ? r.shapes[0].it : []).length),
                        E.scale(_.finalSize / 100, _.finalSize / 100),
                        g && this.applyTextPropertiesToMatrix(_, E, m[e].line, I, T),
                        (c = createSizedArray(l - 1));
                    var v = 0;
                    for (o = 0; o < l; o += 1)
                        if ("sh" === a[o].ty) {
                            for (i = 1, s = a[o].ks.k.i.length, u = a[o].ks.k, d = []; i < s; i += 1)
                                1 === i &&
                                    d.push(E.applyToX(u.v[0][0], u.v[0][1], 0), E.applyToY(u.v[0][0], u.v[0][1], 0)),
                                    d.push(
                                        E.applyToX(u.o[i - 1][0], u.o[i - 1][1], 0),
                                        E.applyToY(u.o[i - 1][0], u.o[i - 1][1], 0),
                                        E.applyToX(u.i[i][0], u.i[i][1], 0),
                                        E.applyToY(u.i[i][0], u.i[i][1], 0),
                                        E.applyToX(u.v[i][0], u.v[i][1], 0),
                                        E.applyToY(u.v[i][0], u.v[i][1], 0),
                                    );
                            d.push(
                                E.applyToX(u.o[i - 1][0], u.o[i - 1][1], 0),
                                E.applyToY(u.o[i - 1][0], u.o[i - 1][1], 0),
                                E.applyToX(u.i[0][0], u.i[0][1], 0),
                                E.applyToY(u.i[0][0], u.i[0][1], 0),
                                E.applyToX(u.v[0][0], u.v[0][1], 0),
                                E.applyToY(u.v[0][0], u.v[0][1], 0),
                            ),
                                (c[v] = d),
                                (v += 1);
                        }
                    g && ((I += m[e].l), (I += A)),
                        this.textSpans[y] ? (this.textSpans[y].elem = c) : (this.textSpans[y] = { elem: c }),
                        (y += 1);
                }
            }),
            (CVTextElement.prototype.renderInnerContent = function () {
                this.validateText(),
                    (this.canvasContext.font = this.values.fValue),
                    this.globalData.renderer.ctxLineCap("butt"),
                    this.globalData.renderer.ctxLineJoin("miter"),
                    this.globalData.renderer.ctxMiterLimit(4),
                    this.data.singleShape ||
                        this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                var e,
                    t,
                    n,
                    r,
                    i,
                    s,
                    a,
                    o,
                    l,
                    u = this.textAnimator.renderedLetters,
                    c = this.textProperty.currentData.l;
                t = c.length;
                var d = null,
                    _ = null,
                    f = null,
                    p = this.globalData.renderer;
                for (e = 0; e < t; e += 1)
                    if (!c[e].n) {
                        if (((a = u[e]) && (p.save(), p.ctxTransform(a.p), p.ctxOpacity(a.o)), this.fill)) {
                            for (
                                a && a.fc
                                    ? d !== a.fc && (p.ctxFillStyle(a.fc), (d = a.fc))
                                    : d !== this.values.fill &&
                                      ((d = this.values.fill), p.ctxFillStyle(this.values.fill)),
                                    r = (o = this.textSpans[e].elem).length,
                                    this.globalData.canvasContext.beginPath(),
                                    n = 0;
                                n < r;
                                n += 1
                            )
                                for (
                                    s = (l = o[n]).length, this.globalData.canvasContext.moveTo(l[0], l[1]), i = 2;
                                    i < s;
                                    i += 6
                                )
                                    this.globalData.canvasContext.bezierCurveTo(
                                        l[i],
                                        l[i + 1],
                                        l[i + 2],
                                        l[i + 3],
                                        l[i + 4],
                                        l[i + 5],
                                    );
                            this.globalData.canvasContext.closePath(), p.ctxFill();
                        }
                        if (this.stroke) {
                            for (
                                a && a.sw
                                    ? f !== a.sw && ((f = a.sw), p.ctxLineWidth(a.sw))
                                    : f !== this.values.sWidth &&
                                      ((f = this.values.sWidth), p.ctxLineWidth(this.values.sWidth)),
                                    a && a.sc
                                        ? _ !== a.sc && ((_ = a.sc), p.ctxStrokeStyle(a.sc))
                                        : _ !== this.values.stroke &&
                                          ((_ = this.values.stroke), p.ctxStrokeStyle(this.values.stroke)),
                                    r = (o = this.textSpans[e].elem).length,
                                    this.globalData.canvasContext.beginPath(),
                                    n = 0;
                                n < r;
                                n += 1
                            )
                                for (
                                    s = (l = o[n]).length, this.globalData.canvasContext.moveTo(l[0], l[1]), i = 2;
                                    i < s;
                                    i += 6
                                )
                                    this.globalData.canvasContext.bezierCurveTo(
                                        l[i],
                                        l[i + 1],
                                        l[i + 2],
                                        l[i + 3],
                                        l[i + 4],
                                        l[i + 5],
                                    );
                            this.globalData.canvasContext.closePath(), p.ctxStroke();
                        }
                        a && this.globalData.renderer.restore();
                    }
            }),
            extendPrototype(
                [BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement],
                CVImageElement,
            ),
            (CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement),
            (CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame),
            (CVImageElement.prototype.createContent = function () {
                if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                    var e,
                        t,
                        n = createTag("canvas");
                    (n.width = this.assetData.w), (n.height = this.assetData.h);
                    var r = n.getContext("2d"),
                        i = this.img.width,
                        s = this.img.height,
                        a = i / s,
                        o = this.assetData.w / this.assetData.h,
                        l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                    (a > o && "xMidYMid slice" === l) || (a < o && "xMidYMid slice" !== l)
                        ? (e = (t = s) * o)
                        : (t = (e = i) / o),
                        r.drawImage(this.img, (i - e) / 2, (s - t) / 2, e, t, 0, 0, this.assetData.w, this.assetData.h),
                        (this.img = n);
                }
            }),
            (CVImageElement.prototype.renderInnerContent = function () {
                this.canvasContext.drawImage(this.img, 0, 0);
            }),
            (CVImageElement.prototype.destroy = function () {
                this.img = null;
            }),
            extendPrototype(
                [BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement],
                CVSolidElement,
            ),
            (CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement),
            (CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame),
            (CVSolidElement.prototype.renderInnerContent = function () {
                this.globalData.renderer.ctxFillStyle(this.data.sc),
                    this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
            }),
            extendPrototype([BaseRenderer], CanvasRendererBase),
            (CanvasRendererBase.prototype.createShape = function (e) {
                return new CVShapeElement(e, this.globalData, this);
            }),
            (CanvasRendererBase.prototype.createText = function (e) {
                return new CVTextElement(e, this.globalData, this);
            }),
            (CanvasRendererBase.prototype.createImage = function (e) {
                return new CVImageElement(e, this.globalData, this);
            }),
            (CanvasRendererBase.prototype.createSolid = function (e) {
                return new CVSolidElement(e, this.globalData, this);
            }),
            (CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull),
            (CanvasRendererBase.prototype.ctxTransform = function (e) {
                (1 !== e[0] || 0 !== e[1] || 0 !== e[4] || 1 !== e[5] || 0 !== e[12] || 0 !== e[13]) &&
                    this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13]);
            }),
            (CanvasRendererBase.prototype.ctxOpacity = function (e) {
                this.canvasContext.globalAlpha *= e < 0 ? 0 : e;
            }),
            (CanvasRendererBase.prototype.ctxFillStyle = function (e) {
                this.canvasContext.fillStyle = e;
            }),
            (CanvasRendererBase.prototype.ctxStrokeStyle = function (e) {
                this.canvasContext.strokeStyle = e;
            }),
            (CanvasRendererBase.prototype.ctxLineWidth = function (e) {
                this.canvasContext.lineWidth = e;
            }),
            (CanvasRendererBase.prototype.ctxLineCap = function (e) {
                this.canvasContext.lineCap = e;
            }),
            (CanvasRendererBase.prototype.ctxLineJoin = function (e) {
                this.canvasContext.lineJoin = e;
            }),
            (CanvasRendererBase.prototype.ctxMiterLimit = function (e) {
                this.canvasContext.miterLimit = e;
            }),
            (CanvasRendererBase.prototype.ctxFill = function (e) {
                this.canvasContext.fill(e);
            }),
            (CanvasRendererBase.prototype.ctxFillRect = function (e, t, n, r) {
                this.canvasContext.fillRect(e, t, n, r);
            }),
            (CanvasRendererBase.prototype.ctxStroke = function () {
                this.canvasContext.stroke();
            }),
            (CanvasRendererBase.prototype.reset = function () {
                this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
            }),
            (CanvasRendererBase.prototype.save = function () {
                this.canvasContext.save();
            }),
            (CanvasRendererBase.prototype.restore = function (e) {
                this.renderConfig.clearCanvas
                    ? (e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e))
                    : this.canvasContext.restore();
            }),
            (CanvasRendererBase.prototype.configAnimation = function (e) {
                if (this.animationItem.wrapper) {
                    this.animationItem.container = createTag("canvas");
                    var t = this.animationItem.container.style;
                    (t.width = "100%"), (t.height = "100%");
                    var n = "0px 0px 0px";
                    (t.transformOrigin = n),
                        (t.mozTransformOrigin = n),
                        (t.webkitTransformOrigin = n),
                        (t["-webkit-transform"] = n),
                        (t.contentVisibility = this.renderConfig.contentVisibility),
                        this.animationItem.wrapper.appendChild(this.animationItem.container),
                        (this.canvasContext = this.animationItem.container.getContext("2d")),
                        this.renderConfig.className &&
                            this.animationItem.container.setAttribute("class", this.renderConfig.className),
                        this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
                } else this.canvasContext = this.renderConfig.context;
                this.contextData.setContext(this.canvasContext),
                    (this.data = e),
                    (this.layers = e.layers),
                    (this.transformCanvas = { w: e.w, h: e.h, sx: 0, sy: 0, tx: 0, ty: 0 }),
                    this.setupGlobalData(e, document.body),
                    (this.globalData.canvasContext = this.canvasContext),
                    (this.globalData.renderer = this),
                    (this.globalData.isDashed = !1),
                    (this.globalData.progressiveLoad = this.renderConfig.progressiveLoad),
                    (this.globalData.transformCanvas = this.transformCanvas),
                    (this.elements = createSizedArray(e.layers.length)),
                    this.updateContainerSize();
            }),
            (CanvasRendererBase.prototype.updateContainerSize = function (e, t) {
                if (
                    (this.reset(),
                    e
                        ? ((n = e),
                          (r = t),
                          (this.canvasContext.canvas.width = n),
                          (this.canvasContext.canvas.height = r))
                        : (this.animationItem.wrapper && this.animationItem.container
                              ? ((n = this.animationItem.wrapper.offsetWidth),
                                (r = this.animationItem.wrapper.offsetHeight))
                              : ((n = this.canvasContext.canvas.width), (r = this.canvasContext.canvas.height)),
                          (this.canvasContext.canvas.width = n * this.renderConfig.dpr),
                          (this.canvasContext.canvas.height = r * this.renderConfig.dpr)),
                    -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") ||
                        -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice"))
                ) {
                    var n,
                        r,
                        i,
                        s,
                        a = this.renderConfig.preserveAspectRatio.split(" "),
                        o = a[1] || "meet",
                        l = a[0] || "xMidYMid",
                        u = l.substr(0, 4),
                        c = l.substr(4);
                    (i = n / r),
                        ((s = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === o) ||
                        (s < i && "slice" === o)
                            ? ((this.transformCanvas.sx = n / (this.transformCanvas.w / this.renderConfig.dpr)),
                              (this.transformCanvas.sy = n / (this.transformCanvas.w / this.renderConfig.dpr)))
                            : ((this.transformCanvas.sx = r / (this.transformCanvas.h / this.renderConfig.dpr)),
                              (this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr))),
                        "xMid" === u && ((s < i && "meet" === o) || (s > i && "slice" === o))
                            ? (this.transformCanvas.tx =
                                  ((n - this.transformCanvas.w * (r / this.transformCanvas.h)) / 2) *
                                  this.renderConfig.dpr)
                            : "xMax" === u && ((s < i && "meet" === o) || (s > i && "slice" === o))
                              ? (this.transformCanvas.tx =
                                    (n - this.transformCanvas.w * (r / this.transformCanvas.h)) * this.renderConfig.dpr)
                              : (this.transformCanvas.tx = 0),
                        "YMid" === c && ((s > i && "meet" === o) || (s < i && "slice" === o))
                            ? (this.transformCanvas.ty =
                                  ((r - this.transformCanvas.h * (n / this.transformCanvas.w)) / 2) *
                                  this.renderConfig.dpr)
                            : "YMax" === c && ((s > i && "meet" === o) || (s < i && "slice" === o))
                              ? (this.transformCanvas.ty =
                                    (r - this.transformCanvas.h * (n / this.transformCanvas.w)) * this.renderConfig.dpr)
                              : (this.transformCanvas.ty = 0);
                } else
                    "none" === this.renderConfig.preserveAspectRatio
                        ? ((this.transformCanvas.sx = n / (this.transformCanvas.w / this.renderConfig.dpr)),
                          (this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr)))
                        : ((this.transformCanvas.sx = this.renderConfig.dpr),
                          (this.transformCanvas.sy = this.renderConfig.dpr)),
                        (this.transformCanvas.tx = 0),
                        (this.transformCanvas.ty = 0);
                (this.transformCanvas.props = [
                    this.transformCanvas.sx,
                    0,
                    0,
                    0,
                    0,
                    this.transformCanvas.sy,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    this.transformCanvas.tx,
                    this.transformCanvas.ty,
                    0,
                    1,
                ]),
                    this.ctxTransform(this.transformCanvas.props),
                    this.canvasContext.beginPath(),
                    this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
                    this.canvasContext.closePath(),
                    this.canvasContext.clip(),
                    this.renderFrame(this.renderedFrame, !0);
            }),
            (CanvasRendererBase.prototype.destroy = function () {
                var e;
                for (
                    this.renderConfig.clearCanvas &&
                        this.animationItem.wrapper &&
                        (this.animationItem.wrapper.innerText = ""),
                        e = (this.layers ? this.layers.length : 0) - 1;
                    e >= 0;
                    e -= 1
                )
                    this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
                (this.elements.length = 0),
                    (this.globalData.canvasContext = null),
                    (this.animationItem.container = null),
                    (this.destroyed = !0);
            }),
            (CanvasRendererBase.prototype.renderFrame = function (e, t) {
                if (
                    (this.renderedFrame !== e || !0 !== this.renderConfig.clearCanvas || t) &&
                    !this.destroyed &&
                    -1 !== e
                ) {
                    (this.renderedFrame = e),
                        (this.globalData.frameNum = e - this.animationItem._isFirstFrame),
                        (this.globalData.frameId += 1),
                        (this.globalData._mdf = !this.renderConfig.clearCanvas || t),
                        (this.globalData.projectInterface.currentFrame = e);
                    var n,
                        r = this.layers.length;
                    for (this.completeLayers || this.checkLayers(e), n = r - 1; n >= 0; n -= 1)
                        (this.completeLayers || this.elements[n]) &&
                            this.elements[n].prepareFrame(e - this.layers[n].st);
                    if (this.globalData._mdf) {
                        for (
                            !0 === this.renderConfig.clearCanvas
                                ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h)
                                : this.save(),
                                n = r - 1;
                            n >= 0;
                            n -= 1
                        )
                            (this.completeLayers || this.elements[n]) && this.elements[n].renderFrame();
                        !0 !== this.renderConfig.clearCanvas && this.restore();
                    }
                }
            }),
            (CanvasRendererBase.prototype.buildItem = function (e) {
                var t = this.elements;
                if (!t[e] && 99 !== this.layers[e].ty) {
                    var n = this.createItem(this.layers[e], this, this.globalData);
                    (t[e] = n), n.initExpressions();
                }
            }),
            (CanvasRendererBase.prototype.checkPendingElements = function () {
                for (; this.pendingElements.length; ) this.pendingElements.pop().checkParenting();
            }),
            (CanvasRendererBase.prototype.hide = function () {
                this.animationItem.container.style.display = "none";
            }),
            (CanvasRendererBase.prototype.show = function () {
                this.animationItem.container.style.display = "block";
            }),
            (CVContextData.prototype.duplicate = function () {
                var e = 2 * this._length,
                    t = 0;
                for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext();
                this._length = e;
            }),
            (CVContextData.prototype.reset = function () {
                (this.cArrPos = 0), this.cTr.reset(), (this.stack[this.cArrPos].opacity = 1);
            }),
            (CVContextData.prototype.restore = function (e) {
                this.cArrPos -= 1;
                var t,
                    n = this.stack[this.cArrPos],
                    r = n.transform,
                    i = this.cTr.props;
                for (t = 0; t < 16; t += 1) i[t] = r[t];
                if (e) {
                    this.nativeContext.restore();
                    var s = this.stack[this.cArrPos + 1];
                    (this.appliedFillStyle = s.fillStyle),
                        (this.appliedStrokeStyle = s.strokeStyle),
                        (this.appliedLineWidth = s.lineWidth),
                        (this.appliedLineCap = s.lineCap),
                        (this.appliedLineJoin = s.lineJoin),
                        (this.appliedMiterLimit = s.miterLimit);
                }
                this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]),
                    (e || (-1 !== n.opacity && this.currentOpacity !== n.opacity)) &&
                        ((this.nativeContext.globalAlpha = n.opacity), (this.currentOpacity = n.opacity)),
                    (this.currentFillStyle = n.fillStyle),
                    (this.currentStrokeStyle = n.strokeStyle),
                    (this.currentLineWidth = n.lineWidth),
                    (this.currentLineCap = n.lineCap),
                    (this.currentLineJoin = n.lineJoin),
                    (this.currentMiterLimit = n.miterLimit);
            }),
            (CVContextData.prototype.save = function (e) {
                e && this.nativeContext.save();
                var t,
                    n = this.cTr.props;
                this._length <= this.cArrPos && this.duplicate();
                var r = this.stack[this.cArrPos];
                for (t = 0; t < 16; t += 1) r.transform[t] = n[t];
                this.cArrPos += 1;
                var i = this.stack[this.cArrPos];
                (i.opacity = r.opacity),
                    (i.fillStyle = r.fillStyle),
                    (i.strokeStyle = r.strokeStyle),
                    (i.lineWidth = r.lineWidth),
                    (i.lineCap = r.lineCap),
                    (i.lineJoin = r.lineJoin),
                    (i.miterLimit = r.miterLimit);
            }),
            (CVContextData.prototype.setOpacity = function (e) {
                this.stack[this.cArrPos].opacity = e;
            }),
            (CVContextData.prototype.setContext = function (e) {
                this.nativeContext = e;
            }),
            (CVContextData.prototype.fillStyle = function (e) {
                this.stack[this.cArrPos].fillStyle !== e &&
                    ((this.currentFillStyle = e), (this.stack[this.cArrPos].fillStyle = e));
            }),
            (CVContextData.prototype.strokeStyle = function (e) {
                this.stack[this.cArrPos].strokeStyle !== e &&
                    ((this.currentStrokeStyle = e), (this.stack[this.cArrPos].strokeStyle = e));
            }),
            (CVContextData.prototype.lineWidth = function (e) {
                this.stack[this.cArrPos].lineWidth !== e &&
                    ((this.currentLineWidth = e), (this.stack[this.cArrPos].lineWidth = e));
            }),
            (CVContextData.prototype.lineCap = function (e) {
                this.stack[this.cArrPos].lineCap !== e &&
                    ((this.currentLineCap = e), (this.stack[this.cArrPos].lineCap = e));
            }),
            (CVContextData.prototype.lineJoin = function (e) {
                this.stack[this.cArrPos].lineJoin !== e &&
                    ((this.currentLineJoin = e), (this.stack[this.cArrPos].lineJoin = e));
            }),
            (CVContextData.prototype.miterLimit = function (e) {
                this.stack[this.cArrPos].miterLimit !== e &&
                    ((this.currentMiterLimit = e), (this.stack[this.cArrPos].miterLimit = e));
            }),
            (CVContextData.prototype.transform = function (e) {
                this.transformMat.cloneFromProps(e);
                var t = this.cTr;
                this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
                var n = t.props;
                this.nativeContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]);
            }),
            (CVContextData.prototype.opacity = function (e) {
                var t = this.stack[this.cArrPos].opacity;
                (t *= e < 0 ? 0 : e),
                    this.stack[this.cArrPos].opacity !== t &&
                        (this.currentOpacity !== e && ((this.nativeContext.globalAlpha = e), (this.currentOpacity = e)),
                        (this.stack[this.cArrPos].opacity = t));
            }),
            (CVContextData.prototype.fill = function (e) {
                this.appliedFillStyle !== this.currentFillStyle &&
                    ((this.appliedFillStyle = this.currentFillStyle),
                    (this.nativeContext.fillStyle = this.appliedFillStyle)),
                    this.nativeContext.fill(e);
            }),
            (CVContextData.prototype.fillRect = function (e, t, n, r) {
                this.appliedFillStyle !== this.currentFillStyle &&
                    ((this.appliedFillStyle = this.currentFillStyle),
                    (this.nativeContext.fillStyle = this.appliedFillStyle)),
                    this.nativeContext.fillRect(e, t, n, r);
            }),
            (CVContextData.prototype.stroke = function () {
                this.appliedStrokeStyle !== this.currentStrokeStyle &&
                    ((this.appliedStrokeStyle = this.currentStrokeStyle),
                    (this.nativeContext.strokeStyle = this.appliedStrokeStyle)),
                    this.appliedLineWidth !== this.currentLineWidth &&
                        ((this.appliedLineWidth = this.currentLineWidth),
                        (this.nativeContext.lineWidth = this.appliedLineWidth)),
                    this.appliedLineCap !== this.currentLineCap &&
                        ((this.appliedLineCap = this.currentLineCap),
                        (this.nativeContext.lineCap = this.appliedLineCap)),
                    this.appliedLineJoin !== this.currentLineJoin &&
                        ((this.appliedLineJoin = this.currentLineJoin),
                        (this.nativeContext.lineJoin = this.appliedLineJoin)),
                    this.appliedMiterLimit !== this.currentMiterLimit &&
                        ((this.appliedMiterLimit = this.currentMiterLimit),
                        (this.nativeContext.miterLimit = this.appliedMiterLimit)),
                    this.nativeContext.stroke();
            }),
            extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement),
            (CVCompElement.prototype.renderInnerContent = function () {
                var e,
                    t = this.canvasContext;
                for (
                    t.beginPath(),
                        t.moveTo(0, 0),
                        t.lineTo(this.data.w, 0),
                        t.lineTo(this.data.w, this.data.h),
                        t.lineTo(0, this.data.h),
                        t.lineTo(0, 0),
                        t.clip(),
                        e = this.layers.length - 1;
                    e >= 0;
                    e -= 1
                )
                    (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            }),
            (CVCompElement.prototype.destroy = function () {
                var e;
                for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
                (this.layers = null), (this.elements = null);
            }),
            (CVCompElement.prototype.createComp = function (e) {
                return new CVCompElement(e, this.globalData, this);
            }),
            extendPrototype([CanvasRendererBase], CanvasRenderer),
            (CanvasRenderer.prototype.createComp = function (e) {
                return new CVCompElement(e, this.globalData, this);
            }),
            (HBaseElement.prototype = {
                checkBlendMode: function () {},
                initRendererElement: function () {
                    (this.baseElement = createTag(this.data.tg || "div")),
                        this.data.hasMask
                            ? ((this.svgElement = createNS("svg")),
                              (this.layerElement = createNS("g")),
                              (this.maskedElement = this.layerElement),
                              this.svgElement.appendChild(this.layerElement),
                              this.baseElement.appendChild(this.svgElement))
                            : (this.layerElement = this.baseElement),
                        styleDiv(this.baseElement);
                },
                createContainerElements: function () {
                    (this.renderableEffectsManager = new CVEffects(this)),
                        (this.transformedElement = this.baseElement),
                        (this.maskedElement = this.layerElement),
                        this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                        this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                        0 !== this.data.bm && this.setBlendMode();
                },
                renderElement: function () {
                    var e = this.transformedElement ? this.transformedElement.style : {};
                    if (this.finalTransform._matMdf) {
                        var t = this.finalTransform.mat.toCSS();
                        (e.transform = t), (e.webkitTransform = t);
                    }
                    this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v);
                },
                renderFrame: function () {
                    this.data.hd ||
                        this.hidden ||
                        (this.renderTransform(),
                        this.renderRenderable(),
                        this.renderElement(),
                        this.renderInnerContent(),
                        this._isFirstFrame && (this._isFirstFrame = !1));
                },
                destroy: function () {
                    (this.layerElement = null),
                        (this.transformedElement = null),
                        this.matteElement && (this.matteElement = null),
                        this.maskManager && (this.maskManager.destroy(), (this.maskManager = null));
                },
                createRenderableComponents: function () {
                    this.maskManager = new MaskElement(this.data, this, this.globalData);
                },
                addEffects: function () {},
                setMatte: function () {},
            }),
            (HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement),
            (HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy),
            (HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting),
            extendPrototype(
                [BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement],
                HSolidElement,
            ),
            (HSolidElement.prototype.createContent = function () {
                var e;
                this.data.hasMask
                    ? ((e = createNS("rect")).setAttribute("width", this.data.sw),
                      e.setAttribute("height", this.data.sh),
                      e.setAttribute("fill", this.data.sc),
                      this.svgElement.setAttribute("width", this.data.sw),
                      this.svgElement.setAttribute("height", this.data.sh))
                    : (((e = createTag("div")).style.width = this.data.sw + "px"),
                      (e.style.height = this.data.sh + "px"),
                      (e.style.backgroundColor = this.data.sc)),
                    this.layerElement.appendChild(e);
            }),
            extendPrototype(
                [
                    BaseElement,
                    TransformElement,
                    HSolidElement,
                    SVGShapeElement,
                    HBaseElement,
                    HierarchyElement,
                    FrameElement,
                    RenderableElement,
                ],
                HShapeElement,
            ),
            (HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent),
            (HShapeElement.prototype.createContent = function () {
                var e;
                if (((this.baseElement.style.fontSize = 0), this.data.hasMask))
                    this.layerElement.appendChild(this.shapesContainer), (e = this.svgElement);
                else {
                    e = createNS("svg");
                    var t = this.comp.data ? this.comp.data : this.globalData.compSize;
                    e.setAttribute("width", t.w),
                        e.setAttribute("height", t.h),
                        e.appendChild(this.shapesContainer),
                        this.layerElement.appendChild(e);
                }
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0),
                    this.filterUniqueShapes(),
                    (this.shapeCont = e);
            }),
            (HShapeElement.prototype.getTransformedPoint = function (e, t) {
                var n,
                    r = e.length;
                for (n = 0; n < r; n += 1) t = e[n].mProps.v.applyToPointArray(t[0], t[1], 0);
                return t;
            }),
            (HShapeElement.prototype.calculateShapeBoundingBox = function (e, t) {
                var n,
                    r,
                    i,
                    s,
                    a,
                    o = e.sh.v,
                    l = e.transformers,
                    u = o._length;
                if (!(u <= 1)) {
                    for (n = 0; n < u - 1; n += 1)
                        (r = this.getTransformedPoint(l, o.v[n])),
                            (i = this.getTransformedPoint(l, o.o[n])),
                            (s = this.getTransformedPoint(l, o.i[n + 1])),
                            (a = this.getTransformedPoint(l, o.v[n + 1])),
                            this.checkBounds(r, i, s, a, t);
                    o.c &&
                        ((r = this.getTransformedPoint(l, o.v[n])),
                        (i = this.getTransformedPoint(l, o.o[n])),
                        (s = this.getTransformedPoint(l, o.i[0])),
                        (a = this.getTransformedPoint(l, o.v[0])),
                        this.checkBounds(r, i, s, a, t));
                }
            }),
            (HShapeElement.prototype.checkBounds = function (e, t, n, r, i) {
                this.getBoundsOfCurve(e, t, n, r);
                var s = this.shapeBoundingBox;
                (i.x = bmMin(s.left, i.x)),
                    (i.xMax = bmMax(s.right, i.xMax)),
                    (i.y = bmMin(s.top, i.y)),
                    (i.yMax = bmMax(s.bottom, i.yMax));
            }),
            (HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }),
            (HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }),
            (HShapeElement.prototype.getBoundsOfCurve = function (e, t, n, r) {
                for (
                    var i,
                        s,
                        a,
                        o,
                        l,
                        u,
                        c,
                        d = [
                            [e[0], r[0]],
                            [e[1], r[1]],
                        ],
                        _ = 0;
                    _ < 2;
                    ++_
                )
                    (s = 6 * e[_] - 12 * t[_] + 6 * n[_]),
                        (i = -3 * e[_] + 9 * t[_] - 9 * n[_] + 3 * r[_]),
                        (a = 3 * t[_] - 3 * e[_]),
                        (s |= 0),
                        (a |= 0),
                        (0 == (i |= 0) && 0 === s) ||
                            (0 === i
                                ? (o = -a / s) > 0 && o < 1 && d[_].push(this.calculateF(o, e, t, n, r, _))
                                : (l = s * s - 4 * a * i) >= 0 &&
                                  ((u = (-s + bmSqrt(l)) / (2 * i)) > 0 &&
                                      u < 1 &&
                                      d[_].push(this.calculateF(u, e, t, n, r, _)),
                                  (c = (-s - bmSqrt(l)) / (2 * i)) > 0 &&
                                      c < 1 &&
                                      d[_].push(this.calculateF(c, e, t, n, r, _))));
                (this.shapeBoundingBox.left = bmMin.apply(null, d[0])),
                    (this.shapeBoundingBox.top = bmMin.apply(null, d[1])),
                    (this.shapeBoundingBox.right = bmMax.apply(null, d[0])),
                    (this.shapeBoundingBox.bottom = bmMax.apply(null, d[1]));
            }),
            (HShapeElement.prototype.calculateF = function (e, t, n, r, i, s) {
                return (
                    bmPow(1 - e, 3) * t[s] +
                    3 * bmPow(1 - e, 2) * e * n[s] +
                    3 * (1 - e) * bmPow(e, 2) * r[s] +
                    bmPow(e, 3) * i[s]
                );
            }),
            (HShapeElement.prototype.calculateBoundingBox = function (e, t) {
                var n,
                    r = e.length;
                for (n = 0; n < r; n += 1)
                    e[n] && e[n].sh
                        ? this.calculateShapeBoundingBox(e[n], t)
                        : e[n] && e[n].it
                          ? this.calculateBoundingBox(e[n].it, t)
                          : e[n] && e[n].style && e[n].w && this.expandStrokeBoundingBox(e[n].w, t);
            }),
            (HShapeElement.prototype.expandStrokeBoundingBox = function (e, t) {
                var n = 0;
                if (e.keyframes) {
                    for (var r = 0; r < e.keyframes.length; r += 1) {
                        var i = e.keyframes[r].s;
                        i > n && (n = i);
                    }
                    n *= e.mult;
                } else n = e.v * e.mult;
                (t.x -= n), (t.xMax += n), (t.y -= n), (t.yMax += n);
            }),
            (HShapeElement.prototype.currentBoxContains = function (e) {
                return (
                    this.currentBBox.x <= e.x &&
                    this.currentBBox.y <= e.y &&
                    this.currentBBox.width + this.currentBBox.x >= e.x + e.width &&
                    this.currentBBox.height + this.currentBBox.y >= e.y + e.height
                );
            }),
            (HShapeElement.prototype.renderInnerContent = function () {
                if ((this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf))) {
                    var e = this.tempBoundingBox,
                        t = 999999;
                    if (
                        ((e.x = 999999),
                        (e.xMax = -t),
                        (e.y = t),
                        (e.yMax = -t),
                        this.calculateBoundingBox(this.itemsData, e),
                        (e.width = e.xMax < e.x ? 0 : e.xMax - e.x),
                        (e.height = e.yMax < e.y ? 0 : e.yMax - e.y),
                        !this.currentBoxContains(e))
                    ) {
                        var n = !1;
                        if (
                            (this.currentBBox.w !== e.width &&
                                ((this.currentBBox.w = e.width),
                                this.shapeCont.setAttribute("width", e.width),
                                (n = !0)),
                            this.currentBBox.h !== e.height &&
                                ((this.currentBBox.h = e.height),
                                this.shapeCont.setAttribute("height", e.height),
                                (n = !0)),
                            n || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y)
                        ) {
                            (this.currentBBox.w = e.width),
                                (this.currentBBox.h = e.height),
                                (this.currentBBox.x = e.x),
                                (this.currentBBox.y = e.y),
                                this.shapeCont.setAttribute(
                                    "viewBox",
                                    this.currentBBox.x +
                                        " " +
                                        this.currentBBox.y +
                                        " " +
                                        this.currentBBox.w +
                                        " " +
                                        this.currentBBox.h,
                                );
                            var r = this.shapeCont.style,
                                i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                            (r.transform = i), (r.webkitTransform = i);
                        }
                    }
                }
            }),
            extendPrototype(
                [
                    BaseElement,
                    TransformElement,
                    HBaseElement,
                    HierarchyElement,
                    FrameElement,
                    RenderableDOMElement,
                    ITextElement,
                ],
                HTextElement,
            ),
            (HTextElement.prototype.createContent = function () {
                if (((this.isMasked = this.checkMasks()), this.isMasked)) {
                    (this.renderType = "svg"),
                        (this.compW = this.comp.data.w),
                        (this.compH = this.comp.data.h),
                        this.svgElement.setAttribute("width", this.compW),
                        this.svgElement.setAttribute("height", this.compH);
                    var e = createNS("g");
                    this.maskedElement.appendChild(e), (this.innerElem = e);
                } else (this.renderType = "html"), (this.innerElem = this.layerElement);
                this.checkParenting();
            }),
            (HTextElement.prototype.buildNewText = function () {
                var e = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
                var t = this.innerElem.style,
                    n = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
                (t.fill = n),
                    (t.color = n),
                    e.sc && ((t.stroke = this.buildColor(e.sc)), (t.strokeWidth = e.sw + "px"));
                var r = this.globalData.fontManager.getFontByName(e.f);
                if (!this.globalData.fontManager.chars)
                    if (((t.fontSize = e.finalSize + "px"), (t.lineHeight = e.finalSize + "px"), r.fClass))
                        this.innerElem.className = r.fClass;
                    else {
                        t.fontFamily = r.fFamily;
                        var i = e.fWeight;
                        (t.fontStyle = e.fStyle), (t.fontWeight = i);
                    }
                var s = e.l;
                c = s.length;
                var a = this.mHelper,
                    o = "",
                    l = 0;
                for (u = 0; u < c; u += 1) {
                    if (
                        (this.globalData.fontManager.chars
                            ? (this.textPaths[l]
                                  ? (d = this.textPaths[l])
                                  : ((d = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]),
                                    d.setAttribute("stroke-linejoin", lineJoinEnum[2]),
                                    d.setAttribute("stroke-miterlimit", "4")),
                              this.isMasked ||
                                  (this.textSpans[l]
                                      ? (f = (_ = this.textSpans[l]).children[0])
                                      : (((_ = createTag("div")).style.lineHeight = 0),
                                        (f = createNS("svg")).appendChild(d),
                                        styleDiv(_))))
                            : this.isMasked
                              ? (d = this.textPaths[l] ? this.textPaths[l] : createNS("text"))
                              : this.textSpans[l]
                                ? ((_ = this.textSpans[l]), (d = this.textPaths[l]))
                                : (styleDiv((_ = createTag("span"))),
                                  styleDiv((d = createTag("span"))),
                                  _.appendChild(d)),
                        this.globalData.fontManager.chars)
                    ) {
                        var u,
                            c,
                            d,
                            _,
                            f,
                            p,
                            h,
                            m = this.globalData.fontManager.getCharData(
                                e.finalText[u],
                                r.fStyle,
                                this.globalData.fontManager.getFontByName(e.f).fFamily,
                            );
                        if (
                            ((h = m ? m.data : null),
                            a.reset(),
                            h &&
                                h.shapes &&
                                h.shapes.length &&
                                ((p = h.shapes[0].it),
                                a.scale(e.finalSize / 100, e.finalSize / 100),
                                (o = this.createPathShape(a, p)),
                                d.setAttribute("d", o)),
                            this.isMasked)
                        )
                            this.innerElem.appendChild(d);
                        else {
                            if ((this.innerElem.appendChild(_), h && h.shapes)) {
                                document.body.appendChild(f);
                                var E = f.getBBox();
                                f.setAttribute("width", E.width + 2),
                                    f.setAttribute("height", E.height + 2),
                                    f.setAttribute(
                                        "viewBox",
                                        E.x - 1 + " " + (E.y - 1) + " " + (E.width + 2) + " " + (E.height + 2),
                                    );
                                var g = f.style,
                                    A = "translate(" + (E.x - 1) + "px," + (E.y - 1) + "px)";
                                (g.transform = A), (g.webkitTransform = A), (s[u].yOffset = E.y - 1);
                            } else f.setAttribute("width", 1), f.setAttribute("height", 1);
                            _.appendChild(f);
                        }
                    } else if (
                        ((d.textContent = s[u].val),
                        d.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"),
                        this.isMasked)
                    )
                        this.innerElem.appendChild(d);
                    else {
                        this.innerElem.appendChild(_);
                        var I = d.style,
                            T = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
                        (I.transform = T), (I.webkitTransform = T);
                    }
                    this.isMasked ? (this.textSpans[l] = d) : (this.textSpans[l] = _),
                        (this.textSpans[l].style.display = "block"),
                        (this.textPaths[l] = d),
                        (l += 1);
                }
                for (; l < this.textSpans.length; ) (this.textSpans[l].style.display = "none"), (l += 1);
            }),
            (HTextElement.prototype.renderInnerContent = function () {
                if ((this.validateText(), this.data.singleShape)) {
                    if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                    if (this.isMasked && this.finalTransform._matMdf) {
                        this.svgElement.setAttribute(
                            "viewBox",
                            -this.finalTransform.mProp.p.v[0] +
                                " " +
                                -this.finalTransform.mProp.p.v[1] +
                                " " +
                                this.compW +
                                " " +
                                this.compH,
                        );
                        var e,
                            t,
                            n,
                            r,
                            i,
                            s = this.svgElement.style,
                            a =
                                "translate(" +
                                -this.finalTransform.mProp.p.v[0] +
                                "px," +
                                -this.finalTransform.mProp.p.v[1] +
                                "px)";
                        (s.transform = a), (s.webkitTransform = a);
                    }
                }
                if (
                    (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
                    this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
                ) {
                    var o = 0,
                        l = this.textAnimator.renderedLetters,
                        u = this.textProperty.currentData.l;
                    for (e = 0, t = u.length; e < t; e += 1)
                        u[e].n
                            ? (o += 1)
                            : ((r = this.textSpans[e]),
                              (i = this.textPaths[e]),
                              (n = l[o]),
                              (o += 1),
                              n._mdf.m &&
                                  (this.isMasked
                                      ? r.setAttribute("transform", n.m)
                                      : ((r.style.webkitTransform = n.m), (r.style.transform = n.m))),
                              (r.style.opacity = n.o),
                              n.sw && n._mdf.sw && i.setAttribute("stroke-width", n.sw),
                              n.sc && n._mdf.sc && i.setAttribute("stroke", n.sc),
                              n.fc && n._mdf.fc && (i.setAttribute("fill", n.fc), (i.style.color = n.fc)));
                    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var c = this.innerElem.getBBox();
                        this.currentBBox.w !== c.width &&
                            ((this.currentBBox.w = c.width), this.svgElement.setAttribute("width", c.width)),
                            this.currentBBox.h !== c.height &&
                                ((this.currentBBox.h = c.height), this.svgElement.setAttribute("height", c.height));
                        var d = 1;
                        if (
                            this.currentBBox.w !== c.width + 2 * d ||
                            this.currentBBox.h !== c.height + 2 * d ||
                            this.currentBBox.x !== c.x - d ||
                            this.currentBBox.y !== c.y - d
                        ) {
                            (this.currentBBox.w = c.width + 2 * d),
                                (this.currentBBox.h = c.height + 2 * d),
                                (this.currentBBox.x = c.x - d),
                                (this.currentBBox.y = c.y - d),
                                this.svgElement.setAttribute(
                                    "viewBox",
                                    this.currentBBox.x +
                                        " " +
                                        this.currentBBox.y +
                                        " " +
                                        this.currentBBox.w +
                                        " " +
                                        this.currentBBox.h,
                                ),
                                (s = this.svgElement.style);
                            var _ = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                            (s.transform = _), (s.webkitTransform = _);
                        }
                    }
                }
            }),
            extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
            (HCameraElement.prototype.setup = function () {
                var e,
                    t,
                    n,
                    r,
                    i = this.comp.threeDElements.length;
                for (e = 0; e < i; e += 1)
                    if ("3d" === (t = this.comp.threeDElements[e]).type) {
                        (n = t.perspectiveElem.style), (r = t.container.style);
                        var s = this.pe.v + "px",
                            a = "0px 0px 0px",
                            o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        (n.perspective = s),
                            (n.webkitPerspective = s),
                            (r.transformOrigin = a),
                            (r.mozTransformOrigin = a),
                            (r.webkitTransformOrigin = a),
                            (n.transform = o),
                            (n.webkitTransform = o);
                    }
            }),
            (HCameraElement.prototype.createElements = function () {}),
            (HCameraElement.prototype.hide = function () {}),
            (HCameraElement.prototype.renderFrame = function () {
                var e = this._isFirstFrame;
                if (this.hierarchy)
                    for (n = 0, r = this.hierarchy.length; n < r; n += 1)
                        e = this.hierarchy[n].finalTransform.mProp._mdf || e;
                if (
                    e ||
                    this.pe._mdf ||
                    (this.p && this.p._mdf) ||
                    (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) ||
                    this.rx._mdf ||
                    this.ry._mdf ||
                    this.rz._mdf ||
                    this.or._mdf ||
                    (this.a && this.a._mdf)
                ) {
                    if ((this.mat.reset(), this.hierarchy))
                        for (n = r = this.hierarchy.length - 1; n >= 0; n -= 1) {
                            var t = this.hierarchy[n].finalTransform.mProp;
                            this.mat.translate(-t.p.v[0], -t.p.v[1], t.p.v[2]),
                                this.mat.rotateX(-t.or.v[0]).rotateY(-t.or.v[1]).rotateZ(t.or.v[2]),
                                this.mat.rotateX(-t.rx.v).rotateY(-t.ry.v).rotateZ(t.rz.v),
                                this.mat.scale(1 / t.s.v[0], 1 / t.s.v[1], 1 / t.s.v[2]),
                                this.mat.translate(t.a.v[0], t.a.v[1], t.a.v[2]);
                        }
                    if (
                        (this.p
                            ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2])
                            : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                        this.a)
                    ) {
                        var n,
                            r,
                            i = this.p
                                ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]]
                                : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]],
                            s = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
                            a = [i[0] / s, i[1] / s, i[2] / s],
                            o = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                            l = Math.atan2(a[1], o),
                            u = Math.atan2(a[0], -a[2]);
                        this.mat.rotateY(u).rotateX(-l);
                    }
                    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
                        this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),
                        this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0),
                        this.mat.translate(0, 0, this.pe.v);
                    var c = !this._prevMat.equals(this.mat);
                    if ((c || this.pe._mdf) && this.comp.threeDElements) {
                        for (n = 0, r = this.comp.threeDElements.length; n < r; n += 1)
                            if ("3d" === (d = this.comp.threeDElements[n]).type) {
                                if (c) {
                                    var d,
                                        _,
                                        f,
                                        p = this.mat.toCSS();
                                    ((f = d.container.style).transform = p), (f.webkitTransform = p);
                                }
                                this.pe._mdf &&
                                    (((_ = d.perspectiveElem.style).perspective = this.pe.v + "px"),
                                    (_.webkitPerspective = this.pe.v + "px"));
                            }
                        this.mat.clone(this._prevMat);
                    }
                }
                this._isFirstFrame = !1;
            }),
            (HCameraElement.prototype.prepareFrame = function (e) {
                this.prepareProperties(e, !0);
            }),
            (HCameraElement.prototype.destroy = function () {}),
            (HCameraElement.prototype.getBaseElement = function () {
                return null;
            }),
            extendPrototype(
                [
                    BaseElement,
                    TransformElement,
                    HBaseElement,
                    HSolidElement,
                    HierarchyElement,
                    FrameElement,
                    RenderableElement,
                ],
                HImageElement,
            ),
            (HImageElement.prototype.createContent = function () {
                var e = this.globalData.getAssetsPath(this.assetData),
                    t = new Image();
                this.data.hasMask
                    ? ((this.imageElem = createNS("image")),
                      this.imageElem.setAttribute("width", this.assetData.w + "px"),
                      this.imageElem.setAttribute("height", this.assetData.h + "px"),
                      this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e),
                      this.layerElement.appendChild(this.imageElem),
                      this.baseElement.setAttribute("width", this.assetData.w),
                      this.baseElement.setAttribute("height", this.assetData.h))
                    : this.layerElement.appendChild(t),
                    (t.crossOrigin = "anonymous"),
                    (t.src = e),
                    this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
            }),
            extendPrototype([BaseRenderer], HybridRendererBase),
            (HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem),
            (HybridRendererBase.prototype.checkPendingElements = function () {
                for (; this.pendingElements.length; ) this.pendingElements.pop().checkParenting();
            }),
            (HybridRendererBase.prototype.appendElementInPos = function (e, t) {
                var n = e.getBaseElement();
                if (n) {
                    var r = this.layers[t];
                    if (r.ddd && this.supports3d) this.addTo3dContainer(n, t);
                    else if (this.threeDElements) this.addTo3dContainer(n, t);
                    else {
                        for (var i, s, a = 0; a < t; )
                            this.elements[a] &&
                                !0 !== this.elements[a] &&
                                this.elements[a].getBaseElement &&
                                ((s = this.elements[a]),
                                (i = (this.layers[a].ddd ? this.getThreeDContainerByPos(a) : s.getBaseElement()) || i)),
                                (a += 1);
                        i
                            ? (r.ddd && this.supports3d) || this.layerElement.insertBefore(n, i)
                            : (r.ddd && this.supports3d) || this.layerElement.appendChild(n);
                    }
                }
            }),
            (HybridRendererBase.prototype.createShape = function (e) {
                return this.supports3d
                    ? new HShapeElement(e, this.globalData, this)
                    : new SVGShapeElement(e, this.globalData, this);
            }),
            (HybridRendererBase.prototype.createText = function (e) {
                return this.supports3d
                    ? new HTextElement(e, this.globalData, this)
                    : new SVGTextLottieElement(e, this.globalData, this);
            }),
            (HybridRendererBase.prototype.createCamera = function (e) {
                return (this.camera = new HCameraElement(e, this.globalData, this)), this.camera;
            }),
            (HybridRendererBase.prototype.createImage = function (e) {
                return this.supports3d
                    ? new HImageElement(e, this.globalData, this)
                    : new IImageElement(e, this.globalData, this);
            }),
            (HybridRendererBase.prototype.createSolid = function (e) {
                return this.supports3d
                    ? new HSolidElement(e, this.globalData, this)
                    : new ISolidElement(e, this.globalData, this);
            }),
            (HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull),
            (HybridRendererBase.prototype.getThreeDContainerByPos = function (e) {
                for (var t = 0, n = this.threeDElements.length; t < n; ) {
                    if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e)
                        return this.threeDElements[t].perspectiveElem;
                    t += 1;
                }
                return null;
            }),
            (HybridRendererBase.prototype.createThreeDContainer = function (e, t) {
                var n,
                    r,
                    i = createTag("div");
                styleDiv(i);
                var s = createTag("div");
                if ((styleDiv(s), "3d" === t)) {
                    ((n = i.style).width = this.globalData.compSize.w + "px"),
                        (n.height = this.globalData.compSize.h + "px");
                    var a = "50% 50%";
                    (n.webkitTransformOrigin = a), (n.mozTransformOrigin = a), (n.transformOrigin = a);
                    var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    ((r = s.style).transform = o), (r.webkitTransform = o);
                }
                i.appendChild(s);
                var l = { container: s, perspectiveElem: i, startPos: e, endPos: e, type: t };
                return this.threeDElements.push(l), l;
            }),
            (HybridRendererBase.prototype.build3dContainers = function () {
                var e,
                    t,
                    n = this.layers.length,
                    r = "";
                for (e = 0; e < n; e += 1)
                    this.layers[e].ddd && 3 !== this.layers[e].ty
                        ? "3d" !== r && ((r = "3d"), (t = this.createThreeDContainer(e, "3d")))
                        : "2d" !== r && ((r = "2d"), (t = this.createThreeDContainer(e, "2d"))),
                        (t.endPos = Math.max(t.endPos, e));
                for (e = (n = this.threeDElements.length) - 1; e >= 0; e -= 1)
                    this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem);
            }),
            (HybridRendererBase.prototype.addTo3dContainer = function (e, t) {
                for (var n = 0, r = this.threeDElements.length; n < r; ) {
                    if (t <= this.threeDElements[n].endPos) {
                        for (var i, s = this.threeDElements[n].startPos; s < t; )
                            this.elements[s] &&
                                this.elements[s].getBaseElement &&
                                (i = this.elements[s].getBaseElement()),
                                (s += 1);
                        i
                            ? this.threeDElements[n].container.insertBefore(e, i)
                            : this.threeDElements[n].container.appendChild(e);
                        break;
                    }
                    n += 1;
                }
            }),
            (HybridRendererBase.prototype.configAnimation = function (e) {
                var t = createTag("div"),
                    n = this.animationItem.wrapper,
                    r = t.style;
                (r.width = e.w + "px"),
                    (r.height = e.h + "px"),
                    (this.resizerElem = t),
                    styleDiv(t),
                    (r.transformStyle = "flat"),
                    (r.mozTransformStyle = "flat"),
                    (r.webkitTransformStyle = "flat"),
                    this.renderConfig.className && t.setAttribute("class", this.renderConfig.className),
                    n.appendChild(t),
                    (r.overflow = "hidden");
                var i = createNS("svg");
                i.setAttribute("width", "1"),
                    i.setAttribute("height", "1"),
                    styleDiv(i),
                    this.resizerElem.appendChild(i);
                var s = createNS("defs");
                i.appendChild(s),
                    (this.data = e),
                    this.setupGlobalData(e, i),
                    (this.globalData.defs = s),
                    (this.layers = e.layers),
                    (this.layerElement = this.resizerElem),
                    this.build3dContainers(),
                    this.updateContainerSize();
            }),
            (HybridRendererBase.prototype.destroy = function () {
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
                    (this.animationItem.container = null),
                    (this.globalData.defs = null);
                var e,
                    t = this.layers ? this.layers.length : 0;
                for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
                (this.elements.length = 0), (this.destroyed = !0), (this.animationItem = null);
            }),
            (HybridRendererBase.prototype.updateContainerSize = function () {
                var e,
                    t,
                    n,
                    r,
                    i = this.animationItem.wrapper.offsetWidth,
                    s = this.animationItem.wrapper.offsetHeight,
                    a = i / s;
                this.globalData.compSize.w / this.globalData.compSize.h > a
                    ? ((e = i / this.globalData.compSize.w),
                      (t = i / this.globalData.compSize.w),
                      (n = 0),
                      (r = (s - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2))
                    : ((e = s / this.globalData.compSize.h),
                      (t = s / this.globalData.compSize.h),
                      (n = (i - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2),
                      (r = 0));
                var o = this.resizerElem.style;
                (o.webkitTransform = "matrix3d(" + e + ",0,0,0,0," + t + ",0,0,0,0,1,0," + n + "," + r + ",0,1)"),
                    (o.transform = o.webkitTransform);
            }),
            (HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame),
            (HybridRendererBase.prototype.hide = function () {
                this.resizerElem.style.display = "none";
            }),
            (HybridRendererBase.prototype.show = function () {
                this.resizerElem.style.display = "block";
            }),
            (HybridRendererBase.prototype.initItems = function () {
                if ((this.buildAllItems(), this.camera)) this.camera.setup();
                else {
                    var e,
                        t = this.globalData.compSize.w,
                        n = this.globalData.compSize.h,
                        r = this.threeDElements.length;
                    for (e = 0; e < r; e += 1) {
                        var i = this.threeDElements[e].perspectiveElem.style;
                        (i.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(n, 2)) + "px"),
                            (i.perspective = i.webkitPerspective);
                    }
                }
            }),
            (HybridRendererBase.prototype.searchExtraCompositions = function (e) {
                var t,
                    n = e.length,
                    r = createTag("div");
                for (t = 0; t < n; t += 1)
                    if (e[t].xt) {
                        var i = this.createComp(e[t], r, this.globalData.comp, null);
                        i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
                    }
            }),
            extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement),
            (HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements),
            (HCompElement.prototype.createContainerElements = function () {
                this._createBaseContainerElements(),
                    this.data.hasMask
                        ? (this.svgElement.setAttribute("width", this.data.w),
                          this.svgElement.setAttribute("height", this.data.h),
                          (this.transformedElement = this.baseElement))
                        : (this.transformedElement = this.layerElement);
            }),
            (HCompElement.prototype.addTo3dContainer = function (e, t) {
                for (var n, r = 0; r < t; )
                    this.elements[r] && this.elements[r].getBaseElement && (n = this.elements[r].getBaseElement()),
                        (r += 1);
                n ? this.layerElement.insertBefore(e, n) : this.layerElement.appendChild(e);
            }),
            (HCompElement.prototype.createComp = function (e) {
                return this.supports3d
                    ? new HCompElement(e, this.globalData, this)
                    : new SVGCompElement(e, this.globalData, this);
            }),
            extendPrototype([HybridRendererBase], HybridRenderer),
            (HybridRenderer.prototype.createComp = function (e) {
                return this.supports3d
                    ? new HCompElement(e, this.globalData, this)
                    : new SVGCompElement(e, this.globalData, this);
            });
        var CompExpressionInterface = (function () {
            return function (e) {
                function t(t) {
                    for (var n = 0, r = e.layers.length; n < r; ) {
                        if (e.layers[n].nm === t || e.layers[n].ind === t) return e.elements[n].layerInterface;
                        n += 1;
                    }
                    return null;
                }
                return (
                    Object.defineProperty(t, "_name", { value: e.data.nm }),
                    (t.layer = t),
                    (t.pixelAspect = 1),
                    (t.height = e.data.h || e.globalData.compSize.h),
                    (t.width = e.data.w || e.globalData.compSize.w),
                    (t.pixelAspect = 1),
                    (t.frameDuration = 1 / e.globalData.frameRate),
                    (t.displayStartTime = 0),
                    (t.numLayers = e.layers.length),
                    t
                );
            };
        })();
        function _typeof$2(e) {
            return (_typeof$2 =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                      })(e);
        }
        function seedRandom(e, t) {
            var n,
                r = this,
                i = 256,
                s = 6,
                a = 52,
                o = "random",
                l = t.pow(i, s),
                u = t.pow(2, a),
                c = 2 * u,
                d = i - 1;
            function _(n, r, a) {
                var d = [],
                    _ = m(
                        h((r = !0 === r ? { entropy: !0 } : r || {}).entropy ? [n, g(e)] : null === n ? E() : n, 3),
                        d,
                    ),
                    A = new f(d),
                    I = function () {
                        for (var e = A.g(s), t = l, n = 0; e < u; ) (e = (e + n) * i), (t *= i), (n = A.g(1));
                        for (; e >= c; ) (e /= 2), (t /= 2), (n >>>= 1);
                        return (e + n) / t;
                    };
                return (
                    (I.int32 = function () {
                        return 0 | A.g(4);
                    }),
                    (I.quick = function () {
                        return A.g(4) / 0x100000000;
                    }),
                    (I.double = I),
                    m(g(A.S), e),
                    (
                        r.pass ||
                        a ||
                        function (e, n, r, i) {
                            return (i &&
                                (i.S && p(i, A),
                                (e.state = function () {
                                    return p(A, {});
                                })),
                            r)
                                ? ((t[o] = e), n)
                                : e;
                        }
                    )(I, _, "global" in r ? r.global : this == t, r.state)
                );
            }
            function f(e) {
                var t,
                    n = e.length,
                    r = this,
                    s = 0,
                    a = (r.i = r.j = 0),
                    o = (r.S = []);
                for (n || (e = [n++]); s < i; ) o[s] = s++;
                for (s = 0; s < i; s++) (o[s] = o[(a = d & (a + e[s % n] + (t = o[s])))]), (o[a] = t);
                r.g = function (e) {
                    for (var t, n = 0, s = r.i, a = r.j, o = r.S; e--; )
                        (t = o[(s = d & (s + 1))]), (n = n * i + o[d & ((o[s] = o[(a = d & (a + t))]) + (o[a] = t))]);
                    return (r.i = s), (r.j = a), n;
                };
            }
            function p(e, t) {
                return (t.i = e.i), (t.j = e.j), (t.S = e.S.slice()), t;
            }
            function h(e, t) {
                var n,
                    r = [],
                    i = _typeof$2(e);
                if (t && "object" == i)
                    for (n in e)
                        try {
                            r.push(h(e[n], t - 1));
                        } catch (e) {}
                return r.length ? r : "string" == i ? e : e + "\0";
            }
            function m(e, t) {
                for (var n, r = e + "", i = 0; i < r.length; )
                    t[d & i] = d & ((n ^= 19 * t[d & i]) + r.charCodeAt(i++));
                return g(t);
            }
            function E() {
                try {
                    if (n) return g(n.randomBytes(i));
                    var t = new Uint8Array(i);
                    return (r.crypto || r.msCrypto).getRandomValues(t), g(t);
                } catch (t) {
                    var s = r.navigator,
                        a = s && s.plugins;
                    return [+new Date(), r, a, r.screen, g(e)];
                }
            }
            function g(e) {
                return String.fromCharCode.apply(0, e);
            }
            (t["seed" + o] = _), m(t.random(), e);
        }
        function initialize$2(e) {
            seedRandom([], e);
        }
        var propTypes = { SHAPE: "shape" };
        function _typeof$1(e) {
            return (_typeof$1 =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                      })(e);
        }
        var ExpressionManager = (function () {
                var ob = {},
                    Math = BMMath,
                    window = null,
                    document = null,
                    XMLHttpRequest = null,
                    fetch = null,
                    frames = null,
                    _lottieGlobal = {};
                function resetFrame() {
                    _lottieGlobal = {};
                }
                function $bm_isInstanceOfArray(e) {
                    return e.constructor === Array || e.constructor === Float32Array;
                }
                function isNumerable(e, t) {
                    return "number" === e || t instanceof Number || "boolean" === e || "string" === e;
                }
                function $bm_neg(e) {
                    var t = _typeof$1(e);
                    if ("number" === t || e instanceof Number || "boolean" === t) return -e;
                    if ($bm_isInstanceOfArray(e)) {
                        var n,
                            r = e.length,
                            i = [];
                        for (n = 0; n < r; n += 1) i[n] = -e[n];
                        return i;
                    }
                    return e.propType ? e.v : -e;
                }
                initialize$2(BMMath);
                var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get,
                    easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get,
                    easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
                function sum(e, t) {
                    var n = _typeof$1(e),
                        r = _typeof$1(t);
                    if ((isNumerable(n, e) && isNumerable(r, t)) || "string" === n || "string" === r) return e + t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(r, t)) return (e = e.slice(0)), (e[0] += t), e;
                    if (isNumerable(n, e) && $bm_isInstanceOfArray(t)) return ((t = t.slice(0))[0] = e + t[0]), t;
                    if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                        for (var i = 0, s = e.length, a = t.length, o = []; i < s || i < a; )
                            ("number" == typeof e[i] || e[i] instanceof Number) &&
                            ("number" == typeof t[i] || t[i] instanceof Number)
                                ? (o[i] = e[i] + t[i])
                                : (o[i] = void 0 === t[i] ? e[i] : e[i] || t[i]),
                                (i += 1);
                        return o;
                    }
                    return 0;
                }
                var add = sum;
                function sub(e, t) {
                    var n = _typeof$1(e),
                        r = _typeof$1(t);
                    if (isNumerable(n, e) && isNumerable(r, t))
                        return "string" === n && (e = parseInt(e, 10)), "string" === r && (t = parseInt(t, 10)), e - t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(r, t)) return (e = e.slice(0)), (e[0] -= t), e;
                    if (isNumerable(n, e) && $bm_isInstanceOfArray(t)) return ((t = t.slice(0))[0] = e - t[0]), t;
                    if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                        for (var i = 0, s = e.length, a = t.length, o = []; i < s || i < a; )
                            ("number" == typeof e[i] || e[i] instanceof Number) &&
                            ("number" == typeof t[i] || t[i] instanceof Number)
                                ? (o[i] = e[i] - t[i])
                                : (o[i] = void 0 === t[i] ? e[i] : e[i] || t[i]),
                                (i += 1);
                        return o;
                    }
                    return 0;
                }
                function mul(e, t) {
                    var n,
                        r,
                        i,
                        s = _typeof$1(e),
                        a = _typeof$1(t);
                    if (isNumerable(s, e) && isNumerable(a, t)) return e * t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(a, t)) {
                        for (r = 0, n = createTypedArray("float32", (i = e.length)); r < i; r += 1) n[r] = e[r] * t;
                        return n;
                    }
                    if (isNumerable(s, e) && $bm_isInstanceOfArray(t)) {
                        for (r = 0, n = createTypedArray("float32", (i = t.length)); r < i; r += 1) n[r] = e * t[r];
                        return n;
                    }
                    return 0;
                }
                function div(e, t) {
                    var n,
                        r,
                        i,
                        s = _typeof$1(e),
                        a = _typeof$1(t);
                    if (isNumerable(s, e) && isNumerable(a, t)) return e / t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(a, t)) {
                        for (r = 0, n = createTypedArray("float32", (i = e.length)); r < i; r += 1) n[r] = e[r] / t;
                        return n;
                    }
                    if (isNumerable(s, e) && $bm_isInstanceOfArray(t)) {
                        for (r = 0, n = createTypedArray("float32", (i = t.length)); r < i; r += 1) n[r] = e / t[r];
                        return n;
                    }
                    return 0;
                }
                function mod(e, t) {
                    return (
                        "string" == typeof e && (e = parseInt(e, 10)),
                        "string" == typeof t && (t = parseInt(t, 10)),
                        e % t
                    );
                }
                var $bm_sum = sum,
                    $bm_sub = sub,
                    $bm_mul = mul,
                    $bm_div = div,
                    $bm_mod = mod;
                function clamp(e, t, n) {
                    if (t > n) {
                        var r = n;
                        (n = t), (t = r);
                    }
                    return Math.min(Math.max(e, t), n);
                }
                function radiansToDegrees(e) {
                    return e / degToRads;
                }
                var radians_to_degrees = radiansToDegrees;
                function degreesToRadians(e) {
                    return e * degToRads;
                }
                var degrees_to_radians = radiansToDegrees,
                    helperLengthArray = [0, 0, 0, 0, 0, 0];
                function length(e, t) {
                    if ("number" == typeof e || e instanceof Number) return (t = t || 0), Math.abs(e - t);
                    t || (t = helperLengthArray);
                    var n,
                        r = Math.min(e.length, t.length),
                        i = 0;
                    for (n = 0; n < r; n += 1) i += Math.pow(t[n] - e[n], 2);
                    return Math.sqrt(i);
                }
                function normalize(e) {
                    return div(e, length(e));
                }
                function rgbToHsl(e) {
                    var t,
                        n,
                        r = e[0],
                        i = e[1],
                        s = e[2],
                        a = Math.max(r, i, s),
                        o = Math.min(r, i, s),
                        l = (a + o) / 2;
                    if (a === o) (t = 0), (n = 0);
                    else {
                        var u = a - o;
                        switch (((n = l > 0.5 ? u / (2 - a - o) : u / (a + o)), a)) {
                            case r:
                                t = (i - s) / u + 6 * (i < s);
                                break;
                            case i:
                                t = (s - r) / u + 2;
                                break;
                            case s:
                                t = (r - i) / u + 4;
                        }
                        t /= 6;
                    }
                    return [t, n, l, e[3]];
                }
                function hue2rgb(e, t, n) {
                    return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
                        ? e + (t - e) * 6 * n
                        : n < 0.5
                          ? t
                          : n < 2 / 3
                            ? e + (t - e) * (2 / 3 - n) * 6
                            : e;
                }
                function hslToRgb(e) {
                    var t,
                        n,
                        r,
                        i = e[0],
                        s = e[1],
                        a = e[2];
                    if (0 === s) (t = a), (r = a), (n = a);
                    else {
                        var o = a < 0.5 ? a * (1 + s) : a + s - a * s,
                            l = 2 * a - o;
                        (t = hue2rgb(l, o, i + 1 / 3)), (n = hue2rgb(l, o, i)), (r = hue2rgb(l, o, i - 1 / 3));
                    }
                    return [t, n, r, e[3]];
                }
                function linear(e, t, n, r, i) {
                    if (((void 0 === r || void 0 === i) && ((r = t), (i = n), (t = 0), (n = 1)), n < t)) {
                        var s,
                            a = n;
                        (n = t), (t = a);
                    }
                    if (e <= t) return r;
                    if (e >= n) return i;
                    var o = n === t ? 0 : (e - t) / (n - t);
                    if (!r.length) return r + (i - r) * o;
                    var l = r.length,
                        u = createTypedArray("float32", l);
                    for (s = 0; s < l; s += 1) u[s] = r[s] + (i[s] - r[s]) * o;
                    return u;
                }
                function random(e, t) {
                    if ((void 0 === t && (void 0 === e ? ((e = 0), (t = 1)) : ((t = e), (e = void 0))), t.length)) {
                        var n,
                            r = t.length;
                        e || (e = createTypedArray("float32", r));
                        var i = createTypedArray("float32", r),
                            s = BMMath.random();
                        for (n = 0; n < r; n += 1) i[n] = e[n] + s * (t[n] - e[n]);
                        return i;
                    }
                    return void 0 === e && (e = 0), e + BMMath.random() * (t - e);
                }
                function createPath(e, t, n, r) {
                    var i,
                        s,
                        a,
                        o = e.length,
                        l = shapePool.newElement();
                    l.setPathData(!!r, o);
                    var u = [0, 0];
                    for (i = 0; i < o; i += 1)
                        (s = t && t[i] ? t[i] : u),
                            (a = n && n[i] ? n[i] : u),
                            l.setTripleAt(
                                e[i][0],
                                e[i][1],
                                a[0] + e[i][0],
                                a[1] + e[i][1],
                                s[0] + e[i][0],
                                s[1] + e[i][1],
                                i,
                                !0,
                            );
                    return l;
                }
                function initiateExpression(elem, data, property) {
                    function noOp(e) {
                        return e;
                    }
                    if (!elem.globalData.renderConfig.runExpressions) return noOp;
                    var transform,
                        $bm_transform,
                        content,
                        effect,
                        loopIn,
                        loop_in,
                        loopOut,
                        loop_out,
                        smooth,
                        toWorld,
                        fromWorld,
                        fromComp,
                        toComp,
                        fromCompToSurface,
                        position,
                        rotation,
                        anchorPoint,
                        scale,
                        thisLayer,
                        thisComp,
                        mask,
                        valueAtTime,
                        velocityAtTime,
                        scoped_bm_rt,
                        time,
                        velocity,
                        value,
                        text,
                        textIndex,
                        textTotal,
                        selectorValue,
                        parent,
                        val = data.x,
                        needsVelocity = /velocity(?![\w\d])/.test(val),
                        _needsRandom = -1 !== val.indexOf("random"),
                        elemType = elem.data.ty,
                        thisProperty = property;
                    (thisProperty.valueAtTime = thisProperty.getValueAtTime),
                        Object.defineProperty(thisProperty, "value", {
                            get: function () {
                                return thisProperty.v;
                            },
                        }),
                        (elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
                        (elem.comp.displayStartTime = 0);
                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                        width = elem.data.sw ? elem.data.sw : 0,
                        height = elem.data.sh ? elem.data.sh : 0,
                        name = elem.data.nm,
                        expression_function = eval(
                            "[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]",
                        )[0],
                        numKeys = property.kf ? data.k.length : 0,
                        active = !this.data || !0 !== this.data.hd,
                        wiggle = function (e, t) {
                            var n,
                                r,
                                i = this.pv.length ? this.pv.length : 1,
                                s = createTypedArray("float32", i);
                            e = 5;
                            var a = Math.floor(time * e);
                            for (n = 0, r = 0; n < a; ) {
                                for (r = 0; r < i; r += 1) s[r] += -t + 2 * t * BMMath.random();
                                n += 1;
                            }
                            var o = time * e,
                                l = o - Math.floor(o),
                                u = createTypedArray("float32", i);
                            if (i > 1) {
                                for (r = 0; r < i; r += 1)
                                    u[r] = this.pv[r] + s[r] + (-t + 2 * t * BMMath.random()) * l;
                                return u;
                            }
                            return this.pv + s[0] + (-t + 2 * t * BMMath.random()) * l;
                        }.bind(this);
                    function loopInDuration(e, t) {
                        return loopIn(e, t, !0);
                    }
                    function loopOutDuration(e, t) {
                        return loopOut(e, t, !0);
                    }
                    thisProperty.loopIn && (loop_in = loopIn = thisProperty.loopIn.bind(thisProperty)),
                        thisProperty.loopOut && (loop_out = loopOut = thisProperty.loopOut.bind(thisProperty)),
                        thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)),
                        this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
                        this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
                    function lookAt(e, t) {
                        var n = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                            r = Math.atan2(n[0], Math.sqrt(n[1] * n[1] + n[2] * n[2])) / degToRads;
                        return [-Math.atan2(n[1], n[2]) / degToRads, r, 0];
                    }
                    function easeOut(e, t, n, r, i) {
                        return applyEase(easeOutBez, e, t, n, r, i);
                    }
                    function easeIn(e, t, n, r, i) {
                        return applyEase(easeInBez, e, t, n, r, i);
                    }
                    function ease(e, t, n, r, i) {
                        return applyEase(easeInOutBez, e, t, n, r, i);
                    }
                    function applyEase(e, t, n, r, i, s) {
                        void 0 === i ? ((i = n), (s = r)) : (t = (t - n) / (r - n)), t > 1 ? (t = 1) : t < 0 && (t = 0);
                        var a = e(t);
                        if ($bm_isInstanceOfArray(i)) {
                            var o,
                                l = i.length,
                                u = createTypedArray("float32", l);
                            for (o = 0; o < l; o += 1) u[o] = (s[o] - i[o]) * a + i[o];
                            return u;
                        }
                        return (s - i) * a + i;
                    }
                    function nearestKey(e) {
                        var t,
                            n,
                            r,
                            i = data.k.length;
                        if (data.k.length && "number" != typeof data.k[0])
                            if (((n = -1), (e *= elem.comp.globalData.frameRate) < data.k[0].t))
                                (n = 1), (r = data.k[0].t);
                            else {
                                for (t = 0; t < i - 1; t += 1)
                                    if (e === data.k[t].t) {
                                        (n = t + 1), (r = data.k[t].t);
                                        break;
                                    } else if (e > data.k[t].t && e < data.k[t + 1].t) {
                                        e - data.k[t].t > data.k[t + 1].t - e
                                            ? ((n = t + 2), (r = data.k[t + 1].t))
                                            : ((n = t + 1), (r = data.k[t].t));
                                        break;
                                    }
                                -1 === n && ((n = t + 1), (r = data.k[t].t));
                            }
                        else (n = 0), (r = 0);
                        var s = {};
                        return (s.index = n), (s.time = r / elem.comp.globalData.frameRate), s;
                    }
                    function key(e) {
                        if (!data.k.length || "number" == typeof data.k[0])
                            throw Error("The property has no keyframe at index " + e);
                        e -= 1;
                        var t,
                            n,
                            r = { time: data.k[e].t / elem.comp.globalData.frameRate, value: [] },
                            i = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
                        for (t = 0, n = i.length; t < n; t += 1) (r[t] = i[t]), (r.value[t] = i[t]);
                        return r;
                    }
                    function framesToTime(e, t) {
                        return t || (t = elem.comp.globalData.frameRate), e / t;
                    }
                    function timeToFrames(e, t) {
                        return e || 0 === e || (e = time), t || (t = elem.comp.globalData.frameRate), e * t;
                    }
                    function seedRandom(e) {
                        BMMath.seedrandom(randSeed + e);
                    }
                    function sourceRectAtTime() {
                        return elem.sourceRectAtTime();
                    }
                    function substring(e, t) {
                        return "string" == typeof value
                            ? void 0 === t
                                ? value.substring(e)
                                : value.substring(e, t)
                            : "";
                    }
                    function substr(e, t) {
                        return "string" == typeof value ? (void 0 === t ? value.substr(e) : value.substr(e, t)) : "";
                    }
                    function posterizeTime(e) {
                        (time = 0 === e ? 0 : Math.floor(time * e) / e), (value = valueAtTime(time));
                    }
                    var index = elem.data.ind,
                        hasParent = !!(elem.hierarchy && elem.hierarchy.length),
                        randSeed = Math.floor(1e6 * Math.random()),
                        globalData = elem.globalData;
                    function executeExpression(e) {
                        return ((value = e),
                        this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType)
                            ? value
                            : ("textSelector" === this.propType &&
                                  ((textIndex = this.textIndex),
                                  (textTotal = this.textTotal),
                                  (selectorValue = this.selectorValue)),
                              thisLayer ||
                                  ((text = elem.layerInterface.text),
                                  (thisLayer = elem.layerInterface),
                                  (thisComp = elem.comp.compInterface),
                                  (toWorld = thisLayer.toWorld.bind(thisLayer)),
                                  (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                                  (fromComp = thisLayer.fromComp.bind(thisLayer)),
                                  (toComp = thisLayer.toComp.bind(thisLayer)),
                                  (mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null),
                                  (fromCompToSurface = fromComp)),
                              !transform &&
                                  (($bm_transform = transform = elem.layerInterface("ADBE Transform Group")),
                                  transform && (anchorPoint = transform.anchorPoint)),
                              4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")),
                              effect || (effect = thisLayer(4)),
                              (hasParent = !!(elem.hierarchy && elem.hierarchy.length)) &&
                                  !parent &&
                                  (parent = elem.hierarchy[0].layerInterface),
                              (time = this.comp.renderedFrame / this.comp.globalData.frameRate),
                              _needsRandom && seedRandom(randSeed + time),
                              needsVelocity && (velocity = velocityAtTime(time)),
                              expression_function(),
                              (this.frameExpressionId = elem.globalData.frameId),
                              (scoped_bm_rt =
                                  scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt));
                    }
                    return (
                        (executeExpression.__preventDeadCodeRemoval = [
                            $bm_transform,
                            anchorPoint,
                            time,
                            velocity,
                            inPoint,
                            outPoint,
                            width,
                            height,
                            name,
                            loop_in,
                            loop_out,
                            smooth,
                            toComp,
                            fromCompToSurface,
                            toWorld,
                            fromWorld,
                            mask,
                            position,
                            rotation,
                            scale,
                            thisComp,
                            numKeys,
                            active,
                            wiggle,
                            loopInDuration,
                            loopOutDuration,
                            comp,
                            lookAt,
                            easeOut,
                            easeIn,
                            ease,
                            nearestKey,
                            key,
                            text,
                            textIndex,
                            textTotal,
                            selectorValue,
                            framesToTime,
                            timeToFrames,
                            sourceRectAtTime,
                            substring,
                            substr,
                            posterizeTime,
                            index,
                            globalData,
                        ]),
                        executeExpression
                    );
                }
                return (
                    (ob.initiateExpression = initiateExpression),
                    (ob.__preventDeadCodeRemoval = [
                        window,
                        document,
                        XMLHttpRequest,
                        fetch,
                        frames,
                        $bm_neg,
                        add,
                        $bm_sum,
                        $bm_sub,
                        $bm_mul,
                        $bm_div,
                        $bm_mod,
                        clamp,
                        radians_to_degrees,
                        degreesToRadians,
                        degrees_to_radians,
                        normalize,
                        rgbToHsl,
                        hslToRgb,
                        linear,
                        random,
                        createPath,
                        _lottieGlobal,
                    ]),
                    (ob.resetFrame = resetFrame),
                    ob
                );
            })(),
            Expressions = (function () {
                var e = {};
                return (
                    (e.initExpressions = function e(e) {
                        var t = 0,
                            n = [];
                        function r() {
                            t += 1;
                        }
                        function i() {
                            0 == (t -= 1) && a();
                        }
                        function s(e) {
                            -1 === n.indexOf(e) && n.push(e);
                        }
                        function a() {
                            var e,
                                t = n.length;
                            for (e = 0; e < t; e += 1) n[e].release();
                            n.length = 0;
                        }
                        (e.renderer.compInterface = CompExpressionInterface(e.renderer)),
                            e.renderer.globalData.projectInterface.registerComposition(e.renderer),
                            (e.renderer.globalData.pushExpression = r),
                            (e.renderer.globalData.popExpression = i),
                            (e.renderer.globalData.registerExpressionProperty = s);
                    }),
                    (e.resetFrame = ExpressionManager.resetFrame),
                    e
                );
            })(),
            MaskManagerInterface = (function () {
                function e(e, t) {
                    (this._mask = e), (this._data = t);
                }
                return (
                    Object.defineProperty(e.prototype, "maskPath", {
                        get: function () {
                            return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
                        },
                    }),
                    Object.defineProperty(e.prototype, "maskOpacity", {
                        get: function () {
                            return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
                        },
                    }),
                    function (t) {
                        var n,
                            r = createSizedArray(t.viewData.length),
                            i = t.viewData.length;
                        for (n = 0; n < i; n += 1) r[n] = new e(t.viewData[n], t.masksProperties[n]);
                        return function (e) {
                            for (n = 0; n < i; ) {
                                if (t.masksProperties[n].nm === e) return r[n];
                                n += 1;
                            }
                            return null;
                        };
                    }
                );
            })(),
            ExpressionPropertyInterface = (function () {
                var e = { pv: 0, v: 0, mult: 1 },
                    t = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
                function n(e, t, n) {
                    Object.defineProperty(e, "velocity", {
                        get: function () {
                            return t.getVelocityAtTime(t.comp.currentFrame);
                        },
                    }),
                        (e.numKeys = t.keyframes ? t.keyframes.length : 0),
                        (e.key = function (r) {
                            if (!e.numKeys) return 0;
                            var i = "";
                            i =
                                "s" in t.keyframes[r - 1]
                                    ? t.keyframes[r - 1].s
                                    : "e" in t.keyframes[r - 2]
                                      ? t.keyframes[r - 2].e
                                      : t.keyframes[r - 2].s;
                            var s = "unidimensional" === n ? new Number(i) : Object.assign({}, i);
                            return (
                                (s.time = t.keyframes[r - 1].t / t.elem.comp.globalData.frameRate),
                                (s.value = "unidimensional" === n ? i[0] : i),
                                s
                            );
                        }),
                        (e.valueAtTime = t.getValueAtTime),
                        (e.speedAtTime = t.getSpeedAtTime),
                        (e.velocityAtTime = t.getVelocityAtTime),
                        (e.propertyGroup = t.propertyGroup);
                }
                function r(t) {
                    (t && "pv" in t) || (t = e);
                    var r = 1 / t.mult,
                        i = t.pv * r,
                        s = new Number(i);
                    return (
                        (s.value = i),
                        n(s, t, "unidimensional"),
                        function () {
                            return (
                                t.k && t.getValue(),
                                (i = t.v * r),
                                s.value !== i && (((s = new Number(i)).value = i), n(s, t, "unidimensional")),
                                s
                            );
                        }
                    );
                }
                function i(e) {
                    (e && "pv" in e) || (e = t);
                    var r = 1 / e.mult,
                        i = (e.data && e.data.l) || e.pv.length,
                        s = createTypedArray("float32", i),
                        a = createTypedArray("float32", i);
                    return (
                        (s.value = a),
                        n(s, e, "multidimensional"),
                        function () {
                            e.k && e.getValue();
                            for (var t = 0; t < i; t += 1) (a[t] = e.v[t] * r), (s[t] = a[t]);
                            return s;
                        }
                    );
                }
                function s() {
                    return e;
                }
                return function (e) {
                    return e ? ("unidimensional" === e.propType ? r(e) : i(e)) : s;
                };
            })(),
            TransformExpressionInterface = (function () {
                return function (e) {
                    var t, n, r, i;
                    function s(e) {
                        switch (e) {
                            case "scale":
                            case "Scale":
                            case "ADBE Scale":
                            case 6:
                                return s.scale;
                            case "rotation":
                            case "Rotation":
                            case "ADBE Rotation":
                            case "ADBE Rotate Z":
                            case 10:
                                return s.rotation;
                            case "ADBE Rotate X":
                                return s.xRotation;
                            case "ADBE Rotate Y":
                                return s.yRotation;
                            case "position":
                            case "Position":
                            case "ADBE Position":
                            case 2:
                                return s.position;
                            case "ADBE Position_0":
                                return s.xPosition;
                            case "ADBE Position_1":
                                return s.yPosition;
                            case "ADBE Position_2":
                                return s.zPosition;
                            case "anchorPoint":
                            case "AnchorPoint":
                            case "Anchor Point":
                            case "ADBE AnchorPoint":
                            case 1:
                                return s.anchorPoint;
                            case "opacity":
                            case "Opacity":
                            case 11:
                                return s.opacity;
                            default:
                                return null;
                        }
                    }
                    return (
                        Object.defineProperty(s, "rotation", { get: ExpressionPropertyInterface(e.r || e.rz) }),
                        Object.defineProperty(s, "zRotation", { get: ExpressionPropertyInterface(e.rz || e.r) }),
                        Object.defineProperty(s, "xRotation", { get: ExpressionPropertyInterface(e.rx) }),
                        Object.defineProperty(s, "yRotation", { get: ExpressionPropertyInterface(e.ry) }),
                        Object.defineProperty(s, "scale", { get: ExpressionPropertyInterface(e.s) }),
                        e.p
                            ? (i = ExpressionPropertyInterface(e.p))
                            : ((t = ExpressionPropertyInterface(e.px)),
                              (n = ExpressionPropertyInterface(e.py)),
                              e.pz && (r = ExpressionPropertyInterface(e.pz))),
                        Object.defineProperty(s, "position", {
                            get: function () {
                                return e.p ? i() : [t(), n(), r ? r() : 0];
                            },
                        }),
                        Object.defineProperty(s, "xPosition", { get: ExpressionPropertyInterface(e.px) }),
                        Object.defineProperty(s, "yPosition", { get: ExpressionPropertyInterface(e.py) }),
                        Object.defineProperty(s, "zPosition", { get: ExpressionPropertyInterface(e.pz) }),
                        Object.defineProperty(s, "anchorPoint", { get: ExpressionPropertyInterface(e.a) }),
                        Object.defineProperty(s, "opacity", { get: ExpressionPropertyInterface(e.o) }),
                        Object.defineProperty(s, "skew", { get: ExpressionPropertyInterface(e.sk) }),
                        Object.defineProperty(s, "skewAxis", { get: ExpressionPropertyInterface(e.sa) }),
                        Object.defineProperty(s, "orientation", { get: ExpressionPropertyInterface(e.or) }),
                        s
                    );
                };
            })(),
            LayerExpressionInterface = (function () {
                function e(e) {
                    var t = new Matrix();
                    return (
                        void 0 !== e
                            ? this._elem.finalTransform.mProp.getValueAtTime(e).clone(t)
                            : this._elem.finalTransform.mProp.applyToMatrix(t),
                        t
                    );
                }
                function t(e, t) {
                    var n = this.getMatrix(t);
                    return (n.props[12] = 0), (n.props[13] = 0), (n.props[14] = 0), this.applyPoint(n, e);
                }
                function n(e, t) {
                    var n = this.getMatrix(t);
                    return this.applyPoint(n, e);
                }
                function r(e, t) {
                    var n = this.getMatrix(t);
                    return (n.props[12] = 0), (n.props[13] = 0), (n.props[14] = 0), this.invertPoint(n, e);
                }
                function i(e, t) {
                    var n = this.getMatrix(t);
                    return this.invertPoint(n, e);
                }
                function s(e, t) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var n,
                            r = this._elem.hierarchy.length;
                        for (n = 0; n < r; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(e);
                    }
                    return e.applyToPointArray(t[0], t[1], t[2] || 0);
                }
                function a(e, t) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var n,
                            r = this._elem.hierarchy.length;
                        for (n = 0; n < r; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(e);
                    }
                    return e.inversePoint(t);
                }
                function o(e) {
                    var t = new Matrix();
                    if (
                        (t.reset(),
                        this._elem.finalTransform.mProp.applyToMatrix(t),
                        this._elem.hierarchy && this._elem.hierarchy.length)
                    ) {
                        var n,
                            r = this._elem.hierarchy.length;
                        for (n = 0; n < r; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(t);
                    }
                    return t.inversePoint(e);
                }
                function l() {
                    return [1, 1, 1, 1];
                }
                return function (u) {
                    function c(e) {
                        _.mask = new MaskManagerInterface(e, u);
                    }
                    function d(e) {
                        _.effect = e;
                    }
                    function _(e) {
                        switch (e) {
                            case "ADBE Root Vectors Group":
                            case "Contents":
                            case 2:
                                return _.shapeInterface;
                            case 1:
                            case 6:
                            case "Transform":
                            case "transform":
                            case "ADBE Transform Group":
                                return f;
                            case 4:
                            case "ADBE Effect Parade":
                            case "effects":
                            case "Effects":
                                return _.effect;
                            case "ADBE Text Properties":
                                return _.textInterface;
                            default:
                                return null;
                        }
                    }
                    (_.getMatrix = e),
                        (_.invertPoint = a),
                        (_.applyPoint = s),
                        (_.toWorld = n),
                        (_.toWorldVec = t),
                        (_.fromWorld = i),
                        (_.fromWorldVec = r),
                        (_.toComp = n),
                        (_.fromComp = o),
                        (_.sampleImage = l),
                        (_.sourceRectAtTime = u.sourceRectAtTime.bind(u)),
                        (_._elem = u);
                    var f = TransformExpressionInterface(u.finalTransform.mProp),
                        p = getDescriptor(f, "anchorPoint");
                    return (
                        Object.defineProperties(_, {
                            hasParent: {
                                get: function () {
                                    return u.hierarchy.length;
                                },
                            },
                            parent: {
                                get: function () {
                                    return u.hierarchy[0].layerInterface;
                                },
                            },
                            rotation: getDescriptor(f, "rotation"),
                            scale: getDescriptor(f, "scale"),
                            position: getDescriptor(f, "position"),
                            opacity: getDescriptor(f, "opacity"),
                            anchorPoint: p,
                            anchor_point: p,
                            transform: {
                                get: function () {
                                    return f;
                                },
                            },
                            active: {
                                get: function () {
                                    return u.isInRange;
                                },
                            },
                        }),
                        (_.startTime = u.data.st),
                        (_.index = u.data.ind),
                        (_.source = u.data.refId),
                        (_.height = 0 === u.data.ty ? u.data.h : 100),
                        (_.width = 0 === u.data.ty ? u.data.w : 100),
                        (_.inPoint = u.data.ip / u.comp.globalData.frameRate),
                        (_.outPoint = u.data.op / u.comp.globalData.frameRate),
                        (_._name = u.data.nm),
                        (_.registerMaskInterface = c),
                        (_.registerEffectsInterface = d),
                        _
                    );
                };
            })(),
            propertyGroupFactory = (function () {
                return function (e, t) {
                    return function (n) {
                        return (n = void 0 === n ? 1 : n) <= 0 ? e : t(n - 1);
                    };
                };
            })(),
            PropertyInterface = (function () {
                return function (e, t) {
                    var n = { _name: e };
                    return function (e) {
                        return (e = void 0 === e ? 1 : e) <= 0 ? n : t(e - 1);
                    };
                };
            })(),
            EffectsExpressionInterface = (function () {
                function e(n, r, i, s) {
                    function a(e) {
                        for (var t = n.ef, r = 0, i = t.length; r < i; ) {
                            if (e === t[r].nm || e === t[r].mn || e === t[r].ix) {
                                if (5 === t[r].ty) return u[r];
                                return u[r]();
                            }
                            r += 1;
                        }
                        throw Error();
                    }
                    var o,
                        l = propertyGroupFactory(a, i),
                        u = [],
                        c = n.ef.length;
                    for (o = 0; o < c; o += 1)
                        5 === n.ef[o].ty
                            ? u.push(e(n.ef[o], r.effectElements[o], r.effectElements[o].propertyGroup, s))
                            : u.push(t(r.effectElements[o], n.ef[o].ty, s, l));
                    return (
                        "ADBE Color Control" === n.mn &&
                            Object.defineProperty(a, "color", {
                                get: function () {
                                    return u[0]();
                                },
                            }),
                        Object.defineProperties(a, {
                            numProperties: {
                                get: function () {
                                    return n.np;
                                },
                            },
                            _name: { value: n.nm },
                            propertyGroup: { value: l },
                        }),
                        (a.enabled = 0 !== n.en),
                        (a.active = a.enabled),
                        a
                    );
                }
                function t(e, t, n, r) {
                    var i = ExpressionPropertyInterface(e.p);
                    function s() {
                        return 10 === t ? n.comp.compInterface(e.p.v) : i();
                    }
                    return e.p.setGroupProperty && e.p.setGroupProperty(PropertyInterface("", r)), s;
                }
                return {
                    createEffectsInterface: function (t, n) {
                        if (t.effectsManager) {
                            var r,
                                i = [],
                                s = t.data.ef,
                                a = t.effectsManager.effectElements.length;
                            for (r = 0; r < a; r += 1) i.push(e(s[r], t.effectsManager.effectElements[r], n, t));
                            var o = t.data.ef || [],
                                l = function (e) {
                                    for (r = 0, a = o.length; r < a; ) {
                                        if (e === o[r].nm || e === o[r].mn || e === o[r].ix) return i[r];
                                        r += 1;
                                    }
                                    return null;
                                };
                            return (
                                Object.defineProperty(l, "numProperties", {
                                    get: function () {
                                        return o.length;
                                    },
                                }),
                                l
                            );
                        }
                        return null;
                    },
                };
            })(),
            ShapePathInterface = (function () {
                return function (e, t, n) {
                    var r = t.sh;
                    function i(e) {
                        return "Shape" === e ||
                            "shape" === e ||
                            "Path" === e ||
                            "path" === e ||
                            "ADBE Vector Shape" === e ||
                            2 === e
                            ? i.path
                            : null;
                    }
                    var s = propertyGroupFactory(i, n);
                    return (
                        r.setGroupProperty(PropertyInterface("Path", s)),
                        Object.defineProperties(i, {
                            path: {
                                get: function () {
                                    return r.k && r.getValue(), r;
                                },
                            },
                            shape: {
                                get: function () {
                                    return r.k && r.getValue(), r;
                                },
                            },
                            _name: { value: e.nm },
                            ix: { value: e.ix },
                            propertyIndex: { value: e.ix },
                            mn: { value: e.mn },
                            propertyGroup: { value: n },
                        }),
                        i
                    );
                };
            })(),
            ShapeExpressionInterface = (function () {
                function e(e, t, l) {
                    var p,
                        h = [],
                        m = e ? e.length : 0;
                    for (p = 0; p < m; p += 1)
                        "gr" === e[p].ty
                            ? h.push(n(e[p], t[p], l))
                            : "fl" === e[p].ty
                              ? h.push(r(e[p], t[p], l))
                              : "st" === e[p].ty
                                ? h.push(a(e[p], t[p], l))
                                : "tm" === e[p].ty
                                  ? h.push(o(e[p], t[p], l))
                                  : "tr" === e[p].ty ||
                                    ("el" === e[p].ty
                                        ? h.push(u(e[p], t[p], l))
                                        : "sr" === e[p].ty
                                          ? h.push(c(e[p], t[p], l))
                                          : "sh" === e[p].ty
                                            ? h.push(ShapePathInterface(e[p], t[p], l))
                                            : "rc" === e[p].ty
                                              ? h.push(d(e[p], t[p], l))
                                              : "rd" === e[p].ty
                                                ? h.push(_(e[p], t[p], l))
                                                : "rp" === e[p].ty
                                                  ? h.push(f(e[p], t[p], l))
                                                  : "gf" === e[p].ty
                                                    ? h.push(i(e[p], t[p], l))
                                                    : h.push(s(e[p], t[p], l)));
                    return h;
                }
                function t(t, n, r) {
                    var i,
                        s = function (e) {
                            for (var t = 0, n = i.length; t < n; ) {
                                if (
                                    i[t]._name === e ||
                                    i[t].mn === e ||
                                    i[t].propertyIndex === e ||
                                    i[t].ix === e ||
                                    i[t].ind === e
                                )
                                    return i[t];
                                t += 1;
                            }
                            return "number" == typeof e ? i[e - 1] : null;
                        };
                    (s.propertyGroup = propertyGroupFactory(s, r)),
                        (i = e(t.it, n.it, s.propertyGroup)),
                        (s.numProperties = i.length);
                    var a = l(t.it[t.it.length - 1], n.it[n.it.length - 1], s.propertyGroup);
                    return (s.transform = a), (s.propertyIndex = t.cix), (s._name = t.nm), s;
                }
                function n(e, n, r) {
                    var i = function (e) {
                        switch (e) {
                            case "ADBE Vectors Group":
                            case "Contents":
                            case 2:
                                return i.content;
                            default:
                                return i.transform;
                        }
                    };
                    i.propertyGroup = propertyGroupFactory(i, r);
                    var s = t(e, n, i.propertyGroup),
                        a = l(e.it[e.it.length - 1], n.it[n.it.length - 1], i.propertyGroup);
                    return (
                        (i.content = s),
                        (i.transform = a),
                        Object.defineProperty(i, "_name", {
                            get: function () {
                                return e.nm;
                            },
                        }),
                        (i.numProperties = e.np),
                        (i.propertyIndex = e.ix),
                        (i.nm = e.nm),
                        (i.mn = e.mn),
                        i
                    );
                }
                function r(e, t, n) {
                    function r(e) {
                        return "Color" === e || "color" === e
                            ? r.color
                            : "Opacity" === e || "opacity" === e
                              ? r.opacity
                              : null;
                    }
                    return (
                        Object.defineProperties(r, {
                            color: { get: ExpressionPropertyInterface(t.c) },
                            opacity: { get: ExpressionPropertyInterface(t.o) },
                            _name: { value: e.nm },
                            mn: { value: e.mn },
                        }),
                        t.c.setGroupProperty(PropertyInterface("Color", n)),
                        t.o.setGroupProperty(PropertyInterface("Opacity", n)),
                        r
                    );
                }
                function i(e, t, n) {
                    function r(e) {
                        return "Start Point" === e || "start point" === e
                            ? r.startPoint
                            : "End Point" === e || "end point" === e
                              ? r.endPoint
                              : "Opacity" === e || "opacity" === e
                                ? r.opacity
                                : null;
                    }
                    return (
                        Object.defineProperties(r, {
                            startPoint: { get: ExpressionPropertyInterface(t.s) },
                            endPoint: { get: ExpressionPropertyInterface(t.e) },
                            opacity: { get: ExpressionPropertyInterface(t.o) },
                            type: {
                                get: function () {
                                    return "a";
                                },
                            },
                            _name: { value: e.nm },
                            mn: { value: e.mn },
                        }),
                        t.s.setGroupProperty(PropertyInterface("Start Point", n)),
                        t.e.setGroupProperty(PropertyInterface("End Point", n)),
                        t.o.setGroupProperty(PropertyInterface("Opacity", n)),
                        r
                    );
                }
                function s() {
                    return function () {
                        return null;
                    };
                }
                function a(e, t, n) {
                    var r,
                        i = propertyGroupFactory(u, n),
                        s = propertyGroupFactory(l, i);
                    function a(n) {
                        Object.defineProperty(l, e.d[n].nm, { get: ExpressionPropertyInterface(t.d.dataProps[n].p) });
                    }
                    var o = e.d ? e.d.length : 0,
                        l = {};
                    for (r = 0; r < o; r += 1) a(r), t.d.dataProps[r].p.setGroupProperty(s);
                    function u(e) {
                        return "Color" === e || "color" === e
                            ? u.color
                            : "Opacity" === e || "opacity" === e
                              ? u.opacity
                              : "Stroke Width" === e || "stroke width" === e
                                ? u.strokeWidth
                                : null;
                    }
                    return (
                        Object.defineProperties(u, {
                            color: { get: ExpressionPropertyInterface(t.c) },
                            opacity: { get: ExpressionPropertyInterface(t.o) },
                            strokeWidth: { get: ExpressionPropertyInterface(t.w) },
                            dash: {
                                get: function () {
                                    return l;
                                },
                            },
                            _name: { value: e.nm },
                            mn: { value: e.mn },
                        }),
                        t.c.setGroupProperty(PropertyInterface("Color", i)),
                        t.o.setGroupProperty(PropertyInterface("Opacity", i)),
                        t.w.setGroupProperty(PropertyInterface("Stroke Width", i)),
                        u
                    );
                }
                function o(e, t, n) {
                    function r(t) {
                        return t === e.e.ix || "End" === t || "end" === t
                            ? r.end
                            : t === e.s.ix
                              ? r.start
                              : t === e.o.ix
                                ? r.offset
                                : null;
                    }
                    var i = propertyGroupFactory(r, n);
                    return (
                        (r.propertyIndex = e.ix),
                        t.s.setGroupProperty(PropertyInterface("Start", i)),
                        t.e.setGroupProperty(PropertyInterface("End", i)),
                        t.o.setGroupProperty(PropertyInterface("Offset", i)),
                        (r.propertyIndex = e.ix),
                        (r.propertyGroup = n),
                        Object.defineProperties(r, {
                            start: { get: ExpressionPropertyInterface(t.s) },
                            end: { get: ExpressionPropertyInterface(t.e) },
                            offset: { get: ExpressionPropertyInterface(t.o) },
                            _name: { value: e.nm },
                        }),
                        (r.mn = e.mn),
                        r
                    );
                }
                function l(e, t, n) {
                    function r(t) {
                        return e.a.ix === t || "Anchor Point" === t
                            ? r.anchorPoint
                            : e.o.ix === t || "Opacity" === t
                              ? r.opacity
                              : e.p.ix === t || "Position" === t
                                ? r.position
                                : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t
                                  ? r.rotation
                                  : e.s.ix === t || "Scale" === t
                                    ? r.scale
                                    : (e.sk && e.sk.ix === t) || "Skew" === t
                                      ? r.skew
                                      : (e.sa && e.sa.ix === t) || "Skew Axis" === t
                                        ? r.skewAxis
                                        : null;
                    }
                    var i = propertyGroupFactory(r, n);
                    return (
                        t.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", i)),
                        t.transform.mProps.p.setGroupProperty(PropertyInterface("Position", i)),
                        t.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", i)),
                        t.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", i)),
                        t.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", i)),
                        t.transform.mProps.sk &&
                            (t.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", i)),
                            t.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", i))),
                        t.transform.op.setGroupProperty(PropertyInterface("Opacity", i)),
                        Object.defineProperties(r, {
                            opacity: { get: ExpressionPropertyInterface(t.transform.mProps.o) },
                            position: { get: ExpressionPropertyInterface(t.transform.mProps.p) },
                            anchorPoint: { get: ExpressionPropertyInterface(t.transform.mProps.a) },
                            scale: { get: ExpressionPropertyInterface(t.transform.mProps.s) },
                            rotation: { get: ExpressionPropertyInterface(t.transform.mProps.r) },
                            skew: { get: ExpressionPropertyInterface(t.transform.mProps.sk) },
                            skewAxis: { get: ExpressionPropertyInterface(t.transform.mProps.sa) },
                            _name: { value: e.nm },
                        }),
                        (r.ty = "tr"),
                        (r.mn = e.mn),
                        (r.propertyGroup = n),
                        r
                    );
                }
                function u(e, t, n) {
                    function r(t) {
                        return e.p.ix === t ? r.position : e.s.ix === t ? r.size : null;
                    }
                    var i = propertyGroupFactory(r, n);
                    r.propertyIndex = e.ix;
                    var s = "tm" === t.sh.ty ? t.sh.prop : t.sh;
                    return (
                        s.s.setGroupProperty(PropertyInterface("Size", i)),
                        s.p.setGroupProperty(PropertyInterface("Position", i)),
                        Object.defineProperties(r, {
                            size: { get: ExpressionPropertyInterface(s.s) },
                            position: { get: ExpressionPropertyInterface(s.p) },
                            _name: { value: e.nm },
                        }),
                        (r.mn = e.mn),
                        r
                    );
                }
                function c(e, t, n) {
                    function r(t) {
                        return e.p.ix === t
                            ? r.position
                            : e.r.ix === t
                              ? r.rotation
                              : e.pt.ix === t
                                ? r.points
                                : e.or.ix === t || "ADBE Vector Star Outer Radius" === t
                                  ? r.outerRadius
                                  : e.os.ix === t
                                    ? r.outerRoundness
                                    : e.ir && (e.ir.ix === t || "ADBE Vector Star Inner Radius" === t)
                                      ? r.innerRadius
                                      : e.is && e.is.ix === t
                                        ? r.innerRoundness
                                        : null;
                    }
                    var i = propertyGroupFactory(r, n),
                        s = "tm" === t.sh.ty ? t.sh.prop : t.sh;
                    return (
                        (r.propertyIndex = e.ix),
                        s.or.setGroupProperty(PropertyInterface("Outer Radius", i)),
                        s.os.setGroupProperty(PropertyInterface("Outer Roundness", i)),
                        s.pt.setGroupProperty(PropertyInterface("Points", i)),
                        s.p.setGroupProperty(PropertyInterface("Position", i)),
                        s.r.setGroupProperty(PropertyInterface("Rotation", i)),
                        e.ir &&
                            (s.ir.setGroupProperty(PropertyInterface("Inner Radius", i)),
                            s.is.setGroupProperty(PropertyInterface("Inner Roundness", i))),
                        Object.defineProperties(r, {
                            position: { get: ExpressionPropertyInterface(s.p) },
                            rotation: { get: ExpressionPropertyInterface(s.r) },
                            points: { get: ExpressionPropertyInterface(s.pt) },
                            outerRadius: { get: ExpressionPropertyInterface(s.or) },
                            outerRoundness: { get: ExpressionPropertyInterface(s.os) },
                            innerRadius: { get: ExpressionPropertyInterface(s.ir) },
                            innerRoundness: { get: ExpressionPropertyInterface(s.is) },
                            _name: { value: e.nm },
                        }),
                        (r.mn = e.mn),
                        r
                    );
                }
                function d(e, t, n) {
                    function r(t) {
                        return e.p.ix === t
                            ? r.position
                            : e.r.ix === t
                              ? r.roundness
                              : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t
                                ? r.size
                                : null;
                    }
                    var i = propertyGroupFactory(r, n),
                        s = "tm" === t.sh.ty ? t.sh.prop : t.sh;
                    return (
                        (r.propertyIndex = e.ix),
                        s.p.setGroupProperty(PropertyInterface("Position", i)),
                        s.s.setGroupProperty(PropertyInterface("Size", i)),
                        s.r.setGroupProperty(PropertyInterface("Rotation", i)),
                        Object.defineProperties(r, {
                            position: { get: ExpressionPropertyInterface(s.p) },
                            roundness: { get: ExpressionPropertyInterface(s.r) },
                            size: { get: ExpressionPropertyInterface(s.s) },
                            _name: { value: e.nm },
                        }),
                        (r.mn = e.mn),
                        r
                    );
                }
                function _(e, t, n) {
                    function r(t) {
                        return e.r.ix === t || "Round Corners 1" === t ? r.radius : null;
                    }
                    var i = propertyGroupFactory(r, n),
                        s = t;
                    return (
                        (r.propertyIndex = e.ix),
                        s.rd.setGroupProperty(PropertyInterface("Radius", i)),
                        Object.defineProperties(r, {
                            radius: { get: ExpressionPropertyInterface(s.rd) },
                            _name: { value: e.nm },
                        }),
                        (r.mn = e.mn),
                        r
                    );
                }
                function f(e, t, n) {
                    function r(t) {
                        return e.c.ix === t || "Copies" === t
                            ? r.copies
                            : e.o.ix === t || "Offset" === t
                              ? r.offset
                              : null;
                    }
                    var i = propertyGroupFactory(r, n),
                        s = t;
                    return (
                        (r.propertyIndex = e.ix),
                        s.c.setGroupProperty(PropertyInterface("Copies", i)),
                        s.o.setGroupProperty(PropertyInterface("Offset", i)),
                        Object.defineProperties(r, {
                            copies: { get: ExpressionPropertyInterface(s.c) },
                            offset: { get: ExpressionPropertyInterface(s.o) },
                            _name: { value: e.nm },
                        }),
                        (r.mn = e.mn),
                        r
                    );
                }
                return function (t, n, r) {
                    var i;
                    function s(e) {
                        if ("number" == typeof e) return 0 === (e = void 0 === e ? 1 : e) ? r : i[e - 1];
                        for (var t = 0, n = i.length; t < n; ) {
                            if (i[t]._name === e) return i[t];
                            t += 1;
                        }
                        return null;
                    }
                    return (
                        (s.propertyGroup = propertyGroupFactory(s, function () {
                            return r;
                        })),
                        (i = e(t, n, s.propertyGroup)),
                        (s.numProperties = i.length),
                        (s._name = "Contents"),
                        s
                    );
                };
            })(),
            TextExpressionInterface = (function () {
                return function (e) {
                    var t;
                    function n(e) {
                        return "ADBE Text Document" === e ? n.sourceText : null;
                    }
                    return (
                        Object.defineProperty(n, "sourceText", {
                            get: function () {
                                e.textProperty.getValue();
                                var n = e.textProperty.currentData.t;
                                return (
                                    (t && n === t.value) ||
                                        (((t = new String(n)).value = n || new String(n)),
                                        Object.defineProperty(t, "style", {
                                            get: function () {
                                                return { fillColor: e.textProperty.currentData.fc };
                                            },
                                        })),
                                    t
                                );
                            },
                        }),
                        n
                    );
                };
            })();
        function _typeof(e) {
            return (_typeof =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                      })(e);
        }
        var FootageInterface = (function () {
                var e = function (e) {
                        var t = "",
                            n = e.getFootageData();
                        function r(e) {
                            if (n[e]) return ((t = e), (n = n[e]), "object" === _typeof(n)) ? r : n;
                            var i = e.indexOf(t);
                            return -1 !== i
                                ? ((n = n[parseInt(e.substr(i + t.length), 10)]), "object" === _typeof(n))
                                    ? r
                                    : n
                                : "";
                        }
                        return function () {
                            return (t = ""), (n = e.getFootageData()), r;
                        };
                    },
                    t = function (t) {
                        function n(e) {
                            return "Outline" === e ? n.outlineInterface() : null;
                        }
                        return (n._name = "Outline"), (n.outlineInterface = e(t)), n;
                    };
                return function (e) {
                    function n(e) {
                        return "Data" === e ? n.dataInterface : null;
                    }
                    return (n._name = "Data"), (n.dataInterface = t(e)), n;
                };
            })(),
            interfaces = {
                layer: LayerExpressionInterface,
                effects: EffectsExpressionInterface,
                comp: CompExpressionInterface,
                shape: ShapeExpressionInterface,
                text: TextExpressionInterface,
                footage: FootageInterface,
            };
        function getInterface(e) {
            return interfaces[e] || null;
        }
        var expressionHelpers = (function () {
            return {
                searchExpressions: function (e, t, n) {
                    t.x &&
                        ((n.k = !0),
                        (n.x = !0),
                        (n.initiateExpression = ExpressionManager.initiateExpression),
                        n.effectsSequence.push(n.initiateExpression(e, t, n).bind(n)));
                },
                getSpeedAtTime: function (e) {
                    var t,
                        n = -0.01,
                        r = this.getValueAtTime(e),
                        i = this.getValueAtTime(e + n),
                        s = 0;
                    if (r.length) {
                        for (t = 0; t < r.length; t += 1) s += Math.pow(i[t] - r[t], 2);
                        s = 100 * Math.sqrt(s);
                    } else s = 0;
                    return s;
                },
                getVelocityAtTime: function (e) {
                    if (void 0 !== this.vel) return this.vel;
                    var t,
                        n,
                        r = -0.001,
                        i = this.getValueAtTime(e),
                        s = this.getValueAtTime(e + r);
                    if (i.length)
                        for (n = 0, t = createTypedArray("float32", i.length); n < i.length; n += 1)
                            t[n] = (s[n] - i[n]) / r;
                    else t = (s - i) / r;
                    return t;
                },
                getValueAtTime: function (e) {
                    return (
                        (e *= this.elem.globalData.frameRate),
                        (e -= this.offsetTime) !== this._cachingAtTime.lastFrame &&
                            ((this._cachingAtTime.lastIndex =
                                this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0),
                            (this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime)),
                            (this._cachingAtTime.lastFrame = e)),
                        this._cachingAtTime.value
                    );
                },
                getStaticValueAtTime: function () {
                    return this.pv;
                },
                setGroupProperty: function (e) {
                    this.propertyGroup = e;
                },
            };
        })();
        function addPropertyDecorator() {
            function e(e, t, n) {
                if (!this.k || !this.keyframes) return this.pv;
                e = e ? e.toLowerCase() : "";
                var r,
                    i,
                    s,
                    a,
                    o,
                    l = this.comp.renderedFrame,
                    u = this.keyframes,
                    c = u[u.length - 1].t;
                if (l <= c) return this.pv;
                if (
                    (n
                        ? ((r = t
                              ? Math.abs(c - this.elem.comp.globalData.frameRate * t)
                              : Math.max(0, c - this.elem.data.ip)),
                          (i = c - r))
                        : ((!t || t > u.length - 1) && (t = u.length - 1), (r = c - (i = u[u.length - 1 - t].t))),
                    "pingpong" === e)
                ) {
                    if (Math.floor((l - i) / r) % 2 != 0)
                        return this.getValueAtTime((r - ((l - i) % r) + i) / this.comp.globalData.frameRate, 0);
                } else if ("offset" === e) {
                    var d = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                        _ = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                        f = this.getValueAtTime((((l - i) % r) + i) / this.comp.globalData.frameRate, 0),
                        p = Math.floor((l - i) / r);
                    if (this.pv.length) {
                        for (s = 0, a = (o = Array(d.length)).length; s < a; s += 1) o[s] = (_[s] - d[s]) * p + f[s];
                        return o;
                    }
                    return (_ - d) * p + f;
                } else if ("continue" === e) {
                    var h = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                        m = this.getValueAtTime((c - 0.001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (s = 0, a = (o = Array(h.length)).length; s < a; s += 1)
                            o[s] = h[s] + ((h[s] - m[s]) * ((l - c) / this.comp.globalData.frameRate)) / 5e-4;
                        return o;
                    }
                    return h + ((l - c) / 0.001) * (h - m);
                }
                return this.getValueAtTime((((l - i) % r) + i) / this.comp.globalData.frameRate, 0);
            }
            function t(e, t, n) {
                if (!this.k) return this.pv;
                e = e ? e.toLowerCase() : "";
                var r,
                    i,
                    s,
                    a,
                    o,
                    l = this.comp.renderedFrame,
                    u = this.keyframes,
                    c = u[0].t;
                if (l >= c) return this.pv;
                if (
                    (n
                        ? ((r = t
                              ? Math.abs(this.elem.comp.globalData.frameRate * t)
                              : Math.max(0, this.elem.data.op - c)),
                          (i = c + r))
                        : ((!t || t > u.length - 1) && (t = u.length - 1), (r = (i = u[t].t) - c)),
                    "pingpong" === e)
                ) {
                    if (Math.floor((c - l) / r) % 2 == 0)
                        return this.getValueAtTime((((c - l) % r) + c) / this.comp.globalData.frameRate, 0);
                } else if ("offset" === e) {
                    var d = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                        _ = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                        f = this.getValueAtTime((r - ((c - l) % r) + c) / this.comp.globalData.frameRate, 0),
                        p = Math.floor((c - l) / r) + 1;
                    if (this.pv.length) {
                        for (s = 0, a = (o = Array(d.length)).length; s < a; s += 1) o[s] = f[s] - (_[s] - d[s]) * p;
                        return o;
                    }
                    return f - (_ - d) * p;
                } else if ("continue" === e) {
                    var h = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                        m = this.getValueAtTime((c + 0.001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (s = 0, a = (o = Array(h.length)).length; s < a; s += 1)
                            o[s] = h[s] + ((h[s] - m[s]) * (c - l)) / 0.001;
                        return o;
                    }
                    return h + ((h - m) * (c - l)) / 0.001;
                }
                return this.getValueAtTime((r - (((c - l) % r) + c)) / this.comp.globalData.frameRate, 0);
            }
            function n(e, t) {
                if (!this.k || ((e = 0.5 * (e || 0.4)), (t = Math.floor(t || 5)) <= 1)) return this.pv;
                var n,
                    r,
                    i = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    s = i - e,
                    a = i + e,
                    o = t > 1 ? (a - s) / (t - 1) : 1,
                    l = 0,
                    u = 0;
                for (n = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; l < t; ) {
                    if (((r = this.getValueAtTime(s + l * o)), this.pv.length))
                        for (u = 0; u < this.pv.length; u += 1) n[u] += r[u];
                    else n += r;
                    l += 1;
                }
                if (this.pv.length) for (u = 0; u < this.pv.length; u += 1) n[u] /= t;
                else n /= t;
                return n;
            }
            function r(e) {
                this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() });
                var t = this._transformCachingAtTime.v;
                if ((t.cloneFromProps(this.pre.props), this.appliedTransformations < 1)) {
                    var n = this.a.getValueAtTime(e);
                    t.translate(-n[0] * this.a.mult, -n[1] * this.a.mult, n[2] * this.a.mult);
                }
                if (this.appliedTransformations < 2) {
                    var r = this.s.getValueAtTime(e);
                    t.scale(r[0] * this.s.mult, r[1] * this.s.mult, r[2] * this.s.mult);
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var i = this.sk.getValueAtTime(e),
                        s = this.sa.getValueAtTime(e);
                    t.skewFromAxis(-i * this.sk.mult, s * this.sa.mult);
                }
                if (this.r && this.appliedTransformations < 4) {
                    var a = this.r.getValueAtTime(e);
                    t.rotate(-a * this.r.mult);
                } else if (!this.r && this.appliedTransformations < 4) {
                    var o = this.rz.getValueAtTime(e),
                        l = this.ry.getValueAtTime(e),
                        u = this.rx.getValueAtTime(e),
                        c = this.or.getValueAtTime(e);
                    t.rotateZ(-o * this.rz.mult)
                        .rotateY(l * this.ry.mult)
                        .rotateX(u * this.rx.mult)
                        .rotateZ(-c[2] * this.or.mult)
                        .rotateY(c[1] * this.or.mult)
                        .rotateX(c[0] * this.or.mult);
                }
                if (this.data.p && this.data.p.s) {
                    var d = this.px.getValueAtTime(e),
                        _ = this.py.getValueAtTime(e);
                    if (this.data.p.z) {
                        var f = this.pz.getValueAtTime(e);
                        t.translate(d * this.px.mult, _ * this.py.mult, -f * this.pz.mult);
                    } else t.translate(d * this.px.mult, _ * this.py.mult, 0);
                } else {
                    var p = this.p.getValueAtTime(e);
                    t.translate(p[0] * this.p.mult, p[1] * this.p.mult, -p[2] * this.p.mult);
                }
                return t;
            }
            function i() {
                return this.v.clone(new Matrix());
            }
            var s = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function (e, t, n) {
                var a = s(e, t, n);
                return (
                    a.dynamicProperties.length ? (a.getValueAtTime = r.bind(a)) : (a.getValueAtTime = i.bind(a)),
                    (a.setGroupProperty = expressionHelpers.setGroupProperty),
                    a
                );
            };
            var a = PropertyFactory.getProp;
            function o(e) {
                return (
                    this._cachingAtTime ||
                        (this._cachingAtTime = {
                            shapeValue: shapePool.clone(this.pv),
                            lastIndex: 0,
                            lastTime: initialDefaultFrame,
                        }),
                    (e *= this.elem.globalData.frameRate),
                    (e -= this.offsetTime) !== this._cachingAtTime.lastTime &&
                        ((this._cachingAtTime.lastIndex =
                            this._cachingAtTime.lastTime < e ? this._caching.lastIndex : 0),
                        (this._cachingAtTime.lastTime = e),
                        this.interpolateShape(e, this._cachingAtTime.shapeValue, this._cachingAtTime)),
                    this._cachingAtTime.shapeValue
                );
            }
            PropertyFactory.getProp = function (r, i, s, o, l) {
                var u = a(r, i, s, o, l);
                u.kf
                    ? (u.getValueAtTime = expressionHelpers.getValueAtTime.bind(u))
                    : (u.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(u)),
                    (u.setGroupProperty = expressionHelpers.setGroupProperty),
                    (u.loopOut = e),
                    (u.loopIn = t),
                    (u.smooth = n),
                    (u.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(u)),
                    (u.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(u)),
                    (u.numKeys = 1 === i.a ? i.k.length : 0),
                    (u.propertyIndex = i.ix);
                var c = 0;
                return (
                    0 !== s && (c = createTypedArray("float32", 1 === i.a ? i.k[0].s.length : i.k.length)),
                    (u._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: c }),
                    expressionHelpers.searchExpressions(r, i, u),
                    u.k && l.addDynamicProperty(u),
                    u
                );
            };
            var l = ShapePropertyFactory.getConstructorFunction(),
                u = ShapePropertyFactory.getKeyframedConstructorFunction();
            function c() {}
            (c.prototype = {
                vertices: function (e, t) {
                    this.k && this.getValue();
                    var n,
                        r = this.v;
                    void 0 !== t && (r = this.getValueAtTime(t, 0));
                    var i = r._length,
                        s = r[e],
                        a = r.v,
                        o = createSizedArray(i);
                    for (n = 0; n < i; n += 1)
                        "i" === e || "o" === e
                            ? (o[n] = [s[n][0] - a[n][0], s[n][1] - a[n][1]])
                            : (o[n] = [s[n][0], s[n][1]]);
                    return o;
                },
                points: function (e) {
                    return this.vertices("v", e);
                },
                inTangents: function (e) {
                    return this.vertices("i", e);
                },
                outTangents: function (e) {
                    return this.vertices("o", e);
                },
                isClosed: function () {
                    return this.v.c;
                },
                pointOnPath: function (e, t) {
                    var n,
                        r = this.v;
                    void 0 !== t && (r = this.getValueAtTime(t, 0)),
                        this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
                    for (
                        var i = this._segmentsLength, s = i.lengths, a = i.totalLength * e, o = 0, l = s.length, u = 0;
                        o < l;
                    ) {
                        if (u + s[o].addedLength > a) {
                            var c = o,
                                d = r.c && o === l - 1 ? 0 : o + 1,
                                _ = (a - u) / s[o].addedLength;
                            n = bez.getPointInSegment(r.v[c], r.v[d], r.o[c], r.i[d], _, s[o]);
                            break;
                        }
                        (u += s[o].addedLength), (o += 1);
                    }
                    return n || (n = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), n;
                },
                vectorOnPath: function (e, t, n) {
                    1 == e ? (e = this.v.c) : 0 == e && (e = 0.999);
                    var r = this.pointOnPath(e, t),
                        i = this.pointOnPath(e + 0.001, t),
                        s = i[0] - r[0],
                        a = i[1] - r[1],
                        o = Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2));
                    return 0 === o ? [0, 0] : "tangent" === n ? [s / o, a / o] : [-a / o, s / o];
                },
                tangentOnPath: function (e, t) {
                    return this.vectorOnPath(e, t, "tangent");
                },
                normalOnPath: function (e, t) {
                    return this.vectorOnPath(e, t, "normal");
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime,
            }),
                extendPrototype([c], l),
                extendPrototype([c], u),
                (u.prototype.getValueAtTime = o),
                (u.prototype.initiateExpression = ExpressionManager.initiateExpression);
            var d = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function (e, t, n, r, i) {
                var s = d(e, t, n, r, i);
                return (
                    (s.propertyIndex = t.ix),
                    (s.lock = !1),
                    3 === n
                        ? expressionHelpers.searchExpressions(e, t.pt, s)
                        : 4 === n && expressionHelpers.searchExpressions(e, t.ks, s),
                    s.k && e.addDynamicProperty(s),
                    s
                );
            };
        }
        function initialize$1() {
            addPropertyDecorator();
        }
        function addDecorator() {
            function e() {
                return this.data.d.x
                    ? ((this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(
                          this.elem,
                          this.data.d,
                          this,
                      )),
                      this.addEffect(this.getExpressionValue.bind(this)),
                      !0)
                    : null;
            }
            (TextProperty.prototype.getExpressionValue = function (e, t) {
                var n = this.calculateExpression(t);
                if (e.t !== n) {
                    var r = {};
                    return this.copyData(r, e), (r.t = n.toString()), (r.__complete = !1), r;
                }
                return e;
            }),
                (TextProperty.prototype.searchProperty = function () {
                    var e = this.searchKeyframes(),
                        t = this.searchExpressions();
                    return (this.kf = e || t), this.kf;
                }),
                (TextProperty.prototype.searchExpressions = e);
        }
        function initialize() {
            addDecorator();
        }
        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
            createMergeNode: function (e, t) {
                var n,
                    r,
                    i = createNS("feMerge");
                for (i.setAttribute("result", e), r = 0; r < t.length; r += 1)
                    (n = createNS("feMergeNode")).setAttribute("in", t[r]), i.appendChild(n), i.appendChild(n);
                return i;
            },
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
        function SVGTintFilter(e, t, n, r, i) {
            this.filterManager = t;
            var s = createNS("feColorMatrix");
            s.setAttribute("type", "matrix"),
                s.setAttribute("color-interpolation-filters", "linearRGB"),
                s.setAttribute("values", linearFilterValue + " 1 0"),
                (this.linearFilter = s),
                s.setAttribute("result", r + "_tint_1"),
                e.appendChild(s),
                (s = createNS("feColorMatrix")).setAttribute("type", "matrix"),
                s.setAttribute("color-interpolation-filters", "sRGB"),
                s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
                s.setAttribute("result", r + "_tint_2"),
                e.appendChild(s),
                (this.matrixFilter = s);
            var a = this.createMergeNode(r, [i, r + "_tint_1", r + "_tint_2"]);
            e.appendChild(a);
        }
        function SVGFillFilter(e, t, n, r) {
            this.filterManager = t;
            var i = createNS("feColorMatrix");
            i.setAttribute("type", "matrix"),
                i.setAttribute("color-interpolation-filters", "sRGB"),
                i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
                i.setAttribute("result", r),
                e.appendChild(i),
                (this.matrixFilter = i);
        }
        function SVGStrokeEffect(e, t, n) {
            (this.initialized = !1), (this.filterManager = t), (this.elem = n), (this.paths = []);
        }
        function SVGTritoneFilter(e, t, n, r) {
            this.filterManager = t;
            var i = createNS("feColorMatrix");
            i.setAttribute("type", "matrix"),
                i.setAttribute("color-interpolation-filters", "linearRGB"),
                i.setAttribute(
                    "values",
                    "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0",
                ),
                e.appendChild(i);
            var s = createNS("feComponentTransfer");
            s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", r), (this.matrixFilter = s);
            var a = createNS("feFuncR");
            a.setAttribute("type", "table"), s.appendChild(a), (this.feFuncR = a);
            var o = createNS("feFuncG");
            o.setAttribute("type", "table"), s.appendChild(o), (this.feFuncG = o);
            var l = createNS("feFuncB");
            l.setAttribute("type", "table"), s.appendChild(l), (this.feFuncB = l), e.appendChild(s);
        }
        function SVGProLevelsFilter(e, t, n, r) {
            this.filterManager = t;
            var i = this.filterManager.effectElements,
                s = createNS("feComponentTransfer");
            (i[10].p.k ||
                0 !== i[10].p.v ||
                i[11].p.k ||
                1 !== i[11].p.v ||
                i[12].p.k ||
                1 !== i[12].p.v ||
                i[13].p.k ||
                0 !== i[13].p.v ||
                i[14].p.k ||
                1 !== i[14].p.v) &&
                (this.feFuncR = this.createFeFunc("feFuncR", s)),
                (i[17].p.k ||
                    0 !== i[17].p.v ||
                    i[18].p.k ||
                    1 !== i[18].p.v ||
                    i[19].p.k ||
                    1 !== i[19].p.v ||
                    i[20].p.k ||
                    0 !== i[20].p.v ||
                    i[21].p.k ||
                    1 !== i[21].p.v) &&
                    (this.feFuncG = this.createFeFunc("feFuncG", s)),
                (i[24].p.k ||
                    0 !== i[24].p.v ||
                    i[25].p.k ||
                    1 !== i[25].p.v ||
                    i[26].p.k ||
                    1 !== i[26].p.v ||
                    i[27].p.k ||
                    0 !== i[27].p.v ||
                    i[28].p.k ||
                    1 !== i[28].p.v) &&
                    (this.feFuncB = this.createFeFunc("feFuncB", s)),
                (i[31].p.k ||
                    0 !== i[31].p.v ||
                    i[32].p.k ||
                    1 !== i[32].p.v ||
                    i[33].p.k ||
                    1 !== i[33].p.v ||
                    i[34].p.k ||
                    0 !== i[34].p.v ||
                    i[35].p.k ||
                    1 !== i[35].p.v) &&
                    (this.feFuncA = this.createFeFunc("feFuncA", s)),
                (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
                    (s.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(s)),
                (i[3].p.k ||
                    0 !== i[3].p.v ||
                    i[4].p.k ||
                    1 !== i[4].p.v ||
                    i[5].p.k ||
                    1 !== i[5].p.v ||
                    i[6].p.k ||
                    0 !== i[6].p.v ||
                    i[7].p.k ||
                    1 !== i[7].p.v) &&
                    ((s = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"),
                    s.setAttribute("result", r),
                    e.appendChild(s),
                    (this.feFuncRComposed = this.createFeFunc("feFuncR", s)),
                    (this.feFuncGComposed = this.createFeFunc("feFuncG", s)),
                    (this.feFuncBComposed = this.createFeFunc("feFuncB", s)));
        }
        function SVGDropShadowEffect(e, t, n, r, i) {
            var s = t.container.globalData.renderConfig.filterSize,
                a = t.data.fs || s;
            e.setAttribute("x", a.x || s.x),
                e.setAttribute("y", a.y || s.y),
                e.setAttribute("width", a.width || s.width),
                e.setAttribute("height", a.height || s.height),
                (this.filterManager = t);
            var o = createNS("feGaussianBlur");
            o.setAttribute("in", "SourceAlpha"),
                o.setAttribute("result", r + "_drop_shadow_1"),
                o.setAttribute("stdDeviation", "0"),
                (this.feGaussianBlur = o),
                e.appendChild(o);
            var l = createNS("feOffset");
            l.setAttribute("dx", "25"),
                l.setAttribute("dy", "0"),
                l.setAttribute("in", r + "_drop_shadow_1"),
                l.setAttribute("result", r + "_drop_shadow_2"),
                (this.feOffset = l),
                e.appendChild(l);
            var u = createNS("feFlood");
            u.setAttribute("flood-color", "#00ff00"),
                u.setAttribute("flood-opacity", "1"),
                u.setAttribute("result", r + "_drop_shadow_3"),
                (this.feFlood = u),
                e.appendChild(u);
            var c = createNS("feComposite");
            c.setAttribute("in", r + "_drop_shadow_3"),
                c.setAttribute("in2", r + "_drop_shadow_2"),
                c.setAttribute("operator", "in"),
                c.setAttribute("result", r + "_drop_shadow_4"),
                e.appendChild(c);
            var d = this.createMergeNode(r, [r + "_drop_shadow_4", i]);
            e.appendChild(d);
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter),
            (SVGTintFilter.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var t = this.filterManager.effectElements[0].p.v,
                        n = this.filterManager.effectElements[1].p.v,
                        r = this.filterManager.effectElements[2].p.v / 100;
                    this.linearFilter.setAttribute("values", linearFilterValue + " " + r + " 0"),
                        this.matrixFilter.setAttribute(
                            "values",
                            n[0] -
                                t[0] +
                                " 0 0 0 " +
                                t[0] +
                                " " +
                                (n[1] - t[1]) +
                                " 0 0 0 " +
                                t[1] +
                                " " +
                                (n[2] - t[2]) +
                                " 0 0 0 " +
                                t[2] +
                                " 0 0 0 1 0",
                        );
                }
            }),
            (SVGFillFilter.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var t = this.filterManager.effectElements[2].p.v,
                        n = this.filterManager.effectElements[6].p.v;
                    this.matrixFilter.setAttribute(
                        "values",
                        "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + n + " 0",
                    );
                }
            }),
            (SVGStrokeEffect.prototype.initialize = function () {
                var e,
                    t,
                    n,
                    r,
                    i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                for (
                    1 === this.filterManager.effectElements[1].p.v
                        ? ((r = this.elem.maskManager.masksProperties.length), (n = 0))
                        : (r = (n = this.filterManager.effectElements[0].p.v - 1) + 1),
                        (t = createNS("g")).setAttribute("fill", "none"),
                        t.setAttribute("stroke-linecap", "round"),
                        t.setAttribute("stroke-dashoffset", 1);
                    n < r;
                    n += 1
                )
                    (e = createNS("path")), t.appendChild(e), this.paths.push({ p: e, m: n });
                if (3 === this.filterManager.effectElements[10].p.v) {
                    var s = createNS("mask"),
                        a = createElementID();
                    s.setAttribute("id", a),
                        s.setAttribute("mask-type", "alpha"),
                        s.appendChild(t),
                        this.elem.globalData.defs.appendChild(s);
                    var o = createNS("g");
                    for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + a + ")"); i[0]; )
                        o.appendChild(i[0]);
                    this.elem.layerElement.appendChild(o), (this.masker = s), t.setAttribute("stroke", "#fff");
                } else if (
                    1 === this.filterManager.effectElements[10].p.v ||
                    2 === this.filterManager.effectElements[10].p.v
                ) {
                    if (2 === this.filterManager.effectElements[10].p.v)
                        for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length; )
                            this.elem.layerElement.removeChild(i[0]);
                    this.elem.layerElement.appendChild(t),
                        this.elem.layerElement.removeAttribute("mask"),
                        t.setAttribute("stroke", "#fff");
                }
                (this.initialized = !0), (this.pathMasker = t);
            }),
            (SVGStrokeEffect.prototype.renderFrame = function (e) {
                this.initialized || this.initialize();
                var t = this.paths.length;
                for (n = 0; n < t; n += 1)
                    if (
                        -1 !== this.paths[n].m &&
                        ((r = this.elem.maskManager.viewData[this.paths[n].m]),
                        (i = this.paths[n].p),
                        (e || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath),
                        e ||
                            this.filterManager.effectElements[9].p._mdf ||
                            this.filterManager.effectElements[4].p._mdf ||
                            this.filterManager.effectElements[7].p._mdf ||
                            this.filterManager.effectElements[8].p._mdf ||
                            r.prop._mdf)
                    ) {
                        if (
                            0 !== this.filterManager.effectElements[7].p.v ||
                            100 !== this.filterManager.effectElements[8].p.v
                        ) {
                            var n,
                                r,
                                i,
                                s,
                                a,
                                o =
                                    0.01 *
                                    Math.min(
                                        this.filterManager.effectElements[7].p.v,
                                        this.filterManager.effectElements[8].p.v,
                                    ),
                                l =
                                    0.01 *
                                    Math.max(
                                        this.filterManager.effectElements[7].p.v,
                                        this.filterManager.effectElements[8].p.v,
                                    ),
                                u = i.getTotalLength();
                            s = "0 0 0 " + u * o + " ";
                            var c = Math.floor(
                                (u * (l - o)) /
                                    (1 +
                                        2 *
                                            this.filterManager.effectElements[4].p.v *
                                            this.filterManager.effectElements[9].p.v *
                                            0.01),
                            );
                            for (a = 0; a < c; a += 1)
                                s +=
                                    "1 " +
                                    2 *
                                        this.filterManager.effectElements[4].p.v *
                                        this.filterManager.effectElements[9].p.v *
                                        0.01 +
                                    " ";
                            s += "0 " + 10 * u + " 0 0";
                        } else
                            s =
                                "1 " +
                                2 *
                                    this.filterManager.effectElements[4].p.v *
                                    this.filterManager.effectElements[9].p.v *
                                    0.01;
                        i.setAttribute("stroke-dasharray", s);
                    }
                if (
                    ((e || this.filterManager.effectElements[4].p._mdf) &&
                        this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v),
                    (e || this.filterManager.effectElements[6].p._mdf) &&
                        this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v),
                    (1 === this.filterManager.effectElements[10].p.v ||
                        2 === this.filterManager.effectElements[10].p.v) &&
                        (e || this.filterManager.effectElements[3].p._mdf))
                ) {
                    var d = this.filterManager.effectElements[3].p.v;
                    this.pathMasker.setAttribute(
                        "stroke",
                        "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")",
                    );
                }
            }),
            (SVGTritoneFilter.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var t = this.filterManager.effectElements[0].p.v,
                        n = this.filterManager.effectElements[1].p.v,
                        r = this.filterManager.effectElements[2].p.v,
                        i = r[0] + " " + n[0] + " " + t[0],
                        s = r[1] + " " + n[1] + " " + t[1],
                        a = r[2] + " " + n[2] + " " + t[2];
                    this.feFuncR.setAttribute("tableValues", i),
                        this.feFuncG.setAttribute("tableValues", s),
                        this.feFuncB.setAttribute("tableValues", a);
                }
            }),
            (SVGProLevelsFilter.prototype.createFeFunc = function (e, t) {
                var n = createNS(e);
                return n.setAttribute("type", "table"), t.appendChild(n), n;
            }),
            (SVGProLevelsFilter.prototype.getTableValue = function (e, t, n, r, i) {
                for (
                    var s,
                        a,
                        o = 0,
                        l = 256,
                        u = Math.min(e, t),
                        c = Math.max(e, t),
                        d = Array.call(null, { length: 256 }),
                        _ = 0,
                        f = i - r,
                        p = t - e;
                    o <= 256;
                )
                    (a =
                        (s = o / 256) <= u
                            ? p < 0
                                ? i
                                : r
                            : s >= c
                              ? p < 0
                                  ? r
                                  : i
                              : r + f * Math.pow((s - e) / p, 1 / n)),
                        (d[_] = a),
                        (_ += 1),
                        (o += 256 / (l - 1));
                return d.join(" ");
            }),
            (SVGProLevelsFilter.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var t,
                        n = this.filterManager.effectElements;
                    this.feFuncRComposed &&
                        (e || n[3].p._mdf || n[4].p._mdf || n[5].p._mdf || n[6].p._mdf || n[7].p._mdf) &&
                        ((t = this.getTableValue(n[3].p.v, n[4].p.v, n[5].p.v, n[6].p.v, n[7].p.v)),
                        this.feFuncRComposed.setAttribute("tableValues", t),
                        this.feFuncGComposed.setAttribute("tableValues", t),
                        this.feFuncBComposed.setAttribute("tableValues", t)),
                        this.feFuncR &&
                            (e || n[10].p._mdf || n[11].p._mdf || n[12].p._mdf || n[13].p._mdf || n[14].p._mdf) &&
                            ((t = this.getTableValue(n[10].p.v, n[11].p.v, n[12].p.v, n[13].p.v, n[14].p.v)),
                            this.feFuncR.setAttribute("tableValues", t)),
                        this.feFuncG &&
                            (e || n[17].p._mdf || n[18].p._mdf || n[19].p._mdf || n[20].p._mdf || n[21].p._mdf) &&
                            ((t = this.getTableValue(n[17].p.v, n[18].p.v, n[19].p.v, n[20].p.v, n[21].p.v)),
                            this.feFuncG.setAttribute("tableValues", t)),
                        this.feFuncB &&
                            (e || n[24].p._mdf || n[25].p._mdf || n[26].p._mdf || n[27].p._mdf || n[28].p._mdf) &&
                            ((t = this.getTableValue(n[24].p.v, n[25].p.v, n[26].p.v, n[27].p.v, n[28].p.v)),
                            this.feFuncB.setAttribute("tableValues", t)),
                        this.feFuncA &&
                            (e || n[31].p._mdf || n[32].p._mdf || n[33].p._mdf || n[34].p._mdf || n[35].p._mdf) &&
                            ((t = this.getTableValue(n[31].p.v, n[32].p.v, n[33].p.v, n[34].p.v, n[35].p.v)),
                            this.feFuncA.setAttribute("tableValues", t));
                }
            }),
            extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
            (SVGDropShadowEffect.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    if (
                        ((e || this.filterManager.effectElements[4].p._mdf) &&
                            this.feGaussianBlur.setAttribute(
                                "stdDeviation",
                                this.filterManager.effectElements[4].p.v / 4,
                            ),
                        e || this.filterManager.effectElements[0].p._mdf)
                    ) {
                        var t = this.filterManager.effectElements[0].p.v;
                        this.feFlood.setAttribute(
                            "flood-color",
                            rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2])),
                        );
                    }
                    if (
                        ((e || this.filterManager.effectElements[1].p._mdf) &&
                            this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255),
                        e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf)
                    ) {
                        var n = this.filterManager.effectElements[3].p.v,
                            r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                            i = n * Math.cos(r),
                            s = n * Math.sin(r);
                        this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", s);
                    }
                }
            });
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(e, t, n) {
            (this.initialized = !1),
                (this.filterManager = t),
                (this.filterElem = e),
                (this.elem = n),
                (n.matteElement = createNS("g")),
                n.matteElement.appendChild(n.layerElement),
                n.matteElement.appendChild(n.transformedElement),
                (n.baseElement = n.matteElement);
        }
        function SVGGaussianBlurEffect(e, t, n, r) {
            e.setAttribute("x", "-100%"),
                e.setAttribute("y", "-100%"),
                e.setAttribute("width", "300%"),
                e.setAttribute("height", "300%"),
                (this.filterManager = t);
            var i = createNS("feGaussianBlur");
            i.setAttribute("result", r), e.appendChild(i), (this.feGaussianBlur = i);
        }
        function TransformEffect() {}
        function SVGTransformEffect(e, t) {
            this.init(t);
        }
        function CVTransformEffect(e) {
            this.init(e);
        }
        return (
            (SVGMatte3Effect.prototype.findSymbol = function (e) {
                for (var t = 0, n = _svgMatteSymbols.length; t < n; ) {
                    if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
                    t += 1;
                }
                return null;
            }),
            (SVGMatte3Effect.prototype.replaceInParent = function (e, t) {
                var n,
                    r = e.layerElement.parentNode;
                if (r) {
                    for (var i = r.children, s = 0, a = i.length; s < a && i[s] !== e.layerElement; ) s += 1;
                    s <= a - 2 && (n = i[s + 1]);
                    var o = createNS("use");
                    o.setAttribute("href", "#" + t), n ? r.insertBefore(o, n) : r.appendChild(o);
                }
            }),
            (SVGMatte3Effect.prototype.setElementAsMask = function (e, t) {
                if (!this.findSymbol(t)) {
                    var n = createElementID(),
                        r = createNS("mask");
                    r.setAttribute("id", t.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
                    var i = e.globalData.defs;
                    i.appendChild(r);
                    var s = createNS("symbol");
                    s.setAttribute("id", n),
                        this.replaceInParent(t, n),
                        s.appendChild(t.layerElement),
                        i.appendChild(s);
                    var a = createNS("use");
                    a.setAttribute("href", "#" + n), r.appendChild(a), (t.data.hd = !1), t.show();
                }
                e.setMatte(t.layerId);
            }),
            (SVGMatte3Effect.prototype.initialize = function () {
                for (
                    var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, n = 0, r = t.length;
                    n < r;
                )
                    t[n] && t[n].data.ind === e && this.setElementAsMask(this.elem, t[n]), (n += 1);
                this.initialized = !0;
            }),
            (SVGMatte3Effect.prototype.renderFrame = function () {
                this.initialized || this.initialize();
            }),
            (SVGGaussianBlurEffect.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var t = 0.3,
                        n = this.filterManager.effectElements[0].p.v * t,
                        r = this.filterManager.effectElements[1].p.v,
                        i = 3 == r ? 0 : n,
                        s = 2 == r ? 0 : n;
                    this.feGaussianBlur.setAttribute("stdDeviation", i + " " + s);
                    var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                    this.feGaussianBlur.setAttribute("edgeMode", a);
                }
            }),
            (TransformEffect.prototype.init = function (e) {
                (this.effectsManager = e),
                    (this.type = effectTypes.TRANSFORM_EFFECT),
                    (this.matrix = new Matrix()),
                    (this.opacity = -1),
                    (this._mdf = !1),
                    (this._opMdf = !1);
            }),
            (TransformEffect.prototype.renderFrame = function (e) {
                if (((this._opMdf = !1), (this._mdf = !1), e || this.effectsManager._mdf)) {
                    var t = this.effectsManager.effectElements,
                        n = t[0].p.v,
                        r = t[1].p.v,
                        i = 1 === t[2].p.v,
                        s = t[3].p.v,
                        a = i ? s : t[4].p.v,
                        o = t[5].p.v,
                        l = t[6].p.v,
                        u = t[7].p.v;
                    this.matrix.reset(),
                        this.matrix.translate(-n[0], -n[1], n[2]),
                        this.matrix.scale(0.01 * a, 0.01 * s, 1),
                        this.matrix.rotate(-u * degToRads),
                        this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads),
                        this.matrix.translate(r[0], r[1], 0),
                        (this._mdf = !0),
                        this.opacity !== t[8].p.v && ((this.opacity = t[8].p.v), (this._opMdf = !0));
                }
            }),
            extendPrototype([TransformEffect], SVGTransformEffect),
            extendPrototype([TransformEffect], CVTransformEffect),
            registerRenderer("canvas", CanvasRenderer),
            registerRenderer("html", HybridRenderer),
            registerRenderer("svg", SVGRenderer),
            ShapeModifiers.registerModifier("tm", TrimModifier),
            ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
            ShapeModifiers.registerModifier("rp", RepeaterModifier),
            ShapeModifiers.registerModifier("rd", RoundCornersModifier),
            ShapeModifiers.registerModifier("zz", ZigZagModifier),
            ShapeModifiers.registerModifier("op", OffsetPathModifier),
            setExpressionsPlugin(Expressions),
            setExpressionInterfaces(getInterface),
            initialize$1(),
            initialize(),
            registerEffect$1(20, SVGTintFilter, !0),
            registerEffect$1(21, SVGFillFilter, !0),
            registerEffect$1(22, SVGStrokeEffect, !1),
            registerEffect$1(23, SVGTritoneFilter, !0),
            registerEffect$1(24, SVGProLevelsFilter, !0),
            registerEffect$1(25, SVGDropShadowEffect, !0),
            registerEffect$1(28, SVGMatte3Effect, !1),
            registerEffect$1(29, SVGGaussianBlurEffect, !0),
            registerEffect$1(35, SVGTransformEffect, !1),
            registerEffect(35, CVTransformEffect),
            lottie
        );
    });
