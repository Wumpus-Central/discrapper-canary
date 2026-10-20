l.d(t, { A: () => u });
var n = l(477900),
    r = l(582128),
    i = l(478676),
    a = l.n(i),
    s = l(28863),
    d = l(793574),
    o = l(688810),
    c = l(123917);
let u = r.memo(function (e) {
    let { onClick: t, trusted: l, title: i, href: u, children: v, messageId: h, channelId: C, ...m } = e,
        { analyticsLocations: g } = (0, o.Ay)(d.A.MASKED_LINK),
        f = r.useCallback((t) => (0, c.h)(e, t, g), [g, e]),
        x = r.useCallback(
            (e) => {
                1 === e.button && f(e);
            },
            [f],
        ),
        p = a().sanitizeUrl(u);
    return (0, n.jsx)(s.Anchor, {
        ...m,
        title: i,
        target: "_blank",
        rel: "noreferrer noopener",
        href: p,
        onClick: f,
        onAuxClick: x,
        children: v ?? i,
    });
});
