r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(528734),
    a = r(995638),
    o = r(951516);
function s(e, n) {
    var r = e.getFullYear() - n.getFullYear() || e.getMonth() - n.getMonth() || e.getDate() - n.getDate() || e.getHours() - n.getHours() || e.getMinutes() - n.getMinutes() || e.getSeconds() - n.getSeconds() || e.getMilliseconds() - n.getMilliseconds();
    return r < 0 ? -1 : r > 0 ? 1 : r;
}
function l(e, n) {
    (0, o.Z)(2, arguments);
    var r = (0, i.default)(e),
        l = (0, i.default)(n),
        u = s(r, l),
        c = Math.abs((0, a.default)(r, l));
    r.setDate(r.getDate() - u * c);
    var d = Number(s(r, l) === -u),
        f = u * (c - d);
    return 0 === f ? 0 : f;
}
