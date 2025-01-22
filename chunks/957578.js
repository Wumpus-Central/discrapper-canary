var i = r(413135),
    a = i.Buffer;
function o(e, n) {
    for (var r in e) n[r] = e[r];
}
function s(e, n, r) {
    return a(e, n, r);
}
a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? (e.exports = i) : (o(i, n), (n.Buffer = s)),
    (s.prototype = Object.create(a.prototype)),
    o(a, s),
    (s.from = function (e, n, r) {
        if ('number' == typeof e) throw TypeError('Argument must not be a number');
        return a(e, n, r);
    }),
    (s.alloc = function (e, n, r) {
        if ('number' != typeof e) throw TypeError('Argument must be a number');
        var i = a(e);
        return void 0 !== n ? ('string' == typeof r ? i.fill(n, r) : i.fill(n)) : i.fill(0), i;
    }),
    (s.allocUnsafe = function (e) {
        if ('number' != typeof e) throw TypeError('Argument must be a number');
        return a(e);
    }),
    (s.allocUnsafeSlow = function (e) {
        if ('number' != typeof e) throw TypeError('Argument must be a number');
        return i.SlowBuffer(e);
    });
