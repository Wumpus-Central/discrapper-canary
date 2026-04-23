"use strict";
n.d(t, { A: () => i });
var r = n(140851);
function i(e) {
    var t,
        n,
        i,
        s =
            ((t = new Map()),
            (n = new Set()),
            (i = []),
            e.forEach(function (e) {
                t.set(e.name, e);
            }),
            e.forEach(function (e) {
                n.has(e.name) ||
                    (function e(r) {
                        n.add(r.name),
                            [].concat(r.requires || [], r.requiresIfExists || []).forEach(function (r) {
                                if (!n.has(r)) {
                                    var i = t.get(r);
                                    i && e(i);
                                }
                            }),
                            i.push(r);
                    })(e);
            }),
            i);
    return r.GM.reduce(function (e, t) {
        return e.concat(
            s.filter(function (e) {
                return e.phase === t;
            }),
        );
    }, []);
}
