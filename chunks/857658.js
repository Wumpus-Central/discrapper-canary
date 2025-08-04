(n.d(t, { U: () => L }), n(388685), n(781311));
var r = n(255367),
    i = n(73800),
    a = n(688619),
    o = n.n(a),
    s = n(120356),
    l = n.n(s),
    c = n(608787),
    u = n(866442),
    d = n(19602),
    _ = n(490236),
    f = n(680018),
    p = n(861066),
    h = n(481060),
    m = n(408886),
    g = n(233398),
    E = n(866419),
    b = n(507962),
    y = n(671147),
    O = n(388032),
    v = n(893986);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            }));
    }
    return e;
}
function S(e, t) {
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
function A(e, t) {
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
function N() {
    return (0, r.jsx)('div', {
        className: v.loader,
        children: (0, r.jsx)(h.$jN, {})
    });
}
let C = (0, c.Un)({
        createPromise: () => Promise.all([n.e('21153'), n.e('24530')]).then(n.bind(n, 932329)),
        webpackId: 932329,
        name: 'CustomThemeColorPickerControl',
        renderLoader: N
    }),
    R = 5;
function P(e, t) {
    return e.length < 1 ? 0 : (t / (e.length - 1)) * 80 + 10;
}
function w(e) {
    let { colors: t, selectedIndex: n, onColorSelect: a } = e,
        [o, s] = i.useMemo(() => {
            let e = t.map((e, n) => P(t, n)),
                n = t.map((t, n) => ''.concat(t, ' ').concat(e[n], '%')).join(', ');
            return [e, { background: 'linear-gradient(to right, '.concat(n, ')') }];
        }, [t]);
    return (0, r.jsx)('div', {
        className: v.gradientBar,
        style: s,
        children: t.map((e, t) => {
            let s = o[t],
                l = t === n;
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(h.P3F, {
                            className: v.colorCircle,
                            style: {
                                left: ''.concat(s, '%'),
                                backgroundColor: e
                            },
                            onClick: () => a(t),
                            children: (0, r.jsx)('div', { className: v.colorCircleInner })
                        }),
                        l &&
                            (0, r.jsx)('div', {
                                className: v.colorCircleSelectedTriangle,
                                style: { left: ''.concat(s, '%') }
                            })
                    ]
                },
                t
            );
        })
    });
}
function D(e) {
    if (!(0, u.FX)(e)) return e;
    let t = o()(e);
    return t.set('hsl.h', (t.get('hsl.h') + 15) % 360).hex();
}
function L(e) {
    let { value: t, onChange: n, className: a, colors: o, setColors: s } = e,
        c = (0, m.Z)(),
        [I, S] = i.useState(0),
        [N, P] = i.useState(t);
    i.useEffect(() => {
        if (o.length > 0 && I < o.length) {
            let e = o[I];
            (0, u.FX)(e) && (P(e), n(e));
        }
        I >= o.length && S(0);
    }, [I, o, n]);
    let L = (e) => {
            let t = e.trim();
            return t.startsWith('#') ? t : t.length > 0 ? '#'.concat(t) : t;
        },
        x = (e) => {
            let t = L(e);
            if ((P(t), (0, u.FX)(t) && ((0, b.zW)(), n(t), o.length > 0))) {
                let e = [...o];
                ((e[I] = t), s(e));
            }
        },
        M = i.useCallback((e) => {
            P(e.hex);
        }, []),
        k = (e) => {
            if (((0, b.P0)(), n(e.hex), o.length > 0)) {
                let t = [...o];
                ((t[I] = e.hex), s(t));
            }
        },
        j = async () => {
            if (null != c)
                try {
                    let { sRGBHex: e } = await c.open();
                    ((0, b.J4)(), x(e));
                } catch (e) {}
        },
        U = () => {
            if (o.length === R) return;
            (0 === o.length && (0, E.ft)(), (0, b.gG)());
            let e = o.length > 0 ? o[o.length - 1] : N,
                t = o.length > 0 ? D(e) : e,
                n = [...o, t];
            (s(n), S(n.length - 1));
        },
        G = (e) => {
            if (o.length > 1) {
                (0, b.JL)();
                let t = o.filter((t, n) => n !== e);
                (s(t), I >= t.length ? S(t.length - 1) : I > e && S(I - 1));
            }
        },
        B = (e) => {
            (S(e), (0, b.w8)());
        },
        V = o.length > 1;
    return (0, r.jsxs)('div', {
        className: l()(v.container, a),
        children: [
            V &&
                (0, r.jsx)(w, {
                    colors: o,
                    selectedIndex: I,
                    onColorSelect: B
                }),
            (0, r.jsx)(C, {
                onChange: M,
                onChangeComplete: k,
                color: N
            }),
            (0, r.jsxs)('div', {
                className: v.hexInputContainer,
                children: [
                    (0, r.jsx)('input', {
                        className: v.hexInput,
                        value: N.toUpperCase(),
                        onChange: (e) => x(e.target.value),
                        maxLength: 7,
                        placeholder: g.Dp,
                        type: 'text'
                    }),
                    (0, r.jsxs)('div', {
                        className: v.trailingIcons,
                        children: [
                            null != c &&
                                (0, r.jsx)(h.ua7, {
                                    text: O.intl.string(y.default['8QXO8v']),
                                    tooltipClassName: v.eyeDropperTooltip,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            p.h,
                                            A(
                                                T(
                                                    {
                                                        variant: 'icon-only',
                                                        size: 'sm'
                                                    },
                                                    e
                                                ),
                                                {
                                                    onClick: j,
                                                    icon: d.i,
                                                    'aria-label': O.intl.string(y.default['8QXO8v'])
                                                }
                                            )
                                        )
                                }),
                            V &&
                                (0, r.jsx)(h.ua7, {
                                    text: O.intl.string(y.default['rTik5+']),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            p.h,
                                            A(T({}, e), {
                                                variant: 'icon-only',
                                                size: 'sm',
                                                onClick: () => G(I),
                                                icon: _.X,
                                                'aria-label': O.intl.string(y.default['rTik5+'])
                                            })
                                        )
                                })
                        ]
                    })
                ]
            }),
            o.length < R &&
                (0, r.jsx)(f.z, {
                    variant: 'secondary',
                    size: 'md',
                    onClick: U,
                    icon: h.BRu,
                    text: O.intl.string(y.default.JUQcdX),
                    fullWidth: !0
                })
        ]
    });
}
