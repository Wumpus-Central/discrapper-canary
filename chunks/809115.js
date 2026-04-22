"use strict";
n.d(t, { a: () => A, l: () => m });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(97808),
    a = n(778712),
    o = n(775602),
    c = n(820883),
    u = n(837921),
    d = n(985018),
    _ = n(609836);
let E = u.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu;
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = r.useState(!1),
        i = (0, l.bG)([o.A], () => o.A.useReducedMotion),
        s = r.useMemo(() => {
            let n = t || (!i && !e);
            return (0, c.q)(n);
        }, [t, i, e]);
    return {
        avatarSrc: s,
        eventHandlers: { onMouseEnter: r.useCallback(() => n(!0), []), onMouseLeave: r.useCallback(() => n(!1), []) },
    };
}
function m(e) {
    let { src: t } = e;
    return (0, i.jsx)("div", {
        className: _.H,
        children: (0, i.jsx)(E, { src: t, size: a._3.SIZE_40, "aria-label": d.intl.string(d.t.hG1StD) }),
    });
}
