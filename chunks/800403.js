"use strict";
var n = e(486816),
    o = e(309270),
    s = /#|\.prototype\./,
    i = function (t, r) {
        var e = c[u(t)];
        return e === f || (e !== a && (o(r) ? n(r) : !!r));
    },
    u = (i.normalize = function (t) {
        return String(t).replace(s, ".").toLowerCase();
    }),
    c = (i.data = {}),
    a = (i.NATIVE = "N"),
    f = (i.POLYFILL = "P");
t.exports = i;
