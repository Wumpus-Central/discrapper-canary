n.d(t, { m: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(803948),
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
let y = 10,
    O = 4,
    v = p.Vq;
function I(e) {
    var t;
    let {
            children: n,
            targetElementRef: a,
            shouldShow: p = !0,
            onRequestClose: m,
            position: E = "top",
            align: I = "center",
            hasVideo: T = !1,
            gradientColor: S,
            caretConfig: A,
        } = e,
        [C, N] = i.useState(p),
        R = (0, l.e7)([f.Z], () => f.Z.getLayers()),
        P = null != (t = R[R.length - 1]) ? t : "base",
        w = i.useMemo(() => {
            var e;
            return (
                null == a.current ||
                (null == (e = a.current.closest("[data-layer]")) ? void 0 : e.getAttribute("data-layer")) === P
            );
        }, [a, P]);
    i.useEffect(() => {
        N(w && p);
    }, [w, p]);
    let D = () => {
            N(!1);
        },
        x = (e) => {
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
        },
        L = (0, _.i)({
            shouldShow: p,
            caretPosition: (null == A ? void 0 : A.position) != null ? A.position : x(E),
            onExitComplete: D,
        }),
        j = (e) =>
            L((t, i) => {
                if (!i) return null;
                let l = (0, r.jsx)(
                    u.V,
                    b(g({}, e), {
                        modal: !1,
                        className: o()(null != S ? h.popoverContentWithGradient : h.popover, {
                            [h["popover--video"]]: T,
                        }),
                        returnRef: a,
                        children: n,
                    }),
                );
                return (0, r.jsx)(s.animated.div, {
                    "data-mana-component": "popover",
                    style: t,
                    children:
                        null != S
                            ? (0, r.jsx)(d.$, {
                                  color: S,
                                  className: h.popoverGradientWrapper,
                                  children: l,
                              })
                            : l,
                });
            });
    return (0, r.jsx)(c.H, {
        targetElementRef: a,
        shouldShow: C,
        onRequestClose: m,
        position: E,
        align: I,
        spacing: y + O,
        layerContext: void 0,
        positionKey: void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        closeOnClickOutside: !1,
        renderPopout: j,
        children: v,
    });
}
