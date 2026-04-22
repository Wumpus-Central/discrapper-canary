"use strict";
n.d(t, { A: () => f }), n(321073);
var r = n(439372),
    i = n(49463),
    s = n(217222),
    a = n(967198),
    o = n(728458);
function l(e, t) {
    if (null == e) return !0;
    let n = e.variations[t];
    return null == n || JSON.stringify(n) === JSON.stringify(e.defaultConfig);
}
let u = new Set();
function d(e, t) {
    for (let n of (e.sort(), e)) o.A.addFeatureFlag(n, !0), t?.add(n);
}
function c() {
    for (let e of u) o.A.addFeatureFlag(e, !1);
    u.clear();
    let e = [],
        t = [],
        n = [],
        r = [],
        c = [],
        _ = [],
        f = a.A.getGuildId(),
        E = i.A.getAllExperimentAssignments();
    for (let n in E) {
        let r = E[n];
        null != r &&
            !(r <= 0) &&
            (n.includes(":")
                ? null != f && n.startsWith(`${f}:`) && t.push(`${n.split(":")[1]}:${r}`)
                : e.push(`${n}:${r}`));
    }
    let h = s.A.getRegisteredExperiments(),
        p = (function () {
            let e = s.A.getRegisteredExperiments(),
                t = {};
            for (let n in e) t[s.A.getHash(n)] = n;
            return t;
        })(),
        { evaluatedExperiments: m } = s.A.getState();
    for (let e of ["user", "installation"])
        for (let t in m?.[e]) {
            let { assignments: r } = m[e]?.[t] ?? {};
            for (let e in r) {
                let t = p[e];
                if (null == t) continue;
                let { variantId: i } = r[e];
                if (null == i) continue;
                let s = `${t}:${i}`;
                (l(h[t], i) ? n : c).push(s);
            }
        }
    if (null != f) {
        let e = m?.guild?.[f];
        if (null != e)
            for (let t in e.assignments) {
                let n = p[t];
                if (null == n) continue;
                let { variantId: i } = e.assignments[t];
                if (null == i) continue;
                let s = `${n}:${i}`;
                (l(h[n], i) ? r : _).push(s);
            }
    }
    d(e), d(t, u), d(n), d(r, u), d(c), d(_, u);
}
class _ extends r.A {
    stores = new Map().set(i.A, c).set(s.A, c).set(a.A, c);
}
let f = new _();
