var r = n(292403),
    i = n(539339),
    o = Object.prototype.hasOwnProperty;
e.exports = function (e) {
    if (!r(e)) return i(e);
    var t = [];
    for (var n in Object(e)) o.call(e, n) && 'constructor' != n && t.push(n);
    return t;
};
