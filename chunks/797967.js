n.r(t), n.d(t, { default: () => b }), n(388685);
var r = n(255367),
    o = n(73800),
    l = n(120356),
    a = n.n(l),
    i = n(866442),
    s = n(481060),
    c = n(981631),
    d = n(388032),
    u = n(93841),
    p = n(675602);
function f(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = (e) => {
        var { position: t, color: n, disabled: o } = e,
            l = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                }
                return o;
            })(e, ["position", "color", "disabled"]);
        let d = (0, i.Bd)(null != n ? n : c.p6O) > 0.1;
        return (0, r.jsx)(
            "div",
            m(f({}, l), {
                className: a()(
                    "left" === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight,
                    d ? p.lightRing : p.darkRing,
                    { [p.disabled]: o },
                ),
                children: (0, r.jsx)("div", {
                    className: p.colorPickerDropperInner,
                    style: { background: (0, i.Rf)(n) },
                    children: (0, r.jsx)(s.ilE, {
                        size: "custom",
                        colorClass: d ? p.colorPickerDropperLight : p.colorPickerDropperDark,
                        width: 14,
                        height: 14,
                    }),
                }),
            }),
        );
    },
    h = (e) => {
        let {
            isStart: t,
            buttonRef: n,
            color: o,
            showPopout: l,
            position: a,
            onRequestClose: i,
            onShowPopout: c,
            onColorChange: h,
            disabled: b,
        } = e;
        return (0, r.jsx)(s.tEY, {
            children: (0, r.jsx)(s.yRy, {
                targetElementRef: n,
                renderPopout: () =>
                    (0, r.jsx)(s.Z$W, {
                        onChange: (e) => h(e, t),
                        value: o,
                    }),
                position: a,
                shouldShow: l,
                onRequestClose: i,
                children: (e) =>
                    (0, r.jsx)("div", {
                        ref: n,
                        children: (0, r.jsx)(
                            s.P3F,
                            m(f({}, e), {
                                className: p.colorSelectorPopoutContainer,
                                onClick: c,
                                "data-position": t ? "left" : "right",
                                "aria-label": d.intl.string(t ? u.default.apbXbG : u.default.JaVq1d),
                                children: (0, r.jsx)(s.ua7, {
                                    text: d.intl.string(t ? u.default.apbXbG : u.default.JaVq1d),
                                    position: "bottom",
                                    children: (e) =>
                                        (0, r.jsx)(
                                            g,
                                            m(f({}, e), {
                                                position: t ? "left" : "right",
                                                color: null != o ? o : 0,
                                                disabled: b,
                                            }),
                                        ),
                                }),
                            }),
                        ),
                    }),
            }),
        });
    };
