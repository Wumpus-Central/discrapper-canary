n.d(t, { U: () => N }), n(388685);
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
    p = n(507962),
    h = n(671147),
    m = n(388032),
    g = n(936631);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = i.lazy(() => Promise.all([n.e('21153'), n.e('24530')]).then(n.bind(n, 932329))),
    I = 5;
function T(e, t) {
    return e.length < 1 ? 0 : (t / (e.length - 1)) * 80 + 10;
}
function S(e) {
    let { colors: t, selectedIndex: n, onColorSelect: a } = e,
        [o, s] = i.useMemo(() => {
            let e = t.map((e, n) => T(t, n)),
                n = t.map((t, n) => ''.concat(t, ' ').concat(e[n], '%')).join(', ');
            return [e, { background: 'linear-gradient(to right, '.concat(n, ')') }];
        }, [t]);
    return (0, r.jsx)('div', {
        className: g.gradientBar,
        style: s,
        children: t.map((e, t) => {
            let i = o[t],
                s = t === n;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        f.P3F,
                        {
                            className: g.colorCircle,
                            style: {
                                left: ''.concat(i, '%'),
                                backgroundColor: e
                            },
                            onClick: () => a(t),
                            children: (0, r.jsx)('div', { className: g.colorCircleInner })
                        },
                        t
                    ),
                    s &&
                        (0, r.jsx)('div', {
                            className: g.colorCircleSelectedTriangle,
                            style: { left: ''.concat(i, '%') }
                        })
                ]
            });
        })
    });
}
function A(e) {
    if (!(0, c.FX)(e)) return e;
    let t = o()(e);
    return t.set('hsl.h', (t.get('hsl.h') + 15) % 360).hex();
}
function N(e) {
    let { value: t, onChange: n, className: a, colors: o, setColors: s } = e,
        E = (0, _.Z)(),
        [y, T] = i.useState(0),
        [N, C] = i.useState(t);
    i.useEffect(() => {
        if (o.length > 0 && y < o.length) {
            let e = o[y];
            (0, c.FX)(e) && (C(e), n(e));
        }
        y >= o.length && T(0);
    }, [y, o, n]);
    let R = (e) => {
            if ((C(e), (0, c.FX)(e) && ((0, p.zW)(), n(e), o.length > 0))) {
                let t = [...o];
                (t[y] = e), s(t);
            }
        },
        P = i.useCallback((e) => {
            C(e.hex);
        }, []),
        w = (e) => {
            if (((0, p.P0)(), n(e.hex), o.length > 0)) {
                let t = [...o];
                (t[y] = e.hex), s(t);
            }
        },
        D = async () => {
            if (null != E)
                try {
                    let { sRGBHex: e } = await E.open();
                    (0, p.J4)(), R(e);
                } catch (e) {}
        },
        L = () => {
            if (o.length === I) return;
            (0, p.gG)();
            let e = o.length > 0 ? o[o.length - 1] : N,
                t = o.length > 0 ? A(e) : e,
                n = [...o, t];
            s(n), T(n.length - 1);
        },
        x = (e) => {
            if (o.length > 1) {
                (0, p.JL)();
                let t = o.filter((t, n) => n !== e);
                s(t), y >= t.length ? T(t.length - 1) : y > e && T(y - 1);
            }
        },
        k = (e) => {
            T(e), (0, p.w8)();
        },
        M = o.length > 1;
    return (0, r.jsxs)('div', {
        className: l()(g.container, a),
        children: [
            (0, r.jsxs)('div', {
                className: g.headerContainer,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: 'text-sm/medium',
                        children: m.intl.string(h.default['8ZcEfn'])
                    }),
                    (0, r.jsx)(f.ua7, {
                        text: m.intl.string(h.default['61KGaW']),
                        shouldShow: o.length === I,
                        children: (e) =>
                            (0, r.jsx)(
                                f.zxk,
                                O(b({}, e), {
                                    size: f.zxk.Sizes.ICON,
                                    look: f.zxk.Looks.BLANK,
                                    disabled: o.length === I,
                                    onClick: L,
                                    children: (0, r.jsx)(f.Text, {
                                        variant: 'text-sm/medium',
                                        className: g.addColorButtonText,
                                        children: m.intl.string(h.default['+tTysr'])
                                    })
                                })
                            )
                    })
                ]
            }),
            M &&
                (0, r.jsx)(S, {
                    colors: o,
                    selectedIndex: y,
                    onColorSelect: k
                }),
            (0, r.jsx)(i.Suspense, {
                fallback: null,
                children: (0, r.jsx)(v, {
                    onChange: P,
                    onChangeComplete: w,
                    color: N
                })
            }),
            (0, r.jsxs)('div', {
                className: g.hexInputContainer,
                children: [
                    (0, r.jsx)('input', {
                        className: g.hexInput,
                        value: N.toUpperCase(),
                        onChange: (e) => R(e.target.value),
                        maxLength: 7,
                        placeholder: '#4394D4',
                        type: 'text'
                    }),
                    (0, r.jsxs)('div', {
                        className: g.trailingIcons,
                        children: [
                            null != E &&
                                (0, r.jsx)(f.ua7, {
                                    text: m.intl.string(h.default['8QXO8v']),
                                    tooltipClassName: g.eyeDropperTooltip,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            f.zxk,
                                            O(
                                                b(
                                                    {
                                                        size: f.zxk.Sizes.ICON,
                                                        look: f.zxk.Looks.BLANK
                                                    },
                                                    e
                                                ),
                                                {
                                                    onClick: D,
                                                    className: g.iconButton,
                                                    children: (0, r.jsx)(u.i, {
                                                        size: 'xs',
                                                        colorClass: g.iconWithHover
                                                    })
                                                }
                                            )
                                        )
                                }),
                            M &&
                                (0, r.jsx)(f.ua7, {
                                    text: m.intl.string(h.default['rTik5+']),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            f.zxk,
                                            O(b({}, e), {
                                                size: f.zxk.Sizes.ICON,
                                                look: f.zxk.Looks.BLANK,
                                                onClick: () => x(y),
                                                className: g.iconButton,
                                                children: (0, r.jsx)(d.X, {
                                                    size: 'xs',
                                                    colorClass: g.iconWithHover
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
