"use strict";
n.d(t, { A: () => d });
var i = n(64700),
    r = n(735438),
    s = n(17928),
    a = n(633075),
    o = n(289173),
    l = n(999291),
    u = n(832163),
    c = n(501838);
function d(e) {
    let { userId: t } = e,
        n = (0, l.Ay)(t),
        d = i.useMemo(() => (n?.userId != null ? [n.userId] : []), [n]),
        _ = (0, c.w)({ userIds: d }),
        f = (0, c.mn)({ userIds: d }),
        h = (0, c.tR)(d),
        p = (0, s.yK)([u.A], () => {
            if (n?.widgets == null) return [];
            let e = new Set();
            for (let t of n?.widgets ?? [])
                if (t instanceof o.Yy)
                    t.games.forEach((t) => {
                        let n = u.A.getApplicationIdFromDetectableId(t.applicationId);
                        null != n && e.add(n);
                    });
                else if (t instanceof a.R) {
                    let n = u.A.getApplicationIdFromDetectableId(t.applicationId);
                    null != n && e.add(n);
                }
            return Array.from(e).sort();
        }, [n]);
    return i.useMemo(
        () => (n?.application != null ? [] : (0, r.uniq)([..._, ...f, ...h, ...p])),
        [n?.application, _, f, h, p],
    );
}
