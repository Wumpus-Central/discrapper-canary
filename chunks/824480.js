i.d(e, { d: () => o });
var n = i(473749),
    r = i(442837),
    l = i(496929),
    a = i(224706),
    s = i(515970),
    d = i(5888),
    c = i(981631);
function o() {
    let t = (0, r.e7)([d.Z], () => d.Z.getFetchState()),
        e = (0, r.e7)([d.Z], () => d.Z.getCheckpointData()),
        i = (0, n.useMemo)(
            () => (null != e.applications ? e.applications.applications.map((t) => t.game.id) : []),
            [e.applications],
        );
    (0, n.useEffect)(() => {
        t === d.p.INIT && ((0, s.pg)(), (0, l.p0)({ entitlementType: c.qc2.FREE_PURCHASE }));
    }, [t]),
        (0, n.useEffect)(() => {
            a.Z.getDetectableGamesSupplemental(i);
        }, [i]);
}
