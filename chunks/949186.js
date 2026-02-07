"use strict";
var r = n(410323),
    i = Error,
    a = r("".replace),
    s = (function (e) {
        return String(new i(e).stack);
    })("zxcasd"),
    o = /\n\s*at [^:]*:[^\n]*/,
    l = o.test(s);
e.exports = function (e, t) {
    if (l && "string" == typeof e && !i.prepareStackTrace) for (; t--; ) e = a(e, o, "");
    return e;
};
