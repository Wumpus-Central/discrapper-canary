"use strict";
n.d(t, { R: () => o });
var r = n(424187),
    i = n(522816),
    s = n(522725),
    a = n(635833),
    o = function () {
        var e = 1 / 0,
            t = [];
        r.g.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
                var r = [];
                n.activeTargets.forEach(function (t) {
                    var n = new i.Z(t.target),
                        o = (0, s.n)(t.target);
                    r.push(n), (t.lastReportedSize = (0, a.P)(t.target, t.observedBox)), o < e && (e = o);
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
