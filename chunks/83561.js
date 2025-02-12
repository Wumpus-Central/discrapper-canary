n.d(t, {
    S: () => h,
    m: () => _
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(607070),
    o = n(426563),
    c = n(998502),
    d = n(388032),
    u = n(523792);
let m = c.ZP.getEnableHardwareAcceleration() ? r.Xo$ : r.qEK;
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = l.useState(!1),
        i = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        r = l.useMemo(() => {
            let n = t || (!i && !e);
            return (0, o.j)(n);
        }, [t, i, e]);
    return {
        avatarSrc: r,
        eventHandlers: {
            onMouseEnter: l.useCallback(() => n(!0), []),
            onMouseLeave: l.useCallback(() => n(!1), [])
        }
    };
}
function h(e) {
    let { src: t } = e;
    return (0, i.jsx)('div', {
        className: u.avatarContainer,
        children: (0, i.jsx)(m, {
            src: t,
            size: r.EFr.SIZE_40,
            'aria-label': d.intl.string(d.t.hG1StL)
        })
    });
}
