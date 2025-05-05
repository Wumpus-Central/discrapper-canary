var r = n(903425),
    i = n(661233),
    a = '[object AsyncFunction]',
    o = '[object Function]',
    s = '[object GeneratorFunction]',
    l = '[object Proxy]';
e.exports = function (e) {
    if (!i(e)) return !1;
    var t = r(e);
    return t == o || t == s || t == a || t == l;
};
