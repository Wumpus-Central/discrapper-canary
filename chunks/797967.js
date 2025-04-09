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
    let { defaultColor: t, colors: r, value: l, onChange: i, disabled: d = !1, customPickerPosition: j = 'bottom', secondaryValue: k, onChangeGradientColors: O } = e,
        P = null != k,
        x = n.useCallback((e) => 0 !== e && e !== t && !r.some((t) => t === e), [r, t]),
        C = n.useRef(null),
        y = n.useRef(null),
        w = n.useRef(null),
        [m, v] = n.useState(() => (x(l) ? l : null)),
        [R, S] = n.useState({
            start: x(l) ? l : void 0,
            end: null != k ? k : c.p6O
        }),
        [_, D] = n.useState({
            showStart: !1,
            showEnd: !1
        });
    n.useEffect(() => {
        v(x(l) ? l : null),
            S({
                start: x(l) ? l : void 0,
                end: null != k ? k : c.p6O
            });
    }, [l, x, k]);
    let E = n.useCallback(
            (e) => {
                null == i || i(e), v(null);
            },
            [i, v]
        ),
        B = n.useCallback(
            (e) => {
                null == i || i(e), v(e);
            },
            [i, v]
        ),
        N = n.useCallback(
            (e, t) => {
                S({
                    start: e,
                    end: t
                }),
                    null == O || O([e, t]);
            },
            [O]
        ),
        W = n.useCallback((e, t) => {
            D((r) => h(b({}, r), { [e]: t }));
        }, []),
        L = n.useCallback(() => {
            var e, t, r, n, l;
            let i = { background: 'linear-gradient(90deg, '.concat((0, s.Rf)(null != (e = R.start) ? e : c.p6O), ' 0%, ').concat((0, s.Rf)(R.end), ' 100%)') },
                a = (0, o.jsxs)('div', {
                    className: p.gradientButtonContainer,
                    children: [
                        (0, o.jsx)('div', {
                            className: p.gradientSwatch,
                            style: i
                        }),
                        (0, o.jsx)(g, {
                            position: 'left',
                            color: null != (t = R.start) ? t : c.p6O,
                            disabled: d
                        }),
                        (0, o.jsx)(g, {
                            position: 'right',
                            color: null != (r = R.end) ? r : 0,
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
                              buttonRef: y,
                              color: null != (n = R.start) ? n : c.p6O,
                              showPopout: _.showStart,
                              position: j,
                              onRequestClose: () => W('showStart', !1),
                              onShowPopout: () => W('showStart', !0),
                              onColorChange: (e) => N(e, R.end),
                              disabled: d
                          }),
                          (0, o.jsx)(f, {
                              isStart: !1,
                              buttonRef: w,
                              color: null != (l = R.end) ? l : 0,
                              showPopout: _.showEnd,
                              position: j,
                              onRequestClose: () => W('showEnd', !1),
                              onShowPopout: () => W('showEnd', !0),
                              onColorChange: (e) => {
                                  var t;
                                  return N(null != (t = R.start) ? t : c.p6O, e);
                              },
                              disabled: d
                          })
                      ]
                  });
        }, [j, d, R, _, N, W]),
        Z = n.useCallback(
            () =>
                (0, o.jsx)(a.Z$W, {
                    onChange: B,
                    value: m
                }),
            [B, m]
        ),
        q = n.useCallback(
            (e) => {
                let t = (0, o.jsx)(a.jHW, h(b({}, e), { 'aria-label': u.NW.string(u.t['FHBa//']) }));
                return d
                    ? t
                    : (0, o.jsx)(a.yRy, {
                          targetElementRef: C,
                          renderPopout: Z,
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
            [j, d, Z]
        ),
        G = n.useCallback(
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
            renderDefaultButton: G,
            renderCustomButton: q,
            renderGradientCustomButton: L,
            isGradient: P,
            customColor: m,
            onChange: P ? N : E
        })
    );
}
