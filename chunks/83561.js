n.d(t, {
    S: () => _,
    m: () => p,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(607070),
    l = n(426563),
    c = n(998502),
    u = n(388032),
    d = n(545869);
let f = c.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK;
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = i.useState(!1),
        r = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        o = i.useMemo(() => {
            let n = t || (!r && !e);
            return (0, l.j)(n);
        }, [t, r, e]);
    return {
        avatarSrc: o,
        eventHandlers: {
            onMouseEnter: i.useCallback(() => n(!0), []),
            onMouseLeave: i.useCallback(() => n(!1), []),
        },
    };
}
function _(e) {
    let { src: t } = e;
    return (0, r.jsx)("div", {
        className: d.avatarContainer,
        children: (0, r.jsx)(f, {
            src: t,
            size: o.EFr.SIZE_40,
            "aria-label": u.intl.string(u.t.hG1StD),
        }),
    });
}
