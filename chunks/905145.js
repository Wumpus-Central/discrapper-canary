var r = a(581031),
    n = Error,
    o = r(''.replace),
    _ = String(n('zxcasd').stack),
    i = /\n\s*at [^:]*:[^\n]*/,
    c = i.test(_);
t.exports = function (t, e) {
    if (c && 'string' == typeof t && !n.prepareStackTrace) for (; e--; ) t = o(t, i, '');
    return t;
};
