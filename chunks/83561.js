n.d(t, {
    S: () => f,
    m: () => m
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    l = n(607070),
    s = n(426563),
    c = n(998502),
    d = n(388032),
    u = n(237166);
let p = c.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK;
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = i.useState(!1),
        r = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        o = i.useMemo(() => {
            let n = t || (!r && !e);
            return (0, s.j)(n);
        }, [t, r, e]);
    return {
        avatarSrc: o,
        eventHandlers: {
            onMouseEnter: i.useCallback(() => n(!0), []),
            onMouseLeave: i.useCallback(() => n(!1), [])
        }
    };
}
function f(e) {
    let { src: t } = e;
    return (0, r.jsx)('div', {
        className: u.avatarContainer,
        children: (0, r.jsx)(p, {
            src: t,
            size: o.EFr.SIZE_40,
            'aria-label': d.NW.string(d.t.hG1StL)
        })
    });
}
