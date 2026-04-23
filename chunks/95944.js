"use strict";
n.d(t, { A: () => s });
var r = n(29583),
    i = n(618027);
function s(e) {
    (0, i.A)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getFullYear(),
        s = t.getMonth(),
        a = new Date(0);
    return a.setFullYear(n, s + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
