"use strict";
n.d(t, { e: () => g, x: () => C });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(92674),
    l = n(158954),
    u = n(311907),
    c = n(453903),
    d = n(765671),
    _ = n(186111),
    f = n(795127),
    p = n(283024),
    h = n(818348),
    m = n(248789);
let g = i.createContext(null),
    E = 20,
    A = 22,
    I = 240,
    T = 10,
    y = 4,
    S = h.FX;
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if ("center" === e || "custom" === e) return 0;
    let i = "left" === t || "right" === t,
        a = i ? r : (n ?? I),
        s = i ? A : E;
    if (0 === a) return 0;
    let o = a / 2 - s;
    switch (e) {
        case "start":
            return o;
        case "end":
            return -o;
        default:
            return 0;
    }
}
function C(e) {
    let {
            children: t,
            targetElementRef: n,
            shouldShow: a = !0,
            onRequestClose: h,
            position: C = "top",
            align: b,
            alignmentStrategy: N = "trigger-center",
            caretConfig: R,
            hasVideo: O = !1,
            gradientColor: D,
            gradientOffsetBottom: L = 0.4,
            onPositionChange: w,
            onNudgeChange: x,
            scrollBehavior: P = "sticky",
            modal: M = !1,
            returnRef: k,
            experimental_ignoreModalClicks: U = !0,
            closeOnClickOutside: G = !1,
        } = e,
        [V, F] = i.useState(a),
        [B, j] = i.useState(C),
        H = i.useRef(C),
        Y = i.useRef(0),
        { ref: W, width: K, height: z } = (0, d.Ay)(),
        $ = (0, u.bG)([_.A], () => _.A.getLayers()),
        q = $[$.length - 1] ?? "base",
        Z = i.useRef(w);
    i.useEffect(() => {
        Z.current = w;
    }, [w]);
    let Q = i.useCallback((e) => {
            null != e && e !== H.current && ((H.current = e), j(e), Z.current?.(e));
        }, []),
        X = i.useMemo(
            () => null == n.current || (n.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === q,
            [n, q],
        );
    i.useEffect(() => {
        X && a ? F(!0) : X || F(!1);
    }, [X, a]),
        i.useEffect(() => {
            Q(C);
        }, [C, Q]);
    let J = () => {
            F(!1);
        },
        ee = (0, p.L)({ shouldShow: a, caretPosition: (0, f.g)(B), onExitComplete: J }),
        et = i.useMemo(() => {
            if ("edge" === N && null != b) {
                let e = "top" === B || "bottom" === B,
                    t = "left" === B || "right" === B;
                if (e) {
                    if ("left" === b || "center" === b || "right" === b) return b;
                } else if (t && ("top" === b || "center" === b || "bottom" === b)) return b;
            }
            return "center";
        }, [N, b, B]),
        en = i.useMemo(() => {
            if ("edge" !== N) return v(R?.align ?? "center", B, K, z);
        }, [N, R, B, K, z]),
        er = i.useMemo(() => ({ position: B, caretConfig: R ?? { align: "center" } }), [B, R]),
        ei = (e) => {
            let { setPopoutRef: n, position: i, nudge: a, ...u } = e;
            return (
                Q(i),
                a !== Y.current && ((Y.current = a), x?.(a)),
                ee((e, i) => {
                    if (!i) return null;
                    let c = (0, r.jsx)(l.lGe, {
                        ...u,
                        setDialogRef: n,
                        modal: M,
                        className: s()(null != D ? m.popoverContentWithGradient : m.popover, {
                            [m["popover--video"]]: O,
                        }),
                        returnRef: k,
                        children: (0, r.jsx)(g.Provider, { value: er, children: t }),
                    });
                    return (0, r.jsx)(o.animated.div, {
                        ref: W,
                        "data-mana-component": "popover",
                        style: {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": `${E}px`,
                            "--custom-caret-edge-offset-vertical": `${A}px`,
                            "--custom-caret-edge-offset-horizontal-nudge": `${a}px`,
                            "--custom-popover-width": `${I}px`,
                        },
                        children:
                            null != D
                                ? (0, r.jsx)(l.hLv, {
                                      offsetBottom: L,
                                      color: D,
                                      className: m.popoverGradientWrapper,
                                      children: c,
                                  })
                                : c,
                    });
                })
            );
        };
    return (0, r.jsx)(c.$, {
        targetElementRef: n,
        shouldShow: V,
        onRequestClose: h,
        position: B,
        align: et,
        spacing: T + y,
        offset: en,
        layerContext: void 0,
        positionKey: null != en ? `${B}-${en}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === B || "bottom" === B,
        closeOnClickOutside: G,
        ignoreModalClicks: U,
        scrollBehavior: P,
        renderPopout: ei,
        children: S,
    });
}
