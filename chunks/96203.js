r.d(e, { A: () => c });
var i = r(582128),
    l = r(435558),
    s = r(17928),
    n = r(633075),
    u = r(289173),
    o = r(999291),
    a = r(832163),
    d = r(501838);
function c(t) {
    let { userId: e } = t,
        r = (0, o.Ay)(e),
        c = i.useMemo(() => (r?.userId != null ? [r.userId] : []), [r]),
        S = (0, d.w)({ userIds: c }),
        I = (0, d.mn)({ userIds: c }),
        A = (0, d.tR)(c),
        _ = (0, s.yK)(
            [a.A],
            () => {
                if (r?.widgets == null) return [];
                let t = new Set();
                for (let e of r?.widgets ?? [])
                    if (e instanceof u.Yy)
                        e.games.forEach((e) => {
                            let r = a.A.getApplicationIdFromDetectableId(e.gameId);
                            null != r && t.add(r);
                        });
                    else if (e instanceof n.R) {
                        let r = a.A.getApplicationIdFromDetectableId(e.applicationId);
                        null != r && t.add(r);
                    }
                return Array.from(t).sort();
            },
            [r],
        );
    return i.useMemo(
        () => (r?.application != null ? [] : (0, l.uniq)([...S, ...I, ...A, ..._])),
        [r?.application, S, I, A, _],
    );
}
