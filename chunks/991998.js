n.d(t, { Z: () => s });
var r = n(528734),
    i = n(995638),
    o = n(951516);
function a(e, t) {
    var n = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
    return n < 0 ? -1 : n > 0 ? 1 : n;
}
function s(e, t) {
    (0, o.Z)(2, arguments);
    var n = (0, r.default)(e),
        s = (0, r.default)(t),
        l = a(n, s),
        c = Math.abs((0, i.default)(n, s));
    n.setDate(n.getDate() - l * c);
    var u = Number(a(n, s) === -l),
        d = l * (c - u);
    return 0 === d ? 0 : d;
}
