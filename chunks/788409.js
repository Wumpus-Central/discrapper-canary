"use strict";
var n = r(741623),
    i = r(315646),
    o = r(363364),
    a = r(12161),
    s = r(158056) || a || o;
e.exports = function () {
    var e,
        t = {
            assert: function (e) {
                if (!t.has(e)) throw new n("Side channel does not contain " + i(e));
            },
            delete: function (t) {
                return !!e && e.delete(t);
            },
            get: function (t) {
                return e && e.get(t);
            },
            has: function (t) {
                return !!e && e.has(t);
            },
            set: function (t, r) {
                e || (e = s()), e.set(t, r);
            },
        };
    return t;
};
