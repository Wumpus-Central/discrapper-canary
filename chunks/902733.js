n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    l = n(657707),
    a = n(481060),
    o = n(531578),
    s = n(388032),
    c = n(175943);
function u(e) {
    let { rating: t, onClick: n } = e,
        s = t === o.aZ.BAD ? l.kZ9 : l.lbB,
        u = i.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, r.jsx)(a.P3F, {
        onClick: u,
        className: c.iconContainer,
        children: (0, r.jsx)(s, {
            size: 'md',
            color: 'currentColor',
            className: c.icon
        })
    });
}
let d = function (e) {
    let { dismissFeedbackEntrypoint: t } = e,
        l = i.useCallback(
            (e) => {
                t(),
                    (0, a.ZDy)(async () => {
                        let { default: t } = await n.e('11298').then(n.bind(n, 229612));
                        return (n) => {
                            var i, l;
                            return (0, r.jsx)(
                                t,
                                ((i = (function (e) {
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
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, n)),
                                (l = l = { rating: e }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                i)
                            );
                        };
                    });
            },
            [t]
        );
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            (0, r.jsx)(a.Text, {
                variant: 'text-sm/medium',
                color: 'text-primary',
                children: s.intl.string(s.t['I+4OJC'])
            }),
            (0, r.jsxs)('div', {
                className: c.icons,
                children: [
                    (0, r.jsx)(u, {
                        rating: o.aZ.GOOD,
                        onClick: l
                    }),
                    (0, r.jsx)(u, {
                        rating: o.aZ.BAD,
                        onClick: l
                    })
                ]
            })
        ]
    });
};
