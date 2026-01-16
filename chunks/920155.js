n.d(t, {
    I: () => S,
    m: () => R,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(81239),
    l = n(793030),
    c = n(442837),
    u = n(930295),
    d = n(393238),
    f = n(819640),
    p = n(945909),
    _ = n(866577),
    h = n(231338),
    m = n(770966);
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
    C = 240,
    A = 10,
    N = 4,
    P = h.Vq;
function w() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if ("center" === e || "custom" === e) return 0;
    let i = "left" === t || "right" === t,
        a = i ? r : null != n ? n : C,
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
function R(e) {
    var t;
    let {
            children: n,
            targetElementRef: a,
            shouldShow: h = !0,
            onRequestClose: g,
            position: b = "top",
            align: v,
            alignmentStrategy: R = "trigger-center",
            caretConfig: D,
            hasVideo: x = !1,
            gradientColor: L,
            gradientOffsetBottom: j = 0.4,
            onPositionChange: M,
            onNudgeChange: k,
            scrollBehavior: U = "sticky",
            modal: G = !1,
            returnRef: Z,
            experimental_ignoreModalClicks: F = !0,
            closeOnClickOutside: B = !1,
        } = e,
        [V, H] = i.useState(h),
        [Y, W] = i.useState(b),
        K = i.useRef(b),
        z = i.useRef(0),
        { ref: q, width: Q, height: X } = (0, d.ZP)(),
        J = (0, c.e7)([f.Z], () => f.Z.getLayers()),
        $ = null != (t = J[J.length - 1]) ? t : "base",
        ee = i.useRef(M);
    i.useEffect(() => {
        ee.current = M;
    }, [M]);
    let et = i.useCallback((e) => {
            var t;
            null != e && e !== K.current && ((K.current = e), W(e), null == (t = ee.current) || t.call(ee, e));
        }, []),
        en = i.useMemo(() => {
            var e, t;
            return (
                null == a.current ||
                (null != (t = null == (e = a.current.closest("[data-layer]")) ? void 0 : e.getAttribute("data-layer"))
                    ? t
                    : "base") === $
            );
        }, [a, $]);
    i.useEffect(() => {
        en && h ? H(!0) : en || H(!1);
    }, [en, h]),
        i.useEffect(() => {
            et(b);
        }, [b, et]);
    let er = () => {
            H(!1);
        },
        ei = (0, _.i)({
            shouldShow: h,
            caretPosition: (0, p.z)(Y),
            onExitComplete: er,
        }),
        ea = i.useMemo(() => {
            if ("edge" === R && null != v) {
                let e = "top" === Y || "bottom" === Y,
                    t = "left" === Y || "right" === Y;
                if (e) {
                    if ("left" === v || "center" === v || "right" === v) return v;
                } else if (t && ("top" === v || "center" === v || "bottom" === v)) return v;
            }
            return "center";
        }, [R, v, Y]),
        eo = i.useMemo(() => {
            var e;
            if ("edge" !== R) return w(null != (e = null == D ? void 0 : D.align) ? e : "center", Y, Q, X);
        }, [R, D, Y, Q, X]),
        es = i.useMemo(
            () => ({
                position: Y,
                caretConfig: null != D ? D : { align: "center" },
            }),
            [Y, D],
        ),
        el = (e) => {
            var { setPopoutRef: t, position: i, nudge: a } = e,
                c = O(e, ["setPopoutRef", "position", "nudge"]);
            return (
                et(i),
                a !== z.current && ((z.current = a), null == k || k(a)),
                ei((e, i) => {
                    if (!i) return null;
                    let u = (0, r.jsx)(
                        l.VqE,
                        y(E({}, c), {
                            setDialogRef: t,
                            modal: G,
                            className: o()(null != L ? m.popoverContentWithGradient : m.popover, {
                                [m["popover--video"]]: x,
                            }),
                            returnRef: Z,
                            children: (0, r.jsx)(S.Provider, {
                                value: es,
                                children: n,
                            }),
                        }),
                    );
                    return (0, r.jsx)(s.animated.div, {
                        ref: q,
                        "data-mana-component": "popover",
                        style: y(E({}, e), {
                            "--custom-caret-edge-offset-horizontal": "".concat(I, "px"),
                            "--custom-caret-edge-offset-vertical": "".concat(T, "px"),
                            "--custom-caret-edge-offset-horizontal-nudge": "".concat(a, "px"),
                            "--custom-popover-width": "".concat(C, "px"),
                        }),
                        children:
                            null != L
                                ? (0, r.jsx)(l.$1m, {
                                      offsetBottom: j,
                                      color: L,
                                      className: m.popoverGradientWrapper,
                                      children: u,
                                  })
                                : u,
                    });
                })
            );
        };
    return (0, r.jsx)(u.H, {
        targetElementRef: a,
        shouldShow: V,
        onRequestClose: g,
        position: Y,
        align: ea,
        spacing: A + N,
        offset: eo,
        layerContext: void 0,
        positionKey: null != eo ? "".concat(Y, "-").concat(eo) : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === Y || "bottom" === Y,
        closeOnClickOutside: B,
        ignoreModalClicks: F,
        scrollBehavior: U,
        renderPopout: el,
        children: P,
    });
}
