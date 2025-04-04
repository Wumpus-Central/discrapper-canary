var r = n(764908),
    o = Error,
    a = r(''.replace),
    i = String(new o('zxcasd').stack),
    s = /\n\s*at [^:]*:[^\n]*/,
    c = s.test(i);
e.exports = function (e, t) {
    if (c && 'string' == typeof e && !o.prepareStackTrace) for (; t--; ) e = a(e, s, '');
    return e;
};
