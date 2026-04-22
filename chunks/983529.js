"use strict";
n.r(t), n.d(t, { default: () => s });
var r = n(29583),
    i = n(618027);
function s(e) {
    (0, i.A)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getMonth();
    return t.setMonth(n - (n % 3), 1), t.setHours(0, 0, 0, 0), t;
}
