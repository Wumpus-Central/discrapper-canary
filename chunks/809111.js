n.d(t, { X: () => a });
var r = n(829105),
    i = n(150076),
    o = n(695170);
function a(e, t, n, a, s, l) {
    var c = {},
        u = e.accept;
    function d(e, t) {
        n.forEach(function (n) {
            n.between(e, t, !0).forEach(function (e) {
                c[Number(e)] = !0;
            });
        });
    }
    s.forEach(function (e) {
        c[Number(new r.M(e, l).rezonedDate())] = !0;
    }),
        (e.accept = function (e) {
            var t = Number(e);
            return isNaN(t) ? u.call(this, e) : !!c[t] || (d(new Date(t - 1), new Date(t + 1)), !!c[t]) || ((c[t] = !0), u.call(this, e));
        }),
        'between' === e.method &&
            (d(e.args.after, e.args.before),
            (e.accept = function (e) {
                var t = Number(e);
                return !!c[t] || ((c[t] = !0), u.call(this, e));
            }));
    for (var f = 0; f < a.length; f++) {
        var p = new r.M(a[f], l).rezonedDate();
        if (!e.accept(new Date(p.getTime()))) break;
    }
    t.forEach(function (t) {
        (0, i.h)(e, t.options);
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
