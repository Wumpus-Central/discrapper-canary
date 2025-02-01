var i = n(413135),
    r = i.Buffer;
function a(e, t) {
    for (var n in e) t[n] = e[n];
}
function s(e, t, n) {
    return r(e, t, n);
}
r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? (e.exports = i) : (a(i, t), (t.Buffer = s)),
    (s.prototype = Object.create(r.prototype)),
    a(r, s),
    (s.from = function (e, t, n) {
        if ('number' == typeof e) throw TypeError('Argument must not be a number');
        return r(e, t, n);
    }),
    (s.alloc = function (e, t, n) {
        if ('number' != typeof e) throw TypeError('Argument must be a number');
        var i = r(e);
        return void 0 !== t ? ('string' == typeof n ? i.fill(t, n) : i.fill(t)) : i.fill(0), i;
    }),
    (s.allocUnsafe = function (e) {
        if ('number' != typeof e) throw TypeError('Argument must be a number');
        return r(e);
    }),
    (s.allocUnsafeSlow = function (e) {
        if ('number' != typeof e) throw TypeError('Argument must be a number');
        return i.SlowBuffer(e);
    });
