r.r(t), r.d(t, { default: () => f }), r(47120);
var o = r(200651),
    n = r(192379),
    l = r(866442),
    s = r(481060),
    i = r(981631),
    a = r(388032),
    c = r(680278),
    u = r(675602);
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
                children: (0, o.jsx)(s.ilE, {
                    size: 'custom',
                    colorClass: u.colorPickerDropperGradient,
                    width: 14,
                    height: 14
                })
            })
        });
    },
    b = (e) => {
        let { isStart: t, buttonRef: r, color: n, showPopout: l, position: i, onRequestClose: b, onShowPopout: f, onColorChange: g } = e;
        return (0, o.jsx)(s.tEY, {
            children: (0, o.jsx)(s.yRy, {
                targetElementRef: r,
                renderPopout: () =>
                    (0, o.jsx)(s.Z$W, {
                        onChange: (e) => g(e, t),
                        value: n
                    }),
                position: i,
                shouldShow: l,
                onRequestClose: b,
                children: (e) =>
                    (0, o.jsx)(s.ua7, {
                        text: a.NW.string(t ? c.Z.apbXbG : c.Z.JaVq1d),
                        position: 'bottom',
                        children: (l) =>
                            (0, o.jsx)('div', {
                                ref: r,
                                children: (0, o.jsx)(
                                    s.P3F,
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
        [m, y] = n.useState(() => (P(c) ? c : null)),
        [O, S] = n.useState({
            start: P(c) ? c : void 0,
            end: i.p6O
        }),
        [v, R] = n.useState({
            showStart: !1,
            showEnd: !1
        });
    n.useEffect(() => {
        y(P(c) ? c : null),
            S({
                start: P(c) ? c : void 0,
                end: i.p6O
            });
    }, [c, P]);
    let D = n.useCallback(
            (e) => {
                null == f || f(e), y(null);
            },
            [f, y]
        ),
        _ = n.useCallback(
            (e) => {
                null == f || f(e), y(e);
            },
            [f, y]
        ),
        E = n.useCallback(
            (e, t) => {
                t ? S(p(d({}, O), { start: e })) : S(p(d({}, O), { end: e }));
            },
            [O]
        ),
        N = n.useCallback((e, t) => {
            R((r) => p(d({}, r), { [e]: t }));
        }, []),
        B = n.useCallback(() => {
            var e, t, r, n, s;
            let i = { background: 'linear-gradient(90deg, '.concat((0, l.Rf)(null != (e = O.start) ? e : 0), ' 0%, ').concat((0, l.Rf)(O.end), ' 100%)') },
                a = (0, o.jsxs)('div', {
                    className: u.gradientButtonContainer,
                    children: [
                        (0, o.jsx)('div', {
                            className: u.gradientSwatch,
                            style: i
                        }),
                        (0, o.jsx)(h, {
                            position: 'left',
                            color: null != (t = O.start) ? t : 0
                        }),
                        (0, o.jsx)(h, {
                            position: 'right',
                            color: null != (r = O.end) ? r : 0
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
                              style: i
                          }),
                          (0, o.jsx)(b, {
                              isStart: !0,
                              buttonRef: k,
                              color: null != (n = O.start) ? n : 0,
                              showPopout: v.showStart,
                              position: j,
                              onRequestClose: () => N('showStart', !1),
                              onShowPopout: () => N('showStart', !0),
                              onColorChange: E
                          }),
                          (0, o.jsx)(b, {
                              isStart: !1,
                              buttonRef: w,
                              color: null != (s = O.end) ? s : 0,
                              showPopout: v.showEnd,
                              position: j,
                              onRequestClose: () => N('showEnd', !1),
                              onShowPopout: () => N('showEnd', !0),
                              onColorChange: E
                          })
                      ]
                  });
        }, [j, g, O, v, E, N]),
        G = n.useCallback(
            () =>
                (0, o.jsx)(s.Z$W, {
                    onChange: _,
                    value: m
                }),
            [_, m]
        ),
        W = n.useCallback(
            (e) => {
                let t = (0, o.jsx)(s.jHW, p(d({}, e), { 'aria-label': a.NW.string(a.t['FHBa//']) }));
                return g
                    ? t
                    : (0, o.jsx)(s.yRy, {
                          targetElementRef: x,
                          renderPopout: G,
                          position: j,
                          children: (e) =>
                              (0, o.jsx)(s.ua7, {
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
                let t = (0, o.jsx)(s.AGO, d({}, e));
                return g
                    ? t
                    : (0, o.jsx)(s.ua7, {
                          text: a.NW.string(a.t.bBvAEB),
                          position: 'bottom',
                          children: (e) => (0, o.jsx)('div', p(d({}, e), { children: t }))
                      });
            },
            [g]
        );
    return (0, o.jsx)(
        s.zH8,
        p(d({}, e), {
            renderDefaultButton: Z,
            renderCustomButton: W,
            renderGradientCustomButton: B,
            isGradient: C,
            customColor: m,
            onChange: D
        })
    );
}
