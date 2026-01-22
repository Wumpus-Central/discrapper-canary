n.d(t, {
    A: () => g,
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(383501),
    o = n(798286),
    c = n(814278),
    u = n(998759),
    d = n(75811),
    f = n(930840);
n(603266);
var p = n(985018),
    b = n(922401);

function g(e) {
    let { channelId: t } = e,
        n = (0, i.bG)([s.A], () => {
            var e;
            return null == (e = s.A.getSecureFramesState()) ? void 0 : e.epochAuthenticator;
        }),
        g = (0, u.z)({
            fingerprintBase64: n,
            chunkSize: 5,
            desiredLength: 30,
        }),
        m = r.useCallback(() => {
            (0, o.k0)({
                channelId: t,
            });
        }, [t]);
    return (0, l.jsxs)("div", {
        className: b.kL,
        children: [
            (0, l.jsxs)("div", {
                className: b.Tc,
                children: [
                    (0, l.jsx)(a.XAi, {
                        size: "xxs",
                        color: a.LU0.colors.TEXT_FEEDBACK_POSITIVE,
                    }),
                    (0, l.jsx)(a.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: p.intl.string(p.t["3BogKe"]),
                    }),
                ],
            }),
            (0, l.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: p.intl.string(p.t.B9JNsl),
            }),
            (0, l.jsxs)("div", {
                className: b.wx,
                children: [
                    (0, l.jsx)(a.Heading, {
                        variant: "text-sm/bold",
                        color: "text-strong",
                        children: p.intl.string(p.t.cTQI5t),
                    }),
                    null != g &&
                        (0, l.jsx)(f.c, {
                            chunks: g,
                            color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            onCopy: m,
                        }),
                ],
            }),
            (0, l.jsx)(d.j, {
                className: b.aY,
                chunks: g,
                columns: 3,
            }),
            (0, l.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: p.intl.format(p.t.wKxADe, {
                    helpArticle: (0, c.aW)(),
                }),
            }),
        ],
    });
}
