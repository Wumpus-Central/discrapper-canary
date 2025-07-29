(n.r(t), n.d(t, { default: () => _ }), n(388685));
var r = n(255367),
    s = n(73800),
    o = n(120356),
    l = n.n(o),
    a = n(866442),
    i = n(481060),
    c = n(981631),
    d = n(388032),
    u = n(93841),
    p = n(675602);
function m(e) {
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
function f(e, t) {
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
        var { position: t, color: n, disabled: s } = e,
            o = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            s = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
                }
                return s;
            })(e, ['position', 'color', 'disabled']);
        let d = (0, a.Bd)(null != n ? n : c.p6O) > 0.1;
        return (0, r.jsx)(
            'div',
            f(m({}, o), {
                className: l()('left' === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight, d ? p.lightRing : p.darkRing, { [p.disabled]: s }),
                children: (0, r.jsx)('div', {
                    className: p.colorPickerDropperInner,
                    style: { background: (0, a.Rf)(n) },
                    children: (0, r.jsx)(i.ilE, {
                        size: 'custom',
                        colorClass: d ? p.colorPickerDropperLight : p.colorPickerDropperDark,
                        width: 14,
                        height: 14
                    })
                })
            })
        );
    },
    b = (e) => {
        let { isStart: t, buttonRef: n, color: s, showPopout: o, position: l, onRequestClose: a, onShowPopout: c, onColorChange: b, disabled: _ } = e;
        return (0, r.jsx)(i.tEY, {
            children: (0, r.jsx)(i.yRy, {
                targetElementRef: n,
                renderPopout: () =>
                    (0, r.jsx)(i.Z$W, {
                        onChange: (e) => b(e, t),
                        value: s
                    }),
                position: l,
                shouldShow: o,
                onRequestClose: a,
                children: (e) =>
                    (0, r.jsx)('div', {
                        ref: n,
                        children: (0, r.jsx)(
                            i.P3F,
                            f(m({}, e), {
                                className: p.colorSelectorPopoutContainer,
                                onClick: c,
                                'data-position': t ? 'left' : 'right',
                                'aria-label': d.intl.string(t ? u.default.apbXbG : u.default.JaVq1d),
                                children: (0, r.jsx)(i.ua7, {
                                    text: d.intl.string(t ? u.default.apbXbG : u.default.JaVq1d),
                                    position: 'bottom',
                                    children: (e) =>
                                        (0, r.jsx)(
                                            g,
                                            f(m({}, e), {
                                                position: t ? 'left' : 'right',
                                                color: null != s ? s : 0,
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
    let { defaultColor: t, colors: n, value: o, onChange: l, disabled: u = !1, customPickerPosition: _ = 'bottom', secondaryValue: h, onChangeGradientColors: x, isGradient: j = !1 } = e,
        v = s.useCallback((e) => 0 !== e && e !== t && !n.some((t) => t === e), [n, t]),
        C = s.useRef(null),
        y = s.useRef(null),
        k = s.useRef(null),
        [O, P] = s.useState(() => (v(o) ? o : null)),
        [w, S] = s.useState({
            start: o,
            end: null != h ? h : c.p6O
        }),
        [I, E] = s.useState({
            showStart: !1,
            showEnd: !1
        });
    s.useEffect(() => {
        (P(v(o) ? o : null),
            S({
                start: o,
                end: null != h ? h : c.p6O
            }));
    }, [o, v, h]);
    let N = s.useCallback(
            (e) => {
                (null == l || l(e), P(null));
            },
            [l, P]
        ),
        B = s.useCallback(
            (e) => {
                (null == l || l(e), P(e));
            },
            [l, P]
        ),
        R = s.useCallback(
            (e, t) => {
                (S({
                    start: e,
                    end: t
                }),
                    null == x || x([e, t]));
            },
            [x]
        ),
        D = s.useCallback((e, t) => {
            E((n) => f(m({}, n), { [e]: t }));
        }, []),
        A = s.useCallback(() => {
            var e, t, n, s, o;
            let l = { background: 'linear-gradient(90deg, '.concat((0, a.Rf)(null != (e = w.start) ? e : c.p6O), ' 0%, ').concat((0, a.Rf)(w.end), ' 100%)') },
                i = (0, r.jsxs)('div', {
                    className: p.gradientButtonContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: p.gradientSwatch,
                            style: l
                        }),
                        (0, r.jsx)(g, {
                            position: 'left',
                            color: null != (t = w.start) ? t : c.p6O,
                            disabled: u
                        }),
                        (0, r.jsx)(g, {
                            position: 'right',
                            color: null != (n = w.end) ? n : 0,
                            disabled: u
                        })
                    ]
                });
            return u
                ? i
                : (0, r.jsxs)('div', {
                      className: p.gradientButtonContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: p.gradientSwatch,
                              style: l
                          }),
                          (0, r.jsx)(b, {
                              isStart: !0,
                              buttonRef: y,
                              color: null != (s = w.start) ? s : c.p6O,
                              showPopout: I.showStart,
                              position: _,
                              onRequestClose: () => D('showStart', !1),
                              onShowPopout: () => D('showStart', !0),
                              onColorChange: (e) => R(e, w.end),
                              disabled: u
                          }),
                          (0, r.jsx)(b, {
                              isStart: !1,
                              buttonRef: k,
                              color: null != (o = w.end) ? o : 0,
                              showPopout: I.showEnd,
                              position: _,
                              onRequestClose: () => D('showEnd', !1),
                              onShowPopout: () => D('showEnd', !0),
                              onColorChange: (e) => {
                                  var t;
                                  return R(null != (t = w.start) ? t : c.p6O, e);
                              },
                              disabled: u
                          })
                      ]
                  });
        }, [_, u, w, I, R, D]),
        T = s.useCallback(
            () =>
                (0, r.jsx)(i.Z$W, {
                    onChange: B,
                    value: O
                }),
            [B, O]
        ),
        Z = s.useCallback(
            (e) => {
                let t = (0, r.jsx)(i.jHW, f(m({}, e), { 'aria-label': d.intl.string(d.t['FHBa//']) }));
                return u
                    ? t
                    : (0, r.jsx)(i.yRy, {
                          targetElementRef: C,
                          renderPopout: T,
                          position: _,
                          children: (e) =>
                              (0, r.jsx)(i.ua7, {
                                  targetElementRef: C,
                                  text: d.intl.string(d.t['FHBa//']),
                                  position: 'bottom',
                                  children: (n) => (0, r.jsx)('div', f(m({ ref: C }, n, e), { children: t }))
                              })
                      });
            },
            [_, u, T]
        ),
        L = s.useCallback(
            (e) => {
                let t = (0, r.jsx)(i.AGO, m({}, e));
                return u
                    ? t
                    : (0, r.jsx)(i.ua7, {
                          text: d.intl.string(d.t.bBvAEB),
                          position: 'bottom',
                          children: (e) => (0, r.jsx)('div', f(m({}, e), { children: t }))
                      });
            },
            [u]
        );
    return (0, r.jsx)(
        i.zH8,
        f(m({}, e), {
            renderDefaultButton: L,
            renderCustomButton: Z,
            renderGradientCustomButton: A,
            isGradient: j,
            customColor: O,
            onChange: j ? R : N
        })
    );
}
