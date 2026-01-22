var t = 800,
    n = 16,
    r = Date.now;
e.exports = function (e) {
    var i = 0,
        a = 0;
    return function () {
        var s = r(),
            o = n - (s - a);
        if (((a = s), o > 0)) {
            if (++i >= t) return arguments[0];
        } else i = 0;
        return e.apply(void 0, arguments);
    };
};
