n.d(t, { w: () => h });
var i = n(477900),
    r = n(582128),
    a = n(895975),
    s = n(971940),
    l = n(941861),
    o = n(844222),
    d = n(460890),
    c = n(282802),
    u = n.n(c);
function _(e) {
    let t = {};
    for (let n of Object.keys(e)) t[u()(n)] = e[n];
    return t;
}
let E = _(s.Fit),
    A = _(s.Alignment);
function h(e) {
    let {
            buffer: t,
            autoplay: n = !0,
            className: a,
            fit: c,
            alignment: u,
            style: _,
            eventTargetRef: h,
            artboard: f,
            withReducedMotion: I = "halt",
            ref: p,
            artboardProperties: T,
            dataBinding: m,
            onDataBindingChange: g,
            touchScrollEnabled: S = !0,
            dynamicDataBinding: N,
            listenOnDocumentBody: C,
            eventCapture: O,
            assetLoader: R,
            onLoad: L,
            stateMachine: y,
            artboardStateMachines: D,
        } = e,
        v = r.useContext(o.C),
        b = (0, l.Rs)(),
        M = (0, d.G9)().isWindowFocused?.() ?? b,
        [P, U] = (0, l.Xb)(3e4),
        w = (function () {
            let e = (0, d.G9)().experiments?.enabledExperiments,
                [t] = r.useState(() => e?.includes("rive-web-perf") ?? !1);
            return t;
        })(),
        [G, x] = r.useState(void 0),
        k = r.useMemo(() => {
            if (w && null != D) return D[f ?? ""];
        }, [w, D, f]),
        F = null != k,
        B = r.useRef(null),
        { rive: V, RiveComponent: H } = (0, s.useRive)(
            {
                eventTarget: h?.current,
                buffer: t,
                autoplay: n,
                stateMachines: null != y ? [y] : F ? k : G,
                artboard: f,
                autoBind: !!F || void 0,
                enableAutoSleep: w,
                useOffscreenRenderer: !0,
                layout: new s.Layout({
                    fit: null != c ? E[c] : s.Fit.Cover,
                    alignment: null != u ? A[u] : s.Alignment.Center,
                }),
                isTouchScrollEnabled: S,
                listenOnDocumentBody: C,
                eventCapture: O,
                assetLoader: R,
                onLoad: L,
            },
            { ...(w ? { shouldUseIntersectionObserver: !1 } : {}) },
        );
    (r.useImperativeHandle(
        p,
        () => ({
            play: () => V?.play(),
            pause: () => V?.pause(),
            stop: () => V?.stop(),
            getPlaybackState: () =>
                null == V
                    ? null
                    : {
                          isPlaying: V.isPlaying,
                          isPaused: V.isPaused,
                          isAutoSleeping: V.isAutoSleeping ?? !1,
                          isRenderScheduled: null != V.frameRequestId,
                          fps: V.fps,
                      },
            getProperties: () =>
                V?.viewModelInstance?.properties.reduce(
                    (e, t) => (
                        "viewModel" === t.type &&
                            V?.viewModelInstance?.viewModel(t.name)?.properties.forEach((n) => {
                                e[t.name + "/" + n.name] = {
                                    type: n.type,
                                    value: V?.viewModelInstance?.[n.type]?.(`${t.name}/${n.name}`)?.value,
                                };
                            }),
                        (e[t.name] = { type: t.type, value: V?.viewModelInstance?.[t.type]?.(t.name)?.value }),
                        e
                    ),
                    {},
                ) ?? {},
            getArtboards: () => {
                if (null == V) return [];
                let e = new Set(),
                    t = V.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let i = t.artboardByIndex(n);
                    e.add(i.name);
                }
                return Array.from(e);
            },
        }),
        [V],
    ),
        (function (e) {
            let t,
                {
                    rive: n,
                    artboard: i,
                    artboardProperties: a,
                    dataBinding: l,
                    dynamicDataBinding: c,
                    onDataBindingChange: u,
                } = e,
                _ = c ?? l,
                E = (0, s.useViewModel)(n);
            (0, s.useViewModelInstance)(E);
            let { theme: A, saturation: h } = (0, d.G9)(),
                { highContrastModeEnabled: f } = r.useContext(o.C),
                I = r.useRef({}),
                p =
                    ((t = r.useRef({})),
                    r.useCallback(async (e, n) => {
                        if ("string" != typeof e) return Promise.resolve(e);
                        {
                            if (null != t.current[e]) return Promise.resolve(t.current[e]);
                            let i = await fetch(e, { signal: n }).catch((e) => {
                                if (n?.aborted) return Promise.resolve(null);
                                throw e;
                            });
                            if (null == i || n?.aborted) return Promise.resolve(null);
                            let r = await i.arrayBuffer(),
                                a = await (0, s.decodeImage)(new Uint8Array(r));
                            return ((t.current[e] = a), a);
                        }
                    }, [])),
                T = r.useCallback((e, t) => {
                    let n = e?.[t];
                    return null == n ? null : "object" == typeof n && "value" in n ? n.value : n;
                }, []);
            ((function (e) {
                let { rive: t, artboard: n, artboardProperties: i, dynamicDataBinding: a, onDataBindingChange: s } = e,
                    l = null != a,
                    o = r.useCallback((e) => (l ? a?.[e]?.type : i[n ?? ""][e]), [l, a, i, n]);
                r.useEffect(() => {
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
                artboardProperties: a,
                dynamicDataBinding: c,
                dataBinding: l,
                onDataBindingChange: u,
            }),
                r.useEffect(() => {
                    let e = new AbortController();
                    return (
                        (async function () {
                            if (null == n || null == n.viewModelInstance || null == _) return;
                            let t = a[i ?? ""];
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
                                                    .resolve({ theme: A, saturation: h, highContrastModeEnabled: f })
                                                    .rgba();
                                                n.viewModelInstance?.color(r)?.rgba(e, t, i, 255 * a);
                                            } else n.viewModelInstance?.color(r)?.rgba(o.r, o.g, o.b, (o.a ?? 1) * 255);
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
                                            _ = T(I.current, r);
                                        (u && _ !== o && n.viewModelInstance?.trigger(r)?.trigger(),
                                            (I.current[r] = o));
                                        break;
                                    case "string":
                                        let E = n.viewModelInstance?.string(r);
                                        null != E && (E.value = o);
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
                                        let m = n.viewModelInstance?.artboard(r),
                                            g = n.getBindableArtboard(o);
                                        null != m && null != g && (m.value = g);
                                        break;
                                    default:
                                        console.warn(`Unknown property type: ${l}`);
                                }
                            }
                            n.wakeFromAutoSleep?.();
                        })().catch((e) => {
                            if ("AbortError" !== e.name) throw e;
                        }),
                        () => {
                            e.abort("New data binding applied - aborting previous image fetches.");
                        }
                    );
                }, [T, _, n, i, a, A, n?.viewModelInstance, h, f, p]));
        })({
            rive: V,
            artboard: f,
            artboardProperties: T,
            dataBinding: m,
            dynamicDataBinding: N,
            onDataBindingChange: g,
        }),
        r.useEffect(() => {
            if (null != V && "short-loop" === I && v.reducedMotion.enabled) {
                function e() {
                    null != V &&
                        V.isPlaying &&
                        (B.current = setTimeout(() => {
                            V.pause();
                        }, 5e3));
                }
                function t() {
                    clearTimeout(B.current);
                }
                return (
                    V.on(s.EventType.Play, e),
                    V.on(s.EventType.Pause, t),
                    V.on(s.EventType.Stop, t),
                    () => {
                        (V.off(s.EventType.Play, e), V.off(s.EventType.Pause, t), V.off(s.EventType.Stop, t));
                    }
                );
            }
        }, [V, I, v.reducedMotion.enabled]),
        r.useLayoutEffect(() => {
            if (null != V) {
                "layout" === c && V.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != V.canvas &&
                        (V.resizeDrawingSurfaceToCanvas(),
                        V.isPlaying || (V.startRendering(), requestAnimationFrame(() => V.stopRendering())));
                }, 100);
                return () => clearTimeout(e);
            }
        }, [V, c]),
        r.useEffect(() => {
            if (null == V || !v.reducedMotion.enabled) return;
            let e = V.canvas;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                (V.resizeDrawingSurfaceToCanvas(),
                    V.isPlaying || (V.startRendering(), requestAnimationFrame(() => V.stopRendering())));
            });
            return (t.observe(e), () => t.disconnect());
        }, [V, v.reducedMotion.enabled]),
        r.useEffect(() => {
            F ||
                (null != V &&
                    null == G &&
                    null == y &&
                    (x(V.stateMachineNames),
                    V.reset({ stateMachines: V.stateMachineNames, autoplay: n, artboard: f, autoBind: !0 }),
                    V.setupRiveListeners()));
        }, [V, n, G, f, y, F]));
    let j = r.useRef(0);
    return (
        r.useEffect(() => {
            if (null == V) return;
            let e = (t) => {
                null != t.data &&
                    "number" == typeof t.data &&
                    ((j.current = t.data),
                    t.data > 0 &&
                        ("halt" === I && v.reducedMotion.enabled && V.isPlaying && V.pause(),
                        V.off(s.EventType.Advance, e)));
            };
            return (
                V.on(s.EventType.Advance, e),
                n && V.play(),
                () => {
                    V.off(s.EventType.Advance, e);
                }
            );
        }, [V, v.reducedMotion.enabled, I, n]),
        r.useEffect(() => {
            U();
        }, [U, f, c, u, m, N, T]),
        !(function (e) {
            let { rive: t, autoplay: n, isRiveWebPerfEnabled: i, isFocused: a, isUserIdle: o, lastFrameRef: d } = e,
                c = i ? t?.canvas : null,
                u = (0, l.Cz)(c),
                _ = a && !o && (!i || u),
                E = r.useRef(!1),
                A = r.useRef(null);
            r.useEffect(() => {
                if (null == t) return;
                t !== A.current && ((A.current = t), i && (E.current = n));
                let e = null;
                return (
                    !_ && E.current && t.isPlaying
                        ? d.current > 0
                            ? t.pause()
                            : ((e = (n) => {
                                  "number" == typeof n.data &&
                                      !(n.data <= 0) &&
                                      (null != e && t.off(s.EventType.Advance, e), t.isPlaying && t.pause());
                              }),
                              t.on(s.EventType.Advance, e))
                        : _ && !t.isPlaying && E.current && t.play(),
                    () => {
                        (null != e && t.off(s.EventType.Advance, e),
                            null != t && _ && (E.current = null != t.frameRequestId || !0 === t.isAutoSleeping));
                    }
                );
            }, [t, _, d, n, i]);
        })({ rive: V, autoplay: n, isRiveWebPerfEnabled: w, isFocused: M, isUserIdle: P, lastFrameRef: j }),
        (0, i.jsx)(H, { className: a, style: _, "aria-hidden": !0 })
    );
}
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(321073), s.RuntimeLoader.setWasmUrl(a));
