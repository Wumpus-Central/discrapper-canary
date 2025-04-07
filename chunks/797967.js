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
let f = (e) => {
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
        return (0, o.jsx)(
            'div',
            h(b({}, l), {
                className: i()('left' === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight, { [p.disabled]: n }),
                children: (0, o.jsx)('div', {
                    className: p.colorPickerDropperInner,
                    style: { background: (0, s.Rf)(r) },
                    children: (0, o.jsx)(a.ilE, {
                        size: 'custom',
                        colorClass: p.colorPickerDropperGradient,
                        width: 14,
                        height: 14
                    })
                })
            })
        );
    },
    g = (e) => {
        let { isStart: t, buttonRef: r, color: n, showPopout: l, position: i, onRequestClose: s, onShowPopout: c, onColorChange: g, disabled: j } = e;
        return (0, o.jsx)(a.tEY, {
            children: (0, o.jsx)(a.yRy, {
                targetElementRef: r,
                renderPopout: () =>
                    (0, o.jsx)(a.Z$W, {
                        onChange: (e) => g(e, t),
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
                                            f,
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
    let { defaultColor: t, colors: r, value: l, onChange: i, disabled: d = !1, customPickerPosition: j = 'bottom', isGradient: P = !1 } = e,
        x = n.useCallback((e) => 0 !== e && e !== t && !r.some((t) => t === e), [r, t]),
        C = n.useRef(null),
        O = n.useRef(null),
        y = n.useRef(null),
        [k, w] = n.useState(() => (x(l) ? l : null)),
        [m, v] = n.useState({
            start: x(l) ? l : void 0,
            end: c.p6O
        }),
        [S, R] = n.useState({
            showStart: !1,
            showEnd: !1
        });
    n.useEffect(() => {
        w(x(l) ? l : null),
            v({
                start: x(l) ? l : void 0,
                end: c.p6O
            });
    }, [l, x]);
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
        N = n.useCallback((e, t) => {
            R((r) => h(b({}, r), { [e]: t }));
        }, []),
        B = n.useCallback(() => {
            var e, t, r, n, l;
            let i = { background: 'linear-gradient(90deg, '.concat((0, s.Rf)(null != (e = m.start) ? e : 0), ' 0%, ').concat((0, s.Rf)(m.end), ' 100%)') },
                a = (0, o.jsxs)('div', {
                    className: p.gradientButtonContainer,
                    children: [
                        (0, o.jsx)('div', {
                            className: p.gradientSwatch,
                            style: i
                        }),
                        (0, o.jsx)(f, {
                            position: 'left',
                            color: null != (t = m.start) ? t : 0,
                            disabled: d
                        }),
                        (0, o.jsx)(f, {
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
                          (0, o.jsx)(g, {
                              isStart: !0,
                              buttonRef: O,
                              color: null != (n = m.start) ? n : 0,
                              showPopout: S.showStart,
                              position: j,
                              onRequestClose: () => N('showStart', !1),
                              onShowPopout: () => N('showStart', !0),
                              onColorChange: E,
                              disabled: d
                          }),
                          (0, o.jsx)(g, {
                              isStart: !1,
                              buttonRef: y,
                              color: null != (l = m.end) ? l : 0,
                              showPopout: S.showEnd,
                              position: j,
                              onRequestClose: () => N('showEnd', !1),
                              onShowPopout: () => N('showEnd', !0),
                              onColorChange: E,
                              disabled: d
                          })
                      ]
                  });
        }, [j, d, m, S, E, N]),
        G = n.useCallback(
            () =>
                (0, o.jsx)(a.Z$W, {
                    onChange: D,
                    value: k
                }),
            [D, k]
        ),
        W = n.useCallback(
            (e) => {
                let t = (0, o.jsx)(a.jHW, h(b({}, e), { 'aria-label': u.NW.string(u.t['FHBa//']) }));
                return d
                    ? t
                    : (0, o.jsx)(a.yRy, {
                          targetElementRef: C,
                          renderPopout: G,
                          position: j,
                          children: (e) =>
                              (0, o.jsx)(a.ua7, {
                                  targetElementRef: C,
                                  text: u.NW.string(u.t['FHBa//']),
                                  position: 'bottom',
                                  children: (r) => (0, o.jsx)('div', h(b({ ref: C }, r, e), { children: t }))
                              })
                      });
            },
            [j, d, G]
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
            renderCustomButton: W,
            renderGradientCustomButton: B,
            isGradient: P,
            customColor: k,
            onChange: _
        })
    );
}
