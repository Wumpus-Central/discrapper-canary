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
            dynamicDataBinding: O,
        } = e,
        v = i.useContext(l.Sfi),
        I = _(),
        [S, T] = i.useState(void 0),
        A = i.useRef(null),
        { rive: C, RiveComponent: N } = (0, o.useRive)({
            eventTarget: null == f ? void 0 : f.current,
            buffer: t,
            autoplay: n,
            stateMachines: S,
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
            play: () => (null == C ? void 0 : C.play()),
            pause: () => (null == C ? void 0 : C.pause()),
            stop: () => (null == C ? void 0 : C.stop()),
        }),
        [C],
    ),
        p({
            rive: C,
            artboard: h,
            artboardProperties: E,
            dataBinding: b,
            dynamicDataBinding: O,
        }),
        i.useEffect(() => {
            if (null != C && "short-loop" === m && v.reducedMotion.enabled) {
                let e = () => {
                        C.isPlaying &&
                            (A.current = setTimeout(() => {
                                C.pause();
                            }, 5000));
                    },
                    t = () => {
                        clearTimeout(A.current);
                    };
                return (
                    C.on(o.EventType.Play, e),
                    C.on(o.EventType.Pause, t),
                    C.on(o.EventType.Stop, t),
                    () => {
                        C.off(o.EventType.Play, e), C.off(o.EventType.Pause, t), C.off(o.EventType.Stop, t);
                    }
                );
            }
        }, [C, m, v.reducedMotion.enabled]),
        i.useLayoutEffect(() => {
            null != C &&
                "layout" === s &&
                (C.resizeDrawingSurfaceToCanvas(),
                setTimeout(() => {
                    C.resizeDrawingSurfaceToCanvas();
                }, 100));
        }, [C, s]),
        i.useEffect(() => {
            null != C &&
                null == S &&
                (T(C.stateMachineNames),
                C.reset({
                    stateMachines: C.stateMachineNames,
                    autoplay: n,
                    artboard: h,
                    autoBind: !0,
                }),
                C.setupRiveListeners());
        }, [C, n, S, h]);
    let R = i.useRef(0);
    i.useEffect(() => {
        if (null == C) return;
        C.play();
        let e = (t) => {
            null != t.data &&
                "number" == typeof t.data &&
                ((R.current = t.data),
                t.data > 0 &&
                    ("halt" === m && v.reducedMotion.enabled && C.isPlaying && C.pause(),
                    C.off(o.EventType.Advance, e)));
        };
        return (
            C.on(o.EventType.Advance, e),
            () => {
                C.off(o.EventType.Advance, e);
            }
        );
    }, [C, v.reducedMotion.enabled, m]);
    let P = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (null != C)
                return (
                    !I && P.current && C.isPlaying && R.current > 0
                        ? C.pause()
                        : I && !C.isPlaying && P.current && C.play(),
                    () => {
                        null != C && I && (P.current = null != C.frameRequestId);
                    }
                );
        }, [C, I]),
        (0, r.jsx)(N, {
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
    let { rive: t, artboard: n, artboardProperties: r, dataBinding: a, dynamicDataBinding: c } = e,
        d = null != c ? c : a,
        f = (0, o.useViewModel)(t);
    (0, o.useViewModelInstance)(f);
    let { theme: _, saturation: p } = (0, l.TCT)(),
        h = (0, s.e7)([u.Z], () => u.Z.isHighContrastModeEnabled),
        m = i.useRef(null);
    i.useEffect(() => {
        if (null == t || null == t.viewModelInstance || null == d) return;
        let e = r[null != n ? n : ""];
        Object.entries(d).forEach((n) => {
            var r, i, a, o, s, l, c, u;
            let [d, f] = n,
                g = "object" == typeof f && "type" in f,
                E = g ? f.type : e[d],
                b = g ? f.value : f;
            switch (E) {
                case "color":
                    let [y, O, v, I] = b
                        .resolve({
                            theme: _,
                            saturation: p,
                            highContrastModeEnabled: h,
                        })
                        .rgba();
                    null == (i = t.viewModelInstance) || null == (r = i.color(d)) || r.rgba(y, O, v, 255 * I);
                    break;
                case "number":
                    let S = null == (a = t.viewModelInstance) ? void 0 : a.number(d);
                    null != S && (S.value = b);
                    break;
                case "boolean":
                    let T = null == (o = t.viewModelInstance) ? void 0 : o.boolean(d);
                    null != T && (T.value = b);
                    break;
                case "trigger":
                    null != b &&
                        ("boolean" == typeof b ? b : 0 !== b) &&
                        (null == (s = m.current) ? void 0 : s[d]) !== b &&
                        (null == (c = t.viewModelInstance) || null == (l = c.trigger(d)) || l.trigger());
                    break;
                case "string":
                    let A = null == (u = t.viewModelInstance) ? void 0 : u.string(d);
                    null != A && (A.value = b);
                    break;
                default:
                    console.warn("Unknown property type: ".concat(E));
            }
        }),
            (m.current = d);
    }, [d, t, n, r, _, null == t ? void 0 : t.viewModelInstance, p, h]);
}
o.RuntimeLoader.setWasmUrl(a);
