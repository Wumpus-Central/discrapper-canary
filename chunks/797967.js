n.r(t), n.d(t, { default: () => C }), n(388685);
var r = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(866442),
    i = n(28664),
    c = n(481060),
    d = n(981631),
    u = n(388032),
    p = n(989308),
    m = n(616132);
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
function b(e, t) {
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
let _ = (e) => {
        var { position: t, color: n, disabled: a } = e,
            o = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            a = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                }
                return a;
            })(e, ["position", "color", "disabled"]);
        let i = (0, l.Bd)(null != n ? n : d.p6O) > 0.1;
        return (0, r.jsx)(
            "div",
            b(g({}, o), {
                className: s()(
                    "left" === t ? m.colorPickerDropperLeft : m.colorPickerDropperRight,
                    i ? m.lightRing : m.darkRing,
                    { [m.disabled]: a },
                ),
                children: (0, r.jsx)("div", {
                    className: m.colorPickerDropperInner,
                    style: { background: (0, l.Rf)(n) },
                    children: (0, r.jsx)(c.ilE, {
                        size: "custom",
                        colorClass: i ? m.colorPickerDropperLight : m.colorPickerDropperDark,
                        width: 14,
                        height: 14,
                    }),
                }),
            }),
        );
    },
    f = (e) => {
        let {
            isStart: t,
            buttonRef: n,
            color: a,
            showPopout: o,
            position: s,
            onRequestClose: l,
            onShowPopout: d,
            onColorChange: f,
            disabled: C,
        } = e;
        return (0, r.jsx)(c.tEY, {
            children: (0, r.jsx)(c.yRy, {
                targetElementRef: n,
                renderPopout: () =>
                    (0, r.jsx)(c.Z$W, {
                        onChange: (e) => f(e, t),
                        value: a,
                    }),
                position: s,
                shouldShow: o,
                onRequestClose: l,
                children: (e) =>
                    (0, r.jsx)("div", {
                        ref: n,
                        children: (0, r.jsx)(
                            c.P3F,
                            b(g({}, e), {
                                className: m.colorSelectorPopoutContainer,
                                onClick: d,
                                "data-position": t ? "left" : "right",
                                "aria-label": u.intl.string(t ? p.default.apbXbG : p.default.JaVq1d),
                                children: (0, r.jsx)(i.u, {
                                    text: u.intl.string(t ? p.default.apbXbG : p.default.JaVq1d),
                                    position: "bottom",
                                    children: (0, r.jsx)(_, {
                                        position: t ? "left" : "right",
                                        color: null != a ? a : 0,
                                        disabled: C,
                                    }),
                                }),
                            }),
                        ),
                    }),
            }),
        });
    };
