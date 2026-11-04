var n = l(477900),
    r = l(582128),
    i = l(478676),
    s = l.n(i),
    a = l(28863),
    d = l(793574),
    o = l(688810),
    c = l(889558);
let u = r.memo(function (e) {
    let { onClick: t, trusted: l, title: i, href: u, children: m, messageId: h, channelId: v, ...g } = e,
        { analyticsLocations: x } = (0, o.Ay)(d.A.MASKED_LINK),
        C = r.useCallback((t) => (0, c.h)(e, t, x), [x, e]),
        p = r.useCallback(
            (e) => {
                1 === e.button && C(e);
            },
            [C],
        ),
        f = s().sanitizeUrl(u);
    return (0, n.jsx)(a.Anchor, {
        ...g,
        title: i,
        target: "_blank",
        rel: "noreferrer noopener",
        href: f,
        onClick: C,
        onAuxClick: p,
        children: m ?? i,
    });
});
l.d(t, {}, { A: u });
