var o = e(410323),
    c = Error,
    n = o("".replace),
    a = String(new c("zxcasd").stack),
    s = /\n\s*at [^:]*:[^\n]*/,
    i = s.test(a);
r.exports = function (r, t) {
    if (i && "string" == typeof r && !c.prepareStackTrace) for (; t--; ) r = n(r, s, "");
    return r;
};
