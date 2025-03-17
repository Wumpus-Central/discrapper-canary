n.d(t, { Z: () => f }), n(627341);
var r = n(200651);
n(192379);
var i = n(278074),
    o = n(657707),
    a = n(456100),
    s = n(841784),
    l = n(495630),
    c = n(170187),
    u = n(937008),
    d = n(981631);
function f(e) {
    let { activity: t, textVariant: n, textClassName: f, hideIcon: _ = !1, hideText: p = !1, hideTooltip: h = !1 } = e,
        { enabled: m } = a.c.useExperiment({ location: 'PresenceActivityStatus' }, { autoTrackExposure: !0 });
    if (_ && p) return null;
    let { text: g, tooltip: E } = (0, l.Z)({ activity: t }),
        b = (0, i.EQ)(t)
            .when(s.Z, () => (m ? o.iWm : o.jje))
            .with({ type: d.IIU.PLAYING }, () => o.iWm)
            .with({ type: d.IIU.LISTENING }, () => o.RZG)
            .with({ type: d.IIU.WATCHING }, () => o.ARS)
            .with({ type: d.IIU.STREAMING }, () => o.ARS)
            .with({ type: d.IIU.COMPETING }, () => o.iWm)
            .otherwise(() => null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !_ &&
                null != b &&
                (0, r.jsx)(u.Z, {
                    icon: b,
                    tooltip: p && !h ? E : void 0
                }),
            !p &&
                (0, r.jsx)(c.Z, {
                    variant: n,
                    className: f,
                    children: g
                })
        ]
    });
}
