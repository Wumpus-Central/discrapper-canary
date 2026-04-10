"use strict";
n.d(t, { a: () => E, l: () => A });
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(397927),
    a = n(775602),
    c = n(820883),
    o = n(837921),
    u = n(985018),
    d = n(96476);
let _ = o.Ay.getEnableHardwareAcceleration() ? l.JsQ : l.euF;
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = r.useState(!1),
        i = (0, s.bG)([a.A], () => a.A.useReducedMotion),
        l = r.useMemo(() => {
            let n = t || (!i && !e);
            return (0, c.q)(n);
        }, [t, i, e]);
    return {
        avatarSrc: l,
        eventHandlers: { onMouseEnter: r.useCallback(() => n(!0), []), onMouseLeave: r.useCallback(() => n(!1), []) },
    };
}
function A(e) {
    let { src: t } = e;
    return (0, i.jsx)("div", {
        className: d.H,
        children: (0, i.jsx)(_, { src: t, size: l._3J.SIZE_40, "aria-label": u.intl.string(u.t.hG1StD) }),
    });
}
