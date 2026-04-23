n.d(t, { A: () => v }), n(323874), n(14289), n(35956);
var l = n(627968),
    a = n(64700),
    i = n(331322),
    r = n(834730),
    s = n(292666),
    d = n(46054),
    o = n(403362),
    c = n(861662),
    u = n(985018),
    _ = n(775923),
    m = n(818050);
let h = ["cdn.discordapp.com", "media.discordapp.net"],
    g = /^(?:localhost|127\.0\.0\.1|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/,
    p = (0, o.m6)()
        ? /^https?:\/\/(?:(?:ptb\.|canary\.)?discord(?:app)?\.com|localhost(?::\d+)?|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)\/channels\/(?:@me|\d+)\/\d+\/\d+$/
        : /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;
function x(e) {
    try {
        return new URL(e), !0;
    } catch {
        return !1;
    }
}
function A(e) {
    return (
        "" !== e &&
        !!x(e) &&
        !(function (e) {
            try {
                let t = new URL(e);
                if (h.some((e) => t.hostname === e) || ((0, o.m6)() && g.test(t.hostname))) return !0;
                return !1;
            } catch {
                return !1;
            }
        })(e)
    );
}
let f = (e) => {
        let {
                data: { title: t, subtitle: n, placeholder: o, message_link_title: h, message_link_placeholder: g },
                onChange: f,
                initialContentUrl: v,
                initialMessageUrl: b,
                isRequired: N,
            } = e,
            E = a.useMemo(() => d.A.reactParserFor({ ...d.A.defaultRules, link: c.B }), []),
            [S, T] = a.useState(""),
            [j, C] = a.useState(""),
            [I, y] = a.useState(null),
            [k, w] = a.useState(null),
            [L, D] = a.useState(!1);
        a.useEffect(() => {
            T(v?.value ?? ""), C(b?.value ?? ""), v?.value != null && "" !== v.value && D(A(v.value));
        }, [v, b]);
        let R = a.useCallback(
                (e) => {
                    if ((T(e), "" === e)) {
                        y(null), D(!1), C(""), w(null), f({ value: e, isValid: !1 });
                        return;
                    }
                    if (!x(e)) {
                        y(u.intl.string(u.t["24xrGb"])), D(!1), C(""), w(null), f({ value: e, isValid: !1 });
                        return;
                    }
                    let t = A(e);
                    D(t),
                        y(null),
                        t
                            ? "" === j
                                ? f({ value: e, isValid: !1 })
                                : p.test(j)
                                  ? f({ value: e, isValid: !0 }, { value: j, isValid: !0 })
                                  : f({ value: e, isValid: !1 }, { value: j, isValid: !1 })
                            : (C(""), w(null), f({ value: e, isValid: !0 }));
                },
                [f, j],
            ),
            M = a.useCallback(
                (e) => {
                    if ((C(e), "" === e || !p.test(e))) {
                        w(u.intl.string(u.t["24xrGb"])), f({ value: S, isValid: !1 }, { value: e, isValid: !1 });
                        return;
                    }
                    w(null), f({ value: S, isValid: !0 }, { value: e, isValid: !0 });
                },
                [f, S],
            );
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsxs)(i.B, {
                    gap: 16,
                    children: [
                        (0, l.jsxs)("div", {
                            className: m.QB,
                            children: [
                                null != t &&
                                    (0, l.jsx)("div", {
                                        className: m.QB,
                                        children: (0, l.jsxs)(r.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            children: [t, N && (0, l.jsx)("span", { className: _.m, children: "*" })],
                                        }),
                                    }),
                                (0, l.jsx)(s.k, { onChange: R, value: S, error: I, placeholder: o, autoFocus: !0 }),
                            ],
                        }),
                        L &&
                            null != h &&
                            (0, l.jsxs)("div", {
                                className: m.QB,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: m.QB,
                                        children: (0, l.jsxs)(r.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            children: [h, N && (0, l.jsx)("span", { className: _.m, children: "*" })],
                                        }),
                                    }),
                                    (0, l.jsx)(s.k, { onChange: M, value: j, error: k, placeholder: g }),
                                ],
                            }),
                    ],
                }),
                null != n && (0, l.jsx)(r.E, { variant: "text-xs/normal", children: E(n) }),
            ],
        });
    },
    v = (e) => {
        let { element: t, onChange: n, state: i } = e,
            r = t.name,
            s = `${t.name}_message_link`,
            d = a.useCallback(
                (e, t) => {
                    null != t ? n(r, e.value, e.isValid && t.isValid, s, t.value) : n(r, e.value, e.isValid, s, void 0);
                },
                [n, r, s],
            );
        return (0, l.jsx)(f, {
            data: t.data,
            onChange: d,
            initialContentUrl: i?.[r],
            initialMessageUrl: i?.[s],
            isRequired: t.should_submit_data,
        });
    };
