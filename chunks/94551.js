"use strict";
var n = e(683570),
    o = e(675879),
    s = n("Symbol"),
    i = s.keyFor,
    u = o(s.prototype.valueOf);
t.exports =
    s.isRegisteredSymbol ||
    function (t) {
        try {
            return void 0 !== i(u(t));
        } catch (t) {
            return !1;
        }
    };
