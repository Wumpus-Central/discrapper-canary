n.d(t, { d: () => u });
var i = n(473749),
    r = n(442837),
    l = n(496929),
    s = n(224706),
    a = n(515970),
    o = n(5888),
    c = n(981631);
function u() {
    let e = (0, r.e7)([o.Z], () => o.Z.getFetchState()),
        t = (0, r.e7)([o.Z], () => o.Z.getCheckpointData()),
        n = (0, i.useMemo)(
            () => (null != t.applications ? t.applications.applications.map((e) => e.game.id) : []),
            [t.applications],
        );
    return (
        (0, i.useEffect)(() => {
            e === o.p.INIT && ((0, a.pg)(), (0, l.p0)({ entitlementType: c.qc2.FREE_PURCHASE }));
        }, [e]),
        (0, i.useEffect)(() => {
            s.Z.getDetectableGamesSupplemental(n);
        }, [n]),
        e
    );
}
