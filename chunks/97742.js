var i = r(56135),
    a = r(886985),
    o = r(290677),
    s = r(158698),
    l = 1 / 0,
    u = i ? i.prototype : void 0,
    c = u ? u.toString : void 0;
function d(e) {
    if ('string' == typeof e) return e;
    if (o(e)) return a(e, d) + '';
    if (s(e)) return c ? c.call(e) : '';
    var n = e + '';
    return '0' == n && 1 / e == -l ? '-0' : n;
}
e.exports = d;
