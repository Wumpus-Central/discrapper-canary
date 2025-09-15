n.d(t, { m: () => A }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(938288),
    l = n(442837),
    c = n(930295),
    u = n(681803),
    d = n(304789),
    f = n(819640),
    _ = n(945909),
    p = n(866577),
    h = n(231338),
    m = n(254477);
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
let I = 10,
    T = 4,
    S = h.Vq;
function A(e) {
    var t;
    let {
            children: n,
            targetElementRef: a,
            shouldShow: h = !0,
            onRequestClose: g,
            position: b = "top",
            align: v = "center",
            hasVideo: A = !1,
            gradientColor: C,
            onPositionChange: N,
            scrollBehavior: R = "sticky",
        } = e,
        [P, w] = i.useState(h),
        [D, x] = i.useState(b),
        L = i.useRef(b),
        j = (0, l.e7)([f.Z], () => f.Z.getLayers()),
        M = null != (t = j[j.length - 1]) ? t : "base",
        k = i.useMemo(() => {
            var e;
            return (
                null == a.current ||
                (null == (e = a.current.closest("[data-layer]")) ? void 0 : e.getAttribute("data-layer")) === M
            );
        }, [a, M]);
    i.useEffect(() => {
        k && h ? w(!0) : k || w(!1);
    }, [k, h]);
    let U = () => {
            w(!1);
        },
        G = (0, p.i)({
            shouldShow: h,
            caretPosition: (0, _.z)(D),
            onExitComplete: U,
        }),
        B = (e) => {
            var { setPopoutRef: t, position: i } = e,
                l = O(e, ["setPopoutRef", "position"]);
            return (
                null != i && i !== L.current && ((L.current = i), x(i), null == N || N(i)),
                G((e, i) => {
                    if (!i) return null;
                    let c = (0, r.jsx)(
                        u.V,
                        y(E({}, l), {
                            setDialogRef: t,
                            modal: !1,
                            className: o()(null != C ? m.popoverContentWithGradient : m.popover, {
                                [m["popover--video"]]: A,
                            }),
                            returnRef: a,
                            children: n,
                        }),
                    );
                    return (0, r.jsx)(s.animated.div, {
                        "data-mana-component": "popover",
                        style: e,
                        children:
                            null != C
                                ? (0, r.jsx)(d.$, {
                                      offsetBottom: 0.4,
                                      color: C,
                                      className: m.popoverGradientWrapper,
                                      children: c,
                                  })
                                : c,
                    });
                })
            );
        };
    return (0, r.jsx)(c.H, {
        targetElementRef: a,
        shouldShow: P,
        onRequestClose: g,
        position: D,
        align: v,
        spacing: I + T,
        layerContext: void 0,
        positionKey: void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === D || "bottom" === D,
        closeOnClickOutside: !1,
        scrollBehavior: R,
        renderPopout: B,
        children: S,
    });
}
