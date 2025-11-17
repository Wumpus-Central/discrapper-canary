var r = n(276263);
e.exports = function (e) {
    var t = r(e),
        n = 0,
        i = 0,
        a = 0,
        o = 0;
    if (t.length) {
        if (t.length > 1 && 0 === t[0].width) {
            var s = t[1];
            (n = s.top), (i = s.right), (a = s.bottom), (o = s.left);
        } else {
            var l = t[0];
            (n = l.top), (i = l.right), (a = l.bottom), (o = l.left);
        }
        for (var c = 1; c < t.length; c++) {
            var u = t[c];
            0 !== u.height &&
                0 !== u.width &&
                ((n = Math.min(n, u.top)),
                (i = Math.max(i, u.right)),
                (a = Math.max(a, u.bottom)),
                (o = Math.min(o, u.left)));
        }
    }
    return {
        top: n,
        right: i,
        bottom: a,
        left: o,
        width: i - o,
        height: a - n,
    };
};
