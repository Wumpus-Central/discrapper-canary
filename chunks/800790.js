var r = a(292403),
    n = a(539339),
    o = Object.prototype.hasOwnProperty;
t.exports = function (t) {
    if (!r(t)) return n(t);
    var e = [];
    for (var a in Object(t)) o.call(t, a) && 'constructor' != a && e.push(a);
    return e;
};
