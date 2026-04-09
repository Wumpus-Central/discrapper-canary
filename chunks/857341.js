n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(383501),
    o = n(957565),
    c = n(798286),
    d = n(814278),
    u = n(998759),
    h = n(75811);
n(603266);
var m = n(985018),
    A = n(97262),
    g = n(804674);
function p(e) {
    let { channelId: t } = e,
        n = (0, s.bG)([r.A], () => r.A.getSecureFramesState()?.epochAuthenticator),
        p = (0, u.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [_, f] = l.useState(!1),
        E = l.useMemo(() => p?.join(" "), [p]),
        x = l.useCallback(() => {
            null != E &&
                (0, o.C)(E, () => {
                    f(!0), (0, c.k0)({ channelId: t }), setTimeout(() => f(!1), 2e3);
                });
        }, [t, E]);
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [
            (0, i.jsx)(a.Heading, {
                variant: "text-sm/bold",
                color: "text-strong",
                children: m.intl.string(m.t.cTQI5t),
            }),
            (0, i.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: m.intl.format(m.t.wKxADe, { helpArticle: (0, d.aW)() }),
            }),
            (0, i.jsx)("div", {
                className: g.on,
                children: (0, i.jsx)(h.j, { chunks: p, columns: 3, className: g.lu }),
            }),
            null != p &&
                (0, i.jsxs)(a.DUT, {
                    className: A.n2,
                    onClick: x,
                    children: [
                        (0, i.jsx)("div", {
                            className: _ ? A.Dx : A.t6,
                            children: (0, i.jsx)(a.Button, {
                                icon: a.TdU,
                                text: m.intl.string(m.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: _ ? A.t6 : A.Dx,
                            children: (0, i.jsx)(a.Button, {
                                icon: a.yr3,
                                text: m.intl.string(m.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("hr", { className: A.me }),
            (0, i.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: m.intl.string(m.t.B9JNsl),
            }),
            (0, i.jsxs)(a.ZpM, {
                type: a.ZpM.Types.SUCCESS,
                className: A.g4,
                children: [
                    (0, i.jsx)(a.XAi, { size: "xxs", color: a.LU0.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: m.intl.string(m.t["3BogKe"]),
                    }),
                ],
            }),
        ],
    });
}
