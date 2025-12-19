n.d(t, {
    D: () => _.D,
    I: () => y,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(620792),
    l = n(990547),
    c = n(974955),
    u = n(155127),
    d = n(200269),
    f = n(624653),
    p = n(635146),
    _ = n(219855),
    m = n(51766);
function h(e, t, n) {
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
                h(e, t, n[t]);
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
function y(e) {
    var t;
    let {
            transitionState: n,
            animationVariant: a = "default",
            size: _ = "md",
            paddingSize: h = "sm",
            fullScreenOnMobile: E = !0,
            returnRef: y,
            role: O = "dialog",
            "aria-label": v,
            dismissable: S = !0,
            onClose: I,
            contentOutsideContainer: T,
            trackingProps: C,
            children: A,
        } = e,
        N = i.useId(),
        P = i.useMemo(
            () => ({
                id: N,
                headingId: "heading-".concat(N),
                onClose: I,
                dismissable: S,
            }),
            [S, N, I],
        ),
        R = (0, p.hv)(n, a),
        w = i.useRef(null);
    return (0, r.jsx)(f.t.Provider, {
        value: P,
        children: (0, r.jsx)(c.V, {
            id: N,
            role: O,
            "aria-label": v,
            "aria-labelledby": null != v ? void 0 : P.headingId,
            returnRef: y,
            trackingProps: b(g({}, C), {
                impressionType: null != (t = null == C ? void 0 : C.impressionType) ? t : l.ImpressionTypes.MODAL,
            }),
            children: (0, r.jsx)(u.Jc, {
                containerRef: w,
                children: (0, r.jsx)(d.y, {
                    forceLevel: 1,
                    children: (0, r.jsxs)("div", {
                        ref: w,
                        className: o()(m.outerContainer, { [m.fullScreenOnMobile]: E }),
                        children: [
                            T,
                            (0, r.jsx)(s.animated.div, {
                                "data-mana-component": "modal",
                                className: o()(m.container, m["size-".concat(_)], m["padding-size-".concat(h)]),
                                style: R,
                                children: A,
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
