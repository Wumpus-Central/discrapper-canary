n.d(t, { a: () => h, l: () => g });
var i = n(477900),
    l = n(582128),
    s = n(17928),
    a = n(97808),
    r = n(778712),
    o = n(775602),
    c = n(3451),
    d = n(19575),
    u = n(375708),
    m = n(6829);
let x = d.Ay.getEnableHardwareAcceleration() ? a.Js : a.eu;
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = l.useState(!1),
        i = (0, s.bG)([o.Ay], () => o.Ay.useReducedMotion),
        a = l.useMemo(() => {
            let n = t || (!i && !e);
            return (0, c.q)(n);
        }, [t, i, e]);
    return {
        avatarSrc: a,
        eventHandlers: { onMouseEnter: l.useCallback(() => n(!0), []), onMouseLeave: l.useCallback(() => n(!1), []) },
    };
}
function g(e) {
    let { src: t } = e;
    return (0, i.jsx)("div", {
        className: m.H,
        children: (0, i.jsx)(x, { src: t, size: r._3.SIZE_40, "aria-label": u.intl.string(u.t.hG1StD) }),
    });
}
