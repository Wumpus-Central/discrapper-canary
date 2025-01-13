n.d(t, {
    S: function () {
        return f;
    },
    m: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(607070),
    s = n(426563),
    c = n(998502),
    d = n(388032),
    u = n(657733);
let m = c.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = r.useState(!1),
        i = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        a = r.useMemo(() => {
            let n = t || (!i && !e);
            return (0, s.j)(n);
        }, [t, i, e]),
        c = r.useCallback(() => n(!0), []);
    return {
        avatarSrc: a,
        eventHandlers: {
            onMouseEnter: c,
            onMouseLeave: r.useCallback(() => n(!1), [])
        }
    };
}
function f(e) {
    let { src: t } = e;
    return (0, i.jsx)('div', {
        className: u.avatarContainer,
        children: (0, i.jsx)(m, {
            src: t,
            size: a.AvatarSizes.SIZE_40,
            'aria-label': d.intl.string(d.t.hG1StL)
        })
    });
}
