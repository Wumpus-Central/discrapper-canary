n.d(t, {
    a: () => p,
    l: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(775602),
    l = n(820883),
    c = n(837921),
    u = n(985018),
    d = n(906135);
let f = c.Ay.getEnableHardwareAcceleration() ? s.JsQ : s.euF;

function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = i.useState(!1),
        r = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        s = i.useMemo(() => {
            let n = t || (!r && !e);
            return (0, l.q)(n);
        }, [t, r, e]);
    return {
        avatarSrc: s,
        eventHandlers: {
            onMouseEnter: i.useCallback(() => n(!0), []),
            onMouseLeave: i.useCallback(() => n(!1), []),
        },
    };
}

function _(e) {
    let { src: t } = e;
    return (0, r.jsx)("div", {
        className: d.H,
        children: (0, r.jsx)(f, {
            src: t,
            size: s._3J.SIZE_40,
            "aria-label": u.intl.string(u.t.hG1StD),
        }),
    });
}
