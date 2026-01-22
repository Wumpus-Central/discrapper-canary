var r = n(668118);
e.exports = function (e) {
    var t = r(e);
    return {
        x: t.left,
        y: t.top,
        width: t.right - t.left,
        height: t.bottom - t.top,
    };
};
