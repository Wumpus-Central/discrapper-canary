"use strict";
n.d(t, { A: () => E }), n(321073);
var i = n(439372),
    r = n(736056),
    a = n(710195),
    s = n(967198),
    l = n(38405);
function o(e, t) {
    if (null == e) return !0;
    let n = e.variations[t];
    return null == n || JSON.stringify(n) === JSON.stringify(e.defaultConfig);
}
let d = new Set();
function c(e, t) {
    for (let n of (e.sort(), e)) l.A.addFeatureFlag(n, !0), t?.add(n);
}
function u() {
    for (let e of d) l.A.addFeatureFlag(e, !1);
    d.clear();
    let e = [],
        t = [],
        n = [],
        i = [],
        u = [],
        _ = [],
        E = s.A.getGuildId(),
        A = r.A.getAllExperimentAssignments();
    for (let n in A) {
        let i = A[n];
        null != i &&
            !(i <= 0) &&
            (n.includes(":")
                ? null != E && n.startsWith(`${E}:`) && t.push(`${n.split(":")[1]}:${i}`)
                : e.push(`${n}:${i}`));
    }
    let h = a.A.getRegisteredExperiments(),
        I = (function () {
            let e = a.A.getRegisteredExperiments(),
                t = {};
            for (let n in e) t[a.A.getHash(n)] = n;
            return t;
        })(),
        { evaluatedExperiments: f } = a.A.getState();
    for (let e of ["user", "installation"])
        for (let t in f?.[e]) {
            let { assignments: i } = f[e]?.[t] ?? {};
            for (let e in i) {
                let t = I[e];
                if (null == t) continue;
                let { variantId: r } = i[e];
                if (null == r) continue;
                let a = `${t}:${r}`;
                (o(h[t], r) ? n : u).push(a);
            }
        }
    if (null != E) {
        let e = f?.guild?.[E];
        if (null != e)
            for (let t in e.assignments) {
                let n = I[t];
                if (null == n) continue;
                let { variantId: r } = e.assignments[t];
                if (null == r) continue;
                let a = `${n}:${r}`;
                (o(h[n], r) ? i : _).push(a);
            }
    }
    c(e), c(t, d), c(n), c(i, d), c(u), c(_, d);
}
class _ extends i.A {
    stores = new Map().set(r.A, u).set(a.A, u).set(s.A, u);
}
let E = new _();
