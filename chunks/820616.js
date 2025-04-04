var r = n(580983),
    i = n(179122),
    o = n(880181),
    a = n(796138),
    s = n(16721),
    l = TypeError;
e.exports = function (e, t) {
    var n = e.exec;
    if (o(n)) {
        var c = r(n, e, t);
        return null !== c && i(c), c;
    }
    if ('RegExp' === a(e)) return r(s, e, t);
    throw new l('RegExp#exec called on incompatible receiver');
};
