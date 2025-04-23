r.r(t), r.d(t, { default: () => _ }), r(388685);
var n = r(200651),
    o = r(192379),
    a = r(120356),
    l = r.n(a),
    i = r(866442),
    s = r(481060),
    c = r(981631),
    u = r(388032),
    d = r(680278),
    p = r(675602);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
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
let g = (e) => {
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
                        for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                }
                return o;
            })(e, ['position', 'color', 'disabled']);
        let u = (0, i.Bd)(null != r ? r : c.p6O) > 0.1;
        return (0, n.jsx)(
            'div',
            b(f({}, a), {
                className: l()('left' === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight, u ? p.lightRing : p.darkRing, { [p.disabled]: o }),
                children: (0, n.jsx)('div', {
                    className: p.colorPickerDropperInner,
                    style: { background: (0, i.Rf)(r) },
                    children: (0, n.jsx)(s.ilE, {
                        size: 'custom',
                        colorClass: u ? p.colorPickerDropperLight : p.colorPickerDropperDark,
                        width: 14,
                        height: 14
                    })
                })
            })
        );
    },
    m = (e) => {
        let { isStart: t, buttonRef: r, color: o, showPopout: a, position: l, onRequestClose: i, onShowPopout: c, onColorChange: m, disabled: _ } = e;
        return (0, n.jsx)(s.tEY, {
            children: (0, n.jsx)(s.yRy, {
                targetElementRef: r,
                renderPopout: () =>
                    (0, n.jsx)(s.Z$W, {
                        onChange: (e) => m(e, t),
                        value: o
                    }),
                position: l,
                shouldShow: a,
                onRequestClose: i,
                children: (e) =>
                    (0, n.jsx)('div', {
                        ref: r,
                        children: (0, n.jsx)(
                            s.P3F,
                            b(f({}, e), {
                                className: p.colorSelectorPopoutContainer,
                                onClick: c,
                                'data-position': t ? 'left' : 'right',
                                'aria-label': u.intl.string(t ? d.default.apbXbG : d.default.JaVq1d),
                                children: (0, n.jsx)(s.ua7, {
                                    text: u.intl.string(t ? d.default.apbXbG : d.default.JaVq1d),
                                    position: 'bottom',
                                    children: (e) =>
                                        (0, n.jsx)(
                                            g,
                                            b(f({}, e), {
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
    let { defaultColor: t, colors: r, value: a, onChange: l, disabled: d = !1, customPickerPosition: _ = 'bottom', secondaryValue: j, onChangeGradientColors: y, isGradient: O = !1 } = e,
        h = o.useCallback((e) => 0 !== e && e !== t && !r.some((t) => t === e), [r, t]),
        C = o.useRef(null),
        x = o.useRef(null),
        v = o.useRef(null),
        [P, w] = o.useState(() => (h(a) ? a : null)),
        [k, S] = o.useState({
            start: a,
            end: null != j ? j : c.p6O
        }),
        [I, E] = o.useState({
            showStart: !1,
            showEnd: !1
        });
    o.useEffect(() => {
        w(h(a) ? a : null),
            S({
                start: a,
                end: null != j ? j : c.p6O
            });
    }, [a, h, j]);
    let R = o.useCallback(
            (e) => {
                null == l || l(e), w(null);
            },
            [l, w]
        ),
        D = o.useCallback(
            (e) => {
                null == l || l(e), w(e);
            },
            [l, w]
        ),
        N = o.useCallback(
            (e, t) => {
                S({
                    start: e,
                    end: t
                }),
                    null == y || y([e, t]);
            },
            [y]
        ),
        B = o.useCallback((e, t) => {
            E((r) => b(f({}, r), { [e]: t }));
        }, []),
        Z = o.useCallback(() => {
            var e, t, r, o, a;
            let l = { background: 'linear-gradient(90deg, '.concat((0, i.Rf)(null != (e = k.start) ? e : c.p6O), ' 0%, ').concat((0, i.Rf)(k.end), ' 100%)') },
                s = (0, n.jsxs)('div', {
                    className: p.gradientButtonContainer,
                    children: [
                        (0, n.jsx)('div', {
                            className: p.gradientSwatch,
                            style: l
                        }),
                        (0, n.jsx)(g, {
                            position: 'left',
                            color: null != (t = k.start) ? t : c.p6O,
                            disabled: d
                        }),
                        (0, n.jsx)(g, {
                            position: 'right',
                            color: null != (r = k.end) ? r : 0,
                            disabled: d
                        })
                    ]
                });
            return d
                ? s
                : (0, n.jsxs)('div', {
                      className: p.gradientButtonContainer,
                      children: [
                          (0, n.jsx)('div', {
                              className: p.gradientSwatch,
                              style: l
                          }),
                          (0, n.jsx)(m, {
                              isStart: !0,
                              buttonRef: x,
                              color: null != (o = k.start) ? o : c.p6O,
                              showPopout: I.showStart,
                              position: _,
                              onRequestClose: () => B('showStart', !1),
                              onShowPopout: () => B('showStart', !0),
                              onColorChange: (e) => N(e, k.end),
                              disabled: d
                          }),
                          (0, n.jsx)(m, {
                              isStart: !1,
                              buttonRef: v,
                              color: null != (a = k.end) ? a : 0,
                              showPopout: I.showEnd,
                              position: _,
                              onRequestClose: () => B('showEnd', !1),
                              onShowPopout: () => B('showEnd', !0),
                              onColorChange: (e) => {
                                  var t;
                                  return N(null != (t = k.start) ? t : c.p6O, e);
                              },
                              disabled: d
                          })
                      ]
                  });
        }, [_, d, k, I, N, B]),
        T = o.useCallback(
            () =>
                (0, n.jsx)(s.Z$W, {
                    onChange: D,
                    value: P
                }),
            [D, P]
        ),
        G = o.useCallback(
            (e) => {
                let t = (0, n.jsx)(s.jHW, b(f({}, e), { 'aria-label': u.intl.string(u.t['FHBa//']) }));
                return d
                    ? t
                    : (0, n.jsx)(s.yRy, {
                          targetElementRef: C,
                          renderPopout: T,
                          position: _,
                          children: (e) =>
                              (0, n.jsx)(s.ua7, {
                                  targetElementRef: C,
                                  text: u.intl.string(u.t['FHBa//']),
                                  position: 'bottom',
                                  children: (r) => (0, n.jsx)('div', b(f({ ref: C }, r, e), { children: t }))
                              })
                      });
            },
            [_, d, T]
        ),
        W = o.useCallback(
            (e) => {
                let t = (0, n.jsx)(s.AGO, f({}, e));
                return d
                    ? t
                    : (0, n.jsx)(s.ua7, {
                          text: u.intl.string(u.t.bBvAEB),
                          position: 'bottom',
                          children: (e) => (0, n.jsx)('div', b(f({}, e), { children: t }))
                      });
            },
            [d]
        );
    return (0, n.jsx)(
        s.zH8,
        b(f({}, e), {
            renderDefaultButton: W,
            renderCustomButton: G,
            renderGradientCustomButton: Z,
            isGradient: O,
            customColor: P,
            onChange: O ? N : R
        })
    );
}
