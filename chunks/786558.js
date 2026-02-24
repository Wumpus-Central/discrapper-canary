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
            alignment: f,
            style: p,
            eventTargetRef: h,
            artboard: m,
            withReducedMotion: E = "halt",
            ref: g,
            artboardProperties: A,
            dataBinding: I,
            onDataBindingChange: T,
            touchScrollEnabled: S = !0,
            dynamicDataBinding: y,
            listenOnDocumentBody: v,
            eventCapture: N,
            assetLoader: C,
            onLoad: b,
            stateMachine: R,
        } = e,
        O = i.useContext(l.C),
        D = (0, o.R)(),
        L = (0, u.G9)().isWindowFocused?.() ?? D,
        [w, x] = i.useState(void 0),
        M = i.useRef(null),
        { rive: P, RiveComponent: k } = (0, a.useRive)({
            eventTarget: h?.current,
            buffer: t,
            autoplay: n,
            stateMachines: null != R ? [R] : w,
            artboard: m,
            useOffscreenRenderer: !0,
            layout: new a.Layout({
                fit: null != _ ? c.i[_] : a.Fit.Cover,
                alignment: null != f ? c.y[f] : a.Alignment.Center,
            }),
            isTouchScrollEnabled: S,
            listenOnDocumentBody: v,
            eventCapture: N,
            assetLoader: C,
            onLoad: b,
        });
    i.useImperativeHandle(
        g,
        () => ({
            play: () => P?.play(),
            pause: () => P?.pause(),
            stop: () => P?.stop(),
            getProperties: () =>
                P?.viewModelInstance?.properties.reduce(
                    (e, t) => (
                        "viewModel" === t.type &&
                            P?.viewModelInstance?.viewModel(t.name)?.properties.forEach((n) => {
                                e[t.name + "/" + n.name] = {
                                    type: n.type,
                                    value: P?.viewModelInstance?.[n.type]?.(`${t.name}/${n.name}`)?.value,
                                };
                            }),
                        (e[t.name] = { type: t.type, value: P?.viewModelInstance?.[t.type]?.(t.name)?.value }),
                        e
                    ),
                    {},
                ) ?? {},
            getArtboards: () => {
                if (null == P) return [];
                let e = new Set(),
                    t = P.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let r = t.artboardByIndex(n);
                    e.add(r.name);
                }
                return Array.from(e);
            },
        }),
        [P],
    ),
        (0, d.J)({
            rive: P,
            artboard: m,
            artboardProperties: A,
            dataBinding: I,
            dynamicDataBinding: y,
            onDataBindingChange: T,
        }),
        i.useEffect(() => {
            if (null != P && "short-loop" === E && O.reducedMotion.enabled) {
                let e = () => {
                        P.isPlaying &&
                            (M.current = setTimeout(() => {
                                P.pause();
                            }, 5e3));
                    },
                    t = () => {
                        clearTimeout(M.current);
                    };
                return (
                    P.on(a.EventType.Play, e),
                    P.on(a.EventType.Pause, t),
                    P.on(a.EventType.Stop, t),
                    () => {
                        P.off(a.EventType.Play, e), P.off(a.EventType.Pause, t), P.off(a.EventType.Stop, t);
                    }
                );
            }
        }, [P, E, O.reducedMotion.enabled]),
        i.useLayoutEffect(() => {
            if (null != P && "layout" === _) {
                P.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != P.canvas && P.resizeDrawingSurfaceToCanvas();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [P, _]),
        i.useEffect(() => {
            null != P &&
                null == w &&
                null == R &&
                (x(P.stateMachineNames),
                P.reset({ stateMachines: P.stateMachineNames, autoplay: n, artboard: m, autoBind: !0 }),
                P.setupRiveListeners());
        }, [P, n, w, m, R]);
    let U = i.useRef(0);
    i.useEffect(() => {
        if (null == P) return;
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((U.current = t.data),
                t.data > 0 &&
                    ("halt" === E && O.reducedMotion.enabled && P.isPlaying && P.pause(),
                    P.off(a.EventType.Advance, e)));
        };
        return (
            P.on(a.EventType.Advance, e),
            n && P.play(),
            () => {
                P.off(a.EventType.Advance, e);
            }
        );
    }, [P, O.reducedMotion.enabled, E, n]);
    let G = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != P)
                return (
                    !L && G.current && P.isPlaying && U.current > 0
                        ? P.pause()
                        : L && !P.isPlaying && G.current && P.play(),
                    () => {
                        null != P && L && (G.current = null != P.frameRequestId);
                    }
                );
        }, [P, L]),
        (0, r.jsx)(k, { className: s, style: p })
    );
}
a.RuntimeLoader.setWasmUrl(s);
