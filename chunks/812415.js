var r = n(410475);
e.exports = function (e) {
    var t = e.getSelection();
    return t.isCollapsed() ? null : r(e.getCurrentContent(), t);
};
