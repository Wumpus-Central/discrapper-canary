n.d(t, { Z: () => d }), n(627341);
var r = n(200651);
n(192379);
var i = n(278074),
    o = n(657707),
    a = n(841784),
    s = n(495630),
    l = n(170187),
    c = n(937008),
    u = n(981631);
function d(e) {
    let { activity: t, textVariant: n, textClassName: d, hideIcon: f = !1, hideText: p = !1, hideTooltip: _ = !1 } = e;
    if (f && p) return null;
    let { text: h, tooltip: m } = (0, s.Z)({ activity: t }),
        g = (0, i.EQ)(t)
            .when(a.Z, () => o.jje)
            .with({ type: u.IIU.PLAYING }, () => o.iWm)
            .with({ type: u.IIU.LISTENING }, () => o.aXf)
            .with({ type: u.IIU.WATCHING }, () => o.ARS)
            .with({ type: u.IIU.STREAMING }, () => o.ARS)
            .with({ type: u.IIU.COMPETING }, () => o.iWm)
            .otherwise(() => null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !f &&
                null != g &&
                (0, r.jsx)(c.Z, {
                    icon: g,
                    tooltip: p && !_ ? m : void 0
                }),
            !p &&
                (0, r.jsx)(l.Z, {
                    variant: n,
                    className: d,
                    children: h
                })
        ]
    });
}
