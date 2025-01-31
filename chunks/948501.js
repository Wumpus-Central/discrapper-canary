let i = n(889658),
    r = n(721919),
    { ANY: a } = r,
    s = n(839525),
    o = n(15496),
    l = (e, t, n = {}) => {
        if (e === t) return !0;
        (e = new i(e, n)), (t = new i(t, n));
        let r = !1;
        o: for (let i of e.set) {
            for (let e of t.set) {
                let t = d(i, e, n);
                if (((r = r || null !== t), t)) continue o;
            }
            if (r) return !1;
        }
        return !0;
    },
    u = [new r('>=0.0.0-0')],
    c = [new r('>=0.0.0')],
    d = (e, t, n) => {
        let i, r, l, d, p, h, m;
        if (e === t) return !0;
        if (1 === e.length && e[0].semver === a) {
            if (1 === t.length && t[0].semver === a) return !0;
            e = n.includePrerelease ? u : c;
        }
        if (1 === t.length && t[0].semver === a) {
            if (n.includePrerelease) return !0;
            t = c;
        }
        let g = new Set();
        for (let t of e) '>' === t.operator || '>=' === t.operator ? (i = f(i, t, n)) : '<' === t.operator || '<=' === t.operator ? (r = _(r, t, n)) : g.add(t.semver);
        if (g.size > 1 || (i && r && ((l = o(i.semver, r.semver, n)) > 0 || (0 === l && ('>=' !== i.operator || '<=' !== r.operator))))) return null;
        for (let e of g) {
            if ((i && !s(e, String(i), n)) || (r && !s(e, String(r), n))) return null;
            for (let i of t) if (!s(e, String(i), n)) return !1;
            return !0;
        }
        let E = !!r && !n.includePrerelease && !!r.semver.prerelease.length && r.semver,
            v = !!i && !n.includePrerelease && !!i.semver.prerelease.length && i.semver;
        for (let e of (E && 1 === E.prerelease.length && '<' === r.operator && 0 === E.prerelease[0] && (E = !1), t)) {
            if (((m = m || '>' === e.operator || '>=' === e.operator), (h = h || '<' === e.operator || '<=' === e.operator), i)) {
                if ((v && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === v.major && e.semver.minor === v.minor && e.semver.patch === v.patch && (v = !1), '>' === e.operator || '>=' === e.operator)) {
                    if ((d = f(i, e, n)) === e && d !== i) return !1;
                } else if ('>=' === i.operator && !s(i.semver, String(e), n)) return !1;
            }
            if (r) {
                if ((E && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === E.major && e.semver.minor === E.minor && e.semver.patch === E.patch && (E = !1), '<' === e.operator || '<=' === e.operator)) {
                    if ((p = _(r, e, n)) === e && p !== r) return !1;
                } else if ('<=' === r.operator && !s(r.semver, String(e), n)) return !1;
            }
            if (!e.operator && (r || i) && 0 !== l) return !1;
        }
        return (!i || !h || !!r || 0 === l) && (!r || !m || !!i || 0 === l) && !v && !E;
    },
    f = (e, t, n) => {
        if (!e) return t;
        let i = o(e.semver, t.semver, n);
        return i > 0 ? e : i < 0 ? t : '>' === t.operator && '>=' === e.operator ? t : e;
    },
    _ = (e, t, n) => {
        if (!e) return t;
        let i = o(e.semver, t.semver, n);
        return i < 0 ? e : i > 0 ? t : '<' === t.operator && '<=' === e.operator ? t : e;
    };
e.exports = l;
