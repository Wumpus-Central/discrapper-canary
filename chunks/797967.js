(n.r(t), n.d(t, { default: () => _ }), n(388685));
var r = n(255367),
    o = n(73800),
    a = n(120356),
    s = n.n(a),
    i = n(866442),
    l = n(481060),
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
let g = (e) => {
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
        let u = (0, i.Bd)(null != n ? n : c.p6O) > 0.1;
        return (0, r.jsx)(
            'div',
            m(f({}, a), {
                className: s()('left' === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight, u ? p.lightRing : p.darkRing, { [p.disabled]: o }),
                children: (0, r.jsx)('div', {
                    className: p.colorPickerDropperInner,
                    style: { background: (0, i.Rf)(n) },
                    children: (0, r.jsx)(l.ilE, {
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
        let { isStart: t, buttonRef: n, color: o, showPopout: a, position: s, onRequestClose: i, onShowPopout: c, onColorChange: b, disabled: _ } = e;
        return (0, r.jsx)(l.tEY, {
            children: (0, r.jsx)(l.yRy, {
                targetElementRef: n,
                renderPopout: () =>
                    (0, r.jsx)(l.Z$W, {
                        onChange: (e) => b(e, t),
                        value: o
                    }),
                position: s,
                shouldShow: a,
                onRequestClose: i,
                children: (e) =>
                    (0, r.jsx)('div', {
                        ref: n,
                        children: (0, r.jsx)(
                            l.P3F,
                            m(f({}, e), {
                                className: p.colorSelectorPopoutContainer,
                                onClick: c,
                                'data-position': t ? 'left' : 'right',
                                'aria-label': u.intl.string(t ? d.default.apbXbG : d.default.JaVq1d),
                                children: (0, r.jsx)(l.ua7, {
                                    text: u.intl.string(t ? d.default.apbXbG : d.default.JaVq1d),
                                    position: 'bottom',
                                    children: (e) =>
                                        (0, r.jsx)(
                                            g,
                                            m(f({}, e), {
                                                position: t ? 'left' : 'right',
                                                color: null != o ? o : 0,
                                                disabled: _
                                            })
                                        )
                                })
                            })
                        )
                    })
            })
        });
    };
function _(e) {
    let { defaultColor: t, colors: n, value: a, onChange: s, disabled: d = !1, customPickerPosition: _ = 'bottom', secondaryValue: h, onChangeGradientColors: j, isGradient: x = !1 } = e,
        v = o.useCallback((e) => 0 !== e && e !== t && !n.some((t) => t === e), [n, t]),
        y = o.useRef(null),
        C = o.useRef(null),
        k = o.useRef(null),
        [O, P] = o.useState(() => (v(a) ? a : null)),
        [S, I] = o.useState({
            start: a,
            end: null != h ? h : c.p6O
        }),
        [E, w] = o.useState({
            showStart: !1,
            showEnd: !1
        });
    o.useEffect(() => {
        (P(v(a) ? a : null),
            I({
                start: a,
                end: null != h ? h : c.p6O
            }));
    }, [a, v, h]);
    let N = o.useCallback(
            (e) => {
                (null == s || s(e), P(null));
            },
            [s, P]
        ),
        R = o.useCallback(
            (e) => {
                (null == s || s(e), P(e));
            },
            [s, P]
        ),
        Z = o.useCallback(
            (e, t) => {
                (I({
                    start: e,
                    end: t
                }),
                    null == j || j([e, t]));
            },
            [j]
        ),
        D = o.useCallback((e, t) => {
            w((n) => m(f({}, n), { [e]: t }));
        }, []),
        T = o.useCallback(() => {
            var e, t, n, o, a;
            let s = { background: 'linear-gradient(90deg, '.concat((0, i.Rf)(null != (e = S.start) ? e : c.p6O), ' 0%, ').concat((0, i.Rf)(S.end), ' 100%)') },
                l = (0, r.jsxs)('div', {
                    className: p.gradientButtonContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: p.gradientSwatch,
                            style: s
                        }),
                        (0, r.jsx)(g, {
                            position: 'left',
                            color: null != (t = S.start) ? t : c.p6O,
                            disabled: d
                        }),
                        (0, r.jsx)(g, {
                            position: 'right',
                            color: null != (n = S.end) ? n : 0,
                            disabled: d
                        })
                    ]
                });
            return d
                ? l
                : (0, r.jsxs)('div', {
                      className: p.gradientButtonContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: p.gradientSwatch,
                              style: s
                          }),
                          (0, r.jsx)(b, {
                              isStart: !0,
                              buttonRef: C,
                              color: null != (o = S.start) ? o : c.p6O,
                              showPopout: E.showStart,
                              position: _,
                              onRequestClose: () => D('showStart', !1),
                              onShowPopout: () => D('showStart', !0),
                              onColorChange: (e) => Z(e, S.end),
                              disabled: d
                          }),
                          (0, r.jsx)(b, {
                              isStart: !1,
                              buttonRef: k,
                              color: null != (a = S.end) ? a : 0,
                              showPopout: E.showEnd,
                              position: _,
                              onRequestClose: () => D('showEnd', !1),
                              onShowPopout: () => D('showEnd', !0),
                              onColorChange: (e) => {
                                  var t;
                                  return Z(null != (t = S.start) ? t : c.p6O, e);
                              },
                              disabled: d
                          })
                      ]
                  });
        }, [_, d, S, E, Z, D]),
        A = o.useCallback(
            () =>
                (0, r.jsx)(l.Z$W, {
                    onChange: R,
                    value: O
                }),
            [R, O]
        ),
        B = o.useCallback(
            (e) => {
                let t = (0, r.jsx)(l.jHW, m(f({}, e), { 'aria-label': u.intl.string(u.t['FHBa//']) }));
                return d
                    ? t
                    : (0, r.jsx)(l.yRy, {
                          targetElementRef: y,
                          renderPopout: A,
                          position: _,
                          children: (e) =>
                              (0, r.jsx)(l.ua7, {
                                  targetElementRef: y,
                                  text: u.intl.string(u.t['FHBa//']),
                                  position: 'bottom',
                                  children: (n) => (0, r.jsx)('div', m(f({ ref: y }, n, e), { children: t }))
                              })
                      });
            },
            [_, d, A]
        ),
        L = o.useCallback(
            (e) => {
                let t = (0, r.jsx)(l.AGO, f({}, e));
                return d
                    ? t
                    : (0, r.jsx)(l.ua7, {
                          text: u.intl.string(u.t.bBvAEB),
                          position: 'bottom',
                          children: (e) => (0, r.jsx)('div', m(f({}, e), { children: t }))
                      });
            },
            [d]
        );
    return (0, r.jsx)(
        l.zH8,
        m(f({}, e), {
            renderDefaultButton: L,
            renderCustomButton: B,
            renderGradientCustomButton: T,
            isGradient: x,
            customColor: O,
            onChange: x ? Z : N
        })
    );
}
