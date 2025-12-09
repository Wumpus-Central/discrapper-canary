n.d(t, {
    I: () => S,
    m: () => D,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(205120),
    l = n(793030),
    c = n(442837),
    u = n(930295),
    d = n(393238),
    f = n(819640),
    p = n(945909),
    _ = n(866577),
    m = n(231338),
    h = n(254477);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = i.createContext(null),
    I = 20,
    T = 22,
    A = 240,
    C = 10,
    N = 4,
    P = m.Vq;
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if ("center" === e || "custom" === e) return 0;
    let i = "left" === t || "right" === t,
        a = i ? r : null != n ? n : A,
        o = i ? T : I;
    if (0 === a) return 0;
    let s = a / 2 - o;
    switch (e) {
        case "start":
            return s;
        case "end":
            return -s;
        default:
            return 0;
    }
}
function D(e) {
    var t;
    let {
            children: n,
            targetElementRef: a,
            shouldShow: m = !0,
            onRequestClose: g,
            position: b = "top",
            align: v,
            alignmentStrategy: D = "trigger-center",
            caretConfig: w,
            hasVideo: x = !1,
            gradientColor: L,
            gradientOffsetBottom: j = 0.4,
            onPositionChange: M,
            onNudgeChange: k,
            scrollBehavior: U = "sticky",
            modal: G = !1,
            returnRef: Z,
            experimental_ignoreModalClicks: B = !0,
        } = e,
        [F, V] = i.useState(m),
        [H, Y] = i.useState(b),
        W = i.useRef(b),
        K = i.useRef(0),
        { ref: z, width: q, height: Q } = (0, d.ZP)(),
        X = (0, c.e7)([f.Z], () => f.Z.getLayers()),
        J = null != (t = X[X.length - 1]) ? t : "base",
        $ = i.useRef(M);
    i.useEffect(() => {
        $.current = M;
    }, [M]);
    let ee = i.useCallback((e) => {
            var t;
            null != e && e !== W.current && ((W.current = e), Y(e), null == (t = $.current) || t.call($, e));
        }, []),
        et = i.useMemo(() => {
            var e, t;
            return (
                null == a.current ||
                (null != (t = null == (e = a.current.closest("[data-layer]")) ? void 0 : e.getAttribute("data-layer"))
                    ? t
                    : "base") === J
            );
        }, [a, J]);
    i.useEffect(() => {
        et && m ? V(!0) : et || V(!1);
    }, [et, m]),
        i.useEffect(() => {
            ee(b);
        }, [b, ee]);
    let en = () => {
            V(!1);
        },
        er = (0, _.i)({
            shouldShow: m,
            caretPosition: (0, p.z)(H),
            onExitComplete: en,
        }),
        ei = i.useMemo(() => {
            if ("edge" === D && null != v) {
                let e = "top" === H || "bottom" === H,
                    t = "left" === H || "right" === H;
                if (e) {
                    if ("left" === v || "center" === v || "right" === v) return v;
                } else if (t && ("top" === v || "center" === v || "bottom" === v)) return v;
            }
            return "center";
        }, [D, v, H]),
        ea = i.useMemo(() => {
            var e;
            if ("edge" !== D) return R(null != (e = null == w ? void 0 : w.align) ? e : "center", H, q, Q);
        }, [D, w, H, q, Q]),
        eo = i.useMemo(
            () => ({
                position: H,
                caretConfig: null != w ? w : { align: "center" },
            }),
            [H, w],
        ),
        es = (e) => {
            var { setPopoutRef: t, position: i, nudge: a } = e,
                c = O(e, ["setPopoutRef", "position", "nudge"]);
            return (
                ee(i),
                a !== K.current && ((K.current = a), null == k || k(a)),
                er((e, i) => {
                    if (!i) return null;
                    let a = (0, r.jsx)(
                        l.VqE,
                        y(E({}, c), {
                            setDialogRef: t,
                            modal: G,
                            className: o()(null != L ? h.popoverContentWithGradient : h.popover, {
                                [h["popover--video"]]: x,
                            }),
                            returnRef: Z,
                            children: (0, r.jsx)(S.Provider, {
                                value: eo,
                                children: n,
                            }),
                        }),
                    );
                    return (0, r.jsx)(s.animated.div, {
                        ref: z,
                        "data-mana-component": "popover",
                        style: y(E({}, e), {
                            "--custom-caret-edge-offset-horizontal": "".concat(I, "px"),
                            "--custom-caret-edge-offset-vertical": "".concat(T, "px"),
                            "--custom-popover-width": "".concat(A, "px"),
                        }),
                        children:
                            null != L
                                ? (0, r.jsx)(l.$1m, {
                                      offsetBottom: j,
                                      color: L,
                                      className: h.popoverGradientWrapper,
                                      children: a,
                                  })
                                : a,
                    });
                })
            );
        };
    return (0, r.jsx)(u.H, {
        targetElementRef: a,
        shouldShow: F,
        onRequestClose: g,
        position: H,
        align: ei,
        spacing: C + N,
        offset: ea,
        layerContext: void 0,
        positionKey: null != ea ? "".concat(H, "-").concat(ea) : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === H || "bottom" === H,
        closeOnClickOutside: !1,
        ignoreModalClicks: B,
        scrollBehavior: U,
        renderPopout: es,
        children: P,
    });
}
