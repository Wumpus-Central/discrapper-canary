n.r(t), n.d(t, { default: () => h }), n(388685);
var r = n(255367),
    o = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(866442),
    i = n(481060),
    c = n(981631),
    u = n(388032),
    d = n(93841),
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
let b = (e) => {
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
        let u = (0, s.Bd)(null != n ? n : c.p6O) > 0.1;
        return (0, r.jsx)(
            "div",
            m(f({}, l), {
                className: a()(
                    "left" === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight,
                    u ? p.lightRing : p.darkRing,
                    { [p.disabled]: o },
                ),
                children: (0, r.jsx)("div", {
                    className: p.colorPickerDropperInner,
                    style: { background: (0, s.Rf)(n) },
                    children: (0, r.jsx)(i.ilE, {
                        size: "custom",
                        colorClass: u ? p.colorPickerDropperLight : p.colorPickerDropperDark,
                        width: 14,
                        height: 14,
                    }),
                }),
            }),
        );
    },
    g = (e) => {
        let {
            isStart: t,
            buttonRef: n,
            color: o,
            showPopout: l,
            position: a,
            onRequestClose: s,
            onShowPopout: c,
            onColorChange: g,
            disabled: h,
        } = e;
        return (0, r.jsx)(i.tEY, {
            children: (0, r.jsx)(i.yRy, {
                targetElementRef: n,
                renderPopout: () =>
                    (0, r.jsx)(i.Z$W, {
                        onChange: (e) => g(e, t),
                        value: o,
                    }),
                position: a,
                shouldShow: l,
                onRequestClose: s,
                children: (e) =>
                    (0, r.jsx)("div", {
                        ref: n,
                        children: (0, r.jsx)(
                            i.P3F,
                            m(f({}, e), {
                                className: p.colorSelectorPopoutContainer,
                                onClick: c,
                                "data-position": t ? "left" : "right",
                                "aria-label": u.intl.string(t ? d.default.apbXbG : d.default.JaVq1d),
                                children: (0, r.jsx)(i.ua7, {
                                    text: u.intl.string(t ? d.default.apbXbG : d.default.JaVq1d),
                                    position: "bottom",
                                    children: (e) =>
                                        (0, r.jsx)(
                                            b,
                                            m(f({}, e), {
                                                position: t ? "left" : "right",
                                                color: null != o ? o : 0,
                                                disabled: h,
                                            }),
                                        ),
                                }),
                            }),
                        ),
                    }),
            }),
        });
    };
function h(e) {
    let {
            defaultColor: t,
            colors: n,
            value: l,
            onChange: d,
            disabled: h = !1,
            customPickerPosition: _ = "bottom",
            secondaryValue: j,
            onChangeGradientColors: x,
            isGradient: v = !1,
            gradientButtonClassName: y,
        } = e,
        O = o.useCallback((e) => 0 !== e && e !== t && !n.some((t) => t === e), [n, t]),
        k = o.useRef(null),
        C = o.useRef(null),
        P = o.useRef(null),
        [w, S] = o.useState(() => (O(l) ? l : null)),
        [I, E] = o.useState({
            start: l,
            end: null != j ? j : c.p6O,
        }),
        [N, B] = o.useState({
            showStart: !1,
            showEnd: !1,
        });
    o.useEffect(() => {
        S(O(l) ? l : null),
            E({
                start: l,
                end: null != j ? j : c.p6O,
            });
    }, [l, O, j]);
    let R = o.useCallback(
            (e) => {
                null == d || d(e), S(null);
            },
            [d, S],
        ),
        D = o.useCallback(
            (e) => {
                null == d || d(e), S(e);
            },
            [d, S],
        ),
        A = o.useCallback(
            (e, t) => {
                E({
                    start: e,
                    end: t,
                }),
                    null == x || x([e, t]);
            },
            [x],
        ),
        T = o.useCallback((e, t) => {
            B((n) => m(f({}, n), { [e]: t }));
        }, []),
        Z = o.useCallback(() => {
            var e, t, n, o, l;
            let i = {
                    background: "linear-gradient(90deg, "
                        .concat((0, s.Rf)(null != (e = I.start) ? e : c.p6O), " 0%, ")
                        .concat((0, s.Rf)(I.end), " 100%)"),
                },
                u = (0, r.jsxs)("div", {
                    className: p.gradientButtonContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: p.gradientSwatch,
                            style: i,
                        }),
                        (0, r.jsx)(b, {
                            position: "left",
                            color: null != (t = I.start) ? t : c.p6O,
                            disabled: h,
                        }),
                        (0, r.jsx)(b, {
                            position: "right",
                            color: null != (n = I.end) ? n : 0,
                            disabled: h,
                        }),
                    ],
                });
            return h
                ? u
                : (0, r.jsxs)("div", {
                      className: a()(p.gradientButtonContainer, y),
                      children: [
                          (0, r.jsx)("div", {
                              className: p.gradientSwatch,
                              style: i,
                          }),
                          (0, r.jsx)(g, {
                              isStart: !0,
                              buttonRef: C,
                              color: null != (o = I.start) ? o : c.p6O,
                              showPopout: N.showStart,
                              position: _,
                              onRequestClose: () => T("showStart", !1),
                              onShowPopout: () => T("showStart", !0),
                              onColorChange: (e) => A(e, I.end),
                              disabled: h,
                          }),
                          (0, r.jsx)(g, {
                              isStart: !1,
                              buttonRef: P,
                              color: null != (l = I.end) ? l : 0,
                              showPopout: N.showEnd,
                              position: _,
                              onRequestClose: () => T("showEnd", !1),
                              onShowPopout: () => T("showEnd", !0),
                              onColorChange: (e) => {
                                  var t;
                                  return A(null != (t = I.start) ? t : c.p6O, e);
                              },
                              disabled: h,
                          }),
                      ],
                  });
        }, [_, h, I, N, A, T, y]),
        L = o.useCallback(
            () =>
                (0, r.jsx)(i.Z$W, {
                    onChange: D,
                    value: w,
                }),
            [D, w],
        ),
        U = o.useCallback(
            (e) => {
                let t = (0, r.jsx)(i.jHW, m(f({}, e), { "aria-label": u.intl.string(u.t["FHBa//"]) }));
                return h
                    ? t
                    : (0, r.jsx)(i.yRy, {
                          targetElementRef: k,
                          renderPopout: L,
                          position: _,
                          children: (e) =>
                              (0, r.jsx)(i.ua7, {
                                  targetElementRef: k,
                                  text: u.intl.string(u.t["FHBa//"]),
                                  position: "bottom",
                                  children: (n) => (0, r.jsx)("div", m(f({ ref: k }, n, e), { children: t })),
                              }),
                      });
            },
            [_, h, L],
        ),
        G = o.useCallback(
            (e) => {
                let t = (0, r.jsx)(i.AGO, f({}, e));
                return h
                    ? t
                    : (0, r.jsx)(i.ua7, {
                          text: u.intl.string(u.t.bBvAEB),
                          position: "bottom",
                          children: (e) => (0, r.jsx)("div", m(f({}, e), { children: t })),
                      });
            },
            [h],
        );
    return (0, r.jsx)(
        i.zH8,
        m(f({}, e), {
            renderDefaultButton: G,
            renderCustomButton: U,
            renderGradientCustomButton: Z,
            isGradient: v,
            customColor: w,
            onChange: v ? A : R,
        }),
    );
}
