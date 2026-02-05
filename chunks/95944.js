"use strict";
n.d(t, { A: () => a });
var r = n(29583),
    i = n(618027);
function a(e) {
    (0, i.A)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getFullYear(),
        a = t.getMonth(),
        s = new Date(0);
    return s.setFullYear(n, a + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
