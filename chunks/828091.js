var r = a(42848),
    n = 1 / 0;
t.exports = function (t) {
    if ('string' == typeof t || r(t)) return t;
    var e = t + '';
    return '0' == e && 1 / t == -n ? '-0' : e;
};
