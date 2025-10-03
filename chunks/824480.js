r.d(i, { d: () => c });
var e = r(647438),
    n = r(442837),
    a = r(232567),
    s = r(516373),
    l = r(515970),
    d = r(5888);
function c() {
    let t = (0, n.e7)([d.Z], () => d.Z.getFetchState()),
        { sidekicks: i } = (0, n.e7)([d.Z], () => d.Z.getCheckpointData()),
        r = (0, s.D)();
    (0, e.useEffect)(() => {
        t !== d.p.FETCHING && t !== d.p.SUCCESS && null != r && (0, l.p)();
    }, [t, r]),
        (0, e.useEffect)(() => {
            null != i &&
                i.forEach((t) => {
                    let { userId: i } = t;
                    return (0, a.PR)(i);
                });
        }, [i]);
}
