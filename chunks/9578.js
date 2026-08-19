r.d(t, { A: () => c });
var l = r(477900),
    n = r(582128),
    i = r(478676),
    a = r.n(i),
    s = r(349288),
    d = r(793574),
    o = r(688810),
    u = r(123917);
let c = n.memo(function (e) {
    let { onClick: t, trusted: r, title: i, href: c, children: v, messageId: h, channelId: C, ...g } = e,
        { analyticsLocations: f } = (0, o.Ay)(d.A.MASKED_LINK),
        m = n.useCallback((t) => (0, u.h)(e, t, f), [f, e]),
        p = n.useCallback(
            (e) => {
                1 === e.button && m(e);
            },
            [m],
        ),
        b = a().sanitizeUrl(c);
    return (0, l.jsx)(s.Anchor, {
        ...g,
        title: i,
        target: "_blank",
        rel: "noreferrer noopener",
        href: b,
        onClick: m,
        onAuxClick: p,
        children: v ?? i,
    });
});
