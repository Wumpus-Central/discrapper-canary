var i = r(690244),
    a = r(834889),
    o = r(134533)(),
    s = r(49662),
    l = r(815329),
    u = i('%Math.floor%');
e.exports = function (e, n) {
    if ('function' != typeof e) throw new l('`fn` is not a function');
    if ('number' != typeof n || n < 0 || n > 4294967295 || u(n) !== n) throw new l('`length` must be a positive 32-bit integer');
    var r = arguments.length > 2 && !!arguments[2],
        i = !0,
        c = !0;
    if ('length' in e && s) {
        var d = s(e, 'length');
        d && !d.configurable && (i = !1), d && !d.writable && (c = !1);
    }
    return (i || c || !r) && (o ? a(e, 'length', n, !0, !0) : a(e, 'length', n)), e;
};
