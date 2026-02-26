"use strict";
n.d(t, { A: () => h }), n(321073);
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
function u(e, t) {
    if (null == e) return !0;
    let n = e.variations[t];
    return null == n || JSON.stringify(n) === JSON.stringify(e.defaultConfig);
}
let c = new Set();
function d() {
    for (let e of c) o.A.addFeatureFlag(e, !1);
    c.clear();
}
function _(e, t) {
    for (let n of (e.sort(), e)) o.A.addFeatureFlag(n, !0), t?.add(n);
}
function f() {
    d();
    let e = [],
        t = [],
        n = [],
        r = [],
        o = [],
        f = [],
        p = a.A.getGuildId(),
        h = i.A.getAllExperimentAssignments();
    for (let n in h) {
        let r = h[n];
        null != r &&
            !(r <= 0) &&
            (n.includes(":")
                ? null != p && n.startsWith(`${p}:`) && t.push(`${n.split(":")[1]}:${r}`)
                : e.push(`${n}:${r}`));
    }
    let m = s.A.getRegisteredExperiments(),
        E = l(),
        { evaluatedExperiments: g } = s.A.getState();
    for (let e of ["user", "installation"])
        for (let t in g?.[e]) {
            let { assignments: r } = g[e]?.[t] ?? {};
            for (let e in r) {
                let t = E[e];
                if (null == t) continue;
                let { variantId: i } = r[e];
                if (null == i) continue;
                let s = `${t}:${i}`;
                (u(m[t], i) ? n : o).push(s);
            }
        }
    if (null != p) {
        let e = g?.guild?.[p];
        if (null != e)
            for (let t in e.assignments) {
                let n = E[t];
                if (null == n) continue;
                let { variantId: i } = e.assignments[t];
                if (null == i) continue;
                let s = `${n}:${i}`;
                (u(m[n], i) ? r : f).push(s);
            }
    }
    _(e), _(t, c), _(n), _(r, c), _(o), _(f, c);
}
class p extends r.A {
    stores = new Map().set(i.A, f).set(s.A, f).set(a.A, f);
}
let h = new p();
