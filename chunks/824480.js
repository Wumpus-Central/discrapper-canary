t.d(e, { d: () => d });
var n = t(647438),
    r = t(442837),
    s = t(232567),
    l = t(515970),
    a = t(5888);
function d() {
    let i = (0, r.e7)([a.Z], () => a.Z.getFetchState()),
        { sidekicks: e } = (0, r.e7)([a.Z], () => a.Z.getCheckpointData());
    (0, n.useEffect)(() => {
        i !== a.p.FETCHING && i !== a.p.SUCCESS && (0, l.p)();
    }, [i]),
        (0, n.useEffect)(() => {
            null != e &&
                e.forEach((i) => {
                    let { userId: e } = i;
                    return (0, s.PR)(e);
                });
        }, [e]);
}
