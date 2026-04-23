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
        c,
        d,
        _ = "IMG" === t.nodeName && ((0, r.g)() || !(null != (l = document.documentElement) && l.contains(t))),
        f = s(_ ? e : t),
        p = { x: n.x - f.x, y: n.y - f.y },
        h = e.offsetWidth,
        E = e.offsetHeight,
        m = a.anchorX,
        g = a.anchorY,
        A =
            ((u = _ ? t.width : h),
            (c = _ ? t.height : E),
            (0, r.n)() && _ && ((c /= window.devicePixelRatio), (u /= window.devicePixelRatio)),
            { dragPreviewWidth: u, dragPreviewHeight: c }),
        I = A.dragPreviewWidth,
        T = A.dragPreviewHeight,
        S = o.offsetX,
        y = o.offsetY;
    return {
        x: 0 === S || S ? S : new i.f([0, 0.5, 1], [p.x, (p.x / h) * I, p.x + I - h]).interpolate(m),
        y:
            0 === y || y
                ? y
                : ((d = new i.f([0, 0.5, 1], [p.y, (p.y / E) * T, p.y + T - E]).interpolate(g)),
                  (0, r.n)() && _ && (d += (window.devicePixelRatio - 1) * T),
                  d),
    };
}
