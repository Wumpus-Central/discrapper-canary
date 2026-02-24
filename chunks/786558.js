"use strict";
n.d(t, { w: () => _ });
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
    let {
            buffer: t,
            autoplay: n = !0,
            className: s,
            fit: _,
            alignment: p,
            style: h,
            eventTargetRef: m,
            artboard: E,
            withReducedMotion: g = "halt",
            ref: A,
            artboardProperties: I,
            dataBinding: T,
            onDataBindingChange: S,
            touchScrollEnabled: y = !0,
            dynamicDataBinding: v,
            listenOnDocumentBody: N,
            eventCapture: C,
            assetLoader: b,
            onLoad: R,
            stateMachine: O,
            allowAnimationWhileUnfocused: D = !1,
            defaultViewModelInstance: L,
        } = e,
        w = i.useContext(l.C),
        x = (0, o.R)(),
        M = (0, u.G9)().isWindowFocused?.() ?? x,
        [P, k] = i.useState(void 0),
        U = i.useRef(null),
        { rive: G, RiveComponent: F } = (0, a.useRive)({
            eventTarget: m?.current,
            buffer: t,
            autoplay: n,
            stateMachines: null != O ? [O] : P,
            artboard: E,
            useOffscreenRenderer: !0,
            layout: new a.Layout({
                fit: null != _ ? c.i[_] : a.Fit.Cover,
                alignment: null != p ? c.y[p] : a.Alignment.Center,
            }),
            isTouchScrollEnabled: y,
            listenOnDocumentBody: N,
            eventCapture: C,
            assetLoader: b,
            onLoad: R,
            autoBind: !1,
        }),
        V = i.useRef(null);
    i.useImperativeHandle(
        A,
        () => ({
            play: () => G?.play(),
            pause: () => G?.pause(),
            stop: () => G?.stop(),
            getProperties: () =>
                G?.viewModelInstance?.properties.reduce(
                    (e, t) => (
                        "viewModel" === t.type &&
                            G?.viewModelInstance?.viewModel(t.name)?.properties.forEach((n) => {
                                e[t.name + "/" + n.name] = {
                                    type: n.type,
                                    value: G?.viewModelInstance?.[n.type]?.(`${t.name}/${n.name}`)?.value,
                                };
                            }),
                        (e[t.name] = { type: t.type, value: G?.viewModelInstance?.[t.type]?.(t.name)?.value }),
                        e
                    ),
                    {},
                ) ?? {},
            getArtboards: () => {
                if (null == G) return [];
                let e = new Set(),
                    t = G.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let r = t.artboardByIndex(n);
                    e.add(r.name);
                }
                return Array.from(e);
            },
        }),
        [G],
    );
    let B = i.useMemo(() => I?.[E ?? ""]?.reducedMotion != null, [E, I]);
    (0, d.J)({
        rive: G,
        artboard: E,
        artboardProperties: I,
        dataBinding: T,
        dynamicDataBinding: v,
        onDataBindingChange: S,
        elementRef: V,
        eventTargetRef: m ?? V ?? null,
        isFocused: M,
        defaultViewModelInstance: L,
        supportsReducedMotionNatively: B,
    }),
        i.useEffect(() => {
            if (!B && null != G && "short-loop" === g && w.reducedMotion.enabled) {
                let e = () => {
                        G.isPlaying &&
                            (U.current = setTimeout(() => {
                                G.pause();
                            }, 5e3));
                    },
                    t = () => {
                        clearTimeout(U.current);
                    };
                return (
                    G.on(a.EventType.Play, e),
                    G.on(a.EventType.Pause, t),
                    G.on(a.EventType.Stop, t),
                    () => {
                        G.off(a.EventType.Play, e), G.off(a.EventType.Pause, t), G.off(a.EventType.Stop, t);
                    }
                );
            }
        }, [G, g, w.reducedMotion.enabled, B]),
        i.useLayoutEffect(() => {
            if (null != G && "layout" === _) {
                G.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != G.canvas && G.resizeDrawingSurfaceToCanvas();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [G, _]),
        i.useEffect(() => {
            null != G &&
                null == P &&
                null == O &&
                (k(G.stateMachineNames),
                G.reset({ stateMachines: G.stateMachineNames, autoplay: n, artboard: E, autoBind: !1 }),
                G.setupRiveListeners());
        }, [G, n, P, E, O]);
    let H = i.useRef(0);
    return (
        i.useEffect(() => {
            if (null == G) return;
            let e = (t) => {
                null != t.data &&
                    "number" == typeof t.data &&
                    ((H.current = t.data),
                    t.data > 0 &&
                        ("halt" === g && w.reducedMotion.enabled && G.isPlaying && !B && G.pause(),
                        G.off(a.EventType.Advance, e)));
            };
            return (
                G.on(a.EventType.Advance, e),
                n && G.play(),
                () => {
                    G.off(a.EventType.Advance, e);
                }
            );
        }, [G, w.reducedMotion.enabled, g, n, B]),
        f({ rive: G, allowAnimationWhileUnfocused: D, lastFrameRef: H, dataBinding: T }),
        (0, r.jsx)("div", { ref: V, children: (0, r.jsx)(F, { className: s, style: h }) })
    );
}
function f(e) {
    let { rive: t, allowAnimationWhileUnfocused: n, lastFrameRef: r, dataBinding: s } = e,
        a = (0, o.R)(),
        l = (0, u.G9)().isWindowFocused?.() ?? a,
        c = i.useRef(!1),
        [d, _] = i.useState(!1),
        f = i.useRef(null);
    i.useEffect(
        () => (
            n &&
                (_(!0),
                (f.current = setTimeout(() => {
                    _(!1);
                }, 1e3))),
            () => {
                _(!1), null != f.current && clearTimeout(f.current);
            }
        ),
        [s, n],
    ),
        i.useEffect(() => {
            if (null == t) return;
            let e = l || d;
            return (
                !e && c.current && t.isPlaying && r.current > 0
                    ? t.pause()
                    : e && !t.isPlaying && c.current && t.play(),
                () => {
                    null != t && e && (c.current = null != t.frameRequestId);
                }
            );
        }, [t, l, d, r]);
}
a.RuntimeLoader.setWasmUrl(s);
