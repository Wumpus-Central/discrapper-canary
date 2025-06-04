n.d(t, { v: () => u }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(854568),
    a = n(308521),
    s = n(481060),
    l = n(40851),
    c = n(912811);
a.RuntimeLoader.setWasmUrl(o);
let u = i.forwardRef(function (e, t) {
    let { buffer: n, autoplay: o = !0, className: l, fit: u, alignment: f, style: _, eventTargetRef: p, artboard: h, withReducedMotion: m = 'halt' } = e,
        g = i.useContext(s.Sfi),
        E = d(),
        [b, y] = i.useState(void 0),
        O = i.useRef(null),
        { rive: v, RiveComponent: I } = (0, a.useRive)({
            eventTarget: null == p ? void 0 : p.current,
            buffer: n,
            autoplay: o,
            stateMachines: b,
            artboard: h,
            useOffscreenRenderer: !0,
            layout: new a.Layout({
                fit: null != u ? c.L[u] : a.Fit.Cover,
                alignment: null != f ? c.E[f] : a.Alignment.Center
            })
        });
    i.useImperativeHandle(
        t,
        () => ({
            play: () => (null == v ? void 0 : v.play()),
            pause: () => (null == v ? void 0 : v.pause()),
            stop: () => (null == v ? void 0 : v.stop())
        }),
        [v]
    ),
        i.useEffect(() => {
            if (null != v && 'short-loop' === m && g.reducedMotion.enabled) {
                let e = () => {
                        v.isPlaying &&
                            (O.current = setTimeout(() => {
                                v.pause();
                            }, 5000));
                    },
                    t = () => {
                        clearTimeout(O.current);
                    };
                return (
                    v.on(a.EventType.Play, e),
                    v.on(a.EventType.Pause, t),
                    v.on(a.EventType.Stop, t),
                    () => {
                        v.off(a.EventType.Play, e), v.off(a.EventType.Pause, t), v.off(a.EventType.Stop, t);
                    }
                );
            }
        }, [v, m, g.reducedMotion.enabled]),
        i.useLayoutEffect(() => {
            null != v &&
                'layout' === u &&
                (v.resizeDrawingSurfaceToCanvas(),
                setTimeout(() => {
                    v.resizeDrawingSurfaceToCanvas();
                }, 100));
        }, [v, u]),
        i.useEffect(() => {
            null != v &&
                null == b &&
                (y(v.stateMachineNames),
                v.reset({
                    stateMachines: v.stateMachineNames,
                    autoplay: o,
                    artboard: h,
                    autoBind: !0
                }),
                v.setupRiveListeners());
        }, [v, o, b, h]);
    let S = i.useRef(0);
    i.useEffect(() => {
        if (null == v) return;
        v.play();
        let e = (t) => {
            null != t.data && 'number' == typeof t.data && ((S.current = t.data), t.data > 0 && ('halt' === m && g.reducedMotion.enabled && v.isPlaying && v.pause(), v.off(a.EventType.Advance, e)));
        };
        return (
            v.on(a.EventType.Advance, e),
            () => {
                v.off(a.EventType.Advance, e);
            }
        );
    }, [v, g.reducedMotion.enabled, m]);
    let T = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != v)
                return (
                    !E && T.current && v.isPlaying && S.current > 0 ? v.pause() : E && !v.isPlaying && T.current && v.play(),
                    () => {
                        null != v && E && (T.current = null != v.frameRequestId);
                    }
                );
        }, [v, E]),
        (0, r.jsx)(I, {
            className: l,
            style: _
        })
    );
});
function d() {
    let { renderWindow: e } = i.useContext(l.ZP),
        [t, n] = i.useState(e.document.hasFocus());
    return (
        i.useEffect(() => {
            let t = () => n(!0),
                r = () => n(!1);
            return (
                e.addEventListener('focus', t),
                e.addEventListener('blur', r),
                () => {
                    e.removeEventListener('focus', t), e.removeEventListener('blur', r);
                }
            );
        }, [e]),
        t
    );
}
