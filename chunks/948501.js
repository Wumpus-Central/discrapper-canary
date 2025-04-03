let r = n(889658),
    i = n(721919),
    { ANY: o } = i,
    a = n(839525),
    s = n(15496),
    l = (e, t, n = {}) => {
        if (e === t) return !0;
        (e = new r(e, n)), (t = new r(t, n));
        let i = !1;
        a: for (let r of e.set) {
            for (let e of t.set) {
                let t = d(r, e, n);
                if (((i = i || null !== t), t)) continue a;
            }
            if (i) return !1;
        }
        return !0;
    },
    c = [new i('>=0.0.0-0')],
    u = [new i('>=0.0.0')],
    d = (e, t, n) => {
        let r, i, l, d, p, h, m;
        if (e === t) return !0;
        if (1 === e.length && e[0].semver === o)
            if (1 === t.length && t[0].semver === o) return !0;
            else e = n.includePrerelease ? c : u;
        if (1 === t.length && t[0].semver === o)
            if (n.includePrerelease) return !0;
            else t = u;
        let g = new Set();
        for (let t of e) '>' === t.operator || '>=' === t.operator ? (r = f(r, t, n)) : '<' === t.operator || '<=' === t.operator ? (i = _(i, t, n)) : g.add(t.semver);
        if (g.size > 1) return null;
        if (r && i && ((l = s(r.semver, i.semver, n)) > 0 || (0 === l && ('>=' !== r.operator || '<=' !== i.operator)))) return null;
        for (let e of g) {
            if ((r && !a(e, String(r), n)) || (i && !a(e, String(i), n))) return null;
            for (let r of t) if (!a(e, String(r), n)) return !1;
            return !0;
        }
        let E = !!i && !n.includePrerelease && !!i.semver.prerelease.length && i.semver,
            b = !!r && !n.includePrerelease && !!r.semver.prerelease.length && r.semver;
        for (let e of (E && 1 === E.prerelease.length && '<' === i.operator && 0 === E.prerelease[0] && (E = !1), t)) {
            if (((m = m || '>' === e.operator || '>=' === e.operator), (h = h || '<' === e.operator || '<=' === e.operator), r)) {
                if ((b && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === b.major && e.semver.minor === b.minor && e.semver.patch === b.patch && (b = !1), '>' === e.operator || '>=' === e.operator)) {
                    if ((d = f(r, e, n)) === e && d !== r) return !1;
                } else if ('>=' === r.operator && !a(r.semver, String(e), n)) return !1;
            }
            if (i) {
                if ((E && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === E.major && e.semver.minor === E.minor && e.semver.patch === E.patch && (E = !1), '<' === e.operator || '<=' === e.operator)) {
                    if ((p = _(i, e, n)) === e && p !== i) return !1;
                } else if ('<=' === i.operator && !a(i.semver, String(e), n)) return !1;
            }
            if (!e.operator && (i || r) && 0 !== l) return !1;
        }
        return (!r || !h || !!i || 0 === l) && (!i || !m || !!r || 0 === l) && !b && !E && !0;
    },
    f = (e, t, n) => {
        if (!e) return t;
        let r = s(e.semver, t.semver, n);
        return r > 0 ? e : r < 0 || ('>' === t.operator && '>=' === e.operator) ? t : e;
    },
    _ = (e, t, n) => {
        if (!e) return t;
        let r = s(e.semver, t.semver, n);
        return r < 0 ? e : r > 0 || ('<' === t.operator && '<=' === e.operator) ? t : e;
    };
e.exports = l;
