r.d(n, {
    X: function () {
        return s;
    }
});
var i = r(829105),
    a = r(150076),
    o = r(695170);
function s(e, n, r, s, l, u) {
    var c = {},
        d = e.accept;
    function f(e, n) {
        r.forEach(function (r) {
            r.between(e, n, !0).forEach(function (e) {
                c[Number(e)] = !0;
            });
        });
    }
    l.forEach(function (e) {
        c[Number(new i.M(e, u).rezonedDate())] = !0;
    }),
        (e.accept = function (e) {
            var n = Number(e);
            return isNaN(n) ? d.call(this, e) : !!c[n] || (f(new Date(n - 1), new Date(n + 1)), !!c[n]) || ((c[n] = !0), d.call(this, e));
        }),
        'between' === e.method &&
            (f(e.args.after, e.args.before),
            (e.accept = function (e) {
                var n = Number(e);
                return !!c[n] || ((c[n] = !0), d.call(this, e));
            }));
    for (var p = 0; p < s.length; p++) {
        var h = new i.M(s[p], u).rezonedDate();
        if (!e.accept(new Date(h.getTime()))) break;
    }
    n.forEach(function (n) {
        (0, a.h)(e, n.options);
    });
    var _ = e._result;
    switch (((0, o.DY)(_), e.method)) {
        case 'all':
        case 'between':
            return _;
        case 'before':
            return (_.length && _[_.length - 1]) || null;
        default:
            return (_.length && _[0]) || null;
    }
}
