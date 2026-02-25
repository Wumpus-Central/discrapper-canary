"use strict";
n.d(t, { A: () => f });
var r = n(439372),
    i = n(49463),
    s = n(217222),
    a = n(967198),
    o = n(728458);
function l() {
    let e = s.A.getRegisteredExperiments(),
        t = {};
    for (let n in e) t[s.A.getHash(n)] = n;
    return t;
}
let u = new Set();
function c() {
    for (let e of u) o.A.addFeatureFlag(e, !1);
    u.clear();
    let e = a.A.getGuildId();
    if (null == e) return;
    let t = i.A.getAllExperimentAssignments();
    for (let n in t)
        if (n.startsWith(`${e}:`)) {
            let e = n.split(":")[1];
            o.A.addFeatureFlag(e, t[n] > 0), u.add(e);
        }
    let { evaluatedExperiments: n } = s.A.getState(),
        r = n?.guild?.[e];
    if (null == r) return;
    let c = l();
    for (let e in r.assignments) {
        let t = c[e];
        if (null == t) continue;
        let n = r.assignments[e];
        o.A.addFeatureFlag(t, 0 !== n.variantId), u.add(t);
    }
}
function d() {
    let e = i.A.getAllExperimentAssignments();
    for (let t in e) t.includes(":") || o.A.addFeatureFlag(t, e[t] > 0);
    let t = l(),
        { evaluatedExperiments: n } = s.A.getState();
    for (let e of ["user", "installation"])
        for (let r in n?.[e]) {
            let { assignments: i } = n[e]?.[r] ?? {};
            for (let e in i) {
                let n = t[e];
                if (null == n) continue;
                let r = i[e];
                o.A.addFeatureFlag(n, 0 !== r.variantId);
            }
        }
    c();
}
class _ extends r.A {
    stores = new Map().set(i.A, d).set(s.A, d).set(a.A, c);
}
let f = new _();
