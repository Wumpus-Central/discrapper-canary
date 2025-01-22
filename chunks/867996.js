var i = r(903425),
    a = r(661233),
    o = '[object AsyncFunction]',
    s = '[object Function]',
    l = '[object GeneratorFunction]',
    u = '[object Proxy]';
function c(e) {
    if (!a(e)) return !1;
    var n = i(e);
    return n == s || n == l || n == o || n == u;
}
e.exports = c;
