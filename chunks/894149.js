n.d(t, { Z: () => s });
var i = n(528734),
    r = n(951516),
    a = n(217224);
function s(e, t) {
    (0, r.Z)(2, arguments);
    var n = (0, a.Z)(t);
    n % 7 == 0 && (n -= 7);
    var s = 1,
        o = (0, i.default)(e),
        l = (((n % 7) + 7) % 7 < s ? 7 : 0) + n - o.getUTCDay();
    return o.setUTCDate(o.getUTCDate() + l), o;
}
