var n = r(937092);
(e.exports = function (e, t, r, i, o) {
    var a = n(e, t, r, i, o);
    return a.next().then(function (e) {
        return e.done ? e.value : a.next();
    });
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
