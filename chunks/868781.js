n.d(t, { Z: () => I });
var r = n(54381),
    i = n(473749),
    a = n(657707),
    o = n(841784),
    s = n(906732),
    l = n(482798),
    c = n(750154),
    u = n(209698),
    d = n(802529),
    f = n(11133),
    _ = n(814454),
    p = n(473919),
    h = n(170187),
    m = n(532657),
    g = n(981631);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
let y = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, c.dS)(e)
        ? a.ewx
        : (0, o.Z)(e)
          ? t
              ? a.iWm
              : a.jje
          : e.type === g.IIU.PLAYING
            ? a.iWm
            : e.type === g.IIU.LISTENING
              ? a.RZG
              : e.type === g.IIU.WATCHING || e.type === g.IIU.STREAMING
                ? a.ARS
                : e.type === g.IIU.COMPETING
                  ? a.iWm
                  : null;
};
function O(e) {
    let {
            activity: t,
            textVariant: n,
            textClassName: a,
            iconClassName: o,
            hideIcon: c = !1,
            hideText: u = !1,
            hideTooltip: m = !1,
            canTruncate: g = !0,
        } = e,
        { descriptiveTextEnabled: E } = (0, d.f)({ location: "PresenceActivityStatus" }),
        { enableTopNavButton: b } = (0, l.Cq)({ location: "PresenceActivityStatus" }),
        { analyticsLocations: O } = (0, s.ZP)(),
        v = i.useCallback(() => {
            (0, _.A)({
                analyticsLocations: O,
                activityType: t.type,
                applicationId: t.application_id,
            });
        }, [O, t.application_id, t.type]);
    if (c && u) return null;
    let { text: I, tooltip: T } = (0, f.Z)(t, E || b),
        S = y(t),
        A = u && !m && null != T;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !c &&
                null != S &&
                (0, r.jsx)(p.Z, {
                    icon: S,
                    tooltipText: A ? T : void 0,
                    className: o,
                    onTooltipShow: A ? v : void 0,
                }),
            !u &&
                (0, r.jsx)(h.Z, {
                    variant: n,
                    className: a,
                    canTruncate: g,
                    hideTooltip: m,
                    children: I,
                }),
        ],
    });
}
function v(e) {
    let {
            activity: t,
            textVariant: n,
            textClassName: i,
            iconClassName: a,
            hideIcon: o = !1,
            hideText: s = !1,
            hideTooltip: c = !1,
            canTruncate: u = !0,
        } = e,
        { descriptiveTextEnabled: _ } = (0, d.f)({ location: "PresenceActivityStatusWithCombinedTooltip" }),
        { enableTopNavButton: h } = (0, l.Cq)({ location: "PresenceActivityStatusWithCombinedTooltip" }),
        { text: g, tooltip: E } = (0, f.Z)(t, _ || h),
        b = y(t),
        O = null != b && !o;
    return (0, r.jsx)(m.Z, {
        icon: O
            ? (0, r.jsx)(p.Z, {
                  icon: b,
                  className: a,
              })
            : void 0,
        text: g,
        textVariant: n,
        textClassName: i,
        hideTooltip: c,
        canTruncate: u,
        "aria-label": null != E ? E : "",
        hideText: s,
    });
}
function I(e) {
    return (0, u.b)({ location: "VoiceActivityStatusExperimentWrapper" })
        ? (0, r.jsx)(v, b({}, e))
        : (0, r.jsx)(O, b({}, e));
}
