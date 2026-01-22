var r = n(552597);
e.exports = function (e) {
    var t = e.getSelection();
    if (!t.rangeCount) return null;
    var n = r(t.getRangeAt(0)),
        i = n.top,
        a = n.right,
        s = n.bottom,
        o = n.left;
    return 0 === i && 0 === a && 0 === s && 0 === o ? null : n;
};
