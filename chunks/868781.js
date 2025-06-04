n.d(t, { Z: () => S });
var r = n(255367),
    i = n(73800),
    o = n(657707),
    a = n(456100),
    s = n(841784),
    l = n(906732),
    c = n(482798),
    u = n(750154),
    d = n(209698),
    f = n(802529),
    _ = n(11133),
    p = n(814454),
    h = n(473919),
    m = n(170187),
    g = n(532657),
    E = n(981631);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
let O = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, u.dS)(e) ? o.ewx : (0, s.Z)(e) ? (t ? o.iWm : o.jje) : e.type === E.IIU.PLAYING ? o.iWm : e.type === E.IIU.LISTENING ? o.RZG : e.type === E.IIU.WATCHING || e.type === E.IIU.STREAMING ? o.ARS : e.type === E.IIU.COMPETING ? o.iWm : null;
};
function v(e) {
    let { activity: t, textVariant: n, textClassName: o, iconClassName: s, hideIcon: u = !1, hideText: d = !1, hideTooltip: g = !1, canTruncate: E = !0 } = e,
        { enabled: b } = a.c.useExperiment({ location: 'PresenceActivityStatus' }, { autoTrackExposure: !0 }),
        { descriptiveTextEnabled: y } = (0, f.f)({ location: 'PresenceActivityStatus' }),
        { enableTopNavButton: v } = (0, c.Cq)({ location: 'PresenceActivityStatus' }),
        { analyticsLocations: I } = (0, l.ZP)(),
        S = i.useCallback(() => {
            (0, p.A)({
                analyticsLocations: I,
                activityType: t.type,
                applicationId: t.application_id
            });
        }, [I, t.application_id, t.type]);
    if (u && d) return null;
    let { text: T, tooltip: A } = (0, _.Z)(t, y || v),
        N = O(t, b),
        C = d && !g && null != A;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !u &&
                null != N &&
                (0, r.jsx)(h.Z, {
                    icon: N,
                    tooltipText: C ? A : void 0,
                    className: s,
                    onTooltipShow: C ? S : void 0
                }),
            !d &&
                (0, r.jsx)(m.Z, {
                    variant: n,
                    className: o,
                    canTruncate: E,
                    hideTooltip: g,
                    children: T
                })
        ]
    });
}
function I(e) {
    let { activity: t, textVariant: n, textClassName: i, iconClassName: o, hideIcon: s = !1, hideText: l = !1, hideTooltip: u = !1, canTruncate: d = !0 } = e,
        { enabled: p } = a.c.useExperiment({ location: 'PresenceActivityStatusWithCombinedTooltip' }, { autoTrackExposure: !0 }),
        { descriptiveTextEnabled: m } = (0, f.f)({ location: 'PresenceActivityStatusWithCombinedTooltip' }),
        { enableTopNavButton: E } = (0, c.Cq)({ location: 'PresenceActivityStatusWithCombinedTooltip' }),
        { text: b, tooltip: y } = (0, _.Z)(t, m || E),
        v = O(t, p),
        I = null != v && !s;
    return (0, r.jsx)(g.Z, {
        icon: I
            ? (0, r.jsx)(h.Z, {
                  icon: v,
                  className: o
              })
            : void 0,
        text: b,
        textVariant: n,
        textClassName: i,
        hideTooltip: u,
        canTruncate: d,
        'aria-label': null != y ? y : '',
        hideText: l
    });
}
function S(e) {
    return (0, d.b)({ location: 'VoiceActivityStatusExperimentWrapper' }) ? (0, r.jsx)(I, y({}, e)) : (0, r.jsx)(v, y({}, e));
}
