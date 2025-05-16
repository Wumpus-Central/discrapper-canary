var r = n(292403),
    i = n(539339),
    a = Object.prototype.hasOwnProperty;
e.exports = function (e) {
    if (!r(e)) return i(e);
    var t = [];
    for (var n in Object(e)) a.call(e, n) && 'constructor' != n && t.push(n);
    return t;
};
