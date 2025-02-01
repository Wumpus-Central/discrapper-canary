function t(e, t, n, i, r, a, s) {
    try {
        var o = e[a](s),
            l = o.value;
    } catch (e) {
        return void n(e);
    }
    o.done ? t(l) : Promise.resolve(l).then(i, r);
}
function n(e) {
    return function () {
        var n = this,
            i = arguments;
        return new Promise(function (r, a) {
            var s = e.apply(n, i);
            function o(e) {
                t(s, r, a, o, l, 'next', e);
            }
            function l(e) {
                t(s, r, a, o, l, 'throw', e);
            }
            o(void 0);
        });
    };
}
(e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
