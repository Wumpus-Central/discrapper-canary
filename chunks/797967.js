r.r(t), r.d(t, { default: () => f }), r(47120);
var o = r(200651),
    n = r(192379),
    l = r(866442),
    i = r(481060),
    s = r(981631),
    a = r(388032),
    c = r(296260),
    u = r(895486);
function d(e) {
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
function p(e, t) {
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
let h = (e) => {
        let { position: t, color: r } = e;
        return (0, o.jsx)('div', {
            className: 'left' === t ? u.colorPickerDropperLeft : u.colorPickerDropperRight,
            children: (0, o.jsx)('div', {
                className: u.colorPickerDropperInner,
                style: { background: (0, l.Rf)(r) },
                children: (0, o.jsx)(i.ilE, {
                    size: 'custom',
                    colorClass: u.colorPickerDropperGradient,
                    width: 14,
                    height: 14
                })
            })
        });
    },
    b = (e) => {
        let { isStart: t, buttonRef: r, color: n, showPopout: l, position: s, onRequestClose: b, onShowPopout: f, onColorChange: g } = e;
        return (0, o.jsx)(i.tEY, {
            children: (0, o.jsx)(i.yRy, {
                targetElementRef: r,
                renderPopout: () =>
                    (0, o.jsx)(i.Z$W, {
                        onChange: (e) => g(e, t),
                        value: n
                    }),
                position: s,
                shouldShow: l,
                onRequestClose: b,
                children: (e) =>
                    (0, o.jsx)(i.ua7, {
                        text: a.NW.string(t ? c.Z.apbXbG : c.Z.JaVq1d),
                        position: 'bottom',
                        children: (l) =>
                            (0, o.jsx)('div', {
                                ref: r,
                                children: (0, o.jsx)(
                                    i.P3F,
                                    p(d({}, l, e), {
                                        className: u.colorSelectorPopoutContainer,
                                        onClick: f,
                                        'data-position': t ? 'left' : 'right',
                                        'aria-label': a.NW.string(t ? c.Z.apbXbG : c.Z.JaVq1d),
                                        children: (0, o.jsx)(h, {
                                            position: t ? 'left' : 'right',
                                            color: null != n ? n : 0
                                        })
                                    })
                                )
                            })
                    })
            })
        });
    };
function f(e) {
    let { defaultColor: t, colors: r, value: c, onChange: f, disabled: g = !1, customPickerPosition: j = 'bottom', isGradient: C = !1 } = e,
        P = n.useCallback((e) => 0 !== e && e !== t && !r.some((t) => t === e), [r, t]),
        x = n.useRef(null),
        k = n.useRef(null),
        w = n.useRef(null),
        [v, m] = n.useState(() => (P(c) ? c : null)),
        [y, O] = n.useState({
            start: P(c) ? c : void 0,
            end: s.p6O
        }),
        [S, R] = n.useState({
            showStart: !1,
            showEnd: !1
        });
    n.useEffect(() => {
        m(P(c) ? c : null),
            O({
                start: P(c) ? c : void 0,
                end: s.p6O
            });
    }, [c, P]);
    let D = n.useCallback(
            (e) => {
                null == f || f(e), m(null);
            },
            [f, m]
        ),
        _ = n.useCallback(
            (e) => {
                null == f || f(e), m(e);
            },
            [f, m]
        ),
        E = n.useCallback(
            (e, t) => {
                t ? O(p(d({}, y), { start: e })) : O(p(d({}, y), { end: e }));
            },
            [y]
        ),
        N = n.useCallback((e, t) => {
            R((r) => p(d({}, r), { [e]: t }));
        }, []),
        B = n.useCallback(() => {
            var e, t, r, n, i;
            let s = { background: 'linear-gradient(90deg, '.concat((0, l.Rf)(null !== (e = y.start) && void 0 !== e ? e : 0), ' 0%, ').concat((0, l.Rf)(y.end), ' 100%)') },
                a = (0, o.jsxs)('div', {
                    className: u.gradientButtonContainer,
                    children: [
                        (0, o.jsx)('div', {
                            className: u.gradientSwatch,
                            style: s
                        }),
                        (0, o.jsx)(h, {
                            position: 'left',
                            color: null !== (t = y.start) && void 0 !== t ? t : 0
                        }),
                        (0, o.jsx)(h, {
                            position: 'right',
                            color: null !== (r = y.end) && void 0 !== r ? r : 0
                        })
                    ]
                });
            return g
                ? a
                : (0, o.jsxs)('div', {
                      className: u.gradientButtonContainer,
                      children: [
                          (0, o.jsx)('div', {
                              className: u.gradientSwatch,
                              style: s
                          }),
                          (0, o.jsx)(b, {
                              isStart: !0,
                              buttonRef: k,
                              color: null !== (n = y.start) && void 0 !== n ? n : 0,
                              showPopout: S.showStart,
                              position: j,
                              onRequestClose: () => N('showStart', !1),
                              onShowPopout: () => N('showStart', !0),
                              onColorChange: E
                          }),
                          (0, o.jsx)(b, {
                              isStart: !1,
                              buttonRef: w,
                              color: null !== (i = y.end) && void 0 !== i ? i : 0,
                              showPopout: S.showEnd,
                              position: j,
                              onRequestClose: () => N('showEnd', !1),
                              onShowPopout: () => N('showEnd', !0),
                              onColorChange: E
                          })
                      ]
                  });
        }, [j, g, y, S, E, N]),
        G = n.useCallback(
            () =>
                (0, o.jsx)(i.Z$W, {
                    onChange: _,
                    value: v
                }),
            [_, v]
        ),
        W = n.useCallback(
            (e) => {
                let t = (0, o.jsx)(i.jHW, p(d({}, e), { 'aria-label': a.NW.string(a.t['FHBa//']) }));
                return g
                    ? t
                    : (0, o.jsx)(i.yRy, {
                          targetElementRef: x,
                          renderPopout: G,
                          position: j,
                          children: (e) =>
                              (0, o.jsx)(i.ua7, {
                                  targetElementRef: x,
                                  text: a.NW.string(a.t['FHBa//']),
                                  position: 'bottom',
                                  children: (r) => (0, o.jsx)('div', p(d({ ref: x }, r, e), { children: t }))
                              })
                      });
            },
            [j, g, G]
        ),
        Z = n.useCallback(
            (e) => {
                let t = (0, o.jsx)(i.AGO, d({}, e));
                return g
                    ? t
                    : (0, o.jsx)(i.ua7, {
                          text: a.NW.string(a.t.bBvAEB),
                          position: 'bottom',
                          children: (e) => (0, o.jsx)('div', p(d({}, e), { children: t }))
                      });
            },
            [g]
        );
    return (0, o.jsx)(
        i.zH8,
        p(d({}, e), {
            renderDefaultButton: Z,
            renderCustomButton: W,
            renderGradientCustomButton: B,
            isGradient: C,
            customColor: v,
            onChange: D
        })
    );
}
