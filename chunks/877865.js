n.d(t, { U: () => C }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(688619),
    o = n.n(a),
    s = n(120356),
    l = n.n(s),
    c = n(866442),
    u = n(19602),
    d = n(490236),
    f = n(481060),
    _ = n(408886),
    p = n(233398),
    h = n(507962),
    m = n(671147),
    g = n(388032),
    E = n(936631);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = i.lazy(() => Promise.all([n.e('21153'), n.e('24530')]).then(n.bind(n, 932329))),
    T = 5;
function S(e, t) {
    return e.length < 1 ? 0 : (t / (e.length - 1)) * 80 + 10;
}
function A(e) {
    let { colors: t, selectedIndex: n, onColorSelect: a } = e,
        [o, s] = i.useMemo(() => {
            let e = t.map((e, n) => S(t, n)),
                n = t.map((t, n) => ''.concat(t, ' ').concat(e[n], '%')).join(', ');
            return [e, { background: 'linear-gradient(to right, '.concat(n, ')') }];
        }, [t]);
    return (0, r.jsx)('div', {
        className: E.gradientBar,
        style: s,
        children: t.map((e, t) => {
            let i = o[t],
                s = t === n;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        f.P3F,
                        {
                            className: E.colorCircle,
                            style: {
                                left: ''.concat(i, '%'),
                                backgroundColor: e
                            },
                            onClick: () => a(t),
                            children: (0, r.jsx)('div', { className: E.colorCircleInner })
                        },
                        t
                    ),
                    s &&
                        (0, r.jsx)('div', {
                            className: E.colorCircleSelectedTriangle,
                            style: { left: ''.concat(i, '%') }
                        })
                ]
            });
        })
    });
}
function N(e) {
    if (!(0, c.FX)(e)) return e;
    let t = o()(e);
    return t.set('hsl.h', (t.get('hsl.h') + 15) % 360).hex();
}
function C(e) {
    let { value: t, onChange: n, className: a, colors: o, setColors: s } = e,
        b = (0, _.Z)(),
        [O, S] = i.useState(0),
        [C, R] = i.useState(t);
    i.useEffect(() => {
        if (o.length > 0 && O < o.length) {
            let e = o[O];
            (0, c.FX)(e) && (R(e), n(e));
        }
        O >= o.length && S(0);
    }, [O, o, n]);
    let P = (e) => {
            if ((R(e), (0, c.FX)(e) && ((0, h.zW)(), n(e), o.length > 0))) {
                let t = [...o];
                (t[O] = e), s(t);
            }
        },
        w = i.useCallback((e) => {
            R(e.hex);
        }, []),
        D = (e) => {
            if (((0, h.P0)(), n(e.hex), o.length > 0)) {
                let t = [...o];
                (t[O] = e.hex), s(t);
            }
        },
        L = async () => {
            if (null != b)
                try {
                    let { sRGBHex: e } = await b.open();
                    (0, h.J4)(), P(e);
                } catch (e) {}
        },
        x = () => {
            if (o.length === T) return;
            (0, h.gG)();
            let e = o.length > 0 ? o[o.length - 1] : C,
                t = o.length > 0 ? N(e) : e,
                n = [...o, t];
            s(n), S(n.length - 1);
        },
        k = (e) => {
            if (o.length > 1) {
                (0, h.JL)();
                let t = o.filter((t, n) => n !== e);
                s(t), O >= t.length ? S(t.length - 1) : O > e && S(O - 1);
            }
        },
        M = (e) => {
            S(e), (0, h.w8)();
        },
        j = o.length > 1;
    return (0, r.jsxs)('div', {
        className: l()(E.container, a),
        children: [
            (0, r.jsxs)('div', {
                className: E.headerContainer,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: 'text-sm/medium',
                        children: g.intl.string(m.default['8ZcEfn'])
                    }),
                    (0, r.jsx)(f.ua7, {
                        text: g.intl.string(m.default['61KGaW']),
                        shouldShow: o.length === T,
                        children: (e) =>
                            (0, r.jsx)(
                                f.zxk,
                                v(y({}, e), {
                                    size: f.zxk.Sizes.ICON,
                                    look: f.zxk.Looks.BLANK,
                                    disabled: o.length === T,
                                    onClick: x,
                                    children: (0, r.jsx)(f.Text, {
                                        variant: 'text-sm/medium',
                                        className: E.addColorButtonText,
                                        children: g.intl.string(m.default['+tTysr'])
                                    })
                                })
                            )
                    })
                ]
            }),
            j &&
                (0, r.jsx)(A, {
                    colors: o,
                    selectedIndex: O,
                    onColorSelect: M
                }),
            (0, r.jsx)(i.Suspense, {
                fallback: null,
                children: (0, r.jsx)(I, {
                    onChange: w,
                    onChangeComplete: D,
                    color: C
                })
            }),
            (0, r.jsxs)('div', {
                className: E.hexInputContainer,
                children: [
                    (0, r.jsx)('input', {
                        className: E.hexInput,
                        value: C.toUpperCase(),
                        onChange: (e) => P(e.target.value),
                        maxLength: 7,
                        placeholder: p.Dp,
                        type: 'text'
                    }),
                    (0, r.jsxs)('div', {
                        className: E.trailingIcons,
                        children: [
                            null != b &&
                                (0, r.jsx)(f.ua7, {
                                    text: g.intl.string(m.default['8QXO8v']),
                                    tooltipClassName: E.eyeDropperTooltip,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            f.zxk,
                                            v(
                                                y(
                                                    {
                                                        size: f.zxk.Sizes.ICON,
                                                        look: f.zxk.Looks.BLANK
                                                    },
                                                    e
                                                ),
                                                {
                                                    onClick: L,
                                                    className: E.iconButton,
                                                    children: (0, r.jsx)(u.i, {
                                                        size: 'xs',
                                                        colorClass: E.iconWithHover
                                                    })
                                                }
                                            )
                                        )
                                }),
                            j &&
                                (0, r.jsx)(f.ua7, {
                                    text: g.intl.string(m.default['rTik5+']),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            f.zxk,
                                            v(y({}, e), {
                                                size: f.zxk.Sizes.ICON,
                                                look: f.zxk.Looks.BLANK,
                                                onClick: () => k(O),
                                                className: E.iconButton,
                                                children: (0, r.jsx)(d.X, {
                                                    size: 'xs',
                                                    colorClass: E.iconWithHover
                                                })
                                            })
                                        )
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
