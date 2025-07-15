(n.r(t), n.d(t, { default: () => b }), n(388685));
var r = n(255367),
    o = n(73800),
    a = n(120356),
    i = n.n(a),
    l = n(866442),
    s = n(481060),
    c = n(981631),
    u = n(388032),
    d = n(93841),
    p = n(675602);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
                        for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                }
                return o;
            })(e, ['position', 'color', 'disabled']);
        let u = (0, l.Bd)(null != n ? n : c.p6O) > 0.1;
        return (0, r.jsx)(
            'div',
            m(f({}, a), {
                className: i()('left' === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight, u ? p.lightRing : p.darkRing, { [p.disabled]: o }),
                children: (0, r.jsx)('div', {
                    className: p.colorPickerDropperInner,
                    style: { background: (0, l.Rf)(n) },
                    children: (0, r.jsx)(s.ilE, {
                        size: 'custom',
                        colorClass: u ? p.colorPickerDropperLight : p.colorPickerDropperDark,
                        width: 14,
                        height: 14
                    })
                })
            })
        );
    },
    g = (e) => {
        let { isStart: t, buttonRef: n, color: o, showPopout: a, position: i, onRequestClose: l, onShowPopout: c, onColorChange: g, disabled: b } = e;
        return (0, r.jsx)(s.tEY, {
            children: (0, r.jsx)(s.yRy, {
                targetElementRef: n,
                renderPopout: () =>
                    (0, r.jsx)(s.Z$W, {
                        onChange: (e) => g(e, t),
                        value: o
                    }),
                position: i,
                shouldShow: a,
                onRequestClose: l,
                children: (e) =>
                    (0, r.jsx)('div', {
                        ref: n,
                        children: (0, r.jsx)(
                            s.P3F,
                            m(f({}, e), {
                                className: p.colorSelectorPopoutContainer,
                                onClick: c,
                                'data-position': t ? 'left' : 'right',
                                'aria-label': u.intl.string(t ? d.default.apbXbG : d.default.JaVq1d),
                                children: (0, r.jsx)(s.ua7, {
                                    text: u.intl.string(t ? d.default.apbXbG : d.default.JaVq1d),
                                    position: 'bottom',
                                    children: (e) =>
                                        (0, r.jsx)(
                                            _,
                                            m(f({}, e), {
                                                position: t ? 'left' : 'right',
                                                color: null != o ? o : 0,
                                                disabled: b
                                            })
                                        )
                                })
                            })
                        )
                    })
            })
        });
    };
function b(e) {
    let { defaultColor: t, colors: n, value: a, onChange: i, disabled: d = !1, customPickerPosition: b = 'bottom', secondaryValue: v, onChangeGradientColors: j, isGradient: x = !1 } = e,
        C = o.useCallback((e) => 0 !== e && e !== t && !n.some((t) => t === e), [n, t]),
        y = o.useRef(null),
        h = o.useRef(null),
        O = o.useRef(null),
        [k, P] = o.useState(() => (C(a) ? a : null)),
        [w, S] = o.useState({
            start: a,
            end: null != v ? v : c.p6O
        }),
        [E, I] = o.useState({
            showStart: !1,
            showEnd: !1
        });
    o.useEffect(() => {
        (P(C(a) ? a : null),
            S({
                start: a,
                end: null != v ? v : c.p6O
            }));
    }, [a, C, v]);
    let N = o.useCallback(
            (e) => {
                (null == i || i(e), P(null));
            },
            [i, P]
        ),
        R = o.useCallback(
            (e) => {
                (null == i || i(e), P(e));
            },
            [i, P]
        ),
        D = o.useCallback(
            (e, t) => {
                (S({
                    start: e,
                    end: t
                }),
                    null == j || j([e, t]));
            },
            [j]
        ),
        Z = o.useCallback((e, t) => {
            I((n) => m(f({}, n), { [e]: t }));
        }, []),
        B = o.useCallback(() => {
            var e, t, n, o, a;
            let i = { background: 'linear-gradient(90deg, '.concat((0, l.Rf)(null != (e = w.start) ? e : c.p6O), ' 0%, ').concat((0, l.Rf)(w.end), ' 100%)') },
                s = (0, r.jsxs)('div', {
                    className: p.gradientButtonContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: p.gradientSwatch,
                            style: i
                        }),
                        (0, r.jsx)(_, {
                            position: 'left',
                            color: null != (t = w.start) ? t : c.p6O,
                            disabled: d
                        }),
                        (0, r.jsx)(_, {
                            position: 'right',
                            color: null != (n = w.end) ? n : 0,
                            disabled: d
                        })
                    ]
                });
            return d
                ? s
                : (0, r.jsxs)('div', {
                      className: p.gradientButtonContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: p.gradientSwatch,
                              style: i
                          }),
                          (0, r.jsx)(g, {
                              isStart: !0,
                              buttonRef: h,
                              color: null != (o = w.start) ? o : c.p6O,
                              showPopout: E.showStart,
                              position: b,
                              onRequestClose: () => Z('showStart', !1),
                              onShowPopout: () => Z('showStart', !0),
                              onColorChange: (e) => D(e, w.end),
                              disabled: d
                          }),
                          (0, r.jsx)(g, {
                              isStart: !1,
                              buttonRef: O,
                              color: null != (a = w.end) ? a : 0,
                              showPopout: E.showEnd,
                              position: b,
                              onRequestClose: () => Z('showEnd', !1),
                              onShowPopout: () => Z('showEnd', !0),
                              onColorChange: (e) => {
                                  var t;
                                  return D(null != (t = w.start) ? t : c.p6O, e);
                              },
                              disabled: d
                          })
                      ]
                  });
        }, [b, d, w, E, D, Z]),
        T = o.useCallback(
            () =>
                (0, r.jsx)(s.Z$W, {
                    onChange: R,
                    value: k
                }),
            [R, k]
        ),
        L = o.useCallback(
            (e) => {
                let t = (0, r.jsx)(s.jHW, m(f({}, e), { 'aria-label': u.intl.string(u.t['FHBa//']) }));
                return d
                    ? t
                    : (0, r.jsx)(s.yRy, {
                          targetElementRef: y,
                          renderPopout: T,
                          position: b,
                          children: (e) =>
                              (0, r.jsx)(s.ua7, {
                                  targetElementRef: y,
                                  text: u.intl.string(u.t['FHBa//']),
                                  position: 'bottom',
                                  children: (n) => (0, r.jsx)('div', m(f({ ref: y }, n, e), { children: t }))
                              })
                      });
            },
            [b, d, T]
        ),
        G = o.useCallback(
            (e) => {
                let t = (0, r.jsx)(s.AGO, f({}, e));
                return d
                    ? t
                    : (0, r.jsx)(s.ua7, {
                          text: u.intl.string(u.t.bBvAEB),
                          position: 'bottom',
                          children: (e) => (0, r.jsx)('div', m(f({}, e), { children: t }))
                      });
            },
            [d]
        );
    return (0, r.jsx)(
        s.zH8,
        m(f({}, e), {
            renderDefaultButton: G,
            renderCustomButton: L,
            renderGradientCustomButton: B,
            isGradient: x,
            customColor: k,
            onChange: x ? D : N
        })
    );
}
