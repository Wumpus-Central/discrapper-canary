r.d(e, { A: () => c });
var i = r(582128),
    n = r(435558),
    s = r(17928),
    l = r(633075),
    u = r(289173),
    a = r(999291),
    o = r(832163),
    d = r(501838);
function c(t) {
    let { userId: e } = t,
        r = (0, a.Ay)(e),
        c = i.useMemo(() => (r?.userId != null ? [r.userId] : []), [r]),
        S = (0, d.w)({ userIds: c }),
        I = (0, d.mn)({ userIds: c }),
        p = (0, d.tR)(c),
        h = (0, s.yK)([o.A], () => {
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
        () => (r?.application != null ? [] : (0, n.uniq)([...S, ...I, ...p, ...h])),
        [r?.application, S, I, p, h],
    );
}
