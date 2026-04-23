"use strict";
n.d(t, { A: () => E }), n(321073);
var i = n(439372),
    r = n(736056),
    s = n(710195),
    a = n(967198),
    o = n(38405);
function l(e, t) {
    if (null == e) return !0;
    let n = e.variations[t];
    return null == n || JSON.stringify(n) === JSON.stringify(e.defaultConfig);
}
let d = new Set();
function _(e, t) {
    for (let n of (e.sort(), e)) o.A.addFeatureFlag(n, !0), t?.add(n);
}
function u() {
    for (let e of d) o.A.addFeatureFlag(e, !1);
    d.clear();
    let e = [],
        t = [],
        n = [],
        i = [],
        u = [],
        c = [],
        E = a.A.getGuildId(),
        h = r.A.getAllExperimentAssignments();
    for (let n in h) {
        let i = h[n];
        null != i &&
            !(i <= 0) &&
            (n.includes(":")
                ? null != E && n.startsWith(`${E}:`) && t.push(`${n.split(":")[1]}:${i}`)
                : e.push(`${n}:${i}`));
    }
    let m = s.A.getRegisteredExperiments(),
        f = (function () {
            let e = s.A.getRegisteredExperiments(),
                t = {};
            for (let n in e) t[s.A.getHash(n)] = n;
            return t;
        })(),
        { evaluatedExperiments: g } = s.A.getState();
    for (let e of ["user", "installation"])
        for (let t in g?.[e]) {
            let { assignments: i } = g[e]?.[t] ?? {};
            for (let e in i) {
                let t = f[e];
                if (null == t) continue;
                let { variantId: r } = i[e];
                if (null == r) continue;
                let s = `${t}:${r}`;
                (l(m[t], r) ? n : u).push(s);
            }
        }
    if (null != E) {
        let e = g?.guild?.[E];
        if (null != e)
            for (let t in e.assignments) {
                let n = f[t];
                if (null == n) continue;
                let { variantId: r } = e.assignments[t];
                if (null == r) continue;
                let s = `${n}:${r}`;
                (l(m[n], r) ? i : c).push(s);
            }
    }
    _(e), _(t, d), _(n), _(i, d), _(u), _(c, d);
}
class c extends i.A {
    stores = new Map().set(r.A, u).set(s.A, u).set(a.A, u);
}
let E = new c();
