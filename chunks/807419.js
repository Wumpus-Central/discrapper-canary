var r = a(657398),
    n = a(706627);
t.exports = function (t) {
    if (!n(t)) return !1;
    var e = r(t);
    return '[object Function]' == e || '[object GeneratorFunction]' == e || '[object AsyncFunction]' == e || '[object Proxy]' == e;
};
