(r.r(t), r.d(t, { default: () => g }), r(388685));
var n = r(255367),
    o = r(73800),
    a = r(120356),
    i = r.n(a),
    s = r(866442),
    l = r(481060),
    c = r(981631),
    u = r(388032),
    d = r(93841),
    p = r(675602);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let _ = (e) => {
        var { position: t, color: r, disabled: o } = e,
            a = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]));
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) ((r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
                }
                return o;
            })(e, ['position', 'color', 'disabled']);
        let u = (0, s.Bd)(null != r ? r : c.p6O) > 0.1;
        return (0, n.jsx)(
            'div',
            f(m({}, a), {
                className: i()('left' === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight, u ? p.lightRing : p.darkRing, { [p.disabled]: o }),
                children: (0, n.jsx)('div', {
                    className: p.colorPickerDropperInner,
                    style: { background: (0, s.Rf)(r) },
                    children: (0, n.jsx)(l.ilE, {
                        size: 'custom',
                        colorClass: u ? p.colorPickerDropperLight : p.colorPickerDropperDark,
                        width: 14,
                        height: 14
                    })
                })
            })
        );
    },
    b = (e) => {
        let { isStart: t, buttonRef: r, color: o, showPopout: a, position: i, onRequestClose: s, onShowPopout: c, onColorChange: b, disabled: g } = e;
        return (0, n.jsx)(l.tEY, {
            children: (0, n.jsx)(l.yRy, {
                targetElementRef: r,
                renderPopout: () =>
                    (0, n.jsx)(l.Z$W, {
                        onChange: (e) => b(e, t),
                        value: o
                    }),
                position: i,
                shouldShow: a,
                onRequestClose: s,
                children: (e) =>
                    (0, n.jsx)('div', {
                        ref: r,
                        children: (0, n.jsx)(
                            l.P3F,
                            f(m({}, e), {
                                className: p.colorSelectorPopoutContainer,
                                onClick: c,
                                'data-position': t ? 'left' : 'right',
                                'aria-label': u.intl.string(t ? d.default.apbXbG : d.default.JaVq1d),
                                children: (0, n.jsx)(l.ua7, {
                                    text: u.intl.string(t ? d.default.apbXbG : d.default.JaVq1d),
                                    position: 'bottom',
                                    children: (e) =>
                                        (0, n.jsx)(
                                            _,
                                            f(m({}, e), {
                                                position: t ? 'left' : 'right',
                                                color: null != o ? o : 0,
                                                disabled: g
                                            })
                                        )
                                })
                            })
                        )
                    })
            })
        });
    };
function g(e) {
    let { defaultColor: t, colors: r, value: a, onChange: i, disabled: d = !1, customPickerPosition: g = 'bottom', secondaryValue: j, onChangeGradientColors: x, isGradient: y = !1 } = e,
        v = o.useCallback((e) => 0 !== e && e !== t && !r.some((t) => t === e), [r, t]),
        C = o.useRef(null),
        h = o.useRef(null),
        O = o.useRef(null),
        [k, P] = o.useState(() => (v(a) ? a : null)),
        [w, S] = o.useState({
            start: a,
            end: null != j ? j : c.p6O
        }),
        [E, I] = o.useState({
            showStart: !1,
            showEnd: !1
        });
    o.useEffect(() => {
        (P(v(a) ? a : null),
            S({
                start: a,
                end: null != j ? j : c.p6O
            }));
    }, [a, v, j]);
    let N = o.useCallback(
            (e) => {
                (null == i || i(e), P(null));
            },
            [i, P]
        ),
        D = o.useCallback(
            (e) => {
                (null == i || i(e), P(e));
            },
            [i, P]
        ),
        R = o.useCallback(
            (e, t) => {
                (S({
                    start: e,
                    end: t
                }),
                    null == x || x([e, t]));
            },
            [x]
        ),
        T = o.useCallback((e, t) => {
            I((r) => f(m({}, r), { [e]: t }));
        }, []),
        Z = o.useCallback(() => {
            var e, t, r, o, a;
            let i = { background: 'linear-gradient(90deg, '.concat((0, s.Rf)(null != (e = w.start) ? e : c.p6O), ' 0%, ').concat((0, s.Rf)(w.end), ' 100%)') },
                l = (0, n.jsxs)('div', {
                    className: p.gradientButtonContainer,
                    children: [
                        (0, n.jsx)('div', {
                            className: p.gradientSwatch,
                            style: i
                        }),
                        (0, n.jsx)(_, {
                            position: 'left',
                            color: null != (t = w.start) ? t : c.p6O,
                            disabled: d
                        }),
                        (0, n.jsx)(_, {
                            position: 'right',
                            color: null != (r = w.end) ? r : 0,
                            disabled: d
                        })
                    ]
                });
            return d
                ? l
                : (0, n.jsxs)('div', {
                      className: p.gradientButtonContainer,
                      children: [
                          (0, n.jsx)('div', {
                              className: p.gradientSwatch,
                              style: i
                          }),
                          (0, n.jsx)(b, {
                              isStart: !0,
                              buttonRef: h,
                              color: null != (o = w.start) ? o : c.p6O,
                              showPopout: E.showStart,
                              position: g,
                              onRequestClose: () => T('showStart', !1),
                              onShowPopout: () => T('showStart', !0),
                              onColorChange: (e) => R(e, w.end),
                              disabled: d
                          }),
                          (0, n.jsx)(b, {
                              isStart: !1,
                              buttonRef: O,
                              color: null != (a = w.end) ? a : 0,
                              showPopout: E.showEnd,
                              position: g,
                              onRequestClose: () => T('showEnd', !1),
                              onShowPopout: () => T('showEnd', !0),
                              onColorChange: (e) => {
                                  var t;
                                  return R(null != (t = w.start) ? t : c.p6O, e);
                              },
                              disabled: d
                          })
                      ]
                  });
        }, [g, d, w, E, R, T]),
        A = o.useCallback(
            () =>
                (0, n.jsx)(l.Z$W, {
                    onChange: D,
                    value: k
                }),
            [D, k]
        ),
        B = o.useCallback(
            (e) => {
                let t = (0, n.jsx)(l.jHW, f(m({}, e), { 'aria-label': u.intl.string(u.t['FHBa//']) }));
                return d
                    ? t
                    : (0, n.jsx)(l.yRy, {
                          targetElementRef: C,
                          renderPopout: A,
                          position: g,
                          children: (e) =>
                              (0, n.jsx)(l.ua7, {
                                  targetElementRef: C,
                                  text: u.intl.string(u.t['FHBa//']),
                                  position: 'bottom',
                                  children: (r) => (0, n.jsx)('div', f(m({ ref: C }, r, e), { children: t }))
                              })
                      });
            },
            [g, d, A]
        ),
        L = o.useCallback(
            (e) => {
                let t = (0, n.jsx)(l.AGO, m({}, e));
                return d
                    ? t
                    : (0, n.jsx)(l.ua7, {
                          text: u.intl.string(u.t.bBvAEB),
                          position: 'bottom',
                          children: (e) => (0, n.jsx)('div', f(m({}, e), { children: t }))
                      });
            },
            [d]
        );
    return (0, n.jsx)(
        l.zH8,
        f(m({}, e), {
            renderDefaultButton: L,
            renderCustomButton: B,
            renderGradientCustomButton: Z,
            isGradient: y,
            customColor: k,
            onChange: y ? R : N
        })
    );
}
