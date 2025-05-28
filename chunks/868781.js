n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    a = n(657707),
    o = n(456100),
    s = n(841784),
    l = n(906732),
    c = n(482798),
    u = n(750154),
    d = n(802529),
    f = n(11133),
    _ = n(814454),
    p = n(473919),
    h = n(170187),
    m = n(981631);
let g = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, u.dS)(e) ? a.ewx : (0, s.Z)(e) ? (t ? a.iWm : a.jje) : e.type === m.IIU.PLAYING ? a.iWm : e.type === m.IIU.LISTENING ? a.RZG : e.type === m.IIU.WATCHING || e.type === m.IIU.STREAMING ? a.ARS : e.type === m.IIU.COMPETING ? a.iWm : null;
};
function E(e) {
    let { activity: t, textVariant: n, textClassName: a, iconClassName: s, hideIcon: u = !1, hideText: m = !1, hideTooltip: E = !1, canTruncate: b = !0 } = e,
        { enabled: y } = o.c.useExperiment({ location: 'PresenceActivityStatus' }, { autoTrackExposure: !0 }),
        { descriptiveTextEnabled: O } = (0, d.f)({ location: 'PresenceActivityStatus' }),
        { enableTopNavButton: v } = (0, c.Cq)({ location: 'PresenceActivityStatus' }),
        { analyticsLocations: I } = (0, l.ZP)(),
        S = i.useCallback(() => {
            (0, _.A)({
                analyticsLocations: I,
                activityType: t.type,
                applicationId: t.application_id
            });
        }, [I, t.application_id, t.type]);
    if (u && m) return null;
    let { text: T, tooltip: A } = (0, f.Z)(t, O || v),
        N = g(t, y),
        C = m && !E && null != A;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !u &&
                null != N &&
                (0, r.jsx)(p.Z, {
                    icon: N,
                    tooltipText: C ? A : void 0,
                    className: s,
                    onTooltipShow: C ? S : void 0
                }),
            !m &&
                (0, r.jsx)(h.Z, {
                    variant: n,
                    className: a,
                    canTruncate: b,
                    hideTooltip: E,
                    children: T
                })
        ]
    });
}
