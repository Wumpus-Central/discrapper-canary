var i = n(903425),
    r = n(661233),
    a = '[object AsyncFunction]',
    s = '[object Function]',
    o = '[object GeneratorFunction]',
    l = '[object Proxy]';
function u(e) {
    if (!r(e)) return !1;
    var t = i(e);
    return t == s || t == o || t == a || t == l;
}
e.exports = u;
