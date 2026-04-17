"use strict";
n.d(t, { w: () => f });
var r = n(627968),
    i = n(64700),
    s = n(389544),
    a = n(647307),
    o = n(941861),
    l = n(844222),
    u = n(460890),
    c = n(605752),
    d = n(270597);
function _(e) {
    let t;
    try {
        t = JSON.stringify(e);
    } catch {
        t = e;
    }
    return i.useMemo(() => e, [t]);
}
function f(e) {
    let {
            buffer: t,
            autoplay: n = !0,
            className: s,
            fit: f,
            alignment: h,
            style: E,
            eventTargetRef: g,
            artboard: A,
            withReducedMotion: I = "halt",
            ref: T,
            artboardProperties: S,
            dataBinding: y,
            onDataBindingChange: v,
            touchScrollEnabled: N = !0,
            dynamicDataBinding: C,
            listenOnDocumentBody: R,
            eventCapture: O,
            assetLoader: b,
            onLoad: D,
            stateMachine: L,
            allowAnimationWhileUnfocused: w = !1,
            autoPause: M = !1,
            defaultViewModelInstance: P,
        } = e,
        x = _(y),
        k = _(C),
        U = i.useContext(l.C),
        G = (0, o.R)(),
        F = (0, u.G9)().isWindowFocused?.() ?? G,
        [V, B] = (0, o.X)(3e4),
        [H, j] = i.useState(void 0),
        Y = i.useRef(null),
        {
            rive: W,
            RiveComponent: K,
            container: $,
        } = (0, a.useRive)({
            eventTarget: g?.current,
            buffer: t,
            autoplay: n,
            stateMachines: null != L ? [L] : H,
            artboard: A,
            useOffscreenRenderer: !0,
            layout: new a.Layout({
                fit: null != f ? c.i[f] : a.Fit.Cover,
                alignment: null != h ? c.y[h] : a.Alignment.Center,
            }),
            isTouchScrollEnabled: N,
            listenOnDocumentBody: R,
            eventCapture: O,
            assetLoader: b,
            onLoad: D,
            autoBind: !1,
        }),
        [z, q] = i.useState({ current: null }),
        Z = i.useRef(null);
    i.useEffect(
        () => (
            null == z.current && (Z.current = setTimeout(() => q({ current: $ }), 0)), () => clearTimeout(Z.current)
        ),
        [z, $],
    ),
        i.useImperativeHandle(
            T,
            () => ({
                play: () => W?.play(),
                pause: () => W?.pause(),
                stop: () => W?.stop(),
                getProperties: () =>
                    W?.viewModelInstance?.properties.reduce(
                        (e, t) => (
                            "viewModel" === t.type &&
                                W?.viewModelInstance?.viewModel(t.name)?.properties.forEach((n) => {
                                    e[t.name + "/" + n.name] = {
                                        type: n.type,
                                        value: W?.viewModelInstance?.[n.type]?.(`${t.name}/${n.name}`)?.value,
                                    };
                                }),
                            (e[t.name] = { type: t.type, value: W?.viewModelInstance?.[t.type]?.(t.name)?.value }),
                            e
                        ),
                        {},
                    ) ?? {},
                getArtboards: () => {
                    if (null == W) return [];
                    let e = new Set(),
                        t = W.riveFile.getInstance();
                    for (let n = 0; n < t.artboardCount(); n++) {
                        let r = t.artboardByIndex(n);
                        e.add(r.name);
                    }
                    return Array.from(e);
                },
            }),
            [W],
        );
    let X = i.useMemo(() => S?.[A ?? ""]?.reducedMotion != null, [A, S]),
        { currentColor: Q } = (0, d.J)({
            rive: W,
            artboard: A,
            artboardProperties: S,
            dataBinding: x,
            dynamicDataBinding: k,
            onDataBindingChange: v,
            elementRef: z,
            eventTargetRef: g ?? z,
            isFocused: F,
            defaultViewModelInstance: P,
            supportsReducedMotionNatively: X,
            allowAnimationWhileUnfocused: w,
        });
    i.useEffect(() => {
        if (!X && null != W && "short-loop" === I && U.reducedMotion.enabled) {
            let e = () => {
                    W.isPlaying &&
                        (Y.current = setTimeout(() => {
                            W.pause();
                        }, 5e3));
                },
                t = () => {
                    clearTimeout(Y.current);
                };
            return (
                W.on(a.EventType.Play, e),
                W.on(a.EventType.Pause, t),
                W.on(a.EventType.Stop, t),
                () => {
                    W.off(a.EventType.Play, e), W.off(a.EventType.Pause, t), W.off(a.EventType.Stop, t);
                }
            );
        }
    }, [W, I, U.reducedMotion.enabled, X]),
        i.useLayoutEffect(() => {
            if (null != W) {
                "layout" === f && W.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != W.canvas && W.resizeDrawingSurfaceToCanvas();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [W, f]),
        i.useEffect(() => {
            null != W &&
                null == H &&
                null == L &&
                (j(W.stateMachineNames),
                W.reset({ stateMachines: W.stateMachineNames, autoplay: n, artboard: A, autoBind: !1 }),
                W.setupRiveListeners());
        }, [W, n, H, A, L]);
    let J = i.useRef(0);
    i.useEffect(() => {
        if (null == W) return;
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((J.current = t.data),
                t.data > 0 &&
                    ("halt" === I && U.reducedMotion.enabled && W.isPlaying && !X && W.pause(),
                    W.off(a.EventType.Advance, e)));
        };
        return (
            W.on(a.EventType.Advance, e),
            n && W.play(),
            () => {
                W.off(a.EventType.Advance, e);
            }
        );
    }, [W, U.reducedMotion.enabled, I, n, X]),
        i.useEffect(() => {
            B();
        }, [B, A, f, h, x, k, S]);
    let ee = "halt" === I && U.reducedMotion.enabled && !X;
    return (
        p({
            rive: W,
            isFocused: F,
            isUserIdle: V,
            allowAnimationWhileUnfocused: w,
            lastFrameRef: J,
            dataBinding: x,
            currentColor: Q,
            shouldHaltForReducedMotion: ee,
        }),
        m({ rive: W, autoPause: M, containerRef: z, dataBinding: x, currentColor: Q, shouldHaltForReducedMotion: ee }),
        (0, r.jsx)(K, { className: s, style: E })
    );
}
function p(e) {
    let {
            rive: t,
            isFocused: n,
            isUserIdle: r,
            allowAnimationWhileUnfocused: s,
            lastFrameRef: a,
            dataBinding: o,
            currentColor: l,
            shouldHaltForReducedMotion: u,
        } = e,
        c = i.useRef(!1),
        [d, _] = i.useState(!1),
        f = i.useRef(null);
    i.useEffect(
        () => (
            s &&
                (_(!0),
                (f.current = setTimeout(() => {
                    _(!1);
                }, 1e3))),
            () => {
                _(!1), null != f.current && clearTimeout(f.current);
            }
        ),
        [o, l, s],
    ),
        i.useEffect(() => {
            if (null == t) return;
            let e = (n && !r) || d;
            return (
                !e && c.current && t.isPlaying && a.current > 0
                    ? t.pause()
                    : e && !t.isPlaying && c.current && !u && t.play(),
                () => {
                    null != t && e && (c.current = null != t.frameRequestId);
                }
            );
        }, [t, n, r, d, a, u]);
}
a.RuntimeLoader.setWasmUrl(s);
let h = 1e3;
function m(e) {
    let { rive: t, autoPause: n, containerRef: r, dataBinding: s, currentColor: a, shouldHaltForReducedMotion: o } = e,
        l = i.useRef(null),
        u = i.useCallback(() => {
            null != l.current && clearTimeout(l.current),
                null != t &&
                    n &&
                    (t.isPlaying || o || t.play(),
                    (l.current = setTimeout(() => {
                        null != t && t.isPlaying && t.pause();
                    }, h)));
        }, [t, n, s, a, o]);
    i.useEffect(() => {
        if (null != t && n)
            return (
                u(),
                () => {
                    null != l.current && clearTimeout(l.current);
                }
            );
    }, [t, n, u]),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = r.current;
            if (null == e) return;
            let i = () => {
                    null == t || t.isPlaying || o || t.play(),
                        null != l.current && (clearTimeout(l.current), (l.current = null));
                },
                s = () => {
                    u();
                };
            return (
                e.addEventListener("mouseenter", i, !0),
                e.addEventListener("mousedown", i, !0),
                e.addEventListener("keydown", i, !0),
                e.addEventListener("focus", i, !0),
                e.addEventListener("mouseleave", s, !0),
                e.addEventListener("mouseup", s, !0),
                e.addEventListener("keyup", s, !0),
                e.addEventListener("blur", s, !0),
                () => {
                    e.removeEventListener("mouseenter", i, !0),
                        e.removeEventListener("mousedown", i, !0),
                        e.removeEventListener("keydown", i, !0),
                        e.removeEventListener("focus", i, !0),
                        e.removeEventListener("mouseleave", s, !0),
                        e.removeEventListener("mouseup", s, !0),
                        e.removeEventListener("keyup", s, !0),
                        e.removeEventListener("blur", s, !0),
                        null != l.current && clearTimeout(l.current);
                }
            );
        }, [t, n, r, u, o]);
}
