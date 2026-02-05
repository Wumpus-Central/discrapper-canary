"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(791332),
    s = n.n(a),
    o = n(397927),
    l = n(793574),
    u = n(688810),
    c = n(307600);
let d = 1,
    _ = i.memo(function (e) {
        let { onClick: t, trusted: n, title: a, href: _, children: f, messageId: p, channelId: h, ...m } = e,
            { analyticsLocations: g } = (0, u.Ay)(l.A.MASKED_LINK),
            E = i.useCallback((t) => (0, c.h)(e, t, g), [g, e]),
            A = i.useCallback(
                (e) => {
                    e.button === d && E(e);
                },
                [E],
            ),
            I = s().sanitizeUrl(_);
        return (0, r.jsx)(o.MzZ, {
            ...m,
            title: a,
            target: "_blank",
            rel: "noreferrer noopener",
            href: I,
            onClick: E,
            onAuxClick: A,
            children: f ?? a,
        });
    });
