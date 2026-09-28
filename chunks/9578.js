n.d(t, { A: () => d });
var i = n(477900),
    l = n(582128),
    s = n(478676),
    r = n.n(s),
    a = n(28863),
    o = n(793574),
    c = n(688810),
    u = n(123917);
let d = l.memo(function (e) {
    let { onClick: t, trusted: n, title: s, href: d, children: h, messageId: m, channelId: g, ...f } = e,
        { analyticsLocations: p } = (0, c.Ay)(o.A.MASKED_LINK),
        x = l.useCallback((t) => (0, u.h)(e, t, p), [p, e]),
        A = l.useCallback(
            (e) => {
                1 === e.button && x(e);
            },
            [x],
        ),
        E = r().sanitizeUrl(d);
    return (0, i.jsx)(a.Anchor, {
        ...f,
        title: s,
        target: "_blank",
        rel: "noreferrer noopener",
        href: E,
        onClick: x,
        onAuxClick: A,
        children: h ?? s,
    });
});
