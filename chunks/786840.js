n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(383501),
    o = n(798286),
    c = n(814278),
    d = n(998759),
    u = n(815066),
    h = n(930840);
n(603266);
var m = n(985018),
    A = n(796057);
function g(e) {
    let { channelId: t } = e,
        n = (0, s.bG)([r.A], () => r.A.getSecureFramesState()?.epochAuthenticator),
        g = (0, d.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        p = l.useCallback(() => {
            (0, o.k0)({ channelId: t });
        }, [t]);
    return (0, i.jsxs)("div", {
        className: A.kL,
        children: [
            (0, i.jsxs)("div", {
                className: A.Tc,
                children: [
                    (0, i.jsx)(a.XAi, { size: "xxs", color: a.LU0.colors.TEXT_FEEDBACK_POSITIVE }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: m.intl.string(m.t["3BogKe"]),
                    }),
                ],
            }),
            (0, i.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: m.intl.string(m.t.B9JNsl),
            }),
            (0, i.jsxs)("div", {
                className: A.wx,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: "text-sm/bold",
                        color: "text-strong",
                        children: m.intl.string(m.t.cTQI5t),
                    }),
                    null != g &&
                        (0, i.jsx)(h.c, { chunks: g, color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css, onCopy: p }),
                ],
            }),
            (0, i.jsx)(u.O, { className: A.aY, chunks: g, columns: 3 }),
            (0, i.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: m.intl.format(m.t.wKxADe, { helpArticle: (0, c.aW)() }),
            }),
        ],
    });
}
