"use strict";
n.d(t, { A: () => d });
var l = n(582128),
    i = n(435558),
    s = n(17928),
    r = n(633075),
    a = n(289173),
    o = n(999291),
    u = n(832163),
    c = n(501838);
function d(e) {
    let { userId: t } = e,
        n = (0, o.Ay)(t),
        d = l.useMemo(() => (n?.userId != null ? [n.userId] : []), [n]),
        h = (0, c.w)({ userIds: d }),
        m = (0, c.mn)({ userIds: d }),
        f = (0, c.tR)(d),
        p = (0, s.yK)([u.A], () => {
            if (n?.widgets == null) return [];
            let e = new Set();
            for (let t of n?.widgets ?? [])
                if (t instanceof a.Yy)
                    t.games.forEach((t) => {
                        let n = u.A.getApplicationIdFromDetectableId(t.gameId);
                        null != n && e.add(n);
                    });
                else if (t instanceof r.R) {
                    let n = u.A.getApplicationIdFromDetectableId(t.applicationId);
                    null != n && e.add(n);
                }
            return Array.from(e).sort();
        }, [n]);
    return l.useMemo(
        () => (n?.application != null ? [] : (0, i.uniq)([...h, ...m, ...f, ...p])),
        [n?.application, h, m, f, p],
    );
}
