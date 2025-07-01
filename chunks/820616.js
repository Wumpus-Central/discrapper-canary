var n = r(580983),
    i = r(179122),
    s = r(880181),
    a = r(796138),
    o = r(16721),
    u = TypeError;
t.exports = function (t, e) {
    var r = t.exec;
    if (s(r)) {
        var h = n(r, t, e);
        return (null !== h && i(h), h);
    }
    if ('RegExp' === a(t)) return n(o, t, e);
    throw new u('RegExp#exec called on incompatible receiver');
};
