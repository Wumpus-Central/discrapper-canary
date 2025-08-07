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
    f = n(675602);
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
            m(p({}, l), {
                className: a()(
                    "left" === t ? f.colorPickerDropperLeft : f.colorPickerDropperRight,
                    d ? f.lightRing : f.darkRing,
                    { [f.disabled]: o },
                ),
                children: (0, r.jsx)("div", {
                    className: f.colorPickerDropperInner,
                    style: { background: (0, i.Rf)(n) },
                    children: (0, r.jsx)(s.ilE, {
                        size: "custom",
                        colorClass: d ? f.colorPickerDropperLight : f.colorPickerDropperDark,
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
                            m(p({}, e), {
                                className: f.colorSelectorPopoutContainer,
                                onClick: c,
                                "data-position": t ? "left" : "right",
                                "aria-label": d.intl.string(t ? u.default.apbXbG : u.default.JaVq1d),
                                children: (0, r.jsx)(s.ua7, {
                                    text: d.intl.string(t ? u.default.apbXbG : u.default.JaVq1d),
                                    position: "bottom",
                                    children: (e) =>
                                        (0, r.jsx)(
                                            g,
                                            m(p({}, e), {
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
            onChangeGradientColors: S,
            isGradient: _ = !1,
            gradientButtonClassName: O,
        } = e,
        y = o.useCallback((e) => 0 !== e && e !== t && !n.some((t) => t === e), [n, t]),
        C = o.useRef(null),
        P = o.useRef(null),
        v = o.useRef(null),
        [E, N] = o.useState(() => (y(l) ? l : null)),
        [k, T] = o.useState({
            start: l,
            end: null != j ? j : c.p6O,
        }),
        [D, w] = o.useState({
            showStart: !1,
            showEnd: !1,
        });
    o.useEffect(() => {
        N(y(l) ? l : null),
            T({
                start: l,
                end: null != j ? j : c.p6O,
            });
    }, [l, y, j]);
    let L = o.useCallback(
            (e) => {
                null == u || u(e), N(null);
            },
            [u, N],
        ),
        I = o.useCallback(
            (e) => {
                null == u || u(e), N(e);
            },
            [u, N],
        ),
        A = o.useCallback(
            (e, t) => {
                T({
                    start: e,
                    end: t,
                }),
                    null == S || S([e, t]);
            },
            [S],
        ),
        R = o.useCallback((e, t) => {
            w((n) => m(p({}, n), { [e]: t }));
        }, []),
        B = o.useCallback(() => {
            var e, t, n, o, l;
            let s = {
                    background: "linear-gradient(90deg, "
                        .concat((0, i.Rf)(null != (e = k.start) ? e : c.p6O), " 0%, ")
                        .concat((0, i.Rf)(k.end), " 100%)"),
                },
                d = (0, r.jsxs)("div", {
                    className: f.gradientButtonContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: f.gradientSwatch,
                            style: s,
                        }),
                        (0, r.jsx)(g, {
                            position: "left",
                            color: null != (t = k.start) ? t : c.p6O,
                            disabled: b,
                        }),
                        (0, r.jsx)(g, {
                            position: "right",
                            color: null != (n = k.end) ? n : 0,
                            disabled: b,
                        }),
                    ],
                });
            return b
                ? d
                : (0, r.jsxs)("div", {
                      className: a()(f.gradientButtonContainer, O),
                      children: [
                          (0, r.jsx)("div", {
                              className: f.gradientSwatch,
                              style: s,
                          }),
                          (0, r.jsx)(h, {
                              isStart: !0,
                              buttonRef: P,
                              color: null != (o = k.start) ? o : c.p6O,
                              showPopout: D.showStart,
                              position: x,
                              onRequestClose: () => R("showStart", !1),
                              onShowPopout: () => R("showStart", !0),
                              onColorChange: (e) => A(e, k.end),
                              disabled: b,
                          }),
                          (0, r.jsx)(h, {
                              isStart: !1,
                              buttonRef: v,
                              color: null != (l = k.end) ? l : 0,
                              showPopout: D.showEnd,
                              position: x,
                              onRequestClose: () => R("showEnd", !1),
                              onShowPopout: () => R("showEnd", !0),
                              onColorChange: (e) => {
                                  var t;
                                  return A(null != (t = k.start) ? t : c.p6O, e);
                              },
                              disabled: b,
                          }),
                      ],
                  });
        }, [x, b, k, D, A, R, O]),
        M = o.useCallback(
            () =>
                (0, r.jsx)(s.Z$W, {
                    onChange: I,
                    value: E,
                }),
            [I, E],
        ),
        Z = o.useCallback(
            (e) => {
                let t = (0, r.jsx)(s.jHW, m(p({}, e), { "aria-label": d.intl.string(d.t["FHBa//"]) }));
                return b
                    ? t
                    : (0, r.jsx)(s.yRy, {
                          targetElementRef: C,
                          renderPopout: M,
                          position: x,
                          children: (e) =>
                              (0, r.jsx)(s.ua7, {
                                  targetElementRef: C,
                                  text: d.intl.string(d.t["FHBa//"]),
                                  position: "bottom",
                                  children: (n) => (0, r.jsx)("div", m(p({ ref: C }, n, e), { children: t })),
                              }),
                      });
            },
            [x, b, M],
        ),
        Y = o.useCallback(
            (e) => {
                let t = (0, r.jsx)(s.AGO, p({}, e));
                return b
                    ? t
                    : (0, r.jsx)(s.ua7, {
                          text: d.intl.string(d.t.bBvAEB),
                          position: "bottom",
                          children: (e) => (0, r.jsx)("div", m(p({}, e), { children: t })),
                      });
            },
            [b],
        );
    return (0, r.jsx)(
        s.zH8,
        m(p({}, e), {
            renderDefaultButton: Y,
            renderCustomButton: Z,
            renderGradientCustomButton: B,
            isGradient: _,
            customColor: E,
            onChange: _ ? A : L,
        }),
    );
}
