var o = e(410323),
    n = Error,
    c = o("".replace),
    a = String(new n("zxcasd").stack),
    s = /\n\s*at [^:]*:[^\n]*/,
    i = s.test(a);
r.exports = function (r, t) {
    if (i && "string" == typeof r && !n.prepareStackTrace) for (; t--; ) r = c(r, s, "");
    return r;
};
