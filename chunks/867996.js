var r = n(903425),
    i = n(661233),
    o = '[object AsyncFunction]',
    a = '[object Function]',
    s = '[object GeneratorFunction]',
    l = '[object Proxy]';
e.exports = function (e) {
    if (!i(e)) return !1;
    var t = r(e);
    return t == a || t == s || t == o || t == l;
};
