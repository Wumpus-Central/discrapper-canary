"use strict";
n.d(t, { J: () => u });
var r = n(837401),
    i = n(363400),
    a = n(746595),
    s = n(424187),
    o = new WeakMap(),
    l = function (e, t) {
        for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
        return -1;
    },
    u = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var n = new a.M(e, t);
                o.set(e, n);
            }),
            (e.observe = function (e, t, n) {
                var a = o.get(e),
                    u = 0 === a.observationTargets.length;
                0 > l(a.observationTargets, t) &&
                    (u && s.g.push(a), a.observationTargets.push(new i.V(t, n && n.box)), (0, r.L)(1), r.c.schedule());
            }),
            (e.unobserve = function (e, t) {
                var n = o.get(e),
                    i = l(n.observationTargets, t),
                    a = 1 === n.observationTargets.length;
                i >= 0 && (a && s.g.splice(s.g.indexOf(n), 1), n.observationTargets.splice(i, 1), (0, r.L)(-1));
            }),
            (e.disconnect = function (e) {
                var t = this,
                    n = o.get(e);
                n.observationTargets.slice().forEach(function (n) {
                    return t.unobserve(e, n.target);
                }),
                    n.activeTargets.splice(0, n.activeTargets.length);
            }),
            e
        );
    })();
