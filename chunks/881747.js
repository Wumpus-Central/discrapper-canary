"use strict";
n.d(t, { R: () => u });
var r = n(424187),
    i = n(522816),
    a = n(522725),
    o = n(635833),
    u = function () {
        var e = 1 / 0,
            t = [];
        r.g.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
                var r = [];
                n.activeTargets.forEach(function (t) {
                    var n = new i.Z(t.target),
                        u = (0, a.n)(t.target);
                    r.push(n), (t.lastReportedSize = (0, o.P)(t.target, t.observedBox)), u < e && (e = u);
                }),
                    t.push(function () {
                        n.callback.call(n.observer, r, n.observer);
                    }),
                    n.activeTargets.splice(0, n.activeTargets.length);
            }
        });
        for (var n = 0; n < t.length; n++) (0, t[n])();
        return e;
    };
