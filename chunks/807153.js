n.d(t, { M: () => c });
var r = n(684342),
    i = n(391756),
    a = n(797578),
    o = n(876026),
    s = new Map(),
    l = function (e, t) {
        for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
        return -1;
    },
    c = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var n = new a.r(e, t);
                o.C.push(n), s.set(e, n);
            }),
            (e.observe = function (e, t, n) {
                if (s.has(e)) {
                    var a = s.get(e);
                    0 > l(a.observationTargets, t) && (a.observationTargets.push(new i.Q(t, n && n.box)), (0, r.t)(1), r.p.schedule());
                }
            }),
            (e.unobserve = function (e, t) {
                if (s.has(e)) {
                    var n = s.get(e),
                        i = l(n.observationTargets, t);
                    i >= 0 && (n.observationTargets.splice(i, 1), (0, r.t)(-1));
                }
            }),
            (e.disconnect = function (e) {
                if (s.has(e)) {
                    var t = s.get(e);
                    o.C.splice(o.C.indexOf(t), 1), s.delete(e), (0, r.t)(-t.observationTargets.length);
                }
            }),
            e
        );
    })();
