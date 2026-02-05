"use strict";
n.r(t), n.d(t, { default: () => o });
var r = n(84776),
    i = n(805195),
    a = n(618027),
    s = 864e5;
function o(e, t) {
    (0, a.A)(2, arguments);
    var n = (0, i.default)(e),
        o = (0, i.default)(t);
    return Math.round((n.getTime() - (0, r.A)(n) - (o.getTime() - (0, r.A)(o))) / s);
}
