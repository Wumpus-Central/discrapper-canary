n.d(t, { A: () => A }), n(323874), n(14289), n(35956);
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(46054),
    s = n(403362),
    d = n(861662),
    o = n(985018),
    u = n(322367),
    c = n(473169);
let m = ["cdn.discordapp.com", "media.discordapp.net", "media.discordapp.com"],
    _ = /^(?:localhost|127\.0\.0\.1|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/,
    x = (0, s.m6)()
        ? /^https?:\/\/(?:(?:ptb\.|canary\.)?discord(?:app)?\.com|localhost(?::\d+)?|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)\/channels\/(?:@me|\d+)\/\d+\/\d+$/
        : /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;
function g(e) {
    try {
        return new URL(e), !0;
    } catch {
        return !1;
    }
}
function h(e) {
    return (
        "" !== e &&
        !!g(e) &&
        !(function (e) {
            try {
                let t = new URL(e);
                if (m.some((e) => t.hostname === e) || ((0, s.m6)() && _.test(t.hostname))) return !0;
                return !1;
            } catch {
                return !1;
            }
        })(e)
    );
}
let p = (e) => {
        let {
                data: { title: t, subtitle: n, placeholder: s, message_link_title: m, message_link_placeholder: _ },
                onChange: p,
                initialContentUrl: A,
                initialMessageUrl: b,
                isRequired: v,
            } = e,
            f = a.useMemo(() => r.A.reactParserFor({ ...r.A.defaultRules, link: d.B }), []),
            [j, T] = a.useState(""),
            [N, S] = a.useState(""),
            [k, C] = a.useState(null),
            [I, E] = a.useState(null),
            [y, M] = a.useState(!1);
        a.useEffect(() => {
            T(A?.value ?? ""), S(b?.value ?? ""), A?.value != null && "" !== A.value && M(h(A.value));
        }, [A, b]);
        let R = a.useCallback(
                (e) => {
                    if ((T(e), "" === e)) {
                        C(null), M(!1), S(""), E(null), p({ value: e, isValid: !1 });
                        return;
                    }
                    if (!g(e)) {
                        C(o.intl.string(o.t["24xrGb"])), M(!1), S(""), E(null), p({ value: e, isValid: !1 });
                        return;
                    }
                    let t = h(e);
                    M(t),
                        C(null),
                        t
                            ? "" === N
                                ? p({ value: e, isValid: !1 })
                                : x.test(N)
                                  ? p({ value: e, isValid: !0 }, { value: N, isValid: !0 })
                                  : p({ value: e, isValid: !1 }, { value: N, isValid: !1 })
                            : (S(""), E(null), p({ value: e, isValid: !0 }));
                },
                [p, N],
            ),
            L = a.useCallback(
                (e) => {
                    if ((S(e), "" === e || !x.test(e))) {
                        E(o.intl.string(o.t["24xrGb"])), p({ value: j, isValid: !1 }, { value: e, isValid: !1 });
                        return;
                    }
                    E(null), p({ value: j, isValid: !0 }, { value: e, isValid: !0 });
                },
                [p, j],
            );
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsxs)(i.BJc, {
                    gap: 16,
                    children: [
                        (0, l.jsxs)("div", {
                            className: c.QB,
                            children: [
                                null != t &&
                                    (0, l.jsx)("div", {
                                        className: c.QB,
                                        children: (0, l.jsxs)(i.Text, {
                                            variant: "text-sm/bold",
                                            children: [t, v && (0, l.jsx)("span", { className: u.m, children: "*" })],
                                        }),
                                    }),
                                (0, l.jsx)(i.ksK, { onChange: R, value: j, error: k, placeholder: s, autoFocus: !0 }),
                            ],
                        }),
                        y &&
                            null != m &&
                            (0, l.jsxs)("div", {
                                className: c.QB,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: c.QB,
                                        children: (0, l.jsxs)(i.Text, {
                                            variant: "text-sm/bold",
                                            children: [m, v && (0, l.jsx)("span", { className: u.m, children: "*" })],
                                        }),
                                    }),
                                    (0, l.jsx)(i.ksK, { onChange: L, value: N, error: I, placeholder: _ }),
                                ],
                            }),
                    ],
                }),
                null != n && (0, l.jsx)(i.Text, { variant: "text-xs/normal", children: f(n) }),
            ],
        });
    },
    A = (e) => {
        let { element: t, onChange: n, state: i } = e,
            r = t.name,
            s = `${t.name}_message_link`,
            d = a.useCallback(
                (e, t) => {
                    null != t ? n(r, e.value, e.isValid && t.isValid, s, t.value) : n(r, e.value, e.isValid, s, void 0);
                },
                [n, r, s],
            );
        return (0, l.jsx)(p, {
            data: t.data,
            onChange: d,
            initialContentUrl: i?.[r],
            initialMessageUrl: i?.[s],
            isRequired: t.should_submit_data,
        });
    };
