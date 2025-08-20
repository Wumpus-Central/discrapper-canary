e.exports = function (e) {
    if (!e || !("ownerDocument" in e)) return !1;
    if ("ownerDocument" in e) {
        var t = e;
        if (!t.ownerDocument.defaultView) return t instanceof Node;
        if (t instanceof t.ownerDocument.defaultView.Node) return !0;
    }
    return !1;
};
