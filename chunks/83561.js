n.d(t, {
    S: () => f,
    m: () => m
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(607070),
    s = n(426563),
    c = n(998502),
    u = n(388032),
    d = n(860918);
let p = c.ZP.getEnableHardwareAcceleration() ? l.Xo$ : l.qEK;
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = i.useState(!1),
        r = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        l = i.useMemo(() => {
            let n = t || (!r && !e);
            return (0, s.j)(n);
        }, [t, r, e]);
    return {
        avatarSrc: l,
        eventHandlers: {
            onMouseEnter: i.useCallback(() => n(!0), []),
            onMouseLeave: i.useCallback(() => n(!1), [])
        }
    };
}
function f(e) {
    let { src: t } = e;
    return (0, r.jsx)('div', {
        className: d.avatarContainer,
        children: (0, r.jsx)(p, {
            src: t,
            size: l.EFr.SIZE_40,
            'aria-label': u.NW.string(u.t.hG1StL)
        })
    });
}
