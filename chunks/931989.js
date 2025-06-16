n.d(t, { v: () => u }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(854568),
    o = n(308521),
    s = n(481060),
    l = n(40851),
    c = n(912811);
o.RuntimeLoader.setWasmUrl(a);
let u = i.forwardRef(function (e, t) {
    let { buffer: n, autoplay: a = !0, className: l, fit: u, alignment: f, style: _, eventTargetRef: p, artboard: h, withReducedMotion: m = 'halt' } = e,
        g = i.useContext(s.Sfi),
        E = d(),
        [b, y] = i.useState(void 0),
        O = i.useRef(null),
        { rive: v, RiveComponent: I } = (0, o.useRive)({
            eventTarget: null == p ? void 0 : p.current,
            buffer: n,
            autoplay: a,
            stateMachines: b,
            artboard: h,
            useOffscreenRenderer: !0,
            layout: new o.Layout({
                fit: null != u ? c.L[u] : o.Fit.Cover,
                alignment: null != f ? c.E[f] : o.Alignment.Center
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
                    v.on(o.EventType.Play, e),
                    v.on(o.EventType.Pause, t),
                    v.on(o.EventType.Stop, t),
                    () => {
                        v.off(o.EventType.Play, e), v.off(o.EventType.Pause, t), v.off(o.EventType.Stop, t);
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
                    autoplay: a,
                    artboard: h,
                    autoBind: !0
                }),
                v.setupRiveListeners());
        }, [v, a, b, h]);
    let T = i.useRef(0);
    i.useEffect(() => {
        if (null == v) return;
        v.play();
        let e = (t) => {
            null != t.data && 'number' == typeof t.data && ((T.current = t.data), t.data > 0 && ('halt' === m && g.reducedMotion.enabled && v.isPlaying && v.pause(), v.off(o.EventType.Advance, e)));
        };
        return (
            v.on(o.EventType.Advance, e),
            () => {
                v.off(o.EventType.Advance, e);
            }
        );
    }, [v, g.reducedMotion.enabled, m]);
    let S = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != v)
                return (
                    !E && S.current && v.isPlaying && T.current > 0 ? v.pause() : E && !v.isPlaying && S.current && v.play(),
                    () => {
                        null != v && E && (S.current = null != v.frameRequestId);
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
