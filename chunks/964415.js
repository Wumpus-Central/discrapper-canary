n.d(t, { Z: () => o });
var r = n(528734),
    i = n(951516);
function o(e) {
    (0, i.Z)(1, arguments);
    var t = 1,
        n = (0, r.default)(e),
        o = n.getUTCDay(),
        a = 7 * (o < t) + o - t;
    return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
