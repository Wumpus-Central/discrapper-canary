n.d(t, { a: () => _, l: () => h });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(775602),
    o = n(820883),
    d = n(837921),
    c = n(985018),
    u = n(906135);
let m = d.Ay.getEnableHardwareAcceleration() ? r.JsQ : r.euF;
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = l.useState(!1),
        i = (0, a.bG)([s.A], () => s.A.useReducedMotion),
        r = l.useMemo(() => {
            let n = t || (!i && !e);
            return (0, o.q)(n);
        }, [t, i, e]);
    return {
        avatarSrc: r,
        eventHandlers: { onMouseEnter: l.useCallback(() => n(!0), []), onMouseLeave: l.useCallback(() => n(!1), []) },
    };
}
function h(e) {
    let { src: t } = e;
    return (0, i.jsx)("div", {
        className: u.H,
        children: (0, i.jsx)(m, { src: t, size: r._3J.SIZE_40, "aria-label": c.intl.string(c.t.hG1StD) }),
    });
}
