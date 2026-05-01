var E = t(410323),
    c = Error,
    e = E("".replace),
    R = String(new c("zxcasd").stack),
    s = /\n\s*at [^:]*:[^\n]*/,
    n = s.test(R);
r.exports = function (r, o) {
    if (n && "string" == typeof r && !c.prepareStackTrace) for (; o--; ) r = e(r, s, "");
    return r;
};
