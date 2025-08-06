(n.d(t, { v: () => f }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(103891),
    a = n(308521),
    s = n(442837),
    l = n(481060),
    c = n(40851),
    u = n(607070),
    d = n(912811);
function f(e) {
    let { buffer: t, autoplay: n = !0, className: o, fit: s, alignment: c, style: u, eventTargetRef: f, artboard: h, withReducedMotion: m = 'halt', ref: g, artboardProperties: E, dataBinding: b } = e,
        y = i.useContext(l.Sfi),
        O = _(),
        [v, I] = i.useState(void 0),
        T = i.useRef(null),
        { rive: S, RiveComponent: A } = (0, a.useRive)({
            eventTarget: null == f ? void 0 : f.current,
            buffer: t,
            autoplay: n,
            stateMachines: v,
            artboard: h,
            useOffscreenRenderer: !0,
            layout: new a.Layout({
                fit: null != s ? d.L[s] : a.Fit.Cover,
                alignment: null != c ? d.E[c] : a.Alignment.Center
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
                    S.on(a.EventType.Play, e),
                    S.on(a.EventType.Pause, t),
                    S.on(a.EventType.Stop, t),
                    () => {
                        (S.off(a.EventType.Play, e), S.off(a.EventType.Pause, t), S.off(a.EventType.Stop, t));
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
            null != t.data && 'number' == typeof t.data && ((N.current = t.data), t.data > 0 && ('halt' === m && y.reducedMotion.enabled && S.isPlaying && S.pause(), S.off(a.EventType.Advance, e)));
        };
        return (
            S.on(a.EventType.Advance, e),
            () => {
                S.off(a.EventType.Advance, e);
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
            className: o,
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
    let { rive: t, artboard: n, artboardProperties: r, dataBinding: o } = e,
        c = (0, a.useViewModel)(t);
    (0, a.useViewModelInstance)(c);
    let { theme: d, saturation: f } = (0, l.TCT)(),
        _ = (0, s.e7)([u.Z], () => u.Z.isHighContrastModeEnabled),
        p = i.useRef(null);
    i.useEffect(() => {
        if (null == t || null == t.viewModelInstance || null == o) return;
        let e = r[n];
        (Object.entries(o).forEach((n) => {
            var r, i, o, a, s, l, c, u;
            let [h, m] = n,
                g = e[h];
            switch (g) {
                case 'color':
                    let [E, b, y, O] = m
                        .resolve({
                            theme: d,
                            saturation: f,
                            highContrastModeEnabled: _
                        })
                        .rgba();
                    null == (i = t.viewModelInstance) || null == (r = i.color(h)) || r.rgba(E, b, y, 255 * O);
                    break;
                case 'number':
                    let v = null == (o = t.viewModelInstance) ? void 0 : o.number(h);
                    null != v && (v.value = m);
                    break;
                case 'boolean':
                    let I = null == (a = t.viewModelInstance) ? void 0 : a.boolean(h);
                    null != I && (I.value = m);
                    break;
                case 'trigger':
                    m && (null == (s = p.current) ? void 0 : s[h]) !== m && (null == (c = t.viewModelInstance) || null == (l = c.trigger(h)) || l.trigger());
                    break;
                case 'string':
                    let T = null == (u = t.viewModelInstance) ? void 0 : u.string(h);
                    null != T && (T.value = m);
                    break;
                default:
                    console.warn('Unknown property type: '.concat(g));
            }
        }),
            (p.current = o));
    }, [o, t, n, r, d, null == t ? void 0 : t.viewModelInstance, f, _]);
}
a.RuntimeLoader.setWasmUrl(o);
