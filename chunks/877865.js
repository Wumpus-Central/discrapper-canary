(n.d(t, { U: () => P }), n(388685), n(781311));
var r = n(255367),
    i = n(73800),
    a = n(688619),
    o = n.n(a),
    s = n(120356),
    l = n.n(s),
    c = n(866442),
    u = n(19602),
    d = n(490236),
    f = n(755721),
    _ = n(481060),
    p = n(408886),
    h = n(233398),
    m = n(866419),
    g = n(507962),
    E = n(671147),
    b = n(388032),
    y = n(936631);
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
function v(e) {
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
                O(e, t, n[t]);
            }));
    }
    return e;
}
function I(e, t) {
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
let S = i.lazy(() => Promise.all([n.e('21153'), n.e('24530')]).then(n.bind(n, 932329))),
    A = 5;
function N(e, t) {
    return e.length < 1 ? 0 : (t / (e.length - 1)) * 80 + 10;
}
function C(e) {
    let { colors: t, selectedIndex: n, onColorSelect: a } = e,
        [o, s] = i.useMemo(() => {
            let e = t.map((e, n) => N(t, n)),
                n = t.map((t, n) => ''.concat(t, ' ').concat(e[n], '%')).join(', ');
            return [e, { background: 'linear-gradient(to right, '.concat(n, ')') }];
        }, [t]);
    return (0, r.jsx)('div', {
        className: y.gradientBar,
        style: s,
        children: t.map((e, t) => {
            let i = o[t],
                s = t === n;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        _.P3F,
                        {
                            className: y.colorCircle,
                            style: {
                                left: ''.concat(i, '%'),
                                backgroundColor: e
                            },
                            onClick: () => a(t),
                            children: (0, r.jsx)('div', { className: y.colorCircleInner })
                        },
                        t
                    ),
                    s &&
                        (0, r.jsx)('div', {
                            className: y.colorCircleSelectedTriangle,
                            style: { left: ''.concat(i, '%') }
                        })
                ]
            });
        })
    });
}
function R(e) {
    if (!(0, c.FX)(e)) return e;
    let t = o()(e);
    return t.set('hsl.h', (t.get('hsl.h') + 15) % 360).hex();
}
function P(e) {
    let { value: t, onChange: n, className: a, colors: o, setColors: s } = e,
        O = (0, p.Z)(),
        [I, N] = i.useState(0),
        [P, w] = i.useState(t);
    i.useEffect(() => {
        if (o.length > 0 && I < o.length) {
            let e = o[I];
            (0, c.FX)(e) && (w(e), n(e));
        }
        I >= o.length && N(0);
    }, [I, o, n]);
    let D = (e) => {
            let t = e.trim();
            return t.startsWith('#') ? t : t.length > 0 ? '#'.concat(t) : t;
        },
        L = (e) => {
            let t = D(e);
            if ((w(t), (0, c.FX)(t) && ((0, g.zW)(), n(t), o.length > 0))) {
                let e = [...o];
                ((e[I] = t), s(e));
            }
        },
        x = i.useCallback((e) => {
            w(e.hex);
        }, []),
        M = (e) => {
            if (((0, g.P0)(), n(e.hex), o.length > 0)) {
                let t = [...o];
                ((t[I] = e.hex), s(t));
            }
        },
        k = async () => {
            if (null != O)
                try {
                    let { sRGBHex: e } = await O.open();
                    ((0, g.J4)(), L(e));
                } catch (e) {}
        },
        j = () => {
            if (o.length === A) return;
            (0 === o.length && (0, m.ft)(), (0, g.gG)());
            let e = o.length > 0 ? o[o.length - 1] : P,
                t = o.length > 0 ? R(e) : e,
                n = [...o, t];
            (s(n), N(n.length - 1));
        },
        U = (e) => {
            if (o.length > 1) {
                (0, g.JL)();
                let t = o.filter((t, n) => n !== e);
                (s(t), I >= t.length ? N(t.length - 1) : I > e && N(I - 1));
            }
        },
        G = (e) => {
            (N(e), (0, g.w8)());
        },
        B = o.length > 1;
    return (0, r.jsxs)('div', {
        className: l()(y.container, a),
        children: [
            (0, r.jsxs)('div', {
                className: y.headerContainer,
                children: [
                    (0, r.jsx)(_.Text, {
                        variant: 'text-sm/medium',
                        children: b.intl.string(E.default['8ZcEfn'])
                    }),
                    (0, r.jsx)(_.ua7, {
                        text: b.intl.string(E.default['61KGaW']),
                        shouldShow: o.length === A,
                        children: (e) =>
                            (0, r.jsx)(
                                f.zx,
                                T(v({}, e), {
                                    size: f.zx.Sizes.ICON,
                                    look: f.zx.Looks.BLANK,
                                    disabled: o.length === A,
                                    onClick: j,
                                    children: (0, r.jsx)(_.Text, {
                                        variant: 'text-sm/medium',
                                        className: y.addColorButtonText,
                                        children: b.intl.string(E.default['+tTysr'])
                                    })
                                })
                            )
                    })
                ]
            }),
            B &&
                (0, r.jsx)(C, {
                    colors: o,
                    selectedIndex: I,
                    onColorSelect: G
                }),
            (0, r.jsx)(i.Suspense, {
                fallback: null,
                children: (0, r.jsx)(S, {
                    onChange: x,
                    onChangeComplete: M,
                    color: P
                })
            }),
            (0, r.jsxs)('div', {
                className: y.hexInputContainer,
                children: [
                    (0, r.jsx)('input', {
                        className: y.hexInput,
                        value: P.toUpperCase(),
                        onChange: (e) => L(e.target.value),
                        maxLength: 7,
                        placeholder: h.Dp,
                        type: 'text'
                    }),
                    (0, r.jsxs)('div', {
                        className: y.trailingIcons,
                        children: [
                            null != O &&
                                (0, r.jsx)(_.ua7, {
                                    text: b.intl.string(E.default['8QXO8v']),
                                    tooltipClassName: y.eyeDropperTooltip,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            f.zx,
                                            T(
                                                v(
                                                    {
                                                        size: f.zx.Sizes.ICON,
                                                        look: f.zx.Looks.BLANK
                                                    },
                                                    e
                                                ),
                                                {
                                                    onClick: k,
                                                    className: y.iconButton,
                                                    children: (0, r.jsx)(u.i, {
                                                        size: 'xs',
                                                        colorClass: y.iconWithHover,
                                                        className: y.icon
                                                    })
                                                }
                                            )
                                        )
                                }),
                            B &&
                                (0, r.jsx)(_.ua7, {
                                    text: b.intl.string(E.default['rTik5+']),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            f.zx,
                                            T(v({}, e), {
                                                size: f.zx.Sizes.ICON,
                                                look: f.zx.Looks.BLANK,
                                                onClick: () => U(I),
                                                className: y.iconButton,
                                                children: (0, r.jsx)(d.X, {
                                                    size: 'xs',
                                                    colorClass: y.iconWithHover,
                                                    className: y.icon
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