function C(e) {
    let {
            defaultColor: t,
            colors: n,
            value: o,
            onChange: p,
            disabled: C = !1,
            customPickerPosition: h = "bottom",
            secondaryValue: j,
            onChangeGradientColors: v,
            isGradient: x = !1,
            gradientButtonClassName: k,
            allowBlackCustomColor: y = !1,
        } = e,
        O = a.useCallback((e) => (0 !== e || y) && e !== t && !n.some((t) => t === e) && (y || 0 !== e), [n, t, y]),
        w = a.useRef(null),
        S = a.useRef(null),
        P = a.useRef(null),
        [E, N] = a.useState(() => (O(o) ? o : null)),
        [I, D] = a.useState({
            start: o,
            end: null != j ? j : d.p6O,
        }),
        [B, R] = a.useState({
            showStart: !1,
            showEnd: !1,
        });
    a.useEffect(() => {
        N(O(o) ? o : null),
            D({
                start: o,
                end: null != j ? j : d.p6O,
            });
    }, [o, O, j]);
    let A = a.useCallback(
            (e) => {
                null == p || p(e), N(null);
            },
            [p, N],
        ),
        L = a.useCallback(
            (e) => {
                null == p || p(e), N(e);
            },
            [p, N],
        ),
        T = a.useCallback(
            (e, t) => {
                D({
                    start: e,
                    end: t,
                }),
                    null == v || v([e, t]);
            },
            [v],
        ),
        G = a.useCallback((e, t) => {
            R((n) => b(g({}, n), { [e]: t }));
        }, []),
        U = a.useCallback(() => {
            var e, t, n, a, o;
            let i = {
                    background: "linear-gradient(90deg, "
                        .concat((0, l.Rf)(null != (e = I.start) ? e : d.p6O), " 0%, ")
                        .concat((0, l.Rf)(I.end), " 100%)"),
                },
                c = (0, r.jsxs)("div", {
                    className: m.gradientButtonContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: m.gradientSwatch,
                            style: i,
                        }),
                        (0, r.jsx)(_, {
                            position: "left",
                            color: null != (t = I.start) ? t : d.p6O,
                            disabled: C,
                        }),
                        (0, r.jsx)(_, {
                            position: "right",
                            color: null != (n = I.end) ? n : 0,
                            disabled: C,
                        }),
                    ],
                });
            return C
                ? c
                : (0, r.jsxs)("div", {
                      className: s()(m.gradientButtonContainer, k),
                      children: [
                          (0, r.jsx)("div", {
                              className: m.gradientSwatch,
                              style: i,
                          }),
                          (0, r.jsx)(f, {
                              isStart: !0,
                              buttonRef: S,
                              color: null != (a = I.start) ? a : d.p6O,
                              showPopout: B.showStart,
                              position: h,
                              onRequestClose: () => G("showStart", !1),
                              onShowPopout: () => G("showStart", !0),
                              onColorChange: (e) => T(e, I.end),
                              disabled: C,
                          }),
                          (0, r.jsx)(f, {
                              isStart: !1,
                              buttonRef: P,
                              color: null != (o = I.end) ? o : 0,
                              showPopout: B.showEnd,
                              position: h,
                              onRequestClose: () => G("showEnd", !1),
                              onShowPopout: () => G("showEnd", !0),
                              onColorChange: (e) => {
                                  var t;
                                  return T(null != (t = I.start) ? t : d.p6O, e);
                              },
                              disabled: C,
                          }),
                      ],
                  });
        }, [h, C, I, B, T, G, k]),
        M = a.useCallback(
            () =>
                (0, r.jsx)(c.Z$W, {
                    onChange: L,
                    value: o,
                }),
            [L, o],
        ),
        Z = a.useCallback(
            (e) => {
                var n;
                let a = o !== t && (0 !== o || y),
                    s = (0, r.jsx)(
                        c.jHW,
                        b(g({}, e), {
                            customColor: null != (n = e.customColor) ? n : a ? o : null,
                            "aria-label": u.intl.string(u.t["FHBa//"]),
                        }),
                    );
                return C
                    ? s
                    : (0, r.jsx)(c.yRy, {
                          targetElementRef: w,
                          renderPopout: M,
                          position: h,
                          children: (e) =>
                              (0, r.jsx)(i.u, {
                                  targetElementRef: w,
                                  text: u.intl.string(u.t["FHBa//"]),
                                  position: "bottom",
                                  children: (0, r.jsx)(
                                      "div",
                                      b(g({}, e), {
                                          ref: w,
                                          children: s,
                                      }),
                                  ),
                              }),
                      });
            },
            [h, C, M, o, t, y],
        ),
        H = a.useCallback(
            (e) => {
                let t = (0, r.jsx)(c.AGO, g({}, e));
                return C
                    ? t
                    : (0, r.jsx)(i.u, {
                          text: u.intl.string(u.t.bBvAEB),
                          position: "bottom",
                          children: (0, r.jsx)("div", { children: t }),
                      });
            },
            [C],
        );
    return (0, r.jsx)(
        c.zH8,
        b(g({}, e), {
            renderDefaultButton: H,
            renderCustomButton: Z,
            renderGradientCustomButton: U,
            isGradient: x,
            customColor: E,
            onChange: x ? T : A,
        }),
    );
}
