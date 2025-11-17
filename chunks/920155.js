n.d(t, { m: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(636606),
    l = n(793030),
    c = n(442837),
    u = n(930295),
    d = n(819640),
    f = n(945909),
    _ = n(866577),
    p = n(231338),
    h = n(254477);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = 10,
    I = 4,
    T = p.Vq;
function S(e) {
    var t;
    let {
            children: n,
            targetElementRef: a,
            shouldShow: p = !0,
            onRequestClose: m,
            position: E = "top",
            align: O = "center",
            hasVideo: S = !1,
            gradientColor: A,
            gradientOffsetBottom: C = 0.4,
            onPositionChange: N,
            onNudgeChange: R,
            scrollBehavior: P = "sticky",
            modal: D = !1,
            returnRef: w,
        } = e,
        [x, L] = i.useState(p),
        [M, k] = i.useState(E),
        j = i.useRef(E),
        U = i.useRef(0),
        G = (0, c.e7)([d.Z], () => d.Z.getLayers()),
        B = null != (t = G[G.length - 1]) ? t : "base",
        Z = i.useRef(N);
    i.useEffect(() => {
        Z.current = N;
    }, [N]);
    let F = i.useCallback((e) => {
            var t;
            null != e && e !== j.current && ((j.current = e), k(e), null == (t = Z.current) || t.call(Z, e));
        }, []),
        V = i.useMemo(() => {
            var e, t;
            return (
                null == a.current ||
                (null != (t = null == (e = a.current.closest("[data-layer]")) ? void 0 : e.getAttribute("data-layer"))
                    ? t
                    : "base") === B
            );
        }, [a, B]);
    i.useEffect(() => {
        V && p ? L(!0) : V || L(!1);
    }, [V, p]),
        i.useEffect(() => {
            F(E);
        }, [E, F]);
    let H = () => {
            L(!1);
        },
        Y = (0, _.i)({
            shouldShow: p,
            caretPosition: (0, f.z)(M),
            onExitComplete: H,
        }),
        W = (e) => {
            var { setPopoutRef: t, position: i, nudge: a } = e,
                c = y(e, ["setPopoutRef", "position", "nudge"]);
            return (
                F(i),
                a !== U.current && ((U.current = a), null == R || R(a)),
                Y((e, i) => {
                    if (!i) return null;
                    let a = (0, r.jsx)(
                        l.VqE,
                        b(g({}, c), {
                            setDialogRef: t,
                            modal: D,
                            className: o()(null != A ? h.popoverContentWithGradient : h.popover, {
                                [h["popover--video"]]: S,
                            }),
                            returnRef: w,
                            children: n,
                        }),
                    );
                    return (0, r.jsx)(s.animated.div, {
                        "data-mana-component": "popover",
                        style: e,
                        children:
                            null != A
                                ? (0, r.jsx)(l.$1m, {
                                      offsetBottom: C,
                                      color: A,
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
        shouldShow: x,
        onRequestClose: m,
        position: M,
        align: O,
        spacing: v + I,
        layerContext: void 0,
        positionKey: void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === M || "bottom" === M,
        closeOnClickOutside: !1,
        ignoreModalClicks: !0,
        scrollBehavior: P,
        renderPopout: W,
        children: T,
    });
}
