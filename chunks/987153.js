n.d(t, {
    D: () => _.D,
    I: () => b,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(509442),
    l = n(990547),
    c = n(974955),
    u = n(200269),
    d = n(624653),
    f = n(635146),
    _ = n(219855),
    p = n(325380);
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
function m(e) {
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
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    var t;
    let {
            transitionState: n,
            animationVariant: a = "default",
            size: _ = "md",
            paddingSize: h = "sm",
            fullScreenOnMobile: g = !0,
            returnRef: b,
            role: y = "dialog",
            "aria-label": O,
            dismissable: v = !0,
            onClose: I,
            contentOutsideContainer: T,
            trackingProps: S,
            children: A,
        } = e,
        C = i.useId(),
        N = i.useMemo(
            () => ({
                id: C,
                headingId: "heading-".concat(C),
                onClose: I,
                dismissable: v,
            }),
            [v, C, I],
        ),
        R = (0, f.hv)(n, a);
    return (0, r.jsx)(d.t.Provider, {
        value: N,
        children: (0, r.jsx)(c.V, {
            id: C,
            role: y,
            "aria-label": O,
            "aria-labelledby": null != O ? void 0 : N.headingId,
            returnRef: b,
            trackingProps: E(m({}, S), {
                impressionType: null != (t = null == S ? void 0 : S.impressionType) ? t : l.ImpressionTypes.MODAL,
            }),
            children: (0, r.jsx)(u.y, {
                forceLevel: 1,
                children: (0, r.jsxs)("div", {
                    className: o()(p.outerContainer, { [p.fullScreenOnMobile]: g }),
                    children: [
                        T,
                        (0, r.jsx)(s.animated.div, {
                            "data-mana-component": "modal",
                            className: o()(p.container, p["size-".concat(_)], p["padding-size-".concat(h)]),
                            style: R,
                            children: A,
                        }),
                    ],
                }),
            }),
        }),
    });
}
