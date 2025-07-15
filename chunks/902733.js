n.d(t, { Z: () => h });
var r = n(255367),
    s = n(73800),
    l = n(657707),
    a = n(481060),
    o = n(652399),
    i = n(531578),
    c = n(388032),
    u = n(175943);
function d(e) {
    let { rating: t, onClick: n } = e,
        o = t === i.aZ.BAD ? l.kZ9 : l.lbB,
        c = s.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, r.jsx)(a.P3F, {
        onClick: c,
        className: u.iconContainer,
        children: (0, r.jsx)(o, {
            size: 'md',
            color: 'currentColor',
            className: u.icon
        })
    });
}
let h = function (e) {
    let { searchId: t, searchType: l, dismissFeedbackEntrypoint: h } = e;
    s.useEffect(() => {
        (0, o.bo)({
            searchId: t,
            searchType: l
        });
    }, [t, l]);
    let p = s.useCallback(
        (e) => {
            (h(),
                (0, a.ZDy)(async () => {
                    let { default: s } = await n.e('11298').then(n.bind(n, 229612));
                    return (n) => {
                        var a, o;
                        return (0, r.jsx)(
                            s,
                            ((a = (function (e) {
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
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
                                }
                                return e;
                            })({}, n)),
                            (o = o =
                                {
                                    searchId: t,
                                    searchType: l,
                                    rating: e
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            a)
                        );
                    };
                }));
        },
        [h, t, l]
    );
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            (0, r.jsx)(a.Text, {
                variant: 'text-sm/medium',
                color: 'text-primary',
                children: c.intl.string(c.t['I+4OJC'])
            }),
            (0, r.jsxs)('div', {
                className: u.icons,
                children: [
                    (0, r.jsx)(d, {
                        rating: i.aZ.GOOD,
                        onClick: p
                    }),
                    (0, r.jsx)(d, {
                        rating: i.aZ.BAD,
                        onClick: p
                    })
                ]
            })
        ]
    });
};
