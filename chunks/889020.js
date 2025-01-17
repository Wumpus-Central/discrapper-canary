let i = r(868667),
    a = (e, n) => {
        let r = i(e, null, !0),
            a = i(n, null, !0),
            s = r.compare(a);
        if (0 === s) return null;
        let o = s > 0,
            l = o ? r : a,
            u = o ? a : r,
            c = !!l.prerelease.length;
        if (u.prerelease.length && !c) return u.patch || u.minor ? (l.patch ? 'patch' : l.minor ? 'minor' : 'major') : 'major';
        let d = c ? 'pre' : '';
        return r.major !== a.major ? d + 'major' : r.minor !== a.minor ? d + 'minor' : r.patch !== a.patch ? d + 'patch' : 'prerelease';
    };
e.exports = a;
