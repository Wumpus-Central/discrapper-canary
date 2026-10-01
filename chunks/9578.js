l.d(t, { A: () => u });
var r = l(477900),
    n = l(582128),
    i = l(478676),
    a = l.n(i),
    s = l(28863),
    d = l(793574),
    o = l(688810),
    c = l(123917);
let u = n.memo(function (e) {
    let { onClick: t, trusted: l, title: i, href: u, children: v, messageId: C, channelId: h, ...m } = e,
        { analyticsLocations: g } = (0, o.Ay)(d.A.MASKED_LINK),
        f = n.useCallback((t) => (0, c.h)(e, t, g), [g, e]),
        p = n.useCallback(
            (e) => {
                1 === e.button && f(e);
            },
            [f],
        ),
        x = a().sanitizeUrl(u);
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
