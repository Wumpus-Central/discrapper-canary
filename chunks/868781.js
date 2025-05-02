n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(657707),
    o = n(456100),
    a = n(841784),
    s = n(482798),
    l = n(750154),
    c = n(802529),
    u = n(11133),
    d = n(473919),
    f = n(170187),
    _ = n(981631);
let p = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, l.dS)(e) ? i.ewx : (0, a.Z)(e) ? (t ? i.iWm : i.jje) : e.type === _.IIU.PLAYING ? i.iWm : e.type === _.IIU.LISTENING ? i.RZG : e.type === _.IIU.WATCHING || e.type === _.IIU.STREAMING ? i.ARS : e.type === _.IIU.COMPETING ? i.iWm : null;
};
function h(e) {
    let { activity: t, textVariant: n, textClassName: i, iconClassName: a, hideIcon: l = !1, hideText: _ = !1, hideTooltip: h = !1 } = e,
        { enabled: m } = o.c.useExperiment({ location: 'PresenceActivityStatus' }, { autoTrackExposure: !0 }),
        { descriptiveTextEnabled: g } = (0, c.f)({ location: 'PresenceActivityStatus' }),
        { enableTopNavButton: E } = (0, s.Cq)({ location: 'PresenceActivityStatus' });
    if (l && _) return null;
    let { text: b, tooltip: y } = (0, u.Z)(t, g || E),
        O = p(t, m);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !l &&
                null != O &&
                (0, r.jsx)(d.Z, {
                    icon: O,
                    tooltipText: _ && !h ? y : void 0,
                    className: a
                }),
            !_ &&
                (0, r.jsx)(f.Z, {
                    variant: n,
                    className: i,
                    children: b
                })
        ]
    });
}
