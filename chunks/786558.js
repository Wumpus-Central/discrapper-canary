"use strict";
n.d(t, { w: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(389544),
    s = n(647307),
    o = n(941861),
    l = n(844222),
    u = n(460890),
    c = n(605752),
    d = n(270597);
function _(e) {
    let {
            buffer: t,
            autoplay: n = !0,
            className: a,
            fit: _,
            alignment: f,
            style: p,
            eventTargetRef: h,
            artboard: m,
            withReducedMotion: g = "halt",
            ref: E,
            artboardProperties: A,
            dataBinding: I,
            onDataBindingChange: T,
            touchScrollEnabled: y = !0,
            dynamicDataBinding: S,
            listenOnDocumentBody: v,
            eventCapture: C,
            assetLoader: b,
            onLoad: N,
            stateMachine: R,
        } = e,
        O = i.useContext(l.C),
        D = (0, o.R)(),
        L = (0, u.G9)().isWindowFocused?.() ?? D,
        [w, x] = i.useState(void 0),
        P = i.useRef(null),
        { rive: M, RiveComponent: k } = (0, s.useRive)({
            eventTarget: h?.current,
            buffer: t,
            autoplay: n,
            stateMachines: null != R ? [R] : w,
            artboard: m,
            useOffscreenRenderer: !0,
            layout: new s.Layout({
                fit: null != _ ? c.i[_] : s.Fit.Cover,
                alignment: null != f ? c.y[f] : s.Alignment.Center,
            }),
            isTouchScrollEnabled: y,
            listenOnDocumentBody: v,
            eventCapture: C,
            assetLoader: b,
            onLoad: N,
        });
    i.useImperativeHandle(
        E,
        () => ({
            play: () => M?.play(),
            pause: () => M?.pause(),
            stop: () => M?.stop(),
            getProperties: () =>
                M?.viewModelInstance?.properties.reduce(
                    (e, t) => (
                        "viewModel" === t.type &&
                            M?.viewModelInstance?.viewModel(t.name)?.properties.forEach((n) => {
                                e[t.name + "/" + n.name] = {
                                    type: n.type,
                                    value: M?.viewModelInstance?.[n.type]?.(`${t.name}/${n.name}`)?.value,
                                };
                            }),
                        (e[t.name] = { type: t.type, value: M?.viewModelInstance?.[t.type]?.(t.name)?.value }),
                        e
                    ),
                    {},
                ) ?? {},
            getArtboards: () => {
                if (null == M) return [];
                let e = new Set(),
                    t = M.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let r = t.artboardByIndex(n);
                    e.add(r.name);
                }
                return Array.from(e);
            },
        }),
        [M],
    ),
        (0, d.J)({
            rive: M,
            artboard: m,
            artboardProperties: A,
            dataBinding: I,
            dynamicDataBinding: S,
            onDataBindingChange: T,
        }),
        i.useEffect(() => {
            if (null != M && "short-loop" === g && O.reducedMotion.enabled) {
                let e = () => {
                        M.isPlaying &&
                            (P.current = setTimeout(() => {
                                M.pause();
                            }, 5e3));
                    },
                    t = () => {
                        clearTimeout(P.current);
                    };
                return (
                    M.on(s.EventType.Play, e),
                    M.on(s.EventType.Pause, t),
                    M.on(s.EventType.Stop, t),
                    () => {
                        M.off(s.EventType.Play, e), M.off(s.EventType.Pause, t), M.off(s.EventType.Stop, t);
                    }
                );
            }
        }, [M, g, O.reducedMotion.enabled]),
        i.useLayoutEffect(() => {
            if (null != M && "layout" === _) {
                M.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != M.canvas && M.resizeDrawingSurfaceToCanvas();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [M, _]),
        i.useEffect(() => {
            null != M &&
                null == w &&
                null == R &&
                (x(M.stateMachineNames),
                M.reset({ stateMachines: M.stateMachineNames, autoplay: n, artboard: m, autoBind: !0 }),
                M.setupRiveListeners());
        }, [M, n, w, m, R]);
    let U = i.useRef(0);
    i.useEffect(() => {
        if (null == M) return;
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((U.current = t.data),
                t.data > 0 &&
                    ("halt" === g && O.reducedMotion.enabled && M.isPlaying && M.pause(),
                    M.off(s.EventType.Advance, e)));
        };
        return (
            M.on(s.EventType.Advance, e),
            n && M.play(),
            () => {
                M.off(s.EventType.Advance, e);
            }
        );
    }, [M, O.reducedMotion.enabled, g, n]);
    let G = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != M)
                return (
                    !L && G.current && M.isPlaying && U.current > 0
                        ? M.pause()
                        : L && !M.isPlaying && G.current && M.play(),
                    () => {
                        null != M && L && (G.current = null != M.frameRequestId);
                    }
                );
        }, [M, L]),
        (0, r.jsx)(k, { className: a, style: p })
    );
}
s.RuntimeLoader.setWasmUrl(a);
