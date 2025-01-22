r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(528734),
    a = r(951516);
function o(e) {
    (0, a.Z)(1, arguments);
    var n = (0, i.default)(e),
        r = n.getFullYear(),
        o = n.getMonth(),
        s = new Date(0);
    return s.setFullYear(r, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
