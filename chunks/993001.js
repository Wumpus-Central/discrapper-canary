function t(r, n, o, i) {
    var a = Object.defineProperty;
    try {
        a({}, "", {});
    } catch (e) {
        a = 0;
    }
    (e.exports = t =
        function (e, r, n, o) {
            function i(r, n) {
                t(e, r, function (e) {
                    return this._invoke(r, n, e);
                });
            }
            r
                ? a
                    ? a(e, r, { value: n, enumerable: !o, configurable: !o, writable: !o })
                    : (e[r] = n)
                : (i("next", 0), i("throw", 1), i("return", 2));
        }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        t(r, n, o, i);
}
(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
