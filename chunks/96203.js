i.d(e, { A: () => c });
var r = i(64700),
    l = i(735438),
    s = i(17928),
    n = i(633075),
    a = i(289173),
    u = i(999291),
    o = i(832163),
    d = i(501838);
function c(t) {
    let { userId: e } = t,
        i = (0, u.Ay)(e),
        c = r.useMemo(() => (i?.userId != null ? [i.userId] : []), [i]),
        p = (0, d.w)({ userIds: c }),
        h = (0, d.mn)({ userIds: c }),
        S = (0, d.tR)(c),
        I = (0, s.yK)([o.A], () => {
            if (i?.widgets == null) return [];
            let t = new Set();
            for (let e of i?.widgets ?? [])
                if (e instanceof a.Yy)
                    e.games.forEach((e) => {
                        let i = o.A.getApplicationIdFromDetectableId(e.applicationId);
                        null != i && t.add(i);
                    });
                else if (e instanceof n.R) {
                    let i = o.A.getApplicationIdFromDetectableId(e.applicationId);
                    null != i && t.add(i);
                }
            return Array.from(t).sort();
        }, [i]);
    return r.useMemo(
        () => (i?.application != null ? [] : (0, l.uniq)([...p, ...h, ...S, ...I])),
        [i?.application, p, h, S, I],
    );
}
