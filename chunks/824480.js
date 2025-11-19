i.d(e, { d: () => d });
var r = i(473749),
    n = i(442837),
    l = i(224706),
    a = i(515970),
    s = i(5888);
function d() {
    let t = (0, n.e7)([s.Z], () => s.Z.getFetchState()),
        e = (0, n.e7)([s.Z], () => s.Z.getCheckpointData()),
        i = (0, r.useMemo)(
            () => (null != e.applications ? e.applications.applications.map((t) => t.game.id) : []),
            [e.applications],
        );
    (0, r.useEffect)(() => {
        t === s.p.INIT && (0, a.p)();
    }, [t]),
        (0, r.useEffect)(() => {
            l.Z.getDetectableGamesSupplemental(i);
        }, [i]);
}
