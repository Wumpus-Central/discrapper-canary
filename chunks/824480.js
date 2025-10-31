r.d(t, { d: () => l });
var n = r(647438),
    e = r(442837),
    a = r(515970),
    s = r(5888);
function l() {
    let i = (0, e.e7)([s.Z], () => s.Z.getFetchState());
    (0, n.useEffect)(() => {
        i !== s.p.FETCHING && i !== s.p.SUCCESS && (0, a.p)();
    }, [i]);
}
