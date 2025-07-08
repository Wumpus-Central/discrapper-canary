(n.d(t, { U: () => R }), n(388685), n(781311));
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
    h = n(866419),
    m = n(507962),
    g = n(671147),
    E = n(388032),
    b = n(936631);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            }));
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = i.lazy(() => Promise.all([n.e('21153'), n.e('24530')]).then(n.bind(n, 932329))),
    S = 5;
function A(e, t) {
    return e.length < 1 ? 0 : (t / (e.length - 1)) * 80 + 10;
}
function N(e) {
    let { colors: t, selectedIndex: n, onColorSelect: a } = e,
        [o, s] = i.useMemo(() => {
            let e = t.map((e, n) => A(t, n)),
                n = t.map((t, n) => ''.concat(t, ' ').concat(e[n], '%')).join(', ');
            return [e, { background: 'linear-gradient(to right, '.concat(n, ')') }];
        }, [t]);
    return (0, r.jsx)('div', {
        className: b.gradientBar,
        style: s,
        children: t.map((e, t) => {
            let i = o[t],
                s = t === n;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        f.P3F,
                        {
                            className: b.colorCircle,
                            style: {
                                left: ''.concat(i, '%'),
                                backgroundColor: e
                            },
                            onClick: () => a(t),
                            children: (0, r.jsx)('div', { className: b.colorCircleInner })
                        },
                        t
                    ),
                    s &&
                        (0, r.jsx)('div', {
                            className: b.colorCircleSelectedTriangle,
                            style: { left: ''.concat(i, '%') }
                        })
                ]
            });
        })
    });
}
function C(e) {
    if (!(0, c.FX)(e)) return e;
    let t = o()(e);
    return t.set('hsl.h', (t.get('hsl.h') + 15) % 360).hex();
}
function R(e) {
    let { value: t, onChange: n, className: a, colors: o, setColors: s } = e,
        y = (0, _.Z)(),
        [v, A] = i.useState(0),
        [R, P] = i.useState(t);
    i.useEffect(() => {
        if (o.length > 0 && v < o.length) {
            let e = o[v];
            (0, c.FX)(e) && (P(e), n(e));
        }
        v >= o.length && A(0);
    }, [v, o, n]);
    let w = (e) => {
            let t = e.trim();
            return t.startsWith('#') ? t : t.length > 0 ? '#'.concat(t) : t;
        },
        D = (e) => {
            let t = w(e);
            if ((P(t), (0, c.FX)(t) && ((0, m.zW)(), n(t), o.length > 0))) {
                let e = [...o];
                ((e[v] = t), s(e));
            }
        },
        L = i.useCallback((e) => {
            P(e.hex);
        }, []),
        x = (e) => {
            if (((0, m.P0)(), n(e.hex), o.length > 0)) {
                let t = [...o];
                ((t[v] = e.hex), s(t));
            }
        },
        M = async () => {
            if (null != y)
                try {
                    let { sRGBHex: e } = await y.open();
                    ((0, m.J4)(), D(e));
                } catch (e) {}
        },
        k = () => {
            if (o.length === S) return;
            (0 === o.length && (0, h.ft)(), (0, m.gG)());
            let e = o.length > 0 ? o[o.length - 1] : R,
                t = o.length > 0 ? C(e) : e,
                n = [...o, t];
            (s(n), A(n.length - 1));
        },
        j = (e) => {
            if (o.length > 1) {
                (0, m.JL)();
                let t = o.filter((t, n) => n !== e);
                (s(t), v >= t.length ? A(t.length - 1) : v > e && A(v - 1));
            }
        },
        U = (e) => {
            (A(e), (0, m.w8)());
        },
        G = o.length > 1;
    return (0, r.jsxs)('div', {
        className: l()(b.container, a),
        children: [
            (0, r.jsxs)('div', {
                className: b.headerContainer,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: 'text-sm/medium',
                        children: E.intl.string(g.default['8ZcEfn'])
                    }),
                    (0, r.jsx)(f.ua7, {
                        text: E.intl.string(g.default['61KGaW']),
                        shouldShow: o.length === S,
                        children: (e) =>
                            (0, r.jsx)(
                                f.zxk,
                                I(O({}, e), {
                                    size: f.zxk.Sizes.ICON,
                                    look: f.zxk.Looks.BLANK,
                                    disabled: o.length === S,
                                    onClick: k,
                                    children: (0, r.jsx)(f.Text, {
                                        variant: 'text-sm/medium',
                                        className: b.addColorButtonText,
                                        children: E.intl.string(g.default['+tTysr'])
                                    })
                                })
                            )
                    })
                ]
            }),
            G &&
                (0, r.jsx)(N, {
                    colors: o,
                    selectedIndex: v,
                    onColorSelect: U
                }),
            (0, r.jsx)(i.Suspense, {
                fallback: null,
                children: (0, r.jsx)(T, {
                    onChange: L,
                    onChangeComplete: x,
                    color: R
                })
            }),
            (0, r.jsxs)('div', {
                className: b.hexInputContainer,
                children: [
                    (0, r.jsx)('input', {
                        className: b.hexInput,
                        value: R.toUpperCase(),
                        onChange: (e) => D(e.target.value),
                        maxLength: 7,
                        placeholder: p.Dp,
                        type: 'text'
                    }),
                    (0, r.jsxs)('div', {
                        className: b.trailingIcons,
                        children: [
                            null != y &&
                                (0, r.jsx)(f.ua7, {
                                    text: E.intl.string(g.default['8QXO8v']),
                                    tooltipClassName: b.eyeDropperTooltip,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            f.zxk,
                                            I(
                                                O(
                                                    {
                                                        size: f.zxk.Sizes.ICON,
                                                        look: f.zxk.Looks.BLANK
                                                    },
                                                    e
                                                ),
                                                {
                                                    onClick: M,
                                                    className: b.iconButton,
                                                    children: (0, r.jsx)(u.i, {
                                                        size: 'xs',
                                                        colorClass: b.iconWithHover,
                                                        className: b.icon
                                                    })
                                                }
                                            )
                                        )
                                }),
                            G &&
                                (0, r.jsx)(f.ua7, {
                                    text: E.intl.string(g.default['rTik5+']),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            f.zxk,
                                            I(O({}, e), {
                                                size: f.zxk.Sizes.ICON,
                                                look: f.zxk.Looks.BLANK,
                                                onClick: () => j(v),
                                                className: b.iconButton,
                                                children: (0, r.jsx)(d.X, {
                                                    size: 'xs',
                                                    colorClass: b.iconWithHover,
                                                    className: b.icon
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
