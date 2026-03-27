n.d(t, { a: () => m, l: () => A });
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(397927),
    s = n(775602),
    o = n(820883),
    c = n(837921),
    d = n(985018),
    u = n(852697);
let _ = c.Ay.getEnableHardwareAcceleration() ? r.JsQ : r.euF;
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = a.useState(!1),
        i = (0, l.bG)([s.A], () => s.A.useReducedMotion),
        r = a.useMemo(() => {
            let n = t || (!i && !e);
            return (0, o.q)(n);
        }, [t, i, e]);
    return {
        avatarSrc: r,
        eventHandlers: { onMouseEnter: a.useCallback(() => n(!0), []), onMouseLeave: a.useCallback(() => n(!1), []) },
    };
}
function A(e) {
    let { src: t } = e;
    return (0, i.jsx)("div", {
        className: u.H,
        children: (0, i.jsx)(_, { src: t, size: r._3J.SIZE_40, "aria-label": d.intl.string(d.t.hG1StD) }),
    });
}
