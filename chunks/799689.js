e.exports = function () {
    var e,
        t = this.constructor;
    if (!t.REVERSE_MAP)
        for (var n in ((t.REVERSE_MAP = {}), (e = r(883134))))
            (n > 95 && n < 112) || (e.hasOwnProperty(n) && (t.REVERSE_MAP[e[n]] = n));
    return t.REVERSE_MAP;
};
