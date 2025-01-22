var i = r(200651),
    a = r(192379),
    o = r(477660),
    s = r.n(o),
    l = r(481060),
    u = r(100527),
    c = r(906732),
    d = r(49012);
let f = 1;
n.Z = a.memo(function (e) {
    let { onClick: n, trusted: r, title: o, href: p, children: h, messageId: _, channelId: m, ...g } = e,
        { analyticsLocations: E } = (0, c.ZP)(u.Z.MASKED_LINK),
        v = a.useCallback((n) => (0, d.q)(e, n, E), [E, e]),
        y = a.useCallback(
            (e) => {
                e.button === f && v(e);
            },
            [v]
        ),
        b = s().sanitizeUrl(p);
    return (0, i.jsx)(l.Anchor, {
        ...g,
        title: o,
        target: '_blank',
        rel: 'noreferrer noopener',
        href: b,
        onClick: v,
        onAuxClick: y,
        children: null != h ? h : o
    });
});
