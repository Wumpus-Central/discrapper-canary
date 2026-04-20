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
            onLoad: R,
            stateMachine: O,
        } = e,
        b = i.useContext(l.C),
        D = (0, o.R)(),
        L = (0, u.G9)().isWindowFocused?.() ?? D,
        [w, M] = (0, o.X)(3e4),
        [P, x] = i.useState(void 0),
        k = i.useRef(null),
        { rive: U, RiveComponent: G } = (0, a.useRive)({
            eventTarget: h?.current,
            buffer: t,
            autoplay: n,
            stateMachines: null != O ? [O] : P,
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
            onLoad: R,
        });
    i.useImperativeHandle(
        g,
        () => ({
            play: () => U?.play(),
            pause: () => U?.pause(),
            stop: () => U?.stop(),
            getProperties: () =>
                U?.viewModelInstance?.properties.reduce(
                    (e, t) => (
                        "viewModel" === t.type &&
                            U?.viewModelInstance?.viewModel(t.name)?.properties.forEach((n) => {
                                e[t.name + "/" + n.name] = {
                                    type: n.type,
                                    value: U?.viewModelInstance?.[n.type]?.(`${t.name}/${n.name}`)?.value,
                                };
                            }),
                        (e[t.name] = { type: t.type, value: U?.viewModelInstance?.[t.type]?.(t.name)?.value }),
                        e
                    ),
                    {},
                ) ?? {},
            getArtboards: () => {
                if (null == U) return [];
                let e = new Set(),
                    t = U.riveFile.getInstance();
                for (let n = 0; n < t.artboardCount(); n++) {
                    let r = t.artboardByIndex(n);
                    e.add(r.name);
                }
                return Array.from(e);
            },
        }),
        [U],
    ),
        (0, d.J)({
            rive: U,
            artboard: m,
            artboardProperties: A,
            dataBinding: I,
            dynamicDataBinding: y,
            onDataBindingChange: T,
        }),
        i.useEffect(() => {
            if (null != U && "short-loop" === E && b.reducedMotion.enabled) {
                let e = () => {
                        U.isPlaying &&
                            (k.current = setTimeout(() => {
                                U.pause();
                            }, 5e3));
                    },
                    t = () => {
                        clearTimeout(k.current);
                    };
                return (
                    U.on(a.EventType.Play, e),
                    U.on(a.EventType.Pause, t),
                    U.on(a.EventType.Stop, t),
                    () => {
                        U.off(a.EventType.Play, e), U.off(a.EventType.Pause, t), U.off(a.EventType.Stop, t);
                    }
                );
            }
        }, [U, E, b.reducedMotion.enabled]),
        i.useLayoutEffect(() => {
            if (null != U) {
                "layout" === _ && U.resizeDrawingSurfaceToCanvas();
                let e = setTimeout(() => {
                    null != U.canvas && U.resizeDrawingSurfaceToCanvas();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [U, _]),
        i.useEffect(() => {
            null != U &&
                null == P &&
                null == O &&
                (x(U.stateMachineNames),
                U.reset({ stateMachines: U.stateMachineNames, autoplay: n, artboard: m, autoBind: !0 }),
                U.setupRiveListeners());
        }, [U, n, P, m, O]);
    let F = i.useRef(0);
    i.useEffect(() => {
        if (null == U) return;
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((F.current = t.data),
                t.data > 0 &&
                    ("halt" === E && b.reducedMotion.enabled && U.isPlaying && U.pause(),
                    U.off(a.EventType.Advance, e)));
        };
        return (
            U.on(a.EventType.Advance, e),
            n && U.play(),
            () => {
                U.off(a.EventType.Advance, e);
            }
        );
    }, [U, b.reducedMotion.enabled, E, n]),
        i.useEffect(() => {
            M();
        }, [M, m, _, f, I, y, A]);
    let V = L && !w,
        B = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != U)
                return (
                    !V && B.current && U.isPlaying && F.current > 0
                        ? U.pause()
                        : V && !U.isPlaying && B.current && U.play(),
                    () => {
                        null != U && V && (B.current = null != U.frameRequestId);
                    }
                );
        }, [U, V]),
        (0, r.jsx)(G, { className: s, style: p })
    );
}
a.RuntimeLoader.setWasmUrl(s);
