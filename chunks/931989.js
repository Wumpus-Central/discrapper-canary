n.d(t, { v: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(252762),
    o = n(995803),
    s = n(442837),
    l = n(481060),
    c = n(40851),
    u = n(607070),
    d = n(912811);
function f(e) {
    let {
            buffer: t,
            autoplay: n = !0,
            className: a,
            fit: s,
            alignment: c,
            style: u,
            eventTargetRef: f,
            artboard: h,
            withReducedMotion: m = "halt",
            ref: g,
            artboardProperties: E,
            dataBinding: b,
            touchScrollEnabled: y = !0,
        } = e,
        O = i.useContext(l.Sfi),
        v = _(),
        [I, S] = i.useState(void 0),
        T = i.useRef(null),
        { rive: A, RiveComponent: C } = (0, o.useRive)({
            eventTarget: null == f ? void 0 : f.current,
            buffer: t,
            autoplay: n,
            stateMachines: I,
            artboard: h,
            useOffscreenRenderer: !0,
            layout: new o.Layout({
                fit: null != s ? d.L[s] : o.Fit.Cover,
                alignment: null != c ? d.E[c] : o.Alignment.Center,
            }),
            isTouchScrollEnabled: y,
        });
    i.useImperativeHandle(
        g,
        () => ({
            play: () => (null == A ? void 0 : A.play()),
            pause: () => (null == A ? void 0 : A.pause()),
            stop: () => (null == A ? void 0 : A.stop()),
        }),
        [A],
    ),
        p({
            rive: A,
            artboard: h,
            artboardProperties: E,
            dataBinding: b,
        }),
        i.useEffect(() => {
            if (null != A && "short-loop" === m && O.reducedMotion.enabled) {
                let e = () => {
                        A.isPlaying &&
                            (T.current = setTimeout(() => {
                                A.pause();
                            }, 5000));
                    },
                    t = () => {
                        clearTimeout(T.current);
                    };
                return (
                    A.on(o.EventType.Play, e),
                    A.on(o.EventType.Pause, t),
                    A.on(o.EventType.Stop, t),
                    () => {
                        A.off(o.EventType.Play, e), A.off(o.EventType.Pause, t), A.off(o.EventType.Stop, t);
                    }
                );
            }
        }, [A, m, O.reducedMotion.enabled]),
        i.useLayoutEffect(() => {
            null != A &&
                "layout" === s &&
                (A.resizeDrawingSurfaceToCanvas(),
                setTimeout(() => {
                    A.resizeDrawingSurfaceToCanvas();
                }, 100));
        }, [A, s]),
        i.useEffect(() => {
            null != A &&
                null == I &&
                (S(A.stateMachineNames),
                A.reset({
                    stateMachines: A.stateMachineNames,
                    autoplay: n,
                    artboard: h,
                    autoBind: !0,
                }),
                A.setupRiveListeners());
        }, [A, n, I, h]);
    let N = i.useRef(0);
    i.useEffect(() => {
        if (null == A) return;
        A.play();
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((N.current = t.data),
                t.data > 0 &&
                    ("halt" === m && O.reducedMotion.enabled && A.isPlaying && A.pause(),
                    A.off(o.EventType.Advance, e)));
        };
        return (
            A.on(o.EventType.Advance, e),
            () => {
                A.off(o.EventType.Advance, e);
            }
        );
    }, [A, O.reducedMotion.enabled, m]);
    let R = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != A)
                return (
                    !v && R.current && A.isPlaying && N.current > 0
                        ? A.pause()
                        : v && !A.isPlaying && R.current && A.play(),
                    () => {
                        null != A && v && (R.current = null != A.frameRequestId);
                    }
                );
        }, [A, v]),
        (0, r.jsx)(C, {
            className: a,
            style: u,
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
                e.addEventListener("focus", t),
                e.addEventListener("blur", r),
                () => {
                    e.removeEventListener("focus", t), e.removeEventListener("blur", r);
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
        _ = (0, s.e7)([u.Z], () => u.Z.isHighContrastModeEnabled),
        p = i.useRef(null);
    i.useEffect(() => {
        if (null == t || null == t.viewModelInstance || null == a) return;
        let e = r[n];
        Object.entries(a).forEach((n) => {
            var r, i, a, o, s, l, c, u;
            let [h, m] = n,
                g = e[h];
            switch (g) {
                case "color":
                    let [E, b, y, O] = m
                        .resolve({
                            theme: d,
                            saturation: f,
                            highContrastModeEnabled: _,
                        })
                        .rgba();
                    null == (i = t.viewModelInstance) || null == (r = i.color(h)) || r.rgba(E, b, y, 255 * O);
                    break;
                case "number":
                    let v = null == (a = t.viewModelInstance) ? void 0 : a.number(h);
                    null != v && (v.value = m);
                    break;
                case "boolean":
                    let I = null == (o = t.viewModelInstance) ? void 0 : o.boolean(h);
                    null != I && (I.value = m);
                    break;
                case "trigger":
                    m &&
                        (null == (s = p.current) ? void 0 : s[h]) !== m &&
                        (null == (c = t.viewModelInstance) || null == (l = c.trigger(h)) || l.trigger());
                    break;
                case "string":
                    let S = null == (u = t.viewModelInstance) ? void 0 : u.string(h);
                    null != S && (S.value = m);
                    break;
                default:
                    console.warn("Unknown property type: ".concat(g));
            }
        }),
            (p.current = a);
    }, [a, t, n, r, d, null == t ? void 0 : t.viewModelInstance, f, _]);
}
o.RuntimeLoader.setWasmUrl(a);
