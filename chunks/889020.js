let i = r(868667),
    a = (e, n) => {
        let r = i(e, null, !0),
            a = i(n, null, !0),
            o = r.compare(a);
        if (0 === o) return null;
        let s = o > 0,
            l = s ? r : a,
            u = s ? a : r,
            c = !!l.prerelease.length;
        if (u.prerelease.length && !c) return u.patch || u.minor ? (l.patch ? 'patch' : l.minor ? 'minor' : 'major') : 'major';
        let d = c ? 'pre' : '';
        return r.major !== a.major ? d + 'major' : r.minor !== a.minor ? d + 'minor' : r.patch !== a.patch ? d + 'patch' : 'prerelease';
    };
e.exports = a;
