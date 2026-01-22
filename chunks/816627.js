var t = Object.prototype.hasOwnProperty;
e.exports = function (e, n, r) {
    if (!e) return null;
    var i = {};
    for (var a in e) t.call(e, a) && (i[a] = n.call(r, e[a], a, e));
    return i;
};
