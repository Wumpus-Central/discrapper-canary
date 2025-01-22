r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(528734),
    a = r(951516),
    o = r(217224);
function s(e, n) {
    (0, a.Z)(2, arguments);
    var r = (0, o.Z)(n);
    r % 7 == 0 && (r -= 7);
    var s = 1,
        l = (0, i.default)(e),
        u = (((r % 7) + 7) % 7 < s ? 7 : 0) + r - l.getUTCDay();
    return l.setUTCDate(l.getUTCDate() + u), l;
}
