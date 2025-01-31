n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    a = n(477660),
    s = n.n(a),
    o = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(49012);
let d = 1,
    f = r.memo(function (e) {
        let { onClick: t, trusted: n, title: a, href: f, children: _, messageId: p, channelId: h, ...m } = e,
            { analyticsLocations: g } = (0, u.ZP)(l.Z.MASKED_LINK),
            E = r.useCallback((t) => (0, c.q)(e, t, g), [g, e]),
            v = r.useCallback(
                (e) => {
                    e.button === d && E(e);
                },
                [E]
            ),
            y = s().sanitizeUrl(f);
        return (0, i.jsx)(o.eee, {
            ...m,
            title: a,
            target: '_blank',
            rel: 'noreferrer noopener',
            href: y,
            onClick: E,
            onAuxClick: v,
            children: null != _ ? _ : a
        });
    });
