n.r(t), n.d(t, { default: () => b }), n(388685);
var l = n(951288),
    o = n(647438),
    r = n(120356),
    i = n.n(r),
    a = n(866442),
    s = n(28664),
    c = n(481060),
    d = n(981631),
    u = n(388032),
    p = n(789142),
    m = n(85854);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
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
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = (e) => {
        var { position: t, color: n, disabled: o } = e,
            r = (function (e, t) {
                if (null == e) return {};
                var n,
                    l,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            l,
                            o = {},
                            r = Object.keys(e);
                        for (l = 0; l < r.length; l++) (n = r[l]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < r.length; l++)
                        (n = r[l]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                }
                return o;
            })(e, ["position", "color", "disabled"]);
        let s = (0, a.Bd)(null != n ? n : d.p6O) > 0.1;
        return (0, l.jsx)(
            "div",
            g(f({}, r), {
                className: i()(
                    "left" === t ? m.colorPickerDropperLeft : m.colorPickerDropperRight,
                    s ? m.lightRing : m.darkRing,
                    { [m.disabled]: o },
                ),
                children: (0, l.jsx)("div", {
                    className: m.colorPickerDropperInner,
                    style: { background: (0, a.Rf)(n) },
                    children: (0, l.jsx)(c.ilE, {
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
            color: o,
            showPopout: r,
            position: i,
            onRequestClose: a,
            onShowPopout: d,
            onColorChange: x,
            disabled: b,
        } = e;
        return (0, l.jsx)(c.tEY, {
            children: (0, l.jsx)(c.yRy, {
                targetElementRef: n,
                renderPopout: () =>
                    (0, l.jsx)(c.Z$W, {
                        onChange: (e) => x(e, t),
                        value: o,
                    }),
                position: i,
                shouldShow: r,
                onRequestClose: a,
                children: (e) =>
                    (0, l.jsx)("div", {
                        ref: n,
                        children: (0, l.jsx)(
                            c.P3F,
                            g(f({}, e), {
                                className: m.colorSelectorPopoutContainer,
                                onClick: d,
                                "data-position": t ? "left" : "right",
                                "aria-label": u.intl.string(t ? p.default.apbXbH : p.default.JaVq1b),
                                children: (0, l.jsx)(s.u, {
                                    text: u.intl.string(t ? p.default.apbXbH : p.default.JaVq1b),
                                    position: "bottom",
                                    children: (0, l.jsx)(h, {
                                        position: t ? "left" : "right",
                                        color: null != o ? o : 0,
                                        disabled: b,
                                    }),
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
            value: r,
            onChange: p,
            disabled: b = !1,
            customPickerPosition: _ = "bottom",
            secondaryValue: S,
            onChangeGradientColors: j,
            isGradient: C = !1,
            gradientButtonClassName: v,
            allowBlackCustomColor: P = !1,
        } = e,
        N = o.useCallback((e) => (0 !== e || P) && e !== t && !n.some((t) => t === e) && (P || 0 !== e), [n, t, P]),
        y = o.useRef(null),
        k = o.useRef(null),
        O = o.useRef(null),
        [T, E] = o.useState(() => (N(r) ? r : null)),
        [D, R] = o.useState({
            start: r,
            end: null != S ? S : d.p6O,
        }),
        [A, I] = o.useState({
            showStart: !1,
            showEnd: !1,
        });
    o.useEffect(() => {
        E(N(r) ? r : null),
            R({
                start: r,
                end: null != S ? S : d.p6O,
            });
    }, [r, N, S]);
    let L = o.useCallback(
            (e) => {
                null == p || p(e), E(null);
            },
            [p, E],
        ),
        w = o.useCallback(
            (e) => {
                null == p || p(e), E(e);
            },
            [p, E],
        ),
        B = o.useCallback(
            (e, t) => {
                R({
                    start: e,
                    end: t,
                }),
                    null == j || j([e, t]);
            },
            [j],
        ),
        Z = o.useCallback((e, t) => {
            I((n) => g(f({}, n), { [e]: t }));
        }, []),
        M = o.useCallback(() => {
            var e, t, n, o, r;
            let s = {
                    background: "linear-gradient(90deg, "
                        .concat((0, a.Rf)(null != (e = D.start) ? e : d.p6O), " 0%, ")
                        .concat((0, a.Rf)(D.end), " 100%)"),
                },
                c = (0, l.jsxs)("div", {
                    className: m.gradientButtonContainer,
                    children: [
                        (0, l.jsx)("div", {
                            className: m.gradientSwatch,
                            style: s,
                        }),
                        (0, l.jsx)(h, {
                            position: "left",
                            color: null != (t = D.start) ? t : d.p6O,
                            disabled: b,
                        }),
                        (0, l.jsx)(h, {
                            position: "right",
                            color: null != (n = D.end) ? n : 0,
                            disabled: b,
                        }),
                    ],
                });
            return b
                ? c
                : (0, l.jsxs)("div", {
                      className: i()(m.gradientButtonContainer, v),
                      children: [
                          (0, l.jsx)("div", {
                              className: m.gradientSwatch,
                              style: s,
                          }),
                          (0, l.jsx)(x, {
                              isStart: !0,
                              buttonRef: k,
                              color: null != (o = D.start) ? o : d.p6O,
                              showPopout: A.showStart,
                              position: _,
                              onRequestClose: () => Z("showStart", !1),
                              onShowPopout: () => Z("showStart", !0),
                              onColorChange: (e) => B(e, D.end),
                              disabled: b,
                          }),
                          (0, l.jsx)(x, {
                              isStart: !1,
                              buttonRef: O,
                              color: null != (r = D.end) ? r : 0,
                              showPopout: A.showEnd,
                              position: _,
                              onRequestClose: () => Z("showEnd", !1),
                              onShowPopout: () => Z("showEnd", !0),
                              onColorChange: (e) => {
                                  var t;
                                  return B(null != (t = D.start) ? t : d.p6O, e);
                              },
                              disabled: b,
                          }),
                      ],
                  });
        }, [_, b, D, A, B, Z, v]),
        G = o.useCallback(
            () =>
                (0, l.jsx)(c.Z$W, {
                    onChange: w,
                    value: r,
                }),
            [w, r],
        ),
        Y = o.useCallback(
            (e) => {
                var n;
                let o = r !== t && (0 !== r || P),
                    i = (0, l.jsx)(
                        c.jHW,
                        g(f({}, e), {
                            customColor: null != (n = e.customColor) ? n : o ? r : null,
                            "aria-label": u.intl.string(u.t["FHBa/1"]),
                        }),
                    );
                return b
                    ? i
                    : (0, l.jsx)(c.yRy, {
                          targetElementRef: y,
                          renderPopout: G,
                          position: _,
                          children: (e) =>
                              (0, l.jsx)(s.u, {
                                  targetElementRef: y,
                                  text: u.intl.string(u.t["FHBa/1"]),
                                  position: "bottom",
                                  children: (0, l.jsx)(
                                      "div",
                                      g(f({}, e), {
                                          ref: y,
                                          children: i,
                                      }),
                                  ),
                              }),
                      });
            },
            [_, b, G, r, t, P],
        ),
        H = o.useCallback(
            (e) => {
                let t = (0, l.jsx)(c.AGO, f({}, e));
                return b
                    ? t
                    : (0, l.jsx)(s.u, {
                          text: u.intl.string(u.t.bBvAEH),
                          position: "bottom",
                          children: (0, l.jsx)("div", { children: t }),
                      });
            },
            [b],
        );
    return (0, l.jsx)(
        c.zH8,
        g(f({}, e), {
            renderDefaultButton: H,
            renderCustomButton: Y,
            renderGradientCustomButton: M,
            isGradient: C,
            customColor: T,
            onChange: C ? B : L,
        }),
    );
}
