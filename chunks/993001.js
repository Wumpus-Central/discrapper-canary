function t(n, r, i, s) {
    var a = Object.defineProperty;
    try {
        a({}, "", {});
    } catch (e) {
        a = 0;
    }
    (e.exports = t =
        function (e, n, r, i) {
            function s(n, r) {
                t(e, n, function (e) {
                    return this._invoke(n, r, e);
                });
            }
            n
                ? a
                    ? a(e, n, { value: r, enumerable: !i, configurable: !i, writable: !i })
                    : (e[n] = r)
                : (s("next", 0), s("throw", 1), s("return", 2));
        }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        t(n, r, i, s);
}
(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
