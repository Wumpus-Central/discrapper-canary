var r = n(657398),
    i = n(706627),
    a = '[object AsyncFunction]',
    o = '[object Function]',
    s = '[object GeneratorFunction]',
    l = '[object Proxy]';
e.exports = function (e) {
    if (!i(e)) return !1;
    var t = r(e);
    return t == o || t == s || t == a || t == l;
};
