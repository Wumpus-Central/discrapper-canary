r.d(n, {
    AG: function () {
        return R;
    },
    Z$: function () {
        return x;
    },
    jH: function () {
        return O;
    },
    zH: function () {
        return L;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(91192),
    c = r(924826),
    d = r(866442),
    f = r(1561),
    p = r(507274),
    h = r(84735),
    _ = r(463208),
    m = r(481060),
    g = r(408886),
    E = r(44315),
    v = r(665149),
    y = r(534828),
    b = r(981631),
    I = r(388032),
    T = r(379100);
let S = 7,
    A = () => Promise.resolve();
function C(e) {
    if (null == e) return null;
    if ('string' == typeof e) return (0, d.FX)(e) ? (0, d._i)(e) : null;
    return e;
}
function N(e) {
    let { color: n, isDefault: r = !1, isCustom: i = !1, isSelected: o = !1, disabled: s = !1, style: c = {}, onClick: f, 'aria-label': p } = e,
        _ = (0, u.JA)('color-'.concat(n)),
        g = null != n ? (0, d.Rf)(n) : c.backgroundColor,
        v = !1;
    function y() {
        let e = 16,
            n = 16;
        if (((i || r) && ((e = 32), (n = 24)), o))
            return (0, a.jsx)(m.CheckmarkLargeIcon, {
                size: 'custom',
                width: e,
                height: n,
                color: (0, E.Lq)(v ? b.Ilk.WHITE_500 : b.Ilk.BLACK_500)
            });
    }
    return (
        i && !o ? (v = !0) : (i || o) && (v = (0, d.Bd)(n) > 0.1),
        (0, a.jsx)(h.t, {
            offset: -2,
            children: (0, a.jsxs)('button', {
                type: 'button',
                className: l()(T.colorPickerSwatch, {
                    [T.disabled]: s,
                    [T.default]: r,
                    [T.custom]: i,
                    [T.noColor]: null == n
                }),
                disabled: s,
                onClick: () => (null == f ? void 0 : f(n)),
                style: {
                    ...c,
                    backgroundColor: g
                },
                'aria-label': null != p ? p : g,
                ..._,
                children: [
                    i
                        ? (0, a.jsx)(m.PencilIcon, {
                              size: 'custom',
                              className: T.colorPickerDropper,
                              colorClass: T.colorPickerDropperFg,
                              width: 14,
                              height: 14,
                              color: (0, E.Lq)(v ? b.Ilk.WHITE_500 : b.Ilk.BLACK_500)
                          })
                        : null,
                    y()
                ]
            })
        })
    );
}
class R extends o.PureComponent {
    render() {
        let { color: e, onChange: n, value: r, disabled: i } = this.props;
        return (0, a.jsx)(N, {
            isDefault: !0,
            color: e,
            isSelected: e === r || 0 === r,
            onClick: n,
            disabled: i
        });
    }
}
class O extends o.PureComponent {
    render() {
        let { customColor: e, value: n, disabled: r, 'aria-label': i } = this.props;
        return (0, a.jsx)(N, {
            isCustom: !0,
            color: e,
            isSelected: n === e,
            disabled: r,
            'aria-label': i
        });
    }
}
function D(e) {
    let { value: n, eagerUpdate: r = !1, onChange: i, onClose: s, suggestedColors: u, middle: c, footer: h, showEyeDropper: E, wrapperComponentType: b, className: A } = e,
        N = (0, g.Z)(),
        R = C(n),
        O = null != R ? R : 0,
        D = (0, d.Rf)(O),
        x = (0, d.O)(O),
        [L, w] = o.useState({
            current: O,
            pending: {
                hex: D,
                hsl: x
            },
            input: D
        });
    o.useEffect(() => {
        if (null == R || R === L.current) return;
        let e = (0, d.Rf)(R),
            n = (0, d.O)(R);
        w({
            current: R,
            pending: {
                hex: e,
                hsl: n
            },
            input: e
        });
    }, [R, L]),
        o.useEffect(() => s, [s]);
    let P = (e) => {
            let n = '#' === e[0] ? e : '#'.concat(e);
            if (!(0, d.FX)(n)) {
                w((e) => ({
                    ...e,
                    input: n
                }));
                return;
            }
            let r = (0, d._i)(n),
                a = (0, d.O)(r);
            w({
                current: r,
                pending: {
                    hex: n,
                    hsl: a
                },
                input: n
            }),
                i(r);
        },
        M = async () => {
            if (null != N)
                try {
                    let { sRGBHex: e } = await N.open();
                    P(e);
                } catch {}
        },
        k = o.useCallback(
            (e) => {
                w((n) => ({
                    ...n,
                    pending: e,
                    input: e.hex
                })),
                    r && i((0, d._i)(e.hex));
            },
            [r, i]
        ),
        U = (e) => {
            i((0, d._i)(e));
        },
        B = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(y.Z, {
                    onChange: k,
                    onChangeComplete: (e) => {
                        let { hex: n } = e;
                        return U(n);
                    },
                    color: L.pending.hsl
                }),
                c,
                (0, a.jsxs)('div', {
                    className: T.customColorPickerInputContainer,
                    children: [
                        E &&
                            null != N &&
                            (0, a.jsx)(v.JO, {
                                onClick: M,
                                tooltip: I.intl.string(I.t['0dU9Nz']),
                                tooltipPosition: 'top',
                                className: T.customColorPickerEyeDropper,
                                icon: m.EyeDropperIcon
                            }),
                        (0, a.jsx)(_.o, {
                            className: T.customColorPickerInput,
                            value: L.input,
                            onChange: P,
                            maxLength: S
                        })
                    ]
                }),
                null != u &&
                    u.length > 0 &&
                    (0, a.jsx)('div', {
                        className: T.suggestedColors,
                        children: u.map((e, n) =>
                            (0, a.jsx)(
                                f.P,
                                {
                                    'aria-label': '',
                                    style: { backgroundColor: e },
                                    className: T.suggestedColor,
                                    onClick: () => P(e)
                                },
                                ''.concat(e, '-').concat(n)
                            )
                        )
                    }),
                h
            ]
        }),
        G = null != b ? b : p.V;
    return (0, a.jsx)(G, {
        'aria-label': I.intl.string(I.t.WTqQ5e),
        className: l()(T.customColorPicker, A),
        children: B
    });
}
let x = o.memo(D);
function L(e) {
    let { className: n, defaultColor: r, customColor: i, colors: o, value: s, disabled: d, onChange: f, renderDefaultButton: p, renderCustomButton: h, colorContainerClassName: _ } = e,
        m = (e) =>
            (0, a.jsx)('div', {
                className: T.colorPickerRow,
                children: e.map((e) =>
                    (0, a.jsx)(
                        N,
                        {
                            color: e,
                            isSelected: e === s,
                            onClick: f,
                            disabled: d
                        },
                        e
                    )
                )
            }),
        g = o.slice(0, o.length / 2),
        E = o.slice(o.length / 2, o.length),
        v = (0, c.ZP)({
            id: 'color-picker',
            isEnabled: !0,
            scrollToStart: A,
            scrollToEnd: A
        });
    return (0, a.jsx)(u.bG, {
        navigator: v,
        children: (0, a.jsx)(u.SJ, {
            children: (e) => {
                let { ref: o, ...u } = e;
                return (0, a.jsxs)('div', {
                    className: l()(T.container, n),
                    ref: o,
                    ...u,
                    children: [
                        (0, a.jsx)('div', {
                            className: l()(T.defaultContainer, _),
                            children: p({
                                value: s,
                                color: r,
                                onChange: f,
                                disabled: d
                            })
                        }),
                        (0, a.jsx)('div', {
                            className: l()(T.customContainer, _),
                            children: h({
                                value: s,
                                customColor: i,
                                disabled: d
                            })
                        }),
                        (0, a.jsxs)('div', {
                            children: [m(g), m(E)]
                        })
                    ]
                });
            }
        })
    });
}
