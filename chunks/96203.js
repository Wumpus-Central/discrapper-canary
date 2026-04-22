i.d(e, { A: () => c });
var r = i(64700),
    s = i(735438),
    n = i(311907),
    l = i(633075),
    a = i(289173),
    o = i(950191),
    u = i(832163),
    d = i(501838);
function c(t) {
    let { userId: e } = t,
        i = (0, o.Ay)(e),
        c = r.useMemo(() => (i?.userId != null ? [i.userId] : []), [i]),
        p = (0, d.w)({ userIds: c }),
        S = (0, d.mn)({ userIds: c }),
        h = (0, d.tR)(c),
        I = (0, n.yK)([u.A], () => {
            if (i?.widgets == null) return [];
            let t = new Set();
            for (let e of i?.widgets ?? [])
                if (e instanceof a.Yy)
                    e.games.forEach((e) => {
                        let i = u.A.getApplicationIdFromDetectableId(e.applicationId);
                        null != i && t.add(i);
                    });
                else if (e instanceof l.R) {
                    let i = u.A.getApplicationIdFromDetectableId(e.applicationId);
                    null != i && t.add(i);
                }
            return Array.from(t).sort();
        }, [i]);
    return r.useMemo(
        () => (i?.application != null ? [] : (0, s.uniq)([...p, ...S, ...h, ...I])),
        [i?.application, p, S, h, I],
    );
}
