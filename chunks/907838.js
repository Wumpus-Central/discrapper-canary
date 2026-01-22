n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(108531),
    l = n(397927),
    c = n(180022),
    u = n(663244);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
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

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = 910,
    m = 1400,
    g = (e) => {
        let { cards: t, className: n, cardType: a } = e,
            d = () => (window.innerWidth < h ? 1 : window.innerWidth < m ? 2 : 3),
            [p, g] = i.useState(0),
            [E, b] = i.useState(d()),
            y = t.length;
        i.useEffect(() => {
            let e = () => {
                b(d());
            };
            return (
                window.addEventListener("resize", e),
                () => {
                    window.removeEventListener("resize", e);
                }
            );
        }, []),
            i.useEffect(() => {
                g((e) => (y > E && e > y - E ? y - E : y <= E ? 0 : e));
            }, [y, E]);
        let O = p > 0,
            A = () => {
                g((e) => (0 === e ? y - E : e - 1));
            },
            v = () => {
                g((e) => (e >= y - E ? 0 : e + 1));
            },
            S = i.useCallback(
                (e) => ({
                    x: (e - p) * 100,
                }),
                [p],
            ),
            [I, T] = (0, l.mX6)(t.length, S);
        return (
            i.useEffect(() => {
                T(S);
            }, [T, S]),
            (0, r.jsx)("div", {
                className: n,
                children: (0, r.jsxs)("div", {
                    className: u.Ui,
                    children: [
                        y > E &&
                            (0, r.jsx)(l.DUT, {
                                onClick: O ? A : void 0,
                                className: s()({
                                    [u.v5]: O,
                                    [u.$T]: !O,
                                }),
                                children: (0, r.jsx)(l.rJJ, {
                                    className: u.D6,
                                    colorClass: u.D6,
                                }),
                            }),
                        (0, r.jsx)("div", {
                            className: u.C8,
                            children: I.map((e, n) => {
                                let { x: i } = e;
                                return (0, r.jsx)(
                                    o.animated.div,
                                    {
                                        className: u.Nr,
                                        style: {
                                            transform:
                                                null == i ? void 0 : i.to((e) => "translate3d(".concat(e, "%,0,0)")),
                                        },
                                        children: (0, r.jsx)(
                                            c.A,
                                            _(f({}, t[n]), {
                                                cardType: a,
                                            }),
                                            "".concat(t[n].name, "_").concat(n, "_perks_card"),
                                        ),
                                    },
                                    "".concat(t[n].name, "_").concat(n, "_animated_div"),
                                );
                            }),
                        }),
                        y > E &&
                            (0, r.jsx)(l.DUT, {
                                onClick: v,
                                className: u.Ox,
                                children: (0, r.jsx)(l.EdP, {
                                    className: u.D6,
                                    colorClass: u.D6,
                                }),
                            }),
                        y > E &&
                            (0, r.jsx)("div", {
                                className: u.$$,
                                children: t.map((e, t) => {
                                    if (!(t > y - E))
                                        return (0, r.jsx)(
                                            "div",
                                            {
                                                className: t === p ? u.fc : u.Om,
                                            },
                                            "progress_bar_dot_".concat(t),
                                        );
                                }),
                            }),
                    ],
                }),
            })
        );
    };
