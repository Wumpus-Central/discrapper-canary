"use strict";
n.r(t), n.d(t, { default: () => a });
var i = n(84776),
    r = n(805195),
    s = n(618027);
function a(e, t) {
    (0, s.A)(2, arguments);
    var n = (0, r.default)(e),
        a = (0, r.default)(t);
    return Math.round((n.getTime() - (0, i.A)(n) - (a.getTime() - (0, i.A)(a))) / 864e5);
}
