var n = e(308227),
    o = e(452162);
t.exports = function (t, r) {
    var e = o[t + "Prototype"],
        s = e && e[r];
    if (s) return s;
    var i = n[t],
        u = i && i.prototype;
    return u && u[r];
};
