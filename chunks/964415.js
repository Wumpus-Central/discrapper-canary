n.d(t, { Z: () => a });
var r = n(528734),
    i = n(951516);
function a(e) {
    (0, i.Z)(1, arguments);
    var t = 1,
        n = (0, r.default)(e),
        a = n.getUTCDay(),
        o = 7 * (a < t) + a - t;
    return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
