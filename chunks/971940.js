Object.defineProperty(t, "__esModule", { value: !0 });
var n,
    i = r(582128),
    o = r(989385),
    a = i && "object" == typeof i && "default" in i ? i : { default: i };
function s(e) {
    var t = e || l(),
        r = i.useState(t),
        n = r[0],
        o = r[1];
    return (
        i.useEffect(
            function () {
                if ("u" > typeof window && "matchMedia" in window) {
                    var t = function () {
                            o(e || l());
                        },
                        r = window.matchMedia("screen and (resolution: " + n + "dppx)");
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
            [n, e],
        ),
        n
    );
}
function l() {
    return Math.min(
        Math.max(1, "u" > typeof window && "number" == typeof window.devicePixelRatio ? window.devicePixelRatio : 1),
        3,
    );
}
var u = (function () {
        function e() {}
        var t = e.prototype;
        return (t.observe = function () {}), (t.unobserve = function () {}), (t.disconnect = function () {}), e;
    })(),
    c = globalThis.ResizeObserver || u,
    f = void 0 !== globalThis.ResizeObserver,
    d = !f,
    p = {
        useDevicePixelRatio: !0,
        fitCanvasToArtboardHeight: !1,
        useOffscreenRenderer: !0,
        shouldResizeCanvasToContainer: !0,
    };
function h(e) {
    return Object.assign({}, p, e);
}
function m(e) {
    var t,
        r,
        n,
        o,
        a,
        l,
        u,
        p = e.riveLoaded,
        m = void 0 !== p && p,
        v = e.canvasElem,
        y = e.containerRef,
        g = e.options,
        b = e.onCanvasHasResized,
        w = e.artboardBounds,
        _ = h(void 0 === g ? {} : g),
        S = i.useState({ height: 0, width: 0 }),
        x = S[0],
        E = x.height,
        k = x.width,
        C = S[1],
        T = i.useState({ height: 0, width: 0 }),
        M = T[0],
        P = M.height,
        A = M.width,
        I = T[1],
        O = i.useState(!0),
        D = O[0],
        R = O[1],
        L = _.fitCanvasToArtboardHeight,
        F = _.shouldResizeCanvasToContainer,
        N = _.useDevicePixelRatio,
        j = _.customDevicePixelRatio,
        B =
            (void 0 === (t = F) && (t = !0),
            (n = (r = i.useState({ width: 0, height: 0 }))[0]),
            (o = r[1]),
            i.useEffect(function () {
                if ("u" > typeof window && t) {
                    var e = function () {
                        o({ width: window.innerWidth, height: window.innerHeight });
                    };
                    return (
                        d && (e(), window.addEventListener("resize", e)),
                        function () {
                            return window.removeEventListener("resize", e);
                        }
                    );
                }
            }, []),
            (u = i.useRef(
                new c(
                    ((a = function (e) {
                        f &&
                            o({ width: e[e.length - 1].contentRect.width, height: e[e.length - 1].contentRect.height });
                    }),
                    (l = 0),
                    function () {
                        for (var e = this, t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        clearTimeout(l),
                            (l = window.setTimeout(function () {
                                return a.apply(e, r);
                            }, 0));
                    }),
                ),
            )),
            i.useEffect(
                function () {
                    var e = u.current;
                    if (!t) return void e.disconnect();
                    var r = y.current;
                    return (
                        y.current && f && e.observe(y.current),
                        function () {
                            e.disconnect(), r && f && e.unobserve(r);
                        }
                    );
                },
                [y, u],
            ),
            n),
        K = s(j),
        $ = null != w ? w : {},
        V = $.maxX,
        U = $.maxY,
        z = i.useCallback(
            function () {
                var e,
                    t,
                    r,
                    n,
                    i = null != (e = null == (r = y.current) ? void 0 : r.clientWidth) ? e : 0,
                    o = null != (t = null == (n = y.current) ? void 0 : n.clientHeight) ? t : 0;
                return L && w ? { width: i, height: (w.maxY / w.maxX) * i } : { width: i, height: o };
            },
            [y, L, V, U],
        );
    i.useEffect(
        function () {
            if (F && y.current && m) {
                var e = z(),
                    t = e.width,
                    r = e.height,
                    n = !1;
                if (v) {
                    var i = t !== k || r !== E;
                    if (
                        (_.fitCanvasToArtboardHeight && i && ((y.current.style.height = r + "px"), (n = !0)),
                        _.useDevicePixelRatio)
                    ) {
                        var o = t * K !== A || r * K !== P;
                        if (i || o) {
                            var a = K * t,
                                s = K * r;
                            (v.width = a),
                                (v.height = s),
                                (v.style.width = t + "px"),
                                (v.style.height = r + "px"),
                                I({ width: a, height: s }),
                                (n = !0);
                        }
                    } else i && ((v.width = t), (v.height = r), I({ width: t, height: r }), (n = !0));
                    C({ width: t, height: r });
                }
                b && (D || n) && b && b(), D && R(!1);
            }
        },
        [v, y, B, K, z, D, R, P, A, E, k, b, F, L, N, m],
    ),
        i.useEffect(
            function () {
                I({ width: 0, height: 0 });
            },
            [v],
        );
}
var v = (function () {
        function e() {}
        var t = e.prototype;
        return (t.observe = function () {}), (t.unobserve = function () {}), (t.disconnect = function () {}), e;
    })(),
    y = globalThis.IntersectionObserver || v,
    g = (function () {
        function e() {
            var e = this;
            (this.elementsMap = new Map()),
                (this.onObserved = function (t) {
                    t.forEach(function (t) {
                        var r = e.elementsMap.get(t.target);
                        r && r(t);
                    });
                }),
                (this.observer = new y(this.onObserved));
        }
        var t = e.prototype;
        return (
            (t.registerCallback = function (e, t) {
                this.observer.observe(e), this.elementsMap.set(e, t);
            }),
            (t.removeCallback = function (e) {
                this.observer.unobserve(e), this.elementsMap.delete(e);
            }),
            e
        );
    })(),
    b = function () {
        return n || (n = new g()), n;
    };
function w() {
    return (w =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }).apply(this, arguments);
}
function _(e, t) {
    if (null == e) return {};
    var r,
        n,
        i = {},
        o = Object.getOwnPropertyNames(e);
    for (n = 0; n < o.length; n++)
        (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i;
}
function S(e) {
    var t = e.setContainerRef,
        r = e.setCanvasRef,
        n = e.className,
        i = void 0 === n ? "" : n,
        o = e.style,
        s = e.children,
        l = _(e, ["setContainerRef", "setCanvasRef", "className", "style", "children"]),
        u = w({ width: "100%", height: "100%" }, o);
    return a.default.createElement(
        "div",
        w({ ref: t, className: i }, !i && { style: u }),
        a.default.createElement("canvas", w({ ref: r, style: { verticalAlign: "top", width: 0, height: 0 } }, l), s),
    );
}
function x(e, t) {
    void 0 === t && (t = {});
    var r = i.useState(null),
        n = r[0],
        l = r[1],
        u = i.useRef(null),
        c = i.useRef(null),
        f = i.useState(null),
        d = f[0],
        p = f[1],
        v = !!e,
        y = h(t),
        g = s(),
        x = i.useCallback(
            function () {
                if (d) {
                    if (d.layout && d.layout.fit === o.Fit.Layout && n) {
                        var e = g * d.layout.layoutScaleFactor;
                        (d.devicePixelRatioUsed = g),
                            (d.artboardWidth = (null == n ? void 0 : n.width) / e),
                            (d.artboardHeight = (null == n ? void 0 : n.height) / e);
                    }
                    d.startRendering(), d.resizeToCanvas();
                }
            },
            [d, g],
        );
    m({
        riveLoaded: !!d,
        canvasElem: n,
        containerRef: u,
        options: y,
        onCanvasHasResized: x,
        artboardBounds: null == d ? void 0 : d.bounds,
    });
    var E = i.useCallback(function (e) {
        null === e && n && ((n.height = 0), (n.width = 0)), l(e);
    }, []);
    i.useEffect(
        function () {
            if (n && e) {
                var t,
                    r = null != d;
                if (null == d) {
                    var i = y.useOffscreenRenderer,
                        a = e.onRiveReady,
                        s = _(e, ["onRiveReady"]);
                    (t = new o.Rive(w({ useOffscreenRenderer: i }, s, { canvas: n }))),
                        null != c.current && c.current.cleanup(),
                        (c.current = t),
                        t.on(o.EventType.Load, function () {
                            (r = !0), a && a(t), n ? p(t) : t.cleanup();
                        });
                }
                return function () {
                    r || null == t || t.cleanup();
                };
            }
        },
        [n, v, d],
    );
    var k = i.useCallback(function (e) {
            u.current = e;
        }, []),
        C = {
            observe: i.useCallback(function (e, t) {
                b().registerCallback(e, t);
            }, []),
            unobserve: i.useCallback(function (e) {
                b().removeCallback(e);
            }, []),
        },
        T = C.observe,
        M = C.unobserve;
    i.useEffect(
        function () {
            var e,
                t = !1,
                r = function () {
                    if (n && t) {
                        var e = n.getBoundingClientRect();
                        e.width > 0 &&
                            e.height > 0 &&
                            e.top < (window.innerHeight || document.documentElement.clientHeight) &&
                            e.bottom > 0 &&
                            e.left < (window.innerWidth || document.documentElement.clientWidth) &&
                            e.right > 0 &&
                            (null == d || d.startRendering(), (t = !1));
                    }
                };
            return (
                n &&
                    !1 !== y.shouldUseIntersectionObserver &&
                    T(n, function (n) {
                        n.isIntersecting ? d && d.startRendering() : d && d.stopRendering(),
                            (t = !n.isIntersecting),
                            clearTimeout(e),
                            n.isIntersecting || 0 !== n.boundingClientRect.width || (e = setTimeout(r, 10));
                    }),
                function () {
                    n && M(n);
                }
            );
        },
        [T, M, d, n, y.shouldUseIntersectionObserver],
    ),
        i.useEffect(
            function () {
                return function () {
                    d && (d.cleanup(), p(null));
                };
            },
            [d, n],
        ),
        i.useEffect(function () {
            return function () {
                null != c.current && c.current.cleanup();
            };
        }, []);
    var P = null == e ? void 0 : e.animations;
    i.useEffect(
        function () {
            d &&
                P &&
                (d.isPlaying
                    ? (d.stop(d.animationNames), d.play(P))
                    : d.isPaused && (d.stop(d.animationNames), d.pause(P)));
        },
        [P, d],
    );
    var A = i.useCallback(
        function (e) {
            return a.default.createElement(S, w({ setContainerRef: k, setCanvasRef: E }, e));
        },
        [E, k],
    );
    return { canvas: n, container: u.current, setCanvasRef: E, setContainerRef: k, rive: d, RiveComponent: A };
}
var E = new WeakSet();
function k(e) {
    E.has(e) ||
        (E.add(e),
        queueMicrotask(function () {
            E.delete(e), e.bind();
        }));
}
function C(e, t) {
    var r = t.name,
        n = t.useNew,
        i = t.instance;
    return void 0 !== i
        ? i
        : e
          ? null != r
              ? e.instanceByName(r) || null
              : n
                ? (null == e.instance ? void 0 : e.instance.call(e)) || null
                : (null == e.defaultInstance ? void 0 : e.defaultInstance.call(e)) || null
          : null;
}
function T() {
    return (T =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }).apply(this, arguments);
}
function M(e, t, r) {
    var n = i.useState(null),
        o = n[0],
        a = n[1],
        s = i.useState(r.defaultValue),
        l = s[0],
        u = s[1],
        c = i.useState(null),
        f = c[0],
        d = c[1],
        p = i.useRef(null),
        h = i.useRef(e),
        m = i.useRef(r);
    i.useEffect(
        function () {
            m.current = r;
        },
        [r],
    );
    var v = i.useCallback(function () {
        var e = p.current,
            t = h.current,
            r = m.current;
        if (!e || !t) return a(null), u(r.defaultValue), d(null), function () {};
        var n = r.getProperty(e, t);
        if (n) {
            a(n), u(r.getValue(n)), r.getExtendedData && d(r.getExtendedData(n));
            var i = function () {
                u(r.getValue(n)),
                    r.getExtendedData && d(r.getExtendedData(n)),
                    r.onPropertyEvent && r.onPropertyEvent();
            };
            return (
                n.on(i),
                function () {
                    n.off(i);
                }
            );
        }
        return function () {};
    }, []);
    i.useEffect(
        function () {
            return (p.current = t), (h.current = e), v();
        },
        [t, e, v],
    );
    var y = i.useCallback(
            function (e) {
                if (o && p.current === t)
                    try {
                        e(o), m.current.getExtendedData && d(m.current.getExtendedData(o));
                        return;
                    } catch (e) {}
                if (p.current)
                    try {
                        var r = m.current.getProperty(p.current, h.current);
                        r && (a(r), e(r), m.current.getExtendedData && d(m.current.getExtendedData(r)));
                    } catch (e) {}
            },
            [o, t],
        ),
        g = i.useMemo(
            function () {
                return m.current.buildPropertyOperations(y);
            },
            [y],
        ),
        b = T({ value: l }, g);
    return r.getExtendedData && (b.extendedData = f), b;
}
function P(e, t, r, n, i, o, a) {
    try {
        var s = e[o](a),
            l = s.value;
    } catch (e) {
        r(e);
        return;
    }
    s.done ? t(l) : Promise.resolve(l).then(n, i);
}
(t.default = function (e) {
    var t = e.src,
        r = e.artboard,
        n = e.animations,
        i = e.stateMachines,
        o = e.layout,
        s = e.useOffscreenRenderer,
        l = e.shouldDisableRiveListeners,
        u = e.shouldResizeCanvasToContainer,
        c = e.automaticallyHandleEvents,
        f = e.children,
        d = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                o = Object.getOwnPropertyNames(e);
            for (n = 0; n < o.length; n++)
                !(t.indexOf((r = o[n])) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, [
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
        p = x(
            {
                src: t,
                artboard: r,
                animations: n,
                layout: o,
                stateMachines: i,
                autoplay: !0,
                shouldDisableRiveListeners: void 0 !== l && l,
                automaticallyHandleEvents: void 0 !== c && c,
            },
            { useOffscreenRenderer: void 0 === s || s, shouldResizeCanvasToContainer: void 0 === u || u },
        ).RiveComponent;
    return a.default.createElement(p, d, f);
}),
    (t.useGlobalViewModelInstance = function (e, t, r) {
        var n = null != r ? r : {},
            o = n.instanceName,
            a = n.useNew,
            s = void 0 !== a && a,
            l = n.instance,
            u = n.rive,
            c = i.useState(null),
            f = c[0],
            d = c[1];
        return (
            i.useEffect(
                function () {
                    var r = C(e, { name: o, useNew: s, instance: l });
                    d(r), u && t && r && u.setGlobalViewModelInstance(t, r) && k(u);
                },
                [e, t, o, s, l, u],
            ),
            f
        );
    }),
    (t.useResizeCanvas = m),
    (t.useRive = x),
    (t.useRiveFile = function (e) {
        var t = i.useState(null),
            r = t[0],
            n = t[1],
            a = i.useState("idle"),
            s = a[0],
            l = a[1];
        return (
            i.useEffect(
                function () {
                    var t,
                        r = null;
                    return (
                        ((t = function () {
                            return (function (e, t) {
                                var r,
                                    n,
                                    i,
                                    o = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & i[0]) throw i[1];
                                            return i[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    },
                                    a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype),
                                    s = Object.defineProperty;
                                return (
                                    s(a, "next", { value: l(0) }),
                                    s(a, "throw", { value: l(1) }),
                                    s(a, "return", { value: l(2) }),
                                    "function" == typeof Symbol &&
                                        s(a, Symbol.iterator, {
                                            value: function () {
                                                return this;
                                            },
                                        }),
                                    a
                                );
                                function l(s) {
                                    return function (l) {
                                        var u = [s, l];
                                        if (r) throw TypeError("Generator is already executing.");
                                        for (; a && ((a = 0), u[0] && (o = 0)), o; )
                                            try {
                                                if (
                                                    ((r = 1),
                                                    n &&
                                                        (i =
                                                            2 & u[0]
                                                                ? n.return
                                                                : u[0]
                                                                  ? n.throw || ((i = n.return) && i.call(n), 0)
                                                                  : n.next) &&
                                                        !(i = i.call(n, u[1])).done)
                                                )
                                                    return i;
                                                switch (((n = 0), i && (u = [2 & u[0], i.value]), u[0])) {
                                                    case 0:
                                                    case 1:
                                                        i = u;
                                                        break;
                                                    case 4:
                                                        return o.label++, { value: u[1], done: !1 };
                                                    case 5:
                                                        o.label++, (n = u[1]), (u = [0]);
                                                        continue;
                                                    case 7:
                                                        (u = o.ops.pop()), o.trys.pop();
                                                        continue;
                                                    default:
                                                        if (
                                                            !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                                                            (6 === u[0] || 2 === u[0])
                                                        ) {
                                                            o = 0;
                                                            continue;
                                                        }
                                                        if (3 === u[0] && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                                                            o.label = u[1];
                                                            break;
                                                        }
                                                        if (6 === u[0] && o.label < i[1]) {
                                                            (o.label = i[1]), (i = u);
                                                            break;
                                                        }
                                                        if (i && o.label < i[2]) {
                                                            (o.label = i[2]), o.ops.push(u);
                                                            break;
                                                        }
                                                        i[2] && o.ops.pop(), o.trys.pop();
                                                        continue;
                                                }
                                                u = t.call(e, o);
                                            } catch (e) {
                                                (u = [6, e]), (n = 0);
                                            } finally {
                                                r = i = 0;
                                            }
                                        if (5 & u[0]) throw u[1];
                                        return { value: u[0] ? u[1] : void 0, done: !0 };
                                    };
                                }
                            })(this, function (t) {
                                try {
                                    l("loading"),
                                        (r = new o.RiveFile(e)).init(),
                                        r.on(o.EventType.Load, function () {
                                            null == r || r.getInstance(), n(r), l("success");
                                        }),
                                        r.on(o.EventType.LoadError, function () {
                                            l("failed");
                                        }),
                                        n(r);
                                } catch (e) {
                                    console.error(e), l("failed");
                                }
                                return [2];
                            });
                        }),
                        function () {
                            var e = this,
                                r = arguments;
                            return new Promise(function (n, i) {
                                var o = t.apply(e, r);
                                function a(e) {
                                    P(o, n, i, a, s, "next", e);
                                }
                                function s(e) {
                                    P(o, n, i, a, s, "throw", e);
                                }
                                a(void 0);
                            });
                        })(),
                        function () {
                            null == r || r.cleanup();
                        }
                    );
                },
                [e.src, e.buffer],
            ),
            { riveFile: r, status: s }
        );
    }),
    (t.useStateMachineInput = function (e, t, r, n) {
        var a = i.useState(null),
            s = a[0],
            l = a[1];
        return (
            i.useEffect(
                function () {
                    var i = function () {
                        if (((e && t && r) || l(null), e && t && r)) {
                            var i = e.stateMachineInputs(t);
                            if (i) {
                                var o = i.find(function (e) {
                                    return e.name === r;
                                });
                                void 0 !== n && o && (o.value = n), l(o || null);
                            }
                        } else l(null);
                    };
                    i(),
                        e &&
                            e.on(o.EventType.Load, function () {
                                i();
                            });
                },
                [e],
            ),
            s
        );
    }),
    (t.useViewModel = function (e, t) {
        var r = null != t ? t : {},
            n = r.name,
            a = r.useDefault,
            s = i.useState(null),
            l = s[0],
            u = s[1];
        return (
            i.useEffect(
                function () {
                    var t = function () {
                        e
                            ? u(
                                  null != n
                                      ? (null == e.viewModelByName ? void 0 : e.viewModelByName.call(e, n)) || null
                                      : e.defaultViewModel() || null,
                              )
                            : u(null);
                    };
                    return (
                        t(),
                        e && e.on(o.EventType.Load, t),
                        function () {
                            e && e.off(o.EventType.Load, t);
                        }
                    );
                },
                [e, n, void 0 !== a && a],
            ),
            l
        );
    }),
    (t.useViewModelInstance = function (e, t) {
        var r = null != t ? t : {},
            n = r.name,
            o = r.useDefault,
            a = r.useNew,
            s = void 0 !== a && a,
            l = r.rive,
            u = i.useState(null),
            c = u[0],
            f = u[1];
        return (
            i.useEffect(
                function () {
                    if (!e) return void f(null);
                    var t = C(e, { name: n, useNew: s });
                    f(t), l && t && l.viewModelInstance !== t && (l.setViewModelInstance(t), k(l));
                },
                [e, n, void 0 !== o && o, s, l],
            ),
            c
        );
    }),
    (t.useViewModelInstanceArtboard = function (e, t) {
        return {
            setValue: M(e, t, {
                getProperty: i.useCallback(function (e, t) {
                    return e.artboard(t);
                }, []),
                getValue: i.useCallback(function () {}, []),
                defaultValue: null,
                buildPropertyOperations: i.useCallback(function (e) {
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
        var r = M(e, t, {
            getProperty: i.useCallback(function (e, t) {
                return e.boolean(t);
            }, []),
            getValue: i.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: i.useCallback(function (e) {
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
        var r = M(e, t, {
            getProperty: i.useCallback(function (e, t) {
                return e.color(t);
            }, []),
            getValue: i.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: i.useCallback(function (e) {
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
                    setRgba: function (t, r, n, i) {
                        e(function (e) {
                            e.rgba(t, r, n, i);
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
        var r = M(e, t, {
            getProperty: i.useCallback(function (e, t) {
                return e.enum(t);
            }, []),
            getValue: i.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            getExtendedData: i.useCallback(function (e) {
                return e.values;
            }, []),
            buildPropertyOperations: i.useCallback(function (e) {
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
    (t.useViewModelInstanceFont = function (e, t) {
        return {
            setValue: M(e, t, {
                getProperty: i.useCallback(function (e, t) {
                    return e.font(t);
                }, []),
                getValue: i.useCallback(function () {}, []),
                defaultValue: null,
                buildPropertyOperations: i.useCallback(function (e) {
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
    (t.useViewModelInstanceImage = function (e, t) {
        return {
            setValue: M(e, t, {
                getProperty: i.useCallback(function (e, t) {
                    return e.image(t);
                }, []),
                getValue: i.useCallback(function () {}, []),
                defaultValue: null,
                buildPropertyOperations: i.useCallback(function (e) {
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
            n = i.useState(0)[1],
            o = M(e, t, {
                getProperty: i.useCallback(function (e, t) {
                    return e.list(t);
                }, []),
                getValue: i.useCallback(function (e) {
                    return e.length;
                }, []),
                defaultValue: null,
                onPropertyEvent: function () {
                    n(function (e) {
                        return e + 1;
                    });
                },
                buildPropertyOperations: i.useCallback(function (e) {
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
            length: null != (r = o.value) ? r : 0,
            addInstance: o.addInstance,
            addInstanceAt: o.addInstanceAt,
            removeInstance: o.removeInstance,
            removeInstanceAt: o.removeInstanceAt,
            getInstanceAt: o.getInstanceAt,
            swap: o.swap,
        };
    }),
    (t.useViewModelInstanceNumber = function (e, t) {
        var r = M(e, t, {
            getProperty: i.useCallback(function (e, t) {
                return e.number(t);
            }, []),
            getValue: i.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: i.useCallback(function (e) {
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
        var r = M(e, t, {
            getProperty: i.useCallback(function (e, t) {
                return e.string(t);
            }, []),
            getValue: i.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: i.useCallback(function (e) {
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
        var n = (null != r ? r : {}).onTrigger;
        return {
            trigger: M(e, t, {
                getProperty: i.useCallback(function (e, t) {
                    return e.trigger(t);
                }, []),
                getValue: i.useCallback(function () {}, []),
                defaultValue: null,
                onPropertyEvent: n,
                buildPropertyOperations: i.useCallback(function (e) {
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
