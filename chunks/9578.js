"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(791332),
    a = n.n(s),
    o = n(349288),
    l = n(793574),
    u = n(688810),
    c = n(307600);
let d = i.memo(function (e) {
    let { onClick: t, trusted: n, title: s, href: d, children: _, messageId: f, channelId: p, ...h } = e,
        { analyticsLocations: E } = (0, u.Ay)(l.A.MASKED_LINK),
        m = i.useCallback((t) => (0, c.h)(e, t, E), [E, e]),
        g = i.useCallback(
            (e) => {
                1 === e.button && m(e);
            },
            [m],
        ),
        A = a().sanitizeUrl(d);
    return (0, r.jsx)(o.Anchor, {
        ...h,
        title: s,
        target: "_blank",
        rel: "noreferrer noopener",
        href: A,
        onClick: m,
        onAuxClick: g,
        children: _ ?? s,
    });
});
