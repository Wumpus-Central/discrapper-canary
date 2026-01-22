n.d(t, { A: () => g }), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956), n(747238);
var l = n(627968),
    r = n(64700),
    a = n(397927),
    i = n(46054),
    s = n(861662),
    o = n(985018),
    c = n(322367),
    d = n(473169);
let u = ["cdn.discord.com", "cdn.discordapp.com", "media.discordapp.net"],
    m = /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;
function b(e) {
    try {
        return new URL(e), !0;
    } catch (e) {
        return !1;
    }
}
function p(e) {
    return (
        "" !== e &&
        !!b(e) &&
        !(function (e) {
            try {
                let t = new URL(e);
                return u.some((e) => t.hostname === e);
            } catch (e) {
                return !1;
            }
        })(e)
    );
}
let x = (e) => {
        let {
                data: { title: t, subtitle: n, placeholder: u, message_link_title: x, message_link_placeholder: g },
                onChange: f,
                initialContentUrl: v,
                initialMessageUrl: h,
                isRequired: j,
            } = e,
            _ = r.useMemo(() => {
                var e, t;
                return i.A.reactParserFor(
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
                    })({}, i.A.defaultRules)),
                    (t = t = { link: s.B }),
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
            [w, k] = r.useState(null),
            [P, C] = r.useState(!1);
        r.useEffect(() => {
            var e, t;
            y(null != (e = null == v ? void 0 : v.value) ? e : ""),
                S(null != (t = null == h ? void 0 : h.value) ? t : ""),
                (null == v ? void 0 : v.value) != null && "" !== v.value && C(p(v.value));
        }, [v, h]);
        let E = r.useCallback(
                (e) => {
                    if ((y(e), "" === e)) {
                        N(null),
                            C(!1),
                            S(""),
                            k(null),
                            f({
                                value: e,
                                isValid: !1,
                            });
                        return;
                    }
                    if (!b(e)) {
                        N(o.intl.string(o.t["24xrGb"])),
                            C(!1),
                            S(""),
                            k(null),
                            f({
                                value: e,
                                isValid: !1,
                            });
                        return;
                    }
                    let t = p(e);
                    C(t),
                        N(null),
                        t
                            ? "" === O
                                ? f({
                                      value: e,
                                      isValid: !1,
                                  })
                                : m.test(O)
                                  ? f(
                                        {
                                            value: e,
                                            isValid: !0,
                                        },
                                        {
                                            value: O,
                                            isValid: !0,
                                        },
                                    )
                                  : f(
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
                              k(null),
                              f({
                                  value: e,
                                  isValid: !0,
                              }));
                },
                [f, O],
            ),
            I = r.useCallback(
                (e) => {
                    if ((S(e), "" === e || !m.test(e))) {
                        k(o.intl.string(o.t["24xrGb"])),
                            f(
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
                    k(null),
                        f(
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
                [f, A],
            );
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsxs)(a.BJc, {
                    gap: 16,
                    children: [
                        (0, l.jsxs)("div", {
                            className: d.QB,
                            children: [
                                null != t &&
                                    (0, l.jsx)("div", {
                                        className: d.QB,
                                        children: (0, l.jsxs)(a.Text, {
                                            variant: "text-sm/bold",
                                            children: [
                                                t,
                                                j &&
                                                    (0, l.jsx)("span", {
                                                        className: c.m,
                                                        children: "*",
                                                    }),
                                            ],
                                        }),
                                    }),
                                (0, l.jsx)(a.ksK, {
                                    onChange: E,
                                    value: A,
                                    error: T,
                                    placeholder: u,
                                    autoFocus: !0,
                                }),
                            ],
                        }),
                        P &&
                            null != x &&
                            (0, l.jsxs)("div", {
                                className: d.QB,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: d.QB,
                                        children: (0, l.jsxs)(a.Text, {
                                            variant: "text-sm/bold",
                                            children: [
                                                x,
                                                j &&
                                                    (0, l.jsx)("span", {
                                                        className: c.m,
                                                        children: "*",
                                                    }),
                                            ],
                                        }),
                                    }),
                                    (0, l.jsx)(a.ksK, {
                                        onChange: I,
                                        value: O,
                                        error: w,
                                        placeholder: g,
                                    }),
                                ],
                            }),
                    ],
                }),
                null != n &&
                    (0, l.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        children: _(n),
                    }),
            ],
        });
    },
    g = (e) => {
        let { element: t, onChange: n, state: a } = e,
            i = t.name,
            s = "".concat(t.name, "_message_link"),
            o = r.useCallback(
                (e, t) => {
                    null != t ? n(i, e.value, e.isValid && t.isValid, s, t.value) : n(i, e.value, e.isValid, s, void 0);
                },
                [n, i, s],
            );
        return (0, l.jsx)(x, {
            data: t.data,
            onChange: o,
            initialContentUrl: null == a ? void 0 : a[i],
            initialMessageUrl: null == a ? void 0 : a[s],
            isRequired: t.should_submit_data,
        });
    };
