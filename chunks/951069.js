n.d(t, { M: () => c });
var r = n(391997),
    i = n(644977),
    o = n(446315),
    a = n(312413),
    s = new WeakMap(),
    l = function (e, t) {
        for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
        return -1;
    },
    c = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var n = new o.r(e, t);
                s.set(e, n);
            }),
            (e.observe = function (e, t, n) {
                var o = s.get(e),
                    c = 0 === o.observationTargets.length;
                0 > l(o.observationTargets, t) && (c && a.C.push(o), o.observationTargets.push(new i.Q(t, n && n.box)), (0, r.t)(1), r.p.schedule());
            }),
            (e.unobserve = function (e, t) {
                var n = s.get(e),
                    i = l(n.observationTargets, t),
                    o = 1 === n.observationTargets.length;
                i >= 0 && (o && a.C.splice(a.C.indexOf(n), 1), n.observationTargets.splice(i, 1), (0, r.t)(-1));
            }),
            (e.disconnect = function (e) {
                var t = this,
                    n = s.get(e);
                n.observationTargets.slice().forEach(function (n) {
                    return t.unobserve(e, n.target);
                }),
                    n.activeTargets.splice(0, n.activeTargets.length);
            }),
            e
        );
    })();
