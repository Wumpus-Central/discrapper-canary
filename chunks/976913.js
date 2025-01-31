n.d(t, { Z: () => a });
var i = n(811645);
function r(e, t, n, r, a, s, o) {
    try {
        var l = e[s](o),
            u = l.value;
    } catch (e) {
        n(e);
        return;
    }
    l.done ? t(u) : i.resolve(u).then(r, a);
}
function a(e) {
    return function () {
        var t = this,
            n = arguments;
        return new i(function (i, a) {
            var s = e.apply(t, n);
            function o(e) {
                r(s, i, a, o, l, 'next', e);
            }
            function l(e) {
                r(s, i, a, o, l, 'throw', e);
            }
            o(void 0);
        });
    };
}
