"use strict";
n.d(t, { A: () => u });
var i = n(477900),
    r = n(582128),
    a = n(478676),
    s = n.n(a),
    l = n(349288),
    o = n(793574),
    d = n(688810),
    c = n(123917);
let u = r.memo(function (e) {
    let { onClick: t, trusted: n, title: a, href: u, children: _, messageId: E, channelId: A, ...h } = e,
        { analyticsLocations: I } = (0, d.Ay)(o.A.MASKED_LINK),
        f = r.useCallback((t) => (0, c.h)(e, t, I), [I, e]),
        p = r.useCallback(
            (e) => {
                1 === e.button && f(e);
            },
            [f],
        ),
        T = s().sanitizeUrl(u);
    return (0, i.jsx)(l.Anchor, {
        ...h,
        title: a,
        target: "_blank",
        rel: "noreferrer noopener",
        href: T,
        onClick: f,
        onAuxClick: p,
        children: _ ?? a,
    });
});
