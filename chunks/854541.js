n.d(t, {
    AG: () => D,
    Z$: () => M,
    jH: () => x,
    zH: () => k
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
    E = n(534828),
    v = n(981631),
    b = n(388032),
    y = n(324945);
function O(e, t, n) {
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
function S(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let C = 7,
    R = () => Promise.resolve();
function P(e) {
    return null == e ? null : 'string' == typeof e ? ((0, c.FX)(e) ? (0, c._i)(e) : null) : e;
}
function w(e) {
    let { color: t, isDefault: n = !1, isCustom: i = !1, isSelected: o = !1, disabled: l = !1, style: u = {}, onClick: d, 'aria-label': p } = e,
        h = (0, s.JA)('color-'.concat(t)),
        g = null != t ? (0, c.Rf)(t) : u.backgroundColor,
        E = !1;
    function b() {
        let e = 16,
            t = 16;
        if (((i || n) && ((e = 32), (t = 24)), o))
            return (0, r.jsx)(_.dz2, {
                size: 'custom',
                width: e,
                height: t,
                color: (0, m.Lq)(E ? v.Ilk.WHITE_500 : v.Ilk.BLACK_500)
            });
    }
    return (
        i && !o ? (E = !0) : (i || o) && (E = (0, c.Bd)(t) > 0.1),
        (0, r.jsx)(f.t, {
            offset: -2,
            children: (0, r.jsxs)(
                'button',
                T(
                    S(
                        {
                            type: 'button',
                            className: a()(y.colorPickerSwatch, {
                                [y.disabled]: l,
                                [y.default]: n,
                                [y.custom]: i,
                                [y.noColor]: null == t
                            }),
                            disabled: l,
                            onClick: () => (null == d ? void 0 : d(t)),
                            style: T(S({}, u), { backgroundColor: g }),
                            'aria-label': null != p ? p : g
                        },
                        h
                    ),
                    {
                        children: [
                            i
                                ? (0, r.jsx)(_.vdY, {
                                      size: 'custom',
                                      className: y.colorPickerDropper,
                                      colorClass: y.colorPickerDropperFg,
                                      width: 14,
                                      height: 14,
                                      color: (0, m.Lq)(E ? v.Ilk.WHITE_500 : v.Ilk.BLACK_500)
                                  })
                                : null,
                            b()
                        ]
                    }
                )
            )
        })
    );
}
class D extends i.PureComponent {
    render() {
        let { color: e, onChange: t, value: n, disabled: i } = this.props;
        return (0, r.jsx)(w, {
            isDefault: !0,
            color: e,
            isSelected: e === n || 0 === n,
            onClick: t,
            disabled: i
        });
    }
}
class x extends i.PureComponent {
    render() {
        let { customColor: e, value: t, disabled: n, 'aria-label': i } = this.props;
        return (0, r.jsx)(w, {
            isCustom: !0,
            color: e,
            isSelected: t === e,
            disabled: n,
            'aria-label': i
        });
    }
}
function L(e) {
    let { value: t, eagerUpdate: n = !1, onChange: o, onClose: s, suggestedColors: l, middle: f, footer: m, showEyeDropper: v, wrapperComponentType: O, className: I } = e,
        N = (0, h.Z)(),
        A = P(t),
        R = null != A ? A : 0,
        w = (0, c.Rf)(R),
        D = (0, c.O)(R),
        [x, L] = i.useState({
            current: R,
            pending: {
                hex: w,
                hsl: D
            },
            input: w
        });
    i.useEffect(() => {
        if (null == A || A === x.current) return;
        let e = (0, c.Rf)(A),
            t = (0, c.O)(A);
        L({
            current: A,
            pending: {
                hex: e,
                hsl: t
            },
            input: e
        });
    }, [A, x]),
        i.useEffect(() => s, [s]);
    let M = (e) => {
            let t = '#' === e[0] ? e : '#'.concat(e);
            if (!(0, c.FX)(t)) {
                L((e) => T(S({}, e), { input: t }));
                return;
            }
            let n = (0, c._i)(t),
                r = (0, c.O)(n);
            L({
                current: n,
                pending: {
                    hex: t,
                    hsl: r
                },
                input: t
            }),
                o(n);
        },
        k = async () => {
            if (null != N)
                try {
                    let { sRGBHex: e } = await N.open();
                    M(e);
                } catch (e) {}
        },
        j = i.useCallback(
            (e) => {
                L((t) =>
                    T(S({}, t), {
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
                (0, r.jsx)(E.Z, {
                    onChange: j,
                    onChangeComplete: (e) => {
                        let { hex: t } = e;
                        return U(t);
                    },
                    color: x.pending.hsl
                }),
                f,
                (0, r.jsxs)('div', {
                    className: y.customColorPickerInputContainer,
                    children: [
                        v &&
                            null != N &&
                            (0, r.jsx)(g.JO, {
                                onClick: k,
                                tooltip: b.NW.string(b.t['0dU9Nz']),
                                tooltipPosition: 'top',
                                className: y.customColorPickerEyeDropper,
                                icon: _.ilE
                            }),
                        (0, r.jsx)(p.o, {
                            className: y.customColorPickerInput,
                            value: x.input,
                            onChange: M,
                            maxLength: C
                        })
                    ]
                }),
                null != l &&
                    l.length > 0 &&
                    (0, r.jsx)('div', {
                        className: y.suggestedColors,
                        children: l.map((e, t) =>
                            (0, r.jsx)(
                                u.P,
                                {
                                    'aria-label': '',
                                    style: { backgroundColor: e },
                                    className: y.suggestedColor,
                                    onClick: () => M(e)
                                },
                                ''.concat(e, '-').concat(t)
                            )
                        )
                    }),
                m
            ]
        }),
        B = null != O ? O : d.V;
    return (0, r.jsx)(B, {
        'aria-label': b.NW.string(b.t.WTqQ5e),
        className: a()(y.customColorPicker, I),
        children: G
    });
}
let M = i.memo(L);
function k(e) {
    let { className: t, defaultColor: n, customColor: i, colors: o, value: c, disabled: u, onChange: d, renderDefaultButton: f, renderCustomButton: p, colorContainerClassName: _ } = e,
        h = (e) =>
            (0, r.jsx)('div', {
                className: y.colorPickerRow,
                children: e.map((e) =>
                    (0, r.jsx)(
                        w,
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
                    s = N(e, ['ref']);
                return (0, r.jsxs)(
                    'div',
                    T(
                        S(
                            {
                                className: a()(y.container, t),
                                ref: o
                            },
                            s
                        ),
                        {
                            children: [
                                (0, r.jsx)('div', {
                                    className: a()(y.defaultContainer, _),
                                    children: f({
                                        value: c,
                                        color: n,
                                        onChange: d,
                                        disabled: u
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: a()(y.customContainer, _),
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
