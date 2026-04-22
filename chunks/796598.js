"use strict";
n.d(t, { Dg: () => s, b$: () => a, yA: () => o });
var r = n(156872),
    i = n(636014);
function s(e) {
    var t = 1 === e.nodeType ? e : e.parentElement;
    if (!t) return null;
    var n = t.getBoundingClientRect(),
        r = n.top;
    return { x: n.left, y: r };
}
function a(e) {
    return { x: e.clientX, y: e.clientY };
}
function o(e, t, n, a, o) {
    var l,
        u,
        d,
        c,
        _ = "IMG" === t.nodeName && ((0, r.g)() || !(null != (l = document.documentElement) && l.contains(t))),
        f = s(_ ? e : t),
        E = { x: n.x - f.x, y: n.y - f.y },
        h = e.offsetWidth,
        p = e.offsetHeight,
        m = a.anchorX,
        g = a.anchorY,
        A =
            ((u = _ ? t.width : h),
            (d = _ ? t.height : p),
            (0, r.n)() && _ && ((d /= window.devicePixelRatio), (u /= window.devicePixelRatio)),
            { dragPreviewWidth: u, dragPreviewHeight: d }),
        I = A.dragPreviewWidth,
        T = A.dragPreviewHeight,
        S = o.offsetX,
        y = o.offsetY;
    return {
        x: 0 === S || S ? S : new i.f([0, 0.5, 1], [E.x, (E.x / h) * I, E.x + I - h]).interpolate(m),
        y:
            0 === y || y
                ? y
                : ((c = new i.f([0, 0.5, 1], [E.y, (E.y / p) * T, E.y + T - p]).interpolate(g)),
                  (0, r.n)() && _ && (c += (window.devicePixelRatio - 1) * T),
                  c),
    };
}
