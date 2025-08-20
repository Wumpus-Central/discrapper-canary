n.d(t, {
    S: () => f,
    m: () => m,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(481060),
    a = n(607070),
    s = n(426563),
    c = n(998502),
    u = n(388032),
    d = n(545869);
let p = c.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK;
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = i.useState(!1),
        r = (0, l.e7)([a.Z], () => a.Z.useReducedMotion),
        o = i.useMemo(() => {
            let n = t || (!r && !e);
            return (0, s.j)(n);
        }, [t, r, e]);
    return {
        avatarSrc: o,
        eventHandlers: {
            onMouseEnter: i.useCallback(() => n(!0), []),
            onMouseLeave: i.useCallback(() => n(!1), []),
        },
    };
}
function f(e) {
    let { src: t } = e;
    return (0, r.jsx)("div", {
        className: d.avatarContainer,
        children: (0, r.jsx)(p, {
            src: t,
            size: o.EFr.SIZE_40,
            "aria-label": u.intl.string(u.t.hG1StL),
        }),
    });
}
