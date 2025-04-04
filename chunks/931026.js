var r = n(658538),
    o = n(551114),
    a = String.prototype;
e.exports = function (e) {
    var t = e.repeat;
    return 'string' == typeof e || e === a || (r(a, e) && t === a.repeat) ? o : t;
};
