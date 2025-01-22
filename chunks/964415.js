r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(528734),
    a = r(951516);
function o(e) {
    (0, a.Z)(1, arguments);
    var n = 1,
        r = (0, i.default)(e),
        o = r.getUTCDay(),
        s = (o < n ? 7 : 0) + o - n;
    return r.setUTCDate(r.getUTCDate() - s), r.setUTCHours(0, 0, 0, 0), r;
}
