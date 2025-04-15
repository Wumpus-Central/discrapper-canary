n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(657707),
    o = n(456100),
    a = n(841784),
    s = n(482798),
    l = n(802529),
    c = n(11133),
    u = n(473919),
    d = n(170187),
    f = n(981631);
let _ = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, a.Z)(e) ? (t ? i.iWm : i.jje) : e.type === f.IIU.PLAYING ? i.iWm : e.type === f.IIU.LISTENING ? i.RZG : e.type === f.IIU.WATCHING || e.type === f.IIU.STREAMING ? i.ARS : e.type === f.IIU.COMPETING ? i.iWm : null;
};
function p(e) {
    let { activity: t, textVariant: n, textClassName: i, iconClassName: a, hideIcon: f = !1, hideText: p = !1, hideTooltip: h = !1 } = e,
        { enabled: m } = o.c.useExperiment({ location: 'PresenceActivityStatus' }, { autoTrackExposure: !0 }),
        { descriptiveTextEnabled: g } = (0, l.f)({ location: 'PresenceActivityStatus' }),
        { enabled: E } = (0, s.C)({ location: 'PresenceActivityStatus' });
    if (f && p) return null;
    let { text: b, tooltip: y } = (0, c.Z)(t, g || E),
        v = _(t, m);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !f &&
                null != v &&
                (0, r.jsx)(u.Z, {
                    icon: v,
                    tooltipText: p && !h ? y : void 0,
                    className: a
                }),
            !p &&
                (0, r.jsx)(d.Z, {
                    variant: n,
                    className: i,
                    children: b
                })
        ]
    });
}
