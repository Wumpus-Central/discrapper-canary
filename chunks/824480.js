n.d(t, { d: () => u });
var r = n(473749),
    i = n(442837),
    a = n(496929),
    o = n(224706),
    s = n(515970),
    l = n(5888),
    c = n(981631);
function u() {
    let e = (0, i.e7)([l.Z], () => l.Z.getFetchState()),
        t = (0, i.e7)([l.Z], () => l.Z.getCheckpointData()),
        n = (0, r.useMemo)(
            () => (null != t.applications ? t.applications.applications.map((e) => e.game.id) : []),
            [t.applications],
        );
    return (
        (0, r.useEffect)(() => {
            e === l.p.INIT && ((0, s.pg)(), (0, a.p0)({ entitlementType: c.qc2.FREE_PURCHASE }));
        }, [e]),
        (0, r.useEffect)(() => {
            o.Z.getDetectableGamesSupplemental(n);
        }, [n]),
        e
    );
}
