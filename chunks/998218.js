t.exports = function (t) {
    var e = (t ? t.ownerDocument || t : document).defaultView || window;
    return !!(t && ('function' == typeof e.Node ? t instanceof e.Node : 'object' == typeof t && 'number' == typeof t.nodeType && 'string' == typeof t.nodeName));
};
