function n(e, n, r, i, a, o, s) {
    try {
        var l = e[o](s),
            u = l.value;
    } catch (e) {
        return void r(e);
    }
    l.done ? n(u) : Promise.resolve(u).then(i, a);
}
function r(e) {
    return function () {
        var r = this,
            i = arguments;
        return new Promise(function (a, o) {
            var s = e.apply(r, i);
            function l(e) {
                n(s, a, o, l, u, 'next', e);
            }
            function u(e) {
                n(s, a, o, l, u, 'throw', e);
            }
            l(void 0);
        });
    };
}
(e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
