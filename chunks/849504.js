n.d(t, { I: () => u });
var r = n(64700),
    i = n(311907),
    a = n(339048),
    s = n(544420),
    o = n(796104),
    l = n(719718),
    c = n(652215);
function u() {
    let e = (0, i.bG)([l.A], () => l.A.getFetchState()),
        t = (0, i.bG)([l.A], () => l.A.getCheckpointData()),
        n = (0, r.useMemo)(
            () => (null != t.applications ? t.applications.applications.map((e) => e.game.id) : []),
            [t.applications],
        );
    return (
        (0, r.useEffect)(() => {
            e === l.$.INIT && ((0, o.nX)(), (0, a.qw)({ entitlementType: c.zF_.FREE_PURCHASE }));
        }, [e]),
        (0, r.useEffect)(() => {
            s.A.getDetectableGamesSupplemental(n);
        }, [n]),
        e
    );
}
