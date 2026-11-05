n(321073);
var i = n(439372),
    r = n(343446),
    a = n(50258),
    s = n(967198),
    l = n(856383);
function o(e, t) {
    if (null == e) return !0;
    let n = e.variations[t];
    return null == n || JSON.stringify(n) === JSON.stringify(e.defaultConfig);
}
let d = new Set();
function c(e, t) {
    for (let n of (e.sort(), e)) (l.A.addFeatureFlag(n, !0), t?.add(n));
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
    let f = a.A.getRegisteredExperiments(),
        h = (function () {
            let e = a.A.getRegisteredExperiments(),
                t = {};
            for (let n in e) t[a.A.getHash(n)] = n;
            return t;
        })(),
        { evaluatedExperiments: I } = a.A.getState();
    for (let e of ["user", "installation"])
        for (let t in I?.[e]) {
            let { assignments: i } = I[e]?.[t] ?? {};
            for (let e in i) {
                let t = h[e];
                if (null == t) continue;
                let { variantId: r } = i[e];
                if (null == r) continue;
                let a = `${t}:${r}`;
                (o(f[t], r) ? n : u).push(a);
            }
        }
    if (null != E) {
        let e = I?.guild?.[E];
        if (null != e)
            for (let t in e.assignments) {
                let n = h[t];
                if (null == n) continue;
                let { variantId: r } = e.assignments[t];
                if (null == r) continue;
                let a = `${n}:${r}`;
                (o(f[n], r) ? i : _).push(a);
            }
    }
    (c(e), c(t, d), c(n), c(i, d), c(u), c(_, d));
}
class _ extends i.A {
    stores = new Map().set(r.A, u).set(a.A, u).set(s.A, u);
}
let E = new _();
n.d(t, {}, { A: E });
