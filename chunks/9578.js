l.d(t, { A: () => c });
var r = l(627968),
    n = l(64700),
    i = l(791332),
    a = l.n(i),
    s = l(349288),
    d = l(793574),
    o = l(688810),
    u = l(123917);
let c = n.memo(function (e) {
    let { onClick: t, trusted: l, title: i, href: c, children: v, messageId: C, channelId: h, ...g } = e,
        { analyticsLocations: m } = (0, o.Ay)(d.A.MASKED_LINK),
        f = n.useCallback((t) => (0, u.h)(e, t, m), [m, e]),
        p = n.useCallback(
            (e) => {
                1 === e.button && f(e);
            },
            [f],
        ),
        x = a().sanitizeUrl(c);
    return (0, r.jsx)(s.Anchor, {
        ...g,
        title: i,
        target: "_blank",
        rel: "noreferrer noopener",
        href: x,
        onClick: f,
        onAuxClick: p,
        children: v ?? i,
    });
});
