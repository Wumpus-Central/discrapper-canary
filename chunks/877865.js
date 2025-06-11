n.d(t, { U: () => A }), n(388685);
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
    p = n(671147),
    h = n(388032),
    m = n(936631);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = i.lazy(() => Promise.all([n.e('21153'), n.e('24530')]).then(n.bind(n, 932329))),
    v = 5;
function I(e, t) {
    return e.length < 1 ? 0 : (t / (e.length - 1)) * 80 + 10;
}
function T(e) {
    let { colors: t, selectedIndex: n, onColorSelect: a } = e,
        [o, s] = i.useMemo(() => {
            let e = t.map((e, n) => I(t, n)),
                n = t.map((t, n) => ''.concat(t, ' ').concat(e[n], '%')).join(', ');
            return [e, { background: 'linear-gradient(to right, '.concat(n, ')') }];
        }, [t]);
    return (0, r.jsx)('div', {
        className: m.gradientBar,
        style: s,
        children: t.map((e, t) => {
            let i = o[t],
                s = t === n;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        f.P3F,
                        {
                            className: m.colorCircle,
                            style: {
                                left: ''.concat(i, '%'),
                                backgroundColor: e
                            },
                            onClick: () => a(t),
                            children: (0, r.jsx)('div', { className: m.colorCircleInner })
                        },
                        t
                    ),
                    s &&
                        (0, r.jsx)('div', {
                            className: m.colorCircleSelectedTriangle,
                            style: { left: ''.concat(i, '%') }
                        })
                ]
            });
        })
    });
}
function S(e) {
    if (!(0, c.FX)(e)) return e;
    let t = o()(e);
    return t.set('hsl.h', (t.get('hsl.h') + 15) % 360).hex();
}
function A(e) {
    let { value: t, onChange: n, className: a, colors: o, setColors: s } = e,
        g = (0, _.Z)(),
        [b, I] = i.useState(0),
        [A, N] = i.useState(t);
    i.useEffect(() => {
        if (o.length > 0 && b < o.length) {
            let e = o[b];
            (0, c.FX)(e) && (N(e), n(e));
        }
    }, [b, o, n]);
    let C = (e) => {
            if ((N(e), (0, c.FX)(e) && (n(e), o.length > 0))) {
                let t = [...o];
                (t[b] = e), s(t);
            }
        },
        R = i.useCallback((e) => {
            N(e.hex);
        }, []),
        P = (e) => {
            if ((n(e.hex), o.length > 0)) {
                let t = [...o];
                (t[b] = e.hex), s(t);
            }
        },
        w = async () => {
            if (null != g)
                try {
                    let { sRGBHex: e } = await g.open();
                    C(e);
                } catch (e) {}
        },
        D = () => {
            if (o.length === v) return;
            let e = o.length > 0 ? o[o.length - 1] : A,
                t = o.length > 0 ? S(e) : e,
                n = [...o, t];
            s(n), I(n.length - 1);
        },
        L = (e) => {
            if (o.length > 1) {
                let t = o.filter((t, n) => n !== e);
                s(t), b >= t.length ? I(t.length - 1) : b > e && I(b - 1);
            }
        },
        x = (e) => {
            I(e);
        },
        k = o.length > 1;
    return (0, r.jsxs)('div', {
        className: l()(m.container, a),
        children: [
            (0, r.jsxs)('div', {
                className: m.headerContainer,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: 'text-sm/medium',
                        children: h.intl.string(p.default['8ZcEfn'])
                    }),
                    (0, r.jsx)(f.ua7, {
                        text: h.intl.string(p.default['61KGaW']),
                        shouldShow: o.length === v,
                        children: (e) =>
                            (0, r.jsx)(
                                f.zxk,
                                y(E({}, e), {
                                    size: f.zxk.Sizes.ICON,
                                    look: f.zxk.Looks.BLANK,
                                    disabled: o.length === v,
                                    onClick: D,
                                    children: (0, r.jsx)(f.Text, {
                                        variant: 'text-sm/medium',
                                        className: m.addColorButtonText,
                                        children: h.intl.string(p.default['+tTysr'])
                                    })
                                })
                            )
                    })
                ]
            }),
            k &&
                (0, r.jsx)(T, {
                    colors: o,
                    selectedIndex: b,
                    onColorSelect: x
                }),
            (0, r.jsx)(i.Suspense, {
                fallback: null,
                children: (0, r.jsx)(O, {
                    onChange: R,
                    onChangeComplete: P,
                    color: A
                })
            }),
            (0, r.jsxs)('div', {
                className: m.hexInputContainer,
                children: [
                    (0, r.jsx)('input', {
                        className: m.hexInput,
                        value: A.toUpperCase(),
                        onChange: (e) => C(e.target.value),
                        maxLength: 7,
                        placeholder: '#4394D4',
                        type: 'text'
                    }),
                    (0, r.jsxs)('div', {
                        className: m.trailingIcons,
                        children: [
                            null != g &&
                                (0, r.jsx)(f.ua7, {
                                    text: h.intl.string(p.default['8QXO8v']),
                                    tooltipClassName: m.eyeDropperTooltip,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            f.zxk,
                                            y(
                                                E(
                                                    {
                                                        size: f.zxk.Sizes.ICON,
                                                        look: f.zxk.Looks.BLANK
                                                    },
                                                    e
                                                ),
                                                {
                                                    onClick: w,
                                                    className: m.iconButton,
                                                    children: (0, r.jsx)(u.i, {
                                                        size: 'xs',
                                                        colorClass: m.iconWithHover
                                                    })
                                                }
                                            )
                                        )
                                }),
                            k &&
                                (0, r.jsx)(f.ua7, {
                                    text: h.intl.string(p.default['rTik5+']),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            f.zxk,
                                            y(E({}, e), {
                                                size: f.zxk.Sizes.ICON,
                                                look: f.zxk.Looks.BLANK,
                                                onClick: () => L(b),
                                                className: m.iconButton,
                                                children: (0, r.jsx)(d.X, {
                                                    size: 'xs',
                                                    colorClass: m.iconWithHover
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
