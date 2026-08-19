Object.defineProperty(t, "__esModule", { value: !0 });
var n = r(582128),
    o = r(877508),
    i = n && "object" == typeof n && "default" in n ? n : { default: n },
    a = function () {
        return (a =
            Object.assign ||
            function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
            }).apply(this, arguments);
    };
function s(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
            0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    }
    return r;
}
function l(e) {
    var t = e || u(),
        r = n.useState(t),
        o = r[0],
        i = r[1];
    return (
        n.useEffect(
            function () {
                if ("u" > typeof window && "matchMedia" in window) {
                    var t = function () {
                            i(e || u());
                        },
                        r = window.matchMedia("screen and (resolution: ".concat(o, "dppx)"));
                    return (
                        r.hasOwnProperty("addEventListener") ? r.addEventListener("change", t) : r.addListener(t),
                        function () {
                            r.hasOwnProperty("removeEventListener")
                                ? r.removeEventListener("change", t)
                                : r.removeListener(t);
                        }
                    );
                }
            },
            [o, e],
        ),
        o
    );
}
function u() {
    return Math.min(
        Math.max(1, "u" > typeof window && "number" == typeof window.devicePixelRatio ? window.devicePixelRatio : 1),
        3,
    );
}
var c = (function () {
        function e() {}
        return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
        );
    })(),
    f = globalThis.ResizeObserver || c,
    p = void 0 !== globalThis.ResizeObserver,
    d = !p,
    h = {
        useDevicePixelRatio: !0,
        fitCanvasToArtboardHeight: !1,
        useOffscreenRenderer: !0,
        shouldResizeCanvasToContainer: !0,
    };
function m(e) {
    return Object.assign({}, h, e);
}
function v(e) {
    var t,
        r,
        o,
        i,
        a,
        s,
        u,
        c = e.riveLoaded,
        h = void 0 !== c && c,
        v = e.canvasElem,
        y = e.containerRef,
        g = e.options,
        b = e.onCanvasHasResized,
        w = e.artboardBounds,
        _ = m(void 0 === g ? {} : g),
        S = n.useState({ height: 0, width: 0 }),
        E = S[0],
        x = E.height,
        k = E.width,
        C = S[1],
        T = n.useState({ height: 0, width: 0 }),
        M = T[0],
        P = M.height,
        A = M.width,
        O = T[1],
        I = n.useState(!0),
        D = I[0],
        L = I[1],
        R = _.fitCanvasToArtboardHeight,
        F = _.shouldResizeCanvasToContainer,
        N = _.useDevicePixelRatio,
        j = _.customDevicePixelRatio,
        B =
            (void 0 === (t = F) && (t = !0),
            (o = (r = n.useState({ width: 0, height: 0 }))[0]),
            (i = r[1]),
            n.useEffect(function () {
                if ("u" > typeof window && t) {
                    var e = function () {
                        i({ width: window.innerWidth, height: window.innerHeight });
                    };
                    return (
                        d && (e(), window.addEventListener("resize", e)),
                        function () {
                            return window.removeEventListener("resize", e);
                        }
                    );
                }
            }, []),
            (u = n.useRef(
                new f(
                    ((a = function (e) {
                        p &&
                            i({ width: e[e.length - 1].contentRect.width, height: e[e.length - 1].contentRect.height });
                    }),
                    (s = 0),
                    function () {
                        for (var e = this, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        clearTimeout(s),
                            (s = window.setTimeout(function () {
                                return a.apply(e, t);
                            }, 0));
                    }),
                ),
            )),
            n.useEffect(
                function () {
                    var e = u.current;
                    if (t) {
                        var r = y.current;
                        return (
                            y.current && p && e.observe(y.current),
                            function () {
                                e.disconnect(), r && p && e.unobserve(r);
                            }
                        );
                    }
                    e.disconnect();
                },
                [y, u],
            ),
            o),
        $ = l(j),
        K = null != w ? w : {},
        V = K.maxX,
        U = K.maxY,
        z = n.useCallback(
            function () {
                var e,
                    t,
                    r,
                    n,
                    o = null != (t = null == (e = y.current) ? void 0 : e.clientWidth) ? t : 0,
                    i = null != (n = null == (r = y.current) ? void 0 : r.clientHeight) ? n : 0;
                return R && w ? { width: o, height: o * (w.maxY / w.maxX) } : { width: o, height: i };
            },
            [y, R, V, U],
        );
    n.useEffect(
        function () {
            if (F && y.current && h) {
                var e = z(),
                    t = e.width,
                    r = e.height,
                    n = !1;
                if (v) {
                    var o = t !== k || r !== x;
                    if (
                        (_.fitCanvasToArtboardHeight && o && ((y.current.style.height = r + "px"), (n = !0)),
                        _.useDevicePixelRatio)
                    ) {
                        if (o || t * $ !== A || r * $ !== P) {
                            var i = $ * t,
                                a = $ * r;
                            (v.width = i),
                                (v.height = a),
                                (v.style.width = t + "px"),
                                (v.style.height = r + "px"),
                                O({ width: i, height: a }),
                                (n = !0);
                        }
                    } else o && ((v.width = t), (v.height = r), O({ width: t, height: r }), (n = !0));
                    C({ width: t, height: r });
                }
                b && (D || n) && b && b(), D && L(!1);
            }
        },
        [v, y, B, $, z, D, L, P, A, x, k, b, F, R, N, h],
    ),
        n.useEffect(
            function () {
                O({ width: 0, height: 0 });
            },
            [v],
        );
}
var y,
    g = (function () {
        function e() {}
        return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
        );
    })(),
    b = globalThis.IntersectionObserver || g,
    w = (function () {
        function e() {
            var e = this;
            (this.elementsMap = new Map()),
                (this.onObserved = function (t) {
                    t.forEach(function (t) {
                        var r = e.elementsMap.get(t.target);
                        r && r(t);
                    });
                }),
                (this.observer = new b(this.onObserved));
        }
        return (
            (e.prototype.registerCallback = function (e, t) {
                this.observer.observe(e), this.elementsMap.set(e, t);
            }),
            (e.prototype.removeCallback = function (e) {
                this.observer.unobserve(e), this.elementsMap.delete(e);
            }),
            e
        );
    })(),
    _ = function () {
        return y || (y = new w()), y;
    };
