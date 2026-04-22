"use strict";
n.r(t), n.d(t, { default: () => a });
var r = n(84776),
    i = n(805195),
    s = n(618027);
function a(e, t) {
    (0, s.A)(2, arguments);
    var n = (0, i.default)(e),
        a = (0, i.default)(t);
    return Math.round((n.getTime() - (0, r.A)(n) - (a.getTime() - (0, r.A)(a))) / 864e5);
}
