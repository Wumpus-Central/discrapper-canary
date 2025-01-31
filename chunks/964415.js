n.d(t, { Z: () => a });
var i = n(528734),
    r = n(951516);
function a(e) {
    (0, r.Z)(1, arguments);
    var t = 1,
        n = (0, i.default)(e),
        a = n.getUTCDay(),
        s = (a < t ? 7 : 0) + a - t;
    return n.setUTCDate(n.getUTCDate() - s), n.setUTCHours(0, 0, 0, 0), n;
}
