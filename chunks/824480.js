r.d(t, { d: () => c });
var e = r(647438),
    n = r(442837),
    a = r(232567),
    l = r(516373),
    s = r(515970),
    d = r(5888);
function c() {
    let i = (0, n.e7)([d.Z], () => d.Z.getFetchState()),
        { users: t } = (0, n.e7)([d.Z], () => d.Z.getCheckpointData()),
        r = (0, l.D)();
    (0, e.useEffect)(() => {
        i !== d.p.FETCHING && i !== d.p.SUCCESS && null != r && (0, s.p)();
    }, [i, r]),
        (0, e.useEffect)(() => {
            null != t &&
                t.forEach((i) => {
                    let { userId: t } = i;
                    return (0, a.PR)(t);
                });
        }, [t]);
}
