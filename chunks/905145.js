var r = a(581031),
    n = Error,
    _ = r(''.replace),
    o = String(n('zxcasd').stack),
    i = /\n\s*at [^:]*:[^\n]*/,
    c = i.test(o);
t.exports = function (t, e) {
    if (c && 'string' == typeof t && !n.prepareStackTrace) for (; e--; ) t = _(t, i, '');
    return t;
};
