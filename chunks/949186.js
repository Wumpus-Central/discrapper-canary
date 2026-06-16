"use strict";
var i = n(410323),
    r = Error,
    s = i("".replace),
    a = String(new r("zxcasd").stack),
    o = /\n\s*at [^:]*:[^\n]*/,
    l = o.test(a);
e.exports = function (e, t) {
    if (l && "string" == typeof e && !r.prepareStackTrace) for (; t--; ) e = s(e, o, "");
    return e;
};
