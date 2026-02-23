"use strict";
n.d(t, { A: () => _ });
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
function u() {
    let e = a.A.getGuildId();
    if (null == e) return;
    let { evaluatedExperiments: t } = s.A.getState(),
        n = t?.guild?.[e];
    if (null == n) return;
    let r = l();
    for (let e in n.assignments) {
        let t = r[e];
        if (null == t) continue;
        let i = n.assignments[e];
        o.A.addFeatureFlag(t, 0 !== i.variantId);
    }
}
function c() {
    let e = i.A.getAllExperimentAssignments();
    for (let t in e) o.A.addFeatureFlag(t, e[t] > 0);
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
    u();
}
class d extends r.A {
    stores = new Map().set(i.A, c).set(s.A, c).set(a.A, u);
}
let _ = new d();
