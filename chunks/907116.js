var r = n(573964),
    i = n(450030);
function a(e) {
    return null == e ? e : String(e);
}
e.exports = function (e, t) {
    var n;
    if (window.getComputedStyle && (n = window.getComputedStyle(e, null))) return a(n.getPropertyValue(i(t)));
    if (document.defaultView && document.defaultView.getComputedStyle) {
        if ((n = document.defaultView.getComputedStyle(e, null))) return a(n.getPropertyValue(i(t)));
        if ("display" === t) return "none";
    }
    return e.currentStyle
        ? "float" === t
            ? a(e.currentStyle.cssFloat || e.currentStyle.styleFloat)
            : a(e.currentStyle[r(t)])
        : a(e.style && e.style[r(t)]);
};
