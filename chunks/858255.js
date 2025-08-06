var r = n(322273),
    i = n(550782);
function o(e) {
    return null == e ? e : String(e);
}
e.exports = function (e, t) {
    var n;
    if (window.getComputedStyle && (n = window.getComputedStyle(e, null))) return o(n.getPropertyValue(i(t)));
    if (document.defaultView && document.defaultView.getComputedStyle) {
        if ((n = document.defaultView.getComputedStyle(e, null))) return o(n.getPropertyValue(i(t)));
        if ("display" === t) return "none";
    }
    return e.currentStyle
        ? "float" === t
            ? o(e.currentStyle.cssFloat || e.currentStyle.styleFloat)
            : o(e.currentStyle[r(t)])
        : o(e.style && e.style[r(t)]);
};
