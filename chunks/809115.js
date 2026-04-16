"use strict";
n.d(t, { a: () => E, l: () => A });
var i = n(627968),
    r = n(64700),
    s = n(311907),
    a = n(397927),
    l = n(775602),
    o = n(820883),
    c = n(837921),
    u = n(985018),
    d = n(609836);
let _ = c.Ay.getEnableHardwareAcceleration() ? a.JsQ : a.euF;
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = r.useState(!1),
        i = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        a = r.useMemo(() => {
            let n = t || (!i && !e);
            return (0, o.q)(n);
        }, [t, i, e]);
    return {
        avatarSrc: a,
        eventHandlers: { onMouseEnter: r.useCallback(() => n(!0), []), onMouseLeave: r.useCallback(() => n(!1), []) },
    };
}
function A(e) {
    let { src: t } = e;
    return (0, i.jsx)("div", {
        className: d.H,
        children: (0, i.jsx)(_, { src: t, size: a._3J.SIZE_40, "aria-label": u.intl.string(u.t.hG1StD) }),
    });
}
