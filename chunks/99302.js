var r = n(338036),
    i = n(509185),
    a = "[object AsyncFunction]",
    s = "[object Function]",
    o = "[object GeneratorFunction]",
    l = "[object Proxy]";
e.exports = function (e) {
    if (!i(e)) return !1;
    var t = r(e);
    return t == s || t == o || t == a || t == l;
};
