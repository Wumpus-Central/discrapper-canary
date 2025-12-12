n.r(t), n.d(t, { default: () => x }), n(388685);
var r = n(54381),
    a = n(473749),
    s = n(120356),
    o = n.n(s),
    l = n(866442),
    i = n(28664),
    c = n(481060),
    d = n(981631),
    u = n(388032),
    g = n(265397),
    m = n(616132);
function p(e) {
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
let f = (e) => {
        var { position: t, color: n, disabled: a } = e,
            s = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            a = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                        (n = s[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                }
                return a;
            })(e, ["position", "color", "disabled"]);
        let i = (0, l.Bd)(null != n ? n : d.p6O) > 0.1;
        return (0, r.jsx)(
            "div",
            b(p({}, s), {
                className: o()(
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
    _ = (e) => {
        let {
            isStart: t,
            buttonRef: n,
            color: a,
            showPopout: s,
            position: o,
            onRequestClose: l,
            onShowPopout: d,
            onColorChange: _,
            disabled: x,
        } = e;
        return (0, r.jsx)(c.tEY, {
            children: (0, r.jsx)(c.yRy, {
                targetElementRef: n,
                renderPopout: () =>
                    (0, r.jsx)(c.Z$W, {
                        onChange: (e) => _(e, t),
                        value: a,
                    }),
                position: o,
                shouldShow: s,
                onRequestClose: l,
                children: (e) =>
                    (0, r.jsx)("div", {
                        ref: n,
                        children: (0, r.jsx)(
                            c.P3F,
                            b(p({}, e), {
                                className: m.colorSelectorPopoutContainer,
                                onClick: d,
                                "data-position": t ? "left" : "right",
                                "aria-label": u.intl.string(t ? g.default.apbXbH : g.default.JaVq1b),
                                children: (0, r.jsx)(i.u, {
                                    text: u.intl.string(t ? g.default.apbXbH : g.default.JaVq1b),
                                    position: "bottom",
                                    children: (0, r.jsx)(f, {
                                        position: t ? "left" : "right",
                                        color: null != a ? a : 0,
                                        disabled: x,
                                    }),
                                }),
                            }),
                        ),
                    }),
            }),
        });
    };
function x(e) {
    let {
            defaultColor: t,
            colors: n,
            value: s,
            onChange: g,
            disabled: x = !1,
            customPickerPosition: j = "bottom",
            secondaryValue: h,
            onChangeGradientColors: v,
            isGradient: k = !1,
            gradientButtonClassName: C,
            allowBlackCustomColor: O = !1,
        } = e,
        y = a.useCallback((e) => (0 !== e || O) && e !== t && !n.some((t) => t === e) && (O || 0 !== e), [n, t, O]),
        S = a.useRef(null),
        P = a.useRef(null),
        w = a.useRef(null),
        [N, E] = a.useState(() => (y(s) ? s : null)),
        [I, D] = a.useState({
            start: s,
            end: null != h ? h : d.p6O,
        }),
        [A, B] = a.useState({
            showStart: !1,
            showEnd: !1,
        });
    a.useEffect(() => {
        E(y(s) ? s : null),
            D({
                start: s,
                end: null != h ? h : d.p6O,
            });
    }, [s, y, h]);
    let R = a.useCallback(
            (e) => {
                null == g || g(e), E(null);
            },
            [g, E],
        ),
        L = a.useCallback(
            (e) => {
                null == g || g(e), E(e);
            },
            [g, E],
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
            B((n) => b(p({}, n), { [e]: t }));
        }, []),
        M = a.useCallback(() => {
            var e, t, n, a, s;
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
                        (0, r.jsx)(f, {
                            position: "left",
                            color: null != (t = I.start) ? t : d.p6O,
                            disabled: x,
                        }),
                        (0, r.jsx)(f, {
                            position: "right",
                            color: null != (n = I.end) ? n : 0,
                            disabled: x,
                        }),
                    ],
                });
            return x
                ? c
                : (0, r.jsxs)("div", {
                      className: o()(m.gradientButtonContainer, C),
                      children: [
                          (0, r.jsx)("div", {
                              className: m.gradientSwatch,
                              style: i,
                          }),
                          (0, r.jsx)(_, {
                              isStart: !0,
                              buttonRef: P,
                              color: null != (a = I.start) ? a : d.p6O,
                              showPopout: A.showStart,
                              position: j,
                              onRequestClose: () => G("showStart", !1),
                              onShowPopout: () => G("showStart", !0),
                              onColorChange: (e) => T(e, I.end),
                              disabled: x,
                          }),
                          (0, r.jsx)(_, {
                              isStart: !1,
                              buttonRef: w,
                              color: null != (s = I.end) ? s : 0,
                              showPopout: A.showEnd,
                              position: j,
                              onRequestClose: () => G("showEnd", !1),
                              onShowPopout: () => G("showEnd", !0),
                              onColorChange: (e) => {
                                  var t;
                                  return T(null != (t = I.start) ? t : d.p6O, e);
                              },
                              disabled: x,
                          }),
                      ],
                  });
        }, [j, x, I, A, T, G, C]),
        Z = a.useCallback(
            () =>
                (0, r.jsx)(c.Z$W, {
                    onChange: L,
                    value: s,
                }),
            [L, s],
        ),
        U = a.useCallback(
            (e) => {
                var n;
                let a = s !== t && (0 !== s || O),
                    o = (0, r.jsx)(
                        c.jHW,
                        b(p({}, e), {
                            customColor: null != (n = e.customColor) ? n : a ? s : null,
                            "aria-label": u.intl.string(u.t["FHBa/1"]),
                        }),
                    );
                return x
                    ? o
                    : (0, r.jsx)(c.yRy, {
                          targetElementRef: S,
                          renderPopout: Z,
                          position: j,
                          children: (e) =>
                              (0, r.jsx)(i.u, {
                                  targetElementRef: S,
                                  text: u.intl.string(u.t["FHBa/1"]),
                                  position: "bottom",
                                  children: (0, r.jsx)(
                                      "div",
                                      b(p({}, e), {
                                          ref: S,
                                          children: o,
                                      }),
                                  ),
                              }),
                      });
            },
            [j, x, Z, s, t, O],
        ),
        H = a.useCallback(
            (e) => {
                let t = (0, r.jsx)(c.AGO, p({}, e));
                return x
                    ? t
                    : (0, r.jsx)(i.u, {
                          text: u.intl.string(u.t.bBvAEH),
                          position: "bottom",
                          children: (0, r.jsx)("div", { children: t }),
                      });
            },
            [x],
        );
    return (0, r.jsx)(
        c.zH8,
        b(p({}, e), {
            renderDefaultButton: H,
            renderCustomButton: U,
            renderGradientCustomButton: M,
            isGradient: k,
            customColor: N,
            onChange: k ? T : R,
        }),
    );
}
