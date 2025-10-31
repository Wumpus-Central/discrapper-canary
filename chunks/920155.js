n.d(t, { m: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(13941),
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
            scrollBehavior: N = "sticky",
        } = e,
        [R, P] = i.useState(p),
        [w, D] = i.useState(E),
        x = i.useRef(E),
        L = (0, c.e7)([d.Z], () => d.Z.getLayers()),
        M = null != (t = L[L.length - 1]) ? t : "base",
        j = i.useMemo(() => {
            var e, t;
            return (
                null == a.current ||
                (null != (t = null == (e = a.current.closest("[data-layer]")) ? void 0 : e.getAttribute("data-layer"))
                    ? t
                    : "base") === M
            );
        }, [a, M]);
    i.useEffect(() => {
        j && p ? P(!0) : j || P(!1);
    }, [j, p]);
    let k = () => {
            P(!1);
        },
        U = (0, _.i)({
            shouldShow: p,
            caretPosition: (0, f.z)(w),
            onExitComplete: k,
        }),
        G = (e) => {
            var { setPopoutRef: t, position: i } = e,
                a = y(e, ["setPopoutRef", "position"]);
            return (
                null != i && i !== x.current && ((x.current = i), D(i), null == C || C(i)),
                U((e, i) => {
                    if (!i) return null;
                    let c = (0, r.jsx)(
                        l.VqE,
                        b(g({}, a), {
                            setDialogRef: t,
                            modal: !1,
                            className: o()(null != A ? h.popoverContentWithGradient : h.popover, {
                                [h["popover--video"]]: S,
                            }),
                            returnRef: void 0,
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
                                      children: c,
                                  })
                                : c,
                    });
                })
            );
        };
    return (0, r.jsx)(u.H, {
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
        ignoreModalClicks: !0,
        scrollBehavior: N,
        renderPopout: G,
        children: T,
    });
}
