var i = n(56135),
    r = n(886985),
    a = n(290677),
    s = n(158698),
    o = 1 / 0,
    l = i ? i.prototype : void 0,
    u = l ? l.toString : void 0;
function c(e) {
    if ('string' == typeof e) return e;
    if (a(e)) return r(e, c) + '';
    if (s(e)) return u ? u.call(e) : '';
    var t = e + '';
    return '0' == t && 1 / e == -o ? '-0' : t;
}
e.exports = c;
