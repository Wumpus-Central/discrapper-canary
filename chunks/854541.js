n.d(t, {
    AG: () => w,
    Z$: () => M,
    jH: () => L,
    zH: () => j
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(91192),
    l = n(924826),
    c = n(866442),
    u = n(1561),
    d = n(507274),
    f = n(84735),
    p = n(463208),
    _ = n(481060),
    h = n(408886),
    m = n(44315),
    g = n(665149),
    E = n(981631),
    v = n(388032),
    b = n(324945);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = i.lazy(() => Promise.all([n.e('26436'), n.e('28102')]).then(n.bind(n, 534828))),
    C = 7,
    R = () => Promise.resolve();
function P(e) {
    return null == e ? null : 'string' == typeof e ? ((0, c.FX)(e) ? (0, c._i)(e) : null) : e;
}
function D(e) {
    let { color: t, isDefault: n = !1, isCustom: i = !1, isSelected: o = !1, disabled: l = !1, style: u = {}, onClick: d, 'aria-label': p } = e,
        h = (0, s.JA)('color-'.concat(t)),
        g = null != t ? (0, c.Rf)(t) : u.backgroundColor,
        v = !1;
    function y() {
        let e = 16,
            t = 16;
        if (((i || n) && ((e = 32), (t = 24)), o))
            return (0, r.jsx)(_.dz2, {
                size: 'custom',
                width: e,
                height: t,
                color: (0, m.Lq)(v ? E.Ilk.WHITE_500 : E.Ilk.BLACK_500)
            });
    }
    return (
        i && !o ? (v = !0) : (i || o) && (v = (0, c.Bd)(t) > 0.1),
        (0, r.jsx)(f.t, {
            offset: -2,
            children: (0, r.jsxs)(
                'button',
                I(
                    O(
                        {
                            type: 'button',
                            className: a()(b.colorPickerSwatch, {
                                [b.disabled]: l,
                                [b.default]: n,
                                [b.custom]: i,
                                [b.noColor]: null == t
                            }),
                            disabled: l,
                            onClick: () => (null == d ? void 0 : d(t)),
                            style: I(O({}, u), { backgroundColor: g }),
                            'aria-label': null != p ? p : g
                        },
                        h
                    ),
                    {
                        children: [
                            i
                                ? (0, r.jsx)(_.vdY, {
                                      size: 'custom',
                                      className: b.colorPickerDropper,
                                      colorClass: b.colorPickerDropperFg,
                                      width: 14,
                                      height: 14,
                                      color: (0, m.Lq)(v ? E.Ilk.WHITE_500 : E.Ilk.BLACK_500)
                                  })
                                : null,
                            y()
                        ]
                    }
                )
            )
        })
    );
}
class w extends i.PureComponent {
    render() {
        let { color: e, onChange: t, value: n, disabled: i } = this.props;
        return (0, r.jsx)(D, {
            isDefault: !0,
            color: e,
            isSelected: e === n || 0 === n,
            onClick: t,
            disabled: i
        });
    }
}
class L extends i.PureComponent {
    render() {
        let { customColor: e, value: t, disabled: n, 'aria-label': i } = this.props;
        return (0, r.jsx)(D, {
            isCustom: !0,
            color: e,
            isSelected: t === e,
            disabled: n,
            'aria-label': i
        });
    }
}
function x(e) {
    let { value: t, eagerUpdate: n = !1, onChange: o, onClose: s, suggestedColors: l, middle: f, footer: m, showEyeDropper: E, wrapperComponentType: y, className: S } = e,
        T = (0, h.Z)(),
        N = P(t),
        R = null != N ? N : 0,
        D = (0, c.Rf)(R),
        w = (0, c.O)(R),
        [L, x] = i.useState({
            current: R,
            pending: {
                hex: D,
                hsl: w
            },
            input: D
        });
    i.useEffect(() => {
        if (null == N || N === L.current) return;
        let e = (0, c.Rf)(N),
            t = (0, c.O)(N);
        x({
            current: N,
            pending: {
                hex: e,
                hsl: t
            },
            input: e
        });
    }, [N, L]),
        i.useEffect(() => s, [s]);
    let M = (e) => {
            let t = '#' === e[0] ? e : '#'.concat(e);
            if (!(0, c.FX)(t)) {
                x((e) => I(O({}, e), { input: t }));
                return;
            }
            let n = (0, c._i)(t),
                r = (0, c.O)(n);
            x({
                current: n,
                pending: {
                    hex: t,
                    hsl: r
                },
                input: t
            }),
                o(n);
        },
        j = async () => {
            if (null != T)
                try {
                    let { sRGBHex: e } = await T.open();
                    M(e);
                } catch (e) {}
        },
        k = i.useCallback(
            (e) => {
                x((t) =>
                    I(O({}, t), {
                        pending: e,
                        input: e.hex
                    })
                ),
                    n && o((0, c._i)(e.hex));
            },
            [n, o]
        ),
        U = (e) => {
            o((0, c._i)(e));
        },
        G = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(i.Suspense, {
                    fallback: null,
                    children: (0, r.jsx)(A, {
                        onChange: k,
                        onChangeComplete: (e) => {
                            let { hex: t } = e;
                            return U(t);
                        },
                        color: L.pending.hsl
                    })
                }),
                f,
                (0, r.jsxs)('div', {
                    className: b.customColorPickerInputContainer,
                    children: [
                        E &&
                            null != T &&
                            (0, r.jsx)(g.JO, {
                                onClick: j,
                                tooltip: v.NW.string(v.t['0dU9Nz']),
                                tooltipPosition: 'top',
                                className: b.customColorPickerEyeDropper,
                                icon: _.ilE
                            }),
                        (0, r.jsx)(p.o, {
                            className: b.customColorPickerInput,
                            value: L.input,
                            onChange: M,
                            maxLength: C
                        })
                    ]
                }),
                null != l &&
                    l.length > 0 &&
                    (0, r.jsx)('div', {
                        className: b.suggestedColors,
                        children: l.map((e, t) =>
                            (0, r.jsx)(
                                u.P,
                                {
                                    'aria-label': '',
                                    style: { backgroundColor: e },
                                    className: b.suggestedColor,
                                    onClick: () => M(e)
                                },
                                ''.concat(e, '-').concat(t)
                            )
                        )
                    }),
                m
            ]
        }),
        B = null != y ? y : d.V;
    return (0, r.jsx)(B, {
        'aria-label': v.NW.string(v.t.WTqQ5e),
        className: a()(b.customColorPicker, S),
        children: G
    });
}
let M = i.memo(x);
function j(e) {
    let { className: t, defaultColor: n, customColor: i, colors: o, value: c, disabled: u, onChange: d, renderDefaultButton: f, renderCustomButton: p, colorContainerClassName: _ } = e,
        h = (e) =>
            (0, r.jsx)('div', {
                className: b.colorPickerRow,
                children: e.map((e) =>
                    (0, r.jsx)(
                        D,
                        {
                            color: e,
                            isSelected: e === c,
                            onClick: d,
                            disabled: u
                        },
                        e
                    )
                )
            }),
        m = o.slice(0, o.length / 2),
        g = o.slice(o.length / 2, o.length),
        E = (0, l.ZP)({
            id: 'color-picker',
            isEnabled: !0,
            scrollToStart: R,
            scrollToEnd: R
        });
    return (0, r.jsx)(s.bG, {
        navigator: E,
        children: (0, r.jsx)(s.SJ, {
            children: (e) => {
                var { ref: o } = e,
                    s = T(e, ['ref']);
                return (0, r.jsxs)(
                    'div',
                    I(
                        O(
                            {
                                className: a()(b.container, t),
                                ref: o
                            },
                            s
                        ),
                        {
                            children: [
                                (0, r.jsx)('div', {
                                    className: a()(b.defaultContainer, _),
                                    children: f({
                                        value: c,
                                        color: n,
                                        onChange: d,
                                        disabled: u
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: a()(b.customContainer, _),
                                    children: p({
                                        value: c,
                                        customColor: i,
                                        disabled: u
                                    })
                                }),
                                (0, r.jsxs)('div', {
                                    children: [h(m), h(g)]
                                })
                            ]
                        }
                    )
                );
            }
        })
    });
}
