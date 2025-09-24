n.r(t), n.d(t, { default: () => f }), n(388685);
var r = n(951288),
    o = n(647438),
    a = n(120356),
    s = n.n(a),
    l = n(866442),
    i = n(481060),
    c = n(981631),
    d = n(388032),
    u = n(989308),
    p = n(616132);
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
function g(e, t) {
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
        var { position: t, color: n, disabled: o } = e,
            a = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        (n = a[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                }
                return o;
            })(e, ["position", "color", "disabled"]);
        let d = (0, l.Bd)(null != n ? n : c.p6O) > 0.1;
        return (0, r.jsx)(
            "div",
            g(m({}, a), {
                className: s()(
                    "left" === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight,
                    d ? p.lightRing : p.darkRing,
                    { [p.disabled]: o },
                ),
                children: (0, r.jsx)("div", {
                    className: p.colorPickerDropperInner,
                    style: { background: (0, l.Rf)(n) },
                    children: (0, r.jsx)(i.ilE, {
                        size: "custom",
                        colorClass: d ? p.colorPickerDropperLight : p.colorPickerDropperDark,
                        width: 14,
                        height: 14,
                    }),
                }),
            }),
        );
    },
    b = (e) => {
        let {
            isStart: t,
            buttonRef: n,
            color: o,
            showPopout: a,
            position: s,
            onRequestClose: l,
            onShowPopout: c,
            onColorChange: b,
            disabled: f,
        } = e;
        return (0, r.jsx)(i.tEY, {
            children: (0, r.jsx)(i.yRy, {
                targetElementRef: n,
                renderPopout: () =>
                    (0, r.jsx)(i.Z$W, {
                        onChange: (e) => b(e, t),
                        value: o,
                    }),
                position: s,
                shouldShow: a,
                onRequestClose: l,
                children: (e) =>
                    (0, r.jsx)("div", {
                        ref: n,
                        children: (0, r.jsx)(
                            i.P3F,
                            g(m({}, e), {
                                className: p.colorSelectorPopoutContainer,
                                onClick: c,
                                "data-position": t ? "left" : "right",
                                "aria-label": d.intl.string(t ? u.default.apbXbG : u.default.JaVq1d),
                                children: (0, r.jsx)(i.ua7, {
                                    text: d.intl.string(t ? u.default.apbXbG : u.default.JaVq1d),
                                    position: "bottom",
                                    children: (e) =>
                                        (0, r.jsx)(
                                            _,
                                            g(m({}, e), {
                                                position: t ? "left" : "right",
                                                color: null != o ? o : 0,
                                                disabled: f,
                                            }),
                                        ),
                                }),
                            }),
                        ),
                    }),
            }),
        });
    };
