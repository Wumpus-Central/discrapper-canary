n.d(t, {
    A: () => h,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238);
var l = n(627968),
    r = n(64700),
    i = n(397927),
    a = n(46054),
    s = n(403362),
    o = n(861662),
    d = n(985018),
    c = n(322367),
    u = n(473169);
let m = ["cdn.discordapp.com", "media.discordapp.net", "media.discordapp.com"],
    p = /^(?:localhost|127\.0\.0\.1|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/,
    b = (0, s.m6)()
        ? /^https?:\/\/(?:(?:ptb\.|canary\.)?discord(?:app)?\.com|localhost(?::\d+)?|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)\/channels\/(?:@me|\d+)\/\d+\/\d+$/
        : /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;

function _(e) {
    try {
        return new URL(e), !0;
    } catch (e) {
        return !1;
    }
}

function g(e) {
    return (
        "" !== e &&
        !!_(e) &&
        !(function (e) {
            try {
                let t = new URL(e);
                if (m.some((e) => t.hostname === e) || ((0, s.m6)() && p.test(t.hostname))) return !0;
                return !1;
            } catch (e) {
                return !1;
            }
        })(e)
    );
}
let x = (e) => {
        let {
                data: { title: t, subtitle: n, placeholder: s, message_link_title: m, message_link_placeholder: p },
                onChange: x,
                initialContentUrl: h,
                initialMessageUrl: v,
                isRequired: f,
            } = e,
            j = r.useMemo(() => {
                var e, t;
                return a.A.reactParserFor(
                    ((e = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                l = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (l = l.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                l.forEach(function (t) {
                                    var l;
                                    (l = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: l,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = l);
                                });
                        }
                        return e;
                    })({}, a.A.defaultRules)),
                    (t = t =
                        {
                            link: o.B,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, l);
                              }
                              return n;
                          })(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          }),
                    e),
                );
            }, []),
            [A, y] = r.useState(""),
            [O, S] = r.useState(""),
            [T, N] = r.useState(null),
            [k, w] = r.useState(null),
            [C, I] = r.useState(!1);
        r.useEffect(() => {
            var e, t;
            y(null != (e = null == h ? void 0 : h.value) ? e : ""),
                S(null != (t = null == v ? void 0 : v.value) ? t : ""),
                (null == h ? void 0 : h.value) != null && "" !== h.value && I(g(h.value));
        }, [h, v]);
        let P = r.useCallback(
                (e) => {
                    if ((y(e), "" === e)) {
                        N(null),
                            I(!1),
                            S(""),
                            w(null),
                            x({
                                value: e,
                                isValid: !1,
                            });
                        return;
                    }
                    if (!_(e)) {
                        N(d.intl.string(d.t["24xrGb"])),
                            I(!1),
                            S(""),
                            w(null),
                            x({
                                value: e,
                                isValid: !1,
                            });
                        return;
                    }
                    let t = g(e);
                    I(t),
                        N(null),
                        t
                            ? "" === O
                                ? x({
                                      value: e,
                                      isValid: !1,
                                  })
                                : b.test(O)
                                  ? x(
                                        {
                                            value: e,
                                            isValid: !0,
                                        },
                                        {
                                            value: O,
                                            isValid: !0,
                                        },
                                    )
                                  : x(
                                        {
                                            value: e,
                                            isValid: !1,
                                        },
                                        {
                                            value: O,
                                            isValid: !1,
                                        },
                                    )
                            : (S(""),
                              w(null),
                              x({
                                  value: e,
                                  isValid: !0,
                              }));
                },
                [x, O],
            ),
            E = r.useCallback(
                (e) => {
                    if ((S(e), "" === e || !b.test(e))) {
                        w(d.intl.string(d.t["24xrGb"])),
                            x(
                                {
                                    value: A,
                                    isValid: !1,
                                },
                                {
                                    value: e,
                                    isValid: !1,
                                },
                            );
                        return;
                    }
                    w(null),
                        x(
                            {
                                value: A,
                                isValid: !0,
                            },
                            {
                                value: e,
                                isValid: !0,
                            },
                        );
                },
                [x, A],
            );
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsxs)(i.BJc, {
                    gap: 16,
                    children: [
                        (0, l.jsxs)("div", {
                            className: u.QB,
                            children: [
                                null != t &&
                                    (0, l.jsx)("div", {
                                        className: u.QB,
                                        children: (0, l.jsxs)(i.Text, {
                                            variant: "text-sm/bold",
                                            children: [
                                                t,
                                                f &&
                                                    (0, l.jsx)("span", {
                                                        className: c.m,
                                                        children: "*",
                                                    }),
                                            ],
                                        }),
                                    }),
                                (0, l.jsx)(i.ksK, {
                                    onChange: P,
                                    value: A,
                                    error: T,
                                    placeholder: s,
                                    autoFocus: !0,
                                }),
                            ],
                        }),
                        C &&
                            null != m &&
                            (0, l.jsxs)("div", {
                                className: u.QB,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: u.QB,
                                        children: (0, l.jsxs)(i.Text, {
                                            variant: "text-sm/bold",
                                            children: [
                                                m,
                                                f &&
                                                    (0, l.jsx)("span", {
                                                        className: c.m,
                                                        children: "*",
                                                    }),
                                            ],
                                        }),
                                    }),
                                    (0, l.jsx)(i.ksK, {
                                        onChange: E,
                                        value: O,
                                        error: k,
                                        placeholder: p,
                                    }),
                                ],
                            }),
                    ],
                }),
                null != n &&
                    (0, l.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        children: j(n),
                    }),
            ],
        });
    },
    h = (e) => {
        let { element: t, onChange: n, state: i } = e,
            a = t.name,
            s = "".concat(t.name, "_message_link"),
            o = r.useCallback(
                (e, t) => {
                    null != t ? n(a, e.value, e.isValid && t.isValid, s, t.value) : n(a, e.value, e.isValid, s, void 0);
                },
                [n, a, s],
            );
        return (0, l.jsx)(x, {
            data: t.data,
            onChange: o,
            initialContentUrl: null == i ? void 0 : i[a],
            initialMessageUrl: null == i ? void 0 : i[s],
            isRequired: t.should_submit_data,
        });
    };
