let i = n(868667),
    r = (e, t) => {
        let n = i(e, null, !0),
            r = i(t, null, !0),
            a = n.compare(r);
        if (0 === a) return null;
        let s = a > 0,
            o = s ? n : r,
            l = s ? r : n,
            u = !!o.prerelease.length;
        if (l.prerelease.length && !u) return l.patch || l.minor ? (o.patch ? 'patch' : o.minor ? 'minor' : 'major') : 'major';
        let c = u ? 'pre' : '';
        return n.major !== r.major ? c + 'major' : n.minor !== r.minor ? c + 'minor' : n.patch !== r.patch ? c + 'patch' : 'prerelease';
    };
e.exports = r;
