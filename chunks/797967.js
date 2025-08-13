n.r(t), n.d(t, { default: () => _ }), n(388685);
var r = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(866442),
    i = n(481060),
    c = n(981631),
    d = n(388032),
    u = n(93841),
    p = n(857924);
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
let f = (e) => {
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
        let d = (0, l.Bd)(null != n ? n : c.p6O) > 0.1;
        return (0, r.jsx)(
            "div",
            g(m({}, o), {
                className: s()(
                    "left" === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight,
                    d ? p.lightRing : p.darkRing,
                    { [p.disabled]: a },
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
            color: a,
            showPopout: o,
            position: s,
            onRequestClose: l,
            onShowPopout: c,
            onColorChange: b,
            disabled: _,
        } = e;
        return (0, r.jsx)(i.tEY, {
            children: (0, r.jsx)(i.yRy, {
                targetElementRef: n,
                renderPopout: () =>
                    (0, r.jsx)(i.Z$W, {
                        onChange: (e) => b(e, t),
                        value: a,
                    }),
                position: s,
                shouldShow: o,
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
                                            f,
                                            g(m({}, e), {
                                                position: t ? "left" : "right",
                                                color: null != a ? a : 0,
                                                disabled: _,
                                            }),
                                        ),
                                }),
                            }),
                        ),
                    }),
            }),
        });
    };
function _(e) {
    let {
            defaultColor: t,
            colors: n,
            value: o,
            onChange: u,
            disabled: _ = !1,
            customPickerPosition: h = "bottom",
            secondaryValue: x,
            onChangeGradientColors: j,
            isGradient: v = !1,
            gradientButtonClassName: k,
            allowBlackCustomColor: C = !1,
        } = e,
        y = a.useCallback((e) => (0 !== e || C) && e !== t && !n.some((t) => t === e) && (C || 0 !== e), [n, t, C]),
        O = a.useRef(null),
        P = a.useRef(null),
        S = a.useRef(null),
        [w, I] = a.useState(() => (y(o) ? o : null)),
        [N, E] = a.useState({
            start: o,
            end: null != x ? x : c.p6O,
        }),
        [B, D] = a.useState({
            showStart: !1,
            showEnd: !1,
        });
    a.useEffect(() => {
        I(y(o) ? o : null),
            E({
                start: o,
                end: null != x ? x : c.p6O,
            });
    }, [o, y, x]);
    let R = a.useCallback(
            (e) => {
                null == u || u(e), I(null);
            },
            [u, I],
        ),
        A = a.useCallback(
            (e) => {
                null == u || u(e), I(e);
            },
            [u, I],
        ),
        Z = a.useCallback(
            (e, t) => {
                E({
                    start: e,
                    end: t,
                }),
                    null == j || j([e, t]);
            },
            [j],
        ),
        T = a.useCallback((e, t) => {
            D((n) => g(m({}, n), { [e]: t }));
        }, []),
        G = a.useCallback(() => {
            var e, t, n, a, o;
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
                        (0, r.jsx)(f, {
                            position: "left",
                            color: null != (t = N.start) ? t : c.p6O,
                            disabled: _,
                        }),
                        (0, r.jsx)(f, {
                            position: "right",
                            color: null != (n = N.end) ? n : 0,
                            disabled: _,
                        }),
                    ],
                });
            return _
                ? d
                : (0, r.jsxs)("div", {
                      className: s()(p.gradientButtonContainer, k),
                      children: [
                          (0, r.jsx)("div", {
                              className: p.gradientSwatch,
                              style: i,
                          }),
                          (0, r.jsx)(b, {
                              isStart: !0,
                              buttonRef: P,
                              color: null != (a = N.start) ? a : c.p6O,
                              showPopout: B.showStart,
                              position: h,
                              onRequestClose: () => T("showStart", !1),
                              onShowPopout: () => T("showStart", !0),
                              onColorChange: (e) => Z(e, N.end),
                              disabled: _,
                          }),
                          (0, r.jsx)(b, {
                              isStart: !1,
                              buttonRef: S,
                              color: null != (o = N.end) ? o : 0,
                              showPopout: B.showEnd,
                              position: h,
                              onRequestClose: () => T("showEnd", !1),
                              onShowPopout: () => T("showEnd", !0),
                              onColorChange: (e) => {
                                  var t;
                                  return Z(null != (t = N.start) ? t : c.p6O, e);
                              },
                              disabled: _,
                          }),
                      ],
                  });
        }, [h, _, N, B, Z, T, k]),
        L = a.useCallback(
            () =>
                (0, r.jsx)(i.Z$W, {
                    onChange: A,
                    value: w,
                }),
            [A, w],
        ),
        F = a.useCallback(
            (e) => {
                let t = (0, r.jsx)(i.jHW, g(m({}, e), { "aria-label": d.intl.string(d.t["FHBa//"]) }));
                return _
                    ? t
                    : (0, r.jsx)(i.yRy, {
                          targetElementRef: O,
                          renderPopout: L,
                          position: h,
                          children: (e) =>
                              (0, r.jsx)(i.ua7, {
                                  targetElementRef: O,
                                  text: d.intl.string(d.t["FHBa//"]),
                                  position: "bottom",
                                  children: (n) => (0, r.jsx)("div", g(m({ ref: O }, n, e), { children: t })),
                              }),
                      });
            },
            [h, _, L],
        ),
        U = a.useCallback(
            (e) => {
                let t = (0, r.jsx)(i.AGO, m({}, e));
                return _
                    ? t
                    : (0, r.jsx)(i.ua7, {
                          text: d.intl.string(d.t.bBvAEB),
                          position: "bottom",
                          children: (e) => (0, r.jsx)("div", g(m({}, e), { children: t })),
                      });
            },
            [_],
        );
    return (0, r.jsx)(
        i.zH8,
        g(m({}, e), {
            renderDefaultButton: U,
            renderCustomButton: F,
            renderGradientCustomButton: G,
            isGradient: v,
            customColor: w,
            onChange: v ? Z : R,
        }),
    );
}
