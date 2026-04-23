"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    r = n(735438),
    s = n(17928),
    a = n(633075),
    o = n(289173),
    l = n(999291),
    d = n(832163),
    _ = n(501838);
function u(e) {
    let { userId: t } = e,
        n = (0, l.Ay)(t),
        u = i.useMemo(() => (n?.userId != null ? [n.userId] : []), [n]),
        c = (0, _.w)({ userIds: u }),
        E = (0, _.mn)({ userIds: u }),
        h = (0, _.tR)(u),
        m = (0, s.yK)([d.A], () => {
            if (n?.widgets == null) return [];
            let e = new Set();
            for (let t of n?.widgets ?? [])
                if (t instanceof o.Yy)
                    t.games.forEach((t) => {
                        let n = d.A.getApplicationIdFromDetectableId(t.applicationId);
                        null != n && e.add(n);
                    });
                else if (t instanceof a.R) {
                    let n = d.A.getApplicationIdFromDetectableId(t.applicationId);
                    null != n && e.add(n);
                }
            return Array.from(e).sort();
        }, [n]);
    return i.useMemo(
        () => (n?.application != null ? [] : (0, r.uniq)([...c, ...E, ...h, ...m])),
        [n?.application, c, E, h, m],
    );
}
