"use strict";
n.d(t, { A: () => d });
var r = n(64700),
    i = n(735438),
    s = n(311907),
    a = n(633075),
    o = n(289173),
    l = n(950191),
    u = n(832163),
    c = n(501838);
function d(e) {
    let { userId: t } = e,
        n = (0, l.Ay)(t),
        d = r.useMemo(() => (n?.userId != null ? [n.userId] : []), [n]),
        _ = (0, c.w)({ userIds: d }),
        f = (0, c.mn)({ userIds: d }),
        p = (0, c.tR)(d),
        h = (0, s.yK)([u.A], () => {
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
    return r.useMemo(
        () => (n?.application != null ? [] : (0, i.uniq)([..._, ...f, ...p, ...h])),
        [n?.application, _, f, p, h],
    );
}
