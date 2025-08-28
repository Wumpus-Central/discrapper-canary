n.d(t, {
    m: () => S,
    q: () => A,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(202841),
    l = n(442837),
    c = n(930295),
    u = n(681803),
    d = n(304789),
    f = n(819640),
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
            gradientColor: C,
            onPositionChange: N,
        } = e,
        [R, P] = i.useState(p),
        [w, D] = i.useState(E),
        x = i.useRef(E),
        L = (0, l.e7)([f.Z], () => f.Z.getLayers()),
        j = null != (t = L[L.length - 1]) ? t : "base",
        M = i.useMemo(() => {
            var e;
            return (
                null == a.current ||
                (null == (e = a.current.closest("[data-layer]")) ? void 0 : e.getAttribute("data-layer")) === j
            );
        }, [a, j]);
    i.useEffect(() => {
        P(M && p);
    }, [M, p]);
    let k = () => {
            P(!1);
        },
        U = (0, _.i)({
            shouldShow: p,
            caretPosition: A(w),
            onExitComplete: k,
        }),
        G = (e) => {
            var { setPopoutRef: t, position: i } = e,
                l = y(e, ["setPopoutRef", "position"]);
            return (
                null != i && i !== x.current && ((x.current = i), D(i), null == N || N(i)),
                U((e, i) => {
                    if (!i) return null;
                    let c = (0, r.jsx)(
                        u.V,
                        b(g({}, l), {
                            setDialogRef: t,
                            modal: !1,
                            className: o()(null != C ? h.popoverContentWithGradient : h.popover, {
                                [h["popover--video"]]: S,
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
                                      className: h.popoverGradientWrapper,
                                      children: c,
                                  })
                                : c,
                    });
                })
            );
        };
    return (0, r.jsx)(c.H, {
        targetElementRef: a,
        shouldShow: R,
        onRequestClose: m,
        position: w,
        align: O,
        spacing: v + I,
        layerContext: void 0,
        positionKey: void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === w || "bottom" === w,
        closeOnClickOutside: !1,
        scrollBehavior: "sticky",
        renderPopout: G,
        children: T,
    });
}
let A = (e) => {
    switch (e) {
        case "top":
            return "bottom";
        case "bottom":
        default:
            return "top";
        case "left":
            return "right";
        case "right":
            return "left";
    }
};
