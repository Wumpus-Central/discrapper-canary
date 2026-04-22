a.d(t, { e: () => v, x: () => E });
var n = a(627968),
    r = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(517738),
    o = a(113325),
    c = a(315629),
    d = a(311907),
    u = a(453903),
    h = a(765671),
    m = a(186111),
    p = a(795127),
    g = a(283024),
    _ = a(818348),
    f = a(77006);
let v = r.createContext(null),
    x = _.FX;
function E(e) {
    let {
            children: t,
            targetElementRef: a,
            shouldShow: l = !0,
            onRequestClose: _,
            position: E = "top",
            align: w,
            alignmentStrategy: A = "trigger-center",
            caretConfig: b,
            hasVideo: I = !1,
            gradientColor: C,
            gradientOffsetBottom: y = 0.4,
            onPositionChange: S,
            onNudgeChange: j,
            scrollBehavior: M = "sticky",
            modal: k = !1,
            returnRef: N,
            experimental_ignoreModalClicks: T = !0,
            closeOnClickOutside: O = !1,
        } = e,
        [R, D] = r.useState(l),
        [L, P] = r.useState(E),
        V = r.useRef(E),
        B = r.useRef(0),
        { ref: U, width: Z, height: H } = (0, h.Ay)(),
        W = (0, d.bG)([m.A], () => m.A.getLayers()),
        G = W[W.length - 1] ?? "base",
        F = r.useRef(S);
    r.useEffect(() => {
        F.current = S;
    }, [S]);
    let z = r.useCallback((e) => {
            null != e && e !== V.current && ((V.current = e), P(e), F.current?.(e));
        }, []),
        J = r.useMemo(
            () => null == a.current || (a.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === G,
            [a, G],
        );
    r.useEffect(() => {
        J && l ? D(!0) : J || D(!1);
    }, [J, l]),
        r.useEffect(() => {
            z(E);
        }, [E, z]);
    let $ = (0, g.L)({
            shouldShow: l,
            caretPosition: (0, p.g)(L),
            onExitComplete: () => {
                D(!1);
            },
        }),
        K = r.useMemo(() => {
            if ("edge" === A && null != w) {
                let e = "top" === L || "bottom" === L,
                    t = "left" === L || "right" === L;
                if (e) {
                    if ("left" === w || "center" === w || "right" === w) return w;
                } else if (t && ("top" === w || "center" === w || "bottom" === w)) return w;
            }
            return "center";
        }, [A, w, L]),
        Q = r.useMemo(() => {
            if ("edge" !== A)
                return (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    if ("center" === e || "custom" === e) return 0;
                    let r = "left" === t || "right" === t,
                        l = r ? n : (a ?? 240);
                    if (0 === l) return 0;
                    let i = l / 2 - (r ? 22 : 20);
                    switch (e) {
                        case "start":
                            return i;
                        case "end":
                            return -i;
                        default:
                            return 0;
                    }
                })(b?.align ?? "center", L, Z, H);
        }, [A, b, L, Z, H]),
        q = r.useMemo(() => ({ position: L, caretConfig: b ?? { align: "center" } }), [L, b]);
    return (0, n.jsx)(u.$, {
        targetElementRef: a,
        shouldShow: R,
        onRequestClose: _,
        position: L,
        align: K,
        spacing: 14,
        offset: Q,
        layerContext: void 0,
        positionKey: null != Q ? `${L}-${Q}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === L || "bottom" === L,
        closeOnClickOutside: O,
        ignoreModalClicks: T,
        scrollBehavior: M,
        renderPopout: (e) => {
            let { setPopoutRef: a, position: r, nudge: l, ...d } = e;
            return (
                z(r),
                l !== B.current && ((B.current = l), j?.(l)),
                $((e, r) => {
                    if (!r) return null;
                    let u = (0, n.jsx)(o.l, {
                        ...d,
                        setDialogRef: a,
                        modal: k,
                        className: i()(null != C ? f.popoverContentWithGradient : f.popover, {
                            [f["popover--video"]]: I,
                        }),
                        returnRef: N,
                        children: (0, n.jsx)(v.Provider, { value: q, children: t }),
                    });
                    return (0, n.jsx)(s.animated.div, {
                        ref: U,
                        "data-mana-component": "popover",
                        style: {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": "20px",
                            "--custom-caret-edge-offset-vertical": "22px",
                            "--custom-caret-edge-offset-horizontal-nudge": `${l}px`,
                            "--custom-popover-width": "240px",
                        },
                        children:
                            null != C
                                ? (0, n.jsx)(c.h, {
                                      offsetBottom: y,
                                      color: C,
                                      className: f.popoverGradientWrapper,
                                      children: u,
                                  })
                                : u,
                    });
                })
            );
        },
        children: x,
    });
}
