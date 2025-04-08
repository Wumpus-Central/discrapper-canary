r.r(t), r.d(t, { default: () => j }), r(388685);
var o = r(200651),
    n = r(192379),
    l = r(120356),
    i = r.n(l),
    s = r(866442),
    a = r(481060),
    c = r(981631),
    u = r(388032),
    d = r(680278),
    p = r(675602);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            o.forEach(function (t) {
                var o;
                (o = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = o);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, o);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let g = (e) => {
        var { position: t, color: r, disabled: n } = e,
            l = (function (e, t) {
                if (null == e) return {};
                var r,
                    o,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            o,
                            n = {},
                            l = Object.keys(e);
                        for (o = 0; o < l.length; o++) (r = l[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                        return n;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < l.length; o++) (r = l[o]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
                }
                return n;
            })(e, ['position', 'color', 'disabled']);
        let u = (0, s.Bd)(null != r ? r : c.p6O) > 0.1;
        return (0, o.jsx)(
            'div',
            h(b({}, l), {
                className: i()('left' === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight, u ? p.lightRing : p.darkRing, { [p.disabled]: n }),
                children: (0, o.jsx)('div', {
                    className: p.colorPickerDropperInner,
                    style: { background: (0, s.Rf)(r) },
                    children: (0, o.jsx)(a.ilE, {
                        size: 'custom',
                        colorClass: u ? p.colorPickerDropperLight : p.colorPickerDropperDark,
                        width: 14,
                        height: 14
                    })
                })
            })
        );
    },
    f = (e) => {
        let { isStart: t, buttonRef: r, color: n, showPopout: l, position: i, onRequestClose: s, onShowPopout: c, onColorChange: f, disabled: j } = e;
        return (0, o.jsx)(a.tEY, {
            children: (0, o.jsx)(a.yRy, {
                targetElementRef: r,
                renderPopout: () =>
                    (0, o.jsx)(a.Z$W, {
                        onChange: (e) => f(e, t),
                        value: n
                    }),
                position: i,
                shouldShow: l,
                onRequestClose: s,
                children: (e) =>
                    (0, o.jsx)('div', {
                        ref: r,
                        children: (0, o.jsx)(
                            a.P3F,
                            h(b({}, e), {
                                className: p.colorSelectorPopoutContainer,
                                onClick: c,
                                'data-position': t ? 'left' : 'right',
                                'aria-label': u.NW.string(t ? d.Z.apbXbG : d.Z.JaVq1d),
                                children: (0, o.jsx)(a.ua7, {
                                    text: u.NW.string(t ? d.Z.apbXbG : d.Z.JaVq1d),
                                    position: 'bottom',
                                    children: (e) =>
                                        (0, o.jsx)(
                                            g,
                                            h(b({}, e), {
                                                position: t ? 'left' : 'right',
                                                color: null != n ? n : 0,
                                                disabled: j
                                            })
                                        )
                                })
                            })
                        )
                    })
            })
        });
    };
function j(e) {
    let { defaultColor: t, colors: r, value: l, onChange: i, disabled: d = !1, customPickerPosition: j = 'bottom', isGradient: k = !1 } = e,
        P = n.useCallback((e) => 0 !== e && e !== t && !r.some((t) => t === e), [r, t]),
        O = n.useRef(null),
        x = n.useRef(null),
        C = n.useRef(null),
        [y, w] = n.useState(() => (P(l) ? l : null)),
        [m, v] = n.useState({
            start: P(l) ? l : void 0,
            end: c.p6O
        }),
        [R, S] = n.useState({
            showStart: !1,
            showEnd: !1
        });
    n.useEffect(() => {
        w(P(l) ? l : null),
            v({
                start: P(l) ? l : void 0,
                end: c.p6O
            });
    }, [l, P]);
    let _ = n.useCallback(
            (e) => {
                null == i || i(e), w(null);
            },
            [i, w]
        ),
        D = n.useCallback(
            (e) => {
                null == i || i(e), w(e);
            },
            [i, w]
        ),
        E = n.useCallback(
            (e, t) => {
                t ? v(h(b({}, m), { start: e })) : v(h(b({}, m), { end: e }));
            },
            [m]
        ),
        B = n.useCallback((e, t) => {
            S((r) => h(b({}, r), { [e]: t }));
        }, []),
        N = n.useCallback(() => {
            var e, t, r, n, l;
            let i = { background: 'linear-gradient(90deg, '.concat((0, s.Rf)(null != (e = m.start) ? e : 0), ' 0%, ').concat((0, s.Rf)(m.end), ' 100%)') },
                a = (0, o.jsxs)('div', {
                    className: p.gradientButtonContainer,
                    children: [
                        (0, o.jsx)('div', {
                            className: p.gradientSwatch,
                            style: i
                        }),
                        (0, o.jsx)(g, {
                            position: 'left',
                            color: null != (t = m.start) ? t : 0,
                            disabled: d
                        }),
                        (0, o.jsx)(g, {
                            position: 'right',
                            color: null != (r = m.end) ? r : 0,
                            disabled: d
                        })
                    ]
                });
            return d
                ? a
                : (0, o.jsxs)('div', {
                      className: p.gradientButtonContainer,
                      children: [
                          (0, o.jsx)('div', {
                              className: p.gradientSwatch,
                              style: i
                          }),
                          (0, o.jsx)(f, {
                              isStart: !0,
                              buttonRef: x,
                              color: null != (n = m.start) ? n : 0,
                              showPopout: R.showStart,
                              position: j,
                              onRequestClose: () => B('showStart', !1),
                              onShowPopout: () => B('showStart', !0),
                              onColorChange: E,
                              disabled: d
                          }),
                          (0, o.jsx)(f, {
                              isStart: !1,
                              buttonRef: C,
                              color: null != (l = m.end) ? l : 0,
                              showPopout: R.showEnd,
                              position: j,
                              onRequestClose: () => B('showEnd', !1),
                              onShowPopout: () => B('showEnd', !0),
                              onColorChange: E,
                              disabled: d
                          })
                      ]
                  });
        }, [j, d, m, R, E, B]),
        W = n.useCallback(
            () =>
                (0, o.jsx)(a.Z$W, {
                    onChange: D,
                    value: y
                }),
            [D, y]
        ),
        L = n.useCallback(
            (e) => {
                let t = (0, o.jsx)(a.jHW, h(b({}, e), { 'aria-label': u.NW.string(u.t['FHBa//']) }));
                return d
                    ? t
                    : (0, o.jsx)(a.yRy, {
                          targetElementRef: O,
                          renderPopout: W,
                          position: j,
                          children: (e) =>
                              (0, o.jsx)(a.ua7, {
                                  targetElementRef: O,
                                  text: u.NW.string(u.t['FHBa//']),
                                  position: 'bottom',
                                  children: (r) => (0, o.jsx)('div', h(b({ ref: O }, r, e), { children: t }))
                              })
                      });
            },
            [j, d, W]
        ),
        Z = n.useCallback(
            (e) => {
                let t = (0, o.jsx)(a.AGO, b({}, e));
                return d
                    ? t
                    : (0, o.jsx)(a.ua7, {
                          text: u.NW.string(u.t.bBvAEB),
                          position: 'bottom',
                          children: (e) => (0, o.jsx)('div', h(b({}, e), { children: t }))
                      });
            },
            [d]
        );
    return (0, o.jsx)(
        a.zH8,
        h(b({}, e), {
            renderDefaultButton: Z,
            renderCustomButton: L,
            renderGradientCustomButton: N,
            isGradient: k,
            customColor: y,
            onChange: _
        })
    );
}
