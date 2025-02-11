n.d(t, { Z: () => d }), n(627341);
var i = n(200651);
n(192379);
var r = n(278074),
    a = n(657707),
    s = n(841784),
    o = n(406368),
    l = n(170187),
    u = n(937008),
    c = n(981631);
function d(e) {
    let { activity: t, textVariant: n, textClassName: d, hideIcon: f = !1, hideText: _ = !1, hideTooltip: p = !1 } = e;
    if (f && _) return null;
    let { text: h, tooltip: m } = (0, o.s)({ activity: t }),
        g = (0, r.EQ)(t)
            .when(s.Z, () => a.jje)
            .with({ type: c.IIU.PLAYING }, () => a.iWm)
            .with({ type: c.IIU.LISTENING }, () => a.aXf)
            .with({ type: c.IIU.WATCHING }, () => a.ARS)
            .with({ type: c.IIU.STREAMING }, () => a.m3e)
            .with({ type: c.IIU.COMPETING }, () => a.iWm)
            .otherwise(() => null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !f &&
                null != g &&
                (0, i.jsx)(u.Z, {
                    icon: g,
                    tooltip: _ && !p ? m : void 0
                }),
            !_ &&
                (0, i.jsx)(l.Z, {
                    variant: n,
                    className: d,
                    children: h
                })
        ]
    });
}
