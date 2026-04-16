n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(397927),
    r = n(383501),
    o = n(957565),
    c = n(798286),
    d = n(814278),
    u = n(998759),
    h = n(75811);
n(603266);
var m = n(985018),
    A = n(291614),
    g = n(209426);
function _(e) {
    let { channelId: t } = e,
        n = (0, a.bG)([r.A], () => r.A.getSecureFramesState()?.epochAuthenticator),
        _ = (0, u.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [p, f] = l.useState(!1),
        E = l.useMemo(() => _?.join(" "), [_]),
        C = l.useCallback(() => {
            null != E &&
                (0, o.C)(E, () => {
                    f(!0), (0, c.k0)({ channelId: t }), setTimeout(() => f(!1), 2e3);
                });
        }, [t, E]);
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: "text-sm/bold",
                color: "text-strong",
                children: m.intl.string(m.t.cTQI5t),
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: m.intl.format(m.t.wKxADe, { helpArticle: (0, d.aW)() }),
            }),
            (0, i.jsx)("div", {
                className: g.on,
                children: (0, i.jsx)(h.j, { chunks: _, columns: 3, className: g.lu }),
            }),
            null != _ &&
                (0, i.jsxs)(s.DUT, {
                    className: A.n2,
                    onClick: C,
                    children: [
                        (0, i.jsx)("div", {
                            className: p ? A.Dx : A.t6,
                            children: (0, i.jsx)(s.Button, {
                                icon: s.TdU,
                                text: m.intl.string(m.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: p ? A.t6 : A.Dx,
                            children: (0, i.jsx)(s.Button, {
                                icon: s.yr3,
                                text: m.intl.string(m.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("hr", { className: A.me }),
            (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: m.intl.string(m.t.B9JNsl),
            }),
            (0, i.jsxs)(s.ZpM, {
                type: s.ZpM.Types.SUCCESS,
                className: A.g4,
                children: [
                    (0, i.jsx)(s.XAi, { size: "xxs", color: s.LU0.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: m.intl.string(m.t["3BogKe"]),
                    }),
                ],
            }),
        ],
    });
}
