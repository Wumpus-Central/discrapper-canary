n.d(t, { w: () => C });
var i,
    r = n(477900),
    a = n(582128),
    s = n(848837),
    l = n(971940),
    o = n(941861),
    d = n(844222),
    c = n(116711),
    u = n(282802),
    _ = n.n(u);
function E(e) {
    let t = {};
    for (let n of Object.keys(e)) t[_()(n)] = e[n];
    return t;
}
let A = E(l.Fit),
    h = E(l.Alignment);
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(321073));
var f = n(51906),
    I = (((i = {}).Disabled = "disabled"), (i.Loading = "loading"), (i.Loaded = "loaded"), (i.Error = "error"), i);
let p = new Map();
function m(e) {
    e.listeners.forEach((e) => e());
}
function T(e, t) {
    (null != t.removalTimer && clearTimeout(t.removalTimer),
        (t.removalTimer = setTimeout(() => {
            var n, i;
            return (
                (n = e),
                void (((i = t).removalTimer = null),
                i.consumers > 0 || p.get(n) !== i || (p.delete(n), i.riveFile.cleanup()))
            );
        }, 3e4)));
}
let g = { status: "disabled", riveFile: null },
    S = { status: "loading", riveFile: null };
function N(e) {
    let { className: t, style: n } = e;
    return (0, r.jsx)("div", {
        className: t,
        style: null != t && "" !== t ? void 0 : { width: "100%", height: "100%", ...n },
        "aria-hidden": !0,
    });
}
function C(e) {
    let t = (function () {
            let e = (0, c.G9)().experiments?.enabledExperiments,
                [t] = a.useState(() => e?.includes("rive-web-perf") ?? !1);
            return t;
        })(),
        n = (function (e) {
            let [t, n] = a.useState(null);
            return (a.useLayoutEffect(() => {
                if (null == e) return;
                let t = (function (e) {
                    let t = p.get(e);
                    if (null != t) return t;
                    let n = new l.RiveFile({ buffer: e }),
                        i = { riveFile: n, status: "loading", consumers: 0, removalTimer: null, listeners: new Set() };
                    return (
                        n.on(l.EventType.Load, () => {
                            (n.getInstance(), (i.status = "loaded"), 0 === i.consumers && T(e, i), m(i));
                        }),
                        n.on(l.EventType.LoadError, () => {
                            ((i.status = "error"), p.get(e) === i && p.delete(e), m(i));
                        }),
                        p.set(e, i),
                        (0, f.yO)(n.init()),
                        i
                    );
                })(e);
                function i() {
                    n({
                        buffer: e,
                        value:
                            "loaded" === t.status
                                ? { status: "loaded", riveFile: t.riveFile }
                                : { status: t.status, riveFile: null },
                    });
                }
                return (
                    (t.consumers += 1),
                    null != t.removalTimer && (clearTimeout(t.removalTimer), (t.removalTimer = null)),
                    t.listeners.add(i),
                    i(),
                    () => {
                        (t.listeners.delete(i),
                            (t.consumers -= 1),
                            0 === t.consumers && "loaded" === t.status && T(e, t));
                    }
                );
            }, [e]),
            null == e)
                ? g
                : null == t || t.buffer !== e
                  ? S
                  : t.value;
        })(t && null == e.assetLoader ? e.buffer : null);
    return n.status === I.Loading
        ? (0, r.jsx)(N, { className: e.className, style: e.style })
        : (0, r.jsx)(O, { ...e, isRiveWebPerfEnabled: t, sharedRiveFile: n.riveFile ?? void 0 });
}
function O(e) {
    let {
            isRiveWebPerfEnabled: t,
            sharedRiveFile: n,
            buffer: i,
            autoplay: s = !0,
            className: u,
            fit: _,
            alignment: E,
            style: f,
            eventTargetRef: I,
            artboard: p,
            withReducedMotion: m = "halt",
            ref: T,
            artboardProperties: g,
            dataBinding: S,
            onDataBindingChange: N,
            touchScrollEnabled: C = !0,
            dynamicDataBinding: O,
            listenOnDocumentBody: R,
            eventCapture: L,
            assetLoader: y,
            onLoad: D,
            stateMachine: b,
            artboardStateMachines: v,
        } = e,
        P = a.useContext(d.C),
        M = (0, o.Rs)(),
        U = (0, c.G9)().isWindowFocused?.() ?? M,
        [w, G] = (0, o.Xb)(3e4),
        [x, k] = a.useState(void 0),
        F = a.useMemo(() => {
            if (t && null != v) return v[p ?? ""];
        }, [t, v, p]),
        B = null != F,
        V = null != S || null != O,
        H = a.useRef(null),
        j = a.useRef(!1),
        { rive: W, RiveComponent: Y } = (0, l.useRive)(
            {
                eventTarget: I?.current,
                ...(null != n ? { riveFile: n } : { buffer: i }),
                autoplay: s,
                stateMachines: null != b ? [b] : B ? F : x,
                artboard: p,
                autoBind: !!B || !!V || void 0,
                enableAutoSleep: t,
                useOffscreenRenderer: !0,
                layout: new l.Layout({
                    fit: null != _ ? A[_] : l.Fit.Cover,
                    alignment: null != E ? h[E] : l.Alignment.Center,
                }),
                isTouchScrollEnabled: C,
                listenOnDocumentBody: R,
                eventCapture: L,
                assetLoader: y,
                onLoad: D,
            },
            { ...(t ? { shouldUseIntersectionObserver: !1 } : {}) },
        );
    (a.useImperativeHandle(
        T,
        () => ({
            play: () => {
                ((j.current = !1), W?.play());
            },
            pause: () => {
                ((j.current = !0), W?.pause());
            },
            stop: () => W?.stop(),
            getPlaybackState: () =>
                null == W
                    ? null
                    : {
                          isPlaying: W.isPlaying,
                          isPaused: W.isPaused,
                          isAutoSleeping: W.isAutoSleeping ?? !1,
                          isRenderScheduled: null != W.frameRequestId,
                          fps: W.fps,
                      },
            getProperties: () => {
                let e = W?.viewModelInstance,
                    t = (t, n) => {
                        let i = "enumType" === n ? "enum" : n;
                        return {
                            type: i,
                            value: e?.[i]?.(t)?.value,
                            values: "enum" === i ? e?.enum(t)?.values : void 0,
                        };
                    };
                return (
                    e?.properties.reduce(
                        (n, i) => (
                            "viewModel" === i.type &&
                                e.viewModel(i.name)?.properties.forEach((e) => {
                                    let r = `${i.name}/${e.name}`;
                                    n[r] = t(r, String(e.type));
                                }),
                            (n[i.name] = t(i.name, String(i.type))),
                            n
                        ),
                        {},
                    ) ?? {}
                );
            },
            getArtboards: () => {
                if (null == W) return [];
                let e = new Set(),
                    t = W.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let i = t.artboardByIndex(n);
                    e.add(i.name);
                }
                return Array.from(e);
            },
        }),
        [W],
    ),
        (function (e) {
            let t,
                {
                    rive: n,
                    artboard: i,
                    artboardProperties: r,
                    dataBinding: s,
                    dynamicDataBinding: o,
                    onDataBindingChange: u,
                } = e,
                _ = o ?? s,
                E = (0, l.useViewModel)(n);
            (0, l.useViewModelInstance)(E);
            let { theme: A, saturation: h } = (0, c.G9)(),
                { highContrastModeEnabled: f } = a.useContext(d.C),
                I = a.useRef({}),
                p =
                    ((t = a.useRef({})),
                    a.useCallback(async (e, n) => {
                        if ("string" != typeof e) return Promise.resolve(e);
                        {
                            let i;
                            if (null != t.current[e]) return Promise.resolve(t.current[e]);
                            try {
                                i = await fetch(e, { signal: n });
                            } catch (e) {
                                if (n?.aborted) return null;
                                throw e;
                            }
                            if (n?.aborted) return Promise.resolve(null);
                            let r = await i.arrayBuffer(),
                                a = await (0, l.decodeImage)(new Uint8Array(r));
                            return ((t.current[e] = a), a);
                        }
                    }, [])),
                m = a.useCallback((e, t) => {
                    let n = e?.[t];
                    return null == n ? null : "object" == typeof n && "value" in n ? n.value : n;
                }, []);
            ((function (e) {
                let { rive: t, artboard: n, artboardProperties: i, dynamicDataBinding: r, onDataBindingChange: s } = e,
                    l = null != r,
                    o = a.useCallback((e) => (l ? r?.[e]?.type : i[n ?? ""][e]), [l, r, i, n]);
                a.useEffect(() => {
                    if (null == t || null == s) return;
                    let e = [];
                    return (
                        Object.entries(s).forEach((n) => {
                            let [i, r] = n,
                                a = o(i);
                            if (null == a || null == r) return;
                            let s = t.viewModelInstance?.[a]?.(i);
                            null != s && (s.on(r), e.push([r, s]));
                        }),
                        () => {
                            e.forEach((e) => {
                                let [t, n] = e;
                                null != n && n.off(t);
                            });
                        }
                    );
                }, [t, s, o]);
            })({
                rive: n,
                artboard: i,
                artboardProperties: r,
                dynamicDataBinding: o,
                dataBinding: s,
                onDataBindingChange: u,
            }),
                a.useEffect(() => {
                    let e = new AbortController();
                    return (
                        !(async function () {
                            try {
                                await (async function () {
                                    if (null == n || null == n.viewModelInstance || null == _) return;
                                    let t = r[i ?? ""];
                                    for (let i of Object.entries(_)) {
                                        if (e.signal.aborted) return;
                                        let r = i[0],
                                            a = i[1],
                                            s = null != a && "object" == typeof a && "type" in a,
                                            l = s ? a.type : t[r],
                                            o = s ? a.value : a;
                                        switch (l) {
                                            case "color":
                                                if ("number" == typeof o) {
                                                    let e = n.viewModelInstance?.color(r);
                                                    null != e && (e.value = o);
                                                } else if ("object" == typeof o)
                                                    if ("resolve" in o) {
                                                        let [e, t, i, a] = o
                                                            .resolve({
                                                                theme: A,
                                                                saturation: h,
                                                                highContrastModeEnabled: f,
                                                            })
                                                            .rgba();
                                                        n.viewModelInstance?.color(r)?.rgba(e, t, i, 255 * a);
                                                    } else
                                                        n.viewModelInstance
                                                            ?.color(r)
                                                            ?.rgba(o.r, o.g, o.b, (o.a ?? 1) * 255);
                                                break;
                                            case "number":
                                                let d = n.viewModelInstance?.number(r);
                                                null != d && (d.value = o);
                                                break;
                                            case "boolean":
                                                let c = n.viewModelInstance?.boolean(r);
                                                null != c && (c.value = o);
                                                break;
                                            case "trigger":
                                                let u = null != o && ("boolean" == typeof o ? o : 0 !== o),
                                                    _ = m(I.current, r);
                                                (u && _ !== o && n.viewModelInstance?.trigger(r)?.trigger(),
                                                    (I.current[r] = o));
                                                break;
                                            case "string":
                                                let E = n.viewModelInstance?.string(r);
                                                null != E && (E.value = o);
                                                break;
                                            case "enum":
                                                let T = n.viewModelInstance?.enum(r);
                                                null != T && "string" == typeof o && (T.value = o);
                                                break;
                                            case "image":
                                                if (null != o) {
                                                    let t = await p(o, e.signal);
                                                    if (e.signal.aborted) return;
                                                    let i = n.viewModelInstance?.image(r);
                                                    null != i && (i.value = t);
                                                }
                                                break;
                                            case "artboard":
                                                let g = n.viewModelInstance?.artboard(r),
                                                    S = n.getBindableArtboard(o);
                                                null != g && null != S && (g.value = S);
                                                break;
                                            default:
                                                console.warn(`Unknown property type: ${l}`);
                                        }
                                    }
                                    (n.wakeFromAutoSleep?.(), n.isPlaying || (n.artboard?.advance(0), n.drawFrame()));
                                })();
                            } catch (e) {
                                if (!(e instanceof Error && "AbortError" === e.name)) throw e;
                            }
                        })(),
                        () => {
                            e.abort("New data binding applied - aborting previous image fetches.");
                        }
                    );
                }, [m, _, n, i, r, A, n?.viewModelInstance, h, f, p]));
        })({
            rive: W,
            artboard: p,
            artboardProperties: g,
            dataBinding: S,
            dynamicDataBinding: O,
            onDataBindingChange: N,
        }),
        a.useEffect(() => {
            if (null != W && "short-loop" === m && P.reducedMotion.enabled) {
                function e() {
                    null != W &&
                        W.isPlaying &&
                        (H.current = setTimeout(() => {
                            W.pause();
                        }, 5e3));
                }
                function t() {
                    clearTimeout(H.current);
                }
                return (
                    W.on(l.EventType.Play, e),
                    W.on(l.EventType.Pause, t),
                    W.on(l.EventType.Stop, t),
                    () => {
                        (W.off(l.EventType.Play, e), W.off(l.EventType.Pause, t), W.off(l.EventType.Stop, t));
                    }
                );
            }
        }, [W, m, P.reducedMotion.enabled]),
        a.useLayoutEffect(() => {
            if (null != W) {
                "layout" === _ && W.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != W.canvas &&
                        (W.resizeDrawingSurfaceToCanvas(),
                        W.isPlaying || (W.startRendering(), requestAnimationFrame(() => W.stopRendering())));
                }, 100);
                return () => clearTimeout(e);
            }
        }, [W, _]),
        a.useEffect(() => {
            if (null == W || !P.reducedMotion.enabled) return;
            let e = W.canvas;
            if (null == e) return;
            let t = new (e.ownerDocument.defaultView ?? window).ResizeObserver(() => {
                (W.resizeDrawingSurfaceToCanvas(),
                    W.isPlaying || (W.startRendering(), requestAnimationFrame(() => W.stopRendering())));
            });
            return (t.observe(e), () => t.disconnect());
        }, [W, P.reducedMotion.enabled]),
        a.useEffect(() => {
            B ||
                (null != W &&
                    null == x &&
                    null == b &&
                    (k(W.stateMachineNames),
                    W.reset({ stateMachines: W.stateMachineNames, autoplay: s, artboard: p, autoBind: !0 }),
                    W.setupRiveListeners()));
        }, [W, s, x, p, b, B]));
    let K = a.useRef(s);
    a.useEffect(() => {
        (s && !K.current && (j.current = !1), (K.current = s));
    }, [s]);
    let $ = a.useRef(0);
    return (
        a.useEffect(() => {
            if (null == W) return;
            let e = (t) => {
                null != t.data &&
                    "number" == typeof t.data &&
                    (($.current = t.data),
                    t.data > 0 &&
                        ("halt" === m && P.reducedMotion.enabled && W.isPlaying && W.pause(),
                        W.off(l.EventType.Advance, e)));
            };
            return (
                W.on(l.EventType.Advance, e),
                s && !j.current && W.play(),
                () => {
                    W.off(l.EventType.Advance, e);
                }
            );
        }, [W, P.reducedMotion.enabled, m, s]),
        a.useEffect(() => {
            G();
        }, [G, p, _, E, S, O, g]),
        !(function (e) {
            let {
                    rive: t,
                    autoplay: n,
                    isRiveWebPerfEnabled: i,
                    isFocused: r,
                    isUserIdle: s,
                    lastFrameRef: d,
                    isPausedByCallerRef: c,
                } = e,
                u = i ? t?.canvas : null,
                _ = (0, o.Cz)(u),
                E = r && !s && (!i || _),
                A = a.useRef(!1),
                h = a.useRef(null);
            a.useEffect(() => {
                if (null == t) return;
                t !== h.current && ((h.current = t), i && (A.current = n));
                let e = null,
                    r = c.current;
                return (
                    ((!E && A.current) || r) && t.isPlaying
                        ? d.current > 0
                            ? t.pause()
                            : ((e = (n) => {
                                  "number" != typeof n.data ||
                                      n.data <= 0 ||
                                      (null != e && t.off(l.EventType.Advance, e),
                                      (!E || c.current) && t.isPlaying && t.pause());
                              }),
                              t.on(l.EventType.Advance, e))
                        : E && !r && !t.isPlaying && A.current && t.play(),
                    () => {
                        (null != e && t.off(l.EventType.Advance, e),
                            null != t && E && (A.current = null != t.frameRequestId || !0 === t.isAutoSleeping));
                    }
                );
            }, [t, E, d, n, i, c]);
        })({
            rive: W,
            autoplay: s,
            isRiveWebPerfEnabled: t,
            isFocused: U,
            isUserIdle: w,
            lastFrameRef: $,
            isPausedByCallerRef: j,
        }),
        (0, r.jsx)(Y, { className: u, style: f, "aria-hidden": !0 })
    );
}
l.RuntimeLoader.setWasmUrl(s);
