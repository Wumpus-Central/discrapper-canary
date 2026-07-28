Object.defineProperty(t, "__esModule", { value: !0 });
var r = n(582128),
    i = n(877508),
    a = r && "object" == typeof r && "default" in r ? r : { default: r },
    o = function () {
        return (o =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
            }).apply(this, arguments);
    };
function s(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    }
    return n;
}
function l(e) {
    var t = e || u(),
        n = r.useState(t),
        i = n[0],
        a = n[1];
    return (
        r.useEffect(
            function () {
                if ("u" > typeof window && "matchMedia" in window) {
                    var t = function () {
                            a(e || u());
                        },
                        n = window.matchMedia("screen and (resolution: ".concat(i, "dppx)"));
                    return (
                        n.hasOwnProperty("addEventListener") ? n.addEventListener("change", t) : n.addListener(t),
                        function () {
                            n.hasOwnProperty("removeEventListener")
                                ? n.removeEventListener("change", t)
                                : n.removeListener(t);
                        }
                    );
                }
            },
            [i, e],
        ),
        i
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
    d = globalThis.ResizeObserver || c,
    f = void 0 !== globalThis.ResizeObserver,
    p = !f,
    h = {
        useDevicePixelRatio: !0,
        fitCanvasToArtboardHeight: !1,
        useOffscreenRenderer: !0,
        shouldResizeCanvasToContainer: !0,
    };
function m(e) {
    return Object.assign({}, h, e);
}
function g(e) {
    var t,
        n,
        i,
        a,
        o,
        s,
        u,
        c = e.riveLoaded,
        h = void 0 !== c && c,
        g = e.canvasElem,
        v = e.containerRef,
        y = e.options,
        b = e.onCanvasHasResized,
        _ = e.artboardBounds,
        w = m(void 0 === y ? {} : y),
        x = r.useState({ height: 0, width: 0 }),
        E = x[0],
        S = E.height,
        k = E.width,
        T = x[1],
        C = r.useState({ height: 0, width: 0 }),
        P = C[0],
        A = P.height,
        M = P.width,
        R = C[1],
        I = r.useState(!0),
        L = I[0],
        O = I[1],
        D = w.fitCanvasToArtboardHeight,
        F = w.shouldResizeCanvasToContainer,
        N = w.useDevicePixelRatio,
        V = w.customDevicePixelRatio,
        j =
            (void 0 === (t = F) && (t = !0),
            (i = (n = r.useState({ width: 0, height: 0 }))[0]),
            (a = n[1]),
            r.useEffect(function () {
                if ("u" > typeof window && t) {
                    var e = function () {
                        a({ width: window.innerWidth, height: window.innerHeight });
                    };
                    return (
                        p && (e(), window.addEventListener("resize", e)),
                        function () {
                            return window.removeEventListener("resize", e);
                        }
                    );
                }
            }, []),
            (u = r.useRef(
                new d(
                    ((o = function (e) {
                        f &&
                            a({ width: e[e.length - 1].contentRect.width, height: e[e.length - 1].contentRect.height });
                    }),
                    (s = 0),
                    function () {
                        for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        clearTimeout(s),
                            (s = window.setTimeout(function () {
                                return o.apply(e, t);
                            }, 0));
                    }),
                ),
            )),
            r.useEffect(
                function () {
                    var e = u.current;
                    if (t) {
                        var n = v.current;
                        return (
                            v.current && f && e.observe(v.current),
                            function () {
                                e.disconnect(), n && f && e.unobserve(n);
                            }
                        );
                    }
                    e.disconnect();
                },
                [v, u],
            ),
            i),
        B = l(V),
        U = null != _ ? _ : {},
        K = U.maxX,
        $ = U.maxY,
        z = r.useCallback(
            function () {
                var e,
                    t,
                    n,
                    r,
                    i = null != (t = null == (e = v.current) ? void 0 : e.clientWidth) ? t : 0,
                    a = null != (r = null == (n = v.current) ? void 0 : n.clientHeight) ? r : 0;
                return D && _ ? { width: i, height: i * (_.maxY / _.maxX) } : { width: i, height: a };
            },
            [v, D, K, $],
        );
    r.useEffect(
        function () {
            if (F && v.current && h) {
                var e = z(),
                    t = e.width,
                    n = e.height,
                    r = !1;
                if (g) {
                    var i = t !== k || n !== S;
                    if (
                        (w.fitCanvasToArtboardHeight && i && ((v.current.style.height = n + "px"), (r = !0)),
                        w.useDevicePixelRatio)
                    ) {
                        if (i || t * B !== M || n * B !== A) {
                            var a = B * t,
                                o = B * n;
                            (g.width = a),
                                (g.height = o),
                                (g.style.width = t + "px"),
                                (g.style.height = n + "px"),
                                R({ width: a, height: o }),
                                (r = !0);
                        }
                    } else i && ((g.width = t), (g.height = n), R({ width: t, height: n }), (r = !0));
                    T({ width: t, height: n });
                }
                b && (L || r) && b && b(), L && O(!1);
            }
        },
        [g, v, j, B, z, L, O, A, M, S, k, b, F, D, N, h],
    ),
        r.useEffect(
            function () {
                R({ width: 0, height: 0 });
            },
            [g],
        );
}
var v,
    y = (function () {
        function e() {}
        return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
        );
    })(),
    b = globalThis.IntersectionObserver || y,
    _ = (function () {
        function e() {
            var e = this;
            (this.elementsMap = new Map()),
                (this.onObserved = function (t) {
                    t.forEach(function (t) {
                        var n = e.elementsMap.get(t.target);
                        n && n(t);
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
    w = function () {
        return v || (v = new _()), v;
    };
function x(e) {
    var t = e.setContainerRef,
        n = e.setCanvasRef,
        r = e.className,
        i = void 0 === r ? "" : r,
        l = e.style,
        u = e.children,
        c = s(e, ["setContainerRef", "setCanvasRef", "className", "style", "children"]),
        d = o({ width: "100%", height: "100%" }, l);
    return a.default.createElement(
        "div",
        o({ ref: t, className: i }, !i && { style: d }),
        a.default.createElement("canvas", o({ ref: n, style: { verticalAlign: "top", width: 0, height: 0 } }, c), u),
    );
}
function E(e, t) {
    void 0 === t && (t = {});
    var n = r.useState(null),
        u = n[0],
        c = n[1],
        d = r.useRef(null),
        f = r.useRef(null),
        p = r.useState(null),
        h = p[0],
        v = p[1],
        y = !!e,
        b = m(t),
        _ = l(),
        E = r.useCallback(
            function () {
                if (h) {
                    if (h.layout && h.layout.fit === i.Fit.Layout && u) {
                        var e = _ * h.layout.layoutScaleFactor;
                        (h.devicePixelRatioUsed = _),
                            (h.artboardWidth = (null == u ? void 0 : u.width) / e),
                            (h.artboardHeight = (null == u ? void 0 : u.height) / e);
                    }
                    h.startRendering(), h.resizeToCanvas();
                }
            },
            [h, _],
        );
    g({
        riveLoaded: !!h,
        canvasElem: u,
        containerRef: d,
        options: b,
        onCanvasHasResized: E,
        artboardBounds: null == h ? void 0 : h.bounds,
    });
    var S = r.useCallback(function (e) {
        null === e && u && ((u.height = 0), (u.width = 0)), c(e);
    }, []);
    r.useEffect(
        function () {
            if (u && e) {
                var t,
                    n = null != h;
                if (null == h) {
                    var r = b.useOffscreenRenderer,
                        a = e.onRiveReady,
                        l = s(e, ["onRiveReady"]);
                    (t = new i.Rive(o(o({ useOffscreenRenderer: r }, l), { canvas: u }))),
                        null != f.current && f.current.cleanup(),
                        (f.current = t),
                        t.on(i.EventType.Load, function () {
                            (n = !0), a && a(t), u ? v(t) : t.cleanup();
                        });
                }
                return function () {
                    n || null == t || t.cleanup();
                };
            }
        },
        [u, y, h],
    );
    var k = r.useCallback(function (e) {
            d.current = e;
        }, []),
        T = {
            observe: r.useCallback(function (e, t) {
                w().registerCallback(e, t);
            }, []),
            unobserve: r.useCallback(function (e) {
                w().removeCallback(e);
            }, []),
        },
        C = T.observe,
        P = T.unobserve;
    r.useEffect(
        function () {
            var e,
                t = !1,
                n = function () {
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
                    C(u, function (r) {
                        r.isIntersecting ? h && h.startRendering() : h && h.stopRendering(),
                            (t = !r.isIntersecting),
                            clearTimeout(e),
                            r.isIntersecting || 0 !== r.boundingClientRect.width || (e = setTimeout(n, 10));
                    }),
                function () {
                    u && P(u);
                }
            );
        },
        [C, P, h, u, b.shouldUseIntersectionObserver],
    ),
        r.useEffect(
            function () {
                return function () {
                    h && (h.cleanup(), v(null));
                };
            },
            [h, u],
        ),
        r.useEffect(function () {
            return function () {
                null != f.current && f.current.cleanup();
            };
        }, []);
    var A = null == e ? void 0 : e.animations;
    r.useEffect(
        function () {
            h &&
                A &&
                (h.isPlaying
                    ? (h.stop(h.animationNames), h.play(A))
                    : h.isPaused && (h.stop(h.animationNames), h.pause(A)));
        },
        [A, h],
    );
    var M = r.useCallback(
        function (e) {
            return a.default.createElement(x, o({ setContainerRef: k, setCanvasRef: S }, e));
        },
        [S, k],
    );
    return { canvas: u, container: d.current, setCanvasRef: S, setContainerRef: k, rive: h, RiveComponent: M };
}
function S(e, t, n) {
    var i = r.useState(null),
        a = i[0],
        s = i[1],
        l = r.useState(n.defaultValue),
        u = l[0],
        c = l[1],
        d = r.useState(null),
        f = d[0],
        p = d[1],
        h = r.useRef(null),
        m = r.useRef(e),
        g = r.useRef(n);
    r.useEffect(
        function () {
            g.current = n;
        },
        [n],
    );
    var v = r.useCallback(function () {
        var e = h.current,
            t = m.current,
            n = g.current;
        if (!e || !t) return s(null), c(n.defaultValue), p(null), function () {};
        var r = n.getProperty(e, t);
        if (r) {
            s(r), c(n.getValue(r)), n.getExtendedData && p(n.getExtendedData(r));
            var i = function () {
                c(n.getValue(r)),
                    n.getExtendedData && p(n.getExtendedData(r)),
                    n.onPropertyEvent && n.onPropertyEvent();
            };
            return (
                r.on(i),
                function () {
                    r.off(i);
                }
            );
        }
        return function () {};
    }, []);
    r.useEffect(
        function () {
            return (h.current = t), (m.current = e), v();
        },
        [t, e, v],
    );
    var y = r.useCallback(
            function (e) {
                if (a && h.current === t)
                    try {
                        return e(a), void (g.current.getExtendedData && p(g.current.getExtendedData(a)));
                    } catch (e) {}
                if (h.current)
                    try {
                        var n = g.current.getProperty(h.current, m.current);
                        n && (s(n), e(n), g.current.getExtendedData && p(g.current.getExtendedData(n)));
                    } catch (e) {}
            },
            [a, t],
        ),
        b = r.useMemo(
            function () {
                return g.current.buildPropertyOperations(y);
            },
            [y],
        ),
        _ = o({ value: u }, b);
    return n.getExtendedData && (_.extendedData = f), _;
}
(t.default = function (e) {
    var t = e.src,
        n = e.artboard,
        r = e.animations,
        i = e.stateMachines,
        l = e.layout,
        u = e.useOffscreenRenderer,
        c = e.shouldDisableRiveListeners,
        d = e.shouldResizeCanvasToContainer,
        f = e.automaticallyHandleEvents,
        p = e.children,
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
                artboard: n,
                animations: r,
                layout: l,
                stateMachines: i,
                autoplay: !0,
                shouldDisableRiveListeners: void 0 !== c && c,
                automaticallyHandleEvents: void 0 !== f && f,
            },
            { useOffscreenRenderer: void 0 === u || u, shouldResizeCanvasToContainer: void 0 === d || d },
        ).RiveComponent;
    return a.default.createElement(m, o({}, h), p);
}),
    (t.useResizeCanvas = g),
    (t.useRive = E),
    (t.useRiveFile = function (e) {
        var t = this,
            n = r.useState(null),
            a = n[0],
            o = n[1],
            s = r.useState("idle"),
            l = s[0],
            u = s[1];
        return (
            r.useEffect(
                function () {
                    var n,
                        r,
                        a,
                        s = null;
                    return (
                        (n = void 0),
                        (r = void 0),
                        (a = function () {
                            return (function (e, t) {
                                var n,
                                    r,
                                    i,
                                    a,
                                    o = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & i[0]) throw i[1];
                                            return i[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (a = { next: s(0), throw: s(1), return: s(2) }),
                                    "function" == typeof Symbol &&
                                        (a[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    a
                                );
                                function s(a) {
                                    return function (s) {
                                        var l = [a, s];
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; o; )
                                            try {
                                                if (
                                                    ((n = 1),
                                                    r &&
                                                        (i =
                                                            2 & l[0]
                                                                ? r.return
                                                                : l[0]
                                                                  ? r.throw || ((i = r.return) && i.call(r), 0)
                                                                  : r.next) &&
                                                        !(i = i.call(r, l[1])).done)
                                                )
                                                    return i;
                                                switch (((r = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                                                    case 0:
                                                    case 1:
                                                        i = l;
                                                        break;
                                                    case 4:
                                                        return o.label++, { value: l[1], done: !1 };
                                                    case 5:
                                                        o.label++, (r = l[1]), (l = [0]);
                                                        continue;
                                                    case 7:
                                                        (l = o.ops.pop()), o.trys.pop();
                                                        continue;
                                                    default:
                                                        if (
                                                            !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                                                            (6 === l[0] || 2 === l[0])
                                                        ) {
                                                            o = 0;
                                                            continue;
                                                        }
                                                        if (3 === l[0] && (!i || (l[1] > i[0] && l[1] < i[3]))) {
                                                            o.label = l[1];
                                                            break;
                                                        }
                                                        if (6 === l[0] && o.label < i[1]) {
                                                            (o.label = i[1]), (i = l);
                                                            break;
                                                        }
                                                        if (i && o.label < i[2]) {
                                                            (o.label = i[2]), o.ops.push(l);
                                                            break;
                                                        }
                                                        i[2] && o.ops.pop(), o.trys.pop();
                                                        continue;
                                                }
                                                l = t.call(e, o);
                                            } catch (e) {
                                                (l = [6, e]), (r = 0);
                                            } finally {
                                                n = i = 0;
                                            }
                                        if (5 & l[0]) throw l[1];
                                        return { value: l[0] ? l[1] : void 0, done: !0 };
                                    };
                                }
                            })(this, function (t) {
                                try {
                                    u("loading"),
                                        (s = new i.RiveFile(e)).init(),
                                        s.on(i.EventType.Load, function () {
                                            null == s || s.getInstance(), o(s), u("success");
                                        }),
                                        s.on(i.EventType.LoadError, function () {
                                            u("failed");
                                        }),
                                        o(s);
                                } catch (e) {
                                    console.error(e), u("failed");
                                }
                                return [2];
                            });
                        }),
                        new (r || (r = Promise))(function (e, i) {
                            function o(e) {
                                try {
                                    l(a.next(e));
                                } catch (e) {
                                    i(e);
                                }
                            }
                            function s(e) {
                                try {
                                    l(a.throw(e));
                                } catch (e) {
                                    i(e);
                                }
                            }
                            function l(t) {
                                var n;
                                t.done
                                    ? e(t.value)
                                    : ((n = t.value) instanceof r
                                          ? n
                                          : new r(function (e) {
                                                e(n);
                                            })
                                      ).then(o, s);
                            }
                            l((a = a.apply(t, n || [])).next());
                        }),
                        function () {
                            null == s || s.cleanup();
                        }
                    );
                },
                [e.src, e.buffer],
            ),
            { riveFile: a, status: l }
        );
    }),
    (t.useStateMachineInput = function (e, t, n, a) {
        var o = r.useState(null),
            s = o[0],
            l = o[1];
        return (
            r.useEffect(
                function () {
                    function r() {
                        if (((e && t && n) || l(null), e && t && n)) {
                            var r = e.stateMachineInputs(t);
                            if (r) {
                                var i = r.find(function (e) {
                                    return e.name === n;
                                });
                                void 0 !== a && i && (i.value = a), l(i || null);
                            }
                        } else l(null);
                    }
                    r(),
                        e &&
                            e.on(i.EventType.Load, function () {
                                r();
                            });
                },
                [e],
            ),
            s
        );
    }),
    (t.useViewModel = function (e, t) {
        var n = null != t ? t : {},
            a = n.name,
            o = n.useDefault,
            s = r.useState(null),
            l = s[0],
            u = s[1];
        return (
            r.useEffect(
                function () {
                    function t() {
                        var t;
                        if (e)
                            u(
                                null != a
                                    ? (null == (t = e.viewModelByName) ? void 0 : t.call(e, a)) || null
                                    : e.defaultViewModel() || null,
                            );
                        else u(null);
                    }
                    return (
                        t(),
                        e && e.on(i.EventType.Load, t),
                        function () {
                            e && e.off(i.EventType.Load, t);
                        }
                    );
                },
                [e, a, void 0 !== o && o],
            ),
            l
        );
    }),
    (t.useViewModelInstance = function (e, t) {
        var n = null != t ? t : {},
            i = n.name,
            a = n.useDefault,
            o = void 0 !== a && a,
            s = n.useNew,
            l = void 0 !== s && s,
            u = n.rive,
            c = r.useState(null),
            d = c[0],
            f = c[1];
        return (
            r.useEffect(
                function () {
                    var t, n, r;
                    if (e) {
                        var a = null;
                        f(
                            (a =
                                null != i
                                    ? e.instanceByName(i) || null
                                    : o
                                      ? (null == (t = e.defaultInstance) ? void 0 : t.call(e)) || null
                                      : l
                                        ? (null == (n = e.instance) ? void 0 : n.call(e)) || null
                                        : (null == (r = e.defaultInstance) ? void 0 : r.call(e)) || null),
                        ),
                            u && a && u.viewModelInstance !== a && u.bindViewModelInstance(a);
                    } else f(null);
                },
                [e, i, o, l, u],
            ),
            d
        );
    }),
    (t.useViewModelInstanceArtboard = function (e, t) {
        return {
            setValue: S(e, t, {
                getProperty: r.useCallback(function (e, t) {
                    return e.artboard(t);
                }, []),
                getValue: r.useCallback(function () {}, []),
                defaultValue: null,
                buildPropertyOperations: r.useCallback(function (e) {
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
        var n = S(e, t, {
            getProperty: r.useCallback(function (e, t) {
                return e.boolean(t);
            }, []),
            getValue: r.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: r.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                };
            }, []),
        });
        return { value: n.value, setValue: n.setValue };
    }),
    (t.useViewModelInstanceColor = function (e, t) {
        var n = S(e, t, {
            getProperty: r.useCallback(function (e, t) {
                return e.color(t);
            }, []),
            getValue: r.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: r.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                    setRgb: function (t, n, r) {
                        e(function (e) {
                            e.rgb(t, n, r);
                        });
                    },
                    setRgba: function (t, n, r, i) {
                        e(function (e) {
                            e.rgba(t, n, r, i);
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
            value: n.value,
            setValue: n.setValue,
            setRgb: n.setRgb,
            setRgba: n.setRgba,
            setAlpha: n.setAlpha,
            setOpacity: n.setOpacity,
        };
    }),
    (t.useViewModelInstanceEnum = function (e, t) {
        var n = S(e, t, {
            getProperty: r.useCallback(function (e, t) {
                return e.enum(t);
            }, []),
            getValue: r.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            getExtendedData: r.useCallback(function (e) {
                return e.values;
            }, []),
            buildPropertyOperations: r.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                };
            }, []),
        });
        return { value: n.value, values: n.extendedData || [], setValue: n.setValue };
    }),
    (t.useViewModelInstanceImage = function (e, t) {
        return {
            setValue: S(e, t, {
                getProperty: r.useCallback(function (e, t) {
                    return e.image(t);
                }, []),
                getValue: r.useCallback(function () {}, []),
                defaultValue: null,
                buildPropertyOperations: r.useCallback(function (e) {
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
        var n,
            i = r.useState(0)[1],
            a = S(e, t, {
                getProperty: r.useCallback(function (e, t) {
                    return e.list(t);
                }, []),
                getValue: r.useCallback(function (e) {
                    return e.length;
                }, []),
                defaultValue: null,
                onPropertyEvent: function () {
                    i(function (e) {
                        return e + 1;
                    });
                },
                buildPropertyOperations: r.useCallback(function (e) {
                    return {
                        addInstance: function (t) {
                            e(function (e) {
                                return e.addInstance(t);
                            });
                        },
                        addInstanceAt: function (t, n) {
                            var r = !1;
                            return (
                                e(function (e) {
                                    r = e.addInstanceAt(t, n);
                                }),
                                r
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
                            var n = null;
                            return (
                                e(function (e) {
                                    n = e.instanceAt(t);
                                }),
                                n
                            );
                        },
                        swap: function (t, n) {
                            e(function (e) {
                                return e.swap(t, n);
                            });
                        },
                    };
                }, []),
            });
        return {
            length: null != (n = a.value) ? n : 0,
            addInstance: a.addInstance,
            addInstanceAt: a.addInstanceAt,
            removeInstance: a.removeInstance,
            removeInstanceAt: a.removeInstanceAt,
            getInstanceAt: a.getInstanceAt,
            swap: a.swap,
        };
    }),
    (t.useViewModelInstanceNumber = function (e, t) {
        var n = S(e, t, {
            getProperty: r.useCallback(function (e, t) {
                return e.number(t);
            }, []),
            getValue: r.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: r.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                };
            }, []),
        });
        return { value: n.value, setValue: n.setValue };
    }),
    (t.useViewModelInstanceString = function (e, t) {
        var n = S(e, t, {
            getProperty: r.useCallback(function (e, t) {
                return e.string(t);
            }, []),
            getValue: r.useCallback(function (e) {
                return e.value;
            }, []),
            defaultValue: null,
            buildPropertyOperations: r.useCallback(function (e) {
                return {
                    setValue: function (t) {
                        e(function (e) {
                            e.value = t;
                        });
                    },
                };
            }, []),
        });
        return { value: n.value, setValue: n.setValue };
    }),
    (t.useViewModelInstanceTrigger = function (e, t, n) {
        var i = (null != n ? n : {}).onTrigger;
        return {
            trigger: S(e, t, {
                getProperty: r.useCallback(function (e, t) {
                    return e.trigger(t);
                }, []),
                getValue: r.useCallback(function () {}, []),
                defaultValue: null,
                onPropertyEvent: i,
                buildPropertyOperations: r.useCallback(function (e) {
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
    Object.keys(i).forEach(function (e) {
        "default" === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return i[e];
                },
            });
    });
