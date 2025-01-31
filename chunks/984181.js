n.d(t, { Z: () => a });
var i = n(528734),
    r = n(951516);
function a(e) {
    (0, r.Z)(1, arguments);
    var t = (0, i.default)(e),
        n = t.getFullYear(),
        a = t.getMonth(),
        s = new Date(0);
    return s.setFullYear(n, a + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
