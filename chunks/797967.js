n.r(t), n.d(t, { default: () => _ }), n(388685);
var o = n(951288),
    l = n(647438),
    r = n(120356),
    a = n.n(r),
    i = n(866442),
    s = n(28664),
    c = n(481060),
    d = n(981631),
    u = n(388032),
    p = n(989308),
    m = n(616132);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            o.forEach(function (t) {
                var o;
                (o = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o);
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
                      var o = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, o);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = (e) => {
        var { position: t, color: n, disabled: l } = e,
            r = (function (e, t) {
                if (null == e) return {};
                var n,
                    o,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            o,
                            l = {},
                            r = Object.keys(e);
                        for (o = 0; o < r.length; o++) (n = r[o]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < r.length; o++)
                        (n = r[o]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(e, ["position", "color", "disabled"]);
        let s = (0, i.Bd)(null != n ? n : d.p6O) > 0.1;
        return (0, o.jsx)(
            "div",
            g(f({}, r), {
                className: a()(
                    "left" === t ? m.colorPickerDropperLeft : m.colorPickerDropperRight,
                    s ? m.lightRing : m.darkRing,
                    { [m.disabled]: l },
                ),
                children: (0, o.jsx)("div", {
                    className: m.colorPickerDropperInner,
                    style: { background: (0, i.Rf)(n) },
                    children: (0, o.jsx)(c.ilE, {
                        size: "custom",
                        colorClass: s ? m.colorPickerDropperLight : m.colorPickerDropperDark,
                        width: 14,
                        height: 14,
                    }),
                }),
            }),
        );
    },
    x = (e) => {
        let {
            isStart: t,
            buttonRef: n,
            color: l,
            showPopout: r,
            position: a,
            onRequestClose: i,
            onShowPopout: d,
            onColorChange: x,
            disabled: _,
        } = e;
        return (0, o.jsx)(c.tEY, {
            children: (0, o.jsx)(c.yRy, {
                targetElementRef: n,
                renderPopout: () =>
                    (0, o.jsx)(c.Z$W, {
                        onChange: (e) => x(e, t),
                        value: l,
                    }),
                position: a,
                shouldShow: r,
                onRequestClose: i,
                children: (e) =>
                    (0, o.jsx)("div", {
                        ref: n,
                        children: (0, o.jsx)(
                            c.P3F,
                            g(f({}, e), {
                                className: m.colorSelectorPopoutContainer,
                                onClick: d,
                                "data-position": t ? "left" : "right",
                                "aria-label": u.intl.string(t ? p.default.apbXbG : p.default.JaVq1d),
                                children: (0, o.jsx)(s.u, {
                                    text: u.intl.string(t ? p.default.apbXbG : p.default.JaVq1d),
                                    position: "bottom",
                                    children: (0, o.jsx)(h, {
                                        position: t ? "left" : "right",
                                        color: null != l ? l : 0,
                                        disabled: _,
                                    }),
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
            value: r,
            onChange: p,
            disabled: _ = !1,
            customPickerPosition: b = "bottom",
            secondaryValue: S,
            onChangeGradientColors: j,
            isGradient: C = !1,
            gradientButtonClassName: v,
            allowBlackCustomColor: P = !1,
        } = e,
        N = l.useCallback((e) => (0 !== e || P) && e !== t && !n.some((t) => t === e) && (P || 0 !== e), [n, t, P]),
        k = l.useRef(null),
        y = l.useRef(null),
        O = l.useRef(null),
        [T, E] = l.useState(() => (N(r) ? r : null)),
        [D, R] = l.useState({
            start: r,
            end: null != S ? S : d.p6O,
        }),
        [L, A] = l.useState({
            showStart: !1,
            showEnd: !1,
        });
    l.useEffect(() => {
        E(N(r) ? r : null),
            R({
                start: r,
                end: null != S ? S : d.p6O,
            });
    }, [r, N, S]);
    let I = l.useCallback(
            (e) => {
                null == p || p(e), E(null);
            },
            [p, E],
        ),
        w = l.useCallback(
            (e) => {
                null == p || p(e), E(e);
            },
            [p, E],
        ),
        B = l.useCallback(
            (e, t) => {
                R({
                    start: e,
                    end: t,
                }),
                    null == j || j([e, t]);
            },
            [j],
        ),
        M = l.useCallback((e, t) => {
            A((n) => g(f({}, n), { [e]: t }));
        }, []),
        Z = l.useCallback(() => {
            var e, t, n, l, r;
            let s = {
                    background: "linear-gradient(90deg, "
                        .concat((0, i.Rf)(null != (e = D.start) ? e : d.p6O), " 0%, ")
                        .concat((0, i.Rf)(D.end), " 100%)"),
                },
                c = (0, o.jsxs)("div", {
                    className: m.gradientButtonContainer,
                    children: [
                        (0, o.jsx)("div", {
                            className: m.gradientSwatch,
                            style: s,
                        }),
                        (0, o.jsx)(h, {
                            position: "left",
                            color: null != (t = D.start) ? t : d.p6O,
                            disabled: _,
                        }),
                        (0, o.jsx)(h, {
                            position: "right",
                            color: null != (n = D.end) ? n : 0,
                            disabled: _,
                        }),
                    ],
                });
            return _
                ? c
                : (0, o.jsxs)("div", {
                      className: a()(m.gradientButtonContainer, v),
                      children: [
                          (0, o.jsx)("div", {
                              className: m.gradientSwatch,
                              style: s,
                          }),
                          (0, o.jsx)(x, {
                              isStart: !0,
                              buttonRef: y,
                              color: null != (l = D.start) ? l : d.p6O,
                              showPopout: L.showStart,
                              position: b,
                              onRequestClose: () => M("showStart", !1),
                              onShowPopout: () => M("showStart", !0),
                              onColorChange: (e) => B(e, D.end),
                              disabled: _,
                          }),
                          (0, o.jsx)(x, {
                              isStart: !1,
                              buttonRef: O,
                              color: null != (r = D.end) ? r : 0,
                              showPopout: L.showEnd,
                              position: b,
                              onRequestClose: () => M("showEnd", !1),
                              onShowPopout: () => M("showEnd", !0),
                              onColorChange: (e) => {
                                  var t;
                                  return B(null != (t = D.start) ? t : d.p6O, e);
                              },
                              disabled: _,
                          }),
                      ],
                  });
        }, [b, _, D, L, B, M, v]),
        G = l.useCallback(
            () =>
                (0, o.jsx)(c.Z$W, {
                    onChange: w,
                    value: r,
                }),
            [w, r],
        ),
        Y = l.useCallback(
            (e) => {
                var n;
                let l = r !== t && (0 !== r || P),
                    a = (0, o.jsx)(
                        c.jHW,
                        g(f({}, e), {
                            customColor: null != (n = e.customColor) ? n : l ? r : null,
                            "aria-label": u.intl.string(u.t["FHBa//"]),
                        }),
                    );
                return _
                    ? a
                    : (0, o.jsx)(c.yRy, {
                          targetElementRef: k,
                          renderPopout: G,
                          position: b,
                          children: (e) =>
                              (0, o.jsx)(s.u, {
                                  targetElementRef: k,
                                  text: u.intl.string(u.t["FHBa//"]),
                                  position: "bottom",
                                  children: (0, o.jsx)(
                                      "div",
                                      g(f({}, e), {
                                          ref: k,
                                          children: a,
                                      }),
                                  ),
                              }),
                      });
            },
            [b, _, G, r, t, P],
        ),
        H = l.useCallback(
            (e) => {
                let t = (0, o.jsx)(c.AGO, f({}, e));
                return _
                    ? t
                    : (0, o.jsx)(s.u, {
                          text: u.intl.string(u.t.bBvAEB),
                          position: "bottom",
                          children: (0, o.jsx)("div", { children: t }),
                      });
            },
            [_],
        );
    return (0, o.jsx)(
        c.zH8,
        g(f({}, e), {
            renderDefaultButton: H,
            renderCustomButton: Y,
            renderGradientCustomButton: Z,
            isGradient: C,
            customColor: T,
            onChange: C ? B : I,
        }),
    );
}
