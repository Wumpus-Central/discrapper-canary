n.d(t, { m: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(203463),
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
            onPositionChange: C,
            onNudgeChange: N,
            scrollBehavior: R = "sticky",
            modal: P = !1,
            returnRef: D,
        } = e,
        [w, x] = i.useState(p),
        [L, M] = i.useState(E),
        k = i.useRef(E),
        j = i.useRef(0),
        U = (0, c.e7)([d.Z], () => d.Z.getLayers()),
        G = null != (t = U[U.length - 1]) ? t : "base",
        B = i.useRef(C);
    i.useEffect(() => {
        B.current = C;
    }, [C]);
    let Z = i.useCallback((e) => {
            var t;
            null != e && e !== k.current && ((k.current = e), M(e), null == (t = B.current) || t.call(B, e));
        }, []),
        F = i.useMemo(() => {
            var e, t;
            return (
                null == a.current ||
                (null != (t = null == (e = a.current.closest("[data-layer]")) ? void 0 : e.getAttribute("data-layer"))
                    ? t
                    : "base") === G
            );
        }, [a, G]);
    i.useEffect(() => {
        F && p ? x(!0) : F || x(!1);
    }, [F, p]),
        i.useEffect(() => {
            Z(E);
        }, [E, Z]);
    let V = () => {
            x(!1);
        },
        H = (0, _.i)({
            shouldShow: p,
            caretPosition: (0, f.z)(L),
            onExitComplete: V,
        }),
        Y = (e) => {
            var { setPopoutRef: t, position: i, nudge: a } = e,
                c = y(e, ["setPopoutRef", "position", "nudge"]);
            return (
                Z(i),
                a !== j.current && ((j.current = a), null == N || N(a)),
                H((e, i) => {
                    if (!i) return null;
                    let a = (0, r.jsx)(
                        l.VqE,
                        b(g({}, c), {
                            setDialogRef: t,
                            modal: P,
                            className: o()(null != A ? h.popoverContentWithGradient : h.popover, {
                                [h["popover--video"]]: S,
                            }),
                            returnRef: D,
                            children: n,
                        }),
                    );
                    return (0, r.jsx)(s.animated.div, {
                        "data-mana-component": "popover",
                        style: e,
                        children:
                            null != A
                                ? (0, r.jsx)(l.$1m, {
                                      offsetBottom: 0.4,
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
        shouldShow: w,
        onRequestClose: m,
        position: L,
        align: O,
        spacing: v + I,
        layerContext: void 0,
        positionKey: void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === L || "bottom" === L,
        closeOnClickOutside: !1,
        ignoreModalClicks: !0,
        scrollBehavior: R,
        renderPopout: Y,
        children: T,
    });
}