function S(e) {
    var t = e.setContainerRef,
        r = e.setCanvasRef,
        n = e.className,
        o = void 0 === n ? "" : n,
        l = e.style,
        u = e.children,
        c = s(e, ["setContainerRef", "setCanvasRef", "className", "style", "children"]),
        f = a({ width: "100%", height: "100%" }, l);
    return i.default.createElement(
        "div",
        a({ ref: t, className: o }, !o && { style: f }),
        i.default.createElement("canvas", a({ ref: r, style: { verticalAlign: "top", width: 0, height: 0 } }, c), u),
    );
}
function E(e, t) {
    void 0 === t && (t = {});
    var r = n.useState(null),
        u = r[0],
        c = r[1],
        f = n.useRef(null),
        p = n.useRef(null),
        d = n.useState(null),
        h = d[0],
        y = d[1],
        g = !!e,
        b = m(t),
        w = l(),
        E = n.useCallback(
            function () {
                if (h) {
                    if (h.layout && h.layout.fit === o.Fit.Layout && u) {
                        var e = w * h.layout.layoutScaleFactor;
                        (h.devicePixelRatioUsed = w),
                            (h.artboardWidth = (null == u ? void 0 : u.width) / e),
                            (h.artboardHeight = (null == u ? void 0 : u.height) / e);
                    }
                    h.startRendering(), h.resizeToCanvas();
                }
            },
            [h, w],
        );
    v({
        riveLoaded: !!h,
        canvasElem: u,
        containerRef: f,
        options: b,
        onCanvasHasResized: E,
        artboardBounds: null == h ? void 0 : h.bounds,
    });
    var x = n.useCallback(function (e) {
        null === e && u && ((u.height = 0), (u.width = 0)), c(e);
    }, []);
    n.useEffect(
        function () {
            if (u && e) {
                var t,
                    r = null != h;
                if (null == h) {
                    var n = b.useOffscreenRenderer,
                        i = e.onRiveReady,
                        l = s(e, ["onRiveReady"]);
                    (t = new o.Rive(a(a({ useOffscreenRenderer: n }, l), { canvas: u }))),
                        null != p.current && p.current.cleanup(),
                        (p.current = t),
                        t.on(o.EventType.Load, function () {
                            (r = !0), i && i(t), u ? y(t) : t.cleanup();
                        });
                }
                return function () {
                    r || null == t || t.cleanup();
                };
            }
        },
        [u, g, h],
    );
    var k = n.useCallback(function (e) {
            f.current = e;
        }, []),
        C = {
            observe: n.useCallback(function (e, t) {
                _().registerCallback(e, t);
            }, []),
            unobserve: n.useCallback(function (e) {
                _().removeCallback(e);
            }, []),
        },
        T = C.observe,
        M = C.unobserve;
    n.useEffect(
        function () {
            var e,
                t = !1,
                r = function () {
                    if (u && t) {
                        var e = u.getBoundingClientRect();
                        e.width > 0 &&
                            e.height > 0 &&
                            e.top < (window.innerHeight || document.documentElement.clientHeight) &&
                            e.bottom > 0 &&
                            e.left < (window.innerWidth || document.documentElement.clientWidth) &&
                            e.right > 0 &&
                            (null == h || h.startRendering(), (t = !1));
                    }
                };
            return (
                u &&
                    !1 !== b.shouldUseIntersectionObserver &&
                    T(u, function (n) {
                        n.isIntersecting ? h && h.startRendering() : h && h.stopRendering(),
                            (t = !n.isIntersecting),
                            clearTimeout(e),
                            n.isIntersecting || 0 !== n.boundingClientRect.width || (e = setTimeout(r, 10));
                    }),
                function () {
                    u && M(u);
                }
            );
        },
        [T, M, h, u, b.shouldUseIntersectionObserver],
    ),
        n.useEffect(
            function () {
                return function () {
                    h && (h.cleanup(), y(null));
                };
            },
            [h, u],
        ),
        n.useEffect(function () {
            return function () {
                null != p.current && p.current.cleanup();
            };
        }, []);
    var P = null == e ? void 0 : e.animations;
    n.useEffect(
        function () {
            h &&
                P &&
                (h.isPlaying
                    ? (h.stop(h.animationNames), h.play(P))
                    : h.isPaused && (h.stop(h.animationNames), h.pause(P)));
        },
        [P, h],
    );
    var A = n.useCallback(
        function (e) {
            return i.default.createElement(S, a({ setContainerRef: k, setCanvasRef: x }, e));
        },
        [x, k],
    );
    return { canvas: u, container: f.current, setCanvasRef: x, setContainerRef: k, rive: h, RiveComponent: A };
}
function x(e, t, r) {
    var o = n.useState(null),
        i = o[0],
        s = o[1],
        l = n.useState(r.defaultValue),
        u = l[0],
        c = l[1],
        f = n.useState(null),
        p = f[0],
        d = f[1],
        h = n.useRef(null),
        m = n.useRef(e),
        v = n.useRef(r);
    n.useEffect(
        function () {
            v.current = r;
        },
        [r],
    );
    var y = n.useCallback(function () {
        var e = h.current,
            t = m.current,
            r = v.current;
        if (!e || !t) return s(null), c(r.defaultValue), d(null), function () {};
        var n = r.getProperty(e, t);
        if (n) {
            s(n), c(r.getValue(n)), r.getExtendedData && d(r.getExtendedData(n));
            var o = function () {
                c(r.getValue(n)),
                    r.getExtendedData && d(r.getExtendedData(n)),
                    r.onPropertyEvent && r.onPropertyEvent();
            };
            return (
                n.on(o),
                function () {
                    n.off(o);
                }
            );
        }
        return function () {};
    }, []);
    n.useEffect(
        function () {
            return (h.current = t), (m.current = e), y();
        },
        [t, e, y],
    );
    var g = n.useCallback(
            function (e) {
                if (i && h.current === t)
                    try {
                        return e(i), void (v.current.getExtendedData && d(v.current.getExtendedData(i)));
                    } catch (e) {}
                if (h.current)
                    try {
                        var r = v.current.getProperty(h.current, m.current);
                        r && (s(r), e(r), v.current.getExtendedData && d(v.current.getExtendedData(r)));
                    } catch (e) {}
            },
            [i, t],
        ),
        b = n.useMemo(
            function () {
                return v.current.buildPropertyOperations(g);
            },
            [g],
        ),
        w = a({ value: u }, b);
    return r.getExtendedData && (w.extendedData = p), w;
}
(t.default = function (e) {
    var t = e.src,
        r = e.artboard,
        n = e.animations,
        o = e.stateMachines,
        l = e.layout,
        u = e.useOffscreenRenderer,
        c = e.shouldDisableRiveListeners,
        f = e.shouldResizeCanvasToContainer,
        p = e.automaticallyHandleEvents,
        d = e.children,
        h = s(e, [
            "src",
            "artboard",
            "animations",
            "stateMachines",
            "layout",
            "useOffscreenRenderer",
            "shouldDisableRiveListeners",
            "shouldResizeCanvasToContainer",
            "automaticallyHandleEvents",
            "children",
        ]),
        m = E(
            {
                src: t,
                artboard: r,
                animations: n,
                layout: l,
                stateMachines: o,
                autoplay: !0,
                shouldDisableRiveListeners: void 0 !== c && c,
                automaticallyHandleEvents: void 0 !== p && p,
            },
            { useOffscreenRenderer: void 0 === u || u, shouldResizeCanvasToContainer: void 0 === f || f },
        ).RiveComponent;
    return i.default.createElement(m, a({}, h), d);
}),
    (t.useResizeCanvas = v),
    (t.useRive = E),
    (t.useRiveFile = function (e) {
        var t = this,
            r = n.useState(null),
            i = r[0],
            a = r[1],
            s = n.useState("idle"),
            l = s[0],
            u = s[1];
        return (
            n.useEffect(
                function () {
                    var r,
                        n,
                        i,
                        s = null;
                    return (
                        (r = void 0),
                        (n = void 0),
                        (i = function () {
                            return (function (e, t) {
                                var r,
                                    n,
                                    o,
                                    i,
                                    a = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & o[0]) throw o[1];
                                            return o[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (i = { next: s(0), throw: s(1), return: s(2) }),
                                    "function" == typeof Symbol &&
                                        (i[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    i
                                );
                                function s(i) {
                                    return function (s) {
                                        var l = [i, s];
                                        if (r) throw TypeError("Generator is already executing.");
                                        for (; a; )
                                            try {
                                                if (
                                                    ((r = 1),
                                                    n &&
                                                        (o =
                                                            2 & l[0]
                                                                ? n.return
                                                                : l[0]
                                                                  ? n.throw || ((o = n.return) && o.call(n), 0)
                                                                  : n.next) &&
                                                        !(o = o.call(n, l[1])).done)
                                                )
                                                    return o;
                                                switch (((n = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                                                    case 0:
                                                    case 1:
                                                        o = l;
                                                        break;
                                                    case 4:
                                                        return a.label++, { value: l[1], done: !1 };
                                                    case 5:
                                                        a.label++, (n = l[1]), (l = [0]);
                                                        continue;
                                                    case 7:
                                                        (l = a.ops.pop()), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (
                                                            !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                                                            (6 === l[0] || 2 === l[0])
                                                        ) {
                                                            a = 0;
                                                            continue;
                                                        }
                                                        if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                                                            a.label = l[1];
                                                            break;
                                                        }
                                                        if (6 === l[0] && a.label < o[1]) {
                                                            (a.label = o[1]), (o = l);
                                                            break;
                                                        }
                                                        if (o && a.label < o[2]) {
                                                            (a.label = o[2]), a.ops.push(l);
                                                            break;
                                                        }
                                                        o[2] && a.ops.pop(), a.trys.pop();
                                                        continue;
                                                }
                                                l = t.call(e, a);
                                            } catch (e) {
                                                (l = [6, e]), (n = 0);
                                            } finally {
                                                r = o = 0;
                                            }
                                        if (5 & l[0]) throw l[1];
                                        return { value: l[0] ? l[1] : void 0, done: !0 };
                                    };
                                }
                            })(this, function (t) {
                                try {
                                    u("loading"),
                                        (s = new o.RiveFile(e)).init(),
                                        s.on(o.EventType.Load, function () {
                                            null == s || s.getInstance(), a(s), u("success");
                                        }),
                                        s.on(o.EventType.LoadError, function () {
                                            u("failed");
                                        }),
                                        a(s);
                                } catch (e) {
                                    console.error(e), u("failed");
                                }
                                return [2];
                            });
                        }),
                        new (n || (n = Promise))(function (e, o) {
                            function a(e) {
                                try {
                                    l(i.next(e));
                                } catch (e) {
                                    o(e);
                                }
                            }
                            function s(e) {
                                try {
                                    l(i.throw(e));
                                } catch (e) {
                                    o(e);
                                }
                            }
                            function l(t) {
                                var r;
                                t.done
                                    ? e(t.value)
                                    : ((r = t.value) instanceof n
                                          ? r
                                          : new n(function (e) {
                                                e(r);
                                            })
                                      ).then(a, s);
                            }
                            l((i = i.apply(t, r || [])).next());
                        }),
                        function () {
                            null == s || s.cleanup();
                        }
                    );
                },
                [e.src, e.buffer],
            ),
            { riveFile: i, status: l }
        );
    }),
    (t.useStateMachineInput = function (e, t, r, i) {
        var a = n.useState(null),
            s = a[0],
            l = a[1];
        return (
            n.useEffect(
                function () {
                    function n() {
                        if (((e && t && r) || l(null), e && t && r)) {
                            var n = e.stateMachineInputs(t);
                            if (n) {
                                var o = n.find(function (e) {
                                    return e.name === r;
                                });
                                void 0 !== i && o && (o.value = i), l(o || null);
                            }
                        } else l(null);
                    }
                    n(),
                        e &&
                            e.on(o.EventType.Load, function () {
                                n();
                            });
                },
                [e],
            ),
            s
        );
    }),
    (t.useViewModel = function (e, t) {
        var r = null != t ? t : {},
            i = r.name,
            a = r.useDefault,
            s = n.useState(null),
            l = s[0],
            u = s[1];
        return (
            n.useEffect(
                function () {
                    function t() {
                        var t;
                        if (e)
                            u(
                                null != i
                                    ? (null == (t = e.viewModelByName) ? void 0 : t.call(e, i)) || null
                                    : e.defaultViewModel() || null,
                            );
                        else u(null);
                    }
                    return (
                        t(),
                        e && e.on(o.EventType.Load, t),
                        function () {
                            e && e.off(o.EventType.Load, t);
                        }
                    );
                },
                [e, i, void 0 !== a && a],
            ),
            l
        );
    }),
    (t.useViewModelInstance = function (e, t) {
        var r = null != t ? t : {},
            o = r.name,
            i = r.useDefault,
            a = void 0 !== i && i,
            s = r.useNew,
            l = void 0 !== s && s,
            u = r.rive,
            c = n.useState(null),
            f = c[0],
            p = c[1];
        return (
            n.useEffect(
                function () {
                    var t, r, n;
                    if (e) {
                        var i = null;
                        p(
                            (i =
                                null != o
                                    ? e.instanceByName(o) || null
                                    : a
                                      ? (null == (t = e.defaultInstance) ? void 0 : t.call(e)) || null
                                      : l
                                        ? (null == (r = e.instance) ? void 0 : r.call(e)) || null
                                        : (null == (n = e.defaultInstance) ? void 0 : n.call(e)) || null),
                        ),
                            u && i && u.viewModelInstance !== i && u.bindViewModelInstance(i);
                    } else p(null);
                },
                [e, o, a, l, u],
            ),
            f
        );
    }),
    (t.useViewModelInstanceArtboard = function (e, t) {
        return {
            setValue: x(e, t, {
                getProperty: n.useCallback(function (e, t) {
                    return e.artboard(t);
                }, []),
                getValue: n.useCallback(function () {}, []),
                defaultValue: null,
                buildPropertyOperations: n.useCallback(function (e) {
                    return {
                        setValue: function (t) {
                            e(function (e) {
                                e.value = t;
                            });
                        },
                    };
                }, []),
            }).setValue,
        };
    }),
    (t.useViewModelInstanceBoolean = function (e, t) {
        var r = x(e, t, {
            getProperty: n.useCallback(function (e, t) {
                return e.boolean(t);
            }, []),
            getValue: n.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: n.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                };
            }, []),
        });
        return { value: r.value, setValue: r.setValue };
    }),
    (t.useViewModelInstanceColor = function (e, t) {
        var r = x(e, t, {
            getProperty: n.useCallback(function (e, t) {
                return e.color(t);
            }, []),
            getValue: n.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: n.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                    setRgb: function (t, r, n) {
                        e(function (e) {
                            e.rgb(t, r, n);
                        });
                    },
                    setRgba: function (t, r, n, o) {
                        e(function (e) {
                            e.rgba(t, r, n, o);
                        });
                    },
                    setAlpha: function (t) {
                        e(function (e) {
                            e.alpha(t);
                        });
                    },
                    setOpacity: function (t) {
                        e(function (e) {
                            e.opacity(t);
                        });
                    },
                };
            }, []),
        });
        return {
            value: r.value,
            setValue: r.setValue,
            setRgb: r.setRgb,
            setRgba: r.setRgba,
            setAlpha: r.setAlpha,
            setOpacity: r.setOpacity,
        };
    }),
    (t.useViewModelInstanceEnum = function (e, t) {
        var r = x(e, t, {
            getProperty: n.useCallback(function (e, t) {
                return e.enum(t);
            }, []),
            getValue: n.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            getExtendedData: n.useCallback(function (e) {
                return e.values;
            }, []),
            buildPropertyOperations: n.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                };
            }, []),
        });
        return { value: r.value, values: r.extendedData || [], setValue: r.setValue };
    }),
    (t.useViewModelInstanceImage = function (e, t) {
        return {
            setValue: x(e, t, {
                getProperty: n.useCallback(function (e, t) {
                    return e.image(t);
                }, []),
                getValue: n.useCallback(function () {}, []),
                defaultValue: null,
                buildPropertyOperations: n.useCallback(function (e) {
                    return {
                        setValue: function (t) {
                            e(function (e) {
                                e.value = t;
                            });
                        },
                    };
                }, []),
            }).setValue,
        };
    }),
    (t.useViewModelInstanceList = function (e, t) {
        var r,
            o = n.useState(0)[1],
            i = x(e, t, {
                getProperty: n.useCallback(function (e, t) {
                    return e.list(t);
                }, []),
                getValue: n.useCallback(function (e) {
                    return e.length;
                }, []),
                defaultValue: null,
                onPropertyEvent: function () {
                    o(function (e) {
                        return e + 1;
                    });
                },
                buildPropertyOperations: n.useCallback(function (e) {
                    return {
                        addInstance: function (t) {
                            e(function (e) {
                                return e.addInstance(t);
                            });
                        },
                        addInstanceAt: function (t, r) {
                            var n = !1;
                            return (
                                e(function (e) {
                                    n = e.addInstanceAt(t, r);
                                }),
                                n
                            );
                        },
                        removeInstance: function (t) {
                            e(function (e) {
                                return e.removeInstance(t);
                            });
                        },
                        removeInstanceAt: function (t) {
                            e(function (e) {
                                return e.removeInstanceAt(t);
                            });
                        },
                        getInstanceAt: function (t) {
                            var r = null;
                            return (
                                e(function (e) {
                                    r = e.instanceAt(t);
                                }),
                                r
                            );
                        },
                        swap: function (t, r) {
                            e(function (e) {
                                return e.swap(t, r);
                            });
                        },
                    };
                }, []),
            });
        return {
            length: null != (r = i.value) ? r : 0,
            addInstance: i.addInstance,
            addInstanceAt: i.addInstanceAt,
            removeInstance: i.removeInstance,
            removeInstanceAt: i.removeInstanceAt,
            getInstanceAt: i.getInstanceAt,
            swap: i.swap,
        };
    }),
    (t.useViewModelInstanceNumber = function (e, t) {
        var r = x(e, t, {
            getProperty: n.useCallback(function (e, t) {
                return e.number(t);
            }, []),
            getValue: n.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: n.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                };
            }, []),
        });
        return { value: r.value, setValue: r.setValue };
    }),
    (t.useViewModelInstanceString = function (e, t) {
        var r = x(e, t, {
            getProperty: n.useCallback(function (e, t) {
                return e.string(t);
            }, []),
            getValue: n.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: n.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                };
            }, []),
        });
        return { value: r.value, setValue: r.setValue };
    }),
    (t.useViewModelInstanceTrigger = function (e, t, r) {
        var o = (null != r ? r : {}).onTrigger;
        return {
            trigger: x(e, t, {
                getProperty: n.useCallback(function (e, t) {
                    return e.trigger(t);
                }, []),
                getValue: n.useCallback(function () {}, []),
                defaultValue: null,
                onPropertyEvent: o,
                buildPropertyOperations: n.useCallback(function (e) {
                    return {
                        trigger: function () {
                            e(function (e) {
                                e.trigger();
                            });
                        },
                    };
                }, []),
            }).trigger,
        };
    }),
    Object.keys(o).forEach(function (e) {
        "default" === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return o[e];
                },
            });
    });
