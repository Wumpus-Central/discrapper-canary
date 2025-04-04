r.r(t), r.d(t, { default: () => j }), r(47120);
var o = r(200651),
    n = r(192379),
    l = r(120356),
    s = r.n(l),
    i = r(866442),
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
        let { position: t, color: r, disabled: n } = e;
        return (0, o.jsx)('div', {
            className: s()('left' === t ? p.colorPickerDropperLeft : p.colorPickerDropperRight, { [p.disabled]: n }),
            children: (0, o.jsx)('div', {
                className: p.colorPickerDropperInner,
                style: { background: (0, i.Rf)(r) },
                children: (0, o.jsx)(a.ilE, {
                    size: 'custom',
                    colorClass: p.colorPickerDropperGradient,
                    width: 14,
                    height: 14
                })
            })
        });
    },
    g = (e) => {
        let { isStart: t, buttonRef: r, color: n, showPopout: l, position: s, onRequestClose: i, onShowPopout: c, onColorChange: g, disabled: j } = e;
        return (0, o.jsx)(a.tEY, {
            children: (0, o.jsx)(a.yRy, {
                targetElementRef: r,
                renderPopout: () =>
                    (0, o.jsx)(a.Z$W, {
                        onChange: (e) => g(e, t),
                        value: n
                    }),
                position: s,
                shouldShow: l,
                onRequestClose: i,
                children: (e) =>
                    (0, o.jsx)(a.ua7, {
                        text: u.NW.string(t ? d.Z.apbXbG : d.Z.JaVq1d),
                        position: 'bottom',
                        children: (l) =>
                            (0, o.jsx)('div', {
                                ref: r,
                                children: (0, o.jsx)(
                                    a.P3F,
                                    h(b({}, l, e), {
                                        className: p.colorSelectorPopoutContainer,
                                        onClick: c,
                                        'data-position': t ? 'left' : 'right',
                                        'aria-label': u.NW.string(t ? d.Z.apbXbG : d.Z.JaVq1d),
                                        children: (0, o.jsx)(f, {
                                            position: t ? 'left' : 'right',
                                            color: null != n ? n : 0,
                                            disabled: j
                                        })
                                    })
                                )
                            })
                    })
            })
        });
    };
function j(e) {
    let { defaultColor: t, colors: r, value: l, onChange: s, disabled: d = !1, customPickerPosition: j = 'bottom', isGradient: C = !1 } = e,
        P = n.useCallback((e) => 0 !== e && e !== t && !r.some((t) => t === e), [r, t]),
        x = n.useRef(null),
        k = n.useRef(null),
        w = n.useRef(null),
        [m, y] = n.useState(() => (P(l) ? l : null)),
        [O, S] = n.useState({
            start: P(l) ? l : void 0,
            end: c.p6O
        }),
        [v, R] = n.useState({
            showStart: !1,
            showEnd: !1
        });
    n.useEffect(() => {
        y(P(l) ? l : null),
            S({
                start: P(l) ? l : void 0,
                end: c.p6O
            });
    }, [l, P]);
    let _ = n.useCallback(
            (e) => {
                null == s || s(e), y(null);
            },
            [s, y]
        ),
        D = n.useCallback(
            (e) => {
                null == s || s(e), y(e);
            },
            [s, y]
        ),
        E = n.useCallback(
            (e, t) => {
                t ? S(h(b({}, O), { start: e })) : S(h(b({}, O), { end: e }));
            },
            [O]
        ),
        N = n.useCallback((e, t) => {
            R((r) => h(b({}, r), { [e]: t }));
        }, []),
        B = n.useCallback(() => {
            var e, t, r, n, l;
            let s = { background: 'linear-gradient(90deg, '.concat((0, i.Rf)(null != (e = O.start) ? e : 0), ' 0%, ').concat((0, i.Rf)(O.end), ' 100%)') },
                a = (0, o.jsxs)('div', {
                    className: p.gradientButtonContainer,
                    children: [
                        (0, o.jsx)('div', {
                            className: p.gradientSwatch,
                            style: s
                        }),
                        (0, o.jsx)(f, {
                            position: 'left',
                            color: null != (t = O.start) ? t : 0,
                            disabled: d
                        }),
                        (0, o.jsx)(f, {
                            position: 'right',
                            color: null != (r = O.end) ? r : 0,
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
                              style: s
                          }),
                          (0, o.jsx)(g, {
                              isStart: !0,
                              buttonRef: k,
                              color: null != (n = O.start) ? n : 0,
                              showPopout: v.showStart,
                              position: j,
                              onRequestClose: () => N('showStart', !1),
                              onShowPopout: () => N('showStart', !0),
                              onColorChange: E,
                              disabled: d
                          }),
                          (0, o.jsx)(g, {
                              isStart: !1,
                              buttonRef: w,
                              color: null != (l = O.end) ? l : 0,
                              showPopout: v.showEnd,
                              position: j,
                              onRequestClose: () => N('showEnd', !1),
                              onShowPopout: () => N('showEnd', !0),
                              onColorChange: E,
                              disabled: d
                          })
                      ]
                  });
        }, [j, d, O, v, E, N]),
        G = n.useCallback(
            () =>
                (0, o.jsx)(a.Z$W, {
                    onChange: D,
                    value: m
                }),
            [D, m]
        ),
        W = n.useCallback(
            (e) => {
                let t = (0, o.jsx)(a.jHW, h(b({}, e), { 'aria-label': u.NW.string(u.t['FHBa//']) }));
                return d
                    ? t
                    : (0, o.jsx)(a.yRy, {
                          targetElementRef: x,
                          renderPopout: G,
                          position: j,
                          children: (e) =>
                              (0, o.jsx)(a.ua7, {
                                  targetElementRef: x,
                                  text: u.NW.string(u.t['FHBa//']),
                                  position: 'bottom',
                                  children: (r) => (0, o.jsx)('div', h(b({ ref: x }, r, e), { children: t }))
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
            isGradient: C,
            customColor: m,
            onChange: _
        })
    );
}
