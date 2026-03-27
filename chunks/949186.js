"use strict";
var r = n(410323),
    i = Error,
    s = r("".replace),
    a = (function (e) {
        return String(new i(e).stack);
    })("zxcasd"),
    o = /\n\s*at [^:]*:[^\n]*/,
    l = o.test(a);
e.exports = function (e, t) {
    if (l && "string" == typeof e && !i.prepareStackTrace) for (; t--; ) e = s(e, o, "");
    return e;
};
