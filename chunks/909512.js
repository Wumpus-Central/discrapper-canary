var n = r(222671);
t.exports = function (t) {
    var e = n(t);
    return {
        x: e.left,
        y: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top
    };
};
