function t(n, i, r, s) {
    var a = Object.defineProperty;
    try {
        a({}, "", {});
    } catch (e) {
        a = 0;
    }
    (e.exports = t =
        function (e, n, i, r) {
            function s(n, i) {
                t(e, n, function (e) {
                    return this._invoke(n, i, e);
                });
            }
            n
                ? a
                    ? a(e, n, { value: i, enumerable: !r, configurable: !r, writable: !r })
                    : (e[n] = i)
                : (s("next", 0), s("throw", 1), s("return", 2));
        }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        t(n, i, r, s);
}
(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
