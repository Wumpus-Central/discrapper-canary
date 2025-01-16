r.d(n, {
    AG: function () {
        return R;
    },
    Z$: function () {
        return L;
    },
    jH: function () {
        return O;
    },
    zH: function () {
        return x;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(91192),
    c = r(924826),
    d = r(866442),
    f = r(1561),
    _ = r(507274),
    h = r(84735),
    p = r(463208),
    m = r(481060),
    g = r(408886),
    E = r(44315),
    v = r(665149),
    I = r(534828),
    T = r(981631),
    b = r(388032),
    y = r(379100);
let S = 7,
    A = () => Promise.resolve();
function N(e) {
    if (null == e) return null;
    if ('string' == typeof e) return (0, d.FX)(e) ? (0, d._i)(e) : null;
    return e;
}
function C(e) {
    let { color: n, isDefault: r = !1, isCustom: i = !1, isSelected: s = !1, disabled: o = !1, style: c = {}, onClick: f, 'aria-label': _ } = e,
        p = (0, u.JA)('color-'.concat(n)),
        g = null != n ? (0, d.Rf)(n) : c.backgroundColor,
        v = !1;
    function I() {
        let e = 16,
            n = 16;
        if (((i || r) && ((e = 32), (n = 24)), s))
            return (0, a.jsx)(m.CheckmarkLargeIcon, {
                size: 'custom',
                width: e,
                height: n,
                color: (0, E.Lq)(v ? T.Ilk.WHITE_500 : T.Ilk.BLACK_500)
            });
    }
    return (
        i && !s ? (v = !0) : (i || s) && (v = (0, d.Bd)(n) > 0.1),
        (0, a.jsx)(h.t, {
            offset: -2,
            children: (0, a.jsxs)('button', {
                type: 'button',
                className: l()(y.colorPickerSwatch, {
                    [y.disabled]: o,
                    [y.default]: r,
                    [y.custom]: i,
                    [y.noColor]: null == n
                }),
                disabled: o,
                onClick: () => (null == f ? void 0 : f(n)),
                style: {
                    ...c,
                    backgroundColor: g
                },
                'aria-label': null != _ ? _ : g,
                ...p,
                children: [
                    i
                        ? (0, a.jsx)(m.PencilIcon, {
                              size: 'custom',
                              className: y.colorPickerDropper,
                              colorClass: y.colorPickerDropperFg,
                              width: 14,
                              height: 14,
                              color: (0, E.Lq)(v ? T.Ilk.WHITE_500 : T.Ilk.BLACK_500)
                          })
                        : null,
                    I()
                ]
            })
        })
    );
}
class R extends s.PureComponent {
    render() {
        let { color: e, onChange: n, value: r, disabled: i } = this.props;
        return (0, a.jsx)(C, {
            isDefault: !0,
            color: e,
            isSelected: e === r || 0 === r,
            onClick: n,
            disabled: i
        });
    }
}
class O extends s.PureComponent {
    render() {
        let { customColor: e, value: n, disabled: r, 'aria-label': i } = this.props;
        return (0, a.jsx)(C, {
            isCustom: !0,
            color: e,
            isSelected: n === e,
            disabled: r,
            'aria-label': i
        });
    }
}
function D(e) {
    let { value: n, eagerUpdate: r = !1, onChange: i, onClose: o, suggestedColors: u, middle: c, footer: h, showEyeDropper: E, wrapperComponentType: T, className: A } = e,
        C = (0, g.Z)(),
        R = N(n),
        O = null != R ? R : 0,
        D = (0, d.Rf)(O),
        L = (0, d.O)(O),
        [x, w] = s.useState({
            current: O,
            pending: {
                hex: D,
                hsl: L
            },
            input: D
        });
    s.useEffect(() => {
        if (null == R || R === x.current) return;
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
    }, [R, x]),
        s.useEffect(() => o, [o]);
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
            if (null != C)
                try {
                    let { sRGBHex: e } = await C.open();
                    P(e);
                } catch {}
        },
        k = s.useCallback(
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
                (0, a.jsx)(I.Z, {
                    onChange: k,
                    onChangeComplete: (e) => {
                        let { hex: n } = e;
                        return U(n);
                    },
                    color: x.pending.hsl
                }),
                c,
                (0, a.jsxs)('div', {
                    className: y.customColorPickerInputContainer,
                    children: [
                        E &&
                            null != C &&
                            (0, a.jsx)(v.JO, {
                                onClick: M,
                                tooltip: b.intl.string(b.t['0dU9Nz']),
                                tooltipPosition: 'top',
                                className: y.customColorPickerEyeDropper,
                                icon: m.EyeDropperIcon
                            }),
                        (0, a.jsx)(p.o, {
                            className: y.customColorPickerInput,
                            value: x.input,
                            onChange: P,
                            maxLength: S
                        })
                    ]
                }),
                null != u &&
                    u.length > 0 &&
                    (0, a.jsx)('div', {
                        className: y.suggestedColors,
                        children: u.map((e, n) =>
                            (0, a.jsx)(
                                f.P,
                                {
                                    'aria-label': '',
                                    style: { backgroundColor: e },
                                    className: y.suggestedColor,
                                    onClick: () => P(e)
                                },
                                ''.concat(e, '-').concat(n)
                            )
                        )
                    }),
                h
            ]
        }),
        G = null != T ? T : _.V;
    return (0, a.jsx)(G, {
        'aria-label': b.intl.string(b.t.WTqQ5e),
        className: l()(y.customColorPicker, A),
        children: B
    });
}
let L = s.memo(D);
function x(e) {
    let { className: n, defaultColor: r, customColor: i, colors: s, value: o, disabled: d, onChange: f, renderDefaultButton: _, renderCustomButton: h, colorContainerClassName: p } = e,
        m = (e) =>
            (0, a.jsx)('div', {
                className: y.colorPickerRow,
                children: e.map((e) =>
                    (0, a.jsx)(
                        C,
                        {
                            color: e,
                            isSelected: e === o,
                            onClick: f,
                            disabled: d
                        },
                        e
                    )
                )
            }),
        g = s.slice(0, s.length / 2),
        E = s.slice(s.length / 2, s.length),
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
                let { ref: s, ...u } = e;
                return (0, a.jsxs)('div', {
                    className: l()(y.container, n),
                    ref: s,
                    ...u,
                    children: [
                        (0, a.jsx)('div', {
                            className: l()(y.defaultContainer, p),
                            children: _({
                                value: o,
                                color: r,
                                onChange: f,
                                disabled: d
                            })
                        }),
                        (0, a.jsx)('div', {
                            className: l()(y.customContainer, p),
                            children: h({
                                value: o,
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
