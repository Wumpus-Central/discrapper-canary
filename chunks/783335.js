var t = Date.now;
e.exports = function (e) {
    var n = 0,
        r = 0;
    return function () {
        var i = t(),
            s = 16 - (i - r);
        if (((r = i), s > 0)) {
            if (++n >= 800) return arguments[0];
        } else n = 0;
        return e.apply(void 0, arguments);
    };
};
