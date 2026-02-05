"use strict";
n.d(t, { Dg: () => s, b$: () => o, yA: () => c });
var r = n(156872),
    i = n(636014),
    a = 1;
function s(e) {
    var t = e.nodeType === a ? e : e.parentElement;
    if (!t) return null;
    var n = t.getBoundingClientRect(),
        r = n.top;
    return { x: n.left, y: r };
}
function o(e) {
    return { x: e.clientX, y: e.clientY };
}
function l(e) {
    var t;
    return "IMG" === e.nodeName && ((0, r.g)() || !(null != (t = document.documentElement) && t.contains(e)));
}
function u(e, t, n, i) {
    var a = e ? t.width : n,
        s = e ? t.height : i;
    return (
        (0, r.n)() && e && ((s /= window.devicePixelRatio), (a /= window.devicePixelRatio)),
        { dragPreviewWidth: a, dragPreviewHeight: s }
    );
}
function c(e, t, n, a, o) {
    var c = l(t),
        d = s(c ? e : t),
        _ = { x: n.x - d.x, y: n.y - d.y },
        f = e.offsetWidth,
        p = e.offsetHeight,
        h = a.anchorX,
        m = a.anchorY,
        g = u(c, t, f, p),
        E = g.dragPreviewWidth,
        A = g.dragPreviewHeight,
        I = function () {
            var e = new i.f([0, 0.5, 1], [_.y, (_.y / p) * A, _.y + A - p]).interpolate(m);
            return (0, r.n)() && c && (e += (window.devicePixelRatio - 1) * A), e;
        },
        T = function () {
            return new i.f([0, 0.5, 1], [_.x, (_.x / f) * E, _.x + E - f]).interpolate(h);
        },
        y = o.offsetX,
        S = o.offsetY,
        v = 0 === S || S;
    return { x: 0 === y || y ? y : T(), y: v ? S : I() };
}
