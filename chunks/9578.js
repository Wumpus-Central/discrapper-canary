"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    s = n(791332),
    a = n.n(s),
    o = n(349288),
    l = n(793574),
    u = n(688810),
    c = n(123917);
let d = r.memo(function (e) {
    let { onClick: t, trusted: n, title: s, href: d, children: _, messageId: h, channelId: f, ...p } = e,
        { analyticsLocations: E } = (0, u.Ay)(l.A.MASKED_LINK),
        m = r.useCallback((t) => (0, c.h)(e, t, E), [E, e]),
        g = r.useCallback(
            (e) => {
                1 === e.button && m(e);
            },
            [m],
        ),
        A = a().sanitizeUrl(d);
    return (0, i.jsx)(o.Anchor, {
        ...p,
        title: s,
        target: "_blank",
        rel: "noreferrer noopener",
        href: A,
        onClick: m,
        onAuxClick: g,
        children: _ ?? s,
    });
});
