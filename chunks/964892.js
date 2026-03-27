"use strict";
n.d(t, { e: () => E, x: () => N });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(880013),
    l = n(158954),
    u = n(311907),
    c = n(453903),
    d = n(765671),
    _ = n(186111),
    f = n(795127),
    p = n(283024),
    h = n(818348),
    m = n(467935);
let E = i.createContext(null),
    g = 20,
    A = 22,
    I = 240,
    T = 10,
    S = 4,
    y = h.FX;
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if ("center" === e || "custom" === e) return 0;
    let i = "left" === t || "right" === t,
        s = i ? r : (n ?? I),
        a = i ? A : g;
    if (0 === s) return 0;
    let o = s / 2 - a;
    switch (e) {
        case "start":
            return o;
        case "end":
            return -o;
        default:
            return 0;
    }
}
function N(e) {
    let {
            children: t,
            targetElementRef: n,
            shouldShow: s = !0,
            onRequestClose: h,
            position: N = "top",
            align: C,
            alignmentStrategy: R = "trigger-center",
            caretConfig: O,
            hasVideo: b = !1,
            gradientColor: D,
            gradientOffsetBottom: L = 0.4,
            onPositionChange: w,
            onNudgeChange: M,
            scrollBehavior: x = "sticky",
            modal: P = !1,
            returnRef: k,
            experimental_ignoreModalClicks: U = !0,
            closeOnClickOutside: G = !1,
        } = e,
        [F, V] = i.useState(s),
        [B, H] = i.useState(N),
        j = i.useRef(N),
        Y = i.useRef(0),
        { ref: W, width: K, height: $ } = (0, d.Ay)(),
        z = (0, u.bG)([_.A], () => _.A.getLayers()),
        q = z[z.length - 1] ?? "base",
        Z = i.useRef(w);
    i.useEffect(() => {
        Z.current = w;
    }, [w]);
    let X = i.useCallback((e) => {
            null != e && e !== j.current && ((j.current = e), H(e), Z.current?.(e));
        }, []),
        Q = i.useMemo(
            () => null == n.current || (n.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === q,
            [n, q],
        );
    i.useEffect(() => {
        Q && s ? V(!0) : Q || V(!1);
    }, [Q, s]),
        i.useEffect(() => {
            X(N);
        }, [N, X]);
    let J = () => {
            V(!1);
        },
        ee = (0, p.L)({ shouldShow: s, caretPosition: (0, f.g)(B), onExitComplete: J }),
        et = i.useMemo(() => {
            if ("edge" === R && null != C) {
                let e = "top" === B || "bottom" === B,
                    t = "left" === B || "right" === B;
                if (e) {
                    if ("left" === C || "center" === C || "right" === C) return C;
                } else if (t && ("top" === C || "center" === C || "bottom" === C)) return C;
            }
            return "center";
        }, [R, C, B]),
        en = i.useMemo(() => {
            if ("edge" !== R) return v(O?.align ?? "center", B, K, $);
        }, [R, O, B, K, $]),
        er = i.useMemo(() => ({ position: B, caretConfig: O ?? { align: "center" } }), [B, O]),
        ei = (e) => {
            let { setPopoutRef: n, position: i, nudge: s, ...u } = e;
            return (
                X(i),
                s !== Y.current && ((Y.current = s), M?.(s)),
                ee((e, i) => {
                    if (!i) return null;
                    let c = (0, r.jsx)(l.lGe, {
                        ...u,
                        setDialogRef: n,
                        modal: P,
                        className: a()(null != D ? m.popoverContentWithGradient : m.popover, {
                            [m["popover--video"]]: b,
                        }),
                        returnRef: k,
                        children: (0, r.jsx)(E.Provider, { value: er, children: t }),
                    });
                    return (0, r.jsx)(o.animated.div, {
                        ref: W,
                        "data-mana-component": "popover",
                        style: {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": `${g}px`,
                            "--custom-caret-edge-offset-vertical": `${A}px`,
                            "--custom-caret-edge-offset-horizontal-nudge": `${s}px`,
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
        shouldShow: F,
        onRequestClose: h,
        position: B,
        align: et,
        spacing: T + S,
        offset: en,
        layerContext: void 0,
        positionKey: null != en ? `${B}-${en}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === B || "bottom" === B,
        closeOnClickOutside: G,
        ignoreModalClicks: U,
        scrollBehavior: x,
        renderPopout: ei,
        children: y,
    });
}
