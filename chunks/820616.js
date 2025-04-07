var n = r(580983),
    i = r(179122),
    o = r(880181),
    a = r(796138),
    c = r(16721),
    u = TypeError;
t.exports = function (t, e) {
    var r = t.exec;
    if (o(r)) {
        var s = n(r, t, e);
        return null !== s && i(s), s;
    }
    if ('RegExp' === a(t)) return n(c, t, e);
    throw new u('RegExp#exec called on incompatible receiver');
};
