n.d(t, {
    Dg: () => s,
    b$: () => o,
    yA: () => u,
});
var r = n(156872),
    i = n(636014),
    a = 1;
function s(e) {
    var t = e.nodeType === a ? e : e.parentElement;
    if (!t) return null;
    var n = t.getBoundingClientRect(),
        r = n.top;
    return {
        x: n.left,
        y: r,
    };
}
function o(e) {
    return {
        x: e.clientX,
        y: e.clientY,
    };
}
function l(e) {
    var t;
    return "IMG" === e.nodeName && ((0, r.g)() || !(null != (t = document.documentElement) && t.contains(e)));
}
function c(e, t, n, i) {
    var a = e ? t.width : n,
        s = e ? t.height : i;
    return (
        (0, r.n)() && e && ((s /= window.devicePixelRatio), (a /= window.devicePixelRatio)),
        {
            dragPreviewWidth: a,
            dragPreviewHeight: s,
        }
    );
}
function u(e, t, n, a, o) {
    var u = l(t),
        d = s(u ? e : t),
        f = {
            x: n.x - d.x,
            y: n.y - d.y,
        },
        p = e.offsetWidth,
        _ = e.offsetHeight,
        h = a.anchorX,
        m = a.anchorY,
        g = c(u, t, p, _),
        E = g.dragPreviewWidth,
        b = g.dragPreviewHeight,
        y = function () {
            var e = new i.f([0, 0.5, 1], [f.y, (f.y / _) * b, f.y + b - _]).interpolate(m);
            return (0, r.n)() && u && (e += (window.devicePixelRatio - 1) * b), e;
        },
        O = function () {
            return new i.f([0, 0.5, 1], [f.x, (f.x / p) * E, f.x + E - p]).interpolate(h);
        },
        A = o.offsetX,
        v = o.offsetY,
        S = 0 === v || v;
    return {
        x: 0 === A || A ? A : O(),
        y: S ? v : y(),
    };
}
