n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    a = n(657707),
    o = n(481060),
    s = n(315322),
    l = n(531578),
    c = n(388032),
    u = n(175943);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            }));
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { rating: t, onClick: n } = e,
        s = t === l.aZ.BAD ? a.kZ9 : a.lbB,
        c = i.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, r.jsx)(o.P3F, {
        onClick: c,
        className: u.iconContainer,
        children: (0, r.jsx)(s, {
            size: 'md',
            color: 'currentColor',
            className: u.icon
        })
    });
}
let m = function (e) {
    let { searchContext: t, dismissFeedbackEntrypoint: a } = e;
    i.useEffect(() => {
        (0, s.bo)({ searchContext: t });
    }, [t]);
    let d = i.useCallback(
        (e) => {
            (a(),
                (0, o.ZDy)(async () => {
                    let { default: i } = await n.e('11298').then(n.bind(n, 229612));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            p(f({}, n), {
                                searchContext: t,
                                rating: e
                            })
                        );
                }));
        },
        [a, t]
    );
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/medium',
                color: 'text-primary',
                children: c.intl.string(c.t['I+4OJC'])
            }),
            (0, r.jsxs)('div', {
                className: u.icons,
                children: [
                    (0, r.jsx)(h, {
                        rating: l.aZ.GOOD,
                        onClick: d
                    }),
                    (0, r.jsx)(h, {
                        rating: l.aZ.BAD,
                        onClick: d
                    })
                ]
            })
        ]
    });
};
