r.d(e, { A: () => d });
var i = r(582128),
    n = r(435558),
    s = r(17928),
    l = r(633075),
    u = r(289173),
    a = r(999291),
    o = r(832163),
    c = r(501838);
function d(t) {
    let { userId: e } = t,
        r = (0, a.Ay)(e),
        d = i.useMemo(() => (r?.userId != null ? [r.userId] : []), [r]),
        S = (0, c.w)({ userIds: d }),
        I = (0, c.mn)({ userIds: d }),
        p = (0, c.tR)(d),
        _ = (0, s.yK)([o.A], () => {
            if (r?.widgets == null) return [];
            let t = new Set();
            for (let e of r?.widgets ?? [])
                if (e instanceof u.Yy)
                    e.games.forEach((e) => {
                        let r = o.A.getApplicationIdFromDetectableId(e.gameId);
                        null != r && t.add(r);
                    });
                else if (e instanceof l.R) {
                    let r = o.A.getApplicationIdFromDetectableId(e.applicationId);
                    null != r && t.add(r);
                }
            return Array.from(t).sort();
        }, [r]);
    return i.useMemo(
        () => (r?.application != null ? [] : (0, n.uniq)([...S, ...I, ...p, ..._])),
        [r?.application, S, I, p, _],
    );
}
