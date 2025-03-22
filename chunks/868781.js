n.d(t, { Z: () => _ }), n(627341);
var r = n(200651);
n(192379);
var i = n(278074),
    o = n(657707),
    a = n(456100),
    s = n(841784),
    l = n(482798),
    c = n(11133),
    u = n(473919),
    d = n(170187),
    f = n(981631);
function _(e) {
    let { activity: t, textVariant: n, textClassName: _, hideIcon: p = !1, hideText: h = !1, hideTooltip: m = !1 } = e,
        { enabled: g } = a.c.useExperiment({ location: 'PresenceActivityStatus' }, { autoTrackExposure: !0 }),
        { enabled: E } = (0, l.C)({ location: 'PresenceActivityStatus' });
    if (p && h) return null;
    let { text: b, tooltip: v } = (0, c.Z)({
            activity: t,
            useDescriptiveActivity: E
        }),
        y = (0, i.EQ)(t)
            .when(s.Z, () => (g ? o.iWm : o.jje))
            .with({ type: f.IIU.PLAYING }, () => o.iWm)
            .with({ type: f.IIU.LISTENING }, () => o.RZG)
            .with({ type: f.IIU.WATCHING }, () => o.ARS)
            .with({ type: f.IIU.STREAMING }, () => o.ARS)
            .with({ type: f.IIU.COMPETING }, () => o.iWm)
            .otherwise(() => null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !p &&
                null != y &&
                (0, r.jsx)(u.Z, {
                    icon: y,
                    tooltip: h && !m ? v : void 0
                }),
            !h &&
                (0, r.jsx)(d.Z, {
                    variant: n,
                    className: _,
                    children: b
                })
        ]
    });
}
