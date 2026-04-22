n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(194261),
    r = n(827734),
    o = n(834730),
    c = n(534514),
    d = n(383501),
    u = n(798286),
    h = n(814278),
    m = n(998759),
    A = n(815066),
    g = n(930840);
n(603266);
var p = n(985018),
    _ = n(555273);
function f(e) {
    let { channelId: t } = e,
        n = (0, a.bG)([d.A], () => d.A.getSecureFramesState()?.epochAuthenticator),
        f = (0, m.z)({ fingerprintBase64: n, chunkSize: 5, desiredLength: 30 }),
        E = l.useCallback(() => {
            (0, u.k0)({ channelId: t });
        }, [t]);
    return (0, i.jsxs)("div", {
        className: _.kL,
        children: [
            (0, i.jsxs)("div", {
                className: _.Tc,
                children: [
                    (0, i.jsx)(s.X, { size: "xxs", color: r.A.colors.TEXT_FEEDBACK_POSITIVE }),
                    (0, i.jsx)(o.E, {
                        variant: "text-xs/medium",
                        color: "text-feedback-positive",
                        children: p.intl.string(p.t["3BogKe"]),
                    }),
                ],
            }),
            (0, i.jsx)(o.E, { variant: "text-xs/normal", color: "text-subtle", children: p.intl.string(p.t.B9JNsl) }),
            (0, i.jsxs)("div", {
                className: _.wx,
                children: [
                    (0, i.jsx)(c.D, {
                        variant: "text-sm/bold",
                        color: "text-strong",
                        children: p.intl.string(p.t.cTQI5t),
                    }),
                    null != f &&
                        (0, i.jsx)(g.c, { chunks: f, color: r.A.colors.INTERACTIVE_TEXT_DEFAULT.css, onCopy: E }),
                ],
            }),
            (0, i.jsx)(A.O, { className: _.aY, chunks: f, columns: 3 }),
            (0, i.jsx)(o.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: p.intl.format(p.t.wKxADe, { helpArticle: (0, h.aW)() }),
            }),
        ],
    });
}
