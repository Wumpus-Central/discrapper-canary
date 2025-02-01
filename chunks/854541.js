n.d(t, {
    AG: () => N,
    Z$: () => O,
    jH: () => C,
    zH: () => D
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(924826),
    u = n(866442),
    c = n(1561),
    d = n(507274),
    f = n(84735),
    _ = n(463208),
    p = n(481060),
    h = n(408886),
    m = n(44315),
    g = n(665149),
    E = n(534828),
    v = n(981631),
    y = n(388032),
    I = n(379100);
let T = 7,
    b = () => Promise.resolve();
function S(e) {
    return null == e ? null : 'string' == typeof e ? ((0, u.FX)(e) ? (0, u._i)(e) : null) : e;
}
function A(e) {
    let { color: t, isDefault: n = !1, isCustom: r = !1, isSelected: a = !1, disabled: l = !1, style: c = {}, onClick: d, 'aria-label': _ } = e,
        h = (0, o.JA)('color-'.concat(t)),
        g = null != t ? (0, u.Rf)(t) : c.backgroundColor,
        E = !1;
    function y() {
        let e = 16,
            t = 16;
        if (((r || n) && ((e = 32), (t = 24)), a))
            return (0, i.jsx)(p.dz2, {
                size: 'custom',
                width: e,
                height: t,
                color: (0, m.Lq)(E ? v.Ilk.WHITE_500 : v.Ilk.BLACK_500)
            });
    }
    return (
        r && !a ? (E = !0) : (r || a) && (E = (0, u.Bd)(t) > 0.1),
        (0, i.jsx)(f.t, {
            offset: -2,
            children: (0, i.jsxs)('button', {
                type: 'button',
                className: s()(I.colorPickerSwatch, {
                    [I.disabled]: l,
                    [I.default]: n,
                    [I.custom]: r,
                    [I.noColor]: null == t
                }),
                disabled: l,
                onClick: () => (null == d ? void 0 : d(t)),
                style: {
                    ...c,
                    backgroundColor: g
                },
                'aria-label': null != _ ? _ : g,
                ...h,
                children: [
                    r
                        ? (0, i.jsx)(p.vdY, {
                              size: 'custom',
                              className: I.colorPickerDropper,
                              colorClass: I.colorPickerDropperFg,
                              width: 14,
                              height: 14,
                              color: (0, m.Lq)(E ? v.Ilk.WHITE_500 : v.Ilk.BLACK_500)
                          })
                        : null,
                    y()
                ]
            })
        })
    );
}
class N extends r.PureComponent {
    render() {
        let { color: e, onChange: t, value: n, disabled: r } = this.props;
        return (0, i.jsx)(A, {
            isDefault: !0,
            color: e,
            isSelected: e === n || 0 === n,
            onClick: t,
            disabled: r
        });
    }
}
class C extends r.PureComponent {
    render() {
        let { customColor: e, value: t, disabled: n, 'aria-label': r } = this.props;
        return (0, i.jsx)(A, {
            isCustom: !0,
            color: e,
            isSelected: t === e,
            disabled: n,
            'aria-label': r
        });
    }
}
function R(e) {
    let { value: t, eagerUpdate: n = !1, onChange: a, onClose: o, suggestedColors: l, middle: f, footer: m, showEyeDropper: v, wrapperComponentType: b, className: A } = e,
        N = (0, h.Z)(),
        C = S(t),
        R = null != C ? C : 0,
        O = (0, u.Rf)(R),
        D = (0, u.O)(R),
        [x, L] = r.useState({
            current: R,
            pending: {
                hex: O,
                hsl: D
            },
            input: O
        });
    r.useEffect(() => {
        if (null == C || C === x.current) return;
        let e = (0, u.Rf)(C),
            t = (0, u.O)(C);
        L({
            current: C,
            pending: {
                hex: e,
                hsl: t
            },
            input: e
        });
    }, [C, x]),
        r.useEffect(() => o, [o]);
    let P = (e) => {
            let t = '#' === e[0] ? e : '#'.concat(e);
            if (!(0, u.FX)(t)) {
                L((e) => ({
                    ...e,
                    input: t
                }));
                return;
            }
            let n = (0, u._i)(t),
                i = (0, u.O)(n);
            L({
                current: n,
                pending: {
                    hex: t,
                    hsl: i
                },
                input: t
            }),
                a(n);
        },
        w = async () => {
            if (null != N)
                try {
                    let { sRGBHex: e } = await N.open();
                    P(e);
                } catch {}
        },
        M = r.useCallback(
            (e) => {
                L((t) => ({
                    ...t,
                    pending: e,
                    input: e.hex
                })),
                    n && a((0, u._i)(e.hex));
            },
            [n, a]
        ),
        k = (e) => {
            a((0, u._i)(e));
        },
        U = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(E.Z, {
                    onChange: M,
                    onChangeComplete: (e) => {
                        let { hex: t } = e;
                        return k(t);
                    },
                    color: x.pending.hsl
                }),
                f,
                (0, i.jsxs)('div', {
                    className: I.customColorPickerInputContainer,
                    children: [
                        v &&
                            null != N &&
                            (0, i.jsx)(g.JO, {
                                onClick: w,
                                tooltip: y.intl.string(y.t['0dU9Nz']),
                                tooltipPosition: 'top',
                                className: I.customColorPickerEyeDropper,
                                icon: p.ilE
                            }),
                        (0, i.jsx)(_.o, {
                            className: I.customColorPickerInput,
                            value: x.input,
                            onChange: P,
                            maxLength: T
                        })
                    ]
                }),
                null != l &&
                    l.length > 0 &&
                    (0, i.jsx)('div', {
                        className: I.suggestedColors,
                        children: l.map((e, t) =>
                            (0, i.jsx)(
                                c.P,
                                {
                                    'aria-label': '',
                                    style: { backgroundColor: e },
                                    className: I.suggestedColor,
                                    onClick: () => P(e)
                                },
                                ''.concat(e, '-').concat(t)
                            )
                        )
                    }),
                m
            ]
        }),
        G = null != b ? b : d.V;
    return (0, i.jsx)(G, {
        'aria-label': y.intl.string(y.t.WTqQ5e),
        className: s()(I.customColorPicker, A),
        children: U
    });
}
let O = r.memo(R);
function D(e) {
    let { className: t, defaultColor: n, customColor: r, colors: a, value: u, disabled: c, onChange: d, renderDefaultButton: f, renderCustomButton: _, colorContainerClassName: p } = e,
        h = (e) =>
            (0, i.jsx)('div', {
                className: I.colorPickerRow,
                children: e.map((e) =>
                    (0, i.jsx)(
                        A,
                        {
                            color: e,
                            isSelected: e === u,
                            onClick: d,
                            disabled: c
                        },
                        e
                    )
                )
            }),
        m = a.slice(0, a.length / 2),
        g = a.slice(a.length / 2, a.length),
        E = (0, l.ZP)({
            id: 'color-picker',
            isEnabled: !0,
            scrollToStart: b,
            scrollToEnd: b
        });
    return (0, i.jsx)(o.bG, {
        navigator: E,
        children: (0, i.jsx)(o.SJ, {
            children: (e) => {
                let { ref: a, ...o } = e;
                return (0, i.jsxs)('div', {
                    className: s()(I.container, t),
                    ref: a,
                    ...o,
                    children: [
                        (0, i.jsx)('div', {
                            className: s()(I.defaultContainer, p),
                            children: f({
                                value: u,
                                color: n,
                                onChange: d,
                                disabled: c
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: s()(I.customContainer, p),
                            children: _({
                                value: u,
                                customColor: r,
                                disabled: c
                            })
                        }),
                        (0, i.jsxs)('div', {
                            children: [h(m), h(g)]
                        })
                    ]
                });
            }
        })
    });
}
