function t(r, n, i, o) {
    var a = Object.defineProperty;
    try {
        a({}, "", {});
    } catch (e) {
        a = 0;
    }
    (e.exports = t =
        function (e, r, n, i) {
            function o(r, n) {
                t(e, r, function (e) {
                    return this._invoke(r, n, e);
                });
            }
            r
                ? a
                    ? a(e, r, { value: n, enumerable: !i, configurable: !i, writable: !i })
                    : (e[r] = n)
                : (o("next", 0), o("throw", 1), o("return", 2));
        }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        t(r, n, i, o);
}
(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
