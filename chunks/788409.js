"use strict";
var i = n(741623),
    r = n(315646),
    s = n(363364),
    a = n(12161),
    o = n(158056) || a || s;
e.exports = function () {
    var e,
        t = {
            assert: function (e) {
                if (!t.has(e)) throw new i("Side channel does not contain " + r(e));
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
            set: function (t, n) {
                e || (e = o()), e.set(t, n);
            },
        };
    return t;
};
