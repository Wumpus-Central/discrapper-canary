"use strict";
n.d(t, { w: () => p });
var r = n(627968),
    i = n(64700),
    s = n(389544),
    a = n(647307),
    o = n(128080),
    l = n.n(o),
    u = n(941861),
    c = n(844222),
    d = n(460890),
    _ = n(605752),
    f = n(270597);
function p(e) {
    let {
            buffer: t,
            autoplay: n = !0,
            className: s,
            fit: o,
            alignment: l,
            style: p,
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
            assetLoader: R,
            onLoad: O,
            stateMachine: b,
            allowAnimationWhileUnfocused: D = !1,
            defaultViewModelInstance: L,
        } = e,
        w = i.useContext(c.C),
        M = (0, u.R)(),
        P = (0, d.G9)().isWindowFocused?.() ?? M,
        [x, k] = (0, u.X)(3e4),
        [U, G] = i.useState(void 0),
        F = i.useRef(null),
        {
            rive: V,
            RiveComponent: B,
            container: H,
        } = (0, a.useRive)({
            eventTarget: m?.current,
            buffer: t,
            autoplay: n,
            stateMachines: null != b ? [b] : U,
            artboard: E,
            useOffscreenRenderer: !0,
            layout: new a.Layout({
                fit: null != o ? _.i[o] : a.Fit.Cover,
                alignment: null != l ? _.y[l] : a.Alignment.Center,
            }),
            isTouchScrollEnabled: y,
            listenOnDocumentBody: N,
            eventCapture: C,
            assetLoader: R,
            onLoad: O,
            autoBind: !1,
        }),
        [j, Y] = i.useState({ current: null }),
        W = i.useRef(null);
    i.useEffect(
        () => (
            null == j.current && (W.current = setTimeout(() => Y({ current: H }), 0)), () => clearTimeout(W.current)
        ),
        [j, H],
    ),
        i.useImperativeHandle(
            A,
            () => ({
                play: () => V?.play(),
                pause: () => V?.pause(),
                stop: () => V?.stop(),
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
                        let r = t.artboardByIndex(n);
                        e.add(r.name);
                    }
                    return Array.from(e);
                },
            }),
            [V],
        );
    let K = i.useMemo(() => I?.[E ?? ""]?.reducedMotion != null, [E, I]),
        { currentColor: $ } = (0, f.J)({
            rive: V,
            artboard: E,
            artboardProperties: I,
            dataBinding: T,
            dynamicDataBinding: v,
            onDataBindingChange: S,
            elementRef: j,
            eventTargetRef: m ?? j,
            isFocused: P,
            defaultViewModelInstance: L,
            supportsReducedMotionNatively: K,
            allowAnimationWhileUnfocused: D,
        });
    i.useEffect(() => {
        if (!K && null != V && "short-loop" === g && w.reducedMotion.enabled) {
            let e = () => {
                    V.isPlaying &&
                        (F.current = setTimeout(() => {
                            V.pause();
                        }, 5e3));
                },
                t = () => {
                    clearTimeout(F.current);
                };
            return (
                V.on(a.EventType.Play, e),
                V.on(a.EventType.Pause, t),
                V.on(a.EventType.Stop, t),
                () => {
                    V.off(a.EventType.Play, e), V.off(a.EventType.Pause, t), V.off(a.EventType.Stop, t);
                }
            );
        }
    }, [V, g, w.reducedMotion.enabled, K]),
        i.useLayoutEffect(() => {
            if (null != V) {
                "layout" === o && V.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != V.canvas && V.resizeDrawingSurfaceToCanvas();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [V, o]),
        i.useEffect(() => {
            null != V &&
                null == U &&
                null == b &&
                (G(V.stateMachineNames),
                V.reset({ stateMachines: V.stateMachineNames, autoplay: n, artboard: E, autoBind: !1 }),
                V.setupRiveListeners());
        }, [V, n, U, E, b]);
    let z = i.useRef(0);
    return (
        i.useEffect(() => {
            if (null == V) return;
            let e = (t) => {
                null != t.data &&
                    "number" == typeof t.data &&
                    ((z.current = t.data),
                    t.data > 0 &&
                        ("halt" === g && w.reducedMotion.enabled && V.isPlaying && !K && V.pause(),
                        V.off(a.EventType.Advance, e)));
            };
            return (
                V.on(a.EventType.Advance, e),
                n && V.play(),
                () => {
                    V.off(a.EventType.Advance, e);
                }
            );
        }, [V, w.reducedMotion.enabled, g, n, K]),
        i.useEffect(() => {
            k();
        }, [k, E, o, l, T, v, I]),
        h({
            rive: V,
            isFocused: P,
            isUserIdle: x,
            allowAnimationWhileUnfocused: D,
            lastFrameRef: z,
            dataBinding: T,
            currentColor: $,
        }),
        (0, r.jsx)(B, { className: s, style: p })
    );
}
function h(e) {
    let {
            rive: t,
            isFocused: n,
            isUserIdle: r,
            allowAnimationWhileUnfocused: s,
            lastFrameRef: a,
            dataBinding: o,
            currentColor: l,
        } = e,
        u = i.useRef(!1),
        [c, d] = i.useState(!1),
        _ = i.useRef(null),
        f = m(o);
    i.useEffect(
        () => (
            s &&
                (d(!0),
                (_.current = setTimeout(() => {
                    d(!1);
                }, 1e3))),
            () => {
                d(!1), null != _.current && clearTimeout(_.current);
            }
        ),
        [f, l, s],
    ),
        i.useEffect(() => {
            if (null == t) return;
            let e = (n && !r) || c;
            return (
                !e && u.current && t.isPlaying && a.current > 0
                    ? t.pause()
                    : e && !t.isPlaying && u.current && t.play(),
                () => {
                    null != t && e && (u.current = null != t.frameRequestId);
                }
            );
        }, [t, n, r, c, a]);
}
function m(e) {
    let [t, n] = i.useState(0),
        r = i.useRef(e);
    return (
        i.useEffect(() => {
            l()(r.current, e) || ((r.current = e), n((e) => e + 1));
        }),
        t
    );
}
a.RuntimeLoader.setWasmUrl(s);
