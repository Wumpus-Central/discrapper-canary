var n = e(374316),
    o = TypeError;
r.exports = function (r) {
    var t = n(r, "number");
    if ("number" == typeof t) throw new o("Can't convert number to bigint");
    return BigInt(t);
};
