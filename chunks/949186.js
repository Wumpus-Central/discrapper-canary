"use strict";
var n = r(410323),
    a = Error,
    s = n("".replace),
    i = String(new a("zxcasd").stack),
    o = /\n\s*at [^:]*:[^\n]*/,
    l = o.test(i);
e.exports = function (e, t) {
    if (l && "string" == typeof e && !a.prepareStackTrace) for (; t--; ) e = s(e, o, "");
    return e;
};
