r.d(t, { Z: () => h });
var n = r(255367),
    s = r(73800),
    l = r(657707),
    a = r(481060),
    o = r(652399),
    i = r(531578),
    c = r(388032),
    u = r(175943);
function d(e) {
    let { rating: t, onClick: r } = e,
        o = t === i.aZ.BAD ? l.kZ9 : l.lbB,
        c = s.useCallback(() => {
            r(t);
        }, [r, t]);
    return (0, n.jsx)(a.P3F, {
        onClick: c,
        className: u.iconContainer,
        children: (0, n.jsx)(o, {
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
                    let { default: s } = await r.e('11298').then(r.bind(r, 229612));
                    return (r) => {
                        var a, o;
                        return (0, n.jsx)(
                            s,
                            ((a = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            ((n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n));
                                        }));
                                }
                                return e;
                            })({}, r)),
                            (o = o =
                                {
                                    searchId: t,
                                    searchType: l,
                                    rating: e
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
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
    return (0, n.jsxs)('div', {
        className: u.container,
        children: [
            (0, n.jsx)(a.Text, {
                variant: 'text-sm/medium',
                color: 'text-primary',
                children: c.intl.string(c.t['I+4OJC'])
            }),
            (0, n.jsxs)('div', {
                className: u.icons,
                children: [
                    (0, n.jsx)(d, {
                        rating: i.aZ.GOOD,
                        onClick: p
                    }),
                    (0, n.jsx)(d, {
                        rating: i.aZ.BAD,
                        onClick: p
                    })
                ]
            })
        ]
    });
};
