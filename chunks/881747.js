n.d(t, { R: () => o });
var r = n(424187),
    i = n(522816),
    a = n(522725),
    s = n(635833),
    o = function () {
        var e = 1 / 0,
            t = [];
        r.g.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
                var r = [];
                n.activeTargets.forEach(function (t) {
                    var n = new i.Z(t.target),
                        o = (0, a.n)(t.target);
                    r.push(n), (t.lastReportedSize = (0, s.P)(t.target, t.observedBox)), o < e && (e = o);
                }),
                    t.push(function () {
                        n.callback.call(n.observer, r, n.observer);
                    }),
                    n.activeTargets.splice(0, n.activeTargets.length);
            }
        });
        for (var n = 0, o = t; n < o.length; n++) (0, o[n])();
        return e;
    };
