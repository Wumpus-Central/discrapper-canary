function n(e, n, r, i, a, s, o) {
    try {
        var l = e[s](o),
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
        return new Promise(function (a, s) {
            var o = e.apply(r, i);
            function l(e) {
                n(o, a, s, l, u, 'next', e);
            }
            function u(e) {
                n(o, a, s, l, u, 'throw', e);
            }
            l(void 0);
        });
    };
}
(e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
