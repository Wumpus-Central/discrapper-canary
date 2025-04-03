var n = r(712672);
t.exports = function (t) {
    var e = n(t),
        r = 0,
        i = 0,
        o = 0,
        a = 0;
    if (e.length) {
        if (e.length > 1 && 0 === e[0].width) {
            var u = e[1];
            (r = u.top), (i = u.right), (o = u.bottom), (a = u.left);
        } else {
            var s = e[0];
            (r = s.top), (i = s.right), (o = s.bottom), (a = s.left);
        }
        for (var c = 1; c < e.length; c++) {
            var l = e[c];
            0 !== l.height && 0 !== l.width && ((r = Math.min(r, l.top)), (i = Math.max(i, l.right)), (o = Math.max(o, l.bottom)), (a = Math.min(a, l.left)));
        }
    }
    return {
        top: r,
        right: i,
        bottom: o,
        left: a,
        width: i - a,
        height: o - r
    };
};
