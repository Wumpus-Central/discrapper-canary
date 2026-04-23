"use strict";
n.d(t, { e: () => g, x: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(113325),
    u = n(315629),
    c = n(311907),
    d = n(453903),
    _ = n(765671),
    f = n(186111),
    p = n(795127),
    h = n(283024),
    E = n(818348),
    m = n(824078);
let g = i.createContext(null),
    A = E.FX;
function I(e) {
    let {
            children: t,
            targetElementRef: n,
            shouldShow: s = !0,
            onRequestClose: E,
            position: I = "top",
            align: T,
            alignmentStrategy: S = "trigger-center",
            caretConfig: y,
            hasVideo: N = !1,
            gradientColor: v,
            gradientOffsetBottom: C = 0.4,
            onPositionChange: O,
            onNudgeChange: R,
            scrollBehavior: b = "sticky",
            modal: D = !1,
            returnRef: L,
            experimental_ignoreModalClicks: w = !0,
            closeOnClickOutside: M = !1,
        } = e,
        [P, x] = i.useState(s),
        [k, U] = i.useState(I),
        G = i.useRef(I),
        F = i.useRef(0),
        { ref: V, width: B, height: H } = (0, _.Ay)(),
        j = (0, c.bG)([f.A], () => f.A.getLayers()),
        Y = j[j.length - 1] ?? "base",
        W = i.useRef(O);
    i.useEffect(() => {
        W.current = O;
    }, [O]);
    let K = i.useCallback((e) => {
            null != e && e !== G.current && ((G.current = e), U(e), W.current?.(e));
        }, []),
        $ = i.useMemo(
            () => null == n.current || (n.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === Y,
            [n, Y],
        );
    i.useEffect(() => {
        $ && s ? x(!0) : $ || x(!1);
    }, [$, s]),
        i.useEffect(() => {
            K(I);
        }, [I, K]);
    let z = (0, h.L)({
            shouldShow: s,
            caretPosition: (0, p.g)(k),
            onExitComplete: () => {
                x(!1);
            },
        }),
        q = i.useMemo(() => {
            if ("edge" === S && null != T) {
                let e = "top" === k || "bottom" === k,
                    t = "left" === k || "right" === k;
                if (e) {
                    if ("left" === T || "center" === T || "right" === T) return T;
                } else if (t && ("top" === T || "center" === T || "bottom" === T)) return T;
            }
            return "center";
        }, [S, T, k]),
        X = i.useMemo(() => {
            if ("edge" !== S)
                return (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    if ("center" === e || "custom" === e) return 0;
                    let i = "left" === t || "right" === t,
                        s = i ? r : (n ?? 240);
                    if (0 === s) return 0;
                    let a = s / 2 - (i ? 22 : 20);
                    switch (e) {
                        case "start":
                            return a;
                        case "end":
                            return -a;
                        default:
                            return 0;
                    }
                })(y?.align ?? "center", k, B, H);
        }, [S, y, k, B, H]),
        Q = i.useMemo(() => ({ position: k, caretConfig: y ?? { align: "center" } }), [k, y]);
    return (0, r.jsx)(d.$, {
        targetElementRef: n,
        shouldShow: P,
        onRequestClose: E,
        position: k,
        align: q,
        spacing: 14,
        offset: X,
        layerContext: void 0,
        positionKey: null != X ? `${k}-${X}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === k || "bottom" === k,
        closeOnClickOutside: M,
        ignoreModalClicks: w,
        scrollBehavior: b,
        renderPopout: (e) => {
            let { setPopoutRef: n, position: i, nudge: s, ...c } = e;
            return (
                K(i),
                s !== F.current && ((F.current = s), R?.(s)),
                z((e, i) => {
                    if (!i) return null;
                    let d = (0, r.jsx)(l.l, {
                        ...c,
                        setDialogRef: n,
                        modal: D,
                        className: a()(null != v ? m.popoverContentWithGradient : m.popover, {
                            [m["popover--video"]]: N,
                        }),
                        returnRef: L,
                        children: (0, r.jsx)(g.Provider, { value: Q, children: t }),
                    });
                    return (0, r.jsx)(o.animated.div, {
                        ref: V,
                        "data-mana-component": "popover",
                        style: {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": "20px",
                            "--custom-caret-edge-offset-vertical": "22px",
                            "--custom-caret-edge-offset-horizontal-nudge": `${s}px`,
                            "--custom-popover-width": "240px",
                        },
                        children:
                            null != v
                                ? (0, r.jsx)(u.h, {
                                      offsetBottom: C,
                                      color: v,
                                      className: m.popoverGradientWrapper,
                                      children: d,
                                  })
                                : d,
                    });
                })
            );
        },
        children: A,
    });
}
