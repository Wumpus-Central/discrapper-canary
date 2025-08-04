(n.d(t, { v: () => f }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(103891),
    o = n(308521),
    s = n(442837),
    l = n(481060),
    c = n(40851),
    u = n(607070),
    d = n(912811);
function f(e) {
    let { buffer: t, autoplay: n = !0, className: a, fit: s, alignment: c, style: u, eventTargetRef: f, artboard: h, withReducedMotion: m = 'halt', ref: g, artboardProperties: E, dataBinding: b } = e,
        y = i.useContext(l.Sfi),
        O = _(),
        [v, I] = i.useState(void 0),
        T = i.useRef(null),
        { rive: S, RiveComponent: A } = (0, o.useRive)({
            eventTarget: null == f ? void 0 : f.current,
            buffer: t,
            autoplay: n,
            stateMachines: v,
            artboard: h,
            useOffscreenRenderer: !0,
            layout: new o.Layout({
                fit: null != s ? d.L[s] : o.Fit.Cover,
                alignment: null != c ? d.E[c] : o.Alignment.Center
            })
        });
    (i.useImperativeHandle(
        g,
        () => ({
            play: () => (null == S ? void 0 : S.play()),
            pause: () => (null == S ? void 0 : S.pause()),
            stop: () => (null == S ? void 0 : S.stop())
        }),
        [S]
    ),
        p({
            rive: S,
            artboard: h,
            artboardProperties: E,
            dataBinding: b
        }),
        i.useEffect(() => {
            if (null != S && 'short-loop' === m && y.reducedMotion.enabled) {
                let e = () => {
                        S.isPlaying &&
                            (T.current = setTimeout(() => {
                                S.pause();
                            }, 5000));
                    },
                    t = () => {
                        clearTimeout(T.current);
                    };
                return (
                    S.on(o.EventType.Play, e),
                    S.on(o.EventType.Pause, t),
                    S.on(o.EventType.Stop, t),
                    () => {
                        (S.off(o.EventType.Play, e), S.off(o.EventType.Pause, t), S.off(o.EventType.Stop, t));
                    }
                );
            }
        }, [S, m, y.reducedMotion.enabled]),
        i.useLayoutEffect(() => {
            null != S &&
                'layout' === s &&
                (S.resizeDrawingSurfaceToCanvas(),
                setTimeout(() => {
                    S.resizeDrawingSurfaceToCanvas();
                }, 100));
        }, [S, s]),
        i.useEffect(() => {
            null != S &&
                null == v &&
                (I(S.stateMachineNames),
                S.reset({
                    stateMachines: S.stateMachineNames,
                    autoplay: n,
                    artboard: h,
                    autoBind: !0
                }),
                S.setupRiveListeners());
        }, [S, n, v, h]));
    let N = i.useRef(0);
    i.useEffect(() => {
        if (null == S) return;
        S.play();
        let e = (t) => {
            null != t.data && 'number' == typeof t.data && ((N.current = t.data), t.data > 0 && ('halt' === m && y.reducedMotion.enabled && S.isPlaying && S.pause(), S.off(o.EventType.Advance, e)));
        };
        return (
            S.on(o.EventType.Advance, e),
            () => {
                S.off(o.EventType.Advance, e);
            }
        );
    }, [S, y.reducedMotion.enabled, m]);
    let C = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != S)
                return (
                    !O && C.current && S.isPlaying && N.current > 0 ? S.pause() : O && !S.isPlaying && C.current && S.play(),
                    () => {
                        null != S && O && (C.current = null != S.frameRequestId);
                    }
                );
        }, [S, O]),
        (0, r.jsx)(A, {
            className: a,
            style: u
        })
    );
}
function _() {
    let { renderWindow: e } = i.useContext(c.ZP),
        [t, n] = i.useState(e.document.hasFocus());
    return (
        i.useEffect(() => {
            let t = () => n(!0),
                r = () => n(!1);
            return (
                e.addEventListener('focus', t),
                e.addEventListener('blur', r),
                () => {
                    (e.removeEventListener('focus', t), e.removeEventListener('blur', r));
                }
            );
        }, [e]),
        t
    );
}
function p(e) {
    let { rive: t, artboard: n, artboardProperties: r, dataBinding: a } = e,
        c = (0, o.useViewModel)(t);
    (0, o.useViewModelInstance)(c);
    let { theme: d, saturation: f } = (0, l.TCT)(),
        _ = (0, s.e7)([u.Z], () => u.Z.isHighContrastModeEnabled);
    i.useEffect(() => {
        if (null == t || null == t.viewModelInstance || null == a) return;
        let e = r[n];
        Object.entries(a).forEach((n) => {
            var r, i, a, o, s, l;
            let [c, u] = n,
                p = e[c];
            switch (p) {
                case 'color':
                    let [h, m, g, E] = u
                        .resolve({
                            theme: d,
                            saturation: f,
                            highContrastModeEnabled: _
                        })
                        .rgba();
                    null == (i = t.viewModelInstance) || null == (r = i.color(c)) || r.rgba(h, m, g, 255 * E);
                    break;
                case 'number':
                    let b = null == (a = t.viewModelInstance) ? void 0 : a.number(c);
                    null != b && (b.value = u);
                    break;
                case 'boolean':
                    let y = null == (o = t.viewModelInstance) ? void 0 : o.boolean(c);
                    null != y && (y.value = u);
                    break;
                case 'trigger':
                    u && (null == (s = t.viewModelInstance) || s.trigger(c));
                    break;
                case 'string':
                    let O = null == (l = t.viewModelInstance) ? void 0 : l.string(c);
                    null != O && (O.value = u);
                    break;
                default:
                    console.warn('Unknown property type: '.concat(p));
            }
        });
    }, [a, t, n, r, d, null == t ? void 0 : t.viewModelInstance, f, _]);
}
o.RuntimeLoader.setWasmUrl(a);
