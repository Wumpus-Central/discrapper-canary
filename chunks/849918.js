n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(915089),
    s = n(71532),
    a = n(496794),
    o = n(832208),
    c = n(985018),
    d = n(784550);
let u = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, l.Ld)(),
                        title: () => c.intl.string(c.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => c.intl.string(c.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => d.ep,
                        renderInput: (e) =>
                            (0, r.jsx)(
                                a.A,
                                (function (e) {
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
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, e),
                            ),
                    },
                }.expirationDate,
            ],
        },
    ],
    _ = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: l, error: a } = e,
            [d, _] = i.useState(!1),
            [p, m] = i.useState(null),
            [g, A] = i.useState(l);
        return (
            i.useEffect(() => {
                t(
                    {
                        expirationDate: g,
                    },
                    null === p,
                );
            }, [g, t, p]),
            (0, r.jsx)(o.A, {
                className: n,
                form: u,
                values: {
                    expirationDate: g,
                },
                errors:
                    null != p
                        ? {
                              expirationDate: p,
                          }
                        : {},
                formError: a,
                onFieldChange: (e) => {
                    d || "" === e || _(!0),
                        (d && "" === e) || !(0, s.So)(e) ? m(c.intl.string(c.t["9/zZdl"])) : m(null),
                        A(e);
                },
            })
        );
    };
