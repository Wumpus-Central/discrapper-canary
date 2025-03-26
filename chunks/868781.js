n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(657707),
    o = n(456100),
    a = n(841784),
    s = n(482798),
    l = n(11133),
    c = n(473919),
    u = n(170187),
    d = n(981631);
let f = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, a.Z)(e) ? (t ? i.iWm : i.jje) : e.type === d.IIU.PLAYING ? i.iWm : e.type === d.IIU.LISTENING ? i.RZG : e.type === d.IIU.WATCHING || e.type === d.IIU.STREAMING ? i.ARS : e.type === d.IIU.COMPETING ? i.iWm : null;
};
function _(e) {
    let { activity: t, textVariant: n, textClassName: i, hideIcon: a = !1, hideText: d = !1, hideTooltip: _ = !1 } = e,
        { enabled: p } = o.c.useExperiment({ location: 'PresenceActivityStatus' }, { autoTrackExposure: !0 }),
        { enabled: h } = (0, s.C)({ location: 'PresenceActivityStatus' });
    if (a && d) return null;
    let { text: m, tooltip: g } = (0, l.Z)({
            activity: t,
            useDescriptiveActivity: h
        }),
        E = f(t, p);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !a &&
                null != E &&
                (0, r.jsx)(c.Z, {
                    icon: E,
                    tooltipText: d && !_ ? g : void 0
                }),
            !d &&
                (0, r.jsx)(u.Z, {
                    variant: n,
                    className: i,
                    children: m
                })
        ]
    });
}
