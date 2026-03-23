var o = e(410323),
    n = Error,
    a = o("".replace),
    c = String(new n("zxcasd").stack),
    s = /\n\s*at [^:]*:[^\n]*/,
    i = s.test(c);
r.exports = function (r, t) {
    if (i && "string" == typeof r && !n.prepareStackTrace) for (; t--; ) r = a(r, s, "");
    return r;
};
