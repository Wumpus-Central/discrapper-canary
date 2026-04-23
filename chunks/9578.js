"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    s = n(791332),
    a = n.n(s),
    o = n(349288),
    l = n(793574),
    d = n(688810),
    _ = n(76843);
let u = r.memo(function (e) {
    let { onClick: t, trusted: n, title: s, href: u, children: c, messageId: E, channelId: h, ...m } = e,
        { analyticsLocations: f } = (0, d.Ay)(l.A.MASKED_LINK),
        g = r.useCallback((t) => (0, _.h)(e, t, f), [f, e]),
        p = r.useCallback(
            (e) => {
                1 === e.button && g(e);
            },
            [g],
        ),
        A = a().sanitizeUrl(u);
    return (0, i.jsx)(o.Anchor, {
        ...m,
        title: s,
        target: "_blank",
        rel: "noreferrer noopener",
        href: A,
        onClick: g,
        onAuxClick: p,
        children: c ?? s,
    });
});
