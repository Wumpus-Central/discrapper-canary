n.d(t, { Z: () => a });
var r = n(528734),
    i = n(951516);
function a(e) {
    (0, i.Z)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getFullYear(),
        a = t.getMonth(),
        o = new Date(0);
    return o.setFullYear(n, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
