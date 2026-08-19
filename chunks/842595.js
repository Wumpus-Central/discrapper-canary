function t() {
    try {
        var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {}
    return ((e.exports = t =
        function () {
            return !!r;
        }),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports))();
}
(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
