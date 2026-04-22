"use strict";
n.d(t, { A: () => x }), n(323874), n(14289), n(35956);
var a = n(627968),
    i = n(64700),
    r = n(331322),
    l = n(834730),
    s = n(292666),
    d = n(46054),
    o = n(403362),
    c = n(861662),
    u = n(985018),
    _ = n(775923),
    m = n(818050);
let p = ["cdn.discordapp.com", "media.discordapp.net"],
    h = /^(?:localhost|127\.0\.0\.1|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/,
    g = (0, o.m6)()
        ? /^https?:\/\/(?:(?:ptb\.|canary\.)?discord(?:app)?\.com|localhost(?::\d+)?|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)\/channels\/(?:@me|\d+)\/\d+\/\d+$/
        : /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;
function f(e) {
    try {
        return new URL(e), !0;
    } catch {
        return !1;
    }
}
function b(e) {
    return (
        "" !== e &&
        !!f(e) &&
        !(function (e) {
            try {
                let t = new URL(e);
                if (p.some((e) => t.hostname === e) || ((0, o.m6)() && h.test(t.hostname))) return !0;
                return !1;
            } catch {
                return !1;
            }
        })(e)
    );
}
let A = (e) => {
        let {
                data: { title: t, subtitle: n, placeholder: o, message_link_title: p, message_link_placeholder: h },
                onChange: A,
                initialContentUrl: x,
                initialMessageUrl: v,
                isRequired: E,
            } = e,
            I = i.useMemo(() => d.A.reactParserFor({ ...d.A.defaultRules, link: c.B }), []),
            [T, S] = i.useState(""),
            [N, C] = i.useState(""),
            [y, j] = i.useState(null),
            [w, R] = i.useState(null),
            [L, M] = i.useState(!1);
        i.useEffect(() => {
            S(x?.value ?? ""), C(v?.value ?? ""), x?.value != null && "" !== x.value && M(b(x.value));
        }, [x, v]);
        let O = i.useCallback(
                (e) => {
                    if ((S(e), "" === e)) {
                        j(null), M(!1), C(""), R(null), A({ value: e, isValid: !1 });
                        return;
                    }
                    if (!f(e)) {
                        j(u.intl.string(u.t["24xrGb"])), M(!1), C(""), R(null), A({ value: e, isValid: !1 });
                        return;
                    }
                    let t = b(e);
                    M(t),
                        j(null),
                        t
                            ? "" === N
                                ? A({ value: e, isValid: !1 })
                                : g.test(N)
                                  ? A({ value: e, isValid: !0 }, { value: N, isValid: !0 })
                                  : A({ value: e, isValid: !1 }, { value: N, isValid: !1 })
                            : (C(""), R(null), A({ value: e, isValid: !0 }));
                },
                [A, N],
            ),
            P = i.useCallback(
                (e) => {
                    if ((C(e), "" === e || !g.test(e))) {
                        R(u.intl.string(u.t["24xrGb"])), A({ value: T, isValid: !1 }, { value: e, isValid: !1 });
                        return;
                    }
                    R(null), A({ value: T, isValid: !0 }, { value: e, isValid: !0 });
                },
                [A, T],
            );
        return (0, a.jsxs)("div", {
            children: [
                (0, a.jsxs)(r.B, {
                    gap: 16,
                    children: [
                        (0, a.jsxs)("div", {
                            className: m.QB,
                            children: [
                                null != t &&
                                    (0, a.jsx)("div", {
                                        className: m.QB,
                                        children: (0, a.jsxs)(l.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            children: [t, E && (0, a.jsx)("span", { className: _.m, children: "*" })],
                                        }),
                                    }),
                                (0, a.jsx)(s.k, { onChange: O, value: T, error: y, placeholder: o, autoFocus: !0 }),
                            ],
                        }),
                        L &&
                            null != p &&
                            (0, a.jsxs)("div", {
                                className: m.QB,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: m.QB,
                                        children: (0, a.jsxs)(l.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            children: [p, E && (0, a.jsx)("span", { className: _.m, children: "*" })],
                                        }),
                                    }),
                                    (0, a.jsx)(s.k, { onChange: P, value: N, error: w, placeholder: h }),
                                ],
                            }),
                    ],
                }),
                null != n && (0, a.jsx)(l.E, { variant: "text-xs/normal", children: I(n) }),
            ],
        });
    },
    x = (e) => {
        let { element: t, onChange: n, state: r } = e,
            l = t.name,
            s = `${t.name}_message_link`,
            d = i.useCallback(
                (e, t) => {
                    null != t ? n(l, e.value, e.isValid && t.isValid, s, t.value) : n(l, e.value, e.isValid, s, void 0);
                },
                [n, l, s],
            );
        return (0, a.jsx)(A, {
            data: t.data,
            onChange: d,
            initialContentUrl: r?.[l],
            initialMessageUrl: r?.[s],
            isRequired: t.should_submit_data,
        });
    };