function f(e) {
    let {
            defaultColor: t,
            colors: n,
            value: a,
            onChange: u,
            disabled: f = !1,
            customPickerPosition: C = "bottom",
            secondaryValue: h,
            onChangeGradientColors: j,
            isGradient: v = !1,
            gradientButtonClassName: x,
            allowBlackCustomColor: k = !1,
        } = e,
        y = o.useCallback((e) => (0 !== e || k) && e !== t && !n.some((t) => t === e) && (k || 0 !== e), [n, t, k]),
        O = o.useRef(null),
        w = o.useRef(null),
        S = o.useRef(null),
        [P, E] = o.useState(() => (y(a) ? a : null)),
        [N, I] = o.useState({
            start: a,
            end: null != h ? h : c.p6O,
        }),
        [D, B] = o.useState({
            showStart: !1,
            showEnd: !1,
        });
    o.useEffect(() => {
        E(y(a) ? a : null),
            I({
                start: a,
                end: null != h ? h : c.p6O,
            });
    }, [a, y, h]);
    let R = o.useCallback(
            (e) => {
                null == u || u(e), E(null);
            },
            [u, E],
        ),
        A = o.useCallback(
            (e) => {
                null == u || u(e), E(e);
            },
            [u, E],
        ),
        L = o.useCallback(
            (e, t) => {
                I({
                    start: e,
                    end: t,
                }),
                    null == j || j([e, t]);
            },
            [j],
        ),
        T = o.useCallback((e, t) => {
            B((n) => g(m({}, n), { [e]: t }));
        }, []),
        G = o.useCallback(() => {
            var e, t, n, o, a;
            let i = {
                    background: "linear-gradient(90deg, "
                        .concat((0, l.Rf)(null != (e = N.start) ? e : c.p6O), " 0%, ")
                        .concat((0, l.Rf)(N.end), " 100%)"),
                },
                d = (0, r.jsxs)("div", {
                    className: p.gradientButtonContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: p.gradientSwatch,
                            style: i,
                        }),
                        (0, r.jsx)(_, {
                            position: "left",
                            color: null != (t = N.start) ? t : c.p6O,
                            disabled: f,
                        }),
                        (0, r.jsx)(_, {
                            position: "right",
                            color: null != (n = N.end) ? n : 0,
                            disabled: f,
                        }),
                    ],
                });
            return f
                ? d
                : (0, r.jsxs)("div", {
                      className: s()(p.gradientButtonContainer, x),
                      children: [
                          (0, r.jsx)("div", {
                              className: p.gradientSwatch,
                              style: i,
                          }),
                          (0, r.jsx)(b, {
                              isStart: !0,
                              buttonRef: w,
                              color: null != (o = N.start) ? o : c.p6O,
                              showPopout: D.showStart,
                              position: C,
                              onRequestClose: () => T("showStart", !1),
                              onShowPopout: () => T("showStart", !0),
                              onColorChange: (e) => L(e, N.end),
                              disabled: f,
                          }),
                          (0, r.jsx)(b, {
                              isStart: !1,
                              buttonRef: S,
                              color: null != (a = N.end) ? a : 0,
                              showPopout: D.showEnd,
                              position: C,
                              onRequestClose: () => T("showEnd", !1),
                              onShowPopout: () => T("showEnd", !0),
                              onColorChange: (e) => {
                                  var t;
                                  return L(null != (t = N.start) ? t : c.p6O, e);
                              },
                              disabled: f,
                          }),
                      ],
                  });
        }, [C, f, N, D, L, T, x]),
        U = o.useCallback(
            () =>
                (0, r.jsx)(i.Z$W, {
                    onChange: A,
                    value: a,
                }),
            [A, a],
        ),
        M = o.useCallback(
            (e) => {
                var n;
                let o = a !== t && (0 !== a || k),
                    s = (0, r.jsx)(
                        i.jHW,
                        g(m({}, e), {
                            customColor: null != (n = e.customColor) ? n : o ? a : null,
                            "aria-label": d.intl.string(d.t["FHBa//"]),
                        }),
                    );
                return f
                    ? s
                    : (0, r.jsx)(i.yRy, {
                          targetElementRef: O,
                          renderPopout: U,
                          position: C,
                          children: (e) =>
                              (0, r.jsx)(i.ua7, {
                                  targetElementRef: O,
                                  text: d.intl.string(d.t["FHBa//"]),
                                  position: "bottom",
                                  children: (t) => (0, r.jsx)("div", g(m({ ref: O }, t, e), { children: s })),
                              }),
                      });
            },
            [C, f, U, a, t, k],
        ),
        Z = o.useCallback(
            (e) => {
                let t = (0, r.jsx)(i.AGO, m({}, e));
                return f
                    ? t
                    : (0, r.jsx)(i.ua7, {
                          text: d.intl.string(d.t.bBvAEB),
                          position: "bottom",
                          children: (e) => (0, r.jsx)("div", g(m({}, e), { children: t })),
                      });
            },
            [f],
        );
    return (0, r.jsx)(
        i.zH8,
        g(m({}, e), {
            renderDefaultButton: Z,
            renderCustomButton: M,
            renderGradientCustomButton: G,
            isGradient: v,
            customColor: P,
            onChange: v ? L : R,
        }),
    );
}
