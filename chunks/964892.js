"use strict";
n.d(t, { e: () => E, x: () => b });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563495),
    l = n(158954),
    u = n(311907),
    c = n(453903),
    d = n(765671),
    _ = n(186111),
    f = n(795127),
    h = n(283024),
    p = n(818348),
    g = n(513679);
let E = i.createContext(null),
    A = 20,
    I = 22,
    T = 240,
    y = 10,
    S = 4,
    v = p.FX;
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if ("center" === e || "custom" === e) return 0;
    let i = "left" === t || "right" === t,
        a = i ? r : (n ?? T),
        s = i ? I : A;
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
function b(e) {
    let {
            children: t,
            targetElementRef: n,
            shouldShow: a = !0,
            onRequestClose: p,
            position: b = "top",
            align: N,
            alignmentStrategy: R = "trigger-center",
            caretConfig: O,
            hasVideo: D = !1,
            gradientColor: L,
            gradientOffsetBottom: w = 0.4,
            onPositionChange: x,
            onNudgeChange: P,
            scrollBehavior: M = "sticky",
            modal: k = !1,
            returnRef: U,
            experimental_ignoreModalClicks: G = !0,
            closeOnClickOutside: F = !1,
        } = e,
        [V, B] = i.useState(a),
        [j, H] = i.useState(b),
        Y = i.useRef(b),
        W = i.useRef(0),
        { ref: K, width: $, height: z } = (0, d.Ay)(),
        q = (0, u.bG)([_.A], () => _.A.getLayers()),
        X = q[q.length - 1] ?? "base",
        Z = i.useRef(x);
    i.useEffect(() => {
        Z.current = x;
    }, [x]);
    let Q = i.useCallback((e) => {
            null != e && e !== Y.current && ((Y.current = e), H(e), Z.current?.(e));
        }, []),
        J = i.useMemo(
            () => null == n.current || (n.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === X,
            [n, X],
        );
    i.useEffect(() => {
        J && a ? B(!0) : J || B(!1);
    }, [J, a]),
        i.useEffect(() => {
            Q(b);
        }, [b, Q]);
    let ee = () => {
            B(!1);
        },
        et = (0, h.L)({ shouldShow: a, caretPosition: (0, f.g)(j), onExitComplete: ee }),
        en = i.useMemo(() => {
            if ("edge" === R && null != N) {
                let e = "top" === j || "bottom" === j,
                    t = "left" === j || "right" === j;
                if (e) {
                    if ("left" === N || "center" === N || "right" === N) return N;
                } else if (t && ("top" === N || "center" === N || "bottom" === N)) return N;
            }
            return "center";
        }, [R, N, j]),
        er = i.useMemo(() => {
            if ("edge" !== R) return C(O?.align ?? "center", j, $, z);
        }, [R, O, j, $, z]),
        ei = i.useMemo(() => ({ position: j, caretConfig: O ?? { align: "center" } }), [j, O]),
        ea = (e) => {
            let { setPopoutRef: n, position: i, nudge: a, ...u } = e;
            return (
                Q(i),
                a !== W.current && ((W.current = a), P?.(a)),
                et((e, i) => {
                    if (!i) return null;
                    let c = (0, r.jsx)(l.lGe, {
                        ...u,
                        setDialogRef: n,
                        modal: k,
                        className: s()(null != L ? g.popoverContentWithGradient : g.popover, {
                            [g["popover--video"]]: D,
                        }),
                        returnRef: U,
                        children: (0, r.jsx)(E.Provider, { value: ei, children: t }),
                    });
                    return (0, r.jsx)(o.animated.div, {
                        ref: K,
                        "data-mana-component": "popover",
                        style: {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": `${A}px`,
                            "--custom-caret-edge-offset-vertical": `${I}px`,
                            "--custom-caret-edge-offset-horizontal-nudge": `${a}px`,
                            "--custom-popover-width": `${T}px`,
                        },
                        children:
                            null != L
                                ? (0, r.jsx)(l.hLv, {
                                      offsetBottom: w,
                                      color: L,
                                      className: g.popoverGradientWrapper,
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
        onRequestClose: p,
        position: j,
        align: en,
        spacing: y + S,
        offset: er,
        layerContext: void 0,
        positionKey: null != er ? `${j}-${er}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === j || "bottom" === j,
        closeOnClickOutside: F,
        ignoreModalClicks: G,
        scrollBehavior: M,
        renderPopout: ea,
        children: v,
    });
}
