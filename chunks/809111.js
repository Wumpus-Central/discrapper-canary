n.d(t, { X: () => s });
var i = n(829105),
    r = n(150076),
    a = n(695170);
function s(e, t, n, s, o, l) {
    var u = {},
        c = e.accept;
    function d(e, t) {
        n.forEach(function (n) {
            n.between(e, t, !0).forEach(function (e) {
                u[Number(e)] = !0;
            });
        });
    }
    o.forEach(function (e) {
        u[Number(new i.M(e, l).rezonedDate())] = !0;
    }),
        (e.accept = function (e) {
            var t = Number(e);
            return isNaN(t) ? c.call(this, e) : !!u[t] || (d(new Date(t - 1), new Date(t + 1)), !!u[t]) || ((u[t] = !0), c.call(this, e));
        }),
        'between' === e.method &&
            (d(e.args.after, e.args.before),
            (e.accept = function (e) {
                var t = Number(e);
                return !!u[t] || ((u[t] = !0), c.call(this, e));
            }));
    for (var f = 0; f < s.length; f++) {
        var _ = new i.M(s[f], l).rezonedDate();
        if (!e.accept(new Date(_.getTime()))) break;
    }
    t.forEach(function (t) {
        (0, r.h)(e, t.options);
    });
    var p = e._result;
    switch (((0, a.DY)(p), e.method)) {
        case 'all':
        case 'between':
            return p;
        case 'before':
            return (p.length && p[p.length - 1]) || null;
        default:
            return (p.length && p[0]) || null;
    }
}
