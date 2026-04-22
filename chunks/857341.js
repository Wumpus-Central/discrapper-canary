n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(534514),
    r = n(834730),
    o = n(939249),
    c = n(821609),
    d = n(624479),
    u = n(628284),
    h = n(359778),
    m = n(194261),
    A = n(827734),
    g = n(383501),
    p = n(957565),
    _ = n(798286),
    f = n(814278),
    E = n(998759),
    C = n(75811);
n(603266);
var x = n(985018),
    S = n(291614),
    I = n(209426);
function N(e) {
    let { channelId: t } = e,
        n = (0, a.bG)([g.A], () => g.A.getSecureFramesState()?.epochAuthenticator),
        N = (0, E.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        [v, T] = l.useState(!1),
        y = l.useMemo(() => N?.join(" "), [N]),
        b = l.useCallback(() => {
            null != y &&
                (0, p.C)(y, () => {
                    T(!0), (0, _.k0)({ channelId: t }), setTimeout(() => T(!1), 2e3);
                });
        }, [t, y]);
    return (0, i.jsxs)("div", {
        className: I.kL,
        children: [
            (0, i.jsx)(s.D, { variant: "text-sm/bold", color: "text-strong", children: x.intl.string(x.t.cTQI5t) }),
            (0, i.jsx)(r.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: x.intl.format(x.t.wKxADe, { helpArticle: (0, f.aW)() }),
            }),
            (0, i.jsx)("div", {
                className: I.on,
                children: (0, i.jsx)(C.j, { chunks: N, columns: 3, className: I.lu }),
            }),
            null != N &&
                (0, i.jsxs)(o.D, {
                    className: S.n2,
                    onClick: b,
                    children: [
                        (0, i.jsx)("div", {
                            className: v ? S.Dx : S.t6,
                            children: (0, i.jsx)(c.$, {
                                icon: d.T,
                                text: x.intl.string(x.t.OpuAlK),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: v ? S.t6 : S.Dx,
                            children: (0, i.jsx)(c.$, {
                                icon: u.y,
                                text: x.intl.string(x.t.t5VZ88),
                                variant: "secondary",
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("hr", { className: S.me }),
            (0, i.jsx)(r.E, { variant: "text-xs/normal", color: "text-subtle", children: x.intl.string(x.t.B9JNsl) }),
            (0, i.jsxs)(h.Z, {
                type: h.Z.Types.SUCCESS,
                className: S.g4,
                children: [
                    (0, i.jsx)(m.X, { size: "xxs", color: A.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                    (0, i.jsx)(r.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: x.intl.string(x.t["3BogKe"]),
                    }),
                ],
            }),
        ],
    });
}
