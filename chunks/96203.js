s.d(e, { A: () => c });
var r = s(64700),
    i = s(735438),
    n = s(17928),
    l = s(633075),
    a = s(289173),
    o = s(999291),
    u = s(832163),
    d = s(501838);
function c(t) {
    let { userId: e } = t,
        s = (0, o.Ay)(e),
        c = r.useMemo(() => (s?.userId != null ? [s.userId] : []), [s]),
        S = (0, d.w)({ userIds: c }),
        h = (0, d.mn)({ userIds: c }),
        p = (0, d.tR)(c),
        _ = (0, n.yK)([u.A], () => {
            if (s?.widgets == null) return [];
            let t = new Set();
            for (let e of s?.widgets ?? [])
                if (e instanceof a.Yy)
                    e.games.forEach((e) => {
                        let s = u.A.getApplicationIdFromDetectableId(e.applicationId);
                        null != s && t.add(s);
                    });
                else if (e instanceof l.R) {
                    let s = u.A.getApplicationIdFromDetectableId(e.applicationId);
                    null != s && t.add(s);
                }
            return Array.from(t).sort();
        }, [s]);
    return r.useMemo(
        () => (s?.application != null ? [] : (0, i.uniq)([...S, ...h, ...p, ..._])),
        [s?.application, S, h, p, _],
    );
}
