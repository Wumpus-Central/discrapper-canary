var n = r(937092);
(e.exports = function (e, t, r, o, i) {
    var a = n(e, t, r, o, i);
    return a.next().then(function (e) {
        return e.done ? e.value : a.next();
    });
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
