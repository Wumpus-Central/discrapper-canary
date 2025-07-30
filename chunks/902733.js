n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    l = n(657707),
    a = n(481060),
    o = n(315322),
    s = n(531578),
    c = n(388032),
    u = n(175943);
function d(e) {
    let { rating: t, onClick: n } = e,
        o = t === s.aZ.BAD ? l.kZ9 : l.lbB,
        c = i.useCallback(() => {
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
let _ = function (e) {
    let { searchId: t, searchType: l, dismissFeedbackEntrypoint: _ } = e;
    i.useEffect(() => {
        (0, o.bo)({
            searchId: t,
            searchType: l
        });
    }, [t, l]);
    let E = i.useCallback(
        (e) => {
            (_(),
                (0, a.ZDy)(async () => {
                    let { default: i } = await n.e('11298').then(n.bind(n, 229612));
                    return (n) => {
                        var a, o;
                        return (0, r.jsx)(
                            i,
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
        [_, t, l]
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
                        rating: s.aZ.GOOD,
                        onClick: E
                    }),
                    (0, r.jsx)(d, {
                        rating: s.aZ.BAD,
                        onClick: E
                    })
                ]
            })
        ]
    });
};
