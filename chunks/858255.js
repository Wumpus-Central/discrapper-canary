var n = r(322273),
    i = r(550782);
function o(t) {
    return null == t ? t : String(t);
}
t.exports = function (t, e) {
    var r;
    if (window.getComputedStyle && (r = window.getComputedStyle(t, null))) return o(r.getPropertyValue(i(e)));
    if (document.defaultView && document.defaultView.getComputedStyle) {
        if ((r = document.defaultView.getComputedStyle(t, null))) return o(r.getPropertyValue(i(e)));
        if ('display' === e) return 'none';
    }
    return t.currentStyle ? ('float' === e ? o(t.currentStyle.cssFloat || t.currentStyle.styleFloat) : o(t.currentStyle[n(e)])) : o(t.style && t.style[n(e)]);
};
