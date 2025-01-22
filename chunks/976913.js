r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(811645);
function a(e, n, r, a, o, s, l) {
    try {
        var u = e[s](l),
            c = u.value;
    } catch (e) {
        r(e);
        return;
    }
    u.done ? n(c) : i.resolve(c).then(a, o);
}
function o(e) {
    return function () {
        var n = this,
            r = arguments;
        return new i(function (i, o) {
            var s = e.apply(n, r);
            function l(e) {
                a(s, i, o, l, u, 'next', e);
            }
            function u(e) {
                a(s, i, o, l, u, 'throw', e);
            }
            l(void 0);
        });
    };
}
