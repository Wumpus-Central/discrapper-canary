n.d(t, { U: () => A }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(688619),
    a = n.n(o),
    s = n(120356),
    l = n.n(s),
    c = n(866442),
    u = n(19602),
    d = n(490236),
    f = n(463208),
    _ = n(481060),
    p = n(408886),
    h = n(789549),
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
let v = i.lazy(() => Promise.all([n.e('21153'), n.e('24530')]).then(n.bind(n, 932329)));
function I(e, t) {
    return e.length < 1 ? 0 : (t / (e.length - 1)) * 80 + 10;
}
function S(e) {
    let { colors: t, selectedIndex: n, onColorSelect: o } = e,
        [a, s] = i.useMemo(() => {
            let e = t.map((e, n) => I(t, n)),
                n = t.map((t, n) => ''.concat(t, ' ').concat(e[n], '%')).join(', ');
            return [e, { background: 'linear-gradient(to right, '.concat(n, ')') }];
        }, [t]);
    return (0, r.jsx)('div', {
        className: g.gradientBar,
        style: s,
        children: t.map((e, t) => {
            let i = a[t],
                s = t === n;
            return (0, r.jsx)(
                _.P3F,
                {
                    className: l()(g.colorCircle, { [g.colorCircleSelected]: s }),
                    style: {
                        left: ''.concat(i, '%'),
                        backgroundColor: e
                    },
                    onClick: () => o(t),
                    children: (0, r.jsx)('div', { className: g.colorCircleInner })
                },
                t
            );
        })
    });
}
function T(e) {
    if (!(0, c.FX)(e)) return e;
    let t = a()(e);
    return t.set('hsl.h', (t.get('hsl.h') + 15) % 360).hex();
}
function A(e) {
    let { value: t, onChange: n, className: o, colors: a, setColors: s } = e,
        E = (0, p.Z)(),
        [y, I] = i.useState(0),
        [A, N] = i.useState(t);
    i.useEffect(() => {
        if (a.length > 0 && y < a.length) {
            let e = a[y];
            (0, c.FX)(e) && (N(e), n(e));
        }
    }, [y, a, n]);
    let C = (e) => {
            let t = e.startsWith('#') ? e : '#'.concat(e);
            if ((N(t), (0, c.FX)(t) && (n(t), a.length > 0))) {
                let e = [...a];
                (e[y] = t), s(e);
            }
        },
        P = i.useCallback((e) => {
            N(e.hex);
        }, []),
        R = (e) => {
            if ((n(e.hex), a.length > 0)) {
                let t = [...a];
                (t[y] = e.hex), s(t);
            }
        },
        w = async () => {
            if (null != E)
                try {
                    let { sRGBHex: e } = await E.open();
                    C(e);
                } catch (e) {}
        },
        D = () => {
            if (5 === a.length) return;
            let e = a.length > 0 ? a[a.length - 1] : A,
                t = a.length > 0 ? T(e) : e,
                n = [...a, t];
            s(n), I(n.length - 1);
        },
        L = (e) => {
            if (a.length > 1) {
                let t = a.filter((t, n) => n !== e);
                s(t), y >= t.length ? I(t.length - 1) : y > e && I(y - 1);
            }
        },
        x = (e) => {
            I(e);
        },
        k = a.length > 1;
    return (0, r.jsxs)('div', {
        className: l()(g.container, o),
        children: [
            (0, r.jsxs)('div', {
                className: g.headerContainer,
                children: [
                    (0, r.jsx)(_.Text, {
                        variant: 'text-xs/semibold',
                        children: m.intl.string(h.default['8ZcEfn'])
                    }),
                    (0, r.jsx)(_.zxk, {
                        size: _.zxk.Sizes.ICON,
                        look: _.zxk.Looks.BLANK,
                        onClick: D,
                        children: (0, r.jsx)(_.Text, {
                            variant: 'text-xs/semibold',
                            className: g.addColorButtonText,
                            children: m.intl.string(h.default['+tTysr'])
                        })
                    })
                ]
            }),
            k &&
                (0, r.jsx)(S, {
                    colors: a,
                    selectedIndex: y,
                    onColorSelect: x
                }),
            (0, r.jsx)(i.Suspense, {
                fallback: null,
                children: (0, r.jsx)(v, {
                    onChange: P,
                    onChangeComplete: R,
                    color: A
                })
            }),
            (0, r.jsxs)('div', {
                className: g.hexInputContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: g.colorSwatch,
                        style: { backgroundColor: A }
                    }),
                    (0, r.jsx)(f.o, {
                        className: g.hexInput,
                        inputClassName: g.hexInputInner,
                        value: A.slice(1).toUpperCase(),
                        onChange: C,
                        maxLength: 6,
                        placeholder: '4394D4'
                    }),
                    null != E &&
                        (0, r.jsx)(_.ua7, {
                            text: m.intl.string(m.t['0dU9Nz']),
                            children: (e) =>
                                (0, r.jsx)(
                                    _.zxk,
                                    O(
                                        b(
                                            {
                                                size: _.zxk.Sizes.ICON,
                                                look: _.zxk.Looks.BLANK
                                            },
                                            e
                                        ),
                                        {
                                            onClick: w,
                                            children: (0, r.jsx)(u.i, { size: 'xs' })
                                        }
                                    )
                                )
                        }),
                    k &&
                        (0, r.jsx)(_.zxk, {
                            size: _.zxk.Sizes.ICON,
                            look: _.zxk.Looks.BLANK,
                            onClick: () => L(y),
                            children: (0, r.jsx)(d.X, { size: 'xs' })
                        })
                ]
            })
        ]
    });
}