function b(e) {
    let {
            defaultColor: t,
            colors: n,
            value: l,
            onChange: u,
            disabled: b = !1,
            customPickerPosition: x = "bottom",
            secondaryValue: j,
            onChangeGradientColors: _,
            isGradient: S = !1,
            gradientButtonClassName: C,
            allowBlackCustomColor: y = !1,
        } = e,
        O = o.useCallback((e) => (0 !== e || y) && e !== t && !n.some((t) => t === e) && (y || 0 !== e), [n, t, y]),
        P = o.useRef(null),
        v = o.useRef(null),
        k = o.useRef(null),
        [E, N] = o.useState(() => (O(l) ? l : null)),
        [T, D] = o.useState({
            start: l,
            end: null != j ? j : c.p6O,
        }),
        [w, I] = o.useState({
            showStart: !1,
            showEnd: !1,
        });
    o.useEffect(() => {
        N(O(l) ? l : null),
            D({
                start: l,
                end: null != j ? j : c.p6O,
            });
    }, [l, O, j]);
    let A = o.useCallback(
            (e) => {
                null == u || u(e), N(null);
            },
            [u, N],
        ),
        L = o.useCallback(
            (e) => {
                null == u || u(e), N(e);
            },
            [u, N],
        ),
        R = o.useCallback(
            (e, t) => {
                D({
                    start: e,
                    end: t,
                }),
                    null == _ || _([e, t]);
            },
            [_],
        ),
        B = o.useCallback((e, t) => {
            I((n) => m(f({}, n), { [e]: t }));
        }, []),
        M = o.useCallback(() => {
            var e, t, n, o, l;
            let s = {
                    background: "linear-gradient(90deg, "
                        .concat((0, i.Rf)(null != (e = T.start) ? e : c.p6O), " 0%, ")
                        .concat((0, i.Rf)(T.end), " 100%)"),
                },
                d = (0, r.jsxs)("div", {
                    className: p.gradientButtonContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: p.gradientSwatch,
                            style: s,
                        }),
                        (0, r.jsx)(g, {
                            position: "left",
                            color: null != (t = T.start) ? t : c.p6O,
                            disabled: b,
                        }),
                        (0, r.jsx)(g, {
                            position: "right",
                            color: null != (n = T.end) ? n : 0,
                            disabled: b,
                        }),
                    ],
                });
            return b
                ? d
                : (0, r.jsxs)("div", {
                      className: a()(p.gradientButtonContainer, C),
                      children: [
                          (0, r.jsx)("div", {
                              className: p.gradientSwatch,
                              style: s,
                          }),
                          (0, r.jsx)(h, {
                              isStart: !0,
                              buttonRef: v,
                              color: null != (o = T.start) ? o : c.p6O,
                              showPopout: w.showStart,
                              position: x,
                              onRequestClose: () => B("showStart", !1),
                              onShowPopout: () => B("showStart", !0),
                              onColorChange: (e) => R(e, T.end),
                              disabled: b,
                          }),
                          (0, r.jsx)(h, {
                              isStart: !1,
                              buttonRef: k,
                              color: null != (l = T.end) ? l : 0,
                              showPopout: w.showEnd,
                              position: x,
                              onRequestClose: () => B("showEnd", !1),
                              onShowPopout: () => B("showEnd", !0),
                              onColorChange: (e) => {
                                  var t;
                                  return R(null != (t = T.start) ? t : c.p6O, e);
                              },
                              disabled: b,
                          }),
                      ],
                  });
        }, [x, b, T, w, R, B, C]),
        Z = o.useCallback(
            () =>
                (0, r.jsx)(s.Z$W, {
                    onChange: L,
                    value: E,
                }),
            [L, E],
        ),
        Y = o.useCallback(
            (e) => {
                let t = (0, r.jsx)(s.jHW, m(f({}, e), { "aria-label": d.intl.string(d.t["FHBa//"]) }));
                return b
                    ? t
                    : (0, r.jsx)(s.yRy, {
                          targetElementRef: P,
                          renderPopout: Z,
                          position: x,
                          children: (e) =>
                              (0, r.jsx)(s.ua7, {
                                  targetElementRef: P,
                                  text: d.intl.string(d.t["FHBa//"]),
                                  position: "bottom",
                                  children: (n) => (0, r.jsx)("div", m(f({ ref: P }, n, e), { children: t })),
                              }),
                      });
            },
            [x, b, Z],
        ),
        G = o.useCallback(
            (e) => {
                let t = (0, r.jsx)(s.AGO, f({}, e));
                return b
                    ? t
                    : (0, r.jsx)(s.ua7, {
                          text: d.intl.string(d.t.bBvAEB),
                          position: "bottom",
                          children: (e) => (0, r.jsx)("div", m(f({}, e), { children: t })),
                      });
            },
            [b],
        );
    return (0, r.jsx)(
        s.zH8,
        m(f({}, e), {
            renderDefaultButton: G,
            renderCustomButton: Y,
            renderGradientCustomButton: M,
            isGradient: S,
            customColor: E,
            onChange: S ? R : A,
        }),
    );
}
