t.d(l, { A: () => c });
var r = t(627968),
    n = t(64700),
    i = t(791332),
    a = t.n(i),
    s = t(349288),
    d = t(793574),
    o = t(688810),
    u = t(307600);
let c = n.memo(function (e) {
    let { onClick: l, trusted: t, title: i, href: c, children: v, messageId: C, channelId: h, ...m } = e,
        { analyticsLocations: g } = (0, o.Ay)(d.A.MASKED_LINK),
        f = n.useCallback((l) => (0, u.h)(e, l, g), [g, e]),
        p = n.useCallback(
            (e) => {
                1 === e.button && f(e);
            },
            [f],
        ),
        x = a().sanitizeUrl(c);
    return (0, r.jsx)(s.Anchor, {
        ...m,
        title: i,
        target: "_blank",
        rel: "noreferrer noopener",
        href: x,
        onClick: f,
        onAuxClick: p,
        children: v ?? i,
    });
});
