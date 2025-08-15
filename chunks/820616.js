var r = n(580983),
    i = n(179122),
    a = n(880181),
    o = n(796138),
    s = n(16721),
    l = TypeError;
e.exports = function (e, t) {
    var n = e.exec;
    if (a(n)) {
        var c = r(n, e, t);
        return null !== c && i(c), c;
    }
    if ("RegExp" === o(e)) return r(s, e, t);
    throw new l("RegExp#exec called on incompatible receiver");
};
