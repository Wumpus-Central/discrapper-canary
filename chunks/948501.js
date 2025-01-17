let i = r(889658),
    a = r(721919),
    { ANY: s } = a,
    o = r(839525),
    l = r(15496),
    u = (e, n, r = {}) => {
        if (e === n) return !0;
        (e = new i(e, r)), (n = new i(n, r));
        let a = !1;
        s: for (let i of e.set) {
            for (let e of n.set) {
                let n = f(i, e, r);
                if (((a = a || null !== n), n)) continue s;
            }
            if (a) return !1;
        }
        return !0;
    },
    c = [new a('>=0.0.0-0')],
    d = [new a('>=0.0.0')],
    f = (e, n, r) => {
        let i, a, u, f, p, m, g;
        if (e === n) return !0;
        if (1 === e.length && e[0].semver === s) {
            if (1 === n.length && n[0].semver === s) return !0;
            e = r.includePrerelease ? c : d;
        }
        if (1 === n.length && n[0].semver === s) {
            if (r.includePrerelease) return !0;
            n = d;
        }
        let E = new Set();
        for (let n of e) '>' === n.operator || '>=' === n.operator ? (i = _(i, n, r)) : '<' === n.operator || '<=' === n.operator ? (a = h(a, n, r)) : E.add(n.semver);
        if (E.size > 1) return null;
        if (i && a) {
            if ((u = l(i.semver, a.semver, r)) > 0) return null;
            if (0 === u && ('>=' !== i.operator || '<=' !== a.operator)) return null;
        }
        for (let e of E) {
            if ((i && !o(e, String(i), r)) || (a && !o(e, String(a), r))) return null;
            for (let i of n) if (!o(e, String(i), r)) return !1;
            return !0;
        }
        let v = !!a && !r.includePrerelease && !!a.semver.prerelease.length && a.semver,
            I = !!i && !r.includePrerelease && !!i.semver.prerelease.length && i.semver;
        for (let e of (v && 1 === v.prerelease.length && '<' === a.operator && 0 === v.prerelease[0] && (v = !1), n)) {
            if (((g = g || '>' === e.operator || '>=' === e.operator), (m = m || '<' === e.operator || '<=' === e.operator), i)) {
                if ((I && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === I.major && e.semver.minor === I.minor && e.semver.patch === I.patch && (I = !1), '>' === e.operator || '>=' === e.operator)) {
                    if ((f = _(i, e, r)) === e && f !== i) return !1;
                } else if ('>=' === i.operator && !o(i.semver, String(e), r)) return !1;
            }
            if (a) {
                if ((v && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === v.major && e.semver.minor === v.minor && e.semver.patch === v.patch && (v = !1), '<' === e.operator || '<=' === e.operator)) {
                    if ((p = h(a, e, r)) === e && p !== a) return !1;
                } else if ('<=' === a.operator && !o(a.semver, String(e), r)) return !1;
            }
            if (!e.operator && (a || i) && 0 !== u) return !1;
        }
        return (!i || !m || !!a || 0 === u) && (!a || !g || !!i || 0 === u) && !I && !v && !0;
    },
    _ = (e, n, r) => {
        if (!e) return n;
        let i = l(e.semver, n.semver, r);
        return i > 0 ? e : i < 0 ? n : '>' === n.operator && '>=' === e.operator ? n : e;
    },
    h = (e, n, r) => {
        if (!e) return n;
        let i = l(e.semver, n.semver, r);
        return i < 0 ? e : i > 0 ? n : '<' === n.operator && '<=' === e.operator ? n : e;
    };
e.exports = u;
