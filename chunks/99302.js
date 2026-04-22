var r = n(338036),
    i = n(509185);
e.exports = function (e) {
    if (!i(e)) return !1;
    var t = r(e);
    return (
        "[object Function]" == t ||
        "[object GeneratorFunction]" == t ||
        "[object AsyncFunction]" == t ||
        "[object Proxy]" == t
    );
};
