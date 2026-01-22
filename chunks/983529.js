n.r(t), n.d(t, { default: () => a });
var r = n(29583),
    i = n(618027);
function a(e) {
    (0, i.A)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getMonth(),
        a = n - (n % 3);
    return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t;
}
