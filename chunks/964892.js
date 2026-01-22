n.d(t, {
    e: () => v,
    x: () => P,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(432022),
    l = n(158954),
    c = n(311907),
    u = n(453903),
    d = n(765671),
    f = n(186111),
    p = n(795127),
    _ = n(283024),
    h = n(818348),
    m = n(248789);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = A(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let v = i.createContext(null),
    S = 20,
    I = 22,
    T = 240,
    C = 10,
    N = 4,
    R = h.FX;
function w() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if ("center" === e || "custom" === e) return 0;
    let i = "left" === t || "right" === t,
        a = i ? r : null != n ? n : T,
        s = i ? I : S;
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
function P(e) {
    var t;
    let {
            children: n,
            targetElementRef: a,
            shouldShow: h = !0,
            onRequestClose: g,
            position: b = "top",
            align: A,
            alignmentStrategy: P = "trigger-center",
            caretConfig: D,
            hasVideo: x = !1,
            gradientColor: L,
            gradientOffsetBottom: j = 0.4,
            onPositionChange: M,
            onNudgeChange: k,
            scrollBehavior: U = "sticky",
            modal: G = !1,
            returnRef: V,
            experimental_ignoreModalClicks: F = !0,
            closeOnClickOutside: B = !1,
        } = e,
        [H, Y] = i.useState(h),
        [W, K] = i.useState(b),
        z = i.useRef(b),
        q = i.useRef(0),
        { ref: X, width: Z, height: Q } = (0, d.Ay)(),
        $ = (0, c.bG)([f.A], () => f.A.getLayers()),
        J = null != (t = $[$.length - 1]) ? t : "base",
        ee = i.useRef(M);
    i.useEffect(() => {
        ee.current = M;
    }, [M]);
    let et = i.useCallback((e) => {
            var t;
            null != e && e !== z.current && ((z.current = e), K(e), null == (t = ee.current) || t.call(ee, e));
        }, []),
        en = i.useMemo(() => {
            var e, t;
            return (
                null == a.current ||
                (null != (e = null == (t = a.current.closest("[data-layer]")) ? void 0 : t.getAttribute("data-layer"))
                    ? e
                    : "base") === J
            );
        }, [a, J]);
    i.useEffect(() => {
        en && h ? Y(!0) : en || Y(!1);
    }, [en, h]),
        i.useEffect(() => {
            et(b);
        }, [b, et]);
    let er = () => {
            Y(!1);
        },
        ei = (0, _.L)({
            shouldShow: h,
            caretPosition: (0, p.g)(W),
            onExitComplete: er,
        }),
        ea = i.useMemo(() => {
            if ("edge" === P && null != A) {
                let e = "top" === W || "bottom" === W,
                    t = "left" === W || "right" === W;
                if (e) {
                    if ("left" === A || "center" === A || "right" === A) return A;
                } else if (t && ("top" === A || "center" === A || "bottom" === A)) return A;
            }
            return "center";
        }, [P, A, W]),
        es = i.useMemo(() => {
            var e;
            if ("edge" !== P) return w(null != (e = null == D ? void 0 : D.align) ? e : "center", W, Z, Q);
        }, [P, D, W, Z, Q]),
        eo = i.useMemo(
            () => ({
                position: W,
                caretConfig: null != D ? D : { align: "center" },
            }),
            [W, D],
        ),
        el = (e) => {
            let { setPopoutRef: t, position: i, nudge: a } = e,
                c = O(e, ["setPopoutRef", "position", "nudge"]);
            return (
                et(i),
                a !== q.current && ((q.current = a), null == k || k(a)),
                ei((e, i) => {
                    if (!i) return null;
                    let u = (0, r.jsx)(
                        l.lGe,
                        y(E({}, c), {
                            setDialogRef: t,
                            modal: G,
                            className: s()(null != L ? m.popoverContentWithGradient : m.popover, {
                                [m["popover--video"]]: x,
                            }),
                            returnRef: V,
                            children: (0, r.jsx)(v.Provider, {
                                value: eo,
                                children: n,
                            }),
                        }),
                    );
                    return (0, r.jsx)(o.animated.div, {
                        ref: X,
                        "data-mana-component": "popover",
                        style: y(E({}, e), {
                            "--custom-caret-edge-offset-horizontal": "".concat(S, "px"),
                            "--custom-caret-edge-offset-vertical": "".concat(I, "px"),
                            "--custom-caret-edge-offset-horizontal-nudge": "".concat(a, "px"),
                            "--custom-popover-width": "".concat(T, "px"),
                        }),
                        children:
                            null != L
                                ? (0, r.jsx)(l.hLv, {
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
    return (0, r.jsx)(u.$, {
        targetElementRef: a,
        shouldShow: H,
        onRequestClose: g,
        position: W,
        align: ea,
        spacing: C + N,
        offset: es,
        layerContext: void 0,
        positionKey: null != es ? "".concat(W, "-").concat(es) : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === W || "bottom" === W,
        closeOnClickOutside: B,
        ignoreModalClicks: F,
        scrollBehavior: U,
        renderPopout: el,
        children: R,
    });
}
