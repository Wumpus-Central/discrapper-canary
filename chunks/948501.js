let i = r(889658),
    a = r(721919),
    { ANY: o } = a,
    s = r(839525),
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
        let i, a, u, f, _, m, g;
        if (e === n) return !0;
        if (1 === e.length && e[0].semver === o) {
            if (1 === n.length && n[0].semver === o) return !0;
            e = r.includePrerelease ? c : d;
        }
        if (1 === n.length && n[0].semver === o) {
            if (r.includePrerelease) return !0;
            n = d;
        }
        let E = new Set();
        for (let n of e) '>' === n.operator || '>=' === n.operator ? (i = p(i, n, r)) : '<' === n.operator || '<=' === n.operator ? (a = h(a, n, r)) : E.add(n.semver);
        if (E.size > 1) return null;
        if (i && a) {
            if ((u = l(i.semver, a.semver, r)) > 0) return null;
            if (0 === u && ('>=' !== i.operator || '<=' !== a.operator)) return null;
        }
        for (let e of E) {
            if ((i && !s(e, String(i), r)) || (a && !s(e, String(a), r))) return null;
            for (let i of n) if (!s(e, String(i), r)) return !1;
            return !0;
        }
        let v = !!a && !r.includePrerelease && !!a.semver.prerelease.length && a.semver,
            y = !!i && !r.includePrerelease && !!i.semver.prerelease.length && i.semver;
        for (let e of (v && 1 === v.prerelease.length && '<' === a.operator && 0 === v.prerelease[0] && (v = !1), n)) {
            if (((g = g || '>' === e.operator || '>=' === e.operator), (m = m || '<' === e.operator || '<=' === e.operator), i)) {
                if ((y && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === y.major && e.semver.minor === y.minor && e.semver.patch === y.patch && (y = !1), '>' === e.operator || '>=' === e.operator)) {
                    if ((f = p(i, e, r)) === e && f !== i) return !1;
                } else if ('>=' === i.operator && !s(i.semver, String(e), r)) return !1;
            }
            if (a) {
                if ((v && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === v.major && e.semver.minor === v.minor && e.semver.patch === v.patch && (v = !1), '<' === e.operator || '<=' === e.operator)) {
                    if ((_ = h(a, e, r)) === e && _ !== a) return !1;
                } else if ('<=' === a.operator && !s(a.semver, String(e), r)) return !1;
            }
            if (!e.operator && (a || i) && 0 !== u) return !1;
        }
        return (!i || !m || !!a || 0 === u) && (!a || !g || !!i || 0 === u) && !y && !v && !0;
    },
    p = (e, n, r) => {
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
